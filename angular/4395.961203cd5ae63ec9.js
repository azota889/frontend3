"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[4395],{14395:(D,l,n)=>{n.r(l),n.d(l,{PracticeFrontendModule:()=>z});var m=n(96814),d=n(56223),p=n(19347),c=n(21266),h=n(42753),s=n(37722),g=n(21494),y=n(25391),v=n(29942),f=n(84155),x=n(78217),Z=n(24090),P=n(82481),b=n(43048),u=n(47496),t=n(65879);let T=(()=>{class a extends u.Q{}return a.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(a)))(i||a)}}(),a.\u0275cmp=t.Xpm({type:a,selectors:[["app-practice-frontend"]],features:[t.qOj],decls:2,vars:0,consts:[["id","practice-frontend-layout"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet"),t.qZA())},dependencies:[c.lC],encapsulation:2}),a})();var C=n(52572),A=n(71518),j=n(70342),_=n(43389),I=n(18881),k=n(36727);function O(a,o){1&a&&t._UZ(0,"azt-loading-effect")}function L(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"h3",7),t._uU(3),t.ALo(4,"mytranslate"),t.qZA(),t.TgZ(5,"div",8)(6,"div",9)(7,"p",10)(8,"span",11),t._UZ(9,"lucide-icon",12),t.qZA(),t._uU(10),t.ALo(11,"mytranslate"),t.qZA(),t.TgZ(12,"p",13),t._uU(13),t.ALo(14,"mytranslate"),t.ALo(15,"mytranslate"),t.qZA()(),t.TgZ(16,"div",14)(17,"p",10)(18,"span",11),t._UZ(19,"lucide-icon",15),t.qZA(),t._uU(20),t.ALo(21,"mytranslate"),t.qZA(),t.TgZ(22,"p",13),t._uU(23),t.qZA()(),t.TgZ(24,"div",14)(25,"p",10)(26,"span",11),t._UZ(27,"lucide-icon",16),t.qZA(),t._uU(28),t.ALo(29,"mytranslate"),t.qZA(),t.TgZ(30,"p",13),t._uU(31),t.ALo(32,"mytranslate"),t.qZA()()(),t.TgZ(33,"div",17)(34,"button",18),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.redirectToPractice())}),t._uU(35),t.ALo(36,"mytranslate"),t.O4$(),t.TgZ(37,"svg",19),t._UZ(38,"polyline",20),t.qZA()()()(),t.kcU(),t.TgZ(39,"div",21)(40,"div",22),t._uU(41),t.ALo(42,"mytranslate"),t.qZA(),t.TgZ(43,"div",23),t._UZ(44,"input",24),t.TgZ(45,"button",25),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.showCopySuccess())}),t.TgZ(46,"span",26),t._UZ(47,"lucide-icon",27),t.qZA(),t._uU(48),t.ALo(49,"mytranslate"),t.qZA()()()()}if(2&a){const e=t.oxw(2);t.xp6(3),t.hij(" ",e.practiceObj&&e.practiceObj.name?e.practiceObj.name:t.lcZ(4,12,"lang_practice_name_default")," "),t.xp6(7),t.hij(" ",t.lcZ(11,14,"lang_testbank_tested_list_time_homework")," "),t.xp6(3),t.hij(" ",e.practiceObj&&e.practiceObj.minute&&e.practiceObj.minute>0?e.practiceObj.minute+" "+t.lcZ(14,16,"lang_auto_phut"):t.lcZ(15,18,"lang_auto_khong_gioi_han")," "),t.xp6(7),t.hij(" ",t.lcZ(21,20,"lang_auto_so_luong_cau_hoi")," "),t.xp6(3),t.hij(" ",null==e.practiceObj?null:e.practiceObj.totalQuestion," "),t.xp6(5),t.hij(" ",t.lcZ(29,22,"lang_auto_loai_de")," "),t.xp6(3),t.hij(" ",t.lcZ(32,24,"lang_core_practice_more")," "),t.xp6(4),t.hij(" ",t.lcZ(36,26,"lang_auto_bat_dau_lam_bai")," "),t.xp6(6),t.hij(" ",t.lcZ(42,28,"lang_core_chia_se_bai_luyen_nay_cho_ban_be_cung_luyen_tap")+": "," "),t.xp6(3),t.Q6J("value",e.linkPractice),t.xp6(1),t.Q6J("cdkCopyToClipboard",e.copyLinkToClipboard()),t.xp6(3),t.hij(" ",t.lcZ(49,30,"lang_auto_sao_chep")," ")}}function U(a,o){if(1&a&&(t.TgZ(0,"div",3),t.YNc(1,L,50,32,"div",4),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""==e.hasErrorMessage)}}const F=[{path:"",component:T,canActivate:[b.J],children:[{path:":hash_id",component:(()=>{class a extends u.Q{copyLinkToClipboard(){return this.linkPractice}showCopySuccess(){this.showSuccessSnack("lang_auto_sao_chep_thanh_cong")}getPracticeByHashId(){this.initStatusObj(),this.waitDestroy(this.practiceService.apiPracticeHashIdGet(this.hashId).subscribe(e=>{if(1==e.success){this.practiceObj=e.data;let i=this.commonService.getCurrentDomain();this.linkPractice=`${i}/on-luyen/${this.hashId}`,this.successStatusObj()}else this.errorStatusObj(e.message??"")}))}redirectToPractice(){this.commonService.myNavigationWithQueryString("/test/take-practice/"+this.practiceObj?.practiceId+"/0/"+this.hashId,"?backto="+encodeURIComponent(this.backToLink)+"&resultExamId="+encodeURIComponent(this.resultExamId))}ngOnInit(){this.waitDestroy((0,C.a)([this.activeRoute.params,this.activeRoute.queryParams]).subscribe(([])=>{let e=this.commonService.getMyParam(this.activeRoute,"hash_id")?.toString();this.hashId=e||"",this.resultExamId=Number(this.commonService.getMyQueryParam("resultExamId")??"0")??0,this.backToLink=this.commonService.getMyQueryParam("backto")??"/student/classroom/0",this.getPracticeByHashId()})),super.ngOnInit()}constructor(e,i){super(),this.activeRoute=e,this.practiceService=i,this.hashId="",this.hasErrorMessage="",this.backToLink="/student/classroom/0",this.linkPractice="",this.resultExamId=0}ngOnDestroy(){super.ngOnDestroy()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(c.gz),t.Y36(A.ik))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-practice-detail"]],features:[t.qOj],decls:4,vars:3,consts:[[3,"headerBackToLink"],[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"relative"],["class","intro-y mt-8",4,"ngIf"],[1,"intro-y","mt-8"],[1,"box","mx-auto","mt-5","p-5",2,"max-width","560px"],[1,"text-lg","font-medium","text-center"],[1,"azt-info-exam","mt-5"],[1,"flex","items-center"],[1,"text-md","flex","items-center"],[1,"w-4","h-4","mr-2"],["name","clock-4"],[1,"text-md","font-medium","ml-auto"],[1,"flex","items-center","mt-3"],["name","help-circle"],["name","clipboard-type"],[1,"mt-5"],["azt-track-service","practice-detail-m4fEGGL74",1,"btn","btn-pending","w-full","text-white",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","ml-2"],["points","9 18 15 12 9 6"],[1,"box","mt-5","mx-auto","p-5",2,"max-width","560px"],[1,"text-md","font-medium"],[1,"azt-copy","relative","mt-5","intro-x"],["type","text","readonly","",1,"form-control","py-3","px-4","border-transparent","bg-slate-100","pr-10","text-primary",2,"padding-right","120px","cursor","pointer",3,"value"],["azt-track-service","practice-detail-isTsISlyAY",1,"btn","btn-outline-primary","absolute","my-auto","inset-y-0","right-0",2,"border-top-left-radius","0","border-bottom-left-radius","0",3,"cdkCopyToClipboard","click"],[1,"w-4","h-4","inline-block","mr-2"],["name","copy"]],template:function(e,i){if(1&e&&(t.TgZ(0,"student-layout",0),t.YNc(1,O,1,0,"azt-loading-effect",1),t.YNc(2,U,2,1,"ng-template",null,2,t.W1O),t.qZA()),2&e){const r=t.MAs(3);t.Q6J("headerBackToLink",i.backToLink),t.xp6(1),t.Q6J("ngIf",i.statusObj.loading)("ngIfElse",r)}},dependencies:[m.O5,j.i3,_.l,I.L,s.Nh5,k.JV],encapsulation:2}),a})()}]}];let S=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(F),c.Bz,P.fQ]}),a})(),z=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz,m.ez,v.j,h.Z_,S,d.u5,d.UX,p.Is,f.Z,g.xC,y.QG,Z.W,x.d,s.qyJ.pick(s.ciZ)]}),a})()}}]);