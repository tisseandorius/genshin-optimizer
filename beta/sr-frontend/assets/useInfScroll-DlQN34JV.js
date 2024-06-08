import{g as T,a as j,s as b,_ as h,r as o,u as M,e as N,a6 as y,j as l,f as P,h as k,x as w,aP as g}from"./index-MMjlm1sZ.js";function E(e){return j("MuiCardHeader",e)}const U=T("MuiCardHeader",["root","avatar","action","content","title","subheader"]),H=U,I=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],A=e=>{const{classes:t}=e;return k({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},E,t)},O=b("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>h({[`& .${H.title}`]:t.title,[`& .${H.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),_=b("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),$=b("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Q=b("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),B=o.forwardRef(function(t,r){const s=M({props:t,name:"MuiCardHeader"}),{action:a,avatar:n,className:v,component:d="div",disableTypography:i=!1,subheader:m,subheaderTypographyProps:C,title:x,titleTypographyProps:S}=s,R=N(s,I),u=h({},s,{component:d,disableTypography:i}),c=A(u);let p=x;p!=null&&p.type!==y&&!i&&(p=l.jsx(y,h({variant:n?"body2":"h5",className:c.title,component:"span",display:"block"},S,{children:p})));let f=m;return f!=null&&f.type!==y&&!i&&(f=l.jsx(y,h({variant:n?"body2":"body1",className:c.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:f}))),l.jsxs(O,h({className:P(c.root,v),as:d,ref:r,ownerState:u},R,{children:[n&&l.jsx(_,{className:c.avatar,ownerState:u,children:n}),l.jsxs(Q,{className:c.content,ownerState:u,children:[p,f]}),a&&l.jsx($,{className:c.action,ownerState:u,children:a})]}))}),W=B;function D(){const[e,t]=o.useState({}),r=o.useCallback(()=>t({}),[]);return[e,r]}function q(){const e=w(),t=g(e.breakpoints.up("sm")),r=g(e.breakpoints.up("md")),s=g(e.breakpoints.up("lg"));return g(e.breakpoints.up("xl"))?"xl":s?"lg":r?"md":t?"sm":"xs"}function F(e){const[t,r]=o.useState(!1),s=o.useRef(null);return!s.current&&typeof window<"u"&&(s.current=new IntersectionObserver(([a])=>r(a.isIntersecting))),o.useEffect(()=>{if(r(!1),!!s.current&&e)return s.current.observe(e),()=>{var a;(a=s.current)==null||a.disconnect()}},[e]),t}function z(e,t){const[r,s]=o.useState(e),[a,n]=o.useState(),v=F(a),[d,i]=D(),m=v&&r<t;return o.useEffect(()=>{t&&s(e)},[t,e]),o.useEffect(()=>{if(!m)return;d&&s(x=>x+e);const C=setTimeout(()=>i(),1e3);return()=>clearTimeout(C)},[d,m,e,i]),{numShow:r,setTriggerElement:n}}export{W as C,q as a,z as b,D as u};
