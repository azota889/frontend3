"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[6208],{46208:(w,I,o)=>{o.r(I),o.d(I,{DashboardModule:()=>Oe});var v=o(5502),r=o(54460),h=o(10936),f=o(89163),c=o(65162),S=o(69223),g=o(15343),m=o(13763),u=o(25571),C=o(44233),T=o(21656),R=o(70050),d=o(7050),_=o(91100),D=o(43234),x=o(1133),j=o(34158),z=o(59640),Y=o(48188),V=o(10710),e=o(48891),O=o(36484),P=o(51698),H=o(85710),X=o(62095),A=o(84828),E=o(50589);let G=(()=>{var t;class s{isWelcomeDashboard(n){return new P.c(a=>{this.getDashboardData(n,(l,b)=>{if(l&&!b){var y=1==Number(l.useWelcomeDashboard);a.next(y),a.complete()}else a.next(!1),a.complete()})})}checkRedirectDashboard(n,a){this.commonService.myNavigation(n&&!a?"/admin/dashboard-welcome":"/admin/dashboard")}getDashboardData(n,a){var l=this.browserStorageService.getSimpleSessionStorage(this.dashboardDataStorageKey);let b=l?this.commonService.castJsonToObj(l):void 0;n&&b?a(b,""):this.subscriptions.add(this.dashboardService.apiDashboardGetObjGet().subscribe(y=>{1==y.success&&y.data?(this.browserStorageService.saveSimpleSessionStorage(this.dashboardDataStorageKey,this.commonService.serializeJson(y.data)),a(y.data,"")):(this.browserStorageService.removeSimpleSessionStorage(this.dashboardDataStorageKey),a(void 0,y.message??""))}))}constructor(n,a,l){this.commonService=n,this.dashboardService=a,this.browserStorageService=l,this.subscriptions=new H.yU,this.dashboardDataStorageKey="azt_dashboard_data"}}return(t=s).\u0275fac=function(n){return new(n||t)(e.KVO(X.R),e.KVO(A.I8),e.KVO(E.z))},t.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),s})();var J=o(52509),K=o(39763),Z=o(28787),Q=o(9002),B=o(47712),q=o(23356),ee=o(55037),p=o(76975);const te=t=>({"text-danger":t}),ne=t=>[t];function ae(t,s){1&t&&(e.j41(0,"span"),e.EFF(1," \xa0 "),e.j41(2,"a",4),e.nI1(3,"navigationLocalize"),e.EFF(4),e.nI1(5,"mytranslate"),e.k0s()()),2&t&&(e.R7$(2),e.Y8G("routerLink",e.eq3(6,ne,e.bMT(3,2,"/business/business-configs/0"))),e.R7$(2),e.JRh(e.bMT(5,4,"lang_business_package_see_billing_details")))}function oe(t,s){if(1&t&&(e.j41(0,"div",1)(1,"b"),e.EFF(2),e.nI1(3,"mytranslate"),e.k0s(),e.EFF(4),e.nI1(5,"formatFullDateTimeByUserUnitPipe"),e.j41(6,"span",2),e.EFF(7),e.nI1(8,"mytranslate"),e.nI1(9,"mytranslate"),e.k0s(),e.DNE(10,ae,6,8,"span",3),e.k0s()),2&t){const i=e.XpG();e.R7$(2),e.SpI("",e.bMT(3,8,"lang_business_config_billing_end_time"),":"),e.R7$(2),e.SpI(" ",e.bMT(5,10,i.subscriptionObj.endTime)," ( "),e.R7$(2),e.Y8G("ngClass",e.eq3(16,te,i.subscriptionTimeDtoObj.days<10)),e.R7$(),e.LHq("",i.subscriptionTimeDtoObj.days," ",e.bMT(8,12,"lang_auto_day"),", ",i.subscriptionTimeDtoObj.hours," ",e.bMT(9,14,"lang_auto_clock"),")"),e.R7$(3),e.Y8G("ngIf",i.subscriptionObj.isAdminOfBusiness)}}let ie=(()=>{var t;class s extends z.H{ngOnInit(){this.isBusinessDomain&&this.sAztBusinessPackageExpiredService.getSubscriptionData((n,a,l)=>{this.subscriptionObj=a,this.subscriptionTimeDtoObj=l})}constructor(n){super(),this.sAztBusinessPackageExpiredService=n,this.sAztConfigService=(0,e.WQX)(q.u),this.subscriptionObj=void 0,this.subscriptionTimeDtoObj={days:0,hours:0,minutes:0}}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(ee.Z))},t.\u0275cmp=e.VBU({type:t,selectors:[["azota-business-package-warning-box"]],features:[e.Vt3],decls:1,vars:1,consts:[["class","pt-3",4,"ngIf"],[1,"pt-3"],[3,"ngClass"],[4,"ngIf"],["azt-track-service","azota-business-package-expired-v3CxKNRMa",1,"link-color",3,"routerLink"]],template:function(n,a){1&n&&e.DNE(0,oe,11,18,"div",0),2&n&&e.Y8G("ngIf",a.subscriptionObj&&a.subscriptionTimeDtoObj.days<5)},dependencies:[r.YU,r.bT,c.Wk,p.F2,p.wp,p.Rr],encapsulation:2}),s})();var se=o(6152),L=o(96451),re=o(33887),ce=o(2915);let $=(()=>{var t;class s extends re._{constructor(n,a){super(a,n),this.dialogRef=n,this.data=a,this.isNotShowAgain=new h.MJ(!1,{nonNullable:!0})}ngOnInit(){}onNoClick(){this.dialogRef.close(this.isNotShowAgain.value)}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(f.CP),e.rXU(f.Vh))},t.\u0275cmp=e.VBU({type:t,selectors:[["new-feature-notice-dialog"]],features:[e.Vt3],decls:14,vars:11,consts:[[1,"box","p-5"],[3,"innerHTML"],["align","end"],[1,"flex","items-center","w-full",2,"justify-content","space-between"],[1,"form-check"],["id","is-not-show-again","type","checkbox",1,"form-check-input",3,"formControl"],["for","is-not-show-again",1,"form-check-label"],["azt-track-service","new-feature-iAX2JunJEbn",1,"btn","btn-primary","w-24",3,"click","mat-dialog-close"]],template:function(n,a){1&n&&(e.j41(0,"div",0)(1,"azt-mat-dialog-content"),e.nrm(2,"div",1),e.nI1(3,"safeSuperAdminHtmlContent"),e.k0s(),e.j41(4,"mat-dialog-actions",2)(5,"div",3)(6,"div",4),e.nrm(7,"input",5),e.j41(8,"label",6),e.EFF(9),e.nI1(10,"mytranslate"),e.k0s()(),e.j41(11,"button",7),e.bIt("click",function(){return a.onNoClick()}),e.EFF(12),e.nI1(13,"mytranslate"),e.k0s()()()()),2&n&&(e.R7$(2),e.Y8G("innerHTML",e.bMT(3,5,a.data.description),e.npT),e.R7$(5),e.Y8G("formControl",a.isNotShowAgain),e.R7$(2),e.SpI(" ",e.bMT(10,7,"lang_testbank_create_exam_width_file_pdf_not_view")," "),e.R7$(2),e.Y8G("mat-dialog-close",a.isNotShowAgain.value),e.R7$(),e.JRh(e.bMT(13,9,"lang_button_close")))},dependencies:[f.tx,f.E7,h.Zm,h.BC,h.l_,ce.U,p.wp,p.tn],encapsulation:2}),s})();var le=o(55465),me=o(46899),N=o(17818);const F=()=>({"mr-2":!0}),de=t=>[t];let U=(()=>{var t;class s extends z.H{getNewFeatureNotice(){this.initStatusObj(),this.waitDestroy(this.globalNoticeService.apiGlobalNoticeGetObjGet(0).subscribe(n=>{1==n.success?(n.data?.obj?(this.checkFeatureNotice=!0,this.sAztDialogService.open($,{width:"750px",data:n.data?.obj,restoreFocus:!1}).afterClosed().subscribe(l=>{if(l)try{this.setMarkAsReadFeaturesNotice()}catch(b){console.log(b)}})):this.checkFeatureNotice=!1,this.successStatusObj()):this.errorStatusObj(n.message??"",!0)}))}showNewFeatureNotice(n){this.waitDestroy(this.globalNoticeService.apiGlobalNoticeGetObjGet(n?1:0).subscribe(a=>{1==a.success?a.data?.obj&&this.sAztDialogService.open($,{width:"750px",data:a.data?.obj,restoreFocus:!1}).afterClosed().subscribe(b=>{}):this.errorStatusObj(a.message??"",!0)}))}setMarkAsReadFeaturesNotice(){this.waitDestroy(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(n=>{1==n.success?this.successStatusObj():this.errorStatusObj(n.message??"",!0)}))}ngOnInit(){this.initStatusObj(),this.user_obj=this.userService.getUserObj(),this.currentVersion=this.envService.getCurrentVersion(),this.isTeacherRole=this.userService.isTeacherRole(),this.getNewFeatureNotice(),super.ngOnInit()}constructor(n,a,l,b){super(),this.envService=n,this.sAztDialogService=a,this.userService=l,this.globalNoticeService=b,this.currentVersion="",this.checkFeatureNotice=!1,this.isTeacherRole=!1}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(le.t),e.rXU(me.i),e.rXU(O.R),e.rXU(A.fV))},t.\u0275cmp=e.VBU({type:t,selectors:[["footer-info-menu"]],features:[e.Vt3],decls:37,vars:34,consts:[["dashboardMenu",""],[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip","matMenuTriggerFor"],["name","info","size","24","strokeWidth","2"],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],["azt-track-service","footer-info-menu-4xo_9lVt1J",1,"dropdown-item",3,"click"],["name","package-plus","size","16",3,"ngClass"],["azt-track-service","footer-info-menu-Mym6pF4eC7","href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["name","users","size","16",3,"ngClass"],["azt-track-service","footer-info-menu-nstjfJK4k1","href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["name","facebook","size","16",3,"ngClass"],[1,"dropdown-divider","border-slate-200","dark:border-darkmode-400"],["azt-track-service","footer-info-menu-MF6sCK5s_Vh",1,"dropdown-item",3,"routerLink"],["name","code","size","16",3,"ngClass"],[1,"dropdown-item","hover:bg-white/5"],["name","rocket","size","16",3,"ngClass"]],template:function(n,a){if(1&n){const l=e.RV6();e.j41(0,"button",1),e.nI1(1,"mytranslate"),e.nrm(2,"lucide-icon",2),e.k0s(),e.j41(3,"mat-menu",null,0)(5,"div",3)(6,"ul",4)(7,"li")(8,"a",5),e.bIt("click",function(){return e.eBV(l),e.Njj(a.showNewFeatureNotice(!0))}),e.nrm(9,"lucide-icon",6),e.EFF(10),e.nI1(11,"mytranslate"),e.k0s()(),e.j41(12,"li")(13,"a",7),e.nrm(14,"lucide-icon",8),e.EFF(15),e.nI1(16,"mytranslate"),e.k0s()(),e.j41(17,"li")(18,"a",9),e.nrm(19,"lucide-icon",10),e.EFF(20),e.nI1(21,"mytranslate"),e.k0s()(),e.j41(22,"li"),e.nrm(23,"hr",11),e.k0s(),e.j41(24,"li")(25,"a",12),e.nI1(26,"navigationLocalize"),e.nrm(27,"lucide-icon",13),e.EFF(28),e.nI1(29,"mytranslate"),e.k0s()(),e.j41(30,"li"),e.nrm(31,"hr",11),e.k0s(),e.j41(32,"li")(33,"a",14),e.nrm(34,"lucide-icon",15),e.EFF(35),e.nI1(36,"mytranslate"),e.k0s()()()()()}if(2&n){const l=e.sdS(4);e.FS9("matTooltip",e.bMT(1,13,"lang_auto_cong_dong_ho_tro")),e.Y8G("matMenuTriggerFor",l),e.R7$(9),e.Y8G("ngClass",e.lJ4(27,F)),e.R7$(),e.SpI(" ",e.bMT(11,15,"lang_auto_tinh_nang_moi")," "),e.R7$(4),e.Y8G("ngClass",e.lJ4(28,F)),e.R7$(),e.SpI(" ",e.bMT(16,17,"lang_auto_cong_dong_ho_tro")," "),e.R7$(4),e.Y8G("ngClass",e.lJ4(29,F)),e.R7$(),e.SpI(" ",e.bMT(21,19,"lang_auto_fanpage_azota")," "),e.R7$(5),e.Y8G("routerLink",e.eq3(30,de,e.bMT(26,21,"/admin/testbank/create-website"))),e.R7$(2),e.Y8G("ngClass",e.lJ4(32,F)),e.R7$(),e.SpI(" ",e.bMT(29,23,"lang_auto_own_website")," "),e.R7$(6),e.Y8G("ngClass",e.lJ4(33,F)),e.R7$(),e.SpI(" ",e.bMT(36,25,"lang_auto_phien_ban")+": "+a.currentVersion," ")}},dependencies:[c.Wk,r.YU,N.kk,N.Cp,B.oV,g.WGl,p.F2,p.wp],encapsulation:2}),s})();const ue=t=>[t];function he(t,s){1&t&&(e.j41(0,"a",1),e.nI1(1,"navigationLocalize"),e.nrm(2,"lucide-icon",2),e.k0s()),2&t&&e.Y8G("routerLink",e.eq3(3,ue,e.bMT(1,1,"/super-role/admin-tool")))}let W=(()=>{var t;class s extends z.H{ngOnInit(){super.ngOnInit()}constructor(n){super(),this.userService=n}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(O.R))},t.\u0275cmp=e.VBU({type:t,selectors:[["footer-admin-menu"]],features:[e.Vt3],decls:1,vars:1,consts:[["azt-track-service","footer-admin-menu-7W4rraHk8","class","btn btn-outline-primary dropdown-toggle btn-transparent mb-5 ml-5",3,"routerLink",4,"ngIf"],["azt-track-service","footer-admin-menu-7W4rraHk8",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"routerLink"],["name","users","size","24"]],template:function(n,a){1&n&&e.DNE(0,he,3,5,"a",0),2&n&&e.Y8G("ngIf",a.userService.isSupperAdminRole())},dependencies:[c.Wk,r.bT,g.WGl,p.F2],encapsulation:2}),s})();const k=t=>[t],M=()=>({"text-primary mx-auto":!0});function ge(t,s){if(1&t&&(e.j41(0,"div",39),e.EFF(1),e.k0s()),2&t){const i=e.XpG();e.R7$(),e.Lme(" ",i.currentUrl," : userId: ",i.curUserId," ")}}function pe(t,s){1&t&&(e.j41(0,"div",40)(1,"a",22),e.nI1(2,"navigationLocalize"),e.j41(3,"div",23),e.nrm(4,"lucide-icon",41),e.j41(5,"div",10),e.EFF(6),e.nI1(7,"mytranslate"),e.k0s()()()()),2&t&&(e.R7$(),e.Y8G("routerLink",e.eq3(7,k,e.bMT(2,3,"/admin/test-market/introduce"))),e.R7$(3),e.Y8G("ngClass",e.lJ4(9,M)),e.R7$(2),e.SpI(" ",e.bMT(7,5,"lang_dashboard_make_money_title")," "))}function be(t,s){1&t&&(e.j41(0,"div",40)(1,"a",42),e.nI1(2,"navigationLocalize"),e.j41(3,"div",8),e.nrm(4,"lucide-icon",43),e.j41(5,"div",10),e.EFF(6),e.nI1(7,"mytranslate"),e.k0s()()()()),2&t&&(e.R7$(),e.Y8G("routerLink",e.eq3(7,k,e.bMT(2,3,"/document-market/list-documents/all-documents/1"))),e.R7$(3),e.Y8G("ngClass",e.lJ4(9,M)),e.R7$(2),e.SpI(" ",e.bMT(7,5,"lang_document_market_title")," "))}function ve(t,s){1&t&&(e.j41(0,"div",21)(1,"a",44),e.nI1(2,"navigationLocalize"),e.j41(3,"div",8),e.nrm(4,"lucide-icon",45),e.j41(5,"div",10),e.EFF(6),e.nI1(7,"mytranslate"),e.k0s()()()()),2&t&&(e.R7$(),e.Y8G("routerLink",e.bMT(2,3,"/business/dashboard")),e.R7$(3),e.Y8G("ngClass",e.lJ4(7,M)),e.R7$(2),e.SpI(" ",e.bMT(7,5,"lang_cms_business_dashboard_title")," "))}function fe(t,s){1&t&&(e.j41(0,"div",46)(1,"a",47),e.nI1(2,"navigationLocalize"),e.EFF(3),e.nI1(4,"mytranslate"),e.k0s()()),2&t&&(e.R7$(),e.Y8G("routerLink",e.eq3(6,k,e.bMT(2,2,"/auth/register-for-organization"))),e.R7$(2),e.SpI(" ",e.bMT(4,4,"lang_dashboard_register_azota_business_button")," "))}function _e(t,s){1&t&&e.nrm(0,"footer-info-menu")}function De(t,s){1&t&&(e.j41(0,"a",48),e.nI1(1,"mytranslate"),e.nrm(2,"lucide-icon",49),e.k0s()),2&t&&e.FS9("matTooltip",e.bMT(1,1,"lang_auto_huong_dan"))}function Se(t,s){if(1&t){const i=e.RV6();e.j41(0,"a",50),e.nI1(1,"mytranslate"),e.bIt("click",function(){e.eBV(i);const a=e.XpG();return e.Njj(a.toggleDrawer())}),e.nrm(2,"lucide-icon",51),e.k0s()}2&t&&e.FS9("matTooltip",e.bMT(1,1,"lang_auto_huong_dan"))}let Ce=(()=>{var t;class s extends z.H{toggleDrawer(){this.chatBoxDrawer.toggle(),this.chatBoxDrawer.drawerType=this.drawerType.guide,this.browserStorageService.removeStorage("isFirstTime"),this.browserStorageService.saveSimpleSessionStorage("azota_ai_chat_box",this.commonService.serializeJson({isOpen:this.chatBoxDrawer.isOpened()}))}ngOnInit(){super.ngOnInit(),this.initStatusObj(),this.aztDashboardDataService.getDashboardData(!0,(n,a)=>{a?this.showErrorSnack(a):n?.useWelcomeDashboard&&this.aztDashboardDataService.checkRedirectDashboard(!this.isBusinessDomain,this.isMobileWebView)}),this.curUserId=this.userService.getUserObj().id,this.commonService.translateMetaData({title:"lang_cms_test_dashboard_title",description:"lang_cms_test_dashboard_description",image:"lang_cms_test_image"}),this.mobileWebviewService.sendSimpleMessage("OPEN_MAIN_DASHBOARD")}constructor(n,a,l,b,y,Ae,Ee){super(),this.userService=n,this.aztDashboardDataService=a,this.mobileWebviewService=l,this.zaloService=b,this.userLoginStateService=y,this.browserStorageService=Ae,this.chatBoxDrawer=Ee,this.showTestMarketButton=!D.c.production||D.c.isProdAzotaVn,this.drawerType=Y.I,this.currentUrl=!D.c.production&&this.isMobileWebView?this.commonService.getCurrentDomain():void 0,this.curUserId=0,this.vipPackageType=V.W5,this.userLoginStateService.loginMessage.subscribe(()=>{setTimeout(()=>{this.zaloService.zaloInfoRequired()})})}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(O.R),e.rXU(G),e.rXU(J.f),e.rXU(K.m),e.rXU(Z.X),e.rXU(E.z),e.rXU(Q.o))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-test-dashboard"]],features:[e.Vt3],decls:69,vars:75,consts:[[3,"headerTitle"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","mt-5"],["class","pt-2",4,"ngIf"],[3,"type"],[1,"mb-3","grid","grid-cols-12","intro-y","sm:gap-10"],[1,"col-span-12","grid","grid-cols-12","gap-6","mt-4","flex","items-center"],["tourAnchor","azt-tour-1",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-rF6MSAArUsY",3,"routerLink"],[1,"box","p-8","zoom-in","h-full","text-center"],["name","file-text","size","48",3,"ngClass"],[1,"font-medium","text-center","text-base","mt-3"],["tourAnchor","azt-tour-2",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-n5d-c2lLv1K",3,"routerLink"],["name","folder","size","48",3,"ngClass"],["tourAnchor","azt-tour-3",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-4P7SGaAp07c",3,"routerLink"],["name","layers","size","48",3,"ngClass"],["tourAnchor","azt-tour-4",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-7d_U3ZeXpGR",3,"routerLink"],["name","users","size","48",3,"ngClass"],["class","col-span-6 md:col-span-3 intro-y h-full","tourAnchor","azt-tour-5",4,"ngIf"],["tourAnchor","azt-tour-6",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-Qv44FAUiKc1",3,"routerLink"],[1,"box","p-8","zoom-in","h-full","text-center","relative"],["name","landmark","size","48",3,"ngClass"],["class","col-span-6 md:col-span-3 intro-y h-full","tourAnchor","azt-tour-6",4,"ngIf"],["class","col-span-12 mt-5 intro-y h-full mb-8",4,"ngIf"],[1,"intro-y","col-span-12","box","mt-10",2,"display","none"],[1,"flex","flex-col"],[1,"flex","items-center"],["rows","1","placeholder","B\u1ea1n mu\u1ed1n l\xe0m g\xec?...",1,"resize-none","form-control","border-transparent","shadow-none","focus:border-transparent","focus:ring-0",2,"margin","5px","outline","none","border","0","box-shadow","none"],["azt-track-service","dashboard-main-43hyFh5fD","href","javascript:;",1,"w-8","h-8","sm:w-10","sm:h-10","block","text-primary","rounded-full","flex-none","flex","items-center","justify-center","mr-2"],["name","send","size","18"],[1,"absolute","left-0","bottom-0","index",2,"z-index","1000"],[4,"ngIf"],["azt-track-service","dashboard-main-78XWJErDG4V",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip","routerLink"],["name","trash","size","24","strokeWidth","2"],["class","btn btn-outline-primary dropdown-toggle btn-transparent mb-4 ml-4","azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",3,"matTooltip",4,"ngIf"],["class","btn btn-outline-primary dropdown-toggle btn-transparent mb-4 ml-4","azt-track-service","dashboard-main-J6ZAMHq8uVG",3,"matTooltip","click",4,"ngIf"],[1,"pt-2"],["tourAnchor","azt-tour-5",1,"col-span-6","md:col-span-3","intro-y","h-full"],["name","share-2","size","48",3,"ngClass"],["azt-track-service","dashboard-main-2s1OXiSzx",3,"routerLink"],["name","book-open","size","48",3,"ngClass"],["azt-track-service","dashboard-main-MzpKqpLgI",3,"routerLink"],["name","plug","size","48",2,"transform","rotate(45deg)",3,"ngClass"],[1,"col-span-12","mt-5","intro-y","h-full","mb-8"],["azt-track-service","dashboard-main-E42HRTjN8",1,"premium-btn",3,"routerLink"],["azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip"],["name","circle-help","size","24","strokeWidth","2"],["azt-track-service","dashboard-main-J6ZAMHq8uVG",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"click","matTooltip"],["name","circle-help","size","24"]],template:function(n,a){1&n&&(e.j41(0,"teacher-layout",0),e.nI1(1,"mytranslate"),e.j41(2,"div",1),e.DNE(3,ge,2,2,"div",2),e.nrm(4,"azota-business-package-warning-box")(5,"azota-vip-package-warning-box",3),e.j41(6,"div",4)(7,"div",5)(8,"div",6)(9,"a",7),e.nI1(10,"navigationLocalize"),e.j41(11,"div",8),e.nrm(12,"lucide-icon",9),e.j41(13,"div",10),e.EFF(14),e.nI1(15,"mytranslate"),e.k0s()()()(),e.j41(16,"div",11)(17,"a",12),e.nI1(18,"navigationLocalize"),e.j41(19,"div",8),e.nrm(20,"lucide-icon",13),e.j41(21,"div",10),e.EFF(22),e.nI1(23,"mytranslate"),e.k0s()()()(),e.j41(24,"div",14)(25,"a",15),e.nI1(26,"navigationLocalize"),e.j41(27,"div",8),e.nrm(28,"lucide-icon",16),e.j41(29,"div",10),e.EFF(30),e.nI1(31,"mytranslate"),e.k0s()()()(),e.j41(32,"div",17)(33,"a",18),e.nI1(34,"navigationLocalize"),e.j41(35,"div",8),e.nrm(36,"lucide-icon",19),e.j41(37,"div",10),e.EFF(38),e.nI1(39,"mytranslate"),e.k0s()()()(),e.DNE(40,pe,8,10,"div",20)(41,be,8,10,"div",20),e.j41(42,"div",21)(43,"a",22),e.nI1(44,"navigationLocalize"),e.j41(45,"div",23),e.nrm(46,"lucide-icon",24),e.j41(47,"div",10),e.EFF(48),e.nI1(49,"mytranslate"),e.k0s()()()(),e.DNE(50,ve,8,8,"div",25),e.nI1(51,"allowFeatureBusinessForUser"),e.nI1(52,"async"),e.k0s(),e.DNE(53,fe,5,8,"div",26),e.j41(54,"div",27)(55,"div",28)(56,"div",29),e.nrm(57,"textarea",30),e.j41(58,"a",31),e.nrm(59,"lucide-icon",32),e.k0s()()()()(),e.j41(60,"div",33),e.DNE(61,_e,1,0,"footer-info-menu",34),e.j41(62,"button",35),e.nI1(63,"mytranslate"),e.nI1(64,"navigationLocalize"),e.nrm(65,"lucide-icon",36),e.k0s(),e.DNE(66,De,3,3,"a",37)(67,Se,3,3,"a",38),e.nrm(68,"footer-admin-menu"),e.k0s()()()),2&n&&(e.Y8G("headerTitle",e.bMT(1,27,"lang_cms_test_dashboard_title")),e.R7$(3),e.Y8G("ngIf",a.currentUrl),e.R7$(2),e.Y8G("type",a.vipPackageType.TEACHER),e.R7$(4),e.Y8G("routerLink",e.eq3(58,k,e.bMT(10,29,"/admin/testbank/document-management/1/0/1"))),e.R7$(3),e.Y8G("ngClass",e.lJ4(60,M)),e.R7$(2),e.SpI(" ",e.bMT(15,31,"lang_auto_bai_tap")," "),e.R7$(3),e.Y8G("routerLink",e.eq3(61,k,e.bMT(18,33,"/admin/testbank/document-management/0/0/1"))),e.R7$(3),e.Y8G("ngClass",e.lJ4(63,M)),e.R7$(2),e.SpI(" ",e.bMT(23,35,"lang_auto_de_thi")," "),e.R7$(3),e.Y8G("routerLink",e.eq3(64,k,e.bMT(26,37,"/admin/student/manage-classroom/0"))),e.R7$(3),e.Y8G("ngClass",e.lJ4(66,M)),e.R7$(2),e.SpI(" ",e.bMT(31,39,"lang_auto_quan_ly_lop")," "),e.R7$(3),e.Y8G("routerLink",e.eq3(67,k,e.bMT(34,41,"/admin/teacher-group/0/0"))),e.R7$(3),e.Y8G("ngClass",e.lJ4(69,M)),e.R7$(2),e.SpI(" ",e.bMT(39,43,"lang_dashboard_teacher_management_box")," "),e.R7$(2),e.Y8G("ngIf",!a.isBusinessDomain&&a.showTestMarketButton),e.R7$(),e.Y8G("ngIf",!a.isBusinessDomain),e.R7$(2),e.Y8G("routerLink",e.eq3(70,k,e.bMT(44,45,"/admin/question-library"))),e.R7$(3),e.Y8G("ngClass",e.lJ4(72,M)),e.R7$(2),e.SpI(" ",e.bMT(49,47,"lang_notice_bank_question")," "),e.R7$(2),e.Y8G("ngIf",e.bMT(52,52,e.i5U(51,49,"training_center_menu",!1))),e.R7$(3),e.Y8G("ngIf",!a.isBusinessDomain),e.R7$(8),e.Y8G("ngIf",!a.isBusinessDomain),e.R7$(),e.FS9("matTooltip",e.bMT(63,54,"lang_auto_thung_rac")),e.Y8G("routerLink",e.eq3(73,k,e.bMT(64,56,"/admin/trash/0"))),e.R7$(4),e.Y8G("ngIf",!a.isBusinessDomain),e.R7$(),e.Y8G("ngIf",a.isBusinessDomain))},dependencies:[c.Wk,r.YU,r.bT,B.oV,ie,se.b,L.Q,g.WGl,U,W,r.Jj,p.F2,p.wp,p.bj],encapsulation:2}),s})();var ze=o(18718);const ke=()=>({"text-primary mr-5":!0}),ye=()=>({"text-success mr-5":!0}),Ie=()=>({"text-pending mr-5":!0});function Me(t,s){if(1&t&&e.nrm(0,"azt-loading-effect",2),2&t){const i=e.XpG();e.Y8G("currentStatusObj",i.statusObj)}}function Te(t,s){1&t&&e.nrm(0,"footer-info-menu")}function Re(t,s){if(1&t&&(e.j41(0,"div",21),e.DNE(1,Te,1,0,"footer-info-menu",22),e.nrm(2,"footer-admin-menu"),e.k0s()),2&t){const i=e.XpG(2);e.R7$(),e.Y8G("ngIf",!i.isBusinessDomain)}}function je(t,s){if(1&t){const i=e.RV6();e.j41(0,"div",3)(1,"div",4)(2,"h3",5),e.EFF(3),e.nI1(4,"mytranslate"),e.k0s(),e.j41(5,"p",6),e.nrm(6,"span",7),e.nI1(7,"mytranslate"),e.EFF(8," .\xa0 "),e.j41(9,"a",8),e.EFF(10),e.nI1(11,"mytranslate"),e.k0s()()(),e.j41(12,"div",9)(13,"div",10)(14,"div",11)(15,"a",12),e.bIt("click",function(){e.eBV(i);const a=e.XpG();return e.Njj(a.redirectToCreateDocument())}),e.j41(16,"div",13),e.nrm(17,"lucide-icon",14),e.j41(18,"div",15),e.EFF(19),e.nI1(20,"mytranslate"),e.k0s()()()(),e.j41(21,"div",11)(22,"a",16),e.bIt("click",function(){e.eBV(i);const a=e.XpG();return e.Njj(a.redirectToGlobalBank())}),e.j41(23,"div",13),e.nrm(24,"lucide-icon",17),e.j41(25,"div",15),e.EFF(26),e.nI1(27,"mytranslate"),e.k0s()()()(),e.j41(28,"div",11)(29,"a",18),e.bIt("click",function(){e.eBV(i);const a=e.XpG();return e.Njj(a.redirectToAzotaBank())}),e.j41(30,"div",13),e.nrm(31,"lucide-icon",19),e.j41(32,"div",15),e.EFF(33),e.nI1(34,"mytranslate"),e.k0s()()()()()()(),e.DNE(35,Re,3,1,"div",20)}if(2&t){const i=e.XpG();e.R7$(3),e.SpI(" ",e.bMT(4,10,"lang_auto_chao_mung_ban_den_voi_azota")+" \u{1f389}"," "),e.R7$(3),e.Y8G("innerHTML",e.bMT(7,12,"lang_auto_ban_co_the_tao"),e.npT),e.R7$(4),e.JRh(e.bMT(11,14,"lang_auto_tim_hieu_them")),e.R7$(7),e.Y8G("ngClass",e.lJ4(22,ke)),e.R7$(2),e.SpI(" ",e.bMT(20,16,"lang_auto_tao_moi")," "),e.R7$(5),e.Y8G("ngClass",e.lJ4(23,ye)),e.R7$(2),e.SpI(" ",e.bMT(27,18,"lang_testbank_test_list_create_new_from_matrix_bank")," "),e.R7$(5),e.Y8G("ngClass",e.lJ4(24,Ie)),e.R7$(2),e.SpI(" ",e.bMT(34,20,"lang_global_azota_download_from_azota_bank")," "),e.R7$(2),e.Y8G("ngIf",!i.isMobileWebView)}}let Fe=(()=>{var t;class s extends z.H{ngOnInit(){this.initStatusObj(),this.aztDashboardDataService.isWelcomeDashboard(!1).subscribe(n=>{n||n||this.aztDashboardDataService.checkRedirectDashboard(!1,this.isMobileWebView),this.stopStatusObj()}),super.ngOnInit()}redirectToCreateDocument(){this.commonService.myNavigationWithQueryString("/admin/testbank/create-new-document/0","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToGlobalBank(){this.commonService.myNavigationWithQueryString("/admin/testbank/matrix-list/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToAzotaBank(){this.commonService.myNavigationWithQueryString("/ladingpage/document-management/0/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome&from=dashboard-welcome"))}constructor(n){super(),this.aztDashboardDataService=n}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(G))},t.\u0275cmp=e.VBU({type:t,selectors:[["dashboard-welcome"]],features:[e.Vt3],decls:4,vars:2,consts:[["doneLoading",""],[3,"currentStatusObj",4,"ngIf","ngIfElse"],[3,"currentStatusObj"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","sm:mt-10"],[1,"intro-y","mt-5"],[1,"font-medium","text-xl"],[1,"text-md","mt-2"],[3,"innerHTML"],["azt-track-service","dashboard-welcome-pZ4vNL2WA","href","https://docs.azota.vn","target","_blank",1,"btn-text-primary","font-medium"],[1,"mb-3","intro-y","sm:gap-10","mt-10"],[1,"grid","grid-cols-12","gap-6","items-center","mt-4"],[1,"col-span-12","md:col-span-6","lg:col-span-4","h-full","intro-y"],["azt-track-service","dashboard-welcome-rOUx53afllU",3,"click"],[1,"box","flex","items-center","px-5","py-5","zoom-in"],["name","file-plus-2","size","32",3,"ngClass"],[1,"font-medium","text-lg"],["azt-track-service","dashboard-welcome-Av9Wffvci",3,"click"],["name","landmark","size","32",3,"ngClass"],["azt-track-service","dashboard-welcome-UaXl56_mm",3,"click"],["name","cloud-download","size","32",3,"ngClass"],["class","absolute left-0 bottom-0 index",4,"ngIf"],[1,"absolute","left-0","bottom-0","index"],[4,"ngIf"]],template:function(n,a){if(1&n&&(e.j41(0,"teacher-layout"),e.DNE(1,Me,1,1,"azt-loading-effect",1)(2,je,36,25,"ng-template",null,0,e.C5r),e.k0s()),2&n){const l=e.sdS(3);e.R7$(),e.Y8G("ngIf",a.statusObj.loading)("ngIfElse",l)}},dependencies:[r.YU,r.bT,ze.K,L.Q,g.WGl,U,W,p.wp]}),s})();const xe=[{path:"",component:(()=>{var t;class s extends z.H{}return(t=s).\u0275fac=(()=>{let i;return function(a){return(i||(i=e.xGo(t)))(a||t)}})(),t.\u0275cmp=e.VBU({type:t,selectors:[["app-dashboard"]],features:[e.Vt3],decls:1,vars:0,template:function(n,a){1&n&&e.nrm(0,"router-outlet")},dependencies:[c.n3],encapsulation:2}),s})(),canActivate:[j.L],children:[{path:"dashboard-welcome",component:Fe},{path:"dashboard",component:Ce},{path:"dashboard-v1",redirectTo:"dashboard",pathMatch:"full"}]}];let we=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.iI.forChild(xe),c.iI,x.XE]}),s})(),Oe=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({providers:[{provide:S.vn,useValue:D.c.azt_tiny_mce_script_src}],imports:[c.iI,r.MD,T.s,v.Id,S.sv,h.YN,h.X1,f.hM,R.L,m.Lk,u.xv,_.Q,d.b,we,g.flO.pick(g.Ptg),C.An]}),s})()},34158:(w,I,o)=>{o.d(I,{L:()=>f});var v=o(48891),r=o(36484),h=o(39307);let f=(()=>{var c;class S{constructor(m,u){this.userService=m,this.redirectService=u}canActivate(m,u){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(u.url),!1)}canActivateChild(m,u){return this.canActivate(m,u)}canLoad(m){const u=`/${m.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(u),!1)}}return(c=S).\u0275fac=function(m){return new(m||c)(v.KVO(r.R),v.KVO(h.m))},c.\u0275prov=v.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),S})()},39763:(w,I,o)=>{o.d(I,{m:()=>f});var v=o(48891),r=o(36484),h=o(62095);let f=(()=>{var c;class S{constructor(m,u){this.userService=m,this.commonService=u}checkLoginZalo(){if(!this.userService.isLogin())return!1;const m=this.userService.getUserObj();return!(!m.zaloId||m.phone&&10==m.phone.length||m.email&&-1!==m.email.indexOf("@"))}zaloInfoRequired(){this.checkLoginZalo()&&this.commonService.myNavigation("/auth/required-phone-or-email")}}return(c=S).\u0275fac=function(m){return new(m||c)(v.KVO(r.R),v.KVO(h.R))},c.\u0275prov=v.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),S})()},2915:(w,I,o)=>{o.d(I,{U:()=>u});var v=o(59640),r=o(48891),h=o(54460),f=o(89163),c=o(5502);const S=["aztDialogContentBox"],g=["*"],m=(C,T)=>({"width.px":C,"height.%":100,"--scrollbar-size":T});let u=(()=>{var C;class T extends v.H{checkHeightOfElement(){if(!this.aztDialogContentBox)return;var d=this.aztDialogContentBox.nativeElement.querySelector("."+this.contentBoxClassName);if(!d)return;let _=Math.round(window.innerHeight*this.defaultHeight/100),D=d.getBoundingClientRect().height+1,x=!(D<_),j=(D<_?D:_)+"px",z="72vh";x!=this.isScroll&&(this.isScroll=x),this.aztDialogContentBox.nativeElement.style.height!=j&&(this.aztDialogContentBox.nativeElement.style.height=j),this.aztDialogContentBox.nativeElement.style.maxHeight!=z&&(z=j),this.minHeight&&(this.aztDialogContentBox.nativeElement.style.minHeight=this.minHeight)}ngAfterViewChecked(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.checkHeightOfElement()},0)})}constructor(d){super(),this.ngZone=d,this.defaultHeight=72,this.defaultWidth=0,this.minHeight=void 0,this.isScroll=!1,this.contentBoxClassName="azt-mat-dialog-content-box"}}return(C=T).\u0275fac=function(d){return new(d||C)(r.rXU(r.SKi))},C.\u0275cmp=r.VBU({type:C,selectors:[["azt-mat-dialog-content"]],viewQuery:function(d,_){if(1&d&&r.GBs(S,5),2&d){let D;r.mGM(D=r.lsd())&&(_.aztDialogContentBox=D.first)}},inputs:{defaultHeight:"defaultHeight",defaultWidth:"defaultWidth",minHeight:"minHeight"},features:[r.Vt3],ngContentSelectors:g,decls:5,vars:7,consts:[["aztDialogContentBox",""],["scrollViewport","","pointerEventsMethod","scrollbar",3,"visibility","ngStyle"]],template:function(d,_){1&d&&(r.NAR(),r.j41(0,"mat-dialog-content",null,0)(2,"ng-scrollbar",1)(3,"div"),r.SdG(4),r.k0s()()()),2&d&&(r.R7$(2),r.Y8G("visibility","hover")("ngStyle",r.l_i(4,m,_.defaultWidth||"auto",_.isScroll?"5px":"0")),r.R7$(),r.HbH(_.contentBoxClassName))},dependencies:[h.B3,f.Yi,c.Yh,c.Gl],encapsulation:2}),T})()}}]);