import{r as c}from"./index-BEiudMcQ.js";const z=["richard@piedpiper.com","gavin@hooli.com","gilfoyle@piedpiper.com","dinesh@piedpiper.com","jared@piedpiper.com","elliot@allsafe.com","michael@dundermifflin.com","dwight@dundermifflin.com","jim@dundermifflin.com"],je=()=>{const e=Math.floor(Math.random()*z.length);return z[e]};let F={data:""},_=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||F,H=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,L=/\/\*[^]*?\*\/|  +/g,I=/\n+/g,b=(e,t)=>{let r="",o="",n="";for(let a in e){let s=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+s+";":o+=a[1]=="f"?b(s,a):a+"{"+b(s,a[1]=="k"?"":t)+"}":typeof s=="object"?o+=b(s,t?t.replace(/([^,])+/g,i=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):a):s!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=b.p?b.p(a,s):a+":"+s+";")}return r+(t&&n?t+"{"+n+"}":n)+o},y={},M=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+M(e[r]);return t}return e},R=(e,t,r,o,n)=>{let a=M(e),s=y[a]||(y[a]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(a));if(!y[s]){let l=a!==e?e:(d=>{let p,f,m=[{}];for(;p=H.exec(d.replace(L,""));)p[4]?m.shift():p[3]?(f=p[3].replace(I," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][p[1]]=p[2].replace(I," ").trim();return m[0]})(e);y[s]=b(n?{["@keyframes "+s]:l}:l,r?"":"."+s)}let i=r&&y.g?y.g:null;return r&&(y.g=y[s]),((l,d,p,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(y[s],t,o,i),s},U=(e,t,r)=>e.reduce((o,n,a)=>{let s=t[a];if(s&&s.call){let i=s(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;s=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return o+n+(s??"")},"");function j(e){let t=this||{},r=e.call?e(t.p):e;return R(r.unshift?r.raw?U(r,[].slice.call(arguments,1),t.p):r.reduce((o,n)=>Object.assign(o,n&&n.call?n(t.p):n),{}):r,_(t.target),t.g,t.o,t.k)}let P,A,N;j.bind({g:1});let h=j.bind({k:1});function V(e,t,r,o){b.p=t,P=e,A=r,N=o}function v(e,t){let r=this||{};return function(){let o=arguments;function n(a,s){let i=Object.assign({},a),l=i.className||n.className;r.p=Object.assign({theme:A&&A()},i),r.o=/ *go\d+/.test(l),i.className=j.apply(r,o)+(l?" "+l:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),N&&d[0]&&N(i),P(d,i)}return t?t(n):n}}var q=e=>typeof e=="function",O=(e,t)=>q(e)?e(t):e,Y=(()=>{let e=0;return()=>(++e).toString()})(),S=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Z=20,T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Z)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return T(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},D=[],x={toasts:[],pausedAt:void 0},w=e=>{x=T(x,e),D.forEach(t=>{t(x)})},B={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},J=(e={})=>{let[t,r]=c.useState(x),o=c.useRef(x);c.useEffect(()=>(o.current!==x&&r(x),D.push(r),()=>{let a=D.indexOf(r);a>-1&&D.splice(a,1)}),[]);let n=t.toasts.map(a=>{var s,i,l;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((s=e[a.type])==null?void 0:s.removeDelay)||(e==null?void 0:e.removeDelay),duration:a.duration||((i=e[a.type])==null?void 0:i.duration)||(e==null?void 0:e.duration)||B[a.type],style:{...e.style,...(l=e[a.type])==null?void 0:l.style,...a.style}}});return{...t,toasts:n}},K=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Y()}),$=e=>(t,r)=>{let o=K(t,e,r);return w({type:2,toast:o}),o.id},u=(e,t)=>$("blank")(e,t);u.error=$("error");u.success=$("success");u.loading=$("loading");u.custom=$("custom");u.dismiss=e=>{w({type:3,toastId:e})};u.remove=e=>w({type:4,toastId:e});u.promise=(e,t,r)=>{let o=u.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let a=t.success?O(t.success,n):void 0;return a?u.success(a,{id:o,...r,...r==null?void 0:r.success}):u.dismiss(o),n}).catch(n=>{let a=t.error?O(t.error,n):void 0;a?u.error(a,{id:o,...r,...r==null?void 0:r.error}):u.dismiss(o)}),e};var W=(e,t)=>{w({type:1,toast:{id:e,height:t}})},X=()=>{w({type:5,time:Date.now()})},E=new Map,G=1e3,Q=(e,t=G)=>{if(E.has(e))return;let r=setTimeout(()=>{E.delete(e),w({type:4,toastId:e})},t);E.set(e,r)},ee=e=>{let{toasts:t,pausedAt:r}=J(e);c.useEffect(()=>{if(r)return;let a=Date.now(),s=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(l<0){i.visible&&u.dismiss(i.id);return}return setTimeout(()=>u.dismiss(i.id),l)});return()=>{s.forEach(i=>i&&clearTimeout(i))}},[t,r]);let o=c.useCallback(()=>{r&&w({type:6,time:Date.now()})},[r]),n=c.useCallback((a,s)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=s||{},p=t.filter(g=>(g.position||d)===(a.position||d)&&g.height),f=p.findIndex(g=>g.id===a.id),m=p.filter((g,C)=>C<f&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[m+1]:[0,m]).reduce((g,C)=>g+(C.height||0)+l,0)},[t]);return c.useEffect(()=>{t.forEach(a=>{if(a.dismissed)Q(a.id,a.removeDelay);else{let s=E.get(a.id);s&&(clearTimeout(s),E.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:W,startPause:X,endPause:o,calculateOffset:n}}},te=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ae=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,re=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ie=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${te} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ae} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,oe=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,se=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${oe} 1s linear infinite;
`,ne=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,le=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,de=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${le} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ce=v("div")`
  position: absolute;
`,pe=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ue=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,me=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ue} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,fe=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?c.createElement(me,null,t):t:r==="blank"?null:c.createElement(pe,null,c.createElement(se,{...o}),r!=="loading"&&c.createElement(ce,null,r==="error"?c.createElement(ie,{...o}):c.createElement(de,{...o})))},ge=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ye=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,he="0%{opacity:0;} 100%{opacity:1;}",be="0%{opacity:1;} 100%{opacity:0;}",ve=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,xe=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,we=(e,t)=>{let r=e.includes("top")?1:-1,[o,n]=S()?[he,be]:[ge(r),ye(r)];return{animation:t?`${h(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ee=c.memo(({toast:e,position:t,style:r,children:o})=>{let n=e.height?we(e.position||t||"top-center",e.visible):{opacity:0},a=c.createElement(fe,{toast:e}),s=c.createElement(xe,{...e.ariaProps},O(e.message,e));return c.createElement(ve,{className:e.className,style:{...n,...r,...e.style}},typeof o=="function"?o({icon:a,message:s}):c.createElement(c.Fragment,null,a,s))});V(c.createElement);var $e=({id:e,className:t,style:r,onHeightUpdate:o,children:n})=>{let a=c.useCallback(s=>{if(s){let i=()=>{let l=s.getBoundingClientRect().height;o(e,l)};i(),new MutationObserver(i).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return c.createElement("div",{ref:a,className:t,style:r},n)},ke=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...n}},De=j`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,k=16,Ce=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:n,containerStyle:a,containerClassName:s})=>{let{toasts:i,handlers:l}=ee(r);return c.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:k,left:k,right:k,bottom:k,pointerEvents:"none",...a},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||t,f=l.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:t}),m=ke(p,f);return c.createElement($e,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?De:"",style:m},d.type==="custom"?O(d.message,d):n?n(d):c.createElement(Ee,{toast:d,position:p}))}))},Ae=u;export{Ce as O,Ae as V,je as g};
