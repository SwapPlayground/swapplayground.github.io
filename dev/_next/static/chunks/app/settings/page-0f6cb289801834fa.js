(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{21761:function(e,t,r){"use strict";r.d(t,{Z:function(){return createReactComponent}});var n=r(19605),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),createReactComponent=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:s=24,strokeWidth:i=2,children:o,...l},d)=>(0,n.createElement)("svg",{ref:d,...a,width:s,height:s,stroke:r,strokeWidth:i,className:`lucide lucide-${toKebabCase(e)}`,...l},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...(Array.isArray(o)?o:[o])||[]]));return r.displayName=`${e}`,r}},67919:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(21761);let a=(0,n.Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},64427:function(e,t,r){Promise.resolve().then(r.bind(r,46222))},46222:function(e,t,r){"use strict";r.r(t);var n=r(37151),a=r(96111),s=r(64751),i=r(10009),o=r(19605),l=r(3306),d=r(67919),c=r(10649);t.default=function(){let[e,t]=(0,o.useState)(""),[r,u]=(0,o.useState)(""),[f,p]=(0,o.useState)(""),[m,h]=(0,o.useState)(""),[x,g]=(0,o.useState)(""),[b,v]=(0,o.useState)(!1),[y,j]=(0,o.useState)(!1),[w,N]=(0,o.useState)(!1),[E,R]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=localStorage.getItem("ETH_RPC_URL");null==e?t(c._.rpcNode):t(e);let r=localStorage.getItem("SWAP_SERVICE_TYPE");null==r?p("EMBEDDED"):p(r);let n=localStorage.getItem("SWAP_SERVICE_URL");null==n?h(c._.basePath+"/chain-app/swap/v6.0/11155111"):h(n)},[t,p,h]),(0,o.useEffect)(()=>{b&&(u(""),g(""),j(!0),fetch(e,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:'{"method":"eth_chainId","params":[],"id":42,"jsonrpc":"2.0"}'}).then(function(e){e.ok||u(e.status+" "+e.statusText),j(!1)}).catch(function(e){u(e.toString()),j(!1)}),localStorage.setItem("SWAP_SERVICE_TYPE",f),"REMOTE"==f&&(N(!0),fetch(m+"/liquidity-sources",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}).then(function(e){e.ok||g(e.status+" "+e.statusText),N(!1)}).catch(function(e){g(e.toString()),N(!1)})),R(!0))},[b,e,f,m,N,j,R]),(0,o.useEffect)(()=>{!E||y||w||(""==r&&""==x&&(localStorage.setItem("ETH_RPC_URL",e),localStorage.setItem("SWAP_SERVICE_TYPE",f),localStorage.setItem("SWAP_SERVICE_URL",m),window.location.reload()),v(!1),R(!1))},[y,w,E,R,v,r,x,e,f,m]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:"container grid items-center gap-6 pb-8 pt-6 md:py-10",children:(0,n.jsx)("div",{className:"flex max-w-[980px] flex-col items-start gap-2",children:(0,n.jsxs)(s.Zb,{children:[(0,n.jsx)(s.Ol,{children:(0,n.jsx)(s.ll,{children:"Settings"})}),(0,n.jsx)(s.aY,{children:(0,n.jsxs)("div",{className:"min-w-[350px] space-y-1",children:[(0,n.jsx)("p",{className:"text-sm font-medium leading-none",children:"RPC URL"}),(0,n.jsx)(i.I,{type:"text",id:"RPC URL",defaultValue:e,onChange:e=>{t(e.target.value)}}),""!=r&&(0,n.jsxs)("p",{className:"text-sm font-medium leading-none text-red-600",children:["Invalid RPC URL: ",r]}),(0,n.jsx)("p",{className:"text-sm font-medium leading-none",children:"Swap Service Type"}),(0,n.jsxs)(l.Ph,{onValueChange:e=>{p(e)},value:f,children:[(0,n.jsx)(l.i4,{id:"sorType",children:(0,n.jsx)(l.ki,{placeholder:"Select a value"})}),(0,n.jsxs)(l.Bw,{position:"popper",children:[(0,n.jsx)(l.Ql,{value:"EMBEDDED",children:"Embedded"},"EMBEDDED"),(0,n.jsx)(l.Ql,{value:"REMOTE",disabled:c._.embeddedRouterOnly,children:"Remote"},"REMOTE")]})]}),"REMOTE"==f&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"text-sm font-medium leading-none",children:"Swap Service URL"}),(0,n.jsx)(i.I,{type:"text",id:"sorURL",defaultValue:m,onChange:e=>{h(e.target.value)}}),""!=x&&(0,n.jsxs)("p",{className:"text-sm font-medium leading-none text-red-600",children:["Invalid Swap Service URL: ",x]})]})]})}),(0,n.jsx)(s.eW,{children:(0,n.jsxs)("button",{type:"button",onClick:()=>{v(!0)},className:(0,a.d)(),children:[b?(0,n.jsx)(d.Z,{className:"mr-2 w-4 animate-spin"}):(0,n.jsx)(n.Fragment,{}),b?"Validating...":"Save"]})})]})})})})}},96111:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return d}});var n=r(37151),a=r(19605),s=r(20007),i=r(73918),o=r(91608);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:a,size:i,className:r})),ref:t,...c})});d.displayName="Button"},64751:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var n=r(37151),a=r(19605),s=r(91608);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});i.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});o.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},10009:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(37151),a=r(19605),s=r(91608);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},3306:function(e,t,r){"use strict";r.d(t,{Bw:function(){return h},Ph:function(){return c},Ql:function(){return g},i4:function(){return f},ki:function(){return u}});var n=r(37151),a=r(19605),s=r(93881),i=r(12787),o=r(8529),l=r(20803),d=r(91608);let c=s.fC;s.ZA;let u=s.B4,f=a.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsxs)(s.xz,{ref:t,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...o,children:[a,(0,n.jsx)(s.JO,{asChild:!0,children:(0,n.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});f.displayName=s.xz.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.u_,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(o.Z,{className:"h-4 w-4"})})});p.displayName=s.u_.displayName;let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.$G,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})});m.displayName=s.$G.displayName;let h=a.forwardRef((e,t)=>{let{className:r,children:a,position:i="popper",...o}=e;return(0,n.jsx)(s.h_,{children:(0,n.jsxs)(s.VY,{ref:t,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:i,...o,children:[(0,n.jsx)(p,{}),(0,n.jsx)(s.l_,{className:(0,d.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,n.jsx)(m,{})]})})});h.displayName=s.VY.displayName;let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.__,{ref:t,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...a})});x.displayName=s.__.displayName;let g=a.forwardRef((e,t)=>{let{className:r,children:a,...i}=e;return(0,n.jsxs)(s.ck,{ref:t,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(s.wU,{children:(0,n.jsx)(l.Z,{className:"h-4 w-4"})})}),(0,n.jsx)(s.eT,{children:a})]})});g.displayName=s.ck.displayName;let b=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...a})});b.displayName=s.Z0.displayName},10649:function(e,t,r){"use strict";r.d(t,{_:function(){return n}});let n={embeddedRouterOnly:!0,rpcNode:"https://sepolia.drpc.org",basePath:"/dev",spFactoryAddress:"0x728Cba6a26c4D2C781A4EaCb510646d656f1509d",nfpmAddress:"0x1238536071E1c677A632429e3655c799b22cDA52",uniswapV3FactoryAddress:"0x0227628f3F023bb0B980b67D528571c95c6DaC1c",multiCallAddress:"0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07",sptAddress:"0x8605E860e5173104241259Aaa799071ab9ffD62A",accountChainExplorerPrefix:e=>31337===e?"https://alanverbner.github.io/lightweight-eth-explorer/account/":"https://sepolia.etherscan.io//address/",transactionChainExplorerPrefix:e=>31337===e?"https://alanverbner.github.io/lightweight-eth-explorer/transaction/":"https://sepolia.etherscan.io//tx/",blockChainExplorerPrefix:e=>31337===e?"https://alanverbner.github.io/lightweight-eth-explorer/block/":"https://sepolia.etherscan.io//block/"}},91608:function(e,t,r){"use strict";r.d(t,{cn:function(){return cn}});var n=r(35209),a=r(82701);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m)((0,n.W)(t))}},81555:function(e,t,r){"use strict";r.d(t,{WV:function(){return o},jH:function(){return dispatchDiscreteCustomEvent}});var n=r(19605),a=r(69756),s=r(20007),i=r(37151),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...a}=e,o=n?s.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function dispatchDiscreteCustomEvent(e,t){e&&a.flushSync(()=>e.dispatchEvent(t))}}},function(e){e.O(0,[555,312,67,951,210,744],function(){return e(e.s=64427)}),_N_E=e.O()}]);