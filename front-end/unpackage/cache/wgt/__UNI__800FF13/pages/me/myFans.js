!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=173)}({0:function(e,t){e.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(e,t,r){"use strict";function n(e,t,r,n,o,a,i,s,l,c){var u,f="function"==typeof e?e.options:e;if(l){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in l)p.call(l,d)&&!p.call(f.components,d)&&(f.components[d]=l[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),t&&(f.render=t,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(f.functional){f._injectStyles=u;var g=f.render;f.render=function(e,t){return u.call(t),g(e,t)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,u):[u]}return{exports:e,options:f}}r.d(t,"a",(function(){return n}))},121:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("view",{staticClass:["page"]},[r("view",{staticClass:["line"]}),r("scroll-view",{attrs:{scrollY:"true"},on:{scrolltolower:function(t){e.pagingFansList()}}},e._l(e.fansList,(function(t,n){return r("view",{key:n,staticClass:["user-wrapper"]},[r("view",{staticClass:["user-info"]},[r("u-image",{staticClass:["face"],staticStyle:{alignSelf:"center"},attrs:{src:t.face}}),r("u-text",{staticClass:["user-name"],staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.nickname))])],1),t.friend?e._e():r("view",{staticClass:["operator-wrapper"],staticStyle:{width:"140rpx",height:"60rpx",display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ef274d",borderRadius:"10px",alignSelf:"center"}},[r("u-text",{staticClass:["operator-words"],staticStyle:{alignSelf:"center",color:"#FFFFFF"},appendAsTree:!0,attrs:{append:"tree"},on:{click:function(r){e.followMe(t.fanId)}}},[e._v("\u56de\u7c89")])]),t.friend?r("view",{staticClass:["operator-wrapper"],staticStyle:{width:"140rpx",height:"60rpx",display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ef274d",borderRadius:"10px",alignSelf:"center",borderWidth:"1px",borderColor:"#ef274d",backgroundColor:"#181b27"}},[r("u-text",{staticClass:["operator-words"],staticStyle:{alignSelf:"center",color:"#ef274d"},appendAsTree:!0,attrs:{append:"tree"},on:{click:function(r){e.cancelFollow(t.fanId)}}},[e._v("\u4e92\u5173")])]):e._e()])})),0)],1)])},o=[]},148:function(e,t,r){"use strict";r.r(t);var n=r(53),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t.default=o.a},173:function(e,t,r){"use strict";r.r(t);r(3);var n=r(25);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}),n.default.mpType="page",n.default.route="pages/me/myFans",n.default.el="#root",new Vue(n.default)},2:function(e,t,r){"use strict";function n(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function a(e,t){switch(n(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console[e].apply(console,r)},t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=t.shift();if(o())return t.push(t.pop().replace("at ","uni-app:///")),console[i].apply(console,t);var s=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,a)+"---END:JSON---"}catch(r){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var r=n(e).toUpperCase();e="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+e+"---END:"+r+"---":String(e)}return e})),l="";if(s.length>1){var c=s.pop();l=s.join("---COMMA---"),0===c.indexOf(" at ")?l+=c:l+="---COMMA---"+c}else l=s[0];console[i](l)}},25:function(e,t,r){"use strict";var n=r(121),o=r(51),a=r(1);var i=Object(a.a)(o.default,n.b,n.c,!1,null,null,"99ee40d2",!1,n.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(148).default,this.options.style):Object.assign(this.options.style,r(148).default)}).call(i),t.default=i.exports},3:function(e,t,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(4).default,Vue.prototype.__$appStyle__)},4:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t.default=o.a},51:function(e,t,r){"use strict";var n=r(52),o=r.n(n);t.default=o.a},52:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;uni.getSystemInfoSync();var r=getApp(),n={components:{},data:function(){return{screenHeight:0,page:0,totalPage:0,fansList:[{fanId:"1001",face:"../../static/face/face-arrow-1.png",nickname:"\u98ce\u95f4\u5f71\u6708",friend:!1},{fanId:"1002",face:"../../static/face/face-arrow-1.png",nickname:"\u6155\u8bfe\u7f51",friend:!0},{fanId:"1003",face:"../../static/face/face-arrow-1.png",nickname:"\u98ce\u95f4\u5f71\u6708",friend:!1}]}},onLoad:function(){this.queryMyFansList(0)},methods:{reFreshList:function(t,r){var n=this.fansList;e("log",r," at pages/me/myFans.nvue:144");for(var o=0;o<n.length;o++){var a=n[o];a.fanId==t&&(a.friend=r,n.splice(o,1,a))}this.fansList=n,e("log",this.fansList," at pages/me/myFans.nvue:153")},cancelFollow:function(t){var n=this,o=getApp().getUserInfoSession().id,a=r.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:o,headerUserToken:r.getUserSessionToken()},url:a+"/fans/cancel?myId="+o+"&vlogerId="+t,success:function(r){e("log",r," at pages/me/myFans.nvue:167"),200==r.data.status?n.reFreshList(t,!1):uni.showToast({title:r.data.msg,icon:"none",duration:3e3})}})},followMe:function(t){var n=this,o=getApp().getUserInfoSession().id,a=r.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:o,headerUserToken:r.getUserSessionToken()},url:a+"/fans/follow?myId="+o+"&vlogerId="+t,success:function(r){e("log",r," at pages/me/myFans.nvue:195"),200==r.data.status?n.reFreshList(t,!0):uni.showToast({title:r.data.msg,icon:"none",duration:3e3})}})},queryMyFansList:function(t){var n=this;0==t&&(n.fansList=[]),t+=1;var o=getApp().getUserInfoSession().id,a=r.globalData.serverUrl;uni.request({method:"GET",header:{headerUserId:o,headerUserToken:r.getUserSessionToken()},url:a+"/fans/queryMyFans?myId="+o+"&page="+t+"&pageSize=10",success:function(r){if(e("log",r," at pages/me/myFans.nvue:228"),200==r.data.status){var o=r.data.data.rows,a=r.data.data.total;n.fansList=n.fansList.concat(o),n.page=t,n.totalPage=a}}})},pagingFansList:function(){this.page>=this.totalPage||this.queryMyFansList(this.page)}}};t.default=n}).call(this,r(2).default)},53:function(e,t){e.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#181b27",0,0,0]}},".line":{"":{height:["1rpx",0,0,1],backgroundColor:["#393a41",0,0,1],width:["750rpx",0,0,1]}},".place-box":{"":{backgroundColor:["#4a4c52",0,0,2]}},".place-box-touched":{"":{backgroundColor:["#6d6b6b",0,0,3]}},".right-arrow":{"":{width:["32rpx",0,0,4],height:["32rpx",0,0,4],marginLeft:["20rpx",0,0,4]}},".user-wrapper":{"":{paddingLeft:["30rpx",0,0,5],paddingRight:["30rpx",0,0,5],width:["750rpx",0,0,5],height:["120rpx",0,0,5],display:["flex",0,0,5],flexDirection:["row",0,0,5],justifyContent:["space-between",0,0,5],marginTop:["20rpx",0,0,5],marginBottom:["20rpx",0,0,5]}},".user-name":{"":{color:["#FFFFFF",0,0,6],fontSize:["15",0,0,6],marginLeft:["20rpx",0,0,6]}},".operator-wrapper":{"":{width:["140rpx",0,0,7],height:["60rpx",0,0,7],display:["flex",0,0,7],flexDirection:["row",0,0,7],justifyContent:["center",0,0,7],backgroundColor:["#ef274d",0,0,7],borderRadius:["10",0,0,7]}},".operator-words":{"":{color:["#FFFFFF",0,0,8],fontSize:["14",0,0,8]}},".user-info":{"":{display:["flex",0,0,9],flexDirection:["row",0,0,9],justifyContent:["flex-start",0,0,9]}},".face":{"":{width:["110rpx",0,0,10],height:["110rpx",0,0,10],borderRadius:["100rpx",0,0,10],borderWidth:["1",0,0,10],borderColor:["#F1F1F1",0,0,10]}},"@VERSION":2}}});