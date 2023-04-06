import{j as e,s,aR as n,r as i,aS as r,aT as h,aH as l,aU as d,aV as c}from"./index-988a35a5.js";import{L as o}from"./index-8656a28f.js";function x(){const t="dong ne";return e.jsx("span",{children:t})}const{Sider:p}=o,g=s(p)`
    &&& {
        position: sticky;
        height: calc(100vh - ${n.global.headerHeight}px);
        min-height: calc(100vh - ${n.global.headerHeight}px);
        max-height: calc(100vh - ${n.global.headerHeight}px);
        overflow: hidden auto;
        overscroll-behavior: none;
        -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    }
`,m=i.memo(()=>{const[t,a]=i.useState(!1);return e.jsx(g,{width:250,breakpoint:"xl",collapsedWidth:n.global.siderWidth.min,collapsible:!0,collapsed:t,onCollapse:a,children:e.jsx(r,{})})},h()),b=m,{Header:u}=o,v=s(u)`
    &&& {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        height: var(--header-height);
        min-height: var(--header-height);
        max-height: var(--header-height);
        overflow: hidden;
        -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        z-index: 999;
    }
`,f=s.div`
    display: flex;
    flex: 1 1 30%;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    span {
        margin-left: 10px;
        width: 100%;
        font-weight: bold;
        font-size: 20px;
    }
`,j=s.div`
    display: flex;
    flex: 1 1 30%;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`,w=()=>{const{token:{colorBgElevated:t}}=l.useToken();return e.jsxs(v,{style:{backgroundColor:t},children:[e.jsxs(f,{children:[e.jsx(d,{name:"logoApp"}),e.jsx(x,{})]}),e.jsx(j,{children:e.jsx(c,{})})]})},y=w,{Content:H}=o,S=s(H)`
    &&& {
        position: relative;
        width: 100%;
        height: calc(100vh - var(--header-height));
        min-height: calc(100vh - var(--header-height));
        max-height: calc(100vh - var(--header-height));
        overflow: hidden auto;
        scroll-behavior: smooth;
        overscroll-behavior: none;
    }
`;function k(t){const{element:a}=t;return e.jsx(o,{children:e.jsx(S,{children:a})})}function L(t){const{element:a}=t;return e.jsxs(o,{children:[e.jsx(y,{}),e.jsxs(o,{hasSider:!0,children:[e.jsx(b,{}),e.jsx(k,{element:a})]})]})}export{L as default};
