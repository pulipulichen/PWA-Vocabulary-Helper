(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/VocabularyTranslator"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/VocabularyTranslator/VocabularyTranslator.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyTranslator%2FVocabularyTranslator.vue&lang=yaml":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/VocabularyTranslator/VocabularyTranslator.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyTranslator%2FVocabularyTranslator.vue&lang=yaml ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/VocabularyTranslator/VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/VocabularyTranslator/VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true&"}]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/VocabularyTranslator/VocabularyTranslator.html?vue&type=template&id=0d37a34f&scoped=true&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/VocabularyTranslator/VocabularyTranslator.html?vue&type=template&id=0d37a34f&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { staticClass: "VocabularyTranslator ui grid form" }, [
    _c("div", { staticClass: "equal width row" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "field" }, [
          _c("label", { attrs: { for: "vocabulary_input" } }, [
            _vm._v(_vm._s(_vm.$t("Vocabulary Input")))
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.db.localConfig.vocabularyInput,
                expression: "db.localConfig.vocabularyInput"
              }
            ],
            attrs: { id: "vocabulary_input" },
            domProps: { value: _vm.db.localConfig.vocabularyInput },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.db.localConfig,
                  "vocabularyInput",
                  $event.target.value
                )
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "ui fluid button",
              class: _vm.computedTranslateButtonClassList,
              attrs: { type: "button" },
              on: { click: _vm.startTranslate }
            },
            [
              _vm._v(
                "\n              " +
                  _vm._s(_vm.$t("Translate")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: " field" }, [
          _c("label", { attrs: { for: "vocabulary_output" } }, [
            _vm._v(_vm._s(_vm.$t("Vocabulary Output")))
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.db.localConfig.vocabularyOutput,
                expression: "db.localConfig.vocabularyOutput"
              }
            ],
            attrs: { id: "vocabulary_output" },
            domProps: { value: _vm.db.localConfig.vocabularyOutput },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.db.localConfig,
                  "vocabularyOutput",
                  $event.target.value
                )
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "ui fluid buttons" }, [
            _c(
              "button",
              {
                staticClass: "ui button",
                class: _vm.computedCopyButtonClassList,
                attrs: { type: "button" },
                on: { click: _vm.copy }
              },
              [
                _vm._v(
                  "\n              " + _vm._s(_vm.$t("Copy")) + "\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "ui button",
                class: _vm.computedAddDictionaryButtonClassList,
                attrs: { type: "button" },
                on: { click: _vm.addDictionary }
              },
              [
                _vm._v(
                  "\n              " +
                    _vm._s(_vm.$t("Add to Dictionary")) +
                    "\n            "
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/VocabularyTranslator/VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/VocabularyTranslator/VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/VocabularyTranslator/VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("65259d88", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/VocabularyTranslator/VocabularyTranslator.html?vue&type=template&id=0d37a34f&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/components/VocabularyTranslator/VocabularyTranslator.html?vue&type=template&id=0d37a34f&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_VocabularyTranslator_html_vue_type_template_id_0d37a34f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./VocabularyTranslator.html?vue&type=template&id=0d37a34f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/VocabularyTranslator/VocabularyTranslator.html?vue&type=template&id=0d37a34f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_VocabularyTranslator_html_vue_type_template_id_0d37a34f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_VocabularyTranslator_html_vue_type_template_id_0d37a34f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/VocabularyTranslator/VocabularyTranslator.js?vue&type=script&lang=js&?7c50":
/*!**********************************************************************************************!*\
  !*** ./src/components/VocabularyTranslator/VocabularyTranslator.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VocabularyTranslator_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./VocabularyTranslator.js?vue&type=script&lang=js& */ "./src/components/VocabularyTranslator/VocabularyTranslator.js?vue&type=script&lang=js&?b396");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_VocabularyTranslator_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/VocabularyTranslator/VocabularyTranslator.js?vue&type=script&lang=js&?b396":
/*!**********************************************************************************************!*\
  !*** ./src/components/VocabularyTranslator/VocabularyTranslator.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      return vocabularyList.map(vocabulary => {
        let key = this.buildCacheKey(vocabulary)

        if (this.db.localConfig.queryCache[key]) {
          return {
            vocabulary,
            note: this.db.localConfig.queryCache[key]
          }
        }

        // @TODO 這裡還需要加入字典的查詢

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
      alert('Add dictionary')
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/components/VocabularyTranslator/VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./src/components/VocabularyTranslator/VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyTranslator_less_vue_type_style_index_0_id_0d37a34f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/VocabularyTranslator/VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyTranslator_less_vue_type_style_index_0_id_0d37a34f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyTranslator_less_vue_type_style_index_0_id_0d37a34f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyTranslator_less_vue_type_style_index_0_id_0d37a34f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyTranslator_less_vue_type_style_index_0_id_0d37a34f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyTranslator_less_vue_type_style_index_0_id_0d37a34f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/VocabularyTranslator/VocabularyTranslator.vue":
/*!**********************************************************************!*\
  !*** ./src/components/VocabularyTranslator/VocabularyTranslator.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VocabularyTranslator_html_vue_type_template_id_0d37a34f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VocabularyTranslator.html?vue&type=template&id=0d37a34f&scoped=true& */ "./src/components/VocabularyTranslator/VocabularyTranslator.html?vue&type=template&id=0d37a34f&scoped=true&");
/* harmony import */ var _VocabularyTranslator_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VocabularyTranslator.js?vue&type=script&lang=js& */ "./src/components/VocabularyTranslator/VocabularyTranslator.js?vue&type=script&lang=js&?7c50");
/* empty/unused harmony star reexport *//* harmony import */ var _VocabularyTranslator_less_vue_type_style_index_0_id_0d37a34f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true& */ "./src/components/VocabularyTranslator/VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _VocabularyTranslator_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyTranslator_2FVocabularyTranslator_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VocabularyTranslator.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyTranslator%2FVocabularyTranslator.vue&lang=yaml */ "./src/components/VocabularyTranslator/VocabularyTranslator.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyTranslator%2FVocabularyTranslator.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VocabularyTranslator_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VocabularyTranslator_html_vue_type_template_id_0d37a34f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VocabularyTranslator_html_vue_type_template_id_0d37a34f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d37a34f",
  null
  
)

/* custom blocks */

if (typeof _VocabularyTranslator_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyTranslator_2FVocabularyTranslator_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_VocabularyTranslator_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyTranslator_2FVocabularyTranslator_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/VocabularyTranslator/VocabularyTranslator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/VocabularyTranslator/VocabularyTranslator.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyTranslator%2FVocabularyTranslator.vue&lang=yaml":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/VocabularyTranslator/VocabularyTranslator.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyTranslator%2FVocabularyTranslator.vue&lang=yaml ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyTranslator_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyTranslator_2FVocabularyTranslator_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./VocabularyTranslator.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyTranslator%2FVocabularyTranslator.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/VocabularyTranslator/VocabularyTranslator.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyTranslator%2FVocabularyTranslator.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyTranslator_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyTranslator_2FVocabularyTranslator_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyTranslator_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyTranslator_2FVocabularyTranslator_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyTranslator_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyTranslator_2FVocabularyTranslator_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyTranslator_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyTranslator_2FVocabularyTranslator_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyTranslator_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyTranslator_2FVocabularyTranslator_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=VocabularyTranslator.js.map