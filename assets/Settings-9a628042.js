import{f7 as a,ao as u,am as f,f8 as y,l as v,r as d,i as p,j as m}from"./index-9960d26e.js";const S=["rarity","level","artsetkey","efficiency","mefficiency","probability"];function E(){return{artSetKeys:[],rarity:[...y],levelLow:0,levelHigh:20,slotKeys:[...v],mainStatKeys:[],substats:[],locations:[],showEquipped:!0,showInventory:!0,locked:["locked","unlocked"],rvLow:0,rvHigh:900,useMaxRV:!1,lines:[1,2,3,4]}}function w(i,t){return{rarity:e=>e.rarity??0,level:e=>e.level??0,artsetkey:e=>e.setKey??"",efficiency:e=>a(e,i).currentEfficiency,mefficiency:e=>a(e,i).maxEfficiency,probability:e=>{if(!Object.keys(t).length)return 0;const r=e.probability;return r===void 0?u(e,t):r}}}function R(i=new Set(f)){return{locked:(t,e)=>!(!e.includes("locked")&&t.lock||!e.includes("unlocked")&&!t.lock),locations:(t,e,r)=>t.location&&!r.showEquipped?e.includes(t.location):!0,showEquipped:()=>!0,showInventory:(t,e)=>t.location?!0:e,artSetKeys:(t,e)=>e.length?e.includes(t.setKey):!0,slotKeys:(t,e)=>e.includes(t.slotKey),mainStatKeys:(t,e)=>e.length?e.includes(t.mainStatKey):!0,levelLow:(t,e)=>e<=t.level,levelHigh:(t,e)=>e>=t.level,rvLow:(t,e,r)=>{if(e===0)return!0;e=e/100;const{useMaxRV:c}=r,{currentEfficiency:s,maxEfficiency:n}=a(t,i);return e<=(c?n:s)},rvHigh:(t,e,r)=>{if(e===900)return!0;e=e/100;const{useMaxRV:c}=r,{currentEfficiency:s,maxEfficiency:n}=a(t,i);return e>=(c?n:s)},useMaxRV:()=>!0,rarity:(t,e)=>e.includes(t.rarity),substats:(t,e)=>{for(const r of e)if(r&&!t.substats.some(c=>c.key===r))return!1;return!0},lines:(t,e)=>[0,...e].includes(t.substats.filter(r=>r.value).length)}}const M={level:["level","rarity","artsetkey"],rarity:["rarity","level","artsetkey"],artsetkey:["artsetkey","rarity","level"],efficiency:["efficiency"],mefficiency:["mefficiency"],probability:["probability"]};var l={},b=p;Object.defineProperty(l,"__esModule",{value:!0});var h=l.default=void 0,k=b(d()),g=m,K=(0,k.default)((0,g.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");h=l.default=K;export{w as a,R as b,M as c,h as d,S as e,E as i};