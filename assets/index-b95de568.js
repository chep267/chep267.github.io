import{z as b,G as j,ai as g,aj as x,ak as y,A as k,E as a,al as E,r as T,j as e}from"./index-f1e70dfb.js";import{u as S,S as C}from"./index-30d63708.js";import{s as F,u as I,o as N,C as d,T as v,L as w,a as A}from"./styles-de0f4452.js";import{f as M,s as R,b as B,L as p}from"./index-4ace2a36.js";import{P as L}from"./createSvgIcon-7a1ea11b.js";import{T as f}from"./makeStyles-e69edf7f.js";import{P}from"./index-c493f2cc.js";import{A as h}from"./index-4316d0c6.js";import"./useTheme-8853d974.js";function _(){const s=S(),l=b(),{notify:r}=j();return M({mutationFn:R,onSuccess:async(m,{email:i})=>{const t=m.user,u=await t.getIdToken()||"";g.set(x,y(i)),B.set(k,u,{expires:1}),l.toggleAuth({isAuth:!0,me:t})},onError:()=>{r.toggleNotify({open:!0,mode:"error",message:s.formatMessage(a["module.auth.form.status.email.incorrect"])})}})}function q(){const{formatMessage:s}=S(),l=_(),r=F(),{handleSubmit:m,control:i,formState:{errors:t}}=I({defaultValues:{email:E(g.get(x)),password:""},mode:"onSubmit",resolver:N(A)}),u=T.useCallback(o=>l.mutate(o),[]);return e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"h3",className:r.title,children:s(a["module.auth.form.title.signin"])}),e.jsxs(L,{className:r.form,component:"form",onSubmit:m(u),noValidate:!0,children:[e.jsx(d,{name:"email",control:i,render:({field:o})=>{const c=!!t.email,n=t.email?.message;return e.jsx(v,{...o,type:"email",label:s(a["module.auth.form.input.label.email"]),variant:"outlined",spellCheck:!1,fullWidth:!0,autoFocus:!0,error:c,helperText:n&&s(a[n])})}}),e.jsx(d,{name:"password",control:i,render:({field:o})=>{const c=!!t.password,n=t.password?.message;return e.jsx(P,{...o,label:s(a["module.auth.form.input.label.password"]),variant:"outlined",spellCheck:!1,fullWidth:!0,error:c,helperText:n&&s(a[n])})}}),e.jsxs(C,{className:r.link,children:[e.jsx(p,{to:h.REGISTER,replace:!0,children:s(a["module.auth.form.title.register"])}),e.jsx(f,{variant:"h6",color:"primary.main",children:" / "}),e.jsx(p,{to:h.RECOVER,replace:!0,children:s(a["module.auth.form.title.recover"])})]}),e.jsx(w,{type:"submit",loading:l.isPending,size:"large",variant:"contained",fullWidth:!0,className:r.btnSubmit,children:s(a["module.auth.form.button.submit.signin"])})]})]})}export{q as default};
//# sourceMappingURL=index-b95de568.js.map
