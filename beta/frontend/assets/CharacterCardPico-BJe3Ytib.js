import{x as O,fz as B,ae as g,b as a,fA as W,f as l,i as $,fB as A,bM as E,r as h,b0 as I,C as j,h as x,d,bS as w,bT as z,T as m,ap as y,fe as D,fC as F,fD as N,f1 as H,B as k,Y as L}from"./index-B-Ak536C.js";function J(e){const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,(o,s,i,n)=>s+s+i+i+n+n);const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}function Q(e,t){if(e)return`rgba(${e.r},${e.g},${e.b},${t})`}var T={exports:{}},q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",U=q,Y=U;function b(){}function C(){}C.resetWarningCache=b;var M=function(){function e(o,s,i,n,f,c){if(c!==Y){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:C,resetWarningCache:b};return r.PropTypes=r,r};T.exports=M();var V=T.exports;const X=O(V);function Z({dataAdSlot:e,bgt:t="normal",maxHeight:r=350}){const{width:o,height:s,ref:i}=B(),[n,f,c]=g(!0);return n?a(l,{ref:i,sx:{height:"100%",width:"100%",maxHeight:r},children:o&&a(W,{bgt:t,onClose:p=>{p.stopPropagation(),c()},dataAdSlot:e,sx:{width:o,height:Math.max(s,r)}})}):null}function K({characterKey:e,onClick:t,onMouseDown:r,onMouseEnter:o,hoverChild:s,hideFav:i}){const n=$(e),{favorite:f}=A(e),{gender:c}=E(),{silly:p}=h.useContext(I),u=h.useCallback(()=>t==null?void 0:t(e),[e,t]),S=h.useCallback(_=>a(j,{onClick:u,onMouseDown:r,onMouseEnter:o,children:_}),[u,r,o]),[v,P,R]=g();return a(k,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!s&&v,onClose:R,onOpen:P,title:s,children:a(x,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:d(H,{condition:!!t||!!r||!!o,wrapper:S,children:[a(l,{display:"flex",className:`grad-${w(e).rarity}star`,children:a(l,{component:"img",src:z(e,c,p),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),n&&a(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:a("strong",{children:d(y,{color:"primary",children:[n.level,"/",D[n.ascension]]})})}),!i&&a(l,{sx:{position:"absolute",top:0,right:0},children:f?a(F,{fontSize:"small"}):a(N,{fontSize:"small"})}),n&&a(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:a("strong",{children:d(y,{color:"secondary",children:["C",n.constellation]})})})]})})})}function ee({index:e}){return a(x,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:a(l,{component:"img",src:L.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{Z as A,ee as B,K as C,X as P,Q as c,J as h};