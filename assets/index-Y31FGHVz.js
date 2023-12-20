import{r as c,j as a,c as m,a0 as re,i as P,_ as L,h as S,a1 as X,a2 as K,J as se,a3 as ae}from"./index-WpdnjaG1.js";import{o as U,e as Y,P as oe,u as le,G as ie,c as j,b as ce}from"./createSvgIcon-XkRs2zTa.js";import{F as ue}from"./message-3jbv4GYI.js";import{u as de,f as G,g as $,b as z,h as k,c as V,d as B,T as pe,m as fe}from"./makeStyles-qY1kFYrq.js";import{u as ge}from"./useTheme-FJ6NG7Pr.js";import{I as me}from"./IconButton-N_HxMuGX.js";function Z(e){return e.substring(2).toLowerCase()}function ve(e,o){return o.documentElement.clientWidth<e.clientX||o.documentElement.clientHeight<e.clientY}function he(e){const{children:o,disableReactTree:r=!1,mouseEvent:n="onClick",onClickAway:t,touchEvent:l="onTouchEnd"}=e,p=c.useRef(!1),u=c.useRef(null),f=c.useRef(!1),g=c.useRef(!1);c.useEffect(()=>(setTimeout(()=>{f.current=!0},0),()=>{f.current=!1}),[]);const v=de(o.ref,u),x=G(d=>{const h=g.current;g.current=!1;const y=U(u.current);if(!f.current||!u.current||"clientX"in d&&ve(d,y))return;if(p.current){p.current=!1;return}let s;d.composedPath?s=d.composedPath().indexOf(u.current)>-1:s=!y.documentElement.contains(d.target)||u.current.contains(d.target),!s&&(r||!h)&&t(d)}),A=d=>h=>{g.current=!0;const y=o.props[d];y&&y(h)},b={ref:v};return l!==!1&&(b[l]=A(l)),c.useEffect(()=>{if(l!==!1){const d=Z(l),h=U(u.current),y=()=>{p.current=!0};return h.addEventListener(d,x),h.addEventListener("touchmove",y),()=>{h.removeEventListener(d,x),h.removeEventListener("touchmove",y)}}},[x,l]),n!==!1&&(b[n]=A(n)),c.useEffect(()=>{if(n!==!1){const d=Z(n),h=U(u.current);return h.addEventListener(d,x),()=>{h.removeEventListener(d,x)}}},[x,n]),a.jsx(c.Fragment,{children:c.cloneElement(o,b)})}function Ce(e={}){const{autoHideDuration:o=null,disableWindowBlurListener:r=!1,onClose:n,open:t,resumeHideDuration:l}=e,p=c.useRef();c.useEffect(()=>{if(!t)return;function s(i){i.defaultPrevented||(i.key==="Escape"||i.key==="Esc")&&n?.(i,"escapeKeyDown")}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[t,n]);const u=G((s,i)=>{n?.(s,i)}),f=G(s=>{!n||s==null||(clearTimeout(p.current),p.current=setTimeout(()=>{u(null,"timeout")},s))});c.useEffect(()=>(t&&f(o),()=>{clearTimeout(p.current)}),[t,o,f]);const g=s=>{n?.(s,"clickaway")},v=()=>{clearTimeout(p.current)},x=c.useCallback(()=>{o!=null&&f(l??o*.5)},[o,l,f]),A=s=>i=>{const C=s.onBlur;C?.(i),x()},b=s=>i=>{const C=s.onFocus;C?.(i),v()},d=s=>i=>{const C=s.onMouseEnter;C?.(i),v()},h=s=>i=>{const C=s.onMouseLeave;C?.(i),x()};return c.useEffect(()=>{if(!r&&t)return window.addEventListener("focus",x),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",x),window.removeEventListener("blur",v)}},[r,x,t]),{getRootProps:(s={})=>{const i=m({},Y(e),Y(s));return m({role:"presentation"},s,i,{onBlur:A(i),onFocus:b(i),onMouseEnter:d(i),onMouseLeave:h(i)})},onClickAway:g}}function xe(e){return $("MuiSnackbarContent",e)}z("MuiSnackbarContent",["root","message","action"]);const ye=["action","className","message","role"],be=e=>{const{classes:o}=e;return B({root:["root"],action:["action"],message:["message"]},xe,o)},ke=k(oe,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>{const o=e.palette.mode==="light"?.8:.98,r=re(e.palette.background.default,o);return m({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(r),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Ae=k("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0"}),Me=k("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Ee=c.forwardRef(function(o,r){const n=P({props:o,name:"MuiSnackbarContent"}),{action:t,className:l,message:p,role:u="alert"}=n,f=L(n,ye),g=n,v=be(g);return a.jsxs(ke,m({role:u,square:!0,elevation:6,className:V(v.root,l),ownerState:g,ref:r},f,{children:[a.jsx(Ae,{className:v.message,ownerState:g,children:p}),t?a.jsx(Me,{className:v.action,ownerState:g,children:t}):null]}))}),Re=Ee;function Se(e){return $("MuiSnackbar",e)}z("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Te=["onEnter","onExited"],Le=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],je=e=>{const{classes:o,anchorOrigin:r}=e,n={root:["root",`anchorOrigin${S(r.vertical)}${S(r.horizontal)}`]};return B(n,Se,o)},q=k("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`anchorOrigin${S(r.anchorOrigin.vertical)}${S(r.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:o})=>{const r={left:"50%",right:"auto",transform:"translateX(-50%)"};return m({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},o.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},o.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},o.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:m({},o.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},o.anchorOrigin.horizontal==="center"&&r,o.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},o.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),we=c.forwardRef(function(o,r){const n=P({props:o,name:"MuiSnackbar"}),t=ge(),l={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{action:p,anchorOrigin:{vertical:u,horizontal:f}={vertical:"bottom",horizontal:"left"},autoHideDuration:g=null,children:v,className:x,ClickAwayListenerProps:A,ContentProps:b,disableWindowBlurListener:d=!1,message:h,open:y,TransitionComponent:s=ie,transitionDuration:i=l,TransitionProps:{onEnter:C,onExited:w}={}}=n,T=L(n.TransitionProps,Te),I=L(n,Le),R=m({},n,{anchorOrigin:{vertical:u,horizontal:f},autoHideDuration:g,disableWindowBlurListener:d,TransitionComponent:s,transitionDuration:i}),N=je(R),{getRootProps:H,onClickAway:M}=Ce(m({},R)),[E,O]=c.useState(!0),_=le({elementType:q,getSlotProps:H,externalForwardedProps:I,ownerState:R,additionalProps:{ref:r},className:[N.root,x]}),W=F=>{O(!0),w&&w(F)},D=(F,ne)=>{O(!1),C&&C(F,ne)};return!y&&E?null:a.jsx(he,m({onClickAway:M},A,{children:a.jsx(q,m({},_,{children:a.jsx(s,m({appear:!0,in:y,timeout:i,direction:u==="top"?"down":"up",onEnter:D,onExited:W},T,{children:v||a.jsx(Re,m({message:h,action:p},b))}))}))}))}),Ie=we;function Oe(e){return $("MuiAlert",e)}const Pe=z("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),J=Pe,$e=j(a.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),ze=j(a.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Be=j(a.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Ne=j(a.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),He=j(a.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),_e=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],We=e=>{const{variant:o,color:r,severity:n,classes:t}=e,l={root:["root",`${o}${S(r||n)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return B(l,Oe,t)},De=k(oe,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],o[`${r.variant}${S(r.color||r.severity)}`]]}})(({theme:e,ownerState:o})=>{const r=e.palette.mode==="light"?X:K,n=e.palette.mode==="light"?K:X,t=o.color||o.severity;return m({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&o.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${t}Color`]:r(e.palette[t].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${t}StandardBg`]:n(e.palette[t].light,.9),[`& .${J.icon}`]:e.vars?{color:e.vars.palette.Alert[`${t}IconColor`]}:{color:e.palette[t].main}},t&&o.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${t}Color`]:r(e.palette[t].light,.6),border:`1px solid ${(e.vars||e).palette[t].light}`,[`& .${J.icon}`]:e.vars?{color:e.vars.palette.Alert[`${t}IconColor`]}:{color:e.palette[t].main}},t&&o.variant==="filled"&&m({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${t}FilledColor`],backgroundColor:e.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[t].dark:e.palette[t].main,color:e.palette.getContrastText(e.palette[t].main)}))}),Fe=k("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ue=k("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),Q=k("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),ee={success:a.jsx($e,{fontSize:"inherit"}),warning:a.jsx(ze,{fontSize:"inherit"}),error:a.jsx(Be,{fontSize:"inherit"}),info:a.jsx(Ne,{fontSize:"inherit"})},Ge=c.forwardRef(function(o,r){var n,t,l,p,u,f;const g=P({props:o,name:"MuiAlert"}),{action:v,children:x,className:A,closeText:b="Close",color:d,components:h={},componentsProps:y={},icon:s,iconMapping:i=ee,onClose:C,role:w="alert",severity:T="success",slotProps:I={},slots:R={},variant:N="standard"}=g,H=L(g,_e),M=m({},g,{color:d,severity:T,variant:N}),E=We(M),O=(n=(t=R.closeButton)!=null?t:h.CloseButton)!=null?n:me,_=(l=(p=R.closeIcon)!=null?p:h.CloseIcon)!=null?l:He,W=(u=I.closeButton)!=null?u:y.closeButton,D=(f=I.closeIcon)!=null?f:y.closeIcon;return a.jsxs(De,m({role:w,elevation:0,ownerState:M,className:V(E.root,A),ref:r},H,{children:[s!==!1?a.jsx(Fe,{ownerState:M,className:E.icon,children:s||i[T]||ee[T]}):null,a.jsx(Ue,{ownerState:M,className:E.message,children:x}),v!=null?a.jsx(Q,{ownerState:M,className:E.action,children:v}):null,v==null&&C?a.jsx(Q,{ownerState:M,className:E.action,children:a.jsx(O,m({size:"small","aria-label":b,title:b,color:"inherit",onClick:C},W,{children:a.jsx(_,m({fontSize:"small"},D))}))}):null]}))}),Ve=Ge;function Xe(e){return $("MuiAlertTitle",e)}z("MuiAlertTitle",["root"]);const Ke=["className"],Ye=e=>{const{classes:o}=e;return B({root:["root"]},Xe,o)},Ze=k(pe,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),qe=c.forwardRef(function(o,r){const n=P({props:o,name:"MuiAlertTitle"}),{className:t}=n,l=L(n,Ke),p=n,u=Ye(p);return a.jsx(Ze,m({gutterBottom:!0,component:"div",ownerState:p,ref:r,className:V(u.root,t)},l))}),Je=qe,Qe=fe(({palette:e})=>({notify:{width:"100%"},default:{color:e.common.white,backgroundColor:e.primary.main},hidden:{display:"none"},title:{textTransform:"capitalize"}}));var eo=Qe;const te=c.memo(e=>{const{notify:o}=se(),{open:r,message:n,intlMessage:t,mode:l,close:p,duration:u=ae}=o,f=eo(),g=c.useCallback(()=>o.toggleNotify(),[]),v=c.useRef(Object.freeze({vertical:"top",horizontal:"center"})).current;return a.jsx(Ie,{autoHideDuration:u,anchorOrigin:v,open:r,onClose:g,...e,children:a.jsxs(Ve,{className:ce(f.notify,{[f.default]:!l},{[f.hidden]:!r}),onClose:p?g:void 0,severity:l,elevation:6,variant:"filled",children:[a.jsxs(Je,{className:f.title,children:[l,"!"]}),t?a.jsx(ue,{...t}):n]})},"base-notify-boundary-app")});te.displayName="NotifyBoundary";var lo=te;export{lo as default};
//# sourceMappingURL=index-Y31FGHVz.js.map
