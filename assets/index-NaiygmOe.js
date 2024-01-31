import{R as o,a1 as a,r as n,_ as l,j as t,S as s,ab as c}from"./index-3bWkHj16.js";const r=o(({palette:e,zIndex:i})=>({layout:{justifyContent:"center",alignItems:"flex-start",width:"100%",maxWidth:"100%",minWidth:"100%",height:`calc(100% - ${a.HEADER_HEIGHT}px)`,maxHeight:`calc(100% - ${a.HEADER_HEIGHT}px)`,minHeight:`calc(100% - ${a.HEADER_HEIGHT}px)`,overflow:"auto"},notFound:{justifyContent:"center",alignItems:"center",width:"100%",height:"100%",zIndex:i.fab,"& svg":{fill:()=>e.error.main}}})),u=n.lazy(()=>l(()=>import("./index-BveoTNvj.js"),__vite__mapDeps([0,1,2])));function h(){const e=r();return t.jsxs(s,{className:e.layout,children:[t.jsx(s,{className:e.notFound,children:t.jsx(c,{name:"notFound",width:"100%",height:"100%"})}),t.jsx(n.Suspense,{fallback:null,children:t.jsx(u,{})})]})}export{h as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BveoTNvj.js","assets/index-3bWkHj16.js","assets/index-eGg70zu3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
