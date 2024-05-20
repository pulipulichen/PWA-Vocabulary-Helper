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
      let classList = []

      let vocabularyInput = this.db.localConfig.vocabularyInput
      if (vocabularyInput.trim() === '') {
        classList.push('disabled')
        return classList
      }
      else if (this.db.localConfig.setVocabularyTime > this.db.localConfig.translateTime) {
        classList.push('disabled')
      }

      return classList
    },
    computedAddDictionaryButtonClassList () {
      let classList = []

      let vocabularyOutput = this.db.localConfig.vocabularyOutput
      if (vocabularyOutput.trim() === '') {
        classList.push('disabled')
        return classList
      }
      
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