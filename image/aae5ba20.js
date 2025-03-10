/*[PATH @digikala/supernova/node_modules/jquery/dist/jquery.min.js]*/
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});



/*[PATH @digikala/supernova/node_modules/jquery-validation/dist/jquery.validate.min.js]*/
/*! jQuery Validation Plugin - v1.21.0 - 7/17/2024
 * https://jqueryvalidation.org/
 * Copyright (c) 2024 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,customElements:[],onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)});var f=[":text","[type='password']","[type='file']","select","textarea","[type='number']","[type='search']","[type='tel']","[type='url']","[type='email']","[type='datetime']","[type='date']","[type='month']","[type='week']","[type='time']","[type='datetime-local']","[type='range']","[type='color']","[type='radio']","[type='checkbox']","[contenteditable]","[type='button']"],g=["select","option","[type='radio']","[type='checkbox']"];a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",f.concat(this.settings.customElements).join(", "),b).on("click.validate",g.concat(this.settings.customElements).join(", "),b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={},d=["input","select","textarea","[contenteditable]"];return a(this.currentForm).find(d.concat(this.settings.customElements).join(", ")).not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);this.abortRequest(b),"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),this.settings&&this.settings.escapeHtml?h.text(c||""):h.html(c||"")):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass),this.settings&&this.settings.escapeHtml?h.text(c||""):h.html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return void 0===a?"":a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},elementAjaxPort:function(a){return"validate"+a.name},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()&&0===this.pendingRequest?(a(this.currentForm).trigger("submit"),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},abortRequest:function(b){var c;this.pending[b.name]&&(c=this.elementAjaxPort(b),a.ajaxAbort(c),this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass))},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a["date"===b?"dateISO":c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(a,d){b[a]="function"==typeof d&&"normalizer"!==a?d(c):d}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var a;b[this]&&(Array.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(a=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(a[0]),Number(a[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:-?\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c},maxlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d<=c},rangelength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c[0]&&d<=c[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),null!==i.valid&&i.old===h?i.valid:(i.old=h,i.valid=null,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:this.elementAjaxPort(c),dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(b,c,e){var f=b.port;"abort"===b.mode&&(a.ajaxAbort(f),d[f]=e)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(a.ajaxAbort(f),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a.ajaxAbort=function(a){d[a]&&(d[a].abort(),delete d[a])},a});


/*[PATH @digikala/supernova/node_modules/jquery-validation/dist/additional-methods.js]*/
/*!
 * jQuery Validation Plugin v1.21.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2024 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

( function() {

	function stripHtml( value ) {

		// Remove html tags and space chars
		return value.replace( /<.[^<>]*?>/g, " " ).replace( /&nbsp;|&#160;/gi, " " )

		// Remove punctuation
		.replace( /[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "" );
	}

	$.validator.addMethod( "maxWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length <= params;
	}, $.validator.format( "Please enter {0} words or less." ) );

	$.validator.addMethod( "minWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length >= params;
	}, $.validator.format( "Please enter at least {0} words." ) );

	$.validator.addMethod( "rangeWords", function( value, element, params ) {
		var valueStripped = stripHtml( value ),
			regex = /\b\w+\b/g;
		return this.optional( element ) || valueStripped.match( regex ).length >= params[ 0 ] && valueStripped.match( regex ).length <= params[ 1 ];
	}, $.validator.format( "Please enter between {0} and {1} words." ) );

}() );

/**
 * This is used in the United States to process payments, deposits,
 * or transfers using the Automated Clearing House (ACH) or Fedwire
 * systems. A very common use case would be to validate a form for
 * an ACH bill payment.
 */
$.validator.addMethod( "abaRoutingNumber", function( value ) {
	var checksum = 0;
	var tokens = value.split( "" );
	var length = tokens.length;

	// Length Check
	if ( length !== 9 ) {
		return false;
	}

	// Calc the checksum
	// https://en.wikipedia.org/wiki/ABA_routing_transit_number
	for ( var i = 0; i < length; i += 3 ) {
		checksum +=	parseInt( tokens[ i ], 10 )     * 3 +
					parseInt( tokens[ i + 1 ], 10 ) * 7 +
					parseInt( tokens[ i + 2 ], 10 );
	}

	// If not zero and divisible by 10 then valid
	if ( checksum !== 0 && checksum % 10 === 0 ) {
		return true;
	}

	return false;
}, "Please enter a valid routing number." );

// Accept a value from a file input based on a required mimetype
$.validator.addMethod( "accept", function( value, element, param ) {

	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace( /\s/g, "" ) : "image/*",
		optionalValue = this.optional( element ),
		i, file, regex;

	// Element is optional
	if ( optionalValue ) {
		return optionalValue;
	}

	if ( $( element ).attr( "type" ) === "file" ) {

		// Escape string to be used in the regex
		// see: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
		// Escape also "/*" as "/.*" as a wildcard
		typeParam = typeParam
				.replace( /[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&" )
				.replace( /,/g, "|" )
				.replace( /\/\*/g, "/.*" );

		// Check if the element has a FileList before checking each file
		if ( element.files && element.files.length ) {
			regex = new RegExp( ".?(" + typeParam + ")$", "i" );
			for ( i = 0; i < element.files.length; i++ ) {
				file = element.files[ i ];

				// Grab the mimetype from the loaded file, verify it matches
				if ( !file.type.match( regex ) ) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format( "Please enter a value with a valid mimetype." ) );

$.validator.addMethod( "alphanumeric", function( value, element ) {
	return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please." );

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod( "bankaccountNL", function( value, element ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( !( /^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test( value ) ) ) {
		return false;
	}

	// Now '11 check'
	var account = value.replace( / /g, "" ), // Remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring( pos, pos + 1 );
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number." );

$.validator.addMethod( "bankorgiroaccountNL", function( value, element ) {
	return this.optional( element ) ||
			( $.validator.methods.bankaccountNL.call( this, value, element ) ) ||
			( $.validator.methods.giroaccountNL.call( this, value, element ) );
}, "Please specify a valid bank or giro account number." );

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or digit ('0' for test (therefore not allowed), '1' denoting passive participant, '2' typically reverse-billing)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod( "bic", function( value, element ) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value.toUpperCase() );
}, "Please specify a valid BIC code." );

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 *
 * Spanish CIF structure:
 *
 * [ T ][ P ][ P ][ N ][ N ][ N ][ N ][ N ][ C ]
 *
 * Where:
 *
 * T: 1 character. Kind of Organization Letter: [ABCDEFGHJKLMNPQRSUVW]
 * P: 2 characters. Province.
 * N: 5 characters. Secuencial Number within the province.
 * C: 1 character. Control Digit: [0-9A-J].
 *
 * [ T ]: Kind of Organizations. Possible values:
 *
 *   A. Corporations
 *   B. LLCs
 *   C. General partnerships
 *   D. Companies limited partnerships
 *   E. Communities of goods
 *   F. Cooperative Societies
 *   G. Associations
 *   H. Communities of homeowners in horizontal property regime
 *   J. Civil Societies
 *   K. Old format
 *   L. Old format
 *   M. Old format
 *   N. Nonresident entities
 *   P. Local authorities
 *   Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
 *   R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
 *   S. Organs of State Administration and regions
 *   V. Agrarian Transformation
 *   W. Permanent establishments of non-resident in Spain
 *
 * [ C ]: Control Digit. It can be a number or a letter depending on T value:
 * [ T ]  -->  [ C ]
 * ------    ----------
 *   A         Number
 *   B         Number
 *   E         Number
 *   H         Number
 *   K         Letter
 *   P         Letter
 *   Q         Letter
 *   S         Letter
 *
 */
$.validator.addMethod( "cifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var cifRegEx = new RegExp( /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi );
	var letter  = value.substring( 0, 1 ), // [ T ]
		number  = value.substring( 1, 8 ), // [ P ][ P ][ N ][ N ][ N ][ N ][ N ]
		control = value.substring( 8, 9 ), // [ C ]
		all_sum = 0,
		even_sum = 0,
		odd_sum = 0,
		i, n,
		control_digit,
		control_letter;

	function isOdd( n ) {
		return n % 2 === 0;
	}

	// Quick format test
	if ( value.length !== 9 || !cifRegEx.test( value ) ) {
		return false;
	}

	for ( i = 0; i < number.length; i++ ) {
		n = parseInt( number[ i ], 10 );

		// Odd positions
		if ( isOdd( i ) ) {

			// Odd positions are multiplied first.
			n *= 2;

			// If the multiplication is bigger than 10 we need to adjust
			odd_sum += n < 10 ? n : n - 9;

		// Even positions
		// Just sum them
		} else {
			even_sum += n;
		}
	}

	all_sum = even_sum + odd_sum;
	control_digit = ( 10 - ( all_sum ).toString().substr( -1 ) ).toString();
	control_digit = parseInt( control_digit, 10 ) > 9 ? "0" : control_digit;
	control_letter = "JABCDEFGHI".substr( control_digit, 1 ).toString();

	// Control must be a digit
	if ( letter.match( /[ABEH]/ ) ) {
		return control === control_digit;

	// Control must be a letter
	} else if ( letter.match( /[KPQS]/ ) ) {
		return control === control_letter;
	}

	// Can be either
	return control === control_digit || control === control_letter;

}, "Please specify a valid CIF number." );

/*
 * Brazillian CNH number (Carteira Nacional de Habilitacao) is the License Driver number.
 * CNH numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cnhBR", function( value ) {

  // Removing special characters from value
  value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

  // Checking value to have 11 digits only
  if ( value.length !== 11 ) {
    return false;
  }

  var sum = 0, dsc = 0, firstChar,
		firstCN, secondCN, i, j, v;

  firstChar = value.charAt( 0 );

  if ( new Array( 12 ).join( firstChar ) === value ) {
    return false;
  }

  // Step 1 - using first Check Number:
  for ( i = 0, j = 9, v = 0; i < 9; ++i, --j ) {
    sum += +( value.charAt( i ) * j );
  }

  firstCN = sum % 11;
  if ( firstCN >= 10 ) {
    firstCN = 0;
    dsc = 2;
  }

  sum = 0;
  for ( i = 0, j = 1, v = 0; i < 9; ++i, ++j ) {
    sum += +( value.charAt( i ) * j );
  }

  secondCN = sum % 11;
  if ( secondCN >= 10 ) {
    secondCN = 0;
  } else {
    secondCN = secondCN - dsc;
  }

  return ( String( firstCN ).concat( secondCN ) === value.substr( -2 ) );

}, "Please specify a valid CNH number." );

/*
 * Brazillian value number (Cadastrado de Pessoas Juridica).
 * value numbers have 14 digits in total: 12 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cnpjBR", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	// Removing no number
	value = value.replace( /[^\d]+/g, "" );

	// Checking value to have 14 digits only
	if ( value.length !== 14 ) {
		return false;
	}

	// Elimina values invalidos conhecidos
	if ( value === "00000000000000" ||
		value === "11111111111111" ||
		value === "22222222222222" ||
		value === "33333333333333" ||
		value === "44444444444444" ||
		value === "55555555555555" ||
		value === "66666666666666" ||
		value === "77777777777777" ||
		value === "88888888888888" ||
		value === "99999999999999" ) {
		return false;
	}

	// Valida DVs
	var tamanho = ( value.length - 2 );
	var numeros = value.substring( 0, tamanho );
	var digitos = value.substring( tamanho );
	var soma = 0;
	var pos = tamanho - 7;

	for ( var i = tamanho; i >= 1; i-- ) {
		soma += numeros.charAt( tamanho - i ) * pos--;
		if ( pos < 2 ) {
			pos = 9;
		}
	}

	var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	if ( resultado !== parseInt( digitos.charAt( 0 ), 10 ) ) {
		return false;
	}

	tamanho = tamanho + 1;
	numeros = value.substring( 0, tamanho );
	soma = 0;
	pos = tamanho - 7;

	for ( var il = tamanho; il >= 1; il-- ) {
		soma += numeros.charAt( tamanho - il ) * pos--;
		if ( pos < 2 ) {
			pos = 9;
		}
	}

	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	if ( resultado !== parseInt( digitos.charAt( 1 ), 10 ) ) {
		return false;
	}

	return true;

}, "Please specify a CNPJ value number." );

/*
 * Brazillian CPF number (Cadastrado de Pessoas Físicas) is the equivalent of a Brazilian tax registration number.
 * CPF numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cpfBR", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	var sum = 0,
		firstCN, secondCN, checkResult, i;

	firstCN = parseInt( value.substring( 9, 10 ), 10 );
	secondCN = parseInt( value.substring( 10, 11 ), 10 );

	checkResult = function( sum, cn ) {
		var result = ( sum * 10 ) % 11;
		if ( ( result === 10 ) || ( result === 11 ) ) {
			result = 0;
		}
		return ( result === cn );
	};

	// Checking for dump data
	if ( value === "" ||
		value === "00000000000" ||
		value === "11111111111" ||
		value === "22222222222" ||
		value === "33333333333" ||
		value === "44444444444" ||
		value === "55555555555" ||
		value === "66666666666" ||
		value === "77777777777" ||
		value === "88888888888" ||
		value === "99999999999"
	) {
		return false;
	}

	// Step 1 - using first Check Number:
	for ( i = 1; i <= 9; i++ ) {
		sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 11 - i );
	}

	// If first Check Number (CN) is valid, move to Step 2 - using second Check Number:
	if ( checkResult( sum, firstCN ) ) {
		sum = 0;
		for ( i = 1; i <= 10; i++ ) {
			sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 12 - i );
		}
		return checkResult( sum, secondCN );
	}
	return false;

}, "Please specify a valid CPF number." );

// https://jqueryvalidation.org/creditcard-method/
// based on https://en.wikipedia.org/wiki/Luhn_algorithm
$.validator.addMethod( "creditcard", function( value, element ) {
	if ( this.optional( element ) ) {
		return "dependency-mismatch";
	}

	// Accept only spaces, digits and dashes
	if ( /[^0-9 \-]+/.test( value ) ) {
		return false;
	}

	var nCheck = 0,
		nDigit = 0,
		bEven = false,
		n, cDigit;

	value = value.replace( /\D/g, "" );

	// Basing min and max length on
	// https://dev.ean.com/general-info/valid-card-types/
	if ( value.length < 13 || value.length > 19 ) {
		return false;
	}

	for ( n = value.length - 1; n >= 0; n-- ) {
		cDigit = value.charAt( n );
		nDigit = parseInt( cDigit, 10 );
		if ( bEven ) {
			if ( ( nDigit *= 2 ) > 9 ) {
				nDigit -= 9;
			}
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return ( nCheck % 10 ) === 0;
}, "Please enter a valid credit card number." );

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod( "creditcardtypes", function( value, element, param ) {
	if ( /[^0-9\-]+/.test( value ) ) {
		return false;
	}

	value = value.replace( /\D/g, "" );

	var validTypes = 0x0000;

	if ( param.mastercard ) {
		validTypes |= 0x0001;
	}
	if ( param.visa ) {
		validTypes |= 0x0002;
	}
	if ( param.amex ) {
		validTypes |= 0x0004;
	}
	if ( param.dinersclub ) {
		validTypes |= 0x0008;
	}
	if ( param.enroute ) {
		validTypes |= 0x0010;
	}
	if ( param.discover ) {
		validTypes |= 0x0020;
	}
	if ( param.jcb ) {
		validTypes |= 0x0040;
	}
	if ( param.unknown ) {
		validTypes |= 0x0080;
	}
	if ( param.all ) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if ( validTypes & 0x0001 && ( /^(5[12345])/.test( value ) || /^(2[234567])/.test( value ) ) ) { // Mastercard
		return value.length === 16;
	}
	if ( validTypes & 0x0002 && /^(4)/.test( value ) ) { // Visa
		return value.length === 16;
	}
	if ( validTypes & 0x0004 && /^(3[47])/.test( value ) ) { // Amex
		return value.length === 15;
	}
	if ( validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test( value ) ) { // Dinersclub
		return value.length === 14;
	}
	if ( validTypes & 0x0010 && /^(2(014|149))/.test( value ) ) { // Enroute
		return value.length === 15;
	}
	if ( validTypes & 0x0020 && /^(6011)/.test( value ) ) { // Discover
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(3)/.test( value ) ) { // Jcb
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(2131|1800)/.test( value ) ) { // Jcb
		return value.length === 15;
	}
	if ( validTypes & 0x0080 ) { // Unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number." );

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 *  }
 */
$.validator.addMethod( "currency", function( value, element, param ) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[ 0 ],
        soft = isParamString ? true : param[ 1 ],
        regex;

    symbol = symbol.replace( /,/g, "" );
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp( regex );
    return this.optional( element ) || regex.test( value );

}, "Please specify a valid currency." );

$.validator.addMethod( "dateFA", function( value, element ) {
	return this.optional( element ) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test( value );
}, $.validator.messages.date );

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "dateITA", function( value, element ) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test( value ) ) {
		adata = value.split( "/" );
		gg = parseInt( adata[ 0 ], 10 );
		mm = parseInt( adata[ 1 ], 10 );
		aaaa = parseInt( adata[ 2 ], 10 );
		xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional( element ) || check;
}, $.validator.messages.date );

$.validator.addMethod( "dateNL", function( value, element ) {
	return this.optional( element ) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test( value );
}, $.validator.messages.date );

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod( "extension", function( value, element, param ) {
	param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|gif";
	return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
}, $.validator.format( "Please enter a value with a valid extension." ) );

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod( "giroaccountNL", function( value, element ) {
	return this.optional( element ) || /^[0-9]{1,7}$/.test( value );
}, "Please specify a valid giro account number." );

$.validator.addMethod( "greaterThan", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-greaterThan-blur" ).length ) {
        target.addClass( "validate-greaterThan-blur" ).on( "blur.validate-greaterThan", function() {
            $( element ).valid();
        } );
    }

    return value > target.val();
}, "Please enter a greater value." );

$.validator.addMethod( "greaterThanEqual", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-greaterThanEqual-blur" ).length ) {
        target.addClass( "validate-greaterThanEqual-blur" ).on( "blur.validate-greaterThanEqual", function() {
            $( element ).valid();
        } );
    }

    return value >= target.val();
}, "Please enter a greater value." );

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 */
$.validator.addMethod( "iban", function( value, element ) {

	// Some quick simple tests to prevent needless work
	if ( this.optional( element ) ) {
		return true;
	}

	// Remove spaces and to upper case
	var iban = value.replace( / /g, "" ).toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	// Check for IBAN code length.
	// It contains:
	// country code ISO 3166-1 - two letters,
	// two check digits,
	// Basic Bank Account Number (BBAN) - up to 30 chars
	var minimalIBANlength = 5;
	if ( iban.length < minimalIBANlength ) {
		return false;
	}

	// Check the country code and find the country specific format
	countrycode = iban.substring( 0, 2 );
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[ countrycode ];

	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if ( typeof bbanpattern !== "undefined" ) {
		ibanregexp = new RegExp( "^[A-Z]{2}\\d{2}" + bbanpattern + "$", "" );
		if ( !( ibanregexp.test( iban ) ) ) {
			return false; // Invalid country specific format
		}
	}

	// Now check the checksum, first convert to digits
	ibancheck = iban.substring( 4, iban.length ) + iban.substring( 0, 4 );
	for ( i = 0; i < ibancheck.length; i++ ) {
		charAt = ibancheck.charAt( i );
		if ( charAt !== "0" ) {
			leadingZeroes = false;
		}
		if ( !leadingZeroes ) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf( charAt );
		}
	}

	// Calculate the result of: ibancheckdigits % 97
	for ( p = 0; p < ibancheckdigits.length; p++ ) {
		cChar = ibancheckdigits.charAt( p );
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN." );

$.validator.addMethod( "integer", function( value, element ) {
	return this.optional( element ) || /^-?\d+$/.test( value );
}, "A positive or negative non-decimal number please." );

$.validator.addMethod( "ipv4", function( value, element ) {
	return this.optional( element ) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test( value );
}, "Please enter a valid IP v4 address." );

$.validator.addMethod( "ipv6", function( value, element ) {
	return this.optional( element ) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test( value );
}, "Please enter a valid IP v6 address." );

$.validator.addMethod( "lessThan", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-lessThan-blur" ).length ) {
        target.addClass( "validate-lessThan-blur" ).on( "blur.validate-lessThan", function() {
            $( element ).valid();
        } );
    }

    return value < target.val();
}, "Please enter a lesser value." );

$.validator.addMethod( "lessThanEqual", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-lessThanEqual-blur" ).length ) {
        target.addClass( "validate-lessThanEqual-blur" ).on( "blur.validate-lessThanEqual", function() {
            $( element ).valid();
        } );
    }

    return value <= target.val();
}, "Please enter a lesser value." );

$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please." );

$.validator.addMethod( "letterswithbasicpunc", function( value, element ) {
	return this.optional( element ) || /^[a-z\-.,()'"\s]+$/i.test( value );
}, "Letters or punctuation only please." );

// Limit the number of files in a FileList.
$.validator.addMethod( "maxfiles", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}

	if ( $( element ).attr( "type" ) === "file" ) {
		if ( element.files && element.files.length > param ) {
			return false;
		}
	}

	return true;
}, $.validator.format( "Please select no more than {0} files." ) );

// Limit the size of each individual file in a FileList.
$.validator.addMethod( "maxsize", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}

	if ( $( element ).attr( "type" ) === "file" ) {
		if ( element.files && element.files.length ) {
			for ( var i = 0; i < element.files.length; i++ ) {
				if ( element.files[ i ].size > param ) {
					return false;
				}
			}
		}
	}

	return true;
}, $.validator.format( "File size must not exceed {0} bytes each." ) );

// Limit the size of all files in a FileList.
$.validator.addMethod( "maxsizetotal", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}

	if ( $( element ).attr( "type" ) === "file" ) {
		if ( element.files && element.files.length ) {
			var totalSize = 0;

			for ( var i = 0; i < element.files.length; i++ ) {
				totalSize += element.files[ i ].size;
				if ( totalSize > param ) {
					return false;
				}
			}
		}
	}

	return true;
}, $.validator.format( "Total size of all files must not exceed {0} bytes." ) );


$.validator.addMethod( "mobileNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid mobile number." );

$.validator.addMethod( "mobileRU", function( phone_number, element ) {
	var ruPhone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test( ruPhone_number );
}, "Please specify a valid mobile number." );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "mobileUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/ );
}, "Please specify a valid mobile number." );

$.validator.addMethod( "netmask", function( value, element ) {
    return this.optional( element ) || /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test( value );
}, "Please enter a valid netmask." );

/*
 * The NIE (Número de Identificación de Extranjero) is a Spanish tax identification number assigned by the Spanish
 * authorities to any foreigner.
 *
 * The NIE is the equivalent of a Spaniards Número de Identificación Fiscal (NIF) which serves as a fiscal
 * identification number. The CIF number (Certificado de Identificación Fiscal) is equivalent to the NIF, but applies to
 * companies rather than individuals. The NIE consists of an 'X' or 'Y' followed by 7 or 8 digits then another letter.
 */
$.validator.addMethod( "nieES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var nieRegEx = new RegExp( /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi );
	var validChars = "TRWAGMYFPDXBNJZSQVHLCKET",
		letter = value.substr( value.length - 1 ).toUpperCase(),
		number;

	value = value.toString().toUpperCase();

	// Quick format test
	if ( value.length > 10 || value.length < 9 || !nieRegEx.test( value ) ) {
		return false;
	}

	// X means same number
	// Y means number + 10000000
	// Z means number + 20000000
	value = value.replace( /^[X]/, "0" )
		.replace( /^[Y]/, "1" )
		.replace( /^[Z]/, "2" );

	number = value.length === 9 ? value.substr( 0, 8 ) : value.substr( 0, 9 );

	return validChars.charAt( parseInt( number, 10 ) % 23 ) === letter;

}, "Please specify a valid NIE number." );

/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}

	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 1 ) % 23 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

/*
 * Numer identyfikacji podatkowej ( NIP ) is the way tax identification used in Poland for companies
 */
$.validator.addMethod( "nipPL", function( value ) {
	"use strict";

	value = value.replace( /[^0-9]/g, "" );

	if ( value.length !== 10 ) {
		return false;
	}

	var arrSteps = [ 6, 5, 7, 2, 3, 4, 5, 6, 7 ];
	var intSum = 0;
	for ( var i = 0; i < 9; i++ ) {
		intSum += arrSteps[ i ] * value[ i ];
	}
	var int2 = intSum % 11;
	var intControlNr = ( int2 === 10 ) ? 0 : int2;

	return ( intControlNr === parseInt( value[ 9 ], 10 ) );
}, "Please specify a valid NIP number." );

/**
 * Created for project jquery-validation.
 * @Description Brazillian PIS or NIS number (Número de Identificação Social Pis ou Pasep) is the equivalent of a
 * Brazilian tax registration number NIS of PIS numbers have 11 digits in total: 10 numbers followed by 1 check numbers
 * that are being used for validation.
 * @copyright (c) 21/08/2018 13:14, Cleiton da Silva Mendonça
 * @author Cleiton da Silva Mendonça <cleiton.mendonca@gmail.com>
 * @link http://gitlab.com/csmendonca Gitlab of Cleiton da Silva Mendonça
 * @link http://github.com/csmendonca Github of Cleiton da Silva Mendonça
 */
$.validator.addMethod( "nisBR", function( value ) {
	var number;
	var cn;
	var sum = 0;
	var dv;
	var count;
	var multiplier;

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	//Get check number of value
	cn = parseInt( value.substring( 10, 11 ), 10 );

	//Get number with 10 digits of the value
	number = parseInt( value.substring( 0, 10 ), 10 );

	for ( count = 2; count < 12; count++ ) {
		multiplier = count;
		if ( count === 10 ) {
			multiplier = 2;
		}
		if ( count === 11 ) {
			multiplier = 3;
		}
		sum += ( ( number % 10 ) * multiplier );
		number = parseInt( number / 10, 10 );
	}
	dv = ( sum % 11 );

	if ( dv > 1 ) {
		dv = ( 11 - dv );
	} else {
		dv = 0;
	}

	if ( cn === dv ) {
		return true;
	} else {
		return false;
	}
}, "Please specify a valid NIS/PIS number." );

$.validator.addMethod( "notEqualTo", function( value, element, param ) {
	return this.optional( element ) || !$.validator.methods.equalTo.call( this, value, element, param );
}, "Please enter a different value, values must not be the same." );

$.validator.addMethod( "nowhitespace", function( value, element ) {
	return this.optional( element ) || /^\S+$/i.test( value );
}, "No white space please." );

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod( "pattern", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( typeof param === "string" ) {
		param = new RegExp( "^(?:" + param + ")$" );
	}
	return param.test( value );
}, "Invalid format." );

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod( "phoneNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid phone number." );

/**
 * Polish telephone numbers have 9 digits.
 *
 * Mobile phone numbers starts with following digits:
 * 45, 50, 51, 53, 57, 60, 66, 69, 72, 73, 78, 79, 88.
 *
 * Fixed-line numbers starts with area codes:
 * 12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 29, 32, 33,
 * 34, 41, 42, 43, 44, 46, 48, 52, 54, 55, 56, 58, 59, 61,
 * 62, 63, 65, 67, 68, 71, 74, 75, 76, 77, 81, 82, 83, 84,
 * 85, 86, 87, 89, 91, 94, 95.
 *
 * Ministry of National Defence numbers and VoIP numbers starts with 26 and 39.
 *
 * Excludes intelligent networks (premium rate, shared cost, free phone numbers).
 *
 * Poland National Numbering Plan http://www.itu.int/oth/T02020000A8/en
 */
$.validator.addMethod( "phonePL", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	var regexp = /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;
	return this.optional( element ) || regexp.test( phone_number );
}, "Please specify a valid phone number." );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */

// Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod( "phonesUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/ );
}, "Please specify a valid uk phone number." );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "phoneUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
}, "Please specify a valid phone number." );

/**
 * Matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod( "phoneUS", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/ );
}, "Please specify a valid phone number." );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod( "postalcodeBR", function( cep_value, element ) {
	return this.optional( element ) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP válido." );

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test( value );
}, "Please specify a valid postal code." );

/* Matches Italian postcode (CAP) */
$.validator.addMethod( "postalcodeIT", function( value, element ) {
	return this.optional( element ) || /^\d{5}$/.test( value );
}, "Please specify a valid postal code." );

$.validator.addMethod( "postalcodeNL", function( value, element ) {
	return this.optional( element ) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test( value );
}, "Please specify a valid postal code." );

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod( "postcodeUK", function( value, element ) {
	return this.optional( element ) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test( value );
}, "Please specify a valid UK postcode." );

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod( "require_from_group", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
		isValid = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_req_grp", validator );

	// If element isn't being validated, run each require_from_group field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please fill at least {0} of these fields." ) );

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod( "skip_or_fill_minimum", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_skip" ) ? $fieldsFirst.data( "valid_skip" ) : $.extend( {}, this ),
		numberFilled = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length,
		isValid = numberFilled === 0 || numberFilled >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_skip", validator );

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please either skip these fields or fill at least {0} of them." ) );

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 */
$.validator.addMethod( "stateUS", function( value, element, options ) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if ( !includeTerritories && !includeMilitary ) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if ( includeTerritories && includeMilitary ) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if ( includeTerritories ) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp( regex ) : new RegExp( regex, "i" );
	return this.optional( element ) || regex.test( value );
}, "Please specify a valid state." );

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod( "strippedminlength", function( value, element, param ) {
	return $( value ).text().length >= param;
}, $.validator.format( "Please enter at least {0} characters." ) );

$.validator.addMethod( "time", function( value, element ) {
	return this.optional( element ) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test( value );
}, "Please enter a valid time, between 00:00 and 23:59." );

$.validator.addMethod( "time12h", function( value, element ) {
	return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
}, "Please enter a valid time in 12-hour am/pm format." );

// Same as url, but TLD is optional
$.validator.addMethod( "url2", function( value, element ) {
	return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?)|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff])|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62}\.)))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
}, $.validator.messages.url );

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "vinUS", function( v ) {
    if ( v.length !== 17 ) {
        return false;
    }

    var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
        VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
        FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
        rs = 0,
        i, n, d, f, cd, cdv;

    for ( i = 0; i < 17; i++ ) {
        f = FL[ i ];
        d = v.slice( i, i + 1 );
        if ( isNaN( d ) ) {
            d = d.toUpperCase();
            n = VL[ LL.indexOf( d ) ];
        } else {
            n = parseInt( d, 10 );
        }
        if ( i === 8 )
        {
            cdv = n;
            if ( d === "X" ) {
                cdv = 10;
            }
        }
        rs += n * f;
    }
    cd = rs % 11;
    if ( cd === cdv ) {
        return true;
    }
    return false;
}, "The specified vehicle identification number (VIN) is invalid." );

$.validator.addMethod( "zipcodeUS", function( value, element ) {
	return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
}, "The specified US ZIP Code is invalid." );

$.validator.addMethod( "ziprange", function( value, element ) {
	return this.optional( element ) || /^90[2-5]\d\{2\}-\d{4}$/.test( value );
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx." );
return $;
}));


