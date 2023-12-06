import{r as s,M as n,j as e}from"./index-jdgWRhPM.js";import{R as i,e as t,N as l,f as o}from"./index-7VIJm0Ps.js";const E=(a,...r)=>`/${a}${r?`/${r?.join("/")}`:""}`,_=s.lazy(()=>n(()=>import("./index-6ps7nOkK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),u=s.lazy(()=>n(()=>import("./index-b0il8-rY.js"),__vite__mapDeps([8,1,2,3,4,6,7,5,9,10,11,12])));function c(){return e.jsx(s.Suspense,{fallback:null,children:e.jsxs(i,{children:[e.jsx(t,{index:!0,element:e.jsx(l,{to:E(o.MESSENGER,o.MESSENGER_CONVERSATION.replace(":tid","0"))})}),e.jsx(t,{path:o.MESSENGER_CONVERSATION,element:e.jsx(u,{})}),e.jsx(t,{path:"*",element:e.jsx(_,{})})]})})}const j=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}));export{E as g,j as i};
//# sourceMappingURL=index-Fal7RmoA.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-6ps7nOkK.js","assets/index-jdgWRhPM.js","assets/index-eGg70zu3.css","assets/index-24R-WUU0.js","assets/makeStyles-sHqPI6Gv.js","assets/index-7VIJm0Ps.js","assets/createSvgIcon-Rhtpjdhv.js","assets/useTheme-4yoP7FdH.js","assets/index-b0il8-rY.js","assets/message-rprX-0SG.js","assets/IconButton-4p90GGzJ.js","assets/InputAdornment-fX_tLDwR.js","assets/TextField-WKlPXprm.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}