"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[7315],{66623:(v,u,i)=>{i.d(u,{R:()=>p});var p=function(n){return n.exam="exam",n.ref="ref",n.lecture="lecture",n.teaching_plan="teaching_plan",n.video="video",n.slide="slide",n.unknown="unknown",n}(p||{})},95273:(v,u,i)=>{i.d(u,{v:()=>g});var p=i(61713),n=i(78226),d=i(65879),e=i(46558);let g=(()=>{class _{getMineTypeByFileType(a){let s="";switch(this.commonService.getEnumTypeWithDefault(n.s,a,n.s.unknown)){case n.s.doc:case n.s.docx:s="application/vnd.openxmlformats-officedocument.wordprocessingml.document";break;case n.s.ppt:case n.s.pptx:s="application/vnd.openxmlformats-officedocument.presentationml.presentation";break;case n.s.xlsx:s="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";break;case n.s.pdf:s="application/pdf";break;case n.s.video:case n.s.mp4:s="video/mp4";break;case n.s.mov:s="video/mov";break;case n.s.webm:s="video/webm";break;case n.s.quicktime:s="video/quicktime";break;case n.s.audio:s="audio/mpeg";break;case n.s.mp3:s="audio/mp3";break;case n.s.wav:s="audio/wav";break;case n.s.jpeg:s="image/jpeg"}return s}getMineTypeByExtension(a){switch(new RegExp(/(?:\.([^.]+))?$/).exec(a)?.[1]){case"pdf":return"application/pdf";case"xlsx":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"xsl":case"csv":return"application/vnd.ms-excel";case"jpg":return"image/jpg";case"jpge":return"image/jpge";default:return"application/json-patch+json"}}getTypeFileByMime(a){return a.mimes&&(0,p.MH)(a.mimes)||a.name?.toLowerCase().endsWith(".azt")?n.s.docx:a.mimes&&(0,p.AW)(a.mimes)?n.s.xlsx:a.mimes&&(0,p.F0)(a.mimes)?n.s.audio:a.mimes&&(0,p.Wv)(a.mimes)?n.s.video:a.mimes&&(0,p.Or)(a.mimes)?n.s.image:a.mimes&&(0,p._4)(a.mimes)?n.s.pdf:a.mimes&&(0,p.ZA)(a.mimes)?n.s.powerpoint:void 0}constructor(a){this.commonService=a}}return _.\u0275fac=function(a){return new(a||_)(d.LFG(e.z))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},24627:(v,u,i)=>{i.d(u,{X:()=>a});var p=i(47496),n=i(65879),d=i(96814),e=i(6486),g=i(36727);function _(l,s){if(1&l){const m=n.EpF();n.TgZ(0,"a",2),n.NdJ("click",function(){n.CHM(m);const y=n.oxw();return n.KtG(y.clickToSeeMore())}),n._uU(1),n.ALo(2,"mytranslate"),n.qZA()}2&l&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"lang_cms_common_see_more")))}function h(l,s){if(1&l){const m=n.EpF();n.TgZ(0,"a",2),n.NdJ("click",function(){n.CHM(m);const y=n.oxw();return n.KtG(y.clickToShowShortContent())}),n._uU(1),n.ALo(2,"mytranslate"),n.qZA()}2&l&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"lang_cms_common_see_short_content")))}let a=(()=>{class l extends p.Q{constructor(){super(...arguments),this.content="",this.maxLength=500,this.showContent="",this.showSeeMoreButton=!0,this.showShortContentButton=!1}clickToShowShortContent(){this.showSeeMoreButton=!0,this.showShortContentButton=!1,this.processSeeMore()}clickToSeeMore(){this.showSeeMoreButton=!1,this.showShortContentButton=!0,this.processSeeMore()}processSeeMore(){let m=this.commonService.removeTagHtml(this.content);m.length>this.maxLength?this.showContent=this.showSeeMoreButton?m.substring(0,this.maxLength)+"...":this.content:(this.showSeeMoreButton=!1,this.showShortContentButton=!1,this.showContent=this.content)}ngOnInit(){this.processSeeMore(),super.ngOnInit()}ngOnChanges(){this.showSeeMoreButton=!0,this.showShortContentButton=!1,this.processSeeMore()}}return l.\u0275fac=function(){let s;return function(r){return(s||(s=n.n5z(l)))(r||l)}}(),l.\u0275cmp=n.Xpm({type:l,selectors:[["azt-see-more"]],inputs:{content:"content",maxLength:"maxLength"},features:[n.qOj,n.TTD],decls:3,vars:3,consts:[[3,"content"],["class","btn-text-primary",3,"click",4,"ngIf"],[1,"btn-text-primary",3,"click"]],template:function(m,r){1&m&&(n._UZ(0,"azt-dynamic-hook",0),n.YNc(1,_,3,3,"a",1),n.YNc(2,h,3,3,"a",1)),2&m&&(n.Q6J("content",r.showContent),n.xp6(1),n.Q6J("ngIf",r.showSeeMoreButton&&r.content.length>r.maxLength),n.xp6(1),n.Q6J("ngIf",r.showShortContentButton&&r.content.length>r.maxLength))},dependencies:[d.O5,e.O,g.JV],encapsulation:2}),l})()},8524:(v,u,i)=>{i.d(u,{F:()=>I});var p=i(66623),n=i(47496),d=i(78226),e=i(65879),g=i(96814),_=i(92596),h=i(37722),a=i(93523),l=i(36727);function s(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",4),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/unknown-file.svg"),e.LSH))}function m(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",5),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/excel.png"),e.LSH))}function r(o,c){if(1&o&&(e.ynx(0),e._UZ(1,"img",6),e.ALo(2,"mycdn"),e.BQk()),2&o){const f=e.oxw();e.xp6(1),e.Q6J("src",e.lcZ(2,1,f.url),e.LSH)}}function y(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",7),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/word.svg"),e.LSH))}function T(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",8),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/ppt.svg"),e.LSH))}function x(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",9),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/pdf.svg"),e.LSH))}function C(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",10),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/video.svg"),e.LSH))}function k(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",11),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/audio.svg"),e.LSH))}function L(o,c){1&o&&(e.ynx(0),e.TgZ(1,"div",12),e._UZ(2,"lucide-icon",13),e.qZA(),e.BQk())}function D(o,c){1&o&&(e.ynx(0),e.TgZ(1,"div",12),e._UZ(2,"lucide-icon",14),e.qZA(),e.BQk())}function M(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",4),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/unknown-file.svg"),e.LSH))}function w(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",4),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/unknown-file.svg"),e.LSH))}function O(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",4),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/unknown-file.svg"),e.LSH))}function S(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",4),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/unknown-file.svg"),e.LSH))}function B(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",4),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/unknown-file.svg"),e.LSH))}function A(o,c){1&o&&(e.ynx(0),e._UZ(1,"img",4),e.ALo(2,"convertCdnLinkOfGitHub"),e.BQk()),2&o&&(e.xp6(1),e.Q6J("src",e.lcZ(2,1,"images/type_file/unknown-file.svg"),e.LSH))}function Q(o,c){if(1&o&&(e.TgZ(0,"div",15)(1,"span",16,17),e._uU(3),e.qZA()()),2&o){const f=e.MAs(2),t=e.oxw();e.xp6(1),e.Udp("width",t.textWidth)("max-width",t.onlyOneLine?"90%":"100%"),e.s9C("matTooltip",t.name),e.Q6J("isDisabledTooltip",!1)("matTooltipDisabled",f.isDisabled),e.xp6(2),e.hij(" ",t.name," ")}}const Z=function(o){return{"p-2 border border-slate-200/60 dark:border-darkmode-400 rounded-md":o}};let I=(()=>{class o extends n.Q{constructor(){super(...arguments),this.showBorder=!0,this.onlyOneLine=!1,this.url="",this.customClass="w-16 h-16",this.textWidth="80%",this.allDocumentFileTypes=d.s,this.allShareDocumentMarketTypes=p.R}}return o.\u0275fac=function(){let c;return function(t){return(c||(c=e.n5z(o)))(t||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["azt-document-type-file"]],inputs:{type:"type",name:"name",showBorder:"showBorder",onlyOneLine:"onlyOneLine",url:"url",customClass:"customClass",textWidth:"textWidth"},features:[e.qOj],decls:20,vars:23,consts:[[1,"flex","items-center",3,"ngClass"],[1,"flex","w-full","items-center","overflow-hidden"],[4,"ngIf"],["class","ml-1 flex w-full",4,"ngIf"],["alt","unknown-icon",3,"src"],["alt","excel-icon",3,"src"],["alt","image",1,"rounded-md",3,"src"],["alt","docx-icon",3,"src"],["alt","ppt-icon",3,"src"],["alt","pdf-icon",3,"src"],["alt","video-icon",3,"src"],["alt","audio-icon",3,"src"],[1,"w-full","h-full","text-pending"],["name","file-check"],["name","file-text"],[1,"ml-1","flex","w-full"],["matTooltipShowDelay","1000",1,"font-normal","truncate",3,"matTooltip","isDisabledTooltip","matTooltipDisabled"],["c","isDisabled"]],template:function(f,t){1&f&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div"),e.YNc(3,s,3,3,"ng-container",2),e.YNc(4,m,3,3,"ng-container",2),e.YNc(5,r,3,3,"ng-container",2),e.YNc(6,y,3,3,"ng-container",2),e.YNc(7,T,3,3,"ng-container",2),e.YNc(8,x,3,3,"ng-container",2),e.YNc(9,C,3,3,"ng-container",2),e.YNc(10,k,3,3,"ng-container",2),e.YNc(11,L,3,0,"ng-container",2),e.YNc(12,D,3,0,"ng-container",2),e.YNc(13,M,3,3,"ng-container",2),e.YNc(14,w,3,3,"ng-container",2),e.YNc(15,O,3,3,"ng-container",2),e.YNc(16,S,3,3,"ng-container",2),e.YNc(17,B,3,3,"ng-container",2),e.YNc(18,A,3,3,"ng-container",2),e.qZA(),e.YNc(19,Q,4,8,"div",3),e.qZA()()),2&f&&(e.Q6J("ngClass",e.VKq(21,Z,t.showBorder)),e.xp6(2),e.Gre("flex-none ",t.customClass,""),e.xp6(1),e.Q6J("ngIf",t.type==t.allDocumentFileTypes.unknown),e.xp6(1),e.Q6J("ngIf",t.type==t.allDocumentFileTypes.xlsx),e.xp6(1),e.Q6J("ngIf",t.type===t.allDocumentFileTypes.image||t.type==t.allDocumentFileTypes.jpeg),e.xp6(1),e.Q6J("ngIf",t.type===t.allDocumentFileTypes.docx),e.xp6(1),e.Q6J("ngIf",t.type==t.allDocumentFileTypes.ppt||t.type==t.allDocumentFileTypes.pptx),e.xp6(1),e.Q6J("ngIf",t.type==t.allDocumentFileTypes.pdf),e.xp6(1),e.Q6J("ngIf",t.type==t.allDocumentFileTypes.video||t.type==t.allDocumentFileTypes.mp4||t.type==t.allDocumentFileTypes.mov||t.type==t.allDocumentFileTypes.webm||t.type==t.allDocumentFileTypes.quicktime),e.xp6(1),e.Q6J("ngIf",t.type==t.allDocumentFileTypes.audio||t.type==t.allDocumentFileTypes.mp3||t.type==t.allDocumentFileTypes.wav),e.xp6(1),e.Q6J("ngIf",t.type==t.allDocumentFileTypes.exam),e.xp6(1),e.Q6J("ngIf",t.type==t.allDocumentFileTypes.homework),e.xp6(1),e.Q6J("ngIf",t.type==t.allShareDocumentMarketTypes.exam),e.xp6(1),e.Q6J("ngIf",t.type==t.allShareDocumentMarketTypes.ref),e.xp6(1),e.Q6J("ngIf",t.type==t.allShareDocumentMarketTypes.lecture),e.xp6(1),e.Q6J("ngIf",t.type==t.allShareDocumentMarketTypes.teaching_plan),e.xp6(1),e.Q6J("ngIf",t.type==t.allShareDocumentMarketTypes.slide),e.xp6(1),e.Q6J("ngIf",t.type==t.allShareDocumentMarketTypes.unknown),e.xp6(1),e.Q6J("ngIf",t.name))},dependencies:[g.mk,g.O5,_.gM,h.Nh5,a.Q,l.QN,l.Bo],encapsulation:2}),o})()},78226:(v,u,i)=>{i.d(u,{s:()=>p});var p=function(n){return n.unknown="unknown",n.xlsx="xlsx",n.image="image",n.jpeg="jpeg",n.doc="doc",n.docx="docx",n.ppt="ppt",n.pptx="pptx",n.pdf="pdf",n.video="video",n.mp4="mp4",n.mov="mov",n.webm="webm",n.quicktime="quicktime",n.audio="audio",n.mp3="mp3",n.wav="wav",n.exam="exam",n.homework="homework",n.powerpoint="powerpoint",n}(p||{})}}]);