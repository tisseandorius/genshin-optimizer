import{y as U,a as P,r as a,b2 as G,b3 as ie,b as e,d as l,G as h,T as L,a9 as k,ac as T,aj as ce,f as F,at as z,M as H,b4 as O,b5 as re,b6 as de,b7 as pe,b8 as ue,an as J,ao as X,P as j,b9 as he,ba as me,B as fe,bb as ye,N as Y,h as Z,bc as ge,H as V,F as we,bd as We,am as ke,al as A,be,aq as xe,a8 as Te,az as Se,bf as Ce,aC as ve,aD as Ie,aE as qe,bg as Ee,aI as De,aF as Ke,bh as _e,bi as ee,bj as $e,bk as Fe,bl as Be,bm as Me,S as Q}from"./index-DK9-ckl8.js";const ne=["locked","unlocked"],Ne=ge([...ne]);function ze({numShowing:u,total:n,weaponIds:c}){const{t:d}=U(["page_weapon","ui"]),t=P(),[g,I]=a.useState(t.displayWeapon.get());a.useEffect(()=>{t.displayWeapon.follow((s,r)=>I(r))},[t]);const{weaponType:q,rarity:K,locked:p,showEquipped:i,showInventory:S,locations:E}=g,w=a.useMemo(()=>G(we,s=>t.weapons.entries.forEach(([r,b])=>{const f=V(b.key).weaponType;s[f].total++,c.includes(r)&&s[f].current++})),[t,c]),W=a.useMemo(()=>G(We,s=>t.weapons.entries.forEach(([r,b])=>{const f=V(b.key).rarity;s[f].total++,c.includes(r)&&s[f].current++})),[t,c]),{lockedTotal:D,equippedTotal:C,locationTotal:_}=a.useMemo(()=>{const s={lockedTotal:["locked","unlocked"],equippedTotal:["equipped","unequipped"],locationTotal:[...be,""]};return ie(s,r=>t.weapons.entries.forEach(([b,f])=>{const v=f.location,m=f.lock?"locked":"unlocked",x=v?"equipped":"unequipped";r.lockedTotal[m].total++,r.equippedTotal[x].total++,r.locationTotal[v].total++,c.includes(b)&&(r.lockedTotal[m].current++,r.equippedTotal[x].current++,r.locationTotal[v].current++)}))},[t,c]);return e(Z,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(h,{container:!0,children:[e(h,{item:!0,children:e(L,{variant:"h6",children:e(k,{t:d,i18nKey:"weaponFilter",children:"Weapon Filter"})})}),e(h,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:l(L,{children:[e("strong",{children:u})," / ",n]})}),e(h,{item:!0,children:e(T,{size:"small",color:"error",onClick:()=>t.displayWeapon.set({action:"reset"}),startIcon:e(ce,{}),children:e(k,{t:d,i18nKey:"ui:reset"})})})]}),e(F,{children:l(h,{container:!0,spacing:1,children:[l(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",children:[e(k,{t:d,i18nKey:"subheadings.general"}),l(z,{spacing:1,children:[e(H,{sx:{bgcolor:O.palette.contentNormal.light}}),e(re,{fullWidth:!0,onChange:s=>t.displayWeapon.set({weaponType:s}),value:q,totals:w,size:"small"}),e(de,{sx:{height:"100%"},fullWidth:!0,onChange:s=>t.displayWeapon.set({rarity:s}),value:K,totals:W,size:"small"})]})]}),e(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:l(F,{children:[e(k,{t:d,i18nKey:"subheadings.inventory"}),l(z,{spacing:1,children:[e(H,{sx:{bgcolor:O.palette.contentNormal.light}}),e(pe,{fullWidth:!0,value:p,size:"small",children:ne.map((s,r)=>l(ue,{value:s,sx:{display:"flex",gap:1},onClick:()=>t.displayWeapon.set({locked:Ne(p,s)}),children:[r?e(J,{}):e(X,{}),e(k,{t:d,i18nKey:`ui:${s}`}),e(j,{label:D[r?"unlocked":"locked"],size:"small"})]},s))}),l(T,{startIcon:e(he,{}),color:S?"success":"secondary",onClick:()=>t.displayWeapon.set({showInventory:!S}),children:[d`weaponInInv`," ",e(j,{sx:{ml:1},label:C.unequipped,size:"small"})]}),l(T,{startIcon:e(me,{}),color:i?"success":"secondary",onClick:()=>t.displayWeapon.set({showEquipped:!i}),children:[d`equippedWeapon`," ",e(j,{sx:{ml:1},label:C.equipped,size:"small"})]})]}),e(z,{spacing:1.5,pt:1.5,children:e(a.Suspense,{fallback:null,children:e(fe,{title:i?d`locationsTooltip`:"",placement:"top",children:e("span",{children:e(ye,{totals:_,locations:i?[]:E,setLocations:s=>t.displayWeapon.set({locations:s}),disabled:i})})})})})]})})]})})]})})}function je({weaponIds:u}){const{t:n}=U(["page_weapon","ui"]),c=P(),{numDelete:d,numUnlock:t,numLock:g}=a.useMemo(()=>{const p=u.map(w=>c.weapons.get(w)),i=p.reduce((w,W)=>w+(W.lock?0:1),0),S=p.length-i;return{numDelete:p.reduce((w,W)=>w+(W.lock||W.location?0:1),0),numUnlock:i,numLock:S}},[u,c]);return l(h,{container:!0,spacing:1,alignItems:"center",children:[e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!d,onClick:()=>window.confirm(`Are you sure you want to delete ${d} weapons?`)&&u.map(p=>{const i=c.weapons.get(p);!(i!=null&&i.lock)&&!(i!=null&&i.location)&&c.weapons.remove(p)}),startIcon:e(ke,{}),children:[e(k,{t:n,i18nKey:"button.deleteWeapons",children:"Delete Weapons"}),e(A,{sx:{ml:1},color:d?"success":"secondary",children:d})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!g,onClick:()=>window.confirm(`Are you sure you want to unlock ${g} weapons ?`)&&u.map(p=>c.weapons.set(p,{lock:!1})),startIcon:e(J,{}),children:[e(k,{t:n,i18nKey:"button.unlockWeapons",children:"Unlock Weapons"}),e(A,{sx:{ml:1},color:g?"success":"secondary",children:g})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!t,onClick:()=>window.confirm(`Are you sure you want to lock ${t} weapons ?`)&&u.map(p=>c.weapons.set(p,{lock:!0})),startIcon:e(X,{}),children:[e(k,{t:n,i18nKey:"button.lockWeapons",children:"Lock Weapons"}),e(A,{sx:{ml:1},color:t?"success":"secondary",children:t})]})}),e(h,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:e(L,{variant:"caption",color:"text.secondary",children:l(k,{t:n,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",e("b",{children:"currently filtered weapons"})]})})})]})}const Ae={xs:1,sm:2,md:3,lg:3,xl:4},Le={xs:10,sm:12,md:24,lg:24,xl:24},Ue=Object.keys(ee);function Re(){const{t:u}=U(["page_weapon","ui","weaponNames_gen"]),n=P(),[c,d]=a.useState(n.displayWeapon.get());a.useEffect(()=>n.displayWeapon.follow((o,y)=>d(y)),[n]);const[t,g]=a.useState(!1),[I,q]=xe();a.useEffect(()=>(Te.send({hitType:"pageview",page:"/weapon"}),n.weapons.followAny((o,y)=>(y==="new"||y==="remove"||y==="update")&&q())),[q,n]);const K=Se(),p=a.useCallback(async o=>{const y=n.weapons.get(o);if(!y)return;const N=u(`weaponNames_gen:${y.key}`);window.confirm(u("removeWeapon",{value:N}))&&(n.weapons.remove(o),c.editWeaponId===o&&n.displayWeapon.set({editWeaponId:""}))},[c.editWeaponId,n,u]),i=a.useCallback(o=>{n.displayWeapon.set({editWeaponId:o})},[n]),S=a.useCallback(o=>{i(n.weapons.new(Ce(o)))},[n,i]),[E,w]=a.useState(""),W=a.useDeferredValue(E),{sortType:D,ascending:C,weaponType:_,rarity:s,locked:r,showEquipped:b,showInventory:f,locations:v}=c,{weaponIds:m,totalWeaponNum:x}=a.useMemo(()=>{const o=n.weapons.values,y=o.length,N=o.filter(ve({weaponType:_,rarity:s,name:W,locked:r,showInventory:f,showEquipped:b,locations:v},$e())).sort(Ie(ee[D]??[],C,Fe())).map(le=>le.id);return I&&{weaponIds:N,totalWeaponNum:y}},[I,n,D,C,s,_,r,f,b,v,W]),{numShow:R,setTriggerElement:oe}=qe(Le[K],m.length),B=a.useMemo(()=>m.slice(0,R),[m,R]),te=m.length!==x?`${m.length}/${x}`:`${x}`,M=a.useCallback(()=>n.displayWeapon.set({editWeaponId:""}),[n]),{editWeaponId:$}=c;a.useEffect(()=>{$&&(n.weapons.get($)||M())},[n,$,M]);const ae={numShowing:B.length,total:te,t:u,namespace:"page_weapon"},se={sortKeys:[...Ue],value:D,onChange:o=>n.displayWeapon.set({sortType:o}),ascending:C,onChangeAsc:o=>n.displayWeapon.set({ascending:o})};return l(F,{display:"flex",flexDirection:"column",gap:1,children:[e(a.Suspense,{fallback:!1,children:e(Be,{show:t,onHide:()=>g(!1),onSelect:S})}),e(a.Suspense,{fallback:!1,children:e(Me,{weaponId:$,footer:!0,onClose:M})}),e(ze,{numShowing:m.length,total:x,weaponIds:m}),e(Z,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(F,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[e(Ee,{autoFocus:!0,size:"small",value:E,onChange:o=>w(o.target.value),label:u("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}}),e(De,{showingTextProps:ae,sortByButtonProps:se})]}),e(je,{weaponIds:m})]})}),l(a.Suspense,{fallback:e(Q,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[e(T,{fullWidth:!0,onClick:()=>g(!0),color:"info",startIcon:e(Ke,{}),children:u("page_weapon:addWeapon")}),e(h,{container:!0,spacing:1,columns:Ae,children:B.map(o=>e(h,{item:!0,xs:1,children:e(_e,{weaponId:o,onDelete:p,onEdit:i,canEquip:!0})},o))})]}),m.length!==B.length&&e(Q,{ref:o=>{o&&oe(o)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Re as default};
