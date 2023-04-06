import{s as t,aR as e,j as n,aW as d}from"./index-988a35a5.js";import{L as a}from"./index-8656a28f.js";const{Content:o,Sider:l}=a,i=(s=e.messenger.leftWidth.max)=>d`
    flex: 0 0 ${s}px !important;
    max-width: ${s}px !important;
    min-width: ${s}px !important;
    width: ${s}px !important;
`,p=t(a)`
    display: flex;
    width: 100%;
    height: 100%;
    padding: ${e.global.padding}px 0;
    background: transparent;
    overflow: hidden;
`,x=t(a)`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 ${e.global.padding}px;
    overflow: hidden;
`,m=t(o)`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: grey;
    border-radius: 12px;
`,r=t(l)`
    display: flex;
    ${i()};
    height: 100%;
    transition: width 0.35s, min-width 0.35s, max-width 0.35s;
    border-radius: 12px;
    overflow: hidden;
    overscroll-behavior: none;
    background-color: #cfcfcf;
    @media screen and (max-width: ${e.screen.sm}) {
        display: none !important;
    }
`,h=t(r)`
    margin-left: ${e.global.padding}px;
    @media screen and (max-width: ${e.screen.xxl}) {
        ${i(e.messenger.leftWidth.min)}
    }
    @media screen and (max-width: ${e.screen.lg}) {
        ${i(e.messenger.leftWidth.mini)}
    }
`,g=t(r)`
    margin-right: ${e.global.padding}px;
    @media screen and (max-width: ${e.screen.xxl}) {
        ${i(e.messenger.leftWidth.min)}
    }
    @media screen and (max-width: ${e.screen.xls}) {
        position: absolute !important;
        top: 20px;
        right: 10px;
        bottom: 20px;
        height: calc(100% - 40px);
        ${i(e.messenger.leftWidth.max)}
    }
`;function $(){return n.jsxs(p,{hasSider:!0,children:[n.jsx(h,{}),n.jsx(x,{children:n.jsx(m,{})}),n.jsx(g,{})]})}export{$ as default};
