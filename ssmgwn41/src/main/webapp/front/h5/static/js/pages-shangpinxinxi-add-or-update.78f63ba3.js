(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shangpinxinxi-add-or-update"],{"0139":function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-36c39c91]{padding:%?20?%}.content[data-v-36c39c91]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-36c39c91]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-36c39c91]{width:%?180?%}.avator[data-v-36c39c91]{width:%?150?%;height:%?60?%}.right-input[data-v-36c39c91]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-36c39c91]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-36c39c91]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-36c39c91]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-36c39c91]{border:0}.cu-form-group uni-input[data-v-36c39c91]{padding:0 %?30?%}.uni-input[data-v-36c39c91]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-36c39c91]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-36c39c91]::after{line-height:%?88?%}.select .uni-input[data-v-36c39c91]{line-height:%?88?%}.input .right-input[data-v-36c39c91]{line-height:%?88?%}',""]),r.exports=e},"4ea5":function(r,e,t){"use strict";var i,n=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("商品编号")]),t("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.shangpinbianhao))])],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("商品名称")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:r.ruleForm.shangpinmingcheng,callback:function(e){r.$set(r.ruleForm,"shangpinmingcheng",e)},expression:"ruleForm.shangpinmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("商品类别")]),t("v-uni-picker",{attrs:{value:r.shangpinleibieIndex,range:r.shangpinleibieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.shangpinleibieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.shangpinleibie?r.ruleForm.shangpinleibie:"请选择商品类别"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("商品规格")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shangpinguige,placeholder:"商品规格"},model:{value:r.ruleForm.shangpinguige,callback:function(e){r.$set(r.ruleForm,"shangpinguige",e)},expression:"ruleForm.shangpinguige"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 10rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.tupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("品牌")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.pinpai,placeholder:"品牌"},model:{value:r.ruleForm.pinpai,callback:function(e){r.$set(r.ruleForm,"pinpai",e)},expression:"ruleForm.pinpai"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("价格")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.price,placeholder:"价格"},model:{value:r.ruleForm.price,callback:function(e){r.$set(r.ruleForm,"price",e)},expression:"ruleForm.price"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("单限")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.onelimittimes,placeholder:"单限"},model:{value:r.ruleForm.onelimittimes,callback:function(e){r.$set(r.ruleForm,"onelimittimes",e)},expression:"ruleForm.onelimittimes"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("库存")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.alllimittimes,placeholder:"库存"},model:{value:r.ruleForm.alllimittimes,callback:function(e){r.$set(r.ruleForm,"alllimittimes",e)},expression:"ruleForm.alllimittimes"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("商品介绍")]),t("v-uni-textarea",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"商品介绍"},model:{value:r.ruleForm.shangpinjieshao,callback:function(e){r.$set(r.ruleForm,"shangpinjieshao",e)},expression:"ruleForm.shangpinjieshao"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(204, 153, 204, 1)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},a=[];t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))},"565d":function(r,e,t){"use strict";t.r(e);var i=t("4ea5"),n=t("f9f4");for(var a in n)"default"!==a&&function(r){t.d(e,r,(function(){return n[r]}))}(a);t("fdc7");var o,s=t("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"36c39c91",null,!1,i["a"],o);e["default"]=l.exports},c955:function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o={data:function(){return{ruleForm:{shangpinbianhao:this.getUUID(),shangpinmingcheng:"",shangpinleibie:"",shangpinguige:"",tupian:"",pinpai:"",shangpinjieshao:"",thumbsupnum:"",crazilynum:"",price:"",onelimittimes:"",alllimittimes:""},shangpinleibieOptions:[],shangpinleibieIndex:0,user:{},ro:{shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleibie:!1,shangpinguige:!1,tupian:!1,pinpai:!1,shangpinjieshao:!1,thumbsupnum:!1,crazilynum:!1,price:!1,onelimittimes:!1,alllimittimes:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(e){var t,i,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:return i=r.sent,this.user=i.data,r.next=7,this.$api.option("shangpinfenlei","shangpinleibie",{});case 7:if(i=r.sent,this.shangpinleibieOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid),!e.id){r.next=17;break}return this.ruleForm.id=e.id,r.next=15,this.$api.info("shangpinxinxi",this.ruleForm.id);case 15:i=r.sent,this.ruleForm=i.data;case 17:if(!e.cross){r.next=72;break}n=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(n);case 20:if((r.t1=r.t0()).done){r.next=72;break}if(a=r.t1.value,"shangpinbianhao"!=a){r.next=26;break}return this.ruleForm.shangpinbianhao=n[a],this.ro.shangpinbianhao=!0,r.abrupt("continue",20);case 26:if("shangpinmingcheng"!=a){r.next=30;break}return this.ruleForm.shangpinmingcheng=n[a],this.ro.shangpinmingcheng=!0,r.abrupt("continue",20);case 30:if("shangpinleibie"!=a){r.next=34;break}return this.ruleForm.shangpinleibie=n[a],this.ro.shangpinleibie=!0,r.abrupt("continue",20);case 34:if("shangpinguige"!=a){r.next=38;break}return this.ruleForm.shangpinguige=n[a],this.ro.shangpinguige=!0,r.abrupt("continue",20);case 38:if("tupian"!=a){r.next=42;break}return this.ruleForm.tupian=n[a],this.ro.tupian=!0,r.abrupt("continue",20);case 42:if("pinpai"!=a){r.next=46;break}return this.ruleForm.pinpai=n[a],this.ro.pinpai=!0,r.abrupt("continue",20);case 46:if("shangpinjieshao"!=a){r.next=50;break}return this.ruleForm.shangpinjieshao=n[a],this.ro.shangpinjieshao=!0,r.abrupt("continue",20);case 50:if("thumbsupnum"!=a){r.next=54;break}return this.ruleForm.thumbsupnum=n[a],this.ro.thumbsupnum=!0,r.abrupt("continue",20);case 54:if("crazilynum"!=a){r.next=58;break}return this.ruleForm.crazilynum=n[a],this.ro.crazilynum=!0,r.abrupt("continue",20);case 58:if("price"!=a){r.next=62;break}return this.ruleForm.price=n[a],this.ro.price=!0,r.abrupt("continue",20);case 62:if("onelimittimes"!=a){r.next=66;break}return this.ruleForm.onelimittimes=n[a],this.ro.onelimittimes=!0,r.abrupt("continue",20);case 66:if("alllimittimes"!=a){r.next=70;break}return this.ruleForm.alllimittimes=n[a],this.ro.alllimittimes=!0,r.abrupt("continue",20);case 70:r.next=20;break;case 72:this.styleChange();case 73:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shangpinleibieChange:function(r){this.shangpinleibieIndex=r.target.value,this.ruleForm.shangpinleibie=this.shangpinleibieOptions[this.shangpinleibieIndex]},tupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.tupian=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){r.next=3;break}return this.$utils.msg("赞应输入整数"),r.abrupt("return");case 3:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){r.next=6;break}return this.$utils.msg("踩应输入整数"),r.abrupt("return");case 6:if(this.ruleForm.price){r.next=9;break}return this.$utils.msg("价格不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){r.next=12;break}return this.$utils.msg("价格应输入数字"),r.abrupt("return");case 12:if(!this.ruleForm.onelimittimes||this.$validate.isIntNumer(this.ruleForm.onelimittimes)){r.next=15;break}return this.$utils.msg("单限应输入整数"),r.abrupt("return");case 15:if(!this.ruleForm.alllimittimes||this.$validate.isIntNumer(this.ruleForm.alllimittimes)){r.next=18;break}return this.$utils.msg("库存应输入整数"),r.abrupt("return");case 18:if(!this.ruleForm.id){r.next=23;break}return r.next=21,this.$api.update("shangpinxinxi",this.ruleForm);case 21:r.next=25;break;case 23:return r.next=25,this.$api.add("shangpinxinxi",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},ea67:function(r,e,t){var i=t("0139");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var n=t("4f06").default;n("6588e6e1",i,!0,{sourceMap:!1,shadowMode:!1})},f9f4:function(r,e,t){"use strict";t.r(e);var i=t("c955"),n=t.n(i);for(var a in i)"default"!==a&&function(r){t.d(e,r,(function(){return i[r]}))}(a);e["default"]=n.a},fdc7:function(r,e,t){"use strict";var i=t("ea67"),n=t.n(i);n.a}}]);