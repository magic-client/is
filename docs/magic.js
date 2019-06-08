"use strict";function b(a){return l(a)||c(a)||j()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a,b){if(null==a)return{};var c,d,e=g(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function g(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function i(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function l(a){if(Array.isArray(a))return a}function m(a){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(!!(b&&!0!==b)&&("function"==typeof b[0]?[b]:k(b)))},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===m(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c===a||d||g(q,d=!0),c=a},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,j&&(l=o(l,k(j(c)),p)),e&&(h=s(h.parentNode,h,i,"string"==typeof(i=e(c))?w(i):i,m))};p(a.init)}}}(),o=n.h,h=n.app,q=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},r=q("a"),a=q("button"),s=q("code"),t=q("div"),u=q("footer"),v=q("h1"),w=q("h3"),x=q("header"),y=q("img"),z=q("input"),A=q("label"),B=q("li"),C=q("main"),D=q("nav"),E=q("p"),p=q("pre"),F=q("span"),G=q("ul"),H={cookies:{},description:"typechecking client lib for @magic.",gdpr:{allowAllCookiesButtonText:"Allow all",allowCookieButtonText:"Allow selected",cookieButtonText:"Awesome.",cookieText:"We are using the following cookies on this page",denyCookieButtonText:"Deny all",noCookieButtonText:"Awesome.",noCookieText:"This page does neither save, collect, nor share any personal data about you.",show:!0,title:"Magic Privacy Information"},logotext:"@magic-libraries/is",menu:[{text:"installation",to:"/#installation"},{text:"usage",to:"/#usage"},{text:"types",to:"/#types"},{text:"source",to:"/#source"}],pageClass:{},root:"/is/",theme:"dark",title:"@magic-libraries/is",url:"/is/"},I={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},J=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return u({class:"Footer"},[t({class:"Container"},[b,t({class:"Credits"},["made with a few bits of ",P({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),K(a)])},K=function(a){var b=a.gdpr,c=a.cookies;if(b.show)return c=Object.entries(c),t({class:{Gdpr:!0,show:b.show}},[z({type:"checkbox",name:"show-hide",id:"show-hide",checked:!b.show}),t({class:"Container"},[b.title&&w(b.title),b.content&&E(b.content),c.length?[b.cookieText&&E(b.cookieText),G(c.sort(function(a){var b=i(a,2),c=b[0],d=b[1].required;return d?0:1}).map(function(a){var b=i(a,2),c=b[0],d=b[1],e=d.info,f=d.allowed;return B([z({type:"checkbox",title:"allow",checked:void 0!==f&&f,onchange:[W.gdpr.allow,{name:c}]}),A([c,e&&[" - ",e]])])}))]:E(b.noCookieText),c.length?[A({class:"button",for:"show-hide",onclick:[W.gdpr.close,{allowed:!0}]},b.allowAllCookiesButtonText),A({class:"button",for:"show-hide",onclick:W.gdpr.close},b.allowCookieButtonText),A({class:"button",for:"show-hide",onclick:[W.gdpr.close,{allowed:!1}]},b.denyCookieButtonText)]:A({class:"button",for:"show-hide",onclick:W.gdpr.close},b.noCookieButtonText)])])},L=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=i(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=i(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?G({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return B([P({to:b},N({src:c}))])})):void 0},M=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.tagline,g=a.logotext,h=f(a,["logo","menu","tagline","logotext"]);return c||d||e?x({class:"Header"},[(c||g)&&P({to:h.root,class:"Logo"},[c&&N(c),g&&F(g)]),d&&Q({state:h,items:d}),b]):void 0},N=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),y(a)},O=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:W.changeTheme})},P=function(a,b){var c=a.to,d=f(a,["to"]),e=d.href,g=d.text,h=d.nofollow,i=d.noreferrer,j=d.onclick,k=f(d,["href","text","nofollow","noreferrer","onclick"]);c=c||e||"",k.href=c;var l=c.startsWith("/");return l?k.onclick=[W.go,I.mapClickToGo]:(k.target="_blank",k.rel="noopener",h&&(k.rel+=" nofollow"),i&&(k.rel+=" noreferrer")),r(k,[g,b])},Q=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.items,c=a["class"],e=void 0===c?"Menu":c,f=a.collapse,g=a.state;if(b.length)return g.hash&&(g.url+="#".concat(g.hash)),D({className:e},G(b.map(function(a){return R(d({},a,{state:g,collapse:void 0===f||f}))})))},R=function(a){var b=a.text,c=a.items,e=void 0===c?[]:c,g=a.state,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,k=f(a,["text","items","state","parentTo","collapse"]),l=g.url,m=g.root;if(k.to||b){var n={class:{}},o=k.to;o.startsWith("/#")&&(o=o.substr(1));var p=k.to[0],q="/"===p||"-"===p||"#"===p;if(i&&q)if("-"===p)o=i+o;else if("#"===p)o=i+o;else{var u=o.split("/")[1];if(u){var v=i.endsWith("/".concat(u,"/"));!v&&q&&(o=i+o)}}var r=o.startsWith(m);m&&q&&!r&&(o=m+o),k.to=o.replace(/\/\//g,"/");var s=l&&l.includes(k.to);l.endsWith(k.to)&&(n["class"].active=!0);var t=[];return(e.length&&s||!j)&&(t=G(e.map(function(a){return R(d({parentTo:k.to,state:g,collapse:j},a))}))),B(n,[k.to?P(k,b):F(k,b),t])}},S=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - not found";var d={id:"Magic",class:c.pageClass};return C(d,t({class:{Wrapper:!0}},U({state:c,page:b})))},T=function(b){"string"==typeof b&&(b={content:b});var c=b,d=c.content;return t({class:"Pre"},[t({class:"menu"},[a({onclick:[W.pre.clip,function(a){return{e:a,content:d}}]},"copy")]),p(V.pre.format(d))])},U=function(a){var b=a.page,c=a.state;return[M(c),t({class:"Page"},b),J(c)]},V={is:function(){var a=function(b,c){return"function"==typeof a[c]?a[c](b):m(b)===c};return a.number=function(a){return a===+a},a.integer=function(a){return a===+a&&a===(0|a)},a.float=function(a){return a===+a},a.array=function(a){return Array.isArray(a)},a.regexp=function(a){return a instanceof RegExp},a.date=function(a){return a instanceof Date},a.error=function(a){return a instanceof Error},a["null"]=a.nil=function(a){return null===a},a.promise=function(a){return a instanceof Promise},a}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=F({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return P({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?P({to:a},a):l(a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),F({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),F({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},m=function(a){return s({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(m)}}}()},W={changeTheme:function changeTheme(a){return d({},a,{pageClass:d({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a,b){return a.cookies[b.name].allowed=!0,d({},a)},close:function close(a,b){var c=b.allowed,e=a.cookies;return"boolean"==typeof c&&Object.entries(a.cookies).forEach(function(a){var b=i(a,2),f=b[0],g=b[1];e[f]=d({},g,{allowed:c})}),[d({},a,{gdpr:d({},a.gdpr,{show:!1}),cookies:e}),[X.gdpr.writeLocalStorage,{key:"gdpr",value:{cookies:a.cookies||[],show:!1}}]]},load:function load(a){return[a,[X.gdpr.readLocalStorage,{key:"gdpr",action:W.gdpr.show}]]},show:function show(a,b){return d({},a,{gdpr:d({},a.gdpr,b.value)})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),e=c.split("#"),f=i(e,2),g=f[0],h=f[1],j=void 0===h?"":h;if(g===a.url&&j===a.hash)return a;if(window.history.pushState({url:g,hash:j},"",c),j){var k=document.getElementById(j);k&&window.scrollTo(0,k.scrollTop),window.location.hash=j}else window.scrollTo(0,0);return d({},a,{url:g,hash:j,prev:a.url})},pop:function pop(a,b){var c=window.location,e=c.pathname,f=c.hash;return f=f.substring(1),b.state&&(e=b.state.url,f=b.state.hash),f?window.location.hash=f:window.scrollTo(0,0),d({},a,{url:e,hash:f})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},X={gdpr:{readLocalStorage:function readLocalStorage(a,b){var c=b.key,d=b.action,e=window.localStorage||{},f=e[c];"undefined"!=typeof f&&(f=JSON.parse(f)),a(d,{key:c,value:f})},writeLocalStorage:function writeLocalStorage(a,b){var c=b.key,d=b.value,e=window.localStorage||{};e[c]=JSON.stringify(d)}}},Y={"/is/":function is(a){return[v(a.title),E(a.description),L("magic-libraries/is"),w({id:"installation"},"installation"),T("npm install --save-exact magic-libraries/is"),w({id:"usage"},"usage"),E("in a page/component, just use the lib.is functions"),T("\nmodule.exports = () =>\n  div(\n    lib.is('a string', 'string')\n      ? 'it is a string'\n      : 'it is not a string'\n  )\n"),E("renders"),t(V.is("a string","string")?"it is a string":"it is not a string"),w({id:"types"},"supported types"),E("by default, magic will test for type equality using typeof."),T("\nis('a string', 'string') // true\nis({}, 'object')         // true\nis([], 'object')         // true\n"),E("if typeof would fail, is uses a number of builtin functions to determine the type of the value"),T("\nis([], 'array')              // true\nis(0, 'number')              // true\nis(1.1, 'float')             // true\nis (10, 'integer')           // true\nis(new Date(), 'date')       // true\nis(/regexp/, 'regexp')       // true\nis(new Error(), 'error')     // true\nis(null, 'null')             // true\nis(new Promise(), 'promise') // true\n"),E("for convenience, @magic-libraries/is also exports the alias functions it uses"),T("\nis.number(0)              // true\nis.integer(1)             // true\nis.float(1.1)             // true\nis.array([])              // true\nis.regexp(/t/)            // true\nis.date(new Date())       // true\nis.error(new Error())     // true\nis.null(null)             // true\nis.promise(new Promise()) // true\n"),w({id:"source"},"source"),E("the source for this page is in the"),P({to:"https://github.com/magic-libraries/is/tree/master/example"},"example directory"),E("and gets built and published to github using"),P({to:"https://github.com/magic/core"},"@magic/core"),O(a)]},"/is/404/":function is404(){return t("404 - not found")}};h({init:function init(){return W.gdpr.load(d({},H,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[I.listenPopState,W.pop]]},view:function view(a){var b=Y[a.url]?a.url:"/404/",c=Y[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),S({page:c,state:a})},node:document.getElementById("Magic")});