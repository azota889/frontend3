"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[6208],{46208:(j,D,o)=>{o.r(D),o.d(D,{DashboardModule:()=>Rt});var b=o(5502),s=o(54460),p=o(10936),f=o(89163),c=o(65162),M=o(69223),r=o(15343),l=o(13763),R=o(25571),k=o(46584),x=o(70050),v=o(7050),h=o(91100),d=o(43234),z=o(1133),T=o(34158),_=o(59640),U=o(48188),t=o(26860),F=o(36484),W=o(51698),Y=o(85710),V=o(91930),w=o(84828),E=o(50589);let O=(()=>{class e{isWelcomeDashboard(n){return new W.c(a=>{this.getDashboardData(n,(i,m)=>{if(i&&!m){var S=1==Number(i.useWelcomeDashboard);a.next(S),a.complete()}else a.next(!1),a.complete()})})}checkRedirectDashboard(n,a){this.commonService.myNavigation(n&&!a?"/admin/dashboard-welcome":"/admin/dashboard")}getDashboardData(n,a){var i=this.browserStorageService.getSimpleSessionStorage(this.dashboardDataStorageKey);let m=i?this.commonService.castJsonToObj(i):void 0;n&&m?a(m,""):this.subscriptions.add(this.dashboardService.apiDashboardGetObjGet().subscribe(S=>{1==S.success&&S.data?(this.browserStorageService.saveSimpleSessionStorage(this.dashboardDataStorageKey,this.commonService.serializeJson(S.data)),a(S.data,"")):(this.browserStorageService.removeSimpleSessionStorage(this.dashboardDataStorageKey),a(void 0,S.message??""))}))}constructor(n,a,i){this.commonService=n,this.dashboardService=a,this.browserStorageService=i,this.subscriptions=new Y.yU,this.dashboardDataStorageKey="azt_dashboard_data"}static#t=this.\u0275fac=function(a){return new(a||e)(t.KVO(V.R),t.KVO(w.I8),t.KVO(E.z))};static#e=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var H=o(18350),P=o(39763),X=o(28787),J=o(9002),G=o(47712),K=o(23356),Z=o(55037),g=o(73437);const Q=function(e){return[e]};function q(e,u){1&e&&(t.j41(0,"span"),t.EFF(1," \xa0 "),t.j41(2,"a",4),t.nI1(3,"navigationLocalize"),t.EFF(4),t.nI1(5,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.Y8G("routerLink",t.eq3(6,Q,t.bMT(3,2,"/business/business-configs/0"))),t.R7$(2),t.JRh(t.bMT(5,4,"lang_business_package_see_billing_details")))}const tt=function(e){return{"text-danger":e}};function et(e,u){if(1&e&&(t.j41(0,"div",1)(1,"b"),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s(),t.EFF(4),t.nI1(5,"formatFullDateTimeByUserUnitPipe"),t.j41(6,"span",2),t.EFF(7),t.nI1(8,"mytranslate"),t.nI1(9,"mytranslate"),t.k0s(),t.DNE(10,q,6,8,"span",3),t.k0s()),2&e){const n=t.XpG();t.R7$(2),t.SpI("",t.bMT(3,8,"lang_business_config_billing_end_time"),":"),t.R7$(2),t.SpI(" ",t.bMT(5,10,n.subscriptionObj.endTime)," ( "),t.R7$(2),t.Y8G("ngClass",t.eq3(16,tt,n.subscriptionTimeDtoObj.days<10)),t.R7$(1),t.LHq("",n.subscriptionTimeDtoObj.days," ",t.bMT(8,12,"lang_auto_day"),", ",n.subscriptionTimeDtoObj.hours," ",t.bMT(9,14,"lang_auto_clock"),")"),t.R7$(3),t.Y8G("ngIf",n.subscriptionObj.isAdminOfBusiness)}}let nt=(()=>{class e extends _.H{ngOnInit(){this.isBusinessDomain&&this.sAztBusinessPackageExpiredService.getSubscriptionData((n,a,i)=>{this.subscriptionObj=a,this.subscriptionTimeDtoObj=i})}constructor(n){super(),this.sAztBusinessPackageExpiredService=n,this.sAztConfigService=(0,t.WQX)(K.u),this.subscriptionObj=void 0,this.subscriptionTimeDtoObj={days:0,hours:0,minutes:0}}static#t=this.\u0275fac=function(a){return new(a||e)(t.rXU(Z.Z))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["azota-business-package-warning-box"]],features:[t.Vt3],decls:1,vars:1,consts:[["class","pt-3",4,"ngIf"],[1,"pt-3"],[3,"ngClass"],[4,"ngIf"],["azt-track-service","azota-business-package-expired-v3CxKNRMa",1,"link-color",3,"routerLink"]],template:function(a,i){1&a&&t.DNE(0,et,11,18,"div",0),2&a&&t.Y8G("ngIf",i.subscriptionObj&&i.subscriptionTimeDtoObj.days<5)},dependencies:[s.YU,s.bT,c.Wk,g.F2,g.wp,g.Rr],encapsulation:2})}return e})();var B=o(96451),at=o(33887),ot=o(2915);let A=(()=>{class e extends at._{constructor(n,a){super(a,n),this.dialogRef=n,this.data=a,this.isNotShowAgain=new p.MJ(!1,{nonNullable:!0})}ngOnInit(){}onNoClick(){this.dialogRef.close(this.isNotShowAgain.value)}static#t=this.\u0275fac=function(a){return new(a||e)(t.rXU(f.CP),t.rXU(f.Vh))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["new-feature-notice-dialog"]],features:[t.Vt3],decls:14,vars:11,consts:[[1,"box","p-5"],[3,"innerHTML"],["align","end"],[1,"flex","items-center","w-full",2,"justify-content","space-between"],[1,"form-check"],["id","is-not-show-again","type","checkbox",1,"form-check-input",3,"formControl"],["for","is-not-show-again",1,"form-check-label"],["azt-track-service","new-feature-iAX2JunJEbn",1,"btn","btn-primary","w-24",3,"mat-dialog-close","click"]],template:function(a,i){1&a&&(t.j41(0,"div",0)(1,"azt-mat-dialog-content"),t.nrm(2,"div",1),t.nI1(3,"safeSuperAdminHtmlContent"),t.k0s(),t.j41(4,"mat-dialog-actions",2)(5,"div",3)(6,"div",4),t.nrm(7,"input",5),t.j41(8,"label",6),t.EFF(9),t.nI1(10,"mytranslate"),t.k0s()(),t.j41(11,"button",7),t.bIt("click",function(){return i.onNoClick()}),t.EFF(12),t.nI1(13,"mytranslate"),t.k0s()()()()),2&a&&(t.R7$(2),t.Y8G("innerHTML",t.bMT(3,5,i.data.description),t.npT),t.R7$(5),t.Y8G("formControl",i.isNotShowAgain),t.R7$(2),t.SpI(" ",t.bMT(10,7,"lang_testbank_create_exam_width_file_pdf_not_view")," "),t.R7$(2),t.Y8G("mat-dialog-close",i.isNotShowAgain.value),t.R7$(1),t.JRh(t.bMT(13,9,"lang_button_close")))},dependencies:[f.tx,f.E7,p.Zm,p.BC,p.l_,ot.U,g.wp,g.tn],encapsulation:2})}return e})();var it=o(55465),st=o(46899),L=o(17818);const C=function(){return{"mr-2":!0}},rt=function(e){return[e]};let $=(()=>{class e extends _.H{getNewFeatureNotice(){this.initStatusObj(),this.waitDestroy(this.globalNoticeService.apiGlobalNoticeGetObjGet(0).subscribe(n=>{1==n.success?(n.data?.obj?(this.checkFeatureNotice=!0,this.sAztDialogService.open(A,{width:"750px",data:n.data?.obj,restoreFocus:!1}).afterClosed().subscribe(i=>{if(i)try{this.setMarkAsReadFeaturesNotice()}catch(m){console.log(m)}})):this.checkFeatureNotice=!1,this.successStatusObj()):this.errorStatusObj(n.message??"",!0)}))}showNewFeatureNotice(n){this.waitDestroy(this.globalNoticeService.apiGlobalNoticeGetObjGet(n?1:0).subscribe(a=>{1==a.success?a.data?.obj&&this.sAztDialogService.open(A,{width:"750px",data:a.data?.obj,restoreFocus:!1}).afterClosed().subscribe(m=>{}):this.errorStatusObj(a.message??"",!0)}))}setMarkAsReadFeaturesNotice(){this.waitDestroy(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(n=>{1==n.success?this.successStatusObj():this.errorStatusObj(n.message??"",!0)}))}ngOnInit(){this.initStatusObj(),this.user_obj=this.userService.getUserObj(),this.currentVersion=this.envService.getCurrentVersion(),this.isTeacherRole=this.userService.isTeacherRole(),this.getNewFeatureNotice(),super.ngOnInit()}constructor(n,a,i,m){super(),this.envService=n,this.sAztDialogService=a,this.userService=i,this.globalNoticeService=m,this.currentVersion="",this.checkFeatureNotice=!1,this.isTeacherRole=!1}static#t=this.\u0275fac=function(a){return new(a||e)(t.rXU(it.t),t.rXU(st.i),t.rXU(F.R),t.rXU(w.fV))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["footer-info-menu"]],features:[t.Vt3],decls:37,vars:34,consts:[[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip","matMenuTriggerFor"],["name","info","size","24","strokeWidth","2"],["dashboardMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],["azt-track-service","footer-info-menu-4xo_9lVt1J",1,"dropdown-item",3,"click"],["name","package-plus","size","16",3,"ngClass"],["azt-track-service","footer-info-menu-Mym6pF4eC7","href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["name","users","size","16",3,"ngClass"],["azt-track-service","footer-info-menu-nstjfJK4k1","href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["name","facebook","size","16",3,"ngClass"],[1,"dropdown-divider","border-slate-200","dark:border-darkmode-400"],["azt-track-service","footer-info-menu-MF6sCK5s_Vh",1,"dropdown-item",3,"routerLink"],["name","code","size","16",3,"ngClass"],[1,"dropdown-item","hover:bg-white/5"],["name","rocket","size","16",3,"ngClass"]],template:function(a,i){if(1&a&&(t.j41(0,"button",0),t.nI1(1,"mytranslate"),t.nrm(2,"lucide-icon",1),t.k0s(),t.j41(3,"mat-menu",null,2)(5,"div",3)(6,"ul",4)(7,"li")(8,"a",5),t.bIt("click",function(){return i.showNewFeatureNotice(!0)}),t.nrm(9,"lucide-icon",6),t.EFF(10),t.nI1(11,"mytranslate"),t.k0s()(),t.j41(12,"li")(13,"a",7),t.nrm(14,"lucide-icon",8),t.EFF(15),t.nI1(16,"mytranslate"),t.k0s()(),t.j41(17,"li")(18,"a",9),t.nrm(19,"lucide-icon",10),t.EFF(20),t.nI1(21,"mytranslate"),t.k0s()(),t.j41(22,"li"),t.nrm(23,"hr",11),t.k0s(),t.j41(24,"li")(25,"a",12),t.nI1(26,"navigationLocalize"),t.nrm(27,"lucide-icon",13),t.EFF(28),t.nI1(29,"mytranslate"),t.k0s()(),t.j41(30,"li"),t.nrm(31,"hr",11),t.k0s(),t.j41(32,"li")(33,"a",14),t.nrm(34,"lucide-icon",15),t.EFF(35),t.nI1(36,"mytranslate"),t.k0s()()()()()),2&a){const m=t.sdS(4);t.FS9("matTooltip",t.bMT(1,13,"lang_auto_cong_dong_ho_tro")),t.Y8G("matMenuTriggerFor",m),t.R7$(9),t.Y8G("ngClass",t.lJ4(27,C)),t.R7$(1),t.SpI(" ",t.bMT(11,15,"lang_auto_tinh_nang_moi")," "),t.R7$(4),t.Y8G("ngClass",t.lJ4(28,C)),t.R7$(1),t.SpI(" ",t.bMT(16,17,"lang_auto_cong_dong_ho_tro")," "),t.R7$(4),t.Y8G("ngClass",t.lJ4(29,C)),t.R7$(1),t.SpI(" ",t.bMT(21,19,"lang_auto_fanpage_azota")," "),t.R7$(5),t.Y8G("routerLink",t.eq3(30,rt,t.bMT(26,21,"/admin/testbank/create-website"))),t.R7$(2),t.Y8G("ngClass",t.lJ4(32,C)),t.R7$(1),t.SpI(" ",t.bMT(29,23,"lang_auto_own_website")," "),t.R7$(6),t.Y8G("ngClass",t.lJ4(33,C)),t.R7$(1),t.SpI(" ",t.bMT(36,25,"lang_auto_phien_ban")+": "+i.currentVersion," ")}},dependencies:[c.Wk,s.YU,L.kk,L.Cp,G.oV,r.WGl,g.F2,g.wp],encapsulation:2})}return e})();const ct=function(e){return[e]};function lt(e,u){1&e&&(t.j41(0,"a",1),t.nI1(1,"navigationLocalize"),t.nrm(2,"lucide-icon",2),t.k0s()),2&e&&t.Y8G("routerLink",t.eq3(3,ct,t.bMT(1,1,"/super-role/admin-tool")))}let N=(()=>{class e extends _.H{ngOnInit(){super.ngOnInit()}constructor(n){super(),this.userService=n}static#t=this.\u0275fac=function(a){return new(a||e)(t.rXU(F.R))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["footer-admin-menu"]],features:[t.Vt3],decls:1,vars:1,consts:[["azt-track-service","footer-admin-menu-7W4rraHk8","class","btn btn-outline-primary dropdown-toggle btn-transparent mb-5 ml-5",3,"routerLink",4,"ngIf"],["azt-track-service","footer-admin-menu-7W4rraHk8",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"routerLink"],["name","users","size","24"]],template:function(a,i){1&a&&t.DNE(0,lt,3,5,"a",0),2&a&&t.Y8G("ngIf",i.userService.isSupperAdminRole())},dependencies:[c.Wk,s.bT,r.WGl,g.F2],encapsulation:2})}return e})();function mt(e,u){if(1&e&&(t.j41(0,"div",34),t.EFF(1),t.k0s()),2&e){const n=t.XpG();t.R7$(1),t.Lme(" ",n.currentUrl," : userId: ",n.curUserId," ")}}const I=function(e){return[e]},y=function(){return{"text-primary mx-auto":!0}};function dt(e,u){1&e&&(t.j41(0,"div",35)(1,"a",36),t.nI1(2,"navigationLocalize"),t.j41(3,"div",37),t.nrm(4,"lucide-icon",38),t.j41(5,"div",9),t.EFF(6),t.nI1(7,"mytranslate"),t.k0s()()()()),2&e&&(t.R7$(1),t.Y8G("routerLink",t.eq3(7,I,t.bMT(2,3,"/admin/test-market/introduce"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(9,y)),t.R7$(2),t.SpI(" ",t.bMT(7,5,"lang_dashboard_make_money_title")," "))}function ut(e,u){1&e&&(t.j41(0,"div",35)(1,"a",39),t.nI1(2,"navigationLocalize"),t.j41(3,"div",7),t.nrm(4,"lucide-icon",40),t.j41(5,"div",9),t.EFF(6),t.nI1(7,"mytranslate"),t.k0s()()()()),2&e&&(t.R7$(1),t.Y8G("routerLink",t.eq3(7,I,t.bMT(2,3,"/document-market/list-documents/all-documents/1"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(9,y)),t.R7$(2),t.SpI(" ",t.bMT(7,5,"lang_document_market_title")," "))}function ht(e,u){1&e&&(t.j41(0,"div",41)(1,"a",42),t.nI1(2,"navigationLocalize"),t.j41(3,"div",7),t.nrm(4,"lucide-icon",43),t.j41(5,"div",9),t.EFF(6),t.nI1(7,"mytranslate"),t.k0s()()()()),2&e&&(t.R7$(1),t.Y8G("routerLink",t.bMT(2,3,"/business/dashboard")),t.R7$(3),t.Y8G("ngClass",t.lJ4(7,y)),t.R7$(2),t.SpI(" ",t.bMT(7,5,"lang_cms_business_dashboard_title")," "))}function gt(e,u){1&e&&(t.j41(0,"div",44)(1,"a",45),t.nI1(2,"navigationLocalize"),t.EFF(3),t.nI1(4,"mytranslate"),t.k0s()()),2&e&&(t.R7$(1),t.Y8G("routerLink",t.eq3(6,I,t.bMT(2,2,"/auth/register-for-organization"))),t.R7$(2),t.SpI(" ",t.bMT(4,4,"lang_dashboard_register_azota_business_button")," "))}function pt(e,u){1&e&&t.nrm(0,"footer-info-menu")}function bt(e,u){1&e&&(t.j41(0,"a",46),t.nI1(1,"mytranslate"),t.nrm(2,"lucide-icon",47),t.k0s()),2&e&&t.FS9("matTooltip",t.bMT(1,1,"lang_auto_huong_dan"))}function ft(e,u){if(1&e){const n=t.RV6();t.j41(0,"a",48),t.bIt("click",function(){t.eBV(n);const i=t.XpG();return t.Njj(i.toggleDrawer())}),t.nI1(1,"mytranslate"),t.nrm(2,"lucide-icon",49),t.k0s()}2&e&&t.FS9("matTooltip",t.bMT(1,1,"lang_auto_huong_dan"))}let vt=(()=>{class e extends _.H{toggleDrawer(){this.chatBoxDrawer.toggle(),this.chatBoxDrawer.drawerType=this.drawerType.guide,this.browserStorageService.removeStorage("isFirstTime"),this.browserStorageService.saveSimpleSessionStorage("azota_ai_chat_box",this.commonService.serializeJson({isOpen:this.chatBoxDrawer.isOpened()}))}ngOnInit(){super.ngOnInit(),this.initStatusObj(),this.aztDashboardDataService.getDashboardData(!0,(n,a)=>{a?this.showErrorSnack(a):n?.useWelcomeDashboard&&this.aztDashboardDataService.checkRedirectDashboard(!this.isBusinessDomain,this.isMobileWebView)}),this.curUserId=this.userService.getUserObj().id,this.commonService.translateMetaData({title:"lang_cms_test_dashboard_title",description:"lang_cms_test_dashboard_description",image:"lang_cms_test_image"}),this.mobileWebviewService.sendSimpleMessage("OPEN_MAIN_DASHBOARD")}constructor(n,a,i,m,S,xt,Ft){super(),this.userService=n,this.aztDashboardDataService=a,this.mobileWebviewService=i,this.zaloService=m,this.userLoginStateService=S,this.browserStorageService=xt,this.chatBoxDrawer=Ft,this.showTestMarketButton=!d.c.production||d.c.isProdAzotaVn,this.drawerType=U.I,this.currentUrl=!d.c.production&&this.isMobileWebView?this.commonService.getCurrentDomain():void 0,this.curUserId=0,this.userLoginStateService.loginMessage.subscribe(()=>{setTimeout(()=>{this.zaloService.zaloInfoRequired()})})}static#t=this.\u0275fac=function(a){return new(a||e)(t.rXU(F.R),t.rXU(O),t.rXU(H.f),t.rXU(P.m),t.rXU(X.X),t.rXU(E.z),t.rXU(J.o))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-test-dashboard"]],features:[t.Vt3],decls:62,vars:69,consts:[[3,"headerTitle"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","mt-5"],["class","pt-2",4,"ngIf"],[1,"mb-3","grid","grid-cols-12","intro-y","sm:gap-10"],[1,"col-span-12","grid","grid-cols-12","gap-6","mt-4","flex","items-center"],["tourAnchor","azt-tour-1",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-rF6MSAArUsY",3,"routerLink"],[1,"box","p-8","zoom-in","h-full","text-center"],["name","file-text","size","48",3,"ngClass"],[1,"font-medium","text-center","text-base","mt-3"],["tourAnchor","azt-tour-2",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-n5d-c2lLv1K",3,"routerLink"],["name","folder","size","48",3,"ngClass"],["tourAnchor","azt-tour-3",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-4P7SGaAp07c",3,"routerLink"],["name","layers","size","48",3,"ngClass"],["tourAnchor","azt-tour-4",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-7d_U3ZeXpGR",3,"routerLink"],["name","users","size","48",3,"ngClass"],["class","col-span-6 md:col-span-3 intro-y h-full","tourAnchor","azt-tour-5",4,"ngIf"],["class","col-span-6 md:col-span-3 intro-y h-full","tourAnchor","azt-tour-6",4,"ngIf"],["class","col-span-12 mt-5 intro-y h-full mb-8",4,"ngIf"],[1,"intro-y","col-span-12","box","mt-10",2,"display","none"],[1,"flex","flex-col"],[1,"flex","items-center"],["rows","1","placeholder","B\u1ea1n mu\u1ed1n l\xe0m g\xec?...",1,"resize-none","form-control","border-transparent","shadow-none","focus:border-transparent","focus:ring-0",2,"margin","5px","outline","none","border","0","box-shadow","none"],["azt-track-service","dashboard-main-43hyFh5fD","href","javascript:;",1,"w-8","h-8","sm:w-10","sm:h-10","block","text-primary","rounded-full","flex-none","flex","items-center","justify-center","mr-2"],["name","send","size","18"],[1,"absolute","left-0","bottom-0","index"],[4,"ngIf"],["azt-track-service","dashboard-main-78XWJErDG4V",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip","routerLink"],["name","trash","size","24","strokeWidth","2"],["class","btn btn-outline-primary dropdown-toggle btn-transparent mb-4 ml-4","azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",3,"matTooltip",4,"ngIf"],["class","btn btn-outline-primary dropdown-toggle btn-transparent mb-4 ml-4","azt-track-service","dashboard-main-J6ZAMHq8uVG",3,"matTooltip","click",4,"ngIf"],[1,"pt-2"],["tourAnchor","azt-tour-5",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-Qv44FAUiKc1",3,"routerLink"],[1,"box","p-8","zoom-in","h-full","text-center","relative"],["name","landmark","size","48",3,"ngClass"],["azt-track-service","dashboard-main-2s1OXiSzx",3,"routerLink"],["name","book-open","size","48",3,"ngClass"],["tourAnchor","azt-tour-6",1,"col-span-6","md:col-span-3","intro-y","h-full"],["azt-track-service","dashboard-main-MzpKqpLgI",3,"routerLink"],["name","plug","size","48",2,"transform","rotate(45deg)",3,"ngClass"],[1,"col-span-12","mt-5","intro-y","h-full","mb-8"],["azt-track-service","dashboard-main-E42HRTjN8",1,"premium-btn",3,"routerLink"],["azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip"],["name","circle-help","size","24","strokeWidth","2"],["azt-track-service","dashboard-main-J6ZAMHq8uVG",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-4","ml-4",3,"matTooltip","click"],["name","circle-help","size","24"]],template:function(a,i){1&a&&(t.j41(0,"teacher-layout",0),t.nI1(1,"mytranslate"),t.j41(2,"div",1),t.DNE(3,mt,2,2,"div",2),t.nrm(4,"azota-business-package-warning-box"),t.j41(5,"div",3)(6,"div",4)(7,"div",5)(8,"a",6),t.nI1(9,"navigationLocalize"),t.j41(10,"div",7),t.nrm(11,"lucide-icon",8),t.j41(12,"div",9),t.EFF(13),t.nI1(14,"mytranslate"),t.k0s()()()(),t.j41(15,"div",10)(16,"a",11),t.nI1(17,"navigationLocalize"),t.j41(18,"div",7),t.nrm(19,"lucide-icon",12),t.j41(20,"div",9),t.EFF(21),t.nI1(22,"mytranslate"),t.k0s()()()(),t.j41(23,"div",13)(24,"a",14),t.nI1(25,"navigationLocalize"),t.j41(26,"div",7),t.nrm(27,"lucide-icon",15),t.j41(28,"div",9),t.EFF(29),t.nI1(30,"mytranslate"),t.k0s()()()(),t.j41(31,"div",16)(32,"a",17),t.nI1(33,"navigationLocalize"),t.j41(34,"div",7),t.nrm(35,"lucide-icon",18),t.j41(36,"div",9),t.EFF(37),t.nI1(38,"mytranslate"),t.k0s()()()(),t.DNE(39,dt,8,10,"div",19),t.nI1(40,"showFeatureWhenIsNotBusinessDomain"),t.DNE(41,ut,8,10,"div",19),t.nI1(42,"showFeatureWhenIsNotBusinessDomain"),t.DNE(43,ht,8,8,"div",20),t.nI1(44,"async"),t.nI1(45,"allowFeatureBusinessForUser"),t.k0s(),t.DNE(46,gt,5,8,"div",21),t.j41(47,"div",22)(48,"div",23)(49,"div",24),t.nrm(50,"textarea",25),t.j41(51,"a",26),t.nrm(52,"lucide-icon",27),t.k0s()()()()(),t.j41(53,"div",28),t.DNE(54,pt,1,0,"footer-info-menu",29),t.j41(55,"button",30),t.nI1(56,"mytranslate"),t.nI1(57,"navigationLocalize"),t.nrm(58,"lucide-icon",31),t.k0s(),t.DNE(59,bt,3,3,"a",32),t.DNE(60,ft,3,3,"a",33),t.nrm(61,"footer-admin-menu"),t.k0s()()()),2&a&&(t.Y8G("headerTitle",t.bMT(1,23,"lang_cms_test_dashboard_title")),t.R7$(3),t.Y8G("ngIf",i.currentUrl),t.R7$(5),t.Y8G("routerLink",t.eq3(55,I,t.bMT(9,25,"/admin/testbank/document-management/1/0/1"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(57,y)),t.R7$(2),t.SpI(" ",t.bMT(14,27,"lang_auto_bai_tap")," "),t.R7$(3),t.Y8G("routerLink",t.eq3(58,I,t.bMT(17,29,"/admin/testbank/document-management/0/0/1"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(60,y)),t.R7$(2),t.SpI(" ",t.bMT(22,31,"lang_auto_de_thi")," "),t.R7$(3),t.Y8G("routerLink",t.eq3(61,I,t.bMT(25,33,"/admin/student/manage-classroom/0"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(63,y)),t.R7$(2),t.SpI(" ",t.bMT(30,35,"lang_auto_quan_ly_lop")," "),t.R7$(3),t.Y8G("routerLink",t.eq3(64,I,t.bMT(33,37,"/admin/teacher-group/0/0"))),t.R7$(3),t.Y8G("ngClass",t.lJ4(66,y)),t.R7$(2),t.SpI(" ",t.bMT(38,39,"lang_dashboard_teacher_management_box")," "),t.R7$(2),t.Y8G("ngIf",t.bMT(40,41,"")&&i.showTestMarketButton),t.R7$(2),t.Y8G("ngIf",t.bMT(42,43,"")),t.R7$(2),t.Y8G("ngIf",t.bMT(44,45,t.brH(45,47,"","training_center_menu",!1))),t.R7$(3),t.Y8G("ngIf",!i.isBusinessDomain),t.R7$(8),t.Y8G("ngIf",!i.isBusinessDomain),t.R7$(1),t.FS9("matTooltip",t.bMT(56,51,"lang_auto_thung_rac")),t.Y8G("routerLink",t.eq3(67,I,t.bMT(57,53,"/admin/trash/0"))),t.R7$(4),t.Y8G("ngIf",!i.isBusinessDomain),t.R7$(1),t.Y8G("ngIf",i.isBusinessDomain))},dependencies:[c.Wk,s.YU,s.bT,G.oV,nt,B.Q,r.WGl,$,N,s.Jj,g.F2,g.wp,g.bj,g.z0],encapsulation:2})}return e})();var _t=o(18718);function St(e,u){if(1&e&&t.nrm(0,"azt-loading-effect",2),2&e){const n=t.XpG();t.Y8G("currentStatusObj",n.statusObj)}}function Dt(e,u){1&e&&t.nrm(0,"footer-info-menu")}function kt(e,u){if(1&e&&(t.j41(0,"div",21),t.DNE(1,Dt,1,0,"footer-info-menu",22),t.nrm(2,"footer-admin-menu"),t.k0s()),2&e){const n=t.XpG(2);t.R7$(1),t.Y8G("ngIf",!n.isBusinessDomain)}}const It=function(){return{"text-primary mr-5":!0}},zt=function(){return{"text-success mr-5":!0}},yt=function(){return{"text-pending mr-5":!0}};function Tt(e,u){if(1&e){const n=t.RV6();t.j41(0,"div",3)(1,"div",4)(2,"h3",5),t.EFF(3),t.nI1(4,"mytranslate"),t.k0s(),t.j41(5,"p",6),t.nrm(6,"span",7),t.nI1(7,"mytranslate"),t.EFF(8," .\xa0 "),t.j41(9,"a",8),t.EFF(10),t.nI1(11,"mytranslate"),t.k0s()()(),t.j41(12,"div",9)(13,"div",10)(14,"div",11)(15,"a",12),t.bIt("click",function(){t.eBV(n);const i=t.XpG();return t.Njj(i.redirectToCreateDocument())}),t.j41(16,"div",13),t.nrm(17,"lucide-icon",14),t.j41(18,"div",15),t.EFF(19),t.nI1(20,"mytranslate"),t.k0s()()()(),t.j41(21,"div",11)(22,"a",16),t.bIt("click",function(){t.eBV(n);const i=t.XpG();return t.Njj(i.redirectToGlobalBank())}),t.j41(23,"div",13),t.nrm(24,"lucide-icon",17),t.j41(25,"div",15),t.EFF(26),t.nI1(27,"mytranslate"),t.k0s()()()(),t.j41(28,"div",11)(29,"a",18),t.bIt("click",function(){t.eBV(n);const i=t.XpG();return t.Njj(i.redirectToAzotaBank())}),t.j41(30,"div",13),t.nrm(31,"lucide-icon",19),t.j41(32,"div",15),t.EFF(33),t.nI1(34,"mytranslate"),t.k0s()()()()()()(),t.DNE(35,kt,3,1,"div",20)}if(2&e){const n=t.XpG();t.R7$(3),t.SpI(" ",t.bMT(4,10,"lang_auto_chao_mung_ban_den_voi_azota")+" \u{1f389}"," "),t.R7$(3),t.Y8G("innerHTML",t.bMT(7,12,"lang_auto_ban_co_the_tao"),t.npT),t.R7$(4),t.JRh(t.bMT(11,14,"lang_auto_tim_hieu_them")),t.R7$(7),t.Y8G("ngClass",t.lJ4(22,It)),t.R7$(2),t.SpI(" ",t.bMT(20,16,"lang_auto_tao_moi")," "),t.R7$(5),t.Y8G("ngClass",t.lJ4(23,zt)),t.R7$(2),t.SpI(" ",t.bMT(27,18,"lang_testbank_test_list_create_new_from_matrix_bank")," "),t.R7$(5),t.Y8G("ngClass",t.lJ4(24,yt)),t.R7$(2),t.SpI(" ",t.bMT(34,20,"lang_global_azota_download_from_azota_bank")," "),t.R7$(2),t.Y8G("ngIf",!n.isMobileWebView)}}let Ct=(()=>{class e extends _.H{ngOnInit(){this.initStatusObj(),this.aztDashboardDataService.isWelcomeDashboard(!1).subscribe(n=>{n||n||this.aztDashboardDataService.checkRedirectDashboard(!1,this.isMobileWebView),this.stopStatusObj()}),super.ngOnInit()}redirectToCreateDocument(){this.commonService.myNavigationWithQueryString("/admin/testbank/create-new-document/0","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToGlobalBank(){this.commonService.myNavigationWithQueryString("/admin/testbank/matrix-list/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToAzotaBank(){this.commonService.myNavigationWithQueryString("/ladingpage/document-management/0/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome&from=dashboard-welcome"))}constructor(n){super(),this.aztDashboardDataService=n}static#t=this.\u0275fac=function(a){return new(a||e)(t.rXU(O))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["dashboard-welcome"]],features:[t.Vt3],decls:4,vars:2,consts:[[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","sm:mt-10"],[1,"intro-y","mt-5"],[1,"font-medium","text-xl"],[1,"text-md","mt-2"],[3,"innerHTML"],["azt-track-service","dashboard-welcome-pZ4vNL2WA","href","https://docs.azota.vn","target","_blank",1,"btn-text-primary","font-medium"],[1,"mb-3","intro-y","sm:gap-10","mt-10"],[1,"grid","grid-cols-12","gap-6","items-center","mt-4"],[1,"col-span-12","md:col-span-6","lg:col-span-4","h-full","intro-y"],["azt-track-service","dashboard-welcome-rOUx53afllU",3,"click"],[1,"box","flex","items-center","px-5","py-5","zoom-in"],["name","file-plus-2","size","32",3,"ngClass"],[1,"font-medium","text-lg"],["azt-track-service","dashboard-welcome-Av9Wffvci",3,"click"],["name","landmark","size","32",3,"ngClass"],["azt-track-service","dashboard-welcome-UaXl56_mm",3,"click"],["name","cloud-download","size","32",3,"ngClass"],["class","absolute left-0 bottom-0 index",4,"ngIf"],[1,"absolute","left-0","bottom-0","index"],[4,"ngIf"]],template:function(a,i){if(1&a&&(t.j41(0,"teacher-layout"),t.DNE(1,St,1,1,"azt-loading-effect",0),t.DNE(2,Tt,36,25,"ng-template",null,1,t.C5r),t.k0s()),2&a){const m=t.sdS(3);t.R7$(1),t.Y8G("ngIf",i.statusObj.loading)("ngIfElse",m)}},dependencies:[s.YU,s.bT,_t.K,B.Q,r.WGl,$,N,g.wp]})}return e})();const Mt=[{component:(()=>{class e extends _.H{static#t=this.\u0275fac=function(){let n;return function(i){return(n||(n=t.xGo(e)))(i||e)}}();static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-dashboard"]],features:[t.Vt3],decls:1,vars:0,template:function(a,i){1&a&&t.nrm(0,"router-outlet")},dependencies:[c.n3],encapsulation:2})}return e})(),path:"",canActivate:[T.L],children:[{path:"dashboard-welcome",component:Ct},{path:"dashboard",component:vt},{path:"dashboard-v1",redirectTo:"dashboard",pathMatch:"full"}]}];let jt=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[c.iI.forChild(Mt),c.iI,z.XE]})}return e})(),Rt=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({providers:[{provide:M.vn,useValue:d.c.azt_tiny_mce_script_src}],imports:[c.iI,s.MD,k.s,b.Id,M.sv,p.YN,p.X1,f.hM,x.L,l.Lk,R.xv,h.Q,v.b,jt,r.flO.pick(r.Ptg)]})}return e})()},34158:(j,D,o)=>{o.d(D,{L:()=>f});var b=o(26860),s=o(36484),p=o(39307);let f=(()=>{class c{constructor(r,l){this.userService=r,this.redirectService=l}canActivate(r,l){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(l.url),!1)}canActivateChild(r,l){return this.canActivate(r,l)}canLoad(r){const l=`/${r.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(l),!1)}static#t=this.\u0275fac=function(l){return new(l||c)(b.KVO(s.R),b.KVO(p.m))};static#e=this.\u0275prov=b.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},39763:(j,D,o)=>{o.d(D,{m:()=>f});var b=o(26860),s=o(36484),p=o(91930);let f=(()=>{class c{constructor(r,l){this.userService=r,this.commonService=l}checkLoginZalo(){if(!this.userService.isLogin())return!1;const r=this.userService.getUserObj();return!(!r.zaloId||r.phone&&10==r.phone.length||r.email&&-1!==r.email.indexOf("@"))}zaloInfoRequired(){this.checkLoginZalo()&&this.commonService.myNavigation("/auth/required-phone-or-email")}static#t=this.\u0275fac=function(l){return new(l||c)(b.KVO(s.R),b.KVO(p.R))};static#e=this.\u0275prov=b.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},2915:(j,D,o)=>{o.d(D,{U:()=>R});var b=o(59640),s=o(26860),p=o(54460),f=o(89163),c=o(5502);const M=["aztDialogContentBox"],r=function(k,x){return{"width.px":k,"height.%":100,"--scrollbar-size":x}},l=["*"];let R=(()=>{class k extends b.H{checkHeightOfElement(){if(!this.aztDialogContentBox)return;var v=this.aztDialogContentBox.nativeElement.querySelector("."+this.contentBoxClassName);if(!v)return;let h=Math.round(window.innerHeight*this.defaultHeight/100),d=v.getBoundingClientRect().height+1,z=!(d<h),T=(d<h?d:h)+"px",_="72vh";z!=this.isScroll&&(this.isScroll=z),this.aztDialogContentBox.nativeElement.style.height!=T&&(this.aztDialogContentBox.nativeElement.style.height=T),this.aztDialogContentBox.nativeElement.style.maxHeight!=_&&(_=T),this.minHeight&&(this.aztDialogContentBox.nativeElement.style.minHeight=this.minHeight)}ngAfterViewChecked(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.checkHeightOfElement()},0)})}constructor(v){super(),this.ngZone=v,this.defaultHeight=72,this.defaultWidth=0,this.minHeight=void 0,this.isScroll=!1,this.contentBoxClassName="azt-mat-dialog-content-box"}static#t=this.\u0275fac=function(h){return new(h||k)(s.rXU(s.SKi))};static#e=this.\u0275cmp=s.VBU({type:k,selectors:[["azt-mat-dialog-content"]],viewQuery:function(h,d){if(1&h&&s.GBs(M,5),2&h){let z;s.mGM(z=s.lsd())&&(d.aztDialogContentBox=z.first)}},inputs:{defaultHeight:"defaultHeight",defaultWidth:"defaultWidth",minHeight:"minHeight"},features:[s.Vt3],ngContentSelectors:l,decls:5,vars:7,consts:[["aztDialogContentBox",""],["scrollViewport","","pointerEventsMethod","scrollbar",3,"visibility","ngStyle"]],template:function(h,d){1&h&&(s.NAR(),s.j41(0,"mat-dialog-content",null,0)(2,"ng-scrollbar",1)(3,"div"),s.SdG(4),s.k0s()()()),2&h&&(s.R7$(2),s.Y8G("visibility","hover")("ngStyle",s.l_i(4,r,d.defaultWidth||"auto",d.isScroll?"5px":"0")),s.R7$(1),s.HbH(d.contentBoxClassName))},dependencies:[p.B3,f.Yi,c.Yh,c.Gl],encapsulation:2})}return k})()}}]);