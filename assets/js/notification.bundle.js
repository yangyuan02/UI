(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{10:function(t,n,e){"use strict";e.r(n);var i=e(1),r=e.n(i);function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){r()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var c={name:"component-doc",components:{"element-demo0":o(o({},{data:function(){return{visible:!0}},methods:{handleClick1:function(){this.$notify({title:"提示",message:"成功！"})},handleClick2:function(){this.$notify({title:"提示",message:"成功！",autoClose:!1,close:function(){}})}}}),{},{render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("m-row",[n("m-button",{attrs:{plain:""},on:{click:this.handleClick1}},[this._v("可自动关闭")]),this._v(" "),n("m-button",{attrs:{plain:""},on:{click:this.handleClick2}},[this._v("不会自动关闭")])],1)],1)},staticRenderFns:[]}),"element-demo1":o(o({},{methods:{handleClick:function(t,n){this.$notify({title:"提示",message:n,autoClose:!1,type:t})}}}),{},{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("m-row",[e("m-button",{attrs:{plain:""},on:{click:function(n){return t.handleClick("success","成功！")}}},[t._v("成功")]),t._v(" "),e("m-button",{attrs:{plain:""},on:{click:function(n){return t.handleClick("error","失败！")}}},[t._v("失败")]),t._v(" "),e("m-button",{attrs:{plain:""},on:{click:function(n){return t.handleClick("info","提示！")}}},[t._v("提示")]),t._v(" "),e("m-button",{attrs:{plain:""},on:{click:function(n){return t.handleClick("warning","告警！")}}},[t._v("告警")])],1)],1)},staticRenderFns:[]})}},a=e(0),l=Object(a.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"content element-doc"},[t._m(0),t._v(" "),e("p",[t._v("常用的消息通知。")]),t._v(" "),t._m(1),t._v(" "),e("demo-block",[e("div",[e("p",[t._v("使用属性来定义 Link 的样式。")])]),t._v(" "),e("element-demo0",{attrs:{slot:"source"},slot:"source"}),t._v(" "),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<m-row>\n  <m-button plain @click="handleClick1">可自动关闭</m-button>\n  <m-button plain @click="handleClick2">不会自动关闭</m-button>\n</m-row>\n<script>\n  export default {\n    data () {\n      return {\n        visible: true\n      }\n    },\n    methods: {\n      handleClick1 () {\n        this.$notify({\n          title: "提示",\n          message: "成功！"\n        })\n      },\n      handleClick2 () {\n        this.$notify({\n          title: "提示",\n          message: "成功！",\n          autoClose: false,\n          close: function () {}\n        })\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(2),t._v(" "),e("demo-block",[e("div"),t._v(" "),e("element-demo1",{attrs:{slot:"source"},slot:"source"}),t._v(" "),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<m-row>\n  <m-button plain @click=\"handleClick('success', '成功！')\">成功</m-button>\n  <m-button plain @click=\"handleClick('error', '失败！')\">失败</m-button>\n  <m-button plain @click=\"handleClick('info', '提示！')\">提示</m-button>\n  <m-button plain @click=\"handleClick('warning', '告警！')\">告警</m-button>\n</m-row>\n<script>\n  export default {\n    methods: {\n      handleClick (type, message) {\n        this.$notify({\n          title: \"提示\",\n          message: message,\n          autoClose: false,\n          type: type\n        })\n      },\n    }\n  }\n<\/script>\n")])])])],2),t._m(3),t._v(" "),t._m(4)],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"notification-xiao-xi-tong-zhi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notification-xiao-xi-tong-zhi"}},[this._v("¶")]),this._v(" Notification 消息通知")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[this._v("¶")]),this._v(" 基础用法")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"tong-zhi-lei-xing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tong-zhi-lei-xing"}},[this._v("¶")]),this._v(" 通知类型")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[this._v("¶")]),this._v(" Attributes")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("类型")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("primary / success / warning / danger / info / text")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",[t._v("是否禁用状态")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("false")])])])])}],!1,null,null,null);n.default=l.exports}}]);