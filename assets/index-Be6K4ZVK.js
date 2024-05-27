import{s as K,t as ee,v as ie,r as f,b as e,G as s,X as O,T as t,aL as P,ad as G,M,N as U,aM as _,aN as j,aO as A,aP as Y,f as d,B as x,aQ as w,at as se,aR as le,Y as D,av as te,a as $,a6 as b,aS as J,aT as re,a5 as B,aU as ne,aV as oe,aW as ae,aX as me,a7 as Z,a9 as ue}from"./index-3j9gmnXW.js";import{R,d as ce}from"./AccessTimeFilled-B6ETJ1jb.js";var F={},ge=ie;Object.defineProperty(F,"__esModule",{value:!0});var Q=F.default=void 0,be=ge(K()),he=ee(),Ne=(0,be.default)((0,he.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");Q=F.default=Ne;const q={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:D.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:D.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:D.exp_books.wit}},k=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],pe=[20,40,50,60,70,80,90];function de(){return{mora:0,level:1,curExp:0,goUnder:!1,books:{advice:0,experience:0,wit:0}}}function fe(){const[r,i]=f.useState(()=>de()),{mora:g,level:u,curExp:o,goUnder:n,books:a,books:{advice:h,experience:N,wit:c}}=r,p=pe.find(m=>m>u);let l=-o;for(let m=u;m<Math.min(p,k.length);m++)l+=k[m];const v=xe(c,N,h,l,n)||[],[C=0,z=0,T=0]=v,W={advice:T,experience:z,wit:C},S=C*2e4+z*5e3+T*1e3,H=S/5,V=l-S,I=g-H;let E=S+o,y=u;for(;y<Math.min(p,k.length)&&k[y]<=E;y++)E-=k[y];y===p&&(E=0);let X="";return I<0?X=e("span",{children:["You don't have enough ",e("b",{children:"Mora"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:108,columnNumber:31},this)," for this operation."]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:107,columnNumber:7},this):v.length===0?X=e("span",{children:["You don't have enough ",e("b",{children:"EXP. books"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:114,columnNumber:31},this)," to level to the next milestone."]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:113,columnNumber:7},this):u===90&&(X="You are at the maximum level."),e(d,{children:[e(s,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(s,{item:!0,children:e(O,{src:q.wit.img,size:2},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:122,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:121,columnNumber:9},this),e(s,{item:!0,flexGrow:1,children:e(t,{variant:"h6",children:"Experience Calculator"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:125,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:124,columnNumber:9},this),e(s,{item:!0,children:e(P,{children:[e(G,{color:"primary",disabled:!n,onClick:()=>i({...r,goUnder:!1}),children:"Full Level"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:129,columnNumber:13},this),e(G,{color:"primary",disabled:n,onClick:()=>i({...r,goUnder:!0}),children:"Don't fully level"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:136,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:128,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:127,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:120,columnNumber:7},this),e(M,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:146,columnNumber:7},this),e(U,{children:e(s,{container:!0,spacing:1,children:[e(s,{item:!0,children:e(t,{children:[e("span",{children:["This calculator tries to calculate the amount of exp books required to get to the next milestone level."," "]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:152,columnNumber:15},this),n?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:151,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:150,columnNumber:11},this),e(s,{item:!0,xs:6,md:3,children:e(P,{sx:{display:"flex"},children:[e(_,{children:"Current Level"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:163,columnNumber:15},this),e(j,{sx:{flexBasis:30,flexGrow:1},children:e(A,{value:u,onChange:m=>i({...r,level:Y(m??0,0,90)}),sx:{px:2}},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:167,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:164,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:162,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:161,columnNumber:11},this),e(s,{item:!0,xs:6,md:3,children:e(P,{sx:{display:"flex"},children:[e(_,{children:"Current EXP."},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:179,columnNumber:15},this),e(j,{sx:{flexBasis:30,flexGrow:1},children:e(A,{value:o,onChange:m=>i({...r,curExp:Y(m??0,0,(k[u]||1)-1)}),endAdornment:`/${k[u]||0}`,sx:{px:2}},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:183,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:180,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:178,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:177,columnNumber:11},this),e(s,{item:!0,xs:6,md:3,children:e(d,{bgt:"light",children:e(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(t,{children:"Next Milestone Level:"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:202,columnNumber:17},this),e(t,{children:e("b",{children:p},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:204,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:203,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:199,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:198,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:197,columnNumber:11},this),e(s,{item:!0,xs:6,md:3,children:e(d,{bgt:"light",children:e(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(t,{children:"EXP. to milestone:"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:214,columnNumber:17},this),e(t,{children:e("span",{children:[e("strong",{children:S},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:217,columnNumber:21},this)," / ",e("strong",{children:l},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:217,columnNumber:55},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:216,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:215,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:211,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:210,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:209,columnNumber:11},this),Object.entries(a).map(([m])=>e(s,{item:!0,xs:12,md:4,children:e(Ce,{bookKey:m,value:a[m],setValue:L=>i({...r,books:{...a,[m]:L}}),required:W[m]},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:226,columnNumber:17},this)},m,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:225,columnNumber:15},this)),e(s,{item:!0,xs:12,md:4,children:e(P,{sx:{display:"flex"},children:[e(_,{children:"Current Mora"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:239,columnNumber:15},this),e(j,{sx:{flexBasis:30,flexGrow:1},children:e(A,{value:g,onChange:m=>i({...r,mora:Math.max(m??0,0)}),sx:{px:2}},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:243,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:240,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:238,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:237,columnNumber:11},this),e(s,{item:!0,xs:12,md:4,children:e(d,{bgt:"light",children:e(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(t,{children:"Mora Cost: "},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:258,columnNumber:17},this),e(t,{children:e("b",{children:H},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:260,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:259,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:255,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:254,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:253,columnNumber:11},this),e(s,{item:!0,xs:12,md:4,children:e(d,{bgt:"light",children:e(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(t,{children:["EXP ",n?"Diff":"Waste",": "]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:270,columnNumber:17},this),e(t,{children:e("b",{children:e(w,{color:V<0?"error":"success",children:V},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:273,columnNumber:21},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:272,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:271,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:267,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:266,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:265,columnNumber:11},this),e(s,{item:!0,xs:12,md:4,children:e(d,{bgt:"light",children:e(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(t,{children:"Final Mora: "},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:286,columnNumber:17},this),e(t,{children:e("b",{children:e(w,{color:I<0?"error":"success",children:I},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:289,columnNumber:21},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:288,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:287,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:283,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:282,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:281,columnNumber:11},this),e(s,{item:!0,xs:12,md:4,children:e(d,{bgt:"light",children:e(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(t,{children:"Final Level: "},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:302,columnNumber:17},this),e(t,{children:e("b",{children:e(w,{color:"success",children:y},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:305,columnNumber:21},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:304,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:303,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:299,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:298,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:297,columnNumber:11},this),e(s,{item:!0,xs:12,md:4,children:e(d,{bgt:"light",children:e(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(t,{children:"Final EXP: "},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:316,columnNumber:17},this),e(t,{children:e("b",{children:e(w,{color:E<0?"error":"success",children:E},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:319,columnNumber:21},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:318,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:317,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:313,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:312,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:311,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:149,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:148,columnNumber:7},this),e(M,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:329,columnNumber:7},this),e(U,{sx:{py:1},children:e(s,{container:!0,spacing:2,children:[e(s,{item:!0,flexGrow:1,children:!!X&&e(se,{variant:"filled",severity:"error",children:X},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:334,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:332,columnNumber:11},this),e(s,{item:!0,xs:"auto",children:e(G,{disabled:!!X,onClick:()=>i({...r,level:y,curExp:E,books:le(W,(m,L)=>a[L]-m),mora:I}),color:"success",startIcon:e(Q,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:355,columnNumber:26},this),sx:{height:"100%"},children:"Apply"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:340,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:339,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:331,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:330,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:119,columnNumber:5},this)}function Ce(r){const{bookKey:i,value:g=0,setValue:u,required:o=0}=r;return e(d,{bgt:"light",children:[e(U,{sx:{py:1},children:e(t,{children:q[i].name},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:371,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:370,columnNumber:7},this),e(M,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:373,columnNumber:7},this),e(U,{children:e(s,{container:!0,children:[e(s,{item:!0,xs:3,children:e(te,{src:q[i].img},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:377,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:376,columnNumber:11},this),e(s,{item:!0,xs:9,children:[e(P,{sx:{display:"flex"},children:[e(_,{children:"Amount"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:381,columnNumber:15},this),e(j,{sx:{flexBasis:30,flexGrow:1},children:e(A,{value:g,onChange:n=>u(Math.max(n??0,0)),sx:{px:2}},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:385,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:382,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:380,columnNumber:13},this),e(x,{display:"flex",justifyContent:"space-between",mt:1,children:[e(t,{children:"Required:"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:393,columnNumber:15},this),e(t,{children:e("b",{children:e(w,{color:o?"success":void 0,children:o},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:396,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:395,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:394,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:392,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:379,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:375,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:374,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/EXPCalc.tsx",lineNumber:369,columnNumber:5},this)}function xe(r,i,g,u,o){let n=o?Math.floor(u/1e3):Math.ceil(u/1e3);const a=Math.min(Math.floor(n/20),r);n-=a*20;const h=Math.min(Math.floor(n/5),i);n-=h*5;const N=Math.min(n,g);return n-=N,o||n===0?[a,h,N]:h===3&&a!==r?[a+1,0,0]:h!==i?[a,h+1,0]:a!==r?[a+1,0,0]:null}const ve=[0,-1,-10,-20,-30,-40,-60,1,60,b];function ye(){const r=$(),[{resin:i,resinDate:g},u]=f.useState(()=>r.displayTool.get());f.useEffect(()=>r.displayTool.follow((l,v)=>u(v)),[r]);const o=f.useRef(void 0),n=l=>{l>=b?(o.current&&clearTimeout(o.current),o.current=void 0):o.current=setTimeout(()=>console.log("set resin",l+1),R),r.displayTool.set({resin:l,resinDate:new Date().getTime()})};f.useEffect(()=>{if(i<b){const l=Date.now(),v=b-i,C=Math.min(Math.floor((l-g)/R),v),z=i+C,T=g+C*R;r.displayTool.set({resin:z,resinDate:T}),z<b&&(o.current=setTimeout(()=>n(z+1),l-T))}return()=>o.current&&clearTimeout(o.current)},[]);const a=i>=b?g:g+R,h=i>=b?g:g+(b-i)*R,N=new Date(h),c=J(Math.abs(a-Date.now())),p=l=>{const C=parseInt(l);C>=0&&C<=2e3&&n(C)};return e(d,{children:[e(s,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(s,{item:!0,children:e(O,{src:D.resin.fragile,size:2},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:90,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:89,columnNumber:9},this),e(s,{item:!0,children:e(t,{variant:"h6",children:"Resin Counter"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:93,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:92,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:88,columnNumber:7},this),e(M,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:96,columnNumber:7},this),e(U,{children:e(s,{container:!0,spacing:2,children:[e(s,{item:!0,children:e(t,{variant:"h2",children:[e(O,{src:D.resin.fragile},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:101,columnNumber:15},this),e(re,{type:"number",sx:{width:"2.5em",fontSize:"4rem"},value:i,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:l=>p(l.target.value)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:102,columnNumber:15},this),e("span",{children:["/",b]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:109,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:100,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:99,columnNumber:11},this),e(s,{item:!0,flexGrow:1,children:[e(P,{fullWidth:!0,children:ve.map(l=>l===0?e(G,{onClick:()=>n(l),disabled:i===0,children:l},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:117,columnNumber:21},this):l===b?e(G,{onClick:()=>n(b),disabled:i>=b,children:["MAX ",l]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:127,columnNumber:21},this):l>0?e(G,{onClick:()=>n(i+l),disabled:i>=b,children:l},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:137,columnNumber:21},this):e(G,{onClick:()=>n(i+l),disabled:i<Math.abs(l),children:l},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:147,columnNumber:19},this))},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:113,columnNumber:13},this),e(t,{variant:"subtitle1",sx:{mt:2},children:i<b?e("span",{children:["Next resin in ",c,", full Resin at"," ",N.toLocaleTimeString()," ",N.toLocaleDateString()]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:158,columnNumber:17},this):e("span",{children:["Resin has been full for at least ",c,", since"," ",N.toLocaleTimeString()," ",N.toLocaleDateString()]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:164,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:156,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:112,columnNumber:11},this),e(s,{item:!0,xs:12,children:e(t,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:173,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:172,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:98,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:97,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/ResinCounter.tsx",lineNumber:87,columnNumber:5},this)}function ke(){const r=$(),[{timeZoneKey:i},g]=f.useState(()=>r.displayTool.get());f.useEffect(()=>r.displayTool.follow((c,p)=>g(p)),[r]);const u=f.useCallback(c=>r.displayTool.set({timeZoneKey:c}),[r]),[o,n]=f.useState(new Date(Date.now()+B[i]));f.useEffect(()=>{const c=()=>(n(new Date(Date.now()+B[i])),setTimeout(()=>{p=c()},Z-Date.now()%Z));let p=c();return()=>clearTimeout(p)},[i]);let a=new Date(o);a.getUTCHours()<4||(a=new Date(a.getTime()+ne)),a.setUTCHours(4,0,0,0);const h=a.getTime()-o.getTime(),N=J(h);return e(d,{children:[e(U,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(ce,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:58,columnNumber:9},this),e(t,{variant:"h6",sx:{flexGrow:1},children:"Teyvat Time"},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:59,columnNumber:9},this),e(oe,{title:i,children:Object.keys(B).map(c=>e(ae,{selected:i===c,disabled:i===c,onClick:()=>u(c),children:c},c,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:64,columnNumber:13},this))},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:62,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:57,columnNumber:7},this),e(M,{},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:75,columnNumber:7},this),e(U,{children:e(s,{container:!0,justifyContent:"center",spacing:3,children:[e(s,{item:!0,sx:{my:4},children:e(t,{variant:"h2",children:o.toLocaleTimeString([],{timeZone:"UTC"})},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:79,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:78,columnNumber:11},this),e(s,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[e(t,{children:["Server Date: ",e("b",{children:o.toDateString()},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:90,columnNumber:28},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:89,columnNumber:13},this),e(t,{children:["Time until reset: ",e("b",{children:N},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:93,columnNumber:33},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:92,columnNumber:13},this),e(t,{children:["Resin until reset:"," ",e("b",{children:Math.floor(h/(8*me))},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:97,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:95,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:83,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:77,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:76,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/kulay/Git/genshin-optimizer/libs/gi/page-tools/src/TeyvatTime.tsx",lineNumber:56,columnNumber:5},this)}function ze(){return ue.send({hitType:"pageview",page:"/tools"}),e(x,{display:"flex",flexDirection:"column",gap:1,children:[e(ke,{},void 0,!1,{fileName:"C:\\Users\\kulay\\Git\\genshin-optimizer\\libs\\gi\\page-tools\\src\\index.tsx",lineNumber:11,columnNumber:7},this),e(ye,{},void 0,!1,{fileName:"C:\\Users\\kulay\\Git\\genshin-optimizer\\libs\\gi\\page-tools\\src\\index.tsx",lineNumber:12,columnNumber:7},this),e(fe,{},void 0,!1,{fileName:"C:\\Users\\kulay\\Git\\genshin-optimizer\\libs\\gi\\page-tools\\src\\index.tsx",lineNumber:13,columnNumber:7},this)]},void 0,!0,{fileName:"C:\\Users\\kulay\\Git\\genshin-optimizer\\libs\\gi\\page-tools\\src\\index.tsx",lineNumber:10,columnNumber:5},this)}export{ze as default};
