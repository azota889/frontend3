"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[6208],{46208:(w,I,o)=>{o.r(I),o.d(I,{DashboardModule:()=>xt});var b=o(5502),s=o(54460),g=o(10936),v=o(89163),c=o(65162),S=o(69223),p=o(15343),l=o(13763),u=o(25571),C=o(44233),T=o(21656),R=o(70050),d=o(7050),f=o(91100),_=o(43234),x=o(1133),j=o(34158),z=o(59640),Y=o(48188),t=o(26860),O=o(36484),V=o(51698),H=o(85710),P=o(2812),A=o(84828),E=o(50589);let G=(()=>{var e;class r{isWelcomeDashboard(n){return new V.c(a=>{this.getDashboardData(n,(m,D)=>{if(m&&!D){var k=1==Number(m.useWelcomeDashboard);a.next(k),a.complete()}else a.next(!1),a.complete()})})}checkRedirectDashboard(n,a){this.commonService.myNavigation(n&&!a?"/admin/dashboard-welcome":"/admin/dashboard")}getDashboardData(n,a){var m=this.browserStorageService.getSimpleSessionStorage(this.dashboardDataStorageKey);let D=m?this.commonService.castJsonToObj(m):void 0;n&&D?a(D,""):this.subscriptions.add(this.dashboardService.apiDashboardGetObjGet().subscribe(k=>{1==k.success&&k.data?(this.browserStorageService.saveSimpleSessionStorage(this.dashboardDataStorageKey,this.commonService.serializeJson(k.data)),a(k.data,"")):(this.browserStorageService.removeSimpleSessionStorage(this.dashboardDataStorageKey),a(void 0,k.message??""))}))}constructor(n,a,m){this.commonService=n,this.dashboardService=a,this.browserStorageService=m,this.subscriptions=new H.yU,this.dashboardDataStorageKey="azt_dashboard_data"}}return(e=r).\u0275fac=function(n){return new(n||e)(t.KVO(P.R),t.KVO(A.I8),t.KVO(E.z))},e.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),r})();var X=o(52509),J=o(39763),K=o(28787),Z=o(9002),B=o(47712),Q=o(23356),q=o(55037),h=o(76975);const tt=function(e){return[e]};function et(e,r){1&e&&(t.j41(0,"span"),t.EFF(1," \xa0 "),t.j41(2,"a",4),t.nI1(3,"navigationLocalize"),t.EFF(4),t.nI1(5,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.Y8G("routerLink",t.eq3(6,tt,t.bMT(3,2,"/business/business-configs/0"))),t.R7$(2),t.JRh(t.bMT(5,4,"lang_business_package_see_billing_details")))}const nt=function(e){return{"text-danger":e}};function at(e,r){if(1&e&&(t.j41(0,"div",1)(1,"b"),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s(),t.EFF(4),t.nI1(5,"formatFullDateTimeByUserUnitPipe"),t.j41(6,"span",2),t.EFF(7),t.nI1(8,"mytranslate"),t.nI1(9,"mytranslate"),t.k0s(),t.DNE(10,et,6,8,"span",3),t.k0s()),2&e){const i=t.XpG();t.R7$(2),t.SpI("",t.bMT(3,8,"lang_business_config_billing_end_time"),":"),t.R7$(2),t.SpI(" ",t.bMT(5,10,i.subscriptionObj.endTime)," ( "),t.R7$(2),t.Y8G("ngClass",t.eq3(16,nt,i.subscriptionTimeDtoObj.days<10)),t.R7$(1),t.LHq("",i.subscriptionTimeDtoObj.days," ",t.bMT(8,12,"lang_auto_day"),", ",i.subscriptionTimeDtoObj.hours," ",t.bMT(9,14,"lang_auto_clock"),")"),t.R7$(3),t.Y8G("ngIf",i.subscriptionObj.isAdminOfBusiness)}}let ot=(()=>{var e;class r extends z.H{ngOnInit(){this.isBusinessDomain&&this.sAztBusinessPackageExpiredService.getSubscriptionData((n,a,m)=>{this.subscriptionObj=a,this.subscriptionTimeDtoObj=m})}constructor(n){super(),this.sAztBusinessPackageExpiredService=n,this.sAztConfigService=(0,t.WQX)(Q.u),this.subscriptionObj=void 0,this.subscriptionTimeDtoObj={days:0,hours:0,minutes:0}}}return(e=r).\u0275fac=function(n){return new(n||e)(t.rXU(q.Z))},e.\u0275cmp=t.VBU({type:e,selectors:[["azota-business-package-warning-box"]],features:[t.Vt3],decls:1,vars:1,consts:[["class","pt-3",4,"ngIf"],[1,"pt-3"],[3,"ngClass"],[4,"ngIf"],["azt-track-service","azota-business-package-expired-v3CxKNRMa",1,"link-color",3,"routerLink"]],template:function(n,a){1&n&&t.DNE(0,at,11,18,"div",0),2&n&&t.Y8G("ngIf",a.subscriptionObj&&a.subscriptionTimeDtoObj.days<5)},dependencies:[s.YU,s.bT,c.Wk,h.F2,h.wp,h.Rr],encapsulation:2}),r})();var N=o(96451),it=o(33887),rt=o(2915);let L=(()=>{var e;class r extends it._{constructor(n,a){super(a,n),this.dialogRef=n,this.data=a,this.isNotShowAgain=new g.MJ(!1,{nonNullable:!0})}ngOnInit(){}onNoClick(){this.dialogRef.close(this.isNotShowAgain.value)}}return(e=r).\u0275fac=function(n){return new(n||e)(t.rXU(v.CP),t.rXU(v.Vh))},e.\u0275cmp=t.VBU({type:e,selectors:[["new-feature-notice-dialog"]],features:[t.Vt3],decls:14,vars:11,consts:[[1,"box","p-5"],[3,"innerHTML"],["align","end"],[1,"flex","items-center","w-full",2,"justify-content","space-between"],[1,"form-check"],["id","is-not-show-again","type","checkbox",1,"form-check-input",3,"formControl"],["for","is-not-show-again",1,"form-check-label"],["azt-track-service","new-feature-iAX2JunJEbn",1,"btn","btn-primary","w-24",3,"mat-dialog-close","click"]],template:function(n,a){1&n&&(t.j41(0,"div",0)(1,"azt-mat-dialog-content"),t.nrm(2,"div",1),t.nI1(3,"safeSuperAdminHtmlContent"),t.k0s(),t.j41(4,"mat-dialog-actions",2)(5,"div",3)(6,"div",4),t.nrm(7,"input",5),t.j41(8,"label",6),t.EFF(9),t.nI1(10,"mytranslate"),t.k0s()(),t.j41(11,"button",7),t.bIt("click",function(){return a.onNoClick()}),t.EFF(12),t.nI1(13,"mytranslate"),t.k0s()()()()),2&n&&(t.R7$(2),t.Y8G("innerHTML",t.bMT(3,5,a.data.description),t.npT),t.R7$(5),t.Y8G("formControl",a.isNotShowAgain),t.R7$(2),t.SpI(" ",t.bMT(10,7,"lang_testbank_create_exam_width_file_pdf_not_view")," "),t.R7$(2),t.Y8G("mat-dialog-close",a.isNotShowAgain.value),t.R7$(1),t.JRh(t.bMT(13,9,"lang_button_close")))},dependencies:[v.tx,v.E7,g.Zm,g.BC,g.l_,rt.U,h.wp,h.tn],encapsulation:2}),r})();var st=o(55465),ct=o(46899),$=o(17818);const F=function(){return{"mr-2":!0}},lt=function(e){return[e]};let U=(()=>{var e;class r extends z.H{getNewFeatureNotice(){this.initStatusObj(),this.waitDestroy(this.globalNoticeService.apiGlobalNoticeGetObjGet(0).subscribe(n=>{1==n.success?(n.data?.obj?(this.checkFeatureNotice=!0,this.sAztDialogService.open(L,{width:"750px",data:n.data?.obj,restoreFocus:!1}).afterClosed().subscribe(m=>{if(m)try{this.setMarkAsReadFeaturesNotice()}catch(D){console.log(D)}})):this.checkFeatureNotice=!1,this.successStatusObj()):this.errorStatusObj(n.message??"",!0)}))}showNewFeatureNotice(n){this.waitDestroy(this.globalNoticeService.apiGlobalNoticeGetObjGet(n?1:0).subscribe(a=>{1==a.success?a.data?.obj&&this.sAztDialogService.open(L,{width:"750px",data:a.data?.obj,restoreFocus:!1}).afterClosed().subscribe(D=>{}):this.errorStatusObj(a.message??"",!0)}))}setMarkAsReadFeaturesNotice(){this.waitDestroy(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(n=>{1==n.success?this.successStatusObj():this.errorStatusObj(n.message??"",!0)}))}ngOnInit(){this.initStatusObj(),this.user_obj=this.userService.getUserObj(),this.currentVersion=this.envService.getCurrentVersion(),this.isTeacherRole=this.userService.isTeacherRole(),this.getNewFeatureNotice(),super.ngOnInit()}constructor(n,a,m,D){super(),this.envService=n,this.sAztDialogService=a,this.userService=m,this.globalNoticeService=D,this.currentVersion="",this.checkFeatureNotice=!1,this.isTeacherRole=!1}}return(e=r).\u0275fac=function(n){return new(n||e)(t.rXU(st.t),t.rXU(ct.i),t.rXU(O.R),t.rXU(A.fV))},e.\u0275cmp=t.VBU({type:e,selectors:[["footer-info-menu"]],features:[t.Vt3],decls:37,vars:34,consts:[[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip","matMenuTriggerFor"],["name","info","size","24","strokeWidth","2"],["dashboardMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],["azt-track-service","footer-info-menu-4xo_9lVt1J",1,"dropdown-item",3,"click"],["name","package-plus","size","16",3,"ngClass"],["azt-track-service","footer-info-menu-Mym6pF4eC7","href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["name","users","size","16",3,"ngClass"],["azt-track-service","footer-info-menu-nstjfJK4k1","href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["name","facebook","size","16",3,"ngClass"],[1,"dropdown-divider","border-slate-200","dark:border-darkmode-400"],["azt-track-service","footer-info-menu-MF6sCK5s_Vh",1,"dropdown-item",3,"routerLink"],["name","code","size","16",3,"ngClass"],[1,"dropdown-item","hover:bg-white/5"],["name","rocket","size","16",3,"ngClass"]],template:function(n,a){if(1&n&&(t.j41(0,"button",0),t.nI1(1,"mytranslate"),t.nrm(2,"lucide-icon",1),t.k0s(),t.j41(3,"mat-menu",null,2)(5,"div",3)(6,"ul",4)(7,"li")(8,"a",5),t.bIt("click",function(){return a.showNewFeatureNotice(!0)}),t.nrm(9,"lucide-icon",6),t.EFF(10),t.nI1(11,"mytranslate"),t.k0s()(),t.j41(12,"li")(13,"a",7),t.nrm(14,"lucide-icon",8),t.EFF(15),t.nI1(16,"mytranslate"),t.k0s()(),t.j41(17,"li")(18,"a",9),t.nrm(19,"lucide-icon",10),t.EFF(20),t.nI1(21,"mytranslate"),t.k0s()(),t.j41(22,"li"),t.nrm(23,"hr",11),t.k0s(),t.j41(24,"li")(25,"a",12),t.nI1(26,"navigationLocalize"),t.nrm(27,"lucide-icon",13),t.EFF(28),t.nI1(29,"mytranslate"),t.k0s()(),t.j41(30,"li"),t.nrm(31,"hr",11),t.k0s(),t.j41(32,"li")(33,"a",14),t.nrm(34,"lucide-icon",15),t.EFF(35),t.nI1(36,"mytranslate"),t.k0s()()()()()),2&n){const m=t.sdS(4);t.FS9("matTooltip",t.bMT(1,13,"lang_auto_cong_dong_ho_tro")),t.Y8G("matMenuTriggerFor",m),t.R7$(9),t.Y8G("ngClass",t.lJ4(27,F)),t.R7$(1),t.SpI(" ",t.bMT(11,15,"lang_auto_tinh_nang_moi")," "),t.R7$(4),t.Y8G("ngClass",t.lJ4(28,F)),t.R7$(1),t.SpI(" ",t.bMT(16,17,"lang_auto_cong_dong_ho_tro")," "),t.R7$(4),t.Y8G("ngClass",t.lJ4(29,F)),t.R7$(1),t.SpI(" ",t.bMT(21,19,"lang_auto_fanpage_azota")," "),t.R7$(5),t.Y8G("routerLink",t.eq3(30,lt,t.bMT(26,21,"/admin/testbank/create-website"))),t.R7$(2),t.Y8G("ngClass",t.lJ4(32,F)),t.R7$(1),t.SpI(" ",t.bMT(29,23,"lang_auto_own_website")," "),t.R7$(6),t.Y8G("ngClass",t.lJ4(33,F)),t.R7$(1),t.SpI(" ",t.bMT(36,25,"lang_auto_phien_ban")+": "+a.currentVersion," ")}},dependencies:[c.Wk,s.YU,$.kk,$.Cp,B.oV,p.WGl,h.F2,h.wp],encapsulation:2}),r})();const mt=function(e){return[e]};function dt(e,r){1&e&&(t.j41(0,"a",1),t.nI1(1,"navigationLocalize"),t.nrm(2,"lucide-icon",2),t.k0s()),2&e&&t.Y8G("routerLink",t.eq3(3,mt,t.bMT(1,1,"/super-role/admin-tool")))}let W=(()=>{var e;class r extends z.H{ngOnInit(){super.ngOnInit()}constructor(n){super(),this.userService=n}}return(e=r).\u0275fac=function(n){return new(n||e)(t.rXU(O.R))},e.\u0275cmp=t.VBU({type:e,selectors:[["footer-admin-menu"]],features:[t.Vt3],decls:1,vars:1,consts:[["azt-track-service","footer-admin-menu-7W4rraHk8","class","btn btn-outline-primary dropdown-toggle btn-transparent mb-5 ml-5",3,"routerLink",4,"ngIf"],["azt-track-service","footer-admin-menu-7W4rraHk8",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"routerLink"],["name","users","size","24"]],template:function(n,a){1&n&&t.DNE(0,dt,3,5,"a",0),2&n&&t.Y8G("ngIf",a.userService.isSupperAdminRole())},dependencies:[c.Wk,s.bT,p.WGl,h.F2],encapsulation:2}),r})();function ut(e,r){if(1&e&&(t.j41(0,"div",34),t.EFF(1),t.k0s()),2&e){const i=t.XpG();t.R7$(1),t.Lme(" ",i.currentUrl," : userId: ",i.curUserId," ")}}const M=function(e){return[e]},y=function(){return{"text-primary mx-auto":!0}};function ht(e,r){1&e&&(t.j41(0,"div",35)(1,"a",36),t.nI1(2,"navigationLocalize"),t.j41(3,"div",37),t.nrm(4,"lucide-icon",38),t.j41(5,"div",9),t.EFF(6),t.nI1(7,"mytranslate"),t.k0s()()()()),2&e&&(t.R7$(1),t.Y8G("routerLink",t.eq3(7,M,t.bMT(2,3,"/admin/test-market/introduce"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(9,y)),t.R7$(2),t.SpI(" ",t.bMT(7,5,"lang_dashboard_make_money_title")," "))}function gt(e,r){1&e&&(t.j41(0,"div",35)(1,"a",39),t.nI1(2,"navigationLocalize"),t.j41(3,"div",7),t.nrm(4,"lucide-icon",40),t.j41(5,"div",9),t.EFF(6),t.nI1(7,"mytranslate"),t.k0s()()()()),2&e&&(t.R7$(1),t.Y8G("routerLink",t.eq3(7,M,t.bMT(2,3,"/document-market/list-documents/all-documents/1"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(9,y)),t.R7$(2),t.SpI(" ",t.bMT(7,5,"lang_document_market_title")," "))}function pt(e,r){1&e&&(t.j41(0,"div",41)(1,"a",42),t.nI1(2,"navigationLocalize"),t.j41(3,"div",7),t.nrm(4,"lucide-icon",43),t.j41(5,"div",9),t.EFF(6),t.nI1(7,"mytranslate"),t.k0s()()()()),2&e&&(t.R7$(1),t.Y8G("routerLink",t.bMT(2,3,"/business/dashboard")),t.R7$(3),t.Y8G("ngClass",t.lJ4(7,y)),t.R7$(2),t.SpI(" ",t.bMT(7,5,"lang_cms_business_dashboard_title")," "))}function bt(e,r){1&e&&(t.j41(0,"div",44)(1,"a",45),t.nI1(2,"navigationLocalize"),t.EFF(3),t.nI1(4,"mytranslate"),t.k0s()()),2&e&&(t.R7$(1),t.Y8G("routerLink",t.eq3(6,M,t.bMT(2,2,"/auth/register-for-organization"))),t.R7$(2),t.SpI(" ",t.bMT(4,4,"lang_dashboard_register_azota_business_button")," "))}function vt(e,r){1&e&&t.nrm(0,"footer-info-menu")}function ft(e,r){1&e&&(t.j41(0,"a",46),t.nI1(1,"mytranslate"),t.nrm(2,"lucide-icon",47),t.k0s()),2&e&&t.FS9("matTooltip",t.bMT(1,1,"lang_auto_huong_dan"))}function _t(e,r){if(1&e){const i=t.RV6();t.j41(0,"a",48),t.bIt("click",function(){t.eBV(i);const a=t.XpG();return t.Njj(a.toggleDrawer())}),t.nI1(1,"mytranslate"),t.nrm(2,"lucide-icon",49),t.k0s()}2&e&&t.FS9("matTooltip",t.bMT(1,1,"lang_auto_huong_dan"))}let Dt=(()=>{var e;class r extends z.H{toggleDrawer(){this.chatBoxDrawer.toggle(),this.chatBoxDrawer.drawerType=this.drawerType.guide,this.browserStorageService.removeStorage("isFirstTime"),this.browserStorageService.saveSimpleSessionStorage("azota_ai_chat_box",this.commonService.serializeJson({isOpen:this.chatBoxDrawer.isOpened()}))}ngOnInit(){super.ngOnInit(),this.initStatusObj(),this.aztDashboardDataService.getDashboardData(!0,(n,a)=>{a?this.showErrorSnack(a):n?.useWelcomeDashboard&&this.aztDashboardDataService.checkRedirectDashboard(!this.isBusinessDomain,this.isMobileWebView)}),this.curUserId=this.userService.getUserObj().id,this.commonService.translateMetaData({title:"lang_cms_test_dashboard_title",description:"lang_cms_test_dashboard_description",image:"lang_cms_test_image"}),this.mobileWebviewService.sendSimpleMessage("OPEN_MAIN_DASHBOARD")}constructor(n,a,m,D,k,wt,Ot){super(),this.userService=n,this.aztDashboardDataService=a,this.mobileWebviewService=m,this.zaloService=D,this.userLoginStateService=k,this.browserStorageService=wt,this.chatBoxDrawer=Ot,this.showTestMarketButton=!_.c.production||_.c.isProdAzotaVn,this.drawerType=Y.I,this.currentUrl=!_.c.production&&this.isMobileWebView?this.commonService.getCurrentDomain():void 0,this.curUserId=0,this.userLoginStateService.loginMessage.subscribe(()=>{setTimeout(()=>{this.zaloService.zaloInfoRequired()})})}}return(e=r).\u0275fac=function(n){return new(n||e)(t.rXU(O.R),t.rXU(G),t.rXU(X.f),t.rXU(J.m),t.rXU(K.X),t.rXU(E.z),t.rXU(Z.o))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-test-dashboard"]],features:[t.Vt3],decls:62,vars:69,consts:[[3,"headerTitle"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","mt-5"],["class","pt-2",4,"ngIf"],[1,"mb-3","grid","grid-cols-12","intro-y","sm:gap-10"],[1,"col-span-12","grid","grid-cols-12","gap-6","mt-4","flex","items-center"],["tourAnchor","azt-tour-1",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-rF6MSAArUsY",3,"routerLink"],[1,"box","p-8","zoom-in","h-full","text-center"],["name","file-text","size","48",3,"ngClass"],[1,"font-medium","text-center","text-base","mt-3"],["tourAnchor","azt-tour-2",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-n5d-c2lLv1K",3,"routerLink"],["name","folder","size","48",3,"ngClass"],["tourAnchor","azt-tour-3",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-4P7SGaAp07c",3,"routerLink"],["name","layers","size","48",3,"ngClass"],["tourAnchor","azt-tour-4",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-7d_U3ZeXpGR",3,"routerLink"],["name","users","size","48",3,"ngClass"],["class","col-span-6 md:col-span-3 intro-y h-full","tourAnchor","azt-tour-5",4,"ngIf"],["class","col-span-6 md:col-span-3 intro-y h-full","tourAnchor","azt-tour-6",4,"ngIf"],["class","col-span-12 mt-5 intro-y h-full mb-8",4,"ngIf"],[1,"intro-y","col-span-12","box","mt-10",2,"display","none"],[1,"flex","flex-col"],[1,"flex","items-center"],["rows","1","placeholder","B\u1ea1n mu\u1ed1n l\xe0m g\xec?...",1,"resize-none","form-control","border-transparent","shadow-none","focus:border-transparent","focus:ring-0",2,"margin","5px","outline","none","border","0","box-shadow","none"],["azt-track-service","dashboard-main-43hyFh5fD","href","javascript:;",1,"w-8","h-8","sm:w-10","sm:h-10","block","text-primary","rounded-full","flex-none","flex","items-center","justify-center","mr-2"],["name","send","size","18"],[1,"absolute","left-0","bottom-0","index"],[4,"ngIf"],["azt-track-service","dashboard-main-78XWJErDG4V",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip","routerLink"],["name","trash","size","24","strokeWidth","2"],["class","btn btn-outline-primary dropdown-toggle btn-transparent mb-4 ml-4","azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",3,"matTooltip",4,"ngIf"],["class","btn btn-outline-primary dropdown-toggle btn-transparent mb-4 ml-4","azt-track-service","dashboard-main-J6ZAMHq8uVG",3,"matTooltip","click",4,"ngIf"],[1,"pt-2"],["tourAnchor","azt-tour-5",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-Qv44FAUiKc1",3,"routerLink"],[1,"box","p-8","zoom-in","h-full","text-center","relative"],["name","landmark","size","48",3,"ngClass"],["azt-track-service","dashboard-main-2s1OXiSzx",3,"routerLink"],["name","book-open","size","48",3,"ngClass"],["tourAnchor","azt-tour-6",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-MzpKqpLgI",3,"routerLink"],["name","plug","size","48",2,"transform","rotate(45deg)",3,"ngClass"],[1,"col-span-12","mt-5","intro-y","h-full","mb-8"],["azt-track-service","dashboard-main-E42HRTjN8",1,"premium-btn",3,"routerLink"],["azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip"],["name","circle-help","size","24","strokeWidth","2"],["azt-track-service","dashboard-main-J6ZAMHq8uVG",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip","click"],["name","circle-help","size","24"]],template:function(n,a){1&n&&(t.j41(0,"teacher-layout",0),t.nI1(1,"mytranslate"),t.j41(2,"div",1),t.DNE(3,ut,2,2,"div",2),t.nrm(4,"azota-business-package-warning-box"),t.j41(5,"div",3)(6,"div",4)(7,"div",5)(8,"a",6),t.nI1(9,"navigationLocalize"),t.j41(10,"div",7),t.nrm(11,"lucide-icon",8),t.j41(12,"div",9),t.EFF(13),t.nI1(14,"mytranslate"),t.k0s()()()(),t.j41(15,"div",10)(16,"a",11),t.nI1(17,"navigationLocalize"),t.j41(18,"div",7),t.nrm(19,"lucide-icon",12),t.j41(20,"div",9),t.EFF(21),t.nI1(22,"mytranslate"),t.k0s()()()(),t.j41(23,"div",13)(24,"a",14),t.nI1(25,"navigationLocalize"),t.j41(26,"div",7),t.nrm(27,"lucide-icon",15),t.j41(28,"div",9),t.EFF(29),t.nI1(30,"mytranslate"),t.k0s()()()(),t.j41(31,"div",16)(32,"a",17),t.nI1(33,"navigationLocalize"),t.j41(34,"div",7),t.nrm(35,"lucide-icon",18),t.j41(36,"div",9),t.EFF(37),t.nI1(38,"mytranslate"),t.k0s()()()(),t.DNE(39,ht,8,10,"div",19),t.nI1(40,"showFeatureWhenIsNotBusinessDomain"),t.DNE(41,gt,8,10,"div",19),t.nI1(42,"showFeatureWhenIsNotBusinessDomain"),t.DNE(43,pt,8,8,"div",20),t.nI1(44,"async"),t.nI1(45,"allowFeatureBusinessForUser"),t.k0s(),t.DNE(46,bt,5,8,"div",21),t.j41(47,"div",22)(48,"div",23)(49,"div",24),t.nrm(50,"textarea",25),t.j41(51,"a",26),t.nrm(52,"lucide-icon",27),t.k0s()()()()(),t.j41(53,"div",28),t.DNE(54,vt,1,0,"footer-info-menu",29),t.j41(55,"button",30),t.nI1(56,"mytranslate"),t.nI1(57,"navigationLocalize"),t.nrm(58,"lucide-icon",31),t.k0s(),t.DNE(59,ft,3,3,"a",32),t.DNE(60,_t,3,3,"a",33),t.nrm(61,"footer-admin-menu"),t.k0s()()()),2&n&&(t.Y8G("headerTitle",t.bMT(1,23,"lang_cms_test_dashboard_title")),t.R7$(3),t.Y8G("ngIf",a.currentUrl),t.R7$(5),t.Y8G("routerLink",t.eq3(55,M,t.bMT(9,25,"/admin/testbank/document-management/1/0/1"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(57,y)),t.R7$(2),t.SpI(" ",t.bMT(14,27,"lang_auto_bai_tap")," "),t.R7$(3),t.Y8G("routerLink",t.eq3(58,M,t.bMT(17,29,"/admin/testbank/document-management/0/0/1"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(60,y)),t.R7$(2),t.SpI(" ",t.bMT(22,31,"lang_auto_de_thi")," "),t.R7$(3),t.Y8G("routerLink",t.eq3(61,M,t.bMT(25,33,"/admin/student/manage-classroom/0"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(63,y)),t.R7$(2),t.SpI(" ",t.bMT(30,35,"lang_auto_quan_ly_lop")," "),t.R7$(3),t.Y8G("routerLink",t.eq3(64,M,t.bMT(33,37,"/admin/teacher-group/0/0"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(66,y)),t.R7$(2),t.SpI(" ",t.bMT(38,39,"lang_dashboard_teacher_management_box")," "),t.R7$(2),t.Y8G("ngIf",t.bMT(40,41,"")&&a.showTestMarketButton),t.R7$(2),t.Y8G("ngIf",t.bMT(42,43,"")),t.R7$(2),t.Y8G("ngIf",t.bMT(44,45,t.brH(45,47,"","training_center_menu",!1))),t.R7$(3),t.Y8G("ngIf",!a.isBusinessDomain),t.R7$(8),t.Y8G("ngIf",!a.isBusinessDomain),t.R7$(1),t.FS9("matTooltip",t.bMT(56,51,"lang_auto_thung_rac")),t.Y8G("routerLink",t.eq3(67,M,t.bMT(57,53,"/admin/trash/0"))),t.R7$(4),t.Y8G("ngIf",!a.isBusinessDomain),t.R7$(1),t.Y8G("ngIf",a.isBusinessDomain))},dependencies:[c.Wk,s.YU,s.bT,B.oV,ot,N.Q,p.WGl,U,W,s.Jj,h.F2,h.wp,h.bj,h.z0],encapsulation:2}),r})();var St=o(18718);function Ct(e,r){if(1&e&&t.nrm(0,"azt-loading-effect",2),2&e){const i=t.XpG();t.Y8G("currentStatusObj",i.statusObj)}}function zt(e,r){1&e&&t.nrm(0,"footer-info-menu")}function kt(e,r){if(1&e&&(t.j41(0,"div",21),t.DNE(1,zt,1,0,"footer-info-menu",22),t.nrm(2,"footer-admin-menu"),t.k0s()),2&e){const i=t.XpG(2);t.R7$(1),t.Y8G("ngIf",!i.isBusinessDomain)}}const It=function(){return{"text-primary mr-5":!0}},Mt=function(){return{"text-success mr-5":!0}},yt=function(){return{"text-pending mr-5":!0}};function Tt(e,r){if(1&e){const i=t.RV6();t.j41(0,"div",3)(1,"div",4)(2,"h3",5),t.EFF(3),t.nI1(4,"mytranslate"),t.k0s(),t.j41(5,"p",6),t.nrm(6,"span",7),t.nI1(7,"mytranslate"),t.EFF(8," .\xa0 "),t.j41(9,"a",8),t.EFF(10),t.nI1(11,"mytranslate"),t.k0s()()(),t.j41(12,"div",9)(13,"div",10)(14,"div",11)(15,"a",12),t.bIt("click",function(){t.eBV(i);const a=t.XpG();return t.Njj(a.redirectToCreateDocument())}),t.j41(16,"div",13),t.nrm(17,"lucide-icon",14),t.j41(18,"div",15),t.EFF(19),t.nI1(20,"mytranslate"),t.k0s()()()(),t.j41(21,"div",11)(22,"a",16),t.bIt("click",function(){t.eBV(i);const a=t.XpG();return t.Njj(a.redirectToGlobalBank())}),t.j41(23,"div",13),t.nrm(24,"lucide-icon",17),t.j41(25,"div",15),t.EFF(26),t.nI1(27,"mytranslate"),t.k0s()()()(),t.j41(28,"div",11)(29,"a",18),t.bIt("click",function(){t.eBV(i);const a=t.XpG();return t.Njj(a.redirectToAzotaBank())}),t.j41(30,"div",13),t.nrm(31,"lucide-icon",19),t.j41(32,"div",15),t.EFF(33),t.nI1(34,"mytranslate"),t.k0s()()()()()()(),t.DNE(35,kt,3,1,"div",20)}if(2&e){const i=t.XpG();t.R7$(3),t.SpI(" ",t.bMT(4,10,"lang_auto_chao_mung_ban_den_voi_azota")+" \u{1f389}"," "),t.R7$(3),t.Y8G("innerHTML",t.bMT(7,12,"lang_auto_ban_co_the_tao"),t.npT),t.R7$(4),t.JRh(t.bMT(11,14,"lang_auto_tim_hieu_them")),t.R7$(7),t.Y8G("ngClass",t.lJ4(22,It)),t.R7$(2),t.SpI(" ",t.bMT(20,16,"lang_auto_tao_moi")," "),t.R7$(5),t.Y8G("ngClass",t.lJ4(23,Mt)),t.R7$(2),t.SpI(" ",t.bMT(27,18,"lang_testbank_test_list_create_new_from_matrix_bank")," "),t.R7$(5),t.Y8G("ngClass",t.lJ4(24,yt)),t.R7$(2),t.SpI(" ",t.bMT(34,20,"lang_global_azota_download_from_azota_bank")," "),t.R7$(2),t.Y8G("ngIf",!i.isMobileWebView)}}let Rt=(()=>{var e;class r extends z.H{ngOnInit(){this.initStatusObj(),this.aztDashboardDataService.isWelcomeDashboard(!1).subscribe(n=>{n||n||this.aztDashboardDataService.checkRedirectDashboard(!1,this.isMobileWebView),this.stopStatusObj()}),super.ngOnInit()}redirectToCreateDocument(){this.commonService.myNavigationWithQueryString("/admin/testbank/create-new-document/0","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToGlobalBank(){this.commonService.myNavigationWithQueryString("/admin/testbank/matrix-list/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToAzotaBank(){this.commonService.myNavigationWithQueryString("/ladingpage/document-management/0/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome&from=dashboard-welcome"))}constructor(n){super(),this.aztDashboardDataService=n}}return(e=r).\u0275fac=function(n){return new(n||e)(t.rXU(G))},e.\u0275cmp=t.VBU({type:e,selectors:[["dashboard-welcome"]],features:[t.Vt3],decls:4,vars:2,consts:[[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","sm:mt-10"],[1,"intro-y","mt-5"],[1,"font-medium","text-xl"],[1,"text-md","mt-2"],[3,"innerHTML"],["azt-track-service","dashboard-welcome-pZ4vNL2WA","href","https://docs.azota.vn","target","_blank",1,"btn-text-primary","font-medium"],[1,"mb-3","intro-y","sm:gap-10","mt-10"],[1,"grid","grid-cols-12","gap-6","items-center","mt-4"],[1,"col-span-12","md:col-span-6","lg:col-span-4","h-full","intro-y"],["azt-track-service","dashboard-welcome-rOUx53afllU",3,"click"],[1,"box","flex","items-center","px-5","py-5","zoom-in"],["name","file-plus-2","size","32",3,"ngClass"],[1,"font-medium","text-lg"],["azt-track-service","dashboard-welcome-Av9Wffvci",3,"click"],["name","landmark","size","32",3,"ngClass"],["azt-track-service","dashboard-welcome-UaXl56_mm",3,"click"],["name","cloud-download","size","32",3,"ngClass"],["class","absolute left-0 bottom-0 index",4,"ngIf"],[1,"absolute","left-0","bottom-0","index"],[4,"ngIf"]],template:function(n,a){if(1&n&&(t.j41(0,"teacher-layout"),t.DNE(1,Ct,1,1,"azt-loading-effect",0),t.DNE(2,Tt,36,25,"ng-template",null,1,t.C5r),t.k0s()),2&n){const m=t.sdS(3);t.R7$(1),t.Y8G("ngIf",a.statusObj.loading)("ngIfElse",m)}},dependencies:[s.YU,s.bT,St.K,N.Q,p.WGl,U,W,h.wp]}),r})();const jt=[{component:(()=>{var e;class r extends z.H{}return(e=r).\u0275fac=function(){let i;return function(a){return(i||(i=t.xGo(e)))(a||e)}}(),e.\u0275cmp=t.VBU({type:e,selectors:[["app-dashboard"]],features:[t.Vt3],decls:1,vars:0,template:function(n,a){1&n&&t.nrm(0,"router-outlet")},dependencies:[c.n3],encapsulation:2}),r})(),path:"",canActivate:[j.L],children:[{path:"dashboard-welcome",component:Rt},{path:"dashboard",component:Dt},{path:"dashboard-v1",redirectTo:"dashboard",pathMatch:"full"}]}];let Ft=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[c.iI.forChild(jt),c.iI,x.XE]}),r})(),xt=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({providers:[{provide:S.vn,useValue:_.c.azt_tiny_mce_script_src}],imports:[c.iI,s.MD,T.s,b.Id,S.sv,g.YN,g.X1,v.hM,R.L,l.Lk,u.xv,f.Q,d.b,Ft,p.flO.pick(p.Ptg),C.An]}),r})()},34158:(w,I,o)=>{o.d(I,{L:()=>v});var b=o(26860),s=o(36484),g=o(39307);let v=(()=>{var c;class S{constructor(l,u){this.userService=l,this.redirectService=u}canActivate(l,u){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(u.url),!1)}canActivateChild(l,u){return this.canActivate(l,u)}canLoad(l){const u=`/${l.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(u),!1)}}return(c=S).\u0275fac=function(l){return new(l||c)(b.KVO(s.R),b.KVO(g.m))},c.\u0275prov=b.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),S})()},39763:(w,I,o)=>{o.d(I,{m:()=>v});var b=o(26860),s=o(36484),g=o(2812);let v=(()=>{var c;class S{constructor(l,u){this.userService=l,this.commonService=u}checkLoginZalo(){if(!this.userService.isLogin())return!1;const l=this.userService.getUserObj();return!(!l.zaloId||l.phone&&10==l.phone.length||l.email&&-1!==l.email.indexOf("@"))}zaloInfoRequired(){this.checkLoginZalo()&&this.commonService.myNavigation("/auth/required-phone-or-email")}}return(c=S).\u0275fac=function(l){return new(l||c)(b.KVO(s.R),b.KVO(g.R))},c.\u0275prov=b.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),S})()},2915:(w,I,o)=>{o.d(I,{U:()=>u});var b=o(59640),s=o(26860),g=o(54460),v=o(89163),c=o(5502);const S=["aztDialogContentBox"],p=function(C,T){return{"width.px":C,"height.%":100,"--scrollbar-size":T}},l=["*"];let u=(()=>{var C;class T extends b.H{checkHeightOfElement(){if(!this.aztDialogContentBox)return;var d=this.aztDialogContentBox.nativeElement.querySelector("."+this.contentBoxClassName);if(!d)return;let f=Math.round(window.innerHeight*this.defaultHeight/100),_=d.getBoundingClientRect().height+1,x=!(_<f),j=(_<f?_:f)+"px",z="72vh";x!=this.isScroll&&(this.isScroll=x),this.aztDialogContentBox.nativeElement.style.height!=j&&(this.aztDialogContentBox.nativeElement.style.height=j),this.aztDialogContentBox.nativeElement.style.maxHeight!=z&&(z=j),this.minHeight&&(this.aztDialogContentBox.nativeElement.style.minHeight=this.minHeight)}ngAfterViewChecked(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.checkHeightOfElement()},0)})}constructor(d){super(),this.ngZone=d,this.defaultHeight=72,this.defaultWidth=0,this.minHeight=void 0,this.isScroll=!1,this.contentBoxClassName="azt-mat-dialog-content-box"}}return(C=T).\u0275fac=function(d){return new(d||C)(s.rXU(s.SKi))},C.\u0275cmp=s.VBU({type:C,selectors:[["azt-mat-dialog-content"]],viewQuery:function(d,f){if(1&d&&s.GBs(S,5),2&d){let _;s.mGM(_=s.lsd())&&(f.aztDialogContentBox=_.first)}},inputs:{defaultHeight:"defaultHeight",defaultWidth:"defaultWidth",minHeight:"minHeight"},features:[s.Vt3],ngContentSelectors:l,decls:5,vars:7,consts:[["aztDialogContentBox",""],["scrollViewport","","pointerEventsMethod","scrollbar",3,"visibility","ngStyle"]],template:function(d,f){1&d&&(s.NAR(),s.j41(0,"mat-dialog-content",null,0)(2,"ng-scrollbar",1)(3,"div"),s.SdG(4),s.k0s()()()),2&d&&(s.R7$(2),s.Y8G("visibility","hover")("ngStyle",s.l_i(4,p,f.defaultWidth||"auto",f.isScroll?"5px":"0")),s.R7$(1),s.HbH(f.contentBoxClassName))},dependencies:[g.B3,v.Yi,c.Yh,c.Gl],encapsulation:2}),T})()}}]);