"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[5661],{76024:(w,f,s)=>{s.d(f,{Y:()=>e});var c=s(65879);let e=(()=>{class d{constructor(t){this.el=t,this.hasDecimalPoint=!1,this.hasNegativeSign=!1,this.navigationKeys=["Backspace","Delete","Tab","Escape","Enter","Home","End","ArrowLeft","ArrowRight","Clear","Copy","Paste"],this.decimal=!1,this.decimalSeparator=".",this.decimalSeparator1=".",this.decimalSeparator2=",",this.allowNegatives=!1,this.allowPaste=!0,this.negativeSign="-",this.min=-1/0,this.max=1/0,this.regex=null,this.inputElement=t.nativeElement}ngOnChanges(t){if(t.pattern&&(this.regex=this.pattern?RegExp(this.pattern):null),t.min){const i=Number(this.min);this.min=isNaN(i)?-1/0:i}if(t.max){const i=Number(this.max);this.max=isNaN(i)?1/0:i}}onBeforeInput(t){if(isNaN(Number(t.data))){if(t.data===this.decimalSeparator1||t.data===this.decimalSeparator2||t.data===this.negativeSign&&this.allowNegatives)return;t.preventDefault(),t.stopPropagation()}}onKeyDown(t){if(this.navigationKeys.indexOf(t.key)>-1||("a"===t.key||"KeyA"===t.code)&&!0===t.ctrlKey||("c"===t.key||"KeyC"===t.code)&&!0===t.ctrlKey||("v"===t.key||"KeyV"===t.code)&&!0===t.ctrlKey||("x"===t.key||"KeyX"===t.code)&&!0===t.ctrlKey||("a"===t.key||"KeyA"===t.code)&&!0===t.metaKey||("c"===t.key||"KeyC"===t.code)&&!0===t.metaKey||("v"===t.key||"KeyV"===t.code)&&!0===t.metaKey||("x"===t.key||"KeyX"===t.code)&&!0===t.metaKey)return;let i="";var a=t.key;if(t.key===this.decimalSeparator2&&(a=this.decimalSeparator1),this.decimal&&a===this.decimalSeparator1)return i=this.forecastValue(a),i.split(this.decimalSeparator1).length>2||(this.hasDecimalPoint=i.indexOf(this.decimalSeparator1)>-1,this.setNewValue(a)),void t.preventDefault();if(a===this.negativeSign&&this.allowNegatives)return i=this.forecastValue(a),i.charAt(0)!==this.negativeSign||i.split(this.negativeSign).length>2?void t.preventDefault():void(this.hasNegativeSign=i.split(this.negativeSign).length>-1);if(" "===a||isNaN(Number(a)))return void t.preventDefault();if(i=i||this.forecastValue(a),this.regex&&!this.regex.test(i))return void t.preventDefault();const n=Number(i);(n>this.max||n<this.min)&&t.preventDefault()}onPaste(t){if(!0===this.allowPaste){let i="";window.clipboardData?i=window.clipboardData.getData("text"):t.clipboardData&&t.clipboardData.getData&&(i=t.clipboardData.getData("text/plain")),this.pasteData(i),t.preventDefault()}else t.preventDefault(),t.stopPropagation()}onDrop(t){const i=t.dataTransfer?.getData("text")??"";this.inputElement.focus(),this.pasteData(i),t.preventDefault()}pasteData(t){t=this.replaceDecimalSeparator(t);const i=this.sanitizeInput(t);if(!i.includes(this.negativeSign)||!this.hasNegativeSign||this.getSelection().includes(this.negativeSign)){if(!document.execCommand("insertText",!1,i))if(this.inputElement.setRangeText){const{selectionStart:n,selectionEnd:m}=this.inputElement;this.inputElement.setRangeText(i,n??0,m??0,"end"),typeof window.InstallTrigger<"u"&&this.inputElement.dispatchEvent(new Event("input",{cancelable:!0}))}else this.insertAtCursor(this.inputElement,i);this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator1)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}}setNewValue(t){t=this.replaceDecimalSeparator(t),this.insertAtCursor(this.inputElement,t),this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator1)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}insertAtCursor(t,i){const a=t.selectionStart??0,n=t.selectionEnd??0;t.value=t.value.substring(0,a)+i+t.value.substring(n,t.value.length);const m=a+i.length;t.focus(),t.setSelectionRange(m,m),this.triggerEvent(t,"input")}triggerEvent(t,i){if("createEvent"in document){const a=document.createEvent("HTMLEvents");a.initEvent(i,!1,!0),t.dispatchEvent(a)}}sanitizeInput(t){let a,i="";a=this.decimal&&this.isValidDecimal(t)?new RegExp(`${this.getNegativeSignRegExp()}[^0-9${this.decimalSeparator1}]`,"g"):new RegExp(`${this.getNegativeSignRegExp()}[^0-9]`,"g"),i=t.replace(a,"");const n=this.inputElement.maxLength;if(n>0){const m=n-this.inputElement.value.length+(i.includes(`${this.negativeSign}`)?1:0);i=m>0?i.substring(0,m):""}return i}getNegativeSignRegExp(){return!this.allowNegatives||this.hasNegativeSign&&!this.getSelection().includes(this.negativeSign)?"":`(?!^${this.negativeSign})`}isValidDecimal(t){if(this.hasDecimalPoint){const i=this.getSelection();return i&&i.indexOf(this.decimalSeparator1)>-1?t.split(this.decimalSeparator1).length<=2:t.indexOf(this.decimalSeparator1)<0}return t.split(this.decimalSeparator1).length<=2}getSelection(){return this.inputElement.value.substring(this.inputElement.selectionStart??0,this.inputElement.selectionEnd??0)}forecastValue(t){const a=this.inputElement.selectionEnd??0,n=this.inputElement.value;return n.substring(0,this.inputElement.selectionStart??0)+t+n.substring(a)}replaceDecimalSeparator(t){return t.replace(",",this.decimalSeparator).replace(".",this.decimalSeparator)}}return d.\u0275fac=function(t){return new(t||d)(c.Y36(c.SBq))},d.\u0275dir=c.lG2({type:d,selectors:[["","appOnlyNumber",""]],hostBindings:function(t,i){1&t&&c.NdJ("beforeinput",function(n){return i.onBeforeInput(n)})("keydown",function(n){return i.onKeyDown(n)})("paste",function(n){return i.onPaste(n)})("drop",function(n){return i.onDrop(n)})},inputs:{decimal:"decimal",decimalSeparator:"decimalSeparator",decimalSeparator1:"decimalSeparator1",decimalSeparator2:"decimalSeparator2",allowNegatives:"allowNegatives",allowPaste:"allowPaste",negativeSign:"negativeSign",min:"min",max:"max",pattern:"pattern"},features:[c.TTD]}),d})()},95273:(w,f,s)=>{s.d(f,{v:()=>t});var c=s(61713),e=s(78226),d=s(65879),h=s(46558);let t=(()=>{class i{getMineTypeByFileType(n){let o="";switch(this.commonService.getEnumTypeWithDefault(e.s,n,e.s.unknown)){case e.s.doc:case e.s.docx:o="application/vnd.openxmlformats-officedocument.wordprocessingml.document";break;case e.s.ppt:case e.s.pptx:o="application/vnd.openxmlformats-officedocument.presentationml.presentation";break;case e.s.xlsx:o="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";break;case e.s.pdf:o="application/pdf";break;case e.s.video:case e.s.mp4:o="video/mp4";break;case e.s.mov:o="video/mov";break;case e.s.webm:o="video/webm";break;case e.s.quicktime:o="video/quicktime";break;case e.s.audio:o="audio/mpeg";break;case e.s.mp3:o="audio/mp3";break;case e.s.wav:o="audio/wav";break;case e.s.jpeg:case e.s.image:o="image/jpeg";break;case e.s.google_docs:o="google_docs"}return o}getMineTypeByExtension(n){switch(new RegExp(/(?:\.([^.]+))?$/).exec(n)?.[1]){case"pdf":return"application/pdf";case"xlsx":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"xsl":case"csv":return"application/vnd.ms-excel";case"jpg":return"image/jpg";case"jpge":return"image/jpge";default:return"application/json-patch+json"}}getTypeFileByMime(n){return n.mimes&&(0,c.MH)(n.mimes)||n.name?.toLowerCase().endsWith(".azt")?e.s.docx:n.mimes&&(0,c.AW)(n.mimes)?e.s.xlsx:n.mimes&&(0,c.F0)(n.mimes)?e.s.audio:n.mimes&&(0,c.Wv)(n.mimes)?e.s.video:n.mimes&&(0,c.Or)(n.mimes)?e.s.image:n.mimes&&(0,c._4)(n.mimes)?e.s.pdf:n.mimes&&(0,c.ZA)(n.mimes)?e.s.powerpoint:void 0}constructor(n){this.commonService=n}}return i.\u0275fac=function(n){return new(n||i)(d.LFG(h.z))},i.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},97931:(w,f,s)=>{s.d(f,{W:()=>k});var c=s(37734),e=s(65879),d=s(96814),h=s(77988),t=s(92596),i=s(70342),a=s(67742),n=s(36727);function m(l,u){if(1&l){const r=e.EpF();e.O4$(),e.kcU(),e.ynx(0),e.TgZ(1,"div",9)(2,"p",10),e._uU(3),e.ALo(4,"mytranslate"),e.qZA(),e.TgZ(5,"p",10),e._uU(6),e.ALo(7,"mytranslate"),e.qZA(),e.TgZ(8,"div",11),e._UZ(9,"input",12),e.TgZ(10,"button",13),e.NdJ("click",function(){e.CHM(r);const g=e.oxw();return e.KtG(g.showCopySuccess())}),e.O4$(),e.TgZ(11,"svg",14),e._UZ(12,"rect",15)(13,"path",16),e.qZA(),e._uU(14),e.ALo(15,"mytranslate"),e.qZA()()(),e.BQk()}if(2&l){const r=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,5,"lang_auto_hoac")),e.xp6(3),e.Oqu(e.lcZ(7,7,"lang_classroom_QR_join_link_copy")),e.xp6(3),e.Q6J("value",r.linkUrl),e.xp6(1),e.Q6J("cdkCopyToClipboard",r.copyLinkToClipboard(r.linkUrl)),e.xp6(4),e.hij(" ",e.lcZ(15,9,"lang_auto_sao_chep")," ")}}let o=(()=>{class l extends c.Q{constructor(){super(...arguments),this.linkUrl="",this.fileName="",this.showLink=!1,this.qrCodeDownloadLink=""}showCopySuccess(){this.showSuccessSnack("lang_auto_sao_chep_thanh_cong")}copyLinkToClipboard(r){return r}onChangeURL(r){this.qrCodeDownloadLink=r}downloadQrCode(){try{let r=""!=this.fileName?this.commonService.createFileNameExportFile([this.fileName])+".jpg":this.commonService.createFileNameExportFile(["azota-qr-code-"])+".jpg";this.commonService.downloadFileByUrl(this.qrCodeDownloadLink.changingThisBreaksApplicationSecurity,r)}catch{console.log("Download QrCode error")}}}return l.\u0275fac=function(){let u;return function(p){return(u||(u=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["azt-show-link"]],inputs:{linkUrl:"linkUrl",fileName:"fileName",showLink:"showLink"},features:[e.qOj],decls:11,vars:9,consts:[["azt-track-service","download-qr-code-9t-9Wiu2xv",1,"box","p-3","text-center",3,"click"],[2,"background","#fff","padding","5px"],["colorDark","#2361ad","imageSrc","'images/Azota-For-QrCode-01.png' | convertCdnLinkOfGitHub",3,"allowEmptyString","qrdata","elementType","width","errorCorrectionLevel","qrCodeURL"],["azt-track-service","download-qr-code-RqVBz6g1z7",1,"btn","btn-outline-primary","btn-transparent","btn-sm","mx-auto","mt-2",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","mr-2"],["d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"],["points","7 10 12 15 17 10"],["x1","12","y1","15","x2","12","y2","3"],[4,"ngIf"],[1,"text-center"],[1,"h5","mt-2","font-medium"],[1,"azt-copy","relative","mt-2"],["type","text","readonly","",1,"form-control","py-3","px-4","border-transparent","bg-slate-100","pr-10",2,"padding-right","120px",3,"value"],["azt-track-service","download-qr-code-yW-aFu0tO",1,"btn","btn-outline-primary","absolute","my-auto","inset-y-0","right-0",2,"border-top-left-radius","0","border-bottom-left-radius","0",3,"cdkCopyToClipboard","click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","w-4","h-4","mr-2"],["x","9","y","9","width","13","height","13","rx","2","ry","2"],["d","M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"]],template:function(r,p){1&r&&(e.TgZ(0,"div",0),e.NdJ("click",function(v){return v.stopPropagation()}),e.TgZ(1,"div",1)(2,"qrcode",2),e.NdJ("qrCodeURL",function(v){return p.onChangeURL(v)}),e.qZA()(),e.TgZ(3,"a",3),e.NdJ("click",function(){return p.downloadQrCode()}),e.O4$(),e.TgZ(4,"svg",4),e._UZ(5,"path",5)(6,"polyline",6)(7,"line",7),e.qZA(),e._uU(8),e.ALo(9,"mytranslate"),e.qZA(),e.YNc(10,m,16,11,"ng-container",8),e.qZA()),2&r&&(e.xp6(2),e.Q6J("allowEmptyString",!0)("qrdata",p.linkUrl)("elementType","url")("width",128)("errorCorrectionLevel","M"),e.xp6(6),e.hij(" ",e.lcZ(9,7,"lang_auto_tai_ve_may")," "),e.xp6(2),e.Q6J("ngIf",p.showLink))},dependencies:[d.O5,i.i3,a.V,n.JV],encapsulation:2}),l})();const y=function(l){return{"w-80":l}};let k=(()=>{class l extends c.Q{constructor(){super(...arguments),this.linkUrl="",this.fileName="",this.showLink=!1}}return l.\u0275fac=function(){let u;return function(p){return(u||(u=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["azt-download-qr-code"]],inputs:{linkUrl:"linkUrl",fileName:"fileName",showLink:"showLink"},features:[e.qOj],decls:19,vars:10,consts:[["azt-track-service","download-qr-code-hiQXy_iTc",1,"btn","btn-outline-primary","btn-transparent","p-1",3,"matMenuTriggerFor","matTooltip"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-6","h-6"],["x","3","y","3","width","5","height","5","rx","1"],["x","16","y","3","width","5","height","5","rx","1"],["x","3","y","16","width","5","height","5","rx","1"],["d","M21 16h-3a2 2 0 0 0-2 2v3"],["d","M21 21v.01"],["d","M12 7v3a2 2 0 0 1-2 2H7"],["d","M3 12h.01"],["d","M12 3h.01"],["d","M12 16v.01"],["d","M16 12h1"],["d","M21 12v.01"],["d","M12 21v-1"],["xPosition","before"],["showQrCode","matMenu"],[3,"ngClass"],[3,"linkUrl","fileName","showLink"]],template:function(r,p){if(1&r&&(e.TgZ(0,"button",0),e.ALo(1,"mytranslate"),e.O4$(),e.TgZ(2,"svg",1),e._UZ(3,"rect",2)(4,"rect",3)(5,"rect",4)(6,"path",5)(7,"path",6)(8,"path",7)(9,"path",8)(10,"path",9)(11,"path",10)(12,"path",11)(13,"path",12)(14,"path",13),e.qZA()(),e.kcU(),e.TgZ(15,"mat-menu",14,15)(17,"div",16),e._UZ(18,"azt-show-link",17),e.qZA()()),2&r){const g=e.MAs(16);e.s9C("matTooltip",e.lcZ(1,6,"lang_auto_quet_hoac_tai_ma_qr_code")),e.Q6J("matMenuTriggerFor",g),e.xp6(17),e.Q6J("ngClass",e.VKq(8,y,p.showLink)),e.xp6(1),e.Q6J("linkUrl",p.linkUrl)("fileName",p.fileName)("showLink",p.showLink)}},dependencies:[d.mk,h.VK,h.p6,t.gM,o,n.JV],encapsulation:2}),l})()}}]);