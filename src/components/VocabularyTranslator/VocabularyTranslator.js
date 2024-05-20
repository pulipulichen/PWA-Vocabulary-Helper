let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
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
      if (vocabularyInput.trim() === '') {
        classList.push('disabled')
      }
      else if (this.db.localConfig.setVocabularyTime > this.db.localConfig.translateTime) {
        classList.push('positive')
      }

      classList.push('button')

      return classList
    },
    computedAddDictionaryButtonClassList () {
      let classList = ['ui', 'fluid']

      let vocabularyOutput = this.db.localConfig.vocabularyOutput
      if (vocabularyOutput.trim() === '') {
        classList.push('disabled')
      }

      classList.push('button')
      
      return classList
    }
  },
  mounted() {
    
  },
  methods: {
    startTranslate: async function() {
      this.db.localConfig.translateTime = (new Date()).getTime()
    },
    addDictionary: function() {
    }
  }
}

export default app