webpackJsonp([0],{"/TYz":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("Ed5x"),e=a("VV7+"),c=!1;var o=function(t){c||a("DhRW")},n=a("Mz/3")(s.a,e.a,!1,o,"data-v-2a183b29",null);n.options.__file="pages/index.vue",i.default=n.exports},"1+AI":function(t,i,a){(t.exports=a("yKCJ")(!1)).push([t.i,".city-content .loading-data[data-v-2a183b29]{width:50px}.city-content .loading-data .gif[data-v-2a183b29]{width:100%}.city-title[data-v-2a183b29]{font-size:18px;font-weight:500;color:#333}.city-list[data-v-2a183b29]{margin-top:15px}.city-list .item[data-v-2a183b29]{display:inline-block;margin-right:5px;padding:5px 10px;font-size:12px;color:#333;text-align:center;border:1px solid #c5c2c2;border-radius:6px;vertical-align:top;cursor:pointer}.city-list .item.active[data-v-2a183b29]{color:#00cacf;border-color:#00cacf}.city-current[data-v-2a183b29]{margin-top:5px;font-size:12px;color:#333}.case-content[data-v-2a183b29]{margin-top:20px}.case-title[data-v-2a183b29]{font-size:18px;font-weight:500;color:#333}.case-list[data-v-2a183b29]{margin-top:15px;padding-bottom:15px}.case-list .item[data-v-2a183b29]{font-size:0;-webkit-transition:all .3s;transition:all .3s}.case-list .item[data-v-2a183b29]:hover{background:rgba(0,0,0,.02)}.case-list .item[data-v-2a183b29]:not(:first-of-type){margin-top:15px}.case-list .item>div[data-v-2a183b29]{display:inline-block;vertical-align:middle}.case-left[data-v-2a183b29]{position:relative;width:300px;cursor:pointer}.case-image[data-v-2a183b29]{width:100%}.case-hot[data-v-2a183b29]{position:absolute;top:0;left:0;z-index:1;width:50px}.case-right[data-v-2a183b29]{margin-left:30px;font-size:12px;color:#333}.case-right .name[data-v-2a183b29]{font-size:16px;font-weight:700}.case-right .desc[data-v-2a183b29],.case-right .price[data-v-2a183b29],.case-right .style[data-v-2a183b29]{margin-top:10px}.case-right .details[data-v-2a183b29]{display:inline-block;margin-top:15px;padding:5px 10px;color:#fff;line-height:2;border-radius:6px;background:#00cacf}",""])},DhRW:function(t,i,a){var s=a("1+AI");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("bUva")("05b3e8da",s,!1,{sourceMap:!1})},Ed5x:function(t,i,a){"use strict";a("EcfS");i.a={data:function(){return{homePageShow:1,cityList:null,caseList:null,currentCity:0}},created:function(){this.getCitysData()},methods:{getCitysData:function(){var t=this;this.$axios({url:"/api/v2/icolor/wxma/juzhuangsiteconfig"}).then(function(i){t.cityList=i.supportCities,t.setCityStore(),t.getCaseList()})},getCaseList:function(){var t=this,i={homePageShow:this.homePageShow,query:"kitchen",cityCode:this.$store.state.city.code};this.$axios({url:"/api/v2/icolor/wxma/experience-halls",formData:i}).then(function(i){t.caseList=i.data})},setCityStore:function(){var t=this.cityList[this.currentCity].name,i=this.cityList[this.currentCity].code;this.$store.dispatch("city/refreshCityInfo",{name:t,code:i})},chooseCity:function(t){this.currentCity!==t&&(this.currentCity=t,this.setCityStore(),this.caseList=null,this.getCaseList())},retImageUrl:function(t){return"https://www.icolor.com.cn"+t},toCaseDetails:function(t){this.$router.push({path:"/case/"+t})}}}},Ql09:function(t,i,a){t.exports=a.p+"img/hot.4ff2daf.png"},"VV7+":function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("section",{staticClass:"home container"},[s("div",{staticClass:"city-content"},[s("h2",{staticClass:"city-title"},[t._v("城市选择")]),t.cityList?s("div",{staticClass:"city-list"},t._l(t.cityList,function(i,a){return s("div",{key:i.code,staticClass:"item",class:{active:t.currentCity===a},on:{click:function(i){t.chooseCity(a)}}},[t._v(t._s(i.name)+"\n      ")])})):t._e(),t.cityList?[s("p",{staticClass:"city-current"},[t._v("当前城市数据为："+t._s(t.$store.state.city.name))]),s("p",{staticClass:"city-current"},[t._v("当前城市code为："+t._s(t.$store.state.city.code))])]:[t._m(0)]],2),s("div",{staticClass:"case-content"},[s("h2",{staticClass:"case-title"},[t._v("案例列表")]),t.caseList?s("div",{staticClass:"case-list"},t._l(t.caseList,function(i,e){return s("div",{key:e,staticClass:"item"},[s("div",{staticClass:"case-left",on:{click:function(a){t.toCaseDetails(i.code)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.retImageUrl(i.imgUrl),expression:"retImageUrl(item.imgUrl)"}],staticClass:"case-image"}),i.hot?s("img",{staticClass:"case-hot",attrs:{src:a("Ql09")}}):t._e()]),s("div",{staticClass:"case-right"},[s("h6",{staticClass:"name"},[t._v(t._s(i.juZhuangStyle)+" - "+t._s(i.name))]),s("div",{staticClass:"style"},[t._v("案例风格："+t._s(i.decorationStyle))]),s("div",{staticClass:"price"},[t._v("装修价格：￥"+t._s(i.totalPrice))]),s("div",{staticClass:"desc"},[t._v("案例描述："+t._s(i.description))]),s("a",{staticClass:"details",attrs:{href:"javascript:;"},on:{click:function(a){t.toCaseDetails(i.code)}}},[t._v("查看案例详情")])])])})):t._e()])])},e=[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"loading-data"},[i("img",{staticClass:"gif",attrs:{src:a("gvmd")}})])}];s._withStripped=!0;var c={render:s,staticRenderFns:e};i.a=c},gvmd:function(t,i,a){t.exports=a.p+"img/loading.1f26c50.gif"}});