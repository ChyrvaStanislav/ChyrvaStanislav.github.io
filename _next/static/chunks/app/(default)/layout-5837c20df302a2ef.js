(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7534],{2601:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(8960)},1069:function(e,t,n){Promise.resolve().then(n.t.bind(n,4695,23)),Promise.resolve().then(n.bind(n,8428)),Promise.resolve().then(n.bind(n,9392)),Promise.resolve().then(n.bind(n,1063)),Promise.resolve().then(n.t.bind(n,8326,23)),Promise.resolve().then(n.t.bind(n,3201,23)),Promise.resolve().then(n.t.bind(n,3919,23))},8428:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(3153),o=n.n(r),i=n(1280),a=n(2265);n(3771),n(2601);var c=n(1230),s=n(2601),u=()=>((0,a.useEffect)(()=>{var e,t,n;c.z.test(navigator.userAgent)||/auth\/iframe-handler/gi.test(null===(t=window)||void 0===t?void 0:null===(e=t.location)||void 0===e?void 0:e.href)||(0,i.ej)("solutionsHubEmployeesGADisabled")||"production"!==s.env.ERROR_ENV||(null===(n=window)||void 0===n?void 0:n.GTM_INITED)||(o().initialize({gtmId:"GTM-PV6Z3PK"}),window.GTM_INITED=!0)},[]),null)},1230:function(e,t,n){"use strict";n.d(t,{J:function(){return r},z:function(){return o}});let r=/bot|crawl|slurp|spider|mediapartners/i,o=/Chrome-Lighthouse|Googlebot|Page Speed|bingbot|yahoo|Baiduspider|DuckDuckGo|Teoma|moto g power|HeadlessChrome|Ahrefs|ahrefs\.com|AhrefsSiteAudit|AhrefsBot/i},9392:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(2265),o=n(1280),i=n(1230),a=e=>{var t;throw URIError("The script ".concat(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.src," didn't load correctly."))},c=n(2601);let s=()=>{try{let e=(t,n)=>{setTimeout(()=>{if(n)return;let r=document.querySelector("".concat(t));r?(n=!0,r.setAttribute("target","_blank")):e(t,n)},50)},t=(e,n)=>{setTimeout(()=>{if(n)return;let r=document.querySelector("#".concat(e));if(r){n=!0;let t=null==r?void 0:r.offsetHeight;if(t<45)return;let o=document.createElement("span");o.style.setProperty("display","-webkit-box","important"),o.classList.add("faded"),o.id=e,o.innerHTML=r.innerHTML,o.addEventListener("click",e=>{e.stopPropagation(),e.target===e.currentTarget&&("-webkit-box"===e.target.style.display?(e.target.style.setProperty("display","block","important"),o.classList.remove("faded")):(e.target.style.setProperty("display","-webkit-box","important"),o.classList.add("faded")))}),r.parentNode.replaceChild(o,r)}else t(e,n)},50)};t("onetrust-policy-text",!1),t("ot-pc-desc",!1),e("#onetrust-policy-text a",!1)}catch(e){"production"!==c.env.ERROR_ENV&&console.error("from setPolicy cookiePro: ".concat(e))}};var u=e=>{let t=document.createElement("script");t.setAttribute("charset","UTF-8"),t.setAttribute("data-domain-script","6f356320-5183-4daf-94bc-c6c376af42be"),t.setAttribute("async","true"),t.src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",t.type="text/javascript",t.async=!0,t.onerror=a,t.onload=s,setTimeout(()=>{var e,n,r;(null===(e=navigator)||void 0===e?void 0:e.userAgent)&&i.J.test(null===(r=navigator)||void 0===r?void 0:null===(n=r.userAgent)||void 0===n?void 0:n.toLowerCase())||document.head.appendChild(t)},e)},d=(e,t)=>{if(t){let t=document.createElement("script");t.setAttribute("charset","UTF-8"),t.setAttribute("data-domain-script","6f356320-5183-4daf-94bc-c6c376af42be"),t.setAttribute("async","true"),t.src="https://menu.epam.com/scripts/menu.js?app=SolutionsHub",t.type="text/javascript",t.async=!0,t.onerror=a,setTimeout(()=>{document.head.appendChild(t)},e)}},l=()=>((0,r.useEffect)(()=>{if(!i.z.test(navigator.userAgent)){let{accessToken:e}=(0,o.LP)();u(0),e&&d(0,e)}},[]),null)},1063:function(e,t,n){"use strict";n.r(t);var r=n(7437),o=n(2265),i=n(3771),a=n(4033),c=n(1280),s=n(2483),u=n(6691),d=n.n(u);t.default=()=>{let e=(0,a.usePathname)(),[t,n]=(0,o.useState)(!1),[u,l]=(0,o.useState)(!0),[f,p]=(0,o.useState)("");return((0,o.useEffect)(()=>{let{accessToken:e}=(0,c.LP)();if(e){let t=(0,i.o)(e);n(!0),p(t.picture)}l(!1)},[e]),u)?null:t?(0,r.jsxs)("div",{children:[(0,r.jsx)(d(),{style:{borderRadius:"50%",marginRight:10},width:40,height:40,src:f,alt:"avatar"}),(0,r.jsx)("button",{type:"button",onClick:()=>{(0,c.gy)(),window.location.assign((0,s.cV)())},children:"Log out"})]}):(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"button",onClick:()=>{(0,s.Dw)(),window.location.assign((0,s.B9)())},children:"Log in"})})}},2483:function(e,t,n){"use strict";n.d(t,{B9:function(){return s},Dw:function(){return o},bd:function(){return c},cV:function(){return u},xw:function(){return a}});let r="prevLink",o=()=>{let e=window.location.href;localStorage.setItem(r,e)},i=()=>localStorage.getItem(r),a=()=>!!localStorage.getItem(r),c=()=>{if(a()){let e=i();localStorage.removeItem(r),window.location.assign(e)}},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,{origin:t}=window.location;return"".concat("https://access-staging.epam.com/auth/realms/plusx/protocol/openid-connect/auth","?response_type=code&scope=openid&client_id=").concat("oauth-client.epm-shb.solutionshub.stage","&redirect_uri=").concat("iframe"===e?"".concat(t,"/auth/iframe-handler"):"".concat(t,"/auth")).concat("iframe"===e?"&prompt=none":"")},u=()=>"".concat("https://access-staging.epam.com/auth/realms/plusx/protocol/openid-connect/logout","?redirect_uri=").concat(origin)},1280:function(e,t,n){"use strict";n.d(t,{LP:function(){return r},d8:function(){return a},ej:function(){return c},gy:function(){return i},kT:function(){return s},o4:function(){return o}}),n(6778);let r=()=>{let e=null,t=null,n=window.document.cookie.split(";");return n.forEach(n=>{n.includes("shubToken")&&(e=n.split("=")[1]),n.includes("refreshToken")&&(t=n.split("=")[1])}),{accessToken:e,refreshToken:t}},o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"shubToken";window.document.cookie="".concat(t,"=").concat(window.encodeURIComponent(e),";path=/")},i=()=>{window.document.cookie="shubToken=;path=/",window.document.cookie="refreshToken=;path=/"},a=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={path:"/",...n};r.expires instanceof Date&&(r.expires=n.expires.toUTCString());let o="".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t));Object.keys(r).forEach(e=>{o+="; ".concat(e);let t=r[e];!0!==t&&(o+="=".concat(t))}),document.cookie=o},c=e=>{let t=document.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1"),"=([^;]*)")));return t?decodeURIComponent(t[1]):void 0},s=e=>{a(e,"",{"max-age":-1})}},4695:function(){},3919:function(e){e.exports={header:"Header_header__lUi3A"}},3201:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},8960:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s=[],u=!1,d=-1;function l(){u&&r&&(u=!1,r.length?s=r.concat(s):d=-1,s.length&&f())}function f(){if(!u){var e=c(l);u=!0;for(var t=s.length;t;){for(r=s,s=[];++d<t;)r&&r[d].run();d=-1,t=s.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||c(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},4033:function(e,t,n){e.exports=n(94)},4129:function(e,t,n){"use strict";var r,o=(r=n(9185))&&r.__esModule?r:{default:r};e.exports={tags:function(e){var t=e.id,n=e.events,r=e.dataLayer,i=e.dataLayerName,a=e.preview,c="&gtm_auth="+e.auth,s="&gtm_preview="+a;t||(0,o.default)("GTM Id is required");var u="\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(n).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+c+s+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+i+"','"+t+"');";return{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+c+s+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:u,dataLayerVar:this.dataLayer(r,i)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}}},238:function(e,t,n){"use strict";var r,o=(r=n(4129))&&r.__esModule?r:{default:r};e.exports={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=o.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,n=e.events,r=e.dataLayer,o=e.dataLayerName,i=e.auth,a=e.preview,c=this.gtm({id:t,events:void 0===n?{}:n,dataLayer:r||void 0,dataLayerName:void 0===o?"dataLayer":o,auth:void 0===i?"":i,preview:void 0===a?"":a});r&&document.head.appendChild(c.dataScript),document.head.insertBefore(c.script(),document.head.childNodes[0]),document.body.insertBefore(c.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,n=e.dataLayerName,r=void 0===n?"dataLayer":n;if(window[r])return window[r].push(t);var i=o.default.dataLayer(t,r),a=this.dataScript(i);document.head.insertBefore(a,document.head.childNodes[0])}}},3153:function(e,t,n){"use strict";var r,o=(r=n(238))&&r.__esModule?r:{default:r};e.exports=o.default},9185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){console.warn("[react-gtm]",e)}},3771:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});class r extends Error{}function o(e,t){let n;if("string"!=typeof e)throw new r("Invalid token specified: must be a string");t||(t={});let o=!0===t.header?0:1,i=e.split(".")[o];if("string"!=typeof i)throw new r(`Invalid token specified: missing part #${o+1}`);try{n=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var n;return n=t,decodeURIComponent(atob(n).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}catch(e){return atob(t)}}(i)}catch(e){throw new r(`Invalid token specified: invalid base64 for part #${o+1} (${e.message})`)}try{return JSON.parse(n)}catch(e){throw new r(`Invalid token specified: invalid json for part #${o+1} (${e.message})`)}}r.prototype.name="InvalidTokenError"}},function(e){e.O(0,[3908,8326,6691,2971,2472,1744],function(){return e(e.s=1069)}),_N_E=e.O()}]);