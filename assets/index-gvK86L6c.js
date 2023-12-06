import{S as Ct,s as N,al as Tt,am as H,an as W,ao as Mt,ap as Lt,aq as jt,ar as G,n as B,r as u,u as wt,j as r,K as Nt,as as Ot,c as I,i as q,_ as V,k as _,H as At,x as Dt,y as Ft}from"./index-NJ1MLZVx.js";import{S as F}from"./index-g1Q7SyqV.js";import{c as L,b as S,P as O}from"./createSvgIcon-PwanX5rN.js";import{m as M,T as K,g as X,b as Z,h as j,c as J,d as Y}from"./makeStyles-_plxyxUu.js";import{s as kt,B as tt,r as et,i as st,L as Ut,C as Pt,g as Ht,h as Wt,j as Gt,o as Qt,q as $t,l as zt,k as Bt,m as qt,a as rt,n as Vt,f as T,p as it,t as at,v as Kt,d as b}from"./index-kDIlv2sd.js";import{F as nt}from"./message-GeP2mF7t.js";import{I as ot}from"./IconButton-UjdIh8qf.js";import{I as Q}from"./InputAdornment-Z7vt6tLg.js";import{T as Xt}from"./TextField-KS47rm1I.js";import{g as A}from"./index-nNgvECcd.js";import"./useTheme-aXtPKKEn.js";var Zt=class extends Ct{constructor(t,e){super(),this.#t=void 0,this.#u=void 0,this.#e=void 0,this.#l=new Set,this.#s=t,this.options=e,this.#r=null,this.bindMethods(),this.setOptions(e)}#s;#t;#u;#e;#a;#d;#r;#m;#h;#f;#n;#o;#i;#l;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),$(this.#t,this.options)?this.#c():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return D(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return D(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#x(),this.#t.removeObserver(this)}setOptions(t,e){const s=this.options,i=this.#t;if(this.options=this.#s.defaultQueryOptions(t),N(s,this.options)||this.#s.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.#R();const n=this.hasListeners();n&&z(this.#t,i,this.options,s)&&this.#c(),this.updateResult(e),n&&(this.#t!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.#p();const c=this.#v();n&&(this.#t!==i||this.options.enabled!==s.enabled||c!==this.#i)&&this.#g(c)}getOptimisticResult(t){const e=this.#s.getQueryCache().build(this.#s,t),s=this.createResult(e,t);return Yt(this,s)&&(this.#e=s,this.#d=this.options,this.#a=this.#t.state),s}getCurrentResult(){return this.#e}trackResult(t){const e={};return Object.keys(t).forEach(s=>{Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:()=>(this.#l.add(s),t[s])})}),e}getCurrentQuery(){return this.#t}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=this.#s.defaultQueryOptions(t),s=this.#s.getQueryCache().build(this.#s,e);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#c({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#e))}#c(t){this.#R();let e=this.#t.fetch(this.options,t);return t?.throwOnError||(e=e.catch(Tt)),e}#p(){if(this.#b(),H||this.#e.isStale||!W(this.options.staleTime))return;const e=Mt(this.#e.dataUpdatedAt,this.options.staleTime)+1;this.#n=setTimeout(()=>{this.#e.isStale||this.updateResult()},e)}#v(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#g(t){this.#x(),this.#i=t,!(H||this.options.enabled===!1||!W(this.#i)||this.#i===0)&&(this.#o=setInterval(()=>{(this.options.refetchIntervalInBackground||Lt.isFocused())&&this.#c()},this.#i))}#y(){this.#p(),this.#g(this.#v())}#b(){this.#n&&(clearTimeout(this.#n),this.#n=void 0)}#x(){this.#o&&(clearInterval(this.#o),this.#o=void 0)}createResult(t,e){const s=this.#t,i=this.options,n=this.#e,c=this.#a,o=this.#d,d=t!==s?t.state:this.#u,{state:l}=t;let{error:h,errorUpdatedAt:f,fetchStatus:p,status:g}=l,R=!1,m;if(e._optimisticResults){const y=this.hasListeners(),w=!y&&$(t,e),St=y&&z(t,s,e,i);(w||St)&&(p=jt(t.options.networkMode)?"fetching":"paused",l.dataUpdatedAt||(g="pending")),e._optimisticResults==="isRestoring"&&(p="idle")}if(e.select&&typeof l.data<"u")if(n&&l.data===c?.data&&e.select===this.#m)m=this.#h;else try{this.#m=e.select,m=e.select(l.data),m=G(n?.data,m,e),this.#h=m,this.#r=null}catch(y){this.#r=y}else m=l.data;if(typeof e.placeholderData<"u"&&typeof m>"u"&&g==="pending"){let y;if(n?.isPlaceholderData&&e.placeholderData===o?.placeholderData)y=n.data;else if(y=typeof e.placeholderData=="function"?e.placeholderData(this.#f?.state.data,this.#f):e.placeholderData,e.select&&typeof y<"u")try{y=e.select(y),this.#r=null}catch(w){this.#r=w}typeof y<"u"&&(g="success",m=G(n?.data,y,e),R=!0)}this.#r&&(h=this.#r,m=this.#h,f=Date.now(),g="error");const E=p==="fetching",x=g==="pending",v=g==="error",C=x&&E;return{status:g,fetchStatus:p,isPending:x,isSuccess:g==="success",isError:v,isInitialLoading:C,isLoading:C,data:m,dataUpdatedAt:l.dataUpdatedAt,error:h,errorUpdatedAt:f,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>d.dataUpdateCount||l.errorUpdateCount>d.errorUpdateCount,isFetching:E,isRefetching:E&&!x,isLoadingError:v&&l.dataUpdatedAt===0,isPaused:p==="paused",isPlaceholderData:R,isRefetchError:v&&l.dataUpdatedAt!==0,isStale:k(t,e),refetch:this.refetch}}updateResult(t){const e=this.#e,s=this.createResult(this.#t,this.options);if(this.#a=this.#t.state,this.#d=this.options,this.#a.data!==void 0&&(this.#f=this.#t),N(s,e))return;this.#e=s;const i={},n=()=>{if(!e)return!0;const{notifyOnChangeProps:c}=this.options,o=typeof c=="function"?c():c;if(o==="all"||!o&&!this.#l.size)return!0;const a=new Set(o??this.#l);return this.options.throwOnError&&a.add("error"),Object.keys(this.#e).some(d=>{const l=d;return this.#e[l]!==e[l]&&a.has(l)})};t?.listeners!==!1&&n()&&(i.listeners=!0),this.#I({...i,...t})}#R(){const t=this.#s.getQueryCache().build(this.#s,this.options);if(t===this.#t)return;const e=this.#t;this.#t=t,this.#u=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#I(t){B.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(this.#e)}),this.#s.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function Jt(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function $(t,e){return Jt(t,e)||t.state.dataUpdatedAt>0&&D(t,e,e.refetchOnMount)}function D(t,e,s){if(e.enabled!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&k(t,e)}return!1}function z(t,e,s,i){return s.enabled!==!1&&(t!==e||i.enabled===!1)&&(!s.suspense||t.state.status!=="error")&&k(t,s)}function k(t,e){return t.isStaleByTime(e.staleTime)}function Yt(t,e){return!N(t.getCurrentResult(),e)}var lt=u.createContext(!1),te=()=>u.useContext(lt);lt.Provider;function ee(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var se=u.createContext(ee()),re=()=>u.useContext(se),ie=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},ae=t=>{u.useEffect(()=>{t.clearReset()},[t])},ne=({result:t,errorResetBoundary:e,throwOnError:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&kt(s,[t.error,i]),oe=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},le=(t,e)=>t?.suspense&&e.isPending,ce=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function ue(t,e,s){const i=wt(s),n=te(),c=re(),o=i.defaultQueryOptions(t);o._optimisticResults=n?"isRestoring":"optimistic",oe(o),ie(o,c),ae(c);const[a]=u.useState(()=>new e(i,o)),d=a.getOptimisticResult(o);if(u.useSyncExternalStore(u.useCallback(l=>{const h=n?()=>{}:a.subscribe(B.batchCalls(l));return a.updateResult(),h},[a,n]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),u.useEffect(()=>{a.setOptions(o,{listeners:!1})},[o,a]),le(o,d))throw ce(o,a,c);if(ne({result:d,errorResetBoundary:c,throwOnError:o.throwOnError,query:a.getCurrentQuery()}))throw d.error;return o.notifyOnChangeProps?d:a.trackResult(d)}function ct(t,e){return ue(t,Zt,e)}const de=M(({spacing:t})=>({thread_title:{width:"100%",alignItems:"flex-start",padding:`${t(3)} ${t(2)}`},thread_content:{display:"flex",justifyContent:"flex-end",position:"relative",width:"100%",height:"100%",'& > ul[class*="messenger_left_thread_list_default"]':{transition:"width 0.8s, visibility 0.8s"},'& > ul[class*="messenger_left_thread_list_search"]':{transition:"width 0.6s, visibility 0.6s",position:"absolute",top:0,left:0,bottom:0,width:0,visibility:"hidden"}},thread_content_focus_search:{'& > ul[class*="messenger_left_thread_list_default"]':{transition:"width 0.6s, visibility 0.6s",width:0,visibility:"hidden"},'& > ul[class*="messenger_left_thread_list_search"]':{transition:"width 0.8s, visibility 0.8s",width:"100%",visibility:"visible"}}}));var ut=de;function he(){const t=ut();return r.jsx(tt,{className:t.thread_title,children:r.jsx(K,{variant:"h5",children:r.jsx(nt,{...Nt["module.messenger.component.thread.title"]})})})}const fe=L(r.jsx("path",{d:"m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"}),"West");var U={},me=st;Object.defineProperty(U,"__esModule",{value:!0});var dt=U.default=void 0,pe=me(et()),ve=r,ge=(0,pe.default)((0,ve.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");dt=U.default=ge;var P={},ye=st;Object.defineProperty(P,"__esModule",{value:!0});var ht=P.default=void 0,be=ye(et()),xe=r,Re=(0,be.default)((0,xe.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");ht=P.default=Re;const ft=u.memo(t=>{const{timer:e=Ot,onChangeValue:s,onLoading:i,type:n="text",spellCheck:c=!1,size:o="small",InputProps:a,...d}=t,l=u.useRef(null),h=u.useRef(""),[f,p]=u.useState(""),g=u.useCallback(x=>p(x?.target?.value||""),[]);u.useEffect(()=>{let x;const v=f.trim();return v!==h.current&&(e>0?(x=setTimeout(()=>s?.(v),e),i?.(!0)):s?.(v),h.current=v),()=>clearTimeout(x)},[f]);const R=u.useCallback(()=>{p(""),l.current?.focus?.()},[]),m=u.useMemo(()=>a?.startAdornment||r.jsx(Q,{position:"start",children:r.jsx(ht,{color:"primary"})}),[a?.startAdornment]),E=u.useMemo(()=>a?.endAdornment||r.jsx(Q,{position:"end",style:{visibility:f?"visible":"hidden",cursor:"pointer"},onClick:R,children:r.jsx(dt,{color:"primary"})}),[a?.endAdornment,f]);return r.jsx(Xt,{type:n,inputRef:l,spellCheck:c,value:f,onChange:g,size:o,InputProps:{...a,startAdornment:m,endAdornment:E},...d})});ft.displayName="InputSearch";var Ie=ft;const Ee=M(({zIndex:t,spacing:e})=>({listSearch:{position:"sticky",top:0,zIndex:t.appBar,width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:e(2),padding:e(1),"& > .MuiTextField-root":{width:"100%","& > .MuiInputBase-root":{borderRadius:20}},"& > .MuiIconButton-root":{transition:"all 0.25s linear"}},listSearch_hidden:{gap:e(0),"& > .MuiIconButton-root":{visibility:"hidden",overflow:"hidden",width:0,padding:0}}}));var _e=Ee;function Se(t){const{isFocusSearch:e,setFocusSearch:s}=t,i=_e();return r.jsxs(F,{className:S(i.listSearch,{[i.listSearch_hidden]:!e}),children:[r.jsx(ot,{onClick:()=>s(!1),children:r.jsx(fe,{})}),r.jsx(Ie,{onFocus:()=>s(!0)})]})}function Ce(t){return X("MuiListItemAvatar",t)}Z("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Te=["className"],Me=t=>{const{alignItems:e,classes:s}=t;return Y({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},Ce,s)},Le=j("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({ownerState:t})=>I({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),je=u.forwardRef(function(e,s){const i=q({props:e,name:"MuiListItemAvatar"}),{className:n}=i,c=V(i,Te),o=u.useContext(Ut),a=I({},i,{alignItems:o.alignItems}),d=Me(a);return r.jsx(Le,I({className:J(d.root,n),ownerState:a,ref:s},c))}),mt=je,we=L(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Ne(t){return X("MuiAvatar",t)}Z("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Oe=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Ae=t=>{const{classes:e,variant:s,colorDefault:i}=t;return Y({root:["root",s,i&&"colorDefault"],img:["img"],fallback:["fallback"]},Ne,e)},De=j("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,e[s.variant],s.colorDefault&&e.colorDefault]}})(({theme:t,ownerState:e})=>I({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.variant==="square"&&{borderRadius:0},e.colorDefault&&I({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}))),Fe=j("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ke=j(we,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function Ue({crossOrigin:t,referrerPolicy:e,src:s,srcSet:i}){const[n,c]=u.useState(!1);return u.useEffect(()=>{if(!s&&!i)return;c(!1);let o=!0;const a=new Image;return a.onload=()=>{o&&c("loaded")},a.onerror=()=>{o&&c("error")},a.crossOrigin=t,a.referrerPolicy=e,a.src=s,i&&(a.srcset=i),()=>{o=!1}},[t,e,s,i]),n}const Pe=u.forwardRef(function(e,s){const i=q({props:e,name:"MuiAvatar"}),{alt:n,children:c,className:o,component:a="div",imgProps:d,sizes:l,src:h,srcSet:f,variant:p="circular"}=i,g=V(i,Oe);let R=null;const m=Ue(I({},d,{src:h,srcSet:f})),E=h||f,x=E&&m!=="error",v=I({},i,{colorDefault:!x,component:a,variant:p}),C=Ae(v);return x?R=r.jsx(Fe,I({alt:n,srcSet:f,src:h,sizes:l,ownerState:v,className:C.img},d)):c!=null?R=c:E&&n?R=n[0]:R=r.jsx(ke,{ownerState:v,className:C.fallback}),r.jsx(De,I({as:a,ownerState:v,className:J(C.root,o),ref:s},g,{children:R}))}),pt=Pe,vt=L(r.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image"),He=L(r.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),We=M(({palette:t})=>({list:{width:"100%",height:"100%",overflow:"hidden auto","&::-webkit-scrollbar":{width:"7px",height:"7px"},"&::-webkit-scrollbar-track":{borderRadius:"10px",backgroundColor:_(t.common.black,.1)},"&::-webkit-scrollbar-thumb":{borderRadius:"10px",backgroundColor:_(t.common.black,.2)},"&::-webkit-scrollbar-thumb:hover":{backgroundColor:_(t.common.black,.4)},"&::-webkit-scrollbar-thumb:active":{backgroundColor:_(t.common.black,.9)}},listLoading:{position:"absolute",justifyContent:"center",alignItems:"center",width:"100%",zIndex:1,top:0,left:0,bottom:0,right:0,backgroundColor:_(t.common.black,.2)}}));var gt=We;const yt=u.memo(t=>{const{loading:e,empty:s,emptyText:i}=t,n=gt();return r.jsx(F,{className:n.listLoading,display:e||s?"flex":"none",children:e?r.jsx(Pt,{color:"primary"}):r.jsx(K,{children:i||r.jsx(nt,{...At["module.base.component.table.empty.text"]})})})});yt.displayName="TableLoading";var Ge=yt;const bt=u.memo(function(t){const{data:e,renderItem:s,className:i,loading:n,emptyText:c,...o}=t,a=gt(),d=u.useMemo(()=>e?.map((l,h)=>s?.(l,h)),[e,s]);return r.jsxs(Ht,{className:S(a.list,i),...o,children:[r.jsx(Ge,{loading:n,empty:!e?.length,emptyText:c}),d]})});bt.displayName="ListBase";var xt=bt;const Qe="messenger",$e="user_id",ze="thread_id",Be=async t=>{const{timer:e=Dt,uid:s,fnCallback:i}=t,n=()=>{const o=Gt(qt,Bt,Qe,$e,s,ze);return{unsubscribe:Qt($t(o,zt(20)),d=>{const l=[],h={};d.forEach(f=>{const p=f.id;l.unshift(p),h[p]=f.data()}),i({itemIds:l,items:h})})}},[c]=await Promise.all([n(),Wt(e)]);return c};function qe(){const{me:t}=Ft(),[e,s]=u.useState([]),[i,n]=u.useState({}),c=ct({queryKey:["useListThread"],queryFn:()=>Be({uid:t.uid,fnCallback:o=>{s(o.itemIds),n(o.items)}}),enabled:!!t.uid,refetchOnWindowFocus:!1});return{...c,data:{itemIds:e,items:i,unsubscribe:c.data?.unsubscribe}}}const Ve=M(({palette:t,typography:e})=>({list:{'& div[class*="listLoading"]':{paddingTop:40,justifyContent:"flex-start"}},list_hidden:{visibility:"hidden",overflow:"hidden",height:0,padding:0,margin:0},listItem:{"& .MuiListItemText-primary":{...e.h6},"&:hover":{cursor:"pointer",backgroundColor:_(t.common.black,.1),"& > .MuiIconButton-root":{display:"flex"}}},listItemSelected:{backgroundColor:_(t.common.black,.1),"& .MuiListItemText-primary":{color:t.primary.main}},itemOption:{display:"none"}}));var Rt=Ve;const It=u.memo(()=>{const t=rt(),{tid:e}=Vt(),s=Rt(),i=qe(),{itemIds:n,items:c}=i.data,o=n[0];u.useEffect(()=>{o&&(!e||e==="0")&&t(A(T.MESSENGER,T.MESSENGER_CONVERSATION.replace(":tid",o)))},[e,o]);const a=u.useCallback((d,l)=>{const h=c[d];return h?r.jsxs(it,{className:S(s.listItem,{[s.listItemSelected]:d===e}),onClick:()=>t(A(T.MESSENGER,T.MESSENGER_CONVERSATION.replace(":tid",d))),children:[r.jsx(mt,{children:r.jsx(pt,{children:r.jsx(vt,{})})}),r.jsx(at,{primary:h.name,secondary:new Date(Number(d)).toString()}),r.jsx(ot,{className:s.itemOption,onClick:f=>f.stopPropagation(),children:r.jsx(He,{})})]},l):null},[e,c]);return r.jsx(xt,{className:S(s.list,"messenger_left_thread_list_default"),loading:i.isLoading,data:n,renderItem:a})},()=>!0);It.displayName="ThreadList";var Ke=It;function Xe(){return ct({queryKey:["useListUser"],queryFn:()=>Kt({}),refetchOnWindowFocus:!1})}const Et=u.memo(()=>{const t=rt(),e=Rt(),s=Xe(),{itemIds:i,items:n}=s.data??{},c=u.useCallback(a=>{t(A(T.MESSENGER,T.MESSENGER_CONVERSATION.replace(":tid",`/tid_${a.uid}`)))},[]),o=u.useCallback((a,d)=>{const l=n?.[a];return l?r.jsxs(it,{className:S(e.listItem),onClick:()=>c(l),children:[r.jsx(mt,{children:r.jsx(pt,{children:r.jsx(vt,{})})}),r.jsx(at,{primary:l.displayName})]},d):null},[n]);return r.jsx(xt,{className:S(e.list,"messenger_left_thread_list_search"),loading:s.isLoading,data:i,renderItem:o})},()=>!0);Et.displayName="ThreadListSearch";var Ze=Et;function Je(){const t=ut(),[e,s]=u.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Se,{isFocusSearch:e,setFocusSearch:s}),r.jsxs(tt,{className:S(t.thread_content,{[t.thread_content_focus_search]:e}),children:[r.jsx(Ke,{}),r.jsx(Ze,{})]})]})}const Ye=M(({palette:t,breakpoints:e,zIndex:s})=>({screen:{position:"relative",flexDirection:"row",width:"100%",height:"100%"},left:{display:"flex",position:"relative",flexDirection:"column",alignItems:"center",width:"100%",height:"100%",borderRadius:0,maxWidth:b.MESSENGER_LEFT_RIGHT_MAX_WIDTH,transition:"all 0.3s ease-in-out",[e.down("xl")]:{minWidth:b.MESSENGER_LEFT_MEDIUM_WIDTH,maxWidth:b.MESSENGER_LEFT_MEDIUM_WIDTH},[e.down("md")]:{minWidth:b.MESSENGER_LEFT_MIN_WIDTH,maxWidth:b.MESSENGER_LEFT_MIN_WIDTH},[e.down("sm")]:{minWidth:0,maxWidth:0},'&:hover > ul[class*="list"]':{overflow:"hidden",height:0,padding:0,margin:0,borderRadius:"50%"}},right:{display:"flex",justifyContent:"center",width:"100%",height:"100%",borderRadius:0,maxWidth:b.MESSENGER_LEFT_RIGHT_MAX_WIDTH,transition:"all 0.3s ease-in-out, height 0s",[e.down("lg")]:{position:"absolute",top:b.HEADER_HEIGHT,right:10,zIndex:s.drawer,border:"1px dashed red",minWidth:b.MESSENGER_LEFT_MEDIUM_WIDTH,maxWidth:b.MESSENGER_LEFT_MEDIUM_WIDTH,height:`calc(100vh - ${b.HEADER_HEIGHT*2}px - 20px)`},[e.down("xl")]:{minWidth:b.MESSENGER_LEFT_MEDIUM_WIDTH,maxWidth:b.MESSENGER_LEFT_MEDIUM_WIDTH}},mainContent:{display:"flex",flex:1,justifyContent:"center",width:"100%",height:"100%",borderRadius:0,borderLeft:`3px solid ${t.divider}`,borderRight:`3px solid ${t.divider}`}}));var _t=Ye;function ts(){const t=_t();return r.jsxs(O,{className:t.left,children:[r.jsx(he,{}),r.jsx(Je,{})]})}function fs(){const t=_t();return r.jsxs(F,{className:t.screen,children:[r.jsx(ts,{}),r.jsx(O,{className:t.mainContent,children:"center"}),r.jsx(O,{className:t.right,children:"right"})]})}export{fs as default};
//# sourceMappingURL=index-gvK86L6c.js.map
