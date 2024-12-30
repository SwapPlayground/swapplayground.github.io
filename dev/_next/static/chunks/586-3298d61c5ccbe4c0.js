"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{27862:function(e,t,n){n.d(t,{VY:function(){return ea},h4:function(){return en},ck:function(){return et},fC:function(){return ee},xz:function(){return er}});var r=n(19605),a=n(57787),o=n(39113),i=n(72288),c=n(69237),s=n(3897),l=n(81555),u=n(57811),d=n(37100),p=n(84394),f=n(37151),b="Collapsible",[h,m]=(0,a.b)(b),[g,w]=h(b),v=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:a,defaultOpen:o,disabled:i,onOpenChange:c,...u}=e,[d=!1,b]=(0,s.T)({prop:a,defaultProp:o,onChange:c});return(0,f.jsx)(g,{scope:n,disabled:i,contentId:(0,p.M)(),open:d,onOpenToggle:r.useCallback(()=>b(e=>!e),[b]),children:(0,f.jsx)(l.WV.div,{"data-state":getState(d),"data-disabled":i?"":void 0,...u,ref:t})})});v.displayName=b;var y="CollapsibleTrigger",k=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,a=w(y,n);return(0,f.jsx)(l.WV.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":getState(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...r,ref:t,onClick:(0,c.M)(e.onClick,a.onOpenToggle)})});k.displayName=y;var x="CollapsibleContent",N=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,a=w(x,e.__scopeCollapsible);return(0,f.jsx)(d.z,{present:n||a.open,children:({present:e})=>(0,f.jsx)(R,{...r,ref:t,present:e})})});N.displayName=x;var R=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:a,children:o,...c}=e,s=w(x,n),[d,p]=r.useState(a),b=r.useRef(null),h=(0,i.e)(t,b),m=r.useRef(0),g=m.current,v=r.useRef(0),y=v.current,k=s.open||d,N=r.useRef(k),R=r.useRef();return r.useEffect(()=>{let e=requestAnimationFrame(()=>N.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=b.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();m.current=t.height,v.current=t.width,N.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),p(a)}},[s.open,a]),(0,f.jsx)(l.WV.div,{"data-state":getState(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!k,...c,ref:h,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style},children:k&&o})});function getState(e){return e?"open":"closed"}var T=n(94201),I="Accordion",C=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[B,P,_]=(0,o.B)(I),[j,A]=(0,a.b)(I,[_,m]),F=m(),G=r.forwardRef((e,t)=>{let{type:n,...r}=e;return(0,f.jsx)(B.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,f.jsx)(U,{...r,ref:t}):(0,f.jsx)(E,{...r,ref:t})})});G.displayName=I;var[D,S]=j(I),[H,q]=j(I,{collapsible:!1}),E=r.forwardRef((e,t)=>{let{value:n,defaultValue:a,onValueChange:o=()=>{},collapsible:i=!1,...c}=e,[l,u]=(0,s.T)({prop:n,defaultProp:a,onChange:o});return(0,f.jsx)(D,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:u,onItemClose:r.useCallback(()=>i&&u(""),[i,u]),children:(0,f.jsx)(H,{scope:e.__scopeAccordion,collapsible:i,children:(0,f.jsx)(L,{...c,ref:t})})})}),U=r.forwardRef((e,t)=>{let{value:n,defaultValue:a,onValueChange:o=()=>{},...i}=e,[c=[],l]=(0,s.T)({prop:n,defaultProp:a,onChange:o}),u=r.useCallback(e=>l((t=[])=>[...t,e]),[l]),d=r.useCallback(e=>l((t=[])=>t.filter(t=>t!==e)),[l]);return(0,f.jsx)(D,{scope:e.__scopeAccordion,value:c,onItemOpen:u,onItemClose:d,children:(0,f.jsx)(H,{scope:e.__scopeAccordion,collapsible:!0,children:(0,f.jsx)(L,{...i,ref:t})})})}),[M,O]=j(I),L=r.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:a,dir:o,orientation:s="vertical",...u}=e,d=r.useRef(null),p=(0,i.e)(d,t),b=P(n),h=(0,T.gm)(o),m="ltr"===h,g=(0,c.M)(e.onKeyDown,e=>{if(!C.includes(e.key))return;let t=e.target,n=b().filter(e=>!e.ref.current?.disabled),r=n.findIndex(e=>e.ref.current===t),a=n.length;if(-1===r)return;e.preventDefault();let o=r,i=a-1,moveNext=()=>{(o=r+1)>i&&(o=0)},movePrev=()=>{(o=r-1)<0&&(o=i)};switch(e.key){case"Home":o=0;break;case"End":o=i;break;case"ArrowRight":"horizontal"===s&&(m?moveNext():movePrev());break;case"ArrowDown":"vertical"===s&&moveNext();break;case"ArrowLeft":"horizontal"===s&&(m?movePrev():moveNext());break;case"ArrowUp":"vertical"===s&&movePrev()}let c=o%a;n[c].ref.current?.focus()});return(0,f.jsx)(M,{scope:n,disabled:a,direction:o,orientation:s,children:(0,f.jsx)(B.Slot,{scope:n,children:(0,f.jsx)(l.WV.div,{...u,"data-orientation":s,ref:p,onKeyDown:a?void 0:g})})})}),V="AccordionItem",[W,z]=j(V),K=r.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...a}=e,o=O(V,n),i=S(V,n),c=F(n),s=(0,p.M)(),l=r&&i.value.includes(r)||!1,u=o.disabled||e.disabled;return(0,f.jsx)(W,{scope:n,open:l,disabled:u,triggerId:s,children:(0,f.jsx)(v,{"data-orientation":o.orientation,"data-state":dist_getState(l),...c,...a,ref:t,disabled:u,open:l,onOpenChange:e=>{e?i.onItemOpen(r):i.onItemClose(r)}})})});K.displayName=V;var Y="AccordionHeader",$=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,a=O(I,n),o=z(Y,n);return(0,f.jsx)(l.WV.h3,{"data-orientation":a.orientation,"data-state":dist_getState(o.open),"data-disabled":o.disabled?"":void 0,...r,ref:t})});$.displayName=Y;var J="AccordionTrigger",Q=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,a=O(I,n),o=z(J,n),i=q(J,n),c=F(n);return(0,f.jsx)(B.ItemSlot,{scope:n,children:(0,f.jsx)(k,{"aria-disabled":o.open&&!i.collapsible||void 0,"data-orientation":a.orientation,id:o.triggerId,...c,...r,ref:t})})});Q.displayName=J;var Z="AccordionContent",X=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,a=O(I,n),o=z(Z,n),i=F(n);return(0,f.jsx)(N,{role:"region","aria-labelledby":o.triggerId,"data-orientation":a.orientation,...i,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function dist_getState(e){return e?"open":"closed"}X.displayName=Z;var ee=G,et=K,en=$,er=Q,ea=X},12212:function(e,t,n){n.d(t,{z:function(){return getBlockNumber}});let r=new Map,a=new Map;async function withCache(e,{cacheKey:t,cacheTime:n=Number.POSITIVE_INFINITY}){let o=function(e){let buildCache=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),t=buildCache(e,r),n=buildCache(e,a);return{clear:()=>{t.clear(),n.clear()},promise:t,response:n}}(t),i=o.response.get();if(i&&n>0){let e=new Date().getTime()-i.created.getTime();if(e<n)return i.data}let c=o.promise.get();c||(c=e(),o.promise.set(c));try{let e=await c;return o.response.set({created:new Date,data:e}),e}finally{o.promise.clear()}}let cacheKey=e=>`blockNumber.${e}`;async function getBlockNumber(e,{cacheTime:t=e.cacheTime}={}){let n=await withCache(()=>e.request({method:"eth_blockNumber"}),{cacheKey:cacheKey(e.uid),cacheTime:t});return BigInt(n)}},79125:function(e,t,n){n.d(t,{q:function(){return watchBlockNumber}});var r=n(44927),a=n(69526),o=n(41306),i=n(71422),c=n(10449),s=n(12212);function watchBlockNumber(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:l,onError:u,poll:d,pollingInterval:p=e.pollingInterval}){let f;let b=void 0!==d?d:"webSocket"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type);return b?(()=>{let r=(0,c.P)(["watchBlockNumber",e.uid,t,n,p]);return(0,o.N7)(r,{onBlockNumber:l,onError:u},r=>(function(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let a=!0,unwatch=()=>a=!1,watch=async()=>{let o;t&&(o=await e({unpoll:unwatch}));let c=await n?.(o)??r;await (0,i.D)(c);let poll=async()=>{a&&(await e({unpoll:unwatch}),await (0,i.D)(r),poll())};poll()};return watch(),unwatch})(async()=>{try{let t=await (0,a.s)(e,s.z,"getBlockNumber")({cacheTime:0});if(f){if(t===f)return;if(t-f>1&&n)for(let e=f+1n;e<t;e++)r.onBlockNumber(e,f),f=e}(!f||t>f)&&(r.onBlockNumber(t,f),f=t)}catch(e){r.onError?.(e)}},{emitOnBegin:t,interval:p}))})():(()=>{let a=(0,c.P)(["watchBlockNumber",e.uid,t,n]);return(0,o.N7)(a,{onBlockNumber:l,onError:u},t=>{let n=!0,unsubscribe=()=>n=!1;return(async()=>{try{let a=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type);return t?t.value:e.transport}return e.transport})(),{unsubscribe:o}=await a.subscribe({params:["newHeads"],onData(e){if(!n)return;let a=(0,r.y_)(e.result?.number);t.onBlockNumber(a,f),f=a},onError(e){t.onError?.(e)}});unsubscribe=o,n||unsubscribe()}catch(e){u?.(e)}})(),()=>unsubscribe()})})()}},41306:function(e,t,n){n.d(t,{N7:function(){return observe}});let r=new Map,a=new Map,o=0;function observe(e,t,n){let i=++o,getListeners=()=>r.get(e)||[],unsubscribe=()=>{let t=getListeners();r.set(e,t.filter(e=>e.id!==i))},unwatch=()=>{let t=a.get(e);1===getListeners().length&&t&&t(),unsubscribe()},c=getListeners();if(r.set(e,[...c,{id:i,fns:t}]),c&&c.length>0)return unwatch;let s={};for(let e in t)s[e]=(...t)=>{let n=getListeners();if(0!==n.length)for(let r of n)r.fns[e]?.(...t)};let l=n(s);return"function"==typeof l&&a.set(e,l),unwatch}},26217:function(e,t,n){n.d(t,{A:function(){return useWaitForTransactionReceipt}});var r=n(44927),a=n(64716),o=n(49546),i=n(69526),c=n(41306),s=n(64144),l=n(10449),u=n(2716),d=n(61954),p=n(86519);async function getTransaction(e,{blockHash:t,blockNumber:n,blockTag:r,hash:a,index:i}){let c=r||"latest",s=void 0!==n?(0,d.eC)(n):void 0,l=null;if(a?l=await e.request({method:"eth_getTransactionByHash",params:[a]},{dedupe:!0}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,d.eC)(i)]},{dedupe:!0}):(s||c)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||c,(0,d.eC)(i)]},{dedupe:!!s})),!l)throw new o.Bh({blockHash:t,blockNumber:n,blockTag:c,hash:a,index:i});let u=e.chain?.formatters?.transaction?.format||p.Tr;return u(l)}let f={"0x0":"reverted","0x1":"success"};function formatTransactionReceipt(e){let t={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>(function(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}})(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,r.ly)(e.transactionIndex):null,status:e.status?f[e.status]:null,type:e.type?p.c8[e.type]||e.type:null};return e.blobGasPrice&&(t.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(t.blobGasUsed=BigInt(e.blobGasUsed)),t}async function getTransactionReceipt(e,{hash:t}){let n=await e.request({method:"eth_getTransactionReceipt",params:[t]},{dedupe:!0});if(!n)throw new o.Yb({hash:t});let r=e.chain?.formatters?.transactionReceipt?.format||formatTransactionReceipt;return r(n)}var b=n(79125);async function waitForTransactionReceipt(e,{confirmations:t=1,hash:n,onReplaced:r,pollingInterval:d=e.pollingInterval,retryCount:p=6,retryDelay:f=({count:e})=>200*~~(1<<e),timeout:h=18e4}){let m,g,w;let v=(0,l.P)(["waitForTransactionReceipt",e.uid,n]),y=!1;return new Promise((l,k)=>{h&&setTimeout(()=>k(new o.mc({hash:n})),h);let x=(0,c.N7)(v,{onReplaced:r,resolve:l,reject:k},r=>{let c=(0,i.s)(e,b.q,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:d,async onBlockNumber(l){let done=e=>{c(),e(),x()},d=l;if(!y)try{if(w){if(t>1&&(!w.blockNumber||d-w.blockNumber+1n<t))return;done(()=>r.resolve(w));return}if(m||(y=!0,await (0,s.J)(async()=>{(m=await (0,i.s)(e,getTransaction,"getTransaction")({hash:n})).blockNumber&&(d=m.blockNumber)},{delay:f,retryCount:p}),y=!1),w=await (0,i.s)(e,getTransactionReceipt,"getTransactionReceipt")({hash:n}),t>1&&(!w.blockNumber||d-w.blockNumber+1n<t))return;done(()=>r.resolve(w))}catch(n){if(n instanceof o.Bh||n instanceof o.Yb){if(!m){y=!1;return}try{g=m,y=!0;let n=await (0,s.J)(()=>(0,i.s)(e,u.Q,"getBlock")({blockNumber:d,includeTransactions:!0}),{delay:f,retryCount:p,shouldRetry:({error:e})=>e instanceof a.f});y=!1;let o=n.transactions.find(({from:e,nonce:t})=>e===g.from&&t===g.nonce);if(!o||(w=await (0,i.s)(e,getTransactionReceipt,"getTransactionReceipt")({hash:o.hash}),t>1&&(!w.blockNumber||d-w.blockNumber+1n<t)))return;let c="replaced";o.to===g.to&&o.value===g.value?c="repriced":o.from===o.to&&0n===o.value&&(c="cancelled"),done(()=>{r.onReplaced?.({reason:c,replacedTransaction:g,transaction:o,transactionReceipt:w}),r.resolve(w)})}catch(e){done(()=>r.reject(e))}}else done(()=>r.reject(n))}}})})})}var h=n(27455),m=n(32451);async function waitForTransactionReceipt_waitForTransactionReceipt(e,t){let{chainId:n,timeout:a=0,...o}=t,i=e.getClient({chainId:n}),c=(0,m.s)(i,waitForTransactionReceipt,"waitForTransactionReceipt"),s=await c({...o,timeout:a});if("reverted"===s.status){let e=(0,m.s)(i,getTransaction,"getTransaction"),t=await e({hash:s.transactionHash}),n=(0,m.s)(i,h.R,"call"),a=await n({...t,gasPrice:"eip1559"!==t.type?t.gasPrice:void 0,maxFeePerGas:"eip1559"===t.type?t.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===t.type?t.maxPriorityFeePerGas:void 0}),o=a?.data?(0,r.rR)(`0x${a.data.substring(138)}`):"unknown reason";throw Error(o)}return{...s,chainId:i.chain.id}}var g=n(38742),w=n(6575),v=n(81286),y=n(83401);function useWaitForTransactionReceipt(e={}){let{hash:t,query:n={}}=e,r=(0,y.Z)(e),a=(0,v.x)({config:r}),o=function(e,t={}){return{async queryFn({queryKey:n}){let{hash:r,...a}=n[1];if(!r)throw Error("hash is required");return waitForTransactionReceipt_waitForTransactionReceipt(e,{...a,onReplaced:t.onReplaced,hash:r})},queryKey:function(e={}){let{onReplaced:t,...n}=e;return["waitForTransactionReceipt",(0,g.OP)(n)]}(t)}}(r,{...e,chainId:e.chainId??a}),i=!!(t&&(n.enabled??!0));return(0,w.aM)({...n,...o,enabled:i})}}}]);