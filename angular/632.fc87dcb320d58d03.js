"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[632],{91581:(O,S,l)=>{l.d(S,{s:()=>k});var t=l(65879);let k=(()=>{class c{constructor(_){this.el=_,this.answerSizeManager=0,this.process()}ngOnChanges(_){_.answerSizeManager&&_.answerSizeManager.currentValue!==_.answerSizeManager.previousValue&&_.answerSizeManager.currentValue>=1&&this.process()}process(){this.onElementLoaded().then(_=>{const T=this.el.nativeElement,d=T.children,w=[];for(let v=0;v<d.length;v++)w.push(this.getSizeWidthElement(d[v]));let p=1;[2,4].forEach(v=>{this.isLayout(_.width,w,v)&&(p=v)}),T.classList.remove("row");for(let v=0;v<d.length;v++){const n=d[v];n.classList.remove("col-sm-12"),n.classList.remove("col-md-6")}T.classList.add("layout"),T.classList.add("layout-"+p)})}isLayout(_,T,d){const w=Math.floor(_/d);for(const p of T)if(p+c.PADDING_ITEM>w)return!1;return!0}onElementLoaded(){return new Promise((_,T)=>{let d=!1;for(let w=0;w<=10;w++)setTimeout(()=>{if(!d){const p=this.actionGetSizeBox();p.width>0&&p.height&&(d=!0,_(p))}10===w&&!d&&T(new Error)},100*w)})}actionGetSizeBox(){return this.el.nativeElement.getBoundingClientRect()}getSizeWidthElement(_){let T=0;for(let d=0;d<_.children.length;d++)T+=_.children[d].getBoundingClientRect().width;return T}}return c.PADDING_ITEM=40,c.\u0275fac=function(_){return new(_||c)(t.Y36(t.SBq))},c.\u0275dir=t.lG2({type:c,selectors:[["","answerSizeManager",""]],inputs:{answerSizeManager:"answerSizeManager"},features:[t.TTD]}),c})()},89745:(O,S,l)=>{l.d(S,{v:()=>t});class t{constructor(){this.answerLabelsMockup={}}}},70731:(O,S,l)=>{l.d(S,{Q:()=>t});class t{constructor(c,u,_,T){this.tasks=new Array,this.queues=new Array,this.is_running=!1,this.all_tasks=0,this.wrap_counter=0,this.wrap_counter_done=0,this.count_task_root_done=0,this.limit_one_process=c,this.result_common_temp={datas:[],errs:[]},this.action_log_item=u,this.delay_time=_||1e3,this.end_with_error=T??!1}addTask(c,u,_,T){if(this.is_running)return;var d=_||[];const w=this.queues.length;this.all_tasks++,this.queues.push({task:()=>new Promise(v=>{this.wrap_counter++,u.call(c,...d).then(n=>{this.wrap_counter_done++,this.callLog(T),v({status:!0,value:n,index:w})}).catch(n=>{this.wrap_counter_done++,this.callLog(T),v({status:!1,error:n,index:w})})}),name:T})}callLog(c){this.action_log_item&&this.all_tasks>0&&this.action_log_item.function.call({},this.wrap_counter_done,this.all_tasks,...this.action_log_item.params?this.action_log_item.params:[],c)}start(){return new Promise(c=>{0===this.queues.length&&c({datas:[],errs:[]}),this.result_common_temp={datas:[],errs:[]};for(let u=0;u<this.limit_one_process;u++){const _=this.queues.shift();if(!_)break;this.tasks.push(_)}this.count_task_root_done=0,this.is_running=!0,this.runner(c)})}checker(c,u){this.count_task_root_done++,c.status&&c.value?this.result_common_temp.datas.push({index:c.index,value:c.value}):c.error&&this.result_common_temp.errs.push({index:c.index,value:c.error}),this.result_common_temp.errs.length>0&&this.end_with_error&&(this.is_running=!1,u(this.makeResultObj())),this.count_task_root_done===this.all_tasks&&(this.is_running=!1,u(this.makeResultObj())),this.nextItem(u)}makeResultObj(){return{datas:this.result_common_temp.datas.sort(function(c,u){return c.index-u.index}).map(c=>c.value),errs:this.result_common_temp.errs.sort(function(c,u){return c.index-u.index}).map(c=>c.value)}}nextItem(c){const u=this.queues.shift();u&&u.task.call(this).then(_=>{this.checker(_,c)})}runner(c){this.tasks.length>0?this.tasks.forEach(u=>{u.task.call(this).then(_=>{this.checker(_,c)})}):(this.is_running=!1,c(this.makeResultObj()))}}},32169:(O,S,l)=>{l.d(S,{n:()=>w});var t=l(49671),k=l(69862),c=l(70731),u=l(65879),_=l(46558),T=l(82228);const d=l(47246);let w=(()=>{class p{constructor(n,i){this.commonService=n,this.apiUploadService=i,this.dataRaws=[],this.stringFirstOld=["zCv:"],this.stringFirst="zCo:"}convertBase64OfMathJaxToCdnUrl(n){return new Promise(i=>{var r=this.getValueContentQuestion(n.questionContent??""),o=this.getValueContentQuestion(n.answerConfig??""),f=n.answerMedia??"";if(0===r.length||0===o.length)return void i(n);let P=this.encodeContent(r[0].content),z=[];o.forEach((h,A)=>{z.push({i:A,d:this.encodeContent(h.content)})});let E=this.encodeContent(f);var C=0;let x=[];for(let h=0;h<P.raws.length;h++)P.raws[h].i=C,C++,x.push(P.raws[h]);for(let h=0;h<E.raws.length;h++)E.raws[h].i=C,C++,x.push(E.raws[h]);z.forEach(h=>{for(let A=0;A<h.d.raws.length;A++)h.d.raws[A].i=C,C++,x.push(h.d.raws[A])}),x.length>0?this.uploadRawContent(x.map(h=>h.l)).then(h=>{P.raws.forEach(A=>{let M=this.stringFirst+btoa(JSON.stringify({l:h,i:A.i}));r[0].content=this.commonService.replaceAll(r[0].content,A.l,M)??""}),E.raws.forEach(A=>{let M=this.stringFirst+btoa(JSON.stringify({l:h,i:A.i}));f=this.commonService.replaceAll(f,A.l,M)??""}),z.forEach(A=>{A.d.raws.forEach(M=>{let y=this.stringFirst+btoa(JSON.stringify({l:h,i:M.i}));o[A.i].content=this.commonService.replaceAll(o[A.i].content,M.l,y)??""})}),n.questionContent=JSON.stringify(r),n.answerConfig=JSON.stringify(o),n.answerMedia=f,i(n)}).catch(()=>{i(n)}):i(n)})}decodeMathJaxCodeToCdnUrl(n){return new Promise(i=>{const r=new c.Q(10);if(r.addTask(this,()=>new Promise(o=>{this.decodeContent(n.content??"").then(f=>{n.content=f,o(!0)}).catch(()=>{o(!1)})})),r.addTask(this,()=>new Promise(o=>{this.decodeContent(n.help??"").then(f=>{n.help=f,o(!0)}).catch(()=>{o(!1)})})),n.answers)for(let o=0;o<n.answers.length;o++)r.addTask(this,()=>new Promise(f=>{n.answers&&this.decodeContent(n.answers[o].content??"").then(P=>{n.answers&&(n.answers[o].content=P),f(!0)}).catch(()=>{f(!1)})}));r.start().then(()=>{i()})})}getValueContentQuestion(n){return this.commonService.castJsonToObj(n)??[]}getAllMatchWithContent(n){let r,i=[];for(;null!==(r=p.searchPattern.exec(n));)i.includes(r[0])||i.push(r[0]);return i}getRawContent(n,i){return new Promise((r,o)=>{const f=this.dataRaws.findIndex(P=>P.l===n);-1===f?fetch(n).then(P=>P.blob()).then(P=>P.arrayBuffer()).then(P=>{const z=d.inflate(P),E=this.commonService.castJsonToObj((new TextDecoder).decode(z));this.dataRaws.push({l:n,d:E??[]}),E&&E[i]?r(E[i]):o()}).catch(()=>{o()}):this.dataRaws[f].d&&this.dataRaws[f].d[i]?r(this.dataRaws[f].d[i]):o()})}uploadRawContent(n){return new Promise((i,r)=>{const o=JSON.stringify(n),f=(new TextEncoder).encode(o),P=d.deflate(f),z=new Blob([P],{type:"application/octet-stream"}),E=new File([z],"question_save_mathtype.gz",{type:"application/octet-stream"});this.apiUploadService.uploadToCdnQuestionRawMathTypeData(E).subscribe(C=>{C.type!=k.dt.UploadProgress&&(1==C.success&&C.data?i(C.data.url??""):r(new Error("lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau_loi[SPLIT_LANG] [SPLIT_LANG]"+C.message)))})})}encodeContent(n){let i=this.getAllMatchWithContent(n),r=[];for(let o=0;o<i.length;o++){let P=i[o].replace(p.searchPattern,"$1");P.startsWith(this.stringFirst)||r.push({l:P,i:r.length})}return{content:n,raws:r}}decodeContent(n){var i=this;return(0,t.Z)(function*(){let r=i.getAllMatchWithContent(n);for(let o=0;o<r.length;o++){const f=r[o];let P=f.replace(p.searchPattern,"$1");for(let z=0;z<i.stringFirstOld.length;z++)if(P.startsWith(i.stringFirstOld[z])){n=i.commonService.replaceAll(n,f,"")??"";continue}if(P.startsWith(i.stringFirst)){let z=i.commonService.castJsonToObj(atob(P.replace(i.stringFirst,"")));if(z){let E=yield i.getRawContent(z.l,z.i);n=i.commonService.replaceAll(n,P,E)??""}}}return n})()}}return p.searchPattern=/data-azt-math-raw=[\\"']+([^"']+)["']/g,p.\u0275fac=function(n){return new(n||p)(u.LFG(_.z),u.LFG(T.W))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},19662:(O,S,l)=>{l.d(S,{h:()=>w});var t=l(8720),k=l(70731),c=l(70860),u=l(65879),_=l(32965),T=l(46558),d=l(32169);let w=(()=>{class p{pushImage(n,i,r){if(r){let o=new RegExp("<div id='"+n+"'[^>]+></div>","g");r.content&&(r.content=r.content.replace(o,i??"")),r.answers&&r.answers.forEach(f=>{f.content=f.content?.replace(o,i??"")}),r.help&&(r.help=r.help.replace(o,i??"")),r.groupInfo&&r.groupInfo.groupContent&&(r.groupInfo.groupContent=r.groupInfo.groupContent.replace(o,i??""))}}parseRenderQuestions(n,i,r,o,f,P){return new Promise((z,E)=>{const x=new k.Q(25,{function:(h,A)=>{const M=(h+25)/A*100;i&&i(M>=100?99:M)}},o??1e3);n.forEach(h=>{x.addTask(this,this.parseRenderQuestion,[h,r,f,P])}),x.start().then(h=>{if(h.errs.length>0){const A=[];h.errs.forEach(M=>{let y=A.find(Z=>Z.type===M.type);y||A.push(M),y?.data.concat(M.data)}),E(A)}else z(n)})})}parseRenderQuestion(n,i,r,o){return new Promise((f,P)=>{var z=new c.W(this.cdnService,this.commonService,i||new t.v,x=>{P(x)});z.callbackPushImage=(x,h)=>{this.pushImage(x,h,n)},z.caller=this;const C=new k.Q(o?1:20,void 0,0);n.content&&C.addTask(this,()=>new Promise(x=>{n.content=z.render(this.commonService.removeBracket(n.content??""),()=>{x()})})),n.answers&&n.answers.forEach(x=>{C.addTask(this,()=>new Promise(h=>{x.content=z.render(x.content||"",()=>{h()})}))}),n.help&&C.addTask(this,()=>new Promise(x=>{n.help=z.render(n.help,()=>{x()})})),n.groupInfo&&n.groupInfo.groupContent&&C.addTask(this,()=>new Promise(x=>{n.groupInfo&&n.groupInfo.groupContent?n.groupInfo.groupContent=z.render(this.commonService.removeBracket(n.groupInfo.groupContent),()=>{x()}):x()})),r&&C.addTask(this,()=>new Promise(x=>{this.dataAztMathRawHelper.decodeMathJaxCodeToCdnUrl(n).then(()=>{x()})})),C.start().then(x=>{x.errs.length>0||f()})})}constructor(n,i,r){this.cdnService=n,this.commonService=i,this.dataAztMathRawHelper=r}}return p.\u0275fac=function(n){return new(n||p)(u.LFG(_.E),u.LFG(T.z),u.LFG(d.n))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},83306:(O,S,l)=>{l.d(S,{L:()=>F});var t=l(65879),k=l(47496),c=l(96814),u=l(21266),_=l(40750);function T(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"li",5)(1,"a",6),t.NdJ("click",function(){t.CHM(e);const m=t.oxw(2);return t.KtG(m.clickPage(m.page-1))}),t.TgZ(2,"span",7),t._uU(3,"\xab"),t.qZA(),t.TgZ(4,"span",8),t._uU(5,"Previous"),t.qZA()()()}}const d=function(a){return[a]};function w(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",13),t.NdJ("click",function(){t.CHM(e);const m=t.oxw().$implicit,I=t.oxw(3);return t.KtG(I.clickPage(m))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&a){const e=t.oxw().$implicit,s=t.oxw(3);t.Q6J("routerLink",t.VKq(5,d,t.lcZ(1,3,s.linkPage)))("queryParams",s.eventSearchHandle(e)),t.xp6(2),t.hij("",e," ")}}function p(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){t.CHM(e);const m=t.oxw().$implicit,I=t.oxw(3);return t.KtG(I.clickPage(m))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&a){const e=t.oxw().$implicit,s=t.oxw(3);t.Q6J("routerLink",t.VKq(5,d,t.lcZ(1,3,s.linkPage)))("queryParams",s.eventSearchHandle(e)),t.xp6(2),t.hij("",e," ")}}const v=function(a){return{active:a}};function n(a,g){if(1&a&&(t.TgZ(0,"li",10),t.YNc(1,w,3,7,"a",11),t.YNc(2,p,3,7,"a",12),t.qZA()),2&a){const e=g.$implicit,s=t.oxw(3);t.Q6J("ngClass",t.VKq(3,v,s.page==e)),t.xp6(1),t.Q6J("ngIf",s.page==e),t.xp6(1),t.Q6J("ngIf",s.page!=e&&e<=s.page+3&&e>=s.page-3)}}function i(a,g){if(1&a&&(t.ynx(0),t.YNc(1,n,3,5,"li",9),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.arrayPag)}}function r(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",17),t.NdJ("click",function(){t.CHM(e);const m=t.oxw().$implicit,I=t.oxw(3);return t.KtG(I.clickPage(m))}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e," ")}}function o(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(e);const m=t.oxw().$implicit,I=t.oxw(3);return t.KtG(I.clickPage(m))}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e," ")}}function f(a,g){if(1&a&&(t.TgZ(0,"li",10),t.YNc(1,r,2,1,"a",15),t.YNc(2,o,2,1,"a",16),t.qZA()),2&a){const e=g.$implicit,s=t.oxw(3);t.Q6J("ngClass",t.VKq(3,v,s.page==e)),t.xp6(1),t.Q6J("ngIf",s.page==e),t.xp6(1),t.Q6J("ngIf",s.page!=e&&e<=s.page+3&&e>=s.page-3)}}function P(a,g){if(1&a&&(t.ynx(0),t.YNc(1,f,3,5,"li",9),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.arrayPag)}}function z(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"li",5)(1,"a",21),t.NdJ("click",function(){t.CHM(e);const m=t.oxw(3);return t.KtG(m.clickPage(1))}),t.ALo(2,"navigationLocalize"),t._uU(3,"1"),t.qZA()()}if(2&a){const e=t.oxw(3);t.xp6(1),t.Q6J("routerLink",t.VKq(4,d,t.lcZ(2,2,e.linkPage)))("queryParams",e.eventSearchHandle(1))}}function E(a,g){1&a&&(t.TgZ(0,"a",22),t._uU(1,"..."),t.qZA())}function C(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",24),t.NdJ("click",function(){t.CHM(e);const m=t.oxw().$implicit,I=t.oxw(3);return t.KtG(I.clickPage(m))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&a){const e=t.oxw().$implicit,s=t.oxw(3);t.Q6J("routerLink",t.VKq(5,d,t.lcZ(1,3,s.linkPage)))("queryParams",s.eventSearchHandle(e)),t.xp6(2),t.hij("",e," ")}}function x(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){t.CHM(e);const m=t.oxw().$implicit,I=t.oxw(3);return t.KtG(I.clickPage(m))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&a){const e=t.oxw().$implicit,s=t.oxw(3);t.Q6J("routerLink",t.VKq(5,d,t.lcZ(1,3,s.linkPage)))("queryParams",s.eventSearchHandle(e)),t.xp6(2),t.hij("",e," ")}}function h(a,g){if(1&a&&(t.TgZ(0,"li",10),t.YNc(1,C,3,7,"a",23),t.YNc(2,x,3,7,"a",12),t.qZA()),2&a){const e=g.$implicit,s=t.oxw(3);t.Q6J("ngClass",t.VKq(3,v,s.page==e)),t.xp6(1),t.Q6J("ngIf",s.page==e),t.xp6(1),t.Q6J("ngIf",s.page!=e&&e<s.page+3&&e>=s.page-1)}}function A(a,g){1&a&&(t.TgZ(0,"span",22),t._uU(1,"..."),t.qZA())}function M(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",25),t.NdJ("click",function(){t.CHM(e);const m=t.oxw(3);return t.KtG(m.clickPage(m.totalPaginationPage))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&a){const e=t.oxw(3);t.Q6J("routerLink",t.VKq(5,d,t.lcZ(1,3,e.linkPage)))("queryParams",e.eventSearchHandle(e.totalPaginationPage)),t.xp6(2),t.Oqu(e.totalPaginationPage)}}function y(a,g){if(1&a&&(t.ynx(0),t.YNc(1,z,4,6,"li",3),t.TgZ(2,"li",5),t.YNc(3,E,2,0,"a",19),t.qZA(),t.YNc(4,h,3,5,"li",9),t.TgZ(5,"li",5),t.YNc(6,A,2,0,"span",19),t.qZA(),t.TgZ(7,"li",5),t.YNc(8,M,3,7,"a",20),t.qZA(),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.page>=3),t.xp6(2),t.Q6J("ngIf",e.page>=4),t.xp6(1),t.Q6J("ngForOf",e.arrayPag),t.xp6(2),t.Q6J("ngIf",e.page<e.totalPaginationPage-3),t.xp6(2),t.Q6J("ngIf",e.page<e.totalPaginationPage-2)}}function Z(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"li",5)(1,"a",27),t.NdJ("click",function(){t.CHM(e);const m=t.oxw(3);return t.KtG(m.clickPage(1))}),t._uU(2,"1"),t.qZA()()}}function L(a,g){1&a&&(t.TgZ(0,"a",22),t._uU(1,"..."),t.qZA())}function D(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",29),t.NdJ("click",function(){t.CHM(e);const m=t.oxw().$implicit,I=t.oxw(3);return t.KtG(I.clickPage(m))}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e," ")}}function J(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(e);const m=t.oxw().$implicit,I=t.oxw(3);return t.KtG(I.clickPage(m))}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e," ")}}function R(a,g){if(1&a&&(t.TgZ(0,"li",10),t.YNc(1,D,2,1,"a",28),t.YNc(2,J,2,1,"a",16),t.qZA()),2&a){const e=g.$implicit,s=t.oxw(3);t.Q6J("ngClass",t.VKq(3,v,s.page==e)),t.xp6(1),t.Q6J("ngIf",s.page==e),t.xp6(1),t.Q6J("ngIf",s.page!=e&&e<s.page+3&&e>=s.page-1)}}function Q(a,g){1&a&&(t.TgZ(0,"span",22),t._uU(1,"..."),t.qZA())}function N(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",30),t.NdJ("click",function(){t.CHM(e);const m=t.oxw(3);return t.KtG(m.clickPage(m.totalPaginationPage))}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw(3);t.xp6(1),t.Oqu(e.totalPaginationPage)}}function B(a,g){if(1&a&&(t.ynx(0),t.YNc(1,Z,3,0,"li",3),t.TgZ(2,"li",5),t.YNc(3,L,2,0,"a",19),t.qZA(),t.YNc(4,R,3,5,"li",9),t.TgZ(5,"li",5),t.YNc(6,Q,2,0,"span",19),t.qZA(),t.TgZ(7,"li",5),t.YNc(8,N,2,1,"a",26),t.qZA(),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.page>=3),t.xp6(2),t.Q6J("ngIf",e.page>=4),t.xp6(1),t.Q6J("ngForOf",e.arrayPag),t.xp6(2),t.Q6J("ngIf",e.page<e.totalPaginationPage-3),t.xp6(2),t.Q6J("ngIf",e.page<e.totalPaginationPage-2)}}function K(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"li",5)(1,"a",31),t.NdJ("click",function(){t.CHM(e);const m=t.oxw(2);return t.KtG(m.clickPage(m.page+1))}),t.TgZ(2,"span",7),t._uU(3,"\xbb"),t.qZA(),t.TgZ(4,"span",8),t._uU(5,"Next"),t.qZA()()()}}function U(a,g){if(1&a&&(t.TgZ(0,"nav",1)(1,"ul",2),t.YNc(2,T,6,0,"li",3),t.YNc(3,i,2,1,"ng-container",4),t.YNc(4,P,2,1,"ng-container",4),t.YNc(5,y,9,5,"ng-container",4),t.YNc(6,B,9,5,"ng-container",4),t.YNc(7,K,6,0,"li",3),t.qZA()()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.page>1),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage<=4&&"report_error"==e.screen),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage<=4&&"report_error"!=e.screen),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage>4&&"report_error"==e.screen),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage>4&&"report_error"!=e.screen),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage>e.page&&e.totalPaginationPage>=2)}}let F=(()=>{class a extends k.Q{constructor(){super(...arguments),this.totalPaginationPage=0,this.paging=1,this.screen="",this.linkPage="",this.goToPaginationPage=new t.vpe,this.page=1,this.arrayPag=[]}eventSearchHandle(e){return""!=this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:e,userPhone:this.eventSearch?.userPhone}:""==this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:e,userId:Number(this.eventSearch?.userId)}:""==this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:e,urls:this.eventSearch?.urls}:""!=this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:e,userPhone:this.eventSearch?.userPhone,userId:Number(this.eventSearch?.userId)}:""!=this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:e,userPhone:this.eventSearch?.userPhone,urls:this.eventSearch?.urls}:""==this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:e,userId:Number(this.eventSearch?.userId),urls:this.eventSearch?.urls}:""==this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:e}:""!=this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:e,userPhone:this.eventSearch?.userPhone,userId:Number(this.eventSearch?.userId),urls:this.eventSearch?.urls}:void 0}ArrayPage(){for(let e=1;e<=(this.totalPaginationPage??0);e++)this.arrayPag.push(e)}clickPage(e){this.page=e,this.goToPaginationPage.emit(e)}ngOnInit(){this.arrayPag=[],this.page=this.paging??0,this.ArrayPage(),super.ngOnInit()}ngOnChanges(){this.arrayPag=[],this.page=this.paging??0,this.ArrayPage()}}return a.\u0275fac=function(){let g;return function(s){return(g||(g=t.n5z(a)))(s||a)}}(),a.\u0275cmp=t.Xpm({type:a,selectors:[["azt-paging"]],inputs:{totalPaginationPage:"totalPaginationPage",paging:"paging",screen:"screen",eventSearch:"eventSearch",linkPage:"linkPage"},outputs:{goToPaginationPage:"goToPaginationPage"},features:[t.qOj,t.TTD],decls:1,vars:1,consts:[["class","inline-block",4,"ngIf"],[1,"inline-block"],[1,"pagination"],["class","page-item",4,"ngIf"],[4,"ngIf"],[1,"page-item"],["azt-track-service","azt-paging-rX0eXqN4qW","aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],["azt-track-service","azt-paging-Vt48iF7KWz","class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["azt-track-service","azt-paging-Vt48iF7KWz",1,"page-link",3,"routerLink","queryParams","click"],[1,"page-link",3,"routerLink","queryParams","click"],["azt-track-service","azt-paging-sdAfPVcahq","class","page-link",3,"click",4,"ngIf"],["class","page-link",3,"click",4,"ngIf"],["azt-track-service","azt-paging-sdAfPVcahq",1,"page-link",3,"click"],[1,"page-link",3,"click"],["class","page-link",4,"ngIf"],["azt-track-service","azt-paging-8E_Z21XPV1","class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["azt-track-service","azt-paging-SXAS3r66ZG",1,"page-link",3,"routerLink","queryParams","click"],[1,"page-link"],["azt-track-service","azt-paging-_MTfjoX-Or","class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["azt-track-service","azt-paging-_MTfjoX-Or",1,"page-link",3,"routerLink","queryParams","click"],["azt-track-service","azt-paging-8E_Z21XPV1",1,"page-link",3,"routerLink","queryParams","click"],["azt-track-service","azt-paging-L-1rQPYpcp","class","page-link",3,"click",4,"ngIf"],["azt-track-service","azt-paging-U-yHiMo-V7",1,"page-link",3,"click"],["azt-track-service","azt-paging-bk-6smj4RZ","class","page-link",3,"click",4,"ngIf"],["azt-track-service","azt-paging-bk-6smj4RZ",1,"page-link",3,"click"],["azt-track-service","azt-paging-L-1rQPYpcp",1,"page-link",3,"click"],["azt-track-service","azt-paging-RU-mjdPzDz","aria-label","Next",1,"page-link",3,"click"]],template:function(e,s){1&e&&t.YNc(0,U,8,6,"nav",0),2&e&&t.Q6J("ngIf",s.totalPaginationPage&&s.totalPaginationPage>1)},dependencies:[c.mk,c.sg,c.O5,u.rH,_.Jy],encapsulation:2}),a})()},78497:(O,S,l)=>{l.d(S,{R:()=>p});var t=l(47496),k=l(65879),c=l(96814),u=l(19347),_=l(95545);const T=["aztDialogContentBox"],d=function(v){return{"width.px":v,"height.%":100}},w=["*"];let p=(()=>{class v extends t.Q{checkHeightOfElement(){if(this.aztDialogContentBox){var i=this.aztDialogContentBox.nativeElement.querySelector("."+this.contentBoxClassName);if(i){let r=Math.round(window.innerHeight*this.defaultHeight/100),o=i.getBoundingClientRect().height+1;this.aztDialogContentBox.nativeElement.style.height=(o<r?o:r)+"px",this.aztDialogContentBox.nativeElement.style.maxHeight="85vh"}}}ngAfterViewChecked(){setTimeout(()=>{this.ngZone.runOutsideAngular(()=>{this.checkHeightOfElement()})},0)}constructor(i){super(),this.ngZone=i,this.defaultHeight=85,this.defaultWidth=0,this.contentBoxClassName="azt-mat-dialog-content-box"}}return v.\u0275fac=function(i){return new(i||v)(k.Y36(k.R0b))},v.\u0275cmp=k.Xpm({type:v,selectors:[["azt-mat-dialog-content"]],viewQuery:function(i,r){if(1&i&&k.Gf(T,5),2&i){let o;k.iGM(o=k.CRH())&&(r.aztDialogContentBox=o.first)}},inputs:{defaultHeight:"defaultHeight",defaultWidth:"defaultWidth"},features:[k.qOj],ngContentSelectors:w,decls:5,vars:6,consts:[["aztDialogContentBox",""],["pointerEventsMethod","scrollbar",3,"visibility","ngStyle"]],template:function(i,r){1&i&&(k.F$t(),k.TgZ(0,"mat-dialog-content",null,0)(2,"ng-scrollbar",1)(3,"div"),k.Hsn(4),k.qZA()()()),2&i&&(k.xp6(2),k.Q6J("visibility","hover")("ngStyle",k.VKq(4,d,r.defaultWidth||"auto")),k.xp6(1),k.Tol(r.contentBoxClassName))},dependencies:[c.PC,u.xY,_.KC],encapsulation:2}),v})()}}]);