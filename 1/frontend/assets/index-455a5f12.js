import{u as V,b as H,e as t,a4 as L,Q,ao as q,n as d,p as o,C as J,O as u,t as X,B as Y,N as v,R as Z,a0 as D,h as ee,ap as ae,_ as E}from"./index-357935cc.js";import{u as te,f as oe,s as ne,a as se,T as re,S as le,d as pe}from"./LocationName-ae2eef67.js";import{a as k}from"./index-9148f370.js";import{W as ie,a as ce,b as de,w as R,c as ue,d as me}from"./WeaponCard-37bf0e33.js";import{c as M}from"./totalUtils-0287452c.js";import"./DropdownButton-9ff19ac8.js";import"./index-64116542.js";import"./SolidToggleButtonGroup-ca2cd21d.js";import"./useWeapon-988d2240.js";import"./LocationAutocomplete-8bc2efb4.js";import"./CardActionArea-4c8f46da.js";const we=Z.lazy(()=>D(()=>import("./WeaponSelectionModal-6ad31d22.js"),["./WeaponSelectionModal-6ad31d22.js","./index-357935cc.js","./index-4a4909fe.css","./LocationName-ae2eef67.js","./DropdownButton-9ff19ac8.js","./index-64116542.js","./index-9148f370.js","./Close-e8eac5e3.js","./totalUtils-0287452c.js","./WeaponCard-37bf0e33.js","./SolidToggleButtonGroup-ca2cd21d.js","./useWeapon-988d2240.js","./LocationAutocomplete-8bc2efb4.js","./CardActionArea-4c8f46da.js"],import.meta.url)),fe=t.lazy(()=>D(()=>import("./WeaponEditor-25915771.js").then(r=>r.e),["./WeaponEditor-25915771.js","./index-357935cc.js","./index-4a4909fe.css","./LocationName-ae2eef67.js","./DropdownButton-9ff19ac8.js","./index-64116542.js","./index-9148f370.js","./useWeapon-988d2240.js","./Close-e8eac5e3.js","./LocationAutocomplete-8bc2efb4.js","./DataContext-b252c401.js","./InfoTooltip-85a17a4c.js","./Info-81b339ed.js","./CheckBoxOutlineBlank-1081aa6a.js","./CardHeader-9bcad286.js"],import.meta.url)),he={xs:1,sm:2,md:3,lg:3,xl:4},ge={xs:10,sm:12,md:24,lg:24,xl:24},ye=Object.keys(R);function Me(){const{t:r}=V(["page_weapon","ui","weaponNames_gen"]),a=H(),[i,P]=t.useState(a.displayWeapon.get());t.useEffect(()=>a.displayWeapon.follow((e,n)=>P(n)),[a]);const[N,S]=t.useState(!1),[T,b]=L();t.useEffect(()=>(Q.send({hitType:"pageview",page:"/weapon"}),a.weapons.followAny((e,n)=>(n==="new"||n==="remove")&&b())),[b,a]);const O=te(),j=t.useCallback(async e=>{const n=a.weapons.get(e);if(!n)return;const l=r(`weaponNames_gen:${n.key}`);window.confirm(r("removeWeapon",{value:l}))&&(a.weapons.remove(e),i.editWeaponId===e&&a.displayWeapon.set({editWeaponId:""}))},[i.editWeaponId,a,r]),m=t.useCallback(e=>{a.displayWeapon.set({editWeaponId:e})},[a]),A=t.useCallback(e=>{m(a.weapons.new(q(e)))},[a,m]),[C,F]=t.useState(""),_=t.useDeferredValue(C),{sortType:w,ascending:f,weaponType:h,rarity:g}=i,{weaponIds:s,totalWeaponNum:y}=t.useMemo(()=>{const e=a.weapons.values,n=e.length,l=e.filter(oe({weaponType:h,rarity:g,name:_},ue())).sort(ne(R[w]??[],f,me())).map(p=>p.id);return T&&{weaponIds:l,totalWeaponNum:n}},[T,a,w,f,g,h,_]),{numShow:I,setTriggerElement:z}=se(ge[O],s.length),W=t.useMemo(()=>s.slice(0,I),[s,I]),B=s.length!==y?`${s.length}/${y}`:`${y}`,x=t.useCallback(()=>a.displayWeapon.set({editWeaponId:""}),[a]),{editWeaponId:c}=i;t.useEffect(()=>{c&&(a.weapons.get(c)||x())},[a,c,x]);const K=t.useMemo(()=>M(ee,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const p=k(l.key).weaponType;e[p].total++,s.includes(n)&&e[p].current++})),[a,s]),$=t.useMemo(()=>M(ae,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const p=k(l.key).rarity;e[p].total++,s.includes(n)&&e[p].current++})),[a,s]),G={numShowing:W.length,total:B,t:r,namespace:"page_weapon"},U={sortKeys:[...ye],value:w,onChange:e=>a.displayWeapon.set({sortType:e}),ascending:f,onChangeAsc:e=>a.displayWeapon.set({ascending:e})};return d(u,{my:1,display:"flex",flexDirection:"column",gap:1,children:[o(t.Suspense,{fallback:!1,children:o(we,{show:N,onHide:()=>S(!1),onSelect:A})}),o(t.Suspense,{fallback:!1,children:o(fe,{weaponId:c,footer:!0,onClose:x})}),o(X,{children:d(J,{sx:{display:"flex",flexDirection:"column",gap:1},children:[d(u,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[o(ie,{onChange:e=>a.displayWeapon.set({weaponType:e}),value:h,totals:K,size:"small"}),o(ce,{sx:{height:"100%"},onChange:e=>a.displayWeapon.set({rarity:e}),value:g,totals:$,size:"small"}),o(u,{flexGrow:1}),o(re,{autoFocus:!0,size:"small",value:C,onChange:e=>F(e.target.value),label:r("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),o(u,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:o(le,{showingTextProps:G,sortByButtonProps:U})})]})}),d(t.Suspense,{fallback:o(E,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[o(Y,{fullWidth:!0,onClick:()=>S(!0),color:"info",startIcon:o(pe,{}),children:r("page_weapon:addWeapon")}),o(v,{container:!0,spacing:1,columns:he,children:W.map(e=>o(v,{item:!0,xs:1,children:o(de,{weaponId:e,onDelete:j,onEdit:m,canEquip:!0})},e))})]}),s.length!==W.length&&o(E,{ref:e=>{e&&z(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Me as default};
