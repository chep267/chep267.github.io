import{r as e}from"./index-3bWkHj16.js";const R=c=>{const{numberCountdown:t=10,timer:a=1e3,callback:r,isContinue:f}=c,o=e.useRef(),[l,u]=e.useState(t),[d,i]=e.useState(0),s=e.useCallback(()=>clearInterval(o.current),[]),C=e.useCallback((n=t)=>{s(),u(n),i(p=>(p+1)%7)},[]),m=e.useCallback(()=>{u(n=>{if(n<=1){if(r==null||r(),f)return t;s()}return n-1})},[t]);return e.useEffect(()=>(o.current=setInterval(m,a),()=>{clearInterval(o.current)}),[d]),{second:l,onRefresh:C,onStop:s}};export{R as u};