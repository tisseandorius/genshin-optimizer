import{g as R,a as j,s as c,_ as d,r as T,u as N,e as P,a9 as l,j as t,f as M,h as A}from"./index-Db0MvI9q.js";function U(a){return j("MuiCardHeader",a)}const _=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),C=_,$=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],k=a=>{const{classes:e}=a;return A({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},U,e)},w=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>d({[`& .${C.title}`]:e.title,[`& .${C.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),E=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),S=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),B=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),I=T.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:m,avatar:i,className:v,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:g,title:x,titleTypographyProps:H}=p,f=P(p,$),r=d({},p,{component:y,disableTypography:u}),s=k(r);let o=x;o!=null&&o.type!==l&&!u&&(o=t.jsx(l,d({variant:i?"body2":"h5",className:s.title,component:"span",display:"block"},H,{children:o})));let n=b;return n!=null&&n.type!==l&&!u&&(n=t.jsx(l,d({variant:i?"body2":"body1",className:s.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:n}))),t.jsxs(w,d({className:M(s.root,v),as:y,ref:h,ownerState:r},f,{children:[i&&t.jsx(E,{className:s.avatar,ownerState:r,children:i}),t.jsxs(B,{className:s.content,ownerState:r,children:[o,n]}),m&&t.jsx(S,{className:s.action,ownerState:r,children:m})]}))}),W=I;export{W as C};
