"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[6260],{76094:(K,N,i)=>{i.d(N,{x:()=>C});var C=function(n){return n[n.templateOriginalA4=20]="templateOriginalA4",n[n.templateA5Full50=22]="templateA5Full50",n[n.templateA4Essay=21]="templateA4Essay",n[n.templateA6Full20=23]="templateA6Full20",n[n.templateTrueFalseA4=15]="templateTrueFalseA4",n[n.templateTrueFalseEssayA4=16]="templateTrueFalseEssayA4",n[n.templateTrueFalseA5=17]="templateTrueFalseA5",n[n.templateTrueFalseA6=18]="templateTrueFalseA6",n[n.templateA4WithFax=19]="templateA4WithFax",n[n.templateA4WithFaxV2=190]="templateA4WithFaxV2",n}(C||{})},17997:(K,N,i)=>{i.d(N,{H:()=>I});var C=i(76094),n=i(65879),R=i(46558),w=i(97151),g=i(61419),B=i(41385),x=i(38228);let I=(()=>{class O{constructor(a,r,d,o,v){this.commonService=a,this.shareFileFlutterService=r,this.encryptService=d,this.formatAnswerSheetService=o,this.exportExcelService=v,this.allAnswerSheet=C.x}exportFileNameOfStudentCode(a,r,d){return 100==a&&(r=""),this.commonService.createFileNameExportFile(["DanhSachSBD"+(r?"_"+r:"")+"_"+this.encryptService.createMd5(d).substring(0,6)])+".xlsx"}chooseAnswerSheetTemplate(a,r,d,o,v,b){return r==this.allAnswerSheet.templateA5Full50?a.createA5AnswerSheetFullA4_50(b??50):r==this.allAnswerSheet.templateA4Essay?a.createA4AnswerSheet_35hh(b??50):r==this.allAnswerSheet.templateA6Full20?a.createA6AnswerSheetFullA4_20(b??20):r==this.allAnswerSheet.templateTrueFalseA4||r==this.allAnswerSheet.templateTrueFalseEssayA4||r==this.allAnswerSheet.templateTrueFalseA5||r==this.allAnswerSheet.templateTrueFalseA6||r==this.allAnswerSheet.templateA4WithFax||r==this.allAnswerSheet.templateA4WithFaxV2?a.createTrueFalseAnswerSheet():a.createAzotaAnswerSheet_A4(b??120)}exportFileNameOfAnswerSheet(a,r,d){var o="";return 100==a&&(r=""),(0==a||100==a)&&(o=this.commonService.createFileNameExportFile(["PhieuTL_"+d+(r?"_"+r:"")])),o}exportFileNameOfAnswerExcelOffline(a,r,d){var o="";return 100==a&&(r=""),(0==a||100==a)&&(o=this.commonService.createFileNameExportFile(["DapAn_"+(r?"_"+r:"")])),o}exportFileNameOfRawExam(a,r,d){var o="";return 100==a&&(r=""),(0==a||100==a)&&(o=this.commonService.createFileNameExportFile([(r?"_"+r:"")+"_"+this.encryptService.createMd5(d).substring(0,6)])),o}exportFileNameOfExamOffline(a,r,d,o){var v="";return 100==a&&(r=""),(0==a||100==a)&&(v=this.commonService.createFileNameExportFile([(o?this.formatAnswerSheetService.formatOfflineExamHashIdToNumber(o,3)+"_":"")+d+(r?"_"+r:"")])),v}printStudentCode(a,r){var d=[];let o=this.commonService.myClone(r);for(let v=0;v<o.length;v++)d.push({code:o[v].code??0,fullName:o[v]?.fullName??"",birthday:o[v]?.birthday??"",className:o[v].classroomName??""});this._exportExcelForCodeNumber(a,d)}_exportExcelForCodeNumber(a,r){let d=this.exportFileNameOfStudentCode(0,a?.name??"",a?.hashId??"");const o=this.exportExcelService.exportExcelForCodeNumber(r);this.shareFileFlutterService.shareFileWithBlob(o,d)}}return O.\u0275fac=function(a){return new(a||O)(n.LFG(R.z),n.LFG(w.g),n.LFG(g.j),n.LFG(B.j),n.LFG(x.L))},O.\u0275prov=n.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"}),O})()},56260:(K,N,i)=>{i.d(N,{F:()=>Q});var C=i(85965),R=i(8720),w=i(70731),g=i(89156),B=i(89745),x=i(79617),I=i(65879),O=i(36668),W=i(32965),a=i(46558),r=i(78953),d=i(19662),o=i(17997),v=i(41385),b=i(97151),z=i(27161),U=i(71518);let Q=(()=>{class y{constructor(s,e,f,l,c,p,t,_,u,E){this.docxService=s,this.cdnService=e,this.commonService=f,this.userService=l,this.questionRenderService=c,this.printAnswersheetService=p,this.formatAnswerSheetService=t,this.shareFileFlutterService=_,this.sAztAnswerTypeService=u,this.documentConfigService=E,this.configRenderService=new R.v,this.saveLoadingMsg="",this.isAnsDetail=!1,this.isEnableDebug=!1,this.zipper=new C,this.countRetryLoadJS=0}loadScriptAction(){return new Promise((s,e)=>{this.commonService.loadScriptPromises([{source:this.cdnService.registerJsCdn("min.azota_docx_script"),name:"min.azota_docx_script"}]).then(()=>{setTimeout(()=>{window.hasOwnProperty("azotaDocx")?typeof azotaDocx<"u"&&azotaDocx?s(!0):e(new Error("lang_core_lib_not_load")):(this.countRetryLoadJS++,this.countRetryLoadJS>3?e(new Error("lang_core_lib_not_load")):s(this.loadScriptAction()))},1e3)})})}convertAnswerQuestion(s,e){let f=[],l=[];return s.answerResult&&this.isAnsDetail&&s.answerResult.forEach(c=>{let p=c;const t=s.answers?.find(_=>_.key===c);t&&(p=t.alpha??p),l.push(p)}),s.answers.forEach(c=>{let p="<b>     "+(l.includes(c.alpha??c.key)?"*":"")+(e?(c.alpha?c.alpha:c.key).toLowerCase()+")":(c.alpha?c.alpha:c.key)+".")+"</b> "+(0,x.uG)(c.content);f.push(p)}),f}getDataForExportDocxApi(s,e,f){let l=[],c=0;if(f){let t=this.commonService.myTranslateInstant("lang_cms_publish_test_exam");l.push({content:`<b> ${t} `+this.formatAnswerSheetService.formatOfflineExamHashIdToNumber(f,3)+".</b>",answers:[]})}let p=this.expandInfoParse?.label??this.commonService.myTranslateInstant("lang_auto_cau");return e.forEach(t=>{1!==s.hideGroupQuestion&&t.groupInfo?.isFirstInGroup&&t.groupInfo.groupContent&&l.push({content:`<b>${t.groupInfo.groupContent}<b>`,answers:[]}),this.isEnableDebug&&l.push({content:` <br/><br/><br/>*** <b>Question ID: ${t.id}</b> ***`,answers:[]});let _={content:`<b>${p} `+((t.labelIndex??c)+(s.startQuestionIndex??1))+".</b> "+(0,x.uG)(t.content),answers:this.convertAnswerQuestion(t??[],this.sAztAnswerTypeService.isTrueFalseAnswer(t))};if(c++,l.push(_),this.isAnsDetail&&((t.help||this.sAztAnswerTypeService.isFillAnswer(t))&&l.push({content:`<b>${this.commonService.myTranslateInstant("lang_auto_loi_giai")}</b><br/> ${t.help}`,answers:[]}),t.answerResult&&this.isAnsDetail)){let u=[];t.answerResult.forEach(E=>{let A=E;const F=t.answers?.find(M=>M.key===E);F&&(A=F.alpha??A),u.push(A)}),this.sAztAnswerTypeService.isFillAnswer(t)&&l.push({content:`${this.commonService.myTranslateInstant("lang_auto_dap_an")}: ${u.join(" | ")}`,answers:[]})}this.isEnableDebug&&l.push({content:"*** *************** .. **************** ***<br/><br/><br/>",answers:[]})}),l}itemConverterCaller(s,e,f,l,c){return new Promise((p,t)=>{this.questionRenderService.parseRenderQuestions(s.listQuestion,_=>{this.saveLoadingMsg.includes(")")||(this.changeMsg?this.changeMsg(this.saveLoadingMsg+Math.floor(_)+"%"):g.G.changeMsgLoadingEffect(this.saveLoadingMsg+Math.floor(_)+"%"))},this.configRenderService,void 0,!0,c).then(_=>{let u=[];const E=[];e.examName&&E.push(x.Ip.createLineCenterBold(e.examName)),e.subject&&E.push(x.Ip.createLineCenterBold(e.subject)),e.examMinutes&&E.push(x.Ip.createLineCenterItalicized(e.examMinutes)),E.push(x.Ip.createLineCenterItalicized("-------------------------")),u.push({content:x.Ip.makeHeaderTable([x.Ip.createLineCenterBold(e.schoolName?e.schoolName:"")],E,!1),answers:[]}),u.push({content:x.Ip.createLineBold(this.commonService.myTranslateInstant("lang_auto_ho_ten_thi_sinh_offline")??"").outerHTML,answers:[]}),u.push({content:x.Ip.createLineBold(this.commonService.myTranslateInstant("lang_auto_so_bao_danh_offline")??"").outerHTML,answers:[]}),u=u.concat(this.getDataForExportDocxApi(l,_,s.offlineExamMixQuestionObj?s.offlineExamMixQuestionObj.hashId??0:void 0)),typeof azotaDocx<"u"&&azotaDocx?this.docxService.exportToDocxBinary(u,{isHeadless:!0},(A,F,M)=>{}).then(A=>{p({userObj:f,data:A,input:u,additionParams:e,offlineExamMixQuestionObj:s.offlineExamMixQuestionObj})}):t(new Error("C\xf3 l\u1ed7i x\u1ea3y ra trong qu\xe1 tr\xecnh x\u1eed l\xfd d\u1eef li\u1ec7u (Kh\xf4ng t\u1ea3i \u0111\u01b0\u1ee3c th\u01b0 vi\u1ec7n). Vui l\xf2ng F5 v\xe0 th\u1eed l\u1ea1i sau!"))}).catch(_=>{t(new Error(_[0].message))})})}masterConverterCaller(s,e,f,l,c,p){return new Promise((t,_)=>{const u=this.userService.getUserObj();let E=this.commonService.myTranslateInstant("lang_testbank_utils_footer_information_school")?.toLowerCase(),A=this.commonService.myTranslateInstant("lang_auto_docx_mon_thi")?.toLowerCase(),F=this.commonService.myTranslateInstant("lang_auto_docx_bai_thi")?.toLowerCase(),M=this.commonService.myTranslateInstant("lang_testbank_tested_list_time_homework"),G=this.commonService.myTranslateInstant("lang_core_khong_ke_thoi_gian_giao_de"),P=this.commonService.myTranslateInstant("lang_testbank_tested_list_minute"),L=this.commonService.myTranslateInstant("lang_auto_khong_gioi_han");const S=new w.Q(1,{function:(h,m)=>{this.saveLoadingMsg=`${this.commonService.myTranslateInstant("lang_auto_dang_tao_tep_tin_cho_de_thi")} ${m<=1?"":`(${h}/${m}) `}`,this.changeMsg?this.changeMsg(this.saveLoadingMsg):g.G.changeMsgLoadingEffect(this.saveLoadingMsg)}});s.forEach(h=>{S.addTask(this,this.itemConverterCaller,[h,{schoolName:l?.nameSchool??`{${E}}`,subject:l?.nameSubject??`{${A}}`,examName:e.name??`{${F}}`,examMinutes:e.minutes&&e.minutes>0?`${M}: `+e.minutes+` ${P} (${G})`:` ${M}: ${L}`,templateType:c??0,numberOfQuestion:h.listQuestion.length,examId:h.offlineExamMixQuestionObj?.hashId??0},u,e,p])}),S.start().then(h=>{if(h.errs.length>0)_(h.errs[0]);else if(1===h.datas.length){const m=h.datas[0],D=new Blob([m.data],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});let T=this.createNameExam(e,f,m.offlineExamMixQuestionObj);this.shareFileFlutterService.shareFileWithBlob(D,T),t()}else h.datas.forEach(m=>{let D=this.createNameExam(e,f,m.offlineExamMixQuestionObj);D=this.replaceAllString(D,"/","_"),this.zipper.file("DOCS/"+D,m.data)}),setTimeout(()=>{this.zipper.generateAsync({type:"blob"}).then(m=>{let D=this.commonService.createFileNameExportFile([e.name??"azota"])+"_offline_test.zip";this.shareFileFlutterService.shareFileWithBlob(m,D),t()},m=>{_(m)})},200)})})}replaceAllString(s,e,f){for(;s.includes(e);)s=s.replace(e,f);return s}createNameExam(s,e,f){return e?this.printAnswersheetService.exportFileNameOfExamOffline(0,s.name??"",e?.hashId??"",f?.hashId??0)+".docx":this.printAnswersheetService.exportFileNameOfRawExam(0,s.name??"",s.hashId??"")+".docx"}downloadExam(s,e,f,l,c,p,t,_,u,E,A){return new Promise((F,M)=>{this.isAnsDetail=s,this.isEnableDebug=!!E,this.expandInfoParse=this.commonService.castJsonToObj(e.expandInfo??"{}"),this.changeMsg=u,this.loadScriptAction().then(G=>{G?this.documentConfigService.apiDocumentConfigGetExamConfigDataV2Get(e.hashId??"").subscribe(P=>{if(1==P.success){let L=0,S=0;c.forEach((h,m)=>{h.labelIndex=m,P.data?.resetQuestionIndex&&h.groupInfo&&h.groupInfo.groupId&&(L!=h.groupInfo.groupId&&(L=h.groupInfo.groupId,S=0),h.labelIndex=S,S++)})}this.masterConverterCaller([{listQuestion:c,offlineExamMixQuestionObj:l}],e,f,p,t,A).then(()=>{this.zipper=new C,_?_(10):g.G.closeLoadingEffect(10),F()}).catch(L=>{g.G.closeLoadingEffect(10),M(L)})}):(_?_(10):g.G.closeLoadingEffect(10),M(new Error("lang_core_lib_not_load")))}).catch(()=>{_?_(10):g.G.closeLoadingEffect(10),M(new Error("lang_core_lib_not_load"))})})}downloadExamObjs(s,e,f,l,c,p,t,_,u,E){return new Promise((A,F)=>{this.isAnsDetail=s,this.isEnableDebug=!!u,this.expandInfoParse=this.commonService.castJsonToObj(e.expandInfo??"{}"),this.changeMsg=_,this.loadScriptAction().then(M=>{if(M){let G=!0;const P=[];this.documentConfigService.apiDocumentConfigGetExamConfigDataV2Get(e.hashId??"").subscribe(L=>{l.forEach(S=>{let h=this.commonService.castJsonToClassObjs(B.v,JSON.stringify(S.mixQuestions??[]))??[];if(h.length>0){if(1==L.success){let m=0,D=0;h.forEach((T,k)=>{T.labelIndex=k,L.data?.resetQuestionIndex&&T.groupInfo&&T.groupInfo.groupId&&(m!=T.groupInfo.groupId&&(m=T.groupInfo.groupId,D=0),T.labelIndex=D,D++)})}P.push({listQuestion:h,offlineExamMixQuestionObj:S})}else G=!1}),G?this.masterConverterCaller(P,e,f,c,p,E).then(()=>{this.zipper=new C,t?t(10):g.G.closeLoadingEffect(10),A()}).catch(S=>{t?t(10):g.G.closeLoadingEffect(10),F(S)}):(t?t(10):g.G.closeLoadingEffect(10),F(new Error("lang_testbank_exam_is_invalid_condition")))})}else t?t(10):g.G.closeLoadingEffect(10),F(new Error("lang_core_lib_not_load"))}).catch(()=>{t?t(10):g.G.closeLoadingEffect(10),F(new Error("lang_core_lib_not_load"))})})}}return y.\u0275fac=function(s){return new(s||y)(I.LFG(O.n),I.LFG(W.E),I.LFG(a.z),I.LFG(r.U),I.LFG(d.h),I.LFG(o.H),I.LFG(v.j),I.LFG(b.g),I.LFG(z.i),I.LFG(U.Cq))},y.\u0275prov=I.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()}}]);