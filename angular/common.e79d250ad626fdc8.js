"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[8592],{71069:(A,T,s)=>{s.d(T,{Z:()=>O});var e=s(69862),h=s(65592),k=s(61713),f=s(65879),y=s(46558),x=s(82228),w=s(77757);let O=(()=>{class v{replaceImageInContent(t){return new h.y(n=>{if(t.includes("<img ")){var r=this.findAllSubString(t,"<img"),o=[],c=[];r.forEach(a=>{var _=t.indexOf("src=",a),m=t.indexOf('"',Number(_)+5),p=t.substring(Number(_)+5,Number(m)+1);p.includes(";base64")?o.push({oldUrl:p}):p.includes("blob:")&&c.push({oldUrl:p})}),o.length>0?this.reUploadBase64File(o,(a,_)=>{null==_?c&&c.length>0?this.reUploadBlobFile(c,(m,p)=>{null!=p?(t=this.replaceHomeworkContent(t,a),t=this.replaceHomeworkContent(t,m),n.next({errorMessage:void 0,content:t}),n.complete()):(n.next({errorMessage:p,content:t}),n.complete())}):(t=this.replaceHomeworkContent(t,a),n.next({errorMessage:void 0,content:t}),n.complete()):(n.next({errorMessage:_,content:t}),n.complete())}):c.length>0?this.reUploadBlobFile(c,(a,_)=>{null==_?(t=this.replaceHomeworkContent(t,a),n.next({errorMessage:void 0,content:t}),n.complete()):(n.next({errorMessage:_,content:t}),n.complete())}):(t=this.replaceHomeworkContent(t,[]),n.next({errorMessage:void 0,content:t}),n.complete())}else n.next({errorMessage:void 0,content:t}),n.complete()})}replaceHomeworkContent(t,n){return n.length>0&&n.forEach(r=>{t=t.replace(r.oldUrl??"  ",r.newUrl+'" class="w-100 img-fluid"')}),t}findAllSubString(t,n){for(var r=0,o=0,c=[];t.indexOf(n,r)>-1;)o=t.indexOf(n,r),c.push(o),r=o+n.length;return c}getTypeFile(t){var n=t.indexOf(";");return t.substring(5,n)}getFileName(t){var n=t.split("").reverse().join(""),r=n.indexOf(";"),o=n.indexOf("/",r);return n.substring(r,o).split("").reverse().join("")}convertBlobToBase64(t){return new Promise(n=>{var r=new Image;r.crossOrigin="Anonymous",r.addEventListener("load",function(){var o=document.createElement("canvas"),c=o.getContext("2d");o.width=r.width,o.height=r.height,c?.drawImage(r,0,0);var a=o.toDataURL("image/png");n(a)},!1),r.src=t})}reUploadBase64File(t,n){if(t&&t.length>0){let a,c=t.length;for(var r=[],o=0;o<t.length;o++){const _=t[o],m=_.oldUrl?.substring(0,_.oldUrl.length-1);this.startUploadBlobFile(_,m??"",[],(p,C)=>{null==C?r=r.concat(p):a=C,c-=1,0==c&&n(r,a)})}}else n([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}reUploadBlobFile(t,n){if(t&&t.length>0){let a,c=t.length;for(var r=[],o=0;o<t.length;o++){const _=t[o],m=_?.oldUrl?.substring(0,_.oldUrl.length-1);this.convertBlobToBase64(m??"").then(p=>{this.startUploadBlobFile(_,p,[],(C,L)=>{null==L?r=r.concat(C):a=L,c-=1,0==c&&n(r,a)})})}}else n([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}startUploadBlobFile(t,n,r,o){if(n&&""!=n){var c=this.getTypeFile(n),a=this.myPdfService.b64toFile(n,this.getFileName(c),c);(0,k.hv)(a).then(_=>{this.apiUploadService.uploadToCdnForHomework(_).subscribe(m=>{if(m.type!=e.dt.UploadProgress)if(1==m.success){var p={...t,newUrl:m.data?.url??""};r.push(p),o(r,void 0)}else o(r,this.commonService.translateToKeyParam("lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau_loi",m.message??"none"))})})}else o(r,"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}constructor(t,n,r){this.commonService=t,this.apiUploadService=n,this.myPdfService=r}}return v.\u0275fac=function(t){return new(t||v)(f.LFG(y.z),f.LFG(x.W),f.LFG(w.z))},v.\u0275prov=f.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},1763:(A,T,s)=>{s.d(T,{Z:()=>U});var e=s(65879),h=s(56223),k=s(47496),f=s(20553),y=s(44589),x=s(78953),w=s(94960),O=s(88489),v=s(23433),E=s(96814),t=s(24097),n=s(73882),r=s(48244),o=s(36727);function c(i,g){1&i&&(e.TgZ(0,"div",26)(1,"a",27),e.ALo(2,"navigationLocalize"),e._UZ(3,"img",28),e.ALo(4,"convertCdnLinkOfGitHub"),e.qZA()()),2&i&&(e.xp6(1),e.s9C("href",e.lcZ(2,2,"/admin/dashboard"),e.LSH),e.xp6(2),e.Q6J("src",e.lcZ(4,4,"images/logo.svg"),e.LSH))}function a(i,g){if(1&i){const l=e.EpF();e.ynx(0),e.TgZ(1,"button",29),e.NdJ("click",function(){e.CHM(l);const u=e.oxw(2);return e.KtG(u.GoBackAndReload())}),e.O4$(),e.TgZ(2,"svg",30),e._UZ(3,"polyline",31),e.qZA()(),e.BQk()}}function _(i,g){if(1&i){const l=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(l);const u=e.oxw(3);return e.KtG(u.goBack())}),e.O4$(),e.TgZ(1,"svg",30),e._UZ(2,"polyline",31),e.qZA()()}}function m(i,g){if(1&i){const l=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(l);const u=e.oxw(3);return e.KtG(u.goBackDialog())}),e.O4$(),e.TgZ(1,"svg",30),e._UZ(2,"polyline",31),e.qZA()()}}function p(i,g){if(1&i&&(e.YNc(0,_,3,0,"button",32),e.YNc(1,m,3,0,"button",33)),2&i){const l=e.oxw(2);e.Q6J("ngIf",!l.checkBackDialog&&""!=l.headerBackToLink),e.xp6(1),e.Q6J("ngIf",l.checkBackDialog)}}function C(i,g){1&i&&e._UZ(0,"div",35)}function L(i,g){if(1&i&&(e.ynx(0),e._UZ(1,"input",36),e.ALo(2,"mytranslate"),e.BQk()),2&i){const l=e.oxw(2);e.xp6(1),e.s9C("placeholder",e.lcZ(2,2,"lang_auto_nhap_ten")+" ..."),e.Q6J("formControl",l.examName)}}function I(i,g){if(1&i){const l=e.EpF();e.TgZ(0,"div",35)(1,"button",37),e.NdJ("click",function(){e.CHM(l);const u=e.oxw(2);return e.KtG(u.clickHandelCancel())}),e._uU(2),e.ALo(3,"mytranslate"),e.qZA(),e.TgZ(4,"button",38),e.NdJ("click",function(){e.CHM(l);const u=e.oxw(2);return e.KtG(u.clickHandelConfirm())}),e._uU(5),e.ALo(6,"mytranslate"),e.qZA()()}if(2&i){const l=e.oxw(2);e.xp6(2),e.hij(" ",e.lcZ(3,3,"lang_auto_huy")," "),e.xp6(2),e.Q6J("disabled",l.disableConfirmBtn),e.xp6(1),e.hij(" ",e.lcZ(6,5,l.confirmTitle)," ")}}function b(i,g){1&i&&(e.TgZ(0,"span",42),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"AzotaAI")))}function M(i,g){if(1&i){const l=e.EpF();e.TgZ(0,"button",39),e.NdJ("click",function(){e.CHM(l);const u=e.oxw(2);return e.KtG(u.toggleDrawer())}),e._UZ(1,"img",40),e.ALo(2,"convertCdnLinkOfGitHub"),e.YNc(3,b,3,3,"span",41),e.qZA()}if(2&i){const l=e.oxw(2);e.xp6(1),e.Q6J("src",e.lcZ(2,2,"images/azotaAI.png"),e.LSH),e.xp6(2),e.Q6J("ngIf",!l.drawer.isOpened())}}function Z(i,g){if(1&i&&(e.ynx(0),e._UZ(1,"input",43),e.ALo(2,"mytranslate"),e.BQk()),2&i){const l=e.oxw(2);e.xp6(1),e.s9C("placeholder",e.lcZ(2,2,"lang_auto_nhap_ten")+" ..."),e.Q6J("formControl",l.examName)}}function D(i,g){if(1&i){const l=e.EpF();e.TgZ(0,"div",44)(1,"button",45),e.NdJ("click",function(){e.CHM(l);const u=e.oxw(2);return e.KtG(u.clickHandelCancel())}),e._uU(2),e.ALo(3,"mytranslate"),e.qZA(),e.TgZ(4,"button",46),e.NdJ("click",function(){e.CHM(l);const u=e.oxw(2);return e.KtG(u.clickHandelConfirm())}),e._uU(5),e.ALo(6,"mytranslate"),e.qZA()()}if(2&i){const l=e.oxw(2);e.xp6(2),e.hij(" ",e.lcZ(3,2,"lang_auto_huy")," "),e.xp6(3),e.hij(" ",e.lcZ(6,4,l.confirmTitle)," ")}}function B(i,g){if(1&i&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",3),e.YNc(7,c,5,6,"div",7),e.YNc(8,a,4,0,"ng-container",8),e.YNc(9,p,2,2,"ng-template",null,9,e.W1O),e.qZA()(),e.TgZ(11,"div",10)(12,"div",11),e.YNc(13,C,1,0,"div",12),e.TgZ(14,"div",13),e.YNc(15,L,3,4,"ng-container",14),e.qZA(),e.YNc(16,I,7,7,"div",12),e.qZA()(),e.TgZ(17,"div",6)(18,"div",15)(19,"div",16),e.YNc(20,M,4,4,"button",17),e.ALo(21,"async"),e.ALo(22,"allowFeatureForUser"),e.qZA(),e.TgZ(23,"div",18),e._UZ(24,"azt-switch-language"),e.qZA(),e.TgZ(25,"div",18),e._UZ(26,"header-notice-box"),e.qZA(),e.TgZ(27,"div",19),e._UZ(28,"header-account-menu",20),e.qZA()()(),e.TgZ(29,"div",21)(30,"div",22)(31,"div",23),e.YNc(32,Z,3,4,"ng-container",14),e.qZA(),e.YNc(33,D,7,6,"div",24),e.qZA()()(),e.TgZ(34,"div",25),e.Hsn(35),e.qZA()()()()()),2&i){const l=e.MAs(10),d=e.oxw();e.xp6(7),e.Q6J("ngIf",!d.isMobileWebView),e.xp6(1),e.Q6J("ngIf",d.reloadBacktoLink)("ngIfElse",l),e.xp6(5),e.Q6J("ngIf",d.showConfirmButton),e.xp6(2),e.Q6J("ngIf",d.showInput),e.xp6(1),e.Q6J("ngIf",d.showConfirmButton),e.xp6(4),e.Q6J("ngIf",d.willShowAIBox||e.lcZ(21,10,e.xi3(22,12,"","ALLOW_CREATE_EXAM_BY_AI"))),e.xp6(8),e.Q6J("isTeacherDashboard",!0),e.xp6(4),e.Q6J("ngIf",d.showInput),e.xp6(1),e.Q6J("ngIf",d.showConfirmButton)}}const z=["*"];let U=(()=>{class i extends k.Q{toggleDrawer(){this.drawer.toggle(),this.browserStorageService.saveSimpleSessionStorage("azota_ai_chat_box",this.commonService.serializeJson({isOpen:this.drawer.isOpened()}))}goBack(){this.commonService.myNavigationBySpecialQueryString(this.headerBackToLink)}GoBackAndReload(){window.location.href=this.commonService.getLocalRouter(this.headerBackToLink)}goBackDialog(){this.handleBackDialog.emit()}clickHandelCancel(){this.handleCancel.emit()}clickHandelConfirm(){this.handleConfirm.emit()}openMenuMobile(){document.getElementById("toggle-menu")?.classList.add("mobile-menu--active")}closeMenuMobile(){document.getElementById("toggle-menu")?.classList.remove("mobile-menu--active")}ngOnInit(){super.ngOnInit(),window.scrollTo(0,0),this.isLogin=this.userService.isLogin()}constructor(l,d,u,S,P){super(),this.processNoticeService=l,this.userService=d,this.drawer=u,this.browserStorageService=S,this.mobileWebviewService=P,this.headerBackToLink="",this.reloadBacktoLink=!1,this.headerTitle="",this.confirmTitle="lang_auto_tiep_tuc",this.disableConfirmBtn=!1,this.checkBackDialog=!1,this.showConfirmButton=!1,this.showInput=!1,this.examName=new h.NI("",{nonNullable:!0}),this.handleConfirm=new e.vpe,this.handleCancel=new e.vpe,this.handleBackDialog=new e.vpe,this.isLogin=!1,this.isMobileWebView=!1,this.willShowAIBox=!f.N.production||f.N.isProdAzotaVn,this.waitDestroy(this.mobileWebviewService.getWebviewBackToListenerSubscriber().subscribe(()=>{this.checkBackDialog?this.goBackDialog():this.headerBackToLink&&this.goBack()}))}}return i.\u0275fac=function(l){return new(l||i)(e.Y36(y.r),e.Y36(x.U),e.Y36(w.h),e.Y36(O.n),e.Y36(v.r))},i.\u0275cmp=e.Xpm({type:i,selectors:[["editor-layout"]],inputs:{headerBackToLink:"headerBackToLink",reloadBacktoLink:"reloadBacktoLink",headerTitle:"headerTitle",confirmTitle:"confirmTitle",disableConfirmBtn:"disableConfirmBtn",checkBackDialog:"checkBackDialog",showConfirmButton:"showConfirmButton",showInput:"showInput",examName:"examName"},outputs:{handleConfirm:"handleConfirm",handleCancel:"handleCancel",handleBackDialog:"handleBackDialog"},features:[e.qOj],ngContentSelectors:z,decls:1,vars:1,consts:[["id","azt-layout","class","azt-layout",4,"ngIf"],["id","azt-layout",1,"azt-layout"],[1,"azt-body",2,"padding","0"],[1,"flex"],[1,"content","relative",2,"padding","0","border-radius","0"],[1,"top-bar","py-2","bg-white","dark:bg-darkmode-600","px-3","grid","grid-cols-12","gap-3",2,"height","auto","z-index","0","display","grid"],[1,"col-span-6","md:col-span-2"],["class","mr-3",4,"ngIf"],[4,"ngIf","ngIfElse"],["backLinkNormal",""],[1,"col-span-12","md:col-span-8","azt-hidden","md:block"],[1,"flex","items-center"],["class","mr-2","style","width: 25%;",4,"ngIf"],[1,"mr-auto",2,"width","50%","padding-right","10px"],[4,"ngIf"],[1,"flex","items-center","justify-end","pr-4"],[1,"dropdown","mr-1"],["azt-track-service","editor-layout-im8Qlz-UZ","class","btn btn-sm btn-outline-primary",3,"click",4,"ngIf"],[1,"dropdown","mr-2","sm:mr-4"],[1,"dropdown","w-8","h-8"],[3,"isTeacherDashboard"],[1,"col-span-12","md:col-span-8","block","md:hidden"],[1,"flex","items-center","w-full",2,"flex-wrap","wrap"],[1,"mr-auto",2,"width","calc(100% - 70px - 80px - 18px)"],["class","ml-auto",4,"ngIf"],[1,"azt-content"],[1,"mr-3"],["azt-track-service","editor-layout-fIGchmLIEg",3,"href"],["alt","logo","width","95px",3,"src"],["azt-track-service","editor-layout-sjSDq2slMU",1,"btn","btn-transparent",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","w-5","h-5"],["points","15 18 9 12 15 6"],["azt-track-service","editor-layout-sjSDq2slMU","class","btn btn-transparent",3,"click",4,"ngIf"],["azt-track-service","editor-layout-0LcNE2-_PP","class","btn btn-transparent",3,"click",4,"ngIf"],["azt-track-service","editor-layout-0LcNE2-_PP",1,"btn","btn-transparent",3,"click"],[1,"mr-2",2,"width","25%"],["type","text",1,"form-control",2,"text-align","center","border","0","box-shadow","none",3,"formControl","placeholder"],["azt-track-service","editor-layout-80eT0Nmtel",1,"btn","btn-secondary","w-20","mr-2",3,"click"],["azt-track-service","editor-layout-DOA7O4mmZV",1,"btn","btn-primary","w-20",3,"disabled","click"],["azt-track-service","editor-layout-im8Qlz-UZ",1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"w-6","h-5","mr-1",3,"src"],["class","azt-hidden sm:block",4,"ngIf"],[1,"azt-hidden","sm:block"],["type","text",1,"form-control",3,"formControl","placeholder"],[1,"ml-auto"],["azt-track-service","editor-layout-IQLlBSOOur",1,"btn","btn-secondary","mr-2",3,"click"],["azt-track-service","editor-layout-_3e-MqRK1i",1,"btn","btn-primary",3,"click"]],template:function(l,d){1&l&&(e.F$t(),e.YNc(0,B,36,15,"div",0)),2&l&&e.Q6J("ngIf",d.isLogin)},dependencies:[E.O5,h.Fj,h.JJ,h.oH,t.e,n.H,r.y,E.Ov,o.Jy,o.JV,o.Bo,o.ZL],encapsulation:2}),i})()},91085:(A,T,s)=>{s.d(T,{f:()=>r});var e=s(65879),h=s(56223),k=s(47496),f=s(91765),y=s(46558),x=s(96814),w=s(92596),O=s(36727);function v(o,c){if(1&o){const a=e.EpF();e.TgZ(0,"div",4)(1,"div",5)(2,"a",6),e.NdJ("click",function(){e.CHM(a);const m=e.oxw();return e.KtG(m.backToSelectClass())}),e.O4$(),e.TgZ(3,"svg",7),e._UZ(4,"polyline",8),e.qZA(),e._uU(5),e.ALo(6,"mytranslate"),e.qZA()()()}2&o&&(e.xp6(5),e.hij(" ",e.lcZ(6,1,"lang_button_back")," "))}function E(o,c){if(1&o){const a=e.EpF();e.TgZ(0,"div",11)(1,"div",12),e.NdJ("click",function(){const p=e.CHM(a).$implicit,C=e.oxw(2);return e.KtG(C.selectedClass(p))}),e.TgZ(2,"div",13)(3,"div",14)(4,"span",15),e._uU(5),e.ALo(6,"slice"),e.qZA()(),e.TgZ(7,"div",16)(8,"span",17),e._uU(9),e.ALo(10,"mytranslate"),e.qZA()()()()()}if(2&o){const a=c.$implicit;let _;e.xp6(4),e.s9C("matTooltip",a.name&&a.name.length>30?a.name:""),e.xp6(1),e.Oqu(a.name&&a.name.length>30?e.Dn7(6,3,a.name,0,28)+"..":a.name),e.xp6(4),e.hij(" ",e.lcZ(10,7,"lang_auto_si_so")+": "+(null!==(_=null==a?null:a.countStudents)&&void 0!==_?_:0)," ")}}function t(o,c){if(1&o&&(e.TgZ(0,"div")(1,"div",9),e.YNc(2,E,11,9,"div",10),e.qZA()()),2&o){const a=e.oxw();e.xp6(2),e.Q6J("ngForOf",a.classList)}}function n(o,c){1&o&&(e.TgZ(0,"div",18)(1,"h5",19),e._uU(2),e.ALo(3,"mytranslate"),e.qZA()()),2&o&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"lang_auto_de_thi_chua_duoc_cau_hinh_theo_lop_vui_long_lien_he_voi_giao_vien")," "))}let r=(()=>{class o extends k.Q{backToSelectClass(){this.backToEnterEmail.emit()}approvedToClass(){var a=this.getFormValue();this.approvedByName.emit({nameEmit:a.fullName,classId:this.classObj?.id})}selectedClass(a){this.selectClassroom.emit({classObj:a,type:1})}getFormValue(){return this.formName.getRawValue()}ngOnChanges(){this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass)}ngOnInit(){this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass),super.ngOnInit()}constructor(a){super(),this.commonService=a,this.dataClass=[],this.isSearchTeacher=!1,this.isMobile=!1,this.selectClassroom=new e.vpe,this.approvedByName=new e.vpe,this.backToEnterEmail=new e.vpe,this.classList=[],this.formName=new h.cw({fullName:new h.NI("",{nonNullable:!0,validators:[h.kI.required,f._.noWhiteSpace]})})}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(y.z))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-select-classes"]],inputs:{dataClass:"dataClass",isSearchTeacher:"isSearchTeacher",isMobile:"isMobile"},outputs:{selectClassroom:"selectClassroom",approvedByName:"approvedByName",backToEnterEmail:"backToEnterEmail"},features:[e.qOj,e.TTD],decls:5,vars:3,consts:[[1,"azt-select-class-component"],["class","grid grid-cols-12 gap-5",4,"ngIf"],[4,"ngIf","ngIfElse"],["NoClassData",""],[1,"grid","grid-cols-12","gap-5"],[1,"col-span-12"],["azt-track-service","select_classes-sP7Jk7jin3",1,"text-primary","flex","items-center",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","mr-2"],["points","15 18 9 12 15 6"],[1,"grid","grid-cols-12","gap-5","mt-3","px-5"],["class","col-span-12 md:col-span-4 lg:col-span-3 zoom-in",4,"ngFor","ngForOf"],[1,"col-span-12","md:col-span-4","lg:col-span-3","zoom-in"],["azt-track-service","select_classes-ZhNQlrppt1",1,"flex","items-center","p-3","rounded-md","bg-slate-100","dark:bg-darkmode-300",2,"min-height","80px","background-color","#c1d9f159",3,"click"],[1,"ml-2","text-left","mt-0","w-full"],[1,"azt-student-name"],[1,"font-medium",3,"matTooltip"],[1,"mt-1"],[1,"text-xs","text-slate-500","font-medium"],[1,"text-center","alert","alert-danger","mt-3"],[1,"text-medium","mb-0"]],template:function(a,_){if(1&a&&(e.TgZ(0,"div",0),e.YNc(1,v,7,3,"div",1),e.YNc(2,t,3,1,"div",2),e.YNc(3,n,4,3,"ng-template",null,3,e.W1O),e.qZA()),2&a){const m=e.MAs(4);e.xp6(1),e.Q6J("ngIf",_.isSearchTeacher),e.xp6(1),e.Q6J("ngIf",_.classList&&_.classList.length>0)("ngIfElse",m)}},dependencies:[x.sg,x.O5,w.gM,x.OU,O.JV],encapsulation:2}),o})()}}]);