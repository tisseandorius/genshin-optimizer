import{G as I,H as T,j as w,J as e,aO as D,ab as x,T as l,a6 as u,a5 as d,a8 as c,ah as g,r as i,an as p,al as S,a3 as v}from"./index-MMjlm1sZ.js";import{u as j,a as _,b as E,C as k}from"./useInfScroll-DlQN34JV.js";var m={},z=T;Object.defineProperty(m,"__esModule",{value:!0});var C=m.default=void 0,M=z(I()),R=w,G=(0,M.default)((0,R.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");C=m.default=G;function H(a){return e(D,{placement:"top",...a,children:e(C,{sx:{cursor:"help"}})})}function q({team:a}){const{database:n}=x();return e(c,{children:l(g,{children:[e(u,{variant:"h4",children:a.name}),a.description&&e(H,{title:a.description}),e(d,{container:!0,columns:4,gap:1,children:a.loadoutData.map((t,r)=>{var o;return t!=null&&t.teamCharId?e(c,{sx:{flexGrow:1},children:e(u,{children:(o=n.teamChars.get(t.teamCharId))==null?void 0:o.key})},t.teamCharId):e(c,{sx:{flexGrow:1},children:e(u,{children:"Empty"})},r)})})]})})}const B={xs:1,sm:2,md:3,lg:3,xl:4},P={xs:5,sm:5,md:10,lg:10,xl:10};function O(){const{database:a}=x(),[n,t]=j();i.useEffect(()=>a.teams.followAny(t),[a,t]);const{teams:r}=i.useMemo(()=>{const s=a.teams.values;return n&&{teams:s}},[a.teams.values,n]),o=_(),{numShow:h,setTriggerElement:y}=E(P[o],r.length),f=i.useMemo(()=>r.slice(0,h),[r,h]);return e(i.Suspense,{fallback:e(p,{variant:"rectangular",sx:{widht:"100%",height:"100%",minHeight:300}}),children:l(c,{bgt:"dark",children:[e(k,{title:"Teams"}),l(g,{children:[e(S,{onClick:()=>a.teams.new(),children:"Create Team"}),l(v,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[e(d,{container:!0,spacing:1,columns:B,children:f.map((s,b)=>e(d,{item:!0,xs:1,children:e(q,{team:s})},b))}),r.length!==f.length&&e(p,{ref:s=>{s&&y(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})]})})}function A(){return e(v,{children:e(O,{})})}export{A as default};
