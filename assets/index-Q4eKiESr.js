import{J as S,aE as j,aF as E,aG as b,H as t,r as R,j as e}from"./index-69dHWMRy.js";import{j as y,T as c}from"./makeStyles-v2ltPf_K.js";import{s as F,u as C,C as d,L as T,o as N,a as w}from"./styles-4i3eVsek.js";import{H as M,_,I as p}from"./index-7qbZ8rly.js";import{P as v}from"./createSvgIcon-gobqiwYG.js";import{S as I}from"./index-JnxP6gO5.js";import{T as k}from"./TextField-hWES2uPD.js";import{P as A}from"./index-zSuPiCcE.js";import{A as f}from"./index-5nz4ueQ7.js";import{A as B}from"./error-UL5nlCxe.js";import"./useTheme-mpTOe25d.js";import"./InputAdornment-t9IpGB7b.js";import"./IconButton-02BE0phI.js";function L(){const{notify:s}=S();return M({mutationFn:_,onSuccess:(o,{email:r})=>{j.set(E,b(r)),s.toggleNotify({open:!0,mode:"success",intlMessage:t["module.auth.form.status.register.success"]})},onError:o=>{const r=o?.code===B.EMAIL_EXISTS?"exist":"fail";s.toggleNotify({open:!0,mode:"error",intlMessage:t[`module.auth.form.status.register.${r}`]})}})}function q(){const{formatMessage:s}=y(),o=L(),r=F(),{handleSubmit:h,control:n,formState:{errors:l},setFocus:g}=C({defaultValues:{email:"",password:""},mode:"onSubmit",resolver:N(w)}),x=R.useCallback(a=>o.mutate(a),[]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"h3",className:r.title,children:s(t["module.auth.form.title.register"])}),e.jsxs(v,{className:r.form,component:"form",onSubmit:h(x),noValidate:!0,children:[e.jsx(d,{name:"email",control:n,render:({field:a})=>{const m=!!l.email,i=l.email?.message;return e.jsx(k,{...a,type:"email",label:s(t["module.auth.form.input.label.email"]),variant:"outlined",spellCheck:!1,fullWidth:!0,autoComplete:"email",autoFocus:!0,error:m,helperText:i&&s(t[i])})}}),e.jsx(d,{name:"password",control:n,render:({field:{ref:a,...m}})=>{const i=!!l.password,u=l.password?.message;return e.jsx(A,{...m,inputRef:a,label:s(t["module.auth.form.input.label.password"]),variant:"outlined",spellCheck:!1,fullWidth:!0,autoComplete:"password",error:i,helperText:u&&s(t[u]),setFocus:()=>g("password")})}}),e.jsxs(I,{className:r.link,children:[e.jsx(p,{to:f.SIGN_IN,replace:!0,children:s(t["module.auth.form.title.signin"])}),e.jsx(c,{variant:"h6",color:"primary.main",children:" / "}),e.jsx(p,{to:f.RECOVER,replace:!0,children:s(t["module.auth.form.title.recover"])})]}),e.jsx(T,{type:"submit",loading:o.isPending,size:"large",variant:"contained",fullWidth:!0,className:r.btnSubmit,children:s(t["module.auth.form.button.submit.register"])})]})]})}export{q as default};
//# sourceMappingURL=index-Q4eKiESr.js.map
