import{al as h,aj as o,b8 as g,b5 as b,b6 as x,r as E,j as e}from"./index-DaeNVboi.js";import{j as S,T as i}from"./makeStyles-dK49IQNm.js";import{s as j,u as v,o as y,C as R,L as N,a as C}from"./styles-APRwxuvm.js";import{m as T,y as F,n}from"./index-4nfW8HpE.js";import{P as M}from"./createSvgIcon-H2AZ31wo.js";import{S as _}from"./index-6K9hm45q.js";import{T as k}from"./TextField-Fm4nitPY.js";import{A as u}from"./index-QfxmVNCl.js";import{A as L}from"./error-UL5nlCxe.js";import"./useTheme-ymx2BF-y.js";function A(){const{notify:t}=h();return T({mutationFn:F,onSuccess:()=>{t.toggleNotify({open:!0,mode:"success",intlMessage:o["module.auth.form.status.recover.success"]})},onError:a=>{const r=a?.code===L.USER_DELETED?"recover.fail":"server.busy";t.toggleNotify({open:!0,mode:"error",intlMessage:o[`module.auth.form.status.${r}`]})}})}function G(){const{formatMessage:t}=S(),a=A(),r=j(),{handleSubmit:c,control:d,formState:{errors:l}}=v({defaultValues:{email:g(b.get(x))},mode:"onSubmit",resolver:y(C)}),f=E.useCallback(s=>a.mutate(s),[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"h3",className:r.title,children:t(o["module.auth.form.title.recover"])}),e.jsxs(M,{className:r.form,component:"form",onSubmit:c(f),noValidate:!0,children:[e.jsx(R,{name:"email",control:d,render:({field:s})=>{const p=!!l.email,m=l.email?.message;return e.jsx(k,{...s,type:"email",label:t(o["module.auth.form.input.label.email"]),variant:"outlined",spellCheck:!1,fullWidth:!0,autoFocus:!0,error:p,helperText:m&&t(o[m])})}}),e.jsxs(_,{className:r.link,children:[e.jsx(n,{to:u.SIGN_IN,replace:!0,children:t(o["module.auth.form.title.signin"])}),e.jsx(i,{variant:"h6",color:"primary.main",children:" / "}),e.jsx(n,{to:u.RECOVER,replace:!0,children:t(o["module.auth.form.title.recover"])})]}),e.jsx(N,{type:"submit",loading:a.isPending,size:"large",variant:"contained",fullWidth:!0,className:r.btnSubmit,children:t(o["module.auth.form.button.submit.recover"])})]})]})}export{G as default};
//# sourceMappingURL=index-zBwOqO-R.js.map