"use strict";(self.webpackChunkArenaton=self.webpackChunkArenaton||[]).push([[301],{6130:(ue,Z,g)=>{g.d(Z,{ConfigCtrl:()=>R,zv:()=>u,uA:()=>se,ExplorerCtrl:()=>Le,jb:()=>We,OptionsCtrl:()=>w,AV:()=>J,ThemeCtrl:()=>Pe,ToastCtrl:()=>De});var v=g(5861),I=g(8896);const x=e=>"object"==typeof e&&null!==e,L=new WeakMap,W=new WeakSet,[pe]=((e=Object.is,t=((n,b)=>new Proxy(n,b)),s=(n=>x(n)&&!W.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer)),r=(n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}}),l=new WeakMap,c=((n,b,j=r)=>{const C=l.get(n);if(C?.[0]===b)return C[1];const E=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return(0,I.jc)(E,!0),l.set(n,[b,E]),Reflect.ownKeys(n).forEach(V=>{if(Object.getOwnPropertyDescriptor(E,V))return;const M=Reflect.get(n,V),N={value:M,enumerable:!0,configurable:!0};if(W.has(M))(0,I.jc)(M,!1);else if(M instanceof Promise)delete N.value,N.get=()=>j(M);else if(L.has(M)){const[y,ee]=L.get(M);N.value=c(y,ee(),j)}Object.defineProperty(E,V,N)}),Object.preventExtensions(E)}),m=new WeakMap,p=[1,1],P=(n=>{if(!x(n))throw new Error("object required");const b=m.get(n);if(b)return b;let j=p[0];const C=new Set,E=(a,i=++p[0])=>{j!==i&&(j=i,C.forEach(o=>o(a,i)))};let V=p[1];const N=a=>(i,o)=>{const h=[...i];h[1]=[a,...h[1]],E(h,o)},y=new Map,de=a=>{var i;const o=y.get(a);o&&(y.delete(a),null==(i=o[1])||i.call(o))},te=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),F=t(te,{deleteProperty(a,i){const o=Reflect.get(a,i);de(i);const h=Reflect.deleteProperty(a,i);return h&&E(["delete",[i],o]),h},set(a,i,o,h){const $=Reflect.has(a,i),K=Reflect.get(a,i,h);if($&&(e(K,o)||m.has(o)&&e(K,m.get(o))))return!0;de(i),x(o)&&(o=(0,I.o5)(o)||o);let G=o;if(o instanceof Promise)o.then(D=>{o.status="fulfilled",o.value=D,E(["resolve",[i],D])}).catch(D=>{o.status="rejected",o.reason=D,E(["reject",[i],D])});else{!L.has(o)&&s(o)&&(G=P(o));const D=!W.has(G)&&L.get(G);D&&((a,i)=>{if(y.has(a))throw new Error("prop listener already exists");if(C.size){const o=i[3](N(a));y.set(a,[i,o])}else y.set(a,[i])})(i,D)}return Reflect.set(a,i,G,h),E(["set",[i],o,K]),!0}});return m.set(n,F),L.set(F,[te,(a=++p[1])=>(V!==a&&!C.size&&(V=a,y.forEach(([i])=>{const o=i[1](a);o>j&&(j=o)})),j),c,a=>(C.add(a),1===C.size&&y.forEach(([o,h],$)=>{if(h)throw new Error("remove already exists");const K=o[3](N($));y.set($,[o,K])}),()=>{C.delete(a),0===C.size&&y.forEach(([o,h],$)=>{h&&(h(),y.set($,[o]))})})]),Reflect.ownKeys(n).forEach(a=>{const i=Object.getOwnPropertyDescriptor(n,a);"value"in i&&(F[a]=n[a],delete i.value,delete i.writable),Object.defineProperty(te,a,i)}),F}))=>[P,L,W,e,t,s,r,l,c,m,p])();function U(e={}){return pe(e)}function S(e,t,s){const r=L.get(e);let l;r||console.warn("Please use proxy object");const c=[];let p=!1;const n=(0,r[3])(b=>{c.push(b),s?t(c.splice(0)):l||(l=Promise.resolve().then(()=>{l=void 0,p&&t(c.splice(0))}))});return p=!0,()=>{p=!1,n()}}const d=U({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),J={state:d,subscribe:e=>S(d,()=>e(d)),push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},u={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&!(!window.matchMedia("(pointer:coarse)").matches&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>u.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return u.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(u.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;return r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s),`${r}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!u.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;return r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s),`${r}wc?uri=${encodeURIComponent(t)}`},wait:e=>(0,v.Z)(function*(){return new Promise(t=>{setTimeout(t,e)})})(),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(u.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(u.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=J.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},f=U({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),se={state:f,subscribe:e=>S(f.events,()=>e(function me(e,t){const s=L.get(e);s||console.warn("Please use proxy object");const[r,l,c]=s;return c(r,l(),t)}(f.events[f.events.length-1]))),initialize(){f.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(f.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){f.connectedWalletId=e},click(e){if(f.enabled){const t={type:"CLICK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},track(e){if(f.enabled){const t={type:"TRACK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},view(e){if(f.enabled){const t={type:"VIEW",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}}},O=U({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:O,subscribe:e=>S(O,()=>e(O)),setChains(e){O.chains=e},setWalletConnectUri(e){O.walletConnectUri=e},setIsCustomDesktop(e){O.isCustomDesktop=e},setIsCustomMobile(e){O.isCustomMobile=e},setIsDataLoaded(e){O.isDataLoaded=e},setIsUiLoaded(e){O.isUiLoaded=e},setIsAuth(e){O.isAuth=e}},z=U({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),R={state:z,subscribe:e=>S(z,()=>e(z)),setConfig(e){var t,s;se.initialize(),w.setChains(e.chains),w.setIsAuth(!!e.enableAuthMode),w.setIsCustomMobile(!(null==(t=e.mobileWallets)||!t.length)),w.setIsCustomDesktop(!(null==(s=e.desktopWallets)||!s.length)),u.setModalVersionInStorage(),Object.assign(z,e)}};var ge=Object.defineProperty,ne=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,oe=(e,t,s)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ve=(e,t)=>{for(var s in t||(t={}))be.call(t,s)&&oe(e,s,t[s]);if(ne)for(var s of ne(t))ye.call(t,s)&&oe(e,s,t[s]);return e};const Q="https://explorer-api.walletconnect.com",X="wcm",Y="js-2.6.2";function H(e,t){return q.apply(this,arguments)}function q(){return(q=(0,v.Z)(function*(e,t){const s=ve({sdkType:X,sdkVersion:Y},t),r=new URL(e,Q);return r.searchParams.append("projectId",R.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(yield fetch(r)).json()})).apply(this,arguments)}const T_getDesktopListings=e=>(0,v.Z)(function*(){return H("/w3m/v1/getDesktopListings",e)})(),T_getMobileListings=e=>(0,v.Z)(function*(){return H("/w3m/v1/getMobileListings",e)})(),T_getAllListings=e=>(0,v.Z)(function*(){return H("/w3m/v1/getAllListings",e)})(),T_getWalletImageUrl=e=>`${Q}/w3m/v1/getWalletImage/${e}?projectId=${R.state.projectId}&sdkType=${X}&sdkVersion=${Y}`,T_getAssetImageUrl=e=>`${Q}/w3m/v1/getAssetImage/${e}?projectId=${R.state.projectId}&sdkType=${X}&sdkVersion=${Y}`;var Ie=Object.defineProperty,re=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,ie=(e,t,s)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const ae=u.isMobile(),A=U({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Le={state:A,getRecomendedWallets:()=>(0,v.Z)(function*(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=R.state;if("NONE"===e||"ALL"===t&&!e)return A.recomendedWallets;if(u.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=yield T_getAllListings(s),l=Object.values(r);l.sort((c,m)=>e.indexOf(c.id)-e.indexOf(m.id)),A.recomendedWallets=l}else{const{chains:s,isAuth:r}=w.state,l=s?.join(","),c=u.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:u.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:p}=ae?yield T_getMobileListings(m):yield T_getDesktopListings(m);A.recomendedWallets=Object.values(p)}return A.recomendedWallets})(),getWallets:e=>(0,v.Z)(function*(){const t=((e,t)=>{for(var s in t||(t={}))we.call(t,s)&&ie(e,s,t[s]);if(re)for(var s of re(t))Ce.call(t,s)&&ie(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=R.state,{recomendedWallets:l}=A;if("ALL"===r)return A.wallets;l.length?t.excludedIds=l.map(j=>j.id).join(","):u.isArray(s)&&(t.excludedIds=s.join(",")),u.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),w.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:p,total:P}=ae?yield T_getMobileListings(t):yield T_getDesktopListings(t),n=Object.values(p),b=m?"search":"wallets";return A[b]={listings:[...A[b].listings,...n],total:P,page:c??1},{listings:n,total:P}})(),getWalletImageUrl:e=>T_getWalletImageUrl(e),getAssetImageUrl:e=>T_getAssetImageUrl(e),resetSearch(){A.search={listings:[],total:0,page:1}}},_=U({open:!1}),We={state:_,subscribe:e=>S(_,()=>e(_)),open:e=>(0,v.Z)(function*(){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=w.state;if(u.removeWalletConnectDeepLink(),w.setWalletConnectUri(e?.uri),w.setChains(e?.chains),J.reset("ConnectWallet"),s&&r)_.open=!0,t();else{const l=setInterval(()=>{const c=w.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),_.open=!0,t())},200)}})})(),close(){_.open=!1}};var Oe=Object.defineProperty,le=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,ce=(e,t,s)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const B=U({themeMode:function Ue(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}()?"dark":"light"}),Pe={state:B,subscribe:e=>S(B,()=>e(B)),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(B.themeMode=t),s&&(B.themeVariables=((e,t)=>{for(var s in t||(t={}))Ae.call(t,s)&&ce(e,s,t[s]);if(le)for(var s of le(t))je.call(t,s)&&ce(e,s,t[s]);return e})({},s))}},k=U({open:!1,message:"",variant:"success"}),De={state:k,subscribe:e=>S(k,()=>e(k)),openToast(e,t){k.open=!0,k.message=e,k.variant=t},closeToast(){k.open=!1}}},3301:(ue,Z,g)=>{g.r(Z),g.d(Z,{WalletConnectModal:()=>x});var v=g(5861),I=g(6130);class x{constructor(W){this.openModal=I.jb.open,this.closeModal=I.jb.close,this.subscribeModal=I.jb.subscribe,this.setTheme=I.ThemeCtrl.setThemeConfig,I.ThemeCtrl.setThemeConfig(W),I.ConfigCtrl.setConfig(W),this.initUi()}initUi(){return(0,v.Z)(function*(){if(typeof window<"u"){yield Promise.all([g.e(443),g.e(417)]).then(g.bind(g,1417));const W=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",W),I.OptionsCtrl.setIsUiLoaded(!0)}})()}}}}]);