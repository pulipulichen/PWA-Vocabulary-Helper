let localConfig = {
  lastChanged: null,

  languageInput: 'english',
  languageTransTo: 'chinese',

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