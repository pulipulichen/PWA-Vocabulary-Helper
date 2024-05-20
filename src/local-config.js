let localConfig = {
  lastChanged: null,

  languageSource: 'english',
  languageTarget: 'chinese-traditional',
  queryCache: {},

  vocabularyInput: `hello`,
  vocabularyOutput: ``,

  setVocabularyTime: 0,
  translateTime: 0,

  dictionaryText: ``,
}

// ----------------------------------------------------------------

let localConfigEnv = {
  locale: 'zh-TW'
}

for (let name in localConfigEnv) {
  localConfig[name] = localConfigEnv[name]
}

export default localConfig