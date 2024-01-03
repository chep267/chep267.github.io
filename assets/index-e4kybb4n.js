import{r as _,_ as n,p as E,q as u,t as S,v as T,w as A,x as R,j as r}from"./index-jp_zSDZP.js";const e=Object.freeze({SIGNED_IN:"ACCOUNT_STATE_SIGNED_IN",RE_SIGN_IN:"ACCOUNT_STATE_RE_SIGN_IN",SIGN_IN:"ACCOUNT_STATE_SIGN_IN"}),o=Object.freeze({HOME:"",SIGN_IN:"/signin",VERIFY_OTP:"/verify-code",REGISTER:"/register",RECOVER:"/recover",RESET_PASS:"password/reset-verification"}),l=_.lazy(()=>n(()=>import("./index-jp_zSDZP.js").then(s=>s.br),__vite__mapDeps([0,1]))),f=_.lazy(()=>n(()=>import("./index-6rzl6SPZ.js"),__vite__mapDeps([2,0,1])));function d(s){const{pathname:c}=E(),N=u(),a=S(),i=T.get(A),t=a.data.isAuth?e.SIGNED_IN:i?e.RE_SIGN_IN:e.SIGN_IN;switch(_.useEffect(()=>{t===e.RE_SIGN_IN&&R({fnCallback:I=>a.method.setAuth({isAuth:!0,me:I})}).then(),t===e.SIGNED_IN&&Object.values(o).includes(c)&&N(o.HOME,{replace:!0})},[t]),t){case e.SIGNED_IN:return s?.children;case e.RE_SIGN_IN:return r.jsx(l,{});default:return r.jsx(f,{})}}var G=d;const p=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{o as A,p as i};
//# sourceMappingURL=index-e4kybb4n.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-jp_zSDZP.js","assets/index-eGg70zu3.css","assets/index-6rzl6SPZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}