import{R as o,a1 as i,r as t,_ as n,j as e,S as l,a7 as c,a8 as a,a9 as m}from"./index-3bWkHj16.js";import{A as r}from"./index-84arIswO.js";const _=o(({zIndex:s})=>({layout:{justifyContent:"center",alignItems:"flex-start",width:"100%",maxWidth:"100%",minWidth:"100%",height:`calc(100% - ${i.HEADER_HEIGHT}px)`,maxHeight:`calc(100% - ${i.HEADER_HEIGHT}px)`,minHeight:`calc(100% - ${i.HEADER_HEIGHT}px)`,overflow:"auto"},form:{justifyContent:"center",alignItems:"center",width:"100%",height:"auto",zIndex:s.fab}}));var x=_;const u=t.lazy(()=>n(()=>import("./index-BveoTNvj.js"),__vite__mapDeps([0,1,2]))),h=t.lazy(()=>n(()=>import("./index-KXCYhYKf.js"),__vite__mapDeps([3,1,2,4,5,6,7,8,9]))),p=t.lazy(()=>n(()=>import("./index-ymSY7YDl.js"),__vite__mapDeps([10,1,2,4,5,6,7,8,9,11]))),E=t.lazy(()=>n(()=>import("./index-IT_WEWnc.js"),__vite__mapDeps([12,1,2,4,5,6,9,11])));function f(){const s=x();return e.jsxs(l,{className:s.layout,children:[e.jsx(l,{className:s.form,children:e.jsx(t.Suspense,{fallback:null,children:e.jsxs(c,{children:[e.jsx(a,{path:r.signin,element:e.jsx(h,{})}),e.jsx(a,{path:r.register,element:e.jsx(p,{})}),e.jsx(a,{path:r.recover,element:e.jsx(E,{})}),e.jsx(a,{path:"*",element:e.jsx(m,{to:r.signin,replace:!0})})]})})}),e.jsx(t.Suspense,{fallback:null,children:e.jsx(u,{})})]})}export{f as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BveoTNvj.js","assets/index-3bWkHj16.js","assets/index-eGg70zu3.css","assets/index-KXCYhYKf.js","assets/styles-Zl5FCsnG.js","assets/TextField-NAqi5oDw.js","assets/isMuiElement-GriJZeF9.js","assets/index-kLFBwb7_.js","assets/InputAdornment-JzZKtnIJ.js","assets/index-84arIswO.js","assets/index-ymSY7YDl.js","assets/AUTH_ERROR_CODES-UL5nlCxe.js","assets/index-IT_WEWnc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}