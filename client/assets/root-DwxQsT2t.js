import{o as u,p as x,q as y,t as f,r as o,_ as j,n as s,O as w,M as S,L as k,S as g}from"./components-Cy-I24B7.js";/**
 * @remix-run/react v2.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let n="positions";function M({getKey:e,...a}){let{isSpaMode:c}=u(),l=x(),h=y();f({getKey:e,storageKey:n});let d=o.useMemo(()=>{if(!e)return null;let t=e(l,h);return t!==l.key?t:null},[]);if(c)return null;let m=((t,p)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[p||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(r){console.error(r),sessionStorage.removeItem(t)}}).toString();return o.createElement("script",j({},a,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(n)}, ${JSON.stringify(d)})`}}))}function L({children:e}){return s.jsxs("html",{lang:"en",children:[s.jsxs("head",{children:[s.jsx("meta",{charSet:"utf-8"}),s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),s.jsx("link",{href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css",rel:"stylesheet"}),s.jsx("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),s.jsx("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),s.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"}),s.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;700&display=swap",rel:"stylesheet"}),s.jsx(S,{}),s.jsx(k,{})]}),s.jsxs("body",{className:"max-w-screen-3xl px-5 py-1",children:[e,s.jsx(M,{}),s.jsx(g,{})]})]})}function O(){return s.jsx(w,{})}export{L as Layout,O as default};