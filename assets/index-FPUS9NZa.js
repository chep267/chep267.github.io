import{I as x,az as S,aA as b,aB as j,G as t,r as E,j as e}from"./index-jdgWRhPM.js";import{u as h,S as R}from"./index-24R-WUU0.js";import{s as y,u as T,C as c,L as N,o as C,a as F}from"./styles-uBq0XfLz.js";import{G as I,I as M,w as d}from"./index-7VIJm0Ps.js";import{P as _}from"./createSvgIcon-Rhtpjdhv.js";import{T as p}from"./makeStyles-sHqPI6Gv.js";import{T as v}from"./TextField-WKlPXprm.js";import{P as k}from"./index-h5S2AOes.js";import{A as f}from"./index-sSTL4z3O.js";import{A as w}from"./error-UL5nlCxe.js";import"./useTheme-4yoP7FdH.js";import"./InputAdornment-fX_tLDwR.js";function A(){const s=h(),{notify:a}=x();return I({mutationFn:M,onSuccess:(r,{email:o})=>{S.set(b,j(o)),a.toggleNotify({open:!0,mode:"success",message:s.formatMessage(t["module.auth.form.status.register.success"])})},onError:r=>{const o=r?.code===w.EMAIL_EXISTS?"exist":"fail";a.toggleNotify({open:!0,mode:"error",message:s.formatMessage(t[`module.auth.form.status.register.${o}`])})}})}function X(){const{formatMessage:s}=h(),a=A(),r=y(),{handleSubmit:o,control:u,formState:{errors:m}}=T({mode:"onSubmit",resolver:C(F)}),g=E.useCallback(l=>a.mutate(l),[]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{variant:"h3",className:r.title,children:s(t["module.auth.form.title.register"])}),e.jsxs(_,{className:r.form,component:"form",onSubmit:o(g),noValidate:!0,children:[e.jsx(c,{name:"email",control:u,render:({field:l})=>{const n=!!m.email,i=m.email?.message;return e.jsx(v,{...l,type:"email",label:s(t["module.auth.form.input.label.email"]),variant:"outlined",spellCheck:!1,fullWidth:!0,autoFocus:!0,error:n,helperText:i&&s(t[i])})}}),e.jsx(c,{name:"password",control:u,render:({field:l})=>{const n=!!m.password,i=m.password?.message;return e.jsx(k,{...l,label:s(t["module.auth.form.input.label.password"]),variant:"outlined",spellCheck:!1,fullWidth:!0,error:n,helperText:i&&s(t[i])})}}),e.jsxs(R,{className:r.link,children:[e.jsx(d,{to:f.SIGN_IN,replace:!0,children:s(t["module.auth.form.title.signin"])}),e.jsx(p,{variant:"h6",color:"primary.main",children:" / "}),e.jsx(d,{to:f.RECOVER,replace:!0,children:s(t["module.auth.form.title.recover"])})]}),e.jsx(N,{type:"submit",loading:a.isPending,size:"large",variant:"contained",fullWidth:!0,className:r.btnSubmit,children:s(t["module.auth.form.button.submit.register"])})]})]})}export{X as default};
//# sourceMappingURL=index-FPUS9NZa.js.map
