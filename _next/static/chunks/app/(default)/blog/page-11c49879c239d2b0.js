(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7911],{4440:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var r=i.apply(null,n);r&&e.push(r)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},3225:function(e,t,n){var a=n(121),i=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(i,""):e}},121:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},8143:function(e,t,n){var a=n(6905),i=n(4752),o=n(1573),r=Math.max,s=Math.min;e.exports=function(e,t,n){var c,u,l,p,m,h,v=0,d=!1,f=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=c,a=u;return c=u=void 0,v=t,p=e.apply(a,n)}function _(e){var n=e-h,a=e-v;return void 0===h||n>=t||n<0||f&&a>=l}function b(){var e,n,a,o=i();if(_(o))return k(o);m=setTimeout(b,(e=o-h,n=o-v,a=t-e,f?s(a,l-n):a))}function k(e){return(m=void 0,y&&c)?g(e):(c=u=void 0,p)}function w(){var e,n=i(),a=_(n);if(c=arguments,u=this,h=n,a){if(void 0===m)return v=e=h,m=setTimeout(b,t),d?g(e):p;if(f)return clearTimeout(m),m=setTimeout(b,t),g(h)}return void 0===m&&(m=setTimeout(b,t)),p}return t=o(t)||0,a(n)&&(d=!!n.leading,l=(f="maxWait"in n)?r(o(n.maxWait)||0,t):l,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==m&&clearTimeout(m),v=0,c=h=u=m=void 0},w.flush=function(){return void 0===m?p:k(i())},w}},1087:function(e,t,n){var a=n(6714),i=n(2387);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==a(e)}},4752:function(e,t,n){var a=n(2242);e.exports=function(){return a.Date.now()}},1573:function(e,t,n){var a=n(3225),i=n(6905),o=n(1087),r=0/0,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return r;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=c.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):s.test(e)?r:+e}},1866:function(e,t,n){Promise.resolve().then(n.t.bind(n,7868,23)),Promise.resolve().then(n.bind(n,1021))},1021:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(7437),i=n(2265),o=n(4275),r=n.n(o),s=n(1280),c=n(4440),u=n.n(c),l=n(8143),p=n.n(l),m=n(1396),h=n.n(m),v={default:"most-popular"},d=n(2921),f=n.n(d);let y=e=>{if(!(null==e?void 0:e.length))return e;let t=[...e];return t.map((e,n)=>{let a={...e};return a.active=n!==t.length-1,a})},g=p()(e=>{e()},200);function _(e){var t;let{page:n,className:o,title:r,additionalPath:c,additionalMicrodataItems:l,lastClassName:p}=e,m=(0,i.useRef)(null),d=(0,i.useRef)(null),[_,b]=(0,i.useState)(!1),[k,w]=(0,i.useState)(0),[x,C]=(0,i.useState)({}),T=()=>{var e,t,n,a,i;let o=null===(t=m.current)||void 0===t?void 0:null===(e=t.getBoundingClientRect())||void 0===e?void 0:e.width,r=null===(a=d.current)||void 0===a?void 0:null===(n=a.getBoundingClientRect())||void 0===n?void 0:n.width;w(null===(i=window)||void 0===i?void 0:i.innerWidth),o&&r&&b(r>=o)};(0,i.useEffect)(()=>{if(window){let{accessToken:e}=(0,s.LP)();C({digest:{links:[{name:"Home",active:!0,path:"/"}]},search:{links:[{name:"Home",active:!0,path:"/"}]},solution:{links:[{name:"Home",active:!0,path:"/"},{name:"Solutions",path:e?"/search?mode=solutions&sort=".concat(v.default):"/search?sort=".concat(v.default),active:!0}]},blog:{links:[{name:"Home",active:!0,path:"/"},{name:"Blog",path:"/blog",active:!0}]},post:{links:[{name:"Home",active:!0,path:"/"},{name:"Blog",path:"/blog",active:!0}]},faq:{links:[{name:"Home",active:!0,path:"/"},{name:"FAQ",path:"/faq",active:!0}]},resources:{links:[{name:"Home",active:!0,path:"/"},{name:"Resources",path:"/resources",active:!0}]},whatsnew:{links:[{name:"Home",active:!0,path:"/"},{name:"Updates",path:"/whatsnew",active:!0}]},"privacy-policy":{links:[{name:"Home",active:!0,path:"/"},{name:"Privacy Policy",path:"/privacy-policy",active:!0}]},terms:{links:[{name:"Home",active:!0,path:"/"},{name:"Terms of Use",path:"/terms",active:!0}]},"cookie-policy":{links:[{name:"Home",active:!0,path:"/"},{name:"Cookie Policy",path:"/cookie-policy",active:!0}]},"epam-cc":{links:[{name:"Home",active:!0,path:"/"},{name:"Competency Centers",path:"/epam-cc",active:!0}]},"epam-cc-promo":{links:[{name:"Home",active:!0,path:"/"},{name:"Competency Centers",path:"/epam-cc",active:!0}]},asset:{links:[{name:"Home",active:!0,path:"/"},{name:"Assets",path:"/search?mode=assets&sort=a-z",active:!0}]},"search-all":{links:[{name:"Home",active:!0,path:"/"},{name:"Search Results",path:"/search?sort=".concat(v.default),active:!0}]},about:{links:[{name:"Home",active:!0,path:"/"},{name:"About Us",path:"/about",active:!0}]},"resources/candidate-evaluation-phase":{links:[{name:"Home",active:!0,path:"/"},{name:"Resources",path:"/resources",active:!0},{name:"Candidate Evaluation Phase",path:"/resources/candidate-evaluation-phase",active:!1}]},"resources/marketing-content-creation":{links:[{name:"Home",active:!0,path:"/"},{name:"Resources",path:"/resources",active:!0},{name:"Marketing Content Creation",path:"/resources/marketing-content-creation",active:!1}]},"resources/solution-publishing-phase":{links:[{name:"Home",active:!0,path:"/"},{name:"Resources",path:"/resources",active:!0},{name:"Solution Publishing Phase",path:"/resources/solution-publishing-phase",active:!1}]},"resources/asset-publishing-phase":{links:[{name:"Home",active:!0,path:"/"},{name:"Resources",path:"/resources",active:!0},{name:"Asset Publishing Phase",path:"/resources/asset-publishing-phase",active:!1}]},"resources/enhancing-webpage-visibility":{links:[{name:"Home",active:!0,path:"/"},{name:"Resources",path:"/resources",active:!0},{name:"Enhancing Solution Webpage Visibility",path:"/resources/enhancing-webpage-visibility",active:!1}]},"resources/solution-request-processing":{links:[{name:"Home",active:!0,path:"/"},{name:"Resources",path:"/resources",active:!0},{name:"Solution Request Processing",path:"/resources/solution-request-processing",active:!1}]}})}},[]),(0,i.useEffect)(()=>{let e=()=>{g(T)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,i.useEffect)(()=>{T()},[m.current,d.current]);let H=y((null==x?void 0:null===(t=x[n])||void 0===t?void 0:t.links)?[...x[n].links,...c]:[]),P=(e,t,n,i)=>{var o,r,s;return t?(0,a.jsx)("span",{className:u()(f().text,{[f().last]:t},p),children:null===(o=e.name)||void 0===o?void 0:o.replace("[title]",n)},e.name):(0,a.jsx)("span",{children:(0,a.jsxs)(h(),{className:f().text,href:e.path,title:t&&_&&k>=768?null===(r=e.name)||void 0===r?void 0:r.replace("[title]",n):null,children:[(0,a.jsx)("span",{className:f().name,children:null===(s=e.name)||void 0===s?void 0:s.replace("[title]",n)}),(0,a.jsx)("meta",{content:i+1}),(0,a.jsx)("span",{className:u()(f().text,f().separator),children:">"})]})},e.name)};return(0,a.jsx)("div",{className:u()(f().wrapper,{[f().cut]:_}),children:(0,a.jsx)("span",{ref:m,className:u()(f().breadcrumbsContainer,o,{[f().cut]:_}),children:(0,a.jsx)("div",{className:f().contentContainer,ref:d,children:[...y(H),...l].map((e,t)=>P(e,t===(null==H?void 0:H.length)-1,r,t))})})})}_.propTypes={page:r().string,className:r().string,title:r().string,additionalPath:r().array,additionalMicrodataItems:r().array},_.defaultProps={page:"search",className:"",title:"",additionalPath:[],additionalMicrodataItems:[]};var b=(0,i.memo)(_)},1280:function(e,t,n){"use strict";n.d(t,{LP:function(){return a},d8:function(){return r},ej:function(){return s},gy:function(){return o},kT:function(){return c},o4:function(){return i}}),n(6778);let a=()=>{let e=null,t=null,n=window.document.cookie.split(";");return n.forEach(n=>{n.includes("shubToken")&&(e=n.split("=")[1]),n.includes("refreshToken")&&(t=n.split("=")[1])}),{accessToken:e,refreshToken:t}},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"shubToken";window.document.cookie="".concat(t,"=").concat(window.encodeURIComponent(e),";path=/")},o=()=>{window.document.cookie="shubToken=;path=/",window.document.cookie="refreshToken=;path=/"},r=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={path:"/",...n};a.expires instanceof Date&&(a.expires=n.expires.toUTCString());let i="".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t));Object.keys(a).forEach(e=>{i+="; ".concat(e);let t=a[e];!0!==t&&(i+="=".concat(t))}),document.cookie=i},s=e=>{let t=document.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1"),"=([^;]*)")));return t?decodeURIComponent(t[1]):void 0},c=e=>{r(e,"",{"max-age":-1})}},7868:function(e){e.exports={main:"page_main__ux7yf",background:"page_background__MsYj6"}},2921:function(e){e.exports={mainContainer:"styles_mainContainer__8PDC2",internalContainer:"styles_internalContainer__wK3yv",innerContainer:"styles_innerContainer__hi6wB",newInventoryContainer:"styles_newInventoryContainer__JcYYq",newHubContainer:"styles_newHubContainer__1yhXU",breadcrumbsContainer:"styles_breadcrumbsContainer__73wu1",cut:"styles_cut__cbQGw",contentContainer:"styles_contentContainer__YRjtz",text:"styles_text__FqSnO",separator:"styles_separator___Y7rh",name:"styles_name___gaEv",last:"styles_last__tLuDP",wrapper:"styles_wrapper__MKy6D"}},1396:function(e,t,n){e.exports=n(8326)},3018:function(e,t,n){"use strict";var a=n(1289);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,r){if(r!==a){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},4275:function(e,t,n){e.exports=n(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[3908,8326,2971,2472,1744],function(){return e(e.s=1866)}),_N_E=e.O()}]);