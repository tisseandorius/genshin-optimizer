import{r as K,j as Te,ew as Me,x as ve}from"./index-QmMj1w34.js";function we(e,t){for(var i=0;i<t.length;i++){const s=t[i];if(typeof s!="string"&&!Array.isArray(s)){for(const p in s)if(p!=="default"&&!(p in e)){const u=Object.getOwnPropertyDescriptor(s,p);u&&Object.defineProperty(e,p,u.get?u:{enumerable:!0,get:()=>s[p]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var ye={},V={};V._=V._interop_require_default=Fe;function Fe(e){return e&&e.__esModule?e:{default:e}}var ce={},be={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return t}});let t=i=>{}})(be);var De={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return t}});function t(i){let{widthInt:s,heightInt:p,blurWidth:u,blurHeight:n,blurDataURL:a,objectFit:D}=i;const O=20,l=u?u*40:s,m=n?n*40:p,c=l&&m?"viewBox='0 0 "+l+" "+m+"'":"",h=c?"none":D==="contain"?"xMidYMid":D==="cover"?"xMidYMid slice":"none";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+O+"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='"+O+"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+h+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}})(De);var te={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(p,u){for(var n in u)Object.defineProperty(p,n,{enumerable:!0,get:u[n]})}t(e,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return s}});const i=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}})(te);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return O}});const t=De,i=te;function s(l){return l.default!==void 0}function p(l){return l.src!==void 0}function u(l){return typeof l=="object"&&(s(l)||p(l))}function n(l){return typeof l>"u"?l:typeof l=="number"?Number.isFinite(l)?l:NaN:typeof l=="string"&&/^[0-9]+$/.test(l)?parseInt(l,10):NaN}function a(l,m,c){let{deviceSizes:h,allSizes:S}=l;if(c){const A=/(^|\s)(1?\d?\d)vw/g,I=[];for(let y;y=A.exec(c);y)I.push(parseInt(y[2]));if(I.length){const y=Math.min(...I)*.01;return{widths:S.filter(C=>C>=h[0]*y),kind:"w"}}return{widths:S,kind:"w"}}return typeof m!="number"?{widths:h,kind:"w"}:{widths:[...new Set([m,m*2].map(A=>S.find(I=>I>=A)||S[S.length-1]))],kind:"x"}}function D(l){let{config:m,src:c,unoptimized:h,width:S,quality:L,sizes:A,loader:I}=l;if(h)return{src:c,srcSet:void 0,sizes:void 0};const{widths:y,kind:C}=a(m,S,A),r=y.length-1;return{sizes:!A&&C==="w"?"100vw":A,srcSet:y.map((_,o)=>I({config:m,src:c,quality:L,width:_})+" "+(C==="w"?_:o+1)+C).join(", "),src:I({config:m,src:c,quality:L,width:y[r]})}}function O(l,m){let{src:c,sizes:h,unoptimized:S=!1,priority:L=!1,loading:A,className:I,quality:y,width:C,height:r,fill:_=!1,style:o,overrideSrc:d,onLoad:E,onLoadingComplete:T,placeholder:g="empty",blurDataURL:U,fetchPriority:P,layout:R,objectFit:M,objectPosition:w,lazyBoundary:Y,lazyRoot:Z,...W}=l;const{imgConf:G,showAltText:k,blurComplete:H,defaultLoader:q}=m;let v,F=G||i.imageConfigDefault;if("allSizes"in F)v=F;else{const f=[...F.deviceSizes,...F.imageSizes].sort((j,z)=>j-z),X=F.deviceSizes.sort((j,z)=>j-z);v={...F,allSizes:f,deviceSizes:X}}if(typeof q>"u")throw new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`);let x=W.loader||q;delete W.loader,delete W.srcSet;const J="__next_img_default"in x;if(J){if(v.loader==="custom")throw new Error('Image with src "'+c+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{const f=x;x=X=>{const{config:j,...z}=X;return f(z)}}if(R){R==="fill"&&(_=!0);const f={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},X={responsive:"100vw",fill:"100vw"},j=f[R];j&&(o={...o,...j});const z=X[R];z&&!h&&(h=z)}let N="",b=n(C),B=n(r),de,pe;if(u(c)){const f=s(c)?c.default:c;if(!f.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(f));if(!f.height||!f.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(f));if(de=f.blurWidth,pe=f.blurHeight,U=U||f.blurDataURL,N=f.src,!_){if(!b&&!B)b=f.width,B=f.height;else if(b&&!B){const X=b/f.width;B=Math.round(f.height*X)}else if(!b&&B){const X=B/f.height;b=Math.round(f.width*X)}}}c=typeof c=="string"?c:N;let me=!L&&(A==="lazy"||typeof A>"u");(!c||c.startsWith("data:")||c.startsWith("blob:"))&&(S=!0,me=!1),v.unoptimized&&(S=!0),J&&c.endsWith(".svg")&&!v.dangerouslyAllowSVG&&(S=!0),L&&(P="high");const Ne=n(y),$=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:w}:{},k?{}:{color:"transparent"},o),Ce=!H&&g!=="empty"?g==="blur"?'url("data:image/svg+xml;charset=utf-8,'+(0,t.getImageBlurSvg)({widthInt:b,heightInt:B,blurWidth:de,blurHeight:pe,blurDataURL:U||"",objectFit:$.objectFit})+'")':'url("'+g+'")':null;let Le=Ce?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Ce}:{};const re=D({config:v,src:c,unoptimized:S,width:b,quality:Ne,sizes:h,loader:x});return{props:{...W,loading:me?"lazy":A,fetchPriority:P,width:b,height:B,decoding:"async",className:I,style:{...$,...Le},sizes:re.sizes,srcSet:re.srcSet,src:d||re.src},meta:{unoptimized:S,priority:L,placeholder:g,fill:_}}}})(ce);var _e={exports:{}},ee={};function he(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,i=new WeakMap;return(he=function(s){return s?i:t})(e)}ee._=ee._interop_require_wildcard=Ge;function Ge(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var i=he(t);if(i&&i.has(e))return i.get(e);var s={__proto__:null},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(u!=="default"&&Object.prototype.hasOwnProperty.call(e,u)){var n=p?Object.getOwnPropertyDescriptor(e,u):null;n&&(n.get||n.set)?Object.defineProperty(s,u,n):s[u]=e[u]}return s.default=e,i&&i.set(e,s),s}var Q={exports:{}},oe={},fe;function ke(){return fe||(fe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return u}});const t=K,i=typeof window>"u",s=i?()=>{}:t.useLayoutEffect,p=i?()=>{}:t.useEffect;function u(n){const{headManager:a,reduceComponentsToState:D}=n;function O(){if(a&&a.mountedInstances){const m=t.Children.toArray(Array.from(a.mountedInstances).filter(Boolean));a.updateHead(D(m,n))}}if(i){var l;a==null||(l=a.mountedInstances)==null||l.add(n.children),O()}return s(()=>{var m;return a==null||(m=a.mountedInstances)==null||m.add(n.children),()=>{var c;a==null||(c=a.mountedInstances)==null||c.delete(n.children)}}),s(()=>(a&&(a._pendingUpdate=O),()=>{a&&(a._pendingUpdate=O)})),p(()=>(a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null),()=>{a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null)})),null}}(oe)),oe}var se={},Se;function We(){return Se||(Se=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return s}});const s=V._(K).default.createContext({})}(se)),se}var ne={},ge;function xe(){return ge||(ge=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"HeadManagerContext",{enumerable:!0,get:function(){return s}});const s=V._(K).default.createContext({})}(ne)),ne}var ae={},Re;function Xe(){return Re||(Re=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return t}});function t(i){let{ampFirst:s=!1,hybrid:p=!1,hasQuery:u=!1}=i===void 0?{}:i;return s||p&&u}}(ae)),ae}var Ee;function Ve(){return Ee||(Ee=1,function(e,t){"use client";var i={ALLUSERSPROFILE:"C:\\ProgramData",AMDRMSDKPATH:"C:\\Program Files\\AMD\\RyzenMasterSDK\\",APPDATA:"C:\\Users\\kulay\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133106374986503655",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_26172_BCFCQEDCTANGFULN",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"EVICTUS",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ENABLE_DOWNLOAD_PROMPT:"0",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_9560:"1",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\kulay",INIT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",LANG:"ru_RU.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\kulay\\AppData\\Local",LOGONSERVER:"\\\\EVICTUS",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.7.2 win32 x64",npm_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236\\yarn",npm_lifecycle_event:"silent-release",npm_node_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236\\node",npm_package_json:"C:\\Users\\kulay\\Git\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.10.1",NUMBER_OF_PROCESSORS:"12",NVTOOLSEXT_PATH:"C:\\Program Files\\NVIDIA Corporation\\NvToolsExt\\",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"235875730669369712",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\kulay\\Git\\genshin-optimizer",OneDrive:"C:\\Users\\kulay\\OneDrive",OneDriveConsumer:"C:\\Users\\kulay\\OneDrive",OnlineServices:"Online Services",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\kulay\\Git\\node_modules\\.bin;C:\\Users\\kulay\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236;C:\\Users\\kulay\\AppData\\Local\\cloud-code\\installer\\google-cloud-sdk\\bin;C:\\Program Files\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\Python312\\Scripts;C:\\Program Files\\Python312;C:\\Program Files\\HP\\HP One Agent;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\kulay\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\Miniconda3\\python.exe;C:\\Users\\kulay\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\kulay\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",platformcode:"M7",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\kulay\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"EMEA",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.91.0",TMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",USERDOMAIN:"EVICTUS",USERDOMAIN_ROAMINGPROFILE:"EVICTUS",USERNAME:"kulay",USERPROFILE:"C:\\Users\\kulay",VBOX_HWVIRTEX_IGNORE_SVM_IN_USE:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-29a24468e3-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(t,"__esModule",{value:!0});function s(C,r){for(var _ in r)Object.defineProperty(C,_,{enumerable:!0,get:r[_]})}s(t,{default:function(){return y},defaultHead:function(){return c}});const p=V,u=ee,n=Te,a=u._(K),D=p._(ke()),O=We(),l=xe(),m=Xe();function c(C){C===void 0&&(C=!1);const r=[(0,n.jsx)("meta",{charSet:"utf-8"})];return C||r.push((0,n.jsx)("meta",{name:"viewport",content:"width=device-width"})),r}function h(C,r){return typeof r=="string"||typeof r=="number"?C:r.type===a.default.Fragment?C.concat(a.default.Children.toArray(r.props.children).reduce((_,o)=>typeof o=="string"||typeof o=="number"?_:_.concat(o),[])):C.concat(r)}const S=["name","httpEquiv","charSet","itemProp"];function L(){const C=new Set,r=new Set,_=new Set,o={};return d=>{let E=!0,T=!1;if(d.key&&typeof d.key!="number"&&d.key.indexOf("$")>0){T=!0;const g=d.key.slice(d.key.indexOf("$")+1);C.has(g)?E=!1:C.add(g)}switch(d.type){case"title":case"base":r.has(d.type)?E=!1:r.add(d.type);break;case"meta":for(let g=0,U=S.length;g<U;g++){const P=S[g];if(d.props.hasOwnProperty(P))if(P==="charSet")_.has(P)?E=!1:_.add(P);else{const R=d.props[P],M=o[P]||new Set;(P!=="name"||!T)&&M.has(R)?E=!1:(M.add(R),o[P]=M)}}break}return E}}function A(C,r){const{inAmpMode:_}=r;return C.reduce(h,[]).reverse().concat(c(_).reverse()).filter(L()).reverse().map((o,d)=>{const E=o.key||d;if(i.__NEXT_OPTIMIZE_FONTS&&!_&&o.type==="link"&&o.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(T=>o.props.href.startsWith(T))){const T={...o.props||{}};return T["data-href"]=T.href,T.href=void 0,T["data-optimized-fonts"]=!0,a.default.cloneElement(o,T)}return a.default.cloneElement(o,{key:E})})}function I(C){let{children:r}=C;const _=(0,a.useContext)(O.AmpStateContext),o=(0,a.useContext)(l.HeadManagerContext);return(0,n.jsx)(D.default,{reduceComponentsToState:A,headManager:o,inAmpMode:(0,m.isInAmpMode)(_),children:r})}const y=I;(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(Q,Q.exports)),Q.exports}var ie={},Pe;function He(){return Pe||(Pe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return p}});const i=V._(K),s=te,p=i.default.createContext(s.imageConfigDefault)}(ie)),ie}var le={},Oe;function Be(){return Oe||(Oe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return s}});const s=V._(K).default.createContext(null)}(le)),le}var ue={},Ae;function Ie(){return Ae||(Ae=1,function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",AMDRMSDKPATH:"C:\\Program Files\\AMD\\RyzenMasterSDK\\",APPDATA:"C:\\Users\\kulay\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133106374986503655",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_26172_BCFCQEDCTANGFULN",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"EVICTUS",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ENABLE_DOWNLOAD_PROMPT:"0",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_9560:"1",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\kulay",INIT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",LANG:"ru_RU.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\kulay\\AppData\\Local",LOGONSERVER:"\\\\EVICTUS",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.7.2 win32 x64",npm_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236\\yarn",npm_lifecycle_event:"silent-release",npm_node_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236\\node",npm_package_json:"C:\\Users\\kulay\\Git\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.10.1",NUMBER_OF_PROCESSORS:"12",NVTOOLSEXT_PATH:"C:\\Program Files\\NVIDIA Corporation\\NvToolsExt\\",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"235875730669369712",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\kulay\\Git\\genshin-optimizer",OneDrive:"C:\\Users\\kulay\\OneDrive",OneDriveConsumer:"C:\\Users\\kulay\\OneDrive",OnlineServices:"Online Services",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\kulay\\Git\\node_modules\\.bin;C:\\Users\\kulay\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236;C:\\Users\\kulay\\AppData\\Local\\cloud-code\\installer\\google-cloud-sdk\\bin;C:\\Program Files\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\Python312\\Scripts;C:\\Program Files\\Python312;C:\\Program Files\\HP\\HP One Agent;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\kulay\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\Miniconda3\\python.exe;C:\\Users\\kulay\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\kulay\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",platformcode:"M7",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\kulay\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"EMEA",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.91.0",TMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",USERDOMAIN:"EVICTUS",USERDOMAIN_ROAMINGPROFILE:"EVICTUS",USERNAME:"kulay",USERPROFILE:"C:\\Users\\kulay",VBOX_HWVIRTEX_IGNORE_SVM_IN_USE:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-29a24468e3-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return s}});function i(p){let{config:u,src:n,width:a,quality:D}=p;return u.path+"?url="+encodeURIComponent(n)+"&w="+a+"&q="+(D||75)+(t.NEXT_DEPLOYMENT_ID?"&dpl="+t.NEXT_DEPLOYMENT_ID:"")}i.__next_img_default=!0;const s=i}(ue)),ue}(function(e,t){"use client";var i={ALLUSERSPROFILE:"C:\\ProgramData",AMDRMSDKPATH:"C:\\Program Files\\AMD\\RyzenMasterSDK\\",APPDATA:"C:\\Users\\kulay\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133106374986503655",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_26172_BCFCQEDCTANGFULN",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"EVICTUS",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ENABLE_DOWNLOAD_PROMPT:"0",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_9560:"1",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\kulay",INIT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",LANG:"ru_RU.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\kulay\\AppData\\Local",LOGONSERVER:"\\\\EVICTUS",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.7.2 win32 x64",npm_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236\\yarn",npm_lifecycle_event:"silent-release",npm_node_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236\\node",npm_package_json:"C:\\Users\\kulay\\Git\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.10.1",NUMBER_OF_PROCESSORS:"12",NVTOOLSEXT_PATH:"C:\\Program Files\\NVIDIA Corporation\\NvToolsExt\\",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"235875730669369712",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\kulay\\Git\\genshin-optimizer",OneDrive:"C:\\Users\\kulay\\OneDrive",OneDriveConsumer:"C:\\Users\\kulay\\OneDrive",OnlineServices:"Online Services",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\kulay\\Git\\node_modules\\.bin;C:\\Users\\kulay\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236;C:\\Users\\kulay\\AppData\\Local\\cloud-code\\installer\\google-cloud-sdk\\bin;C:\\Program Files\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\Python312\\Scripts;C:\\Program Files\\Python312;C:\\Program Files\\HP\\HP One Agent;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\kulay\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\Miniconda3\\python.exe;C:\\Users\\kulay\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\kulay\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",platformcode:"M7",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\kulay\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"EMEA",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.91.0",TMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",USERDOMAIN:"EVICTUS",USERDOMAIN_ROAMINGPROFILE:"EVICTUS",USERNAME:"kulay",USERPROFILE:"C:\\Users\\kulay",VBOX_HWVIRTEX_IGNORE_SVM_IN_USE:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-29a24468e3-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return C}});const s=V,p=ee,u=Te,n=p._(K),a=s._(Me),D=s._(Ve()),O=ce,l=te,m=He(),c=Be(),h=s._(Ie()),S=i.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function L(r,_,o,d,E,T,g){const U=r==null?void 0:r.src;if(!r||r["data-loaded-src"]===U)return;r["data-loaded-src"]=U,("decode"in r?r.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!r.parentElement||!r.isConnected)){if(_!=="empty"&&E(!0),o!=null&&o.current){const R=new Event("load");Object.defineProperty(R,"target",{writable:!1,value:r});let M=!1,w=!1;o.current({...R,nativeEvent:R,currentTarget:r,target:r,isDefaultPrevented:()=>M,isPropagationStopped:()=>w,persist:()=>{},preventDefault:()=>{M=!0,R.preventDefault()},stopPropagation:()=>{w=!0,R.stopPropagation()}})}d!=null&&d.current&&d.current(r)}})}function A(r){const[_,o]=n.version.split(".",2),d=parseInt(_,10),E=parseInt(o,10);return d>18||d===18&&E>=3?{fetchPriority:r}:{fetchpriority:r}}const I=(0,n.forwardRef)((r,_)=>{let{src:o,srcSet:d,sizes:E,height:T,width:g,decoding:U,className:P,style:R,fetchPriority:M,placeholder:w,loading:Y,unoptimized:Z,fill:W,onLoadRef:G,onLoadingCompleteRef:k,setBlurComplete:H,setShowAltText:q,sizesInput:v,onLoad:F,onError:x,...J}=r;return(0,u.jsx)("img",{...J,...A(M),loading:Y,width:g,height:T,decoding:U,"data-nimg":W?"fill":"1",className:P,style:R,sizes:E,srcSet:d,src:o,ref:(0,n.useCallback)(N=>{_&&(typeof _=="function"?_(N):typeof _=="object"&&(_.current=N)),N&&(x&&(N.src=N.src),N.complete&&L(N,w,G,k,H))},[o,w,G,k,H,x,Z,v,_]),onLoad:N=>{const b=N.currentTarget;L(b,w,G,k,H)},onError:N=>{q(!0),w!=="empty"&&H(!0),x&&x(N)}})});function y(r){let{isAppRouter:_,imgAttributes:o}=r;const d={as:"image",imageSrcSet:o.srcSet,imageSizes:o.sizes,crossOrigin:o.crossOrigin,referrerPolicy:o.referrerPolicy,...A(o.fetchPriority)};return _&&a.default.preload?(a.default.preload(o.src,d),null):(0,u.jsx)(D.default,{children:(0,u.jsx)("link",{rel:"preload",href:o.srcSet?void 0:o.src,...d},"__nimg-"+o.src+o.srcSet+o.sizes)})}const C=(0,n.forwardRef)((r,_)=>{const d=!(0,n.useContext)(c.RouterContext),E=(0,n.useContext)(m.ImageConfigContext),T=(0,n.useMemo)(()=>{const k=S||E||l.imageConfigDefault,H=[...k.deviceSizes,...k.imageSizes].sort((v,F)=>v-F),q=k.deviceSizes.sort((v,F)=>v-F);return{...k,allSizes:H,deviceSizes:q}},[E]),{onLoad:g,onLoadingComplete:U}=r,P=(0,n.useRef)(g);(0,n.useEffect)(()=>{P.current=g},[g]);const R=(0,n.useRef)(U);(0,n.useEffect)(()=>{R.current=U},[U]);const[M,w]=(0,n.useState)(!1),[Y,Z]=(0,n.useState)(!1),{props:W,meta:G}=(0,O.getImgProps)(r,{defaultLoader:h.default,imgConf:T,blurComplete:M,showAltText:Y});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(I,{...W,unoptimized:G.unoptimized,placeholder:G.placeholder,fill:G.fill,onLoadRef:P,onLoadingCompleteRef:R,setBlurComplete:w,setShowAltText:Z,sizesInput:r.sizes,ref:_}),G.priority?(0,u.jsx)(y,{isAppRouter:d,imgAttributes:W}):null]})});(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)})(_e,_e.exports);var ze=_e.exports;(function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",AMDRMSDKPATH:"C:\\Program Files\\AMD\\RyzenMasterSDK\\",APPDATA:"C:\\Users\\kulay\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133106374986503655",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_26172_BCFCQEDCTANGFULN",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"EVICTUS",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ENABLE_DOWNLOAD_PROMPT:"0",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_9560:"1",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\kulay",INIT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",LANG:"ru_RU.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\kulay\\AppData\\Local",LOGONSERVER:"\\\\EVICTUS",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.7.2 win32 x64",npm_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236\\yarn",npm_lifecycle_event:"silent-release",npm_node_execpath:"C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236\\node",npm_package_json:"C:\\Users\\kulay\\Git\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.10.1",NUMBER_OF_PROCESSORS:"12",NVTOOLSEXT_PATH:"C:\\Program Files\\NVIDIA Corporation\\NvToolsExt\\",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"235875730669369712",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\kulay\\Git\\genshin-optimizer",OneDrive:"C:\\Users\\kulay\\OneDrive",OneDriveConsumer:"C:\\Users\\kulay\\OneDrive",OnlineServices:"Online Services",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\kulay\\Git\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\kulay\\Git\\node_modules\\.bin;C:\\Users\\kulay\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\kulay\\AppData\\Local\\Temp\\xfs-bdef3236;C:\\Users\\kulay\\AppData\\Local\\cloud-code\\installer\\google-cloud-sdk\\bin;C:\\Program Files\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\Python312\\Scripts;C:\\Program Files\\Python312;C:\\Program Files\\HP\\HP One Agent;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\kulay\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\Miniconda3\\python.exe;C:\\Users\\kulay\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\kulay\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",platformcode:"M7",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\kulay\\Git\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\kulay\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"EMEA",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.91.0",TMP:"C:\\Users\\kulay\\AppData\\Local\\Temp",USERDOMAIN:"EVICTUS",USERDOMAIN_ROAMINGPROFILE:"EVICTUS",USERNAME:"kulay",USERPROFILE:"C:\\Users\\kulay",VBOX_HWVIRTEX_IGNORE_SVM_IN_USE:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\kulay\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-29a24468e3-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(e,"__esModule",{value:!0});function i(O,l){for(var m in l)Object.defineProperty(O,m,{enumerable:!0,get:l[m]})}i(e,{default:function(){return D},getImageProps:function(){return a}});const s=V,p=ce,u=ze,n=s._(Ie());function a(O){const{props:l}=(0,p.getImgProps)(O,{defaultLoader:n.default,imgConf:t.__NEXT_IMAGE_OPTS});for(const[m,c]of Object.entries(l))c===void 0&&delete l[m];return{props:l}}const D=u.Image})(ye);var Ue=ye;const je=ve(Ue),Ze=we({__proto__:null,default:je},[Ue]);export{Ze as i};
