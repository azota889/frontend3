"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[8377],{34158:(y,T,c)=>{c.d(T,{L:()=>o});var O=c(26860),b=c(36484),d=c(39307);let o=(()=>{var g;class t{constructor(l,r){this.userService=l,this.redirectService=r}canActivate(l,r){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(r.url),!1)}canActivateChild(l,r){return this.canActivate(l,r)}canLoad(l){const r=`/${l.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(r),!1)}}return(g=t).\u0275fac=function(l){return new(l||g)(O.KVO(b.R),O.KVO(d.m))},g.\u0275prov=O.jDH({token:g,factory:g.\u0275fac,providedIn:"root"}),t})()},90189:(y,T,c)=>{c.d(T,{O:()=>k});var O=c(59640),b=c(43234),d=c(67551),o=c(26860),g=c(2812),t=c(27842),h=c(54460),l=c(18718),r=c(86359),x=c(76975);function u(m,S){if(1&m&&o.nrm(0,"azt-loading-effect",2),2&m){const f=o.XpG();o.Y8G("currentStatusObj",f.statusObj)}}const D=function(m){return{"mt-1":m}};function I(m,S){if(1&m&&(o.qex(0),o.j41(1,"a",6),o.nrm(2,"azt-frontend-ads-item",7),o.k0s(),o.bVm()),2&m){const f=S.$implicit,p=S.index,C=o.XpG(3);o.R7$(1),o.Y8G("ngClass",o.eq3(3,D,p>0)),o.BMQ("href",C.baseTrackHit.replace("[PRODUCT_ID]",f.id.toString()),o.B4B),o.R7$(1),o.Y8G("obj",f)}}function A(m,S){if(1&m){const f=o.RV6();o.j41(0,"div",8),o.bIt("click",function(){o.eBV(f);const C=o.XpG(3);return o.Njj(C.loadMore())}),o.EFF(1),o.nI1(2,"mytranslate"),o.k0s()}2&m&&(o.R7$(1),o.JRh(o.bMT(2,1,"lang_testbank_frontend_load_more_practice")))}function z(m,S){if(1&m&&(o.j41(0,"div"),o.DNE(1,I,3,5,"ng-container",4),o.DNE(2,A,3,3,"div",5),o.k0s()),2&m){const f=o.XpG(2);o.HbH(f.classStyle),o.R7$(1),o.Y8G("ngForOf",f.objs),o.R7$(1),o.Y8G("ngIf",f.enableLoadMore)}}function R(m,S){if(1&m&&o.DNE(0,z,3,4,"div",3),2&m){const f=o.XpG();o.Y8G("ngIf",f.objs.length>0)}}let k=(()=>{var m;class S extends O.H{loadMore(){this.objs=this.allObjs.slice(0,this.objs.length+this.itemInLoadMoreAction),this.enableLoadMore=this.objs<this.allObjs}initData(){this.initStatusObj();let p=this.isMobileDevice?[this.adsPosition,d.rA.ALLPOSITION,d.rA.ALLPOSITIONMOBILE]:[this.adsPosition,d.rA.ALLPOSITION,d.rA.ALLPOSITIONDESKTOP];this.adsPosition==d.rA.STUDENTMAINDASHBOARD&&p.push(this.isMobileDevice?d.rA.STUDENTMAINDASHBOARDMOBILE:d.rA.STUDENTMAINDASHBOARDDESKTOP),this.adsPosition==d.rA.STUDENTSUBMITTESTATLIST&&p.push(this.isMobileDevice?d.rA.STUDENTSUBMITTESTATLISTMOBILE:d.rA.STUDENTSUBMITTESTATLISTDESKTOP),this.adsPosition==d.rA.STUDENTSUBMITTESTATRIGHT&&p.push(this.isMobileDevice?d.rA.STUDENTSUBMITTESTATRIGHTMOBILE:d.rA.STUDENTSUBMITTESTATRIGHTDESKTOP),this.adsPosition==d.rA.STUDENTANSWERTESTATLEFT&&p.push(this.isMobileDevice?d.rA.STUDENTANSWERTESTATLEFTMOBILE:d.rA.STUDENTANSWERTESTATLEFTDESKTOP),this.waitDestroy(this.advertisingService.apiAdvertisingProductsRandomListPost({page:1,size:this.totalAds,adsPositionObjs:p}).subscribe(E=>{if(!E.success)return this.stopStatusObj();this.allObjs=E.data?.objs??[],this.loadMore(),this.stopStatusObj()}))}ngOnInit(){super.ngOnInit(),!this.isBusinessDomain&&this.checkVipAccountService.getShowAds().subscribe(p=>{if(!p)return;this.initData();let C=this.sAztAzotaTrackingService.getVisitorUuid();this.baseTrackHit=b.c.ads_tracking_api_url+"/api/v10/advertising/products/hit?productId=[PRODUCT_ID]&sessionId="+encodeURIComponent(C)+"&url="+encodeURIComponent(this.commonService.getFullCurrentUrl())})}constructor(p,C,E){super(),this.advertisingService=p,this.commonService=C,this.sAztAzotaTrackingService=E,this.classStyle="",this.totalAds=1,this.objs=[],this.enableLoadMore=!1,this.allObjs=[],this.itemInLoadMoreAction=2,this.baseTrackHit=""}}return(m=S).\u0275fac=function(p){return new(p||m)(o.rXU(d.yG),o.rXU(g.R),o.rXU(t.M))},m.\u0275cmp=o.VBU({type:m,selectors:[["azt-frontend-ads-box"]],inputs:{allowTracking:"allowTracking",adsPosition:"adsPosition",classStyle:"classStyle",totalAds:"totalAds"},features:[o.Vt3],decls:3,vars:2,consts:[[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[3,"class",4,"ngIf"],[4,"ngFor","ngForOf"],["class","pt-3 clickable text-center link__color",3,"click",4,"ngIf"],["target","_blank",1,"clickable",3,"ngClass"],[3,"obj"],[1,"pt-3","clickable","text-center","link__color",3,"click"]],template:function(p,C){if(1&p&&(o.DNE(0,u,1,1,"azt-loading-effect",0),o.DNE(1,R,1,1,"ng-template",null,1,o.C5r)),2&p){const E=o.sdS(2);o.Y8G("ngIf",C.statusObj.loading)("ngIfElse",E)}},dependencies:[h.YU,h.Sq,h.bT,l.K,r.f,x.wp],encapsulation:2}),S})()},86359:(y,T,c)=>{c.d(T,{f:()=>o});var O=c(59640),b=c(26860),d=c(76975);let o=(()=>{var g;class t extends O.H{replaceAdsContent(l){if(!l.template||!l.productAttributes)return l;let r=l.productAttributes;return r.push({id:0,productId:0,attributeId:0,value:l.name,attribute:{id:0,categoryId:0,displayName:"NAME",variableName:"NAME"}}),r.push({id:0,productId:0,attributeId:0,value:l.actionUrl??"",attribute:{id:0,categoryId:0,displayName:"URL",variableName:"URL"}}),r.push({id:0,productId:0,attributeId:0,value:l.description??"",attribute:{id:0,categoryId:0,displayName:"DESCRIPTION",variableName:"DESCRIPTION"}}),r.push({id:0,productId:0,attributeId:0,value:l.thumbnailUrl??"",attribute:{id:0,categoryId:0,displayName:"THUMBNAIL",variableName:"THUMBNAIL"}}),r.forEach(x=>{x.attribute?.variableName&&(l.template=this.commonService.replaceAll(l.template,"${"+x.attribute.variableName.toUpperCase()+"}",x.value))}),l}ngOnChanges(){this.obj=this.replaceAdsContent(this.obj)}}return(g=t).\u0275fac=function(){let h;return function(r){return(h||(h=b.xGo(g)))(r||g)}}(),g.\u0275cmp=b.VBU({type:g,selectors:[["azt-frontend-ads-item"]],inputs:{obj:"obj"},features:[b.Vt3,b.OA$],decls:2,vars:3,consts:[[3,"innerHTML"]],template:function(l,r){if(1&l&&(b.nrm(0,"div",0),b.nI1(1,"safeNormalHtmlContent")),2&l){let x;b.Y8G("innerHTML",b.bMT(1,1,null!==(x=r.obj.template)&&void 0!==x?x:""),b.npT)}},dependencies:[d._y],encapsulation:2}),t})()},42244:(y,T,c)=>{c.d(T,{X:()=>Bt});var O=c(67551),b=c(59640);class d{initStatusObj(a=""){this.statusObj={loading:!0,errorMessage:"",mustShowErrorBox:!1}}successStatusObj(a,n){this.statusObj={loading:!1,errorMessage:"",mustShowErrorBox:!1},n&&a&&this.commonService.snackSuccess(a)}errorStatusObj(a,n){this.statusObj={loading:!1,errorMessage:a,mustShowErrorBox:!1},n&&this.commonService.snackError(a)}forceShowErrorBox(a,n){this.statusObj={loading:!0,errorMessage:a,mustShowErrorBox:!0},n&&this.commonService.snackError(a)}stopStatusObj(){this.statusObj={loading:!1,errorMessage:"",mustShowErrorBox:!1}}constructor(a){this.commonService=a,this.statusObj={loading:!1,errorMessage:"",mustShowErrorBox:!1}}}var o=c(89163),g=c(33887),t=c(26860),h=c(27842),l=c(17776),r=c(54460),x=c(25329),u=c(5601),D=c(18718),I=c(2915),A=c(76975);function z(e,a){if(1&e&&t.nrm(0,"azt-loading-effect",3),2&e){const n=t.XpG();t.Y8G("currentStatusObj",n.statusObj)}}function R(e,a){1&e&&(t.j41(0,"th",28),t.EFF(1),t.nI1(2,"mytranslate"),t.k0s()),2&e&&(t.R7$(1),t.SpI(" ",t.bMT(2,1,"lang_core_ten_so_luong")," "))}function k(e,a){if(1&e&&(t.j41(0,"td",29)(1,"span"),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s()()),2&e){const n=a.$implicit;t.Y8G("hidden","questions"==n.key),t.R7$(2),t.JRh(t.bMT(3,2,n.key))}}function m(e,a){1&e&&(t.j41(0,"th",28)(1,"span",30),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"lang_testbank_statistical_numbers")," "))}function S(e,a){if(1&e&&(t.j41(0,"td",29)(1,"span",30),t.EFF(2),t.k0s()()),2&e){const n=a.$implicit;t.Y8G("hidden","questions"==n.key),t.R7$(2),t.JRh(n.value)}}function f(e,a){1&e&&t.nrm(0,"tr",31)}function p(e,a){1&e&&t.nrm(0,"tr",32)}function C(e,a){1&e&&(t.j41(0,"th",28),t.EFF(1," ID "),t.k0s())}function E(e,a){if(1&e&&(t.j41(0,"td",33)(1,"span"),t.EFF(2),t.k0s()()),2&e){const n=a.$implicit;t.R7$(2),t.JRh(n.questionId)}}function N(e,a){1&e&&(t.j41(0,"th",28)(1,"span",30),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"lang_auto_chon")," A "))}function P(e,a){if(1&e&&(t.j41(0,"td",34)(1,"span",30),t.EFF(2),t.k0s()()),2&e){const n=a.$implicit,i=t.XpG(3);t.R7$(2),t.SpI(" ",i.calculatePercentage(n.numberOfA,n.total)," ")}}function w(e,a){1&e&&(t.j41(0,"th",28)(1,"span",30),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"lang_auto_chon")," B "))}function G(e,a){if(1&e&&(t.j41(0,"td",34)(1,"span",30),t.EFF(2),t.k0s()()),2&e){const n=a.$implicit,i=t.XpG(3);t.R7$(2),t.SpI(" ",i.calculatePercentage(n.numberOfB,n.total)," ")}}function L(e,a){1&e&&(t.j41(0,"th",28)(1,"span",30),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"lang_auto_chon")," C "))}function $(e,a){if(1&e&&(t.j41(0,"td",34)(1,"span",30),t.EFF(2),t.k0s()()),2&e){const n=a.$implicit,i=t.XpG(3);t.R7$(2),t.SpI(" ",i.calculatePercentage(n.numberOfC,n.total)," ")}}function U(e,a){1&e&&(t.j41(0,"th",28)(1,"span",30),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"lang_auto_chon")," D "))}function X(e,a){if(1&e&&(t.j41(0,"td",34)(1,"span",30),t.EFF(2),t.k0s()()),2&e){const n=a.$implicit,i=t.XpG(3);t.R7$(2),t.SpI(" ",i.calculatePercentage(n.numberOfD,n.total)," ")}}function Y(e,a){1&e&&(t.j41(0,"th",28)(1,"span",30),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"lang_auto_bo_qua")," "))}function V(e,a){if(1&e&&(t.j41(0,"td",34)(1,"span",30),t.EFF(2),t.k0s()()),2&e){const n=a.$implicit,i=t.XpG(3);t.R7$(2),t.SpI(" ",i.calculatePercentage(n.numberOfSkip,n.total)," ")}}function K(e,a){1&e&&(t.j41(0,"th",28)(1,"span",30),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"lang_auto_do_kho")," "))}function H(e,a){if(1&e&&(t.j41(0,"td",34)(1,"span",30),t.EFF(2),t.k0s()()),2&e){const n=a.$implicit,i=t.XpG(3);t.R7$(2),t.SpI(" ",i.calculatePercentage(n.difficultyRate,1)," ")}}function W(e,a){1&e&&(t.j41(0,"th",28)(1,"span",30),t.EFF(2),t.nI1(3,"mytranslate"),t.k0s()()),2&e&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"lang_core_kha_nang_phan_loai")," "))}function Q(e,a){if(1&e&&(t.j41(0,"td",34)(1,"span",30),t.EFF(2),t.k0s()()),2&e){const n=a.$implicit,i=t.XpG(3);t.R7$(2),t.SpI(" ",i.calculatePercentage(n.discriminatoryPower,1)," ")}}function q(e,a){1&e&&t.nrm(0,"tr",31)}function J(e,a){1&e&&t.nrm(0,"tr",32)}function Z(e,a){if(1&e&&(t.j41(0,"div")(1,"azt-mat-dialog-content",8)(2,"mat-card")(3,"table",9),t.qex(4,10),t.DNE(5,R,3,3,"th",11),t.DNE(6,k,4,4,"td",12),t.bVm(),t.qex(7,13),t.DNE(8,m,4,3,"th",11),t.DNE(9,S,3,2,"td",12),t.bVm(),t.DNE(10,f,1,0,"tr",14),t.DNE(11,p,1,0,"tr",15),t.k0s()(),t.j41(12,"div",16)(13,"mat-card",17)(14,"table",9),t.qex(15,18),t.DNE(16,C,2,0,"th",11),t.DNE(17,E,3,1,"td",19),t.bVm(),t.qex(18,20),t.DNE(19,N,4,3,"th",11),t.DNE(20,P,3,1,"td",21),t.bVm(),t.qex(21,22),t.DNE(22,w,4,3,"th",11),t.DNE(23,G,3,1,"td",21),t.bVm(),t.qex(24,23),t.DNE(25,L,4,3,"th",11),t.DNE(26,$,3,1,"td",21),t.bVm(),t.qex(27,24),t.DNE(28,U,4,3,"th",11),t.DNE(29,X,3,1,"td",21),t.bVm(),t.qex(30,25),t.DNE(31,Y,4,3,"th",11),t.DNE(32,V,3,1,"td",21),t.bVm(),t.qex(33,26),t.DNE(34,K,4,3,"th",11),t.DNE(35,H,3,1,"td",21),t.bVm(),t.qex(36,27),t.DNE(37,W,4,3,"th",11),t.DNE(38,Q,3,1,"td",21),t.bVm(),t.DNE(39,q,1,0,"tr",14),t.DNE(40,J,1,0,"tr",15),t.k0s()()()()()),2&e){const n=t.XpG(2);t.R7$(1),t.Y8G("minHeight","200px"),t.R7$(2),t.Y8G("dataSource",n.dataSource),t.R7$(7),t.Y8G("matHeaderRowDef",n.displayedColumnsOverview),t.R7$(1),t.Y8G("matRowDefColumns",n.displayedColumnsOverview),t.R7$(3),t.Y8G("dataSource",n.obj.questions),t.R7$(25),t.Y8G("matHeaderRowDef",n.displayedColumnsQuestions),t.R7$(1),t.Y8G("matRowDefColumns",n.displayedColumnsQuestions)}}function tt(e,a){if(1&e){const n=t.RV6();t.j41(0,"div",4),t.EFF(1),t.nI1(2,"mytranslate"),t.k0s(),t.DNE(3,Z,41,7,"div",5),t.j41(4,"div",6)(5,"button",7),t.bIt("click",function(){t.eBV(n);const s=t.XpG();return t.Njj(s.btnCloseDialog())}),t.EFF(6),t.nI1(7,"mytranslate"),t.k0s()()}if(2&e){const n=t.XpG();t.R7$(1),t.SpI(" ",t.bMT(2,3,"lang_core_phan_tich_chi_tiet")," "),t.R7$(2),t.Y8G("ngIf",n.obj),t.R7$(3),t.SpI(" ",t.bMT(7,5,"lang_auto_dong")," ")}}let et=(()=>{var e;class a extends g._{btnCloseDialog(){this.dialogRef.close()}initData(){this.sAztAzotaTrackingService.sendCustomEvent("CLICK_EXAM_STRUCTURE_AT_SUGGESTION",[]),this.initStatusObj(),this.waitDestroy(this.analysisExamService.aiApiV1AnalysisExamMeasureQuestionsOfExamGet(this.data.examId).subscribe({next:i=>{this.obj=i,this.dataSource=Object.entries(this.obj).map(([s,_])=>({key:s,value:_})),this.stopStatusObj()},error:i=>{this.errorStatusObj(i.error.message,!0)}}))}calculatePercentage(i,s){return(i/s*100).toFixed(2)+"%"}ngOnInit(){super.ngOnInit(),this.initData()}constructor(i,s,_,v){super(v,_),this.sAztAzotaTrackingService=i,this.analysisExamService=s,this.dialogRef=_,this.dataSource=[],this.displayedColumnsOverview=["nameTotal","total"],this.displayedColumnsQuestions=["questionId","numberOfA","numberOfB","numberOfC","numberOfD","numberOfSkip","difficultyRate","discriminatoryPower"]}}return(e=a).\u0275fac=function(i){return new(i||e)(t.rXU(h.M),t.rXU(l.hR),t.rXU(o.CP,8),t.rXU(o.Vh,8))},e.\u0275cmp=t.VBU({type:e,selectors:[["coazt-detailed-analysis-dialog"]],features:[t.Vt3],decls:4,vars:2,consts:[[1,"box","p-3","skill-statistical"],[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[1,"font-medium","mb-2"],[4,"ngIf"],[1,"flex","items-center","justify-end","pt-2","w-full","bg-white"],[1,"btn","btn-secondary","w-32",3,"click"],[3,"minHeight"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","nameTotal"],["class","whitespace-nowrap","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"hidden",4,"matCellDef"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"scroll-table"],[1,"mt-3"],["matColumnDef","questionId"],["class","whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","numberOfA"],["mat-cell","",4,"matCellDef"],["matColumnDef","numberOfB"],["matColumnDef","numberOfC"],["matColumnDef","numberOfD"],["matColumnDef","numberOfSkip"],["matColumnDef","difficultyRate"],["matColumnDef","discriminatoryPower"],["mat-header-cell","",1,"whitespace-nowrap"],["mat-cell","",3,"hidden"],[1,"center-span"],["mat-header-row",""],["mat-row",""],["mat-cell","",1,"whitespace-nowrap"],["mat-cell",""]],template:function(i,s){if(1&i&&(t.j41(0,"div",0),t.DNE(1,z,1,1,"azt-loading-effect",1),t.DNE(2,tt,8,7,"ng-template",null,2,t.C5r),t.k0s()),2&i){const _=t.sdS(3);t.R7$(1),t.Y8G("ngIf",s.statusObj.loading)("ngIfElse",_)}},dependencies:[r.bT,x.RN,u.Zl,u.tL,u.ji,u.cC,u.YV,u.iL,u.KS,u.$R,u.YZ,u.NB,D.K,I.U,A.wp],styles:[".scroll-table[_ngcontent-%COMP%]{overflow-x:auto;white-space:nowrap}.scroll-table[_ngcontent-%COMP%]::-webkit-scrollbar{height:5px}.scroll-table[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}.scroll-table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#d0d0d0}.scroll-table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#c2c2c2}.mdc-data-table__header-row[_ngcontent-%COMP%]{height:35px!important}.skill-statistical[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]{font-size:13px!important}"]}),a})();var F=c(46899);function nt(e,a){if(1&e&&t.nrm(0,"azt-loading-effect",3),2&e){const n=t.XpG();t.Y8G("currentStatusObj",n.statusObj)}}function at(e,a){1&e&&(t.j41(0,"th",18)(1,"div",19)(2,"span",20),t.EFF(3),t.nI1(4,"mytranslate"),t.k0s()()()),2&e&&(t.R7$(3),t.JRh(t.bMT(4,1,"lang_auto_don_vi_kien_thuc")))}function it(e,a){if(1&e&&(t.j41(0,"td",21)(1,"div",19)(2,"span",22),t.EFF(3),t.k0s()()()),2&e){const n=a.$implicit;t.R7$(3),t.SpI(" ",n.title,"")}}function ot(e,a){1&e&&(t.j41(0,"th",18)(1,"div",19)(2,"span",20),t.EFF(3),t.nI1(4,"mytranslate"),t.k0s()()()),2&e&&(t.R7$(3),t.JRh(t.bMT(4,1,"lang_admin_question_global_statistic_total_question")))}function st(e,a){if(1&e&&(t.j41(0,"td",21)(1,"div",23)(2,"span",24),t.EFF(3),t.k0s()()()),2&e){const n=a.$implicit;t.R7$(3),t.SpI(" ",n.numberOfQuestions,"")}}function ct(e,a){1&e&&(t.j41(0,"th",18)(1,"div",19)(2,"span",20),t.EFF(3),t.nI1(4,"mytranslate"),t.k0s()()()),2&e&&(t.R7$(3),t.JRh(t.bMT(4,1,"lang_auto_ty_le")))}function lt(e,a){if(1&e&&(t.j41(0,"td",21)(1,"div",23)(2,"span",24),t.EFF(3),t.nI1(4,"replace"),t.nI1(5,"number"),t.k0s()()()),2&e){const n=a.$implicit,i=t.XpG(3);t.R7$(3),t.SpI(" ",t.brH(4,1,t.i5U(5,5,i.obj.numberOfQuestions?n.numberOfQuestions/i.obj.numberOfQuestions*100:0,"1.0-2"),",","."),"%")}}function rt(e,a){1&e&&t.nrm(0,"tr",25)}function _t(e,a){1&e&&t.nrm(0,"tr",26)}function mt(e,a){if(1&e&&(t.j41(0,"div")(1,"div",8)(2,"b"),t.EFF(3),t.nI1(4,"mytranslate"),t.nI1(5,"mytranslate"),t.k0s()(),t.j41(6,"azt-mat-dialog-content",9)(7,"table",10),t.qex(8,11),t.DNE(9,at,5,3,"th",12),t.DNE(10,it,4,1,"td",13),t.bVm(),t.qex(11,14),t.DNE(12,ot,5,3,"th",12),t.DNE(13,st,4,1,"td",13),t.bVm(),t.qex(14,15),t.DNE(15,ct,5,3,"th",12),t.DNE(16,lt,6,8,"td",13),t.bVm(),t.DNE(17,rt,1,0,"tr",16),t.DNE(18,_t,1,0,"tr",17),t.k0s()()()),2&e){const n=t.XpG(2);t.R7$(3),t.JRh(t.bMT(4,6,"lang_testbank_frontend_exam_structure_total_question")+": "+n.obj.numberOfQuestions+" "+t.bMT(5,8,"lang_testbank_frontend_exam_structure_number_question")),t.R7$(3),t.Y8G("minHeight","200px"),t.R7$(1),t.Y8G("dataSource",n.obj.structures),t.R7$(10),t.Y8G("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!1),t.R7$(1),t.Y8G("matRowDefColumns",n.displayedColumns)}}function dt(e,a){if(1&e){const n=t.RV6();t.DNE(0,mt,19,10,"div",4),t.j41(1,"div",5)(2,"button",6),t.bIt("click",function(){t.eBV(n);const s=t.XpG();return t.Njj(s.viewDetailedAnalysisDialog())}),t.EFF(3),t.nI1(4,"mytranslate"),t.k0s(),t.j41(5,"button",7),t.bIt("click",function(){t.eBV(n);const s=t.XpG();return t.Njj(s.btnCloseDialog())}),t.EFF(6),t.nI1(7,"mytranslate"),t.k0s()()}if(2&e){const n=t.XpG();t.Y8G("ngIf",n.obj),t.R7$(3),t.SpI(" ",t.bMT(4,3,"lang_core_phan_tich_chi_tiet")," "),t.R7$(3),t.SpI(" ",t.bMT(7,5,"lang_auto_dong")," ")}}let ut=(()=>{var e;class a extends g._{btnCloseDialog(){this.dialogRef.close()}initData(){this.sAztAzotaTrackingService.sendCustomEvent("CLICK_EXAM_STRUCTURE_AT_SUGGESTION",[]),this.initStatusObj(),this.waitDestroy(this.analysisExamService.aiApiV1AnalysisExamGetExamStructureGet(this.data.examId).subscribe({next:i=>{this.obj=i,this.stopStatusObj()},error:i=>{this.errorStatusObj(i.error.message,!0)}}))}viewDetailedAnalysisDialog(){this.sAztDialogService.open(et,{width:"90vw",data:{examId:this.data.examId},restoreFocus:!1})}ngOnInit(){super.ngOnInit(),this.initData()}constructor(i,s,_,v,j){super(j,v),this.sAztAzotaTrackingService=i,this.analysisExamService=s,this.sAztDialogService=_,this.dialogRef=v,this.displayedColumns=["name","question","percent"]}}return(e=a).\u0275fac=function(i){return new(i||e)(t.rXU(h.M),t.rXU(l.hR),t.rXU(F.i),t.rXU(o.CP,8),t.rXU(o.Vh,8))},e.\u0275cmp=t.VBU({type:e,selectors:[["coazt-exam-structure-dialog"]],features:[t.Vt3],decls:4,vars:2,consts:[[1,"box","p-3","structure-exam"],[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[4,"ngIf"],[1,"flex","items-center","justify-between","pt-2","w-full","bg-white"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary","w-32",3,"click"],[2,"padding","0 10px"],[3,"minHeight"],["mat-table","",1,"mat-elevation-z8","mt-2",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","question"],["matColumnDef","percent"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],[1,"header-cell","mx-auto","w-100"],[1,"center-span","structure-bg-primary"],["mat-cell",""],[1,"structure-bg-primary"],[1,"table-cell","mx-auto","w-100"],[1,"center-span","structure-bg-info"],["mat-header-row",""],["mat-row",""]],template:function(i,s){if(1&i&&(t.j41(0,"div",0),t.DNE(1,nt,1,1,"azt-loading-effect",1),t.DNE(2,dt,8,7,"ng-template",null,2,t.C5r),t.k0s()),2&i){const _=t.sdS(3);t.R7$(1),t.Y8G("ngIf",s.statusObj.loading)("ngIfElse",_)}},dependencies:[r.bT,u.Zl,u.tL,u.ji,u.cC,u.YV,u.iL,u.KS,u.$R,u.YZ,u.NB,D.K,I.U,r.QX,A.wp,A.Ss],encapsulation:2}),a})();var B=c(24398),pt=c(90189);function gt(e,a){if(1&e&&t.nrm(0,"azt-loading-effect",2),2&e){const n=t.XpG();t.Y8G("currentStatusObj",n.statusObj)}}const ft=function(e,a){return{"btn-info text-white":e,"btn-secondary-soft":a}};function bt(e,a){if(1&e){const n=t.RV6();t.j41(0,"div")(1,"button",5),t.bIt("click",function(){const _=t.eBV(n).$implicit,v=t.XpG(2);return t.Njj(v.selectSubject(_))}),t.j41(2,"span",6),t.EFF(3),t.nI1(4,"mytranslate"),t.k0s()()()}if(2&e){const n=a.$implicit,i=t.XpG(2);t.R7$(1),t.Y8G("ngClass",t.l_i(4,ft,i.currentSelectSubjectKey==n.subjectKey,i.currentSelectSubjectKey!=n.subjectKey)),t.R7$(2),t.JRh(t.bMT(4,2,n.subjectKey))}}function ht(e,a){if(1&e&&(t.j41(0,"div",3),t.DNE(1,bt,5,7,"div",4),t.k0s()),2&e){const n=t.XpG();t.R7$(1),t.Y8G("ngForOf",n.schoolSubjectObjs)}}let Ct=(()=>{var e;class a extends b.H{constructor(){super(...arguments),this.changeLevelAndSubjectEvent=new t.bkB,this.frontExamService=(0,t.WQX)(B.iB),this.filterKeys=["azt_lang_core_khoi_khac","azt_auto_lang_khac"],this.schoolSubjectObjs=[],this.currentSelectSubjectKey="lang_auto_tat_ca"}initData(){this.initStatusObj(),this.waitDestroy(this.frontExamService.apiFrontExamListSuggestSubjectsGet().subscribe(i=>{1==i.success?(this.schoolSubjectObjs.push({subjectKey:"lang_auto_tat_ca"}),this.schoolSubjectObjs=this.schoolSubjectObjs.concat(...i.data??[]),setTimeout(()=>{this.stopStatusObj()},0)):this.errorStatusObj(i.message??"")}))}selectSubject(i){this.currentSelectSubjectKey=i.subjectKey,this.changeLevelAndSubjectEvent.emit(i)}ngOnInit(){super.ngOnInit(),this.initData()}}return(e=a).\u0275fac=function(){let n;return function(s){return(n||(n=t.xGo(e)))(s||e)}}(),e.\u0275cmp=t.VBU({type:e,selectors:[["azt-only-subject-box"]],outputs:{changeLevelAndSubjectEvent:"changeLevelAndSubjectEvent"},features:[t.Vt3],decls:3,vars:2,consts:[[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[1,"flex","flex-wrap","w-full","mb-3",2,"gap","10px"],[4,"ngFor","ngForOf"],[1,"items-center","px-3","py-2","rounded-md","w-full","border","border-slate-300",3,"ngClass","click"],[2,"vertical-align","middle"]],template:function(i,s){if(1&i&&(t.DNE(0,gt,1,1,"azt-loading-effect",0),t.DNE(1,ht,2,1,"ng-template",null,1,t.C5r)),2&i){const _=t.sdS(2);t.Y8G("ngIf",s.statusObj.loading)("ngIfElse",_)}},dependencies:[r.YU,r.Sq,r.bT,D.K,A.wp],encapsulation:2}),a})();function xt(e,a){if(1&e&&t.nrm(0,"azt-loading-effect",2),2&e){const n=t.XpG();t.Y8G("currentStatusObj",n.statusObj)}}function St(e,a){if(1&e&&t.nrm(0,"azt-loading-effect",2),2&e){const n=t.XpG(3);t.Y8G("currentStatusObj",n.loadingExamStatusService.statusObj)}}function vt(e,a){if(1&e&&t.nrm(0,"azt-frontend-ads-box",13),2&e){const n=t.XpG(5);t.Y8G("classStyle","mb-3 block")("allowTracking",!0)("adsPosition",n.allAdsPositions.STUDENTSUBMITTESTATLIST)}}const M=function(e,a){return{"md:col-span-2":e,"order-last":a}};function Ot(e,a){if(1&e&&(t.j41(0,"div",26),t.EFF(1),t.nI1(2,"mytranslate"),t.k0s()),2&e){const n=t.XpG(6);t.Y8G("ngClass",t.l_i(4,M,!n.showLikeMobile,n.showLikeMobile||n.isMobileDevice)),t.R7$(1),t.SpI(" ",t.bMT(2,2,"lang_testbank_frontend_practice_is_free")," ")}}function At(e,a){if(1&e&&(t.j41(0,"div",27),t.EFF(1),t.nI1(2,"mytranslate"),t.k0s()),2&e){const n=t.XpG(6);t.Y8G("ngClass",t.l_i(4,M,!n.showLikeMobile,n.showLikeMobile||n.isMobileDevice)),t.R7$(1),t.SpI(" ",t.bMT(2,2,"lang_testbank_frontend_practice_is_not_free")," ")}}function Et(e,a){if(1&e&&(t.j41(0,"div",28),t.EFF(1),t.k0s()),2&e){const n=t.XpG().$implicit,i=t.XpG(5);t.Y8G("ngClass",t.l_i(3,M,!i.showLikeMobile,i.showLikeMobile||i.isMobileDevice)),t.R7$(1),t.Lme(" ",n.levelName," - ",n.subjectName," ")}}const Tt=function(e){return{"md:col-span-8":e}},Dt=function(e){return{"order-2":e}};function It(e,a){if(1&e){const n=t.RV6();t.j41(0,"div")(1,"div",14),t.bIt("click",function(){const s=t.eBV(n),_=s.$implicit,v=s.index,j=t.XpG(5);return t.Njj(j.clickToExam(_,v+1))}),t.j41(2,"div",15),t.nrm(3,"img",16),t.nI1(4,"convertCdnLinkOfGitHub"),t.k0s(),t.j41(5,"div",17)(6,"div",5),t.EFF(7),t.k0s(),t.j41(8,"div",18),t.EFF(9),t.nI1(10,"mytranslate"),t.k0s(),t.j41(11,"div",19)(12,"div",20),t.EFF(13),t.nI1(14,"mytranslate"),t.k0s(),t.DNE(15,Ot,3,7,"div",21),t.DNE(16,At,3,7,"div",22),t.DNE(17,Et,2,6,"div",23),t.j41(18,"div",24)(19,"span",25),t.bIt("click",function(s){const v=t.eBV(n).$implicit;return t.XpG(5).viewExamStructureDialog(v),s.stopPropagation(),t.Njj(s.preventDefault())}),t.EFF(20),t.nI1(21,"mytranslate"),t.k0s()()()()()()}if(2&e){const n=a.$implicit,i=t.XpG(5);t.R7$(3),t.FS9("src",t.bMT(4,12,"images/practice-icon2.jpg"),t.B4B),t.R7$(4),t.SpI(" ",n.examName," "),t.R7$(2),t.Lme(" ",t.bMT(10,14,"lang_core_practice_count")+": "," ",n.totalTested," "),t.R7$(3),t.Y8G("ngClass",t.eq3(20,Tt,!i.showLikeMobile)),t.R7$(1),t.Lme(" ",t.bMT(14,16,"lang_auto_so_luong_cau_hoi")+": "," ",n.totalQuestion," "),t.R7$(2),t.Y8G("ngIf",n.isFree),t.R7$(1),t.Y8G("ngIf",!n.isFree),t.R7$(1),t.Y8G("ngIf",n.levelName&&n.subjectName),t.R7$(1),t.Y8G("ngClass",t.eq3(22,Dt,i.showLikeMobile||i.isMobileDevice)),t.R7$(2),t.SpI(" ",t.bMT(21,18,"lang_testbank_frontend_exam_structure_view_structure")," ")}}function jt(e,a){if(1&e){const n=t.RV6();t.j41(0,"div",29),t.bIt("click",function(){t.eBV(n);const s=t.XpG(5);return t.Njj(s.loadMore())}),t.EFF(1),t.nI1(2,"mytranslate"),t.k0s()}2&e&&(t.R7$(1),t.JRh(t.bMT(2,1,"lang_testbank_frontend_load_more_practice")))}function yt(e,a){if(1&e&&(t.j41(0,"div"),t.DNE(1,vt,1,3,"azt-frontend-ads-box",4),t.DNE(2,It,22,24,"div",11),t.DNE(3,jt,3,3,"div",12),t.k0s()),2&e){const n=t.XpG(4);t.R7$(1),t.Y8G("ngIf","STUDENT_SUBMIT_TEST"==n.webPage),t.R7$(1),t.Y8G("ngForOf",n.objs),t.R7$(1),t.Y8G("ngIf",n.enableLoadMore)}}function zt(e,a){1&e&&(t.j41(0,"div",30),t.EFF(1),t.nI1(2,"mytranslate"),t.k0s()),2&e&&(t.R7$(1),t.SpI(" ",t.bMT(2,1,"lang_testbank_frontend_not_found_any_suggestion_in_filter")," "))}function Rt(e,a){if(1&e&&(t.DNE(0,yt,4,3,"div",9),t.DNE(1,zt,3,3,"ng-template",null,10,t.C5r)),2&e){const n=t.sdS(2),i=t.XpG(3);t.Y8G("ngIf",i.objs.length>0)("ngIfElse",n)}}function kt(e,a){if(1&e){const n=t.RV6();t.qex(0),t.j41(1,"div",5),t.EFF(2),t.nI1(3,"mytranslate"),t.nrm(4,"img",6),t.nI1(5,"convertCdnLinkOfGitHub"),t.k0s(),t.j41(6,"azt-only-subject-box",7),t.bIt("changeLevelAndSubjectEvent",function(s){t.eBV(n);const _=t.XpG(2);return t.Njj(_.changeLevelAndSubjectEvent(s))}),t.k0s(),t.DNE(7,St,1,1,"azt-loading-effect",0),t.DNE(8,Rt,3,2,"ng-template",null,8,t.C5r),t.bVm()}if(2&e){const n=t.sdS(9),i=t.XpG(2);t.R7$(2),t.SpI(" ",t.bMT(3,4,"lang_student_dashboard_exam_collection")," "),t.R7$(2),t.FS9("src",t.bMT(5,6,"images/practice-new-icon.png"),t.B4B),t.R7$(3),t.Y8G("ngIf",i.loadingExamStatusService.statusObj.loading)("ngIfElse",n)}}function Mt(e,a){if(1&e&&t.nrm(0,"azt-frontend-ads-box",13),2&e){const n=t.XpG(2);t.Y8G("classStyle","mb-3 block")("allowTracking",!0)("adsPosition",n.allAdsPositions.STUDENTSUBMITTESTATLIST)}}function Ft(e,a){if(1&e&&(t.DNE(0,kt,10,8,"ng-container",3),t.DNE(1,Mt,1,3,"azt-frontend-ads-box",4)),2&e){const n=t.XpG();t.Y8G("ngIf",n.hasSuggestionData),t.R7$(1),t.Y8G("ngIf",!n.hasSuggestionData&&"STUDENT_SUBMIT_TEST"==n.webPage)}}let Bt=(()=>{var e;class a extends b.H{changeLevelAndSubjectEvent(i){this.loadByFilter(i)}clickToExam(i,s){this.sAztAzotaTrackingService.sendCustomEvent("CLICK|"+this.webPage+"|"+i.examId+"|"+s,[]),this.commonService.myNavigation("/de-thi/"+i.examHashId)}loadMore(){this.objs=this.allObjs.slice(0,this.objs.length+this.itemInLoadMoreAction),this.enableLoadMore=this.objs<this.allObjs}viewExamStructureDialog(i){this.sAztDialogService.open(ut,{width:"90vw",data:{examId:i.examId},restoreFocus:!1})}getData(){this.initStatusObj(),this.waitDestroy(this.frontExamService.apiFrontExamSuggestExamsPost({examResultId:this.resultId,size:50}).subscribe(s=>{if(!s.success)return this.stopStatusObj();this.allObjs=s.data??[],this.hasSuggestionData=!!this.allObjs.length,this.loadMore(),this.stopStatusObj(),this.sAztAzotaTrackingService.sendCustomEvent("LOADED|"+this.webPage,[])}))}loadByFilter(i){this.loadingExamStatusService.initStatusObj(),this.waitDestroy(this.frontExamService.apiFrontExamSuggestExamsPost({examResultId:this.resultId,size:50,subjectKey:i.subjectKey}).subscribe(_=>{if(!_.success)return this.loadingExamStatusService.stopStatusObj();this.objs=[],this.allObjs=_.data??[],this.loadMore(),this.loadingExamStatusService.stopStatusObj()}))}ngOnInit(){super.ngOnInit(),this.isBusinessDomain||this.getData()}constructor(i,s,_){super(),this.frontExamService=i,this.sAztAzotaTrackingService=s,this.sAztDialogService=_,this.showLikeMobile=!1,this.loadingExamStatusService=new d(this.commonService),this.hasSuggestionData=!1,this.objs=[],this.enableLoadMore=!1,this.allObjs=[],this.itemInLoadMoreAction=3,this.allAdsPositions=O.rA}}return(e=a).\u0275fac=function(i){return new(i||e)(t.rXU(B.iB),t.rXU(h.M),t.rXU(F.i))},e.\u0275cmp=t.VBU({type:e,selectors:[["azt-practice-box"]],inputs:{resultId:"resultId",webPage:"webPage",showLikeMobile:"showLikeMobile"},features:[t.Vt3],decls:3,vars:2,consts:[[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[4,"ngIf"],[3,"classStyle","allowTracking","adsPosition",4,"ngIf"],[1,"font-medium"],[2,"height","24px",3,"src"],[1,"mt-2","block",3,"changeLevelAndSubjectEvent"],["doneLoadingExam",""],[4,"ngIf","ngIfElse"],["emptyDataInFilter",""],[4,"ngFor","ngForOf"],["class","pt-3 clickable text-center link__color",3,"click",4,"ngIf"],[3,"classStyle","allowTracking","adsPosition"],[1,"box","px-4","py-4","mt-3","flex","clickable","hover:bg-gray-soft",3,"click"],[1,"w-16","h-20","flex-none","image-fit","border","border-slate-200","dark:border-darkmode-400","rounded-md","overflow-hidden"],[3,"src"],[1,"ml-4","w-full"],[1,"text-slate-500","text-xs","mt-1"],[1,"grid","grid-cols-12","gap-2"],[1,"col-span-12","text-slate-500","text-xs","mt-1","w-full","order-first",3,"ngClass"],["class","col-span-5 text-center py-1 px-2 rounded-full text-xs bg-success text-white font-medium mr-1","style","align-content: center",3,"ngClass",4,"ngIf"],["class","col-span-4 text-center py-1 px-2 rounded-full text-xs bg-pending text-white font-medium mr-1","style","align-content: center",3,"ngClass",4,"ngIf"],["class","col-span-8 text-center py-1 px-2 rounded-full text-xs bg-primary text-white font-medium","style","align-content: center",3,"ngClass",4,"ngIf"],[1,"col-span-12",3,"ngClass"],[1,"clickable","link__color","link__hover","font-medium",3,"click"],[1,"col-span-5","text-center","py-1","px-2","rounded-full","text-xs","bg-success","text-white","font-medium","mr-1",2,"align-content","center",3,"ngClass"],[1,"col-span-4","text-center","py-1","px-2","rounded-full","text-xs","bg-pending","text-white","font-medium","mr-1",2,"align-content","center",3,"ngClass"],[1,"col-span-8","text-center","py-1","px-2","rounded-full","text-xs","bg-primary","text-white","font-medium",2,"align-content","center",3,"ngClass"],[1,"pt-3","clickable","text-center","link__color",3,"click"],[1,"box","p-2","mt-3"]],template:function(i,s){if(1&i&&(t.DNE(0,xt,1,1,"azt-loading-effect",0),t.DNE(1,Ft,2,2,"ng-template",null,1,t.C5r)),2&i){const _=t.sdS(2);t.Y8G("ngIf",s.statusObj.loading)("ngIfElse",_)}},dependencies:[r.YU,r.Sq,r.bT,D.K,pt.O,Ct,A.wp,A.gt],encapsulation:2}),a})()}}]);