!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=186)}({0:function(e,t){e.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(e,t,s){"use strict";function n(e,t,s,n,o,r,i,a,l,c){var u,p="function"==typeof e?e.options:e;if(l){p.components||(p.components={});var f=Object.prototype.hasOwnProperty;for(var d in l)f.call(l,d)&&!f.call(p.components,d)&&(p.components[d]=l[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(p.mixins||(p.mixins=[])).push(c)),t&&(p.render=t,p.staticRenderFns=s,p._compiled=!0),n&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},p._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(p.functional){p._injectStyles=u;var g=p.render;p.render=function(e,t){return u.call(t),g(e,t)}}else{var m=p.beforeCreate;p.beforeCreate=m?[].concat(m,u):[u]}return{exports:e,options:p}}s.d(t,"a",(function(){return n}))},134:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return o})),s.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[s("view",{staticClass:["page"]},[s("view",{staticClass:["line"]}),s("scroll-view",{attrs:{scrollY:"true"},on:{scrolltolower:e.loadMore}},e._l(e.msgList,(function(t,n){return s("block",{key:n},[1==t.msgType?s("view",{staticClass:["msg-item-box"]},[s("view",{staticClass:["msg-item-left"]},[s("u-image",{staticClass:["user-face"],staticStyle:{alignSelf:"center"},attrs:{mode:"scaleToFill",src:t.fromFace}}),s("view",{staticClass:["msg-item-middle"]},[s("u-text",{staticClass:["user-nickname"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.fromNickname))]),s("u-text",{staticClass:["msg-content"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5173\u6ce8\u4e86\u4f60    "+e._s(e.getGraceDateBeforeNow(t.createTime)))])])],1),t.msgContent.isFriend?e._e():s("view",{staticClass:["msg-item-right"],staticStyle:{backgroundColor:"#ef274d",alignSelf:"center"},on:{click:function(s){e.followMe(t.id,t.fromUserId)}}},[s("u-text",{staticClass:["op-fans-btn"],staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u56de\u7c89")])]),t.msgContent.isFriend?s("view",{staticClass:["msg-item-right"],staticStyle:{backgroundColor:"#545456",alignSelf:"center"},on:{click:function(s){e.cancelFollow(t.id,t.fromUserId)}}},[s("u-text",{staticClass:["op-fans-btn"],staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u4e92\u5173")])]):e._e()]):e._e(),2==t.msgType?s("view",{staticClass:["msg-item-box"]},[s("view",{staticClass:["msg-item-left"]},[s("u-image",{staticClass:["user-face"],staticStyle:{alignSelf:"center"},attrs:{mode:"scaleToFill",src:t.fromFace}}),s("view",{staticClass:["msg-item-middle"]},[s("u-text",{staticClass:["user-nickname"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.fromNickname))]),s("u-text",{staticClass:["msg-content"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u70b9\u8d5e\u4e86\u4f60\u7684\u89c6\u9891    "+e._s(e.getGraceDateBeforeNow(t.createTime)))])])],1),s("u-image",{staticClass:["vlog-cover"],staticStyle:{alignSelf:"center"},attrs:{mode:"aspectFill",src:t.msgContent.vlogCover},on:{click:function(s){e.goToVlog(t.msgContent.vlogId)}}})],1):e._e(),3==t.msgType?s("view",{staticClass:["msg-item-box"]},[s("view",{staticClass:["msg-item-left"]},[s("u-image",{staticClass:["user-face"],staticStyle:{alignSelf:"center"},attrs:{mode:"scaleToFill",src:t.fromFace}}),s("view",{staticClass:["msg-item-middle"]},[s("u-text",{staticClass:["user-nickname"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.fromNickname))]),s("u-text",{staticClass:["msg-content"],staticStyle:{fontWeight:"400",width:"360rpx",lines:"2",textOverflow:"ellipsis"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.msgContent.commentContent))]),s("u-text",{staticClass:["msg-content"],staticStyle:{fontWeight:"200"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u53d1\u8868\u4e86\u8bc4\u8bba    "+e._s(e.getGraceDateBeforeNow(t.createTime)))])])],1),s("u-image",{staticClass:["vlog-cover"],staticStyle:{alignSelf:"center"},attrs:{mode:"aspectFill",src:t.msgContent.vlogCover},on:{click:function(s){e.goToVlog(t.msgContent.vlogId)}}})],1):e._e(),4==t.msgType?s("view",{staticClass:["msg-item-box"]},[s("view",{staticClass:["msg-item-left"]},[s("u-image",{staticClass:["user-face"],staticStyle:{alignSelf:"center"},attrs:{mode:"scaleToFill",src:t.fromFace}}),s("view",{staticClass:["msg-item-middle"]},[s("u-text",{staticClass:["user-nickname"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.fromNickname))]),s("u-text",{staticClass:["msg-content"],staticStyle:{fontWeight:"400",width:"360rpx",lines:"2",textOverflow:"ellipsis"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.msgContent.commentContent))]),s("u-text",{staticClass:["msg-content"],staticStyle:{fontWeight:"200"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u56de\u590d\u4e86\u4f60    "+e._s(e.getGraceDateBeforeNow(t.createTime)))])])],1),s("u-image",{staticClass:["vlog-cover"],staticStyle:{alignSelf:"center"},attrs:{mode:"aspectFill",src:t.msgContent.vlogCover},on:{click:function(s){e.goToVlog(t.msgContent.vlogId)}}})],1):e._e(),5==t.msgType?s("view",{staticClass:["msg-item-box"]},[s("view",{staticClass:["msg-item-left"]},[s("u-image",{staticClass:["user-face"],staticStyle:{alignSelf:"center"},attrs:{mode:"scaleToFill",src:t.fromFace}}),s("view",{staticClass:["msg-item-middle"]},[s("u-text",{staticClass:["user-nickname"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.fromNickname))]),s("u-text",{staticClass:["msg-content"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u70b9\u8d5e\u4e86\u4f60\u7684\u8bc4\u8bba    "+e._s(e.getGraceDateBeforeNow(t.createTime)))])])],1),s("u-image",{staticClass:["vlog-cover"],staticStyle:{alignSelf:"center"},attrs:{mode:"aspectFill",src:t.msgContent.vlogCover},on:{click:function(s){e.goToVlog(t.msgContent.vlogId)}}})],1):e._e()])})),1)],1)])},o=[]},161:function(e,t,s){"use strict";s.r(t);var n=s(92),o=s.n(n);for(var r in n)"default"!==r&&function(e){s.d(t,e,(function(){return n[e]}))}(r);t.default=o.a},186:function(e,t,s){"use strict";s.r(t);s(2);var n=s(38);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(s){return t.resolve(e()).then((function(){return s}))}),(function(s){return t.resolve(e()).then((function(){throw s}))}))}),n.default.mpType="page",n.default.route="pages/message/message",n.default.el="#root",new Vue(n.default)},2:function(e,t,s){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(s(3).default,Vue.prototype.__$appStyle__)},3:function(e,t,s){"use strict";s.r(t);var n=s(0),o=s.n(n);for(var r in n)"default"!==r&&function(e){s.d(t,e,(function(){return n[e]}))}(r);t.default=o.a},38:function(e,t,s){"use strict";var n=s(134),o=s(90),r=s(1);var i=Object(r.a)(o.default,n.b,n.c,!1,null,null,"75c9e40a",!1,n.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(s(161).default,this.options.style):Object.assign(this.options.style,s(161).default)}).call(i),t.default=i.exports},90:function(e,t,s){"use strict";var n=s(91),o=s.n(n);t.default=o.a},91:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=getApp(),o={data:function(){return{msgList:[],page:0,totalPage:0}},onShow:function(){this.page=0,this.totalPage=0,this.msgList=[],this.fetchList(0)},methods:{goToVlog:function(e){uni.navigateTo({url:"../vlog/vlog?vlogId="+e})},reFreshList:function(e,t,s){for(var n=this.msgList,o=0;o<n.length;o++){var r=n[o];if(r.id==e)r.msgContent.isFriend=s,n.splice(o,1,r)}this.msgList=n},cancelFollow:function(e,t){var s=this,o=getApp().getUserInfoSession().id,r=n.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:o,headerUserToken:n.getUserSessionToken()},url:r+"/fans/cancel?myId="+o+"&vlogerId="+t,success:function(n){200==n.data.status?(s.reFreshList(e,t,!1),uni.setStorageSync("justCancelVlogerId",t)):uni.showToast({title:n.data.msg,icon:"none",duration:3e3})}})},followMe:function(e,t){var s=this,o=getApp().getUserInfoSession().id,r=n.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:o,headerUserToken:n.getUserSessionToken()},url:r+"/fans/follow?myId="+o+"&vlogerId="+t,success:function(n){200==n.data.status?(s.reFreshList(e,t,!0),uni.setStorageSync("justFollowVlogerId",t)):uni.showToast({title:n.data.msg,icon:"none",duration:3e3})}})},loadMore:function(){var e=this.page+1;this.fetchList(e)},fetchList:function(e){var t=this;if(null!=n.getUserInfoSession()){var s=getApp().getUserInfoSession().id,o=n.globalData.serverUrl;uni.request({method:"GET",header:{headerUserId:s,headerUserToken:n.getUserSessionToken()},url:o+"/msg/list?userId="+s+"&page="+e+"&pageSize=10",success:function(s){if(200==s.data.status){var n=s.data.data;null!=n&&null!=n&&n.length>0&&(t.msgList=t.msgList.concat(n),t.page=e)}}})}else uni.showToast({duration:3e3,title:"\u8bf7\u767b\u5f55~",icon:"none"})},getGraceDateBeforeNow:function(e){var t=n.dateFormat("YYYY-mm-dd",new Date(e));return getApp().getDateBeforeNow(t)}}};t.default=o},92:function(e,t){e.exports={".page":{"":{position:["absolute",0,0,1],left:[0,0,0,1],right:[0,0,0,1],top:[0,0,0,1],bottom:[0,0,0,1],backgroundColor:["#181b27",0,0,1]}},".line":{"":{height:["1rpx",0,0,2],backgroundColor:["#393a41",0,0,2],width:["750rpx",0,0,2]}},".user-face":{"":{width:["120rpx",0,0,3],height:["120rpx",0,0,3],borderRadius:["100rpx",0,0,3],borderWidth:["1",0,0,3],borderColor:["#F1F1F1",0,0,3]}},".msg-item-box":{"":{display:["flex",0,0,4],flexDirection:["row",0,0,4],justifyContent:["space-between",0,0,4],paddingTop:["30rpx",0,0,4],paddingRight:["30rpx",0,0,4],paddingBottom:["30rpx",0,0,4],paddingLeft:["30rpx",0,0,4],marginTop:["10rpx",0,0,4]}},".msg-item-left":{"":{display:["flex",0,0,5],flexDirection:["row",0,0,5]}},".msg-item-middle":{"":{display:["flex",0,0,6],flexDirection:["column",0,0,6],marginLeft:["30rpx",0,0,6],paddingTop:["20rpx",0,0,6]}},".user-nickname":{"":{color:["#FFFFFF",0,0,7],fontSize:["14",0,0,7],fontWeight:["600",0,0,7]}},".msg-content":{"":{color:["#FFFFFF",0,0,8],fontSize:["12",0,0,8],fontWeight:["300",0,0,8],marginTop:["2rpx",0,0,8]}},".msg-item-right":{"":{width:["160rpx",0,0,9],height:["70rpx",0,0,9],opacity:[.8,0,0,9],borderRadius:["8rpx",0,0,9],display:["flex",0,0,9],flexDirection:["row",0,0,9],justifyContent:["center",0,0,9]}},".op-fans-btn":{"":{fontSize:["13",0,0,10],color:["#FFFFFF",0,0,10],fontWeight:["500",0,0,10]}},".vlog-cover":{"":{width:["100rpx",0,0,11],height:["120rpx",0,0,11],marginRight:["10rpx",0,0,11],borderRadius:["2",0,0,11]}},"@VERSION":2}}});