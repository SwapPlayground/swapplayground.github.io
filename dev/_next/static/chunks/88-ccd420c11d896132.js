"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88],{48553:function(e,t,n){n.d(t,{j:function(){return a}});let a=[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"},{internalType:"uint8",name:"decimals_",type:"uint8"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"allowance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientAllowance",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC20InvalidApprover",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC20InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC20InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"spender",type:"address"}],name:"ERC20InvalidSpender",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}]},42799:function(e,t,n){n.d(t,{pm:function(){return useToast}});var a=n(19605);let i=0,r=new Map,addToRemoveQueue=e=>{if(r.has(e))return;let t=setTimeout(()=>{r.delete(e),dispatch({type:"REMOVE_TOAST",toastId:e})},1e6);r.set(e,t)},reducer=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?addToRemoveQueue(n):e.toasts.forEach(e=>{addToRemoveQueue(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},s=[],p={toasts:[]};function dispatch(e){p=reducer(p,e),s.forEach(e=>{e(p)})}function toast(e){let{...t}=e,n=(i=(i+1)%Number.MAX_SAFE_INTEGER).toString(),dismiss=()=>dispatch({type:"DISMISS_TOAST",toastId:n});return dispatch({type:"ADD_TOAST",toast:{...t,id:n,open:!0,onOpenChange:e=>{e||dismiss()}}}),{id:n,dismiss,update:e=>dispatch({type:"UPDATE_TOAST",toast:{...e,id:n}})}}function useToast(){let[e,t]=a.useState(p);return a.useEffect(()=>(s.push(t),()=>{let e=s.indexOf(t);e>-1&&s.splice(e,1)}),[e]),{...e,toast,dismiss:e=>dispatch({type:"DISMISS_TOAST",toastId:e})}}},96111:function(e,t,n){n.d(t,{d:function(){return u},z:function(){return d}});var a=n(37151),i=n(19605),r=n(20007),s=n(73918),p=n(91608);let u=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,t)=>{let{className:n,variant:i,size:s,asChild:d=!1,...o}=e,y=d?r.g7:"button";return(0,a.jsx)(y,{className:(0,p.cn)(u({variant:i,size:s,className:n})),ref:t,...o})});d.displayName="Button"},64751:function(e,t,n){n.d(t,{Ol:function(){return p},SZ:function(){return d},Zb:function(){return s},aY:function(){return o},eW:function(){return y},ll:function(){return u}});var a=n(37151),i=n(19605),r=n(91608);let s=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...i})});s.displayName="Card";let p=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",n),...i})});p.displayName="CardHeader";let u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,a.jsx)("h3",{ref:t,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",n),...i})});u.displayName="CardTitle";let d=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,a.jsx)("p",{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",n),...i})});d.displayName="CardDescription";let o=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-0",n),...i})});o.displayName="CardContent";let y=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",n),...i})});y.displayName="CardFooter"},9717:function(e,t,n){n.r(t),n.d(t,{default:function(){return AccountLink}});var a=n(37151),i=n(10649),r=n(57867),s=n.n(r),p=n(47934);function AccountLink(e){let{children:t,address:n,className:r}=e,u=(0,p.m)(),d=u.chainId;return(0,a.jsx)(s(),{href:i._.accountChainExplorerPrefix(d)+n,target:"_blank",prefetch:!1,className:r,children:t})}},87707:function(e,t,n){n.d(t,{Q:function(){return s},L:function(){return r}});var a=n(24534),i=n(10649);let r={address:i._.spFactoryAddress,abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"DecimalsMustBeAnEvenNumberLessThan19",type:"error"},{inputs:[],name:"InvalidCallbackSender",type:"error"},{inputs:[],name:"InvalidRatioToSPT",type:"error"},{inputs:[],name:"ManagedTokenWithTheSameDetailsAlreadyExists",type:"error"},{inputs:[],name:"MintingAmountTooBig",type:"error"},{inputs:[],name:"MintingTooOften",type:"error"},{inputs:[],name:"NotManagedToken",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{inputs:[],name:"ReentrancyGuardReentrantCall",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"tokenAddress",type:"address"}],name:"ManagedTokenRegistered",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"DEFAULT_POOL_FEE",outputs:[{internalType:"uint24",name:"",type:"uint24"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_TOKENS_TO_MINT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MINT_DELAY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"collectAllFeesForManagedPools",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"},{internalType:"uint8",name:"decimals_",type:"uint8"},{internalType:"uint256",name:"ratioToSPTX100",type:"uint256"}],name:"deployToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllManagedTokens",outputs:[{components:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"uint8",name:"decimals",type:"uint8"}],internalType:"struct SPFactory.ManagedTokenDetails[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],name:"getManagedTokenDetails",outputs:[{components:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"uint8",name:"decimals",type:"uint8"}],internalType:"struct SPFactory.ManagedTokenDetails",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"positionId",type:"uint256"}],name:"getSPPosition",outputs:[{components:[{internalType:"uint256",name:"positionId",type:"uint256"},{internalType:"uint96",name:"nonce",type:"uint96"},{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"token0",type:"address"},{internalType:"address",name:"token1",type:"address"},{internalType:"uint24",name:"fee",type:"uint24"},{internalType:"int24",name:"tickLower",type:"int24"},{internalType:"int24",name:"tickUpper",type:"int24"},{internalType:"uint128",name:"liquidity",type:"uint128"},{internalType:"uint256",name:"feeGrowthInside0LastX128",type:"uint256"},{internalType:"uint256",name:"feeGrowthInside1LastX128",type:"uint256"},{internalType:"uint128",name:"tokensOwed0",type:"uint128"},{internalType:"uint128",name:"tokensOwed1",type:"uint128"}],internalType:"struct SPFactory.SPPosition",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"getSPPositions",outputs:[{components:[{internalType:"uint256",name:"positionId",type:"uint256"},{internalType:"uint96",name:"nonce",type:"uint96"},{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"token0",type:"address"},{internalType:"address",name:"token1",type:"address"},{internalType:"uint24",name:"fee",type:"uint24"},{internalType:"int24",name:"tickLower",type:"int24"},{internalType:"int24",name:"tickUpper",type:"int24"},{internalType:"uint128",name:"liquidity",type:"uint128"},{internalType:"uint256",name:"feeGrowthInside0LastX128",type:"uint256"},{internalType:"uint256",name:"feeGrowthInside1LastX128",type:"uint256"},{internalType:"uint128",name:"tokensOwed0",type:"uint128"},{internalType:"uint128",name:"tokensOwed1",type:"uint128"}],internalType:"struct SPFactory.SPPosition[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lastMintForAccount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"tokens",type:"address[]"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"spt",outputs:[{internalType:"contract ManagedERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"data",type:"bytes"}],name:"toSPPosition",outputs:[{components:[{internalType:"uint256",name:"positionId",type:"uint256"},{internalType:"uint96",name:"nonce",type:"uint96"},{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"token0",type:"address"},{internalType:"address",name:"token1",type:"address"},{internalType:"uint24",name:"fee",type:"uint24"},{internalType:"int24",name:"tickLower",type:"int24"},{internalType:"int24",name:"tickUpper",type:"int24"},{internalType:"uint128",name:"liquidity",type:"uint128"},{internalType:"uint256",name:"feeGrowthInside0LastX128",type:"uint256"},{internalType:"uint256",name:"feeGrowthInside1LastX128",type:"uint256"},{internalType:"uint128",name:"tokensOwed0",type:"uint128"},{internalType:"uint128",name:"tokensOwed1",type:"uint128"}],internalType:"struct SPFactory.SPPosition",name:"result",type:"tuple"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount0Owed",type:"uint256"},{internalType:"uint256",name:"amount1Owed",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"uniswapV3MintCallback",outputs:[],stateMutability:"nonpayable",type:"function"}]},s={address:i._.nfpmAddress,abi:a.Mt}},10649:function(e,t,n){n.d(t,{_:function(){return a}});let a={embeddedRouterOnly:!0,rpcNode:"https://sepolia.drpc.org",basePath:"/dev",spFactoryAddress:"0x728Cba6a26c4D2C781A4EaCb510646d656f1509d",nfpmAddress:"0x1238536071E1c677A632429e3655c799b22cDA52",uniswapV3FactoryAddress:"0x0227628f3F023bb0B980b67D528571c95c6DaC1c",multiCallAddress:"0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07",sptAddress:"0x8605E860e5173104241259Aaa799071ab9ffD62A",accountChainExplorerPrefix:e=>31337===e?"https://alanverbner.github.io/lightweight-eth-explorer/account/":"https://sepolia.etherscan.io//address/",transactionChainExplorerPrefix:e=>31337===e?"https://alanverbner.github.io/lightweight-eth-explorer/transaction/":"https://sepolia.etherscan.io//tx/",blockChainExplorerPrefix:e=>31337===e?"https://alanverbner.github.io/lightweight-eth-explorer/block/":"https://sepolia.etherscan.io//block/"}},9678:function(e,t,n){n.d(t,{X:function(){return textWithLineBreaks}});var a=n(37151),i=n(19605);function textWithLineBreaks(e){let t=e.split("\n").map((e,t)=>(0,a.jsxs)(i.Fragment,{children:[e.replace(/ /g,"\xa0"),(0,a.jsx)("br",{})]},t));return(0,a.jsx)("div",{className:"font-mono",children:t})}},91608:function(e,t,n){n.d(t,{cn:function(){return cn}});var a=n(35209),i=n(82701);function cn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m)((0,a.W)(t))}}}]);