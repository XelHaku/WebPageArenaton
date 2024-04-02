import{a as se,b as ae,c as le,f as ce,i as Y,s as de}from"./chunk-USYUBEAK.js";import{a,b as h,c as J,d as v}from"./chunk-FVOJODA2.js";import{a as ie}from"./chunk-VW5MA7OO.js";import{a as R,d as M,l as s}from"./chunk-PWCKSV3D.js";function d(e,t,r,n){let o=e[t];return h(e,()=>{let i=e[t];Object.is(o,i)||r(o=i)},n)}var ke=Symbol();var Z="https://secure.web3modal.com",B={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Z,SECURE_SITE_DASHBOARD:`${Z}/dashboard`,SECURE_SITE_FAVICON:`${Z}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}};var l={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=B.TEN_SEC_MS:!0},isAllowedRetry(e){return Date.now()-e>=B.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+B.FOUR_MINUTES_MS},getPlainAddress(e){return e.split(":")[2]},wait(e){return s(this,null,function*(){return new Promise(t=>{setTimeout(t,e)})})},debounce(e,t=500){let r;return(...n)=>{function o(){e(...n)}r&&clearTimeout(r),r=setTimeout(o,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(l.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(e,t){if(!l.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},preloadImage(e){return s(this,null,function*(){let t=new Promise((r,n)=>{let o=new Image;o.onload=r,o.onerror=n,o.crossOrigin="anonymous",o.src=e});return Promise.race([t,l.wait(2e3)])})},formatBalance(e,t){let r;if(e==="0")r="0.000";else if(typeof e=="string"){let n=Number(e);n&&(r=n.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:`0.000 ${t}`},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return B.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl(){return l.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return l.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return l.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){return typeof e=="string"?e:typeof e?.issues?.[0]?.message=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"}};var f=a({isConnected:!1}),H={state:f,subscribe(e){return h(f,()=>e(f))},subscribeKey(e,t){return d(f,e,t)},setIsConnected(e){f.isConnected=e},setCaipAddress(e){f.caipAddress=e,f.address=e?l.getPlainAddress(e):void 0},setBalance(e,t){f.balance=e,f.balanceSymbol=t},setProfileName(e){f.profileName=e},setProfileImage(e){f.profileImage=e},setAddressExplorerUrl(e){f.addressExplorerUrl=e},resetAccount(){f.isConnected=!1,f.caipAddress=void 0,f.address=void 0,f.balance=void 0,f.balanceSymbol=void 0,f.profileName=void 0,f.profileImage=void 0,f.addressExplorerUrl=void 0}};var N=class{constructor({baseUrl:t}){this.baseUrl=t}get(n){return s(this,null,function*(){var o=n,{headers:t}=o,r=M(o,["headers"]);let i=this.createUrl(r);return(yield fetch(i,{method:"GET",headers:t})).json()})}getBlob(n){return s(this,null,function*(){var o=n,{headers:t}=o,r=M(o,["headers"]);let i=this.createUrl(r);return(yield fetch(i,{method:"GET",headers:t})).blob()})}post(o){return s(this,null,function*(){var i=o,{body:t,headers:r}=i,n=M(i,["body","headers"]);let p=this.createUrl(n);return(yield fetch(p,{method:"POST",headers:r,body:t?JSON.stringify(t):void 0})).json()})}put(o){return s(this,null,function*(){var i=o,{body:t,headers:r}=i,n=M(i,["body","headers"]);let p=this.createUrl(n);return(yield fetch(p,{method:"PUT",headers:r,body:t?JSON.stringify(t):void 0})).json()})}delete(o){return s(this,null,function*(){var i=o,{body:t,headers:r}=i,n=M(i,["body","headers"]);let p=this.createUrl(n);return(yield fetch(p,{method:"DELETE",headers:r,body:t?JSON.stringify(t):void 0})).json()})}createUrl({path:t,params:r}){let n=new URL(t,this.baseUrl);return r&&Object.entries(r).forEach(([o,i])=>{i&&n.searchParams.append(o,i)}),n}};var Q="WALLETCONNECT_DEEPLINK_CHOICE",ue="@w3m/recent",pe="@w3m/connected_wallet_image_url",fe="@w3m/connected_connector",P={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(Q,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(Q);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Q)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=P.getRecentWallets();t.find(n=>n.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(ue,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(ue);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(pe,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(pe)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(fe,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(fe)}catch{console.info("Unable to get Connected Connector")}}};var T=a({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),O={state:T,subscribeNetworkImages(e){return h(T.networkImages,()=>e(T.networkImages))},subscribeKey(e,t){return d(T,e,t)},setWalletImage(e,t){T.walletImages[e]=t},setNetworkImage(e,t){T.networkImages[e]=t},setConnectorImage(e,t){T.connectorImages[e]=t},setTokenImage(e,t){T.tokenImages[e]=t}};var C=a({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),y={state:C,subscribeKey(e,t){return d(C,e,t)},setProjectId(e){C.projectId=e},setIncludeWalletIds(e){C.includeWalletIds=e},setExcludeWalletIds(e){C.excludeWalletIds=e},setFeaturedWalletIds(e){C.featuredWalletIds=e},setTokens(e){C.tokens=e},setTermsConditionsUrl(e){C.termsConditionsUrl=e},setPrivacyPolicyUrl(e){C.privacyPolicyUrl=e},setCustomWallets(e){C.customWallets=e},setEnableAnalytics(e){C.enableAnalytics=e},setSdkVersion(e){C.sdkVersion=e},setMetadata(e){C.metadata=e}};var D=a({connectors:[]}),X={state:D,subscribeKey(e,t){return d(D,e,t)},setConnectors(e){D.connectors=e.map(t=>v(t))},addConnector(e){if(D.connectors.push(v(e)),e.id==="w3mEmail"){let t=e,r=J(y.state);t?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId})}},getEmailConnector(){return D.connectors.find(e=>e.type==="EMAIL")},getAnnouncedConnectorRdns(){return D.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>e.info?.rdns)},getConnectors(){return D.connectors}};var z=a({open:!1,selectedNetworkId:void 0}),j={state:z,subscribe(e){return h(z,()=>e(z))},set(e){Object.assign(z,R(R({},z),e))}};var b=a({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),ee={state:b,subscribeKey(e,t){return d(b,e,t)},_getClient(){if(!b._client)throw new Error("NetworkController client not set");return b._client},setClient(e){b._client=v(e)},setCaipNetwork(e){b.caipNetwork=e,j.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){b.caipNetwork=e,j.set({selectedNetworkId:e?.id}),b.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){b.requestedCaipNetworks=e},getApprovedCaipNetworksData(){return s(this,null,function*(){let e=yield this._getClient().getApprovedCaipNetworksData();b.supportsAllNetworks=e.supportsAllNetworks,b.approvedCaipNetworkIds=e.approvedCaipNetworkIds})},switchActiveNetwork(e){return s(this,null,function*(){yield this._getClient().switchCaipNetwork(e),b.caipNetwork=e})},resetNetwork(){b.isDefaultCaipNetwork||(b.caipNetwork=void 0),b.approvedCaipNetworkIds=void 0,b.supportsAllNetworks=!0}};var be=l.getApiUrl(),A=new N({baseUrl:be}),we="40",me="4",w=a({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),u={state:w,subscribeKey(e,t){return d(w,e,t)},_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=y.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},_fetchWalletImage(e){return s(this,null,function*(){let t=`${A.baseUrl}/getWalletImage/${e}`,r=yield A.getBlob({path:t,headers:u._getApiHeaders()});O.setWalletImage(e,URL.createObjectURL(r))})},_fetchNetworkImage(e){return s(this,null,function*(){let t=`${A.baseUrl}/public/getAssetImage/${e}`,r=yield A.getBlob({path:t,headers:u._getApiHeaders()});O.setNetworkImage(e,URL.createObjectURL(r))})},_fetchConnectorImage(e){return s(this,null,function*(){let t=`${A.baseUrl}/public/getAssetImage/${e}`,r=yield A.getBlob({path:t,headers:u._getApiHeaders()});O.setConnectorImage(e,URL.createObjectURL(r))})},fetchNetworkImages(){return s(this,null,function*(){let{requestedCaipNetworks:e}=ee.state,t=e?.map(({imageId:r})=>r).filter(Boolean);t&&(yield Promise.allSettled(t.map(r=>u._fetchNetworkImage(r))))})},fetchConnectorImages(){return s(this,null,function*(){let{connectors:e}=X.state,t=e.map(({imageId:r})=>r).filter(Boolean);yield Promise.allSettled(t.map(r=>u._fetchConnectorImage(r)))})},fetchFeaturedWallets(){return s(this,null,function*(){let{featuredWalletIds:e}=y.state;if(e?.length){let{data:t}=yield A.get({path:"/getWallets",headers:u._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):me,include:e?.join(",")}});t.sort((n,o)=>e.indexOf(n.id)-e.indexOf(o.id));let r=t.map(n=>n.image_id).filter(Boolean);yield Promise.allSettled(r.map(n=>u._fetchWalletImage(n))),w.featured=t}})},fetchRecommendedWallets(){return s(this,null,function*(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=y.state,n=[...t??[],...r??[]].filter(Boolean),{data:o,count:i}=yield A.get({path:"/getWallets",headers:u._getApiHeaders(),params:{page:"1",entries:me,include:e?.join(","),exclude:n?.join(",")}}),p=P.getRecentWallets(),E=o.map(I=>I.image_id).filter(Boolean),q=p.map(I=>I.image_id).filter(Boolean);yield Promise.allSettled([...E,...q].map(I=>u._fetchWalletImage(I))),w.recommended=o,w.count=i??0})},fetchWallets(t){return s(this,arguments,function*({page:e}){let{includeWalletIds:r,excludeWalletIds:n,featuredWalletIds:o}=y.state,i=[...w.recommended.map(({id:I})=>I),...n??[],...o??[]].filter(Boolean),{data:p,count:E}=yield A.get({path:"/getWallets",headers:u._getApiHeaders(),params:{page:String(e),entries:we,include:r?.join(","),exclude:i.join(",")}}),q=p.map(I=>I.image_id).filter(Boolean);yield Promise.allSettled([...q.map(I=>u._fetchWalletImage(I)),l.wait(300)]),w.wallets=[...w.wallets,...p],w.count=E>w.count?E:w.count,w.page=e})},searchWallet(t){return s(this,arguments,function*({search:e}){let{includeWalletIds:r,excludeWalletIds:n}=y.state;w.search=[];let{data:o}=yield A.get({path:"/getWallets",headers:u._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:r?.join(","),exclude:n?.join(",")}}),i=o.map(p=>p.image_id).filter(Boolean);yield Promise.allSettled([...i.map(p=>u._fetchWalletImage(p)),l.wait(300)]),w.search=o})},prefetch(){w.prefetchPromise=Promise.race([Promise.allSettled([u.fetchFeaturedWallets(),u.fetchRecommendedWallets(),u.fetchNetworkImages(),u.fetchConnectorImages()]),l.wait(3e3)])}};var Ce=l.getAnalyticsUrl(),Se=new N({baseUrl:Ce}),xe=["MODAL_CREATED"],$=a({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),_={state:$,subscribe(e){return h($,()=>e($))},_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=y.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},_sendAnalyticsEvent(e){return s(this,null,function*(){try{if(xe.includes(e.data.event)||typeof window>"u")return;yield Se.post({path:"/e",headers:_._getApiHeaders(),body:{eventId:l.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}})},sendEvent(e){$.timestamp=Date.now(),$.data=e,y.state.enableAnalytics&&_._sendAnalyticsEvent($)}};var c=a({view:"Connect",history:["Connect"]}),x={state:c,subscribeKey(e,t){return d(c,e,t)},push(e,t){e!==c.view&&(c.view=e,c.history.push(e),c.data=t)},reset(e){c.view=e,c.history=[e]},replace(e,t){c.history.length>1&&c.history.at(-1)!==e&&(c.view=e,c.history[c.history.length-1]=e,c.data=t)},goBack(){if(c.history.length>1){c.history.pop();let[e]=c.history.slice(-1);e&&(c.view=e)}},goBackToIndex(e){if(c.history.length>1){c.history=c.history.slice(0,e+1);let[t]=c.history.slice(-1);t&&(c.view=t)}}};var L=a({loading:!1,open:!1}),k={state:L,subscribe(e){return h(L,()=>e(L))},subscribeKey(e,t){return d(L,e,t)},open(e){return s(this,null,function*(){yield u.state.prefetchPromise,e?.view?x.reset(e.view):H.state.isConnected?x.reset("Account"):x.reset("Connect"),L.open=!0,j.set({open:!0}),_.sendEvent({type:"track",event:"MODAL_OPEN"})})},close(){L.open=!1,j.set({open:!1}),_.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(e){L.loading=e}};var Ee=l.getBlockchainApiUrl(),he=new N({baseUrl:Ee}),te={fetchIdentity({caipChainId:e,address:t}){return he.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:y.state.projectId}})},fetchTransactions({account:e,projectId:t,cursor:r}){let n=r?{cursor:r}:{};return he.get({path:`/v1/account/${e}/history?projectId=${t}`,params:n})}};var U=a({message:"",variant:"success",open:!1}),F={state:U,subscribeKey(e,t){return d(U,e,t)},showSuccess(e){U.message=e,U.variant="success",U.open=!0},showError(e){let t=l.parseError(e);U.message=t,U.variant="error",U.open=!0},hide(){U.open=!1}};var m=a({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),re={state:m,subscribe(e){return h(m,()=>e(m))},fetchTransactions(e){return s(this,null,function*(){let{projectId:t}=y.state;if(!t||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");m.loading=!0;try{let r=yield te.fetchTransactions({account:e,projectId:t,cursor:m.next}),n=this.filterSpamTransactions(r.data),o=[...m.transactions,...n];m.loading=!1,m.transactions=o,m.transactionsByYear=this.groupTransactionsByYear(m.transactionsByYear,n),m.empty=o.length===0,m.next=r.next?r.next:void 0}catch{_.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:m.next}}),F.showError("Failed to fetch transactions"),m.loading=!1,m.empty=!0}})},groupTransactionsByYear(e={},t=[]){let r=e;return t.forEach(n=>{let o=new Date(n.metadata.minedAt).getFullYear();r[o]||(r[o]=[]),r[o]?.push(n)}),r},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(n=>n.nft_info?.flags.is_spam===!0))},resetTransactions(){m.transactions=[],m.transactionsByYear={},m.loading=!1,m.empty=!1,m.next=void 0}};var g=a({wcError:!1,buffering:!1}),ne={state:g,subscribeKey(e,t){return d(g,e,t)},_getClient(){if(!g._client)throw new Error("ConnectionController client not set");return g._client},setClient(e){g._client=v(e)},connectWalletConnect(){g.wcPromise=this._getClient().connectWalletConnect(e=>{g.wcUri=e,g.wcPairingExpiry=l.getPairingExpiry()})},connectExternal(e){return s(this,null,function*(){yield this._getClient().connectExternal?.(e),P.setConnectedConnector(e.type)})},signMessage(e){return s(this,null,function*(){return this._getClient().signMessage(e)})},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){g.wcUri=void 0,g.wcPairingExpiry=void 0,g.wcPromise=void 0,g.wcLinking=void 0,g.recentWallet=void 0,re.resetTransactions(),P.deleteWalletConnectDeepLink()},setWcLinking(e){g.wcLinking=e},setWcError(e){g.wcError=e,g.buffering=!1},setRecentWallet(e){g.recentWallet=e},setBuffering(e){g.buffering=e},disconnect(){return s(this,null,function*(){yield this._getClient().disconnect(),this.resetWcConnection()})}};var S=a({status:"uninitialized",isSiweEnabled:!1}),W={state:S,subscribeKey(e,t){return d(S,e,t)},subscribe(e){return h(S,()=>e(S))},_getClient(){if(!S._client)throw new Error("SIWEController client not set");return S._client},getNonce(){return s(this,null,function*(){let t=yield this._getClient().getNonce();return this.setNonce(t),t})},getSession(){return s(this,null,function*(){let t=yield this._getClient().getSession();return t&&(this.setSession(t),this.setStatus("success")),t})},createMessage(e){let r=this._getClient().createMessage(e);return this.setMessage(r),r},verifyMessage(e){return s(this,null,function*(){return yield this._getClient().verifyMessage(e)})},signIn(){return s(this,null,function*(){return yield this._getClient().signIn()})},signOut(){return s(this,null,function*(){let e=this._getClient();yield e.signOut(),this.setStatus("ready"),e.onSignOut?.()})},onSignIn(e){this._getClient().onSignIn?.(e)},onSignOut(){this._getClient().onSignOut?.()},setSIWEClient(e){S._client=v(e),S.status="ready",S.isSiweEnabled=e.options.enabled},setNonce(e){S.nonce=e},setStatus(e){S.status=e},setMessage(e){S.message=e},setSession(e){S.session=e}};var K=a({themeMode:"dark",themeVariables:{}}),oe={state:K,subscribe(e){return h(K,()=>e(K))},setThemeMode(e){K.themeMode=e},setThemeVariables(e){K.themeVariables=R(R({},K.themeVariables),e)},getSnapshot(){return J(K)}};var Ie={getWalletImage(e){if(e?.image_url)return e?.image_url;if(e?.image_id)return O.state.walletImages[e.image_id]},getNetworkImage(e){if(e?.imageUrl)return e?.imageUrl;if(e?.imageId)return O.state.networkImages[e.imageId]},getConnectorImage(e){if(e?.imageUrl)return e.imageUrl;if(e?.imageId)return O.state.connectorImages[e.imageId]}};var ve={goBackOrCloseModal(){x.state.history.length>1?x.goBack():k.close()},navigateAfterNetworkSwitch(){let{history:e}=x.state,t=e.findIndex(r=>r==="Networks");t>=1?x.goBackToIndex(t-1):k.close()}};var ge=se`
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
`;var G=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var E=e.length-1;E>=0;E--)(p=e[E])&&(i=(o<3?p(i):o>3?p(t,r,i):p(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},ye="scroll-lock",V=class extends ae{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=k.state.open,this.caipAddress=H.state.address,this.isSiweEnabled=W.state.isSiweEnabled,this.initializeTheming(),u.prefetch(),this.unsubscribe.push(k.subscribeKey("open",t=>t?this.onOpen():this.onClose()),W.subscribeKey("isSiweEnabled",t=>{this.isSiweEnabled=t}),H.subscribe(t=>this.onNewAccountState(t))),_.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?ie`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){return s(this,null,function*(){t.target===t.currentTarget&&(yield this.handleClose())})}handleClose(){return s(this,null,function*(){this.isSiweEnabled&&W.state.status!=="success"&&(yield ne.disconnect()),k.close()})}initializeTheming(){let{themeVariables:t,themeMode:r}=oe.state,n=de.getColorTheme(r);le(t,n)}onClose(){return s(this,null,function*(){this.onScrollUnlock(),yield this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,F.hide(),this.open=!1,this.onRemoveKeyboardListener()})}onOpen(){return s(this,null,function*(){this.onScrollLock(),this.open=!0,yield this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()})}onScrollLock(){let t=document.createElement("style");t.dataset.w3m=ye,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){let t=document.head.querySelector(`style[data-w3m="${ye}"]`);t&&t.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let t=this.shadowRoot?.querySelector("wui-card");t?.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){let{tagName:n}=r.target;n&&!n.includes("W3M-")&&!n.includes("WUI-")&&t?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}onNewAccountState(t){return s(this,null,function*(){let{isConnected:r,caipAddress:n}=t;if(this.isSiweEnabled){r&&!this.caipAddress&&(this.caipAddress=n),r&&n&&this.caipAddress!==n&&(yield W.signOut(),this.onSiweNavigation(),this.caipAddress=n);try{let o=yield W.getSession();o&&!r?yield W.signOut():r&&!o&&this.onSiweNavigation()}catch{r&&this.onSiweNavigation()}}})}onSiweNavigation(){this.open?x.push("ConnectingSiwe"):k.open({view:"ConnectingSiwe"})}};V.styles=ge;G([Y()],V.prototype,"open",void 0);G([Y()],V.prototype,"caipAddress",void 0);G([Y()],V.prototype,"isSiweEnabled",void 0);V=G([ce("w3m-modal")],V);export{B as a,l as b,H as c,P as d,y as e,X as f,j as g,ee as h,u as i,_ as j,x as k,k as l,te as m,F as n,re as o,ne as p,W as q,oe as r,Ie as s,ve as t,V as u};
