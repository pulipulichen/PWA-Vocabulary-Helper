let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      isWaiting: false
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
    'db.localConfig.vocabularyInput'() {
      this.db.localConfig.setVocabularyTime = (new Date()).getTime()
    },
  },
  computed: {
    computedTranslateButtonClassList () {
      let classList = ['ui', 'fluid']

      let vocabularyInput = this.db.localConfig.vocabularyInput
      if (vocabularyInput.trim() === '' || this.isWaiting === true) {
        classList.push('disabled') 
      }
      else if (this.db.localConfig.setVocabularyTime > this.db.localConfig.translateTime) {
        classList.push('positive')
      }

      classList.push('button')

      return classList
    },
    computedAddDictionaryButtonClassList () {
      let classList = ['ui']

      let vocabularyOutput = this.db.localConfig.vocabularyOutput
      if (vocabularyOutput.trim && vocabularyOutput.trim() === '') {
        classList.push('disabled')
      }

      classList.push('button')
      
      return classList
    },
    computedCopyButtonClassList () {
      let classList = ['ui']

      let vocabularyOutput = this.db.localConfig.vocabularyOutput
      if (vocabularyOutput.trim && vocabularyOutput.trim() === '') {
        classList.push('disabled')
      }
      else if (this.db.config.vocabularyOutputCopied === false) {
        classList.push('positive')
      }

      classList.push('button')
      
      return classList
    }
  },
  mounted() {
    
  },
  methods: {
    startTranslate: async function() {
      this.isWaiting = true

      // =================================================================

      let vocabularyList = this.parseVocabularies()

      let vocabularyCached = this.checkCachedVocabularies(vocabularyList)

      let vocabulariesToQuery = this.parseVocabulariesToQuery(vocabularyCached)
      // console.log(vocabulariesToQuery)

      // =================================================================

      let vocabularyCachedQueried
      if (vocabulariesToQuery.length > 0) {
        let url = this.db.config.appsScriptsURL
        url = url + '?v=' + encodeURI(vocabulariesToQuery.join(';')) +
          '&ls=' + this.db.localConfig.languageSource +
          '&lt=' + this.db.localConfig.languageTarget

        // console.log(url)
        // return false
        let result = await this.db.utils.AxiosUtils.get(url)

        // =================================================================

        vocabularyCachedQueried = this.cacheQueryResult(result.output, vocabularyCached)
      }
      else {
        vocabularyCachedQueried = vocabularyCached
      }

      let vocabularyOutput = this.flatVocabularyCachedQueried(vocabularyCachedQueried)

      // =================================================================
      // console.log(vocabularyOutput)
      this.db.localConfig.vocabularyOutput = vocabularyOutput.join('\n')
        

      // =================================================================
      
      this.db.localConfig.translateTime = (new Date()).getTime()
      this.isWaiting = false
      this.db.config.vocabularyOutputCopied = false
    },
    parseVocabularies: function () {
      let output =  this.db.localConfig.vocabularyInput.trim().split('\n').filter((line) => line.trim() !== '').map(l => l.trim())
      return [...new Set(output)]
    },
    buildCacheKey: function (vocabulary) {
      return vocabulary + ';' + this.db.localConfig.languageSource + ';' + this.db.localConfig.languageTarget
    },
    checkCachedVocabularies: function (vocabularyList) {
      let dictionaryMap = this.$parent.$refs.VocabularyDictionary.dictionaryMap

      return vocabularyList.map(vocabulary => {
        let key = this.buildCacheKey(vocabulary)

        if (this.db.localConfig.queryCache[key]) {
          return {
            vocabulary,
            note: this.db.localConfig.queryCache[key]
          }
        }

        // @TODO 這裡還需要加入字典的查詢
        if (dictionaryMap[vocabulary]) {
          return {
            vocabulary,
            note: dictionaryMap[vocabulary],
          }
        }

        return {
          vocabulary,
          note: null
        }
      })
    },
    parseVocabulariesToQuery: function (vocabularyCached) {
      return vocabularyCached.filter(v => v.note === null).map(v => v.vocabulary)
    },
    cacheQueryResult: function (result, vocabularyCached) {
      let resultMap = {}
      result.split('\n').forEach(line => {
        if (line.indexOf('/') === -1) {
          return false
        }

        let vocabulary = line.slice(0, line.indexOf('/')).trim()

        resultMap[vocabulary] = line

        let key = this.buildCacheKey(vocabulary)
        this.db.localConfig.queryCache[key] = line
      })

      for (let i = 0; i < vocabularyCached.length; i++) {
        if (vocabularyCached[i].note) {
          continue
        }

        let {vocabulary} = vocabularyCached[i]
        vocabularyCached[i].note = resultMap[vocabulary]
      }

      return vocabularyCached
    },
    flatVocabularyCachedQueried: function (vocabularyCachedQueried) {
      return vocabularyCachedQueried.map(({note}) => note)
    },
    copy: function () {
      this.db.utils.ClipboardUtils.copyPlainString(this.db.localConfig.vocabularyOutput)
      this.db.config.vocabularyOutputCopied = true
    },
    addDictionary: function() {
      this.$parent.$refs.VocabularyDictionary.addDictionary()
    }
  }
}

export default app