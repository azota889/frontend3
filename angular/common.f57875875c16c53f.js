"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[2076],{88089:(B,x,i)=>{i.d(x,{J:()=>s});var e=i(27691),g=i(51698),T=i(64198),y=i(26860),k=i(25693),C=i(41426),v=i(63709);let s=(()=>{var p;class f{replaceImageInContent(t){return new g.c(n=>{if(t.includes("<img ")){var o=this.findAllSubString(t,"<img"),c=[],_=[];o.forEach(d=>{var m=t.indexOf("src=",d),b=t.indexOf('"',Number(m)+5),h=t.substring(Number(m)+5,Number(b)+1);h.includes(";base64")?c.push({oldUrl:h}):h.includes("blob:")&&_.push({oldUrl:h})}),c.length>0?this.reUploadBase64File(c,(d,m)=>{null==m?_&&_.length>0?this.reUploadBlobFile(_,(b,h)=>{null!=h?(t=this.replaceHomeworkContent(t,d),t=this.replaceHomeworkContent(t,b),n.next({errorMessage:void 0,content:t}),n.complete()):(n.next({errorMessage:h,content:t}),n.complete())}):(t=this.replaceHomeworkContent(t,d),n.next({errorMessage:void 0,content:t}),n.complete()):(n.next({errorMessage:m,content:t}),n.complete())}):_.length>0?this.reUploadBlobFile(_,(d,m)=>{null==m?(t=this.replaceHomeworkContent(t,d),n.next({errorMessage:void 0,content:t}),n.complete()):(n.next({errorMessage:m,content:t}),n.complete())}):(t=this.replaceHomeworkContent(t,[]),n.next({errorMessage:void 0,content:t}),n.complete())}else n.next({errorMessage:void 0,content:t}),n.complete()})}replaceHomeworkContent(t,n){return n.length>0&&n.forEach(o=>{t=t.replace(o.oldUrl??"  ",o.newUrl+'" class="w-100 img-fluid"')}),t}findAllSubString(t,n){for(var o=0,c=0,_=[];t.indexOf(n,o)>-1;)c=t.indexOf(n,o),_.push(c),o=c+n.length;return _}getTypeFile(t){var n=t.indexOf(";");return t.substring(5,n)}getFileName(t){var n=t.split("").reverse().join(""),o=n.indexOf(";"),c=n.indexOf("/",o);return n.substring(o,c).split("").reverse().join("")}convertBlobToBase64(t){return new Promise(n=>{var o=new Image;o.crossOrigin="Anonymous",o.addEventListener("load",function(){var c=document.createElement("canvas"),_=c.getContext("2d");c.width=o.width,c.height=o.height,_?.drawImage(o,0,0);var d=c.toDataURL("image/png");n(d)},!1),o.src=t})}reUploadBase64File(t,n){if(t&&t.length>0){let d,_=t.length;for(var o=[],c=0;c<t.length;c++){const m=t[c],b=m.oldUrl?.substring(0,m.oldUrl.length-1);this.startUploadBlobFile(m,b??"",[],(h,O)=>{null==O?o=o.concat(h):d=O,_-=1,0==_&&n(o,d)})}}else n([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}reUploadBlobFile(t,n){if(t&&t.length>0){let d,_=t.length;for(var o=[],c=0;c<t.length;c++){const m=t[c],b=m?.oldUrl?.substring(0,m.oldUrl.length-1);this.convertBlobToBase64(b??"").then(h=>{this.startUploadBlobFile(m,h,[],(O,w)=>{null==w?o=o.concat(O):d=w,_-=1,0==_&&n(o,d)})})}}else n([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}startUploadBlobFile(t,n,o,c){if(n&&""!=n){var _=this.getTypeFile(n),d=this.myPdfService.b64toFile(n,this.getFileName(_),_);(0,T.w4)(d).then(m=>{this.apiUploadService.uploadToCdnForHomework(m).subscribe(b=>{if(b.type!=e.hv.UploadProgress)if(1==b.success){var h={...t,newUrl:b.data?.url??""};o.push(h),c(o,void 0)}else c(o,this.commonService.translateToKeyParam("lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau_loi",b.message??"none"))})})}else c(o,"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}constructor(t,n,o){this.commonService=t,this.apiUploadService=n,this.myPdfService=o}}return(p=f).\u0275fac=function(t){return new(t||p)(y.KVO(k.R),y.KVO(C.T),y.KVO(v.C))},p.\u0275prov=y.jDH({token:p,factory:p.\u0275fac,providedIn:"root"}),f})()},18242:(B,x,i)=>{i.d(x,{P:()=>U});var e=i(26860),g=i(10936),T=i(59640),y=i(43234),k=i(48188),C=i(19045),v=i(36484),s=i(9002),p=i(50589),f=i(18350),I=i(54460),t=i(61318),n=i(15343),o=i(30886),c=i(23363),_=i(19938),d=i(73437);function m(a,E){1&a&&(e.j41(0,"div",27)(1,"a",28),e.nI1(2,"navigationLocalize"),e.nrm(3,"img",29),e.nI1(4,"getLinkLogo"),e.k0s()()),2&a&&(e.R7$(1),e.FS9("href",e.bMT(2,2,"/admin/dashboard"),e.B4B),e.R7$(2),e.Y8G("src",e.bMT(4,4,"bigLogo"),e.B4B))}function b(a,E){if(1&a){const r=e.RV6();e.qex(0),e.j41(1,"button",30),e.bIt("click",function(){e.eBV(r);const u=e.XpG(2);return e.Njj(u.goBackAndReload())}),e.nrm(2,"lucide-icon",31),e.k0s(),e.bVm()}}function h(a,E){if(1&a){const r=e.RV6();e.j41(0,"button",30),e.bIt("click",function(){e.eBV(r);const u=e.XpG(3);return e.Njj(u.goBack())}),e.nrm(1,"lucide-icon",31),e.k0s()}}function O(a,E){if(1&a){const r=e.RV6();e.j41(0,"button",34),e.bIt("click",function(){e.eBV(r);const u=e.XpG(3);return e.Njj(u.goBackDialog())}),e.nrm(1,"lucide-icon",31),e.k0s()}}function w(a,E){if(1&a&&(e.DNE(0,h,2,0,"button",32),e.DNE(1,O,2,0,"button",33)),2&a){const r=e.XpG(2);e.Y8G("ngIf",!r.checkBackDialog&&""!=r.headerBackToLink),e.R7$(1),e.Y8G("ngIf",r.checkBackDialog)}}function D(a,E){if(1&a&&(e.nrm(0,"input",35),e.nI1(1,"mytranslate")),2&a){const r=e.XpG(2);e.FS9("placeholder",e.bMT(1,2,"lang_auto_nhap_ten")+" ..."),e.Y8G("formControl",r.examName)}}function A(a,E){if(1&a){const r=e.RV6();e.j41(0,"div")(1,"button",36),e.bIt("click",function(){e.eBV(r);const u=e.XpG(2);return e.Njj(u.clickHandelCancel())}),e.EFF(2),e.nI1(3,"mytranslate"),e.k0s(),e.j41(4,"button",37),e.bIt("click",function(){e.eBV(r);const u=e.XpG(2);return e.Njj(u.clickHandelConfirm())}),e.EFF(5),e.nI1(6,"mytranslate"),e.k0s()()}if(2&a){const r=e.XpG(2);e.R7$(2),e.SpI(" ",e.bMT(3,3,"lang_auto_huy")," "),e.R7$(2),e.Y8G("disabled",r.disableConfirmBtn),e.R7$(1),e.SpI(" ",e.bMT(6,5,r.confirmTitle)," ")}}function M(a,E){1&a&&(e.j41(0,"span",41),e.EFF(1),e.nI1(2,"mytranslate"),e.k0s()),2&a&&(e.R7$(1),e.JRh(e.bMT(2,1,"AzotaAI")))}function L(a,E){if(1&a){const r=e.RV6();e.j41(0,"button",38),e.bIt("click",function(){e.eBV(r);const u=e.XpG(2);return e.Njj(u.toggleDrawer())}),e.nrm(1,"img",39),e.nI1(2,"convertCdnLinkOfGitHub"),e.DNE(3,M,3,3,"span",40),e.k0s()}if(2&a){const r=e.XpG(2);e.R7$(1),e.Y8G("src",e.bMT(2,2,"images/azotaAI.png"),e.B4B),e.R7$(2),e.Y8G("ngIf",!r.drawer.isOpened())}}function P(a,E){if(1&a&&(e.nrm(0,"input",42),e.nI1(1,"mytranslate")),2&a){const r=e.XpG(2);e.FS9("placeholder",e.bMT(1,2,"lang_auto_nhap_ten")+" ..."),e.Y8G("formControl",r.examName)}}function z(a,E){if(1&a){const r=e.RV6();e.j41(0,"div")(1,"button",43),e.bIt("click",function(){e.eBV(r);const u=e.XpG(2);return e.Njj(u.clickHandelCancel())}),e.EFF(2),e.nI1(3,"mytranslate"),e.k0s(),e.j41(4,"button",44),e.bIt("click",function(){e.eBV(r);const u=e.XpG(2);return e.Njj(u.clickHandelConfirm())}),e.EFF(5),e.nI1(6,"mytranslate"),e.k0s()()}if(2&a){const r=e.XpG(2);e.R7$(2),e.SpI(" ",e.bMT(3,2,"lang_auto_huy")," "),e.R7$(3),e.SpI(" ",e.bMT(6,4,r.confirmTitle)," ")}}function R(a,E){if(1&a&&(e.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7)(6,"div",4),e.DNE(7,m,5,6,"div",8),e.DNE(8,b,3,0,"ng-container",9),e.DNE(9,w,2,2,"ng-template",null,10,e.C5r),e.k0s()(),e.j41(11,"div",11)(12,"div",12)(13,"div",13),e.DNE(14,D,2,4,"input",14),e.k0s(),e.DNE(15,A,7,7,"div",15),e.k0s()(),e.j41(16,"div",16)(17,"div",17)(18,"div",18),e.DNE(19,L,4,4,"button",19),e.nI1(20,"async"),e.nI1(21,"allowFeatureForUserByConfigType"),e.k0s(),e.j41(22,"div",20),e.nrm(23,"azt-switch-language"),e.k0s(),e.j41(24,"div",20),e.nrm(25,"header-notice-box"),e.k0s(),e.j41(26,"div",21),e.nrm(27,"header-account-menu",22),e.k0s()()(),e.j41(28,"div",23)(29,"div",24)(30,"div",13),e.DNE(31,P,2,4,"input",25),e.k0s(),e.DNE(32,z,7,6,"div",15),e.k0s()()(),e.j41(33,"div",26),e.SdG(34),e.k0s()()()()()),2&a){const r=e.sdS(10),l=e.XpG();e.R7$(7),e.Y8G("ngIf",!l.isMobileWebView),e.R7$(1),e.Y8G("ngIf",l.reloadBacktoLink)("ngIfElse",r),e.R7$(6),e.Y8G("ngIf",l.showInput),e.R7$(1),e.Y8G("ngIf",l.showConfirmButton),e.R7$(4),e.Y8G("ngIf",l.willShowAIBox||e.bMT(20,9,e.i5U(21,11,"","ALLOW_CREATE_EXAM_BY_AI"))),e.R7$(8),e.Y8G("isTeacherDashboard",!0),e.R7$(4),e.Y8G("ngIf",l.showInput),e.R7$(1),e.Y8G("ngIf",l.showConfirmButton)}}const S=["*"];let U=(()=>{var a;class E extends T.H{toggleDrawer(){this.drawer.toggle(),this.drawer.drawerType=this.drawerType.ai,this.browserStorageService.saveSimpleSessionStorage("azota_ai_chat_box",this.commonService.serializeJson({isOpen:this.drawer.isOpened()}))}goBack(){this.commonService.myNavigationBySpecialQueryString(this.headerBackToLink)}goBackAndReload(){window.location.href=this.commonService.getLocalRouter(this.headerBackToLink)}goBackDialog(){this.handleBackDialog.emit()}clickHandelCancel(){this.handleCancel.emit()}clickHandelConfirm(){this.handleConfirm.emit()}openMenuMobile(){document.getElementById("toggle-menu")?.classList.add("mobile-menu--active")}closeMenuMobile(){document.getElementById("toggle-menu")?.classList.remove("mobile-menu--active")}ngOnInit(){super.ngOnInit(),window.scrollTo(0,0),this.isLogin=this.userService.isLogin()}constructor(l,u,N,F,j){super(),this.processNoticeService=l,this.userService=u,this.drawer=N,this.browserStorageService=F,this.mobileWebviewService=j,this.headerBackToLink="",this.reloadBacktoLink=!1,this.headerTitle="",this.confirmTitle="lang_auto_tiep_tuc",this.disableConfirmBtn=!1,this.checkBackDialog=!1,this.showConfirmButton=!1,this.showInput=!1,this.examName=new g.MJ("",{nonNullable:!0}),this.handleConfirm=new e.bkB,this.handleCancel=new e.bkB,this.handleBackDialog=new e.bkB,this.isLogin=!1,this.isMobileWebView=!1,this.willShowAIBox=!y.c.production||y.c.isProdAzotaVn,this.drawerType=k.I,this.waitDestroy(this.mobileWebviewService.getWebviewBackToListenerSubscriber().subscribe(()=>{this.checkBackDialog?this.goBackDialog():this.headerBackToLink&&this.goBack()}))}}return(a=E).\u0275fac=function(l){return new(l||a)(e.rXU(C.h),e.rXU(v.R),e.rXU(s.o),e.rXU(p.z),e.rXU(f.f))},a.\u0275cmp=e.VBU({type:a,selectors:[["editor-layout"]],inputs:{headerBackToLink:"headerBackToLink",reloadBacktoLink:"reloadBacktoLink",headerTitle:"headerTitle",confirmTitle:"confirmTitle",disableConfirmBtn:"disableConfirmBtn",checkBackDialog:"checkBackDialog",showConfirmButton:"showConfirmButton",showInput:"showInput",examName:"examName"},outputs:{handleConfirm:"handleConfirm",handleCancel:"handleCancel",handleBackDialog:"handleBackDialog"},features:[e.Vt3],ngContentSelectors:S,decls:3,vars:1,consts:[["id","azt-layout","class","azt-layout",4,"ngIf"],[1,"fixed","left-0","bottom-0","p-5","pb-8","azt-hidden"],["id","azt-layout",1,"azt-layout"],[1,"azt-body",2,"padding","0"],[1,"flex"],[1,"content","relative",2,"padding","0","border-radius","0"],[1,"top-bar","py-2","bg-white","dark:bg-darkmode-600","px-3","grid","grid-cols-12","gap-3",2,"height","auto","z-index","0","display","grid"],[1,"col-span-6","md:col-span-2"],["class","mr-3",4,"ngIf"],[4,"ngIf","ngIfElse"],["backLinkNormal",""],[1,"col-span-12","md:col-span-6","azt-hidden","md:block"],[1,"flex","items-center"],[1,"flex-one"],["type","text","class","form-control",3,"formControl","placeholder",4,"ngIf"],[4,"ngIf"],[1,"col-span-6","md:col-span-4"],[1,"flex","items-center","justify-end","pr-4"],[1,"dropdown","mr-1","h-8"],["azt-track-service","editor-layout-im8Qlz-UZ","class","btn btn-sm btn-outline-primary",3,"click",4,"ngIf"],[1,"dropdown","mr-2","sm:mr-4"],[1,"dropdown","header-account-menu"],[3,"isTeacherDashboard"],[1,"col-span-12","md:col-span-8","block","md:hidden"],[1,"flex","items-center","w-full",2,"flex-wrap","wrap"],["type","text","class","form-control text-center",3,"formControl","placeholder",4,"ngIf"],[1,"azt-content"],[1,"mr-3"],["azt-track-service","editor-layout-fIGchmLIEg",3,"href"],["alt","logo","width","95px",3,"src"],["azt-track-service","editor-layout-sjSDq2slMU",1,"btn","btn-transparent",3,"click"],["name","chevron-left","size","20"],["azt-track-service","editor-layout-sjSDq2slMU","class","btn btn-transparent",3,"click",4,"ngIf"],["azt-track-service","editor-layout-0LcNE2-_PP","class","btn btn-transparent",3,"click",4,"ngIf"],["azt-track-service","editor-layout-0LcNE2-_PP",1,"btn","btn-transparent",3,"click"],["type","text",1,"form-control",3,"formControl","placeholder"],["azt-track-service","editor-layout-80eT0Nmtel",1,"btn","btn-secondary","w-20","ml-2",3,"click"],["azt-track-service","editor-layout-DOA7O4mmZV",1,"btn","btn-primary","w-20","ml-2",3,"disabled","click"],["azt-track-service","editor-layout-im8Qlz-UZ",1,"btn","btn-sm","btn-outline-primary",3,"click"],[2,"max-width","20px","max-height","20px",3,"src"],["class","azt-hidden sm:block ml-1",4,"ngIf"],[1,"azt-hidden","sm:block","ml-1"],["type","text",1,"form-control","text-center",3,"formControl","placeholder"],["azt-track-service","editor-layout-IQLlBSOOur",1,"btn","btn-secondary","ml-2",3,"click"],["azt-track-service","editor-layout-_3e-MqRK1i",1,"btn","btn-primary","ml-2",3,"click"]],template:function(l,u){1&l&&(e.NAR(),e.DNE(0,R,35,14,"div",0),e.j41(1,"div",1),e.nrm(2,"header-setting-color"),e.k0s()),2&l&&e.Y8G("ngIf",u.isLogin)},dependencies:[I.bT,g.me,g.BC,g.l_,t.V,n.WGl,o.V,c.O,_.o,I.Jj,d.F2,d.wp,d.gt,d.S0,d.ph],encapsulation:2}),E})()},86359:(B,x,i)=>{i.d(x,{f:()=>y});var e=i(59640),g=i(26860),T=i(73437);let y=(()=>{var k;class C extends e.H{replaceAdsContent(s){if(!s.template||!s.productAttributes)return s;let p=s.productAttributes;return p.push({id:0,productId:0,attributeId:0,value:s.name,attribute:{id:0,categoryId:0,displayName:"NAME",variableName:"NAME"}}),p.push({id:0,productId:0,attributeId:0,value:s.actionUrl??"",attribute:{id:0,categoryId:0,displayName:"URL",variableName:"URL"}}),p.push({id:0,productId:0,attributeId:0,value:s.description??"",attribute:{id:0,categoryId:0,displayName:"DESCRIPTION",variableName:"DESCRIPTION"}}),p.push({id:0,productId:0,attributeId:0,value:s.thumbnailUrl??"",attribute:{id:0,categoryId:0,displayName:"THUMBNAIL",variableName:"THUMBNAIL"}}),p.forEach(f=>{f.attribute?.variableName&&(s.template=this.commonService.replaceAll(s.template,"${"+f.attribute.variableName.toUpperCase()+"}",f.value))}),s}ngOnChanges(){this.obj=this.replaceAdsContent(this.obj)}}return(k=C).\u0275fac=function(){let v;return function(p){return(v||(v=g.xGo(k)))(p||k)}}(),k.\u0275cmp=g.VBU({type:k,selectors:[["azt-frontend-ads-item"]],inputs:{obj:"obj"},features:[g.Vt3,g.OA$],decls:2,vars:3,consts:[[3,"innerHTML"]],template:function(s,p){if(1&s&&(g.nrm(0,"div",0),g.nI1(1,"safeNormalHtmlContent")),2&s){let f;g.Y8G("innerHTML",g.bMT(1,1,null!==(f=p.obj.template)&&void 0!==f?f:""),g.npT)}},dependencies:[T._y],encapsulation:2}),C})()},18470:(B,x,i)=>{i.r(x),i.d(x,{conf:()=>s,language:()=>p});var e=i(41574),g=Object.defineProperty,T=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,k=Object.prototype.hasOwnProperty,v={};((f,I,t,n)=>{if(I&&"object"==typeof I||"function"==typeof I)for(let o of y(I))!k.call(f,o)&&"default"!==o&&g(f,o,{get:()=>I[o],enumerable:!(n=T(I,o))||n.enumerable})})(v,e);var s={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:v.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:v.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:v.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:v.languages.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}},p={defaultToken:"invalid",tokenPostfix:".ts",keywords:["abstract","any","as","asserts","bigint","boolean","break","case","catch","class","continue","const","constructor","debugger","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","infer","instanceof","interface","is","keyof","let","module","namespace","never","new","null","number","object","package","private","protected","public","override","readonly","require","global","return","set","static","string","super","switch","symbol","this","throw","true","try","type","typeof","undefined","unique","unknown","var","void","while","with","yield","async","await","of"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","<<","</",">>",">>>","&","|","^","!","~","&&","||","??","?",":","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=","@"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,regexpctl:/[(){}\[\]\$\^|\-*+?\.]/,regexpesc:/\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/[a-z_$][\w$]*/,{cases:{"@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/\/(?=([^\\\/]|\\.)+\/([dgimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,{token:"regexp",bracket:"@open",next:"@regexp"}],[/[()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/(@digits)[eE]([\-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][\-+]?(@digits))?/,"number.float"],[/0[xX](@hexdigits)n?/,"number.hex"],[/0[oO]?(@octaldigits)n?/,"number.octal"],[/0[bB](@binarydigits)n?/,"number.binary"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],jsdoc:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],regexp:[[/(\{)(\d+(?:,\d*)?)(\})/,["regexp.escape.control","regexp.escape.control","regexp.escape.control"]],[/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,["regexp.escape.control",{token:"regexp.escape.control",next:"@regexrange"}]],[/(\()(\?:|\?=|\?!)/,["regexp.escape.control","regexp.escape.control"]],[/[()]/,"regexp.escape.control"],[/@regexpctl/,"regexp.escape.control"],[/[^\\\/]/,"regexp"],[/@regexpesc/,"regexp.escape"],[/\\\./,"regexp.invalid"],[/(\/)([dgimsuy]*)/,[{token:"regexp",bracket:"@close",next:"@pop"},"keyword.other"]]],regexrange:[[/-/,"regexp.escape.control"],[/\^/,"regexp.invalid"],[/@regexpesc/,"regexp.escape"],[/[^\]]/,"regexp"],[/\]/,{token:"regexp.escape.control",next:"@pop",bracket:"@close"}]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}}}}]);