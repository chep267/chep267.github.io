import{r,N as I,z as u,A as E,j as s}from"./index-WpdnjaG1.js";import{u as S,a as T,b as A,c as f,S as l}from"./index-1RMxDGf3.js";const e=Object.freeze({SIGNED_IN:"ACCOUNT_STATE_SIGNED_IN",RE_SIGN_IN:"ACCOUNT_STATE_RE_SIGN_IN",SIGN_IN:"ACCOUNT_STATE_SIGN_IN"}),o=Object.freeze({HOME:"",SIGN_IN:"/signin",VERIFY_OTP:"/verify-code",REGISTER:"/register",RECOVER:"/recover",RESET_PASS:"password/reset-verification"}),R=r.lazy(()=>I(()=>import("./index-ryyJY_NC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])));function G(_){const{pathname:c}=S(),n=T(),a=u(),N=A.get(E),t=a.isAuth?e.SIGNED_IN:N?e.RE_SIGN_IN:e.SIGN_IN;switch(r.useEffect(()=>{t===e.RE_SIGN_IN&&f({fnCallback:i=>a.toggleAuth({isAuth:!0,me:i})}).then(),t===e.SIGNED_IN&&Object.values(o).includes(c)&&n(o.HOME,{replace:!0})},[t]),t){case e.SIGNED_IN:return _?.children;case e.RE_SIGN_IN:return s.jsx(l,{});default:return s.jsx(R,{})}}var O=G;const C=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{o as A,C as i};
//# sourceMappingURL=index-r7jzW8g2.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-ryyJY_NC.js","assets/index-WpdnjaG1.js","assets/index-eGg70zu3.css","assets/index-1RMxDGf3.js","assets/createSvgIcon-XkRs2zTa.js","assets/makeStyles-qY1kFYrq.js","assets/useTheme-FJ6NG7Pr.js","assets/index-9JbdLyYo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}