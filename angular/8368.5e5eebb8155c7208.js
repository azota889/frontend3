"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[8368],{61325:(b,v,g)=>{g.d(v,{$:()=>M});var _=g(69862),p=g(65592),k=g(61713),u=g(65879),S=g(46558),C=g(84672),z=g(77757);let M=(()=>{class l{replaceImageInContent(i,t){return new p.y(e=>{if(t.includes("<img ")){var a=this.findAllSubString(t,"<img"),n=[],r=[];a.forEach(o=>{var c=t.indexOf("src=",o),d=t.indexOf('"',Number(c)+5),s=t.substring(Number(c)+5,Number(d)+1);s.includes(";base64")?n.push({oldUrl:s}):s.includes("blob:")&&r.push({oldUrl:s})}),n.length>0?this.reUploadBase64File(i,n,(o,c)=>{null==c?r&&r.length>0?this.reUploadBlobFile(i,r,(d,s)=>{null!=s?(t=this.replaceHomeworkContent(t,o),t=this.replaceHomeworkContent(t,d),e.next({errorMessage:void 0,content:t}),e.complete()):(e.next({errorMessage:s,content:t}),e.complete())}):(t=this.replaceHomeworkContent(t,o),e.next({errorMessage:void 0,content:t}),e.complete()):(e.next({errorMessage:c,content:t}),e.complete())}):r.length>0?this.reUploadBlobFile(i,r,(o,c)=>{null==c?(t=this.replaceHomeworkContent(t,o),e.next({errorMessage:void 0,content:t}),e.complete()):(e.next({errorMessage:c,content:t}),e.complete())}):(t=this.replaceHomeworkContent(t,[]),e.next({errorMessage:void 0,content:t}),e.complete())}else e.next({errorMessage:void 0,content:t}),e.complete()})}replaceHomeworkContent(i,t){return t.length>0&&t.forEach(e=>{i=i.replace(e.oldUrl??"  ",e.newUrl+'" class="w-100 img-fluid"')}),i}findAllSubString(i,t){for(var e=0,a=0,n=[];i.indexOf(t,e)>-1;)a=i.indexOf(t,e),n.push(a),e=a+t.length;return n}getTypeFile(i){var t=i.indexOf(";");return i.substring(5,t)}getFileName(i){var t=i.split("").reverse().join(""),e=t.indexOf(";"),a=t.indexOf("/",e);return t.substring(e,a).split("").reverse().join("")}convertBlobToBase64(i){return new Promise(t=>{var e=new Image;e.crossOrigin="Anonymous",e.addEventListener("load",function(){var a=document.createElement("canvas"),n=a.getContext("2d");a.width=e.width,a.height=e.height,n?.drawImage(e,0,0);var r=a.toDataURL("image/png");t(r)},!1),e.src=i})}reUploadBase64File(i,t,e){if(t&&t.length>0){let o,r=t.length;for(var a=[],n=0;n<t.length;n++){const c=t[n],d=c.oldUrl?.substring(0,c.oldUrl.length-1);this.startUploadBlobFile(i,c,d??"",[],(s,f)=>{null==f?a=a.concat(s):o=f,r-=1,0==r&&e(a,o)})}}else e([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}reUploadBlobFile(i,t,e){if(t&&t.length>0){let o,r=t.length;for(var a=[],n=0;n<t.length;n++){const c=t[n],d=c?.oldUrl?.substring(0,c.oldUrl.length-1);this.convertBlobToBase64(d??"").then(s=>{this.startUploadBlobFile(i,c,s,[],(f,m)=>{null==m?a=a.concat(f):o=m,r-=1,0==r&&e(a,o)})})}}else e([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}startUploadBlobFile(i,t,e,a,n){if(e&&""!=e){var r=this.getTypeFile(e),o=this.myPdfService.b64toFile(e,this.getFileName(r),r);(0,k.hv)(o).then(c=>{this.apiUploadService.commonUploadFile(i,c,"").subscribe(d=>{if(d.type!=_.dt.UploadProgress)if(1==d.success){var s={...t,newUrl:d.data?.url??""};a.push(s),n(a,void 0)}else n(a,this.commonService.translateToKeyParam("lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau_loi",d.message??"none"))})})}else n(a,"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}constructor(i,t,e){this.commonService=i,this.apiUploadService=t,this.myPdfService=e}}return l.\u0275fac=function(i){return new(i||l)(u.LFG(S.z),u.LFG(C.W),u.LFG(z.z))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},28368:(b,v,g)=>{g.d(v,{y:()=>M});var _=g(20553),p=g(65879),k=g(88489);let u=(()=>{class l{getMode(){return""==this.browserStorageService.getStorage("mode_ui")?"light":this.browserStorageService.getStorage("mode_ui")??"light"}constructor(i){this.browserStorageService=i}}return l.\u0275fac=function(i){return new(i||l)(p.LFG(k.n))},l.\u0275prov=p.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var S=g(46558),C=g(61325),z=g(32965);let M=(()=>{class l{constructor(i,t,e,a){this.darkModeService=i,this.commonService=t,this.sAztUploadImageOfExamService=e,this.cdnService=a}get initConfigUrlScript(){return{language_url:_.N.azt_tiny_mce_vi_langs_src}}initConfigForAdmin(){var e={};return e={height:250,menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",plugins:["code","fullscreen","link"],toolbar:"bold italic backcolor | alignleft aligncenter alignright alignjustify | link | code | fullscreen",...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(e.skin="oxide-dark",e.content_css="dark"),e}initConfigForAdminWithUploadImageBox(i){var a={};return a={selector:"textarea#file-picker",menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",branding:!1,plugins:"image code autoresize fullscreen link",toolbar:"fontsize | bold italic underline | forecolor backcolor | alignleft aligncenter alignright | image | link | code | fullscreen",font_size_formats:"8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 20pt 22pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",height:250,min_height:250,file_picker_callback:(n,r,o)=>{this.file_picker_callback(i,n,r,o)},content_css:[this.cdnService.convertCdnLinkOfGitHub("angular/styles.6c8c340cca20c274.css")],...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(a.skin="oxide-dark",a.content_css="dark"),a}initConfigForAdminForDigitalized(i){var a={};return a={selector:"textarea#file-picker",menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",branding:!1,valid_elements:"*[*]",plugins:"image code autoresize fullscreen link azt-math-editor azt-manager-plugins",external_plugins:{"azt-math-editor":"https://dev.textandtool.com/assets/output-dev-mode/azt-math-editor/plugin.1.0.0.min.js","azt-manager-plugins":"https://dev.textandtool.com/assets/output-dev-mode/azt-manager-plugins/plugin.1.0.0.min.js"},toolbar:"fontsize | bold italic underline | forecolor backcolor | alignleft aligncenter alignright | link | code | fullscreen",font_size_formats:"8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 20pt 22pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",height:250,min_height:250,file_picker_callback:(n,r,o)=>{this.file_picker_callback(i,n,r,o)},content_css:[this.cdnService.convertCdnLinkOfGitHub("angular/styles.6c8c340cca20c274.css")],...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(a.skin="oxide-dark",a.content_css="dark"),a}initConfigForTeacher(){var e={};return e={height:250,min_height:250,menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",plugins:["fullscreen"],toolbar:"bold italic backcolor | alignleft aligncenter alignright alignjustify | fullscreen",...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(e.skin="oxide-dark",e.content_css="dark"),e}initConfigTeacherHomework(i){var a={};return a={min_height:i,menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",resize:!1,plugins:["advlist","anchor","autolink","charmap","code","fullscreen","lists","media","preview","textcolor","emoticons","fontselect","autoresize"],toolbar:"fontfamily | fontsize |bold italic underline | forecolor backcolor | alignleft aligncenter alignright | emoticons",emoticons_database:"emojis",font_family_formats:"Arial=arial,helvetica,sans-serif; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Font ch\u1eef \u0111\u1eb9p=font_chu_dep",font_size_formats:"8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 20pt 22pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",content_style:`@font-face { font-family: font_chu_dep; src: url('${this.cdnService.convertCdnLinkOfGitHub("fonts/HP0015HB.ttf")}');} body { font-family: font_chu_dep; color: red; font-size: 18pt; line-height: initial;};`,...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(a.skin="oxide-dark",a.content_css="dark"),a}initConfigStudentHomework(){var e={};return e={height:450,min_height:250,menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",readonly:1,plugins:["emoticons advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | emoticons",emoticons_database:"emojis",content_style:`@font-face { font-family: font_chu_dep; src: url('${this.cdnService.convertCdnLinkOfGitHub("fonts/HP0015HB.ttf")}');} body { font-family: font_chu_dep; color: red; font-size: 18pt; line-height: initial;};`,...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(e.skin="oxide-dark",e.content_css="dark"),e}initConfigForTeacherWithUploadImageBox(i){var a={};return a={selector:"textarea#file-picker",menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",branding:!1,plugins:"image code autoresize fullscreen",toolbar:"fontsize | bold italic underline | forecolor backcolor | alignleft aligncenter alignright | image | fullscreen",font_size_formats:"8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 20pt 22pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",height:250,min_height:250,file_picker_callback:(n,r,o)=>{this.file_picker_callback(i,n,r,o)},...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(a.skin="oxide-dark",a.content_css="dark"),a}file_picker_callback(i,t,e,a){let n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.onchange=()=>{let r=n.files?.[0],o=new FileReader;o.onload=()=>{let d=`<img src="${"data:image/png;base64, "+o.result.split(",")[1]}">`;this.sAztUploadImageOfExamService.replaceImageInContent(i,d).subscribe(s=>{if(s.errorMessage)this.commonService.snackError(s.errorMessage);else{let f=document.createElement("div");f.innerHTML=this.commonService.removeXssInHtml(s.content);let m=f.firstChild;m&&m.src&&t(m.src)}})},o.readAsDataURL(r)},n.click()}}return l.\u0275fac=function(i){return new(i||l)(p.LFG(u),p.LFG(S.z),p.LFG(C.$),p.LFG(z.E))},l.\u0275prov=p.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);