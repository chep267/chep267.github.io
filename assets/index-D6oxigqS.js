import{r as o,_ as r,j as e,a7 as i,a8 as s,a9 as l,Y as n}from"./index-3bWkHj16.js";const _=(a,...t)=>`${a}${(t==null?void 0:t.join(""))||""}`,u=o.lazy(()=>r(()=>import("./index-NaiygmOe.js"),__vite__mapDeps([0,1,2]))),E=o.lazy(()=>r(()=>import("./index-eQWsPNMB.js"),__vite__mapDeps([3,1,2,4,5,6,7,8])));function c(){return e.jsx(o.Suspense,{fallback:null,children:e.jsxs(i,{children:[e.jsx(s,{index:!0,element:e.jsx(l,{to:_(n.MESSENGER,n.MESSENGER_CONVERSATION.replace(":tid","0"))})}),e.jsx(s,{path:n.MESSENGER_CONVERSATION,element:e.jsx(E,{})}),e.jsx(s,{path:"*",element:e.jsx(u,{})})]})})}const S=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}));export{_ as g,S as i};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-NaiygmOe.js","assets/index-3bWkHj16.js","assets/index-eGg70zu3.css","assets/index-eQWsPNMB.js","assets/TextField-NAqi5oDw.js","assets/isMuiElement-GriJZeF9.js","assets/InputAdornment-JzZKtnIJ.js","assets/MainRoute-INgURMcV.js","assets/baseMessage-3oRVXsgW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
