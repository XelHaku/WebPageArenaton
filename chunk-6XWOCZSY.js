import{a as Fe,d as Ye,n as Ge}from"./chunk-NUE6YNZ5.js";import{a as d,b as w,c as ke,d as O}from"./chunk-K2IO763T.js";import{a as U,b as ye,d as z,l as a}from"./chunk-DDVT2JBD.js";function m(t,e,s,r){let n=t[e];return w(t,()=>{let o=t[e];Object.is(n,o)||s(n=o)},r)}var Jt=Symbol();var Te="https://secure.web3modal.com",se={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Te,SECURE_SITE_DASHBOARD:`${Te}/dashboard`,SECURE_SITE_FAVICON:`${Te}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}};var u={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){let t=window.navigator.userAgent.toLowerCase();return u.isMobile()&&t.includes("android")},isIos(){let t=window.navigator.userAgent.toLowerCase();return u.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=se.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=se.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+se.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},wait(t){return a(this,null,function*(){return new Promise(e=>{setTimeout(e,t)})})},debounce(t,e=500){let s;return(...r)=>{function n(){t(...r)}s&&clearTimeout(s),s=setTimeout(n,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(u.isHttpUrl(t))return this.formatUniversalUrl(t,e);let s=t;s.includes("://")||(s=t.replaceAll("/","").replaceAll(":",""),s=`${s}://`),s.endsWith("/")||(s=`${s}/`);let r=encodeURIComponent(e);return{redirect:`${s}wc?uri=${r}`,href:s}},formatUniversalUrl(t,e){if(!u.isHttpUrl(t))return this.formatNativeUrl(t,e);let s=t;s.endsWith("/")||(s=`${s}/`);let r=encodeURIComponent(e);return{redirect:`${s}wc?uri=${r}`,href:s}},openHref(t,e){window.open(t,e,"noreferrer noopener")},preloadImage(t){return a(this,null,function*(){let e=new Promise((s,r)=>{let n=new Image;n.onload=s,n.onerror=r,n.crossOrigin="anonymous",n.src=t});return Promise.race([e,u.wait(2e3)])})},formatBalance(t,e){let s;if(t==="0")s="0.000";else if(typeof t=="string"){let r=Number(t);r&&(s=r.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return s?`${s} ${e}`:`0.000 ${e}`},isRestrictedRegion(){try{let{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return se.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return u.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return u.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return u.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{let e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){return typeof t=="string"?t:typeof t?.issues?.[0]?.message=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"}};var y=d({isConnected:!1}),re={state:y,subscribe(t){return w(y,()=>t(y))},subscribeKey(t,e){return m(y,t,e)},setIsConnected(t){y.isConnected=t},setCaipAddress(t){y.caipAddress=t,y.address=t?u.getPlainAddress(t):void 0},setBalance(t,e){y.balance=t,y.balanceSymbol=e},setProfileName(t){y.profileName=t},setProfileImage(t){y.profileImage=t},setAddressExplorerUrl(t){y.addressExplorerUrl=t},resetAccount(){y.isConnected=!1,y.caipAddress=void 0,y.address=void 0,y.balance=void 0,y.balanceSymbol=void 0,y.profileName=void 0,y.profileImage=void 0,y.addressExplorerUrl=void 0}};var L=class{constructor({baseUrl:e}){this.baseUrl=e}get(r){return a(this,null,function*(){var n=r,{headers:e}=n,s=z(n,["headers"]);let o=this.createUrl(s);return(yield fetch(o,{method:"GET",headers:e})).json()})}getBlob(r){return a(this,null,function*(){var n=r,{headers:e}=n,s=z(n,["headers"]);let o=this.createUrl(s);return(yield fetch(o,{method:"GET",headers:e})).blob()})}post(n){return a(this,null,function*(){var o=n,{body:e,headers:s}=o,r=z(o,["body","headers"]);let i=this.createUrl(r);return(yield fetch(i,{method:"POST",headers:s,body:e?JSON.stringify(e):void 0})).json()})}put(n){return a(this,null,function*(){var o=n,{body:e,headers:s}=o,r=z(o,["body","headers"]);let i=this.createUrl(r);return(yield fetch(i,{method:"PUT",headers:s,body:e?JSON.stringify(e):void 0})).json()})}delete(n){return a(this,null,function*(){var o=n,{body:e,headers:s}=o,r=z(o,["body","headers"]);let i=this.createUrl(r);return(yield fetch(i,{method:"DELETE",headers:s,body:e?JSON.stringify(e):void 0})).json()})}createUrl({path:e,params:s}){let r=new URL(e,this.baseUrl);return s&&Object.entries(s).forEach(([n,o])=>{o&&r.searchParams.append(n,o)}),r}};var Pe="WALLETCONNECT_DEEPLINK_CHOICE",Ze="@w3m/recent",Qe="@w3m/connected_wallet_image_url",Xe="@w3m/connected_connector",V={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(Pe,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let t=localStorage.getItem(Pe);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Pe)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{let e=V.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(Ze,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let t=localStorage.getItem(Ze);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(Qe,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(Qe)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(Xe,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(Xe)}catch{console.info("Unable to get Connected Connector")}}};var j=d({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),P={state:j,subscribeNetworkImages(t){return w(j.networkImages,()=>t(j.networkImages))},subscribeKey(t,e){return m(j,t,e)},setWalletImage(t,e){j.walletImages[t]=e},setNetworkImage(t,e){j.networkImages[t]=e},setConnectorImage(t,e){j.connectorImages[t]=e},setTokenImage(t,e){j.tokenImages[t]=e}};var q=d({connectors:[]}),Re={state:q,subscribeKey(t,e){return m(q,t,e)},setConnectors(t){q.connectors=t.map(e=>O(e))},addConnector(t){q.connectors.push(O(t))},getEmailConnector(){return q.connectors.find(t=>t.type==="EMAIL")},getAnnouncedConnectorRdns(){return q.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>t.info?.rdns)},getConnectors(){return q.connectors}};var ae=d({open:!1,selectedNetworkId:void 0}),J={state:ae,subscribe(t){return w(ae,()=>t(ae))},set(t){Object.assign(ae,U(U({},ae),t))}};var S=d({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Me={state:S,subscribeKey(t,e){return m(S,t,e)},_getClient(){if(!S._client)throw new Error("NetworkController client not set");return S._client},setClient(t){S._client=O(t)},setCaipNetwork(t){S.caipNetwork=t,J.set({selectedNetworkId:t?.id})},setDefaultCaipNetwork(t){S.caipNetwork=t,J.set({selectedNetworkId:t?.id}),S.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){S.requestedCaipNetworks=t},getApprovedCaipNetworksData(){return a(this,null,function*(){let t=yield this._getClient().getApprovedCaipNetworksData();S.supportsAllNetworks=t.supportsAllNetworks,S.approvedCaipNetworkIds=t.approvedCaipNetworkIds})},switchActiveNetwork(t){return a(this,null,function*(){yield this._getClient().switchCaipNetwork(t),S.caipNetwork=t})},resetNetwork(){S.isDefaultCaipNetwork||(S.caipNetwork=void 0),S.approvedCaipNetworkIds=void 0,S.supportsAllNetworks=!0}};var x=d({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),E={state:x,subscribeKey(t,e){return m(x,t,e)},setProjectId(t){x.projectId=t},setIncludeWalletIds(t){x.includeWalletIds=t},setExcludeWalletIds(t){x.excludeWalletIds=t},setFeaturedWalletIds(t){x.featuredWalletIds=t},setTokens(t){x.tokens=t},setTermsConditionsUrl(t){x.termsConditionsUrl=t},setPrivacyPolicyUrl(t){x.privacyPolicyUrl=t},setCustomWallets(t){x.customWallets=t},setEnableAnalytics(t){x.enableAnalytics=t},setSdkVersion(t){x.sdkVersion=t},setMetadata(t){x.metadata=t}};var St=u.getApiUrl(),N=new L({baseUrl:St}),vt="40",et="4",v=d({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),g={state:v,subscribeKey(t,e){return m(v,t,e)},_getApiHeaders(){let{projectId:t,sdkType:e,sdkVersion:s}=E.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":s}},_fetchWalletImage(t){return a(this,null,function*(){let e=`${N.baseUrl}/getWalletImage/${t}`,s=yield N.getBlob({path:e,headers:g._getApiHeaders()});P.setWalletImage(t,URL.createObjectURL(s))})},_fetchNetworkImage(t){return a(this,null,function*(){let e=`${N.baseUrl}/public/getAssetImage/${t}`,s=yield N.getBlob({path:e,headers:g._getApiHeaders()});P.setNetworkImage(t,URL.createObjectURL(s))})},_fetchConnectorImage(t){return a(this,null,function*(){let e=`${N.baseUrl}/public/getAssetImage/${t}`,s=yield N.getBlob({path:e,headers:g._getApiHeaders()});P.setConnectorImage(t,URL.createObjectURL(s))})},fetchNetworkImages(){return a(this,null,function*(){let{requestedCaipNetworks:t}=Me.state,e=t?.map(({imageId:s})=>s).filter(Boolean);e&&(yield Promise.allSettled(e.map(s=>g._fetchNetworkImage(s))))})},fetchConnectorImages(){return a(this,null,function*(){let{connectors:t}=Re.state,e=t.map(({imageId:s})=>s).filter(Boolean);yield Promise.allSettled(e.map(s=>g._fetchConnectorImage(s)))})},fetchFeaturedWallets(){return a(this,null,function*(){let{featuredWalletIds:t}=E.state;if(t?.length){let{data:e}=yield N.get({path:"/getWallets",headers:g._getApiHeaders(),params:{page:"1",entries:t?.length?String(t.length):et,include:t?.join(",")}});e.sort((r,n)=>t.indexOf(r.id)-t.indexOf(n.id));let s=e.map(r=>r.image_id).filter(Boolean);yield Promise.allSettled(s.map(r=>g._fetchWalletImage(r))),v.featured=e}})},fetchRecommendedWallets(){return a(this,null,function*(){let{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:s}=E.state,r=[...e??[],...s??[]].filter(Boolean),{data:n,count:o}=yield N.get({path:"/getWallets",headers:g._getApiHeaders(),params:{page:"1",entries:et,include:t?.join(","),exclude:r?.join(",")}}),i=V.getRecentWallets(),c=n.map(p=>p.image_id).filter(Boolean),l=i.map(p=>p.image_id).filter(Boolean);yield Promise.allSettled([...c,...l].map(p=>g._fetchWalletImage(p))),v.recommended=n,v.count=o??0})},fetchWallets(e){return a(this,arguments,function*({page:t}){let{includeWalletIds:s,excludeWalletIds:r,featuredWalletIds:n}=E.state,o=[...v.recommended.map(({id:p})=>p),...r??[],...n??[]].filter(Boolean),{data:i,count:c}=yield N.get({path:"/getWallets",headers:g._getApiHeaders(),params:{page:String(t),entries:vt,include:s?.join(","),exclude:o.join(",")}}),l=i.map(p=>p.image_id).filter(Boolean);yield Promise.allSettled([...l.map(p=>g._fetchWalletImage(p)),u.wait(300)]),v.wallets=[...v.wallets,...i],v.count=c>v.count?c:v.count,v.page=t})},searchWallet(e){return a(this,arguments,function*({search:t}){let{includeWalletIds:s,excludeWalletIds:r}=E.state;v.search=[];let{data:n}=yield N.get({path:"/getWallets",headers:g._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:s?.join(","),exclude:r?.join(",")}}),o=n.map(i=>i.image_id).filter(Boolean);yield Promise.allSettled([...o.map(i=>g._fetchWalletImage(i)),u.wait(300)]),v.search=n})},prefetch(){v.prefetchPromise=Promise.race([Promise.allSettled([g.fetchFeaturedWallets(),g.fetchRecommendedWallets(),g.fetchNetworkImages(),g.fetchConnectorImages()]),u.wait(3e3)])}};var Et=u.getAnalyticsUrl(),xt=new L({baseUrl:Et}),$t=["MODAL_CREATED"],ne=d({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),k={state:ne,subscribe(t){return w(ne,()=>t(ne))},_getApiHeaders(){let{projectId:t,sdkType:e,sdkVersion:s}=E.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":s}},_sendAnalyticsEvent(t){return a(this,null,function*(){try{if($t.includes(t.data.event)||typeof window>"u")return;yield xt.post({path:"/e",headers:k._getApiHeaders(),body:{eventId:u.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}})},sendEvent(t){ne.timestamp=Date.now(),ne.data=t,E.state.enableAnalytics&&k._sendAnalyticsEvent(ne)}};var f=d({view:"Connect",history:["Connect"]}),I={state:f,subscribeKey(t,e){return m(f,t,e)},push(t,e){t!==f.view&&(f.view=t,f.history.push(t),f.data=e)},reset(t){f.view=t,f.history=[t]},replace(t,e){f.history.length>1&&f.history.at(-1)!==t&&(f.view=t,f.history[f.history.length-1]=t,f.data=e)},goBack(){if(f.history.length>1){f.history.pop();let[t]=f.history.slice(-1);t&&(f.view=t)}},goBackToIndex(t){if(f.history.length>1){f.history=f.history.slice(0,t+1);let[e]=f.history.slice(-1);e&&(f.view=e)}}};var F=d({loading:!1,open:!1}),R={state:F,subscribe(t){return w(F,()=>t(F))},subscribeKey(t,e){return m(F,t,e)},open(t){return a(this,null,function*(){yield g.state.prefetchPromise,t?.view?I.reset(t.view):re.state.isConnected?I.reset("Account"):I.reset("Connect"),F.open=!0,J.set({open:!0}),k.sendEvent({type:"track",event:"MODAL_OPEN"})})},close(){F.open=!1,J.set({open:!1}),k.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(t){F.loading=t}};var It=u.getBlockchainApiUrl(),tt=new L({baseUrl:It}),We={fetchIdentity({caipChainId:t,address:e}){return tt.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:E.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:s}){let r=s?{cursor:s}:{};return tt.get({path:`/v1/account/${t}/history?projectId=${e}`,params:r})}};var M=d({message:"",variant:"success",open:!1}),le={state:M,subscribeKey(t,e){return m(M,t,e)},showSuccess(t){M.message=t,M.variant="success",M.open=!0},showError(t){let e=u.parseError(t);M.message=e,M.variant="error",M.open=!0},hide(){M.open=!1}};var b=d({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),De={state:b,subscribe(t){return w(b,()=>t(b))},fetchTransactions(t){return a(this,null,function*(){let{projectId:e}=E.state;if(!e||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");b.loading=!0;try{let s=yield We.fetchTransactions({account:t,projectId:e,cursor:b.next}),r=this.filterSpamTransactions(s.data),n=[...b.transactions,...r];b.loading=!1,b.transactions=n,b.transactionsByYear=this.groupTransactionsByYear(b.transactionsByYear,r),b.empty=n.length===0,b.next=s.next?s.next:void 0}catch{k.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:b.next}}),le.showError("Failed to fetch transactions"),b.loading=!1,b.empty=!0}})},groupTransactionsByYear(t={},e=[]){let s=t;return e.forEach(r=>{let n=new Date(r.metadata.minedAt).getFullYear();s[n]||(s[n]=[]),s[n]?.push(r)}),s},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>r.nft_info?.flags.is_spam===!0))},resetTransactions(){b.transactions=[],b.transactionsByYear={},b.loading=!1,b.empty=!1,b.next=void 0}};var C=d({wcError:!1,buffering:!1}),He={state:C,subscribeKey(t,e){return m(C,t,e)},_getClient(){if(!C._client)throw new Error("ConnectionController client not set");return C._client},setClient(t){C._client=O(t)},connectWalletConnect(){C.wcPromise=this._getClient().connectWalletConnect(t=>{C.wcUri=t,C.wcPairingExpiry=u.getPairingExpiry()})},connectExternal(t){return a(this,null,function*(){yield this._getClient().connectExternal?.(t),V.setConnectedConnector(t.type)})},signMessage(t){return a(this,null,function*(){return this._getClient().signMessage(t)})},checkInstalled(t){return this._getClient().checkInstalled?.(t)},resetWcConnection(){C.wcUri=void 0,C.wcPairingExpiry=void 0,C.wcPromise=void 0,C.wcLinking=void 0,C.recentWallet=void 0,De.resetTransactions(),V.deleteWalletConnectDeepLink()},setWcLinking(t){C.wcLinking=t},setWcError(t){C.wcError=t,C.buffering=!1},setRecentWallet(t){C.recentWallet=t},setBuffering(t){C.buffering=t},disconnect(){return a(this,null,function*(){yield this._getClient().disconnect(),this.resetWcConnection()})}};var $=d({status:"uninitialized",isSiweEnabled:!1}),B={state:$,subscribeKey(t,e){return m($,t,e)},subscribe(t){return w($,()=>t($))},_getClient(){if(!$._client)throw new Error("SIWEController client not set");return $._client},getNonce(){return a(this,null,function*(){let e=yield this._getClient().getNonce();return this.setNonce(e),e})},getSession(){return a(this,null,function*(){let e=yield this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e})},createMessage(t){let s=this._getClient().createMessage(t);return this.setMessage(s),s},verifyMessage(t){return a(this,null,function*(){return yield this._getClient().verifyMessage(t)})},signIn(){return a(this,null,function*(){return yield this._getClient().signIn()})},signOut(){return a(this,null,function*(){let t=this._getClient();yield t.signOut(),this.setStatus("ready"),t.onSignOut?.()})},onSignIn(t){this._getClient().onSignIn?.(t)},onSignOut(){this._getClient().onSignOut?.()},setSIWEClient(t){$._client=O(t),$.status="ready",$.isSiweEnabled=t.options.enabled},setNonce(t){$.nonce=t},setStatus(t){$.status=t},setMessage(t){$.message=t},setSession(t){$.session=t}};var Y=d({themeMode:"dark",themeVariables:{}}),Le={state:Y,subscribe(t){return w(Y,()=>t(Y))},setThemeMode(t){Y.themeMode=t},setThemeVariables(t){Y.themeVariables=U(U({},Y.themeVariables),t)},getSnapshot(){return ke(Y)}};var Ut={getWalletImage(t){if(t?.image_url)return t?.image_url;if(t?.image_id)return P.state.walletImages[t.image_id]},getNetworkImage(t){if(t?.imageUrl)return t?.imageUrl;if(t?.imageId)return P.state.networkImages[t.imageId]},getConnectorImage(t){if(t?.imageUrl)return t.imageUrl;if(t?.imageId)return P.state.connectorImages[t.imageId]}};var Ot={goBackOrCloseModal(){I.state.history.length>1?I.goBack():R.close()},navigateAfterNetworkSwitch(){let{history:t}=I.state,e=t.findIndex(s=>s==="Networks");e>=1?I.goBackToIndex(e-1):R.close()}};var be=globalThis,we=be.ShadowRoot&&(be.ShadyCSS===void 0||be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),st=new WeakMap,ce=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(we&&e===void 0){let r=s!==void 0&&s.length===1;r&&(e=st.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&st.set(s,e))}return e}toString(){return this.cssText}},rt=t=>new ce(typeof t=="string"?t:t+"",void 0,je),Be=(t,...e)=>{let s=t.length===1?t[0]:e.reduce((r,n,o)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1],t[0]);return new ce(s,t,je)},Ke=(t,e)=>{if(we)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),n=be.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,t.appendChild(r)}},Ce=we?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return rt(s)})(t):t;var{is:Nt,defineProperty:kt,getOwnPropertyDescriptor:Tt,getOwnPropertyNames:Pt,getOwnPropertySymbols:Rt,getPrototypeOf:Mt}=Object,_e=globalThis,nt=_e.trustedTypes,Wt=nt?nt.emptyScript:"",Dt=_e.reactiveElementPolyfillSupport,de=(t,e)=>t,pe={toAttribute(t,e){switch(e){case Boolean:t=t?Wt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Ae=(t,e)=>!Nt(t,e),ot={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:Ae};Symbol.metadata??=Symbol("metadata"),_e.litPropertyMetadata??=new WeakMap;var W=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=ot){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,s);n!==void 0&&kt(this.prototype,e,n)}}static getPropertyDescriptor(e,s,r){let{get:n,set:o}=Tt(this.prototype,e)??{get(){return this[s]},set(i){this[s]=i}};return{get(){return n?.call(this)},set(i){let c=n?.call(this);o.call(this,i),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ot}static _$Ei(){if(this.hasOwnProperty(de("elementProperties")))return;let e=Mt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(de("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(de("properties"))){let s=this.properties,r=[...Pt(s),...Rt(s)];for(let n of r)this.createProperty(n,s[n])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[r,n]of s)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let n=this._$Eu(s,r);n!==void 0&&this._$Eh.set(n,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let n of r)s.unshift(Ce(n))}else e!==void 0&&s.push(Ce(e));return s}static _$Eu(e,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ke(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$EO(e,s){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:pe).toAttribute(s,r.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,s){let r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let o=r.getPropertyOptions(n),i=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:pe;this._$Em=n,this[n]=i.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(e,s,r){if(e!==void 0){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??Ae)(this[e],s))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,s,r){this._$AL.has(e)||this._$AL.set(e,s),r.reflect===!0&&this._$Em!==e&&(this._$ET??=new Set).add(e)}_$EP(){return a(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$E_?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$Ej()}catch(r){throw e=!1,this._$Ej(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$E_?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&=this._$ET.forEach(s=>this._$EO(s,this[s])),this._$Ej()}updated(e){}firstUpdated(e){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[de("elementProperties")]=new Map,W[de("finalized")]=new Map,Dt?.({ReactiveElement:W}),(_e.reactiveElementVersions??=[]).push("2.0.3");var Ve=globalThis,Se=Ve.trustedTypes,it=Se?Se.createPolicy("lit-html",{createHTML:t=>t}):void 0,qe="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,Je="?"+D,Ht=`<${Je}>`,Q=document,he=()=>Q.createComment(""),fe=t=>t===null||typeof t!="object"&&typeof t!="function",ut=Array.isArray,ht=t=>ut(t)||typeof t?.[Symbol.iterator]=="function",ze=`[ 	
\f\r]`,ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,lt=/>/g,G=RegExp(`>|${ze}(?:([^\\s"'>=/]+)(${ze}*=${ze}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,ft=/^(?:script|style|textarea|title)$/i,mt=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),gt=mt(1),an=mt(2),X=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),pt=new WeakMap,Z=Q.createTreeWalker(Q,129);function yt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(e):e}var bt=(t,e)=>{let s=t.length-1,r=[],n,o=e===2?"<svg>":"",i=ue;for(let c=0;c<s;c++){let l=t[c],p,A,h=-1,T=0;for(;T<l.length&&(i.lastIndex=T,A=i.exec(l),A!==null);)T=i.lastIndex,i===ue?A[1]==="!--"?i=at:A[1]!==void 0?i=lt:A[2]!==void 0?(ft.test(A[2])&&(n=RegExp("</"+A[2],"g")),i=G):A[3]!==void 0&&(i=G):i===G?A[0]===">"?(i=n??ue,h=-1):A[1]===void 0?h=-2:(h=i.lastIndex-A[2].length,p=A[1],i=A[3]===void 0?G:A[3]==='"'?dt:ct):i===dt||i===ct?i=G:i===at||i===lt?i=ue:(i=G,n=void 0);let H=i===G&&t[c+1].startsWith("/>")?" ":"";o+=i===ue?l+Ht:h>=0?(r.push(p),l.slice(0,h)+qe+l.slice(h)+D+H):l+D+(h===-2?c:H)}return[yt(t,o+(t[s]||"<?>")+(e===2?"</svg>":"")),r]},me=class t{constructor({strings:e,_$litType$:s},r){let n;this.parts=[];let o=0,i=0,c=e.length-1,l=this.parts,[p,A]=bt(e,s);if(this.el=t.createElement(p,r),Z.currentNode=this.el.content,s===2){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=Z.nextNode())!==null&&l.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(let h of n.getAttributeNames())if(h.endsWith(qe)){let T=A[i++],H=n.getAttribute(h).split(D),ge=/([.?@])?(.*)/.exec(T);l.push({type:1,index:o,name:ge[2],strings:H,ctor:ge[1]==="."?Ee:ge[1]==="?"?xe:ge[1]==="@"?$e:te}),n.removeAttribute(h)}else h.startsWith(D)&&(l.push({type:6,index:o}),n.removeAttribute(h));if(ft.test(n.tagName)){let h=n.textContent.split(D),T=h.length-1;if(T>0){n.textContent=Se?Se.emptyScript:"";for(let H=0;H<T;H++)n.append(h[H],he()),Z.nextNode(),l.push({type:2,index:++o});n.append(h[T],he())}}}else if(n.nodeType===8)if(n.data===Je)l.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(D,h+1))!==-1;)l.push({type:7,index:o}),h+=D.length-1}o++}}static createElement(e,s){let r=Q.createElement("template");return r.innerHTML=e,r}};function ee(t,e,s=t,r){if(e===X)return e;let n=r!==void 0?s._$Co?.[r]:s._$Cl,o=fe(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(t),n._$AT(t,s,r)),r!==void 0?(s._$Co??=[])[r]=n:s._$Cl=n),n!==void 0&&(e=ee(t,n._$AS(t,e.values),n,r)),e}var ve=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:r}=this._$AD,n=(e?.creationScope??Q).importNode(s,!0);Z.currentNode=n;let o=Z.nextNode(),i=0,c=0,l=r[0];for(;l!==void 0;){if(i===l.index){let p;l.type===2?p=new oe(o,o.nextSibling,this,e):l.type===1?p=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(p=new Ie(o,this,e)),this._$AV.push(p),l=r[++c]}i!==l?.index&&(o=Z.nextNode(),i++)}return Z.currentNode=Q,n}p(e){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,s),s+=r.strings.length-2):r._$AI(e[s])),s++}},oe=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,n){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=ee(this,e,s),fe(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ht(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==_&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.$(Q.createTextNode(e)),this._$AH=e}g(e){let{values:s,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=me.createElement(yt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(s);else{let o=new ve(n,this),i=o.u(this.options);o.p(s),this.$(i),this._$AH=o}}_$AC(e){let s=pt.get(e.strings);return s===void 0&&pt.set(e.strings,s=new me(e)),s}T(e){ut(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,n=0;for(let o of e)n===s.length?s.push(r=new t(this.k(he()),this.k(he()),this,this.options)):r=s[n],r._$AI(o),n++;n<s.length&&(this._$AR(r&&r._$AB.nextSibling,n),s.length=n)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},te=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,n,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=s,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(e,s=this,r,n){let o=this.strings,i=!1;if(o===void 0)e=ee(this,e,s,0),i=!fe(e)||e!==this._$AH&&e!==X,i&&(this._$AH=e);else{let c=e,l,p;for(e=o[0],l=0;l<o.length-1;l++)p=ee(this,c[r+l],s,l),p===X&&(p=this._$AH[l]),i||=!fe(p)||p!==this._$AH[l],p===_?e=_:e!==_&&(e+=(p??"")+o[l+1]),this._$AH[l]=p}i&&!n&&this.O(e)}O(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ee=class extends te{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===_?void 0:e}},xe=class extends te{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},$e=class extends te{constructor(e,s,r,n,o){super(e,s,r,n,o),this.type=5}_$AI(e,s=this){if((e=ee(this,e,s,0)??_)===X)return;let r=this._$AH,n=e===_&&r!==_||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==_&&(r===_||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ie=class{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}},ln={j:qe,P:D,A:Je,C:1,M:bt,L:ve,R:ht,V:ee,D:oe,I:te,H:xe,N:$e,U:Ee,B:Ie},Lt=Ve.litHtmlPolyfillSupport;Lt?.(me,oe),(Ve.litHtmlVersions??=[]).push("3.1.1");var wt=(t,e,s)=>{let r=s?.renderBefore??e,n=r._$litPart$;if(n===void 0){let o=s?.renderBefore??null;r._$litPart$=n=new oe(e.insertBefore(he(),o),o,void 0,s??{})}return n._$AI(t),n};var K=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wt(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};K._$litElement$=!0,K["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:K});var jt=globalThis.litElementPolyfillSupport;jt?.({LitElement:K});(globalThis.litElementVersions??=[]).push("4.0.3");var Bt={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:Ae},Kt=(t=Bt,e,s)=>{let{kind:r,metadata:n}=s,o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(s.name,t),r==="accessor"){let{name:i}=s;return{set(c){let l=e.get.call(this);e.set.call(this,c),this.requestUpdate(i,l,t)},init(c){return c!==void 0&&this.C(i,void 0,t),c}}}if(r==="setter"){let{name:i}=s;return function(c){let l=this[i];e.call(this,c),this.requestUpdate(i,l,t)}}throw Error("Unsupported decorator location: "+r)};function Ct(t){return(e,s)=>typeof s=="object"?Kt(t,e,s):((r,n,o)=>{let i=n.hasOwnProperty(o);return n.constructor.createProperty(o,i?ye(U({},r),{wrapped:!0}):r),i?Object.getOwnPropertyDescriptor(n,o):void 0})(t,e,s)}function Ue(t){return Ct(ye(U({},t),{state:!0,attribute:!1}))}var _t=Be`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Ne=function(t,e,s,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,s):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,s,r);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(o=(n<3?i(o):n>3?i(e,s,o):i(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o},At="scroll-lock",ie=class extends K{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=R.state.open,this.caipAddress=re.state.address,this.isSiweEnabled=B.state.isSiweEnabled,this.initializeTheming(),g.prefetch(),this.unsubscribe.push(R.subscribeKey("open",e=>e?this.onOpen():this.onClose()),B.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),re.subscribe(e=>this.onNewAccountState(e))),k.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?gt`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){return a(this,null,function*(){e.target===e.currentTarget&&(yield this.handleClose())})}handleClose(){return a(this,null,function*(){this.isSiweEnabled&&B.state.status!=="success"&&(yield He.disconnect()),R.close()})}initializeTheming(){let{themeVariables:e,themeMode:s}=Le.state,r=Ge.getColorTheme(s);Fe(e,r)}onClose(){return a(this,null,function*(){this.onScrollUnlock(),yield this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,le.hide(),this.open=!1,this.onRemoveKeyboardListener()})}onOpen(){return a(this,null,function*(){this.onScrollLock(),this.open=!0,yield this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()})}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=At,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${At}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",s=>{if(s.key==="Escape")this.handleClose();else if(s.key==="Tab"){let{tagName:r}=s.target;r&&!r.includes("W3M-")&&!r.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}onNewAccountState(e){return a(this,null,function*(){let{isConnected:s,caipAddress:r}=e;if(this.isSiweEnabled){s&&!this.caipAddress&&(this.caipAddress=r),s&&r&&this.caipAddress!==r&&(yield B.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{let n=yield B.getSession();n&&!s?yield B.signOut():s&&!n&&this.onSiweNavigation()}catch{s&&this.onSiweNavigation()}}})}onSiweNavigation(){this.open?I.push("ConnectingSiwe"):R.open({view:"ConnectingSiwe"})}};ie.styles=_t;Ne([Ue()],ie.prototype,"open",void 0);Ne([Ue()],ie.prototype,"caipAddress",void 0);Ne([Ue()],ie.prototype,"isSiweEnabled",void 0);ie=Ne([Ye("w3m-modal")],ie);export{se as a,u as b,re as c,V as d,Re as e,J as f,Me as g,E as h,g as i,k as j,I as k,R as l,We as m,le as n,De as o,He as p,B as q,Le as r,Ut as s,Ot as t,Be as u,gt as v,_ as w,ln as x,K as y,Ct as z,Ue as A,ie as B};