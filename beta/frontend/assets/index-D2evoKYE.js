import{c as h,j as p,y as o,b as e,aX as I,d as a,a9 as g,aU as b,aV as x,r as u,aY as S,N as c,aZ as T,T as d,M as A,f as V,a_ as C,a$ as m,ac as l,_ as W,h as y,b0 as v,a8 as f,b1 as k}from"./index-iH0hyzq6.js";const E=h(p.jsx("path",{d:"m17.6 9.48 1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"}),"Android"),U=h(p.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"}),"Apple"),X={chs:"简体中文",cht:"繁體中文",de:"Deutsch",en:"English",es:"Español",fr:"Français",id:"Bahasa Indonesia",it:"Italiano",ja:"日本語",ko:"한국어",pt:"Português",ru:"Русский язык",th:"ภาษาไทย",tr:"Türkçe",vi:"Tiếng Việt"};function M(){const{t,i18n:i}=o(["ui","settings"]),n=s=>()=>i.changeLanguage(s),r=i.languages[0];return e(x,{fullWidth:!0,title:t("settings:languageCard.languageFormat",{language:t(`languages:${r}`)}),children:I.map(s=>a(b,{selected:r===s,disabled:r===s,onClick:n(s),children:[e(g,{i18nKey:`languages:${s}`}),s!==r?` (${X[s]})`:""]},s))})}const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABC1BMVEXo4+Ndlq9Yj6g6ZHdQhJsBAQFZkalUiaE2XXAzWWtGdYtclK1bk6s4YHNXjqXn4uI0W25WjKNCb4RMfZNKepA/an+kpKQ7ZnpShp5PgZhIeI3k39+urq49aH3t6OhEcYZNf5ZEc4mpqamioaJBbYEwUmICCg7w6+va1tYRDAsIFBkOHiUjIB8ZFRT18PD59PQgOkW3tbVIRkW/vb0qSFYtKimPjo6dnZ3QzMwUJi79+PgaMTugoKB4d3eGhYVoZ2bIxcVAa36ampp0dHQ7IyBgPDn/v7lua2s5OjrakIr6p6HJg35QT09+UEula2ZeXV1jnbdxsMWT5fxYV1e7enWucm2RXFdHbnldj3f8l9hnAAAERElEQVRIx5WUZ3uqShRGJ8K25SgWQhGCCNKL2DWSaBJNb6f//39yB1Qg5+qHLH1wGN41M3tA0MmXQadfBn37Mih/lFzucD/KHaH67ePk8BVUPUw9zwdarl4/cAnVsxSSRpW016B9nObTvj2okIIXv21w1dOPYHO30bVSOXdSLXwmVbjqCIp5Lmrl5UCH56e1tV579qKZ4z4rXAJp/wW2SnJkrgjrP97jIzze3T09b6BRJ7kMiEzIOd+bTp4kC9fW89Oj9fgGf97efj3dveocmWWn8CQv50bBjybPy/n562/PgceNvXAc3Xp9srQ6n1X4GE6uczLpdOtyvVDQvHmnYP9e104KBb6ib9ygLvMpSI4gR7rT5vhyg5c1jSs48wK38Lwmhq8GAEWuKaegqL/J2YUmVHhZ5hYWLLjWokNe6xpJ0zxtw4PnkM0MsUKT2vzHd42nmx19MrXmHE/TclQgR+vepH8J1/hSqtAx5Mgu4UFJzVWUqaVVSZ7unBc1TXcZRZ3CiGzRCYhutWj8IRslfOS1sTgVr/TAsXVdtyxrPFVCVXEXWNnm8Ae1tpRpGR/40VhUVWY5eL+/vJrcMCqDv6o4dvhyKwGVM3T4wBXDUBn2RVFU+qZgzhSVCcUXaGVSqJOl6YxF0aSQiZcTmhJFGWaIZ8H1t9JQVmnTGtwrcXI4ZVRTMgxpNWUYJrQ0uh0nYqWdoazj6leGQc1wThWFVX8oilHLdehGkkKNhC4dwI2iMJMX9xaXoCoDAOvlNsTF/ASik+RSpdsm4FacLj0AiJQbkXkf4JNLRVUmMCp3E6W757rljBVcqTeYmD1xetOn/J5PXT0MlZBRvEX5eh9EZ3vaGlwNBWEl+D2h3zON4UwSBMk3DKE/FR/sThJMlWt9YCKEDCRIQ/fdnTzcXwiIEigKUYq4hLNUOd/CtgMY+hRCVJRxN29rEKNTDCWtmAmUurvkeaI0bA8PGmcEf/B895ycUpLJqFbQINidwu7o2i7aIVzcbu5eH3rCvgOvbOyUu2fb5F4hugHMjGRY79f6MlEoqa8MbM0enRGxQuxgK3Dr70KC0fdc/OAkykq8BXB1Nk4mCoHrT1KUj/d3b0RjTFzoT4HIKhW2NiLs5cV+Lfg3NShpBqBcLIElKpFSiWE1/JjooPppySirvCiGNHbO4uxOObMH5vTeTUv+BCX1DF+EEZtRiufO4MLoSQeFyBGQNLa3xl4hNHzvTXQUyvgJAVvcKsUt7Nw1jWOTIKF3Be6c3Ub3SpHQrZl/dGFGOFnqxGelVqzoVr9HHZtGEa9Aq9RipbanWNThxqAO75gZqoy3IOJgqkSORyHqoDILVXGg/08p4S1AxxUlXtk/CmEPjt1K/AbEL4A5UYqUUgqh3/eO7JnAqCFeWSWKZZWKPjmi4H9MGL1ntdo/Sg1C/5gSrUy15pXPSk2Dvn/kxlAommYJIzzNf0ojyADA0vERAAAAAElFTkSuQmCC";function B(){const{silly:t,setSilly:i}=u.useContext(S),{t:n}=o(["ui","settings"]);return a(y,{bgt:"light",children:[a(c,{sx:{display:"flex",alignItems:"center",gap:2},children:[e(T,{src:j}),a(d,{variant:"h5",children:[" ",n`sillyPageTitle`]})]}),e(A,{}),a(c,{children:[e(d,{children:a(g,{t:n,i18nKey:"settings:sillyCard.desc",children:["We ",e("s",{children:"stole"})," borrowed (with permission) all the character assets from ",e("strong",{children:"Silly Wisher"})," and gene splice it into Genshin Optimizer."]})}),a(V,{display:"flex",gap:2,pt:2,children:[e(l,{onClick:()=>i(!t),startIcon:t?e(C,{}):e(m,{}),color:t?"success":"secondary",children:t?n`settings:sillyCard.toggle.enabled`:n`settings:sillyCard.toggle.disabled`}),e(l,{startIcon:e(W,{}),color:"discord",href:"https://discord.com/invite/sillywisher",target:"_blank",children:"Discord"}),e(l,{startIcon:e(U,{}),href:"https://apps.apple.com/lv/app/silly-wisher/id6444465724",target:"_blank",children:"App Store"}),e(l,{startIcon:e(E,{}),href:"https://play.google.com/store/apps/details?id=com.sketchi.sillywisher",target:"_blank",children:"Google Play"})]})]})]})}function R(){const{snow:t,setSnow:i}=u.useContext(v),{t:n}=o();return a(l,{fullWidth:!0,color:t?"success":"secondary",onClick:()=>i(!t),startIcon:t?e(C,{}):e(m,{}),children:["❄ ",n("settings:letsnow")," ❄"]})}function K(){const{t}=o(["settings"]);return f.send({hitType:"pageview",page:"/setting"}),a(y,{sx:{my:1},children:[e(c,{sx:{py:1},children:e(d,{variant:"subtitle1",children:e(g,{t,i18nKey:"title"})})}),e(A,{}),a(c,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(M,{}),e(R,{}),e(B,{}),e(k,{})]})]})}export{K as default};
