webpackJsonp([8],{"5H5u":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={methods:{logIndexChange:function(t){console.log(t)},show:function(t){this.$refs.previewer.show(t)}},data:function(){return{list:[{msrc:"http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg",src:"http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"},{msrc:"http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg",src:"http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg",w:1200,h:900},{msrc:"http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg",src:"http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg"}],options:{getThumbBoundsFn:function(t){var e=document.querySelectorAll(".previewer-demo-img")[t],n=window.pageYOffset||document.documentElement.scrollTop,r=e.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}}}}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-previewer",{ref:"p1",attrs:{opAttr:"testattr"}}),t._v(" "),n("img",{attrs:{src:t.list[0].src,testattr:"true",width:"100"}}),t._v(" "),t._l(t.list,function(e,r){return n("img",{key:r,staticClass:"previewer-demo-img",attrs:{src:e.src,width:"100"},on:{click:function(e){t.show(r)}}})}),t._v(" "),n("v-previewer",{ref:"previewer",attrs:{opAttr:"",list:t.list,options:t.options},on:{"on-index-change":t.logIndexChange}})],2)},staticRenderFns:[]},s=n("VU/8")(r,i,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=8.bf2caf18d222dc05db10.js.map