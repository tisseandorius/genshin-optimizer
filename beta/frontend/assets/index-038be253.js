import{r as $,i as Q,j as z,d as w,p as t,V as i,q as e,I as J,T as n,aw as M,B as R,D as _,ax as S,ay as B,az as I,aA as H,w as m,W as p,am as D,s as T,af as K,aB as ee,x as A,ah as te,b as ie,N as q,aC as ne,aD as re,aE as le,aF as se,aG as ae,Q as Y,X as ce}from"./index-d6608a81.js";import{d as oe,a as de}from"./ResinCounter-6132186c.js";var P={},he=Q;Object.defineProperty(P,"__esModule",{value:!0});var V=P.default=void 0,ue=he($()),me=z,xe=(0,ue.default)((0,me.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");V=P.default=xe;const L={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:A.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:A.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:A.exp_books.wit}},b=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],pe=[20,40,50,60,70,80,90];function fe(){return{mora:0,level:1,curExp:0,goUnder:!1,books:{advice:0,experience:0,wit:0}}}function ge(){const[r,l]=w.useState(()=>fe()),{mora:f,level:o,curExp:d,goUnder:c,books:s,books:{advice:u,experience:v,wit:h}}=r,x=pe.find(a=>a>o);let E=-d;for(let a=o;a<Math.min(x,b.length);a++)E+=b[a];const U=ve(h,v,u,E,c)||[],[F=0,X=0,N=0]=U,W={advice:N,experience:X,wit:F},k=F*2e4+X*5e3+N*1e3,O=k/5,Z=E-k,j=f-O;let y=k+d,g=o;for(;g<Math.min(x,b.length)&&b[g]<=y;g++)y-=b[g];g===x&&(y=0);let C="";return j<0?C=t("span",{children:["You don't have enough ",e("b",{children:"Mora"})," for this operation."]}):U.length===0?C=t("span",{children:["You don't have enough ",e("b",{children:"EXP. books"})," to level to the next milestone."]}):o===90&&(C="You are at the maximum level."),t(m,{children:[t(i,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(i,{item:!0,children:e(J,{src:L.wit.img,size:2})}),e(i,{item:!0,flexGrow:1,children:e(n,{variant:"h6",children:"Experience Calculator"})}),e(i,{item:!0,children:t(M,{children:[e(R,{color:"primary",disabled:!c,onClick:()=>l({...r,goUnder:!1}),children:"Full Level"}),e(R,{color:"primary",disabled:c,onClick:()=>l({...r,goUnder:!0}),children:"Don't fully level"})]})})]}),e(_,{}),e(T,{children:t(i,{container:!0,spacing:1,children:[e(i,{item:!0,children:t(n,{children:[t("span",{children:["This calculator tries to calculate the amount of exp books required to get to the next milestone level."," "]}),c?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]})}),e(i,{item:!0,xs:6,md:3,children:t(M,{sx:{display:"flex"},children:[e(S,{children:"Current Level"}),e(B,{sx:{flexBasis:30,flexGrow:1},children:e(I,{value:o,onChange:a=>l({...r,level:H(a??0,0,90)}),sx:{px:2}})})]})}),e(i,{item:!0,xs:6,md:3,children:t(M,{sx:{display:"flex"},children:[e(S,{children:"Current EXP."}),e(B,{sx:{flexBasis:30,flexGrow:1},children:e(I,{value:d,onChange:a=>l({...r,curExp:H(a??0,0,(b[o]||1)-1)}),endAdornment:`/${b[o]||0}`,sx:{px:2}})})]})}),e(i,{item:!0,xs:6,md:3,children:e(m,{bgt:"light",children:t(p,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(n,{children:"Next Milestone Level:"}),e(n,{children:e("b",{children:x})})]})})}),e(i,{item:!0,xs:6,md:3,children:e(m,{bgt:"light",children:t(p,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(n,{children:"EXP. to milestone:"}),e(n,{children:t("span",{children:[e("strong",{children:k})," / ",e("strong",{children:E})]})})]})})}),Object.entries(s).map(([a])=>e(i,{item:!0,xs:12,md:4,children:e(be,{bookKey:a,value:s[a],setValue:G=>l({...r,books:{...s,[a]:G}}),required:W[a]})},a)),e(i,{item:!0,xs:12,md:4,children:t(M,{sx:{display:"flex"},children:[e(S,{children:"Current Mora"}),e(B,{sx:{flexBasis:30,flexGrow:1},children:e(I,{value:f,onChange:a=>l({...r,mora:Math.max(a??0,0)}),sx:{px:2}})})]})}),e(i,{item:!0,xs:12,md:4,children:e(m,{bgt:"light",children:t(p,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(n,{children:"Mora Cost: "}),e(n,{children:e("b",{children:O})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(m,{bgt:"light",children:t(p,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[t(n,{children:["EXP ",c?"Diff":"Waste",": "]}),e(n,{children:e("b",{children:e(D,{color:Z<0?"error":"success",children:Z})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(m,{bgt:"light",children:t(p,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(n,{children:"Final Mora: "}),e(n,{children:e("b",{children:e(D,{color:j<0?"error":"success",children:j})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(m,{bgt:"light",children:t(p,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(n,{children:"Final Level: "}),e(n,{children:e("b",{children:e(D,{color:"success",children:g})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(m,{bgt:"light",children:t(p,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(n,{children:"Final EXP: "}),e(n,{children:e("b",{children:e(D,{color:y<0?"error":"success",children:y})})})]})})})]})}),e(_,{}),e(T,{sx:{py:1},children:t(i,{container:!0,spacing:2,children:[e(i,{item:!0,flexGrow:1,children:!!C&&e(K,{variant:"filled",severity:"error",children:C})}),e(i,{item:!0,xs:"auto",children:e(R,{disabled:!!C,onClick:()=>l({...r,level:g,curExp:y,books:ee(W,(a,G)=>s[G]-a),mora:j}),color:"success",startIcon:e(V,{}),sx:{height:"100%"},children:"Apply"})})]})})]})}function be(r){const{bookKey:l,value:f=0,setValue:o,required:d=0}=r;return t(m,{bgt:"light",children:[e(T,{sx:{py:1},children:e(n,{children:L[l].name})}),e(_,{}),e(T,{children:t(i,{container:!0,children:[e(i,{item:!0,xs:3,children:e(te,{src:L[l].img})}),t(i,{item:!0,xs:9,children:[t(M,{sx:{display:"flex"},children:[e(S,{children:"Amount"}),e(B,{sx:{flexBasis:30,flexGrow:1},children:e(I,{value:f,onChange:c=>o(Math.max(c??0,0)),sx:{px:2}})})]}),t(p,{display:"flex",justifyContent:"space-between",mt:1,children:[e(n,{children:"Required:"}),e(n,{children:e("b",{children:e(D,{color:d?"success":void 0,children:d})})})]})]})]})})]})}function ve(r,l,f,o,d){let c=d?Math.floor(o/1e3):Math.ceil(o/1e3);const s=Math.min(Math.floor(c/20),r);c-=s*20;const u=Math.min(Math.floor(c/5),l);c-=u*5;const v=Math.min(c,f);return c-=v,d||c===0?[s,u,v]:u===3&&s!==r?[s+1,0,0]:u!==l?[s,u+1,0]:s!==r?[s+1,0,0]:null}function ye(){const r=ie(),[{timeZoneKey:l},f]=w.useState(()=>r.displayTool.get());w.useEffect(()=>r.displayTool.follow((h,x)=>f(x)),[r]);const o=w.useCallback(h=>r.displayTool.set({timeZoneKey:h}),[r]),[d,c]=w.useState(new Date(Date.now()+q[l]));w.useEffect(()=>{const h=()=>(c(new Date(Date.now()+q[l])),setTimeout(()=>{x=h()},Y-Date.now()%Y));let x=h();return()=>clearTimeout(x)},[l]);let s=new Date(d);s.getUTCHours()<4||(s=new Date(s.getTime()+ne)),s.setUTCHours(4,0,0,0);const u=s.getTime()-d.getTime(),v=re(u);return t(m,{children:[t(T,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(oe,{}),e(n,{variant:"h6",sx:{flexGrow:1},children:"Teyvat Time"}),e(se,{title:l,children:Object.keys(q).map(h=>e(le,{selected:l===h,disabled:l===h,onClick:()=>o(h),children:h},h))})]}),e(_,{}),e(T,{children:t(i,{container:!0,justifyContent:"center",spacing:3,children:[e(i,{item:!0,sx:{my:4},children:e(n,{variant:"h2",children:d.toLocaleTimeString([],{timeZone:"UTC"})})}),t(i,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[t(n,{children:["Server Date: ",e("b",{children:d.toDateString()})]}),t(n,{children:["Time until reset: ",e("b",{children:v})]}),t(n,{children:["Resin until reset:"," ",e("b",{children:Math.floor(u/(8*ae))})]})]})]})})]})}function Te(){return ce.send({hitType:"pageview",page:"/tools"}),t(p,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(ye,{}),e(de,{}),e(ge,{})]})}export{Te as default};
