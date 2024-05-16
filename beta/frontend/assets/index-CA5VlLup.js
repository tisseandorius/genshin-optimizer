import{u as R,b as j,d as t,aR as G,aS as ie,q as e,p as l,V as h,T as L,Y as k,B as T,a6 as ce,W as B,ag as z,D as H,aT as V,aU as re,aV as pe,aW as de,aX as ue,aa as Y,ab as Q,v as A,aY as he,aZ as me,a_ as fe,a$ as ge,s as Z,w as J,b0 as ye,k as O,h as we,b1 as We,a9 as ke,a8 as U,b2 as be,ad as xe,X as Te,am as Se,b3 as Ce,ap as ve,aq as qe,ar as Ie,b4 as De,av as Ee,as as Ke,b5 as _e,b6 as ee,b7 as $e,b8 as Be,b9 as Fe,ba as Me,a3 as X}from"./index-iBtt9uqA.js";const ne=["locked","unlocked"],Ne=ye([...ne]);function ze({numShowing:u,total:n,weaponIds:c}){const{t:p}=R(["page_weapon","ui"]),a=j(),[y,q]=t.useState(a.displayWeapon.get());t.useEffect(()=>{a.displayWeapon.follow((s,r)=>q(r))},[a]);const{weaponType:I,rarity:K,locked:d,showEquipped:i,showInventory:S,locations:D}=y,w=t.useMemo(()=>G(we,s=>a.weapons.entries.forEach(([r,b])=>{const f=O(b.key).weaponType;s[f].total++,c.includes(r)&&s[f].current++})),[a,c]),W=t.useMemo(()=>G(We,s=>a.weapons.entries.forEach(([r,b])=>{const f=O(b.key).rarity;s[f].total++,c.includes(r)&&s[f].current++})),[a,c]),{lockedTotal:E,equippedTotal:C,locationTotal:_}=t.useMemo(()=>{const s={lockedTotal:["locked","unlocked"],equippedTotal:["equipped","unequipped"],locationTotal:[...be,""]};return ie(s,r=>a.weapons.entries.forEach(([b,f])=>{const v=f.location,m=f.lock?"locked":"unlocked",x=v?"equipped":"unequipped";r.lockedTotal[m].total++,r.equippedTotal[x].total++,r.locationTotal[v].total++,c.includes(b)&&(r.lockedTotal[m].current++,r.equippedTotal[x].current++,r.locationTotal[v].current++)}))},[a,c]);return e(J,{children:l(Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(h,{container:!0,children:[e(h,{item:!0,children:e(L,{variant:"h6",children:e(k,{t:p,i18nKey:"weaponFilter",children:"Weapon Filter"})})}),e(h,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:l(L,{children:[e("strong",{children:u})," / ",n]})}),e(h,{item:!0,children:e(T,{size:"small",color:"error",onClick:()=>a.displayWeapon.set({action:"reset"}),startIcon:e(ce,{}),children:e(k,{t:p,i18nKey:"ui:reset"})})})]}),e(B,{children:l(h,{container:!0,spacing:1,children:[l(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",children:[e(k,{t:p,i18nKey:"subheadings.general"}),l(z,{spacing:1,children:[e(H,{sx:{bgcolor:V.palette.contentNormal.light}}),e(re,{fullWidth:!0,onChange:s=>a.displayWeapon.set({weaponType:s}),value:I,totals:w,size:"small"}),e(pe,{sx:{height:"100%"},fullWidth:!0,onChange:s=>a.displayWeapon.set({rarity:s}),value:K,totals:W,size:"small"})]})]}),e(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:l(B,{children:[e(k,{t:p,i18nKey:"subheadings.inventory"}),l(z,{spacing:1,children:[e(H,{sx:{bgcolor:V.palette.contentNormal.light}}),e(de,{fullWidth:!0,value:d,size:"small",children:ne.map((s,r)=>l(ue,{value:s,sx:{display:"flex",gap:1},onClick:()=>a.displayWeapon.set({locked:Ne(d,s)}),children:[r?e(Y,{}):e(Q,{}),e(k,{t:p,i18nKey:`ui:${s}`}),e(A,{label:E[r?"unlocked":"locked"],size:"small"})]},s))}),l(T,{startIcon:e(he,{}),color:S?"success":"secondary",onClick:()=>a.displayWeapon.set({showInventory:!S}),children:[p`weaponInInv`," ",e(A,{sx:{ml:1},label:C.unequipped,size:"small"})]}),l(T,{startIcon:e(me,{}),color:i?"success":"secondary",onClick:()=>a.displayWeapon.set({showEquipped:!i}),children:[p`equippedWeapon`," ",e(A,{sx:{ml:1},label:C.equipped,size:"small"})]})]}),e(z,{spacing:1.5,pt:1.5,children:e(t.Suspense,{fallback:null,children:e(fe,{title:i?p`locationsTooltip`:"",placement:"top",children:e("span",{children:e(ge,{totals:_,locations:i?[]:D,setLocations:s=>a.displayWeapon.set({locations:s}),disabled:i})})})})})]})})]})})]})})}function Ae({weaponIds:u}){const{t:n}=R(["page_weapon","ui"]),c=j(),{numDelete:p,numUnlock:a,numLock:y}=t.useMemo(()=>{const d=u.map(w=>c.weapons.get(w)),i=d.reduce((w,W)=>w+(W.lock?0:1),0),S=d.length-i;return{numDelete:d.reduce((w,W)=>w+(W.lock||W.location?0:1),0),numUnlock:i,numLock:S}},[u,c]);return l(h,{container:!0,spacing:1,alignItems:"center",children:[e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!p,onClick:()=>window.confirm(`Are you sure you want to delete ${p} weapons?`)&&u.map(d=>{const i=c.weapons.get(d);!(i!=null&&i.lock)&&!(i!=null&&i.location)&&c.weapons.remove(d)}),startIcon:e(ke,{}),children:[e(k,{t:n,i18nKey:"button.deleteWeapons",children:"Delete Weapons"}),e(U,{sx:{ml:1},color:p?"success":"secondary",children:p})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!y,onClick:()=>window.confirm(`Are you sure you want to unlock ${y} weapons ?`)&&u.map(d=>c.weapons.set(d,{lock:!1})),startIcon:e(Y,{}),children:[e(k,{t:n,i18nKey:"button.unlockWeapons",children:"Unlock Weapons"}),e(U,{sx:{ml:1},color:y?"success":"secondary",children:y})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!a,onClick:()=>window.confirm(`Are you sure you want to lock ${a} weapons ?`)&&u.map(d=>c.weapons.set(d,{lock:!0})),startIcon:e(Q,{}),children:[e(k,{t:n,i18nKey:"button.lockWeapons",children:"Lock Weapons"}),e(U,{sx:{ml:1},color:a?"success":"secondary",children:a})]})}),e(h,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:e(L,{variant:"caption",color:"text.secondary",children:l(k,{t:n,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",e("b",{children:"currently filtered weapons"})]})})})]})}const Ue={xs:1,sm:2,md:3,lg:3,xl:4},Le={xs:10,sm:12,md:24,lg:24,xl:24},Re=Object.keys(ee);function Pe(){const{t:u}=R(["page_weapon","ui","weaponNames_gen"]),n=j(),[c,p]=t.useState(n.displayWeapon.get());t.useEffect(()=>n.displayWeapon.follow((o,g)=>p(g)),[n]);const[a,y]=t.useState(!1),[q,I]=xe();t.useEffect(()=>(Te.send({hitType:"pageview",page:"/weapon"}),n.weapons.followAny((o,g)=>(g==="new"||g==="remove"||g==="update")&&I())),[I,n]);const K=Se(),d=t.useCallback(async o=>{const g=n.weapons.get(o);if(!g)return;const N=u(`weaponNames_gen:${g.key}`);window.confirm(u("removeWeapon",{value:N}))&&(n.weapons.remove(o),c.editWeaponId===o&&n.displayWeapon.set({editWeaponId:""}))},[c.editWeaponId,n,u]),i=t.useCallback(o=>{n.displayWeapon.set({editWeaponId:o})},[n]),S=t.useCallback(o=>{i(n.weapons.new(Ce(o)))},[n,i]),[D,w]=t.useState(""),W=t.useDeferredValue(D),{sortType:E,ascending:C,weaponType:_,rarity:s,locked:r,showEquipped:b,showInventory:f,locations:v}=c,{weaponIds:m,totalWeaponNum:x}=t.useMemo(()=>{const o=n.weapons.values,g=o.length,N=o.filter(ve({weaponType:_,rarity:s,name:W,locked:r,showInventory:f,showEquipped:b,locations:v},$e())).sort(qe(ee[E]??[],C,Be())).map(le=>le.id);return q&&{weaponIds:N,totalWeaponNum:g}},[q,n,E,C,s,_,r,f,b,v,W]),{numShow:P,setTriggerElement:oe}=Ie(Le[K],m.length),F=t.useMemo(()=>m.slice(0,P),[m,P]),ae=m.length!==x?`${m.length}/${x}`:`${x}`,M=t.useCallback(()=>n.displayWeapon.set({editWeaponId:""}),[n]),{editWeaponId:$}=c;t.useEffect(()=>{$&&(n.weapons.get($)||M())},[n,$,M]);const te={numShowing:F.length,total:ae,t:u,namespace:"page_weapon"},se={sortKeys:[...Re],value:E,onChange:o=>n.displayWeapon.set({sortType:o}),ascending:C,onChangeAsc:o=>n.displayWeapon.set({ascending:o})};return l(B,{display:"flex",flexDirection:"column",gap:1,children:[e(t.Suspense,{fallback:!1,children:e(Fe,{show:a,onHide:()=>y(!1),onSelect:S})}),e(t.Suspense,{fallback:!1,children:e(Me,{weaponId:$,footer:!0,onClose:M})}),e(ze,{numShowing:m.length,total:x,weaponIds:m}),e(J,{children:l(Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(B,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[e(De,{autoFocus:!0,size:"small",value:D,onChange:o=>w(o.target.value),label:u("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}}),e(Ee,{showingTextProps:te,sortByButtonProps:se})]}),e(Ae,{weaponIds:m})]})}),l(t.Suspense,{fallback:e(X,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[e(T,{fullWidth:!0,onClick:()=>y(!0),color:"info",startIcon:e(Ke,{}),children:u("page_weapon:addWeapon")}),e(h,{container:!0,spacing:1,columns:Ue,children:F.map(o=>e(h,{item:!0,xs:1,children:e(_e,{weaponId:o,onDelete:d,onEdit:i,canEquip:!0})},o))})]}),m.length!==F.length&&e(X,{ref:o=>{o&&oe(o)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Pe as default};
