import{h as n,ah as S,ai as o}from"./index-BMwZtCY2.js";function g(){const[e,r]=n.useState({}),s=n.useCallback(()=>r({}),[]);return[e,s]}function h(){const e=S(),r=o(e.breakpoints.up("sm")),s=o(e.breakpoints.up("md")),t=o(e.breakpoints.up("lg"));return o(e.breakpoints.up("xl"))?"xl":t?"lg":s?"md":r?"sm":"xs"}function b(e){const[r,s]=n.useState(!1),t=n.useRef(null);return!t.current&&typeof window<"u"&&(t.current=new IntersectionObserver(([u])=>s(u.isIntersecting))),n.useEffect(()=>{if(s(!1),!!t.current&&e)return t.current.observe(e),()=>{var u;(u=t.current)==null||u.disconnect()}},[e]),r}function k(e,r){const[s,t]=n.useState(e),[u,f]=n.useState(),l=b(u),[c,i]=g(),a=l&&s<r;return n.useEffect(()=>{r&&t(e)},[r,e]),n.useEffect(()=>{if(!a)return;c&&t(d=>d+e);const p=setTimeout(()=>i(),1e3);return()=>clearTimeout(p)},[c,a,e,i]),{numShow:s,setTriggerElement:f}}export{h as a,k as b,g as u};