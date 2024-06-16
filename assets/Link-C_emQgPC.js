import{bs as A,br as j,fx as y,bB as z,bt as M,T as N,bz as h,bu as a,r as x,bv as P,bw as U,fy as W,fz as _,j as E,bx as H,by as w}from"./index-BYDn33qZ.js";function I(o){return j("MuiLink",o)}const O=A("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),q=O,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},G=o=>C[o]||o,J=({theme:o,ownerState:e})=>{const n=G(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:z(s,.4)},K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return w(t,I,e)},S=M(N,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.focusVisible}`]:{outline:"auto"}})),X=x.forwardRef(function(e,n){const s=P({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:k,underline:g="always",variant:p="inherit",sx:l}=s,L=U(s,K),{isFocusVisibleRef:b,onBlur:V,onFocus:v,ref:F}=W(),[R,f]=x.useState(!1),D=_(n,F),T=i=>{V(i),b.current===!1&&f(!1),u&&u(i)},$=i=>{v(i),b.current===!0&&f(!0),d&&d(i)},m=a({},s,{color:t,component:c,focusVisible:R,underline:g,variant:p}),B=Q(m);return E.jsx(S,a({color:t,className:H(B.root,r),classes:k,component:c,onBlur:T,onFocus:$,ref:D,ownerState:m,variant:p,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),Z=X;export{Z as L};
