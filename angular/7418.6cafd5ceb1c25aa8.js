"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[7418],{37418:(z,Z,s)=>{s.r(Z),s.d(Z,{PaymentModule:()=>zt});var u=s(96814),o=s(56223),b=s(19347),g=s(21266),f=s(42753),v=s(37722),P=s(21494),T=s(25391),C=s(56731),O=s(84155),k=s(78217),L=s(24090),I=s(20553),U=s(82481),t=s(65879),y=s(78953),S=s(79998);let N=(()=>{class n{constructor(e,a){this.userService=e,this.redirectService=a}canActivate(e,a){return!(-1===a.url.indexOf("/return-order")&&!this.userService.isLogin())}canActivateChild(e,a){return this.canActivate(e,a)}canLoad(e){const a=`/${e.path}`;return!(-1===a.indexOf("/return-order")&&!this.userService.isLogin()&&(this.redirectService.redirectLoginByReturnUrl(a),1))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(y.U),t.LFG(S.z))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var r=s(37734),l=s(54384),c=s(97151),p=s(38228),x=s(43389),w=s(98129),E=s(28740),h=s(36727);function B(n,i){if(1&n&&t._UZ(0,"azt-loading-effect",4),2&n){const e=t.oxw(2);t.Q6J("currentStatusObj",e.statusObj)}}function Q(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"lang_payment_history_deposit_money_into_wallet")))}function M(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"span",26),t.NdJ("click",function(){t.CHM(e);const _=t.oxw().$implicit,d=t.oxw(4);return t.KtG(d.redirectToTakeTest(_.examHashId))}),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_payment_history_buying_exam"),": "),t.xp6(3),t.Oqu(e.examName)}}function J(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"lang_payment_history_withdraw_money")))}function j(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_payment_history_transfer"),": "),t.xp6(3),t.Oqu(e.relativeName)}}function q(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"lang_payment_history_donation_system")))}function H(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_payment_history_get_from_account"),": "),t.xp6(3),t.Oqu(e.relativeName)}}function Y(n,i){if(1&n&&(t.TgZ(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"span",20),t._uU(5),t.qZA()()(),t.TgZ(6,"div",21)(7,"span",22),t.YNc(8,Q,3,3,"span",23),t.YNc(9,M,5,4,"span",24),t.YNc(10,J,3,3,"span",23),t.YNc(11,j,5,4,"span",23),t.YNc(12,q,3,3,"span",23),t.YNc(13,H,5,4,"span",23),t.qZA(),t.TgZ(14,"span",25),t._uU(15),t.ALo(16,"formatFullDateTimeWithoutSecondByUserUnitPipe"),t.qZA()()()()),2&n){const e=i.$implicit,a=t.oxw(4);t.xp6(5),t.AsE("",a.parseIntAmount(e.amount),"",e.amount," azo"),t.xp6(3),t.Q6J("ngIf",0==e.type),t.xp6(1),t.Q6J("ngIf",1==e.type&&"EXAM"==e.productType&&e.productId),t.xp6(1),t.Q6J("ngIf",2==e.type),t.xp6(1),t.Q6J("ngIf",3==e.type),t.xp6(1),t.Q6J("ngIf",4==e.type),t.xp6(1),t.Q6J("ngIf",6==e.type),t.xp6(2),t.hij(" ",t.lcZ(16,9,e.createdAt)," ")}}function R(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10)(2,"p",11),t._uU(3),t.ALo(4,"mytranslate"),t.qZA(),t.TgZ(5,"p",12)(6,"a",13),t.NdJ("click",function(){t.CHM(e);const _=t.oxw(3);return t.KtG(_.exportExcelForPayment())}),t._uU(7),t.ALo(8,"mytranslate"),t.qZA()()(),t.TgZ(9,"div",14),t.YNc(10,Y,17,11,"div",15),t.qZA()()}if(2&n){const e=t.oxw(3);t.xp6(3),t.Oqu(t.lcZ(4,3,"lang_payment_history_transaction_history")),t.xp6(4),t.Oqu(t.lcZ(8,5,"lang_payment_history_export_excel")),t.xp6(3),t.Q6J("ngForOf",e.paymentHistories)}}function F(n,i){1&n&&(t.TgZ(0,"div",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_payment_history_transfer_null")," "))}function G(n,i){if(1&n&&(t.TgZ(0,"div",5)(1,"div",6),t.YNc(2,R,11,7,"div",7),t.YNc(3,F,3,3,"div",8),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngIf",0!=(null==e.paymentHistories?null:e.paymentHistories.length)),t.xp6(1),t.Q6J("ngIf",0==(null==e.paymentHistories?null:e.paymentHistories.length))}}function D(n,i){if(1&n&&(t.TgZ(0,"student-layout",1),t.YNc(1,B,1,1,"azt-loading-effect",2),t.YNc(2,G,4,2,"ng-template",null,3,t.W1O),t.qZA()),2&n){const e=t.MAs(3),a=t.oxw();t.Q6J("headerBackToLink","/student/classroom/0"),t.xp6(1),t.Q6J("ngIf",a.isLoading)("ngIfElse",e)}}function W(n,i){if(1&n&&t._UZ(0,"azt-loading-effect",4),2&n){const e=t.oxw(2);t.Q6J("currentStatusObj",e.statusObj)}}function K(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"lang_payment_history_deposit_money_into_wallet")))}function V(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"span",31),t.NdJ("click",function(){t.CHM(e);const _=t.oxw().$implicit,d=t.oxw(4);return t.KtG(d.redirectToTakeTest(_.examHashId))}),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_payment_history_buying_exam"),": "),t.xp6(3),t.Oqu(e.examName)}}function $(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"lang_payment_history_withdraw_money")))}function X(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_payment_history_transfer"),": "),t.xp6(3),t.Oqu(e.relativeName)}}function tt(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"lang_payment_history_donation_system")))}function et(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"span",32),t.NdJ("click",function(){t.CHM(e);const _=t.oxw().$implicit,d=t.oxw(4);return t.KtG(d.redirectToTestedList(_.examCategoryId,_.productId))}),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_payment_history_get_from_selling_exam"),": "),t.xp6(3),t.Oqu(e.examName)}}function nt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_payment_history_get_from_account"),": "),t.xp6(3),t.Oqu(e.relativeName)}}function ot(n,i){if(1&n&&(t.TgZ(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"span",20),t._uU(5),t.qZA()()(),t.TgZ(6,"div",21)(7,"span",22),t.YNc(8,K,3,3,"span",23),t.YNc(9,V,5,4,"span",29),t.YNc(10,$,3,3,"span",23),t.YNc(11,X,5,4,"span",23),t.YNc(12,tt,3,3,"span",23),t.YNc(13,et,5,4,"span",30),t.YNc(14,nt,5,4,"span",23),t.qZA(),t.TgZ(15,"span",25),t._uU(16),t.ALo(17,"formatFullDateTimeWithoutSecondByUserUnitPipe"),t.qZA()()()()),2&n){const e=i.$implicit,a=t.oxw(4);t.xp6(5),t.AsE("",a.parseIntAmount(e.amount),"",e.amount," azo"),t.xp6(3),t.Q6J("ngIf",0==e.type),t.xp6(1),t.Q6J("ngIf",1==e.type&&"EXAM"==e.productType&&e.productId),t.xp6(1),t.Q6J("ngIf",2==e.type),t.xp6(1),t.Q6J("ngIf",3==e.type),t.xp6(1),t.Q6J("ngIf",4==e.type),t.xp6(1),t.Q6J("ngIf",5==e.type&&"EXAM"==e.productType&&e.productId),t.xp6(1),t.Q6J("ngIf",6==e.type),t.xp6(2),t.hij(" ",t.lcZ(17,10,e.createdAt)," ")}}function at(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10)(2,"p",11),t._uU(3),t.ALo(4,"mytranslate"),t.qZA(),t.TgZ(5,"p",12)(6,"a",28),t.NdJ("click",function(){t.CHM(e);const _=t.oxw(3);return t.KtG(_.exportExcelForPayment())}),t._uU(7),t.ALo(8,"mytranslate"),t.qZA()()(),t.TgZ(9,"div",14),t.YNc(10,ot,18,12,"div",15),t.qZA()()}if(2&n){const e=t.oxw(3);t.xp6(3),t.Oqu(t.lcZ(4,3,"lang_payment_history_transaction_history")),t.xp6(4),t.Oqu(t.lcZ(8,5,"lang_payment_history_export_excel")),t.xp6(3),t.Q6J("ngForOf",e.paymentHistories)}}function it(n,i){1&n&&(t.TgZ(0,"div",27),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_payment_history_transfer_null")," "))}function st(n,i){if(1&n&&(t.TgZ(0,"div",5)(1,"div",6),t.YNc(2,at,11,7,"div",7),t.YNc(3,it,3,3,"div",8),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngIf",0!=(null==e.paymentHistories?null:e.paymentHistories.length)),t.xp6(1),t.Q6J("ngIf",0==(null==e.paymentHistories?null:e.paymentHistories.length))}}function rt(n,i){if(1&n&&(t.TgZ(0,"teacher-layout",1),t.YNc(1,W,1,1,"azt-loading-effect",2),t.YNc(2,st,4,2,"ng-template",null,3,t.W1O),t.qZA()),2&n){const e=t.MAs(3),a=t.oxw();t.Q6J("headerBackToLink","/admin/dashboard"),t.xp6(1),t.Q6J("ngIf",a.isLoading)("ngIfElse",e)}}let ct=(()=>{class n extends r.Q{exportExcelForPayment(){let e=this.commonService.createFileNameExportFile([this.excelFileName]);const a=this.exportExcelService.exportExcelForPayment(this.paymentHistories);this.shareFileFlutterService.shareFileWithBlob(a,e+".xlsx")}redirectToTestedList(e,a){this.commonService.myNavigation(null!=e?`/admin/testbank/exam-results-list/${e}/${a}/0`:`/admin/testbank/exam-results-list/0/${a}/0`)}redirectToTakeTest(e){this.commonService.myNavigation(`/de-thi/${e}`)}redirectToContentStore(){this.commonService.myNavigation("/admin/homework/content-store")}parseIntAmount(e){return Number(e)>0?"+":""}getData(){this.isLoading=!0,this.paymentHistoryService.apiPaymentHistoryGetObjsGet().subscribe(e=>{1==e.success?(this.isLoading=!1,this.paymentHistories=e.data?.objs??[]):this.showErrorSnack("lang_auto_khong_load_duoc_du_lieu")})}checkRoleUser(){this.userService.isTeacherRole()&&(this.isTeacherRole=!0)}ngOnInit(){this.getData(),this.commonService.translateMetaData({title:"lang_core_payment_history_title",description:"lang_core_payment_history_description",image:"lang_cms_test_image"}),this.checkRoleUser(),super.ngOnInit()}constructor(e,a,_,d){super(),this.userService=e,this.paymentHistoryService=a,this.shareFileFlutterService=_,this.exportExcelService=d,this.isLoading=!1,this.isTeacherRole=!1,this.excelFileName="lich_su_azo"}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.U),t.Y36(l.cy),t.Y36(c.g),t.Y36(p.L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment-history"]],features:[t.qOj],decls:2,vars:2,consts:[[3,"headerBackToLink",4,"ngIf"],[3,"headerBackToLink"],[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[1,"app","px-4","py-2",2,"max-width","1000px","margin","auto"],[1,"main","p-3"],["class","main-content mt-4",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"main-content","mt-4"],[1,"grid","grid-cols-12","gap-2"],[1,"content_text","col-span-6"],[1,"content_text","flex","justify-end","col-span-6",2,"color","#3c8dbc"],["azt-track-service","payment-history-lvIRzsNaCWe",3,"click"],[1,"content_body","grid","grid-cols-12"],["class","block col-span-12",4,"ngFor","ngForOf"],[1,"block","col-span-12"],[1,"notify__block"],[1,"w-32","left-col","flex","justify-center","items-center","ng-star-inserted","notify__class"],[1,"text-center","text-white","class-info","pt-2","pb-2"],[1,"text-azo"],[1,"notify__content"],[1,"notify__active"],[4,"ngIf"],["azt-track-service","payment-history-4nTkXeIDYtk","class","clickable",3,"click",4,"ngIf"],[1,"notify__time"],["azt-track-service","payment-history-4nTkXeIDYtk",1,"clickable",3,"click"],[1,"text-center"],["azt-track-service","payment-history-yHYAiyEevee",3,"click"],["azt-track-service","payment-history-N_rOE_wUcy1","class","clickable",3,"click",4,"ngIf"],["azt-track-service","payment-history-PsnrlpNd0UL","class","clickable",3,"click",4,"ngIf"],["azt-track-service","payment-history-N_rOE_wUcy1",1,"clickable",3,"click"],["azt-track-service","payment-history-PsnrlpNd0UL",1,"clickable",3,"click"]],template:function(e,a){1&e&&(t.YNc(0,D,4,3,"student-layout",0),t.YNc(1,rt,4,3,"teacher-layout",0)),2&e&&(t.Q6J("ngIf",!a.isTeacherRole),t.xp6(1),t.Q6J("ngIf",a.isTeacherRole))},dependencies:[u.sg,u.O5,x.l,w._,E.L,h.JV,h.$n],styles:[".main[_ngcontent-%COMP%]{border-width:0px;background-color:#ececec;border:none;border-radius:5px;box-shadow:0 0 5px #00000024}.block[_ngcontent-%COMP%]{padding-top:2px}.content__notifi[_ngcontent-%COMP%]{margin-top:20px}.content__title[_ngcontent-%COMP%]{text-transform:uppercase}.notify__block[_ngcontent-%COMP%]{display:flex;border-width:0px;background-color:#fff;border:none;border-radius:3px;box-shadow:0 0 6px #0000001f;margin-top:15px}.notify__class[_ngcontent-%COMP%]{max-width:100px;background-color:#00c0f0;border-radius:3px 0 0 3px/3px 0px 0px 3px}.notify__content[_ngcontent-%COMP%]{color:#000;padding:10px 0 10px 15px}.class__text[_ngcontent-%COMP%]{color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.notify__name[_ngcontent-%COMP%]{font-weight:700}.notify__time[_ngcontent-%COMP%]{display:block;margin-top:10px}"]}),n})();var m=function(n){return n.AZO_PACKAGE="AZO_PACKAGE",n.EXAM="EXAM",n.BUSINESS_PACKAGE="BUSINESS_PACKAGE",n.UPGRADE_PACKAGE="UPGRADE_PACKAGE",n.unknown="unknown",n}(m||{}),_t=s(54581);function pt(n,i){if(1&n&&(t.TgZ(0,"div",8)(1,"p",9),t._uU(2),t.ALo(3,"mytranslate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.hij("",t.lcZ(3,2,"lang_payment_business_package_business_email"),":"),t.xp6(3),t.Oqu(e.transactionBusiness.registerObj.email)}}function lt(n,i){if(1&n&&(t.TgZ(0,"div",7)(1,"div",8)(2,"p",9),t._uU(3),t.ALo(4,"mytranslate"),t.qZA(),t.TgZ(5,"p",10),t._uU(6),t.qZA()(),t.TgZ(7,"div",8)(8,"p",9),t._uU(9),t.ALo(10,"mytranslate"),t.qZA(),t.TgZ(11,"p",10),t._uU(12),t.qZA()(),t.YNc(13,pt,6,4,"div",13),t.TgZ(14,"div",14)(15,"p",9),t._uU(16),t.ALo(17,"mytranslate"),t.qZA(),t.TgZ(18,"p",10)(19,"a",15),t._uU(20),t.qZA()()()()),2&n){const e=t.oxw();t.xp6(3),t.hij("",t.lcZ(4,8,"lang_payment_business_package_business_name"),":"),t.xp6(3),t.Oqu(e.transactionBusiness.registerObj.businessName),t.xp6(3),t.hij("",t.lcZ(10,10,"lang_payment_business_package_business_phone"),":"),t.xp6(3),t.Oqu(e.transactionBusiness.registerObj.phone),t.xp6(1),t.Q6J("ngIf",e.transactionBusiness.registerObj.email),t.xp6(3),t.hij("",t.lcZ(17,12,"lang_payment_business_package_business_domain"),":"),t.xp6(3),t.Q6J("href","https://"+e.transactionBusiness.registerObj.domain+"/"+e.currentLanguage+"/auth/login?isFirstTime=1&access_token="+e.transactionBusiness.accessToken,t.LSH),t.xp6(1),t.hij(" https://",e.transactionBusiness.registerObj.domain," ")}}const ut=function(n,i){return{"text-success":n,"text-danger":i}};let mt=(()=>{class n extends r.Q{ngOnInit(){this.vnp_TxnRef=String(this.commonService.getMyQueryParam("vnp_TxnRef")),this.vnp_Amount=Number(this.commonService.getMyQueryParam("vnp_Amount"))/100,this.vnp_ResponseCode=String(this.commonService.getMyQueryParam("vnp_ResponseCode")),"00"==this.vnp_ResponseCode&&(this.successTransaction=!0),this.vnp_TransactionNo=String(this.commonService.getMyQueryParam("vnp_TransactionNo")),this.typeTransaction=this.commonService.getMyQueryParam("vnp_BankCode")??"";var e=String(this.commonService.getMyQueryParam("vnp_PayDate")),a=new Date(Number(e.substring(0,4)),Number(e.substring(4,6))-1,Number(e.substring(6,8)),Number(e.substring(8,10)),Number(e.substring(10,12)),Number(e.substring(12,14)),0);this.vnp_Second=a.getTime(),super.ngOnInit()}constructor(){super(),this.productType=m.unknown,this.currentLanguage=this.commonService.getCurrentLang(),this.EAztPaymentPackageType=m,this.vnp_TxnRef="",this.vnp_Amount=0,this.vnp_ResponseCode="",this.vnp_TransactionNo="",this.successTransaction=!1,this.typeTransaction="",this.vnp_Second=0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-vn-pay-transaction-box"]],inputs:{productType:"productType",transactionBusiness:"transactionBusiness"},features:[t.qOj],decls:41,vars:40,consts:[[1,"intro-y","pt-3","px-3"],[1,"text-center","pb-3","border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"mt-1","mb-2"],["strokeWidth","3",1,"w-12","h-12","flex-none",2,"width","32px !important","height","32px !important",3,"name"],[2,"font-weight","700","font-size","18px",3,"ngClass"],[1,"text-center","mt-2","mb-2"],[1,"text-md","text-primary",2,"font-weight","450"],[1,"mb-2"],[1,"mt-2","pb-2","flex","justify-between","border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"text-slate-600"],[1,"desc__text",2,"font-weight","450"],[1,"desc__text",2,"font-weight","450","text-transform","uppercase"],["class","mb-2",4,"ngIf"],["class","mt-2 pb-2 flex justify-between border-b border-slate-200/60 dark:border-darkmode-400",4,"ngIf"],[1,"mt-2","pb-2","flex","justify-between","flex-wrap","border-b","border-slate-200/60","dark:border-darkmode-400"],[2,"word-break","break-all",3,"href"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"lucide-icon",3),t.qZA(),t.TgZ(4,"h3",4),t._uU(5),t.ALo(6,"mytranslate"),t.ALo(7,"mytranslate"),t.qZA()(),t.TgZ(8,"div",5)(9,"p",6),t._uU(10),t.ALo(11,"mytranslate"),t.qZA()(),t.TgZ(12,"div",7)(13,"div",8)(14,"p",9),t._uU(15),t.ALo(16,"mytranslate"),t.qZA(),t.TgZ(17,"p",10),t._uU(18),t.ALo(19,"number"),t.ALo(20,"mytranslate"),t.qZA()(),t.TgZ(21,"div",8)(22,"p",9),t._uU(23),t.ALo(24,"mytranslate"),t.qZA(),t.TgZ(25,"p",11),t._uU(26),t.qZA()(),t.TgZ(27,"div",8)(28,"p",9),t._uU(29),t.ALo(30,"mytranslate"),t.qZA(),t.TgZ(31,"p",10),t._uU(32),t.qZA()(),t.TgZ(33,"div",8)(34,"p",9),t._uU(35),t.ALo(36,"mytranslate"),t.qZA(),t.TgZ(37,"p",10),t._uU(38),t.ALo(39,"formatFullDateTimeWithoutSecondByUserUnitPipe"),t.qZA()()(),t.YNc(40,lt,21,14,"div",12),t.qZA()),2&e&&(t.xp6(3),t.Akn("color:"+(a.successTransaction?"#10eb00":"#d21414")),t.s9C("name",a.successTransaction?"check-circle":"x-circle"),t.xp6(1),t.Q6J("ngClass",t.WLB(37,ut,a.successTransaction,!a.successTransaction)),t.xp6(1),t.hij(" ",a.successTransaction?t.lcZ(6,17,"lang_payment_return_buying_success"):t.lcZ(7,19,"lang_payment_return_buying_danger")," "),t.xp6(5),t.AsE("",t.lcZ(11,21,"lang_payment_return_code"),": ",a.vnp_TxnRef,""),t.xp6(5),t.hij("",t.lcZ(16,23,"lang_payment_return_payment_number"),":"),t.xp6(3),t.AsE("",t.lcZ(19,25,a.vnp_Amount)," ",t.lcZ(20,27,"lang_auto_vnd_upper"),""),t.xp6(5),t.hij("",t.lcZ(24,29,"lang_payment_return_method_payment"),":"),t.xp6(3),t.Oqu(a.typeTransaction),t.xp6(3),t.hij("",t.lcZ(30,31,"lang_payment_return_code_payment_vnpay"),":"),t.xp6(3),t.Oqu(a.vnp_TransactionNo),t.xp6(3),t.hij("",t.lcZ(36,33,"lang_payment_return_time_pay"),":"),t.xp6(3),t.Oqu(t.lcZ(39,35,a.vnp_Second)),t.xp6(2),t.Q6J("ngIf",a.transactionBusiness&&a.productType===a.EAztPaymentPackageType.BUSINESS_PACKAGE))},dependencies:[u.mk,u.O5,v.Nh5,u.JJ,h.JV,h.$n],styles:[".payment-box[_ngcontent-%COMP%]{margin:20px auto auto;border:1px solid #d3d3d3;background-color:#fff;max-width:350px;border-radius:5px;align-items:center;flex-direction:column;padding:20px 0}.payment-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100%;float:left;padding:0 15px}.body__about[_ngcontent-%COMP%]{padding-top:20px;width:100%;border-top:1px solid #d3d3d3;justify-content:center}"]}),n})();var dt=s(88489);const A=function(n){return[n]};function gt(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"a",4),t.ALo(2,"navigationLocalize"),t.ALo(3,"navigationLocalizeForQueryString"),t._uU(4),t.ALo(5,"mytranslate"),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("routerLink",t.VKq(9,A,t.lcZ(2,3,"/auth/login")))("queryParams",t.lcZ(3,5,"?return_url=/"+e.currentLanguage+"/payment/convert-product/"+e.currentUserToken+"&backTo="+e.backTo+"&user_click=true")),t.xp6(3),t.hij(" ",t.lcZ(5,7,"lang_payment_return_continue_buy")," ")}}function yt(n,i){if(1&n&&(t.TgZ(0,"a",5),t.ALo(1,"navigationLocalize"),t.ALo(2,"navigationLocalizeForQueryString"),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("routerLink",t.VKq(9,A,t.lcZ(1,3,e.backTo)))("queryParams",t.lcZ(2,5,e.backTo)),t.xp6(3),t.hij(" ",t.lcZ(4,7,"lang_payment_return_continue_buy")," ")}}function xt(n,i){if(1&n&&(t.ynx(0),t.YNc(1,gt,6,11,"ng-container",2),t.YNc(2,yt,5,11,"ng-template",null,3,t.W1O),t.BQk()),2&n){const e=t.MAs(3),a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.isAnonymousRole)("ngIfElse",e)}}function ht(n,i){if(1&n&&(t.TgZ(0,"div")(1,"a",7),t._uU(2),t.ALo(3,"mytranslate"),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("href","https://"+e.transactionBusiness.registerObj.domain+"/"+e.currentLanguage+"/auth/login?isFirstTime=1&access_token="+e.transactionBusiness.accessToken,t.LSH),t.xp6(1),t.hij(" ",t.lcZ(3,2,"lang_payment_business_start_join")," ")}}function ft(n,i){if(1&n&&(t.TgZ(0,"a",5),t.ALo(1,"navigationLocalize"),t.ALo(2,"navigationLocalizeForQueryString"),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("routerLink",t.VKq(9,A,t.lcZ(1,3,e.backTo)))("queryParams",t.lcZ(2,5,e.backTo)),t.xp6(3),t.hij(" ",t.lcZ(4,7,"lang_payment_return_continue_buy")," ")}}function vt(n,i){if(1&n&&(t.ynx(0),t.YNc(1,ht,4,4,"div",2),t.YNc(2,ft,5,11,"ng-template",null,6,t.W1O),t.BQk()),2&n){const e=t.MAs(3),a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.successTransaction&&a.transactionBusiness)("ngIfElse",e)}}function Tt(n,i){1&n&&(t.TgZ(0,"div")(1,"a",8),t.ALo(2,"navigationLocalize"),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("routerLink",t.VKq(6,A,t.lcZ(2,2,"/business/business-configs/0"))),t.xp6(2),t.hij(" ",t.lcZ(4,4,"lang_payment_return_continue_buy")," "))}function At(n,i){if(1&n&&(t.TgZ(0,"a",5),t.ALo(1,"navigationLocalize"),t.ALo(2,"navigationLocalizeForQueryString"),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("routerLink",t.VKq(9,A,t.lcZ(1,3,e.backTo)))("queryParams",t.lcZ(2,5,e.backTo)),t.xp6(3),t.hij(" ",t.lcZ(4,7,"lang_payment_return_continue_buy")," ")}}function Zt(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Tt,5,8,"div",2),t.YNc(2,At,5,11,"ng-template",null,6,t.W1O),t.BQk()),2&n){const e=t.MAs(3),a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.successTransaction)("ngIfElse",e)}}let bt=(()=>{class n extends r.Q{ngOnInit(){super.ngOnInit(),this.isAnonymousRole=this.userService.isNotLoginOrIsAnonymous();let e=this.userService.getUserObj();this.currentUserToken=e.rememberToken??"","00"==String(this.commonService.getMyQueryParam("vnp_ResponseCode"))&&(this.successTransaction=!0)}constructor(e,a){super(),this.userService=e,this.sAztBrowserStorageService=a,this.backTo="",this.productType=m.unknown,this.isAnonymousRole=!1,this.EAztPaymentPackageType=m,this.successTransaction=!1,this.currentLanguage=this.commonService.getCurrentLang(),this.currentUserToken=""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.U),t.Y36(dt.n))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment-product-info-box"]],inputs:{backTo:"backTo",transactionBusiness:"transactionBusiness",productType:"productType"},features:[t.qOj],decls:4,vars:3,consts:[[1,"mt-3","w-full","text-center"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["normalTransaction",""],[1,"btn","w-40","btn-primary","mx-auto",3,"routerLink","queryParams"],["azt-track-service","payment-return-Pyo6TbUnsBP",1,"btn","w-40","btn-primary","mx-auto",3,"routerLink","queryParams"],["errorTransaction",""],[1,"btn","w-60","btn-primary","mx-auto","block",3,"href"],[1,"btn","w-60","btn-primary","mx-auto","block",3,"routerLink"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,xt,4,2,"ng-container",1),t.YNc(2,vt,4,2,"ng-container",1),t.YNc(3,Zt,4,2,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",a.productType!=a.EAztPaymentPackageType.BUSINESS_PACKAGE&&a.productType!=a.EAztPaymentPackageType.UPGRADE_PACKAGE),t.xp6(1),t.Q6J("ngIf",a.productType==a.EAztPaymentPackageType.BUSINESS_PACKAGE),t.xp6(1),t.Q6J("ngIf",a.productType==a.EAztPaymentPackageType.UPGRADE_PACKAGE))},dependencies:[g.rH,u.O5,h.Jy,h.U9,h.JV],styles:[".payment-box[_ngcontent-%COMP%]{margin:20px auto auto;border:1px solid #d3d3d3;background-color:#fff;max-width:350px;border-radius:5px;align-items:center;flex-direction:column;padding:20px 0}.payment-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100%;float:left;padding:0 15px}.body__about[_ngcontent-%COMP%]{padding-top:20px;width:100%;border-top:1px solid #d3d3d3;justify-content:center}"]}),n})();function Pt(n,i){if(1&n&&(t.TgZ(0,"teacher-layout",3)(1,"div",4)(2,"div",5),t.GkF(3,6),t.qZA()()()),2&n){const e=t.oxw(),a=t.MAs(4);t.Q6J("headerBackToLink",e.backTo),t.xp6(3),t.Q6J("ngTemplateOutlet",a)}}function Ct(n,i){if(1&n&&(t.TgZ(0,"student-layout",3)(1,"div",4)(2,"div",5),t.GkF(3,6),t.qZA()()()),2&n){const e=t.oxw(),a=t.MAs(4);t.Q6J("headerBackToLink",e.backTo),t.xp6(3),t.Q6J("ngTemplateOutlet",a)}}function Ot(n,i){if(1&n&&(t.TgZ(0,"auth-layout"),t.GkF(1,6),t.qZA()),2&n){t.oxw();const e=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",e)}}function kt(n,i){if(1&n&&t._UZ(0,"azt-loading-effect",9),2&n){const e=t.oxw(2);t.Q6J("currentStatusObj",e.statusObj)}}function Lt(n,i){if(1&n&&t._UZ(0,"app-vn-pay-transaction-box",10)(1,"app-payment-product-info-box",11),2&n){const e=t.oxw(2);t.Q6J("productType",e.productType)("transactionBusiness",e.transactionBusiness),t.xp6(1),t.Q6J("productType",e.productType)("transactionBusiness",e.transactionBusiness)("backTo",e.backTo)}}function It(n,i){if(1&n&&(t.YNc(0,kt,1,1,"azt-loading-effect",7),t.YNc(1,Lt,2,5,"ng-template",null,8,t.W1O)),2&n){const e=t.MAs(2),a=t.oxw();t.Q6J("ngIf",a.statusObj.loading)("ngIfElse",e)}}let Ut=(()=>{class n extends r.Q{getTransactionBusinessInfo(){const e=Number(this.getMyQueryParam("vnp_TxnRef")),a=this.getMyQueryParam("azHash")??"";this.initStatusObj(),this.waitDestroy(this.productOrderService.apiProductOrderGetTransactionBusinessStatusGet(e,a).subscribe(_=>{1===_.success?(this.transactionBusiness=_.data,this.stopStatusObj()):this.errorStatusObj(_.message??"",!0)}))}ngOnInit(){super.ngOnInit(),this.currentRole="teacher"==this.commonService.getMyQueryParam("userRole")?"TEACHER":"STUDENT",this.currentRole=this.userService.isLogin()?this.currentRole:"NOT_LOGIN";let e=this.commonService.getMyQueryParam("backTo");this.backTo=e||("TEACHER"==this.currentRole?"/admin/dashboard":"/student/classroom/0");let a=this.commonService.getEnumTypeWithDefault(m,this.commonService.getMyQueryParam("productType")?.toUpperCase()??"",m.unknown);this.productType=a,this.productType==m.BUSINESS_PACKAGE&&this.getTransactionBusinessInfo(),this.commonService.translateMetaData({title:"lang_core_payment_return_title",description:"lang_core_payment_return_description",image:"lang_cms_test_image"})}constructor(e,a){super(),this.userService=e,this.productOrderService=a,this.currentRole="NOT_LOGIN",this.backTo="",this.productType=m.unknown}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.U),t.Y36(l.pG))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment-return"]],features:[t.qOj],decls:5,vars:3,consts:[[3,"headerBackToLink",4,"ngIf"],[4,"ngIf"],["returnPaymentInfo",""],[3,"headerBackToLink"],[1,"container","mt-5"],[1,"box","mx-auto","pb-3",2,"max-width","500px"],[3,"ngTemplateOutlet"],[3,"currentStatusObj",4,"ngIf","ngIfElse"],["doneLoading",""],[3,"currentStatusObj"],[3,"productType","transactionBusiness"],[3,"productType","transactionBusiness","backTo"]],template:function(e,a){1&e&&(t.YNc(0,Pt,4,2,"teacher-layout",0),t.YNc(1,Ct,4,2,"student-layout",0),t.YNc(2,Ot,2,1,"auth-layout",1),t.YNc(3,It,3,2,"ng-template",null,2,t.W1O)),2&e&&(t.Q6J("ngIf","TEACHER"==a.currentRole),t.xp6(1),t.Q6J("ngIf","STUDENT"==a.currentRole),t.xp6(1),t.Q6J("ngIf","NOT_LOGIN"==a.currentRole))},dependencies:[u.O5,u.tP,x.l,w._,_t.J,E.L,mt,bt],encapsulation:2}),n})();var St=s(8140);function Nt(n,i){if(1&n&&t._UZ(0,"azt-loading-effect",1),2&n){const e=t.oxw();t.Q6J("currentStatusObj",e.statusObj)}}const wt=[{path:"",canActivate:[N],children:[{path:"return-order",component:Ut},{path:"history",component:ct},{path:"convert-product/:convert_order",component:(()=>{class n extends r.Q{convertProductToCurrentUser(){this.initStatusObj();let a={token:this.commonService.getMyParam(this.activeRoute,"convert_order")??""};this.waitDestroy(this.frontExamService.apiFrontExamMoveAnonymousTransactionsPost(a).subscribe(_=>{_.success||this.errorStatusObj(_.message,!0),this.stopStatusObj(),this.commonService.myNavigation(this.backTo)}))}ngOnInit(){super.ngOnInit();let e=this.commonService.getMyQueryParam("backTo");this.backTo=e||"/student/classroom/0",this.convertProductToCurrentUser()}constructor(e,a,_,d){super(),this.activeRoute=e,this.userService=a,this.frontExamService=_,this.productOrderService=d,this.backTo=""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.gz),t.Y36(y.U),t.Y36(St.Tg),t.Y36(l.pG))},n.\u0275cmp=t.Xpm({type:n,selectors:[["azt-convert-product-user"]],features:[t.qOj],decls:1,vars:1,consts:[[3,"currentStatusObj",4,"ngIf"],[3,"currentStatusObj"]],template:function(e,a){1&e&&t.YNc(0,Nt,1,1,"azt-loading-effect",0),2&e&&t.Q6J("ngIf",a.statusObj.loading)},dependencies:[u.O5,x.l],encapsulation:2}),n})()}]}];let Et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(wt),g.Bz,U.fQ]}),n})(),zt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[{provide:f.f8,useValue:I.N.azt_tiny_mce_script_src}],imports:[g.Bz,u.ez,C.j,f.Z_,o.u5,o.UX,b.Is,O.Z,P.xC,T.QG,Et,L.W,k.d,v.qyJ.pick(v.ciZ)]}),n})()},54581:(z,Z,s)=>{s.d(Z,{J:()=>N});var u=s(37734),o=s(65879),b=s(88489),g=s(21266),f=s(96814),v=s(24097),P=s(69198),T=s(36727);function C(r,l){if(1&r&&(o.TgZ(0,"div",6),o.GkF(1,7),o.qZA()),2&r){o.oxw();const c=o.MAs(6);o.xp6(1),o.Q6J("ngTemplateOutlet",c)}}function O(r,l){if(1&r&&(o.TgZ(0,"div",6),o.GkF(1,7),o.qZA()),2&r){o.oxw();const c=o.MAs(8);o.xp6(1),o.Q6J("ngTemplateOutlet",c)}}function k(r,l){1&r&&o.Hsn(0)}function L(r,l){if(1&r){const c=o.EpF();o.TgZ(0,"button",20),o.NdJ("click",function(){o.CHM(c);const x=o.oxw(2);return o.KtG(x.switchModeUI("dark"))}),o.O4$(),o.TgZ(1,"svg",21),o._UZ(2,"path",22),o.qZA(),o.kcU(),o.TgZ(3,"span",23),o._uU(4),o.ALo(5,"mytranslate"),o.qZA()()}2&r&&(o.xp6(4),o.Oqu(o.lcZ(5,1,"lang_auto_che_de_toi")))}function I(r,l){if(1&r){const c=o.EpF();o.TgZ(0,"button",24),o.NdJ("click",function(){o.CHM(c);const x=o.oxw(2);return o.KtG(x.switchModeUI("light"))}),o.O4$(),o.TgZ(1,"svg",21),o._UZ(2,"circle",25)(3,"path",26)(4,"path",27)(5,"path",28)(6,"path",29)(7,"path",30)(8,"path",31)(9,"path",32)(10,"path",33),o.qZA(),o.kcU(),o.TgZ(11,"span"),o._uU(12),o.ALo(13,"mytranslate"),o.qZA()()}2&r&&(o.xp6(12),o.Oqu(o.lcZ(13,1,"lang_auto_che_de_sang")))}const U=function(r){return[r]};function t(r,l){if(1&r&&(o.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"a",11),o.ALo(4,"navigationLocalize"),o._UZ(5,"img",12),o.ALo(6,"getLinkLogo"),o.qZA()(),o.TgZ(7,"div",13),o._UZ(8,"azt-switch-language"),o.qZA(),o.TgZ(9,"div",14),o.YNc(10,L,6,3,"button",15),o.YNc(11,I,14,3,"button",16),o.qZA()(),o.TgZ(12,"div",17)(13,"div",18)(14,"div",19),o.GkF(15,7),o.qZA()()()()),2&r){const c=o.oxw(),p=o.MAs(4);o.xp6(3),o.Q6J("routerLink",o.VKq(13,U,o.lcZ(4,9,"/auth/login"))),o.xp6(2),o.Q6J("src",o.lcZ(6,11,"bigLogo"),o.LSH),o.xp6(5),o.Q6J("ngIf","light"==c.modeUI),o.xp6(1),o.Q6J("ngIf","dark"==c.modeUI),o.xp6(2),o.Akn("max-width:"+c.maxWidth),o.Tol(c.contentBoxClass),o.xp6(2),o.Q6J("ngTemplateOutlet",p)}}function y(r,l){if(1&r&&(o.TgZ(0,"div",8)(1,"div",17)(2,"div",18)(3,"div",19),o.GkF(4,7),o.qZA()()()()),2&r){const c=o.oxw(),p=o.MAs(4);o.xp6(2),o.Akn("max-width:"+c.maxWidth),o.Tol(c.contentBoxClass),o.xp6(2),o.Q6J("ngTemplateOutlet",p)}}const S=["*"];let N=(()=>{class r extends u.Q{switchModeUI(c){let p=document.getElementById("azota-app-html");p&&(this.modeUI=c,this.browserStorageService.saveStorage("mode_ui",this.modeUI),"light"==this.modeUI?(p.classList.remove("dark"),p.classList.add("light")):(p.classList.remove("light"),p.classList.add("dark")))}ngOnInit(){super.ngOnInit(),this.modeUI=""==this.browserStorageService.getStorage("mode_ui")?"light":this.browserStorageService.getStorage("mode_ui")??"light",this.switchModeUI(this.modeUI),this.stopStatusObj()}constructor(c){super(),this.browserStorageService=c,this.maxWidth="500px",this.contentBoxClass="p-5",this.modeUI="",this.initStatusObj()}}return r.\u0275fac=function(c){return new(c||r)(o.Y36(b.n))},r.\u0275cmp=o.Xpm({type:r,selectors:[["auth-layout"]],inputs:{maxWidth:"maxWidth",contentBoxClass:"contentBoxClass"},features:[o.qOj],ngContentSelectors:S,decls:11,vars:2,consts:[[1,"azt-body",2,"padding","0"],["class","flex",4,"ngIf"],["BodyContentTpl",""],["notEmbedViewTpl",""],["embedViewTpl",""],[1,"fixed","left-0","bottom-0","p-5","pb-8","azt-hidden"],[1,"flex"],[3,"ngTemplateOutlet"],[1,"content","relative",2,"padding","0","border-radius","0"],[1,"top-bar","py-2","px-3",2,"height","auto","z-index","0","border","none"],[1,"mr-auto"],["azt-track-service","auth-layout-Il3suLG89",3,"routerLink"],["width","95px",3,"src"],[1,"mr-3"],[1,"mr-1"],["azt-track-service","auth-layout-JExDIjLZ0q","class","btn btn-transparent lg:text-slate-500",3,"click",4,"ngIf"],["azt-track-service","auth-layout-g8PYsmzs4T","class","btn btn-transparent lg:text-slate-500",3,"click",4,"ngIf"],[1,"p-5","flex","items-center","w-full","content-auth-layout","mt-10"],[1,"box","mx-auto","w-full"],[1,"azt-content"],["azt-track-service","auth-layout-JExDIjLZ0q",1,"btn","btn-transparent","lg:text-slate-500",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","w-5","h-5","mr-2"],["d","M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"],[1,""],["azt-track-service","auth-layout-g8PYsmzs4T",1,"btn","btn-transparent","lg:text-slate-500",3,"click"],["cx","12","cy","12","r","4"],["d","M12 2v2"],["d","M12 20v2"],["d","m4.93 4.93 1.41 1.41"],["d","m17.66 17.66 1.41 1.41"],["d","M2 12h2"],["d","M20 12h2"],["d","m6.34 17.66-1.41 1.41"],["d","m19.07 4.93-1.41 1.41"]],template:function(c,p){1&c&&(o.F$t(),o.TgZ(0,"div",0),o.YNc(1,C,2,1,"div",1),o.YNc(2,O,2,1,"div",1),o.qZA(),o.YNc(3,k,1,0,"ng-template",null,2,o.W1O),o.YNc(5,t,16,15,"ng-template",null,3,o.W1O),o.YNc(7,y,5,5,"ng-template",null,4,o.W1O),o.TgZ(9,"div",5),o._UZ(10,"header-setting-color"),o.qZA()),2&c&&(o.xp6(1),o.Q6J("ngIf",!p.isMobileWebView&&!p.statusObj.loading),o.xp6(1),o.Q6J("ngIf",p.isMobileWebView&&!p.statusObj.loading))},dependencies:[g.rH,f.O5,f.tP,v.e,P.q,T.Jy,T.JV,T.LI],encapsulation:2}),r})()}}]);