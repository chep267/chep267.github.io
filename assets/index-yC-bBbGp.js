import{r as a,_ as c,u as E,a as u,b as S,c as T,d as A,e as R,j as r}from"./index-FunrRJzV.js";const e=Object.freeze({SIGNED_IN:"ACCOUNT_STATE_SIGNED_IN",RE_SIGN_IN:"ACCOUNT_STATE_RE_SIGN_IN",SIGN_IN:"ACCOUNT_STATE_SIGN_IN"}),o=Object.freeze({HOME:"",SIGN_IN:"/signin",VERIFY_OTP:"/verify-code",REGISTER:"/register",RECOVER:"/recover",RESET_PASS:"password/reset-verification"}),l=a.lazy(()=>c(()=>import("./index-FunrRJzV.js").then(s=>s.bx),__vite__mapDeps([0,1]))),d=a.lazy(()=>c(()=>import("./index-aXIiFGy9.js"),__vite__mapDeps([2,0,1])));function f(s){const{pathname:n}=E(),N=u(),_=S(),i=T.get(A),t=_.data.isAuth?e.SIGNED_IN:i?e.RE_SIGN_IN:e.SIGN_IN;switch(a.useEffect(()=>{t===e.RE_SIGN_IN&&R({fnCallback:I=>_.method.setAuth({isAuth:!0,me:I})}).then(),t===e.SIGNED_IN&&Object.values(o).includes(n)&&N(o.HOME,{replace:!0})},[t]),t){case e.SIGNED_IN:return s?.children;case e.RE_SIGN_IN:return r.jsx(l,{});default:return r.jsx(d,{})}}var G=f;const p=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{o as A,p as i};
//# sourceMappingURL=index-yC-bBbGp.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-FunrRJzV.js","assets/index-eGg70zu3.css","assets/index-aXIiFGy9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}