import{r as n,_ as c,u as d,a as A,b as l,c as T,d as f,e as h,j as i}from"./index-3bWkHj16.js";const e=Object.freeze({signedIn:"ACCOUNT_STATE_SIGNED_IN",reSignin:"ACCOUNT_STATE_RE_SIGN_IN",signin:"ACCOUNT_STATE_SIGN_IN"}),o=Object.freeze({home:"",signin:"/signin",verifyOTP:"/verify-code",register:"/register",recover:"/recover",resetPass:"password/reset-verification"}),p=n.lazy(()=>c(()=>import("./index-3bWkHj16.js").then(s=>s.bC),__vite__mapDeps([0,1]))),I=n.lazy(()=>c(()=>import("./index-R5xMuT5A.js"),__vite__mapDeps([2,0,1])));function v(s){const{children:u}=s,{pathname:r}=d(),_=A(),a=l(),g=T.get(f),t=a.data.isAuth?e.signedIn:g?e.reSignin:e.signin;return n.useEffect(()=>{t===e.reSignin&&h({fnCallback:S=>a.method.setAuth({isAuth:!0,me:S})}).then(),t===e.signedIn&&Object.values(o).includes(r)&&_(o.home,{replace:!0})},[t,r]),n.useMemo(()=>i.jsx(n.Suspense,{children:t===e.signedIn?u:t===e.reSignin?i.jsx(p,{}):i.jsx(I,{})}),[t])}const m=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{o as A,m as i};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-3bWkHj16.js","assets/index-eGg70zu3.css","assets/index-R5xMuT5A.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
