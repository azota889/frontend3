"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[2863],{11002:(I,f,d)=>{d.d(f,{$:()=>j});var b=d(59640),m=d(48891);const e=["*"];let j=(()=>{var g;class v extends b.H{constructor(){super(...arguments),this.colorBackground="",this.defaultHeight="45px",this.fixToTopWidth=0,this.fixToTopTop=0}onWindowScroll(){let c=document.querySelector(".azt-content"),t=document.getElementById("flexed-on-top"),l=document.getElementById("position-dev")?.getBoundingClientRect();if(!c||!t||!l)return;let r=window.pageYOffset,u=l.top,T=u<-50;if(this.fixToTopWidth=l.width,this.fixToTopTop=l.top,T){t.style.position="fixed",t.style.zIndex="9999",t.style.height=this.defaultHeight,t.style.right=this.isMobileWebView?"0":"12px",t.style.background=this.colorBackground,t.style.justifyContent="end";let C=c.getBoundingClientRect().width;this.isMobileDevice?(t.style.top="62px",t.style.padding="6px 15px",t.style.width=(C+32).toString()+"px"):(t.style.top="0",t.style.padding="6px 22px",t.style.width=(C+44).toString()+"px")}else(0==r||0==u)&&(t.style.position="",t.style.top="",t.style.right="",t.style.zIndex="",t.style.height="",t.style.padding="",t.style.background="",t.style.width="",t.style.justifyContent="")}}return(g=v).\u0275fac=(()=>{let O;return function(t){return(O||(O=m.xGo(g)))(t||g)}})(),g.\u0275cmp=m.VBU({type:g,selectors:[["flexed-on-the-top"]],hostBindings:function(c,t){1&c&&m.bIt("scroll",function(r){return t.onWindowScroll(r)},!1,m.tSv)},inputs:{colorBackground:"colorBackground",defaultHeight:"defaultHeight"},features:[m.Vt3],ngContentSelectors:e,decls:3,vars:0,consts:[["id","position-dev"],["id","flexed-on-top",1,"flex","flexed-on-top"]],template:function(c,t){1&c&&(m.NAR(),m.nrm(0,"div",0),m.j41(1,"div",1),m.SdG(2),m.k0s())},encapsulation:2}),v})()},2433:(I,f,d)=>{d.d(f,{h:()=>j});var b=d(48891),m=d(85710),e=d(17776);let j=(()=>{var g;class v{constructor(){this.subscriptions=new m.yU,this.aiElearningService=(0,b.WQX)(e.T5),this.cacheData=[]}getKnowledgeByApi(c,t,l,r,u,T){let C=this.getCacheKey(c,t,l,r),w=this.cacheData.find(h=>h.cacheKey==C);if(null!=w)return u(w.nodes);this.subscriptions.add(this.aiElearningService.aiApiV1ElearningGetKnowledgeTreeGet(c,t,l,r||void 0).subscribe({next:h=>{this.cacheData.push({cacheKey:C,nodes:h.nodes??[]}),u(h.nodes??[])},error:h=>T(h)}))}getObjByObjectiveId(c,t){for(var l of c){if(l.objectiveId==t)return l;let r=this.getObjByObjectiveId(l.children,t);if(null!=r)return r}}getObjById(c,t){for(var l of c){if(l.id==t)return l;let r=this.getObjById(l.children,t);if(null!=r)return r}}getObjByKnowledgeIdOrObjectiveId(c,t,l){for(var r of c){if(r.knowledgeId==t||r.objectiveId==l)return r;let u=this.getObjByKnowledgeIdOrObjectiveId(r.children,t,l);if(null!=u)return u}}getAllObjectiveObjs(c,t){return c.forEach(l=>{l.objectiveId&&t.push({id:l.objectiveId,name:l.title,questionHistories:[]}),l.children.length&&(t=t.concat(this.getAllObjectiveObjs(l.children,[])))}),t}getCacheKey(c,t,l,r){return`${c}_${t}_${l?"true":"false"}_${r??0}`}ngOnDestroy(){this.subscriptions.unsubscribe()}}return(g=v).\u0275fac=function(c){return new(c||g)},g.\u0275prov=b.jDH({token:g,factory:g.\u0275fac,providedIn:"root"}),v})()},36318:(I,f,d)=>{d.d(f,{G:()=>G});var b=d(89163),m=d(33887),e=d(48891),j=d(2915),g=d(32099),v=d(50334),O=d(2433),c=d(54460),t=d(15343),l=d(18718),r=d(76975);const u=n=>({nodeObjs:n}),T=(n,a)=>({"text-pending":n," link-color-hover":a});function C(n,a){if(1&n&&e.nrm(0,"azt-loading-effect",3),2&n){const i=e.XpG();e.Y8G("currentStatusObj",i.statusObj)}}function w(n,a){1&n&&e.eu8(0)}function h(n,a){if(1&n&&(e.j41(0,"table")(1,"tbody"),e.DNE(2,w,1,0,"ng-container",4),e.k0s()()),2&n){const i=e.XpG(),o=e.sdS(4);e.R7$(2),e.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",e.eq3(2,u,i.nodeObjs))}}function K(n,a){1&n&&e.nrm(0,"lucide-icon",13)}function z(n,a){1&n&&e.nrm(0,"lucide-icon",14)}function S(n,a){if(1&n&&(e.j41(0,"i"),e.DNE(1,K,1,0,"lucide-icon",11)(2,z,1,0,"lucide-icon",12),e.k0s()),2&n){const i=e.XpG().$implicit;e.R7$(),e.Y8G("ngIf",i.isExpand),e.R7$(),e.Y8G("ngIf",!i.isExpand)}}function A(n,a){1&n&&(e.j41(0,"i"),e.nrm(1,"lucide-icon",15),e.k0s())}function F(n,a){1&n&&e.eu8(0)}function E(n,a){if(1&n&&(e.qex(0),e.DNE(1,F,1,0,"ng-container",4),e.bVm()),2&n){const i=e.XpG().$implicit;e.XpG(3);const o=e.sdS(4);e.R7$(),e.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",e.eq3(2,u,i.children))}}function B(n,a){if(1&n){const i=e.RV6();e.qex(0),e.j41(1,"tr",7)(2,"td")(3,"div",8),e.bIt("click",function(){const s=e.eBV(i).$implicit,p=e.XpG(3);return e.Njj(p.clickToNode(s))}),e.DNE(4,S,3,2,"i",5)(5,A,2,0,"i",5),e.j41(6,"label",9),e.nrm(7,"span",10),e.nI1(8,"mathJaxContent"),e.nI1(9,"async"),e.nI1(10,"safeContentQuestion"),e.k0s()()()(),e.DNE(11,E,2,4,"ng-container",5),e.bVm()}if(2&n){const i=a.$implicit;e.R7$(),e.Y8G("hidden",!i.isShow),e.R7$(),e.xc7("padding-left",14*(i.level+1),"px"),e.R7$(),e.Y8G("ngClass",e.l_i(14,T,i.isSelected,!i.isSelected)),e.R7$(),e.Y8G("ngIf",i.children.length),e.R7$(),e.Y8G("ngIf",!i.children.length),e.R7$(2),e.Y8G("innerHTML",e.bMT(10,12,e.bMT(9,10,e.bMT(8,8,"L"+(i.level+1)+". "+i.text))),e.npT),e.R7$(4),e.Y8G("ngIf",i.isExpand)}}function D(n,a){if(1&n&&(e.qex(0),e.DNE(1,B,12,17,"ng-container",6),e.bVm()),2&n){const i=a.$implicit;e.R7$(),e.Y8G("ngForOf",i)}}function k(n,a){if(1&n&&e.DNE(0,D,2,1,"ng-container",5),2&n){const i=a.nodeObjs,o=e.XpG();e.Y8G("ngIf",o.asTemplateDataObj(i))}}let Q=(()=>{var n;class a extends v.C{constructor(){super(...arguments),this.allowSelectKnowledgeOrObjective="only_objective",this.selectKnowledgeOrObjectiveEvent=new e.bkB,this.nodeObjs=[],this.sAztKnowledgeObjectiveService=(0,e.WQX)(O.h)}clickToNode(o){return"only_objective"==this.allowSelectKnowledgeOrObjective&&o.data.objectiveId||"knowledge_or_objective"==this.allowSelectKnowledgeOrObjective&&(o.data.knowledgeId||o.data.objectiveId)?this.selectKnowledgeOrObjectiveEvent.emit(o.data):void(o.isExpand?this.collapse(o):this.expand(o))}asTemplateDataObj(o){return o}initData(o,s,p){this.initStatusObj(),this.sAztKnowledgeObjectiveService.getKnowledgeByApi(o,s,!1,p,_=>{this.nodeObjs=this.standardTreeNodes(_,0),this.stopStatusObj()},_=>this.errorStatusObj(_,!0))}standardTreeNodes(o,s){let p=[];return o.forEach(_=>{let x=!1;this.selectedObj?.knowledgeId&&_.knowledgeId==this.selectedObj.knowledgeId&&(x=!0),this.selectedObj?.objectiveId&&_.objectiveId==this.selectedObj.objectiveId&&(x=!0);let y={level:s,typeNode:_.objectiveId?"objective":"knowledge",isExpand:!0,isShow:!0,isSelected:x,text:_.title,data:{..._,children:[]},children:[]};y.children=this.standardTreeNodes(_.children,s+1),p.push(y)}),p}ngOnChanges(o){o.searchContent&&this.searchByText(this.searchContent??"")}ngOnInit(){super.ngOnInit(),this.initData(this.levelId,this.subjectId,this.bookId)}}return(n=a).\u0275fac=(()=>{let i;return function(s){return(i||(i=e.xGo(n)))(s||n)}})(),n.\u0275cmp=e.VBU({type:n,selectors:[["coazt-knowledge-objective-tree-for-common-question"]],inputs:{levelId:"levelId",subjectId:"subjectId",bookId:"bookId",selectedObj:"selectedObj",searchContent:"searchContent",allowSelectKnowledgeOrObjective:"allowSelectKnowledgeOrObjective"},outputs:{selectKnowledgeOrObjectiveEvent:"selectKnowledgeOrObjectiveEvent"},features:[e.Vt3,e.OA$],decls:5,vars:2,consts:[["doneLoading",""],["recursiveListTmpl",""],[3,"currentStatusObj",4,"ngIf","ngIfElse"],[3,"currentStatusObj"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"hidden"],[1,"clickable",3,"click","ngClass"],[1,"form-check-label",2,"line-height","1.5"],[3,"innerHTML"],["name","chevron-down","size","14",4,"ngIf"],["name","chevron-right","size","14",4,"ngIf"],["name","chevron-down","size","14"],["name","chevron-right","size","14"],["name","dot","size","14"]],template:function(o,s){if(1&o&&e.DNE(0,C,1,1,"azt-loading-effect",2)(1,h,3,4,"ng-template",null,0,e.C5r)(3,k,1,1,"ng-template",null,1,e.C5r),2&o){const p=e.sdS(2);e.Y8G("ngIf",s.statusObj.loading)("ngIfElse",p)}},dependencies:[c.YU,c.Sq,c.bT,c.T3,t.WGl,l.K,c.Jj,r.km,r.ep],encapsulation:2}),a})(),G=(()=>{var n;class a extends m._{searchByText(o){this.searchContent=o}selectKnowledgeOrObjective(o){this.dialogRef.close(o)}btnCloseDialog(){this.dialogRef.close(void 0)}constructor(o,s){super(s,o),this.dialogRef=o,this.data=s}}return(n=a).\u0275fac=function(o){return new(o||n)(e.rXU(b.CP,8),e.rXU(b.Vh,8))},n.\u0275cmp=e.VBU({type:n,selectors:[["coazt-knowledge-objective-dialog-for-common-question"]],features:[e.Vt3],decls:12,vars:14,consts:[[1,"box"],[1,"border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"box","p-3"],[1,"pb-3"],[3,"onSearch","isServerSearch","placeholder"],[3,"minHeight"],[3,"selectKnowledgeOrObjectiveEvent","levelId","subjectId","bookId","selectedObj","searchContent","allowSelectKnowledgeOrObjective"],[1,"text-right","border-t","border-slate-200","dark:border-darkmode-400","p-3"],[1,"btn","btn-secondary","w-24",3,"click"]],template:function(o,s){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"azt-search-box",4),e.nI1(5,"mytranslate"),e.bIt("onSearch",function(_){return s.searchByText(_.searchObj)}),e.k0s()(),e.j41(6,"azt-mat-dialog-content",5)(7,"coazt-knowledge-objective-tree-for-common-question",6),e.bIt("selectKnowledgeOrObjectiveEvent",function(_){return s.selectKnowledgeOrObjective(_)}),e.k0s()()(),e.j41(8,"div",7)(9,"button",8),e.bIt("click",function(){return s.btnCloseDialog()}),e.EFF(10),e.nI1(11,"mytranslate"),e.k0s()()()()),2&o&&(e.R7$(4),e.Y8G("isServerSearch",!1)("placeholder",e.bMT(5,10,"lang_common_search_by_name")),e.R7$(2),e.Y8G("minHeight","calc(var(--vh, 1vh) * 100 - 300px)"),e.R7$(),e.Y8G("levelId",s.data.levelId)("subjectId",s.data.subjectId)("bookId",s.data.bookId)("selectedObj",s.data.selectedObj)("searchContent",null==s.searchContent?null:s.searchContent.searchContent)("allowSelectKnowledgeOrObjective",s.data.allowSelectKnowledgeOrObjective),e.R7$(3),e.SpI(" ",e.bMT(11,12,"lang_button_close")," "))},dependencies:[j.U,g.W,Q,r.wp],encapsulation:2}),a})()}}]);