"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[1549],{43048:(L,v,i)=>{i.d(v,{J:()=>f});var t=i(65879),r=i(78953),e=i(79998);let f=(()=>{class u{constructor(d,m){this.userService=d,this.redirectService=m}canActivate(d,m){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(m.url),!1)}canActivateChild(d,m){return this.canActivate(d,m)}canLoad(d){const m=`/${d.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(m),!1)}}return u.\u0275fac=function(d){return new(d||u)(t.LFG(r.U),t.LFG(e.z))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},18881:(L,v,i)=>{i.d(v,{L:()=>q});var t=i(47496),r=i(20553),e=i(65879),f=i(94960),u=i(88489),x=i(23433),d=i(78953),m=i(14250),A=i(21266),T=i(96814),b=i(92596),p=i(24097),Z=i(82509),c=i(37722),g=i(18456),S=i(1478),O=i(69198),h=i(36727);const k=function(l){return{height:l}};function w(l,o){if(1&l&&(e.TgZ(0,"div",8),e.GkF(1,9),e.TgZ(2,"div",10),e.GkF(3,9),e.TgZ(4,"div",11)(5,"div",12),e.GkF(6,9),e.qZA(),e.TgZ(7,"div",13),e.GkF(8,9),e.qZA()()()()),2&l){const a=e.oxw(2),n=e.MAs(8),s=e.MAs(6),_=e.MAs(4),C=e.MAs(2);e.xp6(1),e.Q6J("ngTemplateOutlet",n),e.xp6(2),e.Q6J("ngTemplateOutlet",s),e.xp6(2),e.Q6J("ngStyle",e.VKq(5,k,a.headerTitle?"90px":"auto")),e.xp6(1),e.Q6J("ngTemplateOutlet",_),e.xp6(2),e.Q6J("ngTemplateOutlet",C)}}function I(l,o){if(1&l&&(e.TgZ(0,"div",8)(1,"div",10)(2,"div",11)(3,"div",13),e.GkF(4,9),e.qZA()()()()),2&l){e.oxw(2);const a=e.MAs(2);e.xp6(4),e.Q6J("ngTemplateOutlet",a)}}function E(l,o){if(1&l&&(e.TgZ(0,"div",5),e.YNc(1,w,9,7,"div",6),e.YNc(2,I,5,1,"div",6),e.TgZ(3,"div",7),e._UZ(4,"header-setting-color"),e.qZA()()),2&l){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",!a.isMobileWebView),e.xp6(1),e.Q6J("ngIf",a.isMobileWebView)}}function D(l,o){1&l&&e.Hsn(0)}function j(l,o){if(1&l){const a=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(a);const s=e.oxw(2);return e.KtG(s.goBack())}),e.O4$(),e.TgZ(1,"svg",26),e._UZ(2,"polyline",27),e.qZA(),e.kcU(),e.TgZ(3,"span",28),e._uU(4),e.ALo(5,"mytranslate"),e.qZA()()}2&l&&(e.xp6(4),e.Oqu(e.lcZ(5,1,"lang_auto_quay_lai")))}function M(l,o){if(1&l&&(e.TgZ(0,"div",29),e._uU(1),e.qZA()),2&l){const a=e.oxw(2);e.xp6(1),e.hij(" ",a.headerTitle," ")}}function U(l,o){if(1&l&&(e.TgZ(0,"div",14)(1,"div",15)(2,"div",16),e.YNc(3,j,6,3,"button",17),e.qZA(),e.TgZ(4,"div",18)(5,"span",19),e._uU(6),e.qZA()(),e.TgZ(7,"div",15)(8,"div",20),e._UZ(9,"azt-switch-language"),e.qZA(),e.TgZ(10,"div",20),e._UZ(11,"header-notice-box",21),e.qZA(),e.TgZ(12,"div",22),e._UZ(13,"header-account-menu",23),e.qZA()()(),e.YNc(14,M,2,1,"div",24),e.qZA()),2&l){const a=e.oxw();e.xp6(3),e.Q6J("ngIf",""!=a.headerBackToLink),e.xp6(3),e.hij(" ",a.headerTitle," "),e.xp6(5),e.Q6J("role",1),e.xp6(2),e.Q6J("isTeacherDashboard",!1),e.xp6(1),e.Q6J("ngIf",a.headerTitle)}}const y=function(l){return[l]},z=function(){return["/student/message"]};function N(l,o){1&l&&(e.TgZ(0,"li")(1,"a",40),e.ALo(2,"navigationLocalize"),e.TgZ(3,"div",35),e.ALo(4,"mytranslate"),e.TgZ(5,"div",36),e._UZ(6,"lucide-icon",41),e.qZA()(),e.TgZ(7,"div",38),e._uU(8),e.ALo(9,"mytranslate"),e.qZA()()()),2&l&&(e.xp6(1),e.Q6J("routerLink",e.VKq(11,y,e.lcZ(2,5,"/student/message")))("changeActiveRouter",e.DdM(13,z)),e.xp6(2),e.s9C("matTooltip",e.lcZ(4,7,"lang_business_dashboard_business_messages")),e.Q6J("matTooltipPosition","right"),e.xp6(5),e.Oqu(e.lcZ(9,9,"lang_business_dashboard_business_messages")))}const P=function(){return["/student/classroom/0","/de-thi","/bai-tap","/test/","/auth/account-setting/","/notify","/student/add-teacher","/on-luyen","/student/classroom"]};function B(l,o){if(1&l&&(e.TgZ(0,"nav",30)(1,"a",31),e.ALo(2,"navigationLocalize"),e._UZ(3,"img",32),e.ALo(4,"getLinkLogo"),e.qZA(),e._UZ(5,"div",33),e.TgZ(6,"ul")(7,"li")(8,"a",34),e.ALo(9,"navigationLocalize"),e.TgZ(10,"div",35),e.ALo(11,"mytranslate"),e.TgZ(12,"div",36),e._UZ(13,"lucide-icon",37),e.qZA()(),e.TgZ(14,"div",38),e._uU(15),e.ALo(16,"mytranslate"),e.qZA()()(),e.YNc(17,N,10,14,"li",39),e.qZA()()),2&l){const a=e.oxw();e.xp6(1),e.Q6J("routerLink",e.VKq(18,y,e.lcZ(2,8,"/student/classroom/0"))),e.xp6(2),e.Q6J("src",e.lcZ(4,10,"smallLogo"),e.LSH),e.xp6(5),e.Q6J("routerLink",e.VKq(20,y,e.lcZ(9,12,"/student/classroom/0")))("changeActiveRouter",e.DdM(22,P)),e.xp6(2),e.s9C("matTooltip",e.lcZ(11,14,"lang_auto_danh_sach_lop")),e.Q6J("matTooltipPosition","right"),e.xp6(5),e.Oqu(e.lcZ(16,16,"lang_auto_danh_sach_lop")),e.xp6(2),e.Q6J("ngIf",a.businessChatService.ready)}}const J=function(){return["/student/classroom/0","/de-thi","/test/answer-test","/auth/account-setting/","/on-luyen/"]};function R(l,o){if(1&l){const a=e.EpF();e.TgZ(0,"div",42)(1,"div",43)(2,"a",44),e.ALo(3,"navigationLocalize"),e._UZ(4,"img",32),e.ALo(5,"getLinkLogo"),e.qZA(),e.TgZ(6,"a",45),e.NdJ("click",function(){e.CHM(a);const s=e.oxw();return e.KtG(s.openMenuMobile())}),e.O4$(),e.TgZ(7,"svg",46),e._UZ(8,"line",47)(9,"line",48)(10,"line",49),e.qZA()()(),e.kcU(),e.TgZ(11,"div",50)(12,"a",51),e.NdJ("click",function(){e.CHM(a);const s=e.oxw();return e.KtG(s.closeMenuMobile())}),e.O4$(),e.TgZ(13,"svg",46),e._UZ(14,"circle",52)(15,"line",53)(16,"line",54),e.qZA()(),e.kcU(),e.TgZ(17,"ul",55)(18,"li")(19,"a",56),e.NdJ("click",function(){e.CHM(a);const s=e.oxw();return e.KtG(s.closeMenuMobile())}),e.ALo(20,"navigationLocalize"),e.TgZ(21,"div",57)(22,"div",36),e._UZ(23,"lucide-icon",37),e.qZA()(),e.TgZ(24,"div",58),e._uU(25),e.ALo(26,"mytranslate"),e.qZA()()()()()()}2&l&&(e.xp6(2),e.Q6J("routerLink",e.VKq(13,y,e.lcZ(3,5,"/student/classroom/0"))),e.xp6(2),e.Q6J("src",e.lcZ(5,7,"smallLogo"),e.LSH),e.xp6(15),e.Q6J("routerLink",e.VKq(15,y,e.lcZ(20,9,"/student/classroom/0")))("changeActiveRouter",e.DdM(17,J)),e.xp6(6),e.Oqu(e.lcZ(26,11,"lang_auto_danh_sach_lop")))}const F=["*"];let q=(()=>{class l extends t.Q{toggleDrawer(){this.chatBoxDrawer.toggle(),this.browserStorageService.saveSimpleSessionStorage("azota_ai_chat_box",this.commonService.serializeJson({isOpen:this.chatBoxDrawer.isOpened()}))}goBack(){this.commonService.myNavigationBySpecialQueryString(this.headerBackToLink)}openMenuMobile(){document.getElementById("toggle-menu")?.classList.add("mobile-menu--active")}closeMenuMobile(){document.getElementById("toggle-menu")?.classList.remove("mobile-menu--active")}ngOnInit(){super.ngOnInit(),window.scrollTo(0,0),this.isLogin=this.userService.isLogin()}constructor(a,n,s,_,C){super(),this.chatBoxDrawer=a,this.browserStorageService=n,this.mobileWebviewService=s,this.userService=_,this.businessChatService=C,this.headerBackToLink="",this.headerTitle="",this.isLogin=!1,this.willShowAIBox=!r.N.production||r.N.isProdAzotaVn,this.waitDestroy(this.mobileWebviewService.getWebviewBackToListenerSubscriber().subscribe(()=>{this.headerBackToLink&&this.goBack()}))}}return l.\u0275fac=function(a){return new(a||l)(e.Y36(f.h),e.Y36(u.n),e.Y36(x.r),e.Y36(d.U),e.Y36(m.c))},l.\u0275cmp=e.Xpm({type:l,selectors:[["student-layout"]],inputs:{headerBackToLink:"headerBackToLink",headerTitle:"headerTitle"},features:[e.qOj],ngContentSelectors:F,decls:9,vars:1,consts:[["id","azt-layout","class","azt-layout",4,"ngIf"],["BodyContentTpl",""],["TopBarTpl",""],["DesktopMenuTpl",""],["mobileMenuTpl",""],["id","azt-layout",1,"azt-layout"],["class","azt-body",4,"ngIf"],[1,"fixed","left-0","bottom-0","p-5","pb-8","azt-hidden","md:block"],[1,"azt-body"],[3,"ngTemplateOutlet"],[1,"flex","mt-[4.7rem]","md:mt-0"],[1,"content","relative"],[1,"top-bar",3,"ngStyle"],[1,"azt-content"],[1,"block","w-full"],[1,"flex","items-center"],[1,"mr-auto"],["azt-track-service","student-layout-62Iv9eNFqL","class","btn btn-transparent",3,"click",4,"ngIf"],[1,"font-medium","flex-one","text-center"],[1,"azt-hidden","md:block"],[1,"dropdown","mr-2","sm:mr-4"],[3,"role"],[1,"dropdown","h-10","header-account-menu"],[3,"isTeacherDashboard"],["class","block md:hidden text-center pt-2 pb-2 font-medium",4,"ngIf"],["azt-track-service","student-layout-62Iv9eNFqL",1,"btn","btn-transparent",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","w-5","h-5"],["points","15 18 9 12 15 6"],[1,"azt-hidden","sm:block"],[1,"block","md:hidden","text-center","pt-2","pb-2","font-medium"],[1,"side-nav","side-nav--simple"],["azt-track-service","student-layout-un9eQGSmiX",1,"flex","items-center","pl-5","pt-4","relative",3,"routerLink"],["alt","Azota",1,"w-10",3,"src"],[1,"side-nav__devider","my-6"],["azt-track-service","student-layout-B8HCRZRRkc",1,"side-menu",3,"routerLink","changeActiveRouter"],[1,"side-menu__icon",3,"matTooltip","matTooltipPosition"],[1,"w-6","h-6"],["name","layers"],[1,"side-menu__title"],[4,"ngIf"],["azt-track-service","student-layout-UwU4Yg5km",1,"side-menu",3,"routerLink","changeActiveRouter"],["name","mail"],["id","toggle-menu",1,"mobile-menu","md:hidden"],[1,"mobile-menu-bar"],["azt-track-service","student-layout-mV8VG2juD5",1,"flex","mr-auto",3,"routerLink"],["azt-track-service","student-layout-vJI1vNSRRy",1,"mobile-menu-toggler",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-8","h-8","text-white","transform","-rotate-90"],["x1","18","y1","20","x2","18","y2","10"],["x1","12","y1","20","x2","12","y2","4"],["x1","6","y1","20","x2","6","y2","14"],[1,"scrollable"],["azt-track-service","student-layout-_36C4dUavQE",1,"mobile-menu-toggler",3,"click"],["cx","12","cy","12","r","10"],["x1","15","y1","9","x2","9","y2","15"],["x1","9","y1","9","x2","15","y2","15"],[1,"scrollable__content","py-2"],["azt-track-service","student-layout-ULLWHHZRD7-",1,"menu",3,"routerLink","changeActiveRouter","click"],[1,"menu__icon"],[1,"menu__title"]],template:function(a,n){1&a&&(e.F$t(),e.YNc(0,E,5,2,"div",0),e.YNc(1,D,1,0,"ng-template",null,1,e.W1O),e.YNc(3,U,15,5,"ng-template",null,2,e.W1O),e.YNc(5,B,18,23,"ng-template",null,3,e.W1O),e.YNc(7,R,27,18,"ng-template",null,4,e.W1O)),2&a&&e.Q6J("ngIf",n.isLogin)},dependencies:[A.rH,T.O5,T.tP,T.PC,b.gM,p.e,Z.f,c.Nh5,g.H,S.y,O.q,h.Jy,h.JV,h.LI],encapsulation:2}),l})()},47929:(L,v,i)=>{i.d(v,{p:()=>l});var t=i(65879),r=i(56223),e=i(47496),f=i(91765),u=i(19347),x=i(72164),d=i(36727);let m=(()=>{class o extends x.e{btnCloseDialog(){this.dialogRef.close(!1)}confirmSelectStudent(){this.dialogRef.close(!0)}ngOnInit(){}constructor(n,s){super(s,n),this.dialogRef=n,this.data=s}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(u.so),t.Y36(u.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["confirm-select-student"]],features:[t.qOj],decls:23,vars:13,consts:[[1,"box"],[1,"border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"p-5"],[1,"text-md","font-medium","flex","items-center"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-6","h-6","mr-2","text-success"],["d","M22 11.08V12a10 10 0 1 1-5.93-9.14"],["points","22 4 12 14.01 9 11.01"],[1,"mt-2"],[1,"text-xs","text-slate-500","dark:text-slate-400"],[1,"p-3","text-right"],["azt-track-service","select_student-DGfIXHvy0B",1,"btn","btn-secondary","w-24","mr-2",3,"click"],["azt-track-service","select_student-TxSPB6i-6P",1,"btn","w-24","btn-primary",3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t.O4$(),t.TgZ(4,"svg",4),t._UZ(5,"path",5)(6,"polyline",6),t.qZA(),t._uU(7),t.ALo(8,"mytranslate"),t.kcU(),t.TgZ(9,"b"),t._uU(10),t.qZA(),t._uU(11," ? "),t.qZA(),t.TgZ(12,"div",7)(13,"p",8),t._uU(14),t.ALo(15,"mytranslate"),t.qZA()()()(),t.TgZ(16,"div",9)(17,"button",10),t.NdJ("click",function(){return s.btnCloseDialog()}),t._uU(18),t.ALo(19,"mytranslate"),t.qZA(),t.TgZ(20,"button",11),t.NdJ("click",function(){return s.confirmSelectStudent()}),t._uU(21),t.ALo(22,"mytranslate"),t.qZA()()()),2&n&&(t.xp6(7),t.hij(" ",t.lcZ(8,5,"lang_auto_ban_co_chac_chan_chon"),"\xa0"),t.xp6(3),t.hij(" ",s.data.fullName,""),t.xp6(4),t.hij(" ",t.lcZ(15,7,"lang_auto_ban_vui_long_chon_dung_ten_cua_minh_he_thong_se_ghi_nhan_bai_lam_cua_ban_theo_ten_da_chon")," "),t.xp6(4),t.hij(" ",t.lcZ(19,9,"lang_auto_dong")," "),t.xp6(3),t.hij(" ",t.lcZ(22,11,"lang_auto_xac_nhan")," "))},dependencies:[d.JV],encapsulation:2}),o})();var A=i(2783),T=i(88131),b=i(96814),p=i(85904),Z=i(67679),c=i(71646);function g(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",10)(1,"a",11),t.NdJ("click",function(){t.CHM(n);const _=t.oxw(2);return t.KtG(_.backToSelectClass())}),t.O4$(),t.TgZ(2,"svg",12),t._UZ(3,"polyline",13),t.qZA(),t._uU(4),t.ALo(5,"mytranslate"),t.qZA()()}2&o&&(t.xp6(4),t.hij(" ",t.lcZ(5,1,"lang_auto_chon_lop")," "))}function S(o,a){if(1&o&&(t.TgZ(0,"div",8),t.YNc(1,g,6,3,"div",9),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.onlyOneClass)}}function O(o,a){1&o&&(t.TgZ(0,"div",14)(1,"p",15),t._uU(2),t.ALo(3,"mytranslate"),t.qZA()()),2&o&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"lang_auto_vui_long_chon_dung_ten_minh_de_bao_danh_voi_giao_vien")," "))}function h(o,a){if(1&o&&(t.TgZ(0,"div",16),t.O4$(),t.TgZ(1,"svg",17),t._UZ(2,"circle",18)(3,"line",19),t.qZA(),t.kcU(),t._UZ(4,"input",20),t.ALo(5,"mytranslate"),t.qZA()),2&o){const n=t.oxw();t.xp6(4),t.s9C("placeholder",t.lcZ(5,2,"lang_student_classroom_list_detail_search_name_student")),t.Q6J("formControl",n.searchContent)}}function k(o,a){if(1&o&&(t.TgZ(0,"p",32),t._uU(1),t.ALo(2,"formatOnlyDateByUserUnitPipe"),t.qZA()),2&o){const n=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,n.birthday),"")}}function w(o,a){1&o&&(t.TgZ(0,"p",32),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_da_duoc_chon"),""))}function I(o,a){if(1&o&&(t.TgZ(0,"div",30),t.YNc(1,k,3,3,"p",31),t.YNc(2,w,3,3,"p",31),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",null!=n.birthday),t.xp6(1),t.Q6J("ngIf",1==n.isVerified)}}const E=function(o){return{opacity:o}};function D(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",23)(1,"div",24),t.NdJ("click",function(){const C=t.CHM(n).$implicit,Q=t.oxw(2);return t.KtG(Q.selectedStudent(C))}),t.TgZ(2,"div",25),t._UZ(3,"azt-create-avatar",26),t.qZA(),t.TgZ(4,"div",27)(5,"div",28)(6,"span",15),t._uU(7),t.qZA()(),t.YNc(8,I,3,2,"div",29),t.qZA()()()}if(2&o){const n=a.$implicit,s=t.oxw(2);let _;t.xp6(1),t.Q6J("ngStyle",t.VKq(6,E,1==n.isVerified&&0==(null==s.classObj?null:s.classObj.freeChooseName)?"0.6":"1")),t.xp6(2),t.Q6J("linkAvatar",null!==(_=null==n?null:n.avatar)&&void 0!==_?_:"")("nameCreateAvatar",n.fullName)("size",40),t.xp6(4),t.hij(" ",n.fullName," "),t.xp6(1),t.Q6J("ngIf",null!=n.birthday||1==n.isVerified)}}const j=function(){return["fullName"]};function M(o,a){if(1&o&&(t.TgZ(0,"div",21),t.YNc(1,D,9,8,"div",22),t.ALo(2,"appFilter"),t.qZA()),2&o){const n=t.oxw();let s;t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,1,n.studentObjs,null!==(s=n.searchContent.value)&&void 0!==s?s:"",t.DdM(5,j)))}}function U(o,a){1&o&&(t.TgZ(0,"p",15),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_vui_long_nhap_lai_ten_ban_de_bao_danh_voi_giao_vien")," "))}function y(o,a){1&o&&(t.TgZ(0,"p",15),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_khong_co_ten_trong_danh_sach_tren_vui_long_nhap_day_du_ho_ten")," "))}function z(o,a){1&o&&(t.TgZ(0,"div",44)(1,"span"),t._uU(2),t.ALo(3,"mytranslate"),t.qZA()()),2&o&&(t.xp6(2),t.hij("",t.lcZ(3,1,"lang_auto_yeu_cau_nhap_ho_ten_day_du")," "))}function N(o,a){1&o&&(t.TgZ(0,"span",45),t._UZ(1,"azt-loading-ui"),t.qZA())}function P(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",33),t.YNc(1,U,3,3,"p",34),t.YNc(2,y,3,3,"p",34),t.TgZ(3,"form",35)(4,"div",36)(5,"div",37)(6,"div",38),t._UZ(7,"input",39),t.ALo(8,"mytranslate"),t.qZA(),t.YNc(9,z,4,3,"div",40),t.qZA()(),t.TgZ(10,"div",41)(11,"button",42),t.NdJ("click",function(){t.CHM(n);const _=t.oxw();return t.KtG(_.approvedToClass())}),t._uU(12),t.ALo(13,"mytranslate"),t.YNc(14,N,2,0,"span",43),t.qZA()()()()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.studentObjs||0==n.studentObjs.length),t.xp6(1),t.Q6J("ngIf",n.studentObjs&&n.studentObjs.length>0),t.xp6(1),t.Q6J("formGroup",n.formName),t.xp6(4),t.s9C("placeholder",t.lcZ(8,8,"lang_auto_ho_va_ten")),t.xp6(2),t.Q6J("ngIf",n.formName.controls.fullName.errors&&n.formName.controls.fullName.invalid&&n.formName.controls.fullName.dirty),t.xp6(2),t.Q6J("disabled",n.formName.invalid||n.statusObj.loading),t.xp6(1),t.hij(" ",t.lcZ(13,10,"lang_auto_xin_vao_lop")," "),t.xp6(2),t.Q6J("ngIf",n.statusObj.loading)}}function B(o,a){1&o&&(t.TgZ(0,"p",48),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_khong_co_trong_danh_sach_tren_vui_long_lien_he_voi_giao_vien_cua_ban")," "))}function J(o,a){1&o&&(t.TgZ(0,"p",48),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_vui_long_doi_giao_vien_them_danh_sach_lop")," "))}function R(o,a){if(1&o&&(t.TgZ(0,"div",46),t.YNc(1,B,3,3,"p",47),t.YNc(2,J,3,3,"p",47),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.studentObjs&&n.studentObjs.length>0),t.xp6(1),t.Q6J("ngIf",n.studentObjs&&0==n.studentObjs.length)}}function F(o,a){if(1&o&&(t.TgZ(0,"div",53)(1,"p",52),t._uU(2),t.ALo(3,"mytranslate"),t.qZA()()),2&o){const n=t.oxw(2);t.xp6(2),t.AsE(" ",t.lcZ(3,2,"lang_auto_hoc_sinh"),": ",null==n.data||null==n.data.studentObj?null:n.data.studentObj.fullName," ")}}function q(o,a){if(1&o&&(t.TgZ(0,"div",49),t.YNc(1,F,4,4,"div",50),t.TgZ(2,"div",51)(3,"p",52),t._uU(4),t.ALo(5,"mytranslate"),t.qZA()()()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",null==n.data?null:n.data.studentObj),t.xp6(3),t.hij(" ",t.lcZ(5,2,"lang_auto_ban_da_xin_vao_lop_vui_long_doi_giao_vien_chap_thuan")," ")}}let l=(()=>{class o extends e.Q{selectedStudent(n){let s={studentObj:n,classId:n.classroomId,classObj:this.classObj,type:2};0===n.isVerified||1==this.classObj?.freeChooseName?(this.dataSelect=s,this.openConfirmSelectStudent(s)):this.selectChild.emit(s)}approvedToClass(){let s={nameEmit:this.getFormValue().fullName,classId:this.classObj?.id};this.approvedByName.emit(s)}backToSelectClass(){this.backToClass.emit({selectClassroom:!0,selectStudent:!1})}openConfirmSelectStudent(n){this.sAztDialogService.open(m,{data:{fullName:n?.studentObj?.fullName},restoreFocus:!1}).afterClosed().subscribe(_=>{_&&this.selectChild.emit(n)})}checkSortListStudent(){this.studentObjs=0==this.classObj?.sortType?this.sortService.sortFirstNameStudents(this.commonService.myClone(this.studentObjs)??[]):this.sortService.sortArrayByMultipleObjectKeyAsc(this.commonService.myClone(this.studentObjs)??[],"pos","id")}getFormValue(){return this.formName.getRawValue()}initData(){this.data?.classroomObjs&&this.data.classroomObjs.length>0?this.classroomObjs=this.data.classroomObjs:this.data?.studentObj?(this.classObj=this.data.classObj,this.studentObjs=this.data?.studentObjs,this.showAddStudentForm=!!this.data.classObj?.showAddStudent,this.selectedStudent(this.data.studentObj)):(this.classObj=this.data?.classObj,this.studentObjs=this.data?.studentObjs??[],this.showAddStudentForm=!!this.data?.classObj?.showAddStudent),this.onlyOneClass=this.data?.onlyOneClass??!1}ngOnChanges(){this.initData()}ngOnInit(){this.initData(),this.checkSortListStudent(),super.ngOnInit()}constructor(n,s){super(),this.sAztDialogService=n,this.sortService=s,this.selectChild=new t.vpe,this.approvedByName=new t.vpe,this.backToClass=new t.vpe,this.searchContent=new r.NI(""),this.studentObjs=[],this.classroomObjs=[],this.showAddStudentForm=!1,this.onlyOneClass=!1,this.formName=new r.cw({fullName:new r.NI("",{nonNullable:!0,validators:[r.kI.required,f._.noWhiteSpace]})})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(A.C),t.Y36(T.V))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-select-student-to-join-classroom"]],inputs:{data:"data",hasBackToLink:"hasBackToLink"},outputs:{selectChild:"selectChild",approvedByName:"approvedByName",backToClass:"backToClass"},features:[t.qOj,t.TTD],decls:9,vars:7,consts:[[1,"azt-select-child-component"],["class","grid grid-cols-12 gap-5",4,"ngIf"],["class","text-center mx-auto mb-4 mt-4",4,"ngIf"],["class","w-1/2 relative my-2 mx-auto",4,"ngIf"],["class","grid grid-cols-12 gap-5 mt-5 px-5",4,"ngIf"],["class","text-center mt-3 p-5",4,"ngIf","ngIfElse"],["NotSubmitName",""],["class","container",4,"ngIf"],[1,"grid","grid-cols-12","gap-5"],["class","col-span-12",4,"ngIf"],[1,"col-span-12"],["azt-track-service","select_student-9bXDNGABiq",1,"text-primary","flex","items-center",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","mr-2"],["points","15 18 9 12 15 6"],[1,"text-center","mx-auto","mb-4","mt-4"],[1,"font-medium"],[1,"w-1/2","relative","my-2","mx-auto"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","absolute","my-auto","inset-y-0","ml-3","left-0","z-10","text-slate-500"],["cx","11","cy","11","r","8"],["x1","21","y1","21","x2","16.65","y2","16.65"],["type","text",1,"form-control","w-full","sm:w-72","box","px-10",3,"formControl","placeholder"],[1,"grid","grid-cols-12","gap-5","mt-5","px-5"],["class","col-span-12 md:col-span-6 lg:col-span-4 zoom-in",4,"ngFor","ngForOf"],[1,"col-span-12","md:col-span-6","lg:col-span-4","zoom-in"],["azt-track-service","select_student-zueAGaGmnx",1,"flex","items-center","p-3","rounded-md","bg-slate-100","dark:bg-darkmode-300",2,"min-height","80px","background-color","#c1d9f159",3,"ngStyle","click"],[1,"w-12","h-10","image-fit","lg:mr-1"],[3,"linkAvatar","nameCreateAvatar","size"],[1,"ml-2","text-left","mt-0","w-full",2,"overflow","hidden"],[1,"azt-student-name"],["class","mt-1",4,"ngIf"],[1,"mt-1"],["class","text-xs text-slate-500 font-medium",4,"ngIf"],[1,"text-xs","text-slate-500","font-medium"],[1,"text-center","mt-3","p-5"],["class","font-medium",4,"ngIf"],[1,"mt-2","mx-auto",2,"max-width","618px",3,"formGroup"],[1,"form-group"],[1,"col-sm-6","ml-auto","mr-auto"],[1,"input-group"],["type","text","formControlName","fullName",1,"form-control",3,"placeholder"],["class","text-danger text-xs text-left mt-2 fade",4,"ngIf"],[1,"text-right","mt-3"],["azt-track-service","select_student-02XHK6E0BX",1,"btn","btn-primary",3,"disabled","click"],["class","w-4 h-4 inline-block ml-2",4,"ngIf"],[1,"text-danger","text-xs","text-left","mt-2","fade"],[1,"w-4","h-4","inline-block","ml-2"],[1,"text-center","mt-5"],["class","h5 text-info",4,"ngIf"],[1,"h5","text-info"],[1,"container"],["class","text-center",4,"ngIf"],[1,"text-center","alert","alert-info","mt-3"],[1,"h5","mb-0"],[1,"text-center"]],template:function(n,s){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,S,2,1,"div",1),t.YNc(2,O,4,3,"div",2),t.YNc(3,h,6,4,"div",3),t.YNc(4,M,3,6,"div",4),t.YNc(5,P,15,12,"div",5),t.YNc(6,R,3,2,"ng-template",null,6,t.W1O),t.qZA(),t.YNc(8,q,6,4,"div",7)),2&n){const _=t.MAs(7);t.xp6(1),t.Q6J("ngIf",s.hasBackToLink),t.xp6(1),t.Q6J("ngIf",s.studentObjs.length>0),t.xp6(1),t.Q6J("ngIf",s.studentObjs.length>0),t.xp6(1),t.Q6J("ngIf",s.studentObjs.length>0),t.xp6(1),t.Q6J("ngIf",1==s.showAddStudentForm)("ngIfElse",_),t.xp6(3),t.Q6J("ngIf",null==s.data?null:s.data.isPendingApproved)}},dependencies:[b.sg,b.O5,b.PC,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg,r.u,p.g,Z.M,c.n,d.JV,d.om,d.YK],encapsulation:2}),o})()},96286:(L,v,i)=>{i.d(v,{P:()=>b});var t=i(19347),r=i(72164),e=i(65879),f=i(21266),u=i(12993),x=i(79998),d=i(96814),m=i(71646),A=i(36727);function T(p,Z){1&p&&(e.TgZ(0,"span",14),e._UZ(1,"azt-loading-ui"),e.qZA())}let b=(()=>{class p extends r.e{sendRequest(){this.initStatusObj(),this.frontStudentService.apiFrontStudentRequestForReApproveStudentGet(this.data.classId??0,this.data?.studentObj?.id?this.data.studentObj.id:0).subscribe(c=>{1==c.success?(this.dialogRef.close("success"),this.successStatusObj()):(this.dialogRef.close("error"),this.errorStatusObj(c.message??""))})}btnCloseDialog(){this.dialogRef.close("close")}goToLogin(){this.redirectService.redirectToLoginBackLinkWithFromRegister(`${this.router.url}`)}ngOnChanges(){this.data?.studentObj&&(this.studentObj=this.data.studentObj)}ngOnInit(){this.data?.studentObj&&(this.studentObj=this.data.studentObj),super.ngOnInit()}get noteUserInfo(){let c=`${this.commonService.myTranslateInstant("lang_auto_hoc_sinh")} <b>${this.data.studentObj?.fullName}</b> ${this.commonService.myTranslateInstant("lang_auto_da_duoc_chon_boi_tai_khoan")} `;return c+=this.data.studentObj?.userEmail?`${this.commonService.myTranslateInstant("lang_auto_da_duoc_chon_boi_email")} <b>${this.data.studentObj?.userEmail}</b>`:this.data.studentObj?.last4DigitPhone?`${this.commonService.myTranslateInstant("lang_auto_voi_sdt_co_duoi")} - xxx xxx <b>${this.data.studentObj?.last4DigitPhone}</b>`:`${this.commonService.myTranslateInstant("lang_auto_voi_ten_zalo")} - <b>${this.data.studentObj?.zaloName}</b>`,c+=` ${this.commonService.myTranslateInstant("lang_auto_cua_ban_vui_long_bam_nut")} <b>${this.commonService.myTranslateInstant("lang_auto_bao_giao_vien")}</b> ${this.commonService.myTranslateInstant("lang_auto_de_giao_vien_kiem_tra_lai")}`,c}constructor(c,g,S,O,h){super(h,O),this.router=c,this.frontStudentService=g,this.redirectService=S,this.dialogRef=O,this.data=h}}return p.\u0275fac=function(c){return new(c||p)(e.Y36(f.F0),e.Y36(u.Dn),e.Y36(x.z),e.Y36(t.so,8),e.Y36(t.WI,8))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-send-request"]],features:[e.qOj,e.TTD],decls:21,vars:13,consts:[[1,"box"],[1,"border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"p-5"],[1,"text-md","font-medium","flex","items-center"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-6","h-6","mr-2","text-pending"],["points","7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"],["x1","12","y1","8","x2","12","y2","12"],["x1","12","y1","16","x2","12.01","y2","16"],[1,"mt-2"],[1,"text-md",3,"innerHTML"],[1,"p-3","flex","justify-end"],["azt-track-service","send-request-reapprove-deGU6Rcech",1,"btn","btn-secondary","w-24","mr-2",3,"click"],["azt-track-service","send-request-reapprove-YWK0crHupe",1,"btn","w-40","btn-primary",3,"click"],["class","w-4 h-4 inline-block mr-2",4,"ngIf"],[1,"w-4","h-4","inline-block","mr-2"]],template:function(c,g){1&c&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),e.O4$(),e.TgZ(4,"svg",4),e._UZ(5,"polygon",5)(6,"line",6)(7,"line",7),e.qZA(),e._uU(8),e.ALo(9,"mytranslate"),e.qZA(),e.kcU(),e.TgZ(10,"div",8),e._UZ(11,"p",9),e.ALo(12,"safeAdminHtmlContent"),e.qZA()()(),e.TgZ(13,"div",10)(14,"button",11),e.NdJ("click",function(){return g.btnCloseDialog()}),e._uU(15),e.ALo(16,"mytranslate"),e.qZA(),e.TgZ(17,"button",12),e.NdJ("click",function(){return g.sendRequest()}),e.YNc(18,T,2,0,"span",13),e._uU(19),e.ALo(20,"mytranslate"),e.qZA()()()),2&c&&(e.xp6(8),e.hij(" ",e.lcZ(9,5,"lang_auto_hoc_sinh_nay_da_duoc_chon"),"! "),e.xp6(3),e.Q6J("innerHTML",e.lcZ(12,7,g.noteUserInfo),e.oJD),e.xp6(4),e.hij(" ",e.lcZ(16,9,"lang_auto_dong")," "),e.xp6(3),e.Q6J("ngIf",g.statusObj.loading),e.xp6(1),e.hij(" ",e.lcZ(20,11,"lang_auto_bao_giao_vien")," "))},dependencies:[d.O5,m.n,A.JV,A.Tm],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px #00000094}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width: 1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),p})()}}]);