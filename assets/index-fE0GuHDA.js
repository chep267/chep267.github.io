import{al as b,b5 as S,b6 as j,b7 as E,aj as t,r as R,j as e}from"./index-DaeNVboi.js";import{j as y,T as c}from"./makeStyles-dK49IQNm.js";import{s as C,u as F,C as d,L as T,o as N,a as w}from"./styles-APRwxuvm.js";import{m as M,x as v,n as p}from"./index-4nfW8HpE.js";import{P as _}from"./createSvgIcon-H2AZ31wo.js";import{S as k}from"./index-6K9hm45q.js";import{T as I}from"./TextField-Fm4nitPY.js";import{P as A}from"./index-ODr_377Q.js";import{A as f}from"./index-QfxmVNCl.js";import{A as B}from"./error-UL5nlCxe.js";import"./useTheme-ymx2BF-y.js";import"./InputAdornment-2AnyCE5h.js";import"./IconButton-WsA_EFrN.js";function L(){const{notify:s}=b();return M({mutationFn:v,onSuccess:(o,{email:r})=>{S.set(j,E(r)),s.toggleNotify({open:!0,mode:"success",intlMessage:t["module.auth.form.status.register.success"]})},onError:o=>{const r=o?.code===B.EMAIL_EXISTS?"exist":"fail";s.toggleNotify({open:!0,mode:"error",intlMessage:t[`module.auth.form.status.register.${r}`]})}})}function J(){const{formatMessage:s}=y(),o=L(),r=C(),{handleSubmit:h,control:n,formState:{errors:l},setFocus:g}=F({defaultValues:{email:"",password:""},mode:"onSubmit",resolver:N(w)}),x=R.useCallback(a=>o.mutate(a),[]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"h3",className:r.title,children:s(t["module.auth.form.title.register"])}),e.jsxs(_,{className:r.form,component:"form",onSubmit:h(x),noValidate:!0,children:[e.jsx(d,{name:"email",control:n,render:({field:a})=>{const m=!!l.email,i=l.email?.message;return e.jsx(I,{...a,type:"email",label:s(t["module.auth.form.input.label.email"]),variant:"outlined",spellCheck:!1,fullWidth:!0,autoComplete:"email",autoFocus:!0,error:m,helperText:i&&s(t[i])})}}),e.jsx(d,{name:"password",control:n,render:({field:{ref:a,...m}})=>{const i=!!l.password,u=l.password?.message;return e.jsx(A,{...m,inputRef:a,label:s(t["module.auth.form.input.label.password"]),variant:"outlined",spellCheck:!1,fullWidth:!0,autoComplete:"password",error:i,helperText:u&&s(t[u]),setFocus:()=>g("password")})}}),e.jsxs(k,{className:r.link,children:[e.jsx(p,{to:f.SIGN_IN,replace:!0,children:s(t["module.auth.form.title.signin"])}),e.jsx(c,{variant:"h6",color:"primary.main",children:" / "}),e.jsx(p,{to:f.RECOVER,replace:!0,children:s(t["module.auth.form.title.recover"])})]}),e.jsx(T,{type:"submit",loading:o.isPending,size:"large",variant:"contained",fullWidth:!0,className:r.btnSubmit,children:s(t["module.auth.form.button.submit.register"])})]})]})}export{J as default};
//# sourceMappingURL=index-fE0GuHDA.js.map