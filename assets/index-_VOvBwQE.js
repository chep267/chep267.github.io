import{r as c,n as re,o as G,p as U,j as a,q as m,s as V,t as P,v as $,w as k,P as te,x as se,y as z,z as L,A as K,C as N,D as T,E as ae,F as le,G as ie,H as w,J as X,K as Y,L as ce,T as ue,m as de,M as pe,O as fe,Q as ge,U as me}from"./index-wXrx68AH.js";function q(e){return e.substring(2).toLowerCase()}function ve(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function he(e){const{children:t,disableReactTree:r=!1,mouseEvent:n="onClick",onClickAway:o,touchEvent:l="onTouchEnd"}=e,p=c.useRef(!1),u=c.useRef(null),f=c.useRef(!1),g=c.useRef(!1);c.useEffect(()=>(setTimeout(()=>{f.current=!0},0),()=>{f.current=!1}),[]);const v=re(t.ref,u),x=G(d=>{const h=g.current;g.current=!1;const y=U(u.current);if(!f.current||!u.current||"clientX"in d&&ve(d,y))return;if(p.current){p.current=!1;return}let s;d.composedPath?s=d.composedPath().indexOf(u.current)>-1:s=!y.documentElement.contains(d.target)||u.current.contains(d.target),!s&&(r||!h)&&o(d)}),A=d=>h=>{g.current=!0;const y=t.props[d];y&&y(h)},b={ref:v};return l!==!1&&(b[l]=A(l)),c.useEffect(()=>{if(l!==!1){const d=q(l),h=U(u.current),y=()=>{p.current=!0};return h.addEventListener(d,x),h.addEventListener("touchmove",y),()=>{h.removeEventListener(d,x),h.removeEventListener("touchmove",y)}}},[x,l]),n!==!1&&(b[n]=A(n)),c.useEffect(()=>{if(n!==!1){const d=q(n),h=U(u.current);return h.addEventListener(d,x),()=>{h.removeEventListener(d,x)}}},[x,n]),a.jsx(c.Fragment,{children:c.cloneElement(t,b)})}function Ce(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:r=!1,onClose:n,open:o,resumeHideDuration:l}=e,p=c.useRef();c.useEffect(()=>{if(!o)return;function s(i){i.defaultPrevented||(i.key==="Escape"||i.key==="Esc")&&n?.(i,"escapeKeyDown")}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[o,n]);const u=G((s,i)=>{n?.(s,i)}),f=G(s=>{!n||s==null||(clearTimeout(p.current),p.current=setTimeout(()=>{u(null,"timeout")},s))});c.useEffect(()=>(o&&f(t),()=>{clearTimeout(p.current)}),[o,t,f]);const g=s=>{n?.(s,"clickaway")},v=()=>{clearTimeout(p.current)},x=c.useCallback(()=>{t!=null&&f(l??t*.5)},[t,l,f]),A=s=>i=>{const C=s.onBlur;C?.(i),x()},b=s=>i=>{const C=s.onFocus;C?.(i),v()},d=s=>i=>{const C=s.onMouseEnter;C?.(i),v()},h=s=>i=>{const C=s.onMouseLeave;C?.(i),x()};return c.useEffect(()=>{if(!r&&o)return window.addEventListener("focus",x),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",x),window.removeEventListener("blur",v)}},[r,x,o]),{getRootProps:(s={})=>{const i=m({},V(e),V(s));return m({role:"presentation"},s,i,{onBlur:A(i),onFocus:b(i),onMouseEnter:d(i),onMouseLeave:h(i)})},onClickAway:g}}function xe(e){return P("MuiSnackbarContent",e)}$("MuiSnackbarContent",["root","message","action"]);const ye=["action","className","message","role"],be=e=>{const{classes:t}=e;return N({root:["root"],action:["action"],message:["message"]},xe,t)},ke=k(te,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,r=se(e.palette.background.default,t);return m({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(r),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Ae=k("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),Me=k("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Ee=c.forwardRef(function(t,r){const n=z({props:t,name:"MuiSnackbarContent"}),{action:o,className:l,message:p,role:u="alert"}=n,f=L(n,ye),g=n,v=be(g);return a.jsxs(ke,m({role:u,square:!0,elevation:6,className:K(v.root,l),ownerState:g,ref:r},f,{children:[a.jsx(Ae,{className:v.message,ownerState:g,children:p}),o?a.jsx(Me,{className:v.action,ownerState:g,children:o}):null]}))}),Re=Ee;function Te(e){return P("MuiSnackbar",e)}$("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Se=["onEnter","onExited"],Le=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],we=e=>{const{classes:t,anchorOrigin:r}=e,n={root:["root",`anchorOrigin${T(r.vertical)}${T(r.horizontal)}`]};return N(n,Te,t)},Z=k("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`anchorOrigin${T(r.anchorOrigin.vertical)}${T(r.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>{const r={left:"50%",right:"auto",transform:"translateX(-50%)"};return m({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:m({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&r,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Oe=c.forwardRef(function(t,r){const n=z({props:t,name:"MuiSnackbar"}),o=ae(),l={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{action:p,anchorOrigin:{vertical:u,horizontal:f}={vertical:"bottom",horizontal:"left"},autoHideDuration:g=null,children:v,className:x,ClickAwayListenerProps:A,ContentProps:b,disableWindowBlurListener:d=!1,message:h,open:y,TransitionComponent:s=ie,transitionDuration:i=l,TransitionProps:{onEnter:C,onExited:O}={}}=n,S=L(n.TransitionProps,Se),j=L(n,Le),R=m({},n,{anchorOrigin:{vertical:u,horizontal:f},autoHideDuration:g,disableWindowBlurListener:d,TransitionComponent:s,transitionDuration:i}),B=we(R),{getRootProps:H,onClickAway:M}=Ce(m({},R)),[E,I]=c.useState(!0),_=le({elementType:Z,getSlotProps:H,externalForwardedProps:j,ownerState:R,additionalProps:{ref:r},className:[B.root,x]}),W=F=>{I(!0),O&&O(F)},D=(F,ne)=>{I(!1),C&&C(F,ne)};return!y&&E?null:a.jsx(he,m({onClickAway:M},A,{children:a.jsx(Z,m({},_,{children:a.jsx(s,m({appear:!0,in:y,timeout:i,direction:u==="top"?"down":"up",onEnter:D,onExited:W},S,{children:v||a.jsx(Re,m({message:h,action:p},b))}))}))}))}),je=Oe;function Ie(e){return P("MuiAlert",e)}const Pe=$("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),J=Pe,$e=w(a.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),ze=w(a.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Ne=w(a.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Be=w(a.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),He=w(a.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),_e=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],We=e=>{const{variant:t,color:r,severity:n,classes:o}=e,l={root:["root",`${t}${T(r||n)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return N(l,Ie,o)},De=k(te,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${T(r.color||r.severity)}`]]}})(({theme:e,ownerState:t})=>{const r=e.palette.mode==="light"?X:Y,n=e.palette.mode==="light"?Y:X,o=t.color||t.severity;return m({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:r(e.palette[o].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${o}StandardBg`]:n(e.palette[o].light,.9),[`& .${J.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}},o&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:r(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${J.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}},o&&t.variant==="filled"&&m({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText(e.palette[o].main)}))}),Fe=k("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ue=k("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),Q=k("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),ee={success:a.jsx($e,{fontSize:"inherit"}),warning:a.jsx(ze,{fontSize:"inherit"}),error:a.jsx(Ne,{fontSize:"inherit"}),info:a.jsx(Be,{fontSize:"inherit"})},Ge=c.forwardRef(function(t,r){var n,o,l,p,u,f;const g=z({props:t,name:"MuiAlert"}),{action:v,children:x,className:A,closeText:b="Close",color:d,components:h={},componentsProps:y={},icon:s,iconMapping:i=ee,onClose:C,role:O="alert",severity:S="success",slotProps:j={},slots:R={},variant:B="standard"}=g,H=L(g,_e),M=m({},g,{color:d,severity:S,variant:B}),E=We(M),I=(n=(o=R.closeButton)!=null?o:h.CloseButton)!=null?n:ce,_=(l=(p=R.closeIcon)!=null?p:h.CloseIcon)!=null?l:He,W=(u=j.closeButton)!=null?u:y.closeButton,D=(f=j.closeIcon)!=null?f:y.closeIcon;return a.jsxs(De,m({role:O,elevation:0,ownerState:M,className:K(E.root,A),ref:r},H,{children:[s!==!1?a.jsx(Fe,{ownerState:M,className:E.icon,children:s||i[S]||ee[S]}):null,a.jsx(Ue,{ownerState:M,className:E.message,children:x}),v!=null?a.jsx(Q,{ownerState:M,className:E.action,children:v}):null,v==null&&C?a.jsx(Q,{ownerState:M,className:E.action,children:a.jsx(I,m({size:"small","aria-label":b,title:b,color:"inherit",onClick:C},W,{children:a.jsx(_,m({fontSize:"small"},D))}))}):null]}))}),Ke=Ge;function Ve(e){return P("MuiAlertTitle",e)}$("MuiAlertTitle",["root"]);const Xe=["className"],Ye=e=>{const{classes:t}=e;return N({root:["root"]},Ve,t)},qe=k(ue,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),Ze=c.forwardRef(function(t,r){const n=z({props:t,name:"MuiAlertTitle"}),{className:o}=n,l=L(n,Xe),p=n,u=Ye(p);return a.jsx(qe,m({gutterBottom:!0,component:"div",ownerState:p,ref:r,className:K(u.root,o)},l))}),Je=Ze,Qe=de(({palette:e})=>({notify:{width:"100%"},default:{color:e.common.white,backgroundColor:e.primary.main},hidden:{display:"none"},title:{textTransform:"capitalize"}}));var et=Qe;const oe=c.memo(e=>{const t=pe(),{open:r,message:n,intlMessage:o,mode:l,close:p,duration:u=me}=t.data,f=et(),g=c.useCallback(()=>t.method.toggleNotify(),[]),v=c.useRef(Object.freeze({vertical:"top",horizontal:"center"})).current;return a.jsx(je,{autoHideDuration:u,anchorOrigin:v,open:r,onClose:g,...e,children:a.jsxs(Ke,{className:fe(f.notify,{[f.default]:!l},{[f.hidden]:!r}),onClose:p?g:void 0,severity:l,elevation:6,variant:"filled",children:[a.jsxs(Je,{className:f.title,children:[l,"!"]}),o?a.jsx(ge,{...o}):n]})},"base-notify-boundary-app")});oe.displayName="NotifyBoundary";var ot=oe;export{ot as default};
//# sourceMappingURL=index-_VOvBwQE.js.map