import{u as z,a as A,ae as B,b as e,d as i,f as o,C as T,T as c,B as W,e as $,aj as E,aq as H,R as L,N as R,Y as q,h as M,i as _,bL as N,r as b,b0 as O,bR as P,k as F,l as G,cW as V,g as X,D as Y,S as J,bS as Q,bX as U,aT as Z,V as K,o as ee,p as te,q as ae,s as ne,t as se}from"./index-N-SxJz9m.js";import{u as ie}from"./useTeamChar-B6w_14Y7.js";import{T as oe}from"./TeamDelModal-CwcrzIRV.js";function he({teamId:t,onClick:h,bgt:g}){const r=z(t),{name:n,description:p,loadoutData:m}=r,f=A(),[C,a,w]=B();return e(M,{bgt:g,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:i(o,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[i(o,{sx:{display:"flex",flexDirection:"row"},children:[e(T,{onClick:()=>h(),sx:{p:1},children:i(c,{sx:{display:"flex",gap:1},variant:"h6",children:[e("span",{children:n})," ",p&&e(W,{title:e(c,{children:p}),children:e($,{})})]})}),e(oe,{teamId:t,show:C,onHide:w,onDel:function(){}}),e(E,{onClick:a,color:"error",children:e(H,{})})]}),e(o,{sx:{marginTop:"auto"},children:m.map((d,u)=>{var x;const s=d==null?void 0:d.teamCharId,l=s&&((x=f.teamChars.get(s))==null?void 0:x.key);return i(L.Fragment,{children:[e(R,{}),l?e(T,{onClick:()=>h(l),children:e(re,{characterKey:l,teamId:t,teamCharId:s})}):e(T,{onClick:()=>h(),sx:{height:120,position:"relative"},children:e(o,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:120},children:e(o,{component:"img",src:q.team[`team${u+1}`],sx:{width:"auto",my:"15px",height:90,opacity:.7,mx:"auto"}})})})]},u)})})]})})}function re({characterKey:t,teamId:h,teamCharId:g}){var S;const r=A(),n=_(t),{gender:p}=N(),{silly:m}=b.useContext(O),f=P(t),{name:C}=ie(g),a=r.teams.getLoadoutDatum(h,g),w=r.teams.getActiveBuildName(a),d=r.teams.getLoadoutWeapon(a),u=(()=>{const{buildType:D,buildTcId:I}=a;return D==="tc"&&I?F(r.buildTcs.get(I)):Object.values(r.teams.getLoadoutArtifacts(a)).filter(j=>j)})(),s=G(t,void 0,u,d),l=(S=s==null?void 0:s[t])==null?void 0:S.target,x=b.useMemo(()=>n&&{character:n},[n]),v=b.useMemo(()=>l&&s&&{data:l,teamData:s},[l,s]),y=V(t,"banner",p),k=X(t);return!x||!v?null:e(se.Provider,{value:x,children:e(Y.Provider,{value:v,children:e(b.Suspense,{fallback:e(J,{variant:"rectangular",width:"100%",height:300}),children:i(o,{className:y?void 0:`grad-${f.rarity}star`,sx:{display:"flex","&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${y})`,backgroundPosition:"center",backgroundSize:"cover",zIndex:0}},children:[e(o,{sx:{position:"absolute",width:"100%",height:"100%",zIndex:2,top:0,background:"linear-gradient(to top, rgba(50,50,50,0.7), rgba(0,0,0,0) 25% )"}}),i(o,{sx:{height:120,width:120,position:"relative"},children:[e(o,{component:"img",src:Q(t,p,m),sx:{height:120,width:120,zIndex:1}}),n&&e(c,{sx:{position:"absolute",lineHeight:1,bottom:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e("strong",{children:U(n.level,n.ascension)})}),n&&e(c,{sx:{position:"absolute",lineHeight:1,bottom:0,right:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:i("strong",{children:["C",n.constellation]})}),t.startsWith("Traveler")&&e(c,{sx:{position:"absolute",lineHeight:1,top:0,left:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e(Z,{color:k,children:e(K,{ele:k})})})]}),i(o,{sx:{pr:.5,py:.5,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",minWidth:0,justifyContent:"space-between",zIndex:3},children:[i(c,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(ee,{}),e("span",{children:C})]}),i(c,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(te,{}),e("span",{children:w})]}),(a==null?void 0:a.buildType)==="tc"&&(a!=null&&a.buildTcId)?e(ae,{weapon:d}):e(ne,{})]})]})})})})}export{he as T};
