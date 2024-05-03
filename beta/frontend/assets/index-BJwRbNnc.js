import{Z as X,d as o,_ as ft,p as e,V as l,q as t,T as n,B as k,$ as mt,a0 as pt,w as S,s as v,a1 as Z,a2 as J,D as O,a3 as M,a4 as tt,r as yt,i as gt,j as bt,u as D,b as B,a5 as et,Y as b,a6 as xt,a7 as wt,a8 as F,a9 as vt,aa as At,ab as kt,C as St,ac as at,ad as rt,W as U,ae as it,af as Dt,ag as Ct,ah as K,ai as _,aj as R,L as It,ak as Tt,al as Rt,am as Ft,an as Mt,ao as Et,X as Lt,ap as Pt,aq as $t,ar as _t,as as Ut,at as Bt,au as Vt,av as qt}from"./index-ConfCm8A.js";import{S as Kt,A as Ot}from"./StatEditorList-DEOf6UOL.js";import{d as jt,a as Wt,b as Gt,c as zt,e as Y}from"./Settings-BoGxd-R7.js";import{L as Ht}from"./Link-BlUBxz2Q.js";function Nt({pageKey:r,text:a="",modalTitle:i="",children:u}){const[d,p,h]=X(typeof window<"u"&&localStorage.getItem(`infoShown_${r}`)!=="true"),[c]=o.useState(Array.isArray(a)?ft(a):a),y=o.useCallback(()=>{h(),localStorage.setItem(`infoShown_${r}`,"true")},[h,r]);return e(S,{children:[e(l,{container:!0,children:[t(l,{item:!0,flexGrow:1,children:t(n,{variant:"caption",pl:1,children:c})}),t(l,{item:!0,xs:"auto",children:t(k,{size:"small",color:"info",variant:"contained",onClick:p,startIcon:t(mt,{}),children:t(pt,{ns:"ui",key18:"info"})})})]}),t(tt,{containerProps:{maxWidth:"xl"},open:d,onClose:y,children:e(S,{children:[e(v,{sx:{py:1,display:"flex"},children:[t(n,{variant:"h6",children:i}),t(Z,{onClick:y,sx:{ml:"auto"},children:t(J,{})})]}),t(O,{}),t(v,{children:t(o.Suspense,{fallback:t(M,{variant:"rectangular",width:"100%",height:500}),children:u})})]})})]})}var j={},Yt=gt;Object.defineProperty(j,"__esModule",{value:!0});var nt=j.default=void 0,Qt=Yt(yt()),Xt=bt,Zt=(0,Qt.default)((0,Xt.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");nt=j.default=Zt;function Jt({numShowing:r,total:a,artifactIds:i}){const{t:u}=D(["artifact","ui"]),d=B(),{filterOption:p}=et(),h=o.useCallback(c=>d.displayArtifact.set({filterOption:{...p,...c}}),[d,p]);return t(o.Suspense,{fallback:t(M,{variant:"rectangular",width:"100%",height:300}),children:t(S,{children:e(v,{children:[e(l,{container:!0,children:[t(l,{item:!0,children:t(n,{variant:"h6",children:t(b,{t:u,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(l,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:e(n,{children:[t("strong",{children:r})," / ",a]})}),t(l,{item:!0,children:t(k,{size:"small",color:"error",onClick:()=>d.displayArtifact.set({action:"reset"}),startIcon:t(xt,{}),children:t(b,{t:u,i18nKey:"ui:reset"})})})]}),t(o.Suspense,{fallback:t(M,{variant:"rectangular",width:"100%",height:400}),children:t(wt,{filterOption:p,filterOptionDispatch:h,filteredIds:i})})]})})})}function te({artifactIds:r}){const{t:a}=D(["artifact","ui"]),i=B(),{numDelete:u,numUnequip:d,numUnlock:p,numLock:h}=o.useMemo(()=>{const f=r.map(A=>i.arts.get(A)),m=f.reduce((A,x)=>A+(x.lock?0:1),0),g=f.length-m,V=m,E=f.reduce((A,x)=>A+(x.location?1:0),0);return{numDelete:V,numUnequip:E,numUnlock:m,numLock:g}},[r,i]);return e(l,{container:!0,spacing:1,alignItems:"center",children:[t(l,{item:!0,xs:12,sm:6,md:3,children:e(k,{fullWidth:!0,color:"error",disabled:!d,onClick:()=>window.confirm(`Are you sure you want to unequip ${d} artifacts currently equipped on characters?`)&&r.map(f=>i.arts.set(f,{location:""})),startIcon:t(nt,{}),children:[t(b,{t:a,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t(F,{sx:{ml:1},color:d?"success":"secondary",children:d})]})}),t(l,{item:!0,xs:12,sm:6,md:3,children:e(k,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to delete ${u} artifacts?`)&&r.map(f=>{var m;return!((m=i.arts.get(f))!=null&&m.lock)&&i.arts.remove(f)}),startIcon:t(vt,{}),children:[t(b,{t:a,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t(F,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(l,{item:!0,xs:12,sm:6,md:3,children:e(k,{fullWidth:!0,color:"error",disabled:!h,onClick:()=>window.confirm(`Are you sure you want to unlock ${h} artifacts?`)&&r.map(f=>i.arts.set(f,{lock:!1})),startIcon:t(At,{}),children:[t(b,{t:a,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t(F,{sx:{ml:1},color:h?"success":"secondary",children:h})]})}),t(l,{item:!0,xs:12,sm:6,md:3,children:e(k,{fullWidth:!0,color:"error",disabled:!p,onClick:()=>window.confirm(`Are you sure you want to lock ${p} artifacts?`)&&r.map(f=>i.arts.set(f,{lock:!0})),startIcon:t(kt,{}),children:[t(b,{t:a,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t(F,{sx:{ml:1},color:p?"success":"secondary",children:p})]})}),t(l,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(n,{variant:"caption",color:"text.secondary",children:e(b,{t:a,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function ee({setArtifactIdToEdit:r,show:a,onHide:i}){const{t:u}=D("artifact");return t(tt,{open:a,onClose:i,children:e(S,{children:[t(St,{title:e(n,{variant:"h6",flexGrow:1,display:"flex",alignItems:"center",children:[t(at,{sx:{verticalAlign:"text-top",mr:1}}),u`showDup`]}),action:t(Z,{onClick:i,children:t(J,{})})}),t(O,{}),t(v,{children:t(ae,{setArtifactIdToEdit:r})})]})})}function ae({setArtifactIdToEdit:r}){const{t:a}=D("artifact"),i=B(),[u,d]=rt();o.useEffect(()=>i.arts.followAny(d),[d,i]);const p=o.useMemo(()=>{const h=u&&[];let c=i.arts.keys;for(;c.length!==0;){const y=c.shift();if(!y)continue;const C=i.arts.get(y);if(!C)continue;const{duplicated:I}=i.arts.findDups(C,c);if(!I.length)continue;const f=I.map(m=>m.id);h.push([y,...f].sort(m=>{var g;return((g=i.arts.get(m))==null?void 0:g.location)??""?-1:1})),c=c.filter(m=>!f.includes(m))}return h},[i,u]);return e(Ct,{spacing:2,children:[p.map(h=>t(S,{sx:{overflowX:"scroll"},children:t(v,{sx:{display:"flex",gap:1},children:h.map(c=>t(U,{sx:{minWidth:300},children:t(it,{artifactId:c,setLocation:y=>i.arts.set(c,{location:y}),onLockToggle:()=>i.arts.set(c,({lock:y})=>({lock:!y})),onDelete:()=>i.arts.remove(c),onEdit:()=>r(c)})},c))})},h.join())),!p.length&&t(Dt,{variant:"filled",severity:"success",children:a`noDupAlert`})]})}const re=""+new URL("artifactcard-CYZmz0U0.png",import.meta.url).href,ie=""+new URL("artifacteditor-BryQ3Lmm.png",import.meta.url).href,ne=""+new URL("artifactfilter-DK_eMtaJ.png",import.meta.url).href;function le(){return t(U,{display:"inline-flex",gap:.3,sx:{height:"1.5em"},children:Tt(0,5).map(r=>t(Rt,{color:`roll${r+1}.main`,value:(r+1)/6*100},r))})}function oe(){const{t:r}=D("artifact");return e(l,{container:!0,spacing:1,children:[t(l,{item:!0,xs:12,lg:5,xl:4,children:t(K,{src:re})}),t(l,{item:!0,xs:12,lg:7,xl:8,children:e(b,{t:r,i18nKey:"info.section1",children:[t(n,{variant:"h5",children:"Substat rolls"}),e(n,{gutterBottom:!0,children:["The ",t("b",{children:"number of rolls"})," a substat has is shown to the left of the substat. As the number gets higher, the substat is more colorful:",t(le,{}),"."]}),t(n,{variant:"h5",children:"Substat Roll Value"}),e(n,{gutterBottom:!0,children:["The Roll Value(RV) of an subtat is a percentage of the current value over the highest potential 5",t(_,{...R}),"value. From the Image, the maximum roll value of CRIT DMG is 7.8%. In RV: ",t("b",{children:"5.8/7.8 = 69.2%."})]}),t(n,{variant:"h5",children:"Current Roll Value vs. Maximum Roll Value"}),e(n,{gutterBottom:!0,children:["When a 5",t(_,{...R})," have 9(4+5) total rolls, with each of the rolls having the highest value, that is defined as a 900% RV artifact. However, most of the artifacts are not this lucky. The ",t("b",{children:"Current RV"})," of an artifact is a percentage over that 100% artifact. The ",t("b",{children:"Maximum RV"})," is the maximum possible RV an artifact can achieve, if the remaining artifact rolls from upgrades are the hightest possible value."]})]})}),t(l,{item:!0,xs:12,lg:6,xl:7,children:e(b,{t:r,i18nKey:"info.section2",children:[t(n,{variant:"h5",children:"Artifact Editor"}),e(n,{gutterBottom:!0,children:["A fully featured artifact editor, that can accept any 3",t(_,{...R})," to 5",t(_,{...R})," Artifact. When a substat is inputted, it can calculate the exact roll values. It will also make sure that you have the correct number of rolls in the artifact according to the level, along with other metrics of validation."]}),t(n,{variant:"h5",children:"Scan screenshots"}),e(n,{gutterBottom:!0,children:["Manual input is not your cup of tea? You can scan in your artifacts with screenshots! On the Artifact Editor, click the",t(F,{color:"info",children:"Show Me How!"})," button to learn more."]}),t(n,{variant:"h6",children:"Automatic Artifact Scanner"}),e(n,{gutterBottom:!0,children:["If you are playing Genshin on PC, you can download a tool that automatically scans all your artifacts for you, and you can then import that data in ",t(jt,{...R})," Database.",t(Ht,{component:It,to:"/scanner",children:"Click here"}),"for a list of scanners that are compatible with GO."]}),t(n,{variant:"h5",children:"Duplicate/Upgrade artifact detection"}),e(n,{children:["Did you know GO can detect if you are adding a ",t("b",{children:"duplicate"}),"artifact that exists in the system? It can also detect if the current artifact in editor is an ",t("b",{children:"upgrade"})," of an existing artifact as well. Once a duplicate/upgrade is detected, a preview will allow you to compare the two artifacts in question(See Image)."]})]})}),t(l,{item:!0,xs:12,lg:6,xl:5,children:t(K,{src:ie})}),t(l,{item:!0,xs:12,lg:7,xl:6,children:t(K,{src:ne})}),t(l,{item:!0,xs:12,lg:5,xl:6,children:e(b,{t:r,i18nKey:"info.section3",children:[t(n,{variant:"h5",children:"Artifact Inventory"}),e(n,{gutterBottom:!0,children:["All your artifacts that you've added to GO are displayed here. The filters here allow you to further refine your view of your artifacts."," "]}),t(n,{variant:"h5",children:"Example: Finding Fodder Artifacts"}),t(n,{children:"By utilizing the artifact filter, and the artifact RV, you can quickly find artifacts to feed as food."}),t(n,{children:"In this example, the filters are set thusly: "}),t(n,{component:"div",children:e("ul",{children:[t("li",{children:"Limit level to 0-8."}),t("li",{children:"Unlocked artifacts in Inventory."}),t("li",{children:"Removing the contribution of flat HP, flat DEF and Energy Recharge to RV calculations."}),t("li",{children:"Sorted by Ascending Max Roll Value."})]})}),t(n,{children:"This will filter the artifact Inventory by the lowest RV artifacts, for desired substats."})]})})]})}const se=[...Mt];function ce({probabilityFilter:r={},setProbabilityFilter:a,disabled:i=!1}){const{t:u}=D("artifact");return e(S,{children:[t(v,{sx:{py:1},children:t(n,{variant:"h6",children:"Roll Probability Calculator"})}),t(O,{}),t(v,{children:e(l,{container:!0,spacing:1,children:[t(l,{item:!0,xs:12,md:6,children:t(S,{bgt:"light",children:t(v,{children:e(n,{children:['This UI only pops up when "Sort by"',t("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",e(Ft,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),t(l,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:t(Kt,{statKeys:se,statFilters:r,setStatFilters:a,disabled:i,label:u("probabilityFilter.label")})})]})})]})}const Q={xs:1,sm:2,md:3,lg:3,xl:4},ue={xs:5,sm:6,md:12,lg:12,xl:12};function ye(){const{t:r}=D(["artifact","ui"]),a=B(),i=et(),[u,d]=o.useState(),[p,h,c]=X(!1),y=Et(),{sortType:C,effFilter:I,ascending:f,probabilityFilter:m}=i,g=C==="probability",[V,E]=rt(),A=o.useDeferredValue(V),x=o.useMemo(()=>new Set(I),[I]);o.useEffect(()=>(Lt.send({hitType:"pageview",page:"/artifact"}),a.arts.followAny(()=>E())),[a,E]);const lt=o.useCallback(s=>a.displayArtifact.set({probabilityFilter:s}),[a]),ot=o.useMemo(()=>!a.arts.values.length,[a]),W=o.useMemo(()=>Wt(x,m),[x,m]),G=o.useMemo(()=>Gt(x),[x]),z=o.useDeferredValue(i),H=o.useDeferredValue(m);o.useEffect(()=>{if(g)return a.arts.values.forEach(s=>a.arts.setProbability(s.id,Pt(s,H))),()=>a.arts.values.forEach(s=>a.arts.setProbability(s.id,-1))},[a,g,H]);const{artifactIds:w,totalArtNum:L}=o.useMemo(()=>{const{sortType:s=Y[0],ascending:T=!1,filterOption:ht}=z;let P=a.arts.values;return g&&(P=P.filter($=>$.probability&&$.probability!==1)),{artifactIds:P.filter($t(ht,G)).sort(_t(zt[s]??[],T,W)).map($=>$.id),totalArtNum:P.length,...A}},[z,A,a,W,G,g]),{numShow:N,setTriggerElement:st}=Ut(ue[y],w.length),q=o.useMemo(()=>w.slice(0,N),[w,N]),ct=w.length!==L?`${w.length}/${L}`:`${L}`,ut={numShowing:q.length,total:ct,t:r,namespace:"artifact"},dt={sortKeys:[...Y],value:C,onChange:s=>a.displayArtifact.set({sortType:s}),ascending:f,onChangeAsc:s=>a.displayArtifact.set({ascending:s})};return e(U,{display:"flex",flexDirection:"column",gap:1,my:1,children:[t(o.Suspense,{fallback:!1,children:t(Vt,{artifactIdToEdit:u,cancelEdit:()=>d(void 0),allowUpload:!0,allowEmpty:!0})}),t(o.Suspense,{fallback:!1,children:t(ee,{show:p,onHide:c,setArtifactIdToEdit:d})}),t(Nt,{pageKey:"artifactPage",modalTitle:r`info.title`,text:r("tipsOfTheDay",{returnObjects:!0}),children:t(oe,{})}),ot&&t(Ot,{}),t(Jt,{numShowing:w.length,total:L,artifactIds:w}),t(S,{children:e(v,{children:[t(U,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(qt,{showingTextProps:ut,sortByButtonProps:dt})}),t(te,{artifactIds:w})]})}),g&&t(ce,{probabilityFilter:m,setProbabilityFilter:lt}),e(l,{container:!0,columns:Q,spacing:1,children:[t(l,{item:!0,xs:!0,children:t(k,{fullWidth:!0,onClick:()=>d("new"),color:"info",startIcon:t(Bt,{}),children:r`addNew`})}),t(l,{item:!0,xs:1,children:t(k,{fullWidth:!0,onClick:h,color:"info",startIcon:t(at,{}),children:r`showDup`})})]}),e(o.Suspense,{fallback:t(M,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[t(l,{container:!0,spacing:1,columns:Q,children:q.map(s=>t(l,{item:!0,xs:1,children:t(it,{artifactId:s,effFilter:x,onDelete:()=>a.arts.remove(s),onEdit:()=>d(s),setLocation:T=>a.arts.set(s,{location:T}),onLockToggle:()=>a.arts.set(s,({lock:T})=>({lock:!T}))})},s))}),w.length!==q.length&&t(M,{ref:s=>{s&&st(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}export{ye as default};
