import{z as U,b as e,d as a,ad as Fe,aw as Pe,a as j,A as E,r as s,bR as ae,f as h,G as o,h as b,cp as Ke,cq as Ge,c4 as qe,cr as Ve,X as ge,cs as He,bJ as Ue,ap as de,_ as Je,ct as he,cu as Qe,cv as te,M as W,aj as ne,ak as V,N as _,O as D,T as $,cw as Xe,c2 as O,co as R,p as H,e as F,cx as fe,ab as Ye,cy as Ze,ag as M,aq as re,al as se,ae as xe,cz as et,cA as tt,o as at,cB as nt,ax as rt,aJ as J,cC as st,cD as it,bQ as ye,C as lt,cj as ct,v as Ce,w as be,j as ve,t as K,bL as ie,bM as ot,b0 as we,cl as dt,cE as ht,cF as ut,cG as pt,D as Te,b$ as ue,E as mt,J as gt,cH as pe,au as Se,bP as ft,S as P,i as xt,l as yt,cI as Ct,cc as bt,cJ as vt,aD as wt,ac as Tt,aG as St,aH as It,b6 as ee,aI as kt,b9 as Dt,cK as Mt,cL as At,bk as _t,aM as jt,cM as $t,cN as Ie,cO as Lt,cP as Ot,I as Wt,H as Et,g as Bt,F as Nt,cQ as zt,cR as Rt}from"./index-BprZTdln.js";import{u as Ft,B as ke,a as De,L as Pt,T as me,d as Kt,b as Gt,c as qt,e as Vt,C as Ht,f as Ut,g as Jt,E as Qt}from"./LoadoutInfoAlert-CkVSWYX0.js";import{T as Me}from"./TeamCard-BTgAgb_A.js";import{u as Xt}from"./useTeamChar-DtbEOSMn.js";import{O as Yt,L as Zt}from"./TeamDelModal-BKOihA3M.js";import"./Settings-DFLRVVkc.js";function ea(){const{t}=U("page_character");return e(Pe,{severity:"warning",children:a(Fe,{t,i18nKey:"noLoadout",children:["Looks like you haven't added any loadout/Teams with this character yet. You need to create a loadout+team with this character to"," ",e("strong",{children:"create builds"}),", ",e("strong",{children:"theorycraft"}),", or"," ",e("strong",{children:"optimize"}),"."]})})}function ta(){const t=j(),n=E();return s.useCallback(i=>{t.chars.get(i)||t.chars.getWithInitWeapon(i),n(`/characters/${i}`)},[n,t])}function aa({buildId:t,characterKey:n}){const{name:r,description:i,weaponId:p,artifactIds:u}=Ft(t),m=ae(n).weaponType;return e(ke,{name:r,description:i,hideFooter:!0,children:e(h,{sx:{display:"flex",flexDirection:"column",gap:1,alignItems:"stretch"},children:a(o,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:3,xl:3},children:[e(o,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(Ke,{weaponId:p,weaponTypeKey:m})})}),Object.entries(u).map(([x,l])=>e(o,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(Ge,{artifactId:l,slotKey:x})})},l||x))]})})})}function na({buildTcId:t}){const n=De(t),{name:r,description:i}=n;return e(ke,{name:r,description:i,hideFooter:!0,children:e(ra,{buildTcId:t})})}function ra({buildTcId:t}){const{weapon:n,artifact:{slots:r,substats:{stats:i},sets:p}}=De(t),u=qe(n.key),m=Object.entries(i),x=m.slice(0,5),l=m.slice(5);return e(h,{children:a(o,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:2,xl:2},children:[e(o,{item:!0,xs:1,children:a(h,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(Ve,{weapon:n,weaponSheet:u}),!!Object.keys(p).length&&e(b,{sx:{flexGrow:1},children:e(h,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:Object.entries(p).map(([d,c])=>a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(ge,{size:2,src:He(d,"flower")}),e("span",{children:e(Ue,{setKey:d})}),a(de,{children:["x",c]})]},d))})})]})}),e(o,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%",p:1,display:"flex",flexDirection:"column",gap:1,justifyContent:"space-between"},children:Object.entries(r).map(([d,{level:c,statKey:f}])=>a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Je,{slotKey:d}),a(de,{children:["+",c]}),e(he,{statKey:f})]},d))})}),[x,l].map((d,c)=>e(o,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%"},children:e(h,{sx:{p:1,height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:1},children:d.map(([f,w])=>a(h,{sx:{display:"flex",alignItems:"center",gap:1,justifyContent:"space-between"},children:[e(he,{statKey:f}),a("span",{children:[Qe(w,te(f)),te(f)]})]},f))})})},c))]})})}function sa({show:t,onHide:n,teamCharId:r,onDelete:i,teamIds:p,conditionalCount:u}){const m=j(),{name:x,description:l,buildIds:d,buildTcIds:c,customMultiTargets:f,bonusStats:w}=m.teamChars.get(r),I=s.useCallback(()=>{n(),i()},[i,n]);return e(se,{open:t,onClose:n,containerProps:{maxWidth:"md"},children:a(b,{children:[e(W,{title:a("span",{children:["Delete Loadout: ",e("strong",{children:x}),"?"]}),action:e(ne,{onClick:n,children:e(V,{})})}),e(_,{}),a(D,{children:[l&&e(b,{bgt:"dark",sx:{mb:2},children:e(D,{children:l})}),e($,{children:"Deleting the Loadout will also delete the following data:"}),a(Xe,{sx:{listStyleType:"disc",pl:4},children:[!!d.length&&e(O,{sx:{display:"list-item"},children:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:["All saved builds: ",d.length," ",e(R,{title:e(h,{children:d.map(v=>{var C;return a($,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(H,{}),e("span",{children:(C=m.builds.get(v))==null?void 0:C.name})]},v)})}),children:e(F,{})})]})}),!!c.length&&e(O,{sx:{display:"list-item"},children:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:["All saved TC builds: ",c.length," ",e(R,{title:e(h,{children:c.map(v=>{var C;return a($,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(H,{}),e("span",{children:(C=m.buildTcs.get(v))==null?void 0:C.name})]},v)})}),children:e(F,{})})]})}),!!f.length&&e(O,{sx:{display:"list-item"},children:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:["All Custom Multi-targets: ",f.length," ",e(R,{title:e(h,{children:f.map((v,C)=>a($,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(fe,{}),e("span",{children:v.name})]},C))}),children:e(F,{})})]})}),!!Object.keys(w).length&&a(O,{sx:{display:"list-item"},children:["Bonus stats: ",Object.keys(w).length]}),!!u&&a(O,{sx:{display:"list-item"},children:["Conditionals: ",u]}),e(O,{sx:{display:"list-item"},children:"Optimization Configuration"}),!!p.length&&e(O,{sx:{display:"list-item"},children:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[a("span",{children:["Any teams with this loadout will have this loadout removed from the team. Teams will not be deleted. Teams affected:"," ",p.length]}),e(R,{title:e(h,{children:p.map(v=>{var C;return a($,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Ye,{}),e("span",{children:(C=m.teams.get(v))==null?void 0:C.name})]},v)})}),children:e(F,{})})]})})]})]}),a(Ze,{sx:{float:"right"},children:[e(M,{startIcon:e(V,{}),color:"secondary",onClick:n,children:"Cancel"}),e(M,{startIcon:e(re,{}),color:"error",onClick:I,children:"Delete"})]})]})})}function ia({show:t,onHide:n,teamCharId:r,teamIds:i}){const[p,u,m]=xe(),x=E(),l=j(),{key:d,name:c,description:f,buildIds:w,buildTcIds:I,customMultiTargets:v,bonusStats:C,optConfigId:Q,conditional:B}=Xt(r),{optimizationTarget:N}=et(Q),T=()=>{n(),l.teamChars.remove(r)},z=()=>{l.teamChars.duplicate(r)&&n()},X=y=>{const A=l.teams.new();l.teams.set(A,Y=>{Y.loadoutData[0]={teamCharId:y}}),x(`/teams/${A}`)},G=s.useMemo(()=>{let y=0;return tt(B,[],A=>typeof A!="object",()=>y++),y},[B]);return e(se,{open:t,onClose:n,containerProps:{maxWidth:"lg"},children:a(b,{children:[e(W,{title:a(h,{display:"flex",gap:1,alignItems:"center",children:[e(at,{}),e("strong",{children:c})]}),action:e(ne,{onClick:n,children:e(V,{})})}),e(_,{}),a(D,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Pt,{}),e(me,{fullWidth:!0,label:"Loadout Name",placeholder:"Loadout Name",value:c,onChange:y=>l.teamChars.set(r,{name:y})}),e(me,{fullWidth:!0,label:"Loadout Description",value:f,onChange:y=>l.teamChars.set(r,{description:y}),multiline:!0,minRows:2}),e(h,{children:a(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:[e(o,{item:!0,xs:1,children:e(M,{color:"info",onClick:()=>z(),fullWidth:!0,startIcon:e(Kt,{}),children:"Duplicate Loadout"})}),a(o,{item:!0,xs:1,children:[e(sa,{show:p,onHide:m,onDelete:T,teamCharId:r,teamIds:i,conditionalCount:G}),e(M,{fullWidth:!0,startIcon:e(re,{}),color:"error",onClick:u,children:"Delete Loadout"})]})]})}),e(h,{children:a(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:[!!Object.keys(C).length&&e(o,{item:!0,xs:1,children:e(la,{bonusStats:C})}),!!N&&e(o,{item:!0,xs:1,children:a(b,{bgt:"light",children:[e(W,{title:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(nt,{}),e("span",{children:"Optimization Target"})]})}),e(_,{}),e(D,{children:e(rt,{divider:e(_,{orientation:"vertical",flexItem:!0}),spacing:1,children:e(Yt,{optimizationTarget:N,customMultiTargets:v})})})]})}),!!v.length&&e(o,{item:!0,xs:1,children:e(ca,{customMultiTargets:v})}),e(o,{item:!0,xs:1,children:e(b,{bgt:"light",children:e(D,{children:a($,{variant:"h6",children:["Conditionals: ",e("strong",{children:G})]})})})})]})})]}),e(_,{}),e(W,{title:a(h,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(H,{}),e("span",{children:"Builds"})]})}),e(_,{}),a(D,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Gt,{}),e(h,{children:e(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:w.map(y=>e(o,{item:!0,xs:1,children:e(aa,{buildId:y,characterKey:d})},y))})}),e(qt,{}),e(h,{children:e(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:I.map(y=>e(o,{item:!0,xs:1,children:e(na,{buildTcId:y})},y))})})]}),e(_,{}),e(W,{title:a(h,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(H,{}),e("span",{children:"Teams"})]})}),e(_,{}),a(D,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Vt,{}),a(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:[i.map(y=>e(o,{item:!0,xs:1,children:e(Me,{bgt:"light",teamId:y,onClick:A=>x(`/teams/${y}${A?`/${A}`:""}`)})},y)),e(o,{item:!0,xs:1,children:e(M,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentLight.main"},variant:"outlined",onClick:()=>X(r),color:"info",startIcon:e(J,{}),children:"Add new Team"})})]})]})]})})}function la({bonusStats:t}){return a(b,{bgt:"light",children:[e(W,{title:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(st,{}),e("span",{children:"Bonus Stats"})]}),titleTypographyProps:{variant:"h6"}}),e(ye,{bgt:"light",sections:[{fields:Object.entries(t).map(([n,r])=>({text:it.getStr(n)??n,value:r,unit:te(n)}))}]})]})}function ca({customMultiTargets:t}){return a(b,{bgt:"light",children:[e(W,{title:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(fe,{}),e("span",{children:"Custom multi-targets"})]}),titleTypographyProps:{variant:"h6"}}),e(ye,{bgt:"light",sections:[{fields:t.map(({name:n,description:r})=>({text:n,value:r?e(R,{title:r,children:e(F,{})}):void 0}))}]})]})}const oa={xs:1,md:2};function da({teamCharId:t,teamIds:n}){const r=E(),i=j(),p=l=>{const d=i.teams.new();i.teams.set(d,c=>{c.loadoutData[0]={teamCharId:l}}),r(`/teams/${d}`)},[u,m,x]=xe();return a(ct,{children:[e(ia,{show:u,onHide:x,teamCharId:t,teamIds:n}),a(b,{bgt:"light",children:[e(lt,{onClick:m,children:e(Zt,{teamCharId:t,showSetting:!0})}),e(_,{}),e(D,{sx:{p:1},children:a(o,{container:!0,columns:oa,spacing:1,children:[n.map(l=>e(o,{item:!0,xs:1,children:e(Me,{teamId:l,onClick:d=>r(`/teams/${l}${d?`/${d}`:""}`)})},l)),e(o,{item:!0,xs:1,children:e(M,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentNormal.main"},variant:"outlined",onClick:()=>p(t),color:"info",startIcon:e(J,{}),children:"Add new Team"})})]})})]},t)]})}var le={},ha=be;Object.defineProperty(le,"__esModule",{value:!0});var Ae=le.default=void 0,ua=ha(Ce()),pa=ve,ma=(0,ua.default)((0,pa.jsx)("path",{d:"M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4zm-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5z"}),"Female");Ae=le.default=ma;var ce={},ga=be;Object.defineProperty(ce,"__esModule",{value:!0});var _e=ce.default=void 0,fa=ga(Ce()),xa=ve,ya=(0,fa.default)((0,xa.jsx)("path",{d:"M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z"}),"Male");_e=ce.default=ya;function Ca(){const{t}=U("ui"),n=j(),{character:r}=s.useContext(K),{key:i}=r,{gender:p}=ie(),u=s.useCallback(()=>n.dbMeta.set({gender:p==="F"?"M":"F"}),[p,n]);return i.startsWith("Traveler")?a(M,{onClick:u,startIcon:p==="F"?e(Ae,{}):e(_e,{}),children:[e("strong",{children:t(`gender.${p}`)})," "]}):null}function ba({onClose:t}){const{t:n}=U(["page_character","sillyWisher_charNames","charNames_gen"]),r=E(),i=j(),{character:p,character:{key:u}}=s.useContext(K),{gender:m}=ie(),x=ot(u,m),{silly:l}=s.useContext(we),d=s.useCallback(async()=>{const c=n(`${l?"sillyWisher_charNames":"charNames_gen"}:${dt(u,m)}`);window.confirm(n("removeCharacter",{value:c}))&&(i.chars.remove(u),r("/characters"))},[i,r,u,m,l,n]);return a(h,{display:"flex",flexDirection:"column",gap:1,children:[a(h,{display:"flex",gap:1,children:[e(Ca,{}),e(M,{color:"error",onClick:()=>d(),startIcon:e(re,{}),sx:{marginLeft:"auto"},children:n("delete")}),!!t&&e(ne,{onClick:t,children:e(V,{})})]}),e(h,{children:a(o,{container:!0,spacing:1,sx:{justifyContent:"center"},children:[e(o,{item:!0,xs:8,sm:5,md:4,lg:3,children:a(b,{bgt:"light",sx:{height:"100%",display:"flex",flexDirection:"column",gap:1},children:[e(Ht,{}),e(h,{sx:{px:1},children:e(ht,{level:p.level,ascension:p.ascension,setBoth:c=>i.chars.set(u,c)})}),e(ut,{bgt:"light"}),e($,{sx:{textAlign:"center",pb:-1},variant:"h6",children:e(pt,{characterKey:u,gender:m})}),e(h,{sx:{px:1},children:e(Ut,{setConstellation:c=>i.chars.set(u,{constellation:c})})})]})}),a(o,{item:!0,xs:12,sm:7,md:8,lg:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[e(h,{children:e(o,{container:!0,columns:3,spacing:1,children:["auto","skill","burst"].map(c=>{var f;return e(o,{item:!0,xs:1,children:e(Jt,{talentKey:c,dropDownButtonProps:{startIcon:e(ge,{src:(f=x.getTalentOfKey(c))==null?void 0:f.img,size:1.75,sideMargin:!0})},setTalent:w=>i.chars.set(u,I=>{I.talent[c]=w})},c)},c)})})}),e(va,{}),e(wa,{})]})]})})]})}function va(){const{character:{key:t}}=s.useContext(K),{data:n}=s.useContext(Te),r=j(),i=ae(t).weaponType,p=n.get(ue.weapon.id).value,u=s.useMemo(()=>mt(gt,m=>n.get(ue.art[m].id).value),[n]);return e(h,{children:e(Qt,{weaponTypeKey:i,weaponId:p,artifactIds:u,setWeapon:m=>{r.weapons.set(m,{location:pe(t)})},setArtifact:(m,x)=>{r.arts.set(x,{location:pe(t)})}})})}function wa(){const t=E(),{character:{key:n}}=s.useContext(K),r=j(),{gender:i}=ie(),[p,u]=Se(),m=s.useMemo(()=>{const l={};return r.teamChars.entries.map(([d,c])=>{c.key===n&&(l[d]||(l[d]=[]))}),r.teams.entries.forEach(([d,c])=>{const f=c.loadoutData.find(w=>{var I;return w&&((I=r.teamChars.get(w==null?void 0:w.teamCharId))==null?void 0:I.key)===n});f&&l[f==null?void 0:f.teamCharId].push(d)}),p&&l},[p,n,r]);s.useEffect(()=>r.teams.followAny(()=>u()),[r,u]),s.useEffect(()=>r.teamChars.followAny(()=>u()),[r,u]);const x=()=>{const l=r.teams.new(),d=r.teamChars.new(n);r.teams.set(l,c=>{c.loadoutData[0]={teamCharId:d}}),t(`/teams/${l}`)};return a(h,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a($,{variant:"h6",children:["Team Loadouts with"," ",e(ft,{characterKey:n,gender:i})]}),!Object.values(m).length&&e(ea,{}),Object.entries(m).map(([l,d])=>e(da,{teamCharId:l,teamIds:d},l)),e(M,{fullWidth:!0,onClick:()=>x(),color:"info",startIcon:e(J,{}),variant:"outlined",sx:{backgroundColor:"contentLight.main"},children:"Add new Loadout+Team"}),e(b,{bgt:"light"})]})}function Ta({characterKey:t,onClose:n}){return e(se,{open:!!t,onClose:n,children:e(s.Suspense,{fallback:e(P,{variant:"rectangular",width:"100%",height:1e3}),children:t&&e(Sa,{characterKey:t,onClose:n},t)})})}function Sa({characterKey:t,onClose:n}){const r=xt(t),i=yt(t),{target:p}=(i==null?void 0:i[t])??{},u=s.useMemo(()=>{if(!(!i||!p))return{data:p,teamData:i,compareData:void 0}},[p,i]),m=s.useMemo(()=>r&&{character:r},[r]),[x,l]=s.useState(),[d,c]=s.useState(),f=s.useMemo(()=>({chartData:x,setChartData:l,graphBuilds:d,setGraphBuilds:c}),[x,d]);return s.useEffect(()=>{l(void 0),c(void 0)},[t]),e(b,{children:e(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:e(s.Suspense,{fallback:e(P,{variant:"rectangular",width:"100%",height:1e3}),children:u&&m&&f?e(K.Provider,{value:m,children:e(Te.Provider,{value:u,children:e(Ct.Provider,{value:f,children:e(ba,{onClose:n})})})}):e(P,{variant:"rectangular",width:"100%",height:1e3})})})})}const Ia={xs:1,sm:2,md:3,lg:4,xl:4},ka={xs:5,sm:8,md:9,lg:12,xl:12},Da=Object.keys(Ie);function Oa(){const t=j(),n=E(),{params:{characterKey:r}}=bt({path:"/characters/:characterKey",end:!1})??{params:{}},i=s.useMemo(()=>r?vt(r)?(t.chars.get(r)||t.chars.getWithInitWeapon(r),r):(n("/characters"),null):null,[r,n,t]),{t:p}=U(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:u}=s.useContext(we),[m,x]=s.useState(()=>t.displayCharacter.get());s.useEffect(()=>t.displayCharacter.follow((g,S)=>x(S)),[t,x]);const[l,d]=s.useState(""),c=s.useDeferredValue(l),f=wt(),[w,I]=s.useState(!1),[v,C]=Se();s.useEffect(()=>(Tt.send({hitType:"pageview",page:"/characters"}),t.chars.followAny((g,S)=>(S==="new"||S==="remove")&&C())),[C,t]),s.useEffect(()=>t.charMeta.followAny(g=>C()),[C,t]);const Q=ta(),B=s.useDeferredValue(m),N=s.useDeferredValue(v),{charKeys:T,totalCharNum:z}=s.useMemo(()=>{const S=t.chars.keys.length,{element:L,weaponType:k,rarity:q,sortType:Ne,ascending:ze}=B,Re=t.chars.keys.filter(St({element:L,weaponType:k,rarity:q,name:c},Lt(t,u))).sort(It(Ie[Ne]??[],ze,Ot(t,u),["new","favorite"]));return N&&{charKeys:Re,totalCharNum:S}},[t,B,c,u,N]),{weaponType:X,element:G,rarity:y,sortType:A,ascending:Y}=m,je=s.useMemo(()=>ee(Et,g=>Object.entries(t.chars.data).forEach(([S,L])=>{const k=t.weapons.get(L.equippedWeapon);if(!k)return;const q=Wt(k.key).weaponType;g[q].total++,T.includes(S)&&g[q].current++})),[t,T]),$e=s.useMemo(()=>ee(Nt,g=>Object.entries(t.chars.data).forEach(([S,L])=>{const k=Bt(L.key);g[k].total++,T.includes(S)&&g[k].current++})),[t,T]),Le=s.useMemo(()=>ee(zt,g=>Object.entries(t.chars.data).forEach(([S,L])=>{const k=ae(L.key).rarity;g[k].total++,T.includes(S)&&g[k].current++})),[t,T]),{numShow:oe,setTriggerElement:Oe}=kt(ka[f],T.length),Z=s.useMemo(()=>T.slice(0,oe),[T,oe]),We=T.length!==z?`${T.length}/${z}`:`${z}`,Ee={numShowing:Z.length,total:We,t:p,namespace:"page_character"},Be={sortKeys:[...Da],value:A,onChange:g=>t.displayCharacter.set({sortType:g}),ascending:Y,onChangeAsc:g=>t.displayCharacter.set({ascending:g})};return a(h,{display:"flex",flexDirection:"column",gap:1,children:[i&&e(Ta,{characterKey:i,onClose:()=>n("/characters")}),e(s.Suspense,{fallback:!1,children:e(Rt,{newFirst:!0,show:w,onHide:()=>I(!1),onSelect:Q})}),e(b,{children:a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(o,{container:!0,spacing:1,children:[e(o,{item:!0,children:e(Dt,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({weaponType:g}),value:X,totals:je,size:"small"})}),e(o,{item:!0,children:e(Mt,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({element:g}),value:G,totals:$e,size:"small"})}),e(o,{item:!0,children:e(At,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({rarity:g}),value:y,totals:Le,size:"small"})}),e(o,{item:!0,flexGrow:1}),e(o,{item:!0,children:e(_t,{autoFocus:!0,value:l,onChange:g=>d(g.target.value),label:p("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),e(h,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(jt,{showingTextProps:Ee,sortByButtonProps:Be})})]})}),e(M,{fullWidth:!0,onClick:()=>I(!0),color:"info",startIcon:e(J,{}),children:p`addNew`}),e(s.Suspense,{fallback:e(P,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(o,{container:!0,spacing:1,columns:Ia,children:Z.map(g=>e(o,{item:!0,xs:1,children:e($t,{characterKey:g,onClick:()=>n(`${g}`),hideStats:!0})},g))})}),T.length!==Z.length&&e(P,{ref:g=>{g&&Oe(g)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Oa as default};
