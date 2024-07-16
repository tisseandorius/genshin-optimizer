import{r as K,j as ye,er as Me,x as ve}from"./index-BU72BQSn.js";function we(e,t){for(var a=0;a<t.length;a++){const s=t[a];if(typeof s!="string"&&!Array.isArray(s)){for(const p in s)if(p!=="default"&&!(p in e)){const u=Object.getOwnPropertyDescriptor(s,p);u&&Object.defineProperty(e,p,u.get?u:{enumerable:!0,get:()=>s[p]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var he={},X={};X._=X._interop_require_default=be;function be(e){return e&&e.__esModule?e:{default:e}}var ce={},ke={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return t}});let t=a=>{}})(ke);var Te={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return t}});function t(a){let{widthInt:s,heightInt:p,blurWidth:u,blurHeight:n,blurDataURL:i,objectFit:T}=a;const O=20,l=u?u*40:s,m=n?n*40:p,c=l&&m?"viewBox='0 0 "+l+" "+m+"'":"",D=c?"none":T==="contain"?"xMidYMid":T==="cover"?"xMidYMid slice":"none";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+O+"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='"+O+"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+D+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}})(Te);var te={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(p,u){for(var n in u)Object.defineProperty(p,n,{enumerable:!0,get:u[n]})}t(e,{VALID_LOADERS:function(){return a},imageConfigDefault:function(){return s}});const a=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}})(te);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return O}});const t=Te,a=te;function s(l){return l.default!==void 0}function p(l){return l.src!==void 0}function u(l){return typeof l=="object"&&(s(l)||p(l))}function n(l){return typeof l>"u"?l:typeof l=="number"?Number.isFinite(l)?l:NaN:typeof l=="string"&&/^[0-9]+$/.test(l)?parseInt(l,10):NaN}function i(l,m,c){let{deviceSizes:D,allSizes:g}=l;if(c){const A=/(^|\s)(1?\d?\d)vw/g,I=[];for(let h;h=A.exec(c);h)I.push(parseInt(h[2]));if(I.length){const h=Math.min(...I)*.01;return{widths:g.filter(C=>C>=D[0]*h),kind:"w"}}return{widths:g,kind:"w"}}return typeof m!="number"?{widths:D,kind:"w"}:{widths:[...new Set([m,m*2].map(A=>g.find(I=>I>=A)||g[g.length-1]))],kind:"x"}}function T(l){let{config:m,src:c,unoptimized:D,width:g,quality:L,sizes:A,loader:I}=l;if(D)return{src:c,srcSet:void 0,sizes:void 0};const{widths:h,kind:C}=i(m,g,A),r=h.length-1;return{sizes:!A&&C==="w"?"100vw":A,srcSet:h.map((_,o)=>I({config:m,src:c,quality:L,width:_})+" "+(C==="w"?_:o+1)+C).join(", "),src:I({config:m,src:c,quality:L,width:h[r]})}}function O(l,m){let{src:c,sizes:D,unoptimized:g=!1,priority:L=!1,loading:A,className:I,quality:h,width:C,height:r,fill:_=!1,style:o,overrideSrc:d,onLoad:P,onLoadingComplete:y,placeholder:S="empty",blurDataURL:U,fetchPriority:R,layout:E,objectFit:M,objectPosition:w,lazyBoundary:Y,lazyRoot:Z,...W}=l;const{imgConf:G,showAltText:F,blurComplete:H,defaultLoader:q}=m;let v,b=G||a.imageConfigDefault;if("allSizes"in b)v=b;else{const f=[...b.deviceSizes,...b.imageSizes].sort((j,B)=>j-B),x=b.deviceSizes.sort((j,B)=>j-B);v={...b,allSizes:f,deviceSizes:x}}if(typeof q>"u")throw new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`);let V=W.loader||q;delete W.loader,delete W.srcSet;const J="__next_img_default"in V;if(J){if(v.loader==="custom")throw new Error('Image with src "'+c+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{const f=V;V=x=>{const{config:j,...B}=x;return f(B)}}if(E){E==="fill"&&(_=!0);const f={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},x={responsive:"100vw",fill:"100vw"},j=f[E];j&&(o={...o,...j});const B=x[E];B&&!D&&(D=B)}let N="",k=n(C),z=n(r),de,pe;if(u(c)){const f=s(c)?c.default:c;if(!f.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(f));if(!f.height||!f.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(f));if(de=f.blurWidth,pe=f.blurHeight,U=U||f.blurDataURL,N=f.src,!_){if(!k&&!z)k=f.width,z=f.height;else if(k&&!z){const x=k/f.width;z=Math.round(f.height*x)}else if(!k&&z){const x=z/f.height;k=Math.round(f.width*x)}}}c=typeof c=="string"?c:N;let me=!L&&(A==="lazy"||typeof A>"u");(!c||c.startsWith("data:")||c.startsWith("blob:"))&&(g=!0,me=!1),v.unoptimized&&(g=!0),J&&c.endsWith(".svg")&&!v.dangerouslyAllowSVG&&(g=!0),L&&(R="high");const Ne=n(h),$=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:w}:{},F?{}:{color:"transparent"},o),Ce=!H&&S!=="empty"?S==="blur"?'url("data:image/svg+xml;charset=utf-8,'+(0,t.getImageBlurSvg)({widthInt:k,heightInt:z,blurWidth:de,blurHeight:pe,blurDataURL:U||"",objectFit:$.objectFit})+'")':'url("'+S+'")':null;let Le=Ce?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Ce}:{};const re=T({config:v,src:c,unoptimized:g,width:k,quality:Ne,sizes:D,loader:V});return{props:{...W,loading:me?"lazy":A,fetchPriority:R,width:k,height:z,decoding:"async",className:I,style:{...$,...Le},sizes:re.sizes,srcSet:re.srcSet,src:d||re.src},meta:{unoptimized:g,priority:L,placeholder:S,fill:_}}}})(ce);var _e={exports:{}},ee={};function De(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(De=function(s){return s?a:t})(e)}ee._=ee._interop_require_wildcard=Ge;function Ge(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var a=De(t);if(a&&a.has(e))return a.get(e);var s={__proto__:null},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(u!=="default"&&Object.prototype.hasOwnProperty.call(e,u)){var n=p?Object.getOwnPropertyDescriptor(e,u):null;n&&(n.get||n.set)?Object.defineProperty(s,u,n):s[u]=e[u]}return s.default=e,a&&a.set(e,s),s}var Q={exports:{}},oe={},fe;function Fe(){return fe||(fe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return u}});const t=K,a=typeof window>"u",s=a?()=>{}:t.useLayoutEffect,p=a?()=>{}:t.useEffect;function u(n){const{headManager:i,reduceComponentsToState:T}=n;function O(){if(i&&i.mountedInstances){const m=t.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(T(m,n))}}if(a){var l;i==null||(l=i.mountedInstances)==null||l.add(n.children),O()}return s(()=>{var m;return i==null||(m=i.mountedInstances)==null||m.add(n.children),()=>{var c;i==null||(c=i.mountedInstances)==null||c.delete(n.children)}}),s(()=>(i&&(i._pendingUpdate=O),()=>{i&&(i._pendingUpdate=O)})),p(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}}(oe)),oe}var se={},ge;function We(){return ge||(ge=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return s}});const s=X._(K).default.createContext({})}(se)),se}var ne={},Se;function Ve(){return Se||(Se=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"HeadManagerContext",{enumerable:!0,get:function(){return s}});const s=X._(K).default.createContext({})}(ne)),ne}var ie={},Ee;function xe(){return Ee||(Ee=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return t}});function t(a){let{ampFirst:s=!1,hybrid:p=!1,hasQuery:u=!1}=a===void 0?{}:a;return s||p&&u}}(ie)),ie}var Pe;function Xe(){return Pe||(Pe=1,function(e,t){"use client";var a={ALLUSERSPROFILE:"C:\\ProgramData",AMDRMSDKPATH:"C:\\Program Files\\AMD\\RyzenMasterSDK\\",APPDATA:"C:\\Users\\kulay\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133106374986503655",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_24812_MWYBIZMOQCPPKOKV",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"EVICTUS",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ENABLE_DOWNLOAD_PROMPT:"0",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_2316:"1",FORCE_COLOR:"true",GIT_ASKPASS:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\kulay",INIT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",LANG:"ru_RU.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\kulay\\AppData\\Local",LOGONSERVER:"\\\\EVICTUS",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.7.2 win32 x64",npm_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57\\yarn",npm_lifecycle_event:"silent-release",npm_node_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57\\node",npm_package_json:"C:\\Users\\kulay\\Git\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.9.3",NUMBER_OF_PROCESSORS:"12",NVTOOLSEXT_PATH:"C:\\Program Files\\NVIDIA Corporation\\NvToolsExt\\",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"10559521859859320714",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\kulay\\Git\\genshin-optimizer",OneDrive:"C:\\Users\\kulay\\OneDrive",OneDriveConsumer:"C:\\Users\\kulay\\OneDrive",OnlineServices:"Online Services",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\kulay\\Git\\node_modules\\.bin;C:\\Users\\kulay\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57;C:\\Users\\kulay\\AppData\\Local\\cloud-code\\installer\\google-cloud-sdk\\bin;C:\\Program Files\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\Python312\\Scripts;C:\\Program Files\\Python312;C:\\Program Files\\HP\\HP One Agent;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\kulay\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\Miniconda3\\python.exe;C:\\Users\\kulay\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\kulay\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",platformcode:"M7",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\kulay\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"EMEA",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.90.1",TMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",USERDOMAIN:"EVICTUS",USERDOMAIN_ROAMINGPROFILE:"EVICTUS",USERNAME:"kulay",USERPROFILE:"C:\\Users\\kulay",VBOX_HWVIRTEX_IGNORE_SVM_IN_USE:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-29a24468e3-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(t,"__esModule",{value:!0});function s(C,r){for(var _ in r)Object.defineProperty(C,_,{enumerable:!0,get:r[_]})}s(t,{default:function(){return h},defaultHead:function(){return c}});const p=X,u=ee,n=ye,i=u._(K),T=p._(Fe()),O=We(),l=Ve(),m=xe();function c(C){C===void 0&&(C=!1);const r=[(0,n.jsx)("meta",{charSet:"utf-8"})];return C||r.push((0,n.jsx)("meta",{name:"viewport",content:"width=device-width"})),r}function D(C,r){return typeof r=="string"||typeof r=="number"?C:r.type===i.default.Fragment?C.concat(i.default.Children.toArray(r.props.children).reduce((_,o)=>typeof o=="string"||typeof o=="number"?_:_.concat(o),[])):C.concat(r)}const g=["name","httpEquiv","charSet","itemProp"];function L(){const C=new Set,r=new Set,_=new Set,o={};return d=>{let P=!0,y=!1;if(d.key&&typeof d.key!="number"&&d.key.indexOf("$")>0){y=!0;const S=d.key.slice(d.key.indexOf("$")+1);C.has(S)?P=!1:C.add(S)}switch(d.type){case"title":case"base":r.has(d.type)?P=!1:r.add(d.type);break;case"meta":for(let S=0,U=g.length;S<U;S++){const R=g[S];if(d.props.hasOwnProperty(R))if(R==="charSet")_.has(R)?P=!1:_.add(R);else{const E=d.props[R],M=o[R]||new Set;(R!=="name"||!y)&&M.has(E)?P=!1:(M.add(E),o[R]=M)}}break}return P}}function A(C,r){const{inAmpMode:_}=r;return C.reduce(D,[]).reverse().concat(c(_).reverse()).filter(L()).reverse().map((o,d)=>{const P=o.key||d;if(a.__NEXT_OPTIMIZE_FONTS&&!_&&o.type==="link"&&o.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(y=>o.props.href.startsWith(y))){const y={...o.props||{}};return y["data-href"]=y.href,y.href=void 0,y["data-optimized-fonts"]=!0,i.default.cloneElement(o,y)}return i.default.cloneElement(o,{key:P})})}function I(C){let{children:r}=C;const _=(0,i.useContext)(O.AmpStateContext),o=(0,i.useContext)(l.HeadManagerContext);return(0,n.jsx)(T.default,{reduceComponentsToState:A,headManager:o,inAmpMode:(0,m.isInAmpMode)(_),children:r})}const h=I;(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(Q,Q.exports)),Q.exports}var ae={},Re;function He(){return Re||(Re=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return p}});const a=X._(K),s=te,p=a.default.createContext(s.imageConfigDefault)}(ae)),ae}var le={},Oe;function ze(){return Oe||(Oe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return s}});const s=X._(K).default.createContext(null)}(le)),le}var ue={},Ae;function Ie(){return Ae||(Ae=1,function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",AMDRMSDKPATH:"C:\\Program Files\\AMD\\RyzenMasterSDK\\",APPDATA:"C:\\Users\\kulay\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133106374986503655",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_24812_MWYBIZMOQCPPKOKV",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"EVICTUS",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ENABLE_DOWNLOAD_PROMPT:"0",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_2316:"1",FORCE_COLOR:"true",GIT_ASKPASS:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\kulay",INIT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",LANG:"ru_RU.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\kulay\\AppData\\Local",LOGONSERVER:"\\\\EVICTUS",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.7.2 win32 x64",npm_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57\\yarn",npm_lifecycle_event:"silent-release",npm_node_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57\\node",npm_package_json:"C:\\Users\\kulay\\Git\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.9.3",NUMBER_OF_PROCESSORS:"12",NVTOOLSEXT_PATH:"C:\\Program Files\\NVIDIA Corporation\\NvToolsExt\\",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"10559521859859320714",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\kulay\\Git\\genshin-optimizer",OneDrive:"C:\\Users\\kulay\\OneDrive",OneDriveConsumer:"C:\\Users\\kulay\\OneDrive",OnlineServices:"Online Services",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\kulay\\Git\\node_modules\\.bin;C:\\Users\\kulay\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57;C:\\Users\\kulay\\AppData\\Local\\cloud-code\\installer\\google-cloud-sdk\\bin;C:\\Program Files\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\Python312\\Scripts;C:\\Program Files\\Python312;C:\\Program Files\\HP\\HP One Agent;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\kulay\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\Miniconda3\\python.exe;C:\\Users\\kulay\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\kulay\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",platformcode:"M7",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\kulay\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"EMEA",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.90.1",TMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",USERDOMAIN:"EVICTUS",USERDOMAIN_ROAMINGPROFILE:"EVICTUS",USERNAME:"kulay",USERPROFILE:"C:\\Users\\kulay",VBOX_HWVIRTEX_IGNORE_SVM_IN_USE:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-29a24468e3-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return s}});function a(p){let{config:u,src:n,width:i,quality:T}=p;return u.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+(T||75)+(t.NEXT_DEPLOYMENT_ID?"&dpl="+t.NEXT_DEPLOYMENT_ID:"")}a.__next_img_default=!0;const s=a}(ue)),ue}(function(e,t){"use client";var a={ALLUSERSPROFILE:"C:\\ProgramData",AMDRMSDKPATH:"C:\\Program Files\\AMD\\RyzenMasterSDK\\",APPDATA:"C:\\Users\\kulay\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133106374986503655",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_24812_MWYBIZMOQCPPKOKV",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"EVICTUS",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ENABLE_DOWNLOAD_PROMPT:"0",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_2316:"1",FORCE_COLOR:"true",GIT_ASKPASS:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\kulay",INIT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",LANG:"ru_RU.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\kulay\\AppData\\Local",LOGONSERVER:"\\\\EVICTUS",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.7.2 win32 x64",npm_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57\\yarn",npm_lifecycle_event:"silent-release",npm_node_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57\\node",npm_package_json:"C:\\Users\\kulay\\Git\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.9.3",NUMBER_OF_PROCESSORS:"12",NVTOOLSEXT_PATH:"C:\\Program Files\\NVIDIA Corporation\\NvToolsExt\\",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"10559521859859320714",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\kulay\\Git\\genshin-optimizer",OneDrive:"C:\\Users\\kulay\\OneDrive",OneDriveConsumer:"C:\\Users\\kulay\\OneDrive",OnlineServices:"Online Services",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\kulay\\Git\\node_modules\\.bin;C:\\Users\\kulay\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57;C:\\Users\\kulay\\AppData\\Local\\cloud-code\\installer\\google-cloud-sdk\\bin;C:\\Program Files\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\Python312\\Scripts;C:\\Program Files\\Python312;C:\\Program Files\\HP\\HP One Agent;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\kulay\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\Miniconda3\\python.exe;C:\\Users\\kulay\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\kulay\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",platformcode:"M7",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\kulay\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"EMEA",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.90.1",TMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",USERDOMAIN:"EVICTUS",USERDOMAIN_ROAMINGPROFILE:"EVICTUS",USERNAME:"kulay",USERPROFILE:"C:\\Users\\kulay",VBOX_HWVIRTEX_IGNORE_SVM_IN_USE:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-29a24468e3-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return C}});const s=X,p=ee,u=ye,n=p._(K),i=s._(Me),T=s._(Xe()),O=ce,l=te,m=He(),c=ze(),D=s._(Ie()),g=a.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function L(r,_,o,d,P,y,S){const U=r==null?void 0:r.src;if(!r||r["data-loaded-src"]===U)return;r["data-loaded-src"]=U,("decode"in r?r.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!r.parentElement||!r.isConnected)){if(_!=="empty"&&P(!0),o!=null&&o.current){const E=new Event("load");Object.defineProperty(E,"target",{writable:!1,value:r});let M=!1,w=!1;o.current({...E,nativeEvent:E,currentTarget:r,target:r,isDefaultPrevented:()=>M,isPropagationStopped:()=>w,persist:()=>{},preventDefault:()=>{M=!0,E.preventDefault()},stopPropagation:()=>{w=!0,E.stopPropagation()}})}d!=null&&d.current&&d.current(r)}})}function A(r){const[_,o]=n.version.split(".",2),d=parseInt(_,10),P=parseInt(o,10);return d>18||d===18&&P>=3?{fetchPriority:r}:{fetchpriority:r}}const I=(0,n.forwardRef)((r,_)=>{let{src:o,srcSet:d,sizes:P,height:y,width:S,decoding:U,className:R,style:E,fetchPriority:M,placeholder:w,loading:Y,unoptimized:Z,fill:W,onLoadRef:G,onLoadingCompleteRef:F,setBlurComplete:H,setShowAltText:q,sizesInput:v,onLoad:b,onError:V,...J}=r;return(0,u.jsx)("img",{...J,...A(M),loading:Y,width:S,height:y,decoding:U,"data-nimg":W?"fill":"1",className:R,style:E,sizes:P,srcSet:d,src:o,ref:(0,n.useCallback)(N=>{_&&(typeof _=="function"?_(N):typeof _=="object"&&(_.current=N)),N&&(V&&(N.src=N.src),N.complete&&L(N,w,G,F,H))},[o,w,G,F,H,V,Z,v,_]),onLoad:N=>{const k=N.currentTarget;L(k,w,G,F,H)},onError:N=>{q(!0),w!=="empty"&&H(!0),V&&V(N)}})});function h(r){let{isAppRouter:_,imgAttributes:o}=r;const d={as:"image",imageSrcSet:o.srcSet,imageSizes:o.sizes,crossOrigin:o.crossOrigin,referrerPolicy:o.referrerPolicy,...A(o.fetchPriority)};return _&&i.default.preload?(i.default.preload(o.src,d),null):(0,u.jsx)(T.default,{children:(0,u.jsx)("link",{rel:"preload",href:o.srcSet?void 0:o.src,...d},"__nimg-"+o.src+o.srcSet+o.sizes)})}const C=(0,n.forwardRef)((r,_)=>{const d=!(0,n.useContext)(c.RouterContext),P=(0,n.useContext)(m.ImageConfigContext),y=(0,n.useMemo)(()=>{const F=g||P||l.imageConfigDefault,H=[...F.deviceSizes,...F.imageSizes].sort((v,b)=>v-b),q=F.deviceSizes.sort((v,b)=>v-b);return{...F,allSizes:H,deviceSizes:q}},[P]),{onLoad:S,onLoadingComplete:U}=r,R=(0,n.useRef)(S);(0,n.useEffect)(()=>{R.current=S},[S]);const E=(0,n.useRef)(U);(0,n.useEffect)(()=>{E.current=U},[U]);const[M,w]=(0,n.useState)(!1),[Y,Z]=(0,n.useState)(!1),{props:W,meta:G}=(0,O.getImgProps)(r,{defaultLoader:D.default,imgConf:y,blurComplete:M,showAltText:Y});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(I,{...W,unoptimized:G.unoptimized,placeholder:G.placeholder,fill:G.fill,onLoadRef:R,onLoadingCompleteRef:E,setBlurComplete:w,setShowAltText:Z,sizesInput:r.sizes,ref:_}),G.priority?(0,u.jsx)(h,{isAppRouter:d,imgAttributes:W}):null]})});(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)})(_e,_e.exports);var Be=_e.exports;(function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",AMDRMSDKPATH:"C:\\Program Files\\AMD\\RyzenMasterSDK\\",APPDATA:"C:\\Users\\kulay\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133106374986503655",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_24812_MWYBIZMOQCPPKOKV",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"EVICTUS",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ENABLE_DOWNLOAD_PROMPT:"0",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_2316:"1",FORCE_COLOR:"true",GIT_ASKPASS:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\kulay",INIT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",LANG:"ru_RU.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\kulay\\AppData\\Local",LOGONSERVER:"\\\\EVICTUS",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.7.2 win32 x64",npm_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57\\yarn",npm_lifecycle_event:"silent-release",npm_node_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57\\node",npm_package_json:"C:\\Users\\kulay\\Git\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.9.3",NUMBER_OF_PROCESSORS:"12",NVTOOLSEXT_PATH:"C:\\Program Files\\NVIDIA Corporation\\NvToolsExt\\",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"10559521859859320714",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\kulay\\Git\\genshin-optimizer",OneDrive:"C:\\Users\\kulay\\OneDrive",OneDriveConsumer:"C:\\Users\\kulay\\OneDrive",OnlineServices:"Online Services",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\kulay\\Git\\node_modules\\.bin;C:\\Users\\kulay\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-7b9f0e57;C:\\Users\\kulay\\AppData\\Local\\cloud-code\\installer\\google-cloud-sdk\\bin;C:\\Program Files\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\Python312\\Scripts;C:\\Program Files\\Python312;C:\\Program Files\\HP\\HP One Agent;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\kulay\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\Miniconda3\\python.exe;C:\\Users\\kulay\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\kulay\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",platformcode:"M7",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\kulay\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"EMEA",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.90.1",TMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",USERDOMAIN:"EVICTUS",USERDOMAIN_ROAMINGPROFILE:"EVICTUS",USERNAME:"kulay",USERPROFILE:"C:\\Users\\kulay",VBOX_HWVIRTEX_IGNORE_SVM_IN_USE:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-29a24468e3-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(e,"__esModule",{value:!0});function a(O,l){for(var m in l)Object.defineProperty(O,m,{enumerable:!0,get:l[m]})}a(e,{default:function(){return T},getImageProps:function(){return i}});const s=X,p=ce,u=Be,n=s._(Ie());function i(O){const{props:l}=(0,p.getImgProps)(O,{defaultLoader:n.default,imgConf:t.__NEXT_IMAGE_OPTS});for(const[m,c]of Object.entries(l))c===void 0&&delete l[m];return{props:l}}const T=u.Image})(he);var Ue=he;const je=ve(Ue),Ze=we({__proto__:null,default:je},[Ue]);export{Ze as i};