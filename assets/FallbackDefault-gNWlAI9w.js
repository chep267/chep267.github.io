import{r,N as h,j as e,J as s,O as b}from"./index-UO0iWmnE.js";import{m as j,j as u,T as l}from"./makeStyles-IPt8QAlK.js";import{S as c,I as x,B as g}from"./index-0FsL9mRO.js";import{u as k}from"./useCountdown-m7OTR_ea.js";const p=j(({zIndex:t})=>({fallback:{justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",overflow:"hidden"},content:{justifyContent:"center",alignItems:"center",zIndex:t.modal,"& img":{width:"auto",height:150,borderRadius:"50%"}}}));var d=p;const _=r.lazy(()=>h(()=>import("./index-qw5C6PPC.js"),__vite__mapDeps([0,1,2,3])));function y(t){const{isAutoReload:n=!0}=t,o=d(),{formatMessage:a}=u(),i=r.useCallback(()=>window.location.reload(),[]),{second:m}=k({callback:i,numberCountdown:b}),f=r.useMemo(()=>e.jsx(g,{onClick:i,variant:"outlined",size:"large",color:"error",children:a(s["module.base.error.fallback.retry"])}),[]);return e.jsxs(c,{className:o.content,children:[f,n?e.jsx(l,{variant:"subtitle1",fontWeight:600,color:"error.main",pt:3,children:a(s["module.base.error.fallback.autoReload"],{second:m})}):null]})}function I(t){const{isAutoReload:n}=t,o=d(),{formatMessage:a}=u();return e.jsxs(c,{className:o.fallback,children:[e.jsxs(c,{className:o.content,children:[e.jsx(x,{name:"error",width:237,height:213}),e.jsx(l,{variant:"h1",fontWeight:600,color:"error.main",children:a(s["module.base.error.fallback.title"])}),e.jsx(l,{variant:"h6",fontWeight:600,py:2,color:"error.main",children:a(s["module.base.error.fallback.content"])}),e.jsx(y,{isAutoReload:n})]}),e.jsx(r.Suspense,{fallback:null,children:e.jsx(_,{})})]})}export{I as default};
//# sourceMappingURL=FallbackDefault-gNWlAI9w.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-qw5C6PPC.js","assets/index-UO0iWmnE.js","assets/index-eGg70zu3.css","assets/useTheme-9nlXV522.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}