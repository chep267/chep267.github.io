import{t as E,s as P,w as C,n as c,r as b,z as I,k as j,j as a,A as L,F as z,y as m,B as $}from"./index-3bWkHj16.js";import{u as F,F as R}from"./TextField-NAqi5oDw.js";function T(n){return P("MuiInputAdornment",n)}const M=E("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=M;var f;const N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],U=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},_=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return $(d,T,t)},w=C("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:U})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${x.positionStart}&:not(.${x.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),S=b.forwardRef(function(t,e){const o=I({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:g=!1,position:u,variant:v}=o,y=j(o,N),i=F()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},o,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),A=_(h);return a.jsx(R.Provider,{value:null,children:a.jsx(w,c({as:l,ownerState:h,className:L(A.root,r),ref:e},y,{children:typeof s=="string"&&!g?a.jsx(z,{color:"text.secondary",children:s}):a.jsxs(b.Fragment,{children:[u==="start"?f||(f=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),H=S;export{H as I};