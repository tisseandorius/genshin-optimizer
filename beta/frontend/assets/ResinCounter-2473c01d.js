import{r as M,i as _,j as y,b as k,e as m,J as i,af as E,n as r,N as c,p as t,I as S,T as p,D as w,ah as j,B as s,C as N,t as A,ag as B}from"./index-73e37986.js";import{i as T,B as L}from"./index-820ff458.js";var x={},z=_;Object.defineProperty(x,"__esModule",{value:!0});var F=x.default=void 0,q=z(M()),G=y,P=(0,q.default)((0,G.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"}),"AccessTimeFilled");F=x.default=P;const u=8*B;function H(){const d=k(),[{resin:e,resinDate:o},b]=m.useState(()=>d.displayTool.get());m.useEffect(()=>d.displayTool.follow((a,f)=>b(f)),[d]);const l=m.useRef(void 0),n=a=>{a>=i?(l.current&&clearTimeout(l.current),l.current=void 0):l.current=setTimeout(()=>console.log("set resin",a+1),u),d.displayTool.set({resin:a,resinDate:new Date().getTime()})};m.useEffect(()=>{if(e<i){const a=Date.now(),f=i-e,D=Math.min(Math.floor((a-o)/u),f),g=e+D,C=o+D*u;d.displayTool.set({resin:g,resinDate:C}),g<i&&(l.current=setTimeout(()=>n(g+1),a-C))}return()=>l.current&&clearTimeout(l.current)},[]);const R=e>=i?o:o+u,I=e>=i?o:o+(i-e)*u,h=new Date(I),v=E(Math.abs(R-Date.now()));return r(A,{children:[r(c,{container:!0,sx:{px:2,py:1},spacing:2,children:[t(c,{item:!0,children:t(S,{src:T.resin.fragile,size:2})}),t(c,{item:!0,children:t(p,{variant:"h6",children:"Resin Counter"})})]}),t(w,{}),t(N,{children:r(c,{container:!0,spacing:2,children:[t(c,{item:!0,children:r(p,{variant:"h2",children:[t(S,{src:T.resin.fragile}),t(j,{type:"number",sx:{width:"2em",fontSize:"4rem"},value:e,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:a=>n(parseInt(a.target.value))}),r("span",{children:["/",i]})]})}),r(c,{item:!0,flexGrow:1,children:[r(L,{fullWidth:!0,children:[t(s,{onClick:()=>n(0),disabled:e===0,children:"0"}),t(s,{onClick:()=>n(e-1),disabled:e===0,children:"-1"}),t(s,{onClick:()=>n(e-20),disabled:e<20,children:"-20"}),t(s,{onClick:()=>n(e-40),disabled:e<40,children:"-40"}),t(s,{onClick:()=>n(e-60),disabled:e<60,children:"-60"}),t(s,{onClick:()=>n(e+1),children:"+1"}),t(s,{onClick:()=>n(e+60),children:"+60"}),r(s,{onClick:()=>n(i),disabled:e===i,children:["MAX ",i]})]}),t(p,{variant:"subtitle1",sx:{mt:2},children:e<i?r("span",{children:["Next resin in ",v,", full Resin at"," ",h.toLocaleTimeString()," ",h.toLocaleDateString()]}):r("span",{children:["Resin has been full for at least ",v,", since"," ",h.toLocaleTimeString()," ",h.toLocaleDateString()]})})]}),t(c,{item:!0,xs:12,children:t(p,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})})]})})]})}export{u as R,H as a,F as d};
