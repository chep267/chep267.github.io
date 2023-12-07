import{r as s,M as n,j as e}from"./index-7XUSdGMc.js";import{R as i,e as t,N as l,f as o}from"./index-saWHAjDC.js";const E=(a,...r)=>`/${a}${r?`/${r?.join("/")}`:""}`,_=s.lazy(()=>n(()=>import("./index-7PwNEIuv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),u=s.lazy(()=>n(()=>import("./index-PDx1gOq0.js"),__vite__mapDeps([8,1,2,3,4,6,7,5,9,10,11,12])));function c(){return e.jsx(s.Suspense,{fallback:null,children:e.jsxs(i,{children:[e.jsx(t,{index:!0,element:e.jsx(l,{to:E(o.MESSENGER,o.MESSENGER_CONVERSATION.replace(":tid","0"))})}),e.jsx(t,{path:o.MESSENGER_CONVERSATION,element:e.jsx(u,{})}),e.jsx(t,{path:"*",element:e.jsx(_,{})})]})})}const j=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}));export{E as g,j as i};
//# sourceMappingURL=index-VzUsUqq3.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-7PwNEIuv.js","assets/index-7XUSdGMc.js","assets/index-eGg70zu3.css","assets/index-5Pha_LLp.js","assets/makeStyles--5Ime0zL.js","assets/index-saWHAjDC.js","assets/createSvgIcon-HkhQ5Lvw.js","assets/useTheme-mZOOiLHX.js","assets/index-PDx1gOq0.js","assets/message-r1nCfSwf.js","assets/IconButton-in3KYF8r.js","assets/InputAdornment-dS-T7KN8.js","assets/TextField-toH4uwrW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}