/*[PATH @digikala/supernova-digistyle-desktop/assets/local/js/sentry.min.js]*/
/*! @sentry/browser 5.5.0 (994247d6) | https://github.com/getsentry/sentry-javascript */
var Sentry=function(n){var t=function(n,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,r)};function r(n,r){function e(){this.constructor=n}t(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}var e,i,o,u=function(){return(u=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)};function c(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,i,o=r.call(n),u=[];try{for(;(void 0===t||t-- >0)&&!(e=o.next()).done;)u.push(e.value)}catch(n){i={error:n}}finally{try{e&&!e.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return u}function s(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(c(arguments[t]));return n}!function(n){n[n.None=0]="None",n[n.Error=1]="Error",n[n.Debug=2]="Debug",n[n.Verbose=3]="Verbose"}(e||(e={})),(i=n.Severity||(n.Severity={})).Fatal="fatal",i.Error="error",i.Warning="warning",i.Log="log",i.Info="info",i.Debug="debug",i.Critical="critical",function(n){n.fromString=function(t){switch(t){case"debug":return n.Debug;case"info":return n.Info;case"warn":case"warning":return n.Warning;case"error":return n.Error;case"fatal":return n.Fatal;case"critical":return n.Critical;case"log":default:return n.Log}}}(n.Severity||(n.Severity={})),(o=n.Status||(n.Status={})).Unknown="unknown",o.Skipped="skipped",o.Success="success",o.RateLimit="rate_limit",o.Invalid="invalid",o.Failed="failed",function(n){n.fromHttpCode=function(t){return t>=200&&t<300?n.Success:429===t?n.RateLimit:t>=400&&t<500?n.Invalid:t>=500?n.Failed:n.Unknown}}(n.Status||(n.Status={}));var a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,t){return n.__proto__=t,n}:function(n,t){for(var r in t)n.hasOwnProperty(r)||(n[r]=t[r]);return n});var f=function(n){function t(t){var r=this.constructor,e=n.call(this,t)||this;return e.message=t,e.name=r.prototype.constructor.name,a(e,r.prototype),e}return r(t,n),t}(Error);function h(n){switch(Object.prototype.toString.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return n instanceof Error}}function l(n){return"[object ErrorEvent]"===Object.prototype.toString.call(n)}function v(n){return"[object DOMError]"===Object.prototype.toString.call(n)}function d(n){return"[object String]"===Object.prototype.toString.call(n)}function p(n){return null===n||"object"!=typeof n&&"function"!=typeof n}function m(n){return"[object Object]"===Object.prototype.toString.call(n)}function y(n){return Boolean(n&&n.then&&"function"==typeof n.then)}var b={};function w(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:b}function g(){var n=w(),t=n.crypto||n.msCrypto;if(void 0!==t&&t.getRandomValues){var r=new Uint16Array(8);t.getRandomValues(r),r[3]=4095&r[3]|16384,r[4]=16383&r[4]|32768;var e=function(n){for(var t=n.toString(16);t.length<4;)t="0"+t;return t};return e(r[0])+e(r[1])+e(r[2])+e(r[3])+e(r[4])+e(r[5])+e(r[6])+e(r[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(n){var t=16*Math.random()|0;return("x"===n?t:3&t|8).toString(16)})}function E(n){if(!n)return{};var t=n.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};var r=t[6]||"",e=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+r+e}}function x(n){if(n.message)return n.message;if(n.exception&&n.exception.values&&n.exception.values[0]){var t=n.exception.values[0];return t.type&&t.value?t.type+": "+t.value:t.type||t.value||n.event_id||"<unknown>"}return n.event_id||"<unknown>"}function j(n){var t=w();if(!("console"in t))return n();var r=t.console,e={};["debug","info","warn","error","log","assert"].forEach(function(n){n in t.console&&r[n].__sentry__&&(e[n]=r[n].__sentry_wrapped__,r[n]=r[n].__sentry_original__)});var i=n();return Object.keys(e).forEach(function(n){r[n]=e[n]}),i}function _(n,t,r,e){void 0===e&&(e={handled:!0,type:"generic"}),n.exception=n.exception||{},n.exception.values=n.exception.values||[],n.exception.values[0]=n.exception.values[0]||{},n.exception.values[0].value=n.exception.values[0].value||t||"",n.exception.values[0].type=n.exception.values[0].type||r||"Error",n.exception.values[0].mechanism=n.exception.values[0].mechanism||e}var S=w(),O="Sentry Logger ",k=function(){function n(){this.t=!1}return n.prototype.disable=function(){this.t=!1},n.prototype.enable=function(){this.t=!0},n.prototype.log=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];this.t&&j(function(){S.console.log(O+"[Log]: "+n.join(" "))})},n.prototype.warn=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];this.t&&j(function(){S.console.warn(O+"[Warn]: "+n.join(" "))})},n.prototype.error=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];this.t&&j(function(){S.console.error(O+"[Error]: "+n.join(" "))})},n}();S.__SENTRY__=S.__SENTRY__||{};var T=S.__SENTRY__.logger||(S.__SENTRY__.logger=new k),R=function(){function n(){this.i="function"==typeof WeakSet,this.o=this.i?new WeakSet:[]}return n.prototype.memoize=function(n){if(this.i)return!!this.o.has(n)||(this.o.add(n),!1);for(var t=0;t<this.o.length;t++){if(this.o[t]===n)return!0}return this.o.push(n),!1},n.prototype.unmemoize=function(n){if(this.i)this.o.delete(n);else for(var t=0;t<this.o.length;t++)if(this.o[t]===n){this.o.splice(t,1);break}},n}();function D(n,t,r){if(t in n){var e=n[t],i=r(e);if("function"==typeof i)try{i.prototype=i.prototype||{},Object.defineProperties(i,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:e},__sentry_wrapped__:{enumerable:!1,value:i}})}catch(n){}n[t]=i}}function I(n){return function(n){return~-encodeURI(n).split(/%..|./).length}(JSON.stringify(n))}function C(n,t,r){void 0===t&&(t=3),void 0===r&&(r=102400);var e=L(n,t);return I(e)>r?C(n,t-1,r):e}function N(n,t){return"domain"===t&&"object"==typeof n&&n.u?"[Domain]":"domainEmitter"===t?"[DomainEmitter]":"undefined"!=typeof global&&n===global?"[Global]":"undefined"!=typeof window&&n===window?"[Window]":"undefined"!=typeof document&&n===document?"[Document]":"undefined"!=typeof Event&&n instanceof Event?Object.getPrototypeOf(n)?n.constructor.name:"Event":m(r=n)&&"nativeEvent"in r&&"preventDefault"in r&&"stopPropagation"in r?"[SyntheticEvent]":Number.isNaN(n)?"[NaN]":void 0===n?"[undefined]":"function"==typeof n?"[Function: "+(n.name||"<unknown-function-name>")+"]":n;var r}function A(n,t,r,e){if(void 0===r&&(r=1/0),void 0===e&&(e=new R),0===r)return function(n){var t=Object.prototype.toString.call(n);if("string"==typeof n)return n;if("[object Object]"===t)return"[Object]";if("[object Array]"===t)return"[Array]";var r=N(n);return p(r)?r:t}(t);if(null!=t&&"function"==typeof t.toJSON)return t.toJSON();var i=N(t,n);if(p(i))return i;var o=h(t)?function(n){var t={message:n.message,name:n.name,stack:n.stack};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}(t):t,u=Array.isArray(t)?[]:{};if(e.memoize(t))return"[Circular ~]";for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(u[c]=A(c,o[c],r-1,e));return e.unmemoize(t),u}function L(n,t){try{return JSON.parse(JSON.stringify(n,function(n,r){return A(n,r,t)}))}catch(n){return"**non-serializable**"}}var M,U=function(){function n(n){this.s=n,this.h=[]}return n.prototype.isReady=function(){return void 0===this.s||this.length()<this.s},n.prototype.add=function(n){var t=this;return this.isReady()?(-1===this.h.indexOf(n)&&this.h.push(n),n.then(function(){return t.remove(n)}).catch(function(){return t.remove(n).catch(function(){})}),n):Promise.reject(new f("Not adding Promise due to buffer limit reached."))},n.prototype.remove=function(n){return this.h.splice(this.h.indexOf(n),1)[0]},n.prototype.length=function(){return this.h.length},n.prototype.drain=function(n){var t=this;return new Promise(function(r){var e=setTimeout(function(){n&&n>0&&r(!1)},n);Promise.all(t.h).then(function(){clearTimeout(e),r(!0)}).catch(function(){r(!0)})})},n}();function F(n,t){return void 0===t&&(t=0),"string"!=typeof n||0===t?n:n.length<=t?n:n.substr(0,t)+"..."}function P(n,t){if(!Array.isArray(n))return"";for(var r=[],e=0;e<n.length;e++){var i=n[e];try{r.push(String(i))}catch(n){r.push("[value cannot be serialized]")}}return r.join(t)}function $(n,t){if(void 0===t&&(t=40),!n.length)return"[object has no keys]";if(n[0].length>=t)return F(n[0],t);for(var r=n.length;r>0;r--){var e=n.slice(0,r).join(", ");if(!(e.length>t))return r===n.length?e:F(e,t)}return""}function q(n,t){return r=t,"[object RegExp]"===Object.prototype.toString.call(r)?t.test(n):"string"==typeof t&&n.includes(t);var r}function H(){if(!("fetch"in w()))return!1;try{return new Headers,new Request(""),new Response,!0}catch(n){return!1}}function W(){if(!H())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch(n){return!1}}!function(n){n.PENDING="PENDING",n.RESOLVED="RESOLVED",n.REJECTED="REJECTED"}(M||(M={}));var B=function(){function n(n){var t=this;this.l=M.PENDING,this.v=[],this.p=function(n){t.m(n,M.RESOLVED)},this.g=function(n){t.m(n,M.REJECTED)},this.m=function(n,r){t.l===M.PENDING&&(y(n)?n.then(t.p,t.g):(t.j=n,t.l=r,t._()))},this._=function(){t.l!==M.PENDING&&(t.l===M.REJECTED?t.v.forEach(function(n){return n.onFail&&n.onFail(t.j)}):t.v.forEach(function(n){return n.onSuccess&&n.onSuccess(t.j)}),t.v=[])},this.S=function(n){t.v=t.v.concat(n),t._()};try{n(this.p,this.g)}catch(n){this.g(n)}}return n.prototype.then=function(t,r){var e=this;return new n(function(n,i){e.S({onFail:function(t){if(r)try{return void n(r(t))}catch(n){return void i(n)}else i(t)},onSuccess:function(r){if(t)try{return void n(t(r))}catch(n){return void i(n)}else n(r)}})})},n.prototype.catch=function(n){return this.then(function(n){return n},n)},n.prototype.toString=function(){return"[object SyncPromise]"},n.resolve=function(t){return new n(function(n){n(t)})},n.reject=function(t){return new n(function(n,r){r(t)})},n}(),J=/^[ \t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \t]*$/,X=function(){function n(n,t,r,e){void 0===n&&(n=g()),void 0===t&&(t=g().substring(16)),this.O=n,this.k=t,this.T=r,this.R=e}return n.prototype.setParent=function(n){return this.R=n,this},n.prototype.setSampled=function(n){return this.T=n,this},n.fromTraceparent=function(t){var r=t.match(J);if(r){var e=void 0;"1"===r[3]?e=!0:"0"===r[3]&&(e=!1);var i=new n(r[1],r[2],e);return new n(r[1],void 0,e,i)}},n.prototype.toTraceparent=function(){var n="";return!0===this.T?n="-1":!1===this.T&&(n="-0"),this.O+"-"+this.k+n},n.prototype.toJSON=function(){return{parent:this.R&&this.R.toJSON()||void 0,sampled:this.T,span_id:this.k,trace_id:this.O}},n}(),G=function(){function n(){this.D=!1,this.I=[],this.C=[],this.N=[],this.A={},this.L={},this.M={},this.U={}}return n.prototype.addScopeListener=function(n){this.I.push(n)},n.prototype.addEventProcessor=function(n){return this.C.push(n),this},n.prototype.F=function(){var n=this;this.D||(this.D=!0,setTimeout(function(){n.I.forEach(function(t){t(n)}),n.D=!1}))},n.prototype.P=function(n,t,r,e){var i=this;return void 0===e&&(e=0),new B(function(o,c){var s=n[e];if(null===t||"function"!=typeof s)o(t);else{var a=s(u({},t),r);y(a)?a.then(function(t){return i.P(n,t,r,e+1).then(o)}).catch(c):i.P(n,a,r,e+1).then(o).catch(c)}})},n.prototype.setUser=function(n){return this.A=L(n),this.F(),this},n.prototype.setTags=function(n){return this.L=u({},this.L,L(n)),this.F(),this},n.prototype.setTag=function(n,t){var r;return this.L=u({},this.L,((r={})[n]=L(t),r)),this.F(),this},n.prototype.setExtras=function(n){return this.M=u({},this.M,L(n)),this.F(),this},n.prototype.setExtra=function(n,t){var r;return this.M=u({},this.M,((r={})[n]=L(t),r)),this.F(),this},n.prototype.setFingerprint=function(n){return this.$=L(n),this.F(),this},n.prototype.setLevel=function(n){return this.q=L(n),this.F(),this},n.prototype.setTransaction=function(n){return this.H=n,this.F(),this},n.prototype.setContext=function(n,t){return this.U[n]=t?L(t):void 0,this.F(),this},n.prototype.setSpan=function(n){return this.W=n,this.F(),this},n.prototype.startSpan=function(n){var t=new X;return t.setParent(n),this.setSpan(t),t},n.prototype.getSpan=function(){return this.W},n.clone=function(t){var r=new n;return Object.assign(r,t,{I:[]}),t&&(r.N=s(t.N),r.L=u({},t.L),r.M=u({},t.M),r.U=u({},t.U),r.A=t.A,r.q=t.q,r.W=t.W,r.H=t.H,r.$=t.$,r.C=s(t.C)),r},n.prototype.clear=function(){return this.N=[],this.L={},this.M={},this.A={},this.U={},this.q=void 0,this.H=void 0,this.$=void 0,this.W=void 0,this.F(),this},n.prototype.addBreadcrumb=function(n,t){var r=(new Date).getTime()/1e3,e=u({timestamp:r},n);return this.N=void 0!==t&&t>=0?s(this.N,[L(e)]).slice(-t):s(this.N,[L(e)]),this.F(),this},n.prototype.clearBreadcrumbs=function(){return this.N=[],this.F(),this},n.prototype.B=function(n){n.fingerprint=n.fingerprint?Array.isArray(n.fingerprint)?n.fingerprint:[n.fingerprint]:[],this.$&&(n.fingerprint=n.fingerprint.concat(this.$)),n.fingerprint&&!n.fingerprint.length&&delete n.fingerprint},n.prototype.applyToEvent=function(n,t){return this.M&&Object.keys(this.M).length&&(n.extra=u({},this.M,n.extra)),this.L&&Object.keys(this.L).length&&(n.tags=u({},this.L,n.tags)),this.A&&Object.keys(this.A).length&&(n.user=u({},this.A,n.user)),this.U&&Object.keys(this.U).length&&(n.contexts=u({},this.U,n.contexts)),this.q&&(n.level=this.q),this.H&&(n.transaction=this.H),this.W&&(n.contexts=n.contexts||{},n.contexts.trace=this.W),this.B(n),n.breadcrumbs=s(n.breadcrumbs||[],this.N),n.breadcrumbs=n.breadcrumbs.length>0?n.breadcrumbs:void 0,this.P(s(z(),this.C),n,t)},n}();function z(){var n=w();return n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.globalEventProcessors=n.__SENTRY__.globalEventProcessors||[],n.__SENTRY__.globalEventProcessors}function V(n){z().push(n)}var K=3,Z=function(){function n(n,t,r){void 0===t&&(t=new G),void 0===r&&(r=K),this.J=r,this.X=[],this.X.push({client:n,scope:t})}return n.prototype.G=function(n){for(var t,r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];var i=this.getStackTop();i&&i.client&&i.client[n]&&(t=i.client)[n].apply(t,s(r,[i.scope]))},n.prototype.isOlderThan=function(n){return this.J<n},n.prototype.bindClient=function(n){this.getStackTop().client=n},n.prototype.pushScope=function(){var n=this.getStack(),t=n.length>0?n[n.length-1].scope:void 0,r=G.clone(t);return this.getStack().push({client:this.getClient(),scope:r}),r},n.prototype.popScope=function(){return void 0!==this.getStack().pop()},n.prototype.withScope=function(n){var t=this.pushScope();try{n(t)}finally{this.popScope()}},n.prototype.getClient=function(){return this.getStackTop().client},n.prototype.getScope=function(){return this.getStackTop().scope},n.prototype.getStack=function(){return this.X},n.prototype.getStackTop=function(){return this.X[this.X.length-1]},n.prototype.captureException=function(n,t){var r=this.V=g(),e=t;if(!t){var i=void 0;try{throw new Error("Sentry syntheticException")}catch(n){i=n}e={originalException:n,syntheticException:i}}return this.G("captureException",n,u({},e,{event_id:r})),r},n.prototype.captureMessage=function(n,t,r){var e=this.V=g(),i=r;if(!r){var o=void 0;try{throw new Error(n)}catch(n){o=n}i={originalException:n,syntheticException:o}}return this.G("captureMessage",n,t,u({},i,{event_id:e})),e},n.prototype.captureEvent=function(n,t){var r=this.V=g();return this.G("captureEvent",n,u({},t,{event_id:r})),r},n.prototype.lastEventId=function(){return this.V},n.prototype.addBreadcrumb=function(n,t){var r=this.getStackTop();if(r.scope&&r.client){var e=r.client.getOptions&&r.client.getOptions()||{},i=e.beforeBreadcrumb,o=void 0===i?null:i,c=e.maxBreadcrumbs,s=void 0===c?30:c;if(!(s<=0)){var a=(new Date).getTime()/1e3,f=u({timestamp:a},n),h=o?j(function(){return o(f,t)}):f;null!==h&&r.scope.addBreadcrumb(h,Math.min(s,100))}}},n.prototype.setUser=function(n){var t=this.getStackTop();t.scope&&t.scope.setUser(n)},n.prototype.setTags=function(n){var t=this.getStackTop();t.scope&&t.scope.setTags(n)},n.prototype.setExtras=function(n){var t=this.getStackTop();t.scope&&t.scope.setExtras(n)},n.prototype.setTag=function(n,t){var r=this.getStackTop();r.scope&&r.scope.setTag(n,t)},n.prototype.setExtra=function(n,t){var r=this.getStackTop();r.scope&&r.scope.setExtra(n,t)},n.prototype.setContext=function(n,t){var r=this.getStackTop();r.scope&&r.scope.setContext(n,t)},n.prototype.configureScope=function(n){var t=this.getStackTop();t.scope&&t.client&&n(t.scope)},n.prototype.run=function(n){var t=Y(this);try{n(this)}finally{Y(t)}},n.prototype.getIntegration=function(n){var t=this.getClient();if(!t)return null;try{return t.getIntegration(n)}catch(t){return T.warn("Cannot retrieve integration "+n.id+" from the current Hub"),null}},n.prototype.traceHeaders=function(){var n=this.getStackTop();if(n.scope&&n.client){var t=n.scope.getSpan();if(t)return{"sentry-trace":t.toTraceparent()}}return{}},n}();function Q(){var n=w();return n.__SENTRY__=n.__SENTRY__||{hub:void 0},n}function Y(n){var t=Q(),r=rn(t);return en(t,n),r}function nn(){var n,t,r=Q();tn(r)&&!rn(r).isOlderThan(K)||en(r,new Z);try{var e=(n=module,t="domain",n.require(t)).active;if(!e)return rn(r);if(!tn(e)||rn(e).isOlderThan(K)){var i=rn(r).getStackTop();en(e,new Z(i.client,G.clone(i.scope)))}return rn(e)}catch(n){return rn(r)}}function tn(n){return!!(n&&n.__SENTRY__&&n.__SENTRY__.hub)}function rn(n){return n&&n.__SENTRY__&&n.__SENTRY__.hub?n.__SENTRY__.hub:(n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.hub=new Z,n.__SENTRY__.hub)}function en(n,t){return!!n&&(n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.hub=t,!0)}function on(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var e=nn();if(e&&e[n])return e[n].apply(e,s(t));throw new Error("No hub defined or "+n+" was not found on the hub, please open a bug report.")}function captureException(n){var t;try{throw new Error("Sentry syntheticException")}catch(n){t=n}return on("captureException",n,{originalException:n,syntheticException:t})}function un(n){on("withScope",n)}var cn=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,sn=function(){function n(n){"string"==typeof n?this.K(n):this.Z(n),this.Y()}return n.prototype.toString=function(n){void 0===n&&(n=!1);var t=this,r=t.host,e=t.path,i=t.pass,o=t.port,u=t.projectId;return t.protocol+"://"+t.user+(n&&i?":"+i:"")+"@"+r+(o?":"+o:"")+"/"+(e?e+"/":e)+u},n.prototype.K=function(n){var t=cn.exec(n);if(!t)throw new f("Invalid Dsn");var r=c(t.slice(1),6),e=r[0],i=r[1],o=r[2],u=void 0===o?"":o,s=r[3],a=r[4],h=void 0===a?"":a,l="",v=r[5],d=v.split("/");d.length>1&&(l=d.slice(0,-1).join("/"),v=d.pop()),Object.assign(this,{host:s,pass:u,path:l,projectId:v,port:h,protocol:e,user:i})},n.prototype.Z=function(n){this.protocol=n.protocol,this.user=n.user,this.pass=n.pass||"",this.host=n.host,this.port=n.port||"",this.path=n.path||"",this.projectId=n.projectId},n.prototype.Y=function(){var n=this;if(["protocol","user","host","projectId"].forEach(function(t){if(!n[t])throw new f("Invalid Dsn")}),"http"!==this.protocol&&"https"!==this.protocol)throw new f("Invalid Dsn");if(this.port&&Number.isNaN(parseInt(this.port,10)))throw new f("Invalid Dsn")},n}(),an=function(){function n(n){this.dsn=n,this.nn=new sn(n)}return n.prototype.getDsn=function(){return this.nn},n.prototype.getStoreEndpoint=function(){return""+this.tn()+this.getStoreEndpointPath()},n.prototype.getStoreEndpointWithUrlEncodedAuth=function(){var n,t={sentry_key:this.nn.user,sentry_version:"7"};return this.getStoreEndpoint()+"?"+(n=t,Object.keys(n).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(n[t])}).join("&"))},n.prototype.tn=function(){var n=this.nn,t=n.protocol?n.protocol+":":"",r=n.port?":"+n.port:"";return t+"//"+n.host+r},n.prototype.getStoreEndpointPath=function(){var n=this.nn;return(n.path?"/"+n.path:"")+"/api/"+n.projectId+"/store/"},n.prototype.getRequestHeaders=function(n,t){var r=this.nn,e=["Sentry sentry_version=7"];return e.push("sentry_timestamp="+(new Date).getTime()),e.push("sentry_client="+n+"/"+t),e.push("sentry_key="+r.user),r.pass&&e.push("sentry_secret="+r.pass),{"Content-Type":"application/json","X-Sentry-Auth":e.join(", ")}},n.prototype.getReportDialogEndpoint=function(n){void 0===n&&(n={});var t=this.nn,r=this.tn()+(t.path?"/"+t.path:"")+"/api/embed/error-page/",e=[];for(var i in e.push("dsn="+t.toString()),n)if("user"===i){if(!n.user)continue;n.user.name&&e.push("name="+encodeURIComponent(n.user.name)),n.user.email&&e.push("email="+encodeURIComponent(n.user.email))}else e.push(encodeURIComponent(i)+"="+encodeURIComponent(n[i]));return e.length?r+"?"+e.join("&"):r},n}(),fn=[];function hn(n){var t={};return function(n){var t=n.defaultIntegrations&&s(n.defaultIntegrations)||[],r=n.integrations,e=[];if(Array.isArray(r)){var i=r.map(function(n){return n.name}),o=[];t.forEach(function(n){-1===i.indexOf(n.name)&&-1===o.indexOf(n.name)&&(e.push(n),o.push(n.name))}),r.forEach(function(n){-1===o.indexOf(n.name)&&(e.push(n),o.push(n.name))})}else{if("function"!=typeof r)return s(t);e=r(t),e=Array.isArray(e)?e:[e]}return e}(n).forEach(function(n){t[n.name]=n,function(n){-1===fn.indexOf(n.name)&&(n.setupOnce(V,nn),fn.push(n.name),T.log("Integration installed: "+n.name))}(n)}),t}var ln,vn=function(){function n(n,t){this.rn=!1,this.en=new n(t),this.in=t,t.dsn&&(this.on=new sn(t.dsn)),this.un=hn(this.in)}return n.prototype.captureException=function(n,t,r){var e=this,i=t&&t.event_id;return this.rn=!0,this.cn().eventFromException(n,t).then(function(n){return e.sn(n,t,r)}).then(function(n){i=n&&n.event_id,e.rn=!1}).catch(function(n){T.error(n),e.rn=!1}),i},n.prototype.captureMessage=function(n,t,r,e){var i=this,o=r&&r.event_id;return this.rn=!0,(p(n)?this.cn().eventFromMessage(""+n,t,r):this.cn().eventFromException(n,r)).then(function(n){return i.sn(n,r,e)}).then(function(n){o=n&&n.event_id,i.rn=!1}).catch(function(n){T.error(n),i.rn=!1}),o},n.prototype.captureEvent=function(n,t,r){var e=this,i=t&&t.event_id;return this.rn=!0,this.sn(n,t,r).then(function(n){i=n&&n.event_id,e.rn=!1}).catch(function(n){T.error(n),e.rn=!1}),i},n.prototype.getDsn=function(){return this.on},n.prototype.getOptions=function(){return this.in},n.prototype.flush=function(n){var t=this;return this.an(n).then(function(r){return clearInterval(r.interval),t.cn().getTransport().close(n).then(function(n){return r.ready&&n})})},n.prototype.close=function(n){var t=this;return this.flush(n).then(function(n){return t.getOptions().enabled=!1,n})},n.prototype.getIntegrations=function(){return this.un||{}},n.prototype.getIntegration=function(n){try{return this.un[n.id]||null}catch(t){return T.warn("Cannot retrieve integration "+n.id+" from the current Client"),null}},n.prototype.an=function(n){var t=this;return new Promise(function(r){var e=0,i=0;clearInterval(i),i=setInterval(function(){t.rn?(e+=1,n&&e>=n&&r({interval:i,ready:!1})):r({interval:i,ready:!0})},1)})},n.prototype.cn=function(){return this.en},n.prototype.fn=function(){return!1!==this.getOptions().enabled&&void 0!==this.on},n.prototype.hn=function(n,t,r){var e=this.getOptions(),i=e.environment,o=e.release,c=e.dist,s=e.maxValueLength,a=void 0===s?250:s,f=u({},n);void 0===f.environment&&void 0!==i&&(f.environment=i),void 0===f.release&&void 0!==o&&(f.release=o),void 0===f.dist&&void 0!==c&&(f.dist=c),f.message&&(f.message=F(f.message,a));var h=f.exception&&f.exception.values&&f.exception.values[0];h&&h.value&&(h.value=F(h.value,a));var l=f.request;l&&l.url&&(l.url=F(l.url,a)),void 0===f.event_id&&(f.event_id=g()),this.ln(f.sdk);var v=B.resolve(f);return t&&(v=t.applyToEvent(f,r)),v},n.prototype.ln=function(n){var t=Object.keys(this.un);n&&t.length>0&&(n.integrations=t)},n.prototype.sn=function(n,t,r){var e=this,i=this.getOptions(),o=i.beforeSend,u=i.sampleRate;return this.fn()?"number"==typeof u&&Math.random()>u?B.reject("This event has been sampled, will not send event."):new B(function(i,u){e.hn(n,r,t).then(function(n){if(null!==n){var r=n;try{if(t&&t.data&&!0===t.data.__sentry__||!o)return e.cn().sendEvent(r),void i(r);var c=o(n,t);if(void 0===c)T.error("`beforeSend` method has to return `null` or a valid event.");else if(y(c))e.vn(c,i,u);else{if(null===(r=c))return T.log("`beforeSend` returned `null`, will not send event."),void i(null);e.cn().sendEvent(r),i(r)}}catch(n){e.captureException(n,{data:{__sentry__:!0},originalException:n}),u("`beforeSend` throw an error, will not send event.")}}else u("An event processor returned null, will not send event.")})}):B.reject("SDK not enabled, will not send event.")},n.prototype.vn=function(n,t,r){var e=this;n.then(function(n){null!==n?(e.cn().sendEvent(n),t(n)):r("`beforeSend` returned `null`, will not send event.")}).catch(function(n){r("beforeSend rejected with "+n)})},n}(),dn=function(){function t(){}return t.prototype.sendEvent=function(t){return Promise.resolve({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:n.Status.Skipped})},t.prototype.close=function(n){return Promise.resolve(!0)},t}(),pn=function(){function n(n){this.in=n,this.in.dsn||T.warn("No DSN provided, backend will not do anything."),this.dn=this.pn()}return n.prototype.pn=function(){return new dn},n.prototype.eventFromException=function(n,t){throw new f("Backend has to implement `eventFromException` method")},n.prototype.eventFromMessage=function(n,t,r){throw new f("Backend has to implement `eventFromMessage` method")},n.prototype.sendEvent=function(n){this.dn.sendEvent(n).catch(function(n){T.error("Error while sending event: "+n)})},n.prototype.getTransport=function(){return this.dn},n}();var mn=function(){function n(){this.name=n.id}return n.prototype.setupOnce=function(){ln=Function.prototype.toString,Function.prototype.toString=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.__sentry__?this.__sentry_original__:this;return ln.apply(r,n)}},n.id="FunctionToString",n}(),yn=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],bn=function(){function n(t){void 0===t&&(t={}),this.in=t,this.name=n.id}return n.prototype.setupOnce=function(){V(function(t){var r=nn();if(!r)return t;var e=r.getIntegration(n);if(e){var i=r.getClient(),o=i?i.getOptions():{},u=e.mn(o);if(e.yn(t,u))return null}return t})},n.prototype.yn=function(n,t){return this.bn(n,t)?(T.warn("Event dropped due to being internal Sentry Error.\nEvent: "+x(n)),!0):this.wn(n,t)?(T.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+x(n)),!0):this.gn(n,t)?(T.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: "+x(n)+".\nUrl: "+this.En(n)),!0):!this.xn(n,t)&&(T.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: "+x(n)+".\nUrl: "+this.En(n)),!0)},n.prototype.bn=function(n,t){if(void 0===t&&(t={}),!t.ignoreInternal)return!1;try{return"SentryError"===n.exception.values[0].type}catch(n){return!1}},n.prototype.wn=function(n,t){return void 0===t&&(t={}),!(!t.ignoreErrors||!t.ignoreErrors.length)&&this.jn(n).some(function(n){return t.ignoreErrors.some(function(t){return q(n,t)})})},n.prototype.gn=function(n,t){if(void 0===t&&(t={}),!t.blacklistUrls||!t.blacklistUrls.length)return!1;var r=this.En(n);return!!r&&t.blacklistUrls.some(function(n){return q(r,n)})},n.prototype.xn=function(n,t){if(void 0===t&&(t={}),!t.whitelistUrls||!t.whitelistUrls.length)return!0;var r=this.En(n);return!r||t.whitelistUrls.some(function(n){return q(r,n)})},n.prototype.mn=function(n){return void 0===n&&(n={}),{blacklistUrls:s(this.in.blacklistUrls||[],n.blacklistUrls||[]),ignoreErrors:s(this.in.ignoreErrors||[],n.ignoreErrors||[],yn),ignoreInternal:void 0===this.in.ignoreInternal||this.in.ignoreInternal,whitelistUrls:s(this.in.whitelistUrls||[],n.whitelistUrls||[])}},n.prototype.jn=function(n){if(n.message)return[n.message];if(n.exception)try{var t=n.exception.values[0],r=t.type,e=t.value;return[""+e,r+": "+e]}catch(t){return T.error("Cannot extract message for event "+x(n)),[]}return[]},n.prototype.En=function(n){try{if(n.stacktrace){var t=n.stacktrace.frames;return t[t.length-1].filename}if(n.exception){var r=n.exception.values[0].stacktrace.frames;return r[r.length-1].filename}return null}catch(t){return T.error("Cannot extract url for event "+x(n)),null}},n.id="InboundFilters",n}(),wn=Object.freeze({FunctionToString:mn,InboundFilters:bn}),gn=w(),En={_n:!1,Sn:!1,On:!1,kn:!1},xn="?",jn=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;function _n(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function Sn(){return"undefined"==typeof document||null==document.location?"":document.location.href}En._n=function(){var n,t,r=[],e=null,i=null;function o(n,t,e){var i=null;if(!t||En.Sn){for(var o in r)if(_n(r,o))try{r[o](n,t,e)}catch(n){i=n}if(i)throw i}}function c(t,r,e,c,s){var f=null;if(s=l(s)?s.error:s,t=l(t)?t.message:t,i)En.On.Tn(i,r,e,t),a();else if(s&&h(s))(f=En.On(s)).mechanism="onerror",o(f,!0,s);else{var v,d={url:r,line:e,column:c},p=t;if("[object String]"==={}.toString.call(t)){var m=t.match(jn);m&&(v=m[1],p=m[2])}d.func=xn,d.context=null,o(f={name:v,message:p,mode:"onerror",mechanism:"onerror",stack:[u({},d,{url:d.url||Sn()})]},!0,null)}return!!n&&n.apply(this,arguments)}function s(n){var t=n&&(n.detail?n.detail.reason:n.reason)||n,r=En.On(t);r.mechanism="onunhandledrejection",r.message||(r.message=JSON.stringify(L(t))),o(r,!0,t)}function a(){var n=i,t=e;i=null,e=null,o(n,!1,t)}function f(n){if(i){if(e===n)return;a()}var t=En.On(n);throw i=t,e=n,setTimeout(function(){e===n&&a()},t.incomplete?2e3:0),n}return f.Rn=function(n){r.push(n)},f.Dn=function(){!0!==t&&(n=gn.onerror,gn.onerror=c,t=!0)},f.In=function(){gn.onunhandledrejection=s},f}(),En.On=function(){function n(n){if(!n||!n.stack)return null;for(var t,r,e,i=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,o=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,u=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,c=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,s=/\((\S*)(?::(\d+))(?::(\d+))\)/,a=n.stack.split("\n"),f=[],h=/^(.*) is undefined$/.exec(n.message),l=0,v=a.length;l<v;++l){if(r=i.exec(a[l])){var d=r[2]&&0===r[2].indexOf("native");r[2]&&0===r[2].indexOf("eval")&&(t=s.exec(r[2]))&&(r[2]=t[1],r[3]=t[2],r[4]=t[3]),e={url:r[2],func:r[1]||xn,args:d?[r[2]]:[],line:r[3]?+r[3]:null,column:r[4]?+r[4]:null}}else if(r=u.exec(a[l]))e={url:r[2],func:r[1]||xn,args:[],line:+r[3],column:r[4]?+r[4]:null};else{if(!(r=o.exec(a[l])))continue;r[3]&&r[3].indexOf(" > eval")>-1&&(t=c.exec(r[3]))?(r[1]=r[1]||"eval",r[3]=t[1],r[4]=t[2],r[5]=""):0!==l||r[5]||void 0===n.columnNumber||(f[0].column=n.columnNumber+1),e={url:r[3],func:r[1]||xn,args:r[2]?r[2].split(","):[],line:r[4]?+r[4]:null,column:r[5]?+r[5]:null}}!e.func&&e.line&&(e.func=xn),e.context=null,f.push(e)}return f.length?(f[0]&&f[0].line&&!f[0].column&&h&&(f[0].column=null),{mode:"stack",name:n.name,message:n.message,stack:f}):null}function t(n,t,r,e){var i={url:t,line:r};if(i.url&&i.line){if(n.incomplete=!1,i.func||(i.func=xn),i.context||(i.context=null),/ '([^']+)' /.exec(e)&&(i.column=null),n.stack.length>0&&n.stack[0].url===i.url){if(n.stack[0].line===i.line)return!1;if(!n.stack[0].line&&n.stack[0].func===i.func)return n.stack[0].line=i.line,n.stack[0].context=i.context,!1}return n.stack.unshift(i),n.partial=!0,!0}return n.incomplete=!0,!1}function r(n,e){for(var i,o,u=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,c=[],s={},a=!1,f=r.caller;f&&!a;f=f.caller)if(f!==Rn&&f!==En._n){if(o={url:null,func:xn,args:[],line:null,column:null},f.name?o.func=f.name:(i=u.exec(f.toString()))&&(o.func=i[1]),void 0===o.func)try{o.func=i.input.substring(0,i.input.indexOf("{"))}catch(n){}s[""+f]?a=!0:s[""+f]=!0,c.push(o)}e&&c.splice(0,e);var h={mode:"callers",name:n.name,message:n.message,stack:c};return t(h,n.sourceURL||n.fileName,n.line||n.lineNumber,n.message||n.description),h}function e(t,e){var i=null;e=null==e?0:+e;try{if(i=function(n){var t=n.stacktrace;if(t){for(var r,e=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,i=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,o=t.split("\n"),u=[],c=0;c<o.length;c+=2){var s=null;(r=e.exec(o[c]))?s={url:r[2],line:+r[1],column:null,func:r[3],args:[]}:(r=i.exec(o[c]))&&(s={url:r[6],line:+r[1],column:+r[2],func:r[3]||r[4],args:r[5]?r[5].split(","):[]}),s&&(!s.func&&s.line&&(s.func=xn),s.line&&(s.context=null),s.context||(s.context=[o[c+1]]),u.push(s))}return u.length?{mode:"stacktrace",name:n.name,message:n.message,stack:u}:null}}(t))return i}catch(n){}try{if(i=n(t))return i}catch(n){}try{if(i=function(n){var t=n.message.split("\n");if(t.length<4)return null;var r,e=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,i=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,o=/^\s*Line (\d+) of function script\s*$/i,u=[],c=gn&&gn.document&&gn.document.getElementsByTagName("script"),s=[];for(var a in c)_n(c,a)&&!c[a].src&&s.push(c[a]);for(var f=2;f<t.length;f+=2){var h=null;(r=e.exec(t[f]))?h={url:r[2],func:r[3],args:[],line:+r[1],column:null}:(r=i.exec(t[f]))?h={url:r[3],func:r[4],args:[],line:+r[1],column:null}:(r=o.exec(t[f]))&&(h={url:Sn().replace(/#.*$/,""),func:"",args:[],line:r[1],column:null}),h&&(h.func||(h.func=xn),h.context=[t[f+1]],u.push(h))}return u.length?{mode:"multiline",name:n.name,message:t[0],stack:u}:null}(t))return i}catch(n){}try{if(i=r(t,e+1))return i}catch(n){}return{original:t,name:t.name,message:t.message,mode:"failed"}}return e.Tn=t,e.Cn=n,e}(),En.Sn=!0,En.kn=11;var On=En._n.Rn,kn=En._n.Dn,Tn=En._n.In,Rn=En.On,Dn=50;function In(n){var t=Nn(n.stack),r={type:n.name,value:n.message};return t&&t.length&&(r.stacktrace={frames:t}),void 0===r.type&&""===r.value&&(r.value="Unrecoverable error caught"),r}function Cn(n){return{exception:{values:[In(n)]}}}function Nn(n){if(!n||!n.length)return[];var t=n,r=t[0].func||"",e=t[t.length-1].func||"";return(r.includes("captureMessage")||r.includes("captureException"))&&(t=t.slice(1)),e.includes("sentryWrapped")&&(t=t.slice(0,-1)),t.map(function(n){return{colno:n.column,filename:n.url||t[0].url,function:n.func||"?",in_app:!0,lineno:n.line}}).slice(0,Dn).reverse()}var An,Ln,Mn=function(){function n(n){this.options=n,this.h=new U(30),this.url=new an(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()}return n.prototype.sendEvent=function(n){throw new f("Transport Class has to implement `sendEvent` method")},n.prototype.close=function(n){return this.h.drain(n)},n}(),Un=w(),Fn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.sendEvent=function(t){var r={body:JSON.stringify(t),method:"POST",referrerPolicy:W()?"origin":""};return this.h.add(Un.fetch(this.url,r).then(function(t){return{status:n.Status.fromHttpCode(t.status)}}))},e}(Mn),Pn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.sendEvent=function(t){var r=this;return this.h.add(new Promise(function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){4===o.readyState&&(200===o.status&&e({status:n.Status.fromHttpCode(o.status)}),i(o))},o.open("POST",r.url),o.send(JSON.stringify(t))}))},e}(Mn),$n=Object.freeze({BaseTransport:Mn,FetchTransport:Fn,XHRTransport:Pn}),qn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.pn=function(){if(!this.in.dsn)return t.prototype.pn.call(this);var n=u({},this.in.transportOptions,{dsn:this.in.dsn});return this.in.transport?new this.in.transport(n):H()?new Fn(n):new Pn(n)},e.prototype.eventFromException=function(t,r){var e,i,o=this;if(l(t)&&t.error)return t=t.error,e=Cn(Rn(t)),B.resolve(this.Nn(e,r));if(v(t)||(i=t,"[object DOMException]"===Object.prototype.toString.call(i))){var u=t,c=u.name||(v(u)?"DOMError":"DOMException"),s=u.message?c+": "+u.message:c;return this.eventFromMessage(s,n.Severity.Error,r).then(function(n){return _(n,s),B.resolve(o.Nn(n,r))})}if(h(t))return e=Cn(Rn(t)),B.resolve(this.Nn(e,r));if(m(t)&&r&&r.syntheticException)return _(e=function(n,t){var r=Object.keys(n).sort(),e={extra:{__serialized__:C(n)},message:"Non-Error exception captured with keys: "+$(r)};if(t){var i=Nn(Rn(t).stack);e.stacktrace={frames:i}}return e}(t,r.syntheticException),"Custom Object",void 0,{handled:!0,synthetic:!0,type:"generic"}),e.level=n.Severity.Error,B.resolve(this.Nn(e,r));var a=t;return this.eventFromMessage(a,void 0,r).then(function(t){return _(t,""+a,void 0,{handled:!0,synthetic:!0,type:"generic"}),t.level=n.Severity.Error,B.resolve(o.Nn(t,r))})},e.prototype.Nn=function(n,t){return u({},n,{event_id:t&&t.event_id})},e.prototype.eventFromMessage=function(t,r,e){void 0===r&&(r=n.Severity.Info);var i={event_id:e&&e.event_id,level:r,message:t};if(this.in.attachStacktrace&&e&&e.syntheticException){var o=Nn(Rn(e.syntheticException).stack);i.stacktrace={frames:o}}return B.resolve(i)},e}(pn),Hn="sentry.javascript.browser",Wn=function(n){function t(t){return void 0===t&&(t={}),n.call(this,qn,t)||this}return r(t,n),t.prototype.hn=function(t,r,e){return t.platform=t.platform||"javascript",t.sdk=u({},t.sdk,{name:Hn,packages:s(t.sdk&&t.sdk.packages||[],[{name:"npm:@sentry/browser",version:"5.5.0"}]),version:"5.5.0"}),n.prototype.hn.call(this,t,r,e)},t.prototype.showReportDialog=function(n){void 0===n&&(n={});var t=w().document;if(t)if(this.fn()){var r=n.dsn||this.getDsn();if(n.eventId)if(r){var e=t.createElement("script");e.async=!0,e.src=new an(r).getReportDialogEndpoint(n),n.onLoad&&(e.onload=n.onLoad),(t.head||t.body).appendChild(e)}else T.error("Missing `Dsn` option in showReportDialog call");else T.error("Missing `eventId` option in showReportDialog call")}else T.error("Trying to call showReportDialog with Sentry Client is disabled")},t}(vn),Bn=1e3,Jn=0;function Xn(n,t,r){if(void 0===t&&(t={}),"function"!=typeof n)return n;try{if(n.__sentry__)return n;if(n.__sentry_wrapped__)return n.__sentry_wrapped__}catch(t){return n}var sentryWrapped=function(){r&&"function"==typeof r&&r.apply(this,arguments);var e=Array.prototype.slice.call(arguments);try{var i=e.map(function(n){return Xn(n,t)});return n.handleEvent?n.handleEvent.apply(this,i):n.apply(this,i)}catch(n){throw Jn+=1,setTimeout(function(){Jn-=1}),un(function(r){r.addEventProcessor(function(n){var r=u({},n);return t.mechanism&&_(r,void 0,void 0,t.mechanism),r.extra=u({},r.extra,{arguments:L(e,3)}),r}),captureException(n)}),n}};try{for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(sentryWrapped[e]=n[e])}catch(n){}n.prototype=n.prototype||{},sentryWrapped.prototype=n.prototype,Object.defineProperty(n,"__sentry_wrapped__",{enumerable:!1,value:sentryWrapped}),Object.defineProperties(sentryWrapped,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:n}});try{Object.getOwnPropertyDescriptor(sentryWrapped,"name").configurable&&Object.defineProperty(sentryWrapped,"name",{get:function(){return n.name}})}catch(n){}return sentryWrapped}var Gn=0;function zn(n,t){return void 0===t&&(t=!1),function(r){if(An=void 0,r&&Ln!==r){Ln=r;var e=function(){var t;try{t=r.target?Kn(r.target):Kn(r)}catch(n){t="<unknown>"}0!==t.length&&nn().addBreadcrumb({category:"ui."+n,message:t},{event:r,name:n})};Gn&&clearTimeout(Gn),t?Gn=setTimeout(e):e()}}}function Vn(){return function(n){var t;try{t=n.target}catch(n){return}var r=t&&t.tagName;r&&("INPUT"===r||"TEXTAREA"===r||t.isContentEditable)&&(An||zn("input")(n),clearTimeout(An),An=setTimeout(function(){An=void 0},Bn))}}function Kn(n){for(var t,r=n,e=[],i=0,o=0,u=" > ".length;r&&i++<5&&!("html"===(t=Zn(r))||i>1&&o+e.length*u+t.length>=80);)e.push(t),o+=t.length,r=r.parentNode;return e.reverse().join(" > ")}function Zn(n){var t,r,e,i,o,u=[];if(!n||!n.tagName)return"";if(u.push(n.tagName.toLowerCase()),n.id&&u.push("#"+n.id),(t=n.className)&&d(t))for(r=t.split(/\s+/),o=0;o<r.length;o++)u.push("."+r[o]);var c=["type","name","title","alt"];for(o=0;o<c.length;o++)e=c[o],(i=n.getAttribute(e))&&u.push("["+e+'="'+i+'"]');return u.join("")}var Qn=function(){function n(t){this.name=n.id,this.in=u({onerror:!0,onunhandledrejection:!0},t)}return n.prototype.setupOnce=function(){Error.stackTraceLimit=50,On(function(t,r,e){if(!(Jn>0)){var i=nn().getIntegration(n);i&&nn().captureEvent(i.An(t),{data:{stack:t},originalException:e})}}),this.in.onerror&&(T.log("Global Handler attached: onerror"),kn()),this.in.onunhandledrejection&&(T.log("Global Handler attached: onunhandledrejection"),Tn())},n.prototype.An=function(n){if(!d(n.message)&&"onunhandledrejection"!==n.mechanism){var t=n.message;n.message=t.error&&d(t.error.message)?t.error.message:"No error message"}var r=Cn(n),e={mode:n.mode};n.message&&(e.message=n.message),n.name&&(e.name=n.name);var i=nn().getClient(),o=i&&i.getOptions().maxValueLength||250;return _(r,n.original?F(JSON.stringify(L(n.original)),o):"","onunhandledrejection"===n.mechanism?"UnhandledRejection":"Error",{data:e,handled:!1,type:n.mechanism}),r},n.id="GlobalHandlers",n}(),Yn=function(){function n(){this.Ln=0,this.name=n.id}return n.prototype.Mn=function(n){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=t[0];return t[0]=Xn(e,{mechanism:{data:{function:nt(n)},handled:!0,type:"instrument"}}),n.apply(this,t)}},n.prototype.Un=function(n){return function(t){return n(Xn(t,{mechanism:{data:{function:"requestAnimationFrame",handler:nt(n)},handled:!0,type:"instrument"}}))}},n.prototype.Fn=function(n){var t=w(),r=t[n]&&t[n].prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(D(r,"addEventListener",function(t){return function(r,e,i){try{"function"==typeof e.handleEvent&&(e.handleEvent=Xn(e.handleEvent.bind(e),{mechanism:{data:{function:"handleEvent",handler:nt(e),target:n},handled:!0,type:"instrument"}}))}catch(n){}return t.call(this,r,Xn(e,{mechanism:{data:{function:"addEventListener",handler:nt(e),target:n},handled:!0,type:"instrument"}}),i)}}),D(r,"removeEventListener",function(n){return function(t,r,e){var i=r;try{i=i&&(i.__sentry_wrapped__||i)}catch(n){}return n.call(this,t,i,e)}}))},n.prototype.setupOnce=function(){this.Ln=this.Ln;var n=w();D(n,"setTimeout",this.Mn.bind(this)),D(n,"setInterval",this.Mn.bind(this)),D(n,"requestAnimationFrame",this.Un.bind(this)),["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach(this.Fn.bind(this))},n.id="TryCatch",n}();function nt(n){try{return n&&n.name||"<anonymous>"}catch(n){return"<anonymous>"}}var tt,rt=w(),et=function(){function t(n){this.name=t.id,this.in=u({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},n)}return t.prototype.Pn=function(){"console"in rt&&["debug","info","warn","error","log","assert"].forEach(function(r){r in rt.console&&D(rt.console,r,function(e){return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var u={category:"console",data:{extra:{arguments:L(i,3)},logger:"console"},level:n.Severity.fromString(r),message:P(i," ")};"assert"===r&&!1===i[0]&&(u.message="Assertion failed: "+(P(i.slice(1)," ")||"console.assert"),u.data.extra.arguments=L(i.slice(1),3)),t.addBreadcrumb(u,{input:i,level:r}),e&&Function.prototype.apply.call(e,rt.console,i)}})})},t.prototype.$n=function(){"document"in rt&&(rt.document.addEventListener("click",zn("click"),!1),rt.document.addEventListener("keypress",Vn(),!1),["EventTarget","Node"].forEach(function(n){var t=rt[n]&&rt[n].prototype;t&&t.hasOwnProperty&&t.hasOwnProperty("addEventListener")&&(D(t,"addEventListener",function(n){return function(t,r,e){return r&&r.handleEvent?("click"===t&&D(r,"handleEvent",function(n){return function(t){return zn("click")(t),n.call(this,t)}}),"keypress"===t&&D(r,"handleEvent",function(n){return function(t){return Vn()(t),n.call(this,t)}})):("click"===t&&zn("click",!0)(this),"keypress"===t&&Vn()(this)),n.call(this,t,r,e)}}),D(t,"removeEventListener",function(n){return function(t,r,e){var i=r;try{i=i&&(i.__sentry_wrapped__||i)}catch(n){}return n.call(this,t,i,e)}}))}))},t.prototype.qn=function(){(function(){if(!H())return!1;var n=function(n){return-1!==n.toString().indexOf("native")},t=w(),r=null,e=t.document;if(e){var i=e.createElement("iframe");i.hidden=!0;try{e.head.appendChild(i),i.contentWindow&&i.contentWindow.fetch&&(r=n(i.contentWindow.fetch)),e.head.removeChild(i)}catch(n){T.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",n)}}return null===r&&(r=n(t.fetch)),r})()&&D(rt,"fetch",function(r){return function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var o,u=e[0],c="GET";"string"==typeof u?o=u:"Request"in rt&&u instanceof Request?(o=u.url,u.method&&(c=u.method)):o=String(u),e[1]&&e[1].method&&(c=e[1].method);var s=nn().getClient(),a=s&&s.getDsn();if(a){var f=new an(a).getStoreEndpoint();if(f&&o.includes(f))return"POST"===c&&e[1]&&e[1].body&&it(e[1].body),r.apply(rt,e)}var h={method:c,url:o};return r.apply(rt,e).then(function(n){return h.status_code=n.status,t.addBreadcrumb({category:"fetch",data:h,type:"http"},{input:e,response:n}),n}).catch(function(r){throw t.addBreadcrumb({category:"fetch",data:h,level:n.Severity.Error,type:"http"},{error:r,input:e}),r})}})},t.prototype.Hn=function(){var n=this;if(r=w(),e=r.chrome,i=e&&e.app&&e.app.runtime,o="history"in r&&!!r.history.pushState&&!!r.history.replaceState,!i&&o){var r,e,i,o,u=function(n,r){var e=E(rt.location.href),i=E(r),o=E(n);o.path||(o=e),tt=r,e.protocol===i.protocol&&e.host===i.host&&(r=i.relative),e.protocol===o.protocol&&e.host===o.host&&(n=o.relative),t.addBreadcrumb({category:"navigation",data:{from:n,to:r}})},c=rt.onpopstate;rt.onpopstate=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=rt.location.href;if(u(tt,e),c)return c.apply(n,t)},D(rt.history,"pushState",s),D(rt.history,"replaceState",s)}function s(n){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=t.length>2?t[2]:void 0;return e&&u(tt,String(e)),n.apply(this,t)}}},t.prototype.Wn=function(){if("XMLHttpRequest"in rt){var n=XMLHttpRequest.prototype;D(n,"open",function(n){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=t[1];this.__sentry_xhr__={method:t[0],url:t[1]};var i=nn().getClient(),o=i&&i.getDsn();if(o){var u=new an(o).getStoreEndpoint();d(e)&&u&&e.includes(u)&&(this.__sentry_own_request__=!0)}return n.apply(this,t)}}),D(n,"send",function(n){return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var i=this;function o(){if(4===i.readyState){if(i.__sentry_own_request__)return;try{i.__sentry_xhr__&&(i.__sentry_xhr__.status_code=i.status)}catch(n){}t.addBreadcrumb({category:"xhr",data:i.__sentry_xhr__,type:"http"},{xhr:i})}}return i.__sentry_own_request__&&it(r[0]),["onload","onerror","onprogress"].forEach(function(n){!function(n,t){n in t&&"function"==typeof t[n]&&D(t,n,function(t){return Xn(t,{mechanism:{data:{function:n,handler:t&&t.name||"<anonymous>"},handled:!0,type:"instrument"}})})}(n,i)}),"onreadystatechange"in i&&"function"==typeof i.onreadystatechange?D(i,"onreadystatechange",function(n){return Xn(n,{mechanism:{data:{function:"onreadystatechange",handler:n&&n.name||"<anonymous>"},handled:!0,type:"instrument"}},o)}):i.onreadystatechange=o,n.apply(this,r)}})}},t.addBreadcrumb=function(n,r){nn().getIntegration(t)&&nn().addBreadcrumb(n,r)},t.prototype.setupOnce=function(){this.in.console&&this.Pn(),this.in.dom&&this.$n(),this.in.xhr&&this.Wn(),this.in.fetch&&this.qn(),this.in.history&&this.Hn()},t.id="Breadcrumbs",t}();function it(t){try{var r=JSON.parse(t);et.addBreadcrumb({category:"sentry",event_id:r.event_id,level:r.level||n.Severity.fromString("error"),message:x(r)},{event:r})}catch(n){T.error("Error while adding sentry type breadcrumb")}}var ot="cause",ut=5,ct=function(){function n(t){void 0===t&&(t={}),this.name=n.id,this.Bn=t.key||ot,this.s=t.limit||ut}return n.prototype.setupOnce=function(){V(function(t,r){var e=nn().getIntegration(n);return e?e.Jn(t,r):t})},n.prototype.Jn=function(n,t){if(!(n.exception&&n.exception.values&&t&&t.originalException instanceof Error))return n;var r=this.Xn(t.originalException,this.Bn);return n.exception.values=s(r,n.exception.values),n},n.prototype.Xn=function(n,t,r){if(void 0===r&&(r=[]),!(n[t]instanceof Error)||r.length+1>=this.s)return r;var e=In(Rn(n[t]));return this.Xn(n[t],t,s([e],r))},n.id="LinkedErrors",n}(),st=w(),at=function(){function n(){this.name=n.id}return n.prototype.setupOnce=function(){V(function(t){if(nn().getIntegration(n)){if(!st.navigator||!st.location)return t;var r=t.request||{};return r.url=r.url||st.location.href,r.headers=r.headers||{},r.headers["User-Agent"]=st.navigator.userAgent,u({},t,{request:r})}return t})},n.id="UserAgent",n}(),ft=Object.freeze({GlobalHandlers:Qn,TryCatch:Yn,Breadcrumbs:et,LinkedErrors:ct,UserAgent:at}),ht=[new bn,new mn,new Yn,new et,new Qn,new ct,new at];var lt={},vt=w();vt.Sentry&&vt.Sentry.Integrations&&(lt=vt.Sentry.Integrations);var dt=u({},lt,wn,ft);return n.BrowserClient=Wn,n.Hub=Z,n.Integrations=dt,n.SDK_NAME=Hn,n.SDK_VERSION="5.5.0",n.Scope=G,n.Span=X,n.Transports=$n,n.addBreadcrumb=function(n){on("addBreadcrumb",n)},n.addGlobalEventProcessor=V,n.captureEvent=function(n){return on("captureEvent",n)},n.captureException=captureException,n.captureMessage=function(n,t){var r;try{throw new Error(n)}catch(n){r=n}return on("captureMessage",n,t,{originalException:n,syntheticException:r})},n.close=function(n){var t=nn().getClient();return t?t.close(n):Promise.reject(!1)},n.configureScope=function(n){on("configureScope",n)},n.defaultIntegrations=ht,n.flush=function(n){var t=nn().getClient();return t?t.flush(n):Promise.reject(!1)},n.forceLoad=function(){},n.getCurrentHub=nn,n.getHubFromCarrier=rn,n.init=function(n){if(void 0===n&&(n={}),void 0===n.defaultIntegrations&&(n.defaultIntegrations=ht),void 0===n.release){var t=w();t.SENTRY_RELEASE&&t.SENTRY_RELEASE.id&&(n.release=t.SENTRY_RELEASE.id)}!function(n,t){!0===t.debug&&T.enable(),nn().bindClient(new n(t))}(Wn,n)},n.lastEventId=function(){return nn().lastEventId()},n.onLoad=function(n){n()},n.setContext=function(n,t){on("setContext",n,t)},n.setExtra=function(n,t){on("setExtra",n,t)},n.setExtras=function(n){on("setExtras",n)},n.setTag=function(n,t){on("setTag",n,t)},n.setTags=function(n){on("setTags",n)},n.setUser=function(n){on("setUser",n)},n.showReportDialog=function(n){void 0===n&&(n={}),n.eventId||(n.eventId=nn().lastEventId());var t=nn().getClient();t&&t.showReportDialog(n)},n.withScope=un,n.wrap=function(n){Xn(n)()},n}({});
//# sourceMappingURL=bundle.min.js.map



/*[PATH @digikala/supernova/assets/local/package/framework.js]*/
function __(variable) {
    return variable;
}

function __digits(variable) {
    return variable;
}

var Framework = {
    xhrPool: [],
    xhrPoolSame: [],
    localStorageBinds: [],
    isInitialized:false,

    ajaxGETRequestHTML: function (url, params, callbackStatusTrue, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        return this.ajaxRequest('GET', url, params, callbackStatusTrue, null, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'HTML', async, false);
    },

    ajaxPOSTRequestHTML: function (url, params, callbackStatusTrue, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        return this.ajaxRequest('POST', url, params, callbackStatusTrue, null, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'HTML', async, false);
    },

    ajaxGETRequestJSON: function (url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        return this.ajaxRequest('GET', url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'JSON', async, false);
    },

    ajaxPOSTRequestJSON: function (url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        return this.ajaxRequest('POST', url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'JSON', async, false);
    },

    ajaxPATCHRequestJSON: function (url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        return this.ajaxRequest('PATCH', url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'JSON', async, false);
    },

    ajaxDELETERequestJSON: function (url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        return this.ajaxRequest('DELETE', url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'JSON', async, false);
    },

    ajaxUploadJSON: function (url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        return this.ajaxRequest('POST', url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'JSON', async, true);
    },

    ajaxRequest: function (method, url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, responseType, async, isFileUpload) {
        var thiz = this;
        if (method === 'undefined' || !['POST', 'PATCH', 'GET', 'DELETE'].includes(method) || url === 'undefined') {
            return;
        }

        if (loggedOnly !== 'undefined' && loggedOnly === true && !thiz.checkUserLogged()) {
            return;
        }

        //none, stop, execute
        duplicateMode = duplicateMode || 'none';
        duplicateUrl = duplicateUrl || url;
        async = typeof async !== 'undefined' ? async : true;
        return $.ajax({
            duplicateMode: duplicateMode,
            duplicateUrl: duplicateUrl,
            type: method,
            url: url,
            data: params,
            async: async,
            contentType: !isFileUpload ? 'application/x-www-form-urlencoded; charset=UTF-8' : false,
            processData: !isFileUpload,
            beforeSend: function (jqXHR, settings) {
                thiz.ajaxBeforeSendCallback(jqXHR, settings);
                thiz.ajaxBeforeSendCallbackFramework(jqXHR, settings);
                if (showLoader) {
                    thiz.showLoader();
                }
            },
            success: function (response) {
                if (showLoader) {
                    thiz.hideLoader();
                }

                if (responseType === 'HTML') {
                    if (response.length === 0) {
                        console.log(response, 'Please use AjaxHTMLResponse response!');
                        return;
                    }

                    callbackStatusTrue(response);
                    return;
                }

                if (response.status === 'undefined' && response.data === 'undefined') {
                    console.log(response, 'Please use AjaxJsonResponse response!');
                    return;
                }
                if (response.status === true) {
                    if (typeof callbackStatusTrue !== 'undefined' && callbackStatusTrue !== null) {
                        callbackStatusTrue(response.data);
                    } else {
                        console.log('Please define default true callback');
                    }
                } else if (response.status === false) {
                    if (typeof callbackStatusFalse !== 'undefined' && callbackStatusFalse !== null) {
                        callbackStatusFalse(response.data);
                    } else {
                        thiz.ajaxCallbackStatusFalse(response.data);
                    }
                } else {
                    console.log('Please use AjaxJsonResponse response!');
                }


            },
            error: function (jqXHR) {
                if (showLoader) {
                    thiz.hideLoader();
                }

                switch (jqXHR.status) {
                    case 0:
                        break;
                    case 400:
                        thiz.ajaxErrorBadRequestResponse(jqXHR);
                        break;
                    case 401:
                        thiz.ajaxError401Response(jqXHR);
                        break;
                    case 403:
                    case 404:
                    case 422:
                    case 500:
                        thiz.ajaxErrorDefaultResponse(jqXHR);
                        break;
                    case 503:
                        thiz.ajaxError503Response(jqXHR);
                        break;
                    default:
                        thiz.ajaxErrorDefaultResponse(jqXHR);
                        break;
                }

            },
            complete: function () {
                if (showLoader) {
                    thiz.hideLoader();
                }
            }
        });
    },
    checkUserLogged: function () {
        return true;
    },
    ajaxError401Response: function (jqXHR) {
        this.logToConsole('User not logged in');
    },
    ajaxError503Response: function (jqXHR) {
        alert('We are deploying new version of the platform. Please try again in a minutes');
    },
    ajaxErrorDefaultResponse: function (jqXHR) {
        this.logToConsole('Please define default error callback. Code #' + jqXHR.status);
        alert('Error!');
    },
    ajaxErrorBadRequestResponse: function (jqXHR) {
        $(".c-card__loading").removeClass("is-active");
        alert('Error!');
    },
    ajaxBeforeSendCallback: function (jqXHR, settings) {

    },
    ajaxBeforeSendCallbackFramework: function (jqXHR, settings) {
        var thiz = this;
        if (settings.duplicateMode === 'execute') {
            jqXHR.url = settings.duplicateUrl || settings.url;
            $.each(thiz.xhrPool, function (k, v) {
                if (v.url === jqXHR.url) {
                    v.abort();
                }
            });
            thiz.xhrPool = $.grep(thiz.xhrPool, function (v) {
                return (v.url === jqXHR.url) || (v.readyState === 4);
            }, true);
            thiz.xhrPool.push(jqXHR);
        } else if (settings.duplicateMode === 'stop') {
            jqXHR.url = settings.duplicateUrl || settings.url;
            thiz.xhrPoolSame = $.grep(thiz.xhrPool, function (v) {
                return v.url === jqXHR.url && v.readyState !== 4;
            });
            if (thiz.xhrPoolSame.length) {
                jqXHR.abort();
            } else {
                thiz.xhrPool.push(jqXHR);
            }
        }
    },
    ajaxCallbackStatusFalse: function (data) {

    },
    showLoader: function () {
        if ($('[data-remodal-id="loader"]').length) {
            $('[data-remodal-id="loader"]').remodal().open();
        }
    },
    hideLoader: function () {
        setTimeout(function () {
            if ($('[data-remodal-id="loader"]').length) {
                var $modal = $('[data-remodal-id="loader"]').remodal();

                if($modal.getState() === 'opening') {
                    $(document).on('opened', '[data-remodal-id="loader"]', function () {
                        $modal.close();
                        $(document).off('opened', '[data-remodal-id="loader"]');
                    });
                } else {
                    $modal.close();
                }
            }
        }, 500);
    },
    initLazyLocalStorage: function () {
        var thiz = this;
        var $divs = $('div.sn-local-storage');

        function clearCached(md5, code) {
            localStorage.removeItem(code + '_' + md5);
            localStorage.removeItem(code + '_' + md5 + '_expire');
        }

        function saveCache(md5, data, code) {
            localStorage.setItem(code + '_' + md5, data);
        }

        function clearTrashCaches(code, currentMd5) {
            var keys = Object.keys(localStorage);
            for (var i = 0; i < keys.length; ++i) {
                var item = keys[i];
                if ((new RegExp(code + '.*', 'g').test(item) || new RegExp(code + '_.*_expire$').test(item))
                    && item.replace('_expire', '').replace(code + '_', '') !== currentMd5)
                    localStorage.removeItem(item);
            }
        }

        $divs.each(function () {
            var $this = $(this);
            var md5 = $this.data('md5');
            var path = $this.data('path');
            var code = $this.data('code');
            var content = localStorage.getItem(code + '_' + md5);
            var contentExpire = localStorage.getItem(code + '_' + md5 + '_expire'),
                contentExpireTime = new Date(parseInt(contentExpire) || contentExpire) || null;
            clearTrashCaches(code, md5);
            if (!content || !contentExpireTime || new Date() > contentExpireTime) {
                $this.parent().load('/local/storage/' + md5 + '/' + path + '/', function (data, status) {
                    if (status === 'success') {
                        saveCache(md5, data, code);
                        if (thiz.localStorageBinds[code] !== undefined) {
                            thiz.localStorageBinds[code]();
                        }
                    } else {
                        clearCached(md5, code);
                        if (window.location.origin.indexOf('demo') === -1)
                            window.location.reload(true);
                    }
                });
            } else {
                $this.parent().html(content);
                if (thiz.localStorageBinds[code] !== undefined) {
                    thiz.localStorageBinds[code]();
                }
            }
        });
    },
    registerLazyLocalStorageBinder: function (code, func) {
        this.localStorageBinds[code] = func;
    },

    getUrlSearchParams: function () {
        return new URLSearchParams(window.location.search);
    },

    replaceUrlParam: function(url, paramName, paramValue) {
        if (paramValue == null) {
            paramValue = '';
        }

        var pattern = new RegExp('\\b('+paramName+'=).*?(&|#|$)');

        if (url.search(pattern)>=0) {
            return url.replace(pattern,'$1' + paramValue + '$2');
        }

        url = url.replace(/[?#]$/,'');
        return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
    },

    isModuleActive: function (moduleName) {
        return !!window['module_' + moduleName];
    },
    isWaitingForApproval: function (featureCode) {
        return window['supernova_mode'] !== 'production';
    },
    initGlobalModuleChecker: function () {
        window.isModuleActive = Framework.isModuleActive
    },
    initAjaxAnchor: function () {
        if (Framework.isInitialized) {
            return;
        }

        $('.js-ajax-anchor').click(function (e) {
            let thiz = $(this)
            let url = thiz.data('ajax-url');
            let defaultSuccessMessage = thiz.data('success-message');
            let defaultErrorMessage = thiz.data('error-message');
            if (!thiz.hasClass('disable-auto-hide')) {
                thiz.fadeOut();
            }

            if (url) {
                Framework.ajaxGETRequestJSON(
                    url,
                    {},
                    function (e) {
                        debugger
                        let message = e.message || defaultSuccessMessage;
                        if (typeof DKToast !== "undefined") {
                            DKToast(message, 'success');
                        } else {
                            UIkit.notification({
                                message: message,
                                status: 'success',
                                pos: 'bottom-right',
                                timeout: 3000
                            });
                        }

                        thiz.fadeIn();
                    },
                    function (e) {
                        let message = e.message || defaultErrorMessage;
                        if (typeof DKToast !== "undefined") {
                            DKToast(message, 'error');
                        } else {
                            UIkit.notification({
                                message: message,
                                status: 'danger',
                                pos: 'bottom-right',
                                timeout: 3000
                            });
                        }

                        thiz.fadeIn();
                    }
                )
            }
        });
    },
    initJsErrorLog: function () {
        window.onerror = function (msg, url, lineNo, columnNo, error) {
            let data = {msg: msg, url: window.location.href, file: url, line: lineNo, column: columnNo};
            if (error && error.stack) {
                data.errorStack = error.stack;
            }
            if (navigation) {
                data.userAgent = navigator.userAgent;
            }
            $.ajax({
                type: 'post',
                url: '/ajax/save-js-error/',
                data: data,
                success: function () {
                },
                error: function () {

                }
            });
        }
    },
    logToConsole: function (data) {
        console.log(data);
    },

    initLocalStorageService: function() {
        window.localStorageService = {
            inMemoryStorage: {},

            isSupported: function() {
                try {
                    const testKey = "__test-string-key-for-digikala-local-storage-service__";
                    window.localStorage.setItem(testKey, testKey);
                    window.localStorage.removeItem(testKey);
                    return true;
                } catch (e) {
                    return false;
                }
            },

            clear: function () {
                try {
                    window.localStorage.clear();
                } catch(e) {
                }

                this.inMemoryStorage = {};
            },

            getItem: function (name) {
                if (this.isSupported()) {
                    return window.localStorage.getItem(name);
                }
                if (this.inMemoryStorage.hasOwnProperty(name)) {
                    return this.inMemoryStorage[name];
                }
                return null;
            },

            key: function (index) {
                if (this.isSupported()) {
                    return window.localStorage.key(index);
                } else {
                    return Object.keys(this.inMemoryStorage)[index] || null;
                }
            },

            removeItem: function (name) {
                if (this.isSupported()) {
                    window.localStorage.removeItem(name);
                } else {
                    delete this.inMemoryStorage[name];
                }
            },

            setItem: function (name, value) {
                if (this.isSupported()) {
                    window.localStorage.setItem(name, value);
                } else {
                    this.inMemoryStorage[name] = value + "";
                }
            }
        };
    },

    copyClipboard: function (text) {
        var aux = document.createElement("input");
        aux.setAttribute("value", text);
        aux.setAttribute("contenteditable", true); //IOS compatibility
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }
};


$(function () {
    Framework.initLocalStorageService();
    Framework.initLazyLocalStorage();
    Framework.initGlobalModuleChecker();
    Framework.initAjaxAnchor();
    Framework.isInitialized = true;
});


/*[PATH @digikala/supernova/assets/local/package/sntracker.js]*/
var SnTracker = {
        sendCount: 5,
        isSending: false,
        isLocalStorageAvailable: function () {
            var checkKey = 'localStorageIsAvailable';
            if (!localStorage) return false;
            try {
                localStorage.setItem(checkKey, checkKey);
                localStorage.removeItem(checkKey);
                return true;
            } catch (e) {
                return false;
            }
        },
        lock: function () {
            this.isLocalStorageAvailable() ? localStorage.setItem('isSnTrackerSendingEvents', 1) : true;
        },
        unlock: function () {
            this.isLocalStorageAvailable() ? localStorage.removeItem('isSnTrackerSendingEvents') : true;
        },
        isLocked: function () {
            return this.isLocalStorageAvailable() ? !!localStorage.getItem('isSnTrackerSendingEvents') : false;
        },
        storage: {
            data: {},
            save: function () {
                var storage = SnTracker.storage;
                if (localStorage) {
                    try {
                        localStorage.setItem('snevents', JSON.stringify(storage.data));
                    } catch (e) {
                        // TODO
                    }
                }
                return storage;
            },
            clear: function (list) {
                var storage = SnTracker.storage;
                if (list) {
                    if (!storage.data.hasOwnProperty(list)) {
                        return;
                    } else {
                        storage.data[list] = [];
                    }
                } else {
                    storage.data = {};
                }
                storage.save();
                return storage;
            },
            set: function (name, value) {
                var storage = SnTracker.storage;
                storage.data[name] = value;
                storage.save();

                return storage;
            },
            add: function (list, object) {
                var storage = SnTracker.storage;
                if (!storage.get(list)) {
                    storage.data[list] = [];
                }
                storage.data[list].push(object);
                storage.save();

                return storage;
            },
            get: function (name) {
                var storage = SnTracker.storage;
                if (!storage.data.hasOwnProperty(name) || !storage.data[name]) {
                    return null;
                }
                return storage.data[name];
            }
        },

        utils: {
            getCookieById: function (cookieKey, type) {
                var cookies = (document.cookie || '').split(';'), result = {};
                for (var i = 0; i < cookies.length; ++i) {
                    var t = cookies[i].split('=');
                    result[t[0].trim()] = t[1].trim();
                }
                if (result[cookieKey]) {
                    switch (type) {
                        case 'string':
                            return result[cookieKey];
                        case 'json' :
                            return JSON.parse(result[cookieKey]);
                        default :
                            return null;
                    }
                }
            },

            Cookie: {
                // Create cookie
                set: function (name, value, seconds) {
                    var expires;
                    if (seconds) {
                        var date = new Date();
                        date.setTime(date.getTime() + (seconds * 1000));
                        expires = "; expires=" + date.toGMTString();
                    } else {
                        expires = "";
                    }
                    document.cookie = name + "=" + value + expires + ";domain=.digikala.com;path=/";
                },

                // Read cookie
                get: function (name) {
                    var nameEQ = name + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) === ' ') {
                            c = c.substring(1, c.length);
                        }
                        if (c.indexOf(nameEQ) === 0) {
                            return c.substring(nameEQ.length, c.length);
                        }
                    }
                    return null;
                },

                // Erase cookie
                remove: function (name) {
                    SnTracker.utils.Cookie.set(name, "", -1);
                }
            },

            setCookieById: function (cookieKey, cookieValue, type) {
                switch (type) {
                    case 'string':
                        document.cookie = cookieKey + "=" + cookieValue + "; path=/;sameSite=Lax;Secure=true";
                        break;
                    case 'json' :
                        document.cookie = cookieKey + "=" + JSON.stringify(cookieValue) + "; path=/;sameSite=Lax;Secure=true";
                        break;
                    default :
                        return;
                }
            },

            getUrlQuerylVars: function (urlAddress) {
                var queryString = {};
                try {
                    var vars = urlAddress.slice(urlAddress.indexOf('?') + 1).split('&');
                    for (var i = 0; i < vars.length; i++) {
                        var pair = vars[i].split('=');
                        if (pair[0]) {
                            queryString[pair[0]] = pair[1];
                        }
                    }
                    return queryString;
                } catch (e) {
                    return [];
                }
            },

            getUrlPathParts: function (urlAddress) {
                if (urlAddress) {
                    var parts = urlAddress.split('://')[1].split('/');
                    parts[0].includes("digikala.com") ? parts[0] = "digikala" : parts = ["referrer"];
                    if (parts[parts.length - 1][0] === "?") {
                        parts.splice(-1, 1);
                    }
                    return parts;
                } else {
                    return [];
                }
            },

            getProductViewChannel: function (type) {
                var pageSource = {};
                var pageAddress = '';
                switch (type) {
                    case 'quick': {
                        pageAddress = decodeURIComponent(document.URL.toLowerCase());
                        if (pageAddress === "") {
                            pageSource["type"] = "Direct";
                            return pageSource;
                        }
                        break;
                    }
                    case 'page': {
                        pageAddress = decodeURIComponent(document.referrer.toLowerCase());
                        if (pageAddress === "") {
                            pageSource["type"] = "Direct";
                            return pageSource;
                        }
                        break;
                    }
                    default: {
                        return pageSource;
                    }
                }

                var pagePath = this.getUrlPathParts(pageAddress);
                var pageQueryString = this.getUrlQuerylVars(pageAddress);
                if (!pageAddress) {
                    pageSource["type"] = "Direct";
                    return pageSource;
                } else if (pagePath[0] !== "digikala") {
                    pageSource["type"] = "Referrer";
                    return pageSource;
                } else if (pagePath.length === 1) {
                    pageSource["type"] = "HomePage";
                    return pageSource;
                } else if (pageQueryString["bcode"]) {
                    pageSource["type"] = "Banner";
                    pageSource["bannerId"] = pageQueryString["bcode"];
                    if (pagePath[2].substring(0, 3) === "cmp") {
                        pageSource["campaignId"] = pagePath[2].slice(4);
                    }
                    return pageSource;
                } else if (pageQueryString["promotion_types[0]"] === "incredible_offer") {
                    if (pageQueryString["promotion_types[1]"] === "promotion") {
                        pageSource["type"] = "Amazing";
                        return pageSource;
                    } else {
                        pageSource["type"] = "IncredibleOffer";
                        return pageSource;
                    }
                }
                switch (pagePath[1]) {
                    case 'promotion-page': {
                        pageSource["type"] = "Promotion";
                        if (pagePath[2].substring(0, 3) === "cmp") {
                            pageSource["campaignId"] = pagePath[2].slice(4);
                        }
                        if (pagePath[2].substring(0, 3) === "plp") {
                            pageSource["plp"] = pagePath[2].slice(4);
                        }
                        if (pagePath[2].substring(0, 3) === "rcm") {
                            pageSource["rcm"] = pagePath[2].slice(4);
                        }
                        return pageSource;
                    }
                    case "product-list": {
                        pageSource["type"] = "ProductList";
                        if (pagePath[2].substring(0, 3) === "plp") {
                            pageSource["plp"] = pagePath[2].slice(4);
                        }
                        if (pagePath[2].substring(0, 3) === "rcm") {
                            pageSource["rcm"] = pagePath[2].slice(4);
                        }
                        return pageSource;
                    }
                    case "landing-page": {
                        pageSource["type"] = "LandingPage";
                        return pageSource;
                    }
                    case "search": {
                        if (pagePath[2]) {
                            if (pagePath[2].substring(0, 8) === "category") {
                                pageSource["type"] = "Navigation";
                                return pageSource;
                            }
                        } else if (pageQueryString["q"]) {
                            pageSource["type"] = "Search";
                            pageSource["keyword"] = pageQueryString["q"];
                            return pageSource;
                        }
                        pageSource["type"] = "Search";
                        return pageSource;
                    }
                    case "main": {
                        pageSource["type"] = "Main";
                        return pageSource;
                    }
                    case "product": {
                        pageSource["type"] = "ProductPage";
                        return pageSource;
                    }
                    case "seller": {
                        pageSource["type"] = "SellerPage";
                        return pageSource;
                    }
                    default: {
                        pageSource["type"] = "NotDetected";
                        pageSource["referrer"] = pageAddress;
                        return pageSource;
                    }
                }
            },

            UTMParser: function () {
                var pageAddress = decodeURIComponent(document.URL.toLowerCase());
                var referrerAddress = decodeURIComponent(document.referrer.toLowerCase());
                var utm = {
                    u_medium: null,
                    u_source: null,
                    u_campaign: null,
                    u_term: null,
                    u_content: null
                };
                var referrerQueryString = this.getUrlQuerylVars(pageAddress);
                if (typeof referrerQueryString['utm_source'] !== 'undefined') {
                    utm.u_medium = (referrerQueryString['utm_medium']) ? referrerQueryString['utm_medium'] : null;
                    utm.u_source = (referrerQueryString['utm_source']) ? referrerQueryString['utm_source'] : null;
                    utm.u_campaign = (referrerQueryString['utm_campaign']) ? referrerQueryString['utm_campaign'] : null;
                    utm.u_term = (referrerQueryString['utm_term']) ? referrerQueryString['utm_term'] : null;
                    utm.u_content = (referrerQueryString['utm_content']) ? referrerQueryString['utm_content'] : null;
                    return utm;
                }
                if (typeof referrerQueryString['gclid'] !== 'undefined') {
                    utm.u_medium = "SEA";
                    utm.u_source = utm.u_campaign = utm.u_content = utm.u_term = "AdWords";
                    return utm;
                }
                // eslint-disable-next-line no-useless-escape
                var patt = new RegExp("(\.google\.)|(\.yahoo\.)|(\.ask\.)|(\.bing\.)|(\.aol\.)|(\.msn\.)|(\.baidu\.)|(\.so\.com)|(\.sogou\.)|(\.yandex\.)|(\.duckduckgo\.)|(\.babylon\.)|(\.naver\.)|(\.search\.smt\.docomo\.)|(\.avg\.)|(\.rakuten\.)|(\.startsiden\.)|(\.go\.mail\.ru\.)|(\.onet\.)|(\.rambler\.)");
                if (patt.test(referrerAddress)) {
                    utm.u_medium = "SEO";
                    utm.u_source = referrerAddress;
                    utm.u_campaign = utm.u_content = utm.u_term = "Organic";
                    return utm;
                }
                if (referrerAddress) {
                    utm.u_medium = utm.u_campaign = utm.u_content = utm.u_term = "Referral";
                    utm.u_source = referrerAddress;
                    return utm;
                } else {
                    utm.u_medium = utm.u_source = utm.u_campaign = utm.u_content = utm.u_term = "Direct";
                    return utm;
                }
            }

        },

        trackers: {
            UTMTracking: function () {
                var referrerAddress = decodeURIComponent(document.referrer.toLowerCase());
                var refPaths = SnTracker.utils.getUrlPathParts(referrerAddress);
                if (refPaths[0] === "digikala" || refPaths[0] === "digistyle") {
                    return;
                }
                var utms = SnTracker.utils.UTMParser();
                if (utms.u_medium == null && utms.u_source == null) {
                    return;
                }
                SnTracker.utils.setCookieById("sn_tracker_campaign", utms, 'json');
                snt('dkUTMTracking', utms, true);
            },

            PageViewTracking: function () {
                if (!window.sntrackerActivation) {
                    return;
                }
                var pageAddress = decodeURIComponent(document.URL.toLowerCase());
                var pagePaths = SnTracker.utils.getUrlPathParts(pageAddress);
                var pageViewParams = {
                    pv_referrer: decodeURIComponent(document.referrer.toLowerCase()),
                    pv_page_address: decodeURIComponent(document.location.pathname),
                    pv_page_type: (pagePaths[1] !== "") ? pagePaths[1] : 'home',
                    pv_bot: /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent),
                    pv_user_agent: navigator.userAgent,
                    pv_query: SnTracker.utils.getUrlQuerylVars(pageAddress)
                    // ga_client_id : (typeof (ga.getAll()[0].get('clientId')) !== "undefined") ? ga.getAll()[0].get('clientId') : ''
                };
                if (/api\.sabavision\.ir/.test(document.referrer.toLowerCase())) {
                    pageViewParams.pv_referrer = "sabavision";
                }
                snt('dkPageView', pageViewParams, true);
            },

            GoogleClientTracking: function () {
                try {
                    if (typeof (ga.getAll()[0].get('clientId')) !== "undefined") {
                        var googleParams = {
                            clientId: ga.getAll()[0].get('clientId')
                        };
                        snt('dkGAClient', googleParams, true);
                    } else {
                        return this;
                    }
                } catch (e) {
                    return this;
                }

            },

            ClientSideErrorTracking: function () {
                window.onerror = function (errorMsg, url, lineNumber) {
                    var errorparams = {
                        error_message: errorMsg,
                        error_url: url,
                        error_line: lineNumber,
                        error_page: document.URL
                    };
                    snt('dkErrorLogClient', errorparams, true);
                }
            },

            CarouselItemClickEvent: function () {
                $(document).on('click', ".js-sntracker-carousel-item", function(){
                    var item = $(this);
                    var productId = item.data("id");
                    if(!productId) return;
                    var recommendationId = item.closest(".js-sntracker-carousel").attr("id");
                    if(!recommendationId) return;
                    var t = window.carouselData || [];
                    var tempCarouselData = null;
                    for (var i = 0; i < t.length; ++i) {
                        if (t[i].id === recommendationId) {
                            tempCarouselData = t[i];
                            tempCarouselData["page"] = window.dataGTM;
                            tempCarouselData["recomm"] = tempCarouselData["recomm"] === true;
                            break;
                        }
                    }

                    var position = item.data('position');
                    if(!tempCarouselData) return;
                    var trackerData = {
                        'productId' : productId,
                        'position' : position,
                        'carouselData' : tempCarouselData
                    };
                    snt('dkCarouselItemClick', trackerData, true);
                });
            }
        },

        eventsTackingSwitch: {
            dkAddToCart: true,
            dkCloseCart: true,
            dkSearch: true,
            dkProductClicked: true,
            dkProductViewed: true,
            dkSessionStarted: true,
            dkBannerClicked: false,
            dkBannerViewed: false,
            dkUTMTracking: false,
            dkQuickProductViewed: true,
            dkRecommendationCarousel: true,
            dkPageView: true,
            dkErrorLogClient: false,
            dkGAClient: false,
            dkTrendsClick: false,
            dkMegaMenuClick: false,
            dkNavBarClick: false,
            dkHeaderClick: false,
            dkFooterClick: false,
            dkIncredibleClick: false,
            dkDownloadAppButton: false,
            dkLoginClick: false,
            dkProductPageClick: false,
            dkShippingPageClick: false,
            dkPaymentPageClick: false,
            dkThankYouPageClick: false,
            dkCartPageClick: false,
            dkSearchPageClick: false,
            dkRecommendationClick: false,
            dkDeliveryOptions: false,
            dkCarouselItemClick:true,
            dkCarouselImpression: true,
            dkCarouselNotInterestedClick: true,
        },

        init: function () {
            var fns = [
                this.initStorage,
                this.globalDefine,
                this.initTimer,
                this.initHandler,
                this.initDOMAttributeListeners,
                this.sendAllEvents,
                this.trackers.ClientSideErrorTracking,
                this.trackers.PageViewTracking,
                this.trackers.CarouselItemClickEvent
            ], self = this;
            for (var i = 0; i < fns.length; ++i) {
                try {
                    fns[i].bind(self)();
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.warn('Tracker', e);
                }
            }
        },
        sendAllEvents: function () {
            if (SnTracker.isLocalStorageAvailable()) {
                var snevents = localStorage && localStorage.getItem('snevents') || null;
                if (!snevents) return;
                var events = snevents.events || [];

                SnTracker.sendEvents(events, true);
            }
        },
        initHandler: function () {
            window.onbeforeunload = function () {
                SnTracker.unlock();
            };
            window.onunload = function () {
                if (SnTracker.isLocked) {
                    SnTracker.unlock();
                }
            };
        },
        initStorage: function () {
            this.storage.data = localStorage ? JSON.parse(localStorage.getItem('snevents')) || {} : {};
        },
        globalDefine: function () {
            window.tracker = window.tracker || this;
            window.snt = window.snt || this.sendEvent.bind(this);

        },
        createEventObject: function (eventName, eventParams) {
            var globalParams = !!window.snTrackerGlobals ? window.snTrackerGlobals || {} : {};
            return {
                name: eventName,
                params: Object.assign({}, globalParams, eventParams || {}) || {},
                time: Date.now(),
                url: window.location.href
            }
        },
        sendEvent: function (eventName, eventParams/*, immediate */) {
            if (!eventName) {
                return;
            }

            if (this.eventsTackingSwitch[eventName]) {
                var event = this.createEventObject(eventName, eventParams);
                return this.sendEvents([event]);

                //  Disabled
                if (this.isLocalStorageAvailable())
                    this.storage.add('events', event);
                var events = this.storage.get('events') || [];
                if (events.length >= SnTracker.sendCount || !this.isLocalStorageAvailable) {
                    this.sendEvents();
                }
            }
        },
        sendRequest: function (data, onSuccess, onFailed) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", '/tracker/events/');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.onload = function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status == "200") {
                    onSuccess && onSuccess();
                } else {
                    onFailed && onFailed();
                }
            };
            xmlhttp.send(JSON.stringify(data));
        },
        sendEvents: function (events, clear) {
            // if (SnTracker.isSending) return;
            // if (SnTracker.isLocked()) return;
            try {
                var self = this;
                events = events || this.storage.get('events');
                if (!events || !events.length) {
                    if (clear)
                        localStorage && localStorage.removeItem('snevents');
                    return;
                }
                // SnTracker.lock();
                // SnTracker.isSending = true;
                this.sendRequest({
                    events: events,
                    version: 1
                }, function () {
                    self.storage.clear('events');
                    if (clear) {
                        localStorage && localStorage.removeItem('snevents');
                    }
                    // SnTracker.isSending = false;
                    // SnTracker.unlock();
                }, function () {
                    // eslint-disable-next-line no-console
                    console.warn('Tracker Send Failed');
                    // SnTracker.isSending = false;
                    // SnTracker.unlock();
                });
            } catch (e) {
                window.Sentry && window.Sentry.captureException(e);
            }

        },

        initTimer: function () {
            var self = this;
            setInterval(function () {
                if (!self.storage.get('events') || !self.storage.get('events').length) {
                    return;
                }
                self.sendEvents(self.storage.get('events') || []);
            }, 1000);
        }
        ,
        initDOMAttributeListeners: function () {
            $(document).on('click', '[data-snt-event][data-snt-trigger="click"], [data-snt-event]:not([data-snt-trigger])', function () {
                snt($(this).data('snt-event'), $(this).data('snt-params'), $(this).closest('a').attr('target') === "_blank");
            });
            $('[data-snt-event="dkMegaMenuClick"]').click(function () {
                snt($(this).data('snt-event'), $(this).data('snt-params'), $(this).closest('a').attr('target') === "_blank");
            });
            // var impressionComponents = $('[data-snt-event][data-snt-impression]');
            // var $w = $(window);
            // $w.scroll(function () {
            //     (function ($w) {
            //         var inview = impressionComponents.filter(function () {
            //             var $e = $(this);
            //             if ($e.is(":hidden")) return;
            //             var wt = $w.scrollTop(),
            //                 wb = wt + $w.height(),
            //                 et = $e.offset().top,
            //                 eb = et + $e.height();
            //             return eb >= wt - 5 && et <= wb + 5;
            //         });
            //         inview.each(function () {
            //             snt($(this).data('snt-event'), $(this).data('snt-params'));
            //         });
            //         impressionComponents = impressionComponents.not(inview);
            //     }).bind(this, $w)();
            // }).scroll();
        }
    }
