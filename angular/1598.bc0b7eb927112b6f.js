"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[1598],{43048:(S,x,s)=>{s.d(x,{J:()=>b});var u=s(65879),f=s(78953),d=s(79998);let b=(()=>{class t{constructor(r,c){this.userService=r,this.redirectService=c}canActivate(r,c){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(c.url),!1)}canActivateChild(r,c){return this.canActivate(r,c)}canLoad(r){const c=`/${r.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(c),!1)}}return t.\u0275fac=function(r){return new(r||t)(u.LFG(f.U),u.LFG(d.z))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},37637:(S,x,s)=>{s.d(x,{O:()=>ot});var u=s(37734);class f{initStatusObj(o=""){this.statusObj={loading:!0,errorMessage:"",mustShowErrorBox:!1}}successStatusObj(o,e){this.statusObj={loading:!1,errorMessage:"",mustShowErrorBox:!1},e&&o&&this.commonService.snackSuccess(o)}errorStatusObj(o,e){this.statusObj={loading:!1,errorMessage:o,mustShowErrorBox:!1},e&&this.commonService.snackError(o)}forceShowErrorBox(o,e){this.statusObj={loading:!0,errorMessage:o,mustShowErrorBox:!0},e&&this.commonService.snackError(o)}stopStatusObj(){this.statusObj={loading:!1,errorMessage:"",mustShowErrorBox:!1}}constructor(o){this.commonService=o,this.statusObj={loading:!1,errorMessage:"",mustShowErrorBox:!1}}}var d=s(19347),b=s(72164),t=s(65879),p=s(48830),r=s(3309),c=s(96814),l=s(49538),h=s(43389),A=s(78497),m=s(36727);function j(n,o){if(1&n&&t._UZ(0,"azt-loading-effect",3),2&n){const e=t.oxw();t.Q6J("currentStatusObj",e.statusObj)}}function y(n,o){1&n&&(t.TgZ(0,"th",17)(1,"div",18)(2,"span",19),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"lang_auto_don_vi_kien_thuc")))}function E(n,o){if(1&n&&(t.TgZ(0,"td",20)(1,"div",18)(2,"span",21),t._uU(3),t.qZA()()()),2&n){const e=o.$implicit;t.xp6(3),t.hij(" ",e.title,"")}}function z(n,o){1&n&&(t.TgZ(0,"th",17)(1,"div",18)(2,"span",19),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"lang_admin_question_global_statistic_total_question")))}function w(n,o){if(1&n&&(t.TgZ(0,"td",20)(1,"div",22)(2,"span",23),t._uU(3),t.qZA()()()),2&n){const e=o.$implicit;t.xp6(3),t.hij(" ",e.numberOfQuestions,"")}}function T(n,o){1&n&&(t.TgZ(0,"th",17)(1,"div",18)(2,"span",19),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"lang_auto_ty_le")))}function Z(n,o){if(1&n&&(t.TgZ(0,"td",20)(1,"div",22)(2,"span",23),t._uU(3),t.ALo(4,"replace"),t.ALo(5,"number"),t.qZA()()()),2&n){const e=o.$implicit,i=t.oxw(3);t.xp6(3),t.hij(" ",t.Dn7(4,1,t.xi3(5,5,i.obj.numberOfQuestions?e.numberOfQuestions/i.obj.numberOfQuestions*100:0,"1.0-2"),",","."),"%")}}function L(n,o){1&n&&t._UZ(0,"tr",24)}function k(n,o){1&n&&t._UZ(0,"tr",25)}function I(n,o){if(1&n&&(t.TgZ(0,"div")(1,"div",7)(2,"b"),t._uU(3),t.ALo(4,"mytranslate"),t.ALo(5,"mytranslate"),t.qZA()(),t.TgZ(6,"azt-mat-dialog-content",8)(7,"table",9),t.ynx(8,10),t.YNc(9,y,5,3,"th",11),t.YNc(10,E,4,1,"td",12),t.BQk(),t.ynx(11,13),t.YNc(12,z,5,3,"th",11),t.YNc(13,w,4,1,"td",12),t.BQk(),t.ynx(14,14),t.YNc(15,T,5,3,"th",11),t.YNc(16,Z,6,8,"td",12),t.BQk(),t.YNc(17,L,1,0,"tr",15),t.YNc(18,k,1,0,"tr",16),t.qZA()()()),2&n){const e=t.oxw(2);t.xp6(3),t.Oqu(t.lcZ(4,6,"lang_testbank_frontend_exam_structure_total_question")+": "+e.obj.numberOfQuestions+" "+t.lcZ(5,8,"lang_testbank_frontend_exam_structure_number_question")),t.xp6(3),t.Q6J("minHeight","200px"),t.xp6(1),t.Q6J("dataSource",e.obj.structures),t.xp6(10),t.Q6J("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!1),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}function B(n,o){if(1&n){const e=t.EpF();t.YNc(0,I,19,10,"div",4),t.TgZ(1,"div",5)(2,"button",6),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.btnCloseDialog())}),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("ngIf",e.obj),t.xp6(3),t.hij(" ",t.lcZ(4,2,"lang_auto_dong")," ")}}let D=(()=>{class n extends b.e{btnCloseDialog(){this.dialogRef.close()}initData(){this.sAztAzotaTrackingService.sendCustomEvent("CLICK_EXAM_STRUCTURE_AT_SUGGESTION",[]),this.initStatusObj(),this.waitDestroy(this.analysisExamService.aiApiV1AnalysisExamGetExamStructureGet(this.data.examId).subscribe({next:e=>{this.obj=e,this.stopStatusObj()},error:e=>{this.errorStatusObj(e.error.message,!0)}}))}ngOnInit(){super.ngOnInit(),this.initData()}constructor(e,i,a,_){super(_,a),this.sAztAzotaTrackingService=e,this.analysisExamService=i,this.dialogRef=a,this.displayedColumns=["name","question","percent"]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.g),t.Y36(r.Qk),t.Y36(d.so,8),t.Y36(d.WI,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["coazt-exam-structure-dialog"]],features:[t.qOj],decls:4,vars:2,consts:[[1,"box","p-3","structure-exam"],[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[4,"ngIf"],[1,"flex","items-center","justify-end","pt-2","w-full","bg-white"],[1,"btn","btn-secondary","w-32",3,"click"],[2,"padding","0 10px"],[3,"minHeight"],["mat-table","",1,"mat-elevation-z8","mt-2",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","question"],["matColumnDef","percent"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],[1,"header-cell","mx-auto","w-100"],[1,"center-span","structure-bg-primary"],["mat-cell",""],[1,"structure-bg-primary"],[1,"table-cell","mx-auto","w-100"],[1,"center-span","structure-bg-info"],["mat-header-row",""],["mat-row",""]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,j,1,1,"azt-loading-effect",1),t.YNc(2,B,5,4,"ng-template",null,2,t.W1O),t.qZA()),2&e){const a=t.MAs(3);t.xp6(1),t.Q6J("ngIf",i.statusObj.loading)("ngIfElse",a)}},dependencies:[c.O5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,h.l,A.R,c.JJ,m.JV,m.qY],encapsulation:2}),n})();var C=s(8140),M=s(2783);function Q(n,o){if(1&n&&t._UZ(0,"azt-loading-effect",2),2&n){const e=t.oxw();t.Q6J("currentStatusObj",e.statusObj)}}const J=function(n,o){return{"btn-info text-white":n,"btn-secondary-soft":o}};function N(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"button",5),t.NdJ("click",function(){const _=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.selectSubject(_))}),t.TgZ(2,"span",6),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()()}if(2&n){const e=o.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.WLB(4,J,i.currentSelectSubjectKey==e.subjectKey,i.currentSelectSubjectKey!=e.subjectKey)),t.xp6(2),t.Oqu(t.lcZ(4,2,e.subjectKey))}}function U(n,o){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,N,5,7,"div",4),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.schoolSubjectObjs)}}let Y=(()=>{class n extends u.Q{constructor(){super(...arguments),this.changeLevelAndSubjectEvent=new t.vpe,this.frontExamService=(0,t.f3M)(C.Tg),this.filterKeys=["azt_lang_core_khoi_khac","azt_auto_lang_khac"],this.schoolSubjectObjs=[],this.currentSelectSubjectKey="lang_auto_tat_ca"}initData(){this.initStatusObj(),this.waitDestroy(this.frontExamService.apiFrontExamListSuggestSubjectsGet().subscribe(e=>{1==e.success?(this.schoolSubjectObjs.push({subjectKey:"lang_auto_tat_ca"}),this.schoolSubjectObjs=this.schoolSubjectObjs.concat(...e.data??[]),setTimeout(()=>{this.stopStatusObj()},0)):this.errorStatusObj(e.message??"")}))}selectSubject(e){this.currentSelectSubjectKey=e.subjectKey,this.changeLevelAndSubjectEvent.emit(e)}ngOnInit(){super.ngOnInit(),this.initData()}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["azt-only-subject-box"]],outputs:{changeLevelAndSubjectEvent:"changeLevelAndSubjectEvent"},features:[t.qOj],decls:3,vars:2,consts:[[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[1,"flex","flex-wrap","w-full","mb-3",2,"gap","10px"],[4,"ngFor","ngForOf"],[1,"items-center","px-3","py-2","rounded-md","w-full","border","border-slate-300",3,"ngClass","click"],[2,"vertical-align","middle"]],template:function(e,i){if(1&e&&(t.YNc(0,Q,1,1,"azt-loading-effect",0),t.YNc(1,U,2,1,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",i.statusObj.loading)("ngIfElse",a)}},dependencies:[c.mk,c.sg,c.O5,h.l,m.JV],encapsulation:2}),n})();function P(n,o){if(1&n&&t._UZ(0,"azt-loading-effect",2),2&n){const e=t.oxw();t.Q6J("currentStatusObj",e.statusObj)}}function F(n,o){if(1&n&&t._UZ(0,"azt-loading-effect",2),2&n){const e=t.oxw(3);t.Q6J("currentStatusObj",e.loadingExamStatusService.statusObj)}}const v=function(n,o){return{"md:col-span-2":n,"order-last":o}};function q(n,o){if(1&n&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n){const e=t.oxw(6);t.Q6J("ngClass",t.WLB(4,v,!e.showLikeMobile,e.showLikeMobile||e.isMobileDevice)),t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_testbank_frontend_practice_is_free")," ")}}function K(n,o){if(1&n&&(t.TgZ(0,"div",25),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n){const e=t.oxw(6);t.Q6J("ngClass",t.WLB(4,v,!e.showLikeMobile,e.showLikeMobile||e.isMobileDevice)),t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_testbank_frontend_practice_is_not_free")," ")}}function G(n,o){if(1&n&&(t.TgZ(0,"div",26),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit,i=t.oxw(5);t.Q6J("ngClass",t.WLB(3,v,!i.showLikeMobile,i.showLikeMobile||i.isMobileDevice)),t.xp6(1),t.AsE(" ",e.levelName," - ",e.subjectName," ")}}const H=function(n){return{"md:col-span-8":n}},R=function(n){return{"order-2":n}};function W(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",12),t.NdJ("click",function(){const a=t.CHM(e),_=a.$implicit,g=a.index,O=t.oxw(5);return t.KtG(O.clickToExam(_,g+1))}),t.TgZ(2,"div",13),t._UZ(3,"img",14),t.ALo(4,"convertCdnLinkOfGitHub"),t.qZA(),t.TgZ(5,"div",15)(6,"div",4),t._uU(7),t.qZA(),t.TgZ(8,"div",16),t._uU(9),t.ALo(10,"mytranslate"),t.qZA(),t.TgZ(11,"div",17)(12,"div",18),t._uU(13),t.ALo(14,"mytranslate"),t.qZA(),t.YNc(15,q,3,7,"div",19),t.YNc(16,K,3,7,"div",20),t.YNc(17,G,2,6,"div",21),t.TgZ(18,"div",22)(19,"span",23),t.NdJ("click",function(a){const g=t.CHM(e).$implicit;return t.oxw(5).viewExamStructureDialog(g),a.stopPropagation(),t.KtG(a.preventDefault())}),t._uU(20),t.ALo(21,"mytranslate"),t.qZA()()()()()()}if(2&n){const e=o.$implicit,i=t.oxw(5);t.xp6(3),t.s9C("src",t.lcZ(4,12,"images/practice-icon2.jpg"),t.LSH),t.xp6(4),t.hij(" ",e.examName," "),t.xp6(2),t.AsE(" ",t.lcZ(10,14,"lang_core_practice_count")+": "," ",e.totalTested," "),t.xp6(3),t.Q6J("ngClass",t.VKq(20,H,!i.showLikeMobile)),t.xp6(1),t.AsE(" ",t.lcZ(14,16,"lang_auto_so_luong_cau_hoi")+": "," ",e.totalQuestion," "),t.xp6(2),t.Q6J("ngIf",e.isFree),t.xp6(1),t.Q6J("ngIf",!e.isFree),t.xp6(1),t.Q6J("ngIf",e.levelName&&e.subjectName),t.xp6(1),t.Q6J("ngClass",t.VKq(22,R,i.showLikeMobile||i.isMobileDevice)),t.xp6(2),t.hij(" ",t.lcZ(21,18,"lang_testbank_frontend_exam_structure_view_structure")," ")}}function $(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",27),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(5);return t.KtG(a.loadMore())}),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()}2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"lang_testbank_frontend_load_more_practice")))}function V(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,W,22,24,"div",10),t.YNc(2,$,3,3,"div",11),t.qZA()),2&n){const e=t.oxw(4);t.xp6(1),t.Q6J("ngForOf",e.objs),t.xp6(1),t.Q6J("ngIf",e.enableLoadMore)}}function X(n,o){1&n&&(t.TgZ(0,"div",28),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_testbank_frontend_not_found_any_suggestion_in_filter")," "))}function tt(n,o){if(1&n&&(t.YNc(0,V,3,2,"div",8),t.YNc(1,X,3,3,"ng-template",null,9,t.W1O)),2&n){const e=t.MAs(2),i=t.oxw(3);t.Q6J("ngIf",i.objs.length>0)("ngIfElse",e)}}function et(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4),t._uU(2),t.ALo(3,"mytranslate"),t._UZ(4,"img",5),t.ALo(5,"convertCdnLinkOfGitHub"),t.qZA(),t.TgZ(6,"azt-only-subject-box",6),t.NdJ("changeLevelAndSubjectEvent",function(a){t.CHM(e);const _=t.oxw(2);return t.KtG(_.changeLevelAndSubjectEvent(a))}),t.qZA(),t.YNc(7,F,1,1,"azt-loading-effect",0),t.YNc(8,tt,3,2,"ng-template",null,7,t.W1O),t.BQk()}if(2&n){const e=t.MAs(9),i=t.oxw(2);t.xp6(2),t.hij(" ",t.lcZ(3,4,"lang_student_dashboard_exam_collection")," "),t.xp6(2),t.s9C("src",t.lcZ(5,6,"images/practice-new-icon.png"),t.LSH),t.xp6(3),t.Q6J("ngIf",i.loadingExamStatusService.statusObj.loading)("ngIfElse",e)}}function nt(n,o){if(1&n&&t.YNc(0,et,10,8,"ng-container",3),2&n){const e=t.oxw();t.Q6J("ngIf",e.hasSuggestionData)}}let ot=(()=>{class n extends u.Q{changeLevelAndSubjectEvent(e){this.loadByFilter(e)}clickToExam(e,i){this.sAztAzotaTrackingService.sendCustomEvent("CLICK|"+this.webPage+"|"+e.examId+"|"+i,[]),this.commonService.myNavigation("/de-thi/"+e.examHashId)}loadMore(){this.objs=this.allObjs.slice(0,this.objs.length+this.itemInLoadMoreAction),this.enableLoadMore=this.objs<this.allObjs}viewExamStructureDialog(e){this.sAztDialogService.open(D,{width:this.isMobileDevice?"90vw":"60vw",data:{examId:e.examId},restoreFocus:!1})}getData(){this.initStatusObj(),this.waitDestroy(this.frontExamService.apiFrontExamSuggestExamsPost({examResultId:this.resultId,size:50}).subscribe(i=>{if(!i.success)return this.stopStatusObj();this.allObjs=i.data??[],this.hasSuggestionData=!!this.allObjs.length,this.loadMore(),this.stopStatusObj(),this.sAztAzotaTrackingService.sendCustomEvent("LOADED|"+this.webPage,[])}))}loadByFilter(e){this.loadingExamStatusService.initStatusObj(),this.waitDestroy(this.frontExamService.apiFrontExamSuggestExamsPost({examResultId:this.resultId,size:50,subjectKey:e.subjectKey}).subscribe(a=>{if(!a.success)return this.loadingExamStatusService.stopStatusObj();this.objs=[],this.allObjs=a.data??[],this.loadMore(),this.loadingExamStatusService.stopStatusObj()}))}ngOnInit(){super.ngOnInit(),this.isBusinessDomain||this.getData()}constructor(e,i,a){super(),this.frontExamService=e,this.sAztAzotaTrackingService=i,this.sAztDialogService=a,this.showLikeMobile=!1,this.loadingExamStatusService=new f(this.commonService),this.hasSuggestionData=!1,this.objs=[],this.enableLoadMore=!1,this.allObjs=[],this.itemInLoadMoreAction=3}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.Tg),t.Y36(p.g),t.Y36(M.C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["azt-practice-box"]],inputs:{resultId:"resultId",webPage:"webPage",showLikeMobile:"showLikeMobile"},features:[t.qOj],decls:3,vars:2,consts:[[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[4,"ngIf"],[1,"font-medium"],[2,"height","24px",3,"src"],[1,"mt-2","block",3,"changeLevelAndSubjectEvent"],["doneLoadingExam",""],[4,"ngIf","ngIfElse"],["emptyDataInFilter",""],[4,"ngFor","ngForOf"],["class","pt-3 clickable text-center link__color",3,"click",4,"ngIf"],[1,"box","px-4","py-4","mt-3","flex","clickable","hover:bg-gray-soft",3,"click"],[1,"w-16","h-20","flex-none","image-fit","border","border-slate-200","dark:border-darkmode-400","rounded-md","overflow-hidden"],[3,"src"],[1,"ml-4","w-full"],[1,"text-slate-500","text-xs","mt-1"],[1,"grid","grid-cols-12","gap-2"],[1,"col-span-12","text-slate-500","text-xs","mt-1","w-full","order-first",3,"ngClass"],["class","col-span-5 text-center py-1 px-2 rounded-full text-xs bg-success text-white font-medium mr-1","style","align-content: center",3,"ngClass",4,"ngIf"],["class","col-span-4 text-center py-1 px-2 rounded-full text-xs bg-pending text-white font-medium mr-1","style","align-content: center",3,"ngClass",4,"ngIf"],["class","col-span-8 text-center py-1 px-2 rounded-full text-xs bg-primary text-white font-medium","style","align-content: center",3,"ngClass",4,"ngIf"],[1,"col-span-12",3,"ngClass"],[1,"clickable","link__color","link__hover","font-medium",3,"click"],[1,"col-span-5","text-center","py-1","px-2","rounded-full","text-xs","bg-success","text-white","font-medium","mr-1",2,"align-content","center",3,"ngClass"],[1,"col-span-4","text-center","py-1","px-2","rounded-full","text-xs","bg-pending","text-white","font-medium","mr-1",2,"align-content","center",3,"ngClass"],[1,"col-span-8","text-center","py-1","px-2","rounded-full","text-xs","bg-primary","text-white","font-medium",2,"align-content","center",3,"ngClass"],[1,"pt-3","clickable","text-center","link__color",3,"click"],[1,"box","p-2","mt-3"]],template:function(e,i){if(1&e&&(t.YNc(0,P,1,1,"azt-loading-effect",0),t.YNc(1,nt,1,1,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",i.statusObj.loading)("ngIfElse",a)}},dependencies:[c.mk,c.sg,c.O5,h.l,Y,m.JV,m.Bo],encapsulation:2}),n})()}}]);