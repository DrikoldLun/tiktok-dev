!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=176)}({0:function(t,e){t.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(t,e,n){"use strict";function o(t,e,n,o,r,i,c,a,u,s){var l,f="function"==typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(f.components,d)&&(f.components[d]=u[d])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(f.mixins||(f.mixins=[])).push(s)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(f.functional){f._injectStyles=l;var _=f.render;f.render=function(t,e){return l.call(e),_(t,e)}}else{var y=f.beforeCreate;f.beforeCreate=y?[].concat(y,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return o}))},124:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["page"]},[n("view",{staticClass:["line"]}),n("scroll-view",{attrs:{scrollY:"true"}},t._l(t.provinceList,(function(e,o){return n("view",{key:o,class:{active:o==t.activeIndex},staticStyle:{paddingLeft:"30rpx",paddingRight:"30rpx",width:"750rpx",height:"120rpx",display:"flex",flexDirection:"row",justifyContent:"space-between"},on:{click:function(n){t.chooseLocation(e.province_id,e.province_name)},touchstart:function(e){t.touchstartLocation(o)},touchend:function(e){t.touchendLocation()}}},[n("u-text",{staticStyle:{color:"#FFFFFF",alignSelf:"center",fontSize:"15px"},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(e.province_name))]),n("view",{staticStyle:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignSelf:"center"}},[n("u-image",{staticClass:["right-arrow"],staticStyle:{alignSelf:"center"},attrs:{src:"/static/images/icon-right-arrow2.png"}})],1)])})),0)],1)])},r=[]},151:function(t,e,n){"use strict";n.r(e);var o=n(62),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e.default=r.a},176:function(t,e,n){"use strict";n.r(e);n(2);var o=n(28);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),o.default.mpType="page",o.default.route="pages/me/chooseProvince",o.default.el="#root",new Vue(o.default)},2:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(3).default,Vue.prototype.__$appStyle__)},28:function(t,e,n){"use strict";var o=n(124),r=n(60),i=n(1);var c=Object(i.a)(r.default,o.b,o.c,!1,null,null,"0cfd1ff7",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(151).default,this.options.style):Object.assign(this.options.style,n(151).default)}).call(c),e.default=c.exports},3:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e.default=r.a},60:function(t,e,n){"use strict";var o=n(61),r=n.n(o);e.default=r.a},61:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={components:{},data:function(){return{placeTouched:!1,provinceList:[],activeIndex:-1}},onLoad:function(){var t=getApp().globalData.provinceList;this.provinceList=t},methods:{updateBirthday:function(){},touchstartLocation:function(t){this.activeIndex=t},touchendLocation:function(){this.activeIndex=-1},chooseLocation:function(t,e){uni.setStorageSync("myLocationProvince",e),uni.navigateTo({url:"chooseCity?provinceId="+t})}}};e.default=o},62:function(t,e){t.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#181b27",0,0,0]}},".line":{"":{height:["1rpx",0,0,1],backgroundColor:["#393a41",0,0,1],width:["750rpx",0,0,1]}},".place-box":{"":{backgroundColor:["#4a4c52",0,0,2]}},".place-box-touched":{"":{backgroundColor:["#6d6b6b",0,0,3]}},".right-arrow":{"":{width:["32rpx",0,0,4],height:["32rpx",0,0,4],marginLeft:["20rpx",0,0,4]}},".active":{"":{backgroundColor:["#4a4c52",0,0,6]}},"@VERSION":2}}});