import dayjs from 'dayjs'

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
  },
  computed: {
    computedButtonsClassList () {
      let dictionaryText = this.db.localConfig.dictionaryText

      if (dictionaryText.trim() === '') {
        return 'disabled'
      }
    }
  },
  mounted() {
    
  },
  methods: {
    sortDictionary () {
      let lines = this.db.localConfig.dictionaryText.trim().split('\n').filter(line => line.trim() === '')

      lines.sort()

      this.db.localConfig.dictionaryText = lines.join('\n')
    },
    saveDictionary () {
      
      let dateString = dayjs().format('YYYYMMDD-HHmmSS')
      let filename = `voc-hlper-${dateString}.txt`

      this.db.utils.FileUtils.download(filename, this.db.localConfig.dictionaryText)

    }
  }
}

export default app