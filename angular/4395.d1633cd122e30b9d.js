"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[4395],{14395:(j,T,n)=>{n.r(T),n.d(T,{PracticeFrontendModule:()=>J});var h=n(96814),v=n(56223),t=n(19347),p=n(21266),m=n(42753),x=n(37722),l=n(21494),_=n(25391),A=n(29942),f=n(84155),b=n(78217),C=n(58844),M=n(82481),O=n(43048),L=n(47496),e=n(65879);let P=(()=>{class i extends L.Q{}return i.\u0275fac=function(){let r;return function(s){return(r||(r=e.n5z(i)))(s||i)}}(),i.\u0275cmp=e.Xpm({type:i,selectors:[["app-practice-frontend"]],features:[e.qOj],decls:2,vars:0,consts:[["id","practice-frontend-layout"]],template:function(a,s){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"router-outlet"),e.qZA())},dependencies:[p.lC],encapsulation:2}),i})();var Z=n(52572),k=n(54),E=n(70342),U=n(43389),D=n(18881),I=n(6653);function S(i,r){1&i&&e._UZ(0,"azt-loading-effect")}function z(i,r){if(1&i){const a=e.EpF();e.TgZ(0,"div",5)(1,"div",6)(2,"h3",7),e._uU(3),e.ALo(4,"mytranslate"),e.qZA(),e.TgZ(5,"div",8)(6,"div",9)(7,"p",10)(8,"span",11),e._UZ(9,"lucide-icon",12),e.qZA(),e._uU(10),e.ALo(11,"mytranslate"),e.qZA(),e.TgZ(12,"p",13),e._uU(13),e.ALo(14,"mytranslate"),e.ALo(15,"mytranslate"),e.qZA()(),e.TgZ(16,"div",14)(17,"p",10)(18,"span",11),e._UZ(19,"lucide-icon",15),e.qZA(),e._uU(20),e.ALo(21,"mytranslate"),e.qZA(),e.TgZ(22,"p",13),e._uU(23),e.qZA()(),e.TgZ(24,"div",14)(25,"p",10)(26,"span",11),e._UZ(27,"lucide-icon",16),e.qZA(),e._uU(28),e.ALo(29,"mytranslate"),e.qZA(),e.TgZ(30,"p",13),e._uU(31),e.ALo(32,"mytranslate"),e.qZA()()(),e.TgZ(33,"div",17)(34,"button",18),e.NdJ("click",function(){e.CHM(a);const o=e.oxw(2);return e.KtG(o.redirectToPractice())}),e._uU(35),e.ALo(36,"mytranslate"),e.O4$(),e.TgZ(37,"svg",19),e._UZ(38,"polyline",20),e.qZA()()()(),e.kcU(),e.TgZ(39,"div",21)(40,"div",22),e._uU(41),e.ALo(42,"mytranslate"),e.qZA(),e.TgZ(43,"div",23),e._UZ(44,"input",24),e.TgZ(45,"button",25),e.NdJ("click",function(){e.CHM(a);const o=e.oxw(2);return e.KtG(o.showCopySuccess())}),e.TgZ(46,"span",26),e._UZ(47,"lucide-icon",27),e.qZA(),e._uU(48),e.ALo(49,"mytranslate"),e.qZA()()()()}if(2&i){const a=e.oxw(2);e.xp6(3),e.hij(" ",a.practiceObj&&a.practiceObj.name?a.practiceObj.name:e.lcZ(4,12,"lang_practice_name_default")," "),e.xp6(7),e.hij(" ",e.lcZ(11,14,"lang_testbank_tested_list_time_homework")," "),e.xp6(3),e.hij(" ",a.practiceObj&&a.practiceObj.minute&&a.practiceObj.minute>0?a.practiceObj.minute+" "+e.lcZ(14,16,"lang_auto_phut"):e.lcZ(15,18,"lang_auto_khong_gioi_han")," "),e.xp6(7),e.hij(" ",e.lcZ(21,20,"lang_auto_so_luong_cau_hoi")," "),e.xp6(3),e.hij(" ",null==a.practiceObj?null:a.practiceObj.totalQuestion," "),e.xp6(5),e.hij(" ",e.lcZ(29,22,"lang_auto_loai_de")," "),e.xp6(3),e.hij(" ",e.lcZ(32,24,"lang_core_practice_more")," "),e.xp6(4),e.hij(" ",e.lcZ(36,26,"lang_auto_bat_dau_lam_bai")," "),e.xp6(6),e.hij(" ",e.lcZ(42,28,"lang_core_chia_se_bai_luyen_nay_cho_ban_be_cung_luyen_tap")+": "," "),e.xp6(3),e.Q6J("value",a.linkPractice),e.xp6(1),e.Q6J("cdkCopyToClipboard",a.copyLinkToClipboard()),e.xp6(3),e.hij(" ",e.lcZ(49,30,"lang_auto_sao_chep")," ")}}function y(i,r){if(1&i&&(e.TgZ(0,"div",3),e.YNc(1,z,50,32,"div",4),e.qZA()),2&i){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",""==a.hasErrorMessage)}}const w=[{path:"",component:P,canActivate:[O.J],children:[{path:":hash_id",component:(()=>{class i extends L.Q{copyLinkToClipboard(){return this.linkPractice}showCopySuccess(){this.showSuccessSnack("lang_auto_sao_chep_thanh_cong")}getPracticeByHashId(){this.initStatusObj(),this.waitDestroy(this.practiceService.apiPracticeHashIdGet(this.hashId).subscribe(a=>{if(1==a.success){this.practiceObj=a.data;let s=this.commonService.getCurrentDomain();this.linkPractice=`${s}/on-luyen/${this.hashId}`,this.successStatusObj()}else this.errorStatusObj(a.message??"")}))}redirectToPractice(){this.commonService.myNavigationWithQueryString("/test/take-practice/"+this.practiceObj?.practiceId+"/0/"+this.hashId,"?backto="+encodeURIComponent(this.backToLink)+"&resultExamId="+encodeURIComponent(this.resultExamId))}ngOnInit(){this.waitDestroy((0,Z.a)([this.activeRoute.params,this.activeRoute.queryParams]).subscribe(([])=>{let a=this.commonService.getMyParam(this.activeRoute,"hash_id")?.toString();this.hashId=a||"",this.resultExamId=Number(this.commonService.getMyQueryParam("resultExamId")??"0")??0,this.backToLink=this.commonService.getMyQueryParam("backto")??"/student/classroom/0",this.getPracticeByHashId()})),super.ngOnInit()}constructor(a,s){super(),this.activeRoute=a,this.practiceService=s,this.hashId="",this.hasErrorMessage="",this.backToLink="/student/classroom/0",this.linkPractice="",this.resultExamId=0}ngOnDestroy(){super.ngOnDestroy()}}return i.\u0275fac=function(a){return new(a||i)(e.Y36(p.gz),e.Y36(k.ik))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-practice-detail"]],features:[e.qOj],decls:4,vars:3,consts:[[3,"headerBackToLink"],[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"relative"],["class","intro-y mt-8",4,"ngIf"],[1,"intro-y","mt-8"],[1,"box","mx-auto","mt-5","p-5",2,"max-width","560px"],[1,"text-lg","font-medium","text-center"],[1,"azt-info-exam","mt-5"],[1,"flex","items-center"],[1,"text-md","flex","items-center"],[1,"w-4","h-4","mr-2"],["name","clock-4"],[1,"text-md","font-medium","ml-auto"],[1,"flex","items-center","mt-3"],["name","help-circle"],["name","clipboard-type"],[1,"mt-5"],["azt-track-service","practice-detail-m4fEGGL74",1,"btn","btn-pending","w-full","text-white",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","ml-2"],["points","9 18 15 12 9 6"],[1,"box","mt-5","mx-auto","p-5",2,"max-width","560px"],[1,"text-md","font-medium"],[1,"azt-copy","relative","mt-5","intro-x"],["type","text","readonly","",1,"form-control","py-3","px-4","border-transparent","bg-slate-100","pr-10","text-primary",2,"padding-right","120px","cursor","pointer",3,"value"],["azt-track-service","practice-detail-isTsISlyAY",1,"btn","btn-outline-primary","absolute","my-auto","inset-y-0","right-0",2,"border-top-left-radius","0","border-bottom-left-radius","0",3,"cdkCopyToClipboard","click"],[1,"w-4","h-4","inline-block","mr-2"],["name","copy"]],template:function(a,s){if(1&a&&(e.TgZ(0,"student-layout",0),e.YNc(1,S,1,0,"azt-loading-effect",1),e.YNc(2,y,2,1,"ng-template",null,2,e.W1O),e.qZA()),2&a){const o=e.MAs(3);e.Q6J("headerBackToLink",s.backToLink),e.xp6(1),e.Q6J("ngIf",s.statusObj.loading)("ngIfElse",o)}},dependencies:[h.O5,E.i3,U.l,D.L,x.Nh5,I.JV],encapsulation:2}),i})()}]}];let R=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz.forChild(w),p.Bz,M.fQ]}),i})(),J=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz,h.ez,A.j,m.Z_,R,v.u5,v.UX,t.Is,f.Z,l.xC,_.QG,C.W,b.d,x.qyJ.pick(x.ciZ)]}),i})()},43048:(j,T,n)=>{n.d(T,{J:()=>p});var h=n(65879),v=n(78953),t=n(79998);let p=(()=>{class m{constructor(l,_){this.userService=l,this.redirectService=_}canActivate(l,_){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(_.url),!1)}canActivateChild(l,_){return this.canActivate(l,_)}canLoad(l){const _=`/${l.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(_),!1)}}return m.\u0275fac=function(l){return new(l||m)(h.LFG(v.U),h.LFG(t.z))},m.\u0275prov=h.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},18881:(j,T,n)=>{n.d(T,{L:()=>s});var h=n(47496),v=n(20553),t=n(65879),p=n(94960),m=n(88489),x=n(23433),l=n(78953),_=n(14250),A=n(21266),f=n(96814),b=n(92596),C=n(24097),M=n(82509),O=n(37722),L=n(18456),e=n(1478),P=n(69198),Z=n(6653);function k(o,u){if(1&o&&(t.TgZ(0,"div",8),t.GkF(1,9),t.TgZ(2,"div",10),t.GkF(3,9),t.TgZ(4,"div",11)(5,"div",12),t.GkF(6,9),t.qZA(),t.TgZ(7,"div",13),t.GkF(8,9),t.qZA()()()()),2&o){t.oxw(2);const c=t.MAs(8),g=t.MAs(6),d=t.MAs(4),Q=t.MAs(2);t.xp6(1),t.Q6J("ngTemplateOutlet",c),t.xp6(2),t.Q6J("ngTemplateOutlet",g),t.xp6(3),t.Q6J("ngTemplateOutlet",d),t.xp6(2),t.Q6J("ngTemplateOutlet",Q)}}function E(o,u){if(1&o&&(t.TgZ(0,"div",8)(1,"div",10)(2,"div",11)(3,"div",13),t.GkF(4,9),t.qZA()()()()),2&o){t.oxw(2);const c=t.MAs(2);t.xp6(4),t.Q6J("ngTemplateOutlet",c)}}function U(o,u){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,k,9,4,"div",6),t.YNc(2,E,5,1,"div",6),t.TgZ(3,"div",7),t._UZ(4,"header-setting-color"),t.qZA()()),2&o){const c=t.oxw();t.xp6(1),t.Q6J("ngIf",!c.isMobileWebView),t.xp6(1),t.Q6J("ngIf",c.isMobileWebView)}}function D(o,u){1&o&&t.Hsn(0)}function I(o,u){if(1&o){const c=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(c);const d=t.oxw(2);return t.KtG(d.goBack())}),t.O4$(),t.TgZ(1,"svg",26),t._UZ(2,"polyline",27),t.qZA(),t.kcU(),t.TgZ(3,"span",28),t._uU(4),t.ALo(5,"mytranslate"),t.qZA()()}2&o&&(t.xp6(4),t.Oqu(t.lcZ(5,1,"lang_auto_quay_lai")))}function S(o,u){if(1&o&&(t.TgZ(0,"div",29),t._uU(1),t.qZA()),2&o){const c=t.oxw(2);t.xp6(1),t.hij(" ",c.headerTitle," ")}}function z(o,u){if(1&o&&(t.TgZ(0,"div",14)(1,"div",15)(2,"div",16),t.YNc(3,I,6,3,"button",17),t.qZA(),t.TgZ(4,"div",18)(5,"span",19),t._uU(6),t.qZA()(),t.TgZ(7,"div",15)(8,"div",20),t._UZ(9,"azt-switch-language"),t.qZA(),t.TgZ(10,"div",20),t._UZ(11,"header-notice-box",21),t.qZA(),t.TgZ(12,"div",22),t._UZ(13,"header-account-menu",23),t.qZA()()(),t.YNc(14,S,2,1,"div",24),t.qZA()),2&o){const c=t.oxw();t.xp6(3),t.Q6J("ngIf",""!=c.headerBackToLink),t.xp6(3),t.hij(" ",c.headerTitle," "),t.xp6(5),t.Q6J("role",1),t.xp6(2),t.Q6J("isTeacherDashboard",!1),t.xp6(1),t.Q6J("ngIf",c.headerTitle)}}const y=function(o){return[o]},B=function(){return["/student/message"]};function w(o,u){1&o&&(t.TgZ(0,"li")(1,"a",40),t.ALo(2,"navigationLocalize"),t.TgZ(3,"div",35),t.ALo(4,"mytranslate"),t.TgZ(5,"div",36),t._UZ(6,"lucide-icon",41),t.qZA()(),t.TgZ(7,"div",38),t._uU(8),t.ALo(9,"mytranslate"),t.qZA()()()),2&o&&(t.xp6(1),t.Q6J("routerLink",t.VKq(11,y,t.lcZ(2,5,"/student/message")))("changeActiveRouter",t.DdM(13,B)),t.xp6(2),t.s9C("matTooltip",t.lcZ(4,7,"lang_business_dashboard_business_messages")),t.Q6J("matTooltipPosition","right"),t.xp6(5),t.Oqu(t.lcZ(9,9,"lang_business_dashboard_business_messages")))}const R=function(){return["/student/classroom/0","/de-thi","/bai-tap","/test/","/auth/account-setting/","/notify","/student/add-teacher","/on-luyen","/student/classroom"]};function J(o,u){if(1&o&&(t.TgZ(0,"nav",30)(1,"a",31),t.ALo(2,"navigationLocalize"),t._UZ(3,"img",32),t.ALo(4,"getLinkLogo"),t.qZA(),t._UZ(5,"div",33),t.TgZ(6,"ul")(7,"li")(8,"a",34),t.ALo(9,"navigationLocalize"),t.TgZ(10,"div",35),t.ALo(11,"mytranslate"),t.TgZ(12,"div",36),t._UZ(13,"lucide-icon",37),t.qZA()(),t.TgZ(14,"div",38),t._uU(15),t.ALo(16,"mytranslate"),t.qZA()()(),t.YNc(17,w,10,14,"li",39),t.qZA()()),2&o){const c=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(18,y,t.lcZ(2,8,"/student/classroom/0"))),t.xp6(2),t.Q6J("src",t.lcZ(4,10,"smallLogo"),t.LSH),t.xp6(5),t.Q6J("routerLink",t.VKq(20,y,t.lcZ(9,12,"/student/classroom/0")))("changeActiveRouter",t.DdM(22,R)),t.xp6(2),t.s9C("matTooltip",t.lcZ(11,14,"lang_auto_danh_sach_lop")),t.Q6J("matTooltipPosition","right"),t.xp6(5),t.Oqu(t.lcZ(16,16,"lang_auto_danh_sach_lop")),t.xp6(2),t.Q6J("ngIf",c.businessChatService.ready)}}const i=function(){return["/student/classroom/0","/de-thi","/test/answer-test","/auth/account-setting/","/on-luyen/"]};function r(o,u){if(1&o){const c=t.EpF();t.TgZ(0,"div",42)(1,"div",43)(2,"a",44),t.ALo(3,"navigationLocalize"),t._UZ(4,"img",32),t.ALo(5,"getLinkLogo"),t.qZA(),t.TgZ(6,"a",45),t.NdJ("click",function(){t.CHM(c);const d=t.oxw();return t.KtG(d.openMenuMobile())}),t.O4$(),t.TgZ(7,"svg",46),t._UZ(8,"line",47)(9,"line",48)(10,"line",49),t.qZA()()(),t.kcU(),t.TgZ(11,"div",50)(12,"a",51),t.NdJ("click",function(){t.CHM(c);const d=t.oxw();return t.KtG(d.closeMenuMobile())}),t.O4$(),t.TgZ(13,"svg",46),t._UZ(14,"circle",52)(15,"line",53)(16,"line",54),t.qZA()(),t.kcU(),t.TgZ(17,"ul",55)(18,"li")(19,"a",56),t.NdJ("click",function(){t.CHM(c);const d=t.oxw();return t.KtG(d.closeMenuMobile())}),t.ALo(20,"navigationLocalize"),t.TgZ(21,"div",57)(22,"div",36),t._UZ(23,"lucide-icon",37),t.qZA()(),t.TgZ(24,"div",58),t._uU(25),t.ALo(26,"mytranslate"),t.qZA()()()()()()}2&o&&(t.xp6(2),t.Q6J("routerLink",t.VKq(13,y,t.lcZ(3,5,"/student/classroom/0"))),t.xp6(2),t.Q6J("src",t.lcZ(5,7,"smallLogo"),t.LSH),t.xp6(15),t.Q6J("routerLink",t.VKq(15,y,t.lcZ(20,9,"/student/classroom/0")))("changeActiveRouter",t.DdM(17,i)),t.xp6(6),t.Oqu(t.lcZ(26,11,"lang_auto_danh_sach_lop")))}const a=["*"];let s=(()=>{class o extends h.Q{toggleDrawer(){this.chatBoxDrawer.toggle(),this.browserStorageService.saveSimpleSessionStorage("azota_ai_chat_box",this.commonService.serializeJson({isOpen:this.chatBoxDrawer.isOpened()}))}goBack(){this.commonService.myNavigationBySpecialQueryString(this.headerBackToLink)}openMenuMobile(){document.getElementById("toggle-menu")?.classList.add("mobile-menu--active")}closeMenuMobile(){document.getElementById("toggle-menu")?.classList.remove("mobile-menu--active")}ngOnInit(){super.ngOnInit(),window.scrollTo(0,0),this.isLogin=this.userService.isLogin()}constructor(c,g,d,Q,F){super(),this.chatBoxDrawer=c,this.browserStorageService=g,this.mobileWebviewService=d,this.userService=Q,this.businessChatService=F,this.headerBackToLink="",this.headerTitle="",this.isLogin=!1,this.willShowAIBox=!v.N.production||v.N.isProdAzotaVn,this.waitDestroy(this.mobileWebviewService.getWebviewBackToListenerSubscriber().subscribe(()=>{this.headerBackToLink&&this.goBack()}))}}return o.\u0275fac=function(c){return new(c||o)(t.Y36(p.h),t.Y36(m.n),t.Y36(x.r),t.Y36(l.U),t.Y36(_.c))},o.\u0275cmp=t.Xpm({type:o,selectors:[["student-layout"]],inputs:{headerBackToLink:"headerBackToLink",headerTitle:"headerTitle"},features:[t.qOj],ngContentSelectors:a,decls:9,vars:1,consts:[["id","azt-layout","class","azt-layout",4,"ngIf"],["BodyContentTpl",""],["TopBarTpl",""],["DesktopMenuTpl",""],["mobileMenuTpl",""],["id","azt-layout",1,"azt-layout"],["class","azt-body",4,"ngIf"],[1,"fixed","left-0","bottom-0","p-5","pb-8","azt-hidden","md:block"],[1,"azt-body"],[3,"ngTemplateOutlet"],[1,"flex","mt-[4.7rem]","md:mt-0"],[1,"content","relative"],[1,"top-bar"],[1,"azt-content"],[1,"block","w-full"],[1,"flex","items-center"],[1,"mr-auto"],["azt-track-service","student-layout-62Iv9eNFqL","class","btn btn-transparent",3,"click",4,"ngIf"],[1,"font-medium","flex-one","text-center"],[1,"azt-hidden","md:block"],[1,"dropdown","mr-2","sm:mr-4"],[3,"role"],[1,"dropdown","h-10","header-account-menu"],[3,"isTeacherDashboard"],["class","block md:hidden text-center pt-2 pb-2 font-medium",4,"ngIf"],["azt-track-service","student-layout-62Iv9eNFqL",1,"btn","btn-transparent",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","w-5","h-5"],["points","15 18 9 12 15 6"],[1,"azt-hidden","sm:block"],[1,"block","md:hidden","text-center","pt-2","pb-2","font-medium"],[1,"side-nav","side-nav--simple"],["azt-track-service","student-layout-un9eQGSmiX",1,"flex","items-center","pl-5","pt-4","relative",3,"routerLink"],["alt","Azota",1,"w-10",3,"src"],[1,"side-nav__devider","my-6"],["azt-track-service","student-layout-B8HCRZRRkc",1,"side-menu",3,"routerLink","changeActiveRouter"],[1,"side-menu__icon",3,"matTooltip","matTooltipPosition"],[1,"w-6","h-6"],["name","layers"],[1,"side-menu__title"],[4,"ngIf"],["azt-track-service","student-layout-UwU4Yg5km",1,"side-menu",3,"routerLink","changeActiveRouter"],["name","mail"],["id","toggle-menu",1,"mobile-menu","md:hidden"],[1,"mobile-menu-bar"],["azt-track-service","student-layout-mV8VG2juD5",1,"flex","mr-auto",3,"routerLink"],["azt-track-service","student-layout-vJI1vNSRRy",1,"mobile-menu-toggler",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-8","h-8","text-white","transform","-rotate-90"],["x1","18","y1","20","x2","18","y2","10"],["x1","12","y1","20","x2","12","y2","4"],["x1","6","y1","20","x2","6","y2","14"],[1,"scrollable"],["azt-track-service","student-layout-_36C4dUavQE",1,"mobile-menu-toggler",3,"click"],["cx","12","cy","12","r","10"],["x1","15","y1","9","x2","9","y2","15"],["x1","9","y1","9","x2","15","y2","15"],[1,"scrollable__content","py-2"],["azt-track-service","student-layout-ULLWHHZRD7-",1,"menu",3,"routerLink","changeActiveRouter","click"],[1,"menu__icon"],[1,"menu__title"]],template:function(c,g){1&c&&(t.F$t(),t.YNc(0,U,5,2,"div",0),t.YNc(1,D,1,0,"ng-template",null,1,t.W1O),t.YNc(3,z,15,5,"ng-template",null,2,t.W1O),t.YNc(5,J,18,23,"ng-template",null,3,t.W1O),t.YNc(7,r,27,18,"ng-template",null,4,t.W1O)),2&c&&t.Q6J("ngIf",g.isLogin)},dependencies:[A.rH,f.O5,f.tP,b.gM,C.e,M.f,O.Nh5,L.H,e.y,P.q,Z.Jy,Z.JV,Z.LI],encapsulation:2}),o})()}}]);