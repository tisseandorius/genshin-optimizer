import{b as w,fa as R,r as B,i as D,j as W,eX as q,q as e,p as n,t as v,T as l,a_ as M,en as P,W as r,R as L,D as O,x as $,w as H,cD as F,bt as N,d as b,aL as G,bz as J,dO as V,fi as X,eW as Q,f as U,cV as Y,a3 as Z,bA as K,bF as ee,aC as te,E as ae,dB as se,fj as ne,el as re,cJ as ie}from"./index-CgpoeJ9w.js";function oe(t){const i=w();return R(i.teamChars,t)}var T={},le=D;Object.defineProperty(T,"__esModule",{value:!0});var A=T.default=void 0,ce=le(B()),de=W,he=(0,ce.default)((0,de.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");A=T.default=he;function ue({teamId:t,onClick:i,bgt:u}){const o=q(t),{name:s,description:h,loadoutData:m}=o,f=w();return e(H,{bgt:u,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(r,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e(v,{onClick:()=>i(),sx:{p:1},children:n(l,{sx:{display:"flex",gap:1},variant:"h6",children:[e("span",{children:s})," ",h&&e(M,{title:e(l,{children:h}),children:e(P,{})})]})}),e(r,{sx:{marginTop:"auto"},children:m.map((p,a)=>{var g;const x=p==null?void 0:p.teamCharId,c=x&&((g=f.teamChars.get(x))==null?void 0:g.key);return n(L.Fragment,{children:[e(O,{}),c?e(v,{onClick:()=>i(c),children:e(pe,{characterKey:c,teamId:t,teamCharId:x})}):e(v,{onClick:()=>i(),sx:{height:120,position:"relative"},children:e(r,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:120},children:e(r,{component:"img",src:$.team[`team${a+1}`],sx:{width:"auto",my:"15px",height:90,opacity:.7,mx:"auto"}})})})]},a)})})]})})}function pe({characterKey:t,teamId:i,teamCharId:u}){var j;const o=w(),s=F(t),{gender:h}=N(),{silly:m}=b.useContext(G),f=J(t),{name:p}=oe(u),a=o.teams.getLoadoutDatum(i,u),x=o.teams.getActiveBuildName(a),c=o.teams.getLoadoutWeapon(a),g=(()=>{const{buildType:_,buildTcId:z}=a;return _==="tc"&&z?V(o.buildTcs.get(z)):Object.values(o.teams.getLoadoutArtifacts(a)).filter(E=>E)})(),d=X(t,void 0,g,c),C=(j=d==null?void 0:d[t])==null?void 0:j.target,y=b.useMemo(()=>s&&{character:s},[s]),I=b.useMemo(()=>C&&d&&{data:C,teamData:d},[C,d]),k=Q(t,"banner",h),S=U(t);return!y||!I?null:e(ie.Provider,{value:y,children:e(Y.Provider,{value:I,children:e(b.Suspense,{fallback:e(Z,{variant:"rectangular",width:"100%",height:300}),children:n(r,{className:k?void 0:`grad-${f.rarity}star`,sx:{display:"flex","&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${k})`,backgroundPosition:"center",backgroundSize:"cover",zIndex:0}},children:[e(r,{sx:{position:"absolute",width:"100%",height:"100%",zIndex:2,top:0,background:"linear-gradient(to top, rgba(50,50,50,0.7), rgba(0,0,0,0) 25% )"}}),n(r,{sx:{height:120,width:120,position:"relative"},children:[e(r,{component:"img",src:K(t,h,m),sx:{height:120,width:120,zIndex:1}}),s&&e(l,{sx:{position:"absolute",lineHeight:1,bottom:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e("strong",{children:ee(s.level,s.ascension)})}),s&&e(l,{sx:{position:"absolute",lineHeight:1,bottom:0,right:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:n("strong",{children:["C",s.constellation]})}),t.startsWith("Traveler")&&e(l,{sx:{position:"absolute",lineHeight:1,top:0,left:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e(te,{color:S,children:e(ae,{ele:S})})})]}),n(r,{sx:{pr:.5,py:.5,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",minWidth:0,justifyContent:"space-between",zIndex:3},children:[n(l,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(A,{}),e("span",{children:p})]}),n(l,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(se,{}),e("span",{children:x})]}),(a==null?void 0:a.buildType)==="tc"&&(a!=null&&a.buildTcId)?e(ne,{weapon:c}):e(re,{})]})]})})})})}export{ue as T,A as d,oe as u};
