webpackJsonp([2],{FQEi:function(e,t){},GZGz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{shareData:{title:"默认值",desc:"hhaa"}}},created:function(){this.shareData.success=function(){console.log("share success")},this.shareData.cancel=function(){console.log("share cancel")},this.share()},methods:{share:function(){this.$wechat.shareConfig(this.shareData)},authLogin:function(){location.href="http://localhost:10001/api/wechat/oauth/login"}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("分享")]),e._v(" "),a("div",[e._v("标题："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shareData.title,expression:"shareData.title"}],attrs:{type:"text"},domProps:{value:e.shareData.title},on:{input:function(t){t.target.composing||e.$set(e.shareData,"title",t.target.value)}}})]),e._v(" "),a("div",[e._v("描述："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shareData.desc,expression:"shareData.desc"}],attrs:{type:"text"},domProps:{value:e.shareData.desc},on:{input:function(t){t.target.composing||e.$set(e.shareData,"desc",t.target.value)}}})]),e._v(" "),a("div",[e._v("链接："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shareData.link,expression:"shareData.link"}],attrs:{type:"text"},domProps:{value:e.shareData.link},on:{input:function(t){t.target.composing||e.$set(e.shareData,"link",t.target.value)}}})]),e._v(" "),a("div",[e._v("图片："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shareData.imgUrl,expression:"shareData.imgUrl"}],attrs:{type:"text"},domProps:{value:e.shareData.imgUrl},on:{input:function(t){t.target.composing||e.$set(e.shareData,"imgUrl",t.target.value)}}})]),e._v(" "),a("div",[a("button",{on:{click:e.share}},[e._v("设置分享信息")])]),e._v(" "),a("h2",[e._v("授权登录")]),e._v(" "),a("div",[a("button",{on:{click:e.authLogin}},[e._v("授权")])])])},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(e){a("FQEi")},null,null);t.default=i.exports}});
//# sourceMappingURL=2.25e08e88964243f8c61e.js.map