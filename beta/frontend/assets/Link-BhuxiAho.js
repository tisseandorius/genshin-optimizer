import{bc as A,bb as B,fa as y,bl as M,bd as N,T as P,bj as x,be as a,d as h,bf as U,bg as z,fb as W,fc as _,j as E,bh as H,bi as I}from"./index-5MdJuF9c.js";function O(o){return B("MuiLink",o)}const q=A("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=q,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},G=o=>C[o]||o,J=({theme:o,ownerState:e})=>{const n=G(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:M(s,.4)},K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${x(r)}`,n==="button"&&"button",s&&"focusVisible"]};return I(t,O,e)},S=N(P,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${x(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${w.focusVisible}`]:{outline:"auto"}})),X=h.forwardRef(function(e,n){const s=U({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:g,underline:k="always",variant:p="inherit",sx:l}=s,L=z(s,K),{isFocusVisibleRef:b,onBlur:V,onFocus:F,ref:R}=W(),[v,f]=h.useState(!1),D=_(n,R),T=i=>{V(i),b.current===!1&&f(!1),u&&u(i)},$=i=>{F(i),b.current===!0&&f(!0),d&&d(i)},m=a({},s,{color:t,component:c,focusVisible:v,underline:k,variant:p}),j=Q(m);return E.jsx(S,a({color:t,className:H(j.root,r),classes:g,component:c,onBlur:T,onFocus:$,ref:D,ownerState:m,variant:p,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),Z=X;export{Z as L};