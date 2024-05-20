import dayjs from 'dayjs'

let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      isWaitingDownload: false
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    computedButtonClassList () {
      let dictionaryText = this.db.localConfig.dictionaryText

      if (dictionaryText.trim() === '') {
        return 'disabled'
      }
    },
    computedSaveClassList () {
      let dictionaryText = this.db.localConfig.dictionaryText

      if (dictionaryText.trim() === '' || this.isWaitingDownload) {
        return 'disabled'
      }
    },
    dictionaryMap () {
      return this.parseTextToMap(this.db.localConfig.dictionaryText)
    }
  },
  mounted() {
    
  },
  methods: {
    parseTextToMap: function (text) {
      let lines = text.trim().split('\n').filter(line => line.trim() !== '')

      let output = {}

      lines.forEach(line => {
        if (line.indexOf('/') === -1) {
          return false
        }

        if (line.indexOf('/') === -1) {
          return false
        }

        let vocabulary = line.slice(0, line.indexOf('/')).trim()

        output[vocabulary] = line
      })

      return output
    },
    addDictionary () {
      let vocabularyOutput = this.db.localConfig.vocabularyOutput
      if (vocabularyOutput.trim() === '') {
        return false
      }

      let vocabularyOutputMap = this.parseTextToMap(vocabularyOutput)
      // console.log(vocabularyOutputMap)
      let vocabularyOutputList = Object.keys(vocabularyOutputMap)

      if (vocabularyOutputList.length === 0) {
        return false
      }

      let dictionaryMap = this.parseTextToMap(this.db.localConfig.dictionaryText)

      for (let i = 0; i < vocabularyOutputList.length; i++) {
        if (dictionaryMap[vocabularyOutputList[i]]) {
          delete dictionaryMap[vocabularyOutputList[i]]
        }
      }

      let dictionaryText = Object.keys(dictionaryMap).map(v => dictionaryMap[v]).join('\n')
      
      this.db.localConfig.dictionaryText = vocabularyOutput + '\n' + dictionaryText
    },
    sortDictionary () {
      let lines = this.db.localConfig.dictionaryText.trim().split('\n').filter(line => line.trim() !== '')

      lines.sort()

      this.db.localConfig.dictionaryText = lines.join('\n')
    },
    saveDictionary () {
      
      this.isWaitingDownload = true

      let dateString = dayjs().format('YYYYMMDD-HHmmSS')
      let filename = `voc-helper-${dateString}.txt`

      this.db.utils.FileUtils.download(filename, this.db.localConfig.dictionaryText)

      this.isWaitingDownload = false
    }
  }
}

export default app