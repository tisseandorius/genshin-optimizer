import{r as N,D as G,a as y,dn as L,dE as H,c7 as I,b as e,B as c,am as z,T as h,cg as O,cx as B,d as D,e as T,n as k,cv as j,N as x,u as _,cP as $,f as M,L as A,ah as w,ai as E,M as U,at as S,fC as P,ad as V,an as q,ag as F,k as K,C as Q,aQ as R}from"./index-3j9gmnXW.js";import{d as W,O as J,u as X}from"./consts-Dj6X4iBG.js";import{d as Y}from"./Settings-CrTDUH-8.js";function Z({optimizationTarget:i,customMultiTargets:p}){var s;const{data:o}=N.useContext(G),l=y(),m=N.useMemo(()=>L(o,i[0],l),[o,i,l]),{title:u,icon:t,action:n}=m??{},r=H(o.getDisplay(),i),{textSuffix:d,icon:b,name:g=i[0]==="custom"?(s=p[parseInt(i[1]??"")])==null?void 0:s.name:void 0}=(r&&I(r.info))??{};return e(O,{children:[e(c,{sx:{display:"flex",gap:1,alignItems:"center"},children:[t||b,e("span",{children:u},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/OptimizationTargetDisplay.tsx",lineNumber:45,columnNumber:9},this),!!n&&e(z,{color:"success",sx:{whiteSpace:"normal"},children:n},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/OptimizationTargetDisplay.tsx",lineNumber:47,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/OptimizationTargetDisplay.tsx",lineNumber:43,columnNumber:7},this),e(h,{sx:{display:"flex",alignItems:"center"},children:e(z,{sx:{whiteSpace:"normal"},children:[e("strong",{children:g},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/OptimizationTargetDisplay.tsx",lineNumber:54,columnNumber:11},this),d&&e("span",{children:[" ",d]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/OptimizationTargetDisplay.tsx",lineNumber:39,columnNumber:39},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/OptimizationTargetDisplay.tsx",lineNumber:53,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/OptimizationTargetDisplay.tsx",lineNumber:52,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/OptimizationTargetDisplay.tsx",lineNumber:42,columnNumber:5},this)}function ee({teamCharId:i,showSetting:p=!1,children:o}){const l=y(),{name:m,description:u,buildIds:t,buildTcIds:n,optConfigId:r,customMultiTargets:d}=l.teamChars.get(i),{optimizationTarget:b}=B(r);return e(x,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(c,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(W,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:35,columnNumber:9},this),e(h,{variant:"h6",children:m},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:36,columnNumber:9},this),!!u&&e(D,{title:e(h,{children:u},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:38,columnNumber:36},this),children:e(T,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:39,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:38,columnNumber:11},this),p&&e(Y,{sx:{ml:"auto"}},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:43,columnNumber:25},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:34,columnNumber:7},this),e(c,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[e(c,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(k,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:47,columnNumber:11},this),e(h,{children:["Builds: ",e("strong",{children:t.length},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:49,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:48,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:46,columnNumber:9},this),e(c,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(k,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:53,columnNumber:11},this),e(h,{children:["TC Builds: ",e("strong",{children:n.length},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:55,columnNumber:24},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:54,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:52,columnNumber:9},this),e(c,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:59,columnNumber:11},this),e(h,{children:["Custom multi-targets: ",e("strong",{children:d.length},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:61,columnNumber:35},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:60,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:58,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:45,columnNumber:7},this),b&&e(h,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(J,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:67,columnNumber:11},this),e(c,{children:"Optimization Target:"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:68,columnNumber:11},this),e(Z,{customMultiTargets:d,optimizationTarget:b},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:69,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:66,columnNumber:9},this),o]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/character/editor/LoadoutHeaderContent.tsx",lineNumber:33,columnNumber:5},this)}function ne({teamId:i,show:p,onHide:o,onDel:l}){const m=y(),u=_(i),{name:t,description:n,loadoutData:r}=u,d=N.useMemo(()=>r.map(a=>{if(!a)return[];const{teamCharId:s}=a;return m.teams.values.filter(({loadoutData:f})=>f.find(C=>(C==null?void 0:C.teamCharId)===s))}),[m,r]),[b,g]=N.useState(()=>d.map((a,s)=>a.length===1?s:void 0).filter($)),v=()=>{m.teams.remove(i),r.forEach((a,s)=>{!a||!b.includes(s)||m.teamChars.remove(a.teamCharId)}),l()};return e(F,{open:p,onClose:o,children:e(M,{children:[e(A,{title:e(c,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(c,{children:"Delete Team:"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:80,columnNumber:15},this),e("strong",{children:t},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:81,columnNumber:15},this),n&&e(D,{title:n,children:e(T,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:84,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:83,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:73,columnNumber:13},this),action:e(w,{onClick:o,children:e(E,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:91,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:90,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:71,columnNumber:9},this),e(U,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:95,columnNumber:9},this),e(x,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(S,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:97,columnNumber:11},this),r.map((a,s)=>a?e(ie,{teamCharId:a.teamCharId,selected:b.includes(s),onClick:()=>g(f=>P(f,s)),inTeams:d[s]},s,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:104,columnNumber:15},this):null)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:96,columnNumber:9},this),e(U,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:114,columnNumber:9},this),e(x,{sx:{display:"flex",justifyContent:"flex-end"},children:e(V,{color:"error",startIcon:e(q,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:118,columnNumber:24},this),onClick:v,children:"Delete"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:116,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:115,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:70,columnNumber:7},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:69,columnNumber:5},this)}function ie({teamCharId:i,selected:p,onClick:o,inTeams:l}){const m=X(i),{key:u}=m,t=K(u),{target:n}=(t==null?void 0:t[u])??{},r=N.useMemo(()=>{if(!(!t||!n))return{data:n,teamData:t,compareData:void 0}},[n,t]);if(r)return e(G.Provider,{value:r,children:e(M,{bgt:"light",sx:{border:p?"2px red solid":void 0},children:e(Q,{onClick:o,children:e(ee,{teamCharId:i,children:e(R,{color:l.length===1?"success":"warning",children:e(h,{children:l.length===1?"Only in current team":`In ${l.length} teams`},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:162,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:161,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:160,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:159,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:155,columnNumber:7},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/ui/src/components/team/TeamDelModal.tsx",lineNumber:154,columnNumber:5},this)}export{ee as L,Z as O,ne as T};