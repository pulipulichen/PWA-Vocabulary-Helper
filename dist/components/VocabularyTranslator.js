(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(t,e,n){"use strict";n.r(e);function r(){var e=this,t=e.$createElement;return(t=e._self._c||t)("form",{staticClass:"VocabularyTranslator ui grid form"},[t("div",{staticClass:"equal width row"},[t("div",{staticClass:"column"},[t("div",{staticClass:"field"},[t("label",{attrs:{for:"vocabulary_input"}},[e._v(e._s(e.$t("Vocabulary Input")))]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.db.localConfig.vocabularyInput,expression:"db.localConfig.vocabularyInput"}],attrs:{id:"vocabulary_input"},domProps:{value:e.db.localConfig.vocabularyInput},on:{input:function(t){t.target.composing||e.$set(e.db.localConfig,"vocabularyInput",t.target.value)}}}),e._v(" "),t("button",{staticClass:"ui fluid button",class:e.computedTranslateButtonClassList,attrs:{type:"button"},on:{click:e.startTranslate}},[e._v("\n              "+e._s(e.$t("Translate"))+"\n            ")])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:" field"},[t("label",{attrs:{for:"vocabulary_output"}},[e._v(e._s(e.$t("Vocabulary Output")))]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.db.localConfig.vocabularyOutput,expression:"db.localConfig.vocabularyOutput"}],attrs:{id:"vocabulary_output"},domProps:{value:e.db.localConfig.vocabularyOutput},on:{input:function(t){t.target.composing||e.$set(e.db.localConfig,"vocabularyOutput",t.target.value)}}}),e._v(" "),t("div",{staticClass:"ui fluid buttons"},[t("button",{staticClass:"ui button",class:e.computedCopyButtonClassList,attrs:{type:"button"},on:{click:e.copy}},[e._v("\n              "+e._s(e.$t("Copy"))+"\n            ")]),e._v(" "),t("a",{staticClass:"ui button",class:e.computedAddDictionaryButtonClassList,attrs:{href:"https://docs.google.com/presentation/d/1xfNgDLuYfHPbs0IEzQmQfE9cQ5q9O_sGfWTQWvv1-Hs/edit#slide=id.g1580e701989_0_0",target:"slide"}},[e._v("\n              "+e._s(e.$t("Slide"))+"\n          ")]),e._v(" "),t("button",{staticClass:"ui button",class:e.computedAddDictionaryButtonClassList,attrs:{type:"button"},on:{click:e.addDictionary}},[e._v("\n              "+e._s(e.$t("Add to Dictionary"))+"\n            ")])])])])])])}r._withStripped=!0;var o=n(1),L=n.n(o),o=n(89),i=n.n(o),o=n(0);function E(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */E=function(){return a};var a={},t=Object.prototype,c=t.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o,i,a,u,e=e&&e.prototype instanceof p?e:p,e=Object.create(e.prototype),r=new C(r||[]);return s(e,"_invoke",{value:(o=t,i=n,a=r,u="suspendedStart",function(t,e){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===t)throw e;return x()}for(a.method=t,a.arg=e;;){var n=a.delegate;if(n){n=function t(e,n){var r=n.method,o=e.iterator[r];if(void 0===o)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=void 0,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;r=l(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;o=r.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}(n,a);if(n){if(n===f)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===u)throw u="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u="executing";n=l(o,i,a);if("normal"===n.type){if(u=a.done?"completed":"suspendedYield",n.arg===f)continue;return{value:n.arg,done:a.done}}"throw"===n.type&&(u="completed",a.method="throw",a.arg=n.arg)}})}),e}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=u;var f={};function p(){}function h(){}function d(){}var e={},y=(i(e,r,function(){return this}),Object.getPrototypeOf),y=y&&y(y(_([]))),v=(y&&y!==t&&c.call(y,r)&&(e=y),d.prototype=p.prototype=Object.create(e));function b(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function g(a,u){var e;s(this,"_invoke",{value:function(n,r){function t(){return new u(function(t,e){!function e(t,n,r,o){var i,t=l(a[t],a,n);if("throw"!==t.type)return(n=(i=t.arg).value)&&"object"==L()(n)&&c.call(n,"__await")?u.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):u.resolve(n).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)});o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}})}function m(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(m,this),this.reset(!0)}function _(e){if(e){var n,t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return n=-1,(t=function t(){for(;++n<e.length;)if(c.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:x}}function x(){return{value:void 0,done:!0}}return s(v,"constructor",{value:h.prototype=d,configurable:!0}),s(d,"constructor",{value:h,configurable:!0}),h.displayName=i(d,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i(t,o,"GeneratorFunction")),t.prototype=Object.create(v),t},a.awrap=function(t){return{__await:t}},b(g.prototype),i(g.prototype,n,function(){return this}),a.AsyncIterator=g,a.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var i=new g(u(t,e,n,r),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(v),i(v,o,"Generator"),i(v,r,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=_,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&c.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=c.call(o,"catchLoc"),u=c.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&c.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(n=o.completion).type&&(r=n.arg,w(o)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},a}var a,o={props:["db"],components:{},data:function(){return this.$i18n.locale=this.db.localConfig.locale,{isWaiting:!1}},watch:{"db.localConfig.locale":function(){this.$i18n.locale=this.db.localConfig.locale},"db.localConfig.vocabularyInput":function(){this.db.localConfig.setVocabularyTime=(new Date).getTime()}},computed:{computedTranslateButtonClassList:function(){var t=["ui","fluid"];return""===this.db.localConfig.vocabularyInput.trim()||!0===this.isWaiting?t.push("disabled"):this.db.localConfig.setVocabularyTime>this.db.localConfig.translateTime&&t.push("positive"),t.push("button"),t},computedAddDictionaryButtonClassList:function(){var t=["ui"],e=this.db.localConfig.vocabularyOutput;return e.trim&&""===e.trim()&&t.push("disabled"),t.push("button"),t},computedCopyButtonClassList:function(){var t=["ui"],e=this.db.localConfig.vocabularyOutput;return e.trim&&""===e.trim()?t.push("disabled"):!1===this.db.config.vocabularyOutputCopied&&t.push("positive"),t.push("button"),t}},mounted:function(){},methods:{startTranslate:(a=n.n(o)()(E().mark(function t(){var e,n,r,o;return E().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isWaiting=!0,e=this.parseVocabularies(),e=this.checkCachedVocabularies(e),0<(r=this.parseVocabulariesToQuery(e)).length)return r=this.db.config.appsScriptsURL+"?v="+encodeURI(r.join(";"))+"&ls="+this.db.localConfig.languageSource+"&lt="+this.db.localConfig.languageTarget,t.next=9,this.db.utils.AxiosUtils.get(r);t.next=13;break;case 9:r=t.sent,n=this.cacheQueryResult(r.output,e),t.next=14;break;case 13:n=e;case 14:o=this.flatVocabularyCachedQueried(n),this.db.localConfig.vocabularyOutput=o.join("\n"),this.db.localConfig.translateTime=(new Date).getTime(),this.isWaiting=!1,this.db.config.vocabularyOutputCopied=!1;case 19:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),parseVocabularies:function(){var t=this.db.localConfig.vocabularyInput.trim().split("\n").filter(function(t){return""!==t.trim()}).map(function(t){return t.trim()});return i()(new Set(t))},buildCacheKey:function(t){return t+";"+this.db.localConfig.languageSource+";"+this.db.localConfig.languageTarget},checkCachedVocabularies:function(t){var n=this,r=this.$parent.$refs.VocabularyDictionary.dictionaryMap;return t.map(function(t){var e;return r[t]?{vocabulary:t,note:r[t]}:(e=n.buildCacheKey(t),n.db.config.queryCache[e]?{vocabulary:t,note:n.db.config.queryCache[e]}:{vocabulary:t,note:null})})},parseVocabulariesToQuery:function(t){return t.filter(function(t){return null===t.note}).map(function(t){return t.vocabulary})},cacheQueryResult:function(t,e){var n=this,r={};t.split("\n").forEach(function(t){if(-1===t.indexOf("/"))return!1;var e=t.slice(0,t.indexOf("/")).trim(),e=(r[e]=t,n.buildCacheKey(e));n.db.config.queryCache[e]=t});for(var o,i=0;i<e.length;i++)e[i].note||(o=e[i].vocabulary,e[i].note=r[o]);return e},flatVocabularyCachedQueried:function(t){return t.map(function(t){return t.note})},copy:function(){this.db.utils.ClipboardUtils.copyPlainString(this.db.localConfig.vocabularyOutput),this.db.config.vocabularyOutputCopied=!0},addDictionary:function(){this.$parent.$refs.VocabularyDictionary.addDictionary()}}},u=(n(93),n(15)),n=n(95),u=Object(u.a)(o,r,[],!1,null,"0d37a34f",null);"function"==typeof n.default&&Object(n.default)(u),u.options.__file="src/components/VocabularyTranslator/VocabularyTranslator.vue",e.default=u.exports},62:function(t,e,n){var r=n(94),o=("string"==typeof r&&(r=[[t.i,r,""]]),{});o.insert="head",o.singleton=!1,n(9)(r,o);r.locals&&(t.exports=r.locals)},63:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}'),delete t.options._Ctor}},89:function(t,e,n){var r=n(90),o=n(91),i=n(92);t.exports=function(t){return r(t)||o(t)||i()}},90:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},91:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},92:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},93:function(t,e,n){"use strict";var r=n(62);n.n(r).a},94:function(t,e,n){(t.exports=n(8)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"VocabularyTranslator.less?vue&type=style&index=0&id=0d37a34f&lang=less&scoped=true&"}])},95:function(t,e,n){"use strict";var r=n(63);e.default=n.n(r).a}}]);
//# sourceMappingURL=VocabularyTranslator.js.map