;

$(function () {
    SnTracker.init();
});



/*[PATH @digikala/supernova-digistyle-desktop/static/js/jquery.swiper.min.js]*/
/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target?e.target.dom7EventData||[]:[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter(function(e,t){return t>0}),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var r=s(e[i]);for(a=0;a<r.length;a+=1)this[this.length]=r[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach(function(e){s.fn[e]=r[e]});var n,o,l,d={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(void 0!==a&&null!==a)for(var r=Object.keys(Object(a)),n=0,o=r.length;n<o;n+=1){var l=r[n],h=Object.getOwnPropertyDescriptor(a,l);void 0!==h&&h.enumerable&&(d.isObject(i[l])&&d.isObject(a[l])?d.extend(i[l],a[l]):!d.isObject(i[l])&&d.isObject(a[l])?(i[l]={},d.extend(i[l],a[l])):i[l]=a[l])}}return i}},h=(l=e.createElement("div"),{touch:t.Modernizr&&!0===t.Modernizr.touch||!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!(!t.navigator.pointerEnabled&&!t.PointerEvent),prefixedPointerEvents:!!t.navigator.msPointerEnabled,transition:(o=l.style,"transition"in o||"webkitTransition"in o||"MozTransition"in o),transforms3d:t.Modernizr&&!0===t.Modernizr.csstransforms3d||(n=l.style,"webkitPerspective"in n||"MozPerspective"in n||"OPerspective"in n||"MsPerspective"in n||"perspective"in n),flexbox:function(){for(var e=l.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),i=0;i<t.length;i+=1)if(t[i]in e)return!0;return!1}(),observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t}),p=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},c={components:{configurable:!0}};p.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach(function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)}),s},p.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;return s.on(e,function i(){for(var a=[],r=arguments.length;r--;)a[r]=arguments[r];t.apply(s,a),s.off(e,i)},i)},p.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach(function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e].forEach(function(s,a){s===t&&i.eventsListeners[e].splice(a,1)})}),i):i},p.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;return r.eventsListeners?("string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(a,s)})}}),r):r},p.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i];s.params&&d.extend(e,s.params)})},p.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach(function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i}),s.on&&t.on&&Object.keys(s.on).forEach(function(e){t.on(e,s.on[e])}),s.create&&s.create.bind(t)(a)})},c.components.set=function(e){this.use&&this.use(e)},p.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+d.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach(function(t){s.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(function(t){s[t]=e.static[t]}),e.install&&e.install.apply(s,t),s},p.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach(function(e){return s.installModule(e)}),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(p,c);var u={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),d.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,n=this.virtual&&e.virtual.enabled,o=n?this.virtual.slides.length:this.slides.length,l=i.children("."+this.params.slideClass),p=n?this.virtual.slides.length:l.length,c=[],u=[],v=[],f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,E=0;if(void 0!==s){var T,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(T=Math.floor(p/e.slidesPerColumn)===p/this.params.slidesPerColumn?p:Math.ceil(p/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(T=Math.max(T,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,z=T/M,k=z-(e.slidesPerColumn*z-p),P=0;P<p;P+=1){S=0;var $=l.eq(P);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;"column"===e.slidesPerColumnFill?(D=P-(I=Math.floor(P/M))*M,(I>k||I===k&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1),L=I+D*T/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})):I=P-(D=Math.floor(P/z))*z,$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px").attr("data-swiper-column",I).attr("data-swiper-row",D)}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var O=t.getComputedStyle($[0],null),A=$[0].style.transform,G=$[0].style.webkitTransform;A&&($[0].style.transform="none"),G&&($[0].style.webkitTransform="none"),S=this.isHorizontal()?$[0].getBoundingClientRect().width+parseFloat(O.getPropertyValue("margin-left"))+parseFloat(O.getPropertyValue("margin-right")):$[0].getBoundingClientRect().height+parseFloat(O.getPropertyValue("margin-top"))+parseFloat(O.getPropertyValue("margin-bottom")),A&&($[0].style.transform=A),G&&($[0].style.webkitTransform=G),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),l[P]&&(this.isHorizontal()?l[P].style.width=S+"px":l[P].style.height=S+"px");l[P]&&(l[P].swiperSlideSize=S),v.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==P&&(y=y-s/2-w),0===P&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),E%e.slidesPerGroup==0&&c.push(y),u.push(y)):(e.roundLengths&&(y=Math.floor(y)),E%e.slidesPerGroup==0&&c.push(y),u.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,E+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),h.flexbox&&!e.setWrapperSize||(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*T,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var H=0;H<c.length;H+=1){var N=c[H];e.roundLengths&&(N=Math.floor(N)),c[H]<this.virtualSize+c[0]&&C.push(N)}c=C}if(!e.centeredSlides){C=[];for(var B=0;B<c.length;B+=1){var X=c[B];e.roundLengths&&(X=Math.floor(X)),c[B]<=this.virtualSize-s&&C.push(X)}c=C,Math.floor(this.virtualSize-s)-Math.floor(c[c.length-1])>1&&c.push(this.virtualSize-s)}0===c.length&&(c=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?l.css({marginLeft:w+"px"}):l.css({marginRight:w+"px"}):l.css({marginBottom:w+"px"})),d.extend(this,{slides:l,snapGrid:c,slidesGrid:u,slidesSizesGrid:v}),p!==o&&this.emit("slidesLengthChange"),c.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),u.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,s=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var a=-e;s&&(a=e),i.removeClass(t.slideVisibleClass);for(var r=0;r<i.length;r+=1){var n=i[r],o=(a+(t.centeredSlides?this.minTranslate():0)-n.swiperSlideOffset)/(n.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility){var l=-(a-n.swiperSlideOffset),d=l+this.slidesSizesGrid[r];(l>=0&&l<this.size||d>0&&d<=this.size||l<=0&&d>=this.size)&&i.eq(r).addClass(t.slideVisibleClass)}n.progress=s?-o:o}}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.maxTranslate()-this.minTranslate(),s=this.progress,a=this.isBeginning,r=this.isEnd,n=a,o=r;0===i?(s=0,a=!0,r=!0):(a=(s=(e-this.minTranslate())/i)<=0,r=s>=1),d.extend(this,{progress:s,isBeginning:a,isEnd:r}),(t.watchSlidesProgress||t.watchSlidesVisibility)&&this.updateSlidesProgress(e),a&&!n&&this.emit("reachBeginning toEdge"),r&&!o&&this.emit("reachEnd toEdge"),(n&&!a||o&&!r)&&this.emit("fromEdge"),this.emit("progress",s)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,n=this.activeIndex,o=this.realIndex,l=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if((t=a.indexOf(i)>=0?a.indexOf(i):Math.floor(h/r.slidesPerGroup))>=a.length&&(t=a.length-1),h!==n){var c=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);d.extend(this,{snapIndex:t,realIndex:c,previousIndex:n,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),o!==c&&this.emit("realIndexChange"),this.emit("slideChange")}else t!==l&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;var r=d.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.progress,n=0,o=0;this.isHorizontal()?n=i?-e:e:o=e,s.roundLengths&&(n=Math.floor(n),o=Math.floor(o)),s.virtualTranslate||(h.transforms3d?a.transform("translate3d("+n+"px, "+o+"px, 0px)"):a.transform("translate("+n+"px, "+o+"px)")),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?n:o;var l=this.maxTranslate()-this.minTranslate();(0===l?0:(e-this.minTranslate())/l)!==r&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var f={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex;this.animating=!1,this.setTransition(0);var a=t;if(a||(a=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===a)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===a?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}};var m={slideTo:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=this,r=e;r<0&&(r=0);var n=a.params,o=a.snapGrid,l=a.slidesGrid,d=a.previousIndex,p=a.activeIndex,c=a.rtlTranslate;if(a.animating&&n.preventIntercationOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&i&&a.emit("beforeSlideChangeStart");var v,f=-o[u];if(a.updateProgress(f),n.normalizeSlideIndex)for(var m=0;m<l.length;m+=1)-Math.floor(100*f)>=Math.floor(100*l[m])&&(r=m);if(a.initialized&&r!==p){if(!a.allowSlideNext&&f<a.translate&&f<a.minTranslate())return!1;if(!a.allowSlidePrev&&f>a.translate&&f>a.maxTranslate()&&(p||0)!==r)return!1}return v=r>p?"next":r<p?"prev":"reset",c&&-f===a.translate||!c&&f===a.translate?(a.updateActiveIndex(r),n.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),"slide"!==n.effect&&a.setTranslate(f),"reset"!==v&&(a.transitionStart(i,v),a.transitionEnd(i,v)),!1):(0!==t&&h.transition?(a.setTransition(t),a.setTranslate(f),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,v),a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(e){a&&!a.destroyed&&e.target===this&&(a.$wrapperEl[0].removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].removeEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd),a.transitionEnd(i,v))}),a.$wrapperEl[0].addEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].addEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd))):(a.setTransition(0),a.setTranslate(f),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,v),a.transitionEnd(i,v)),!0)},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating;return s.loop?!a&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)):this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map(function(e){return l(e)}),c=(n.map(function(e){return l(e)}),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.activeIndex,a=Math.floor(s/this.params.slidesPerGroup);if(a<this.snapGrid.length-1){var r=this.rtlTranslate?this.translate:-this.translate,n=this.snapGrid[a];r-n>(this.snapGrid[a+1]-n)/2&&(s=this.params.slidesPerGroup)}return this.slideTo(s,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,n=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?n<t.loopedSlides-r/2||n>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick(function(){t.slideTo(n)})):t.slideTo(n):n>t.slides.length-r?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick(function(){t.slideTo(n)})):t.slideTo(n)}else t.slideTo(n)}};var g={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=parseInt(i.loopedSlides||i.slidesPerView,10),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each(function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)});for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){var e,t=this.params,i=this.activeIndex,s=this.slides,a=this.loopedSlides,r=this.allowSlidePrev,n=this.allowSlideNext,o=this.snapGrid,l=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var d=-o[i]-this.getTranslate();i<a?(e=s.length-3*a+i,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d)):("auto"===t.slidesPerView&&i>=2*a||i>=s.length-a)&&(e=-s.length+i+a,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d));this.allowSlidePrev=r,this.allowSlideNext=n},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass).remove(),i.removeAttr("data-swiper-slide-index")}};var b={setGrabCursor:function(e){if(!(h.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){h.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var w={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&h.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,o=[],l=r-1;l>=e;l-=1){var d=this.slides.eq(l);d.remove(),o.unshift(d)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<o.length;c+=1)i.append(o[c]);s.loop&&this.loopCreate(),s.observer&&h.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},y=function(){var i=t.navigator.userAgent,s={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:t.cordova||t.phonegap,phonegap:t.cordova||t.phonegap},a=i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),r=i.match(/(Android);?[\s\/]+([\d.]+)?/),n=i.match(/(iPad).*OS\s([\d_]+)/),o=i.match(/(iPod)(.*OS\s([\d_]+))?/),l=!n&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(s.os="windows",s.osVersion=a[2],s.windows=!0),r&&!a&&(s.os="android",s.osVersion=r[2],s.android=!0,s.androidChrome=i.toLowerCase().indexOf("chrome")>=0),(n||l||o)&&(s.os="ios",s.ios=!0),l&&!o&&(s.osVersion=l[2].replace(/_/g,"."),s.iphone=!0),n&&(s.osVersion=n[2].replace(/_/g,"."),s.ipad=!0),o&&(s.osVersion=o[3]?o[3].replace(/_/g,"."):null,s.iphone=!0),s.ios&&s.osVersion&&i.indexOf("Version/")>=0&&"10"===s.osVersion.split(".")[0]&&(s.osVersion=i.toLowerCase().split("version/")[1].split(" ")[0]),s.desktop=!(s.os||s.android||s.webView),s.webView=(l||n||o)&&i.match(/.*AppleWebKit(?!.*Safari)/i),s.os&&"ios"===s.os){var d=s.osVersion.split("."),h=e.querySelector('meta[name="viewport"]');s.minimalUi=!s.webView&&(o||l)&&(1*d[0]==7?1*d[1]>=1:1*d[0]>7)&&h&&h.getAttribute("content").indexOf("minimal-ui")>=0}return s.pixelRatio=t.devicePixelRatio||1,s}();function x(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;if(this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),e.freeMode){var r=Math.min(Math.max(this.translate,this.maxTranslate()),this.minTranslate());this.setTranslate(r),this.updateActiveIndex(),this.updateSlidesClasses(),e.autoHeight&&this.updateAutoHeight()}else this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0);this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}var E={attachEvents:function(){var i=this.params,a=this.touchEvents,r=this.el,n=this.wrapperEl;this.onTouchStart=function(i){var a=this.touchEventsData,r=this.params,n=this.touches;if(!this.animating||!r.preventIntercationOnTransition){var o=i;if(o.originalEvent&&(o=o.originalEvent),a.isTouchEvent="touchstart"===o.type,(a.isTouchEvent||!("which"in o)||3!==o.which)&&(!a.isTouched||!a.isMoved))if(r.noSwiping&&s(o.target).closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||s(o).closest(r.swipeHandler)[0]){n.currentX="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,n.currentY="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY;var l=n.currentX,h=n.currentY;if(!y.ios||y.cordova||!r.iOSEdgeSwipeDetection||!(l<=r.iOSEdgeSwipeThreshold||l>=t.screen.width-r.iOSEdgeSwipeThreshold)){if(d.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=l,n.startY=h,a.touchStartTime=d.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==o.type){var p=!0;s(o.target).is(a.formElements)&&(p=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==o.target&&e.activeElement.blur(),p&&this.allowTouchMove&&o.preventDefault()}this.emit("touchStart",o)}}}}.bind(this),this.onTouchMove=function(t){var i=this.touchEventsData,a=this.params,r=this.touches,n=this.rtlTranslate,o=t;if(o.originalEvent&&(o=o.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==o.type){var l="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,h="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=l,void(r.startY=h);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(d.extend(r,{startX:l,startY:h,currentX:l,currentY:h}),i.touchStartTime=d.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(h<r.startY&&this.translate<=this.maxTranslate()||h>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(l<r.startX&&this.translate<=this.maxTranslate()||l>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&o.target===e.activeElement&&s(o.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){r.currentX=l,r.currentY=h;var p,c=r.currentX-r.startX,u=r.currentY-r.startY;if(void 0===i.isScrolling&&(this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(p=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?p>a.touchAngle:90-p>a.touchAngle)),i.isScrolling&&this.emit("touchMoveOpposite",o),"undefined"==typeof startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,o.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&o.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",o)),this.emit("sliderMove",o),i.isMoved=!0;var v=this.isHorizontal()?c:u;r.diff=v,v*=a.touchRatio,n&&(v=-v),this.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;var f=!0,m=a.resistanceRatio;if(a.touchReleaseOnEdges&&(m=0),v>0&&i.currentTranslate>this.minTranslate()?(f=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+v,m))):v<0&&i.currentTranslate<this.maxTranslate()&&(f=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-v,m))),f&&(o.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(v)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:d.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",o)}.bind(this),this.onTouchEnd=function(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=d.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap",h),u<300&&c-i.lastClickTime>300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),i.clickTimeout=d.nextTick(function(){t&&!t.destroyed&&t.emit("click",h)},300)),u<300&&c-i.lastClickTime<300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),t.emit("doubleTap",h))),i.lastClickTime=d.now(),d.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||d.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,E,T=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(s.freeModeSticky){for(var C,M=0;M<l.length;M+=1)if(l[M]>-y){C=M;break}y=-(y=Math.abs(l[C]-y)<Math.abs(l[C-1]-y)||"next"===t.swipeDirection?l[C]:l[C-1])}if(E&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity);else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&T?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var z=0,k=t.slidesSizesGrid[0],P=0;P<o.length;P+=s.slidesPerGroup)void 0!==o[P+s.slidesPerGroup]?p>=o[P]&&p<o[P+s.slidesPerGroup]&&(z=P,k=o[P+s.slidesPerGroup]-o[P]):p>=o[P]&&(z=P,k=o[o.length-1]-o[o.length-2]);var $=(p-o[z])/k;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&($>=s.longSwipesRatio?t.slideTo(z+s.slidesPerGroup):t.slideTo(z)),"prev"===t.swipeDirection&&($>1-s.longSwipesRatio?t.slideTo(z+s.slidesPerGroup):t.slideTo(z))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(z+s.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(z)}}}.bind(this),this.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(this);var o="container"===i.touchEventsTarget?r:n,l=!!i.nested;if(h.touch||!h.pointerEvents&&!h.prefixedPointerEvents){if(h.touch){var p=!("touchstart"!==a.start||!h.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};o.addEventListener(a.start,this.onTouchStart,p),o.addEventListener(a.move,this.onTouchMove,h.passiveListener?{passive:!1,capture:l}:l),o.addEventListener(a.end,this.onTouchEnd,p)}(i.simulateTouch&&!y.ios&&!y.android||i.simulateTouch&&!h.touch&&y.ios)&&(o.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,l),e.addEventListener("mouseup",this.onTouchEnd,!1))}else o.addEventListener(a.start,this.onTouchStart,!1),e.addEventListener(a.move,this.onTouchMove,l),e.addEventListener(a.end,this.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&o.addEventListener("click",this.onClick,!0),this.on(y.ios||y.android?"resize orientationchange observerUpdate":"resize observerUpdate",x,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r="container"===t.touchEventsTarget?s:a,n=!!t.nested;if(h.touch||!h.pointerEvents&&!h.prefixedPointerEvents){if(h.touch){var o=!("onTouchStart"!==i.start||!h.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(i.start,this.onTouchStart,o),r.removeEventListener(i.move,this.onTouchMove,n),r.removeEventListener(i.end,this.onTouchEnd,o)}(t.simulateTouch&&!y.ios&&!y.android||t.simulateTouch&&!h.touch&&y.ios)&&(r.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,n),e.removeEventListener("mouseup",this.onTouchEnd,!1))}else r.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,n),e.removeEventListener(i.end,this.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",this.onClick,!0),this.off(y.ios||y.android?"resize orientationchange observerUpdate":"resize observerUpdate",x)}};var T={setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=s.breakpoints;if(a&&(!a||0!==Object.keys(a).length)){var r=this.getBreakpoint(a);if(r&&this.currentBreakpoint!==r){var n=r in a?a[r]:this.originalParams,o=s.loop&&n.slidesPerView!==s.slidesPerView;d.extend(this.params,n),d.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=r,o&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",n)}}},getBreakpoint:function(e){if(e){var i=!1,s=[];Object.keys(e).forEach(function(e){s.push(e)}),s.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var a=0;a<s.length;a+=1){var r=s[a];r>=t.innerWidth&&!i&&(i=r)}return i||"max"}}},S=function(){return{isIE:!!t.navigator.userAgent.match(/Trident/g)||!!t.navigator.userAgent.match(/MSIE/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)};var e}();var C={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventIntercationOnTransition:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},M={update:u,translate:v,transition:f,slide:m,loop:g,grabCursor:b,manipulation:w,events:E,breakpoints:T,checkOverflow:{checkOverflow:function(){var e=this.isLocked;this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,e!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),e&&e!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push(t.direction),t.freeMode&&a.push("free-mode"),h.flexbox||a.push("no-flexbox"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&a.push("multirow"),y.android&&a.push("android"),y.ios&&a.push("ios"),S.isIE&&(h.pointerEvents||h.prefixedPointerEvents)&&a.push("wp8-"+t.direction),a.forEach(function(i){e.push(t.containerModifierClass+i)}),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){void 0!==e&&null!==e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},z={},k=function(e){function t(){for(var i,a,r,n=[],o=arguments.length;o--;)n[o]=arguments[o];1===n.length&&n[0].constructor&&n[0].constructor===Object?r=n[0]:(a=(i=n)[0],r=i[1]),r||(r={}),r=d.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(M).forEach(function(e){Object.keys(M[e]).forEach(function(i){t.prototype[i]||(t.prototype[i]=M[e][i])})});var l=this;void 0===l.modules&&(l.modules={}),Object.keys(l.modules).forEach(function(e){var t=l.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s)return;if(!(i in r&&"enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}});var p=d.extend({},C);l.useModulesParams(p),l.params=d.extend({},p,z,r),l.originalParams=d.extend({},l.params),l.passedParams=d.extend({},r),l.$=s;var c=s(l.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each(function(e,i){var s=d.extend({},r,{el:i});u.push(new t(s))}),u}a.swiper=l,c.data("swiper",l);var v,f,m=c.children("."+l.params.wrapperClass);return d.extend(l,{$el:c,el:a,$wrapperEl:m,wrapperEl:m[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===l.params.direction},isVertical:function(){return"vertical"===l.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===l.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===m.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEvents:(v=["touchstart","touchmove","touchend"],f=["mousedown","mousemove","mouseup"],h.pointerEvents?f=["pointerdown","pointermove","pointerup"]:h.prefixedPointerEvents&&(f=["MSPointerDown","MSPointerMove","MSPointerUp"]),l.touchEventsTouch={start:v[0],move:v[1],end:v[2]},l.touchEventsDesktop={start:f[0],move:f[1],end:f[2]},h.touch||!l.params.simulateTouch?l.touchEventsTouch:l.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:d.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.useModules(),l.params.init&&l.init(),l}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,n=i.slides;return void 0===i.params||i.destroyed?null:(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(function(e){i.off(e)}),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),d.deleteProps(i)),i.destroyed=!0,null)},t.extendDefaults=function(e){d.extend(z,e)},i.extendedDefaults.get=function(){return z},i.defaults.get=function(){return C},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(p),P={name:"device",proto:{device:y},static:{device:y}},$={name:"support",proto:{support:h},static:{support:h}},L={name:"browser",proto:{browser:S},static:{browser:S}},I={name:"resize",create:function(){var e=this;d.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},D={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var i=this,s=new(0,D.func)(function(e){e.forEach(function(e){i.emit("observerUpdate",e)})});s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){if(h.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:!1}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},O={name:"observer",params:{observer:!1,observeParents:!1},create:function(){d.extend(this,{observer:{init:D.init.bind(this),attach:D.attach.bind(this),destroy:D.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},A={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,n=t.virtual,o=n.from,l=n.to,h=n.slides,p=n.slidesGrid,c=n.renderSlide,u=n.offset;t.updateActiveIndex();var v,f,m,g=t.activeIndex||0;v=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(f=Math.floor(s/2)+a,m=Math.floor(s/2)+a):(f=s+(a-1),m=a);var b=Math.max((g||0)-m,0),w=Math.min((g||0)+f,h.length-1),y=(t.slidesGrid[b]||0)-(t.slidesGrid[0]||0);function x(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(d.extend(t.virtual,{from:b,to:w,offset:y,slidesGrid:t.slidesGrid}),o===b&&l===w&&!e)return t.slidesGrid!==p&&y!==u&&t.slides.css(v,y+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:y,from:b,to:w,slides:function(){for(var e=[],t=b;t<=w;t+=1)e.push(h[t]);return e}()}),void x();var E=[],T=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var S=o;S<=l;S+=1)(S<b||S>w)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+S+'"]').remove();for(var C=0;C<h.length;C+=1)C>=b&&C<=w&&(void 0===l||e?T.push(C):(C>l&&T.push(C),C<o&&E.push(C)));T.forEach(function(e){t.$wrapperEl.append(c(h[e],e))}),E.sort(function(e,t){return e<t}).forEach(function(e){t.$wrapperEl.prepend(c(h[e],e))}),t.$wrapperEl.children(".swiper-slide").css(v,y+"px"),x()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){if(this.virtual.slides.unshift(e),this.params.virtual.cache){var t=this.virtual.cache,i={};Object.keys(t).forEach(function(e){i[e+1]=t[e]}),this.virtual.cache=i}this.virtual.update(!0),this.slideNext(0)}},G={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){d.extend(this,{virtual:{update:A.update.bind(this),appendSlide:A.appendSlide.bind(this),prependSlide:A.prependSlide.bind(this),renderSlide:A.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};d.extend(this.params,e),d.extend(this.originalParams,e),this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},H={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(39===r&&!s||37===r&&s)&&this.slideNext(),(37===r&&!s||39===r&&s)&&this.slidePrev()):(38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),40===r&&this.slideNext(),38===r&&this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},N={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){d.extend(this,{keyboard:{enabled:!1,enable:H.enable.bind(this),disable:H.disable.bind(this),handle:H.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var B={lastScrollTime:d.now(),event:t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var i=e,s=this,a=s.params.mousewheel;if(!s.mouseEntered&&!a.releaseOnEdges)return!0;i.originalEvent&&(i=i.originalEvent);var r=0,n=s.rtlTranslate?-1:1,o=B.normalize(i);if(a.forceToAxis)if(s.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;if(a.invert&&(r=-r),s.params.freeMode){s.params.loop&&s.loopFix();var l=s.getTranslate()+r*a.sensitivity,h=s.isBeginning,p=s.isEnd;if(l>=s.minTranslate()&&(l=s.minTranslate()),l<=s.maxTranslate()&&(l=s.maxTranslate()),s.setTransition(0),s.setTranslate(l),s.updateProgress(),s.updateActiveIndex(),s.updateSlidesClasses(),(!h&&s.isBeginning||!p&&s.isEnd)&&s.updateSlidesClasses(),s.params.freeModeSticky&&(clearTimeout(s.mousewheel.timeout),s.mousewheel.timeout=d.nextTick(function(){s.slideToClosest()},300)),s.emit("scroll",i),s.params.autoplay&&s.params.autoplayDisableOnInteraction&&s.autoplay.stop(),l===s.minTranslate()||l===s.maxTranslate())return!0}else{if(d.now()-s.mousewheel.lastScrollTime>60)if(r<0)if(s.isEnd&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slideNext(),s.emit("scroll",i);else if(s.isBeginning&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slidePrev(),s.emit("scroll",i);s.mousewheel.lastScrollTime=(new t.Date).getTime()}return i.preventDefault?i.preventDefault():i.returnValue=!1,!1},enable:function(){if(!B.event)return!1;if(this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.on("mouseenter",this.mousewheel.handleMouseEnter),e.on("mouseleave",this.mousewheel.handleMouseLeave),e.on(B.event,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){if(!B.event)return!1;if(!this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.off(B.event,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},X={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},init:function(){var e,t,i=this,a=i.params.navigation;(a.nextEl||a.prevEl)&&(a.nextEl&&(e=s(a.nextEl),i.params.uniqueNavElements&&"string"==typeof a.nextEl&&e.length>1&&1===i.$el.find(a.nextEl).length&&(e=i.$el.find(a.nextEl))),a.prevEl&&(t=s(a.prevEl),i.params.uniqueNavElements&&"string"==typeof a.prevEl&&t.length>1&&1===i.$el.find(a.prevEl).length&&(t=i.$el.find(a.prevEl))),e&&e.length>0&&e.on("click",function(e){e.preventDefault(),i.isEnd&&!i.params.loop||i.slideNext()}),t&&t.length>0&&t.on("click",function(e){e.preventDefault(),i.isBeginning&&!i.params.loop||i.slidePrev()}),d.extend(i.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click"),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click"),i.removeClass(this.params.navigation.disabledClass))}},Y={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each(function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))});else if(h.eq(i).addClass(t.bulletActiveClass),t.dynamicBullets){for(var p=h.eq(o),c=h.eq(l),u=o;u<=l;u+=1)h.eq(u).addClass(t.bulletActiveClass+"-main");p.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),c.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}if(t.dynamicBullets){var v=Math.min(h.length,t.dynamicMainBullets+4),f=(this.pagination.bulletSize*v-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,m=e?"right":"left";h.css(this.isHorizontal()?m:"top",f+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var g;g=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var b=(i+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)}),d.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},V={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(h.transforms3d?r.transform("translate3d("+d+"px, 0, 0)"):r.transform("translateX("+d+"px)"),r[0].style.width=l+"px"):(h.transforms3d?r.transform("translate3d(0px, "+d+"px, 0)"):r.transform("translateY("+d+"px)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout(function(){n[0].style.opacity=0,n.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,n=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbarHide&&(i[0].style.opacity=0),d.extend(e,{trackSize:a,divider:r,moveDivider:n,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize;t=((this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-a.offset()[this.isHorizontal()?"left":"top"]-r/2)/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var o=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(o),this.setTranslate(o),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=d.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEvents,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!h.passiveListener||!a.passiveListener)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListener)&&{passive:!0,capture:!1};h.touch||!h.pointerEvents&&!h.prefixedPointerEvents?(h.touch&&(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,o)),(a.simulateTouch&&!y.ios&&!y.android||a.simulateTouch&&!h.touch&&y.ios)&&(r.addEventListener("mousedown",this.scrollbar.onDragStart,n),e.addEventListener("mousemove",this.scrollbar.onDragMove,n),e.addEventListener("mouseup",this.scrollbar.onDragEnd,o))):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,o))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEvents,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!h.passiveListener||!a.passiveListener)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListener)&&{passive:!0,capture:!1};h.touch||!h.pointerEvents&&!h.prefixedPointerEvents?(h.touch&&(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,o)),(a.simulateTouch&&!y.ios&&!y.android||a.simulateTouch&&!h.touch&&y.ios)&&(r.removeEventListener("mousedown",this.scrollbar.onDragStart,n),e.removeEventListener("mousemove",this.scrollbar.onDragMove,n),e.removeEventListener("mouseup",this.scrollbar.onDragEnd,o))):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,o))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),d.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},R={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",void 0!==h&&null!==h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(void 0===d||null===d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){e.parallax.setTransform(i,a)}),i.each(function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){e.parallax.setTransform(i,n)})})},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)})}},F={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!h.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=F.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest(".swiper-slide"),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=F.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(h.gestures?this.zoom.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!y.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(y.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=d.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=d.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,n=s.height*t.scale;if(!(r<i.slideWidth&&n<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-n/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0,e.scale=1,e.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,a,r,n,o,l,d,h,p,c,u,v,f,m,g,b=this.zoom,w=this.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,i=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(m=y.$slideEl[0].offsetWidth,g=y.$slideEl[0].offsetHeight,a=y.$slideEl.offset().left+m/2-t,r=y.$slideEl.offset().top+g/2-i,l=y.$imageEl[0].offsetWidth,d=y.$imageEl[0].offsetHeight,h=l*b.scale,p=d*b.scale,v=-(c=Math.min(m/2-h/2,0)),f=-(u=Math.min(g/2-p/2,0)),n=a*b.scale,o=r*b.scale,n<c&&(n=c),n>v&&(n=v),o<u&&(o=u),o>f&&(o=f)):(n=0,o=0),y.$imageWrapEl.transition(300).transform("translate3d("+n+"px, "+o+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(i.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};h.gestures?(this.$wrapperEl.on("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};h.gestures?(this.$wrapperEl.off("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}}},W={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,function(){if(void 0!==i&&null!==i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0])}}),i.emit("lazyImageLoad",r[0],o[0])})}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each(function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)});else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},q={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new q.LinearSpline(this.slidesGrid,e.slidesGrid):new q.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof k&&n(r[o]);else r instanceof k&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.$wrapperEl.transitionEnd(function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())}))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof k&&r(a[i]);else a instanceof k&&t!==a&&r(a)}},j={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each(function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/{{index}}/,r.index()+1))})},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},K={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=K.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=K.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=K.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(K.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},U={onHashCange:function(){var t=e.location.hash.replace("#","");t!==this.slides.eq(this.activeIndex).attr("data-hash")&&this.slideTo(this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},_={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=d.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},Z={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd(function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}})}}},Q={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var E="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(E),d.slideShadows){var T=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),C=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===T.length&&(T=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(T)),0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(C)),T.length&&(T[0].style.opacity=Math.max(-b,0)),C.length&&(C[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var M=Math.abs(c)-90*Math.floor(Math.abs(c)/90),z=1.5-(Math.sin(2*M*Math.PI/360)/2+Math.cos(2*M*Math.PI/360)/2),k=d.shadowScale,P=d.shadowScale/z,$=d.shadowOffset;e.transform("scale3d("+k+", 1, "+P+") translate3d(0px, "+(n/2+$)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var L=S.isSafari||S.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+L+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},J={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd(function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}})}}},ee={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,o=this.isHorizontal(),l=this.translate,d=o?e/2-l:t/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(d-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=o?p*g:0,w=o?0:p*g,y=-c*Math.abs(g),x=o?0:n.stretch*g,E=o?n.stretch*g:0;Math.abs(E)<.001&&(E=0),Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var T="translate3d("+E+"px,"+x+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(T),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var S=o?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),C=o?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),f.append(S)),0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),f.append(C)),S.length&&(S[0].style.opacity=g>0?g:0),C.length&&(C[0].style.opacity=-g>0?-g:0)}}(h.pointerEvents||h.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},te=[P,$,L,I,O,G,N,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){d.extend(this,{mousewheel:{enabled:!1,enable:B.enable.bind(this),disable:B.disable.bind(this),handle:B.handle.bind(this),handleMouseEnter:B.handleMouseEnter.bind(this),handleMouseLeave:B.handleMouseLeave.bind(this),lastScrollTime:d.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){d.extend(this,{navigation:{init:X.init.bind(this),update:X.update.bind(this),destroy:X.destroy.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,i=t.$nextEl,a=t.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(a)||s(e.target).is(i)||(i&&i.toggleClass(this.params.navigation.hiddenClass),a&&a.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){d.extend(this,{pagination:{init:Y.init.bind(this),render:Y.render.bind(this),update:Y.update.bind(this),destroy:Y.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){d.extend(this,{scrollbar:{init:V.init.bind(this),destroy:V.destroy.bind(this),updateSize:V.updateSize.bind(this),setTranslate:V.setTranslate.bind(this),setTransition:V.setTransition.bind(this),enableDraggable:V.enableDraggable.bind(this),disableDraggable:V.disableDraggable.bind(this),setDragPosition:V.setDragPosition.bind(this),onDragStart:V.onDragStart.bind(this),onDragMove:V.onDragMove.bind(this),onDragEnd:V.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){d.extend(this,{parallax:{setTransform:R.setTransform.bind(this),setTranslate:R.setTranslate.bind(this),setTransition:R.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0)},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i){t[i]=F[i].bind(e)}),d.extend(e,{zoom:t})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){d.extend(this,{lazy:{initialImageLoaded:!1,load:W.load.bind(this),loadInSlide:W.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){d.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:q.getInterpolateFunction.bind(this),setTranslate:q.setTranslate.bind(this),setTransition:q.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;d.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(j).forEach(function(t){e.a11y[t]=j[t].bind(e)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){d.extend(this,{history:{init:K.init.bind(this),setHistory:K.setHistory.bind(this),setHistoryPopState:K.setHistoryPopState.bind(this),scrollToSlide:K.scrollToSlide.bind(this),destroy:K.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){d.extend(this,{hashNavigation:{initialized:!1,init:U.init.bind(this),destroy:U.destroy.bind(this),setHash:U.setHash.bind(this),onHashCange:U.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;d.extend(e,{autoplay:{running:!1,paused:!1,run:_.run.bind(e),start:_.start.bind(e),stop:_.stop.bind(e),pause:_.pause.bind(e),onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){d.extend(this,{fadeEffect:{setTranslate:Z.setTranslate.bind(this),setTransition:Z.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){d.extend(this,{cubeEffect:{setTranslate:Q.setTranslate.bind(this),setTransition:Q.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){d.extend(this,{flipEffect:{setTranslate:J.setTranslate.bind(this),setTransition:J.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){d.extend(this,{coverflowEffect:{setTranslate:ee.setTranslate.bind(this),setTransition:ee.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}}];return void 0===k.use&&(k.use=k.Class.use,k.installModule=k.Class.installModule),k.use(te),k});



/*[PATH @digikala/supernova-digistyle-desktop/static/js/jquery.remodal.min.js]*/
!function(n,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(n,t)}):"object"==typeof exports?e(n,require("jquery")):e(n,n.jQuery||n.Zepto)}(this,function(t,s){"use strict";var n,a,e,o="remodal",i=t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.NAMESPACE||o,r=s.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(t){return t+"."+i}).join(" "),d=s.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(t){return t+"."+i}).join(" "),c=s.extend({hashTracking:!1,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.DEFAULTS),l={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},p="confirmation",m="cancellation",u=void 0!==(n=document.createElement("div").style).animationName||void 0!==n.WebkitAnimationName||void 0!==n.MozAnimationName||void 0!==n.msAnimationName||void 0!==n.OAnimationName,f=/iPad|iPhone|iPod/.test(navigator.platform);function g(t){if(u&&"none"===t.css("animation-name")&&"none"===t.css("-webkit-animation-name")&&"none"===t.css("-moz-animation-name")&&"none"===t.css("-o-animation-name")&&"none"===t.css("-ms-animation-name"))return 0;var n,e,a,i,o=t.css("animation-duration")||t.css("-webkit-animation-duration")||t.css("-moz-animation-duration")||t.css("-o-animation-duration")||t.css("-ms-animation-duration")||"0s",s=t.css("animation-delay")||t.css("-webkit-animation-delay")||t.css("-moz-animation-delay")||t.css("-o-animation-delay")||t.css("-ms-animation-delay")||"0s",r=t.css("animation-iteration-count")||t.css("-webkit-animation-iteration-count")||t.css("-moz-animation-iteration-count")||t.css("-o-animation-iteration-count")||t.css("-ms-animation-iteration-count")||"1";for(o=o.split(", "),s=s.split(", "),r=r.split(", "),i=0,e=o.length,n=Number.NEGATIVE_INFINITY;i<e;i++)n<(a=parseFloat(o[i])*parseInt(r[i],10)+parseFloat(s[i]))&&(n=a);return n}function h(){if(s(document).height()<=s(window).height())return 0;var t,n,e=document.createElement("div"),a=document.createElement("div");return e.style.visibility="hidden",e.style.width="100px",document.body.appendChild(e),t=e.offsetWidth,e.style.overflow="scroll",a.style.width="100%",e.appendChild(a),n=a.offsetWidth,e.parentNode.removeChild(e),t-n}function v(){if(!f){var t,n,e=s("html"),a=O("is-locked");e.hasClass(a)&&(n=s(document.body),t=parseInt(n.css("padding-right"),10)-h(),n.css("padding-right",t+"px"),e.removeClass(a))}}function $(t,n,e,a){var i=O("is",n),o=[O("is",l.CLOSING),O("is",l.OPENING),O("is",l.CLOSED),O("is",l.OPENED)].join(" ");t.$bg.removeClass(o).addClass(i),t.$overlay.removeClass(o).addClass(i),t.$wrapper.removeClass(o).addClass(i),t.$modal.removeClass(o).addClass(i),t.state=n,!e&&t.$modal.trigger({type:n,reason:a},[{reason:a}])}function C(t,n,e){var a=0,i=function(t){t.target===this&&a++},o=function(t){t.target===this&&0==--a&&(s.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(r+" "+d)}),n())};s.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].on(r,i).on(d,o)}),t(),0===g(e.$bg)&&0===g(e.$overlay)&&0===g(e.$wrapper)&&0===g(e.$modal)&&(s.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(r+" "+d)}),n())}function y(e){e.state!==l.CLOSED&&(s.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(r+" "+d)}),e.$bg.removeClass(e.settings.modifier),e.$overlay.removeClass(e.settings.modifier).hide(),e.$wrapper.hide(),v(),$(e,l.CLOSED,!0))}function O(){for(var t=i,n=0;n<arguments.length;++n)t+="-"+arguments[n];return t}function E(){var t,n,e=location.hash.replace("#","");if(e){try{n=s("[data-"+o+'-id="'+e+'"]')}catch(t){}n&&n.length&&(t=s[o].lookup[n.data(o)])&&t.settings.hashTracking&&t.open()}else a&&a.state===l.OPENED&&a.settings.hashTracking&&a.close()}function w(t,n){var e=s(document.body),a=this;a.settings=s.extend({},c,n),a.index=s[o].lookup.push(a)-1,a.state=l.CLOSED,a.$overlay=s("."+O("overlay")),null!==a.settings.appendTo&&a.settings.appendTo.length&&(e=s(a.settings.appendTo)),a.$overlay.length||(a.$overlay=s("<div>").addClass(O("overlay")+" "+O("is",l.CLOSED)).hide(),e.append(a.$overlay)),a.$bg=s("."+O("bg")).addClass(O("is",l.CLOSED)),a.$modal=t.addClass(i+" "+O("is-initialized")+" "+a.settings.modifier+" "+O("is",l.CLOSED)).attr("tabindex","-1"),a.$wrapper=s("<div>").addClass(O("wrapper")+" "+a.settings.modifier+" "+O("is",l.CLOSED)).hide().append(a.$modal),e.append(a.$wrapper),a.$wrapper.on("click."+i,"[data-"+o+'-action="close"]',function(t){t.preventDefault(),a.close()}),a.$wrapper.on("click."+i,"[data-"+o+'-action="cancel"]',function(t){t.preventDefault(),a.$modal.trigger(m),a.settings.closeOnCancel&&a.close(m)}),a.$wrapper.on("click."+i,"[data-"+o+'-action="confirm"]',function(t){t.preventDefault(),a.$modal.trigger(p),a.settings.closeOnConfirm&&a.close(p)}),a.$wrapper.on("click."+i,function(t){s(t.target).hasClass(O("wrapper"))&&a.settings.closeOnOutsideClick&&a.close()})}w.prototype.open=function(){var t,n=this;n.state!==l.OPENING&&n.state!==l.CLOSING&&((t=n.$modal.attr("data-"+o+"-id"))&&n.settings.hashTracking&&(e=s(window).scrollTop(),location.hash=t),a&&a!==n&&y(a),a=n,function(){if(!f){var t,n,e=s("html"),a=O("is-locked");e.hasClass(a)||(n=s(document.body),t=parseInt(n.css("padding-right"),10)+h(),n.css("padding-right",t+"px"),e.addClass(a))}}(),n.$bg.addClass(n.settings.modifier),n.$overlay.addClass(n.settings.modifier).show(),n.$wrapper.show().scrollTop(0),n.$modal.focus(),C(function(){$(n,l.OPENING)},function(){$(n,l.OPENED)},n))},w.prototype.close=function(t){var n=this;n.state!==l.OPENING&&n.state!==l.CLOSING&&n.state!==l.CLOSED&&(n.settings.hashTracking&&n.$modal.attr("data-"+o+"-id")===location.hash.substr(1)&&(location.hash="",s(window).scrollTop(e)),C(function(){$(n,l.CLOSING,!1,t)},function(){n.$bg.removeClass(n.settings.modifier),n.$overlay.removeClass(n.settings.modifier).hide(),n.$wrapper.hide(),v(),$(n,l.CLOSED,!1,t)},n))},w.prototype.getState=function(){return this.state},w.prototype.destroy=function(){var t=s[o].lookup;y(this),this.$wrapper.remove(),delete t[this.index],0===s.grep(t,function(t){return!!t}).length&&(this.$overlay.remove(),this.$bg.removeClass(O("is",l.CLOSING)+" "+O("is",l.OPENING)+" "+O("is",l.CLOSED)+" "+O("is",l.OPENED)))},s[o]={lookup:[]},s.fn[o]=function(e){var a,i;return this.each(function(t,n){null==(i=s(n)).data(o)?(a=new w(i,e),i.data(o,a.index),a.settings.hashTracking&&i.attr("data-"+o+"-id")===location.hash.substr(1)&&a.open()):a=s[o].lookup[i.data(o)]}),a},s(document).ready(function(){s(document).on("click","[data-"+o+"-target]",function(t){t.preventDefault();var n=t.currentTarget.getAttribute("data-"+o+"-target"),e=s("[data-"+o+'-id="'+n+'"]');s[o].lookup[e.data(o)].open()}),s(document).find("."+i).each(function(t,n){var e=s(n),a=e.data(o+"-options");a?("string"==typeof a||a instanceof String)&&(a=function(t){var n,e,a,i,o={};for(i=0,e=(n=(t=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",")).split(",")).length;i<e;i++)n[i]=n[i].split(":"),("string"==typeof(a=n[i][1])||a instanceof String)&&(a="true"===a||"false"!==a&&a),("string"==typeof a||a instanceof String)&&(a=isNaN(a)?a:+a),o[n[i][0]]=a;return o}(a)):a={},e[o](a)}),s(document).on("keydown."+i,function(t){a&&a.settings.closeOnEscape&&a.state===l.OPENED&&27===t.keyCode&&a.close()}),s(window).on("hashchange."+i,E)})});



