import{az as E,aA as b,aK as k,ax as D,ay as R,H as a,aa as m,U as e,a7 as t,aL as S,al as p,aM as _,ad as w,h as i,aN as H,aq as f,a4 as v,a6 as u,Q as T}from"./index-BMwZtCY2.js";import{u as M,a as A,b as I}from"./useInfScroll-CfzONpWq.js";import{C as K}from"./CardActionArea-CodocRim.js";import{C as z}from"./CardHeader-CwO6_Eea.js";function B({character:s,onClick:l}){const n=E(b("0",...k(s))),r=D(R,{src:"0",et:"self"});return a(_,{children:a(m,{children:e(p,{children:[l?a(K,{onClick:l,children:a(t,{variant:"h4",children:s.key})}):a(t,{variant:"h4",children:s.key}),a(S,{}),e(t,{children:["Eidolon: ",s.eidolon]}),e(t,{children:["Level: ",s.level]}),e(t,{children:["ATK: ",n.compute(r.final.atk).val]}),e(t,{children:["Break effect: ",n.compute(r.final.brEff_).val]}),e(t,{children:["CRIT Rate: ",n.compute(r.final.crit_).val]}),e(t,{children:["CRIT DMG: ",n.compute(r.final.crit_dmg_).val]}),e(t,{children:["DEF: ",n.compute(r.final.def).val]}),e(t,{children:["Effect Hit Rate: ",n.compute(r.final.eff_).val]}),e(t,{children:["Effect RES: ",n.compute(r.final.eff_res_).val]}),e(t,{children:["Energy Regeneration Rate:"," ",n.compute(r.final.enerRegen_).val]}),e(t,{children:["Heal Boost: ",n.compute(r.final.heal_).val]}),e(t,{children:["HP: ",n.compute(r.final.hp).val]}),e(t,{children:["Speed: ",n.compute(r.final.spd).val]})]})})})}const F={xs:1,sm:2,md:3,lg:3,xl:4},P={xs:5,sm:5,md:10,lg:10,xl:10};function U(){const{database:s}=w(),[l,n]=M();i.useEffect(()=>s.chars.followAny(n),[s,n]);const{characters:r}=i.useMemo(()=>{const c=s.chars.values;return l&&{characters:c}},[s.chars.values,l]),g=A(),{numShow:o,setTriggerElement:C}=I(P[g],r.length),h=i.useMemo(()=>r.slice(0,o),[r,o]),[x,d]=i.useState(void 0);return e(T,{children:[a(H,{characterKey:x,onClose:()=>d(void 0)}),a(i.Suspense,{fallback:a(f,{variant:"rectangular",sx:{widht:"100%",height:"100%",minHeight:300}}),children:e(m,{bgt:"dark",children:[a(z,{title:"Characters"}),a(p,{children:e(v,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[a(u,{container:!0,spacing:1,columns:F,children:h.map((c,y)=>a(u,{item:!0,xs:1,children:a(B,{character:c,onClick:()=>d(c.key)})},y))}),r.length!==h.length&&a(f,{ref:c=>{c&&C(c)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})})]})})]})}function q(){return a(v,{my:1,children:a(U,{})})}export{q as default};