(()=>{"use strict";var e,g={},v={};function a(e){var f=v[e];if(void 0!==f)return f.exports;var t=v[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=g,a.amdO={},e=[],a.O=(f,t,d,c)=>{if(!t){var r=1/0;for(n=0;n<e.length;n++){for(var[t,d,c]=e[n],l=!0,o=0;o<t.length;o++)(!1&c||r>=c)&&Object.keys(a.O).every(p=>a.O[p](t[o]))?t.splice(o--,1):(l=!1,c<r&&(r=c));if(l){e.splice(n--,1);var b=d();void 0!==b&&(f=b)}}return f}c=c||0;for(var n=e.length;n>0&&e[n-1][2]>c;n--)e[n]=e[n-1];e[n]=[t,d,c]},a.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return a.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;a.t=function(t,d){if(1&d&&(t=this(t)),8&d||"object"==typeof t&&t&&(4&d&&t.__esModule||16&d&&"function"==typeof t.then))return t;var c=Object.create(null);a.r(c);var n={};f=f||[null,e({}),e([]),e(e)];for(var r=2&d&&t;"object"==typeof r&&!~f.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach(l=>n[l]=()=>t[l]);return n.default=()=>t,a.d(c,n),c}})(),a.d=(e,f)=>{for(var t in f)a.o(f,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((f,t)=>(a.f[t](e,f),f),[])),a.u=e=>(592===e?"common":e)+"."+{9:"ed52397d8adc3aa8",34:"773f7347e4190ec1",40:"9a1e5733c7d3d952",96:"4ddde8d4305a929a",129:"9b57160005b6f7d4",137:"3e726224b1737143",173:"7f1095a5a917b729",228:"92ff3ba7ebc7afdb",260:"61babebee244aaad",271:"a401a1bdba32bc7a",284:"8f655450146bb2d8",301:"41f574a1d8dfb325",309:"4a9a2a44e7947a17",384:"e6fbf401c8a3836a",388:"a01b969071716348",395:"34ba1d574bfd548e",465:"adab39eedcda600c",474:"6c3d337e04f795b2",484:"042275c0b2a4697c",549:"004aa0866f713ab1",592:"02426694e3a53c4e",596:"8e7648a7c2528ece",612:"2e45b1cd576e884f",622:"d61f68b4a7943202",632:"fc87dcb320d58d03",635:"935dcc2a56609503",650:"2d87337ecfc38b56",662:"23d3435010433c22",663:"21355458aa9c1e0c",728:"d35d175c2732c5b1",733:"19752a94206c06fd",735:"2e82ad1d27716d88",738:"dc529a186bb68e35",771:"fe83cffa1198c5b1",787:"c832dccac70e8888",828:"737c2e9a045b9393",892:"828776f4e25ea1b2",896:"164aa0e577dcfd2d",904:"c1f5ba94ff8d27b7",905:"2d67754a426d33f5",913:"c38d63e24de0f58e",918:"7d4fe12bc02a0085",931:"11f835aa100d9e5c",958:"279d3b0e983d0fcd"}[e]+".js",a.miniCssF=e=>{},a.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";a.l=(t,d,c,n)=>{if(e[t])e[t].push(d);else{var r,l;if(void 0!==c)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var i=o[b];if(i.getAttribute("src")==t||i.getAttribute("data-webpack")==f+c){r=i;break}}r||(l=!0,(r=document.createElement("script")).type="module",r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",f+c),r.src=a.tu(t)),e[t]=[d];var s=(h,p)=>{r.onerror=r.onload=null,clearTimeout(u);var _=e[t];if(delete e[t],r.parentNode&&r.parentNode.removeChild(r),_&&_.forEach(y=>y(p)),h)return h(p)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=s.bind(null,r.onerror),r.onload=s.bind(null,r.onload),l&&document.head.appendChild(r)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="https://cdn.jsdelivr.net/gh/azota889/frontend3/angular/",(()=>{var e={666:0};a.f.j=(d,c)=>{var n=a.o(e,d)?e[d]:void 0;if(0!==n)if(n)c.push(n[2]);else if(666!=d){var r=new Promise((i,s)=>n=e[d]=[i,s]);c.push(n[2]=r);var l=a.p+a.u(d),o=new Error;a.l(l,i=>{if(a.o(e,d)&&(0!==(n=e[d])&&(e[d]=void 0),n)){var s=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.src;o.message="Loading chunk "+d+" failed.\n("+s+": "+u+")",o.name="ChunkLoadError",o.type=s,o.request=u,n[1](o)}},"chunk-"+d,d)}else e[d]=0},a.O.j=d=>0===e[d];var f=(d,c)=>{var o,b,[n,r,l]=c,i=0;if(n.some(u=>0!==e[u])){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(l)var s=l(a)}for(d&&d(c);i<n.length;i++)a.o(e,b=n[i])&&e[b]&&e[b][0](),e[b]=0;return a.O(s)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();