/*[PATH @digikala/supernova-digistyle-desktop/static/js/jquery.animate.js]*/
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
                callback();
            }
        });
        return this;
    }
});



/*[PATH @digikala/supernova-digistyle-desktop/static/js/jquery.nice-select.js]*/
/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
 
(function($) {

  $.fn.niceSelect = function(method) {
    
    // Methods
    if (typeof method == 'string') {      
      if (method == 'update') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');
          
          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);
            
            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          
          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });
        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else if (method == 'open') {
        // custom open method by Anton Turnaev
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');
          
          $dropdown.trigger('click.nice_select');

          if (!open) {
            $dropdown.focus();
          }
        });
      } else {
        console.log('Method "' + method + '" does not exist.')
      }
      return this;
    }
      
    // Hide native select
    this.hide();
    
    // Create custom markup
    this.each(function() {
      var $select = $(this);
      
      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });
    
    function create_nice_select($select) {
      $select.after($('<div></div>')
        .addClass('nice-select')
        .addClass($select.attr('class') || '')
        .addClass($select.attr('disabled') ? 'disabled' : '')
        .attr('tabindex', $select.attr('disabled') ? null : '0')
        .html('<span class="current"></span><ul class="list"></ul>')
      );
        
      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');
      
      $dropdown.find('.current').html($selected.data('display') || $selected.text());
      
      $options.each(function(i) {
        var $option = $(this);
        var display = $option.data('display');

        $dropdown.find('ul').append($('<li></li>')
          .attr('data-value', $option.val())
          .attr('data-display', (display || null))
          .addClass('option' +
            ($option.is(':selected') ? ' selected' : '') +
            ($option.is(':disabled') ? ' disabled' : ''))
          .html($option.text())
        );
      });
    }
    
    /* Event listeners */
    
    // Unbind existing events in case that the plugin has been initialized before
    $(document).off('.nice_select');
    
    // Open/close
    $(document).on('click.nice_select', '.nice-select', function(event) {
      var $dropdown = $(this);
      
      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');

      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');  
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    });
    
    // Close when clicking outside
    $(document).on('click.nice_select', function(event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');  
      }
    });
    
    // Option click
    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');
      
      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');
      
      var text = $option.data('display') || $option.text();
      $dropdown.find('.current').text(text);
      
      $dropdown.prev('select').val($option.data('value')).trigger('change');
    });

    // Keyboard events
    $(document).on('keydown.nice_select', '.nice-select', function(event) {    
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));
      
      // Space or Enter
      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }
        return false;
      // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();
          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }
        return false;
      // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }
        return false;
      // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        }
      // Tab
      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    });

    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';
    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }
    
    return this;

  };

}(jQuery));


