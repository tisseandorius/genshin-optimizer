import{ad as y,H as e,U as n,a4 as u,a7 as x,aO as w,al as b,a6 as g,aa as h,h as m,aP as T,aq as C,an as k}from"./index-CvdrjweK.js";import{u as v,a as D,b as I}from"./useInfScroll-DeuZ0MEF.js";import{C as S}from"./CardActionArea-B_MtbJtl.js";import{C as E}from"./CardHeader-CtfwPZTe.js";function H({teamId:s,bgTheme:i="light",onClick:o}){const{database:l}=y(),a=l.teams.get(s);return e(h,{bgt:i,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(u,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e(u,{sx:{display:"flex",flexDirection:"row"},children:e(S,{onClick:()=>o(),sx:{p:1},children:n(x,{sx:{display:"flex",gap:1,alignItems:"center"},variant:"h6",children:[e("span",{children:a.name})," ",a.description&&e(w,{title:a.description})]})})}),e(b,{children:e(g,{container:!0,columns:4,gap:1,children:a.loadoutData.map((r,c)=>{var d;return r!=null&&r.teamCharId?e(h,{sx:{flexGrow:1},children:e(x,{children:(d=l.teamChars.get(r.teamCharId))==null?void 0:d.key})},r.teamCharId):e(h,{sx:{flexGrow:1},children:e(x,{children:"Empty"})},c)})})})]})})}const A={xs:1,sm:2,md:3,lg:3,xl:4},G={xs:5,sm:5,md:10,lg:10,xl:10};function M(){const{database:s}=y(),[i,o]=v();m.useEffect(()=>s.teams.followAny(o),[s,o]);const l=T(),{teamIds:a}=m.useMemo(()=>{const t=s.teams.keys;return i&&{teamIds:t}},[s,i]),r=D(),{numShow:c,setTriggerElement:d}=I(G[r],a.length),p=m.useMemo(()=>a.slice(0,c),[a,c]);return e(m.Suspense,{fallback:e(C,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:n(h,{bgt:"dark",children:[e(E,{title:"Teams"}),n(b,{children:[e(k,{onClick:()=>s.teams.new(),children:"Create Team"}),n(u,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[e(g,{container:!0,spacing:1,columns:A,children:p.map(t=>e(g,{item:!0,xs:1,children:e(H,{teamId:t,onClick:f=>l(`${t}${f?`/${f}`:""}`)})},t))}),a.length!==p.length&&e(C,{ref:t=>{t&&d(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})]})})}function z(){return e(u,{sx:{mt:1},children:e(M,{})})}export{z as default};
