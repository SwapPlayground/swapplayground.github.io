(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[856],{23037:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(21761);let a=(0,i.Z)("X",[["line",{x1:"18",y1:"6",x2:"6",y2:"18",key:"1o5bob"}],["line",{x1:"6",y1:"6",x2:"18",y2:"18",key:"z4dcbv"}]])},19539:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return f}});let i=n(97295),a=n(3589),r=a._(n(19605)),u=i._(n(69756)),o=i._(n(5814)),s=n(53735),l=n(68732),p=n(50240);n(21390);let d=n(1432),y=i._(n(85928)),c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,t,n,i,a,r){let u=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===u)return;e["data-loaded-src"]=u;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function getDynamicProps(e){let[t,n]=r.version.split("."),i=parseInt(t,10),a=parseInt(n,10);return i>18||18===i&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,r.forwardRef)((e,t)=>{let{src:n,srcSet:i,sizes:a,height:u,width:o,decoding:s,className:l,style:p,fetchPriority:d,placeholder:y,loading:c,unoptimized:m,fill:f,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:v,setShowAltText:h,onLoad:T,onError:x,...w}=e;return r.default.createElement("img",{...w,...getDynamicProps(d),loading:c,width:o,height:u,decoding:s,"data-nimg":f?"fill":"1",className:l,style:p,sizes:a,srcSet:i,src:n,ref:(0,r.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&handleLoading(e,y,g,b,v,m))},[n,y,g,b,v,x,m,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,y,g,b,v,m)},onError:e=>{h(!0),"empty"!==y&&v(!0),x&&x(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:n}=e,i={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...getDynamicProps(n.fetchPriority)};return t&&u.default.preload?(u.default.preload(n.src,i),null):r.default.createElement(o.default,null,r.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...i}))}let f=(0,r.forwardRef)((e,t)=>{let n=(0,r.useContext)(d.RouterContext),i=(0,r.useContext)(p.ImageConfigContext),a=(0,r.useMemo)(()=>{let e=c||i||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[i]),{onLoad:u,onLoadingComplete:o}=e,f=(0,r.useRef)(u);(0,r.useEffect)(()=>{f.current=u},[u]);let g=(0,r.useRef)(o);(0,r.useEffect)(()=>{g.current=o},[o]);let[b,v]=(0,r.useState)(!1),[h,T]=(0,r.useState)(!1),{props:x,meta:w}=(0,s.getImgProps)(e,{defaultLoader:y.default,imgConf:a,blurComplete:b,showAltText:h});return r.default.createElement(r.default.Fragment,null,r.default.createElement(m,{...x,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:f,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:T,ref:t}),w.priority?r.default.createElement(ImagePreload,{isAppRouter:!n,imgAttributes:x}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},44886:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let i=n(97295),a=i._(n(19605)),r=a.default.createContext({})},76621:function(e,t){"use strict";function isInAmpMode(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||n&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},53735:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),n(21390);let i=n(30879),a=n(68732);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var n;let r,u,o,{src:s,sizes:l,unoptimized:p=!1,priority:d=!1,loading:y,className:c,quality:m,width:f,height:g,fill:b=!1,style:v,onLoad:h,onLoadingComplete:T,placeholder:x="empty",blurDataURL:w,fetchPriority:P,layout:C,objectFit:k,objectPosition:_,lazyBoundary:M,lazyRoot:I,...S}=e,{imgConf:O,showAltText:j,blurComplete:E,defaultLoader:D}=t,R=O||a.imageConfigDefault;if("allSizes"in R)r=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t);r={...R,allSizes:e,deviceSizes:t}}let z=S.loader||D;delete S.loader,delete S.srcSet;let N="__next_img_default"in z;if(N){if("custom"===r.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=z;z=t=>{let{config:n,...i}=t;return e(i)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!l&&(l=t)}let A="",L=getInt(f),F=getInt(g);if("object"==typeof(n=s)&&(isStaticRequire(n)||void 0!==n.src)){let e=isStaticRequire(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,o=e.blurHeight,w=w||e.blurDataURL,A=e.src,!b){if(L||F){if(L&&!F){let t=L/e.width;F=Math.round(e.height*t)}else if(!L&&F){let t=F/e.height;L=Math.round(e.width*t)}}else L=e.width,F=e.height}}let q=!d&&("lazy"===y||void 0===y);(!(s="string"==typeof s?s:A)||s.startsWith("data:")||s.startsWith("blob:"))&&(p=!0,q=!1),r.unoptimized&&(p=!0),N&&s.endsWith(".svg")&&!r.dangerouslyAllowSVG&&(p=!0),d&&(P="high");let W=getInt(m),U=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:_}:{},j?{}:{color:"transparent"},v),B=E||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:F,blurWidth:u,blurHeight:o,blurDataURL:w||"",objectFit:U.objectFit})+'")':'url("'+x+'")',X=B?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:B}:{},G=function(e){let{config:t,src:n,unoptimized:i,width:a,quality:r,sizes:u,loader:o}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:l}=function(e,t,n){let{deviceSizes:i,allSizes:a}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let r=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:r,kind:"x"}}(t,a,u),p=s.length-1;return{sizes:u||"w"!==l?u:"100vw",srcSet:s.map((e,i)=>o({config:t,src:n,quality:r,width:e})+" "+("w"===l?e:i+1)+l).join(", "),src:o({config:t,src:n,quality:r,width:s[p]})}}({config:r,src:s,unoptimized:p,width:L,quality:W,sizes:l,loader:z}),V={...S,loading:q?"lazy":y,fetchPriority:P,width:L,height:F,decoding:"async",className:c,style:{...U,...X},sizes:G.sizes,srcSet:G.srcSet,src:G.src},H={unoptimized:p,priority:d,placeholder:x,fill:b};return{props:V,meta:H}}},5814:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return defaultHead},default:function(){return _default}});let i=n(97295),a=n(3589),r=a._(n(19605)),u=i._(n(67068)),o=n(44886),s=n(6987),l=n(76621);function defaultHead(e){void 0===e&&(e=!1);let t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(21390);let p=["name","httpEquiv","charSet","itemProp"];function reduceComponents(e,t){let{inAmpMode:n}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,i={};return a=>{let r=!0,u=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){u=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?r=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?r=!1:n.add(t);else{let e=a.props[t],n=i[t]||new Set;("name"!==t||!u)&&n.has(e)?r=!1:(n.add(e),i[t]=n)}}}}return r}}()).reverse().map((e,t)=>{let i=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,r.default.cloneElement(e,t)}return r.default.cloneElement(e,{key:i})})}let _default=function(e){let{children:t}=e,n=(0,r.useContext)(o.AmpStateContext),i=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(u.default,{reduceComponentsToState:reduceComponents,headManager:i,inAmpMode:(0,l.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30879:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:a,blurDataURL:r,objectFit:u}=e,o=i?40*i:t,s=a?40*a:n,l=o&&s?"viewBox='0 0 "+o+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},50240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return u}});let i=n(97295),a=i._(n(19605)),r=n(68732),u=a.default.createContext(r.imageConfigDefault)},68732:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return i}});let n=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},13841:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return s}});let i=n(97295),a=n(53735),r=n(21390),u=n(19539),o=i._(n(85928)),unstable_getImgProps=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},s=u.Image},85928:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:n,width:i,quality:a}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),defaultLoader.__next_img_default=!0;let n=defaultLoader},67068:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let i=n(19605),a=i.useLayoutEffect,r=i.useEffect;function SideEffect(e){let{headManager:t,reduceComponentsToState:n}=e;function emitChange(){if(t&&t.mountedInstances){let a=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}return a(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),a(()=>(t&&(t._pendingUpdate=emitChange),()=>{t&&(t._pendingUpdate=emitChange)})),r(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},21390:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},38682:function(e,t,n){e.exports=n(13841)},47220:function(e,t,n){"use strict";n.d(t,{fC:function(){return x},z$:function(){return w}});var i=n(19605),a=n(72288),r=n(57787),u=n(69237),o=n(3897),s=n(54091),l=n(35960),p=n(37100),d=n(81555),y=n(37151),c="Checkbox",[m,f]=(0,r.b)(c),[g,b]=m(c),v=i.forwardRef((e,t)=>{let{__scopeCheckbox:n,name:r,checked:s,defaultChecked:l,required:p,disabled:c,value:m="on",onCheckedChange:f,form:b,...v}=e,[h,T]=i.useState(null),x=(0,a.e)(t,e=>T(e)),w=i.useRef(!1),P=!h||b||!!h.closest("form"),[C=!1,k]=(0,o.T)({prop:s,defaultProp:l,onChange:f}),_=i.useRef(C);return i.useEffect(()=>{let e=h?.form;if(e){let reset=()=>k(_.current);return e.addEventListener("reset",reset),()=>e.removeEventListener("reset",reset)}},[h,k]),(0,y.jsxs)(g,{scope:n,state:C,disabled:c,children:[(0,y.jsx)(d.WV.button,{type:"button",role:"checkbox","aria-checked":isIndeterminate(C)?"mixed":C,"aria-required":p,"data-state":getState(C),"data-disabled":c?"":void 0,disabled:c,value:m,...v,ref:x,onKeyDown:(0,u.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,u.M)(e.onClick,e=>{k(e=>!!isIndeterminate(e)||!e),P&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())})}),P&&(0,y.jsx)(BubbleInput,{control:h,bubbles:!w.current,name:r,value:m,checked:C,required:p,disabled:c,form:b,style:{transform:"translateX(-100%)"},defaultChecked:!isIndeterminate(l)&&l})]})});v.displayName=c;var h="CheckboxIndicator",T=i.forwardRef((e,t)=>{let{__scopeCheckbox:n,forceMount:i,...a}=e,r=b(h,n);return(0,y.jsx)(p.z,{present:i||isIndeterminate(r.state)||!0===r.state,children:(0,y.jsx)(d.WV.span,{"data-state":getState(r.state),"data-disabled":r.disabled?"":void 0,...a,ref:t,style:{pointerEvents:"none",...e.style}})})});T.displayName=h;var BubbleInput=e=>{let{control:t,checked:n,bubbles:a=!0,defaultChecked:r,...u}=e,o=i.useRef(null),p=(0,s.D)(n),d=(0,l.t)(t);i.useEffect(()=>{let e=o.current,t=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(t,"checked"),r=i.set;if(p!==n&&r){let t=new Event("click",{bubbles:a});e.indeterminate=isIndeterminate(n),r.call(e,!isIndeterminate(n)&&n),e.dispatchEvent(t)}},[p,n,a]);let c=i.useRef(!isIndeterminate(n)&&n);return(0,y.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r??c.current,...u,tabIndex:-1,ref:o,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function isIndeterminate(e){return"indeterminate"===e}function getState(e){return isIndeterminate(e)?"indeterminate":e?"checked":"unchecked"}var x=v,w=T},62693:function(e,t,n){"use strict";n.d(t,{Dx:function(){return K},VY:function(){return Z},aV:function(){return J},dk:function(){return Y},fC:function(){return V},h_:function(){return $},x8:function(){return Q},xz:function(){return H}});var i=n(19605),a=n(69237),r=n(72288),u=n(57787),o=n(84394),s=n(3897),l=n(28221),p=n(23999),d=n(3798),y=n(37100),c=n(81555),m=n(69805),f=n(14205),g=n(62890),b=n(20007),v=n(37151),h="Dialog",[T,x]=(0,u.b)(h),[w,P]=T(h),Dialog=e=>{let{__scopeDialog:t,children:n,open:a,defaultOpen:r,onOpenChange:u,modal:l=!0}=e,p=i.useRef(null),d=i.useRef(null),[y=!1,c]=(0,s.T)({prop:a,defaultProp:r,onChange:u});return(0,v.jsx)(w,{scope:t,triggerRef:p,contentRef:d,contentId:(0,o.M)(),titleId:(0,o.M)(),descriptionId:(0,o.M)(),open:y,onOpenChange:c,onOpenToggle:i.useCallback(()=>c(e=>!e),[c]),modal:l,children:n})};Dialog.displayName=h;var C="DialogTrigger",k=i.forwardRef((e,t)=>{let{__scopeDialog:n,...i}=e,u=P(C,n),o=(0,r.e)(t,u.triggerRef);return(0,v.jsx)(c.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":u.open,"aria-controls":u.contentId,"data-state":getState(u.open),...i,ref:o,onClick:(0,a.M)(e.onClick,u.onOpenToggle)})});k.displayName=C;var _="DialogPortal",[M,I]=T(_,{forceMount:void 0}),DialogPortal=e=>{let{__scopeDialog:t,forceMount:n,children:a,container:r}=e,u=P(_,t);return(0,v.jsx)(M,{scope:t,forceMount:n,children:i.Children.map(a,e=>(0,v.jsx)(y.z,{present:n||u.open,children:(0,v.jsx)(d.h,{asChild:!0,container:r,children:e})}))})};DialogPortal.displayName=_;var S="DialogOverlay",O=i.forwardRef((e,t)=>{let n=I(S,e.__scopeDialog),{forceMount:i=n.forceMount,...a}=e,r=P(S,e.__scopeDialog);return r.modal?(0,v.jsx)(y.z,{present:i||r.open,children:(0,v.jsx)(j,{...a,ref:t})}):null});O.displayName=S;var j=i.forwardRef((e,t)=>{let{__scopeDialog:n,...i}=e,a=P(S,n);return(0,v.jsx)(f.Z,{as:b.g7,allowPinchZoom:!0,shards:[a.contentRef],children:(0,v.jsx)(c.WV.div,{"data-state":getState(a.open),...i,ref:t,style:{pointerEvents:"auto",...i.style}})})}),E="DialogContent",D=i.forwardRef((e,t)=>{let n=I(E,e.__scopeDialog),{forceMount:i=n.forceMount,...a}=e,r=P(E,e.__scopeDialog);return(0,v.jsx)(y.z,{present:i||r.open,children:r.modal?(0,v.jsx)(R,{...a,ref:t}):(0,v.jsx)(z,{...a,ref:t})})});D.displayName=E;var R=i.forwardRef((e,t)=>{let n=P(E,e.__scopeDialog),u=i.useRef(null),o=(0,r.e)(t,n.contentRef,u);return i.useEffect(()=>{let e=u.current;if(e)return(0,g.Ry)(e)},[]),(0,v.jsx)(N,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:(0,a.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,i=2===t.button||n;i&&e.preventDefault()}),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault())})}),z=i.forwardRef((e,t)=>{let n=P(E,e.__scopeDialog),a=i.useRef(!1),r=i.useRef(!1);return(0,v.jsx)(N,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(a.current||n.triggerRef.current?.focus(),t.preventDefault()),a.current=!1,r.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(r.current=!0));let i=t.target,u=n.triggerRef.current?.contains(i);u&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&r.current&&t.preventDefault()}})}),N=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:u,onCloseAutoFocus:o,...s}=e,d=P(E,n),y=i.useRef(null),c=(0,r.e)(t,y);return(0,m.EW)(),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:u,onUnmountAutoFocus:o,children:(0,v.jsx)(l.XB,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":getState(d.open),...s,ref:c,onDismiss:()=>d.onOpenChange(!1)})}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(TitleWarning,{titleId:d.titleId}),(0,v.jsx)(DescriptionWarning,{contentRef:y,descriptionId:d.descriptionId})]})]})}),A="DialogTitle",L=i.forwardRef((e,t)=>{let{__scopeDialog:n,...i}=e,a=P(A,n);return(0,v.jsx)(c.WV.h2,{id:a.titleId,...i,ref:t})});L.displayName=A;var F="DialogDescription",q=i.forwardRef((e,t)=>{let{__scopeDialog:n,...i}=e,a=P(F,n);return(0,v.jsx)(c.WV.p,{id:a.descriptionId,...i,ref:t})});q.displayName=F;var W="DialogClose",U=i.forwardRef((e,t)=>{let{__scopeDialog:n,...i}=e,r=P(W,n);return(0,v.jsx)(c.WV.button,{type:"button",...i,ref:t,onClick:(0,a.M)(e.onClick,()=>r.onOpenChange(!1))})});function getState(e){return e?"open":"closed"}U.displayName=W;var B="DialogTitleWarning",[X,G]=(0,u.k)(B,{contentName:E,titleName:A,docsSlug:"dialog"}),TitleWarning=({titleId:e})=>{let t=G(B),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{if(e){let t=document.getElementById(e);t||console.error(n)}},[n,e]),null},DescriptionWarning=({contentRef:e,descriptionId:t})=>{let n=G("DialogDescriptionWarning"),a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;return i.useEffect(()=>{let n=e.current?.getAttribute("aria-describedby");if(t&&n){let e=document.getElementById(t);e||console.warn(a)}},[a,e,t]),null},V=Dialog,H=k,$=DialogPortal,J=O,Z=D,K=L,Y=q,Q=U},12741:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint24","name":"fee","type":"uint24"},{"indexed":true,"internalType":"int24","name":"tickSpacing","type":"int24"}],"name":"FeeAmountEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":true,"internalType":"uint24","name":"fee","type":"uint24"},{"indexed":false,"internalType":"int24","name":"tickSpacing","type":"int24"},{"indexed":false,"internalType":"address","name":"pool","type":"address"}],"name":"PoolCreated","type":"event"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"}],"name":"createPool","outputs":[{"internalType":"address","name":"pool","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"int24","name":"tickSpacing","type":"int24"}],"name":"enableFeeAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint24","name":"fee","type":"uint24"}],"name":"feeAmountTickSpacing","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"}],"name":"getPool","outputs":[{"internalType":"address","name":"pool","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},74270:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"int24","name":"tickLower","type":"int24"},{"indexed":true,"internalType":"int24","name":"tickUpper","type":"int24"},{"indexed":false,"internalType":"uint128","name":"amount","type":"uint128"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":true,"internalType":"int24","name":"tickLower","type":"int24"},{"indexed":true,"internalType":"int24","name":"tickUpper","type":"int24"},{"indexed":false,"internalType":"uint128","name":"amount0","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"amount1","type":"uint128"}],"name":"Collect","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint128","name":"amount0","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"amount1","type":"uint128"}],"name":"CollectProtocol","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paid0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paid1","type":"uint256"}],"name":"Flash","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"observationCardinalityNextOld","type":"uint16"},{"indexed":false,"internalType":"uint16","name":"observationCardinalityNextNew","type":"uint16"}],"name":"IncreaseObservationCardinalityNext","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"indexed":false,"internalType":"int24","name":"tick","type":"int24"}],"name":"Initialize","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"int24","name":"tickLower","type":"int24"},{"indexed":true,"internalType":"int24","name":"tickUpper","type":"int24"},{"indexed":false,"internalType":"uint128","name":"amount","type":"uint128"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"feeProtocol0Old","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"feeProtocol1Old","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"feeProtocol0New","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"feeProtocol1New","type":"uint8"}],"name":"SetFeeProtocol","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"int256","name":"amount0","type":"int256"},{"indexed":false,"internalType":"int256","name":"amount1","type":"int256"},{"indexed":false,"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"indexed":false,"internalType":"uint128","name":"liquidity","type":"uint128"},{"indexed":false,"internalType":"int24","name":"tick","type":"int24"}],"name":"Swap","type":"event"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint128","name":"amount","type":"uint128"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint128","name":"amount0Requested","type":"uint128"},{"internalType":"uint128","name":"amount1Requested","type":"uint128"}],"name":"collect","outputs":[{"internalType":"uint128","name":"amount0","type":"uint128"},{"internalType":"uint128","name":"amount1","type":"uint128"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint128","name":"amount0Requested","type":"uint128"},{"internalType":"uint128","name":"amount1Requested","type":"uint128"}],"name":"collectProtocol","outputs":[{"internalType":"uint128","name":"amount0","type":"uint128"},{"internalType":"uint128","name":"amount1","type":"uint128"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"flash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"}],"name":"increaseObservationCardinalityNext","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxLiquidityPerTick","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint128","name":"amount","type":"uint128"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32[]","name":"secondsAgos","type":"uint32[]"}],"name":"observe","outputs":[{"internalType":"int56[]","name":"tickCumulatives","type":"int56[]"},{"internalType":"uint160[]","name":"secondsPerLiquidityCumulativeX128s","type":"uint160[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"feeProtocol0","type":"uint8"},{"internalType":"uint8","name":"feeProtocol1","type":"uint8"}],"name":"setFeeProtocol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"snapshotCumulativesInside","outputs":[{"internalType":"int56","name":"tickCumulativeInside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityInsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsInside","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bool","name":"zeroForOne","type":"bool"},{"internalType":"int256","name":"amountSpecified","type":"int256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[{"internalType":"int256","name":"amount0","type":"int256"},{"internalType":"int256","name":"amount1","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tickSpacing","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')}}]);