/*[PATH @digikala/supernova-digistyle-desktop/static/js/flipclock.js]*/
/*
	Base.js, version 1.1a
	Copyright 2006-2010, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function() {
	// dummy
};

Base.extend = function(_instance, _static) { // subclass
	
	"use strict";
	
	var extend = Base.prototype.extend;
	
	// build the prototype
	Base._prototyping = true;
	
	var proto = new this();
	
	extend.call(proto, _instance);
	
	proto.base = function() {
	// call this method from any other method to invoke that method's ancestor
	};

	delete Base._prototyping;
	
	// create the wrapper for the constructor function
	//var constructor = proto.constructor.valueOf(); //-dean
	var constructor = proto.constructor;
	var klass = proto.constructor = function() {
		if (!Base._prototyping) {
			if (this._constructing || this.constructor == klass) { // instantiation
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] !== null) { // casting
				return (arguments[0].extend || extend).call(arguments[0], proto);
			}
		}
	};
	
	// build the class interface
	klass.ancestor = this;
	klass.extend = this.extend;
	klass.forEach = this.forEach;
	klass.implement = this.implement;
	klass.prototype = proto;
	klass.toString = this.toString;
	klass.valueOf = function(type) {
		//return (type == "object") ? klass : constructor; //-dean
		return (type == "object") ? klass : constructor.valueOf();
	};
	extend.call(klass, _static);
	// class initialisation
	if (typeof klass.init == "function") klass.init();
	return klass;
};

Base.prototype = {	
	extend: function(source, value) {
		if (arguments.length > 1) { // extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function() {
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function(type) {
					return (type == "object") ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source) { // extending with an object literal
			var extend = Base.prototype.extend;
			// if this object has a customised extend method then use it
			if (!Base._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
			// do the "toString" and other methods manually
			var hidden = ["constructor", "toString", "valueOf"];
			// if we are prototyping then include the constructor
			var i = Base._prototyping ? 0 : 1;
			while (key = hidden[i++]) {
				if (source[key] != proto[key]) {
					extend.call(this, key, source[key]);

				}
			}
			// copy each of the source object's properties to this object
			for (var key in source) {
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	}
};

// initialise
Base = Base.extend({
	constructor: function() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == "function") {
				// if it's a function, call it
				arguments[i](this.prototype);
			} else {
				// add the interface using the extend method
				this.prototype.extend(arguments[i]);
			}
		}
		return this;
	},
	
	toString: function() {
		return String(this.valueOf());
	}
});
/*jshint smarttabs:true */

