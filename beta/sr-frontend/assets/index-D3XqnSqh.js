import{ax as v,ay as x,aJ as C,av as b,aw as y,J as n,a8 as m,T as e,a6 as r,ah as f,aK as E,ab as R,r as s,an as h,a3 as u,a5 as d}from"./index-Bx8kqFRK.js";import{a as _,b as S,C as T}from"./useInfScroll-DIV7nTy2.js";function k({character:l}){const a=v(x("member0",...C(l))),t=b(y,{member:"member0",et:"self"});return n(E,{children:n(m,{children:e(f,{children:[e(r,{children:["Key: ",l.key," "]}),e(r,{children:["Eidolon: ",l.eidolon," "]}),e(r,{children:["Level: ",l.level," "]}),e(r,{children:["ATK: ",a.compute(t.final.atk).val," "]}),e(r,{children:["Break effect: ",a.compute(t.final.brEff_).val]}),e(r,{children:["CRIT Rate: ",a.compute(t.final.crit_).val]}),e(r,{children:["CRIT DMG: ",a.compute(t.final.crit_dmg_).val]}),e(r,{children:["DEF: ",a.compute(t.final.def).val]}),e(r,{children:["Effect Hit Rate: ",a.compute(t.final.eff_).val]}),e(r,{children:["Effect RES: ",a.compute(t.final.eff_res_).val]}),e(r,{children:["Energy Regeneration Rate:"," ",a.compute(t.final.enerRegen_).val]}),e(r,{children:["Heal Boost: ",a.compute(t.final.heal_).val]}),e(r,{children:["HP: ",a.compute(t.final.hp).val]}),e(r,{children:["Speed: ",a.compute(t.final.spd).val]})]})})})}const w={xs:1,sm:2,md:3,lg:3,xl:4},D={xs:5,sm:5,md:10,lg:10,xl:10};function H(){const{database:l}=R(),{characters:a}=s.useMemo(()=>({characters:l.chars.values}),[l]),t=_(),{numShow:i,setTriggerElement:p}=S(D[t],a.length),o=s.useMemo(()=>a.slice(0,i),[a,i]);return n(s.Suspense,{fallback:n(h,{variant:"rectangular",sx:{widht:"100%",height:"100%",minHeight:300}}),children:e(m,{bgt:"dark",children:[n(T,{title:"Characters"}),n(f,{children:e(u,{sx:{overflow:"auto"},my:1,display:"flex",flexDirection:"column",gap:1,children:[n(d,{container:!0,spacing:1,columns:w,children:o.map((c,g)=>n(d,{item:!0,xs:1,children:n(k,{character:c})},g))}),a.length!==o.length&&n(h,{ref:c=>{c&&p(c)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})})]})})}function B(){return n(u,{my:1,children:n(H,{})})}export{B as default};
