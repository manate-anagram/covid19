(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{230:function(t,e,n){var content=n(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5d594f7f",content,!1,{sourceMap:!1})},233:function(t,e,n){"use strict";var r=n(230);n.n(r).a},234:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},235:function(t,e,n){"use strict";var r=n(1).default.extend({props:{icon:{type:String}}}),o=(n(233),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},271:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},283:function(t,e,n){var content=n(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("f0fcac38",content,!1,{sourceMap:!1})},284:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("1f80f9fd",content,!1,{sourceMap:!1})},288:function(t,e,n){var r=n(9);r(r.S,"Math",{sign:n(271)})},378:function(t,e,n){"use strict";var r=n(283);n.n(r).a},379:function(t,e,n){(e=n(10)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},380:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/24","url":"https://www.pref.okayama.jp/site/16/655775.html","text":"新学期からの県立学校における教育活動の再開等について"},{"date":"2020/03/22","url":"https://www.youtube.com/watch?v=2C5Q-Lg0T6o","text":"岡山市内で感染者が確認されました"}]}')},381:function(t,e,n){"use strict";var r=n(284);n.n(r).a},382:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .Header[data-v-735bbdd9]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-735bbdd9]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-735bbdd9]{font-size:14px;font-size:0.875rem;color:gray;margin-bottom:.2rem}.MainPage .Annotation[data-v-735bbdd9]{font-size:12px;font-size:0.75rem;color:gray}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-735bbdd9]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-735bbdd9]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-735bbdd9]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-735bbdd9]{padding:4px 8px}}",""]),t.exports=e},386:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(235),d=n(264),l=r.default.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(d.a)(t)}}}),c=(n(378),n(4)),m=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null).exports,h=n(232),f=n(380),x=n(297),w=n(290),v=n(293),_=n(296),N=n(295),C=n(294),W=r.default.extend({components:{PageHeader:o.a,WhatsNew:m,ConfirmedCasesNumberCard:x.a,ConfirmedCasesAttributesCard:w.a,TestedNumberCard:v.a,InspectionPersonsNumberCard:_.a,TelephoneAdvisoryReportsNumberCard:N.a,ConsultationDeskReportsNumberCard:C.a},data:function(){var data={Data:h,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向")},newsItems:f.newsItems};return data},computed:{updatedAt:function(){return Object(d.b)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("県内の最新感染動向")}}}),y=(n(381),Object(c.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-number-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("telephone-advisory-reports-number-card"),t._v(" "),n("consultation-desk-reports-number-card")],1)],1)}),[],!1,null,"735bbdd9",null));e.default=y.exports}}]);