"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[4596],{71069:(U,m,s)=>{s.d(m,{Z:()=>M});var v=s(69862),f=s(65592),S=s(61713),_=s(65879),k=s(46558),E=s(82228),C=s(77757);let M=(()=>{class d{replaceImageInContent(a){return new f.y(e=>{if(a.includes("<img ")){var t=this.findAllSubString(a,"<img"),n=[],r=[];t.forEach(o=>{var i=a.indexOf("src=",o),l=a.indexOf('"',Number(i)+5),c=a.substring(Number(i)+5,Number(l)+1);c.includes(";base64")?n.push({oldUrl:c}):c.includes("blob:")&&r.push({oldUrl:c})}),n.length>0?this.reUploadBase64File(n,(o,i)=>{null==i?r&&r.length>0?this.reUploadBlobFile(r,(l,c)=>{null!=c?(a=this.replaceHomeworkContent(a,o),a=this.replaceHomeworkContent(a,l),e.next({errorMessage:void 0,content:a}),e.complete()):(e.next({errorMessage:c,content:a}),e.complete())}):(a=this.replaceHomeworkContent(a,o),e.next({errorMessage:void 0,content:a}),e.complete()):(e.next({errorMessage:i,content:a}),e.complete())}):r.length>0?this.reUploadBlobFile(r,(o,i)=>{null==i?(a=this.replaceHomeworkContent(a,o),e.next({errorMessage:void 0,content:a}),e.complete()):(e.next({errorMessage:i,content:a}),e.complete())}):(a=this.replaceHomeworkContent(a,[]),e.next({errorMessage:void 0,content:a}),e.complete())}else e.next({errorMessage:void 0,content:a}),e.complete()})}replaceHomeworkContent(a,e){return e.length>0&&e.forEach(t=>{a=a.replace(t.oldUrl??"  ",t.newUrl+'" class="w-100 img-fluid"')}),a}findAllSubString(a,e){for(var t=0,n=0,r=[];a.indexOf(e,t)>-1;)n=a.indexOf(e,t),r.push(n),t=n+e.length;return r}getTypeFile(a){var e=a.indexOf(";");return a.substring(5,e)}getFileName(a){var e=a.split("").reverse().join(""),t=e.indexOf(";"),n=e.indexOf("/",t);return e.substring(t,n).split("").reverse().join("")}convertBlobToBase64(a){return new Promise(e=>{var t=new Image;t.crossOrigin="Anonymous",t.addEventListener("load",function(){var n=document.createElement("canvas"),r=n.getContext("2d");n.width=t.width,n.height=t.height,r?.drawImage(t,0,0);var o=n.toDataURL("image/png");e(o)},!1),t.src=a})}reUploadBase64File(a,e){if(a&&a.length>0){let o,r=a.length;for(var t=[],n=0;n<a.length;n++){const i=a[n],l=i.oldUrl?.substring(0,i.oldUrl.length-1);this.startUploadBlobFile(i,l??"",[],(c,g)=>{null==g?t=t.concat(c):o=g,r-=1,0==r&&e(t,o)})}}else e([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}reUploadBlobFile(a,e){if(a&&a.length>0){let o,r=a.length;for(var t=[],n=0;n<a.length;n++){const i=a[n],l=i?.oldUrl?.substring(0,i.oldUrl.length-1);this.convertBlobToBase64(l??"").then(c=>{this.startUploadBlobFile(i,c,[],(g,u)=>{null==u?t=t.concat(g):o=u,r-=1,0==r&&e(t,o)})})}}else e([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}startUploadBlobFile(a,e,t,n){if(e&&""!=e){var r=this.getTypeFile(e),o=this.myPdfService.b64toFile(e,this.getFileName(r),r);(0,S.hv)(o).then(i=>{this.apiUploadService.uploadToCdnForHomework(i).subscribe(l=>{if(l.type!=v.dt.UploadProgress)if(1==l.success){var c={...a,newUrl:l.data?.url??""};t.push(c),n(t,void 0)}else n(t,this.commonService.translateToKeyParam("lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau_loi",l.message??"none"))})})}else n(t,"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}constructor(a,e,t){this.commonService=a,this.apiUploadService=e,this.myPdfService=t}}return d.\u0275fac=function(a){return new(a||d)(_.LFG(k.z),_.LFG(E.W),_.LFG(C.z))},d.\u0275prov=_.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},61325:(U,m,s)=>{s.d(m,{$:()=>M});var v=s(69862),f=s(65592),S=s(61713),_=s(65879),k=s(46558),E=s(82228),C=s(77757);let M=(()=>{class d{replaceImageInContent(a,e){return new f.y(t=>{if(e.includes("<img ")){var n=this.findAllSubString(e,"<img"),r=[],o=[];n.forEach(i=>{var l=e.indexOf("src=",i),c=e.indexOf('"',Number(l)+5),g=e.substring(Number(l)+5,Number(c)+1);g.includes(";base64")?r.push({oldUrl:g}):g.includes("blob:")&&o.push({oldUrl:g})}),r.length>0?this.reUploadBase64File(a,r,(i,l)=>{null==l?o&&o.length>0?this.reUploadBlobFile(a,o,(c,g)=>{null!=g?(e=this.replaceHomeworkContent(e,i),e=this.replaceHomeworkContent(e,c),t.next({errorMessage:void 0,content:e}),t.complete()):(t.next({errorMessage:g,content:e}),t.complete())}):(e=this.replaceHomeworkContent(e,i),t.next({errorMessage:void 0,content:e}),t.complete()):(t.next({errorMessage:l,content:e}),t.complete())}):o.length>0?this.reUploadBlobFile(a,o,(i,l)=>{null==l?(e=this.replaceHomeworkContent(e,i),t.next({errorMessage:void 0,content:e}),t.complete()):(t.next({errorMessage:l,content:e}),t.complete())}):(e=this.replaceHomeworkContent(e,[]),t.next({errorMessage:void 0,content:e}),t.complete())}else t.next({errorMessage:void 0,content:e}),t.complete()})}replaceHomeworkContent(a,e){return e.length>0&&e.forEach(t=>{a=a.replace(t.oldUrl??"  ",t.newUrl+'" class="w-100 img-fluid"')}),a}findAllSubString(a,e){for(var t=0,n=0,r=[];a.indexOf(e,t)>-1;)n=a.indexOf(e,t),r.push(n),t=n+e.length;return r}getTypeFile(a){var e=a.indexOf(";");return a.substring(5,e)}getFileName(a){var e=a.split("").reverse().join(""),t=e.indexOf(";"),n=e.indexOf("/",t);return e.substring(t,n).split("").reverse().join("")}convertBlobToBase64(a){return new Promise(e=>{var t=new Image;t.crossOrigin="Anonymous",t.addEventListener("load",function(){var n=document.createElement("canvas"),r=n.getContext("2d");n.width=t.width,n.height=t.height,r?.drawImage(t,0,0);var o=n.toDataURL("image/png");e(o)},!1),t.src=a})}reUploadBase64File(a,e,t){if(e&&e.length>0){let i,o=e.length;for(var n=[],r=0;r<e.length;r++){const l=e[r],c=l.oldUrl?.substring(0,l.oldUrl.length-1);this.startUploadBlobFile(a,l,c??"",[],(g,u)=>{null==u?n=n.concat(g):i=u,o-=1,0==o&&t(n,i)})}}else t([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}reUploadBlobFile(a,e,t){if(e&&e.length>0){let i,o=e.length;for(var n=[],r=0;r<e.length;r++){const l=e[r],c=l?.oldUrl?.substring(0,l.oldUrl.length-1);this.convertBlobToBase64(c??"").then(g=>{this.startUploadBlobFile(a,l,g,[],(u,h)=>{null==h?n=n.concat(u):i=h,o-=1,0==o&&t(n,i)})})}}else t([],"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}startUploadBlobFile(a,e,t,n,r){if(t&&""!=t){var o=this.getTypeFile(t),i=this.myPdfService.b64toFile(t,this.getFileName(o),o);(0,S.hv)(i).then(l=>{this.apiUploadService.commonUploadFile(a,l,"").subscribe(c=>{if(c.type!=v.dt.UploadProgress)if(1==c.success){var g={...e,newUrl:c.data?.url??""};n.push(g),r(n,void 0)}else r(n,this.commonService.translateToKeyParam("lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau_loi",c.message??"none"))})})}else r(n,"lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau")}constructor(a,e,t){this.commonService=a,this.apiUploadService=e,this.myPdfService=t}}return d.\u0275fac=function(a){return new(a||d)(_.LFG(k.z),_.LFG(E.W),_.LFG(C.z))},d.\u0275prov=_.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},28368:(U,m,s)=>{s.d(m,{y:()=>M});var v=s(20553),f=s(65879),S=s(88489);let _=(()=>{class d{getMode(){return""==this.browserStorageService.getStorage("mode_ui")?"light":this.browserStorageService.getStorage("mode_ui")??"light"}constructor(a){this.browserStorageService=a}}return d.\u0275fac=function(a){return new(a||d)(f.LFG(S.n))},d.\u0275prov=f.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();var k=s(46558),E=s(61325),C=s(32965);let M=(()=>{class d{constructor(a,e,t,n){this.darkModeService=a,this.commonService=e,this.sAztUploadImageOfExamService=t,this.cdnService=n}get initConfigUrlScript(){return{language_url:v.N.azt_tiny_mce_vi_langs_src}}initConfigForAdmin(){var t={};return t={height:250,menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",plugins:["code","fullscreen","link"],toolbar:"bold italic backcolor | alignleft aligncenter alignright alignjustify | link | code | fullscreen",...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(t.skin="oxide-dark",t.content_css="dark"),t}initConfigForAdminWithUploadImageBox(a){var n={};return n={selector:"textarea#file-picker",menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",branding:!1,plugins:"image code autoresize fullscreen link",toolbar:"fontsize | bold italic underline | forecolor backcolor | alignleft aligncenter alignright | image | link | code | fullscreen",font_size_formats:"8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 20pt 22pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",height:250,min_height:250,file_picker_callback:(r,o,i)=>{this.file_picker_callback(a,r,o,i)},content_css:[this.cdnService.convertCdnLinkOfGitHub("angular/styles.6c8c340cca20c274.css")],...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(n.skin="oxide-dark",n.content_css="dark"),n}initConfigForTeacher(){var t={};return t={height:250,min_height:250,menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",plugins:["fullscreen"],toolbar:"bold italic backcolor | alignleft aligncenter alignright alignjustify | fullscreen",...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(t.skin="oxide-dark",t.content_css="dark"),t}initConfigTeacherHomework(a){var n={};return n={min_height:a,menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",resize:!1,plugins:["advlist","anchor","autolink","charmap","code","fullscreen","lists","media","preview","textcolor","emoticons","fontselect","autoresize"],toolbar:"fontfamily | fontsize |bold italic underline | forecolor backcolor | alignleft aligncenter alignright | emoticons",emoticons_database:"emojis",font_family_formats:"Arial=arial,helvetica,sans-serif; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Font ch\u1eef \u0111\u1eb9p=font_chu_dep",font_size_formats:"8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 20pt 22pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",content_style:`@font-face { font-family: font_chu_dep; src: url('${this.cdnService.convertCdnLinkOfGitHub("fonts/HP0015HB.ttf")}');} body { font-family: font_chu_dep; color: red; font-size: 18pt; line-height: initial;};`,...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(n.skin="oxide-dark",n.content_css="dark"),n}initConfigStudentHomework(){var t={};return t={height:450,min_height:250,menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",readonly:1,plugins:["emoticons advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | emoticons",emoticons_database:"emojis",content_style:`@font-face { font-family: font_chu_dep; src: url('${this.cdnService.convertCdnLinkOfGitHub("fonts/HP0015HB.ttf")}');} body { font-family: font_chu_dep; color: red; font-size: 18pt; line-height: initial;};`,...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(t.skin="oxide-dark",t.content_css="dark"),t}initConfigForTeacherWithUploadImageBox(a){var n={};return n={selector:"textarea#file-picker",menubar:!1,language:"vi"===this.commonService.getCurrentLang()?"vi":"en",branding:!1,plugins:"image code autoresize fullscreen",toolbar:"fontsize | bold italic underline | forecolor backcolor | alignleft aligncenter alignright | image | fullscreen",font_size_formats:"8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 20pt 22pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",height:250,min_height:250,file_picker_callback:(r,o,i)=>{this.file_picker_callback(a,r,o,i)},...this.initConfigUrlScript},"dark"==this.darkModeService.getMode()&&(n.skin="oxide-dark",n.content_css="dark"),n}file_picker_callback(a,e,t,n){let r=document.createElement("input");r.setAttribute("type","file"),r.setAttribute("accept","image/*"),r.onchange=()=>{let o=r.files?.[0],i=new FileReader;i.onload=()=>{let c=`<img src="${"data:image/png;base64, "+i.result.split(",")[1]}">`;this.sAztUploadImageOfExamService.replaceImageInContent(a,c).subscribe(g=>{if(g.errorMessage)this.commonService.snackError(g.errorMessage);else{let u=document.createElement("div");u.innerHTML=this.commonService.removeXssInHtml(g.content);let h=u.firstChild;h&&h.src&&e(h.src)}})},i.readAsDataURL(o)},r.click()}}return d.\u0275fac=function(a){return new(a||d)(f.LFG(_),f.LFG(k.z),f.LFG(E.$),f.LFG(C.E))},d.\u0275prov=f.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);