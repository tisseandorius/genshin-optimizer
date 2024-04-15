import{Z as Q,d as o,p as e,V as l,q as t,T as n,B as k,_ as ft,$ as mt,w as S,s as v,a0 as Z,a1 as J,D as O,a2 as F,a3 as tt,r as pt,i as yt,j as gt,u as D,b as U,a4 as et,Y as b,a5 as bt,a6 as xt,a7 as R,a8 as wt,a9 as vt,aa as At,C as kt,ab as at,ac as rt,W as L,ad as it,ae as St,af as Dt,ag as K,ah as _,ai as T,L as Ct,aj as It,ak as Tt,al as Rt,am as Ft,an as Mt,X as Et,ao as Pt,ap as $t,aq as _t,ar as Lt,as as Ut,at as Vt,au as Bt}from"./index-4bff99b1.js";import{S as qt,A as Kt}from"./StatEditorList-959525b3.js";import{d as Ot,a as jt,b as Wt,c as Gt,e as X}from"./Settings-f6bc9ce6.js";import{L as Ht}from"./Link-d37bb299.js";const zt=a=>a[Math.floor(Math.random()*a.length)];function Nt({pageKey:a,text:r="",modalTitle:i="",children:c}){const[u,p,h]=Q(localStorage.getItem(`infoShown_${a}`)!=="true"),[d]=o.useState(Array.isArray(r)?zt(r):r),y=o.useCallback(()=>{h(),localStorage.setItem(`infoShown_${a}`,"true")},[h,a]);return e(S,{children:[e(l,{container:!0,children:[t(l,{item:!0,flexGrow:1,children:t(n,{variant:"caption",pl:1,children:d})}),t(l,{item:!0,xs:"auto",children:t(k,{size:"small",color:"info",variant:"contained",onClick:p,startIcon:t(ft,{}),children:t(mt,{ns:"ui",key18:"info"})})})]}),t(tt,{containerProps:{maxWidth:"xl"},open:u,onClose:y,children:e(S,{children:[e(v,{sx:{py:1,display:"flex"},children:[t(n,{variant:"h6",children:i}),t(Z,{onClick:y,sx:{ml:"auto"},children:t(J,{})})]}),t(O,{}),t(v,{children:t(o.Suspense,{fallback:t(F,{variant:"rectangular",width:"100%",height:500}),children:c})})]})})]})}var j={},Xt=yt;Object.defineProperty(j,"__esModule",{value:!0});var nt=j.default=void 0,Yt=Xt(pt()),Qt=gt,Zt=(0,Yt.default)((0,Qt.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");nt=j.default=Zt;function Jt({numShowing:a,total:r,artifactIds:i}){const{t:c}=D(["artifact","ui"]),u=U(),{filterOption:p}=et(),h=o.useCallback(d=>u.displayArtifact.set({filterOption:{...p,...d}}),[u,p]);return t(o.Suspense,{fallback:t(F,{variant:"rectangular",width:"100%",height:300}),children:t(S,{children:e(v,{children:[e(l,{container:!0,children:[t(l,{item:!0,children:t(n,{variant:"h6",children:t(b,{t:c,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(l,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:a!==r&&e(n,{children:["Filtered ",t("strong",{children:a})," / ",r]})}),t(l,{item:!0,children:t(k,{size:"small",color:"error",onClick:()=>u.displayArtifact.set({action:"reset"}),startIcon:t(bt,{}),children:t(b,{t:c,i18nKey:"ui:reset"})})})]}),t(o.Suspense,{fallback:t(F,{variant:"rectangular",width:"100%",height:200}),children:t(xt,{filterOption:p,filterOptionDispatch:h,filteredIds:i})})]})})})}function te({artifactIds:a}){const{t:r}=D(["artifact","ui"]),i=U(),{numDelete:c,numUnequip:u,numUnlock:p,numLock:h}=o.useMemo(()=>{const f=a.map(A=>i.arts.get(A)),m=f.reduce((A,x)=>A+(x.lock?0:1),0),g=f.length-m,V=m,M=f.reduce((A,x)=>A+(x.location?1:0),0);return{numDelete:V,numUnequip:M,numUnlock:m,numLock:g}},[a,i]);return e(l,{container:!0,spacing:1,alignItems:"center",children:[t(l,{item:!0,xs:12,sm:6,md:3,children:e(k,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to unequip ${u} artifacts currently equipped on characters?`)&&a.map(f=>i.arts.set(f,{location:""})),startIcon:t(nt,{}),children:[t(b,{t:r,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t(R,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(l,{item:!0,xs:12,sm:6,md:3,children:e(k,{fullWidth:!0,color:"error",disabled:!c,onClick:()=>window.confirm(`Are you sure you want to delete ${c} artifacts?`)&&a.map(f=>{var m;return!((m=i.arts.get(f))!=null&&m.lock)&&i.arts.remove(f)}),startIcon:t(wt,{}),children:[t(b,{t:r,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t(R,{sx:{ml:1},color:c?"success":"secondary",children:c})]})}),t(l,{item:!0,xs:12,sm:6,md:3,children:e(k,{fullWidth:!0,color:"error",disabled:!h,onClick:()=>window.confirm(`Are you sure you want to unlock ${h} artifacts?`)&&a.map(f=>i.arts.set(f,{lock:!1})),startIcon:t(vt,{}),children:[t(b,{t:r,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t(R,{sx:{ml:1},color:h?"success":"secondary",children:h})]})}),t(l,{item:!0,xs:12,sm:6,md:3,children:e(k,{fullWidth:!0,color:"error",disabled:!p,onClick:()=>window.confirm(`Are you sure you want to lock ${p} artifacts?`)&&a.map(f=>i.arts.set(f,{lock:!0})),startIcon:t(At,{}),children:[t(b,{t:r,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t(R,{sx:{ml:1},color:p?"success":"secondary",children:p})]})}),t(l,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(n,{variant:"caption",color:"text.secondary",children:e(b,{t:r,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function ee({setArtifactIdToEdit:a,show:r,onHide:i}){const{t:c}=D("artifact");return t(tt,{open:r,onClose:i,children:e(S,{children:[t(kt,{title:e(n,{variant:"h6",flexGrow:1,display:"flex",alignItems:"center",children:[t(at,{sx:{verticalAlign:"text-top",mr:1}}),c`showDup`]}),action:t(Z,{onClick:i,children:t(J,{})})}),t(O,{}),t(v,{children:t(ae,{setArtifactIdToEdit:a})})]})})}function ae({setArtifactIdToEdit:a}){const{t:r}=D("artifact"),i=U(),[c,u]=rt();o.useEffect(()=>i.arts.followAny(u),[u,i]);const p=o.useMemo(()=>{const h=c&&[];let d=i.arts.keys;for(;d.length!==0;){const y=d.shift();if(!y)continue;const C=i.arts.get(y);if(!C)continue;const{duplicated:I}=i.arts.findDups(C,d);if(!I.length)continue;const f=I.map(m=>m.id);h.push([y,...f].sort(m=>{var g;return((g=i.arts.get(m))==null?void 0:g.location)??""?-1:1})),d=d.filter(m=>!f.includes(m))}return h},[i,c]);return e(Dt,{spacing:2,children:[p.map(h=>t(S,{sx:{overflowX:"scroll"},children:t(v,{sx:{display:"flex",gap:1},children:h.map(d=>t(L,{sx:{minWidth:300},children:t(it,{artifactId:d,setLocation:y=>i.arts.set(d,{location:y}),onDelete:()=>i.arts.remove(d),onEdit:()=>a(d)})},d))})},h.join())),!p.length&&t(St,{variant:"filled",severity:"success",children:r`noDupAlert`})]})}const re=""+new URL("artifactcard-0ab236a8.png",import.meta.url).href,ie=""+new URL("artifacteditor-3d54b9ef.png",import.meta.url).href,ne=""+new URL("artifactfilter-9f57e827.png",import.meta.url).href;function le(){return t(L,{display:"inline-flex",gap:.3,sx:{height:"1.5em"},children:It(0,5).map(a=>t(Tt,{color:`roll${a+1}.main`,value:(a+1)/6*100},a))})}function oe(){const{t:a}=D("artifact");return e(l,{container:!0,spacing:1,children:[t(l,{item:!0,xs:12,lg:5,xl:4,children:t(K,{src:re})}),t(l,{item:!0,xs:12,lg:7,xl:8,children:e(b,{t:a,i18nKey:"info.section1",children:[t(n,{variant:"h5",children:"Substat rolls"}),e(n,{gutterBottom:!0,children:["The ",t("b",{children:"number of rolls"})," a substat has is shown to the left of the substat. As the number gets higher, the substat is more colorful:",t(le,{}),"."]}),t(n,{variant:"h5",children:"Substat Roll Value"}),e(n,{gutterBottom:!0,children:["The Roll Value(RV) of an subtat is a percentage of the current value over the highest potential 5",t(_,{...T}),"value. From the Image, the maximum roll value of CRIT DMG is 7.8%. In RV: ",t("b",{children:"5.8/7.8 = 69.2%."})]}),t(n,{variant:"h5",children:"Current Roll Value vs. Maximum Roll Value"}),e(n,{gutterBottom:!0,children:["When a 5",t(_,{...T})," have 9(4+5) total rolls, with each of the rolls having the highest value, that is defined as a 900% RV artifact. However, most of the artifacts are not this lucky. The ",t("b",{children:"Current RV"})," of an artifact is a percentage over that 100% artifact. The ",t("b",{children:"Maximum RV"})," is the maximum possible RV an artifact can achieve, if the remaining artifact rolls from upgrades are the hightest possible value."]})]})}),t(l,{item:!0,xs:12,lg:6,xl:7,children:e(b,{t:a,i18nKey:"info.section2",children:[t(n,{variant:"h5",children:"Artifact Editor"}),e(n,{gutterBottom:!0,children:["A fully featured artifact editor, that can accept any 3",t(_,{...T})," to 5",t(_,{...T})," Artifact. When a substat is inputted, it can calculate the exact roll values. It will also make sure that you have the correct number of rolls in the artifact according to the level, along with other metrics of validation."]}),t(n,{variant:"h5",children:"Scan screenshots"}),e(n,{gutterBottom:!0,children:["Manual input is not your cup of tea? You can scan in your artifacts with screenshots! On the Artifact Editor, click the",t(R,{color:"info",children:"Show Me How!"})," button to learn more."]}),t(n,{variant:"h6",children:"Automatic Artifact Scanner"}),e(n,{gutterBottom:!0,children:["If you are playing Genshin on PC, you can download a tool that automatically scans all your artifacts for you, and you can then import that data in ",t(Ot,{...T})," Database.",t(Ht,{component:Ct,to:"/scanner",children:"Click here"}),"for a list of scanners that are compatible with GO."]}),t(n,{variant:"h5",children:"Duplicate/Upgrade artifact detection"}),e(n,{children:["Did you know GO can detect if you are adding a ",t("b",{children:"duplicate"}),"artifact that exists in the system? It can also detect if the current artifact in editor is an ",t("b",{children:"upgrade"})," of an existing artifact as well. Once a duplicate/upgrade is detected, a preview will allow you to compare the two artifacts in question(See Image)."]})]})}),t(l,{item:!0,xs:12,lg:6,xl:5,children:t(K,{src:ie})}),t(l,{item:!0,xs:12,lg:7,xl:6,children:t(K,{src:ne})}),t(l,{item:!0,xs:12,lg:5,xl:6,children:e(b,{t:a,i18nKey:"info.section3",children:[t(n,{variant:"h5",children:"Artifact Inventory"}),e(n,{gutterBottom:!0,children:["All your artifacts that you've added to GO are displayed here. The filters here allow you to further refine your view of your artifacts."," "]}),t(n,{variant:"h5",children:"Example: Finding Fodder Artifacts"}),t(n,{children:"By utilizing the artifact filter, and the artifact RV, you can quickly find artifacts to feed as food."}),t(n,{children:"In this example, the filters are set thusly: "}),t(n,{component:"div",children:e("ul",{children:[t("li",{children:"Limit level to 0-8."}),t("li",{children:"Unlocked artifacts in Inventory."}),t("li",{children:"Removing the contribution of flat HP, flat DEF and Energy Recharge to RV calculations."}),t("li",{children:"Sorted by Ascending Max Roll Value."})]})}),t(n,{children:"This will filter the artifact Inventory by the lowest RV artifacts, for desired substats."})]})})]})}const se=[...Ft];function ce({probabilityFilter:a={},setProbabilityFilter:r,disabled:i=!1}){const{t:c}=D("artifact");return e(S,{children:[t(v,{sx:{py:1},children:t(n,{variant:"h6",children:"Roll Probability Calculator"})}),t(O,{}),t(v,{children:e(l,{container:!0,spacing:1,children:[t(l,{item:!0,xs:12,md:6,children:t(S,{bgt:"light",children:t(v,{children:e(n,{children:['This UI only pops up when "Sort by"',t("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",e(Rt,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),t(l,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:t(qt,{statKeys:se,statFilters:a,setStatFilters:r,disabled:i,label:c("probabilityFilter.label")})})]})})]})}const Y={xs:1,sm:2,md:3,lg:3,xl:4},ue={xs:5,sm:6,md:12,lg:12,xl:12};function ye(){const{t:a}=D(["artifact","ui"]),r=U(),i=et(),[c,u]=o.useState(),[p,h,d]=Q(!1),y=Mt(),{sortType:C,effFilter:I,ascending:f,probabilityFilter:m}=i,g=C==="probability",[V,M]=rt(),A=o.useDeferredValue(V),x=o.useMemo(()=>new Set(I),[I]);o.useEffect(()=>(Et.send({hitType:"pageview",page:"/artifact"}),r.arts.followAny(()=>M())),[r,M]);const lt=o.useCallback(s=>r.displayArtifact.set({probabilityFilter:s}),[r]),ot=o.useMemo(()=>!r.arts.values.length,[r]),W=o.useMemo(()=>jt(x,m),[x,m]),G=o.useMemo(()=>Wt(x),[x]),H=o.useDeferredValue(i),z=o.useDeferredValue(m);o.useEffect(()=>{if(g)return r.arts.values.forEach(s=>r.arts.setProbability(s.id,Pt(s,z))),()=>r.arts.values.forEach(s=>r.arts.setProbability(s.id,-1))},[r,g,z]);const{artifactIds:w,totalArtNum:E}=o.useMemo(()=>{const{sortType:s=X[0],ascending:q=!1,filterOption:ht}=H;let P=r.arts.values;return g&&(P=P.filter($=>$.probability&&$.probability!==1)),{artifactIds:P.filter($t(ht,G)).sort(_t(Gt[s]??[],q,W)).map($=>$.id),totalArtNum:P.length,...A}},[H,A,r,W,G,g]),{numShow:N,setTriggerElement:st}=Lt(ue[y],w.length),B=o.useMemo(()=>w.slice(0,N),[w,N]),ct=w.length!==E?`${w.length}/${E}`:`${E}`,ut={numShowing:B.length,total:ct,t:a,namespace:"artifact"},dt={sortKeys:[...X],value:C,onChange:s=>r.displayArtifact.set({sortType:s}),ascending:f,onChangeAsc:s=>r.displayArtifact.set({ascending:s})};return e(L,{display:"flex",flexDirection:"column",gap:1,my:1,children:[t(o.Suspense,{fallback:!1,children:t(Vt,{artifactIdToEdit:c,cancelEdit:()=>u(void 0),allowUpload:!0,allowEmpty:!0})}),t(o.Suspense,{fallback:!1,children:t(ee,{show:p,onHide:d,setArtifactIdToEdit:u})}),t(Nt,{pageKey:"artifactPage",modalTitle:a`info.title`,text:a("tipsOfTheDay",{returnObjects:!0}),children:t(oe,{})}),ot&&t(Kt,{}),t(Jt,{numShowing:w.length,total:E,artifactIds:w}),t(S,{children:e(v,{children:[t(L,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(Bt,{showingTextProps:ut,sortByButtonProps:dt})}),t(te,{artifactIds:w})]})}),g&&t(ce,{probabilityFilter:m,setProbabilityFilter:lt}),e(l,{container:!0,columns:Y,spacing:1,children:[t(l,{item:!0,xs:!0,children:t(k,{fullWidth:!0,onClick:()=>u("new"),color:"info",startIcon:t(Ut,{}),children:a`addNew`})}),t(l,{item:!0,xs:1,children:t(k,{fullWidth:!0,onClick:h,color:"info",startIcon:t(at,{}),children:a`showDup`})})]}),e(o.Suspense,{fallback:t(F,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[t(l,{container:!0,spacing:1,columns:Y,children:B.map(s=>t(l,{item:!0,xs:1,children:t(it,{artifactId:s,effFilter:x,onDelete:()=>r.arts.remove(s),onEdit:()=>u(s),setLocation:q=>r.arts.set(s,{location:q})})},s))}),w.length!==B.length&&t(F,{ref:s=>{s&&st(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}export{ye as default};
