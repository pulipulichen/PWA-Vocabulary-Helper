(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/VocabularyDictionary"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/VocabularyDictionary/VocabularyDictionary.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyDictionary%2FVocabularyDictionary.vue&lang=yaml":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/VocabularyDictionary/VocabularyDictionary.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyDictionary%2FVocabularyDictionary.vue&lang=yaml ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/VocabularyDictionary/VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/VocabularyDictionary/VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true&"}]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/VocabularyDictionary/VocabularyDictionary.html?vue&type=template&id=66cd08cf&scoped=true&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/VocabularyDictionary/VocabularyDictionary.html?vue&type=template&id=66cd08cf&scoped=true& ***!
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
  return _c("form", { staticClass: "LanguageSelector ui grid form" }, [
    _c("div", { staticClass: "equal width row" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "field" }, [
          _c("label", { attrs: { for: "dictionary" } }, [
            _vm._v(_vm._s(_vm.$t("Dictionary")))
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.db.localConfig.dictionaryText,
                expression: "db.localConfig.dictionaryText"
              }
            ],
            attrs: { id: "dictionary" },
            domProps: { value: _vm.db.localConfig.dictionaryText },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.db.localConfig,
                  "dictionaryText",
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
                class: _vm.computedButtonClassList,
                attrs: { type: "button" },
                on: { click: _vm.sortDictionary }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("Sort")) +
                    "\n              "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "ui button",
                class: _vm.computedSaveClassList,
                attrs: { type: "button" },
                on: { click: _vm.saveDictionary }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("Save")) +
                    "\n              "
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/VocabularyDictionary/VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/VocabularyDictionary/VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/VocabularyDictionary/VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d76e4f20", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/VocabularyDictionary/VocabularyDictionary.html?vue&type=template&id=66cd08cf&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/components/VocabularyDictionary/VocabularyDictionary.html?vue&type=template&id=66cd08cf&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_VocabularyDictionary_html_vue_type_template_id_66cd08cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./VocabularyDictionary.html?vue&type=template&id=66cd08cf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/VocabularyDictionary/VocabularyDictionary.html?vue&type=template&id=66cd08cf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_VocabularyDictionary_html_vue_type_template_id_66cd08cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_VocabularyDictionary_html_vue_type_template_id_66cd08cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/VocabularyDictionary/VocabularyDictionary.js?vue&type=script&lang=js&?85a7":
/*!**********************************************************************************************!*\
  !*** ./src/components/VocabularyDictionary/VocabularyDictionary.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VocabularyDictionary_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./VocabularyDictionary.js?vue&type=script&lang=js& */ "./src/components/VocabularyDictionary/VocabularyDictionary.js?vue&type=script&lang=js&?cfa1");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_VocabularyDictionary_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/VocabularyDictionary/VocabularyDictionary.js?vue&type=script&lang=js&?cfa1":
/*!**********************************************************************************************!*\
  !*** ./src/components/VocabularyDictionary/VocabularyDictionary.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


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

      let dateString = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYYMMDD-HHmmSS')
      let filename = `voc-hlper-${dateString}.txt`

      this.db.utils.FileUtils.download(filename, this.db.localConfig.dictionaryText)

      this.isWaitingDownload = false
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/components/VocabularyDictionary/VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./src/components/VocabularyDictionary/VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyDictionary_less_vue_type_style_index_0_id_66cd08cf_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/VocabularyDictionary/VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyDictionary_less_vue_type_style_index_0_id_66cd08cf_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyDictionary_less_vue_type_style_index_0_id_66cd08cf_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyDictionary_less_vue_type_style_index_0_id_66cd08cf_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyDictionary_less_vue_type_style_index_0_id_66cd08cf_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_VocabularyDictionary_less_vue_type_style_index_0_id_66cd08cf_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/VocabularyDictionary/VocabularyDictionary.vue":
/*!**********************************************************************!*\
  !*** ./src/components/VocabularyDictionary/VocabularyDictionary.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VocabularyDictionary_html_vue_type_template_id_66cd08cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VocabularyDictionary.html?vue&type=template&id=66cd08cf&scoped=true& */ "./src/components/VocabularyDictionary/VocabularyDictionary.html?vue&type=template&id=66cd08cf&scoped=true&");
/* harmony import */ var _VocabularyDictionary_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VocabularyDictionary.js?vue&type=script&lang=js& */ "./src/components/VocabularyDictionary/VocabularyDictionary.js?vue&type=script&lang=js&?85a7");
/* empty/unused harmony star reexport *//* harmony import */ var _VocabularyDictionary_less_vue_type_style_index_0_id_66cd08cf_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true& */ "./src/components/VocabularyDictionary/VocabularyDictionary.less?vue&type=style&index=0&id=66cd08cf&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _VocabularyDictionary_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyDictionary_2FVocabularyDictionary_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VocabularyDictionary.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyDictionary%2FVocabularyDictionary.vue&lang=yaml */ "./src/components/VocabularyDictionary/VocabularyDictionary.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyDictionary%2FVocabularyDictionary.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VocabularyDictionary_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VocabularyDictionary_html_vue_type_template_id_66cd08cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VocabularyDictionary_html_vue_type_template_id_66cd08cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66cd08cf",
  null
  
)

/* custom blocks */

if (typeof _VocabularyDictionary_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyDictionary_2FVocabularyDictionary_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_VocabularyDictionary_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyDictionary_2FVocabularyDictionary_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/VocabularyDictionary/VocabularyDictionary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/VocabularyDictionary/VocabularyDictionary.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyDictionary%2FVocabularyDictionary.vue&lang=yaml":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/VocabularyDictionary/VocabularyDictionary.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyDictionary%2FVocabularyDictionary.vue&lang=yaml ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyDictionary_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyDictionary_2FVocabularyDictionary_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./VocabularyDictionary.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyDictionary%2FVocabularyDictionary.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/VocabularyDictionary/VocabularyDictionary.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FVocabularyDictionary%2FVocabularyDictionary.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyDictionary_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyDictionary_2FVocabularyDictionary_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyDictionary_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyDictionary_2FVocabularyDictionary_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyDictionary_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyDictionary_2FVocabularyDictionary_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyDictionary_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyDictionary_2FVocabularyDictionary_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_VocabularyDictionary_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FVocabularyDictionary_2FVocabularyDictionary_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=VocabularyDictionary.js.map