import{a_ as B,a$ as j,eS as y,ba as M,b0 as U,T as N,b7 as h,b1 as i,d as x,b2 as P,b3 as _,eT as z,eU as W,j as E,b6 as H,b8 as S}from"./index-8569168b.js";function w(o){return j("MuiLink",o)}const I=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),O=I,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},q=o=>C[o]||o,G=({theme:o,ownerState:e})=>{const n=q(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:M(s,.4)},J=G,K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return S(t,w,e)},X=U(N,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>i({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&i({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.focusVisible}`]:{outline:"auto"}})),Y=x.forwardRef(function(e,n){const s=P({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:g,underline:k="always",variant:p="inherit",sx:l}=s,L=_(s,K),{isFocusVisibleRef:b,onBlur:V,onFocus:v,ref:F}=z(),[R,f]=x.useState(!1),T=W(n,F),$=a=>{V(a),b.current===!1&&f(!1),u&&u(a)},D=a=>{v(a),b.current===!0&&f(!0),d&&d(a)},m=i({},s,{color:t,component:c,focusVisible:R,underline:k,variant:p}),A=Q(m);return E.jsx(X,i({color:t,className:H(A.root,r),classes:g,component:c,onBlur:$,onFocus:D,ref:T,ownerState:m,variant:p,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),ee=Y;export{ee as L};
