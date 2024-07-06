import{r as x,D as A,a as v,du as $,dK as k,c8 as w,d as a,f as u,b as e,ap as b,T as p,ck as L,cA as S,o as E,e as M,B as O,p as j,cy as H,cC as q,O as D,u as K,cT as P,M as V,aj as F,ak as N,N as B,aw as R,fL as U,ag as W,aq as z,h as _,al as G,l as J,C as Q,aT as X}from"./index-7uROGu0n.js";import{u as Y}from"./useTeamChar-BuiFmOqO.js";import{d as Z}from"./Settings-DPDNINpm.js";function ee({optimizationTarget:t,customMultiTargets:m}){var s;const{data:o}=x.useContext(A),c=v(),d=x.useMemo(()=>$(o,t[0],c),[o,t,c]),{title:h,icon:n,action:l}=d??{},r=k(o.getDisplay(),t),{textSuffix:f,icon:g,name:y=t[0]==="custom"?(s=m[parseInt(t[1]??"")])==null?void 0:s.name:void 0}=(r&&w(r.info))??{};return a(L,{children:[a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[n||g,e("span",{children:h}),!!l&&e(b,{color:"success",sx:{whiteSpace:"normal"},children:l})]}),e(p,{sx:{display:"flex",alignItems:"center"},children:a(b,{sx:{whiteSpace:"normal"},children:[e("strong",{children:y}),f&&a("span",{children:[" ",f]})]})})]})}function ae({teamCharId:t,showSetting:m=!1,children:o}){const c=v(),{name:d,description:h,buildIds:n,buildTcIds:l,optConfigId:r,customMultiTargets:f}=c.teamChars.get(t),{optimizationTarget:g}=S(r);return a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(E,{}),e(p,{variant:"h6",children:d}),!!h&&e(O,{title:e(p,{children:h}),children:e(M,{})}),m&&e(Z,{sx:{ml:"auto"}})]}),a(u,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(u,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["Builds: ",e("strong",{children:n.length})]})]}),a(u,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["TC Builds: ",e("strong",{children:l.length})]})]}),a(u,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(H,{}),a(p,{children:["Custom multi-targets: ",e("strong",{children:f.length})]})]})]}),g&&a(p,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(q,{}),e(u,{children:"Optimization Target:"}),e(ee,{customMultiTargets:f,optimizationTarget:g})]}),o]})}function le({teamId:t,show:m,onHide:o,onDel:c}){const d=v(),h=K(t),{name:n,description:l,loadoutData:r}=h,f=x.useMemo(()=>r.map(i=>{if(!i)return[];const{teamCharId:s}=i;return d.teams.values.filter(({loadoutData:C})=>C.find(I=>(I==null?void 0:I.teamCharId)===s))}),[d,r]),[g,y]=x.useState(()=>f.map((i,s)=>i.length===1?s:void 0).filter(P)),T=()=>{d.teams.remove(t),r.forEach((i,s)=>{!i||!g.includes(s)||d.teamChars.remove(i.teamCharId)}),c()};return e(G,{open:m,onClose:o,children:a(_,{children:[e(V,{title:a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(u,{children:"Delete Team:"}),e("strong",{children:n}),l&&e(O,{title:l,children:e(M,{})})]}),action:e(F,{onClick:o,children:e(N,{})})}),e(B,{}),a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(R,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),r.map((i,s)=>i?e(te,{teamCharId:i.teamCharId,selected:g.includes(s),onClick:()=>y(C=>U(C,s)),inTeams:f[s]},s):null)]}),e(B,{}),e(D,{sx:{display:"flex",justifyContent:"flex-end"},children:e(W,{color:"error",startIcon:e(z,{}),onClick:T,children:"Delete"})})]})})}function te({teamCharId:t,selected:m,onClick:o,inTeams:c}){const d=Y(t),{key:h}=d,n=J(h),{target:l}=(n==null?void 0:n[h])??{},r=x.useMemo(()=>{if(!(!n||!l))return{data:l,teamData:n,compareData:void 0}},[l,n]);if(r)return e(A.Provider,{value:r,children:e(_,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(Q,{onClick:o,children:e(ae,{teamCharId:t,children:e(X,{color:c.length===1?"success":"warning",children:e(p,{children:c.length===1?"Only in current team":`In ${c.length} teams`})})})})})})}export{ae as L,ee as O,le as T};
