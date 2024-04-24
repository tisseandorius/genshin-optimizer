import{a$ as z,b0 as W,b1 as H,b2 as C,d as p,b3 as D,b4 as _,b5 as Oe,j as S,b6 as Ue,b7 as j,T as $,b8 as k,b9 as E,ba as Ke,bb as X,bc as Ve,r as qe,i as Ge,bd as K,be as Je,bf as U,as as de,p as u,s as B,q as e,bg as V,am as N,ai as L,bh as q,a3 as A,W as x,I as P,bi as ve,bj as ye,a0 as se,bk as oe,aT as pe,u as Pe,m as Qe,n as Ze,bl as ue,bm as Ne,ak as Xe,bn as Ye,C as et,bo as tt,bp as Le,a1 as Ae,a2 as Ie,V as T,w as G,a4 as ze,bq as at,aJ as We,h as I,br as nt,bs as He,Z as De,f as rt,bt as st,x as ae,E as ot,k as he,bu as _e,bv as it,bw as je,bx as lt,by as ct,bz as dt,bA as pt,bB as Q,bC as ut,bD as ht,bE as gt,bF as mt,bG as bt,bH as ft,bI as vt,bJ as xe,bK as yt,bL as xt,bM as Tt,bN as Ct,bO as wt,L as St,D as Rt,bP as $t,bQ as Z,bR as kt,F as Mt,A as Pt,P as Nt}from"./index-CgpYVhik.js";function Lt(t){return W("MuiInputAdornment",t)}const At=z("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),Te=At;var Ce;const It=["children","className","component","disablePointerEvents","disableTypography","position","variant"],zt=(t,a)=>{const{ownerState:r}=t;return[a.root,a[`position${k(r.position)}`],r.disablePointerEvents===!0&&a.disablePointerEvents,a[r.variant]]},Wt=t=>{const{classes:a,disablePointerEvents:r,hiddenLabel:n,position:i,size:s,variant:d}=t,h={root:["root",r&&"disablePointerEvents",i&&`position${k(i)}`,d,n&&"hiddenLabel",s&&`size${k(s)}`]};return E(h,Lt,a)},Ht=H("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:zt})(({theme:t,ownerState:a})=>C({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},a.variant==="filled"&&{[`&.${Te.positionStart}&:not(.${Te.hiddenLabel})`]:{marginTop:16}},a.position==="start"&&{marginRight:8},a.position==="end"&&{marginLeft:8},a.disablePointerEvents===!0&&{pointerEvents:"none"})),Dt=p.forwardRef(function(a,r){const n=D({props:a,name:"MuiInputAdornment"}),{children:i,className:s,component:d="div",disablePointerEvents:h=!1,disableTypography:m=!1,position:b,variant:f}=n,o=_(n,It),y=Oe()||{};let c=f;f&&y.variant,y&&!c&&(c=y.variant);const l=C({},n,{hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:h,position:b,variant:c}),v=Wt(l);return S.jsx(Ue.Provider,{value:null,children:S.jsx(Ht,C({as:d,ownerState:l,className:j(v.root,s),ref:r},o,{children:typeof i=="string"&&!m?S.jsx($,{color:"text.secondary",children:i}):S.jsxs(p.Fragment,{children:[b==="start"?Ce||(Ce=S.jsx("span",{className:"notranslate",children:"​"})):null,i]})}))})}),ge=Dt,_t=p.createContext(),Ee=_t;function jt(t){return W("MuiTable",t)}z("MuiTable",["root","stickyHeader"]);const Et=["className","component","padding","size","stickyHeader"],Bt=t=>{const{classes:a,stickyHeader:r}=t;return E({root:["root",r&&"stickyHeader"]},jt,a)},Ft=H("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>C({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":C({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})),we="table",Ot=p.forwardRef(function(a,r){const n=D({props:a,name:"MuiTable"}),{className:i,component:s=we,padding:d="normal",size:h="medium",stickyHeader:m=!1}=n,b=_(n,Et),f=C({},n,{component:s,padding:d,size:h,stickyHeader:m}),o=Bt(f),y=p.useMemo(()=>({padding:d,size:h,stickyHeader:m}),[d,h,m]);return S.jsx(Ee.Provider,{value:y,children:S.jsx(Ft,C({as:s,role:s===we?null:"table",ref:r,className:j(o.root,i),ownerState:f},b))})}),Y=Ot,Ut=p.createContext(),ne=Ut;function Kt(t){return W("MuiTableBody",t)}z("MuiTableBody",["root"]);const Vt=["className","component"],qt=t=>{const{classes:a}=t;return E({root:["root"]},Kt,a)},Gt=H("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-row-group"}),Jt={variant:"body"},Se="tbody",Qt=p.forwardRef(function(a,r){const n=D({props:a,name:"MuiTableBody"}),{className:i,component:s=Se}=n,d=_(n,Vt),h=C({},n,{component:s}),m=qt(h);return S.jsx(ne.Provider,{value:Jt,children:S.jsx(Gt,C({className:j(m.root,i),as:s,ref:r,role:s===Se?null:"rowgroup",ownerState:h},d))})}),ee=Qt;function Zt(t){return W("MuiTableCell",t)}const Xt=z("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Yt=Xt,ea=["align","className","component","padding","scope","size","sortDirection","variant"],ta=t=>{const{classes:a,variant:r,align:n,padding:i,size:s,stickyHeader:d}=t,h={root:["root",r,d&&"stickyHeader",n!=="inherit"&&`align${k(n)}`,i!=="normal"&&`padding${k(i)}`,`size${k(s)}`]};return E(h,Zt,a)},aa=H("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,a[r.variant],a[`size${k(r.size)}`],r.padding!=="normal"&&a[`padding${k(r.padding)}`],r.align!=="inherit"&&a[`align${k(r.align)}`],r.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>C({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?Ke(X(t.palette.divider,1),.88):Ve(X(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},a.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},a.variant==="body"&&{color:(t.vars||t).palette.text.primary},a.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},a.size==="small"&&{padding:"6px 16px",[`&.${Yt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},a.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},a.padding==="none"&&{padding:0},a.align==="left"&&{textAlign:"left"},a.align==="center"&&{textAlign:"center"},a.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},a.align==="justify"&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),na=p.forwardRef(function(a,r){const n=D({props:a,name:"MuiTableCell"}),{align:i="inherit",className:s,component:d,padding:h,scope:m,size:b,sortDirection:f,variant:o}=n,y=_(n,ea),c=p.useContext(Ee),l=p.useContext(ne),v=l&&l.variant==="head";let R;d?R=d:R=v?"th":"td";let M=m;R==="td"?M=void 0:!M&&v&&(M="col");const J=o||l&&l.variant,be=C({},n,{align:i,component:R,padding:h||(c&&c.padding?c.padding:"normal"),size:b||(c&&c.size?c.size:"medium"),sortDirection:f,stickyHeader:J==="head"&&c&&c.stickyHeader,variant:J}),Fe=ta(be);let fe=null;return f&&(fe=f==="asc"?"ascending":"descending"),S.jsx(aa,C({as:R,ref:r,className:j(Fe.root,s),"aria-sort":fe,scope:M,ownerState:be},y))}),g=na;function ra(t){return W("MuiTableHead",t)}z("MuiTableHead",["root"]);const sa=["className","component"],oa=t=>{const{classes:a}=t;return E({root:["root"]},ra,a)},ia=H("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-header-group"}),la={variant:"head"},Re="thead",ca=p.forwardRef(function(a,r){const n=D({props:a,name:"MuiTableHead"}),{className:i,component:s=Re}=n,d=_(n,sa),h=C({},n,{component:s}),m=oa(h);return S.jsx(ne.Provider,{value:la,children:S.jsx(ia,C({as:s,className:j(m.root,i),ref:r,role:s===Re?null:"rowgroup",ownerState:h},d))})}),te=ca;function da(t){return W("MuiTableRow",t)}const pa=z("MuiTableRow",["root","selected","hover","head","footer"]),$e=pa,ua=["className","component","hover","selected"],ha=t=>{const{classes:a,selected:r,hover:n,head:i,footer:s}=t;return E({root:["root",r&&"selected",n&&"hover",i&&"head",s&&"footer"]},da,a)},ga=H("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.head&&a.head,r.footer&&a.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${$e.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${$e.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:X(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:X(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),ke="tr",ma=p.forwardRef(function(a,r){const n=D({props:a,name:"MuiTableRow"}),{className:i,component:s=ke,hover:d=!1,selected:h=!1}=n,m=_(n,ua),b=p.useContext(ne),f=C({},n,{component:s,hover:d,selected:h,head:b&&b.variant==="head",footer:b&&b.variant==="footer"}),o=ha(f);return S.jsx(ga,C({as:s,ref:r,className:j(o.root,i),role:s===ke?null:"row",ownerState:f},m))}),w=ma;var me={},ba=Ge;Object.defineProperty(me,"__esModule",{value:!0});var re=me.default=void 0,fa=ba(qe()),va=S,ya=(0,fa.default)((0,va.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");re=me.default=ya;const ie=[5,4,3];function xa(){const[t,a]=p.useState([...ie]),[r,n]=p.useState(""),i=p.useDeferredValue(r),s=K([...ie]),d=p.useMemo(()=>Je.filter(o=>{const{rarities:y}=oe(o);if(!t.includes(Math.max(...y)))return!1;const c=U.t(`artifactNames_gen:${o}`);return!(i&&!c.toLocaleLowerCase().includes(i.toLocaleLowerCase()))},[t]),[t,i]),h=p.useMemo(()=>d.filter(o=>!o.startsWith("Prayers")),[d]),{numShow:m,setTriggerElement:b}=de(10,h.length),f=p.useMemo(()=>h.slice(0,m),[h,m]);return u(x,{children:[u(B,{sx:{display:"flex",gap:2},children:[e(q,{value:t,children:ie.map(o=>e(V,{value:o,onClick:()=>a(y=>s(y,o)),children:e(N,{color:`rarity${o}`,children:e(L,{sx:{verticalAlign:"text-top"}})})},o))}),e(pe,{fullWidth:!0,variant:"outlined",value:r,onChange:o=>n(o.target.value),InputProps:{startAdornment:e(ge,{position:"start",children:e(re,{})})}})]}),u(Y,{children:[e(te,{children:u(w,{children:[e(g,{children:"Set"}),e(g,{children:"Rarity"}),e(g,{children:"2-piece Bonus"}),e(g,{children:"4-piece Bonus"})]})}),u(ee,{children:[f.map(o=>{const{rarities:y}=oe(o);return e(p.Suspense,{fallback:e(w,{children:e(g,{colSpan:4,children:e(A,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:u(w,{children:[e(g,{children:u(x,{sx:{display:"flex",alignItems:"center"},children:[e(P,{size:4,src:ve(o)}),e(ye,{setKey:o})]})}),e(g,{children:e(x,{display:"flex",children:y.sort().reverse().map(c=>e(N,{color:`rarity${c}`,children:e(L,{})},c))})}),e(g,{children:e(se,{ns:`artifact_${o}_gen`,key18:"setEffects.2"})}),e(g,{children:e(se,{ns:`artifact_${o}_gen`,key18:"setEffects.4"})})]},o)})}),h.length!==f.length&&e(w,{children:e(g,{colSpan:4,children:e(A,{ref:o=>{o&&b(o)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]}),u(Y,{sx:{mt:2},children:[e(te,{children:u(w,{children:[e(g,{children:"Set"}),e(g,{children:"Rarity"}),e(g,{children:"1-piece Bonus"})]})}),e(ee,{children:d.filter(o=>o.startsWith("Prayers")).map(o=>{const{rarities:y}=oe(o);return u(w,{children:[e(g,{children:u(x,{sx:{display:"flex",alignItems:"center"},children:[e(P,{size:4,src:ve(o)}),e(ye,{setKey:o})]})}),e(g,{children:e(x,{display:"flex",children:y.sort().reverse().map(c=>e(N,{color:`rarity${c}`,children:e(L,{})},c))})}),e(g,{width:"90%",children:e(se,{ns:`artifact_${o}_gen`,key18:"setEffects.1"})})]},o)})})]})]})}const F={xs:12,sm:6,md:4};function Ta({show:t,character:a,onClose:r}){const{t:n}=Pe("sheet_gen"),i=Qe(),s=Ze(i.breakpoints.up("lg")),{key:d,constellation:h,ascension:m}=a,{gender:b}=ue(),f=Ne(d,b),o=[["auto",n("talents.auto")],["skill",n("talents.skill")],["burst",n("talents.burst")]],y=[["passive1",n("unlockPassive1"),1],["passive2",n("unlockPassive2"),4],["passive3",n("unlockPassive3"),0]],c=p.useMemo(()=>Xe(1,Ye).map(l=>e(O,{characterKey:d,talentKey:`constellation${l}`,subtitle:n("constellationLvl",{level:l})})),[n,d]);return e(ze,{open:t,onClose:r,containerProps:{maxWidth:"xl"},children:u(G,{children:[e(et,{title:u(x,{children:[e(tt,{characterKey:d,sideMargin:!0}),e(x,{sx:{pl:1},component:"span",children:e(Le,{characterKey:d,gender:b})})]}),action:e(Ae,{onClick:r,children:e(Ie,{})})}),e(B,{children:u(T,{container:!0,spacing:1,children:[s&&e(T,{item:!0,xs:12,md:12,lg:3,sx:{display:"flex",flexDirection:"column",gap:1},children:c.map((l,v)=>e(x,{sx:{opacity:h>=v+1?1:.5},children:l},v))}),u(T,{item:!0,xs:12,md:12,lg:9,container:!0,spacing:1,children:[o.map(([l,v])=>e(T,{item:!0,...F,children:e(O,{characterKey:d,talentKey:l,subtitle:v})},l)),!!f.getTalentOfKey("sprint")&&e(T,{item:!0,...F,children:e(O,{characterKey:d,talentKey:"sprint",subtitle:n("talents.altSprint")})}),!!f.getTalentOfKey("passive")&&e(T,{item:!0,...F,children:e(O,{characterKey:d,talentKey:"passive",subtitle:"Passive"})}),y.map(([l,v,R])=>{const M=m>=R;return f.getTalentOfKey(l)?e(T,{item:!0,style:{opacity:M?1:.5},...F,children:e(O,{characterKey:d,talentKey:l,subtitle:v})},l):null})]}),!s&&e(T,{item:!0,xs:12,md:12,lg:3,container:!0,spacing:1,children:c.map((l,v)=>e(T,{item:!0,sx:{opacity:h>=v+1?1:.5},...F,children:l},v))})]})})]})})}function O({characterKey:t,talentKey:a,subtitle:r}){const{gender:n}=ue(),s=Ne(t,n).getTalentOfKey(a);return e(G,{bgt:"light",sx:{height:"100%"},children:u(B,{children:[u(T,{container:!0,sx:{flexWrap:"nowrap"},children:[e(T,{item:!0,children:e(x,{component:"img",src:s==null?void 0:s.img,sx:{width:60,height:"auto"}})}),u(T,{item:!0,flexGrow:1,sx:{pl:1},children:[e($,{variant:"h6",children:s==null?void 0:s.name}),e($,{variant:"subtitle1",children:r})]})]}),s!=null&&s.sections?e(at,{sections:s.sections,hideDesc:!0}):null]})})}const le=[5,4];function Ca(){const{silly:t}=p.useContext(We),[a,r]=p.useState([...le]),[n,i]=p.useState([...I]),s=K([...le]),d=K([...I]),[h,m]=p.useState(""),b=p.useDeferredValue(h),f=p.useMemo(()=>nt.filter(l=>{const{rarity:v,weaponType:R}=He(l);if(!a.includes(v)||!n.includes(R))return!1;const M=U.t(`charNames_gen:${l}`),J=t&&U.exists(`sillyWisher_charNames:${l}`)?U.t(`sillyWisher_charNames:${l}`):"";return!(b&&!M.toLocaleLowerCase().includes(b.toLocaleLowerCase())&&!J.toLocaleLowerCase().includes(b.toLocaleLowerCase()))},[a]),[a,b,t,n]),{numShow:o,setTriggerElement:y}=de(10,f.length),c=p.useMemo(()=>f.slice(0,o),[f,o]);return u(x,{children:[u(B,{sx:{display:"flex",gap:2},children:[e(q,{value:a,children:le.map(l=>e(V,{value:l,onClick:()=>r(v=>s(v,l)),children:e(N,{color:`rarity${l}`,children:e(L,{sx:{verticalAlign:"text-top"}})})},l))}),e(q,{value:n,children:I.map(l=>{var v;return e(V,{value:l,onClick:()=>i(R=>d(R,l)),children:e(P,{src:(v=ae.weaponTypes)==null?void 0:v[l],size:2})},l)})}),e(pe,{fullWidth:!0,variant:"outlined",value:h,onChange:l=>m(l.target.value),InputProps:{startAdornment:e(ge,{position:"start",children:e(re,{})})}})]}),u(Y,{children:[e(te,{children:u(w,{children:[e(g,{children:"Name"}),e(g,{children:"Rarity"}),e(g,{children:"Element"}),e(g,{children:"Type"})]})}),u(ee,{children:[c.map(l=>e(wa,{characterKey:l},l)),c.length!==f.length&&e(w,{children:e(g,{colSpan:5,children:e(A,{ref:l=>{l&&y(l)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const wa=p.memo(function({characterKey:a}){var o;const{silly:r}=p.useContext(We),{gender:n}=ue(),[i,s,d]=De(),{rarity:h,weaponType:m}=He(a),b=rt(a),f=p.useMemo(()=>({key:a,level:90,ascension:6,constellation:6,talent:{auto:10,skill:10,burst:10}}),[a]);return u(p.Suspense,{fallback:e(w,{children:e(g,{colSpan:4,children:e(A,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(Ta,{show:i,character:f,onClose:d}),u(w,{hover:!0,onClick:s,sx:{cursor:"pointer"},children:[e(g,{children:u(x,{sx:{display:"flex",alignItems:"center"},children:[e(P,{size:4,src:st(a,n,r)}),e(Le,{characterKey:a,gender:n})]})}),e(g,{children:e(x,{display:"flex",children:e(N,{color:`rarity${h}`,children:e(L,{})})})}),e(g,{children:e(ot,{ele:b,iconProps:{color:b}})}),e(g,{children:e(P,{src:(o=ae.weaponTypes)==null?void 0:o[m],size:3,sideMargin:!0})})]})]})});function Sa({show:t,weaponUIData:a,weapon:r,onClose:n}){const{key:i,level:s=0,refinement:d=1,ascension:h=0}=r,m=i&&he(i),b=i?_e(i,h>=2):"";return e(ze,{open:t,onClose:n,containerProps:{maxWidth:"md"},children:e(G,{children:e(B,{children:m&&a&&u(T,{container:!0,spacing:1.5,children:[e(T,{item:!0,xs:12,sm:3,children:u(T,{container:!0,spacing:1.5,children:[e(T,{item:!0,xs:6,sm:12,children:e(x,{sx:{position:"relative",display:"flex"},children:e(x,{component:"img",src:b,className:`grad-${m.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})})}),e(T,{item:!0,xs:6,sm:12,children:e($,{children:e("small",{children:i&&e(it,{weaponKey:i})})})})]})}),u(T,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[u(x,{display:"flex",gap:1,flexWrap:"wrap",children:[e($,{variant:"h5",children:e(je,{weaponKey:i})}),n&&e(Ae,{onClick:n,sx:{marginLeft:"auto"},children:e(Ie,{})})]}),u($,{children:["Lv. ",lt(s,h)," R",d]}),e(ct,{stars:m.rarity}),e($,{variant:"subtitle1",children:e("strong",{children:i&&e(dt,{weaponKey:i})})}),e($,{gutterBottom:!0,children:i&&e(pt,{weaponKey:i,refineIndex:(a.get(Q.weapon.refinement).value??1)-1})}),e(x,{display:"flex",flexDirection:"column",gap:1,children:e(G,{bgt:"light",children:e(ut,{bgt:"light",children:[Q.weapon.main,Q.weapon.sub,Q.weapon.sub2].map(f=>{const o=a.get(f);return o.isEmpty||!o.value?null:e(ht,{node:o,component:gt},JSON.stringify(o.info))})})})})]})]})})})})}const ce=[5,4,3,2,1];function Ra(){const[t,a]=p.useState([...ce]),[r,n]=p.useState([...I]),i=K([...ce]),s=K([...I]),[d,h]=p.useState(""),m=p.useDeferredValue(d),b=p.useMemo(()=>mt.filter(c=>{const{rarity:l,weaponType:v}=he(c);if(!t.includes(l)||!r.includes(v))return!1;const R=U.t(`weaponNames_gen:${c}`);return!(m&&!R.toLocaleLowerCase().includes(m.toLocaleLowerCase()))},[t]),[t,m,r]),{numShow:f,setTriggerElement:o}=de(10,b.length),y=p.useMemo(()=>b.slice(0,f),[b,f]);return u(x,{children:[u(B,{sx:{display:"flex",gap:2},children:[e(q,{value:t,children:ce.map(c=>e(V,{value:c,onClick:()=>a(l=>i(l,c)),children:e(N,{color:`rarity${c}`,children:e(L,{sx:{verticalAlign:"text-top"}})})},c))}),e(q,{value:r,children:I.map(c=>{var l;return e(V,{value:c,onClick:()=>n(v=>s(v,c)),children:e(P,{src:(l=ae.weaponTypes)==null?void 0:l[c],size:2})},c)})}),e(pe,{fullWidth:!0,variant:"outlined",value:d,onChange:c=>h(c.target.value),InputProps:{startAdornment:e(ge,{position:"start",children:e(re,{})})}})]}),u(Y,{children:[e(te,{children:u(w,{children:[e(g,{children:"Name"}),e(g,{children:"Type"}),e(g,{children:"Rarity"}),e(g,{children:"Main"}),e(g,{children:"Secondary"})]})}),u(ee,{children:[y.map(c=>e($a,{weaponKey:c},c)),b.length!==y.length&&e(w,{children:e(g,{colSpan:5,children:e(A,{ref:c=>{c&&o(c)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const $a=p.memo(function({weaponKey:a}){var o;const[r,n,i]=De(),{rarity:s,weaponType:d}=he(a),h=p.useMemo(()=>({id:"invalid",ascension:s>2?6:4,key:a,level:s>2?90:70,refinement:1,location:"",lock:!1}),[s,a]),m=p.useMemo(()=>bt([ft(a).data,vt(h)]),[a,h]),b=m.get(xe.weapon.main),f=m.get(xe.weapon.sub);return u(p.Suspense,{fallback:e(w,{children:e(g,{colSpan:5,children:e(A,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(Sa,{show:r,weaponUIData:m,weapon:h,onClose:i}),u(w,{hover:!0,onClick:n,sx:{cursor:"pointer"},children:[e(g,{children:u(x,{sx:{display:"flex",alignItems:"center"},children:[e(P,{size:4,src:_e(a,!0)}),e(je,{weaponKey:a})]})}),e(g,{children:e(P,{src:(o=ae.weaponTypes)==null?void 0:o[d],size:3,sideMargin:!0})}),e(g,{children:e(x,{display:"flex",children:e(N,{color:`rarity${s}`,children:e(L,{})})})}),e(g,{children:e(Me,{node:b})}),e(g,{children:e(Me,{node:f})})]})]})});function Me({node:t}){const{name:a,icon:r}=yt(t.info);return Number.isNaN(t.value)?null:u(x,{sx:{display:"flex"},children:[u($,{flexGrow:1,children:[r," ",a]}),e($,{children:xt(t).valueString})]})}const ka={i18Key:"tabs.artifacts",icon:e(Mt,{}),value:"artifacts",to:"/artifacts"},Ma={i18Key:"tabs.weapons",icon:e(Pt,{}),value:"weapons",to:"/weapons"},Pa={i18Key:"tabs.characters",icon:e(Nt,{}),value:"characters",to:"/characters"},Be=[ka,Ma,Pa],Na=Be.map(({value:t})=>t);function Aa(){const{t}=Pe("ui"),{params:{tab:a}}=Tt({path:"/archive/:tab",end:!1})??{params:{}},r=p.useMemo(()=>Na.find(i=>i===a)??"artifacts",[a]);return e(x,{my:1,children:u(G,{children:[e(Ct,{variant:"fullWidth",value:r,sx:{"& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px"}},children:Be.map(({i18Key:n,icon:i,value:s,to:d})=>e(wt,{icon:i,iconPosition:"start",value:s,label:t(n),component:St,to:`/archive${d}`},s))}),e(Rt,{}),e(p.Suspense,{fallback:e(A,{variant:"rectangular",width:"100%",height:1e3}),children:u($t,{children:[e(Z,{path:"artifacts",element:e(xa,{})}),e(Z,{path:"weapons",element:e(Ra,{})}),e(Z,{path:"characters",element:e(Ca,{})}),e(Z,{path:"*",element:e(kt,{to:"artifacts"})})]})})]})})}export{Aa as default};
