import{r as x,D as A,a as v,dj as $,dA as w,c3 as L,d as a,f,b as e,al as T,T as p,cf as S,cv as k,e as M,B as O,o as j,ct as E,N as D,u as H,cN as P,L as N,af as V,ag as q,M as B,as as F,fy as K,ac as R,am as U,h as _,ah as W,l as z,C as G,aP as J}from"./index-Bp-EV_9p.js";import{d as Q,O as X,u as Y}from"./consts-BCQWokGh.js";import{d as Z}from"./Settings-L_T1x9gU.js";function ee({optimizationTarget:t,customMultiTargets:m}){var n;const{data:o}=x.useContext(A),c=v(),d=x.useMemo(()=>$(o,t[0],c),[o,t,c]),{title:h,icon:s,action:l}=d??{},r=w(o.getDisplay(),t),{textSuffix:u,icon:g,name:y=t[0]==="custom"?(n=m[parseInt(t[1]??"")])==null?void 0:n.name:void 0}=(r&&L(r.info))??{};return a(S,{children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[s||g,e("span",{children:h}),!!l&&e(T,{color:"success",sx:{whiteSpace:"normal"},children:l})]}),e(p,{sx:{display:"flex",alignItems:"center"},children:a(T,{sx:{whiteSpace:"normal"},children:[e("strong",{children:y}),u&&a("span",{children:[" ",u]})]})})]})}function ae({teamCharId:t,showSetting:m=!1,children:o}){const c=v(),{name:d,description:h,buildIds:s,buildTcIds:l,optConfigId:r,customMultiTargets:u}=c.teamChars.get(t),{optimizationTarget:g}=k(r);return a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Q,{}),e(p,{variant:"h6",children:d}),!!h&&e(O,{title:e(p,{children:h}),children:e(M,{})}),m&&e(Z,{sx:{ml:"auto"}})]}),a(f,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["Builds: ",e("strong",{children:s.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["TC Builds: ",e("strong",{children:l.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(E,{}),a(p,{children:["Custom multi-targets: ",e("strong",{children:u.length})]})]})]}),g&&a(p,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(X,{}),e(f,{children:"Optimization Target:"}),e(ee,{customMultiTargets:u,optimizationTarget:g})]}),o]})}function le({teamId:t,show:m,onHide:o,onDel:c}){const d=v(),h=H(t),{name:s,description:l,loadoutData:r}=h,u=x.useMemo(()=>r.map(i=>{if(!i)return[];const{teamCharId:n}=i;return d.teams.values.filter(({loadoutData:C})=>C.find(I=>(I==null?void 0:I.teamCharId)===n))}),[d,r]),[g,y]=x.useState(()=>u.map((i,n)=>i.length===1?n:void 0).filter(P)),b=()=>{d.teams.remove(t),r.forEach((i,n)=>{!i||!g.includes(n)||d.teamChars.remove(i.teamCharId)}),c()};return e(W,{open:m,onClose:o,children:a(_,{children:[e(N,{title:a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(f,{children:"Delete Team:"}),e("strong",{children:s}),l&&e(O,{title:l,children:e(M,{})})]}),action:e(V,{onClick:o,children:e(q,{})})}),e(B,{}),a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(F,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),r.map((i,n)=>i?e(te,{teamCharId:i.teamCharId,selected:g.includes(n),onClick:()=>y(C=>K(C,n)),inTeams:u[n]},n):null)]}),e(B,{}),e(D,{sx:{display:"flex",justifyContent:"flex-end"},children:e(R,{color:"error",startIcon:e(U,{}),onClick:b,children:"Delete"})})]})})}function te({teamCharId:t,selected:m,onClick:o,inTeams:c}){const d=Y(t),{key:h}=d,s=z(h),{target:l}=(s==null?void 0:s[h])??{},r=x.useMemo(()=>{if(!(!s||!l))return{data:l,teamData:s,compareData:void 0}},[l,s]);if(r)return e(A.Provider,{value:r,children:e(_,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(G,{onClick:o,children:e(ae,{teamCharId:t,children:e(J,{color:c.length===1?"success":"warning",children:e(p,{children:c.length===1?"Only in current team":`In ${c.length} teams`})})})})})})}export{ae as L,ee as O,le as T};