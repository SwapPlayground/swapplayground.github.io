(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{49622:function(e,t,n){Promise.resolve().then(n.bind(n,14331))},14331:function(e,t,n){"use strict";n.r(t);var r=n(37151),c=n(96111),s=n(64751),o=n(47934),i=n(16785),a=n(41521);t.default=function(){let e=(0,o.m)(),{connectors:t,connect:n,status:u,error:d}=(0,i.$)(),{disconnect:l}=(0,a.q)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:"container grid items-center gap-6 pb-8 pt-6 md:py-10",children:(0,r.jsxs)("div",{className:"flex max-w-[980px] flex-col items-start gap-2",children:[(0,r.jsx)("p",{className:"max-w-[900px] text-lg text-muted-foreground",children:"This page shows details about the connected wallet. Please use the top right multi purpose wallet button to connect your wallet."}),(0,r.jsxs)(s.Zb,{children:[(0,r.jsxs)(s.Ol,{children:[(0,r.jsx)(s.ll,{children:"Account"}),e.isConnected?(0,r.jsxs)(s.SZ,{children:["Wallet:  ",e.connector.name," "]}):(0,r.jsx)(s.SZ,{})]}),(0,r.jsx)(s.aY,{children:(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("p",{className:"text-sm font-medium leading-none",children:"Status"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:e.status}),(0,r.jsx)("p",{className:"text-sm font-medium leading-none",children:"Addresses"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:JSON.stringify(e.addresses)}),(0,r.jsx)("p",{className:"text-sm font-medium leading-none",children:"Chain ID"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:e.chainId})]})}),(0,r.jsx)(s.eW,{children:"connected"===e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>l(),className:(0,c.d)(),children:"Disconnect"})})]})]})})})}},96111:function(e,t,n){"use strict";n.d(t,{d:function(){return a},z:function(){return u}});var r=n(37151),c=n(19605),s=n(20007),o=n(73918),i=n(91608);let a=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=c.forwardRef((e,t)=>{let{className:n,variant:c,size:o,asChild:u=!1,...d}=e,l=u?s.g7:"button";return(0,r.jsx)(l,{className:(0,i.cn)(a({variant:c,size:o,className:n})),ref:t,...d})});u.displayName="Button"},64751:function(e,t,n){"use strict";n.d(t,{Ol:function(){return i},SZ:function(){return u},Zb:function(){return o},aY:function(){return d},eW:function(){return l},ll:function(){return a}});var r=n(37151),c=n(19605),s=n(91608);let o=c.forwardRef((e,t)=>{let{className:n,...c}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...c})});o.displayName="Card";let i=c.forwardRef((e,t)=>{let{className:n,...c}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",n),...c})});i.displayName="CardHeader";let a=c.forwardRef((e,t)=>{let{className:n,...c}=e;return(0,r.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",n),...c})});a.displayName="CardTitle";let u=c.forwardRef((e,t)=>{let{className:n,...c}=e;return(0,r.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",n),...c})});u.displayName="CardDescription";let d=c.forwardRef((e,t)=>{let{className:n,...c}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",n),...c})});d.displayName="CardContent";let l=c.forwardRef((e,t)=>{let{className:n,...c}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",n),...c})});l.displayName="CardFooter"},91608:function(e,t,n){"use strict";n.d(t,{cn:function(){return cn}});var r=n(35209),c=n(82701);function cn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,c.m)((0,r.W)(t))}},16785:function(e,t,n){"use strict";n.d(t,{$:function(){return useConnect}});var r=n(92413),c=n(22076);async function connect(e,t){let n;if((n="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new c.wi;try{e.setState(e=>({...e,status:"connecting"})),n.emitter.emit("message",{type:"connecting"});let r=await n.connect({chainId:t.chainId}),c=r.accounts;return n.emitter.off("connect",e._internal.events.connect),n.emitter.on("change",e._internal.events.change),n.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",n.id),e.setState(e=>({...e,connections:new Map(e.connections).set(n.uid,{accounts:c,chainId:r.chainId,connector:n}),current:n.uid,status:"connected"})),{accounts:c,chainId:r.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}var s=n(19605),o=n(83401),i=n(32148);function useConnect(e={}){let{mutation:t}=e,n=(0,o.Z)(e),{mutate:c,mutateAsync:a,...u}=(0,r.D)({...t,mutationFn:e=>connect(n,e),mutationKey:["connect"]});return(0,s.useEffect)(()=>n.subscribe(({status:e})=>e,(e,t)=>{"connected"===t&&"disconnected"===e&&u.reset()}),[n,u.reset]),{...u,connect:c,connectAsync:a,connectors:(0,i.Y)({config:n})}}},32148:function(e,t,n){"use strict";n.d(t,{Y:function(){return useConnectors}});var r=n(94538);let c=[];function getConnectors(e){let t=e.connectors;return(0,r.v)(c,t)?c:(c=t,t)}var s=n(19605),o=n(83401);function useConnectors(e={}){let t=(0,o.Z)(e);return(0,s.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e._internal.connectors.subscribe((e,t)=>{n(Object.values(e),t)})})(t,{onChange:e}),()=>getConnectors(t),()=>getConnectors(t))}},41521:function(e,t,n){"use strict";n.d(t,{q:function(){return useDisconnect}});var r=n(92413);async function disconnect(e,t={}){let n;if(t.connector)n=t.connector;else{let{connections:t,current:r}=e.state,c=t.get(r);n=c?.connector}let r=e.state.connections;n&&(await n.disconnect(),n.emitter.off("change",e._internal.events.change),n.emitter.off("disconnect",e._internal.events.disconnect),n.emitter.on("connect",e._internal.events.connect),r.delete(n.uid)),e.setState(e=>{if(0===r.size)return{...e,connections:new Map,current:null,status:"disconnected"};let t=r.values().next().value;return{...e,connections:new Map(r),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let n=e.state.connections.get(t)?.connector;if(!n)return;await e.storage?.setItem("recentConnectorId",n.id)}}var c=n(83401),s=n(94538);let o=[];function getConnections(e){let t=[...e.state.connections.values()];return"reconnecting"===e.state.status||(0,s.v)(o,t)?o:(o=t,t)}var i=n(19605);function useDisconnect(e={}){let{mutation:t}=e,n=(0,c.Z)(e),{mutate:o,mutateAsync:a,...u}=(0,r.D)({...t,mutationFn:e=>disconnect(n,e),mutationKey:["disconnect"]});return{...u,connectors:(function(e={}){let t=(0,c.Z)(e);return(0,i.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e.subscribe(()=>getConnections(e),n,{equalityFn:s.v})})(t,{onChange:e}),()=>getConnections(t),()=>getConnections(t))})({config:n}).map(e=>e.connector),disconnect:o,disconnectAsync:a}}}},function(e){e.O(0,[555,934,672,951,210,744],function(){return e(e.s=49622)}),_N_E=e.O()}]);