var FlipClock;
	
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * FlipFlock Helper
	 *
	 * @param  object  A jQuery object or CSS select
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock = function(obj, digit, options) {
		if(digit instanceof Object && digit instanceof Date === false) {
			options = digit;
			digit = 0;
		}

		return new FlipClock.Factory(obj, digit, options);
	};

	/**
	 * The global FlipClock.Lang object
	 */

	FlipClock.Lang = {};
	
	/**
	 * The Base FlipClock class is used to extend all other FlipFlock
	 * classes. It handles the callbacks and the basic setters/getters
	 *	
	 * @param 	object  An object of the default properties
	 * @param 	object  An object of properties to override the default	
	 */

	FlipClock.Base = Base.extend({
		
		/**
		 * Build Date
		 */
		 
		buildDate: '2014-12-12',
		
		/**
		 * Version
		 */
		 
		version: '0.7.7',
		
		/**
		 * Sets the default options
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */
		 
		constructor: function(_default, options) {
			if(typeof _default !== "object") {
				_default = {};
			}
			if(typeof options !== "object") {
				options = {};
			}
			this.setOptions($.extend(true, {}, _default, options));
		},
		
		/**
		 * Delegates the callback to the defined method
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */
		 
		callback: function(method) {
		 	if(typeof method === "function") {
				var args = [];
								
				for(var x = 1; x <= arguments.length; x++) {
					if(arguments[x]) {
						args.push(arguments[x]);
					}
				}
				
				method.apply(this, args);
			}
		},
		 
		/**
		 * Log a string into the console if it exists
		 *
		 * @param 	string 	The name of the option
		 * @return	mixed
		 */		
		 
		log: function(str) {
			if(window.console && console.log) {
				console.log(str);
			}
		},
		 
		/**
		 * Get an single option value. Returns false if option does not exist
		 *
		 * @param 	string 	The name of the option
		 * @return	mixed
		 */		
		 
		getOption: function(index) {
			if(this[index]) {
				return this[index];
			}
			return false;
		},
		
		/**
		 * Get all options
		 *
		 * @return	bool
		 */		
		 
		getOptions: function() {
			return this;
		},
		
		/**
		 * Set a single option value
		 *
		 * @param 	string 	The name of the option
		 * @param 	mixed 	The value of the option
		 */		
		 
		setOption: function(index, value) {
			this[index] = value;
		},
		
		/**
		 * Set a multiple options by passing a JSON object
		 *
		 * @param 	object 	The object with the options
		 * @param 	mixed 	The value of the option
		 */		
		
		setOptions: function(options) {
			for(var key in options) {
	  			if(typeof options[key] !== "undefined") {
		  			this.setOption(key, options[key]);
		  		}
		  	}
		}
		
	});
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * The FlipClock Face class is the base class in which to extend
	 * all other FlockClock.Face classes.
	 *
	 * @param 	object  The parent FlipClock.Factory object
	 * @param 	object  An object of properties to override the default	
	 */
	 
	FlipClock.Face = FlipClock.Base.extend({
		
		/**
		 * Sets whether or not the clock should start upon instantiation
		 */
		 
		autoStart: true,

		/**
		 * An array of jQuery objects used for the dividers (the colons)
		 */
		 
		dividers: [],

		/**
		 * An array of FlipClock.List objects
		 */		
		 
		factory: false,
		
		/**
		 * An array of FlipClock.List objects
		 */		
		 
		lists: [],

		/**
		 * Constructor
		 *
		 * @param 	object  The parent FlipClock.Factory object
		 * @param 	object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.dividers = [];
			this.lists = [];
			this.base(options);
			this.factory = factory;
		},
		
		/**
		 * Build the clock face
		 */
		 
		build: function() {
			if(this.autoStart) {
				this.start();
			}
		},
		
		/**
		 * Creates a jQuery object used for the digit divider
		 *
		 * @param	mixed 	The divider label text
		 * @param	mixed	Set true to exclude the dots in the divider. 
		 *					If not set, is false.
		 */
		 
		createDivider: function(label, css, excludeDots) {
			if(typeof css == "boolean" || !css) {
				excludeDots = css;
				css = label;
			}

			var dots = [
				'<span class="'+this.factory.classes.dot+' top"></span>',
				'<span class="'+this.factory.classes.dot+' bottom"></span>'
			].join('');

			if(excludeDots) {
				dots = '';	
			}

			label = this.factory.localize(label);

			var html = [
				'<span class="'+this.factory.classes.divider+' '+(css ? css : '').toLowerCase()+'">',
					'<span class="'+this.factory.classes.label+'">'+(label ? label : '')+'</span>',
					dots,
				'</span>'
			];	
			
			var $html = $(html.join(''));

			this.dividers.push($html);

			return $html;
		},
		
		/**
		 * Creates a FlipClock.List object and appends it to the DOM
		 *
		 * @param	mixed 	The digit to select in the list
		 * @param	object  An object to override the default properties
		 */
		 
		createList: function(digit, options) {
			if(typeof digit === "object") {
				options = digit;
				digit = 0;
			}

			var obj = new FlipClock.List(this.factory, digit, options);
		
			this.lists.push(obj);

			return obj;
		},
		
		/**
		 * Triggers when the clock is reset
		 */

		reset: function() {
			this.factory.time = new FlipClock.Time(
				this.factory, 
				this.factory.original ? Math.round(this.factory.original) : 0,
				{
					minimumDigits: this.factory.minimumDigits
				}
			);

			this.flip(this.factory.original, false);
		},

		/**
		 * Append a newly created list to the clock
		 */

		appendDigitToClock: function(obj) {
			obj.$el.append(false);
		},

		/**
		 * Add a digit to the clock face
		 */
		 
		addDigit: function(digit) {
			var obj = this.createList(digit, {
				classes: {
					active: this.factory.classes.active,
					before: this.factory.classes.before,
					flip: this.factory.classes.flip
				}
			});

			this.appendDigitToClock(obj);
		},
		
		/**
		 * Triggers when the clock is started
		 */
		 
		start: function() {},
		
		/**
		 * Triggers when the time on the clock stops
		 */
		 
		stop: function() {},
		
		/**
		 * Auto increments/decrements the value of the clock face
		 */
		 
		autoIncrement: function() {
			if(!this.factory.countdown) {
				this.increment();
			}
			else {
				this.decrement();
			}
		},

		/**
		 * Increments the value of the clock face
		 */
		 
		increment: function() {
			this.factory.time.addSecond();
		},

		/**
		 * Decrements the value of the clock face
		 */

		decrement: function() {
			if(this.factory.time.getTimeSeconds() == 0) {
	        	this.factory.stop()
			}
			else {
				this.factory.time.subSecond();
			}
		},
			
		/**
		 * Triggers when the numbers on the clock flip
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			var t = this;

			$.each(time, function(i, digit) {
				var list = t.lists[i];

				if(list) {
					if(!doNotAddPlayClass && digit != list.digit) {
						list.play();	
					}

					list.select(digit);
				}	
				else {
					t.addDigit(digit);
				}
			});
		}
					
	});
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * The FlipClock Factory class is used to build the clock and manage
	 * all the public methods.
	 *
	 * @param 	object  A jQuery object or CSS selector used to fetch
	 				    the wrapping DOM nodes
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.Factory = FlipClock.Base.extend({
		
		/**
		 * The clock's animation rate.
		 * 
		 * Note, currently this property doesn't do anything.
		 * This property is here to be used in the future to
		 * programmaticaly set the clock's animation speed
		 */		

		animationRate: 1000,

		/**
		 * Auto start the clock on page load (True|False)
		 */	
		 
		autoStart: true,
		
		/**
		 * The callback methods
		 */		
		 
		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},
		
		/**
		 * The CSS classes
		 */		
		 
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			divider: 'flip-clock-divider',
			dot: 'flip-clock-dot',
			label: 'flip-clock-label',
			flip: 'flip',
			play: 'play',
			wrapper: 'flip-clock-wrapper'
		},
		
		/**
		 * The name of the clock face class in use
		 */	
		 
		clockFace: 'HourlyCounter',
		 
		/**
		 * The name of the clock face class in use
		 */	
		 
		countdown: false,
		 
		/**
		 * The name of the default clock face class to use if the defined
		 * clockFace variable is not a valid FlipClock.Face object
		 */	
		 
		defaultClockFace: 'HourlyCounter',
		 
		/**
		 * The default language
		 */	
		 
		defaultLanguage: 'english',
		 
		/**
		 * The jQuery object
		 */		
		 
		$el: false,

		/**
		 * The FlipClock.Face object
		 */	
		 
		face: true,
		 
		/**
		 * The language object after it has been loaded
		 */	
		 
		lang: false,
		 
		/**
		 * The language being used to display labels (string)
		 */	
		 
		language: 'english',
		 
		/**
		 * The minimum digits the clock must have
		 */		

		minimumDigits: 0,

		/**
		 * The original starting value of the clock. Used for the reset method.
		 */		
		 
		original: false,
		
		/**
		 * Is the clock running? (True|False)
		 */		
		 
		running: false,
		
		/**
		 * The FlipClock.Time object
		 */		
		 
		time: false,
		
		/**
		 * The FlipClock.Timer object
		 */		
		 
		timer: false,
		
		/**
		 * The jQuery object (depcrecated)
		 */		
		 
		$wrapper: false,
		
		/**
		 * Constructor
		 *
		 * @param   object  The wrapping jQuery object
		 * @param	object  Number of seconds used to start the clock
		 * @param	object 	An object override options
		 */
		 
		constructor: function(obj, digit, options) {

			if(!options) {
				options = {};
			}

			this.lists = [];
			this.running = false;
			this.base(options);	

			this.$el = $(obj).addClass(this.classes.wrapper);

			// Depcrated support of the $wrapper property.
			this.$wrapper = this.$el;

			this.original = (digit instanceof Date) ? digit : (digit ? Math.round(digit) : 0);

			this.time = new FlipClock.Time(this, this.original, {
				minimumDigits: this.minimumDigits,
				animationRate: this.animationRate 
			});

			this.timer = new FlipClock.Timer(this, options);

			this.loadLanguage(this.language);
			
			this.loadClockFace(this.clockFace, options);

			if(this.autoStart) {
				this.start();
			}

		},
		
		/**
		 * Load the FlipClock.Face object
		 *
		 * @param	object  The name of the FlickClock.Face class
		 * @param	object 	An object override options
		 */
		 
		loadClockFace: function(name, options) {	
			var face, suffix = 'Face', hasStopped = false;
			
			name = name.ucfirst()+suffix;

			if(this.face.stop) {
				this.stop();
				hasStopped = true;
			}

			this.$el.html('');

			this.time.minimumDigits = this.minimumDigits;
			
			if(FlipClock[name]) {
				face = new FlipClock[name](this, options);
			}
			else {
				face = new FlipClock[this.defaultClockFace+suffix](this, options);
			}
			
			face.build();

			this.face = face;

			if(hasStopped) {
				this.start();
			}
			
			return this.face;
		},
				
		/**
		 * Load the FlipClock.Lang object
		 *
		 * @param	object  The name of the language to load
		 */
		 
		loadLanguage: function(name) {	
			var lang;
			
			if(FlipClock.Lang[name.ucfirst()]) {
				lang = FlipClock.Lang[name.ucfirst()];
			}
			else if(FlipClock.Lang[name]) {
				lang = FlipClock.Lang[name];
			}
			else {
				lang = FlipClock.Lang[this.defaultLanguage];
			}
			
			return this.lang = lang;
		},
					
		/**
		 * Localize strings into various languages
		 *
		 * @param	string  The index of the localized string
		 * @param	object  Optionally pass a lang object
		 */

		localize: function(index, obj) {
			var lang = this.lang;

			if(!index) {
				return null;
			}

			var lindex = index.toLowerCase();

			if(typeof obj == "object") {
				lang = obj;
			}

			if(lang && lang[lindex]) {
				return lang[lindex];
			}

			return index;
		},
		 

		/**
		 * Starts the clock
		 */
		 
		start: function(callback) {
			var t = this;

			if(!t.running && (!t.countdown || t.countdown && t.time.time > 0)) {
				t.face.start(t.time);
				t.timer.start(function() {
					t.flip();
					
					if(typeof callback === "function") {
						callback();
					}	
				});
			}
			else {
				t.log('Trying to start timer when countdown already at 0');
			}
		},
		
		/**
		 * Stops the clock
		 */
		 
		stop: function(callback) {
			this.face.stop();
			this.timer.stop(callback);
			
			for(var x in this.lists) {
				if (this.lists.hasOwnProperty(x)) {
					this.lists[x].stop();
				}
			}	
		},
		
		/**
		 * Reset the clock
		 */
		 
		reset: function(callback) {
			this.timer.reset(callback);
			this.face.reset();
		},
		
		/**
		 * Sets the clock time
		 */
		 
		setTime: function(time) {
			this.time.time = time;
			this.flip(true);		
		},
		
		/**
		 * Get the clock time
		 *
		 * @return  object  Returns a FlipClock.Time object
		 */
		 
		getTime: function(time) {
			return this.time;		
		},
		
		/**
		 * Changes the increment of time to up or down (add/sub)
		 */
		 
		setCountdown: function(value) {
			var running = this.running;
			
			this.countdown = value ? true : false;
				
			if(running) {
				this.stop();
				this.start();
			}
		},
		
		/**
		 * Flip the digits on the clock
		 *
		 * @param  array  An array of digits	 
		 */
		flip: function(doNotAddPlayClass) {	
			this.face.flip(false, doNotAddPlayClass);
		}
		
	});
		
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * The FlipClock List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific digit.
	 *
	 * @param 	object  A FlipClock.Factory object
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.List = FlipClock.Base.extend({
		
		/**
		 * The digit (0-9)
		 */		
		 
		digit: 0,
		
		/**
		 * The CSS classes
		 */		
		 
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			flip: 'flip'	
		},
				
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * The jQuery object
		 */		
		 
		$el: false,

		/**
		 * The jQuery object (deprecated)
		 */		
		 
		$obj: false,
		
		/**
		 * The items in the list
		 */		
		 
		items: [],
		
		/**
		 * The last digit
		 */		
		 
		lastDigit: 0,
			
		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties	 
		 */
		 
		constructor: function(factory, digit, options) {
			this.factory = factory;
			this.digit = digit;
			this.lastDigit = digit;
			this.$el = this.createList();
			
			// Depcrated support of the $obj property.
			this.$obj = this.$el;

			if(digit > 0) {
				this.select(digit);
			}

			this.factory.$el.append(this.$el);
		},
		
		/**
		 * Select the digit in the list
		 *
		 * @param  int  A digit 0-9	 
		 */
		 
		select: function(digit) {
			if(typeof digit === "undefined") {
				digit = this.digit;
			}
			else {
				this.digit = digit;
			}

			if(this.digit != this.lastDigit) {
				var $delete = this.$el.find('.'+this.classes.before).removeClass(this.classes.before);

				this.$el.find('.'+this.classes.active).removeClass(this.classes.active)
													  .addClass(this.classes.before);

				this.appendListItem(this.classes.active, this.digit);

				$delete.remove();

				this.lastDigit = this.digit;
			}	
		},
		
		/**
		 * Adds the play class to the DOM object
		 */
		 		
		play: function() {
			this.$el.addClass(this.factory.classes.play);
		},
		
		/**
		 * Removes the play class to the DOM object 
		 */
		 
		stop: function() {
			var t = this;

			setTimeout(function() {
				t.$el.removeClass(t.factory.classes.play);
			}, this.factory.timer.interval);
		},
		
		/**
		 * Creates the list item HTML and returns as a string 
		 */
		createListItem: function(css, value) {

			var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
			var valStr = String( value );
			var perValue = valStr.replace(/[0-9]/g, function(w){
				return id[+w];
			});
			return [
				'<li class="'+(css ? css : '')+'">',
					'<a href="#">',
						'<div class="up">',
							'<div class="shadow"></div>',
							'<div class="inn">'+(value ? perValue : '')+'</div>',
						'</div>',
						'<div class="down">',
							'<div class="shadow"></div>',
							'<div class="inn">'+(value ? perValue : '')+'</div>',
						'</div>',
					'</a>',
				'</li>'
			].join('');
		},

		/**
		 * Append the list item to the parent DOM node 
		 */

		appendListItem: function(css, value) {
			var html = this.createListItem(css, value);

			this.$el.append(html);
		},

		/**
		 * Create the list of digits and appends it to the DOM object 
		 */
		 
		createList: function() {

			var lastDigit = this.getPrevDigit() ? this.getPrevDigit() : this.digit;

			var html = $([
				'<ul class="'+this.classes.flip+' '+(this.factory.running ? this.factory.classes.play : '')+'">',
					this.createListItem(this.classes.before, lastDigit),
					this.createListItem(this.classes.active, this.digit),
				'</ul>'
			].join(''));
					
			return html;
		},

		getNextDigit: function() {
			return this.digit == 9 ? 0 : this.digit + 1;
		},

		getPrevDigit: function() {
			return this.digit == 0 ? 9 : this.digit - 1;
		}

	});
	
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * Capitalize the first letter in a string
	 *
	 * @return string
	 */
	 
	String.prototype.ucfirst = function() {
		return this.substr(0, 1).toUpperCase() + this.substr(1);
	};
	
	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	$.fn.FlipClock = function(digit, options) {	
		return new FlipClock($(this), digit, options);
	};
	
	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	$.fn.flipClock = function(digit, options) {
		return $.fn.FlipClock(digit, options);
	};
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
			
	/**
	 * The FlipClock Time class is used to manage all the time 
	 * calculations.
	 *
	 * @param 	object  A FlipClock.Factory object
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.Time = FlipClock.Base.extend({
		
		/**
		 * The time (in seconds) or a date object
		 */		
		 
		time: 0,
		
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * The minimum number of digits the clock face must have
		 */		
		 
		minimumDigits: 0,

		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties	 
		 */
		 
		constructor: function(factory, time, options) {
			if(typeof options != "object") {
				options = {};
			}

			if(!options.minimumDigits) {
				options.minimumDigits = factory.minimumDigits;
			}

			this.base(options);
			this.factory = factory;

			if(time) {
				this.time = time;
			}
		},

		/**
		 * Convert a string or integer to an array of digits
		 *
		 * @param   mixed  String or Integer of digits	 
		 * @return  array  An array of digits 
		 */
		 
		convertDigitsToArray: function(str) {
			var data = [];
			
			str = str.toString();
			
			for(var x = 0;x < str.length; x++) {
				if(str[x].match(/^\d*$/g)) {
					data.push(str[x]);	
				}
			}
			
			return data;
		},
		
		/**
		 * Get a specific digit from the time integer
		 *
		 * @param   int    The specific digit to select from the time	 
		 * @return  mixed  Returns FALSE if no digit is found, otherwise
		 *				   the method returns the defined digit	 
		 */
		 
		digit: function(i) {
			var timeStr = this.toString();
			var length  = timeStr.length;
			
			if(timeStr[length - i])	 {
				return timeStr[length - i];
			}
			
			return false;
		},

		/**
		 * Formats any array of digits into a valid array of digits
		 *
		 * @param   mixed  An array of digits	 
		 * @return  array  An array of digits 
		 */
		 
		digitize: function(obj) {
			var data = [];

			$.each(obj, function(i, value) {
				value = value.toString();
				
				if(value.length == 1) {
					value = '0'+value;
				}
				
				for(var x = 0; x < value.length; x++) {
					data.push(value.charAt(x));
				}				
			});

			if(data.length > this.minimumDigits) {
				this.minimumDigits = data.length;
			}
			
			if(this.minimumDigits > data.length) {
				for(var x = data.length; x < this.minimumDigits; x++) {
					data.unshift('0');
				}
			}

			return data;
		},
		
		/**
		 * Gets a new Date object for the current time
		 *
		 * @return  array  Returns a Date object
		 */

		getDateObject: function() {
			if(this.time instanceof Date) {
				return this.time;
			}

			return new Date((new Date()).getTime() + this.getTimeSeconds() * 1000);
		},
		
		/**
		 * Gets a digitized daily counter
		 *
		 * @return  object  Returns a digitized object
		 */

		getDayCounter: function(includeSeconds) {
			var digits = [
				this.getDays(),
				this.getHours(true),
				this.getMinutes(true)
			];

			if(includeSeconds) {
				digits.push(this.getSeconds(true));
			}

			return this.digitize(digits);
		},

		/**
		 * Gets number of days
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getDays: function(mod) {
			var days = this.getTimeSeconds() / 60 / 60 / 24;
			
			if(mod) {
				days = days % 7;
			}
			
			return Math.floor(days);
		},
		
		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getHourCounter: function() {
			var obj = this.digitize([
				this.getHours(),
				this.getMinutes(true),
				this.getSeconds(true)
			]);
			
			return obj;
		},
		
		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getHourly: function() {
			return this.getHourCounter();
		},
		
		/**
		 * Gets number of hours
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getHours: function(mod) {
			var hours = this.getTimeSeconds() / 60 / 60;
			
			if(mod) {
				hours = hours % 24;	
			}
			
			return Math.floor(hours);
		},
		
		/**
		 * Gets the twenty-four hour time
		 *
		 * @return  object  returns a digitized object
		 */
		 
		getMilitaryTime: function(date, showSeconds) {
			if(typeof showSeconds === "undefined") {
				showSeconds = true;
			}

			if(!date) {
				date = this.getDateObject();
			}

			var data  = [
				date.getHours(),
				date.getMinutes()			
			];

			if(showSeconds === true) {
				data.push(date.getSeconds());
			}

			return this.digitize(data);
		},
				
		/**
		 * Gets number of minutes
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getMinutes: function(mod) {
			var minutes = this.getTimeSeconds() / 60;
			
			if(mod) {
				minutes = minutes % 60;
			}
			
			return Math.floor(minutes);
		},
		
		/**
		 * Gets a minute breakdown
		 */
		 
		getMinuteCounter: function() {
			var obj = this.digitize([
				this.getMinutes(),
				this.getSeconds(true)
			]);

			return obj;
		},
		
		/**
		 * Gets time count in seconds regardless of if targetting date or not.
		 *
		 * @return  int   Returns a floored integer
		 */
		 
		getTimeSeconds: function(date) {
			if(!date) {
				date = new Date();
			}

			if (this.time instanceof Date) {
				if (this.factory.countdown) {
					return Math.max(this.time.getTime()/1000 - date.getTime()/1000,0);
				} else {
					return date.getTime()/1000 - this.time.getTime()/1000 ;
				}
			} else {
				return this.time;
			}
		},
		
		/**
		 * Gets the current twelve hour time
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getTime: function(date, showSeconds) {
			if(typeof showSeconds === "undefined") {
				showSeconds = true;
			}

			if(!date) {
				date = this.getDateObject();
			}

			console.log(date);

			
			var hours = date.getHours();
			var merid = hours > 12 ? 'PM' : 'AM';
			var data   = [
				hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours),
				date.getMinutes()			
			];

			if(showSeconds === true) {
				data.push(date.getSeconds());
			}

			return this.digitize(data);
		},
		
		/**
		 * Gets number of seconds
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a ceiled integer
		 */
		 
		getSeconds: function(mod) {
			var seconds = this.getTimeSeconds();
			
			if(mod) {
				if(seconds == 60) {
					seconds = 0;
				}
				else {
					seconds = seconds % 60;
				}
			}
			
			return Math.ceil(seconds);
		},

		/**
		 * Gets number of weeks
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getWeeks: function(mod) {
			var weeks = this.getTimeSeconds() / 60 / 60 / 24 / 7;
			
			if(mod) {
				weeks = weeks % 52;
			}
			
			return Math.floor(weeks);
		},
		
		/**
		 * Removes a specific number of leading zeros from the array.
		 * This method prevents you from removing too many digits, even
		 * if you try.
		 *
		 * @param   int    Total number of digits to remove 
		 * @return  array  An array of digits 
		 */
		 
		removeLeadingZeros: function(totalDigits, digits) {
			var total    = 0;
			var newArray = [];
			
			$.each(digits, function(i, digit) {
				if(i < totalDigits) {
					total += parseInt(digits[i], 10);
				}
				else {
					newArray.push(digits[i]);
				}
			});
			
			if(total === 0) {
				return newArray;
			}
			
			return digits;
		},

		/**
		 * Adds X second to the current time
		 */

		addSeconds: function(x) {
			if(this.time instanceof Date) {
				this.time.setSeconds(this.time.getSeconds() + x);
			}
			else {
				this.time += x;
			}
		},

		/**
		 * Adds 1 second to the current time
		 */

		addSecond: function() {
			this.addSeconds(1);
		},

		/**
		 * Substracts X seconds from the current time
		 */

		subSeconds: function(x) {
			if(this.time instanceof Date) {
				this.time.setSeconds(this.time.getSeconds() - x);
			}
			else {
				this.time -= x;
			}
		},

		/**
		 * Substracts 1 second from the current time
		 */

		subSecond: function() {
			this.subSeconds(1);
		},
		
		/**
		 * Converts the object to a human readable string
		 */
		 
		toString: function() {
			return this.getTimeSeconds().toString();
		}
		
		/*
		getYears: function() {
			return Math.floor(this.time / 60 / 60 / 24 / 7 / 52);
		},
		
		getDecades: function() {
			return Math.floor(this.getWeeks() / 10);
		}*/
	});
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * The FlipClock.Timer object managers the JS timers
	 *
	 * @param	object  The parent FlipClock.Factory object
	 * @param	object  Override the default options
	 */
	
	FlipClock.Timer = FlipClock.Base.extend({
		
		/**
		 * Callbacks
		 */		
		 
		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},
		
		/**
		 * FlipClock timer count (how many intervals have passed)
		 */		
		 
		count: 0,
		
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * Timer interval (1 second by default)
		 */		
		 
		interval: 1000,

		/**
		 * The rate of the animation in milliseconds (not currently in use)
		 */		
		 
		animationRate: 1000,
				
		/**
		 * Constructor
		 *
		 * @return	void
		 */		
		 
		constructor: function(factory, options) {
			this.base(options);
			this.factory = factory;
			this.callback(this.callbacks.init);	
			this.callback(this.callbacks.create);
		},
		
		/**
		 * This method gets the elapsed the time as an interger
		 *
		 * @return	void
		 */		
		 
		getElapsed: function() {
			return this.count * this.interval;
		},
		
		/**
		 * This method gets the elapsed the time as a Date object
		 *
		 * @return	void
		 */		
		 
		getElapsedTime: function() {
			return new Date(this.time + this.getElapsed());
		},
		
		/**
		 * This method is resets the timer
		 *
		 * @param 	callback  This method resets the timer back to 0
		 * @return	void
		 */		
		 
		reset: function(callback) {
			clearInterval(this.timer);
			this.count = 0;
			this._setInterval(callback);			
			this.callback(this.callbacks.reset);
		},
		
		/**
		 * This method is starts the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		start: function(callback) {		
			this.factory.running = true;
			this._createTimer(callback);
			this.callback(this.callbacks.start);
		},
		
		/**
		 * This method is stops the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		stop: function(callback) {
			this.factory.running = false;
			this._clearInterval(callback);
			this.callback(this.callbacks.stop);
			this.callback(callback);
		},
		
		/**
		 * Clear the timer interval
		 *
		 * @return	void
		 */		
		 
		_clearInterval: function() {
			clearInterval(this.timer);
		},
		
		/**
		 * Create the timer object
		 *
		 * @param 	callback  A function that is called once the timer is created
		 * @return	void
		 */		
		 
		_createTimer: function(callback) {
			this._setInterval(callback);		
		},
		
		/**
		 * Destroy the timer object
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 	
		_destroyTimer: function(callback) {
			this._clearInterval();			
			this.timer = false;
			this.callback(callback);
			this.callback(this.callbacks.destroy);
		},
		
		/**
		 * This method is called each time the timer interval is ran
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		_interval: function(callback) {
			this.callback(this.callbacks.interval);
			this.callback(callback);
			this.count++;
		},
		
		/**
		 * This sets the timer interval
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		_setInterval: function(callback) {
			var t = this;
	
			t._interval(callback);

			t.timer = setInterval(function() {		
				t._interval(callback);
			}, this.interval);
		}
			
	});
	
}(jQuery));

(function($) {
	
	/**
	 * Twenty-Four Hour Clock Face
	 *
	 * This class will generate a twenty-four our clock for FlipClock.js
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},

		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.	
		 */
		 
		build: function(time) {
			var t        = this;
			var children = this.factory.$el.find('ul');

			if(!this.factory.time.time) {
				this.factory.original = new Date();

				this.factory.time = new FlipClock.Time(this.factory, this.factory.original);
			}

			var time = time ? time : this.factory.time.getMilitaryTime(false, this.showSeconds);

			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					t.createList(digit);
				});
			}
			
			this.createDivider();
			this.createDivider();

			$(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el);
			$(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el);
			
			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			this.autoIncrement();
			
			time = time ? time : this.factory.time.getMilitaryTime(false, this.showSeconds);
			
			this.base(time, doNotAddPlayClass);	
		}
				
	});
	
}(jQuery));
(function($) {
		
	/**
	 * Counter Clock Face
	 *
	 * This class will generate a generice flip counter. The timer has been
	 * disabled. clock.increment() and clock.decrement() have been added.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.CounterFace = FlipClock.Face.extend({
		
		/**
		 * Tells the counter clock face if it should auto-increment
		 */

		shouldAutoIncrement: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {

			if(typeof options != "object") {
				options = {};
			}

			factory.autoStart = options.autoStart ? true : false;

			if(options.autoStart) {
				this.shouldAutoIncrement = true;
			}

			factory.increment = function() {
				factory.countdown = false;
				factory.setTime(factory.getTime().getTimeSeconds() + 1);
			};

			factory.decrement = function() {
				factory.countdown = true;
				var time = factory.getTime().getTimeSeconds();
				if(time > 0) {
					factory.setTime(time - 1);
				}
			};

			factory.setValue = function(digits) {
				factory.setTime(digits);
			};

			factory.setCounter = function(digits) {
				factory.setTime(digits);
			};

			this.base(factory, options);
		},

		/**
		 * Build the clock face	
		 */
		 
		build: function() {
			var t        = this;
			var children = this.factory.$el.find('ul');
			var time 	 = this.factory.getTime().digitize([this.factory.getTime().time]);

			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					var list = t.createList(digit);

					list.select(digit);
				});
			
			}

			$.each(this.lists, function(i, list) {
				list.play();
			});

			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {			
			if(this.shouldAutoIncrement) {
				this.autoIncrement();
			}

			if(!time) {		
				time = this.factory.getTime().digitize([this.factory.getTime().time]);
			}

			this.base(time, doNotAddPlayClass);
		},

		/**
		 * Reset the clock face
		 */

		reset: function() {
			this.factory.time = new FlipClock.Time(
				this.factory, 
				this.factory.original ? Math.round(this.factory.original) : 0
			);

			this.flip();
		}
	});
	
}(jQuery));
(function($) {

	/**
	 * Daily Counter Clock Face
	 *
	 * This class will generate a daily counter for FlipClock.js. A
	 * daily counter will track days, hours, minutes, and seconds. If
	 * the number of available digits is exceeded in the count, a new
	 * digit will be created.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default
	 */

	FlipClock.DailyCounterFace = FlipClock.Face.extend({

		showSeconds: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 */

		constructor: function(factory, options) {
			this.base(factory, options);
		},

		/**
		 * Build the clock face
		 */

		build: function(time) {
			var t = this;
			var children = this.factory.$el.find('ul');
			var offset = 0;

			time = time ? time : this.factory.time.getDayCounter(this.showSeconds);

			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					t.createList(digit);
				});
			}

			if(this.showSeconds) {
				$(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el);
			}
			else
			{
				offset = 2;
			}

			$(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4 + offset].$el);
			$(this.createDivider('Hours')).insertBefore(this.lists[this.lists.length - 6 + offset].$el);
			$(this.createDivider('Days', true)).insertBefore(this.lists[0].$el);

			this.base();
		},

		/**
		 * Flip the clock face
		 */

		flip: function(time, doNotAddPlayClass) {
			if(!time) {
				time = this.factory.time.getDayCounter(this.showSeconds);
			}

			this.autoIncrement();

			this.base(time, doNotAddPlayClass);
		}

	});

}(jQuery));
(function($) {
			
	/**
	 * Hourly Counter Clock Face
	 *
	 * This class will generate an hourly counter for FlipClock.js. An
	 * hour counter will track hours, minutes, and seconds. If number of
	 * available digits is exceeded in the count, a new digit will be 
	 * created.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.HourlyCounterFace = FlipClock.Face.extend({
			
		// clearExcessDigits: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},
		
		/**
		 * Build the clock face
		 */
		
		build: function(excludeHours, time) {
			var t = this;
			var children = this.factory.$el.find('ul');
			
			time = time ? time : this.factory.time.getHourCounter();
			
			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					t.createList(digit);
				});
			}
			
			$(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el);
			$(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4].$el);
			
			if(!excludeHours) {
				$(this.createDivider('Hours', true)).insertBefore(this.lists[0].$el);
			}
			
			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			if(!time) {
				time = this.factory.time.getHourCounter();
			}	

			this.autoIncrement();
		
			this.base(time, doNotAddPlayClass);
		},

		/**
		 * Append a newly created list to the clock
		 */

		appendDigitToClock: function(obj) {
			this.base(obj);

			this.dividers[0].insertAfter(this.dividers[0].next());
		}
		
	});
	
}(jQuery));
(function($) {
		
	/**
	 * Minute Counter Clock Face
	 *
	 * This class will generate a minute counter for FlipClock.js. A
	 * minute counter will track minutes and seconds. If an hour is 
	 * reached, the counter will reset back to 0. (4 digits max)
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({

		clearExcessDigits: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},
		
		/**
		 * Build the clock face	
		 */
		 
		build: function() {
			this.base(true, this.factory.time.getMinuteCounter());
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			if(!time) {
				time = this.factory.time.getMinuteCounter();
			}

			this.base(time, doNotAddPlayClass);
		}

	});
	
}(jQuery));
(function($) {
		
	/**
	 * Twelve Hour Clock Face
	 *
	 * This class will generate a twelve hour clock for FlipClock.js
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
		
		/**
		 * The meridium jQuery DOM object
		 */
		 
		meridium: false,
		
		/**
		 * The meridium text as string for easy access
		 */
		 
		meridiumText: 'AM',
					
		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.	
		 */
		 
		build: function() {
			var t = this;

			var time = this.factory.time.getTime(false, this.showSeconds);

			this.base(time);			
			this.meridiumText = this.getMeridium();			
			this.meridium = $([
				'<ul class="flip-clock-meridium">',
					'<li>',
						'<a href="#">'+this.meridiumText+'</a>',
					'</li>',
				'</ul>'
			].join(''));
						
			this.meridium.insertAfter(this.lists[this.lists.length-1].$el);
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {			
			if(this.meridiumText != this.getMeridium()) {
				this.meridiumText = this.getMeridium();
				this.meridium.find('a').html(this.meridiumText);	
			}
			this.base(this.factory.time.getTime(false, this.showSeconds), doNotAddPlayClass);	
		},
		
		/**
		 * Get the current meridium
		 *
		 * @return  string  Returns the meridium (AM|PM)
		 */
		 
		getMeridium: function() {
			return new Date().getHours() >= 12 ? 'PM' : 'AM';
		},
		
		/**
		 * Is it currently in the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */
		 
		isPM: function() {
			return this.getMeridium() == 'PM' ? true : false;
		},

		/**
		 * Is it currently before the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */
		 
		isAM: function() {
			return this.getMeridium() == 'AM' ? true : false;
		}
				
	});
	
}(jQuery));
(function($) {

    /**
     * FlipClock Arabic Language Pack
     *
     * This class will be used to translate tokens into the Arabic language.
     *
     */

    FlipClock.Lang.Arabic = {

      'years'   : 'سال',
      'months'  : 'ماه',
      'days'    : 'روز',
      'hours'   : 'ساعت',
      'minutes' : 'دقیقه',
      'seconds' : 'ثانیه'

    };

    /* Create various aliases for convenience */

    FlipClock.Lang['ar']      = FlipClock.Lang.Arabic;
    FlipClock.Lang['ar-ar']   = FlipClock.Lang.Arabic;
    FlipClock.Lang['arabic']  = FlipClock.Lang.Arabic;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Danish Language Pack
	 *
	 * This class will used to translate tokens into the Danish language.
	 *	
	 */
	 
	FlipClock.Lang.Danish = {
		
		'years'   : 'År',
		'months'  : 'Måneder',
		'days'    : 'Dage',
		'hours'   : 'Timer',
		'minutes' : 'Minutter',
		'seconds' : 'Sekunder'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['da']     = FlipClock.Lang.Danish;
	FlipClock.Lang['da-dk']  = FlipClock.Lang.Danish;
	FlipClock.Lang['danish'] = FlipClock.Lang.Danish;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock German Language Pack
	 *
	 * This class will used to translate tokens into the German language.
	 *	
	 */
	 
	FlipClock.Lang.German = {
		
		'years'   : 'Jahre',
		'months'  : 'Monate',
		'days'    : 'Tage',
		'hours'   : 'Stunden',
		'minutes' : 'Minuten',
		'seconds' : 'Sekunden'	
 
	};
	
	/* Create various aliases for convenience */
 
	FlipClock.Lang['de']     = FlipClock.Lang.German;
	FlipClock.Lang['de-de']  = FlipClock.Lang.German;
	FlipClock.Lang['german'] = FlipClock.Lang.German;
 
}(jQuery));
(function($) {
		
	/**
	 * FlipClock English Language Pack
	 *
	 * This class will used to translate tokens into the English language.
	 *	
	 */
	 
	FlipClock.Lang.English = {
		
		'years'   : 'Years',
		'months'  : 'Months',
		'days'    : 'Days',
		'hours'   : 'Hours',
		'minutes' : 'Minutes',
		'seconds' : 'Seconds'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['en']      = FlipClock.Lang.English;
	FlipClock.Lang['en-us']   = FlipClock.Lang.English;
	FlipClock.Lang['english'] = FlipClock.Lang.English;

}(jQuery));
(function($) {

	/**
	 * FlipClock Spanish Language Pack
	 *
	 * This class will used to translate tokens into the Spanish language.
	 *
	 */

	FlipClock.Lang.Spanish = {

		'years'   : 'Años',
		'months'  : 'Meses',
		'days'    : 'Días',
		'hours'   : 'Horas',
		'minutes' : 'Minutos',
		'seconds' : 'Segundos'

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['es']      = FlipClock.Lang.Spanish;
	FlipClock.Lang['es-es']   = FlipClock.Lang.Spanish;
	FlipClock.Lang['spanish'] = FlipClock.Lang.Spanish;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Finnish Language Pack
	 *
	 * This class will used to translate tokens into the Finnish language.
	 *	
	 */
	 
	FlipClock.Lang.Finnish = {
		
		'years'   : 'Vuotta',
		'months'  : 'Kuukautta',
		'days'    : 'Päivää',
		'hours'   : 'Tuntia',
		'minutes' : 'Minuuttia',
		'seconds' : 'Sekuntia'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['fi']      = FlipClock.Lang.Finnish;
	FlipClock.Lang['fi-fi']   = FlipClock.Lang.Finnish;
	FlipClock.Lang['finnish'] = FlipClock.Lang.Finnish;

}(jQuery));

(function($) {

  /**
   * FlipClock Canadian French Language Pack
   *
   * This class will used to translate tokens into the Canadian French language.
   *
   */

  FlipClock.Lang.French = {

    'years'   : 'Ans',
    'months'  : 'Mois',
    'days'    : 'Jours',
    'hours'   : 'Heures',
    'minutes' : 'Minutes',
    'seconds' : 'Secondes'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['fr']      = FlipClock.Lang.French;
  FlipClock.Lang['fr-ca']   = FlipClock.Lang.French;
  FlipClock.Lang['french']  = FlipClock.Lang.French;

}(jQuery));

(function($) {
		
	/**
	 * FlipClock Italian Language Pack
	 *
	 * This class will used to translate tokens into the Italian language.
	 *	
	 */
	 
	FlipClock.Lang.Italian = {
		
		'years'   : 'Anni',
		'months'  : 'Mesi',
		'days'    : 'Giorni',
		'hours'   : 'Ore',
		'minutes' : 'Minuti',
		'seconds' : 'Secondi'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['it']      = FlipClock.Lang.Italian;
	FlipClock.Lang['it-it']   = FlipClock.Lang.Italian;
	FlipClock.Lang['italian'] = FlipClock.Lang.Italian;
	
}(jQuery));

(function($) {

  /**
   * FlipClock Latvian Language Pack
   *
   * This class will used to translate tokens into the Latvian language.
   *
   */

  FlipClock.Lang.Latvian = {

    'years'   : 'Gadi',
    'months'  : 'Mēneši',
    'days'    : 'Dienas',
    'hours'   : 'Stundas',
    'minutes' : 'Minūtes',
    'seconds' : 'Sekundes'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['lv']      = FlipClock.Lang.Latvian;
  FlipClock.Lang['lv-lv']   = FlipClock.Lang.Latvian;
  FlipClock.Lang['latvian'] = FlipClock.Lang.Latvian;

}(jQuery));
(function($) {

    /**
     * FlipClock Dutch Language Pack
     *
     * This class will used to translate tokens into the Dutch language.
     */

    FlipClock.Lang.Dutch = {

        'years'   : 'Jaren',
        'months'  : 'Maanden',
        'days'    : 'Dagen',
        'hours'   : 'Uren',
        'minutes' : 'Minuten',
        'seconds' : 'Seconden'

    };

    /* Create various aliases for convenience */

    FlipClock.Lang['nl']      = FlipClock.Lang.Dutch;
    FlipClock.Lang['nl-be']   = FlipClock.Lang.Dutch;
    FlipClock.Lang['dutch']   = FlipClock.Lang.Dutch;

}(jQuery));

(function($) {

	/**
	 * FlipClock Norwegian-Bokmål Language Pack
	 *
	 * This class will used to translate tokens into the Norwegian language.
	 *	
	 */

	FlipClock.Lang.Norwegian = {

		'years'   : 'År',
		'months'  : 'Måneder',
		'days'    : 'Dager',
		'hours'   : 'Timer',
		'minutes' : 'Minutter',
		'seconds' : 'Sekunder'	

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['no']      = FlipClock.Lang.Norwegian;
	FlipClock.Lang['nb']      = FlipClock.Lang.Norwegian;
	FlipClock.Lang['no-nb']   = FlipClock.Lang.Norwegian;
	FlipClock.Lang['norwegian'] = FlipClock.Lang.Norwegian;

}(jQuery));

(function($) {

	/**
	 * FlipClock Portuguese Language Pack
	 *
	 * This class will used to translate tokens into the Portuguese language.
	 *
	 */

	FlipClock.Lang.Portuguese = {

		'years'   : 'Anos',
		'months'  : 'Meses',
		'days'    : 'Dias',
		'hours'   : 'Horas',
		'minutes' : 'Minutos',
		'seconds' : 'Segundos'

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['pt']         = FlipClock.Lang.Portuguese;
	FlipClock.Lang['pt-br']      = FlipClock.Lang.Portuguese;
	FlipClock.Lang['portuguese'] = FlipClock.Lang.Portuguese;

}(jQuery));
(function($) {

  /**
   * FlipClock Russian Language Pack
   *
   * This class will used to translate tokens into the Russian language.
   *
   */

  FlipClock.Lang.Russian = {

    'years'   : 'лет',
    'months'  : 'месяцев',
    'days'    : 'дней',
    'hours'   : 'часов',
    'minutes' : 'минут',
    'seconds' : 'секунд'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['ru']      = FlipClock.Lang.Russian;
  FlipClock.Lang['ru-ru']   = FlipClock.Lang.Russian;
  FlipClock.Lang['russian']  = FlipClock.Lang.Russian;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Swedish Language Pack
	 *
	 * This class will used to translate tokens into the Swedish language.
	 *	
	 */
	 
	FlipClock.Lang.Swedish = {
		
		'years'   : 'År',
		'months'  : 'Månader',
		'days'    : 'Dagar',
		'hours'   : 'Timmar',
		'minutes' : 'Minuter',
		'seconds' : 'Sekunder'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['sv']      = FlipClock.Lang.Swedish;
	FlipClock.Lang['sv-se']   = FlipClock.Lang.Swedish;
	FlipClock.Lang['swedish'] = FlipClock.Lang.Swedish;

}(jQuery));

(function($) {
		
	/**
	 * FlipClock Chinese Language Pack
	 *
	 * This class will used to translate tokens into the Chinese language.
	 *	
	 */
	 
	FlipClock.Lang.Chinese = {
		
		'years'   : '年',
		'months'  : '月',
		'days'    : '日',
		'hours'   : '时',
		'minutes' : '分',
		'seconds' : '秒'

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['zh']      = FlipClock.Lang.Chinese;
	FlipClock.Lang['zh-cn']   = FlipClock.Lang.Chinese;
	FlipClock.Lang['chinese'] = FlipClock.Lang.Chinese;

}(jQuery));


/*[PATH @digikala/supernova-digistyle-desktop/assets/local/js/services.js]*/
var Services =  $.extend(Framework, {
    ajaxError401Response: function () {
        this.user = new UserClass();
        this.getUser().showLoginForm();
    },

    checkUserLogged : function () {
        var $userClass = new UserClass();
        if (!$userClass.isLogged()) {
            $userClass.showLoginForm();
            return false;
        }

        return true;
    },

    /**
     * convert En number to Fa number
     *
     * @method convertToFaDigit
     * @return {String}
     */
    convertToFaDigit: function (a) {
        var b = '' + a;
        for (var c = 48; c <= 57; c++) {
            var d = String.fromCharCode(c);
            var e = String.fromCharCode(c + 1728);
            b = b.replace(new RegExp(d.toString(), "g"), e.toString())
        }
        return b;
    },

    /**
     * Seprate numbers
     *
     * @method AutoSeparateValue
     * @return {String}
     */
    autoSeparateValue: function (a) {
        var b, c, d, g;
        var e, f;
        b = a;
        b = b.replace(/,/g, "");
        if (b != "") c = b.charAt(0);
        if (c != "-") c = "";
        else b = b.replace(/-/g, "");
        if (b.indexOf(".") == -1) {
            if (b.length > 3) {
                d = "";
                while (b.length > 3) {
                    g = b.substr(0, b.length - 3);
                    var h = b.substr(b.length - 3);
                    var i = "," + h;
                    d = i + d;
                    b = b.substr(0, b.length - 3)
                }
                d = c + g + d
            } else d = c + b
        } else {
            e = b.substring(0, b.indexOf("."));
            f = b.substring(b.indexOf("."));
            if (e.length > 3) {
                d = "";
                while (e.length > 3) {
                    g = e.substr(0, e.length - 3);
                    h = e.substr(e.length - 3);
                    i = "," + h;
                    d = i + d;
                    e = e.substr(0, e.length - 3)
                }
                if (f != ".00") {
                    d = c + g + d + f
                } else d = c + g + d
            } else if (f != ".00") {
                d = c + e + f
            } else d = c + e
        }
        return d
    },

    /**
     * Format Currency
     *
     * @method formatCurrency
     * @return {String}
     */
    formatCurrency: function (num, isRial, symbol) {
        num = num.toString().replace(/\$|\,/g, "");
        if (isNaN(num)) num = "0";
        var sign = (num == (num = Math.abs(num)));
        num = Math.round(num * 100 + 0.50000000001);
        num = Math.round(num / (isRial ? 1000 : 100)).toString();
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        return (((sign) ? "" : "-") + num + " " + symbol);
    },

    /**
     * Convert Persion Number to English Number
     *
     * @method convertToEnDigit
     * @return {String}
     */
    convertToEnDigit: function (str) {
        return str
            .replace(/۰/g, '0')
            .replace(/۱/g, '1')
            .replace(/۲/g, '2')
            .replace(/۳/g, '3')
            .replace(/۴/g, '4')
            .replace(/۵/g, '5')
            .replace(/۶/g, '6')
            .replace(/۷/g, '7')
            .replace(/۸/g, '8')
            .replace(/۹/g, '9')
            .replace(/٠/g, '0')
            .replace(/١/g, '1')
            .replace(/٢/g, '2')
            .replace(/٣/g, '3')
            .replace(/٤/g, '4')
            .replace(/٥/g, '5')
            .replace(/٦/g, '6')
            .replace(/٧/g, '7')
            .replace(/٨/g, '8')
            .replace(/٩/g, '9');

    },

    setCookie: function (cookieName, cookieValue, expireDays) {
        var d = new Date();
        d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    },

    getCookie: function getCookie(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },

    checkCookie: function (cookieName) {
        var name = this.getCookie(cookieName);
        if (name !== "") {
            return true;
        } else {
            return false;
        }
    },

    callListInTryCatch: function (methodArray, obj) {
        methodArray.forEach(function(method) {
            try {
                method.call(obj)
            } catch (e) {
                window.Sentry && window.Sentry.captureException(e);
                // eslint-disable-next-line no-console
                console.error(e);
            }
        })
    },

    getQueryString: function(url) {
        if(url.indexOf('?') < 0) return false;
        return url.substring(url.indexOf('?'));
    },

    parseQueryString: function(query) {
        query = query.substring(1);
        var queryString = {};
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            if (vars[i] === "") {
                continue;
            }
            var pair = vars[i].split("=");
            var key = pair[0];
            var value = pair.length > 1 ? pair[1] : "";
            try {
                var paramValue = decodeURIComponent(value.replace(/\+/g, "%20"));
                if (typeof queryString[key] === "undefined") {
                    queryString[key] = paramValue;
                } else {
                    if (typeof queryString[key] === "string") {
                        var arr = [queryString[key], paramValue];
                        queryString[key] = arr;
                    } else {
                        queryString[key].push(paramValue);
                    }
                }
            } catch (err) {}
        }
        return queryString;
    },

    retrieveProductFromDataLayer: function(paramsObject, filterCallback) {
        var productId = paramsObject.productId,
            eventName = paramsObject.eventName,
            pathArray = paramsObject.pathArray;

        if(!filterCallback) filterCallback = function() { return true };

        return window.dataLayer
            .filter(function(eventItem) {
                return eventItem.event === eventName
            })
            .map(function(eventItem) {
                return getToList(eventItem, pathArray)
                    .filter(function(product) {
                        return product.id == productId;
                    })
            })
            .reduce(function(base, item) {
                return base.concat(item);
            })
            .filter(filterCallback)
            .reduce(function(firstProduct) {
                return firstProduct;
            })

        function getToList(object, pathArray) {
            if(pathArray.length === 1) {
                return object[pathArray[0]];
            } else {
                return getToList(
                    object[pathArray[0]],
                    pathArray.slice(1)
                )
            }
        }
    },

    isObject: function(variable) {
        return variable && Object.prototype.toString.call(variable) === '[object Object]';
    },

    debounce: function(func, wait) {
        var timeout;
        return function() {
            var context = this
            var later = function() {
                timeout = null;
                func.apply(context);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle: function (callback, limit) {
        var waiting = false;
        return function () {
            if (!waiting) {
                callback.apply(this, arguments);
                waiting = true;
                setTimeout(function () {
                    waiting = false;
                }, limit);
            }
        }
    },
});


/*[PATH @digikala/supernova-digistyle-desktop/assets/local/js/user.js]*/
UserClass = function()  {
    var $addressFormInited = false;
    this.loggedUserMetaData = null;

    this.getLoggedUserMetaData = function () {
        if (this.loggedUserMetaData !== null) {
            return this.loggedUserMetaData;
        }
        let $metaData = $('#ESILogged');

        if (!$metaData.length) {
            return null;
        }

        this.loggedUserMetaData = $metaData;

        return this.loggedUserMetaData;
    };

    this.checkLogged = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return false;
        }

        return $loggedUserMetaData.data('logged') === 1;
    };

    this.getEmail = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return false;
        }

        return $loggedUserMetaData.data('email');
    };

    this.getMobilePhone = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return '';
        }

        return $loggedUserMetaData.data('mobile_phone');
    };

    this.getLoginPhone = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return '';
        }

        return $loggedUserMetaData.data('login_phone');
    };

    this.getDefaultPhone = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return '';
        }

        return $loggedUserMetaData.data('default_phone');
    };

    this.displayLoginForm = function (msg) {
        $('[data-remodal-id=login-required]').remodal().open();
    };

    this.ObservedForm = {
        display : function () {
            var modal = $('[data-remodal-id=observed]').remodal();
            modal.open();
            return this;
        },
        clean : function () {
            $('.js-observe-modal-errors').addClass('u-hidden-visually');
            $('.js-observe-modal-errors .js-form-error-items').empty();
            return this;
        },
        addError : function (errorMsg) {
            let $errorItems = $('.js-observe-modal-errors');
            $errorItems.removeClass('u-hidden-visually');
            $errorItems.find('.js-form-error-items').append('<p>' + __(errorMsg) + '</p>');
            return this;
        }
    };

    this.displayAddressForm = function ($addressId) {
        if (!this.isLogged()) {
            return;
        }

        if (!$addressFormInited) {

            var $form = $('#addressForm');

            if (!$form.length) {
                return;
            }

            //TODO move to user class or make it smarter
            $('#manage-address').on('beforeshow', function(){
                    $form.validate().resetForm();
                }
            );

            $('#lbSave').click(function(){
                if (!$form.valid()) {
                    return false;
                }

                $.ajax({
                    type: 'POST',
                    url: '/profile/address/save',
                    success: function(response) {
                        if (response.status == 'error') {
                            $.each(response.errors, function( key, value ) {
                                $('#' + key).html(value);
                            });
                        }
                    },
                    data: $form.serialize()
                });
            });

            $form.find('input').first().focus();

            $form.validate({
                rules : {
                    'address[full_name]' : {
                        required : true,
                        maxlength : 10
                    },
                    'address[mobile_phone]' : {
                        required : true,
                        digits: true,
                        minlength : 11,
                        maxlength : 11,
                        mobile_phone : true
                    },
                    'address[phone_code]' : {
                        required : true,
                        digits: true,
                        minlength : 4,
                        maxlength : 4
                    },
                    'address[phone]' : {
                        required : true,
                        digits: true,
                        minlength : 8,
                        maxlength : 11
                    },
                    'address[address]' : {
                        required : true,
                        minlength: 4,
                        maxlength : 350
                    },
                    'address[post_code]' : {
                        required : true,
                        digits: true,
                        minlength: 4,
                        maxlength : 10
                    }
                },
                messages : {
                    'address[full_name]' : {
                        'required' : 'نام و نام خانوادگی تکمیل نشده است',
                        'maxlength' : 'نام و نام خانوادگی طولانی است'
                    },
                    'address[mobile_phone]' : {
                        'required' : 'شماره موبایل وارد نشده است',
                        'digits' : 'شماره موبایل را درست وارد نمایید',
                        'minlength' : 'شماره موبایل را کامل وارد نمایید',
                        'maxlength' : 'شماره موبایل را درست وارد نمایید',
                        'mobile_phone' : 'شماره موبایل نامعتبر است'
                    },
                    'address[phone_code]' : {
                        'required' : 'کد تلفن را وارد نمایید',
                        'digits' : 'کد را درست وارد نمایید',
                        'minlength' : 'کد تلفن را کامل وارد نمایید',
                        'maxlength' : 'کد تلفن را درست وارد نمایید'
                    },
                    'address[phone]' : {
                        'required' : 'شماره تلفن را وارد نمایید',
                        'digits' : 'شماره تلفن را درست وارد نمایید',
                        'minlength' : 'شماره تلفن را کامل وارد نمایید',
                        'maxlength' : 'شماره تلفن را درست وارد نمایید'
                    },
                    'address[address]' : {
                        'required' : 'آدرس را وارد نمایید',
                        'minlength' : 'آدرس وارد شده کوتاه است',
                        'maxlength' : 'لطفا آدرس را کوتاه‌تر وارد نمایید'
                    }
                }
            });

            $addressFormInited = true;
        }

        if ($addressId) {
            $.ajax({
                type: 'POST',
                url: '/profile/address/get',
                success: function(response) {
                    //prefill
                },
                data: {
                    "address[id]": $addressId
                }
            });
        }

        let $modal = $('#manage-address');

        if ($modal.length) {
            UIkit.modal($modal).show();
        }
    };
};

UserClass.prototype.isLogged = function() {
    return this.checkLogged();
};
UserClass.prototype.getEmail = function() {
    return this.getEmail();
};
UserClass.prototype.getDefaultPhone = function () {
    return this.getDefaultPhone();
};
UserClass.prototype.getMobilePhone = function () {
    return this.getMobilePhone();
};
UserClass.prototype.getLoginPhone = function () {
    return this.getLoginPhone();
};
UserClass.prototype.showLoginForm = function(msg) {
    return this.displayLoginForm(msg);
};
UserClass.prototype.showObservedForm = function() {
    return this.ObservedForm.clean().display();
};
UserClass.prototype.showAddressForm = function() {
    return this.displayAddressForm();
};


/*[PATH @digikala/supernova-digistyle-desktop/assets/local/js/DSCookie.js]*/
window.DSCookie = {
    // Create cookie
    set: function (name, value, seconds) {
        var expires;
        if (seconds) {
            var date = new Date();
            date.setTime(date.getTime() + (seconds * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + ";path=/";
    },

    // Read cookie
    get: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') { // Trim ?
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    },

    // Erase cookie
    remove: function (name) {
        window.DKCookie.set(name, "", -1);
    }
};


/*[PATH @digikala/supernova-digistyle-desktop/assets/local/js/jquery.countdown.min.js]*/
!function(l){l.fn.countdown=function(e){var g=31557600,T=2629800,p=604800,x=86400,y=3600,w=/%y|%m|%w|%d|%h|%i|%s|%ty|%tm|%tw|%td|%th|%ti|%ts/g,r=/\d/g,v=function(e,a){var t=e.toString().match(r),n="";return l.each(t,function(e,t){t=Number(t),n+=""+a.digits[t]||""+t}),n},j=function(e){var t=new Date,a=e.data("jcdData");return a?(null!==a.offset&&(t=n(a.offset)),t.setMilliseconds(0),t):new Date},n=function(e){var t,a,n,r=new Date;return null!==e&&(t=36e5*e,n=r.getTime()- -r.getTimezoneOffset()/60*36e5+t,a=r.setTime(n)),new Date(a)},i=function(e,t){t.onStart&&e.on("start.jcdevt",t.onStart),t.onChange&&e.on("change.jcdevt",t.onChange),t.onComplete&&e.on("complete.jcdevt",t.onComplete),t.onPause&&e.on("pause.jcdevt",t.onPause),t.onResume&&e.on("resume.jcdevt",t.onResume),t.onLocaleChange&&e.on("locale.jcdevt",t.onLocaleChange)},L=function(e){var t=e.template,a=e.yearsLeft,n=e.monthsLeft,r=e.weeksLeft,o=e.daysLeft,i=e.hrsLeft,s=e.minsLeft,l=e.secLeft,d=!1,u=!1,c=!1,m=!1,h=!1,f=!1;return e.isRTL&&(t=e.rtlTemplate),e.omitZero&&(e.yearsAndMonths&&(e.yearsLeft||(d=!0),e.monthsLeft||(u=!0)),e.weeks&&(e.yearsAndMonths&&u&&!e.weeksLeft||!e.yearsAndMonths&&!e.weeksLeft)&&(c=!0),c&&!o&&(m=!0),m&&!i&&(h=!0),h&&!s&&(f=!0)),e.leadingZero&&(a<10&&(a="0"+a),n<10&&(n="0"+n),r<10&&(r="0"+r),o<10&&(o="0"+o),i<10&&(i="0"+i),s<10&&(s="0"+s),l<10&&(l="0"+l)),a=v(a,e),n=v(n,e),r=v(r,e),o=v(o,e),i=v(i,e),s=v(s,e),l=v(l,e),e.yearsAndMonths&&(e.omitZero&&d||(t=(t=t.replace("%y",a)).replace("%ty",1==a&&e.yearSingularText?e.yearSingularText:e.yearText)),(!e.omitZero||!d&&n||!d&&!u)&&(t=(t=t.replace("%m",n)).replace("%tm",1==n&&e.monthSingularText?e.monthSingularText:e.monthText))),e.weeks&&!c&&(t=(t=t.replace("%w",r)).replace("%tw",1==r&&e.weekSingularText?e.weekSingularText:e.weekText)),m||(t=(t=t.replace("%d",o)).replace("%td",1==o&&e.daySingularText?e.daySingularText:e.dayText)),h||(t=(t=t.replace("%h",i)).replace("%th",1==i&&e.hourSingularText?e.hourSingularText:e.hourText)),f||(t=(t=t.replace("%i",s)).replace("%ti",1==s&&e.minSingularText?e.minSingularText:e.minText)),t=(t=(t=t.replace("%s",l)).replace("%ts",1==l&&e.secSingularText?e.secSingularText:e.secText)).replace(w,"")},s=function(){var e,t,a,n,r,o,i,s,l=this,d=0,u=0,c=0,m="",h=function(e){var t;return t=Math.floor(s/e),s-=t*e,t},f=l.data("jcdData");if(!f)return!1;e=j(l),(t=null!==f.serverDiff?new Date(f.serverDiff+f.clientdateNow.getTime()):f.dateObj).setMilliseconds(0),a="down"===f.direction?t.getTime()-e.getTime():e.getTime()-t.getTime(),s=Math.round(a/1e3),n=h(x),r=h(y),o=h(60),i=h(1),f.yearsAndMonths&&(s+=n*x,d=h(g),u=h(T),n=h(x)),f.weeks&&(s+=n*x,c=h(p),n=h(x)),(f.hoursOnly||f.minsOnly||f.secsOnly)&&(f.yearsAndMonths&&(s+=d*g,s+=u*T,d=u=0),f.weeks&&(s+=c*p,c=0)),f.hoursOnly&&(s+=n*x,s+=r*y,r=h(y)),f.minsOnly&&(s+=n*x,s+=r*y,r=n=0,s+=60*o,o=h(60)),f.secsOnly&&(s+=n*x,s+=r*y,s+=60*o,o=r=n=0,s+=i,i=h(1)),f.yearsLeft=d,f.monthsLeft=u,f.weeksLeft=c,f.daysLeft=n,f.hrsLeft=r,f.minsLeft=o,f.secLeft=i,l.data("jcdData",f),"down"===f.direction&&(e<t||f.minus)||"up"===f.direction&&(t<e||f.minus)?m=L(f):(f.yearsLeft=f.monthsLeft=f.weeksLeft=f.daysLeft=f.hrsLeft=f.minsLeft=f.secLeft=0,m=L(f),f.hasCompleted=!0),l.html(m).triggerMulti("change.jcdevt,countChange",[f]),f.hasCompleted&&(l.triggerMulti("complete.jcdevt,countComplete"),clearInterval(f.timer))},t={init:function(a){var n,r=l.extend({},l.fn.countdown.defaults,a),o={};return this.each(function(){var e,t=l(this);if(t.data("jcdData")&&(t.countdown("changeSettings",a,!0),r=t.data("jcdData")),null===r.date&&null===r.dataAttr)return l.error("No Date passed to jCountdown. date option is required."),!0;n=r.date?r.date:t.attr("data-"+r.dataAttr),"Invalid Date"===new Date(n).toString()&&l.error("Invalid Date passed to jCountdown: "+n),i(t,a),(o=l.extend({},r)).dom={},o.dom.$time=l("<"+o.timeWrapElement+">").addClass(o.timeWrapClass),o.dom.$text=l("<"+o.textWrapElement+">").addClass(o.textWrapClass),o.clientdateNow=new Date,o.clientdateNow.setMilliseconds(0),o.originalHTML=t.html(),o.dateObj=new Date(n),o.dateObj.setMilliseconds(0),o.hasCompleted=!1,o.timer=0,o.yearsLeft=o.monthsLeft=o.weeksLeft=o.daysLeft=o.hrsLeft=o.minsLeft=o.secLeft=0,o.difference=null,e=l.proxy(s,t),o.timer=setInterval(e,o.updateTime),t.data("jcdData",o).triggerMulti("start.jcdevt,countStart",[o]),e()})},changeSettings:function(n,r){return this.each(function(){var e,t=l(this),a=l.proxy(s,t);if(!t.data("jcdData"))return!0;e=l.extend({},t.data("jcdData"),n),n.hasOwnProperty("date")&&"Invalid Date"===new Date(n.date).toString()&&l.error("Invalid Date passed to jCountdown: "+n.date),e.completed=!1,e.dateObj=new Date(n.date),clearInterval(e.timer),t.off(".jcdevt").data("jcdData",e),r||(i(t,e),e.timer=setInterval(a,e.updateTime),t.data("jcdData",e),a()),e=null})},resume:function(){return this.each(function(){var e=l(this),t=e.data("jcdData"),a=l.proxy(s,e);if(!t)return!0;if(e.data("jcdData",t).triggerMulti("resume.jcdevt,countResume",[t]),!t.hasCompleted){if(t.timer=setInterval(a,t.updateTime),t.stopwatch&&"up"===t.direction){var n=j(e).getTime()-t.pausedAt.getTime(),r=new Date;r.setTime(t.dateObj.getTime()+n),t.dateObj=r}a()}})},pause:function(){return this.each(function(){var e=l(this),t=e.data("jcdData");if(!t)return!0;t.stopwatch&&(t.pausedAt=j(e)),clearInterval(t.timer),e.data("jcdData",t).triggerMulti("pause.jcdevt,countPause",[t])})},complete:function(){return this.each(function(){var e=l(this),t=e.data("jcdData");if(!t)return!0;clearInterval(t.timer),t.hasCompleted=!0,e.data("jcdData",t).triggerMulti("complete.jcdevt,countComplete",[t])})},destroy:function(){return this.each(function(){var e=l(this),t=e.data("jcdData");if(!t)return!0;clearInterval(t.timer),e.off(".jcdevt").removeData("jcdData").html(t.originalHTML)})},getSettings:function(e){var t=l(this).data("jcdData");return e&&t?t.hasOwnProperty(e)?t[e]:void 0:t},changeLocale:function(e){var t=l(this),a=t.data("jcdData");return l.fn.countdown.locale[e]?(l.extend(a,l.fn.countdown.locale[e]),t.data("jcdData",a).triggerMulti("locale.jcdevt,localeChange",[a]),!0):(l.error("Locale '"+e+"' does not exist"),!1)}};return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void l.error("Method "+e+" does not exist in the jCountdown Plugin"):t.init.apply(this,arguments)},l.fn.countdown.defaults={date:null,dataAttr:null,updateTime:1e3,yearText:"years",monthText:"months",weekText:"weeks",dayText:"days",hourText:"hours",minText:"mins",secText:"sec",yearSingularText:"year",monthSingularText:"month",weekSingularText:"week",daySingularText:"day",hourSingularText:"hour",minSingularText:"min",secSingularText:"sec",digits:[0,1,2,3,4,5,6,7,8,9],isRTL:!1,minus:!1,onStart:null,onChange:null,onComplete:null,onResume:null,onPause:null,onLocaleChange:null,leadingZero:!1,offset:null,serverDiff:null,hoursOnly:!1,minsOnly:!1,secsOnly:!1,weeks:!1,hours:!1,yearsAndMonths:!1,direction:"down",stopwatch:!1,omitZero:!1,rtlTemplate:"%ts %s : %ti %i : %th %h : %tm %m : %ty %y",template:"%y %ty : %m %tm : %h %th : %i %ti : %s %ts"},l.fn.countdown.locale=[],l.fn.countdown.locale.en={yearText:"years",monthText:"months",weekText:"weeks",dayText:"days",hourText:"hours",minText:"mins",secText:"sec",yearSingularText:"year",monthSingularText:"month",weekSingularText:"week",daySingularText:"day",hourSingularText:"hour",minSingularText:"min",secSingularText:"sec",isRTL:!1},l.fn.triggerMulti=function(e,a){var n=e.split(",");return this.each(function(){for(var e=l(this),t=0;t<n.length;t++)e.trigger(n[t],a)})}}(jQuery),$.fn.countdown.locale.ar={yearText:"سال",monthText:"ماه",weekText:"هفته",dayText:"روز",hourText:"ساعت",digits:["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],minText:"دقیقه",secText:"ثانیه",isRTL:!0},$.extend($.fn.countdown.defaults,$.fn.countdown.locale.ar);



/*[PATH @digikala/supernova-digistyle-desktop/assets/local/js/main.js]*/
// init sentry
if(typeof module_js_crashlytics != "undefined" && !!module_js_crashlytics) {
    try {
        window.Sentry.init({dsn: 'https://0942f9e6e0ad43bd87bc9e12ec4b2ee6@sentry.digikala.com/19'});
    } catch (e) {
        console.log('failed to load sentry', e);
    }
}

var Main = {
    init: function() {
        this.user = new window.UserClass();
        var functions = [
            this.overrideServerErrors,
            this.initGoogleAnalyticsEvents,
            this.extendValidator,
            this.initShowMore,
            this.initAlertModal,
            this.initGeneralAlertModal,
            this.initGeneralConfirmDeleteModal,
            this.initNewsletterSubmit,
            this.initNewMiniCart,
            this.initMegaSearch,
            this.initMegaMenuAmend,
            this.initGeneralLoadingModal,
            this.initInputLabels,
            this.initSNTracker,
            this.initErrorMessages,
            this.initXtremePushAdro,
            this.initTracker,
            this.initCounter,
            this.initFlipclockCounter,
            this.initGeneralToast,
            this.initDropdownMenus,
            this.initGoBack,
            this.initInvalidItems,
        ];
        if (isModuleActive('intrack_issues_test')) {
            functions.push(this.initIntrack);
        }

        if (isModuleActive('ds_new_footer')) {
            functions.push(this.initFooter);
        }

        if (isModuleActive('ds_voucher_box')) {
            functions.push(this.initVoucherBox);
        }

        if (isModuleActive('data_layer_ds')) {
            functions.push(this.initGAPromotionsImpressions);
        }

        var self = this;

        window.Services.callListInTryCatch(functions, this);
    },

    initCounter: function () {
        var $counter = $('.js-counter');

        $counter.each(function () {
            var $this = $(this),
                seconds = $(this).data("countdownseconds"),
                now;

            if (!!$this.attr("data-countdownseconds") && !!seconds) {
                now = new Date();
                now.setSeconds(now.getSeconds() + seconds);
            } else {
                now = ("" + $(this).data("countdown")).replace(/-/g, "/");
            }

            if (!now) return;

            $this.countdown({
                date: now,
                hoursOnly: true,
                rtlTemplate: "%h:%i:%s",
                template: "%h:%i:%s",
                leadingZero: true
            });
        });
    },

    initFlipclockCounter: function () {
        if ($(".js-flipclock-counter").length > 0) {
            var $flipclockContainer = $(".js-flipclock-counter"),
                endTime = Date.parse($flipclockContainer.data('countdown').replace(/ /, 'T')) / 1000,
                now = Date.now() / 1000,
                timeLeft = (endTime - now > 0)
                    ? endTime - now
                    : 0;

            $flipclockContainer.FlipClock(
                timeLeft,
                {
                    clockFace: 'HourlyCounter',
                    countdown: true
                });
        }
    },

    initVoucherBox: function () {
        $(document).on('click', '.js-voucher-box-close', function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.DSCookie && window.DSCookie.set('digistyle_voucher_box', "1", 7 * 24 * 3600);
            $(this).closest('.js-voucher-box').fadeOut();
        });

        $('.js-voucher-box-copy').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var aux = document.createElement("input");
            var text = $(this).html();
            aux.setAttribute("value", text);
            aux.setAttribute("contenteditable", true); //IOS compatibility
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
        })
    },

    initEmarsys: function() {
        window.ScarabQueue = window.ScarabQueue || [];
        if (this.user.isLogged()) {
            ScarabQueue.push([
                "setEmail",
                this.user.getEmail().indexOf("@") > 0
                    ? this.user.getEmail()
                    : this.user.getEmail() + "@digikala.com"
            ]);
        }
        $(document).ready(function() {
            ScarabQueue.push(["go"]);
        });
    },
    overrideServerErrors: function() {
        // eslint-disable-next-line no-console
        window.alert = console.log.bind(console);
    },

    initErrorMessages: function() {
        var errorButton = $(".js-message-error-button");
        errorButton.on("click", function() {
            $(this)
                .closest(".js-message-error")
                .hide();
        });

        $(".js-notice-button").on("click", function() {
            $(this)
                .closest(".js-notice")
                .hide();
            if (this.timer) clearTimeout(this.timer);
        });

        $(".js-notice").each(function(index, item) {
            this.timer = setTimeout(function() {
                $(item).fadeOut(300);
            }, 4000);
        });
    },

    extendValidator: function() {
        $.validator.setDefaults({
            errorPlacement: function(error, element) {
                var $row = element.closest(".js-valid-row");
                if ($row.length > 0) {
                    // $row.addClass('has-error');

                    if (isModuleActive('ds_new_auth') && element.parents('.cp-input__form-field').length) {
                        var $parent = element.closest('.cp-input__form-field');
                    } else {
                        var $parent = element.parent();
                    }

                    if ($parent.is(".c-login__input")) {
                        error
                            .appendTo($parent)
                            .addClass("c-login__input-message");
                    } else if ($parent.is(".c-login__verification-input")) {
                        error.appendTo(
                            $parent.siblings(".c-login__verification-message")
                        );
                    } else if ($parent.is(".c-info__form-field")) {
                        error
                            .appendTo($parent)
                            .addClass("c-info__verification");
                    } else if ($parent.is(".c-ui-input")) {
                        error.appendTo($parent);
                    } else if ($parent.is(".cp-input__form-field")) {
                        $parent.addClass("cp-input__form-field--has-error");
                        $parent.find('.cp-input__message').text(error.text());
                    } else {
                        error
                            .appendTo(element.parent())
                            .addClass("o-form__error");
                    }
                }
            },
            highlight: function(element) {
                element = $(element);
                var $row = element.closest(".js-valid-row");
                if ($row.length > 0) {
                    // $row.addClass('has-error');

                    var $parent = element.parent();

                    if ($parent.is(".c-login__input")) {
                        $parent.addClass("c-login__input--has-error");
                    } else if ($parent.is(".c-login__verification-input")) {
                        element
                            .closest(".c-login__verification")
                            .addClass("c-login__verification--has-error");
                    } else if ($parent.is(".c-info__form-field")) {
                        $parent.addClass("c-info__form-field--has-error");
                    } else if ($parent.is(".c-ui-input")) {
                        $parent.addClass("has-error");
                    } else if ($parent.is(".cp-input__form-field")) {
                        $parent.addClass("cp-input__form-field--has-error");
                        $parent.find('.cp-input__icon').addClass('cp-input__icon--error');
                    } else {
                        element.addClass("o-form__field-input--error");
                    }
                }
            },
            unhighlight: function(element) {
                element = $(element);
                var $row = element.closest(".js-valid-row");
                if ($row.length > 0) {
                    // $row.removeClass('has-error');

                    var $parent = element.parent();

                    if ($parent.is(".c-login__input")) {
                        $parent.removeClass("c-login__input--has-error");
                    } else if ($parent.is(".c-login__verification-input")) {
                        element
                            .closest(".c-login__verification")
                            .removeClass("c-login__verification--has-error");
                    } else if ($parent.is(".c-info__form-field")) {
                        $parent.removeClass("c-info__form-field--has-error");
                    } else if ($parent.is(".c-ui-input")) {
                        $parent.removeClass("has-error");
                    } else if ($parent.is(".cp-input__form-field")) {
                        $parent.removeClass("cp-input__form-field--has-error");
                        $parent.find('.cp-input__icon').removeClass('cp-input__icon--error');
                    } else {
                        element.removeClass("o-form__field-input--error");
                    }
                }
            },
            errorElement: "span",
            // ignoreTitle : true,
            ignore: ":hidden:not(.force-validation)"
        });

        $.extend($.validator.prototype, {
            showBackendErrors: function() {
                if (typeof window.jsFormErrors === "undefined") {
                    return;
                }

                var $form = $(this.currentForm);

                var $formErrorsIndex = $form.data("name");

                if (
                    typeof window.jsFormErrors[$formErrorsIndex] === "undefined"
                ) {
                    return;
                }

                this.showErrors(window.jsFormErrors[$formErrorsIndex]);
            }
        });

        $.validator.addMethod("digits", function(value) {
            if (!!value && value.length > 0 && value.trim().length > 0) {
                return /^[\u06F0-\u06F9\u0660-\u06690-9]+$/i.test(value);
            }
            return true;
        });

        $.validator.addMethod(
            "national_identity_number",
            function(value) {
                value = Services.convertToEnDigit(value);
                var regex = new RegExp(/^(?!(\d)\1{9})\d{10}$/);

                if (!regex.test(value)) {
                    return false;
                }

                var s = 0;
                var c = parseInt(value.substr(9, 1), 10);

                for (var i = 0; i < 9; i++) {
                    s += parseInt(value.substr(i, 1), 10) * (10 - i);
                }

                s = s % 11;

                return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
            },
            'کد ملی نامعتبر است'
        );

        $.validator.addMethod(
            "mobile_phone",
            function(value) {
                var phone = Services.convertToEnDigit(value);

                var pattern = new RegExp(
                    "^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$",
                    "i"
                );

                return pattern.test(phone);
            },
            'شماره موبایل نامعتبر است'
        );

        $.validator.addMethod(
            "bank_card_number",
            function(value) {
                var number = Services.convertToEnDigit(value);

                if (number.length === 0) {
                    return true;
                }

                return /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}(-[0-9]{3})?$/i.test(
                    number
                );
            },
            'شماره کارت بانکی نامعتبر است'
        );

        // Implemented by @masoudalali
        $.validator.addMethod("digits", function(value) {
            if (!!value && value.length > 0 && value.trim().length > 0)
                return /^[\u06F0-\u06F9\u0660-\u06690-9]+$/i.test(value);

            return true;
        });

        $.validator.addMethod(
            "company_economic_number",
            function(value) {
                value = Services.convertToEnDigit(value);
                var regex = new RegExp(/^(?!(\d)\1{9})\d{12}$/);

                if (!regex.test(value)) {
                    return false;
                }

                return value.substring(0, 3) == "411";
            },
            'کد اقتصادی نادرست است.'
        );

        $.validator.addMethod(
            "company_national_identity_number",
            function(value) {
                value = Services.convertToEnDigit(value);
                var regex = new RegExp(/^(?!(\d)\1{10})\d{11}$/);

                if (!regex.test(value)) {
                    return false;
                }

                if (parseInt(value.substr(3, 6), 10) != 0) {
                    var c = parseInt(value.substr(10, 1), 10);
                    var d = parseInt(value.substr(9, 1), 10) + 2;
                    var z = [29, 27, 23, 19, 17];
                    var s = 0;

                    for (var i = 0; i < 10; i++) {
                        s += (d + parseInt(value.substr(i, 1), 10)) * z[i % 5];
                    }

                    s = s % 11;

                    if (s == 10) s = 0;

                    return c == s;
                }

                return false;
            },
            __(
                "form.general.company_national_identity_number.validation.general"
            )
        );

        $.validator.addMethod("email", function(value) {
            if ($.trim(value).length === 0) {
                return true;
            }

            return /^(([^<>()\[\]\\\.,;:\s@"]+(\.[^<>()\[\]\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
                value
            );
        });

        $.validator.addMethod(
            "email_phone",
            function(value, element) {
                if ($.trim(value).length === 0) {
                    return true;
                }

                if (
                    $.validator.methods.mobile_phone.call(this, value, element)
                ) {
                    return true;
                }

                return $.validator.methods.email.call(this, value, element);
            },
            'شماره موبایل یا ایمیل نادرست است'
        );

        $.validator.addMethod(
            "notOnlyNumber",
            function(value, element) {
                return (
                    this.optional(element) ||
                    !/^[0-9]*$/.test(value.replace(/(\r\n|\n|\r|\s)/gm, ""))
                );
            },
            "Not Only Number"
        );

        $.validator.addMethod(
            "notEmailAddress",
            function(value, element) {
                return (
                    this.optional(element) ||
                    (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                        value
                    ) &&
                        !/.*@.*/.test(value))
                );
            },
            "Not Email Address"
        );

        $.validator.addMethod("persian_english_letters_only", function (value) {
            if ($.trim(value).length === 0) {
                return true;
            }

            return /[abcdefghijklmnopqrstuvwxyzابپتثجچحخدذرزژسشصضطظعغفقکكگلمنوهیئي]$/i.test(
                value
            );
        });

        // trim white spaces before validation
        $.each($.validator.methods, function(key, value) {
            $.validator.methods[key] = function() {
                if (arguments.length > 0) {
                    arguments[0] = $.trim(arguments[0]);
                }

                return value.apply(this, arguments);
            };
        });
    },

    initShowMore: function() {
        $(".js-expandable-text").each(function() {
            var expandableText = $(this);
            var $container = expandableText.closest(
                ".js-expandable-text-container"
            );
            var expandBtn = $container.find(".js-expand-btn");

            if (expandableText.height() > 100) {
                $container.addClass("collapsed");
                expandBtn.removeClass("hidden");
            }

            expandBtn.on("click", function() {
                $container.toggleClass("collapsed");
            });
        });
    },

    initAlertModal: function() {
        var generalInformationModal = $("[data-remodal-id=alert]").remodal();

        window.DKAlert = function(options) {
            var title = options.title || "";
            var message = options.message || "";
            var buttonText = options.buttonText
                ? options.buttonText
                : typeof options.buttonText === "string"
                ? ""
                : "باشه";
            var isPositive =
                typeof options.isPositive === "undefined"
                    ? true
                    : options.isPositive;
            var hasClose =
                typeof options.hasClose === "undefined"
                    ? true
                    : options.hasClose;
            var containerModifier = options.containerModifier || "";

            var modalTitle = generalInformationModal.$modal.find(
                    ".js-remodal-general-alert__title"
                ),
                modalText = generalInformationModal.$modal.find(
                    ".js-remodal-general-alert__text"
                ),
                modalProceed = generalInformationModal.$modal.find(
                    ".js-remodal-general-alert__button--approve"
                ),
                modalIcon = generalInformationModal.$modal.find(
                    ".js-remodal-general-alert__icon"
                ),
                modalClose = generalInformationModal.$modal.find(
                    ".js-remodal-general-alert__close"
                ),
                modalBox = generalInformationModal.$modal.find(
                    ".js-remodal-general-alert__main"
                );

            $(".js-remodal-general-alert__button--cancel").addClass("u-hidden");
            if (!buttonText) {
                $(".js-remodal-general-alert__button--approve").addClass(
                    "u-hidden"
                );
            }

            generalInformationModal.$modal.addClass(containerModifier);
            modalTitle.text(title);
            modalText.text(message);
            modalProceed.text(buttonText);
            modalIcon.removeClass().addClass("js-remodal-general-alert__icon");
            hasClose ? modalClose.show() : modalClose.hide();
            if (options.iconModifier) {
                modalIcon.addClass(
                    "c-remodal__icon c-remodal__icon--shown c-remodal__icon--" +
                        options.iconModifier +
                        " js-remodal-general-alert__icon"
                );
            }
            if (isPositive) {
                modalProceed
                    .addClass("c-remodal__main--positive")
                    .removeClass("c-remodal__main--negative");
                modalBox
                    .addClass("c-remodal__main--positive")
                    .removeClass("c-remodal__main--negative");
            } else {
                modalProceed
                    .addClass("c-remodal__main--negative")
                    .removeClass("c-remodal__main--positive");
                modalBox
                    .addClass("c-remodal__main--negative")
                    .removeClass("c-remodal__main--positive");
            }
            modalProceed.off("click");

            if (buttonText) {
                modalProceed.show();
                modalProceed.on("click", function() {
                    generalInformationModal.close();
                });
            } else {
                modalProceed.hide();
            }

            $(document).on("closed", ".remodal", function() {
                generalInformationModal.$modal.removeClass(containerModifier);
            });

            generalInformationModal.open();
        };
    },

    initGeneralToast: function () {
        var toast = $('.js-toast .js-snack-bar').eq(0);
        var allToasts = [];
        var self = this;

        window.DSToast = function (message) {
            // clearTimeout(self.timer);
            // self.timer = null;
            var newToast = toast.clone();
            allToasts.push(newToast);
            // toast.remove();
            // toast.fadeOut(300);
            newToast.appendTo('body');
            // toast = newToast;
            message = message || 'مشکلی پیش آمده است!';


            // var textContainer = $('.js-toast-text').eq(toastIndex+1);
            var textContainer = $(newToast).find('.js-toast-text').eq(0);
            textContainer.text(message);

            for (var i = 0; i < allToasts.length; i++){
                var reverseI = allToasts.length-1-i
                var toastBottom = 35 + (allToasts[reverseI].height()+10)*(i)
                allToasts[reverseI].css("bottom",Math.floor(toastBottom).toString()+'px')
            }

            newToast.show();

            setTimeout(function () {
                allToasts[0].addClass('c-snack-bar--faded');
                var fadedToast = allToasts.splice(0,1);
                setTimeout(function () {
                    fadedToast[0].remove();
                    // allToasts.splice(0,1);
                },500)
                // toast.remove();
                // toast.fadeOut(300, function () {
                //     toast.remove();
                // });
            }, 5000);

            // var closeBtn = toast.find('.js-notice-button');
            // closeBtn.on('click', function () {
            //     clearTimeout(self.timer);
            //     toast.fadeOut(300, function () {
            //         toast.remove();
            //     });
            // });
        };
    },

    initGeneralAlertModal: function() {
        var generalAlertModal = $("[data-remodal-id=alert]").remodal();

        window.DKConfirm = function(
            message,
            approveCallback,
            rejectCallback,
            approveText,
            rejectText
        ) {
            message = message || "";
            approveCallback = approveCallback || function() {};
            rejectCallback = rejectCallback || function() {};
            approveText = approveText || "بله";
            rejectText = rejectText || "خیر";

            var modalText = $(".js-remodal-general-alert__text"),
                modalCancel = $(".js-remodal-general-alert__button--cancel"),
                modalApprove = $(".js-remodal-general-alert__button--approve");

            modalText.text(message);
            modalCancel.text(rejectText);
            modalApprove.text(approveText);

            modalCancel.off("click");
            modalApprove.off("click");

            modalCancel.on("click", function() {
                generalAlertModal.close();
                rejectCallback();
            });
            modalApprove.on("click", function() {
                generalAlertModal.close();
                approveCallback();
            });
            generalAlertModal.open();
        };
    },

    initGeneralConfirmDeleteModal: function() {
        var $container = $("[data-remodal-id=general-confirm-delete]");
        var generalAlertModal = $container.remodal();

        window.DKConfirmDelete = function(options) {
            var message = options.message || "آیا از حذف این آدرس مطمئن هستید؟";
            var approveCallback = options.approveCallback || function() {};
            var rejectCallback = options.rejectCallback || function() {};
            var approveText = options.approveText || "بله";
            var rejectText = options.rejectText || "خیر";

            var modalText = $container.find(
                    ".js-remodal-general-confirm-delete__text"
                ),
                modalCancel = $container.find(
                    ".js-remodal-general-confirm-delete__reject-btn"
                ),
                modalApprove = $container.find(
                    ".js-remodal-general-confirm-delete__ok-btn"
                );

            modalText.text(message);
            modalCancel.text(rejectText);
            modalApprove.text(approveText);

            modalCancel.off("click");
            modalApprove.off("click");

            modalCancel.on("click", function() {
                generalAlertModal.close();
                rejectCallback();
            });
            modalApprove.on("click", function() {
                generalAlertModal.close();
                approveCallback();
            });
            generalAlertModal.open();
        };
    },

    initNewsletterSubmit: function() {
        var $subscriptionForm = $("#SubscribeNewsletter");

        $subscriptionForm.validate({
            rules: {
                "subscribe[email]": {
                    required: true,
                    email: true,
                    maxlength: 255
                }
            },
            messages: {
                "subscribe[email]": {
                    required: 'ایمیل را وارد نمایید',
                    email: 'ایمیل نامعتبر است',
                    maxlength: 'ایمیل طولانی است'
                }
            }
        });
        $subscriptionForm.on("submit", function(e) {
            var form = this;
            e.preventDefault();
            if (!$subscriptionForm.valid()) {
                $(this).addClass("has-error");
                $(".js-newsletter-error").text(
                    'ایمیل نامعتبر است'
                );
                return;
            }
            var email = $(this)
                .find(".js-newsletter-input")
                .val();
            $.ajax({
                type: "POST",
                url: "/newsletter/",
                data: $subscriptionForm.serialize(),
                success: function(response) {
                    if (response.status === "error") {
                        $(form).addClass("has-error");
                        $(".js-newsletter-error").text(response.errors);
                    } else {
                        DKAlert({
                            title: email,
                            message: "ایمیل شما با موفقیت ثبت شد.",
                            buttonText: "",
                            isPositive: true,
                            hasClose: true,
                            iconModifier: "check",
                            containerModifier: "c-remodal--newsletter-confirm"
                        });
                        $subscriptionForm.find("input").val("");
                        $(form).removeClass("has-error");
                        $(".js-newsletter-input").removeClass("filled");
                        try {
                            ga("send", {
                                hitType: "event",
                                eventCategory: "footer_section",
                                eventAction: "newsletter_subscription",
                                eventLabel:
                                    "logged_in:" +
                                    (window.userId ? "True" : "False") +
                                    " - current-page:" +
                                    document.location.pathname
                            });
                        } catch (e) {
                            // skip GA
                        }
                    }
                }
            });
        });
    },

    initNewMiniCart: function() {
        var $container = $(".js-mini-cart__container");
        var $emptyCart = $container.find(".js-mini-cart--empty");
        var $fullCart = $container.find(".js-mini-cart");
        var minicartVisible = false;
        var modalVisible = false;
        var $minicartTooltip = $('.js-mini-cart-tooltip');

        var $minicartContainer = $('#mini-cart');
        $minicartContainer.mouseenter(function(){
            minicartVisible = true;
            blinkMiniCart(minicartVisible);
        })
        $minicartContainer.mouseleave( function(){
            if (modalVisible) {
                return;
            }
            minicartVisible = false;
            setTimeout(function() {
                blinkMiniCart(minicartVisible);
            }, 2000);

        })

        $minicartContainer.on('click', function(e){
            e.stopPropagation();
        })

        var blinkMiniCart = function(miniCartOpen) {
            if (miniCartOpen) {
                $('.js-mini-cart-tooltip').addClass('c-tooltip-detailed--open');
            }else{
                $('.js-mini-cart-tooltip').removeClass('c-tooltip-detailed--open');
            }
        }

        $(document).on('opening','.remodal', function () {
            if (minicartVisible) {
                modalVisible = true;
            }
        });

        $(document).on('closed','.remodal', function () {
            if (minicartVisible) {
                modalVisible = false;
                setTimeout(function() {
                    minicartVisible = false;
                    blinkMiniCart(false);
                }, 3000);
            }
        });

        $(document).on('click','.remodal',function(e){
            e.stopPropagation()
        });

        $(document).on('click',function(){
            if (!modalVisible){
                minicartVisible = false;
                blinkMiniCart(minicartVisible);
            }
        })


        $minicartContainer.on("click", ".js-remove-product", function() {
            var thiz = this;
            var id = $(this).attr("data-id");
            var variantId = $(this).attr("data-variant-id");
            var cartItemId = $(this).attr("data-cart-item-id");
            var $this = $(this);
            var deleteCartItem = function() {
                Services.ajaxGETRequestJSON(
                    "/ajax/cart/remove/" + cartItemId + "/",
                    null,
                    function(response) {
                        if (response.data_layer && isModuleActive('data_layer_ds')) {
                            Main.setImpressionEventOnAjax(response.data_layer);
                        }
                        if (window.location.pathname === "/cart/") {
                            window.location.reload();
                        }
                        $("#mini-cart").html(response.data);
                        $('.js-mini-cart-tooltip').addClass('c-tooltip-detailed--open');
                        $this
                            .closest(".js-product-item")
                            .slideUp(300, function() {
                                $this.remove();
                            });
                        $this.remove();
                        try {
                            var enhancedEcommerceData = $(this).data(
                                "enhanced-ecommerce"
                            );
                            ga("ec:addProduct", enhancedEcommerceData);
                            ga("ec:setAction", "remove");
                            ga(
                                "send",
                                "event",
                                "ecommerce",
                                "remove from cart",
                                "remove from mini cart"
                            );
                        } catch (e) {
                            // TODO
                        }
                    },
                    function(data) {
                        if (data.errors !== undefined) {
                            DKAlert({
                                message: data.errors
                            });
                        }
                    },
                    false,
                    true
                );
            };

            var moveCartItem = function() {
                var addFavoriteUrl = isModuleActive('ds_favorite_list') ?
                    "/ajax/favorites/add/" + id + "/" :
                    "/ajax/cart/move/next-purchase/" + id + "/" + variantId + "/";

                Services.ajaxPOSTRequestJSON(
                    addFavoriteUrl,
                    {},
                    function(response) {
                        if (window.location.pathname === "/cart/") {
                            window.location.reload();
                        }
                        $("#mini-cart").html(response.miniCartData);
                        $('.js-mini-cart-tooltip').addClass('c-tooltip-detailed--open');
                        confirmDeleteModal.close();
                        $this
                            .closest(".js-product-item")
                            .slideUp(300, function() {
                                $this.remove();
                            });
                    },
                    function(response) {
                        if (response.errors !== undefined) {
                            DKAlert({ message: response.errors });
                        }
                    },
                    true,
                    true
                );
            }


            var confirmDeleteModal = $("[data-remodal-id=confirm-delete]").remodal();
            confirmDeleteModal.open();
            $(".js-remodal-confirm-delete__delete-btn").on("click",deleteCartItem);
            $(".js-remodal-confirm-delete__add-btn").on("click", moveCartItem);
        });
    },

    initMegaSearch: function() {
        var ServicesAutoSuggest = $.extend(false, Services, {
            ajaxBeforeSendCallback: function(jqXHR, settings) {
                settings.duplicateUrl = "/ajax/autosuggest/";
            }
        });

        var self = this;
        self.history = [];
        if (window.localStorage) {
            var hist = JSON.parse(window.localStorage.getItem("searchHistory"));
            if (hist) {
                self.history = hist.slice(0, 5);
            }
        }
        self.trends = [];
        self.lastSearch = "";
        self.lastSearchResponse = null;
        self.lastFocusedItem = -1;

        var $container = $(".js-mega-search__container"),
            $searchInput = $(".js-mega-search__input"),
            $searchKeyword = $(".js-mega-search__result-query"),
            $resultListContainer = $(".js-mega-search__results-container"),
            $searchResults = $(".js-mega-search__results"),
            $searchResultsBody = $(".js-mega-search__results-body"),
            $resultList = $(".js-mega-search__results"),
            $advanceResult = $(".js-mega-search__advanced-results"),
            $brandsList = $(".js-mega-search__results--brands"),
            $tagsList = $(".js-mega-search__results--tags"),
            $trendsListContainer = $(".js-mega-search__trends-container"),
            $trendsList = $(".js-mega-search__trends"),
            $historyListContainer = $(".js-mega-search__history-container"),
            $historyList = $(".js-mega-search__history"),
            $emptyList = $(".js-mega-search__no-result"),
            $productsList = $(".js-mega-search__results--products");

        var esc = 27,
            ent = 13;

        var showResults = function() {
            $resultListContainer.show();
            $trendsListContainer.hide();
            $historyListContainer.hide();
            $emptyList.hide();
        };

        var hideResults = function() {

            if ($searchInput.length <= 0) {
                return;
            }

            $resultListContainer.hide();
            if ($searchInput.val().trim().length === 0) {
                showTrends(self.trends);
                showHistory(self.history);
                $emptyList.hide();
            } else {
                $trendsListContainer.hide();
                $historyListContainer.hide();
                $emptyList.show();
            }
        };

        var showTrends = function(trends_result) {
            if (trends_result.length > 0) {
                var dom = $.map(trends_result, function(element) {
                    return (
                        '<li class="c-mega-search__trend">' +
                        '   <a  href="' +
                        element.url +
                        '">#' +
                        element.label +
                        "   </a>" +
                        "</li>"
                    );
                });
                $trendsList
                    .empty()
                    .append(dom)
                    .parent()
                    .show();
            } else {
                $trendsList.parent().hide();
            }
        };

        var showHistory = function(history_items) {
            if (self.trends.length > 0) {
                // $(".js-mega-search__subtitle--history").addClass(
                //     "c-mega-search__subtitle--has-separator"
                // );
            }

            if (history_items.length > 0) {
                var dom = $.map(history_items, function(element) {
                    return (
                        '<li class="c-mega-search__history-item js-mega-search__history-item">' +
                        '   <a class="c-mega-search__history-item-title" href="' +
                        element.url +
                        '">' +
                        (unescape && unescape(element.label) || element.label) +
                        "   </a>" +
                        '   <span class="c-mega-search__history-item-remove js-mega-search__history' +
                        '-item-remove"></span>' +
                        "</li>"
                    );
                });
                $historyList
                    .empty()
                    .append(dom)
                    .parent()
                    .show();
            } else {
                $historyList.parent().hide();
            }

            $(".js-mega-search__history-item-remove").on("click", function() {
                var $historyItem = $(this).closest(
                    ".js-mega-search__history-item"
                );
                removeHistoryItem(
                    $historyItem
                        .find(".c-mega-search__history-item-title")
                        .text()
                );
                $historyItem.remove();
            });
        };

        var showTags = function(trend_result) {
            if (trend_result.length > 0) {
                var dom = $.map(trend_result, function(element) {
                    return (
                        '<li class="c-mega-search__result c-mega-search__result--tag">' +
                        '   <a href="' +
                        element.url +
                        '"> #' +
                        element.label +
                        "   </a>" +
                        "</li>"
                    );
                });
                $tagsList
                    .empty()
                    .append(dom)
                    .parent()
                    .show();
            } else {
                $tagsList
                    .empty()
                    .parent()
                    .hide();
            }
        };

        var showProducts = function (suggestion_products) {

            if (suggestion_products.length > 0) {
                var dom = $.map(suggestion_products, function (element) {
                    element.title = element.title.substring(0,23) + "...";
                    return '<li class="swiper-slide c-mega-search__result-item c-mega-search__result-item--pill">' +
                        '<a href="' + element.url + '" class="c-mega-search__result-item-link c-mega-search__result-item-link--pill c-mega-search__result-item-link--product">' +
                        '<img src="' + element.image + '" alt="' + element.title +'" width="48" height="48"/>' +
                        '<span>'+ element.title +'</span>' +
                        '<span class="c-mega-search__result-chev"></span>'+
                        '</a>' +
                        '</li>';

                });

                $productsList.empty().append(dom).closest(".c-mega-search__result-row").show();

                var newSwiper = new window.Swiper(".js-swiper-product-suggestions", {
                    slidesPerView: 'auto',
                    simulateTouch: false,
                    grabCursor: false,
                    loop: false,
                    lazy: {
                        enabled: true
                    },
                    navigation: {
                        nextEl: ".js-swiper-button-next",
                        prevEl: ".js-swiper-button-prev"
                    }
                });
                newSwiper.update();
            } else {
                $productsList.empty().closest(".c-mega-search__result-row").hide();
            }
        };

        var showBrands = function(brand_urls) {
            if (brand_urls.length > 0) {
                var dom = $.map(brand_urls, function(element) {
                    if (isModuleActive('ds_desktop_search_redesign')) {
                        return '<li class="swiper-slide c-mega-search__result-item c-mega-search__result-item--pill js-result-brand">' +
                            '<a href="' + element.url + '" class="c-mega-search__result-item-link c-mega-search__result-item-link--pill c-mega-search__result-item-link--brand">' +
                            (element.logo ? '<img src="' + element.logo + '" alt="' + element.title +'" width="28" height="28"/>':'') +
                            element.title +
                            '</a>' +
                            '</li>';
                    } else {
                        return (
                            '<li class="c-mega-search__result c-mega-search__result--brand">' +
                            '   <a href="' +
                            element.url +
                            '">' +
                            element.title +
                            "   </a>" +
                            "</li>"
                        );
                    }
                });

                $brandsList
                    .empty()
                    .append(dom)
                    .closest(".c-mega-search__result-row")
                    .show();

                if (isModuleActive('ds_desktop_search_redesign')) {
                    var newSwiper = new window.Swiper(".js-swiper-brand-suggestions", {
                        slidesPerView: 'auto',
                        simulateTouch: false,
                        grabCursor: false,
                        loop: false,
                        lazy: {
                            enabled: true
                        },
                        navigation: {
                            nextEl: ".js-swiper-button-next",
                            prevEl: ".js-swiper-button-prev"
                        },
                    });

                    newSwiper.update();
                }
            } else {
                $brandsList
                    .empty()
                    .closest(".c-mega-search__result-row")
                    .hide();
            }
        };

        var showSearchResults = function(search_result) {
            if (search_result.length > 0) {
                var doms = $.map(search_result, function(element) {
                    return (
                        '<li class="c-mega-search__result">' +
                        '   <a href="' +
                        element.url +
                        '">' +
                        '       <span class="c-mega-search__result-query js-mega-search__result-query">' +
                        element.label +
                        "       </span>" +
                        '       <span class="c-mega-search__result-category js-mega-search__result-category">' +
                        element.category_name +
                        "       </span>" +
                        "   </a>" +
                        "</li>"
                    );
                });
                $resultList
                    .empty()
                    .append(doms)
                    .parent()
                    .show();
            } else {
                $resultList.parent().hide();
            }
        };

        var showAdvancedSearchResults = function(advance_links) {
            if (advance_links.length > 0) {
                var doms = $.map(advance_links, function(element) {
                    return (
                        '<li class="c-mega-search__result c-mega-search__result--advanced">' +
                        '   <a href="' +
                        element.url +
                        '">' +
                        '       <span class="c-mega-search__result-query js-mega-search__result-query">' +
                        element.title_prefix +
                        "       </span>" +
                        '       <span class="c-mega-search__result-category js-mega-search__result-category">' +
                        element.title +
                        "       </span>" +
                        "   </a>" +
                        "</li>"
                    );
                });
                $advanceResult
                    .empty()
                    .append(doms)
                    .show()
                    .parent()
                    .show();
            } else {
                $advanceResult.hide();
            }
        };


        var goToSearchPage = function(val) {
            val = val.trim();
            if (!!val && val.length > 0) {
                var url = "/search/?q=" + encodeURIComponent(val);
                var index = getHistoryIndex(val.trim());
                if (index === -1) {
                    self.history.unshift({
                        label: escape(val),
                        url: url
                    });
                    saveHistory();
                }
                window.location = url;
            }
        };

        var getHistoryIndex = function(val) {
            for (var i = 0; i < self.history.length; i++) {
                if (unescape(self.history[i].label) === val) {
                    return i;
                }
            }
            return -1;
        };

        var saveHistory = function() {
            if (window.localStorage) {
                window.localStorage.setItem(
                    "searchHistory",
                    JSON.stringify(self.history)
                );
            }
        };
        var removeHistoryItem = function(val) {
            var index = getHistoryIndex(val.trim());
            if (index > -1) {
                self.history.splice(index, 1);
                saveHistory();
            }
            showHistory(self.history);
        };

        var clearHistory = function() {
            self.history = [];
            saveHistory();
            showHistory(self.history);
        };

        var processResponse = function(data) {
            self.lastSearch = data.query;
            self.lastSearchResponse = data;
            self.lastFocusedItem = -1;

            self.trends = data.trends_result ? data.trends_result : self.trends;

            if (
                data.search_result.length === 0 &&
                data.brand_urls.length === 0
            ) {
                hideResults();
            } else {
                showResults();
                showSearchResults(data.search_result);
                showAdvancedSearchResults(data.advance_links);
                showBrands(data.brand_urls);
                if (isModuleActive('ds_desktop_search_redesign')) {
                    showProducts(data.suggestion_products)
                } else {
                    showTags(data.trends_result);
                }
            }
        };

        var focus = function() {
            if (
                $(this)
                    .val()
                    .trim().length === 0
            ) {
                hideResults();
            }

            if (!!$(this).val() && $(this).val().length) {
                // $searchInput.trigger(jQuery.Event("keyup"));
                return;
            }

            showTrends(self.trends);
            showHistory(self.history);

            ServicesAutoSuggest.ajaxGETRequestJSON(
                "/ajax/autosuggest/",
                {
                    q: ""
                },
                function(data) {
                    if (!!data && "trends_result" in data) {
                        showTrends(data.trends_result);

                        self.trends = data.trends_result;
                    }
                },
                null,
                null,
                null,
                "execute"
            );
        };

        hideResults();

        $(".js-mega-search__trigger").on("click", function() {
            $container.addClass("is-active");
            $searchInput.focus();
        });

        $(".js-mega-search__overlay, .js-mega-search__close").on(
            "click",
            function() {
                $container.removeClass("is-active");
            }
        );

        $(".js-mega-search__clear-history").on("click", function() {
            clearHistory();
        });

        $searchInput.off();

        $searchInput.on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

        $searchResults.on("click", function(e) {
            e.stopPropagation();
        });

        $searchResultsBody.scroll(Services.debounce(function () {
            ga('set', 'nonInteraction', true);
            ga('send', 'event', {
                eventCategory: 'header_section',
                eventAction:'search',
                eventLable: 'scrolling'
            });
        }, 200));

        $searchInput.on("focus click", focus);

        var timeout = null;

        $searchInput.on("keyup", function (e) {
            var key = e.which;

            if (key === esc) return;

            if (key === ent) {
                var val;
                if ((val = $(this).val())) {
                    goToSearchPage(val);
                }

                ga('set', 'nonInteraction', true);
                ga('send', 'event', {
                    eventCategory: 'header_section',
                    eventAction:'search',
                    eventLabel: 'press enter'
                });

            } else {
                var searchInputValue = $(this).val();
                var searchInputValueL = searchInputValue.length;
                $searchKeyword.text(searchInputValue);
                if (searchInputValueL > 1) {
                    if (
                        self.lastSearch === searchInputValue &&
                        !!self.lastSearchResponse
                    )
                        return processResponse(self.lastSearchResponse);

                    $emptyList.hide();

                    if (timeout) clearTimeout(timeout);

                    timeout = setTimeout(function () {
                        ServicesAutoSuggest.ajaxGETRequestJSON(
                            "/ajax/autosuggest/",
                            {
                                q: searchInputValue
                            },
                            processResponse,
                            null,
                            null,
                            null,
                            "execute"
                        );
                    }, 400);
                } else {
                    hideResults();
                }
            }
        });

        $searchInput.on("keydown", function(e) {
            var key = e.which;

            if ([ent].indexOf(key) === -1) return;

            e.preventDefault();
            e.stopPropagation();
        });
    },

    initMegaMenuAmend: function() {

        var $navItem = $('.js-navigatin-item');
        var $navbar = $('.js-supercats-header');
        var allInnerNavbars = $('.js-megamenu-inner-navbar');
        var menuOpen = false;

        $navItem.each(function() {
            var $this = $(this),
                $currentLeft = $this.position().left,
                $halfWidth = $this.outerWidth() / 2,
                $center = Math.round($currentLeft + $halfWidth - 5),
                $upArrow = $this.find('.js-mega-menu-up-arrow');

            var childMenuItem = $this.find('.js-megamenu-tab');
            var innerNavbar = $this.find('.js-megamenu-inner-navbar');

            function showMenu () {
                childMenuItem.removeClass('c-mega-menu__tab--hovered');
                childMenuItem.first().addClass('c-mega-menu__tab--hovered');
                innerNavbar.show();
                $upArrow.addClass('c-mega-menu__up-arrow--visible');
            }
            var timeout;
            $this.hover(function() {
                if(!menuOpen) {
                    timeout = setTimeout(function () {
                        showMenu();
                        menuOpen = true;
                    }, 200);
                } else {
                    showMenu();
                }
            }, function () {
                clearTimeout(timeout);
                innerNavbar.hide();
            });
            childMenuItem.on('mouseenter', function() {
                childMenuItem.removeClass('c-mega-menu__tab--hovered');
                $(this).addClass('c-mega-menu__tab--hovered');
            });

            $this.on('mouseleave', function() {
                var $upArrow = $this.find('.js-mega-menu-up-arrow');
                $upArrow.removeClass('c-mega-menu__up-arrow--visible');
            });
        });

        $navbar.on('mouseleave', function () {
            allInnerNavbars.hide();
            menuOpen = false;
        });

        $('.js-mega-menu-ga-trigger').on('click', function () {
            var catName = $(this).data('cat-name');
            ga('set', 'nonInteraction', true);
            ga('send', 'event', {
                eventCategory: 'Ecommerce',
                eventAction:'Click on Mehamnenu',
                eventLabel: catName
            });
        });
    },

    initGeneralLoadingModal: function() {
        window.DKLoading = {
            start: function() {
                $("[data-remodal-id=loader]")
                    .remodal()
                    .open();
            },
            finish: function() {
                $("[data-remodal-id=loader]")
                    .remodal()
                    .close();
            }
        };
    },

    initXtremePushAdro: function() {
        if (
            !window.emarsysCategoryBreadcrumb ||
            typeof window.emarsysCategoryBreadcrumb == "undefined"
        ) {
            return;
        }
        var breadCrums = window.emarsysCategoryBreadcrumb.split(" > ");
        var date = new Date(Date.now()).toUTCString();
        try {
            if (typeof ecpd2 !== "undefined") {
                if (breadCrums[1]) {
                    adro("tag", "category.main." + breadCrums[1], date);
                }
                if (breadCrums[2]) {
                    adro("tag", "category.second." + breadCrums[2], date);
                }
                if (breadCrums[3]) {
                    adro("tag", "category.second." + breadCrums[3], date);
                }
                adro(
                    "tag",
                    "category.fourth." + window.ecpd2.category.title,
                    date
                );
            } else {
                if (breadCrums[0]) {
                    adro("tag", "category.main." + breadCrums[0], date);
                }
                if (breadCrums[1]) {
                    adro("tag", "category.second." + breadCrums[1], date);
                }
                if (breadCrums[2]) {
                    adro("tag", "category.second." + breadCrums[2], date);
                }
                if (breadCrums[3]) {
                    adro("tag", "category.second." + breadCrums[3], date);
                }
            }
        } catch (e) {
            // unable to send xtremepush event
        }
    },

    initTracker: function() {
        var gaEvent = {
            hitType: "event",
            eventCategory: "",
            eventAction: "",
            eventLabel: ""
        };

        $(".js-tracker-footer").on("click", function() {
            gaEvent.eventCategory = "footer_section";
            gaEvent.eventAction = "footer_links";
            if ($(this).hasClass("js-tracker-footer_inner_link")) {
                gaEvent.eventLabel =
                    "link: " +
                    $(this).attr("href") +
                    " - current-page: " +
                    document.location.pathname;
            }
            if ($(this).hasClass("js-tracker-footer_download_app")) {
                gaEvent.eventLabel =
                    "link: downloading application - current-page: " +
                    document.location.pathname;
            }
            if ($(this).hasClass("js-tracker-footer_social_media")) {
                gaEvent.eventLabel =
                    "link: " +
                    $(this).attr("href") +
                    " - current-page: " +
                    document.location.pathname;
            }

            try {
                ga("send", gaEvent);
            } catch (e) {
            }
        });

        $(document).on("click", ".js-sale-page-ga", function () {
            var eventLabel = $(this).data("title");
            var eventAction = $(this).data("action");
            try {
                ga('set', 'nonInteraction', true);
                ga('send', 'event', {
                    eventCategory: 'sale landing',
                    eventAction:eventAction,
                    eventLabel: eventLabel
                });
            } catch (e) {
            }
        });
    },

    initSNTracker: function() {
        // SnTracker.trackers.PageViewTracking(); page view is tracking in from sntracker.js
        window.SnTracker.trackers.UTMTracking();

        window.snt = window.snt || function() {};
        var $w = $(window);
        var banners = $(
            ".c-adplacement__item:not(.js-no-track), .js-snt-banner-brand, .js-ds-dkms_adplacement"
        );

        var bannerClickHandler = function() {
            snt(
                "dkBannerClicked",
                {
                    bannerId: $(this).data("id"),
                    url: $(this)
                        .closest("a")
                        .attr("href")
                },
                $(this)
                    .closest("a")
                    .attr("target") === "_blank"
            );
        };

        banners.on("click", bannerClickHandler);
        $(".js-main-page-slider-image").on("click", bannerClickHandler);

        $w.scroll(function() {
            (function($w) {
                var inview = banners.filter(function() {
                    var $e = $(this);
                    if ($e.is(":hidden")) return;
                    var wt = $w.scrollTop(),
                        wb = wt + $w.height(),
                        et = $e.offset().top,
                        eb = et + $e.height();
                    return eb >= wt - 5 && et <= wb + 5;
                });
                inview.each(function() {
                    if ($(this).data("id")) {
                        snt("dkBannerViewed", {
                            bannerId: $(this).data("id"),
                            created_at: Date.now()
                        });
                    }
                });
                banners = banners.not(inview);
            }.bind(this, $w)());
        }).scroll();
    },

    initInputLabels: function() {
        $(".js-text-input").on("input", function() {
            if ($(this).val()) {
                $(this).addClass("filled");
            } else {
                $(this).removeClass("filled");
            }
        });
    },

    initGoogleAnalyticsEvents: function() {
        this.settingUserIdGoogleAnalytics();
        $("[data-event]").on("click", function (e) {
            e.stopPropagation();
            var event = $(this).data("event");
            var eventCategory = $(this).data("event-category");
            var eventLabel = $(this).data("event-label");
            var eventValue = $(this).data("event-value");

            Main.sendGoogleAnalyticEvent(
                event,
                eventCategory,
                eventLabel,
                eventValue
            );
        });
    },

    initDropdownMenus: function () {
        $('.js-user-profile-dropdown').on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            $('.js-mini-cart-tooltip').removeClass('c-tooltip-detailed--open');

            if ($(this).hasClass('open')){
                $(this).removeClass('open');
                $('.js-user-profile-dropdown-menu').addClass('u-hidden');
            }else{
                $(this).addClass('open');
                $('.js-user-profile-dropdown-menu').removeClass('u-hidden');
            }
        });

        $('.js-user-profile-dropdown-menu').on('click', function(e) {
            e.stopPropagation();
        });

        $(document).click(function () {
            $('.js-user-profile-dropdown-menu').addClass('u-hidden');
            $('.js-user-profile-dropdown').removeClass('open');
        });

    },

    settingUserIdGoogleAnalytics: function() {
        window.userId = $("#ESILogged").data("user_id") || null;
    },

    sendGoogleAnalyticEvent: function (
        event,
        eventCategory,
        eventLabel,
        eventValue
    ) {
        var data = {};

        if (eventCategory) {
            data["event_category"] = eventCategory;
        }

        if (eventLabel) {
            data["event_label"] = eventLabel;
        }

        if (eventValue) {
            data["value"] = eventValue;
        }

        gtag("event", event, data);
    },

    setImpressionEventOnAjax: function(dataLayerData) {
        try {
            dataLayerData = JSON.parse(dataLayerData);

            if(Services.isObject(dataLayerData)) {
                window.dataLayer.push(dataLayerData);
            } else {
                dataLayerData.forEach(function(eventItem) {
                    window.dataLayer.push(eventItem);
                });
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    },

    initGAPromotionsImpressions: function() {

        setTimeout(setImpressions, 0);

        function setImpressions() {
            var $promotions = $('[href*="promo_name"]'),
                promotionList = [];

            if (!$promotions || $promotions.length === 0) return false;

            if($promotions.length > 1) {
                $promotions.each(function() {
                    var queryParams = Services.getQueryString($(this).attr('href')),
                        queryObject = Services.parseQueryString(queryParams);

                    promotionList.push(createImpressionObj(queryObject));
                });
            } else {
                promotionList.push(
                    createImpressionObj(
                        Services.parseQueryString(
                            Services.getQueryString($promotions.first().attr('href'))
                        )
                    )
                );
            }

            window.dataLayer.push({
                'event': 'eec.promoView',
                'ecommerce': {
                    'promoView': {
                        'promotions': promotionList
                    }
                }
            });
        }

        $(document).on('click', '[href*="promo_name"]', function () {
            var queryParams = Services.getQueryString($(this).attr('href')),
                queryObject = Services.parseQueryString(queryParams);

            pushClickImpressionToDataLayer(queryObject);
        });

        $(document).on('click', '.js-banner-promo-impression-object', function () {
            var promo_name = $(this).data('promo_name');
            var promo_position = $(this).data('promo_position');

            var queryObject = {
                promo_name: promo_name,
                promo_position: promo_position,
            };

            pushClickImpressionToDataLayer(queryObject);
        });

        function createImpressionObj(queryObject) {
            return {
                "id": queryObject.promo_creative || "not specified",
                "name": queryObject.promo_name || "not specified",
                // 'creative': queryObject.promo_creative || 'not specified',
                "position": queryObject.promo_position || "not specified",
                "dimension1": queryObject.promo_index || "not specified",
            }
        }

        function pushClickImpressionToDataLayer(queryObject) {
            var promotionClickObject = {
                'event': 'eec.promoClick',
                'ecommerce': {
                    'promoClick': {
                        'promotions': [createImpressionObj(queryObject)]
                    }
                }
            };

            window.dataLayer.push(promotionClickObject);
        }
    },

    initFooter: function() {
        $("#js-jump-to-top").on("click", function (e) {
            e.preventDefault();
            $("html,body").scrollTop(0);
        });
    },

    initGoBack: function () {
        $('.js-back').on('click', function (e) {
            if (!$(this).attr('href')) {
                e.preventDefault();
                window.history.back();
            }
        })
    },

    initInvalidItems: function () {
        if($('[data-remodal-id="invalid-items-modal"]').length > 0) {
            $('[data-remodal-id="invalid-items-modal"]').remodal().open();
        }
        $('.js-modal-reload').on('click', function (e) {
            e.preventDefault();
            Services.ajaxPOSTRequestJSON(
                "/ajax/shipping/remove/invalid/items/",
                { item_ids : invalidItems },
                function(response) {
                    $('[data-remodal-id="invalid-items-modal"]').remodal().close();
                },
                function(response) {
                    console.log(response);
                }
            );
        });
    },

    copyToClipboard: function(text, appendHook) {
        var aux = $(document.createElement("textarea"));
        aux.addClass("u-hidden-visually");
        aux.text(text);
        aux.attr("contenteditable", true); //IOS compatibility
        aux.attr("readonly", true); //IOS compatibility
        appendHook.append(aux);
        aux[0].focus();
        aux[0].setSelectionRange(0, 999999); //IOS compatibility
        document.execCommand("copy");
        aux.remove();
    },

    initIntrack: function () {

        const credentials = {
            demo: {
                app_key: 'AAAAEQ',
                auth_key: '98cfca93-357c-4cb0-a6b9-dc17fb3105a2',
                public_key: 'BDk8tQ7FjHMFsumMbpr8DgGkk2NJ2tR4ZTbMyfnK5Iw-2YGX9wD_OVeCy1mViy1LHK657Y9kb15o9JUKxr3Wnlc=',
                yektanet_syncing: true, //<-- sync intrack user id with yektaNet
                mediaad_syncing: true, //<-- sync intrack user id with mediaAD
            },
            production: {
                app_key: 'AAAAAw',
                auth_key: 'a3c51fef-e3c1-4578-8e9d-1566d10849d9',
                public_key: 'BMOOu-LJaSD3jZGpKX8jefvm2HuYsqrMusdoGZCyzs1ATPbXr8x2d0U7GYjL3D23eZ_ovDYwE3HApzOCP4mxgEo',
                yektanet_syncing: true, //<-- sync intrack user id with yektaNet
                mediaad_syncing: true, //<-- sync intrack user id with mediaAD
            }
        };
        const isInProduction = $('.js-layout-main-content').attr('data-is-production-mode');
        try {
            window.InTrack.init(isInProduction ? credentials.production : credentials.demo);
            var $intrackDataContainer = $(".js-intrack-data-container");
            var userData = {
                firstName: $intrackDataContainer.data("first-name"),
                lastName: $intrackDataContainer.data("last-name"),
                email: $intrackDataContainer.data("email"),
                phone: $intrackDataContainer.data("phone"),
                userId: $intrackDataContainer.data("user-id"),
            };
            window.InTrack.login(userData);
            // window.InTrack.InitWebPush();
        } catch (e) {
            //TODO: create error handling here
        }
    },
};

$(function() {
    Main.init();
});



/*[PATH @digikala/supernova-digistyle-desktop/assets/local/js/patternLib/toast.js]*/
var toastComponentAction = {
    init: function() {
        var functions = [this.initToast, this.initToastShowOnLoad];

        var self = this;

        $(functions).map(function(index, item) {
            item = item.bind(self);
            try {
                item();
            } catch (e) {
                console.log("Error: ", e);
            }
        });
    },
    initToast: function() {
        var toast = $('.js-cp-toast').eq(0);
        var toastContainer = $('.js-toast-container');
        var allToasts = [];
        var self = this;

        window.cpToast = function (message, xPosition, yPosition) {
            toastContainer.removeClass (function (index, className) {
                return (className.match (/(^|\s)cp-toast-container--\S+/g) || []).join(' ');
            });
            toastContainer.addClass('cp-toast-container--' + xPosition).addClass('cp-toast-container--' + yPosition);

            var newToast = toast.clone();
            allToasts.push(newToast);
            newToast.appendTo('.js-toast-container').addClass('cp-toast--show');
            message = message || 'مشکلی پیش آمده است!';

            var textContainer = $(newToast).find('.js-toast-text').eq(0);
            textContainer.text(message);

            newToast.show();

            setTimeout(function () {
                allToasts[0].addClass('cp-toast--faded');
                var fadedToast = allToasts.splice(0,1);
                setTimeout(function () {
                    fadedToast[0].removeClass('cp-toast--show');
                    setTimeout(function () {
                        fadedToast[0].remove();
                    },500)
                },500);
            }, 5000);

        };
    },

    initToastShowOnLoad: function() {
        if ($('.js-toast-content').length > 0) {
            $(window).on('load', function(){
                var $content = $('.js-toast-content'),
                    toastContent = $content.text(),
                    xPosition = $content.data("xposition"),
                    yPosition = $content.data("yposition");

                if (!!toastContent) {
                    window.cpToast(toastContent, "center", "center");
                }
            });
        }
    }
};

$(function() {
    toastComponentAction.init();
});