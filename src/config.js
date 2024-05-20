let appName = 'PWA-Online-Voting'

let config = {
  version: '20240520-1716',

  inited: false,

  appsScriptsURL: `https://script.google.com/macros/s/AKfycbygzXwyB7dn0Zffaa3MT5-Ze_xFLB4UvdzIf2Els02cViSZZYw-KAEBr-U2rd9KZkvh/exec`,

  languageInputList: [
    'english'
  ],

  languageTransToList: [
    'chinese'
  ],
}

// ----------------------------------------------------------------

let configEnv = {
  appName,
  appNameID: appName,
  debug: {
    ErrorHandler: {
      verbose: true
    },
    enableRestore: true,
  },
  
  inited: false,
  urlGithub: `https://github.com/pulipulichen/${appName}/`,
  urlIssue: `https://github.com/pulipulichen/${appName}/issues/new`,
  
}

for (let name in configEnv) {
  config[name] = configEnv[name]
}

import styleConfig from './styles/style.config.js'
config.styleConfig = styleConfig

//import readingConfig from './../config/reading.js'
//config.readingConfig = readingConfig

import productionConfig from './config.production.js'
if (process.env.NODE_ENV === 'production') {
  for (let name in productionConfig) {
    config[name] = productionConfig[name]
  }
}

export default config