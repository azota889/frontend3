"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[5511],{43048:(S,h,s)=>{s.d(h,{J:()=>f});var m=s(65879),b=s(78953),d=s(79998);let f=(()=>{class t{constructor(_,l){this.userService=_,this.redirectService=l}canActivate(_,l){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(l.url),!1)}canActivateChild(_,l){return this.canActivate(_,l)}canLoad(_){const l=`/${_.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(l),!1)}}return t.\u0275fac=function(_){return new(_||t)(m.LFG(b.U),m.LFG(d.z))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},42318:(S,h,s)=>{s.d(h,{O:()=>Et});var m=s(37734);class b{initStatusObj(a=""){this.statusObj={loading:!0,errorMessage:"",mustShowErrorBox:!1}}successStatusObj(a,n){this.statusObj={loading:!1,errorMessage:"",mustShowErrorBox:!1},n&&a&&this.commonService.snackSuccess(a)}errorStatusObj(a,n){this.statusObj={loading:!1,errorMessage:a,mustShowErrorBox:!1},n&&this.commonService.snackError(a)}forceShowErrorBox(a,n){this.statusObj={loading:!0,errorMessage:a,mustShowErrorBox:!0},n&&this.commonService.snackError(a)}stopStatusObj(){this.statusObj={loading:!1,errorMessage:"",mustShowErrorBox:!1}}constructor(a){this.commonService=a,this.statusObj={loading:!1,errorMessage:"",mustShowErrorBox:!1}}}var d=s(19347),f=s(72164),t=s(65879),g=s(48830),_=s(9e4),l=s(96814),j=s(95195),c=s(49538),x=s(43389),A=s(78497),p=s(36727);function Z(e,a){if(1&e&&t._UZ(0,"azt-loading-effect",3),2&e){const n=t.oxw();t.Q6J("currentStatusObj",n.statusObj)}}function T(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_core_ten_so_luong")," "))}function w(e,a){if(1&e&&(t.TgZ(0,"td",28)(1,"span"),t._uU(2),t.ALo(3,"mytranslate"),t.qZA()()),2&e){const n=a.$implicit;t.Q6J("hidden","questions"==n.key),t.xp6(2),t.Oqu(t.lcZ(3,2,n.key))}}function z(e,a){1&e&&(t.TgZ(0,"th",27)(1,"span",29),t._uU(2),t.ALo(3,"mytranslate"),t.qZA()()),2&e&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"lang_testbank_statistical_numbers")," "))}function D(e,a){if(1&e&&(t.TgZ(0,"td",28)(1,"span",29),t._uU(2),t.qZA()()),2&e){const n=a.$implicit;t.Q6J("hidden","questions"==n.key),t.xp6(2),t.Oqu(n.value)}}function E(e,a){1&e&&t._UZ(0,"tr",30)}function k(e,a){1&e&&t._UZ(0,"tr",31)}function L(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1," ID "),t.qZA())}function I(e,a){if(1&e&&(t.TgZ(0,"td",32)(1,"span",29),t._uU(2),t.qZA()()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.questionId," ")}}function B(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_chon")," A "))}function q(e,a){if(1&e&&(t.TgZ(0,"td",33)(1,"span",29),t._uU(2),t.qZA()()),2&e){const n=a.$implicit,i=t.oxw(3);t.xp6(2),t.hij(" ",i.calculatePercentage(n.numberOfA,n.total)," ")}}function N(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_chon")," B "))}function Q(e,a){if(1&e&&(t.TgZ(0,"td",33)(1,"span",29),t._uU(2),t.qZA()()),2&e){const n=a.$implicit,i=t.oxw(3);t.xp6(2),t.hij(" ",i.calculatePercentage(n.numberOfB,n.total)," ")}}function Y(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_chon")," C "))}function U(e,a){if(1&e&&(t.TgZ(0,"td",33)(1,"span",29),t._uU(2),t.qZA()()),2&e){const n=a.$implicit,i=t.oxw(3);t.xp6(2),t.hij(" ",i.calculatePercentage(n.numberOfC,n.total)," ")}}function M(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_chon")," D "))}function J(e,a){if(1&e&&(t.TgZ(0,"td",33)(1,"span",29),t._uU(2),t.qZA()()),2&e){const n=a.$implicit,i=t.oxw(3);t.xp6(2),t.hij(" ",i.calculatePercentage(n.numberOfD,n.total)," ")}}function P(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_bo_qua")," "))}function F(e,a){if(1&e&&(t.TgZ(0,"td",33)(1,"span",29),t._uU(2),t.qZA()()),2&e){const n=a.$implicit,i=t.oxw(3);t.xp6(2),t.hij(" ",i.calculatePercentage(n.numberOfSkip,n.total)," ")}}function R(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_auto_do_kho")," "))}function K(e,a){if(1&e&&(t.TgZ(0,"td",33)(1,"span",29),t._uU(2),t.qZA()()),2&e){const n=a.$implicit,i=t.oxw(3);t.xp6(2),t.hij(" ",i.calculatePercentage(n.difficultyRate,1)," ")}}function H(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_core_kha_nang_phan_loai")," "))}function G(e,a){if(1&e&&(t.TgZ(0,"td",33)(1,"span",29),t._uU(2),t.qZA()()),2&e){const n=a.$implicit,i=t.oxw(3);t.xp6(2),t.hij(" ",i.calculatePercentage(n.discriminatoryPower,1)," ")}}function $(e,a){1&e&&t._UZ(0,"tr",30)}function W(e,a){1&e&&t._UZ(0,"tr",31)}function V(e,a){if(1&e&&(t.TgZ(0,"div")(1,"azt-mat-dialog-content",7)(2,"mat-card")(3,"table",8),t.ynx(4,9),t.YNc(5,T,3,3,"th",10),t.YNc(6,w,4,4,"td",11),t.BQk(),t.ynx(7,12),t.YNc(8,z,4,3,"th",10),t.YNc(9,D,3,2,"td",11),t.BQk(),t.YNc(10,E,1,0,"tr",13),t.YNc(11,k,1,0,"tr",14),t.qZA()(),t.TgZ(12,"div",15)(13,"mat-card",16)(14,"table",8),t.ynx(15,17),t.YNc(16,L,2,0,"th",10),t.YNc(17,I,3,1,"td",18),t.BQk(),t.ynx(18,19),t.YNc(19,B,3,3,"th",10),t.YNc(20,q,3,1,"td",20),t.BQk(),t.ynx(21,21),t.YNc(22,N,3,3,"th",10),t.YNc(23,Q,3,1,"td",20),t.BQk(),t.ynx(24,22),t.YNc(25,Y,3,3,"th",10),t.YNc(26,U,3,1,"td",20),t.BQk(),t.ynx(27,23),t.YNc(28,M,3,3,"th",10),t.YNc(29,J,3,1,"td",20),t.BQk(),t.ynx(30,24),t.YNc(31,P,3,3,"th",10),t.YNc(32,F,3,1,"td",20),t.BQk(),t.ynx(33,25),t.YNc(34,R,3,3,"th",10),t.YNc(35,K,3,1,"td",20),t.BQk(),t.ynx(36,26),t.YNc(37,H,3,3,"th",10),t.YNc(38,G,3,1,"td",20),t.BQk(),t.YNc(39,$,1,0,"tr",13),t.YNc(40,W,1,0,"tr",14),t.qZA()()()()()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("minHeight","200px"),t.xp6(2),t.Q6J("dataSource",n.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",n.displayedColumnsOverview),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumnsOverview),t.xp6(3),t.Q6J("dataSource",n.obj.questions),t.xp6(25),t.Q6J("matHeaderRowDef",n.displayedColumnsQuestions),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumnsQuestions)}}function X(e,a){if(1&e){const n=t.EpF();t.YNc(0,V,41,7,"div",4),t.TgZ(1,"div",5)(2,"button",6),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.btnCloseDialog())}),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()}if(2&e){const n=t.oxw();t.Q6J("ngIf",n.obj),t.xp6(3),t.hij(" ",t.lcZ(4,2,"lang_auto_dong")," ")}}let tt=(()=>{class e extends f.e{btnCloseDialog(){this.dialogRef.close()}initData(){this.sAztAzotaTrackingService.sendCustomEvent("CLICK_EXAM_STRUCTURE_AT_SUGGESTION",[]),this.initStatusObj(),this.waitDestroy(this.analysisExamService.aiApiV1AnalysisExamMeasureQuestionsOfExamGet(this.data.examId).subscribe({next:n=>{this.obj=n,this.dataSource=Object.entries(this.obj).map(([i,o])=>({key:i,value:o})),this.stopStatusObj()},error:n=>{this.errorStatusObj(n.error.message,!0)}}))}calculatePercentage(n,i){return(n/i*100).toFixed(2)+"%"}ngOnInit(){super.ngOnInit(),this.initData()}constructor(n,i,o,r){super(r,o),this.sAztAzotaTrackingService=n,this.analysisExamService=i,this.dialogRef=o,this.dataSource=[],this.displayedColumnsOverview=["nameTotal","total"],this.displayedColumnsQuestions=["questionId","numberOfA","numberOfB","numberOfC","numberOfD","numberOfSkip","difficultyRate","discriminatoryPower"]}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.g),t.Y36(_.Qk),t.Y36(d.so,8),t.Y36(d.WI,8))},e.\u0275cmp=t.Xpm({type:e,selectors:[["coazt-detailed-analysis-dialog"]],features:[t.qOj],decls:4,vars:2,consts:[[1,"box","p-3","skill-statistical"],[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[4,"ngIf"],[1,"flex","items-center","justify-end","pt-2","mt-2","w-full","bg-white"],[1,"btn","btn-secondary","w-32",3,"click"],[3,"minHeight"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","nameTotal"],["class","whitespace-nowrap","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"hidden",4,"matCellDef"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"scroll-table"],[1,"mt-3"],["matColumnDef","questionId"],["class","whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","numberOfA"],["mat-cell","",4,"matCellDef"],["matColumnDef","numberOfB"],["matColumnDef","numberOfC"],["matColumnDef","numberOfD"],["matColumnDef","numberOfSkip"],["matColumnDef","difficultyRate"],["matColumnDef","discriminatoryPower"],["mat-header-cell","",1,"whitespace-nowrap"],["mat-cell","",3,"hidden"],[1,"center-span"],["mat-header-row",""],["mat-row",""],["mat-cell","",1,"whitespace-nowrap"],["mat-cell",""]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,Z,1,1,"azt-loading-effect",1),t.YNc(2,X,5,4,"ng-template",null,2,t.W1O),t.qZA()),2&n){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",i.statusObj.loading)("ngIfElse",o)}},dependencies:[l.O5,j.a8,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,x.l,A.R,p.JV],styles:[".scroll-table[_ngcontent-%COMP%]{overflow-x:auto;white-space:nowrap}.scroll-table[_ngcontent-%COMP%]::-webkit-scrollbar{height:5px}.scroll-table[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}.scroll-table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#d0d0d0}.scroll-table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#c2c2c2}.mdc-data-table__header-row[_ngcontent-%COMP%]{height:35px!important}.skill-statistical[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]{font-size:13px!important}"]}),e})();var v=s(2783);function et(e,a){if(1&e&&t._UZ(0,"azt-loading-effect",3),2&e){const n=t.oxw();t.Q6J("currentStatusObj",n.statusObj)}}function nt(e,a){1&e&&(t.TgZ(0,"th",18)(1,"div",19)(2,"span",20),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"lang_auto_don_vi_kien_thuc")))}function at(e,a){if(1&e&&(t.TgZ(0,"td",21)(1,"div",19)(2,"span",22),t._uU(3),t.qZA()()()),2&e){const n=a.$implicit;t.xp6(3),t.hij(" ",n.title,"")}}function it(e,a){1&e&&(t.TgZ(0,"th",18)(1,"div",19)(2,"span",20),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"lang_admin_question_global_statistic_total_question")))}function ot(e,a){if(1&e&&(t.TgZ(0,"td",21)(1,"div",23)(2,"span",24),t._uU(3),t.qZA()()()),2&e){const n=a.$implicit;t.xp6(3),t.hij(" ",n.numberOfQuestions,"")}}function st(e,a){1&e&&(t.TgZ(0,"th",18)(1,"div",19)(2,"span",20),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"lang_auto_ty_le")))}function ct(e,a){if(1&e&&(t.TgZ(0,"td",21)(1,"div",23)(2,"span",24),t._uU(3),t.ALo(4,"replace"),t.ALo(5,"number"),t.qZA()()()),2&e){const n=a.$implicit,i=t.oxw(3);t.xp6(3),t.hij(" ",t.Dn7(4,1,t.xi3(5,5,i.obj.numberOfQuestions?n.numberOfQuestions/i.obj.numberOfQuestions*100:0,"1.0-2"),",","."),"%")}}function lt(e,a){1&e&&t._UZ(0,"tr",25)}function _t(e,a){1&e&&t._UZ(0,"tr",26)}function rt(e,a){if(1&e&&(t.TgZ(0,"div")(1,"div",8)(2,"b"),t._uU(3),t.ALo(4,"mytranslate"),t.ALo(5,"mytranslate"),t.qZA()(),t.TgZ(6,"azt-mat-dialog-content",9)(7,"table",10),t.ynx(8,11),t.YNc(9,nt,5,3,"th",12),t.YNc(10,at,4,1,"td",13),t.BQk(),t.ynx(11,14),t.YNc(12,it,5,3,"th",12),t.YNc(13,ot,4,1,"td",13),t.BQk(),t.ynx(14,15),t.YNc(15,st,5,3,"th",12),t.YNc(16,ct,6,8,"td",13),t.BQk(),t.YNc(17,lt,1,0,"tr",16),t.YNc(18,_t,1,0,"tr",17),t.qZA()()()),2&e){const n=t.oxw(2);t.xp6(3),t.Oqu(t.lcZ(4,6,"lang_testbank_frontend_exam_structure_total_question")+": "+n.obj.numberOfQuestions+" "+t.lcZ(5,8,"lang_testbank_frontend_exam_structure_number_question")),t.xp6(3),t.Q6J("minHeight","200px"),t.xp6(1),t.Q6J("dataSource",n.obj.structures),t.xp6(10),t.Q6J("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!1),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns)}}function ut(e,a){if(1&e){const n=t.EpF();t.YNc(0,rt,19,10,"div",4),t.TgZ(1,"div",5)(2,"button",6),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.viewDetailedAnalysisDialog())}),t._uU(3),t.ALo(4,"mytranslate"),t.qZA(),t.TgZ(5,"button",7),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.btnCloseDialog())}),t._uU(6),t.ALo(7,"mytranslate"),t.qZA()()}if(2&e){const n=t.oxw();t.Q6J("ngIf",n.obj),t.xp6(3),t.hij(" ",t.lcZ(4,3,"lang_core_phan_tich_chi_tiet")," "),t.xp6(3),t.hij(" ",t.lcZ(7,5,"lang_auto_dong")," ")}}let mt=(()=>{class e extends f.e{btnCloseDialog(){this.dialogRef.close()}initData(){this.sAztAzotaTrackingService.sendCustomEvent("CLICK_EXAM_STRUCTURE_AT_SUGGESTION",[]),this.initStatusObj(),this.waitDestroy(this.analysisExamService.aiApiV1AnalysisExamGetExamStructureGet(this.data.examId).subscribe({next:n=>{this.obj=n,this.stopStatusObj()},error:n=>{this.errorStatusObj(n.error.message,!0)}}))}viewDetailedAnalysisDialog(){this.sAztDialogService.open(tt,{width:"90vw",data:{examId:this.data.examId},restoreFocus:!1})}ngOnInit(){super.ngOnInit(),this.initData()}constructor(n,i,o,r,u){super(u,r),this.sAztAzotaTrackingService=n,this.analysisExamService=i,this.sAztDialogService=o,this.dialogRef=r,this.displayedColumns=["name","question","percent"]}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.g),t.Y36(_.Qk),t.Y36(v.C),t.Y36(d.so,8),t.Y36(d.WI,8))},e.\u0275cmp=t.Xpm({type:e,selectors:[["coazt-exam-structure-dialog"]],features:[t.qOj],decls:4,vars:2,consts:[[1,"box","p-3","structure-exam"],[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[4,"ngIf"],[1,"flex","items-center","justify-between","pt-2","w-full","bg-white"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary","w-32",3,"click"],[2,"padding","0 10px"],[3,"minHeight"],["mat-table","",1,"mat-elevation-z8","mt-2",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","question"],["matColumnDef","percent"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],[1,"header-cell","mx-auto","w-100"],[1,"center-span","structure-bg-primary"],["mat-cell",""],[1,"structure-bg-primary"],[1,"table-cell","mx-auto","w-100"],[1,"center-span","structure-bg-info"],["mat-header-row",""],["mat-row",""]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,et,1,1,"azt-loading-effect",1),t.YNc(2,ut,8,7,"ng-template",null,2,t.W1O),t.qZA()),2&n){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",i.statusObj.loading)("ngIfElse",o)}},dependencies:[l.O5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,x.l,A.R,l.JJ,p.JV,p.qY],encapsulation:2}),e})();var O=s(8140);function dt(e,a){if(1&e&&t._UZ(0,"azt-loading-effect",2),2&e){const n=t.oxw();t.Q6J("currentStatusObj",n.statusObj)}}const pt=function(e,a){return{"btn-info text-white":e,"btn-secondary-soft":a}};function gt(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"button",5),t.NdJ("click",function(){const r=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.selectSubject(r))}),t.TgZ(2,"span",6),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()()}if(2&e){const n=a.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.WLB(4,pt,i.currentSelectSubjectKey==n.subjectKey,i.currentSelectSubjectKey!=n.subjectKey)),t.xp6(2),t.Oqu(t.lcZ(4,2,n.subjectKey))}}function ft(e,a){if(1&e&&(t.TgZ(0,"div",3),t.YNc(1,gt,5,7,"div",4),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.schoolSubjectObjs)}}let xt=(()=>{class e extends m.Q{constructor(){super(...arguments),this.changeLevelAndSubjectEvent=new t.vpe,this.frontExamService=(0,t.f3M)(O.Tg),this.filterKeys=["azt_lang_core_khoi_khac","azt_auto_lang_khac"],this.schoolSubjectObjs=[],this.currentSelectSubjectKey="lang_auto_tat_ca"}initData(){this.initStatusObj(),this.waitDestroy(this.frontExamService.apiFrontExamListSuggestSubjectsGet().subscribe(n=>{1==n.success?(this.schoolSubjectObjs.push({subjectKey:"lang_auto_tat_ca"}),this.schoolSubjectObjs=this.schoolSubjectObjs.concat(...n.data??[]),setTimeout(()=>{this.stopStatusObj()},0)):this.errorStatusObj(n.message??"")}))}selectSubject(n){this.currentSelectSubjectKey=n.subjectKey,this.changeLevelAndSubjectEvent.emit(n)}ngOnInit(){super.ngOnInit(),this.initData()}}return e.\u0275fac=function(){let a;return function(i){return(a||(a=t.n5z(e)))(i||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["azt-only-subject-box"]],outputs:{changeLevelAndSubjectEvent:"changeLevelAndSubjectEvent"},features:[t.qOj],decls:3,vars:2,consts:[[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[1,"flex","flex-wrap","w-full","mb-3",2,"gap","10px"],[4,"ngFor","ngForOf"],[1,"items-center","px-3","py-2","rounded-md","w-full","border","border-slate-300",3,"ngClass","click"],[2,"vertical-align","middle"]],template:function(n,i){if(1&n&&(t.YNc(0,dt,1,1,"azt-loading-effect",0),t.YNc(1,ft,2,1,"ng-template",null,1,t.W1O)),2&n){const o=t.MAs(2);t.Q6J("ngIf",i.statusObj.loading)("ngIfElse",o)}},dependencies:[l.mk,l.sg,l.O5,x.l,p.JV],encapsulation:2}),e})();function ht(e,a){if(1&e&&t._UZ(0,"azt-loading-effect",2),2&e){const n=t.oxw();t.Q6J("currentStatusObj",n.statusObj)}}function bt(e,a){if(1&e&&t._UZ(0,"azt-loading-effect",2),2&e){const n=t.oxw(3);t.Q6J("currentStatusObj",n.loadingExamStatusService.statusObj)}}const C=function(e,a){return{"md:col-span-2":e,"order-last":a}};function Ct(e,a){if(1&e&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e){const n=t.oxw(6);t.Q6J("ngClass",t.WLB(4,C,!n.showLikeMobile,n.showLikeMobile||n.isMobileDevice)),t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_testbank_frontend_practice_is_free")," ")}}function At(e,a){if(1&e&&(t.TgZ(0,"div",25),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e){const n=t.oxw(6);t.Q6J("ngClass",t.WLB(4,C,!n.showLikeMobile,n.showLikeMobile||n.isMobileDevice)),t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_testbank_frontend_practice_is_not_free")," ")}}function vt(e,a){if(1&e&&(t.TgZ(0,"div",26),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit,i=t.oxw(5);t.Q6J("ngClass",t.WLB(3,C,!i.showLikeMobile,i.showLikeMobile||i.isMobileDevice)),t.xp6(1),t.AsE(" ",n.levelName," - ",n.subjectName," ")}}const Ot=function(e){return{"md:col-span-8":e}},yt=function(e){return{"order-2":e}};function St(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"div",12),t.NdJ("click",function(){const o=t.CHM(n),r=o.$implicit,u=o.index,y=t.oxw(5);return t.KtG(y.clickToExam(r,u+1))}),t.TgZ(2,"div",13),t._UZ(3,"img",14),t.ALo(4,"convertCdnLinkOfGitHub"),t.qZA(),t.TgZ(5,"div",15)(6,"div",4),t._uU(7),t.qZA(),t.TgZ(8,"div",16),t._uU(9),t.ALo(10,"mytranslate"),t.qZA(),t.TgZ(11,"div",17)(12,"div",18),t._uU(13),t.ALo(14,"mytranslate"),t.qZA(),t.YNc(15,Ct,3,7,"div",19),t.YNc(16,At,3,7,"div",20),t.YNc(17,vt,2,6,"div",21),t.TgZ(18,"div",22)(19,"span",23),t.NdJ("click",function(o){const u=t.CHM(n).$implicit;return t.oxw(5).viewExamStructureDialog(u),o.stopPropagation(),t.KtG(o.preventDefault())}),t._uU(20),t.ALo(21,"mytranslate"),t.qZA()()()()()()}if(2&e){const n=a.$implicit,i=t.oxw(5);t.xp6(3),t.s9C("src",t.lcZ(4,12,"images/practice-icon2.jpg"),t.LSH),t.xp6(4),t.hij(" ",n.examName," "),t.xp6(2),t.AsE(" ",t.lcZ(10,14,"lang_core_practice_count")+": "," ",n.totalTested," "),t.xp6(3),t.Q6J("ngClass",t.VKq(20,Ot,!i.showLikeMobile)),t.xp6(1),t.AsE(" ",t.lcZ(14,16,"lang_auto_so_luong_cau_hoi")+": "," ",n.totalQuestion," "),t.xp6(2),t.Q6J("ngIf",n.isFree),t.xp6(1),t.Q6J("ngIf",!n.isFree),t.xp6(1),t.Q6J("ngIf",n.levelName&&n.subjectName),t.xp6(1),t.Q6J("ngClass",t.VKq(22,yt,i.showLikeMobile||i.isMobileDevice)),t.xp6(2),t.hij(" ",t.lcZ(21,18,"lang_testbank_frontend_exam_structure_view_structure")," ")}}function jt(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",27),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(5);return t.KtG(o.loadMore())}),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()}2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"lang_testbank_frontend_load_more_practice")))}function Zt(e,a){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,St,22,24,"div",10),t.YNc(2,jt,3,3,"div",11),t.qZA()),2&e){const n=t.oxw(4);t.xp6(1),t.Q6J("ngForOf",n.objs),t.xp6(1),t.Q6J("ngIf",n.enableLoadMore)}}function Tt(e,a){1&e&&(t.TgZ(0,"div",28),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_testbank_frontend_not_found_any_suggestion_in_filter")," "))}function wt(e,a){if(1&e&&(t.YNc(0,Zt,3,2,"div",8),t.YNc(1,Tt,3,3,"ng-template",null,9,t.W1O)),2&e){const n=t.MAs(2),i=t.oxw(3);t.Q6J("ngIf",i.objs.length>0)("ngIfElse",n)}}function zt(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",4),t._uU(2),t.ALo(3,"mytranslate"),t._UZ(4,"img",5),t.ALo(5,"convertCdnLinkOfGitHub"),t.qZA(),t.TgZ(6,"azt-only-subject-box",6),t.NdJ("changeLevelAndSubjectEvent",function(o){t.CHM(n);const r=t.oxw(2);return t.KtG(r.changeLevelAndSubjectEvent(o))}),t.qZA(),t.YNc(7,bt,1,1,"azt-loading-effect",0),t.YNc(8,wt,3,2,"ng-template",null,7,t.W1O),t.BQk()}if(2&e){const n=t.MAs(9),i=t.oxw(2);t.xp6(2),t.hij(" ",t.lcZ(3,4,"lang_student_dashboard_exam_collection")," "),t.xp6(2),t.s9C("src",t.lcZ(5,6,"images/practice-new-icon.png"),t.LSH),t.xp6(3),t.Q6J("ngIf",i.loadingExamStatusService.statusObj.loading)("ngIfElse",n)}}function Dt(e,a){if(1&e&&t.YNc(0,zt,10,8,"ng-container",3),2&e){const n=t.oxw();t.Q6J("ngIf",n.hasSuggestionData)}}let Et=(()=>{class e extends m.Q{changeLevelAndSubjectEvent(n){this.loadByFilter(n)}clickToExam(n,i){this.sAztAzotaTrackingService.sendCustomEvent("CLICK|"+this.webPage+"|"+n.examId+"|"+i,[]),this.commonService.myNavigation("/de-thi/"+n.examHashId)}loadMore(){this.objs=this.allObjs.slice(0,this.objs.length+this.itemInLoadMoreAction),this.enableLoadMore=this.objs<this.allObjs}viewExamStructureDialog(n){this.sAztDialogService.open(mt,{width:"90vw",data:{examId:n.examId},restoreFocus:!1})}getData(){this.initStatusObj(),this.waitDestroy(this.frontExamService.apiFrontExamSuggestExamsPost({examResultId:this.resultId,size:50}).subscribe(i=>{if(!i.success)return this.stopStatusObj();this.allObjs=i.data??[],this.hasSuggestionData=!!this.allObjs.length,this.loadMore(),this.stopStatusObj(),this.sAztAzotaTrackingService.sendCustomEvent("LOADED|"+this.webPage,[])}))}loadByFilter(n){this.loadingExamStatusService.initStatusObj(),this.waitDestroy(this.frontExamService.apiFrontExamSuggestExamsPost({examResultId:this.resultId,size:50,subjectKey:n.subjectKey}).subscribe(o=>{if(!o.success)return this.loadingExamStatusService.stopStatusObj();this.objs=[],this.allObjs=o.data??[],this.loadMore(),this.loadingExamStatusService.stopStatusObj()}))}ngOnInit(){super.ngOnInit(),this.isBusinessDomain||this.getData()}constructor(n,i,o){super(),this.frontExamService=n,this.sAztAzotaTrackingService=i,this.sAztDialogService=o,this.showLikeMobile=!1,this.loadingExamStatusService=new b(this.commonService),this.hasSuggestionData=!1,this.objs=[],this.enableLoadMore=!1,this.allObjs=[],this.itemInLoadMoreAction=3}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(O.Tg),t.Y36(g.g),t.Y36(v.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["azt-practice-box"]],inputs:{resultId:"resultId",webPage:"webPage",showLikeMobile:"showLikeMobile"},features:[t.qOj],decls:3,vars:2,consts:[[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[4,"ngIf"],[1,"font-medium"],[2,"height","24px",3,"src"],[1,"mt-2","block",3,"changeLevelAndSubjectEvent"],["doneLoadingExam",""],[4,"ngIf","ngIfElse"],["emptyDataInFilter",""],[4,"ngFor","ngForOf"],["class","pt-3 clickable text-center link__color",3,"click",4,"ngIf"],[1,"box","px-4","py-4","mt-3","flex","clickable","hover:bg-gray-soft",3,"click"],[1,"w-16","h-20","flex-none","image-fit","border","border-slate-200","dark:border-darkmode-400","rounded-md","overflow-hidden"],[3,"src"],[1,"ml-4","w-full"],[1,"text-slate-500","text-xs","mt-1"],[1,"grid","grid-cols-12","gap-2"],[1,"col-span-12","text-slate-500","text-xs","mt-1","w-full","order-first",3,"ngClass"],["class","col-span-5 text-center py-1 px-2 rounded-full text-xs bg-success text-white font-medium mr-1","style","align-content: center",3,"ngClass",4,"ngIf"],["class","col-span-4 text-center py-1 px-2 rounded-full text-xs bg-pending text-white font-medium mr-1","style","align-content: center",3,"ngClass",4,"ngIf"],["class","col-span-8 text-center py-1 px-2 rounded-full text-xs bg-primary text-white font-medium","style","align-content: center",3,"ngClass",4,"ngIf"],[1,"col-span-12",3,"ngClass"],[1,"clickable","link__color","link__hover","font-medium",3,"click"],[1,"col-span-5","text-center","py-1","px-2","rounded-full","text-xs","bg-success","text-white","font-medium","mr-1",2,"align-content","center",3,"ngClass"],[1,"col-span-4","text-center","py-1","px-2","rounded-full","text-xs","bg-pending","text-white","font-medium","mr-1",2,"align-content","center",3,"ngClass"],[1,"col-span-8","text-center","py-1","px-2","rounded-full","text-xs","bg-primary","text-white","font-medium",2,"align-content","center",3,"ngClass"],[1,"pt-3","clickable","text-center","link__color",3,"click"],[1,"box","p-2","mt-3"]],template:function(n,i){if(1&n&&(t.YNc(0,ht,1,1,"azt-loading-effect",0),t.YNc(1,Dt,1,1,"ng-template",null,1,t.W1O)),2&n){const o=t.MAs(2);t.Q6J("ngIf",i.statusObj.loading)("ngIfElse",o)}},dependencies:[l.mk,l.sg,l.O5,x.l,xt,p.JV,p.Bo],encapsulation:2}),e})()}}]);