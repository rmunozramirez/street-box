/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*! jQuery UI - v1.10.4 - 2014-03-05
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.datepicker.js, jquery.ui.slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){e.datepicker._isDisabledDatepicker(n.inline?t.parent()[0]:n.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))})}function s(t,i){e.extend(t,i);for(var a in i)null==i[a]&&(t[a]=i[a]);return t}e.extend(e.ui,{datepicker:{version:"1.10.4"}});var n,r="datepicker";e.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return s(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var a,s,n;a=t.nodeName.toLowerCase(),s="div"===a||"span"===a,t.id||(this.uuid+=1,t.id="dp"+this.uuid),n=this._newInst(e(t),s),n.settings=e.extend({},i||{}),"input"===a?this._connectDatepicker(t,n):s&&this._inlineDatepicker(t,n)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var a=e(t);i.append=e([]),i.trigger=e([]),a.hasClass(this.markerClassName)||(this._attachments(a,i),a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,r,i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var a,s,n,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=e("<span class='"+this._appendClass+"'>"+r+"</span>"),t[o?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),a=this._get(i,"showOn"),("focus"===a||"both"===a)&&t.focus(this._showDatepicker),("button"===a||"both"===a)&&(s=this._get(i,"buttonText"),n=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:n,alt:s,title:s}):e("<button type='button'></button>").addClass(this._triggerClass).html(n?e("<img/>").attr({src:n,alt:s,title:s}):s)),t[o?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,a,s,n=new Date(2009,11,20),r=this._get(e,"dateFormat");r.match(/[DM]/)&&(t=function(e){for(i=0,a=0,s=0;e.length>s;s++)e[s].length>i&&(i=e[s].length,a=s);return a},n.setMonth(t(this._get(e,r.match(/MM/)?"monthNames":"monthNamesShort"))),n.setDate(t(this._get(e,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-n.getDay())),e.input.attr("size",this._formatDate(e,n).length)}},_inlineDatepicker:function(t,i){var a=e(t);a.hasClass(this.markerClassName)||(a.addClass(this.markerClassName).append(i.dpDiv),e.data(t,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,a,n,o){var u,c,h,l,d,p=this._dialogInst;return p||(this.uuid+=1,u="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+u+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],r,p)),s(p.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(c=document.documentElement.clientWidth,h=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[c/2-100+l,h/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=a,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(t){var i,a=e(t),s=e.data(t,r);a.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,r),"input"===i?(s.append.remove(),s.trigger.remove(),a.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&a.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,a,n){var r,o,u,c,h=this._getInst(i);return 2===arguments.length&&"string"==typeof a?"defaults"===a?e.extend({},e.datepicker._defaults):h?"all"===a?e.extend({},h.settings):this._get(h,a):null:(r=a||{},"string"==typeof a&&(r={},r[a]=n),h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),u=this._getMinMaxDate(h,"min"),c=this._getMinMaxDate(h,"max"),s(h.settings,r),null!==u&&r.dateFormat!==t&&r.minDate===t&&(h.settings.minDate=this._formatDate(h,u)),null!==c&&r.dateFormat!==t&&r.maxDate===t&&(h.settings.maxDate=this._formatDate(h,c)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(e(i),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h)),t)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,a,s,n=e.datepicker._getInst(t.target),r=!0,o=n.dpDiv.is(".ui-datepicker-rtl");if(n._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),r=!1;break;case 13:return s=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",n.dpDiv),s[0]&&e.datepicker._selectDay(t.target,n.selectedMonth,n.selectedYear,s[0]),i=e.datepicker._get(n,"onSelect"),i?(a=e.datepicker._formatDate(n),i.apply(n.input?n.input[0]:null,[a,n])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),r=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),r=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?1:-1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),r=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?-1:1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),r=t.ctrlKey||t.metaKey;break;default:r=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(i){var a,s,n=e.datepicker._getInst(i.target);return e.datepicker._get(n,"constrainInput")?(a=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">s||!a||a.indexOf(s)>-1):t},_doKeyUp:function(t){var i,a=e.datepicker._getInst(t.target);if(a.input.val()!==a.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,e.datepicker._getFormatConfig(a)),i&&(e.datepicker._setDateFromField(a),e.datepicker._updateAlternate(a),e.datepicker._updateDatepicker(a))}catch(s){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,a,n,r,o,u,c;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),a=e.datepicker._get(i,"beforeShow"),n=a?a.apply(t,[t,i]):{},n!==!1&&(s(i.settings,n),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),r=!1,e(t).parents().each(function(){return r|="fixed"===e(this).css("position"),!r}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),o=e.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(u=e.datepicker._get(i,"showAnim"),c=e.datepicker._get(i,"duration"),i.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[u]?i.dpDiv.show(u,e.datepicker._get(i,"showOptions"),c):i.dpDiv[u||"show"](u?c:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,n=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,a=this._getNumberOfMonths(t),s=a[1],r=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",r*s+"em"),t.dpDiv[(1!==a[0]||1!==a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,a){var s=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),r=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,u=document.documentElement.clientWidth+(a?0:e(document).scrollLeft()),c=document.documentElement.clientHeight+(a?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?s-r:0,i.left-=a&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=a&&i.top===t.input.offset().top+o?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>u&&u>s?Math.abs(i.left+s-u):0),i.top-=Math.min(i.top,i.top+n>c&&c>n?Math.abs(n+o):0),i},_findPos:function(t){for(var i,a=this._getInst(t),s=this._get(a,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[s?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,a,s,n,o=this._curInst;!o||t&&o!==e.data(t,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),a=this._get(o,"duration"),s=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),a,s):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?a:null,s),i||s(),this._datepickerShowing=!1,n=this._get(o,"onClose"),n&&n.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),a=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==a)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,a){var s=e(t),n=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(n,i+("M"===a?this._get(n,"showCurrentAtPos"):0),a),this._updateDatepicker(n))},_gotoToday:function(t){var i,a=e(t),s=this._getInst(a[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(a)},_selectMonthYear:function(t,i,a){var s=e(t),n=this._getInst(s[0]);n["selected"+("M"===a?"Month":"Year")]=n["draw"+("M"===a?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(n),this._adjustDate(s)},_selectDay:function(t,i,a,s){var n,r=e(t);e(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(n=this._getInst(r[0]),n.selectedDay=n.currentDay=e("a",s).html(),n.selectedMonth=n.currentMonth=i,n.selectedYear=n.currentYear=a,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var a,s=e(t),n=this._getInst(s[0]);i=null!=i?i:this._formatDate(n),n.input&&n.input.val(i),this._updateAlternate(n),a=this._get(n,"onSelect"),a?a.apply(n.input?n.input[0]:null,[i,n]):n.input&&n.input.trigger("change"),n.inline?this._updateDatepicker(n):(this._hideDatepicker(),this._lastInput=n.input[0],"object"!=typeof n.input[0]&&n.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,a,s,n=this._get(t,"altField");n&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),a=this._getDate(t),s=this.formatDate(i,a,this._getFormatConfig(t)),e(n).each(function(){e(this).val(s)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(i,a,s){if(null==i||null==a)throw"Invalid arguments";if(a="object"==typeof a?""+a:a+"",""===a)return null;var n,r,o,u,c=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,l="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,p=(s?s.dayNames:null)||this._defaults.dayNames,g=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,m=(s?s.monthNames:null)||this._defaults.monthNames,f=-1,_=-1,v=-1,k=-1,y=!1,b=function(e){var t=i.length>n+1&&i.charAt(n+1)===e;return t&&n++,t},D=function(e){var t=b(e),i="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,s=RegExp("^\\d{1,"+i+"}"),n=a.substring(c).match(s);if(!n)throw"Missing number at position "+c;return c+=n[0].length,parseInt(n[0],10)},w=function(i,s,n){var r=-1,o=e.map(b(i)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,i){var s=i[1];return a.substr(c,s.length).toLowerCase()===s.toLowerCase()?(r=i[0],c+=s.length,!1):t}),-1!==r)return r+1;throw"Unknown name at position "+c},M=function(){if(a.charAt(c)!==i.charAt(n))throw"Unexpected literal at position "+c;c++};for(n=0;i.length>n;n++)if(y)"'"!==i.charAt(n)||b("'")?M():y=!1;else switch(i.charAt(n)){case"d":v=D("d");break;case"D":w("D",d,p);break;case"o":k=D("o");break;case"m":_=D("m");break;case"M":_=w("M",g,m);break;case"y":f=D("y");break;case"@":u=new Date(D("@")),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"!":u=new Date((D("!")-this._ticksTo1970)/1e4),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"'":b("'")?M():y=!0;break;default:M()}if(a.length>c&&(o=a.substr(c),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===f?f=(new Date).getFullYear():100>f&&(f+=(new Date).getFullYear()-(new Date).getFullYear()%100+(l>=f?0:-100)),k>-1)for(_=1,v=k;;){if(r=this._getDaysInMonth(f,_-1),r>=v)break;_++,v-=r}if(u=this._daylightSavingAdjust(new Date(f,_-1,v)),u.getFullYear()!==f||u.getMonth()+1!==_||u.getDate()!==v)throw"Invalid date";return u},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var a,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,u=function(t){var i=e.length>a+1&&e.charAt(a+1)===t;return i&&a++,i},c=function(e,t,i){var a=""+t;if(u(e))for(;i>a.length;)a="0"+a;return a},h=function(e,t,i,a){return u(e)?a[t]:i[t]},l="",d=!1;if(t)for(a=0;e.length>a;a++)if(d)"'"!==e.charAt(a)||u("'")?l+=e.charAt(a):d=!1;else switch(e.charAt(a)){case"d":l+=c("d",t.getDate(),2);break;case"D":l+=h("D",t.getDay(),s,n);break;case"o":l+=c("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=c("m",t.getMonth()+1,2);break;case"M":l+=h("M",t.getMonth(),r,o);break;case"y":l+=u("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=1e4*t.getTime()+this._ticksTo1970;break;case"'":u("'")?l+="'":d=!0;break;default:l+=e.charAt(a)}return l},_possibleChars:function(e){var t,i="",a=!1,s=function(i){var a=e.length>t+1&&e.charAt(t+1)===i;return a&&t++,a};for(t=0;e.length>t;t++)if(a)"'"!==e.charAt(t)||s("'")?i+=e.charAt(t):a=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":a=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,i){return e.settings[i]!==t?e.settings[i]:this._defaults[i]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),a=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),n=s,r=this._getFormatConfig(e);try{n=this.parseDate(i,a,r)||s}catch(o){a=t?"":a}e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),e.currentDay=a?n.getDate():0,e.currentMonth=a?n.getMonth():0,e.currentYear=a?n.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,a){var s=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},n=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(a){}for(var s=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,n=s.getFullYear(),r=s.getMonth(),o=s.getDate(),u=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,c=u.exec(i);c;){switch(c[2]||"d"){case"d":case"D":o+=parseInt(c[1],10);break;case"w":case"W":o+=7*parseInt(c[1],10);break;case"m":case"M":r+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r));break;case"y":case"Y":n+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r))}c=u.exec(i)}return new Date(n,r,o)},r=null==i||""===i?a:"string"==typeof i?n(i):"number"==typeof i?isNaN(i)?a:s(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?a:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var a=!t,s=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),s===e.selectedMonth&&n===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(a?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),a="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(a,-i,"M")},next:function(){e.datepicker._adjustDate(a,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(a)},selectDay:function(){return e.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(a,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(a,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,a,s,n,r,o,u,c,h,l,d,p,g,m,f,_,v,k,y,b,D,w,M,C,x,I,N,T,A,E,S,Y,F,P,O,j,K,R,H=new Date,W=this._daylightSavingAdjust(new Date(H.getFullYear(),H.getMonth(),H.getDate())),L=this._get(e,"isRTL"),U=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),z=this._get(e,"navigationAsDateFormat"),q=this._getNumberOfMonths(e),G=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),Q=1!==q[0]||1!==q[1],V=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(e,"min"),X=this._getMinMaxDate(e,"max"),Z=e.drawMonth-G,et=e.drawYear;if(0>Z&&(Z+=12,et--),X)for(t=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-q[0]*q[1]+1,X.getDate())),t=$&&$>t?$:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=z?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):i,a=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>",s=this._get(e,"nextText"),s=z?this.formatDate(s,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):s,n=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>",r=this._get(e,"currentText"),o=this._get(e,"gotoCurrent")&&e.currentDay?V:W,r=z?this.formatDate(r,o,this._getFormatConfig(e)):r,u=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",c=U?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(L?u:"")+(this._isInRange(e,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(L?"":u)+"</div>":"",h=parseInt(this._get(e,"firstDay"),10),h=isNaN(h)?0:h,l=this._get(e,"showWeek"),d=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),g=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),f=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),v=this._get(e,"selectOtherMonths"),k=this._getDefaultDate(e),y="",D=0;q[0]>D;D++){for(w="",this.maxRows=4,M=0;q[1]>M;M++){if(C=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),x=" ui-corner-all",I="",Q){if(I+="<div class='ui-datepicker-group",q[1]>1)switch(M){case 0:I+=" ui-datepicker-group-first",x=" ui-corner-"+(L?"right":"left");break;case q[1]-1:I+=" ui-datepicker-group-last",x=" ui-corner-"+(L?"left":"right");break;default:I+=" ui-datepicker-group-middle",x=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+x+"'>"+(/all|left/.test(x)&&0===D?L?n:a:"")+(/all|right/.test(x)&&0===D?L?a:n:"")+this._generateMonthYearHeader(e,Z,et,$,X,D>0||M>0,g,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",N=l?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",b=0;7>b;b++)T=(b+h)%7,N+="<th"+((b+h+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[T]+"'>"+p[T]+"</span></th>";for(I+=N+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),E=(this._getFirstDayOfMonth(et,Z)-h+7)%7,S=Math.ceil((E+A)/7),Y=Q?this.maxRows>S?this.maxRows:S:S,this.maxRows=Y,F=this._daylightSavingAdjust(new Date(et,Z,1-E)),P=0;Y>P;P++){for(I+="<tr>",O=l?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(F)+"</td>":"",b=0;7>b;b++)j=f?f.apply(e.input?e.input[0]:null,[F]):[!0,""],K=F.getMonth()!==Z,R=K&&!v||!j[0]||$&&$>F||X&&F>X,O+="<td class='"+((b+h+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(F.getTime()===C.getTime()&&Z===e.selectedMonth&&e._keyEvent||k.getTime()===F.getTime()&&k.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!_?"":" "+j[1]+(F.getTime()===V.getTime()?" "+this._currentClass:"")+(F.getTime()===W.getTime()?" ui-datepicker-today":""))+"'"+(K&&!_||!j[2]?"":" title='"+j[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+F.getMonth()+"' data-year='"+F.getFullYear()+"'")+">"+(K&&!_?"&#xa0;":R?"<span class='ui-state-default'>"+F.getDate()+"</span>":"<a class='ui-state-default"+(F.getTime()===W.getTime()?" ui-state-highlight":"")+(F.getTime()===V.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+"' href='#'>"+F.getDate()+"</a>")+"</td>",F.setDate(F.getDate()+1),F=this._daylightSavingAdjust(F);I+=O+"</tr>"}Z++,Z>11&&(Z=0,et++),I+="</tbody></table>"+(Q?"</div>"+(q[0]>0&&M===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=I}y+=w}return y+=c,e._keyEvent=!1,y},_generateMonthYearHeader:function(e,t,i,a,s,n,r,o){var u,c,h,l,d,p,g,m,f=this._get(e,"changeMonth"),_=this._get(e,"changeYear"),v=this._get(e,"showMonthAfterYear"),k="<div class='ui-datepicker-title'>",y="";if(n||!f)y+="<span class='ui-datepicker-month'>"+r[t]+"</span>";else{for(u=a&&a.getFullYear()===i,c=s&&s.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",h=0;12>h;h++)(!u||h>=a.getMonth())&&(!c||s.getMonth()>=h)&&(y+="<option value='"+h+"'"+(h===t?" selected='selected'":"")+">"+o[h]+"</option>");y+="</select>"}if(v||(k+=y+(!n&&f&&_?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!_)k+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(l=this._get(e,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?d+parseInt(e,10):parseInt(e,10);
return isNaN(t)?d:t},g=p(l[0]),m=Math.max(g,p(l[1]||"")),g=a?Math.max(g,a.getFullYear()):g,m=s?Math.min(m,s.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=g;g++)e.yearshtml+="<option value='"+g+"'"+(g===i?" selected='selected'":"")+">"+g+"</option>";e.yearshtml+="</select>",k+=e.yearshtml,e.yearshtml=null}return k+=this._get(e,"yearSuffix"),v&&(k+=(!n&&f&&_?"":"&#xa0;")+y),k+="</div>"},_adjustInstDate:function(e,t,i){var a=e.drawYear+("Y"===i?t:0),s=e.drawMonth+("M"===i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(a,s))+("D"===i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(a,s,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),s=i&&i>t?i:t;return a&&s>a?a:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,a){var s=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,a+(0>t?t:s[0]*s[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i,a,s=this._getMinMaxDate(e,"min"),n=this._getMinMaxDate(e,"max"),r=null,o=null,u=this._get(e,"yearRange");return u&&(i=u.split(":"),a=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=a),i[1].match(/[+\-].*/)&&(o+=a)),(!s||t.getTime()>=s.getTime())&&(!n||t.getTime()<=n.getTime())&&(!r||t.getFullYear()>=r)&&(!o||o>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,a){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(a,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new i,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.4"})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);
/*
* jQuery Form Plugin; v20130711
* http://jquery.malsup.com/form/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
* https://github.com/malsup/form#copyright-and-license
*/
;(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;a.length>i;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;o.length>i;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(100*(a/n))),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var l=s.beforeSend;return s.beforeSend=function(e,t){t.data=n,l&&l.call(this,e,t)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(D),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action");w.setAttribute("target",d),u||w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(k)},m.timeout));var o=[];try{if(m.extraData)for(var l in m.extraData)m.extraData.hasOwnProperty(l)&&(e.isPlainObject(m.extraData[l])&&m.extraData[l].hasOwnProperty("name")&&m.extraData[l].hasOwnProperty("value")?o.push(e('<input type="hidden" name="'+m.extraData[l].name+'">').val(m.extraData[l].value).appendTo(w)[0]):o.push(e('<input type="hidden" name="'+l+'">').val(m.extraData[l]).appendTo(w)[0]));m.iframeTarget||(v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1)),setTimeout(t,15);try{w.submit()}catch(c){var p=document.createElement("form").submit;p.apply(w)}}finally{w.setAttribute("action",i),r?w.setAttribute("target",r):f.removeAttr("target"),e(o).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=D),t===k&&x)return x.abort("timeout"),S.reject(x,"timeout"),void 0;if(t==D&&x)return x.abort("server abort"),S.reject(x,"error","server abort"),void 0;if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),setTimeout(s,250),void 0;var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var l=(m.dataType||"").toLowerCase(),c=/(json|script|text)/.test(l);if(c||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(c){var d=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];d?x.responseText=d.textContent?d.textContent:d.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==l&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{L=_(x,l,m)}catch(b){i="parsererror",x.error=r=b||i}}catch(b){a("error caught: ",b),i="error",x.error=r=b||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&300>x.status||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,L,"success",x),S.resolve(x.responseText,"success",x),p&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),p&&e.event.trigger("ajaxError",[x,m,r])),p&&e.event.trigger("ajaxComplete",[x,m]),p&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget||v.remove(),x.responseXML=null},100)}}}var l,c,m,p,d,v,g,x,b,y,T,j,w=f[0],S=e.Deferred();if(r)for(c=0;h.length>c;c++)l=e(h[c]),i?l.prop("disabled",!1):l.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,d="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),y=v.attr2("name"),y?d=y:v.attr2("name",d)):(v=e('<iframe name="'+d+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),p&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},p=m.global,p&&0===e.active++&&e.event.trigger("ajaxStart"),p&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;b=w.clk,b&&(y=b.name,y&&!b.disabled&&(m.extraData=m.extraData||{},m.extraData[y]=b.value,"image"==b.type&&(m.extraData[y+".x"]=w.clk_x,m.extraData[y+".y"]=w.clk_y)));var k=1,D=2,A=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&A&&(m.extraData=m.extraData||{},m.extraData[E]=A),m.forceSync?o():setTimeout(o,10);var L,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,l,c,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),l=t.url||this.attr2("action"),c="string"==typeof l?e.trim(l):"",c=c||window.location.href||"",c&&(c=(c.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:c,success:e.ajaxSettings.success,type:u||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=t.traditional;void 0===p&&(p=e.ajaxSettings.traditional);var d,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,d=e.param(t.data,p)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,p);d&&(g=g?g+"&"+d:d),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var b=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(b,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var y=t.error;t.error=function(e,r,a){var n=t.context||this;y.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e('input[type=file]:enabled[value!=""]',this),w=j.length>0,S="multipart/form-data",k=f.attr("enctype")==S||f.attr("encoding")==S,D=n.fileapi&&n.formdata;a("fileAPI :"+D);var A,E=(w||k)&&!D;t.iframe!==!1&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||k)&&D?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var L=0;h.length>L;L++)h[L]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i=this[0],o=t?i.getElementsByTagName("*"):i.elements;if(!o)return a;var s,u,l,c,f,m,p;for(s=0,m=o.length;m>s;s++)if(f=o[s],l=f.name,l&&!f.disabled)if(t&&i.clk&&"image"==f.type)i.clk==f&&(a.push({name:l,value:e(f).val(),type:f.type}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}));else if(c=e.fieldValue(f,!0),c&&c.constructor==Array)for(r&&r.push(f),u=0,p=c.length;p>u;u++)a.push({name:l,value:c[u]});else if(n.fileapi&&"file"==f.type){r&&r.push(f);var d=f.files;if(d.length)for(u=0;d.length>u;u++)a.push({name:l,value:d[u],type:f.type});else a.push({name:l,value:"",type:f.type})}else null!==c&&c!==void 0&&(r&&r.push(f),a.push({name:l,value:c,type:f.type,required:f.required}));if(!t&&i.clk){var h=e(i.clk),v=h[0];l=v.name,l&&!v.disabled&&"image"==v.type&&(a.push({name:l,value:h.val()}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&n!==void 0&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,l="select-one"==n,c=l?o+1:u.length,f=l?o:0;c>f;f++){var m=u[f];if(m.selected){var p=m.value;if(p||(p=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),l)return p;s.push(p)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1})(jQuery);
/*! jQuery Validation Plugin - v1.11.0 - 2/4/2013
 https://github.com/jzaefferer/jquery-validation
 Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function($){$.extend($.fn,{validate:function(options){if(!this.length){if(options&&options.debug&&window.console){console.warn("Nothing selected, can't validate, returning nothing.");}return;}var validator=$.data(this[0],"validator");if(validator){return validator;}this.attr("novalidate","novalidate");validator=new $.validator(options,this[0]);$.data(this[0],"validator",validator);if(validator.settings.onsubmit){this.validateDelegate(":submit","click",function(event){if(validator.settings.submitHandler){validator.submitButton=event.target;}if($(event.target).hasClass("cancel")){validator.cancelSubmit=true;}});this.submit(function(event){if(validator.settings.debug){event.preventDefault();}function handle(){var hidden;if(validator.settings.submitHandler){if(validator.submitButton){hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);}validator.settings.submitHandler.call(validator,validator.currentForm,event);if(validator.submitButton){hidden.remove();}return false;}return true;}if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}return handle();}else{validator.focusInvalid();return false;}});}return validator;},valid:function(){if($(this[0]).is("form")){return this.validate().form();}else{var valid=true;var validator=$(this[0].form).validate();this.each(function(){valid&=validator.element(this);});return valid;}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,"validator").settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));staticRules[element.name]=existingRules;if(argument.messages){settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);}break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}var data=$.validator.normalizeRules($.extend({},$.validator.classRules(element),$.validator.attributeRules(element),$.validator.dataRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data);}return data;}});$.extend($.expr[":"],{blank:function(a){return!$.trim(""+a.value);},filled:function(a){return!!$.trim(""+a.value);},unchecked:function(a){return!a.checked;}});$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init();};$.validator.format=function(source,params){if(arguments.length===1){return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};}if(arguments.length>2&&params.constructor!==Array){params=$.makeArray(arguments).slice(1);}if(params.constructor!==Array){params=[params];}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),function(){return n;});});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"invalid",validClass:"valid",errorElement:"em",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(element,event){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);}this.addWrapper(this.errorsFor(element)).hide();}},onfocusout:function(element,event){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element,event){if(event.which===9&&this.elementValue(element)===""){return;}else if(element.name in this.submitted||element===this.lastElement){this.element(element);}},onclick:function(element,event){if(element.name in this.submitted){this.element(element);}else if(element.parentNode.name in this.submitted){this.element(element.parentNode);}},highlight:function(element,errorClass,validClass){if(element.type==="radio"){this.findByName(element.name).addClass(errorClass).removeClass(validClass).parent().addClass('state-error').removeClass('state-success');}else{$(element).addClass(errorClass).removeClass(validClass).parent().addClass('state-error').removeClass('state-success');}},unhighlight:function(element,errorClass,validClass){if(element.type==="radio"){this.findByName(element.name).removeClass(errorClass).addClass(validClass).parent().addClass('state-success').removeClass('state-error');}else{$(element).removeClass(errorClass).addClass(validClass).parent().addClass('state-success').removeClass('state-error');}}},setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required",remote:"Please fix this field",email:"Please enter a valid email address",url:"Please enter a valid URL",date:"Please enter a valid date",dateISO:"Please enter a valid date (ISO)",number:"Please enter a valid number",digits:"Please enter only digits",creditcard:"Please enter a valid credit card number",equalTo:"Please enter the same value again",maxlength:$.validator.format("Please enter no more than {0} characters"),minlength:$.validator.format("Please enter at least {0} characters"),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long"),range:$.validator.format("Please enter a value between {0} and {1}"),max:$.validator.format("Please enter a value less than or equal to {0}"),min:$.validator.format("Please enter a value greater than or equal to {0}")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=(this.groups={});$.each(this.settings.groups,function(key,value){if(typeof value==="string"){value=value.split(/\s/);}$.each(value,function(index,name){groups[name]=key;});});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator"),eventType="on"+event.type.replace(/^validate/,"");if(validator.settings[eventType]){validator.settings[eventType].call(validator,this[0],event);}}$(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, "+"[type='number'], [type='search'] ,[type='tel'], [type='url'], "+"[type='email'], [type='datetime'], [type='date'], [type='month'], "+"[type='week'], [type='time'], [type='datetime-local'], "+"[type='range'], [type='color'] ","focusin focusout keyup",delegate).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",delegate);if(this.settings.invalidHandler){$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);}},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid()){$(this.currentForm).triggerHandler("invalid-form",[this]);}this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=(this.currentElements=this.elements());elements[i];i++){this.check(elements[i]);}return this.valid();},element:function(element){element=this.validationTargetFor(this.clean(element));this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element)!==false;if(result){delete this.invalid[element.name];}else{this.invalid[element.name]=true;}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers);}this.showErrors();return result;},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList);}else{this.defaultShowErrors();}},resetForm:function(){if($.fn.resetForm){$(this.currentForm).resetForm();}this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass).removeData("previousValue");},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){var count=0;for(var i in obj){count++;}return count;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return this.size()===0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name===lastActive.name;}).length===1&&lastActive;},elements:function(){var validator=this,rulesCache={};return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&validator.settings.debug&&window.console){console.error("%o has no name assigned",this);}if(this.name in rulesCache||!validator.objectLength($(this).rules())){return false;}rulesCache[this.name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){var errorClass=this.settings.errorClass.replace(" ",".");return $(this.settings.errorElement+"."+errorClass,this.errorContext);},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},elementValue:function(element){var type=$(element).attr("type"),val=$(element).val();if(type==="radio"||type==="checkbox"){return $("input[name='"+$(element).attr("name")+"']:checked").val();}if(typeof val==="string"){return val.replace(/\r/g,"");}return val;},check:function(element){element=this.validationTargetFor(this.clean(element));var rules=$(element).rules();var dependencyMismatch=false;var val=this.elementValue(element);var result;for(var method in rules){var rule={method:method,parameters:rules[method]};try{result=$.validator.methods[method].call(this,val,element,rule.parameters);if(result==="dependency-mismatch"){dependencyMismatch=true;continue;}dependencyMismatch=false;if(result==="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){if(this.settings.debug&&window.console){console.log("Exception occured when checking element "+element.id+", check the '"+rule.method+"' method.",e);}throw e;}}if(dependencyMismatch){return;}if(this.objectLength(rules)){this.successList.push(element);}return true;},customDataMessage:function(element,method){return $(element).data("msg-"+method.toLowerCase())||(element.attributes&&$(element).attr("data-msg-"+method.toLowerCase()));},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor===String?m:m[method]);},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined){return arguments[i];}}return undefined;},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customDataMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message==="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=$.validator.format(message.replace(theregex,"{$1}"),rule.parameters);}this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper){toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));}return toToggle;},defaultShowErrors:function(){var i,elements;for(i=0;this.errorList[i];i++){var error=this.errorList[i];if(this.settings.highlight){this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);}this.showLabel(error.element,error.message);}if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}if(this.settings.success){for(i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}if(this.settings.unhighlight){for(i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass(this.settings.validClass).addClass(this.settings.errorClass);label.html(message);}else{label=$("<"+this.settings.errorElement+">").attr("for",this.idOrName(element)).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}if(!this.labelContainer.append(label).length){if(this.settings.errorPlacement){this.settings.errorPlacement(label,$(element));}else{label.insertAfter(element);}}}if(!message&&this.settings.success){label.text("");if(typeof this.settings.success==="string"){label.addClass(this.settings.success);}else{this.settings.success(label,element);}}this.toShow=this.toShow.add(label);},errorsFor:function(element){var name=this.idOrName(element);return this.errors().filter(function(){return $(this).attr("for")===name;});},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},validationTargetFor:function(element){if(this.checkable(element)){element=this.findByName(element.name).not(this.settings.ignore)[0];}return element;},checkable:function(element){return(/radio|checkbox/i).test(element.type);},findByName:function(name){return $(this.currentForm).find("[name='"+name+"']");},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case"select":return $("option:selected",element).length;case"input":if(this.checkable(element)){return this.findByName(element.name).filter(":checked").length;}}return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param,element){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){var val=this.elementValue(element);return!$.validator.methods.required.call(this,val,element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0){this.pendingRequest=0;}delete this.pending[element.name];if(valid&&this.pendingRequest===0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false;}else if(!valid&&this.pendingRequest===0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){if(className.constructor===String){this.classRuleSettings[className]=rules;}else{$.extend(this.classRuleSettings,className);}},classRules:function(element){var rules={};var classes=$(element).attr("class");if(classes){$.each(classes.split(" "),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});}return rules;},attributeRules:function(element){var rules={};var $element=$(element);for(var method in $.validator.methods){var value;if(method==="required"){value=$element.get(0).getAttribute(method);if(value===""){value=true;}value=!!value;}else{value=$element.attr(method);}if(value){rules[method]=value;}else if($element[0].getAttribute("type")===method){rules[method]=true;}}if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}return rules;},dataRules:function(element){var method,value,rules={},$element=$(element);for(method in $.validator.methods){value=$element.data("rule-"+method.toLowerCase());if(value!==undefined){rules[method]=value;}}return rules;},staticRules:function(element){var rules={};var validator=$.data(element.form,"validator");if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}return rules;},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return;}if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});$.each(['minlength','maxlength'],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(['rangelength'],function(){var parts;if(rules[this]){if($.isArray(rules[this])){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}else if(typeof rules[this]==="string"){parts=rules[this].split(/[\s,]+/);rules[this]=[Number(parts[0]),Number(parts[1])];}}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}return rules;},normalizeRule:function(data){if(typeof data==="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}return data;},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!==undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{required:function(value,element,param){if(!this.depend(param,element)){return"dependency-mismatch";}if(element.nodeName.toLowerCase()==="select"){var val=$(element).val();return val&&val.length>0;}if(this.checkable(element)){return this.getLength(value,element)>0;}return $.trim(value).length>0;},remote:function(value,element,param){if(this.optional(element)){return"dependency-mismatch";}var previous=this.previousValue(element);if(!this.settings.messages[element.name]){this.settings.messages[element.name]={};}previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param==="string"&&{url:param}||param;if(previous.old===value){return previous.valid;}previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true||response==="true";if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);delete validator.invalid[element.name];validator.showErrors();}else{var errors={};var message=response||validator.defaultMessage(element,"remote");errors[element.name]=previous.message=$.isFunction(message)?message(value):message;validator.invalid[element.name]=true;validator.showErrors(errors);}previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";},minlength:function(value,element,param){var length=$.isArray(value)?value.length:this.getLength($.trim(value),element);return this.optional(element)||length>=param;},maxlength:function(value,element,param){var length=$.isArray(value)?value.length:this.getLength($.trim(value),element);return this.optional(element)||length<=param;},rangelength:function(value,element,param){var length=$.isArray(value)?value.length:this.getLength($.trim(value),element);return this.optional(element)||(length>=param[0]&&length<=param[1]);},min:function(value,element,param){return this.optional(element)||value>=param;},max:function(value,element,param){return this.optional(element)||value<=param;},range:function(value,element,param){return this.optional(element)||(value>=param[0]&&value<=param[1]);},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);},url:function(value,element){return this.optional(element)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value).toString());},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},creditcard:function(value,element){if(this.optional(element)){return"dependency-mismatch";}if(/[^0-9 \-]+/.test(value)){return false;}var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(var n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9){nDigit-=9;}}nCheck+=nDigit;bEven=!bEven;}return(nCheck%10)===0;},equalTo:function(value,element,param){var target=$(param);if(this.settings.onfocusout){target.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid();});}return value===target.val();}}});$.format=$.validator.format;}(jQuery));(function($){var pendingRequests={};if($.ajaxPrefilter){$.ajaxPrefilter(function(settings,_,xhr){var port=settings.port;if(settings.mode==="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}pendingRequests[port]=xhr;}});}else{var ajax=$.ajax;$.ajax=function(settings){var mode=("mode"in settings?settings:$.ajaxSettings).mode,port=("port"in settings?settings:$.ajaxSettings).port;if(mode==="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}return(pendingRequests[port]=ajax.apply(this,arguments));}return ajax.apply(this,arguments);};}}(jQuery));(function($){$.extend($.fn,{validateDelegate:function(delegate,type,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});}});}(jQuery));
/* Masked Input plugin for jQuery
Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
Version: 1.3.1 */
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);
$(function()
{
	$('.modal-opener').on('click', function()
	{
		if( !$('#sky-form-modal-overlay').length )
		{
			$('body').append('<div id="sky-form-modal-overlay" class="sky-form-modal-overlay"></div>');
		}		
	
		$('#sky-form-modal-overlay').on('click', function()
		{
			$('#sky-form-modal-overlay').fadeOut();
			$('.sky-form-modal').fadeOut();
		});
		
		form = $($(this).attr('href'));
		$('#sky-form-modal-overlay').fadeIn();
		form.css('top', '50%').css('left', '50%').css('margin-top', -form.outerHeight()/2).css('margin-left', -form.outerWidth()/2).fadeIn();
		
		return false;
	});
	
	$('.modal-closer').on('click', function()
	{
		$('#sky-form-modal-overlay').fadeOut();
		$('.sky-form-modal').fadeOut();
		
		return false;
	});
});
/**
 * jquery.placeholder http://matoilic.github.com/jquery.placeholder
 *
 * @version v0.2.4
 * @author Mato Ilic <info@matoilic.ch>
 * @copyright 2013 Mato Ilic
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);

/**
 * Super simple wysiwyg editor v0.8.10
 * https://summernote.org
 *
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 *
 * Date: 2018-02-20T00:34Z
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(factory(global.jQuery));
}(this, (function ($$1) { 'use strict';

$$1 = $$1 && $$1.hasOwnProperty('default') ? $$1['default'] : $$1;

var Renderer = /** @class */ (function () {
    function Renderer(markup, children, options, callback) {
        this.markup = markup;
        this.children = children;
        this.options = options;
        this.callback = callback;
    }
    Renderer.prototype.render = function ($parent) {
        var $node = $$1(this.markup);
        if (this.options && this.options.contents) {
            $node.html(this.options.contents);
        }
        if (this.options && this.options.className) {
            $node.addClass(this.options.className);
        }
        if (this.options && this.options.data) {
            $$1.each(this.options.data, function (k, v) {
                $node.attr('data-' + k, v);
            });
        }
        if (this.options && this.options.click) {
            $node.on('click', this.options.click);
        }
        if (this.children) {
            var $container_1 = $node.find('.note-children-container');
            this.children.forEach(function (child) {
                child.render($container_1.length ? $container_1 : $node);
            });
        }
        if (this.callback) {
            this.callback($node, this.options);
        }
        if (this.options && this.options.callback) {
            this.options.callback($node);
        }
        if ($parent) {
            $parent.append($node);
        }
        return $node;
    };
    return Renderer;
}());
var renderer = {
    create: function (markup, callback) {
        return function () {
            var options = typeof arguments[1] === 'object' ? arguments[1] : arguments[0];
            var children = $$1.isArray(arguments[0]) ? arguments[0] : [];
            if (options && options.children) {
                children = options.children;
            }
            return new Renderer(markup, children, options, callback);
        };
    }
};

var editor = renderer.create('<div class="note-editor note-frame card"/>');
var toolbar = renderer.create('<div class="note-toolbar-wrapper"><div class="note-toolbar card-header" role="toolbar"></div></div>');
var editingArea = renderer.create('<div class="note-editing-area"/>');
var codable = renderer.create('<textarea class="note-codable" role="textbox" aria-multiline="true"/>');
var editable = renderer.create('<div class="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true"/>');
var statusbar = renderer.create([
    '<output class="note-status-output" aria-live="polite"/>',
    '<div class="note-statusbar" role="status">',
    '  <output class="note-status-output" aria-live="polite"></output>',
    '  <div class="note-resizebar" role="seperator" aria-orientation="horizontal" aria-label="Resize">',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '  </div>',
    '</div>'
].join(''));
var airEditor = renderer.create('<div class="note-editor"/>');
var airEditable = renderer.create([
    '<output class="note-status-output" aria-live="polite"/>',
    '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>'
].join(''));
var buttonGroup = renderer.create('<div class="note-btn-group btn-group">');
var dropdown = renderer.create('<div class="dropdown-menu" role="list">', function ($node, options) {
    var markup = $$1.isArray(options.items) ? options.items.map(function (item) {
        var value = (typeof item === 'string') ? item : (item.value || '');
        var content = options.template ? options.template(item) : item;
        var option = (typeof item === 'object') ? item.option : undefined;
        var dataValue = 'data-value="' + value + '"';
        var dataOption = (option !== undefined) ? ' data-option="' + option + '"' : '';
        return '<a class="dropdown-item" href="#" ' + (dataValue + dataOption) + ' role="listitem" aria-label="' + item + '">' + content + '</a>';
    }).join('') : options.items;
    $node.html(markup).attr({ 'aria-label': options.title });
});
var dropdownButtonContents = function (contents) {
    return contents;
};
var dropdownCheck = renderer.create('<div class="dropdown-menu note-check" role="list">', function ($node, options) {
    var markup = $$1.isArray(options.items) ? options.items.map(function (item) {
        var value = (typeof item === 'string') ? item : (item.value || '');
        var content = options.template ? options.template(item) : item;
        return '<a class="dropdown-item" href="#" data-value="' + value + '" role="listitem" aria-label="' + item + '">' + icon(options.checkClassName) + ' ' + content + '</a>';
    }).join('') : options.items;
    $node.html(markup).attr({ 'aria-label': options.title });
});
var palette = renderer.create('<div class="note-color-palette"/>', function ($node, options) {
    var contents = [];
    for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
        var eventName = options.eventName;
        var colors = options.colors[row];
        var colorsName = options.colorsName[row];
        var buttons = [];
        for (var col = 0, colSize = colors.length; col < colSize; col++) {
            var color = colors[col];
            var colorName = colorsName[col];
            buttons.push([
                '<button type="button" class="note-color-btn"',
                'style="background-color:', color, '" ',
                'data-event="', eventName, '" ',
                'data-value="', color, '" ',
                'title="', colorName, '" ',
                'aria-label="', colorName, '" ',
                'data-toggle="button" tabindex="-1"></button>'
            ].join(''));
        }
        contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
    }
    $node.html(contents.join(''));
    if (options.tooltip) {
        $node.find('.note-color-btn').tooltip({
            container: options.container,
            trigger: 'hover',
            placement: 'bottom'
        });
    }
});
var dialog = renderer.create('<div class="modal" aria-hidden="false" tabindex="-1" role="dialog"/>', function ($node, options) {
    if (options.fade) {
        $node.addClass('fade');
    }
    $node.attr({
        'aria-label': options.title
    });
    $node.html([
        '<div class="modal-dialog">',
        '  <div class="modal-content">',
        (options.title
            ? '    <div class="modal-header">' +
                '      <h4 class="modal-title">' + options.title + '</h4>' +
                '      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button>' +
                '    </div>' : ''),
        '    <div class="modal-body">' + options.body + '</div>',
        (options.footer
            ? '    <div class="modal-footer">' + options.footer + '</div>' : ''),
        '  </div>',
        '</div>'
    ].join(''));
});
var popover = renderer.create([
    '<div class="note-popover popover in">',
    '  <div class="arrow"/>',
    '  <div class="popover-content note-children-container"/>',
    '</div>'
].join(''), function ($node, options) {
    var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';
    $node.addClass(direction);
    if (options.hideArrow) {
        $node.find('.arrow').hide();
    }
});
var checkbox = renderer.create('<label class="custom-control custom-checkbox"></label>', function ($node, options) {
    if (options.id) {
        $node.attr('for', options.id);
    }
    $node.html([
        ' <input role="checkbox" type="checkbox" class="custom-control-input"' + (options.id ? ' id="' + options.id + '"' : ''),
        (options.checked ? ' checked' : ''),
        ' aria-checked="' + (options.checked ? 'true' : 'false') + '"/>',
        ' <span class="custom-control-indicator"></span>',
        ' <span class="custom-control-description">' + (options.text ? options.text : '') + '</span>',
        '</label>'
    ].join(''));
});
var icon = function (iconClassName, tagName) {
    tagName = tagName || 'i';
    return '<' + tagName + ' class="' + iconClassName + '"/>';
};
var ui = {
    editor: editor,
    toolbar: toolbar,
    editingArea: editingArea,
    codable: codable,
    editable: editable,
    statusbar: statusbar,
    airEditor: airEditor,
    airEditable: airEditable,
    buttonGroup: buttonGroup,
    dropdown: dropdown,
    dropdownButtonContents: dropdownButtonContents,
    dropdownCheck: dropdownCheck,
    palette: palette,
    dialog: dialog,
    popover: popover,
    icon: icon,
    checkbox: checkbox,
    options: {},
    button: function ($node, options) {
        return renderer.create('<button type="button" class="note-btn btn btn-light btn-sm" role="button" tabindex="-1">', function ($node, options) {
            if (options && options.tooltip) {
                $node.attr({
                    title: options.tooltip,
                    'aria-label': options.tooltip
                }).tooltip({
                    container: options.container,
                    trigger: 'hover',
                    placement: 'bottom'
                });
            }
        })($node, options);
    },
    toggleBtn: function ($btn, isEnable) {
        $btn.toggleClass('disabled', !isEnable);
        $btn.attr('disabled', !isEnable);
    },
    toggleBtnActive: function ($btn, isActive) {
        $btn.toggleClass('active', isActive);
    },
    onDialogShown: function ($dialog, handler) {
        $dialog.one('shown.bs.modal', handler);
    },
    onDialogHidden: function ($dialog, handler) {
        $dialog.one('hidden.bs.modal', handler);
    },
    showDialog: function ($dialog) {
        $dialog.modal('show');
    },
    hideDialog: function ($dialog) {
        $dialog.modal('hide');
    },
    createLayout: function ($note, options) {
        var $editor = (options.airMode ? ui.airEditor([
            ui.editingArea([
                ui.airEditable()
            ])
        ]) : ui.editor([
            ui.toolbar(),
            ui.editingArea([
                ui.codable(),
                ui.editable()
            ]),
            ui.statusbar()
        ])).render();
        $editor.insertAfter($note);
        return {
            note: $note,
            editor: $editor,
            toolbar: $editor.find('.note-toolbar'),
            editingArea: $editor.find('.note-editing-area'),
            editable: $editor.find('.note-editable'),
            codable: $editor.find('.note-codable'),
            statusbar: $editor.find('.note-statusbar')
        };
    },
    removeLayout: function ($note, layoutInfo) {
        $note.html(layoutInfo.editable.html());
        layoutInfo.editor.remove();
        $note.show();
    }
};

/**
 * @class core.func
 *
 * func utils (for high-order func's arg)
 *
 * @singleton
 * @alternateClassName func
 */
function eq(itemA) {
    return function (itemB) {
        return itemA === itemB;
    };
}
function eq2(itemA, itemB) {
    return itemA === itemB;
}
function peq2(propName) {
    return function (itemA, itemB) {
        return itemA[propName] === itemB[propName];
    };
}
function ok() {
    return true;
}
function fail() {
    return false;
}
function not(f) {
    return function () {
        return !f.apply(f, arguments);
    };
}
function and(fA, fB) {
    return function (item) {
        return fA(item) && fB(item);
    };
}
function self(a) {
    return a;
}
function invoke(obj, method) {
    return function () {
        return obj[method].apply(obj, arguments);
    };
}
var idCounter = 0;
/**
 * generate a globally-unique id
 *
 * @param {String} [prefix]
 */
function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
}
/**
 * returns bnd (bounds) from rect
 *
 * - IE Compatibility Issue: http://goo.gl/sRLOAo
 * - Scroll Issue: http://goo.gl/sNjUc
 *
 * @param {Rect} rect
 * @return {Object} bounds
 * @return {Number} bounds.top
 * @return {Number} bounds.left
 * @return {Number} bounds.width
 * @return {Number} bounds.height
 */
function rect2bnd(rect) {
    var $document = $(document);
    return {
        top: rect.top + $document.scrollTop(),
        left: rect.left + $document.scrollLeft(),
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
}
/**
 * returns a copy of the object where the keys have become the values and the values the keys.
 * @param {Object} obj
 * @return {Object}
 */
function invertObject(obj) {
    var inverted = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}
/**
 * @param {String} namespace
 * @param {String} [prefix]
 * @return {String}
 */
function namespaceToCamel(namespace, prefix) {
    prefix = prefix || '';
    return prefix + namespace.split('.').map(function (name) {
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }).join('');
}
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 * @return {Function}
 */
function debounce(func, wait, immediate) {
    var _this = this;
    var timeout;
    return function () {
        var context = _this;
        var args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
var func = {
    eq: eq,
    eq2: eq2,
    peq2: peq2,
    ok: ok,
    fail: fail,
    self: self,
    not: not,
    and: and,
    invoke: invoke,
    uniqueId: uniqueId,
    rect2bnd: rect2bnd,
    invertObject: invertObject,
    namespaceToCamel: namespaceToCamel,
    debounce: debounce
};

/**
 * returns the first item of an array.
 *
 * @param {Array} array
 */
function head(array) {
    return array[0];
}
/**
 * returns the last item of an array.
 *
 * @param {Array} array
 */
function last(array) {
    return array[array.length - 1];
}
/**
 * returns everything but the last entry of the array.
 *
 * @param {Array} array
 */
function initial(array) {
    return array.slice(0, array.length - 1);
}
/**
 * returns the rest of the items in an array.
 *
 * @param {Array} array
 */
function tail(array) {
    return array.slice(1);
}
/**
 * returns item of array
 */
function find(array, pred) {
    for (var idx = 0, len = array.length; idx < len; idx++) {
        var item = array[idx];
        if (pred(item)) {
            return item;
        }
    }
}
/**
 * returns true if all of the values in the array pass the predicate truth test.
 */
function all(array, pred) {
    for (var idx = 0, len = array.length; idx < len; idx++) {
        if (!pred(array[idx])) {
            return false;
        }
    }
    return true;
}
/**
 * returns index of item
 */
function indexOf(array, item) {
    return $$1.inArray(item, array);
}
/**
 * returns true if the value is present in the list.
 */
function contains(array, item) {
    return indexOf(array, item) !== -1;
}
/**
 * get sum from a list
 *
 * @param {Array} array - array
 * @param {Function} fn - iterator
 */
function sum(array, fn) {
    fn = fn || func.self;
    return array.reduce(function (memo, v) {
        return memo + fn(v);
    }, 0);
}
/**
 * returns a copy of the collection with array type.
 * @param {Collection} collection - collection eg) node.childNodes, ...
 */
function from(collection) {
    var result = [];
    var length = collection.length;
    var idx = -1;
    while (++idx < length) {
        result[idx] = collection[idx];
    }
    return result;
}
/**
 * returns whether list is empty or not
 */
function isEmpty$1(array) {
    return !array || !array.length;
}
/**
 * cluster elements by predicate function.
 *
 * @param {Array} array - array
 * @param {Function} fn - predicate function for cluster rule
 * @param {Array[]}
 */
function clusterBy(array, fn) {
    if (!array.length) {
        return [];
    }
    var aTail = tail(array);
    return aTail.reduce(function (memo, v) {
        var aLast = last(memo);
        if (fn(last(aLast), v)) {
            aLast[aLast.length] = v;
        }
        else {
            memo[memo.length] = [v];
        }
        return memo;
    }, [[head(array)]]);
}
/**
 * returns a copy of the array with all false values removed
 *
 * @param {Array} array - array
 * @param {Function} fn - predicate function for cluster rule
 */
function compact(array) {
    var aResult = [];
    for (var idx = 0, len = array.length; idx < len; idx++) {
        if (array[idx]) {
            aResult.push(array[idx]);
        }
    }
    return aResult;
}
/**
 * produces a duplicate-free version of the array
 *
 * @param {Array} array
 */
function unique(array) {
    var results = [];
    for (var idx = 0, len = array.length; idx < len; idx++) {
        if (!contains(results, array[idx])) {
            results.push(array[idx]);
        }
    }
    return results;
}
/**
 * returns next item.
 * @param {Array} array
 */
function next(array, item) {
    var idx = indexOf(array, item);
    if (idx === -1) {
        return null;
    }
    return array[idx + 1];
}
/**
 * returns prev item.
 * @param {Array} array
 */
function prev(array, item) {
    var idx = indexOf(array, item);
    if (idx === -1) {
        return null;
    }
    return array[idx - 1];
}
/**
 * @class core.list
 *
 * list utils
 *
 * @singleton
 * @alternateClassName list
 */
var lists = {
    head: head,
    last: last,
    initial: initial,
    tail: tail,
    prev: prev,
    next: next,
    find: find,
    contains: contains,
    all: all,
    sum: sum,
    from: from,
    isEmpty: isEmpty$1,
    clusterBy: clusterBy,
    compact: compact,
    unique: unique
};

var isSupportAmd = typeof define === 'function' && define.amd; // eslint-disable-line
/**
 * returns whether font is installed or not.
 *
 * @param {String} fontName
 * @return {Boolean}
 */
function isFontInstalled(fontName) {
    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
    var $tester = $$1('<div>').css({
        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        fontSize: '200px'
    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);
    var originalWidth = $tester.css('fontFamily', testFontName).width();
    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();
    $tester.remove();
    return originalWidth !== width;
}
var userAgent = navigator.userAgent;
var isMSIE = /MSIE|Trident/i.test(userAgent);
var browserVersion;
if (isMSIE) {
    var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
    if (matches) {
        browserVersion = parseFloat(matches[1]);
    }
    matches = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgent);
    if (matches) {
        browserVersion = parseFloat(matches[1]);
    }
}
var isEdge = /Edge\/\d+/.test(userAgent);
var hasCodeMirror = !!window.CodeMirror;
if (!hasCodeMirror && isSupportAmd) {
    // Webpack
    if (typeof __webpack_require__ === 'function') {
        try {
            // If CodeMirror can't be resolved, `require.resolve` will throw an
            // exception and `hasCodeMirror` won't be set to `true`.
            require.resolve('codemirror');
            hasCodeMirror = true;
        }
        catch (e) {
            // do nothing
        }
    }
    else if (typeof require !== 'undefined') {
        // Browserify
        if (typeof require.resolve !== 'undefined') {
            try {
                // If CodeMirror can't be resolved, `require.resolve` will throw an
                // exception and `hasCodeMirror` won't be set to `true`.
                require.resolve('codemirror');
                hasCodeMirror = true;
            }
            catch (e) {
                // do nothing
            }
            // Almond/Require
        }
        else if (typeof require.specified !== 'undefined') {
            hasCodeMirror = require.specified('codemirror');
        }
    }
}
var isSupportTouch = (('ontouchstart' in window) ||
    (navigator.MaxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
// [workaround] IE doesn't have input events for contentEditable
// - see: https://goo.gl/4bfIvA
var inputEventName = (isMSIE || isEdge) ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
/**
 * @class core.env
 *
 * Object which check platform and agent
 *
 * @singleton
 * @alternateClassName env
 */
var env = {
    isMac: navigator.appVersion.indexOf('Mac') > -1,
    isMSIE: isMSIE,
    isEdge: isEdge,
    isFF: !isEdge && /firefox/i.test(userAgent),
    isPhantom: /PhantomJS/i.test(userAgent),
    isWebkit: !isEdge && /webkit/i.test(userAgent),
    isChrome: !isEdge && /chrome/i.test(userAgent),
    isSafari: !isEdge && /safari/i.test(userAgent),
    browserVersion: browserVersion,
    jqueryVersion: parseFloat($$1.fn.jquery),
    isSupportAmd: isSupportAmd,
    isSupportTouch: isSupportTouch,
    hasCodeMirror: hasCodeMirror,
    isFontInstalled: isFontInstalled,
    isW3CRangeSupport: !!document.createRange,
    inputEventName: inputEventName
};

var NBSP_CHAR = String.fromCharCode(160);
var ZERO_WIDTH_NBSP_CHAR = '\ufeff';
/**
 * @method isEditable
 *
 * returns whether node is `note-editable` or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */
function isEditable(node) {
    return node && $$1(node).hasClass('note-editable');
}
/**
 * @method isControlSizing
 *
 * returns whether node is `note-control-sizing` or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */
function isControlSizing(node) {
    return node && $$1(node).hasClass('note-control-sizing');
}
/**
 * @method makePredByNodeName
 *
 * returns predicate which judge whether nodeName is same
 *
 * @param {String} nodeName
 * @return {Function}
 */
function makePredByNodeName(nodeName) {
    nodeName = nodeName.toUpperCase();
    return function (node) {
        return node && node.nodeName.toUpperCase() === nodeName;
    };
}
/**
 * @method isText
 *
 *
 *
 * @param {Node} node
 * @return {Boolean} true if node's type is text(3)
 */
function isText(node) {
    return node && node.nodeType === 3;
}
/**
 * @method isElement
 *
 *
 *
 * @param {Node} node
 * @return {Boolean} true if node's type is element(1)
 */
function isElement(node) {
    return node && node.nodeType === 1;
}
/**
 * ex) br, col, embed, hr, img, input, ...
 * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
 */
function isVoid(node) {
    return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT/.test(node.nodeName.toUpperCase());
}
function isPara(node) {
    if (isEditable(node)) {
        return false;
    }
    // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
    return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
}
function isHeading(node) {
    return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
}
var isPre = makePredByNodeName('PRE');
var isLi = makePredByNodeName('LI');
function isPurePara(node) {
    return isPara(node) && !isLi(node);
}
var isTable = makePredByNodeName('TABLE');
var isData = makePredByNodeName('DATA');
function isInline(node) {
    return !isBodyContainer(node) &&
        !isList(node) &&
        !isHr(node) &&
        !isPara(node) &&
        !isTable(node) &&
        !isBlockquote(node) &&
        !isData(node);
}
function isList(node) {
    return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
}
var isHr = makePredByNodeName('HR');
function isCell(node) {
    return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
}
var isBlockquote = makePredByNodeName('BLOCKQUOTE');
function isBodyContainer(node) {
    return isCell(node) || isBlockquote(node) || isEditable(node);
}
var isAnchor = makePredByNodeName('A');
function isParaInline(node) {
    return isInline(node) && !!ancestor(node, isPara);
}
function isBodyInline(node) {
    return isInline(node) && !ancestor(node, isPara);
}
var isBody = makePredByNodeName('BODY');
/**
 * returns whether nodeB is closest sibling of nodeA
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @return {Boolean}
 */
function isClosestSibling(nodeA, nodeB) {
    return nodeA.nextSibling === nodeB ||
        nodeA.previousSibling === nodeB;
}
/**
 * returns array of closest siblings with node
 *
 * @param {Node} node
 * @param {function} [pred] - predicate function
 * @return {Node[]}
 */
function withClosestSiblings(node, pred) {
    pred = pred || func.ok;
    var siblings = [];
    if (node.previousSibling && pred(node.previousSibling)) {
        siblings.push(node.previousSibling);
    }
    siblings.push(node);
    if (node.nextSibling && pred(node.nextSibling)) {
        siblings.push(node.nextSibling);
    }
    return siblings;
}
/**
 * blank HTML for cursor position
 * - [workaround] old IE only works with &nbsp;
 * - [workaround] IE11 and other browser works with bogus br
 */
var blankHTML = env.isMSIE && env.browserVersion < 11 ? '&nbsp;' : '<br>';
/**
 * @method nodeLength
 *
 * returns #text's text size or element's childNodes size
 *
 * @param {Node} node
 */
function nodeLength(node) {
    if (isText(node)) {
        return node.nodeValue.length;
    }
    if (node) {
        return node.childNodes.length;
    }
    return 0;
}
/**
 * returns whether node is empty or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */
function isEmpty(node) {
    var len = nodeLength(node);
    if (len === 0) {
        return true;
    }
    else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
        // ex) <p><br></p>, <span><br></span>
        return true;
    }
    else if (lists.all(node.childNodes, isText) && node.innerHTML === '') {
        // ex) <p></p>, <span></span>
        return true;
    }
    return false;
}
/**
 * padding blankHTML if node is empty (for cursor position)
 */
function paddingBlankHTML(node) {
    if (!isVoid(node) && !nodeLength(node)) {
        node.innerHTML = blankHTML;
    }
}
/**
 * find nearest ancestor predicate hit
 *
 * @param {Node} node
 * @param {Function} pred - predicate function
 */
function ancestor(node, pred) {
    while (node) {
        if (pred(node)) {
            return node;
        }
        if (isEditable(node)) {
            break;
        }
        node = node.parentNode;
    }
    return null;
}
/**
 * find nearest ancestor only single child blood line and predicate hit
 *
 * @param {Node} node
 * @param {Function} pred - predicate function
 */
function singleChildAncestor(node, pred) {
    node = node.parentNode;
    while (node) {
        if (nodeLength(node) !== 1) {
            break;
        }
        if (pred(node)) {
            return node;
        }
        if (isEditable(node)) {
            break;
        }
        node = node.parentNode;
    }
    return null;
}
/**
 * returns new array of ancestor nodes (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [optional] pred - predicate function
 */
function listAncestor(node, pred) {
    pred = pred || func.fail;
    var ancestors = [];
    ancestor(node, function (el) {
        if (!isEditable(el)) {
            ancestors.push(el);
        }
        return pred(el);
    });
    return ancestors;
}
/**
 * find farthest ancestor predicate hit
 */
function lastAncestor(node, pred) {
    var ancestors = listAncestor(node);
    return lists.last(ancestors.filter(pred));
}
/**
 * returns common ancestor node between two nodes.
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 */
function commonAncestor(nodeA, nodeB) {
    var ancestors = listAncestor(nodeA);
    for (var n = nodeB; n; n = n.parentNode) {
        if ($$1.inArray(n, ancestors) > -1) {
            return n;
        }
    }
    return null; // difference document area
}
/**
 * listing all previous siblings (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [optional] pred - predicate function
 */
function listPrev(node, pred) {
    pred = pred || func.fail;
    var nodes = [];
    while (node) {
        if (pred(node)) {
            break;
        }
        nodes.push(node);
        node = node.previousSibling;
    }
    return nodes;
}
/**
 * listing next siblings (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [pred] - predicate function
 */
function listNext(node, pred) {
    pred = pred || func.fail;
    var nodes = [];
    while (node) {
        if (pred(node)) {
            break;
        }
        nodes.push(node);
        node = node.nextSibling;
    }
    return nodes;
}
/**
 * listing descendant nodes
 *
 * @param {Node} node
 * @param {Function} [pred] - predicate function
 */
function listDescendant(node, pred) {
    var descendants = [];
    pred = pred || func.ok;
    // start DFS(depth first search) with node
    (function fnWalk(current) {
        if (node !== current && pred(current)) {
            descendants.push(current);
        }
        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
            fnWalk(current.childNodes[idx]);
        }
    })(node);
    return descendants;
}
/**
 * wrap node with new tag.
 *
 * @param {Node} node
 * @param {Node} tagName of wrapper
 * @return {Node} - wrapper
 */
function wrap(node, wrapperName) {
    var parent = node.parentNode;
    var wrapper = $$1('<' + wrapperName + '>')[0];
    parent.insertBefore(wrapper, node);
    wrapper.appendChild(node);
    return wrapper;
}
/**
 * insert node after preceding
 *
 * @param {Node} node
 * @param {Node} preceding - predicate function
 */
function insertAfter(node, preceding) {
    var next = preceding.nextSibling;
    var parent = preceding.parentNode;
    if (next) {
        parent.insertBefore(node, next);
    }
    else {
        parent.appendChild(node);
    }
    return node;
}
/**
 * append elements.
 *
 * @param {Node} node
 * @param {Collection} aChild
 */
function appendChildNodes(node, aChild) {
    $$1.each(aChild, function (idx, child) {
        node.appendChild(child);
    });
    return node;
}
/**
 * returns whether boundaryPoint is left edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */
function isLeftEdgePoint(point) {
    return point.offset === 0;
}
/**
 * returns whether boundaryPoint is right edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */
function isRightEdgePoint(point) {
    return point.offset === nodeLength(point.node);
}
/**
 * returns whether boundaryPoint is edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */
function isEdgePoint(point) {
    return isLeftEdgePoint(point) || isRightEdgePoint(point);
}
/**
 * returns whether node is left edge of ancestor or not.
 *
 * @param {Node} node
 * @param {Node} ancestor
 * @return {Boolean}
 */
function isLeftEdgeOf(node, ancestor) {
    while (node && node !== ancestor) {
        if (position(node) !== 0) {
            return false;
        }
        node = node.parentNode;
    }
    return true;
}
/**
 * returns whether node is right edge of ancestor or not.
 *
 * @param {Node} node
 * @param {Node} ancestor
 * @return {Boolean}
 */
function isRightEdgeOf(node, ancestor) {
    if (!ancestor) {
        return false;
    }
    while (node && node !== ancestor) {
        if (position(node) !== nodeLength(node.parentNode) - 1) {
            return false;
        }
        node = node.parentNode;
    }
    return true;
}
/**
 * returns whether point is left edge of ancestor or not.
 * @param {BoundaryPoint} point
 * @param {Node} ancestor
 * @return {Boolean}
 */
function isLeftEdgePointOf(point, ancestor) {
    return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
}
/**
 * returns whether point is right edge of ancestor or not.
 * @param {BoundaryPoint} point
 * @param {Node} ancestor
 * @return {Boolean}
 */
function isRightEdgePointOf(point, ancestor) {
    return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
}
/**
 * returns offset from parent.
 *
 * @param {Node} node
 */
function position(node) {
    var offset = 0;
    while ((node = node.previousSibling)) {
        offset += 1;
    }
    return offset;
}
function hasChildren(node) {
    return !!(node && node.childNodes && node.childNodes.length);
}
/**
 * returns previous boundaryPoint
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */
function prevPoint(point, isSkipInnerOffset) {
    var node;
    var offset;
    if (point.offset === 0) {
        if (isEditable(point.node)) {
            return null;
        }
        node = point.node.parentNode;
        offset = position(point.node);
    }
    else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset - 1];
        offset = nodeLength(node);
    }
    else {
        node = point.node;
        offset = isSkipInnerOffset ? 0 : point.offset - 1;
    }
    return {
        node: node,
        offset: offset
    };
}
/**
 * returns next boundaryPoint
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */
function nextPoint(point, isSkipInnerOffset) {
    var node, offset;
    if (nodeLength(point.node) === point.offset) {
        if (isEditable(point.node)) {
            return null;
        }
        node = point.node.parentNode;
        offset = position(point.node) + 1;
    }
    else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset];
        offset = 0;
    }
    else {
        node = point.node;
        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
    }
    return {
        node: node,
        offset: offset
    };
}
/**
 * returns whether pointA and pointB is same or not.
 *
 * @param {BoundaryPoint} pointA
 * @param {BoundaryPoint} pointB
 * @return {Boolean}
 */
function isSamePoint(pointA, pointB) {
    return pointA.node === pointB.node && pointA.offset === pointB.offset;
}
/**
 * returns whether point is visible (can set cursor) or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */
function isVisiblePoint(point) {
    if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {
        return true;
    }
    var leftNode = point.node.childNodes[point.offset - 1];
    var rightNode = point.node.childNodes[point.offset];
    if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
        return true;
    }
    return false;
}
/**
 * @method prevPointUtil
 *
 * @param {BoundaryPoint} point
 * @param {Function} pred
 * @return {BoundaryPoint}
 */
function prevPointUntil(point, pred) {
    while (point) {
        if (pred(point)) {
            return point;
        }
        point = prevPoint(point);
    }
    return null;
}
/**
 * @method nextPointUntil
 *
 * @param {BoundaryPoint} point
 * @param {Function} pred
 * @return {BoundaryPoint}
 */
function nextPointUntil(point, pred) {
    while (point) {
        if (pred(point)) {
            return point;
        }
        point = nextPoint(point);
    }
    return null;
}
/**
 * returns whether point has character or not.
 *
 * @param {Point} point
 * @return {Boolean}
 */
function isCharPoint(point) {
    if (!isText(point.node)) {
        return false;
    }
    var ch = point.node.nodeValue.charAt(point.offset - 1);
    return ch && (ch !== ' ' && ch !== NBSP_CHAR);
}
/**
 * @method walkPoint
 *
 * @param {BoundaryPoint} startPoint
 * @param {BoundaryPoint} endPoint
 * @param {Function} handler
 * @param {Boolean} isSkipInnerOffset
 */
function walkPoint(startPoint, endPoint, handler, isSkipInnerOffset) {
    var point = startPoint;
    while (point) {
        handler(point);
        if (isSamePoint(point, endPoint)) {
            break;
        }
        var isSkipOffset = isSkipInnerOffset &&
            startPoint.node !== point.node &&
            endPoint.node !== point.node;
        point = nextPoint(point, isSkipOffset);
    }
}
/**
 * @method makeOffsetPath
 *
 * return offsetPath(array of offset) from ancestor
 *
 * @param {Node} ancestor - ancestor node
 * @param {Node} node
 */
function makeOffsetPath(ancestor, node) {
    var ancestors = listAncestor(node, func.eq(ancestor));
    return ancestors.map(position).reverse();
}
/**
 * @method fromOffsetPath
 *
 * return element from offsetPath(array of offset)
 *
 * @param {Node} ancestor - ancestor node
 * @param {array} offsets - offsetPath
 */
function fromOffsetPath(ancestor, offsets) {
    var current = ancestor;
    for (var i = 0, len = offsets.length; i < len; i++) {
        if (current.childNodes.length <= offsets[i]) {
            current = current.childNodes[current.childNodes.length - 1];
        }
        else {
            current = current.childNodes[offsets[i]];
        }
    }
    return current;
}
/**
 * @method splitNode
 *
 * split element or #text
 *
 * @param {BoundaryPoint} point
 * @param {Object} [options]
 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
 * @return {Node} right node of boundaryPoint
 */
function splitNode(point, options) {
    var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
    var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;
    // edge case
    if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
        if (isLeftEdgePoint(point)) {
            return point.node;
        }
        else if (isRightEdgePoint(point)) {
            return point.node.nextSibling;
        }
    }
    // split #text
    if (isText(point.node)) {
        return point.node.splitText(point.offset);
    }
    else {
        var childNode = point.node.childNodes[point.offset];
        var clone = insertAfter(point.node.cloneNode(false), point.node);
        appendChildNodes(clone, listNext(childNode));
        if (!isSkipPaddingBlankHTML) {
            paddingBlankHTML(point.node);
            paddingBlankHTML(clone);
        }
        return clone;
    }
}
/**
 * @method splitTree
 *
 * split tree by point
 *
 * @param {Node} root - split root
 * @param {BoundaryPoint} point
 * @param {Object} [options]
 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
 * @return {Node} right node of boundaryPoint
 */
function splitTree(root, point, options) {
    // ex) [#text, <span>, <p>]
    var ancestors = listAncestor(point.node, func.eq(root));
    if (!ancestors.length) {
        return null;
    }
    else if (ancestors.length === 1) {
        return splitNode(point, options);
    }
    return ancestors.reduce(function (node, parent) {
        if (node === point.node) {
            node = splitNode(point, options);
        }
        return splitNode({
            node: parent,
            offset: node ? position(node) : nodeLength(parent)
        }, options);
    });
}
/**
 * split point
 *
 * @param {Point} point
 * @param {Boolean} isInline
 * @return {Object}
 */
function splitPoint(point, isInline) {
    // find splitRoot, container
    //  - inline: splitRoot is a child of paragraph
    //  - block: splitRoot is a child of bodyContainer
    var pred = isInline ? isPara : isBodyContainer;
    var ancestors = listAncestor(point.node, pred);
    var topAncestor = lists.last(ancestors) || point.node;
    var splitRoot, container;
    if (pred(topAncestor)) {
        splitRoot = ancestors[ancestors.length - 2];
        container = topAncestor;
    }
    else {
        splitRoot = topAncestor;
        container = splitRoot.parentNode;
    }
    // if splitRoot is exists, split with splitTree
    var pivot = splitRoot && splitTree(splitRoot, point, {
        isSkipPaddingBlankHTML: isInline,
        isNotSplitEdgePoint: isInline
    });
    // if container is point.node, find pivot with point.offset
    if (!pivot && container === point.node) {
        pivot = point.node.childNodes[point.offset];
    }
    return {
        rightNode: pivot,
        container: container
    };
}
function create(nodeName) {
    return document.createElement(nodeName);
}
function createText(text) {
    return document.createTextNode(text);
}
/**
 * @method remove
 *
 * remove node, (isRemoveChild: remove child or not)
 *
 * @param {Node} node
 * @param {Boolean} isRemoveChild
 */
function remove(node, isRemoveChild) {
    if (!node || !node.parentNode) {
        return;
    }
    if (node.removeNode) {
        return node.removeNode(isRemoveChild);
    }
    var parent = node.parentNode;
    if (!isRemoveChild) {
        var nodes = [];
        for (var i = 0, len = node.childNodes.length; i < len; i++) {
            nodes.push(node.childNodes[i]);
        }
        for (var i = 0, len = nodes.length; i < len; i++) {
            parent.insertBefore(nodes[i], node);
        }
    }
    parent.removeChild(node);
}
/**
 * @method removeWhile
 *
 * @param {Node} node
 * @param {Function} pred
 */
function removeWhile(node, pred) {
    while (node) {
        if (isEditable(node) || !pred(node)) {
            break;
        }
        var parent = node.parentNode;
        remove(node);
        node = parent;
    }
}
/**
 * @method replace
 *
 * replace node with provided nodeName
 *
 * @param {Node} node
 * @param {String} nodeName
 * @return {Node} - new node
 */
function replace(node, nodeName) {
    if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
        return node;
    }
    var newNode = create(nodeName);
    if (node.style.cssText) {
        newNode.style.cssText = node.style.cssText;
    }
    appendChildNodes(newNode, lists.from(node.childNodes));
    insertAfter(newNode, node);
    remove(node);
    return newNode;
}
var isTextarea = makePredByNodeName('TEXTAREA');
/**
 * @param {jQuery} $node
 * @param {Boolean} [stripLinebreaks] - default: false
 */
function value($node, stripLinebreaks) {
    var val = isTextarea($node[0]) ? $node.val() : $node.html();
    if (stripLinebreaks) {
        return val.replace(/[\n\r]/g, '');
    }
    return val;
}
/**
 * @method html
 *
 * get the HTML contents of node
 *
 * @param {jQuery} $node
 * @param {Boolean} [isNewlineOnBlock]
 */
function html($node, isNewlineOnBlock) {
    var markup = value($node);
    if (isNewlineOnBlock) {
        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
        markup = markup.replace(regexTag, function (match, endSlash, name) {
            name = name.toUpperCase();
            var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
                !!endSlash;
            var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);
            return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
        });
        markup = $$1.trim(markup);
    }
    return markup;
}
function posFromPlaceholder(placeholder) {
    var $placeholder = $$1(placeholder);
    var pos = $placeholder.offset();
    var height = $placeholder.outerHeight(true); // include margin
    return {
        left: pos.left,
        top: pos.top + height
    };
}
function attachEvents($node, events) {
    Object.keys(events).forEach(function (key) {
        $node.on(key, events[key]);
    });
}
function detachEvents($node, events) {
    Object.keys(events).forEach(function (key) {
        $node.off(key, events[key]);
    });
}
/**
 * @method isCustomStyleTag
 *
 * assert if a node contains a "note-styletag" class,
 * which implies that's a custom-made style tag node
 *
 * @param {Node} an HTML DOM node
 */
function isCustomStyleTag(node) {
    return node && !isText(node) && lists.contains(node.classList, 'note-styletag');
}
var dom = {
    /** @property {String} NBSP_CHAR */
    NBSP_CHAR: NBSP_CHAR,
    /** @property {String} ZERO_WIDTH_NBSP_CHAR */
    ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
    /** @property {String} blank */
    blank: blankHTML,
    /** @property {String} emptyPara */
    emptyPara: "<p>" + blankHTML + "</p>",
    makePredByNodeName: makePredByNodeName,
    isEditable: isEditable,
    isControlSizing: isControlSizing,
    isText: isText,
    isElement: isElement,
    isVoid: isVoid,
    isPara: isPara,
    isPurePara: isPurePara,
    isHeading: isHeading,
    isInline: isInline,
    isBlock: func.not(isInline),
    isBodyInline: isBodyInline,
    isBody: isBody,
    isParaInline: isParaInline,
    isPre: isPre,
    isList: isList,
    isTable: isTable,
    isData: isData,
    isCell: isCell,
    isBlockquote: isBlockquote,
    isBodyContainer: isBodyContainer,
    isAnchor: isAnchor,
    isDiv: makePredByNodeName('DIV'),
    isLi: isLi,
    isBR: makePredByNodeName('BR'),
    isSpan: makePredByNodeName('SPAN'),
    isB: makePredByNodeName('B'),
    isU: makePredByNodeName('U'),
    isS: makePredByNodeName('S'),
    isI: makePredByNodeName('I'),
    isImg: makePredByNodeName('IMG'),
    isTextarea: isTextarea,
    isEmpty: isEmpty,
    isEmptyAnchor: func.and(isAnchor, isEmpty),
    isClosestSibling: isClosestSibling,
    withClosestSiblings: withClosestSiblings,
    nodeLength: nodeLength,
    isLeftEdgePoint: isLeftEdgePoint,
    isRightEdgePoint: isRightEdgePoint,
    isEdgePoint: isEdgePoint,
    isLeftEdgeOf: isLeftEdgeOf,
    isRightEdgeOf: isRightEdgeOf,
    isLeftEdgePointOf: isLeftEdgePointOf,
    isRightEdgePointOf: isRightEdgePointOf,
    prevPoint: prevPoint,
    nextPoint: nextPoint,
    isSamePoint: isSamePoint,
    isVisiblePoint: isVisiblePoint,
    prevPointUntil: prevPointUntil,
    nextPointUntil: nextPointUntil,
    isCharPoint: isCharPoint,
    walkPoint: walkPoint,
    ancestor: ancestor,
    singleChildAncestor: singleChildAncestor,
    listAncestor: listAncestor,
    lastAncestor: lastAncestor,
    listNext: listNext,
    listPrev: listPrev,
    listDescendant: listDescendant,
    commonAncestor: commonAncestor,
    wrap: wrap,
    insertAfter: insertAfter,
    appendChildNodes: appendChildNodes,
    position: position,
    hasChildren: hasChildren,
    makeOffsetPath: makeOffsetPath,
    fromOffsetPath: fromOffsetPath,
    splitTree: splitTree,
    splitPoint: splitPoint,
    create: create,
    createText: createText,
    remove: remove,
    removeWhile: removeWhile,
    replace: replace,
    html: html,
    value: value,
    posFromPlaceholder: posFromPlaceholder,
    attachEvents: attachEvents,
    detachEvents: detachEvents,
    isCustomStyleTag: isCustomStyleTag
};

$$1.summernote = $$1.summernote || {
    lang: {}
};
$$1.extend($$1.summernote.lang, {
    'en-US': {
        font: {
            bold: 'Bold',
            italic: 'Italic',
            underline: 'Underline',
            clear: 'Remove Font Style',
            height: 'Line Height',
            name: 'Font Family',
            strikethrough: 'Strikethrough',
            subscript: 'Subscript',
            superscript: 'Superscript',
            size: 'Font Size'
        },
        image: {
            image: 'Picture',
            insert: 'Insert Image',
            resizeFull: 'Resize Full',
            resizeHalf: 'Resize Half',
            resizeQuarter: 'Resize Quarter',
            floatLeft: 'Float Left',
            floatRight: 'Float Right',
            floatNone: 'Float None',
            shapeRounded: 'Shape: Rounded',
            shapeCircle: 'Shape: Circle',
            shapeThumbnail: 'Shape: Thumbnail',
            shapeNone: 'Shape: None',
            dragImageHere: 'Drag image or text here',
            dropImage: 'Drop image or Text',
            selectFromFiles: 'Select from files',
            maximumFileSize: 'Maximum file size',
            maximumFileSizeError: 'Maximum file size exceeded.',
            url: 'Image URL',
            remove: 'Remove Image',
            original: 'Original'
        },
        video: {
            video: 'Video',
            videoLink: 'Video Link',
            insert: 'Insert Video',
            url: 'Video URL',
            providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
        },
        link: {
            link: 'Link',
            insert: 'Insert Link',
            unlink: 'Unlink',
            edit: 'Edit',
            textToDisplay: 'Text to display',
            url: 'To what URL should this link go?',
            openInNewWindow: 'Open in new window'
        },
        table: {
            table: 'Table',
            addRowAbove: 'Add row above',
            addRowBelow: 'Add row below',
            addColLeft: 'Add column left',
            addColRight: 'Add column right',
            delRow: 'Delete row',
            delCol: 'Delete column',
            delTable: 'Delete table'
        },
        hr: {
            insert: 'Insert Horizontal Rule'
        },
        style: {
            style: 'Style',
            p: 'Normal',
            blockquote: 'Quote',
            pre: 'Code',
            h1: 'Header 1',
            h2: 'Header 2',
            h3: 'Header 3',
            h4: 'Header 4',
            h5: 'Header 5',
            h6: 'Header 6'
        },
        lists: {
            unordered: 'Unordered list',
            ordered: 'Ordered list'
        },
        options: {
            help: 'Help',
            fullscreen: 'Full Screen',
            codeview: 'Code View'
        },
        paragraph: {
            paragraph: 'Paragraph',
            outdent: 'Outdent',
            indent: 'Indent',
            left: 'Align left',
            center: 'Align center',
            right: 'Align right',
            justify: 'Justify full'
        },
        color: {
            recent: 'Recent Color',
            more: 'More Color',
            background: 'Background Color',
            foreground: 'Foreground Color',
            transparent: 'Transparent',
            setTransparent: 'Set transparent',
            reset: 'Reset',
            resetToDefault: 'Reset to default'
        },
        shortcut: {
            shortcuts: 'Keyboard shortcuts',
            close: 'Close',
            textFormatting: 'Text formatting',
            action: 'Action',
            paragraphFormatting: 'Paragraph formatting',
            documentStyle: 'Document Style',
            extraKeys: 'Extra keys'
        },
        help: {
            'insertParagraph': 'Insert Paragraph',
            'undo': 'Undoes the last command',
            'redo': 'Redoes the last command',
            'tab': 'Tab',
            'untab': 'Untab',
            'bold': 'Set a bold style',
            'italic': 'Set a italic style',
            'underline': 'Set a underline style',
            'strikethrough': 'Set a strikethrough style',
            'removeFormat': 'Clean a style',
            'justifyLeft': 'Set left align',
            'justifyCenter': 'Set center align',
            'justifyRight': 'Set right align',
            'justifyFull': 'Set full align',
            'insertUnorderedList': 'Toggle unordered list',
            'insertOrderedList': 'Toggle ordered list',
            'outdent': 'Outdent on current paragraph',
            'indent': 'Indent on current paragraph',
            'formatPara': 'Change current block\'s format as a paragraph(P tag)',
            'formatH1': 'Change current block\'s format as H1',
            'formatH2': 'Change current block\'s format as H2',
            'formatH3': 'Change current block\'s format as H3',
            'formatH4': 'Change current block\'s format as H4',
            'formatH5': 'Change current block\'s format as H5',
            'formatH6': 'Change current block\'s format as H6',
            'insertHorizontalRule': 'Insert horizontal rule',
            'linkDialog.show': 'Show Link Dialog'
        },
        history: {
            undo: 'Undo',
            redo: 'Redo'
        },
        specialChar: {
            specialChar: 'SPECIAL CHARACTERS',
            select: 'Select Special characters'
        }
    }
});

var KEY_MAP = {
    'BACKSPACE': 8,
    'TAB': 9,
    'ENTER': 13,
    'SPACE': 32,
    'DELETE': 46,
    // Arrow
    'LEFT': 37,
    'UP': 38,
    'RIGHT': 39,
    'DOWN': 40,
    // Number: 0-9
    'NUM0': 48,
    'NUM1': 49,
    'NUM2': 50,
    'NUM3': 51,
    'NUM4': 52,
    'NUM5': 53,
    'NUM6': 54,
    'NUM7': 55,
    'NUM8': 56,
    // Alphabet: a-z
    'B': 66,
    'E': 69,
    'I': 73,
    'J': 74,
    'K': 75,
    'L': 76,
    'R': 82,
    'S': 83,
    'U': 85,
    'V': 86,
    'Y': 89,
    'Z': 90,
    'SLASH': 191,
    'LEFTBRACKET': 219,
    'BACKSLASH': 220,
    'RIGHTBRACKET': 221
};
/**
 * @class core.key
 *
 * Object for keycodes.
 *
 * @singleton
 * @alternateClassName key
 */
var key = {
    /**
     * @method isEdit
     *
     * @param {Number} keyCode
     * @return {Boolean}
     */
    isEdit: function (keyCode) {
        return lists.contains([
            KEY_MAP.BACKSPACE,
            KEY_MAP.TAB,
            KEY_MAP.ENTER,
            KEY_MAP.SPACE,
            KEY_MAP.DELETE
        ], keyCode);
    },
    /**
     * @method isMove
     *
     * @param {Number} keyCode
     * @return {Boolean}
     */
    isMove: function (keyCode) {
        return lists.contains([
            KEY_MAP.LEFT,
            KEY_MAP.UP,
            KEY_MAP.RIGHT,
            KEY_MAP.DOWN
        ], keyCode);
    },
    /**
     * @property {Object} nameFromCode
     * @property {String} nameFromCode.8 "BACKSPACE"
     */
    nameFromCode: func.invertObject(KEY_MAP),
    code: KEY_MAP
};

/**
 * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
 *
 * @param {TextRange} textRange
 * @param {Boolean} isStart
 * @return {BoundaryPoint}
 *
 * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
 */
function textRangeToPoint(textRange, isStart) {
    var container = textRange.parentElement();
    var offset;
    var tester = document.body.createTextRange();
    var prevContainer;
    var childNodes = lists.from(container.childNodes);
    for (offset = 0; offset < childNodes.length; offset++) {
        if (dom.isText(childNodes[offset])) {
            continue;
        }
        tester.moveToElementText(childNodes[offset]);
        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
            break;
        }
        prevContainer = childNodes[offset];
    }
    if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
        var textRangeStart = document.body.createTextRange();
        var curTextNode = null;
        textRangeStart.moveToElementText(prevContainer || container);
        textRangeStart.collapse(!prevContainer);
        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
        var pointTester = textRange.duplicate();
        pointTester.setEndPoint('StartToStart', textRangeStart);
        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
            textCount -= curTextNode.nodeValue.length;
            curTextNode = curTextNode.nextSibling;
        }
        // [workaround] enforce IE to re-reference curTextNode, hack
        var dummy = curTextNode.nodeValue; // eslint-disable-line
        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
            textCount === curTextNode.nodeValue.length) {
            textCount -= curTextNode.nodeValue.length;
            curTextNode = curTextNode.nextSibling;
        }
        container = curTextNode;
        offset = textCount;
    }
    return {
        cont: container,
        offset: offset
    };
}
/**
 * return TextRange from boundary point (inspired by google closure-library)
 * @param {BoundaryPoint} point
 * @return {TextRange}
 */
function pointToTextRange(point) {
    var textRangeInfo = function (container, offset) {
        var node, isCollapseToStart;
        if (dom.isText(container)) {
            var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
            var prevContainer = lists.last(prevTextNodes).previousSibling;
            node = prevContainer || container.parentNode;
            offset += lists.sum(lists.tail(prevTextNodes), dom.nodeLength);
            isCollapseToStart = !prevContainer;
        }
        else {
            node = container.childNodes[offset] || container;
            if (dom.isText(node)) {
                return textRangeInfo(node, 0);
            }
            offset = 0;
            isCollapseToStart = false;
        }
        return {
            node: node,
            collapseToStart: isCollapseToStart,
            offset: offset
        };
    };
    var textRange = document.body.createTextRange();
    var info = textRangeInfo(point.node, point.offset);
    textRange.moveToElementText(info.node);
    textRange.collapse(info.collapseToStart);
    textRange.moveStart('character', info.offset);
    return textRange;
}
/**
   * Wrapped Range
   *
   * @constructor
   * @param {Node} sc - start container
   * @param {Number} so - start offset
   * @param {Node} ec - end container
   * @param {Number} eo - end offset
   */
var WrappedRange = /** @class */ (function () {
    function WrappedRange(sc, so, ec, eo) {
        this.sc = sc;
        this.so = so;
        this.ec = ec;
        this.eo = eo;
        // isOnEditable: judge whether range is on editable or not
        this.isOnEditable = this.makeIsOn(dom.isEditable);
        // isOnList: judge whether range is on list node or not
        this.isOnList = this.makeIsOn(dom.isList);
        // isOnAnchor: judge whether range is on anchor node or not
        this.isOnAnchor = this.makeIsOn(dom.isAnchor);
        // isOnCell: judge whether range is on cell node or not
        this.isOnCell = this.makeIsOn(dom.isCell);
        // isOnData: judge whether range is on data node or not
        this.isOnData = this.makeIsOn(dom.isData);
    }
    // nativeRange: get nativeRange from sc, so, ec, eo
    WrappedRange.prototype.nativeRange = function () {
        if (env.isW3CRangeSupport) {
            var w3cRange = document.createRange();
            w3cRange.setStart(this.sc, this.so);
            w3cRange.setEnd(this.ec, this.eo);
            return w3cRange;
        }
        else {
            var textRange = pointToTextRange({
                node: this.sc,
                offset: this.so
            });
            textRange.setEndPoint('EndToEnd', pointToTextRange({
                node: this.ec,
                offset: this.eo
            }));
            return textRange;
        }
    };
    WrappedRange.prototype.getPoints = function () {
        return {
            sc: this.sc,
            so: this.so,
            ec: this.ec,
            eo: this.eo
        };
    };
    WrappedRange.prototype.getStartPoint = function () {
        return {
            node: this.sc,
            offset: this.so
        };
    };
    WrappedRange.prototype.getEndPoint = function () {
        return {
            node: this.ec,
            offset: this.eo
        };
    };
    /**
     * select update visible range
     */
    WrappedRange.prototype.select = function () {
        var nativeRng = this.nativeRange();
        if (env.isW3CRangeSupport) {
            var selection = document.getSelection();
            if (selection.rangeCount > 0) {
                selection.removeAllRanges();
            }
            selection.addRange(nativeRng);
        }
        else {
            nativeRng.select();
        }
        return this;
    };
    /**
     * Moves the scrollbar to start container(sc) of current range
     *
     * @return {WrappedRange}
     */
    WrappedRange.prototype.scrollIntoView = function (container) {
        var height = $$1(container).height();
        if (container.scrollTop + height < this.sc.offsetTop) {
            container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
        }
        return this;
    };
    /**
     * @return {WrappedRange}
     */
    WrappedRange.prototype.normalize = function () {
        /**
         * @param {BoundaryPoint} point
         * @param {Boolean} isLeftToRight
         * @return {BoundaryPoint}
         */
        var getVisiblePoint = function (point, isLeftToRight) {
            if ((dom.isVisiblePoint(point) && !dom.isEdgePoint(point)) ||
                (dom.isVisiblePoint(point) && dom.isRightEdgePoint(point) && !isLeftToRight) ||
                (dom.isVisiblePoint(point) && dom.isLeftEdgePoint(point) && isLeftToRight) ||
                (dom.isVisiblePoint(point) && dom.isBlock(point.node) && dom.isEmpty(point.node))) {
                return point;
            }
            // point on block's edge
            var block = dom.ancestor(point.node, dom.isBlock);
            if (((dom.isLeftEdgePointOf(point, block) || dom.isVoid(dom.prevPoint(point).node)) && !isLeftToRight) ||
                ((dom.isRightEdgePointOf(point, block) || dom.isVoid(dom.nextPoint(point).node)) && isLeftToRight)) {
                // returns point already on visible point
                if (dom.isVisiblePoint(point)) {
                    return point;
                }
                // reverse direction
                isLeftToRight = !isLeftToRight;
            }
            var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint)
                : dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
            return nextPoint || point;
        };
        var endPoint = getVisiblePoint(this.getEndPoint(), false);
        var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);
        return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    };
    /**
     * returns matched nodes on range
     *
     * @param {Function} [pred] - predicate function
     * @param {Object} [options]
     * @param {Boolean} [options.includeAncestor]
     * @param {Boolean} [options.fullyContains]
     * @return {Node[]}
     */
    WrappedRange.prototype.nodes = function (pred, options) {
        pred = pred || func.ok;
        var includeAncestor = options && options.includeAncestor;
        var fullyContains = options && options.fullyContains;
        // TODO compare points and sort
        var startPoint = this.getStartPoint();
        var endPoint = this.getEndPoint();
        var nodes = [];
        var leftEdgeNodes = [];
        dom.walkPoint(startPoint, endPoint, function (point) {
            if (dom.isEditable(point.node)) {
                return;
            }
            var node;
            if (fullyContains) {
                if (dom.isLeftEdgePoint(point)) {
                    leftEdgeNodes.push(point.node);
                }
                if (dom.isRightEdgePoint(point) && lists.contains(leftEdgeNodes, point.node)) {
                    node = point.node;
                }
            }
            else if (includeAncestor) {
                node = dom.ancestor(point.node, pred);
            }
            else {
                node = point.node;
            }
            if (node && pred(node)) {
                nodes.push(node);
            }
        }, true);
        return lists.unique(nodes);
    };
    /**
     * returns commonAncestor of range
     * @return {Element} - commonAncestor
     */
    WrappedRange.prototype.commonAncestor = function () {
        return dom.commonAncestor(this.sc, this.ec);
    };
    /**
     * returns expanded range by pred
     *
     * @param {Function} pred - predicate function
     * @return {WrappedRange}
     */
    WrappedRange.prototype.expand = function (pred) {
        var startAncestor = dom.ancestor(this.sc, pred);
        var endAncestor = dom.ancestor(this.ec, pred);
        if (!startAncestor && !endAncestor) {
            return new WrappedRange(this.sc, this.so, this.ec, this.eo);
        }
        var boundaryPoints = this.getPoints();
        if (startAncestor) {
            boundaryPoints.sc = startAncestor;
            boundaryPoints.so = 0;
        }
        if (endAncestor) {
            boundaryPoints.ec = endAncestor;
            boundaryPoints.eo = dom.nodeLength(endAncestor);
        }
        return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
    };
    /**
     * @param {Boolean} isCollapseToStart
     * @return {WrappedRange}
     */
    WrappedRange.prototype.collapse = function (isCollapseToStart) {
        if (isCollapseToStart) {
            return new WrappedRange(this.sc, this.so, this.sc, this.so);
        }
        else {
            return new WrappedRange(this.ec, this.eo, this.ec, this.eo);
        }
    };
    /**
     * splitText on range
     */
    WrappedRange.prototype.splitText = function () {
        var isSameContainer = this.sc === this.ec;
        var boundaryPoints = this.getPoints();
        if (dom.isText(this.ec) && !dom.isEdgePoint(this.getEndPoint())) {
            this.ec.splitText(this.eo);
        }
        if (dom.isText(this.sc) && !dom.isEdgePoint(this.getStartPoint())) {
            boundaryPoints.sc = this.sc.splitText(this.so);
            boundaryPoints.so = 0;
            if (isSameContainer) {
                boundaryPoints.ec = boundaryPoints.sc;
                boundaryPoints.eo = this.eo - this.so;
            }
        }
        return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
    };
    /**
     * delete contents on range
     * @return {WrappedRange}
     */
    WrappedRange.prototype.deleteContents = function () {
        if (this.isCollapsed()) {
            return this;
        }
        var rng = this.splitText();
        var nodes = rng.nodes(null, {
            fullyContains: true
        });
        // find new cursor point
        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
            return !lists.contains(nodes, point.node);
        });
        var emptyParents = [];
        $$1.each(nodes, function (idx, node) {
            // find empty parents
            var parent = node.parentNode;
            if (point.node !== parent && dom.nodeLength(parent) === 1) {
                emptyParents.push(parent);
            }
            dom.remove(node, false);
        });
        // remove empty parents
        $$1.each(emptyParents, function (idx, node) {
            dom.remove(node, false);
        });
        return new WrappedRange(point.node, point.offset, point.node, point.offset).normalize();
    };
    /**
     * makeIsOn: return isOn(pred) function
     */
    WrappedRange.prototype.makeIsOn = function (pred) {
        return function () {
            var ancestor = dom.ancestor(this.sc, pred);
            return !!ancestor && (ancestor === dom.ancestor(this.ec, pred));
        };
    };
    /**
     * @param {Function} pred
     * @return {Boolean}
     */
    WrappedRange.prototype.isLeftEdgeOf = function (pred) {
        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
            return false;
        }
        var node = dom.ancestor(this.sc, pred);
        return node && dom.isLeftEdgeOf(this.sc, node);
    };
    /**
     * returns whether range was collapsed or not
     */
    WrappedRange.prototype.isCollapsed = function () {
        return this.sc === this.ec && this.so === this.eo;
    };
    /**
     * wrap inline nodes which children of body with paragraph
     *
     * @return {WrappedRange}
     */
    WrappedRange.prototype.wrapBodyInlineWithPara = function () {
        if (dom.isBodyContainer(this.sc) && dom.isEmpty(this.sc)) {
            this.sc.innerHTML = dom.emptyPara;
            return new WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
        }
        /**
         * [workaround] firefox often create range on not visible point. so normalize here.
         *  - firefox: |<p>text</p>|
         *  - chrome: <p>|text|</p>
         */
        var rng = this.normalize();
        if (dom.isParaInline(this.sc) || dom.isPara(this.sc)) {
            return rng;
        }
        // find inline top ancestor
        var topAncestor;
        if (dom.isInline(rng.sc)) {
            var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
            topAncestor = lists.last(ancestors);
            if (!dom.isInline(topAncestor)) {
                topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
            }
        }
        else {
            topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
        }
        // siblings not in paragraph
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));
        // wrap with paragraph
        if (inlineSiblings.length) {
            var para = dom.wrap(lists.head(inlineSiblings), 'p');
            dom.appendChildNodes(para, lists.tail(inlineSiblings));
        }
        return this.normalize();
    };
    /**
     * insert node at current cursor
     *
     * @param {Node} node
     * @return {Node}
     */
    WrappedRange.prototype.insertNode = function (node) {
        var rng = this.wrapBodyInlineWithPara().deleteContents();
        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));
        if (info.rightNode) {
            info.rightNode.parentNode.insertBefore(node, info.rightNode);
        }
        else {
            info.container.appendChild(node);
        }
        return node;
    };
    /**
     * insert html at current cursor
     */
    WrappedRange.prototype.pasteHTML = function (markup) {
        var contentsContainer = $$1('<div></div>').html(markup)[0];
        var childNodes = lists.from(contentsContainer.childNodes);
        var rng = this.wrapBodyInlineWithPara().deleteContents();
        return childNodes.reverse().map(function (childNode) {
            return rng.insertNode(childNode);
        }).reverse();
    };
    /**
     * returns text in range
     *
     * @return {String}
     */
    WrappedRange.prototype.toString = function () {
        var nativeRng = this.nativeRange();
        return env.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
    };
    /**
     * returns range for word before cursor
     *
     * @param {Boolean} [findAfter] - find after cursor, default: false
     * @return {WrappedRange}
     */
    WrappedRange.prototype.getWordRange = function (findAfter) {
        var endPoint = this.getEndPoint();
        if (!dom.isCharPoint(endPoint)) {
            return this;
        }
        var startPoint = dom.prevPointUntil(endPoint, function (point) {
            return !dom.isCharPoint(point);
        });
        if (findAfter) {
            endPoint = dom.nextPointUntil(endPoint, function (point) {
                return !dom.isCharPoint(point);
            });
        }
        return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    };
    /**
     * create offsetPath bookmark
     *
     * @param {Node} editable
     */
    WrappedRange.prototype.bookmark = function (editable) {
        return {
            s: {
                path: dom.makeOffsetPath(editable, this.sc),
                offset: this.so
            },
            e: {
                path: dom.makeOffsetPath(editable, this.ec),
                offset: this.eo
            }
        };
    };
    /**
     * create offsetPath bookmark base on paragraph
     *
     * @param {Node[]} paras
     */
    WrappedRange.prototype.paraBookmark = function (paras) {
        return {
            s: {
                path: lists.tail(dom.makeOffsetPath(lists.head(paras), this.sc)),
                offset: this.so
            },
            e: {
                path: lists.tail(dom.makeOffsetPath(lists.last(paras), this.ec)),
                offset: this.eo
            }
        };
    };
    /**
     * getClientRects
     * @return {Rect[]}
     */
    WrappedRange.prototype.getClientRects = function () {
        var nativeRng = this.nativeRange();
        return nativeRng.getClientRects();
    };
    return WrappedRange;
}());
/**
 * Data structure
 *  * BoundaryPoint: a point of dom tree
 *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
 *
 * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
 */
var range = {
    /**
     * create Range Object From arguments or Browser Selection
     *
     * @param {Node} sc - start container
     * @param {Number} so - start offset
     * @param {Node} ec - end container
     * @param {Number} eo - end offset
     * @return {WrappedRange}
     */
    create: function (sc, so, ec, eo) {
        if (arguments.length === 4) {
            return new WrappedRange(sc, so, ec, eo);
        }
        else if (arguments.length === 2) {
            ec = sc;
            eo = so;
            return new WrappedRange(sc, so, ec, eo);
        }
        else {
            var wrappedRange = this.createFromSelection();
            if (!wrappedRange && arguments.length === 1) {
                wrappedRange = this.createFromNode(arguments[0]);
                return wrappedRange.collapse(dom.emptyPara === arguments[0].innerHTML);
            }
            return wrappedRange;
        }
    },
    createFromSelection: function () {
        var sc, so, ec, eo;
        if (env.isW3CRangeSupport) {
            var selection = document.getSelection();
            if (!selection || selection.rangeCount === 0) {
                return null;
            }
            else if (dom.isBody(selection.anchorNode)) {
                // Firefox: returns entire body as range on initialization.
                // We won't never need it.
                return null;
            }
            var nativeRng = selection.getRangeAt(0);
            sc = nativeRng.startContainer;
            so = nativeRng.startOffset;
            ec = nativeRng.endContainer;
            eo = nativeRng.endOffset;
        }
        else {
            var textRange = document.selection.createRange();
            var textRangeEnd = textRange.duplicate();
            textRangeEnd.collapse(false);
            var textRangeStart = textRange;
            textRangeStart.collapse(true);
            var startPoint = textRangeToPoint(textRangeStart, true);
            var endPoint = textRangeToPoint(textRangeEnd, false);
            // same visible point case: range was collapsed.
            if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
                dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
                endPoint.node.nextSibling === startPoint.node) {
                startPoint = endPoint;
            }
            sc = startPoint.cont;
            so = startPoint.offset;
            ec = endPoint.cont;
            eo = endPoint.offset;
        }
        return new WrappedRange(sc, so, ec, eo);
    },
    /**
     * @method
     *
     * create WrappedRange from node
     *
     * @param {Node} node
     * @return {WrappedRange}
     */
    createFromNode: function (node) {
        var sc = node;
        var so = 0;
        var ec = node;
        var eo = dom.nodeLength(ec);
        // browsers can't target a picture or void node
        if (dom.isVoid(sc)) {
            so = dom.listPrev(sc).length - 1;
            sc = sc.parentNode;
        }
        if (dom.isBR(ec)) {
            eo = dom.listPrev(ec).length - 1;
            ec = ec.parentNode;
        }
        else if (dom.isVoid(ec)) {
            eo = dom.listPrev(ec).length;
            ec = ec.parentNode;
        }
        return this.create(sc, so, ec, eo);
    },
    /**
     * create WrappedRange from node after position
     *
     * @param {Node} node
     * @return {WrappedRange}
     */
    createFromNodeBefore: function (node) {
        return this.createFromNode(node).collapse(true);
    },
    /**
     * create WrappedRange from node after position
     *
     * @param {Node} node
     * @return {WrappedRange}
     */
    createFromNodeAfter: function (node) {
        return this.createFromNode(node).collapse();
    },
    /**
     * @method
     *
     * create WrappedRange from bookmark
     *
     * @param {Node} editable
     * @param {Object} bookmark
     * @return {WrappedRange}
     */
    createFromBookmark: function (editable, bookmark) {
        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
        var so = bookmark.s.offset;
        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
        var eo = bookmark.e.offset;
        return new WrappedRange(sc, so, ec, eo);
    },
    /**
     * @method
     *
     * create WrappedRange from paraBookmark
     *
     * @param {Object} bookmark
     * @param {Node[]} paras
     * @return {WrappedRange}
     */
    createFromParaBookmark: function (bookmark, paras) {
        var so = bookmark.s.offset;
        var eo = bookmark.e.offset;
        var sc = dom.fromOffsetPath(lists.head(paras), bookmark.s.path);
        var ec = dom.fromOffsetPath(lists.last(paras), bookmark.e.path);
        return new WrappedRange(sc, so, ec, eo);
    }
};

/**
 * @method readFileAsDataURL
 *
 * read contents of file as representing URL
 *
 * @param {File} file
 * @return {Promise} - then: dataUrl
 */
function readFileAsDataURL(file) {
    return $$1.Deferred(function (deferred) {
        $$1.extend(new FileReader(), {
            onload: function (e) {
                var dataURL = e.target.result;
                deferred.resolve(dataURL);
            },
            onerror: function (err) {
                deferred.reject(err);
            }
        }).readAsDataURL(file);
    }).promise();
}
/**
 * @method createImage
 *
 * create `<image>` from url string
 *
 * @param {String} url
 * @return {Promise} - then: $image
 */
function createImage(url) {
    return $$1.Deferred(function (deferred) {
        var $img = $$1('<img>');
        $img.one('load', function () {
            $img.off('error abort');
            deferred.resolve($img);
        }).one('error abort', function () {
            $img.off('load').detach();
            deferred.reject($img);
        }).css({
            display: 'none'
        }).appendTo(document.body).attr('src', url);
    }).promise();
}

var History = /** @class */ (function () {
    function History($editable) {
        this.stack = [];
        this.stackOffset = -1;
        this.$editable = $editable;
        this.editable = $editable[0];
    }
    History.prototype.makeSnapshot = function () {
        var rng = range.create(this.editable);
        var emptyBookmark = { s: { path: [], offset: 0 }, e: { path: [], offset: 0 } };
        return {
            contents: this.$editable.html(),
            bookmark: (rng ? rng.bookmark(this.editable) : emptyBookmark)
        };
    };
    History.prototype.applySnapshot = function (snapshot) {
        if (snapshot.contents !== null) {
            this.$editable.html(snapshot.contents);
        }
        if (snapshot.bookmark !== null) {
            range.createFromBookmark(this.editable, snapshot.bookmark).select();
        }
    };
    /**
    * @method rewind
    * Rewinds the history stack back to the first snapshot taken.
    * Leaves the stack intact, so that "Redo" can still be used.
    */
    History.prototype.rewind = function () {
        // Create snap shot if not yet recorded
        if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
            this.recordUndo();
        }
        // Return to the first available snapshot.
        this.stackOffset = 0;
        // Apply that snapshot.
        this.applySnapshot(this.stack[this.stackOffset]);
    };
    /**
    * @method reset
    * Resets the history stack completely; reverting to an empty editor.
    */
    History.prototype.reset = function () {
        // Clear the stack.
        this.stack = [];
        // Restore stackOffset to its original value.
        this.stackOffset = -1;
        // Clear the editable area.
        this.$editable.html('');
        // Record our first snapshot (of nothing).
        this.recordUndo();
    };
    /**
     * undo
     */
    History.prototype.undo = function () {
        // Create snap shot if not yet recorded
        if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
            this.recordUndo();
        }
        if (this.stackOffset > 0) {
            this.stackOffset--;
            this.applySnapshot(this.stack[this.stackOffset]);
        }
    };
    /**
     * redo
     */
    History.prototype.redo = function () {
        if (this.stack.length - 1 > this.stackOffset) {
            this.stackOffset++;
            this.applySnapshot(this.stack[this.stackOffset]);
        }
    };
    /**
     * recorded undo
     */
    History.prototype.recordUndo = function () {
        this.stackOffset++;
        // Wash out stack after stackOffset
        if (this.stack.length > this.stackOffset) {
            this.stack = this.stack.slice(0, this.stackOffset);
        }
        // Create new snapshot and push it to the end
        this.stack.push(this.makeSnapshot());
    };
    return History;
}());

var Style = /** @class */ (function () {
    function Style() {
    }
    /**
     * @method jQueryCSS
     *
     * [workaround] for old jQuery
     * passing an array of style properties to .css()
     * will result in an object of property-value pairs.
     * (compability with version < 1.9)
     *
     * @private
     * @param  {jQuery} $obj
     * @param  {Array} propertyNames - An array of one or more CSS properties.
     * @return {Object}
     */
    Style.prototype.jQueryCSS = function ($obj, propertyNames) {
        if (env.jqueryVersion < 1.9) {
            var result_1 = {};
            $$1.each(propertyNames, function (idx, propertyName) {
                result_1[propertyName] = $obj.css(propertyName);
            });
            return result_1;
        }
        return $obj.css(propertyNames);
    };
    /**
     * returns style object from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    Style.prototype.fromNode = function ($node) {
        var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
        var styleInfo = this.jQueryCSS($node, properties) || {};
        styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);
        return styleInfo;
    };
    /**
     * paragraph level style
     *
     * @param {WrappedRange} rng
     * @param {Object} styleInfo
     */
    Style.prototype.stylePara = function (rng, styleInfo) {
        $$1.each(rng.nodes(dom.isPara, {
            includeAncestor: true
        }), function (idx, para) {
            $$1(para).css(styleInfo);
        });
    };
    /**
     * insert and returns styleNodes on range.
     *
     * @param {WrappedRange} rng
     * @param {Object} [options] - options for styleNodes
     * @param {String} [options.nodeName] - default: `SPAN`
     * @param {Boolean} [options.expandClosestSibling] - default: `false`
     * @param {Boolean} [options.onlyPartialContains] - default: `false`
     * @return {Node[]}
     */
    Style.prototype.styleNodes = function (rng, options) {
        rng = rng.splitText();
        var nodeName = (options && options.nodeName) || 'SPAN';
        var expandClosestSibling = !!(options && options.expandClosestSibling);
        var onlyPartialContains = !!(options && options.onlyPartialContains);
        if (rng.isCollapsed()) {
            return [rng.insertNode(dom.create(nodeName))];
        }
        var pred = dom.makePredByNodeName(nodeName);
        var nodes = rng.nodes(dom.isText, {
            fullyContains: true
        }).map(function (text) {
            return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
        });
        if (expandClosestSibling) {
            if (onlyPartialContains) {
                var nodesInRange_1 = rng.nodes();
                // compose with partial contains predication
                pred = func.and(pred, function (node) {
                    return lists.contains(nodesInRange_1, node);
                });
            }
            return nodes.map(function (node) {
                var siblings = dom.withClosestSiblings(node, pred);
                var head = lists.head(siblings);
                var tails = lists.tail(siblings);
                $$1.each(tails, function (idx, elem) {
                    dom.appendChildNodes(head, elem.childNodes);
                    dom.remove(elem);
                });
                return lists.head(siblings);
            });
        }
        else {
            return nodes;
        }
    };
    /**
     * get current style on cursor
     *
     * @param {WrappedRange} rng
     * @return {Object} - object contains style properties.
     */
    Style.prototype.current = function (rng) {
        var $cont = $$1(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
        var styleInfo = this.fromNode($cont);
        // document.queryCommandState for toggle state
        // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"
        try {
            styleInfo = $$1.extend(styleInfo, {
                'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
                'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
                'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
                'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
                'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
                'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
                'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
            });
        }
        catch (e) { }
        // list-style-type to list-style(unordered, ordered)
        if (!rng.isOnList()) {
            styleInfo['list-style'] = 'none';
        }
        else {
            var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
            var isUnordered = $$1.inArray(styleInfo['list-style-type'], orderedTypes) > -1;
            styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
        }
        var para = dom.ancestor(rng.sc, dom.isPara);
        if (para && para.style['line-height']) {
            styleInfo['line-height'] = para.style.lineHeight;
        }
        else {
            var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
            styleInfo['line-height'] = lineHeight.toFixed(1);
        }
        styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
        styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
        styleInfo.range = rng;
        return styleInfo;
    };
    return Style;
}());

var Bullet = /** @class */ (function () {
    function Bullet() {
    }
    /**
     * toggle ordered list
     */
    Bullet.prototype.insertOrderedList = function (editable) {
        this.toggleList('OL', editable);
    };
    /**
     * toggle unordered list
     */
    Bullet.prototype.insertUnorderedList = function (editable) {
        this.toggleList('UL', editable);
    };
    /**
     * indent
     */
    Bullet.prototype.indent = function (editable) {
        var _this = this;
        var rng = range.create(editable).wrapBodyInlineWithPara();
        var paras = rng.nodes(dom.isPara, { includeAncestor: true });
        var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
        $$1.each(clustereds, function (idx, paras) {
            var head = lists.head(paras);
            if (dom.isLi(head)) {
                _this.wrapList(paras, head.parentNode.nodeName);
            }
            else {
                $$1.each(paras, function (idx, para) {
                    $$1(para).css('marginLeft', function (idx, val) {
                        return (parseInt(val, 10) || 0) + 25;
                    });
                });
            }
        });
        rng.select();
    };
    /**
     * outdent
     */
    Bullet.prototype.outdent = function (editable) {
        var _this = this;
        var rng = range.create(editable).wrapBodyInlineWithPara();
        var paras = rng.nodes(dom.isPara, { includeAncestor: true });
        var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
        $$1.each(clustereds, function (idx, paras) {
            var head = lists.head(paras);
            if (dom.isLi(head)) {
                _this.releaseList([paras]);
            }
            else {
                $$1.each(paras, function (idx, para) {
                    $$1(para).css('marginLeft', function (idx, val) {
                        val = (parseInt(val, 10) || 0);
                        return val > 25 ? val - 25 : '';
                    });
                });
            }
        });
        rng.select();
    };
    /**
     * toggle list
     *
     * @param {String} listName - OL or UL
     */
    Bullet.prototype.toggleList = function (listName, editable) {
        var _this = this;
        var rng = range.create(editable).wrapBodyInlineWithPara();
        var paras = rng.nodes(dom.isPara, { includeAncestor: true });
        var bookmark = rng.paraBookmark(paras);
        var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
        // paragraph to list
        if (lists.find(paras, dom.isPurePara)) {
            var wrappedParas_1 = [];
            $$1.each(clustereds, function (idx, paras) {
                wrappedParas_1 = wrappedParas_1.concat(_this.wrapList(paras, listName));
            });
            paras = wrappedParas_1;
            // list to paragraph or change list style
        }
        else {
            var diffLists = rng.nodes(dom.isList, {
                includeAncestor: true
            }).filter(function (listNode) {
                return !$$1.nodeName(listNode, listName);
            });
            if (diffLists.length) {
                $$1.each(diffLists, function (idx, listNode) {
                    dom.replace(listNode, listName);
                });
            }
            else {
                paras = this.releaseList(clustereds, true);
            }
        }
        range.createFromParaBookmark(bookmark, paras).select();
    };
    /**
     * @param {Node[]} paras
     * @param {String} listName
     * @return {Node[]}
     */
    Bullet.prototype.wrapList = function (paras, listName) {
        var head = lists.head(paras);
        var last = lists.last(paras);
        var prevList = dom.isList(head.previousSibling) && head.previousSibling;
        var nextList = dom.isList(last.nextSibling) && last.nextSibling;
        var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);
        // P to LI
        paras = paras.map(function (para) {
            return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
        });
        // append to list(<ul>, <ol>)
        dom.appendChildNodes(listNode, paras);
        if (nextList) {
            dom.appendChildNodes(listNode, lists.from(nextList.childNodes));
            dom.remove(nextList);
        }
        return paras;
    };
    /**
     * @method releaseList
     *
     * @param {Array[]} clustereds
     * @param {Boolean} isEscapseToBody
     * @return {Node[]}
     */
    Bullet.prototype.releaseList = function (clustereds, isEscapseToBody) {
        var releasedParas = [];
        $$1.each(clustereds, function (idx, paras) {
            var head = lists.head(paras);
            var last = lists.last(paras);
            var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) : head.parentNode;
            var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
                node: last.parentNode,
                offset: dom.position(last) + 1
            }, {
                isSkipPaddingBlankHTML: true
            }) : null;
            var middleList = dom.splitTree(headList, {
                node: head.parentNode,
                offset: dom.position(head)
            }, {
                isSkipPaddingBlankHTML: true
            });
            paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi)
                : lists.from(middleList.childNodes).filter(dom.isLi);
            // LI to P
            if (isEscapseToBody || !dom.isList(headList.parentNode)) {
                paras = paras.map(function (para) {
                    return dom.replace(para, 'P');
                });
            }
            $$1.each(lists.from(paras).reverse(), function (idx, para) {
                dom.insertAfter(para, headList);
            });
            // remove empty lists
            var rootLists = lists.compact([headList, middleList, lastList]);
            $$1.each(rootLists, function (idx, rootList) {
                var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
                $$1.each(listNodes.reverse(), function (idx, listNode) {
                    if (!dom.nodeLength(listNode)) {
                        dom.remove(listNode, true);
                    }
                });
            });
            releasedParas = releasedParas.concat(paras);
        });
        return releasedParas;
    };
    return Bullet;
}());

/**
 * @class editing.Typing
 *
 * Typing
 *
 */
var Typing = /** @class */ (function () {
    function Typing() {
        // a Bullet instance to toggle lists off
        this.bullet = new Bullet();
    }
    /**
     * insert tab
     *
     * @param {WrappedRange} rng
     * @param {Number} tabsize
     */
    Typing.prototype.insertTab = function (rng, tabsize) {
        var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
        rng = rng.deleteContents();
        rng.insertNode(tab, true);
        rng = range.create(tab, tabsize);
        rng.select();
    };
    /**
     * insert paragraph
     */
    Typing.prototype.insertParagraph = function (editable) {
        var rng = range.create(editable);
        // deleteContents on range.
        rng = rng.deleteContents();
        // Wrap range if it needs to be wrapped by paragraph
        rng = rng.wrapBodyInlineWithPara();
        // finding paragraph
        var splitRoot = dom.ancestor(rng.sc, dom.isPara);
        var nextPara;
        // on paragraph: split paragraph
        if (splitRoot) {
            // if it is an empty line with li
            if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {
                // toogle UL/OL and escape
                this.bullet.toggleList(splitRoot.parentNode.nodeName);
                return;
                // if it is an empty line with para on blockquote
            }
            else if (dom.isEmpty(splitRoot) && dom.isPara(splitRoot) && dom.isBlockquote(splitRoot.parentNode)) {
                // escape blockquote
                dom.insertAfter(splitRoot, splitRoot.parentNode);
                nextPara = splitRoot;
                // if new line has content (not a line break)
            }
            else {
                nextPara = dom.splitTree(splitRoot, rng.getStartPoint());
                var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
                emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));
                $$1.each(emptyAnchors, function (idx, anchor) {
                    dom.remove(anchor);
                });
                // replace empty heading, pre or custom-made styleTag with P tag
                if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
                    nextPara = dom.replace(nextPara, 'p');
                }
            }
            // no paragraph: insert empty paragraph
        }
        else {
            var next = rng.sc.childNodes[rng.so];
            nextPara = $$1(dom.emptyPara)[0];
            if (next) {
                rng.sc.insertBefore(nextPara, next);
            }
            else {
                rng.sc.appendChild(nextPara);
            }
        }
        range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
    };
    return Typing;
}());

/**
 * @class Create a virtual table to create what actions to do in change.
 * @param {object} startPoint Cell selected to apply change.
 * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
 * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
 * @param {object} domTable Dom element of table to make changes.
 */
var TableResultAction = function (startPoint, where, action, domTable) {
    var _startPoint = { 'colPos': 0, 'rowPos': 0 };
    var _virtualTable = [];
    var _actionCellList = [];
    /// ///////////////////////////////////////////
    // Private functions
    /// ///////////////////////////////////////////
    /**
     * Set the startPoint of action.
     */
    function setStartPoint() {
        if (!startPoint || !startPoint.tagName || (startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th')) {
            console.error('Impossible to identify start Cell point.', startPoint);
            return;
        }
        _startPoint.colPos = startPoint.cellIndex;
        if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
            console.error('Impossible to identify start Row point.', startPoint);
            return;
        }
        _startPoint.rowPos = startPoint.parentElement.rowIndex;
    }
    /**
     * Define virtual table position info object.
     *
     * @param {int} rowIndex Index position in line of virtual table.
     * @param {int} cellIndex Index position in column of virtual table.
     * @param {object} baseRow Row affected by this position.
     * @param {object} baseCell Cell affected by this position.
     * @param {bool} isSpan Inform if it is an span cell/row.
     */
    function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
        var objPosition = {
            'baseRow': baseRow,
            'baseCell': baseCell,
            'isRowSpan': isRowSpan,
            'isColSpan': isColSpan,
            'isVirtual': isVirtualCell
        };
        if (!_virtualTable[rowIndex]) {
            _virtualTable[rowIndex] = [];
        }
        _virtualTable[rowIndex][cellIndex] = objPosition;
    }
    /**
     * Create action cell object.
     *
     * @param {object} virtualTableCellObj Object of specific position on virtual table.
     * @param {enum} resultAction Action to be applied in that item.
     */
    function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
        return {
            'baseCell': virtualTableCellObj.baseCell,
            'action': resultAction,
            'virtualTable': {
                'rowIndex': virtualRowPosition,
                'cellIndex': virtualColPosition
            }
        };
    }
    /**
     * Recover free index of row to append Cell.
     *
     * @param {int} rowIndex Index of row to find free space.
     * @param {int} cellIndex Index of cell to find free space in table.
     */
    function recoverCellIndex(rowIndex, cellIndex) {
        if (!_virtualTable[rowIndex]) {
            return cellIndex;
        }
        if (!_virtualTable[rowIndex][cellIndex]) {
            return cellIndex;
        }
        var newCellIndex = cellIndex;
        while (_virtualTable[rowIndex][newCellIndex]) {
            newCellIndex++;
            if (!_virtualTable[rowIndex][newCellIndex]) {
                return newCellIndex;
            }
        }
    }
    /**
     * Recover info about row and cell and add information to virtual table.
     *
     * @param {object} row Row to recover information.
     * @param {object} cell Cell to recover information.
     */
    function addCellInfoToVirtual(row, cell) {
        var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
        var cellHasColspan = (cell.colSpan > 1);
        var cellHasRowspan = (cell.rowSpan > 1);
        var isThisSelectedCell = (row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos);
        setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false);
        // Add span rows to virtual Table.
        var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;
        if (rowspanNumber > 1) {
            for (var rp = 1; rp < rowspanNumber; rp++) {
                var rowspanIndex = row.rowIndex + rp;
                adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
                setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
            }
        }
        // Add span cols to virtual table.
        var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;
        if (colspanNumber > 1) {
            for (var cp = 1; cp < colspanNumber; cp++) {
                var cellspanIndex = recoverCellIndex(row.rowIndex, (cellIndex + cp));
                adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
                setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
            }
        }
    }
    /**
     * Process validation and adjust of start point if needed
     *
     * @param {int} rowIndex
     * @param {int} cellIndex
     * @param {object} cell
     * @param {bool} isSelectedCell
     */
    function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
        if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
            _startPoint.colPos++;
        }
    }
    /**
     * Create virtual table of cells with all cells, including span cells.
     */
    function createVirtualTable() {
        var rows = domTable.rows;
        for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            var cells = rows[rowIndex].cells;
            for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
                addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
            }
        }
    }
    /**
     * Get action to be applied on the cell.
     *
     * @param {object} cell virtual table cell to apply action
     */
    function getDeleteResultActionToCell(cell) {
        switch (where) {
            case TableResultAction.where.Column:
                if (cell.isColSpan) {
                    return TableResultAction.resultAction.SubtractSpanCount;
                }
                break;
            case TableResultAction.where.Row:
                if (!cell.isVirtual && cell.isRowSpan) {
                    return TableResultAction.resultAction.AddCell;
                }
                else if (cell.isRowSpan) {
                    return TableResultAction.resultAction.SubtractSpanCount;
                }
                break;
        }
        return TableResultAction.resultAction.RemoveCell;
    }
    /**
     * Get action to be applied on the cell.
     *
     * @param {object} cell virtual table cell to apply action
     */
    function getAddResultActionToCell(cell) {
        switch (where) {
            case TableResultAction.where.Column:
                if (cell.isColSpan) {
                    return TableResultAction.resultAction.SumSpanCount;
                }
                else if (cell.isRowSpan && cell.isVirtual) {
                    return TableResultAction.resultAction.Ignore;
                }
                break;
            case TableResultAction.where.Row:
                if (cell.isRowSpan) {
                    return TableResultAction.resultAction.SumSpanCount;
                }
                else if (cell.isColSpan && cell.isVirtual) {
                    return TableResultAction.resultAction.Ignore;
                }
                break;
        }
        return TableResultAction.resultAction.AddCell;
    }
    function init() {
        setStartPoint();
        createVirtualTable();
    }
    /// ///////////////////////////////////////////
    // Public functions
    /// ///////////////////////////////////////////
    /**
     * Recover array os what to do in table.
     */
    this.getActionList = function () {
        var fixedRow = (where === TableResultAction.where.Row) ? _startPoint.rowPos : -1;
        var fixedCol = (where === TableResultAction.where.Column) ? _startPoint.colPos : -1;
        var actualPosition = 0;
        var canContinue = true;
        while (canContinue) {
            var rowPosition = (fixedRow >= 0) ? fixedRow : actualPosition;
            var colPosition = (fixedCol >= 0) ? fixedCol : actualPosition;
            var row = _virtualTable[rowPosition];
            if (!row) {
                canContinue = false;
                return _actionCellList;
            }
            var cell = row[colPosition];
            if (!cell) {
                canContinue = false;
                return _actionCellList;
            }
            // Define action to be applied in this cell
            var resultAction = TableResultAction.resultAction.Ignore;
            switch (action) {
                case TableResultAction.requestAction.Add:
                    resultAction = getAddResultActionToCell(cell);
                    break;
                case TableResultAction.requestAction.Delete:
                    resultAction = getDeleteResultActionToCell(cell);
                    break;
            }
            _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));
            actualPosition++;
        }
        return _actionCellList;
    };
    init();
};
/**
*
* Where action occours enum.
*/
TableResultAction.where = { 'Row': 0, 'Column': 1 };
/**
*
* Requested action to apply enum.
*/
TableResultAction.requestAction = { 'Add': 0, 'Delete': 1 };
/**
*
* Result action to be executed enum.
*/
TableResultAction.resultAction = { 'Ignore': 0, 'SubtractSpanCount': 1, 'RemoveCell': 2, 'AddCell': 3, 'SumSpanCount': 4 };
/**
 *
 * @class editing.Table
 *
 * Table
 *
 */
var Table = /** @class */ (function () {
    function Table() {
    }
    /**
     * handle tab key
     *
     * @param {WrappedRange} rng
     * @param {Boolean} isShift
     */
    Table.prototype.tab = function (rng, isShift) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var table = dom.ancestor(cell, dom.isTable);
        var cells = dom.listDescendant(table, dom.isCell);
        var nextCell = lists[isShift ? 'prev' : 'next'](cells, cell);
        if (nextCell) {
            range.create(nextCell, 0).select();
        }
    };
    /**
     * Add a new row
     *
     * @param {WrappedRange} rng
     * @param {String} position (top/bottom)
     * @return {Node}
     */
    Table.prototype.addRow = function (rng, position) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var currentTr = $$1(cell).closest('tr');
        var trAttributes = this.recoverAttributes(currentTr);
        var html = $$1('<tr' + trAttributes + '></tr>');
        var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Add, $$1(currentTr).closest('table')[0]);
        var actions = vTable.getActionList();
        for (var idCell = 0; idCell < actions.length; idCell++) {
            var currentCell = actions[idCell];
            var tdAttributes = this.recoverAttributes(currentCell.baseCell);
            switch (currentCell.action) {
                case TableResultAction.resultAction.AddCell:
                    html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    break;
                case TableResultAction.resultAction.SumSpanCount:
                    if (position === 'top') {
                        var baseCellTr = currentCell.baseCell.parent;
                        var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;
                        if (isTopFromRowSpan) {
                            var newTd = $$1('<div></div>').append($$1('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                            html.append(newTd);
                            break;
                        }
                    }
                    var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
                    rowspanNumber++;
                    currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
                    break;
            }
        }
        if (position === 'top') {
            currentTr.before(html);
        }
        else {
            var cellHasRowspan = (cell.rowSpan > 1);
            if (cellHasRowspan) {
                var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
                $$1($$1(currentTr).parent().find('tr')[lastTrIndex]).after($$1(html));
                return;
            }
            currentTr.after(html);
        }
    };
    /**
     * Add a new col
     *
     * @param {WrappedRange} rng
     * @param {String} position (left/right)
     * @return {Node}
     */
    Table.prototype.addCol = function (rng, position) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var row = $$1(cell).closest('tr');
        var rowsGroup = $$1(row).siblings();
        rowsGroup.push(row);
        var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Add, $$1(row).closest('table')[0]);
        var actions = vTable.getActionList();
        for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
            var currentCell = actions[actionIndex];
            var tdAttributes = this.recoverAttributes(currentCell.baseCell);
            switch (currentCell.action) {
                case TableResultAction.resultAction.AddCell:
                    if (position === 'right') {
                        $$1(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    }
                    else {
                        $$1(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    }
                    break;
                case TableResultAction.resultAction.SumSpanCount:
                    if (position === 'right') {
                        var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
                        colspanNumber++;
                        currentCell.baseCell.setAttribute('colSpan', colspanNumber);
                    }
                    else {
                        $$1(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    }
                    break;
            }
        }
    };
    /*
    * Copy attributes from element.
    *
    * @param {object} Element to recover attributes.
    * @return {string} Copied string elements.
    */
    Table.prototype.recoverAttributes = function (el) {
        var resultStr = '';
        if (!el) {
            return resultStr;
        }
        var attrList = el.attributes || [];
        for (var i = 0; i < attrList.length; i++) {
            if (attrList[i].name.toLowerCase() === 'id') {
                continue;
            }
            if (attrList[i].specified) {
                resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
            }
        }
        return resultStr;
    };
    /**
     * Delete current row
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    Table.prototype.deleteRow = function (rng) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var row = $$1(cell).closest('tr');
        var cellPos = row.children('td, th').index($$1(cell));
        var rowPos = row[0].rowIndex;
        var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Delete, $$1(row).closest('table')[0]);
        var actions = vTable.getActionList();
        for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
            if (!actions[actionIndex]) {
                continue;
            }
            var baseCell = actions[actionIndex].baseCell;
            var virtualPosition = actions[actionIndex].virtualTable;
            var hasRowspan = (baseCell.rowSpan && baseCell.rowSpan > 1);
            var rowspanNumber = (hasRowspan) ? parseInt(baseCell.rowSpan, 10) : 0;
            switch (actions[actionIndex].action) {
                case TableResultAction.resultAction.Ignore:
                    continue;
                case TableResultAction.resultAction.AddCell:
                    var nextRow = row.next('tr')[0];
                    if (!nextRow) {
                        continue;
                    }
                    var cloneRow = row[0].cells[cellPos];
                    if (hasRowspan) {
                        if (rowspanNumber > 2) {
                            rowspanNumber--;
                            nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                            nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                            nextRow.cells[cellPos].innerHTML = '';
                        }
                        else if (rowspanNumber === 2) {
                            nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                            nextRow.cells[cellPos].removeAttribute('rowSpan');
                            nextRow.cells[cellPos].innerHTML = '';
                        }
                    }
                    continue;
                case TableResultAction.resultAction.SubtractSpanCount:
                    if (hasRowspan) {
                        if (rowspanNumber > 2) {
                            rowspanNumber--;
                            baseCell.setAttribute('rowSpan', rowspanNumber);
                            if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                baseCell.innerHTML = '';
                            }
                        }
                        else if (rowspanNumber === 2) {
                            baseCell.removeAttribute('rowSpan');
                            if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                baseCell.innerHTML = '';
                            }
                        }
                    }
                    continue;
                case TableResultAction.resultAction.RemoveCell:
                    // Do not need remove cell because row will be deleted.
                    continue;
            }
        }
        row.remove();
    };
    /**
     * Delete current col
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    Table.prototype.deleteCol = function (rng) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var row = $$1(cell).closest('tr');
        var cellPos = row.children('td, th').index($$1(cell));
        var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Delete, $$1(row).closest('table')[0]);
        var actions = vTable.getActionList();
        for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
            if (!actions[actionIndex]) {
                continue;
            }
            switch (actions[actionIndex].action) {
                case TableResultAction.resultAction.Ignore:
                    continue;
                case TableResultAction.resultAction.SubtractSpanCount:
                    var baseCell = actions[actionIndex].baseCell;
                    var hasColspan = (baseCell.colSpan && baseCell.colSpan > 1);
                    if (hasColspan) {
                        var colspanNumber = (baseCell.colSpan) ? parseInt(baseCell.colSpan, 10) : 0;
                        if (colspanNumber > 2) {
                            colspanNumber--;
                            baseCell.setAttribute('colSpan', colspanNumber);
                            if (baseCell.cellIndex === cellPos) {
                                baseCell.innerHTML = '';
                            }
                        }
                        else if (colspanNumber === 2) {
                            baseCell.removeAttribute('colSpan');
                            if (baseCell.cellIndex === cellPos) {
                                baseCell.innerHTML = '';
                            }
                        }
                    }
                    continue;
                case TableResultAction.resultAction.RemoveCell:
                    dom.remove(actions[actionIndex].baseCell, true);
                    continue;
            }
        }
    };
    /**
     * create empty table element
     *
     * @param {Number} rowCount
     * @param {Number} colCount
     * @return {Node}
     */
    Table.prototype.createTable = function (colCount, rowCount, options) {
        var tds = [];
        var tdHTML;
        for (var idxCol = 0; idxCol < colCount; idxCol++) {
            tds.push('<td>' + dom.blank + '</td>');
        }
        tdHTML = tds.join('');
        var trs = [];
        var trHTML;
        for (var idxRow = 0; idxRow < rowCount; idxRow++) {
            trs.push('<tr>' + tdHTML + '</tr>');
        }
        trHTML = trs.join('');
        var $table = $$1('<table>' + trHTML + '</table>');
        if (options && options.tableClassName) {
            $table.addClass(options.tableClassName);
        }
        return $table[0];
    };
    /**
     * Delete current table
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    Table.prototype.deleteTable = function (rng) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        $$1(cell).closest('table').remove();
    };
    return Table;
}());

var KEY_BOGUS = 'bogus';
/**
 * @class Editor
 */
var Editor = /** @class */ (function () {
    function Editor(context) {
        var _this = this;
        this.context = context;
        this.$note = context.layoutInfo.note;
        this.$editor = context.layoutInfo.editor;
        this.$editable = context.layoutInfo.editable;
        this.options = context.options;
        this.lang = this.options.langInfo;
        this.editable = this.$editable[0];
        this.lastRange = null;
        this.style = new Style();
        this.table = new Table();
        this.typing = new Typing();
        this.bullet = new Bullet();
        this.history = new History(this.$editable);
        this.context.memo('help.undo', this.lang.help.undo);
        this.context.memo('help.redo', this.lang.help.redo);
        this.context.memo('help.tab', this.lang.help.tab);
        this.context.memo('help.untab', this.lang.help.untab);
        this.context.memo('help.insertParagraph', this.lang.help.insertParagraph);
        this.context.memo('help.insertOrderedList', this.lang.help.insertOrderedList);
        this.context.memo('help.insertUnorderedList', this.lang.help.insertUnorderedList);
        this.context.memo('help.indent', this.lang.help.indent);
        this.context.memo('help.outdent', this.lang.help.outdent);
        this.context.memo('help.formatPara', this.lang.help.formatPara);
        this.context.memo('help.insertHorizontalRule', this.lang.help.insertHorizontalRule);
        this.context.memo('help.fontName', this.lang.help.fontName);
        // native commands(with execCommand), generate function for execCommand
        var commands = [
            'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
            'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
            'formatBlock', 'removeFormat', 'backColor'
        ];
        for (var idx = 0, len = commands.length; idx < len; idx++) {
            this[commands[idx]] = (function (sCmd) {
                return function (value) {
                    _this.beforeCommand();
                    document.execCommand(sCmd, false, value);
                    _this.afterCommand(true);
                };
            })(commands[idx]);
            this.context.memo('help.' + commands[idx], this.lang.help[commands[idx]]);
        }
        this.fontName = this.wrapCommand(function (value) {
            return _this.fontStyling('font-family', "\'" + value + "\'");
        });
        this.fontSize = this.wrapCommand(function (value) {
            return _this.fontStyling('font-size', value + 'px');
        });
        for (var idx = 1; idx <= 6; idx++) {
            this['formatH' + idx] = (function (idx) {
                return function () {
                    _this.formatBlock('H' + idx);
                };
            })(idx);
            this.context.memo('help.formatH' + idx, this.lang.help['formatH' + idx]);
        }
        
        this.insertParagraph = this.wrapCommand(function () {
            _this.typing.insertParagraph(_this.editable);
        });
        this.insertOrderedList = this.wrapCommand(function () {
            _this.bullet.insertOrderedList(_this.editable);
        });
        this.insertUnorderedList = this.wrapCommand(function () {
            _this.bullet.insertUnorderedList(_this.editable);
        });
        this.indent = this.wrapCommand(function () {
            _this.bullet.indent(_this.editable);
        });
        this.outdent = this.wrapCommand(function () {
            _this.bullet.outdent(_this.editable);
        });
        /**
         * insertNode
         * insert node
         * @param {Node} node
         */
        this.insertNode = this.wrapCommand(function (node) {
            if (_this.isLimited($$1(node).text().length)) {
                return;
            }
            var rng = _this.createRange();
            rng.insertNode(node);
            range.createFromNodeAfter(node).select();
        });
        /**
         * insert text
         * @param {String} text
         */
        this.insertText = this.wrapCommand(function (text) {
            if (_this.isLimited(text.length)) {
                return;
            }
            var rng = _this.createRange();
            var textNode = rng.insertNode(dom.createText(text));
            range.create(textNode, dom.nodeLength(textNode)).select();
        });
        /**
         * paste HTML
         * @param {String} markup
         */
        this.pasteHTML = this.wrapCommand(function (markup) {
            if (_this.isLimited(markup.length)) {
                return;
            }
            var contents = _this.createRange().pasteHTML(markup);
            range.createFromNodeAfter(lists.last(contents)).select();
        });
        /**
         * formatBlock
         *
         * @param {String} tagName
         */
        this.formatBlock = this.wrapCommand(function (tagName, $target) {
            var onApplyCustomStyle = _this.options.callbacks.onApplyCustomStyle;
            if (onApplyCustomStyle) {
                onApplyCustomStyle.call(_this, $target, _this.context, _this.onFormatBlock);
            }
            else {
                _this.onFormatBlock(tagName, $target);
            }
        });
        /**
         * insert horizontal rule
         */
        this.insertHorizontalRule = this.wrapCommand(function () {
            var hrNode = _this.createRange().insertNode(dom.create('HR'));
            if (hrNode.nextSibling) {
                range.create(hrNode.nextSibling, 0).normalize().select();
            }
        });
        /**
         * lineHeight
         * @param {String} value
         */
        this.lineHeight = this.wrapCommand(function (value) {
            _this.style.stylePara(_this.createRange(), {
                lineHeight: value
            });
        });
        /**
         * create link (command)
         *
         * @param {Object} linkInfo
         */
        this.createLink = this.wrapCommand(function (linkInfo) {
            var linkUrl = linkInfo.url;
            var linkText = linkInfo.text;
            var isNewWindow = linkInfo.isNewWindow;
            var rng = linkInfo.range || _this.createRange();
            var isTextChanged = rng.toString() !== linkText;
            // handle spaced urls from input
            if (typeof linkUrl === 'string') {
                linkUrl = linkUrl.trim();
            }
            if (_this.options.onCreateLink) {
                linkUrl = _this.options.onCreateLink(linkUrl);
            }
            else {
                // if url doesn't match an URL schema, set http:// as default
                linkUrl = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(linkUrl)
                    ? linkUrl : 'http://' + linkUrl;
            }
            var anchors = [];
            if (isTextChanged) {
                rng = rng.deleteContents();
                var anchor = rng.insertNode($$1('<A>' + linkText + '</A>')[0]);
                anchors.push(anchor);
            }
            else {
                anchors = _this.style.styleNodes(rng, {
                    nodeName: 'A',
                    expandClosestSibling: true,
                    onlyPartialContains: true
                });
            }
            $$1.each(anchors, function (idx, anchor) {
                $$1(anchor).attr('href', linkUrl);
                if (isNewWindow) {
                    $$1(anchor).attr('target', '_blank');
                }
                else {
                    $$1(anchor).removeAttr('target');
                }
            });
            var startRange = range.createFromNodeBefore(lists.head(anchors));
            var startPoint = startRange.getStartPoint();
            var endRange = range.createFromNodeAfter(lists.last(anchors));
            var endPoint = endRange.getEndPoint();
            range.create(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset).select();
        });
        /**
         * setting color
         *
         * @param {Object} sObjColor  color code
         * @param {String} sObjColor.foreColor foreground color
         * @param {String} sObjColor.backColor background color
         */
        this.color = this.wrapCommand(function (colorInfo) {
            var foreColor = colorInfo.foreColor;
            var backColor = colorInfo.backColor;
            if (foreColor) {
                document.execCommand('foreColor', false, foreColor);
            }
            if (backColor) {
                document.execCommand('backColor', false, backColor);
            }
        });
        /**
         * Set foreground color
         *
         * @param {String} colorCode foreground color code
         */
        this.foreColor = this.wrapCommand(function (colorInfo) {
            document.execCommand('styleWithCSS', false, true);
            document.execCommand('foreColor', false, colorInfo);
        });
        /**
         * insert Table
         *
         * @param {String} dimension of table (ex : "5x5")
         */
        this.insertTable = this.wrapCommand(function (dim) {
            var dimension = dim.split('x');
            var rng = _this.createRange().deleteContents();
            rng.insertNode(_this.table.createTable(dimension[0], dimension[1], _this.options));
        });
        /**
         * remove media object and Figure Elements if media object is img with Figure.
         */
        this.removeMedia = this.wrapCommand(function () {
            var $target = $$1(_this.restoreTarget()).parent();
            if ($target.parent('figure').length) {
                $target.parent('figure').remove();
            }
            else {
                $target = $$1(_this.restoreTarget()).detach();
            }
            _this.context.triggerEvent('media.delete', $target, _this.$editable);
        });
        /**
         * float me
         *
         * @param {String} value
         */
        this.floatMe = this.wrapCommand(function (value) {
            var $target = $$1(_this.restoreTarget());
            $target.toggleClass('note-float-left', value === 'left');
            $target.toggleClass('note-float-right', value === 'right');
            $target.css('float', value);
        });
        /**
         * resize overlay element
         * @param {String} value
         */
        this.resize = this.wrapCommand(function (value) {
            var $target = $$1(_this.restoreTarget());
            $target.css({
                width: value * 100 + '%',
                height: ''
            });
        });
    }
    Editor.prototype.initialize = function () {
        var _this = this;
        // bind custom events
        this.$editable.on('keydown', function (event) {
            if (event.keyCode === key.code.ENTER) {
                _this.context.triggerEvent('enter', event);
            }
            _this.context.triggerEvent('keydown', event);
            if (!event.isDefaultPrevented()) {
                if (_this.options.shortcuts) {
                    _this.handleKeyMap(event);
                }
                else {
                    _this.preventDefaultEditableShortCuts(event);
                }
            }
            if (_this.isLimited(1, event)) {
                return false;
            }
        }).on('keyup', function (event) {
            _this.context.triggerEvent('keyup', event);
        }).on('focus', function (event) {
            _this.context.triggerEvent('focus', event);
        }).on('blur', function (event) {
            _this.context.triggerEvent('blur', event);
        }).on('mousedown', function (event) {
            _this.context.triggerEvent('mousedown', event);
        }).on('mouseup', function (event) {
            _this.context.triggerEvent('mouseup', event);
        }).on('scroll', function (event) {
            _this.context.triggerEvent('scroll', event);
        }).on('paste', function (event) {
            _this.context.triggerEvent('paste', event);
        });
        // init content before set event
        this.$editable.html(dom.html(this.$note) || dom.emptyPara);
        this.$editable.on(env.inputEventName, func.debounce(function () {
            _this.context.triggerEvent('change', _this.$editable.html());
        }, 100));
        this.$editor.on('focusin', function (event) {
            _this.context.triggerEvent('focusin', event);
        }).on('focusout', function (event) {
            _this.context.triggerEvent('focusout', event);
        });
        if (!this.options.airMode) {
            if (this.options.width) {
                this.$editor.outerWidth(this.options.width);
            }
            if (this.options.height) {
                this.$editable.outerHeight(this.options.height);
            }
            if (this.options.maxHeight) {
                this.$editable.css('max-height', this.options.maxHeight);
            }
            if (this.options.minHeight) {
                this.$editable.css('min-height', this.options.minHeight);
            }
        }
        this.history.recordUndo();
    };
    Editor.prototype.destroy = function () {
        this.$editable.off();
    };
    Editor.prototype.handleKeyMap = function (event) {
        var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
        var keys = [];
        if (event.metaKey) {
            keys.push('CMD');
        }
        if (event.ctrlKey && !event.altKey) {
            keys.push('CTRL');
        }
        if (event.shiftKey) {
            keys.push('SHIFT');
        }
        var keyName = key.nameFromCode[event.keyCode];
        if (keyName) {
            keys.push(keyName);
        }
        var eventName = keyMap[keys.join('+')];
        if (eventName) {
            if (this.context.invoke(eventName) !== false) {
                event.preventDefault();
            }
        }
        else if (key.isEdit(event.keyCode)) {
            this.afterCommand();
        }
    };
    Editor.prototype.preventDefaultEditableShortCuts = function (event) {
        // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
        if ((event.ctrlKey || event.metaKey) &&
            lists.contains([66, 73, 85], event.keyCode)) {
            event.preventDefault();
        }
    };
    Editor.prototype.isLimited = function (pad, event) {
        pad = pad || 0;
        if (typeof event !== 'undefined') {
            if (key.isMove(event.keyCode) ||
                (event.ctrlKey || event.metaKey) ||
                lists.contains([key.code.BACKSPACE, key.code.DELETE], event.keyCode)) {
                return false;
            }
        }
        if (this.options.maxTextLength > 0) {
            if ((this.$editable.text().length + pad) >= this.options.maxTextLength) {
                return true;
            }
        }
        return false;
    };
    /**
     * create range
     * @return {WrappedRange}
     */
    Editor.prototype.createRange = function () {
        this.focus();
        return range.create(this.editable);
    };
    /**
     * saveRange
     *
     * save current range
     *
     * @param {Boolean} [thenCollapse=false]
     */
    Editor.prototype.saveRange = function (thenCollapse) {
        this.lastRange = this.createRange();
        if (thenCollapse) {
            this.lastRange.collapse().select();
        }
    };
    /**
     * restoreRange
     *
     * restore lately range
     */
    Editor.prototype.restoreRange = function () {
        if (this.lastRange) {
            this.lastRange.select();
            this.focus();
        }
    };
    Editor.prototype.saveTarget = function (node) {
        this.$editable.data('target', node);
    };
    Editor.prototype.clearTarget = function () {
        this.$editable.removeData('target');
    };
    Editor.prototype.restoreTarget = function () {
        return this.$editable.data('target');
    };
    /**
     * currentStyle
     *
     * current style
     * @return {Object|Boolean} unfocus
     */
    Editor.prototype.currentStyle = function () {
        var rng = range.create();
        if (rng) {
            rng = rng.normalize();
        }
        return rng ? this.style.current(rng) : this.style.fromNode(this.$editable);
    };
    /**
     * style from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    Editor.prototype.styleFromNode = function ($node) {
        return this.style.fromNode($node);
    };
    /**
     * undo
     */
    Editor.prototype.undo = function () {
        this.context.triggerEvent('before.command', this.$editable.html());
        this.history.undo();
        this.context.triggerEvent('change', this.$editable.html());
    };
    /**
     * redo
     */
    Editor.prototype.redo = function () {
        this.context.triggerEvent('before.command', this.$editable.html());
        this.history.redo();
        this.context.triggerEvent('change', this.$editable.html());
    };
    /**
     * before command
     */
    Editor.prototype.beforeCommand = function () {
        this.context.triggerEvent('before.command', this.$editable.html());
        // keep focus on editable before command execution
        this.focus();
    };
    /**
     * after command
     * @param {Boolean} isPreventTrigger
     */
    Editor.prototype.afterCommand = function (isPreventTrigger) {
        this.normalizeContent();
        this.history.recordUndo();
        if (!isPreventTrigger) {
            this.context.triggerEvent('change', this.$editable.html());
        }
    };
    /**
     * handle tab key
     */
    Editor.prototype.tab = function () {
        var rng = this.createRange();
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.table.tab(rng);
        }
        else {
            if (this.options.tabSize === 0) {
                return false;
            }
            if (!this.isLimited(this.options.tabSize)) {
                this.beforeCommand();
                this.typing.insertTab(rng, this.options.tabSize);
                this.afterCommand();
            }
        }
    };
    /**
     * handle shift+tab key
     */
    Editor.prototype.untab = function () {
        var rng = this.createRange();
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.table.tab(rng, true);
        }
        else {
            if (this.options.tabSize === 0) {
                return false;
            }
        }
    };
    /**
     * run given function between beforeCommand and afterCommand
     */
    Editor.prototype.wrapCommand = function (fn) {
        var _this = this;
        return function () {
            _this.beforeCommand();
            fn.apply(_this, arguments);
            _this.afterCommand();
        };
    };
    /**
     * insert image
     *
     * @param {String} src
     * @param {String|Function} param
     * @return {Promise}
     */
    Editor.prototype.insertImage = function (src, param) {
        var _this = this;
        return createImage(src, param).then(function ($image) {
            _this.beforeCommand();
            if (typeof param === 'function') {
                param($image);
            }
            else {
                if (typeof param === 'string') {
                    $image.attr('data-filename', param);
                }
                $image.css('width', Math.min(_this.$editable.width(), $image.width()));
            }
            $image.show();
            range.create(_this.editable).insertNode($image[0]);
            range.createFromNodeAfter($image[0]).select();
            _this.afterCommand();
        }).fail(function (e) {
            _this.context.triggerEvent('image.upload.error', e);
        });
    };
    /**
     * insertImages
     * @param {File[]} files
     */
    Editor.prototype.insertImages = function (files) {
        var _this = this;
        $$1.each(files, function (idx, file) {
            var filename = file.name;
            if (_this.options.maximumImageFileSize && _this.options.maximumImageFileSize < file.size) {
                _this.context.triggerEvent('image.upload.error', _this.lang.image.maximumFileSizeError);
            }
            else {
                readFileAsDataURL(file).then(function (dataURL) {
                    return _this.insertImage(dataURL, filename);
                }).fail(function () {
                    _this.context.triggerEvent('image.upload.error');
                });
            }
        });
    };
    /**
     * insertImagesOrCallback
     * @param {File[]} files
     */
    Editor.prototype.insertImagesOrCallback = function (files) {
        var callbacks = this.options.callbacks;
        // If onImageUpload this.options setted
        if (callbacks.onImageUpload) {
            this.context.triggerEvent('image.upload', files);
            // else insert Image as dataURL
        }
        else {
            this.insertImages(files);
        }
    };
    /**
     * return selected plain text
     * @return {String} text
     */
    Editor.prototype.getSelectedText = function () {
        var rng = this.createRange();
        // if range on anchor, expand range with anchor
        if (rng.isOnAnchor()) {
            rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
        }
        return rng.toString();
    };
    Editor.prototype.onFormatBlock = function (tagName, $target) {
        // [workaround] for MSIE, IE need `<`
        tagName = env.isMSIE ? '<' + tagName + '>' : tagName;
        document.execCommand('FormatBlock', false, tagName);
        // support custom class
        if ($target && $target.length) {
            var className = $target[0].className || '';
            if (className) {
                var currentRange = this.createRange();
                var $parent = $$1([currentRange.sc, currentRange.ec]).closest(tagName);
                $parent.addClass(className);
            }
        }
    };
    Editor.prototype.formatPara = function () {
        this.formatBlock('P');
    };
    Editor.prototype.fontStyling = function (target, value) {
        var rng = this.createRange();
        if (rng) {
            var spans = this.style.styleNodes(rng);
            $$1(spans).css(target, value);
            // [workaround] added styled bogus span for style
            //  - also bogus character needed for cursor position
            if (rng.isCollapsed()) {
                var firstSpan = lists.head(spans);
                if (firstSpan && !dom.nodeLength(firstSpan)) {
                    firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
                    range.createFromNodeAfter(firstSpan.firstChild).select();
                    this.$editable.data(KEY_BOGUS, firstSpan);
                }
            }
        }
    };
    /**
     * unlink
     *
     * @type command
     */
    Editor.prototype.unlink = function () {
        var rng = this.createRange();
        if (rng.isOnAnchor()) {
            var anchor = dom.ancestor(rng.sc, dom.isAnchor);
            rng = range.createFromNode(anchor);
            rng.select();
            this.beforeCommand();
            document.execCommand('unlink');
            this.afterCommand();
        }
    };
    /**
     * returns link info
     *
     * @return {Object}
     * @return {WrappedRange} return.range
     * @return {String} return.text
     * @return {Boolean} [return.isNewWindow=true]
     * @return {String} [return.url=""]
     */
    Editor.prototype.getLinkInfo = function () {
        var rng = this.createRange().expand(dom.isAnchor);
        // Get the first anchor on range(for edit).
        var $anchor = $$1(lists.head(rng.nodes(dom.isAnchor)));
        var linkInfo = {
            range: rng,
            text: rng.toString(),
            url: $anchor.length ? $anchor.attr('href') : ''
        };
        // Define isNewWindow when anchor exists.
        if ($anchor.length) {
            linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
        }
        return linkInfo;
    };
    Editor.prototype.addRow = function (position) {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.addRow(rng, position);
            this.afterCommand();
        }
    };
    Editor.prototype.addCol = function (position) {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.addCol(rng, position);
            this.afterCommand();
        }
    };
    Editor.prototype.deleteRow = function () {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.deleteRow(rng);
            this.afterCommand();
        }
    };
    Editor.prototype.deleteCol = function () {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.deleteCol(rng);
            this.afterCommand();
        }
    };
    Editor.prototype.deleteTable = function () {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.deleteTable(rng);
            this.afterCommand();
        }
    };
    /**
     * @param {Position} pos
     * @param {jQuery} $target - target element
     * @param {Boolean} [bKeepRatio] - keep ratio
     */
    Editor.prototype.resizeTo = function (pos, $target, bKeepRatio) {
        var imageSize;
        if (bKeepRatio) {
            var newRatio = pos.y / pos.x;
            var ratio = $target.data('ratio');
            imageSize = {
                width: ratio > newRatio ? pos.x : pos.y / ratio,
                height: ratio > newRatio ? pos.x * ratio : pos.y
            };
        }
        else {
            imageSize = {
                width: pos.x,
                height: pos.y
            };
        }
        $target.css(imageSize);
    };
    /**
     * returns whether editable area has focus or not.
     */
    Editor.prototype.hasFocus = function () {
        return this.$editable.is(':focus');
    };
    /**
     * set focus
     */
    Editor.prototype.focus = function () {
        // [workaround] Screen will move when page is scolled in IE.
        //  - do focus when not focused
        if (!this.hasFocus()) {
            this.$editable.focus();
        }
    };
    /**
     * returns whether contents is empty or not.
     * @return {Boolean}
     */
    Editor.prototype.isEmpty = function () {
        return dom.isEmpty(this.$editable[0]) || dom.emptyPara === this.$editable.html();
    };
    /**
     * Removes all contents and restores the editable instance to an _emptyPara_.
     */
    Editor.prototype.empty = function () {
        this.context.invoke('code', dom.emptyPara);
    };
    /**
     * normalize content
     */
    Editor.prototype.normalizeContent = function () {
        this.$editable[0].normalize();
    };
    return Editor;
}());

var Clipboard = /** @class */ (function () {
    function Clipboard(context) {
        this.context = context;
        this.$editable = context.layoutInfo.editable;
    }
    Clipboard.prototype.initialize = function () {
        this.$editable.on('paste', this.pasteByEvent.bind(this));
    };
    /**
     * paste by clipboard event
     *
     * @param {Event} event
     */
    Clipboard.prototype.pasteByEvent = function (event) {
        var clipboardData = event.originalEvent.clipboardData;
        if (clipboardData && clipboardData.items && clipboardData.items.length) {
            var item = lists.head(clipboardData.items);
            if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                this.context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
            }
            this.context.invoke('editor.afterCommand');
        }
    };
    return Clipboard;
}());

var Dropzone = /** @class */ (function () {
    function Dropzone(context) {
        this.context = context;
        this.$eventListener = $$1(document);
        this.$editor = context.layoutInfo.editor;
        this.$editable = context.layoutInfo.editable;
        this.options = context.options;
        this.lang = this.options.langInfo;
        this.documentEventHandlers = {};
        this.$dropzone = $$1([
            '<div class="note-dropzone">',
            '  <div class="note-dropzone-message"/>',
            '</div>'
        ].join('')).prependTo(this.$editor);
    }
    /**
     * attach Drag and Drop Events
     */
    Dropzone.prototype.initialize = function () {
        if (this.options.disableDragAndDrop) {
            // prevent default drop event
            this.documentEventHandlers.onDrop = function (e) {
                e.preventDefault();
            };
            // do not consider outside of dropzone
            this.$eventListener = this.$dropzone;
            this.$eventListener.on('drop', this.documentEventHandlers.onDrop);
        }
        else {
            this.attachDragAndDropEvent();
        }
    };
    /**
     * attach Drag and Drop Events
     */
    Dropzone.prototype.attachDragAndDropEvent = function () {
        var _this = this;
        var collection = $$1();
        var $dropzoneMessage = this.$dropzone.find('.note-dropzone-message');
        this.documentEventHandlers.onDragenter = function (e) {
            var isCodeview = _this.context.invoke('codeview.isActivated');
            var hasEditorSize = _this.$editor.width() > 0 && _this.$editor.height() > 0;
            if (!isCodeview && !collection.length && hasEditorSize) {
                _this.$editor.addClass('dragover');
                _this.$dropzone.width(_this.$editor.width());
                _this.$dropzone.height(_this.$editor.height());
                $dropzoneMessage.text(_this.lang.image.dragImageHere);
            }
            collection = collection.add(e.target);
        };
        this.documentEventHandlers.onDragleave = function (e) {
            collection = collection.not(e.target);
            if (!collection.length) {
                _this.$editor.removeClass('dragover');
            }
        };
        this.documentEventHandlers.onDrop = function () {
            collection = $$1();
            _this.$editor.removeClass('dragover');
        };
        // show dropzone on dragenter when dragging a object to document
        // -but only if the editor is visible, i.e. has a positive width and height
        this.$eventListener.on('dragenter', this.documentEventHandlers.onDragenter)
            .on('dragleave', this.documentEventHandlers.onDragleave)
            .on('drop', this.documentEventHandlers.onDrop);
        // change dropzone's message on hover.
        this.$dropzone.on('dragenter', function () {
            _this.$dropzone.addClass('hover');
            $dropzoneMessage.text(_this.lang.image.dropImage);
        }).on('dragleave', function () {
            _this.$dropzone.removeClass('hover');
            $dropzoneMessage.text(_this.lang.image.dragImageHere);
        });
        // attach dropImage
        this.$dropzone.on('drop', function (event) {
            var dataTransfer = event.originalEvent.dataTransfer;
            // stop the browser from opening the dropped content
            event.preventDefault();
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                _this.$editable.focus();
                _this.context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
            }
            else {
                $$1.each(dataTransfer.types, function (idx, type) {
                    var content = dataTransfer.getData(type);
                    if (type.toLowerCase().indexOf('text') > -1) {
                        _this.context.invoke('editor.pasteHTML', content);
                    }
                    else {
                        $$1(content).each(function (idx, item) {
                            _this.context.invoke('editor.insertNode', item);
                        });
                    }
                });
            }
        }).on('dragover', false); // prevent default dragover event
    };
    Dropzone.prototype.destroy = function () {
        var _this = this;
        Object.keys(this.documentEventHandlers).forEach(function (key) {
            _this.$eventListener.off(key.substr(2).toLowerCase(), _this.documentEventHandlers[key]);
        });
        this.documentEventHandlers = {};
    };
    return Dropzone;
}());

var CodeMirror;
if (env.hasCodeMirror) {
    if (env.isSupportAmd) {
        require(['codemirror'], function (cm) {
            CodeMirror = cm;
        });
    }
    else {
        CodeMirror = window.CodeMirror;
    }
}
/**
 * @class Codeview
 */
var CodeView = /** @class */ (function () {
    function CodeView(context) {
        this.context = context;
        this.$editor = context.layoutInfo.editor;
        this.$editable = context.layoutInfo.editable;
        this.$codable = context.layoutInfo.codable;
        this.options = context.options;
    }
    CodeView.prototype.sync = function () {
        var isCodeview = this.isActivated();
        if (isCodeview && env.hasCodeMirror) {
            this.$codable.data('cmEditor').save();
        }
    };
    /**
     * @return {Boolean}
     */
    CodeView.prototype.isActivated = function () {
        return this.$editor.hasClass('codeview');
    };
    /**
     * toggle codeview
     */
    CodeView.prototype.toggle = function () {
        if (this.isActivated()) {
            this.deactivate();
        }
        else {
            this.activate();
        }
        this.context.triggerEvent('codeview.toggled');
    };
    /**
     * activate code view
     */
    CodeView.prototype.activate = function () {
        var _this = this;
        this.$codable.val(dom.html(this.$editable, this.options.prettifyHtml));
        this.$codable.height(this.$editable.height());
        this.context.invoke('toolbar.updateCodeview', true);
        this.$editor.addClass('codeview');
        this.$codable.focus();
        // activate CodeMirror as codable
        if (env.hasCodeMirror) {
            var cmEditor_1 = CodeMirror.fromTextArea(this.$codable[0], this.options.codemirror);
            // CodeMirror TernServer
            if (this.options.codemirror.tern) {
                var server_1 = new CodeMirror.TernServer(this.options.codemirror.tern);
                cmEditor_1.ternServer = server_1;
                cmEditor_1.on('cursorActivity', function (cm) {
                    server_1.updateArgHints(cm);
                });
            }
            cmEditor_1.on('blur', function (event) {
                _this.context.triggerEvent('blur.codeview', cmEditor_1.getValue(), event);
            });
            // CodeMirror hasn't Padding.
            cmEditor_1.setSize(null, this.$editable.outerHeight());
            this.$codable.data('cmEditor', cmEditor_1);
        }
        else {
            this.$codable.on('blur', function (event) {
                _this.context.triggerEvent('blur.codeview', _this.$codable.val(), event);
            });
        }
    };
    /**
     * deactivate code view
     */
    CodeView.prototype.deactivate = function () {
        // deactivate CodeMirror as codable
        if (env.hasCodeMirror) {
            var cmEditor = this.$codable.data('cmEditor');
            this.$codable.val(cmEditor.getValue());
            cmEditor.toTextArea();
        }
        var value = dom.value(this.$codable, this.options.prettifyHtml) || dom.emptyPara;
        var isChange = this.$editable.html() !== value;
        this.$editable.html(value);
        this.$editable.height(this.options.height ? this.$codable.height() : 'auto');
        this.$editor.removeClass('codeview');
        if (isChange) {
            this.context.triggerEvent('change', this.$editable.html(), this.$editable);
        }
        this.$editable.focus();
        this.context.invoke('toolbar.updateCodeview', false);
    };
    CodeView.prototype.destroy = function () {
        if (this.isActivated()) {
            this.deactivate();
        }
    };
    return CodeView;
}());

var EDITABLE_PADDING = 24;
var Statusbar = /** @class */ (function () {
    function Statusbar(context) {
        this.$document = $$1(document);
        this.$statusbar = context.layoutInfo.statusbar;
        this.$editable = context.layoutInfo.editable;
        this.options = context.options;
    }
    Statusbar.prototype.initialize = function () {
        var _this = this;
        if (this.options.airMode || this.options.disableResizeEditor) {
            this.destroy();
            return;
        }
        this.$statusbar.on('mousedown', function (event) {
            event.preventDefault();
            event.stopPropagation();
            var editableTop = _this.$editable.offset().top - _this.$document.scrollTop();
            var onMouseMove = function (event) {
                var height = event.clientY - (editableTop + EDITABLE_PADDING);
                height = (_this.options.minheight > 0) ? Math.max(height, _this.options.minheight) : height;
                height = (_this.options.maxHeight > 0) ? Math.min(height, _this.options.maxHeight) : height;
                _this.$editable.height(height);
            };
            _this.$document.on('mousemove', onMouseMove).one('mouseup', function () {
                _this.$document.off('mousemove', onMouseMove);
            });
        });
    };
    Statusbar.prototype.destroy = function () {
        this.$statusbar.off();
        this.$statusbar.addClass('locked');
    };
    return Statusbar;
}());

var Fullscreen = /** @class */ (function () {
    function Fullscreen(context) {
        var _this = this;
        this.context = context;
        this.$editor = context.layoutInfo.editor;
        this.$toolbar = context.layoutInfo.toolbar;
        this.$editable = context.layoutInfo.editable;
        this.$codable = context.layoutInfo.codable;
        this.$window = $$1(window);
        this.$scrollbar = $$1('html, body');
        this.onResize = function () {
            _this.resizeTo({
                h: _this.$window.height() - _this.$toolbar.outerHeight()
            });
        };
    }
    Fullscreen.prototype.resizeTo = function (size) {
        this.$editable.css('height', size.h);
        this.$codable.css('height', size.h);
        if (this.$codable.data('cmeditor')) {
            this.$codable.data('cmeditor').setsize(null, size.h);
        }
    };
    /**
     * toggle fullscreen
     */
    Fullscreen.prototype.toggle = function () {
        this.$editor.toggleClass('fullscreen');
        if (this.isFullscreen()) {
            this.$editable.data('orgHeight', this.$editable.css('height'));
            this.$window.on('resize', this.onResize).trigger('resize');
            this.$scrollbar.css('overflow', 'hidden');
        }
        else {
            this.$window.off('resize', this.onResize);
            this.resizeTo({ h: this.$editable.data('orgHeight') });
            this.$scrollbar.css('overflow', 'visible');
        }
        this.context.invoke('toolbar.updateFullscreen', this.isFullscreen());
    };
    Fullscreen.prototype.isFullscreen = function () {
        return this.$editor.hasClass('fullscreen');
    };
    return Fullscreen;
}());

var Handle = /** @class */ (function () {
    function Handle(context) {
        var _this = this;
        this.context = context;
        this.$document = $$1(document);
        this.$editingArea = context.layoutInfo.editingArea;
        this.options = context.options;
        this.lang = this.options.langInfo;
        this.events = {
            'summernote.mousedown': function (we, e) {
                if (_this.update(e.target)) {
                    e.preventDefault();
                }
            },
            'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function () {
                _this.update();
            },
            'summernote.disable': function () {
                _this.hide();
            },
            'summernote.codeview.toggled': function () {
                _this.update();
            }
        };
    }
    Handle.prototype.initialize = function () {
        var _this = this;
        this.$handle = $$1([
            '<div class="note-handle">',
            '<div class="note-control-selection">',
            '<div class="note-control-selection-bg"></div>',
            '<div class="note-control-holder note-control-nw"></div>',
            '<div class="note-control-holder note-control-ne"></div>',
            '<div class="note-control-holder note-control-sw"></div>',
            '<div class="',
            (this.options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing'),
            ' note-control-se"></div>',
            (this.options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>'),
            '</div>',
            '</div>'
        ].join('')).prependTo(this.$editingArea);
        this.$handle.on('mousedown', function (event) {
            if (dom.isControlSizing(event.target)) {
                event.preventDefault();
                event.stopPropagation();
                var $target_1 = _this.$handle.find('.note-control-selection').data('target');
                var posStart_1 = $target_1.offset();
                var scrollTop_1 = _this.$document.scrollTop();
                var onMouseMove_1 = function (event) {
                    _this.context.invoke('editor.resizeTo', {
                        x: event.clientX - posStart_1.left,
                        y: event.clientY - (posStart_1.top - scrollTop_1)
                    }, $target_1, !event.shiftKey);
                    _this.update($target_1[0]);
                };
                _this.$document
                    .on('mousemove', onMouseMove_1)
                    .one('mouseup', function (e) {
                    e.preventDefault();
                    _this.$document.off('mousemove', onMouseMove_1);
                    _this.context.invoke('editor.afterCommand');
                });
                if (!$target_1.data('ratio')) {
                    $target_1.data('ratio', $target_1.height() / $target_1.width());
                }
            }
        });
        // Listen for scrolling on the handle overlay.
        this.$handle.on('wheel', function (e) {
            e.preventDefault();
            _this.update();
        });
    };
    Handle.prototype.destroy = function () {
        this.$handle.remove();
    };
    Handle.prototype.update = function (target) {
        if (this.context.isDisabled()) {
            return false;
        }
        var isImage = dom.isImg(target);
        var $selection = this.$handle.find('.note-control-selection');
        this.context.invoke('imagePopover.update', target);
        if (isImage) {
            var $image = $$1(target);
            var position = $image.position();
            var pos = {
                left: position.left + parseInt($image.css('marginLeft'), 10),
                top: position.top + parseInt($image.css('marginTop'), 10)
            };
            // exclude margin
            var imageSize = {
                w: $image.outerWidth(false),
                h: $image.outerHeight(false)
            };
            $selection.css({
                display: 'block',
                left: pos.left,
                top: pos.top,
                width: imageSize.w,
                height: imageSize.h
            }).data('target', $image); // save current image element.
            var origImageObj = new Image();
            origImageObj.src = $image.attr('src');
            var sizingText = imageSize.w + 'x' + imageSize.h + ' (' + this.lang.image.original + ': ' + origImageObj.width + 'x' + origImageObj.height + ')';
            $selection.find('.note-control-selection-info').text(sizingText);
            this.context.invoke('editor.saveTarget', target);
        }
        else {
            this.hide();
        }
        return isImage;
    };
    /**
     * hide
     *
     * @param {jQuery} $handle
     */
    Handle.prototype.hide = function () {
        this.context.invoke('editor.clearTarget');
        this.$handle.children().hide();
    };
    return Handle;
}());

var defaultScheme = 'http://';
var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;
var AutoLink = /** @class */ (function () {
    function AutoLink(context) {
        var _this = this;
        this.context = context;
        this.events = {
            'summernote.keyup': function (we, e) {
                if (!e.isDefaultPrevented()) {
                    _this.handleKeyup(e);
                }
            },
            'summernote.keydown': function (we, e) {
                _this.handleKeydown(e);
            }
        };
    }
    AutoLink.prototype.initialize = function () {
        this.lastWordRange = null;
    };
    AutoLink.prototype.destroy = function () {
        this.lastWordRange = null;
    };
    AutoLink.prototype.replace = function () {
        if (!this.lastWordRange) {
            return;
        }
        var keyword = this.lastWordRange.toString();
        var match = keyword.match(linkPattern);
        if (match && (match[1] || match[2])) {
            var link = match[1] ? keyword : defaultScheme + keyword;
            var node = $$1('<a />').html(keyword).attr('href', link)[0];
            this.lastWordRange.insertNode(node);
            this.lastWordRange = null;
            this.context.invoke('editor.focus');
        }
    };
    AutoLink.prototype.handleKeydown = function (e) {
        if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
            var wordRange = this.context.invoke('editor.createRange').getWordRange();
            this.lastWordRange = wordRange;
        }
    };
    AutoLink.prototype.handleKeyup = function (e) {
        if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
            this.replace();
        }
    };
    return AutoLink;
}());

/**
 * textarea auto sync.
 */
var AutoSync = /** @class */ (function () {
    function AutoSync(context) {
        var _this = this;
        this.$note = context.layoutInfo.note;
        this.events = {
            'summernote.change': function () {
                _this.$note.val(context.invoke('code'));
            }
        };
    }
    AutoSync.prototype.shouldInitialize = function () {
        return dom.isTextarea(this.$note[0]);
    };
    return AutoSync;
}());

var Placeholder = /** @class */ (function () {
    function Placeholder(context) {
        var _this = this;
        this.context = context;
        this.$editingArea = context.layoutInfo.editingArea;
        this.options = context.options;
        this.events = {
            'summernote.init summernote.change': function () {
                _this.update();
            },
            'summernote.codeview.toggled': function () {
                _this.update();
            }
        };
    }
    Placeholder.prototype.shouldInitialize = function () {
        return !!this.options.placeholder;
    };
    Placeholder.prototype.initialize = function () {
        var _this = this;
        this.$placeholder = $$1('<div class="note-placeholder">');
        this.$placeholder.on('click', function () {
            _this.context.invoke('focus');
        }).text(this.options.placeholder).prependTo(this.$editingArea);
        this.update();
    };
    Placeholder.prototype.destroy = function () {
        this.$placeholder.remove();
    };
    Placeholder.prototype.update = function () {
        var isShow = !this.context.invoke('codeview.isActivated') && this.context.invoke('editor.isEmpty');
        this.$placeholder.toggle(isShow);
    };
    return Placeholder;
}());

var Buttons = /** @class */ (function () {
    function Buttons(context) {
        this.ui = $$1.summernote.ui;
        this.context = context;
        this.$toolbar = context.layoutInfo.toolbar;
        this.options = context.options;
        this.lang = this.options.langInfo;
        this.invertedKeyMap = func.invertObject(this.options.keyMap[env.isMac ? 'mac' : 'pc']);
    }
    Buttons.prototype.representShortcut = function (editorMethod) {
        var shortcut = this.invertedKeyMap[editorMethod];
        if (!this.options.shortcuts || !shortcut) {
            return '';
        }
        if (env.isMac) {
            shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
        }
        shortcut = shortcut.replace('BACKSLASH', '\\')
            .replace('SLASH', '/')
            .replace('LEFTBRACKET', '[')
            .replace('RIGHTBRACKET', ']');
        return ' (' + shortcut + ')';
    };
    Buttons.prototype.button = function (o) {
        if (!this.options.tooltip && o.tooltip) {
            delete o.tooltip;
        }
        o.container = this.options.container;
        return this.ui.button(o);
    };
    Buttons.prototype.initialize = function () {
        this.addToolbarButtons();
        this.addImagePopoverButtons();
        this.addLinkPopoverButtons();
        this.addTablePopoverButtons();
        this.fontInstalledMap = {};
    };
    Buttons.prototype.destroy = function () {
        delete this.fontInstalledMap;
    };
    Buttons.prototype.isFontInstalled = function (name) {
        if (!this.fontInstalledMap.hasOwnProperty(name)) {
            this.fontInstalledMap[name] = env.isFontInstalled(name) ||
                lists.contains(this.options.fontNamesIgnoreCheck, name);
        }
        return this.fontInstalledMap[name];
    };
    Buttons.prototype.isFontDeservedToAdd = function (name) {
        var genericFamilies = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];
        name = name.toLowerCase();
        return ((name !== '') && this.isFontInstalled(name) && ($$1.inArray(name, genericFamilies) === -1));
    };
    Buttons.prototype.addToolbarButtons = function () {
        var _this = this;
        this.context.memo('button.style', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.magic), _this.options),
                    tooltip: _this.lang.style.style,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdown({
                    className: 'dropdown-style',
                    items: _this.options.styleTags,
                    title: _this.lang.style.style,
                    template: function (item) {
                        if (typeof item === 'string') {
                            item = { tag: item, title: (_this.lang.style.hasOwnProperty(item) ? _this.lang.style[item] : item) };
                        }
                        var tag = item.tag;
                        var title = item.title;
                        var style = item.style ? ' style="' + item.style + '" ' : '';
                        var className = item.className ? ' class="' + item.className + '"' : '';
                        return '<' + tag + style + className + '>' + title + '</' + tag + '>';
                    },
                    click: _this.context.createInvokeHandler('editor.formatBlock')
                })
            ]).render();
        });
        var _loop_1 = function (styleIdx, styleLen) {
            var item = this_1.options.styleTags[styleIdx];
            this_1.context.memo('button.style.' + item, function () {
                return _this.button({
                    className: 'note-btn-style-' + item,
                    contents: '<div data-value="' + item + '">' + item.toUpperCase() + '</div>',
                    tooltip: _this.lang.style[item],
                    click: _this.context.createInvokeHandler('editor.formatBlock')
                }).render();
            });
        };
        var this_1 = this;
        for (var styleIdx = 0, styleLen = this.options.styleTags.length; styleIdx < styleLen; styleIdx++) {
            _loop_1(styleIdx, styleLen);
        }
        this.context.memo('button.bold', function () {
            return _this.button({
                className: 'note-btn-bold',
                contents: _this.ui.icon(_this.options.icons.bold),
                tooltip: _this.lang.font.bold + _this.representShortcut('bold'),
                click: _this.context.createInvokeHandlerAndUpdateState('editor.bold')
            }).render();
        });
        this.context.memo('button.italic', function () {
            return _this.button({
                className: 'note-btn-italic',
                contents: _this.ui.icon(_this.options.icons.italic),
                tooltip: _this.lang.font.italic + _this.representShortcut('italic'),
                click: _this.context.createInvokeHandlerAndUpdateState('editor.italic')
            }).render();
        });
        this.context.memo('button.underline', function () {
            return _this.button({
                className: 'note-btn-underline',
                contents: _this.ui.icon(_this.options.icons.underline),
                tooltip: _this.lang.font.underline + _this.representShortcut('underline'),
                click: _this.context.createInvokeHandlerAndUpdateState('editor.underline')
            }).render();
        });
        this.context.memo('button.clear', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.eraser),
                tooltip: _this.lang.font.clear + _this.representShortcut('removeFormat'),
                click: _this.context.createInvokeHandler('editor.removeFormat')
            }).render();
        });
        this.context.memo('button.strikethrough', function () {
            return _this.button({
                className: 'note-btn-strikethrough',
                contents: _this.ui.icon(_this.options.icons.strikethrough),
                tooltip: _this.lang.font.strikethrough + _this.representShortcut('strikethrough'),
                click: _this.context.createInvokeHandlerAndUpdateState('editor.strikethrough')
            }).render();
        });
        this.context.memo('button.superscript', function () {
            return _this.button({
                className: 'note-btn-superscript',
                contents: _this.ui.icon(_this.options.icons.superscript),
                tooltip: _this.lang.font.superscript,
                click: _this.context.createInvokeHandlerAndUpdateState('editor.superscript')
            }).render();
        });
        this.context.memo('button.subscript', function () {
            return _this.button({
                className: 'note-btn-subscript',
                contents: _this.ui.icon(_this.options.icons.subscript),
                tooltip: _this.lang.font.subscript,
                click: _this.context.createInvokeHandlerAndUpdateState('editor.subscript')
            }).render();
        });
        this.context.memo('button.fontname', function () {
            var styleInfo = _this.context.invoke('editor.currentStyle');
            // Add 'default' fonts into the fontnames array if not exist
            $$1.each(styleInfo['font-family'].split(','), function (idx, fontname) {
                fontname = fontname.trim().replace(/['"]+/g, '');
                if (_this.isFontDeservedToAdd(fontname)) {
                    if ($$1.inArray(fontname, _this.options.fontNames) === -1) {
                        _this.options.fontNames.push(fontname);
                    }
                }
            });
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents('<span class="note-current-fontname"/>', _this.options),
                    tooltip: _this.lang.font.name,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdownCheck({
                    className: 'dropdown-fontname',
                    checkClassName: _this.options.icons.menuCheck,
                    items: _this.options.fontNames.filter(_this.isFontInstalled.bind(_this)),
                    title: _this.lang.font.name,
                    template: function (item) {
                        return '<span style="font-family: \'' + item + '\'">' + item + '</span>';
                    },
                    click: _this.context.createInvokeHandlerAndUpdateState('editor.fontName')
                })
            ]).render();
        });
        this.context.memo('button.fontsize', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents('<span class="note-current-fontsize"/>', _this.options),
                    tooltip: _this.lang.font.size,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdownCheck({
                    className: 'dropdown-fontsize',
                    checkClassName: _this.options.icons.menuCheck,
                    items: _this.options.fontSizes,
                    title: _this.lang.font.size,
                    click: _this.context.createInvokeHandlerAndUpdateState('editor.fontSize')
                })
            ]).render();
        });
        this.context.memo('button.color', function () {
            return _this.ui.buttonGroup({
                className: 'note-color',
                children: [
                    _this.button({
                        className: 'note-current-color-button',
                        contents: _this.ui.icon(_this.options.icons.font + ' note-recent-color'),
                        tooltip: _this.lang.color.recent,
                        click: function (e) {
                            var $button = $$1(e.currentTarget);
                            _this.context.invoke('editor.color', {
                                backColor: $button.attr('data-backColor'),
                                foreColor: $button.attr('data-foreColor')
                            });
                        },
                        callback: function ($button) {
                            var $recentColor = $button.find('.note-recent-color');
                            $recentColor.css('background-color', '#FFFF00');
                            $button.attr('data-backColor', '#FFFF00');
                        }
                    }),
                    _this.button({
                        className: 'dropdown-toggle',
                        contents: _this.ui.dropdownButtonContents('', _this.options),
                        tooltip: _this.lang.color.more,
                        data: {
                            toggle: 'dropdown'
                        }
                    }),
                    _this.ui.dropdown({
                        items: [
                            '<div class="note-palette">',
                            '  <div class="note-palette-title">' + _this.lang.color.background + '</div>',
                            '  <div>',
                            '    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">',
                            _this.lang.color.transparent,
                            '    </button>',
                            '  </div>',
                            '  <div class="note-holder" data-event="backColor"/>',
                            '</div>',
                            '<div class="note-palette">',
                            '  <div class="note-palette-title">' + _this.lang.color.foreground + '</div>',
                            '  <div>',
                            '    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">',
                            _this.lang.color.resetToDefault,
                            '    </button>',
                            '  </div>',
                            '  <div class="note-holder" data-event="foreColor"/>',
                            '</div>'
                        ].join(''),
                        callback: function ($dropdown) {
                            $dropdown.find('.note-holder').each(function (idx, item) {
                                var $holder = $$1(item);
                                $holder.append(_this.ui.palette({
                                    colors: _this.options.colors,
                                    colorsName: _this.options.colorsName,
                                    eventName: $holder.data('event'),
                                    container: _this.options.container,
                                    tooltip: _this.options.tooltip
                                }).render());
                            });
                        },
                        click: function (event) {
                            var $button = $$1(event.target);
                            var eventName = $button.data('event');
                            var value = $button.data('value');
                            if (eventName && value) {
                                var key = eventName === 'backColor' ? 'background-color' : 'color';
                                var $color = $button.closest('.note-color').find('.note-recent-color');
                                var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                                $color.css(key, value);
                                $currentButton.attr('data-' + eventName, value);
                                _this.context.invoke('editor.' + eventName, value);
                            }
                        }
                    })
                ]
            }).render();
        });
        this.context.memo('button.ul', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.unorderedlist),
                tooltip: _this.lang.lists.unordered + _this.representShortcut('insertUnorderedList'),
                click: _this.context.createInvokeHandler('editor.insertUnorderedList')
            }).render();
        });
        this.context.memo('button.ol', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.orderedlist),
                tooltip: _this.lang.lists.ordered + _this.representShortcut('insertOrderedList'),
                click: _this.context.createInvokeHandler('editor.insertOrderedList')
            }).render();
        });
        var justifyLeft = this.button({
            contents: this.ui.icon(this.options.icons.alignLeft),
            tooltip: this.lang.paragraph.left + this.representShortcut('justifyLeft'),
            click: this.context.createInvokeHandler('editor.justifyLeft')
        });
        var justifyCenter = this.button({
            contents: this.ui.icon(this.options.icons.alignCenter),
            tooltip: this.lang.paragraph.center + this.representShortcut('justifyCenter'),
            click: this.context.createInvokeHandler('editor.justifyCenter')
        });
        var justifyRight = this.button({
            contents: this.ui.icon(this.options.icons.alignRight),
            tooltip: this.lang.paragraph.right + this.representShortcut('justifyRight'),
            click: this.context.createInvokeHandler('editor.justifyRight')
        });
        var justifyFull = this.button({
            contents: this.ui.icon(this.options.icons.alignJustify),
            tooltip: this.lang.paragraph.justify + this.representShortcut('justifyFull'),
            click: this.context.createInvokeHandler('editor.justifyFull')
        });
        var outdent = this.button({
            contents: this.ui.icon(this.options.icons.outdent),
            tooltip: this.lang.paragraph.outdent + this.representShortcut('outdent'),
            click: this.context.createInvokeHandler('editor.outdent')
        });
        var indent = this.button({
            contents: this.ui.icon(this.options.icons.indent),
            tooltip: this.lang.paragraph.indent + this.representShortcut('indent'),
            click: this.context.createInvokeHandler('editor.indent')
        });
        this.context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
        this.context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
        this.context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
        this.context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
        this.context.memo('button.outdent', func.invoke(outdent, 'render'));
        this.context.memo('button.indent', func.invoke(indent, 'render'));
        this.context.memo('button.paragraph', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.alignLeft), _this.options),
                    tooltip: _this.lang.paragraph.paragraph,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdown([
                    _this.ui.buttonGroup({
                        className: 'note-align',
                        children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
                    }),
                    _this.ui.buttonGroup({
                        className: 'note-list',
                        children: [outdent, indent]
                    })
                ])
            ]).render();
        });
        this.context.memo('button.height', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.textHeight), _this.options),
                    tooltip: _this.lang.font.height,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdownCheck({
                    items: _this.options.lineHeights,
                    checkClassName: _this.options.icons.menuCheck,
                    className: 'dropdown-line-height',
                    title: _this.lang.font.height,
                    click: _this.context.createInvokeHandler('editor.lineHeight')
                })
            ]).render();
        });
        this.context.memo('button.table', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.table), _this.options),
                    tooltip: _this.lang.table.table,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdown({
                    title: _this.lang.table.table,
                    className: 'note-table',
                    items: [
                        '<div class="note-dimension-picker">',
                        '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>',
                        '  <div class="note-dimension-picker-highlighted"/>',
                        '  <div class="note-dimension-picker-unhighlighted"/>',
                        '</div>',
                        '<div class="note-dimension-display">1 x 1</div>'
                    ].join('')
                })
            ], {
                callback: function ($node) {
                    var $catcher = $node.find('.note-dimension-picker-mousecatcher');
                    $catcher.css({
                        width: _this.options.insertTableMaxSize.col + 'em',
                        height: _this.options.insertTableMaxSize.row + 'em'
                    }).mousedown(_this.context.createInvokeHandler('editor.insertTable'))
                        .on('mousemove', _this.tableMoveHandler.bind(_this));
                }
            }).render();
        });
        this.context.memo('button.link', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.link),
                tooltip: _this.lang.link.link + _this.representShortcut('linkDialog.show'),
                click: _this.context.createInvokeHandler('linkDialog.show')
            }).render();
        });
        this.context.memo('button.picture', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.picture),
                tooltip: _this.lang.image.image,
                click: _this.context.createInvokeHandler('imageDialog.show')
            }).render();
        });
        this.context.memo('button.video', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.video),
                tooltip: _this.lang.video.video,
                click: _this.context.createInvokeHandler('videoDialog.show')
            }).render();
        });
        this.context.memo('button.hr', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.minus),
                tooltip: _this.lang.hr.insert + _this.representShortcut('insertHorizontalRule'),
                click: _this.context.createInvokeHandler('editor.insertHorizontalRule')
            }).render();
        });
        this.context.memo('button.fullscreen', function () {
            return _this.button({
                className: 'btn-fullscreen',
                contents: _this.ui.icon(_this.options.icons.arrowsAlt),
                tooltip: _this.lang.options.fullscreen,
                click: _this.context.createInvokeHandler('fullscreen.toggle')
            }).render();
        });
        this.context.memo('button.codeview', function () {
            return _this.button({
                className: 'btn-codeview',
                contents: _this.ui.icon(_this.options.icons.code),
                tooltip: _this.lang.options.codeview,
                click: _this.context.createInvokeHandler('codeview.toggle')
            }).render();
        });
        this.context.memo('button.redo', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.redo),
                tooltip: _this.lang.history.redo + _this.representShortcut('redo'),
                click: _this.context.createInvokeHandler('editor.redo')
            }).render();
        });
        this.context.memo('button.undo', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.undo),
                tooltip: _this.lang.history.undo + _this.representShortcut('undo'),
                click: _this.context.createInvokeHandler('editor.undo')
            }).render();
        });
        this.context.memo('button.help', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.question),
                tooltip: _this.lang.options.help,
                click: _this.context.createInvokeHandler('helpDialog.show')
            }).render();
        });
    };
    /**
     * image : [
     *   ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
     *   ['float', ['floatLeft', 'floatRight', 'floatNone' ]],
     *   ['remove', ['removeMedia']]
     * ],
     */
    Buttons.prototype.addImagePopoverButtons = function () {
        var _this = this;
        // Image Size Buttons
        this.context.memo('button.imageSize100', function () {
            return _this.button({
                contents: '<span class="note-fontsize-10">100%</span>',
                tooltip: _this.lang.image.resizeFull,
                click: _this.context.createInvokeHandler('editor.resize', '1')
            }).render();
        });
        this.context.memo('button.imageSize50', function () {
            return _this.button({
                contents: '<span class="note-fontsize-10">50%</span>',
                tooltip: _this.lang.image.resizeHalf,
                click: _this.context.createInvokeHandler('editor.resize', '0.5')
            }).render();
        });
        this.context.memo('button.imageSize25', function () {
            return _this.button({
                contents: '<span class="note-fontsize-10">25%</span>',
                tooltip: _this.lang.image.resizeQuarter,
                click: _this.context.createInvokeHandler('editor.resize', '0.25')
            }).render();
        });
        // Float Buttons
        this.context.memo('button.floatLeft', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.alignLeft),
                tooltip: _this.lang.image.floatLeft,
                click: _this.context.createInvokeHandler('editor.floatMe', 'left')
            }).render();
        });
        this.context.memo('button.floatRight', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.alignRight),
                tooltip: _this.lang.image.floatRight,
                click: _this.context.createInvokeHandler('editor.floatMe', 'right')
            }).render();
        });
        this.context.memo('button.floatNone', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.alignJustify),
                tooltip: _this.lang.image.floatNone,
                click: _this.context.createInvokeHandler('editor.floatMe', 'none')
            }).render();
        });
        // Remove Buttons
        this.context.memo('button.removeMedia', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.trash),
                tooltip: _this.lang.image.remove,
                click: _this.context.createInvokeHandler('editor.removeMedia')
            }).render();
        });
    };
    Buttons.prototype.addLinkPopoverButtons = function () {
        var _this = this;
        this.context.memo('button.linkDialogShow', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.link),
                tooltip: _this.lang.link.edit,
                click: _this.context.createInvokeHandler('linkDialog.show')
            }).render();
        });
        this.context.memo('button.unlink', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.unlink),
                tooltip: _this.lang.link.unlink,
                click: _this.context.createInvokeHandler('editor.unlink')
            }).render();
        });
    };
    /**
     * table : [
     *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
     *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
     * ],
     */
    Buttons.prototype.addTablePopoverButtons = function () {
        var _this = this;
        this.context.memo('button.addRowUp', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.rowAbove),
                tooltip: _this.lang.table.addRowAbove,
                click: _this.context.createInvokeHandler('editor.addRow', 'top')
            }).render();
        });
        this.context.memo('button.addRowDown', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.rowBelow),
                tooltip: _this.lang.table.addRowBelow,
                click: _this.context.createInvokeHandler('editor.addRow', 'bottom')
            }).render();
        });
        this.context.memo('button.addColLeft', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.colBefore),
                tooltip: _this.lang.table.addColLeft,
                click: _this.context.createInvokeHandler('editor.addCol', 'left')
            }).render();
        });
        this.context.memo('button.addColRight', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.colAfter),
                tooltip: _this.lang.table.addColRight,
                click: _this.context.createInvokeHandler('editor.addCol', 'right')
            }).render();
        });
        this.context.memo('button.deleteRow', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.rowRemove),
                tooltip: _this.lang.table.delRow,
                click: _this.context.createInvokeHandler('editor.deleteRow')
            }).render();
        });
        this.context.memo('button.deleteCol', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.colRemove),
                tooltip: _this.lang.table.delCol,
                click: _this.context.createInvokeHandler('editor.deleteCol')
            }).render();
        });
        this.context.memo('button.deleteTable', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.trash),
                tooltip: _this.lang.table.delTable,
                click: _this.context.createInvokeHandler('editor.deleteTable')
            }).render();
        });
    };
    Buttons.prototype.build = function ($container, groups) {
        for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
            var group = groups[groupIdx];
            var groupName = $$1.isArray(group) ? group[0] : group;
            var buttons = $$1.isArray(group) ? ((group.length === 1) ? [group[0]] : group[1]) : [group];
            var $group = this.ui.buttonGroup({
                className: 'note-' + groupName
            }).render();
            for (var idx = 0, len = buttons.length; idx < len; idx++) {
                var btn = this.context.memo('button.' + buttons[idx]);
                if (btn) {
                    $group.append(typeof btn === 'function' ? btn(this.context) : btn);
                }
            }
            $group.appendTo($container);
        }
    };
    /**
     * @param {jQuery} [$container]
     */
    Buttons.prototype.updateCurrentStyle = function ($container) {
        var _this = this;
        var $cont = $container || this.$toolbar;
        var styleInfo = this.context.invoke('editor.currentStyle');
        this.updateBtnStates($cont, {
            '.note-btn-bold': function () {
                return styleInfo['font-bold'] === 'bold';
            },
            '.note-btn-italic': function () {
                return styleInfo['font-italic'] === 'italic';
            },
            '.note-btn-underline': function () {
                return styleInfo['font-underline'] === 'underline';
            },
            '.note-btn-subscript': function () {
                return styleInfo['font-subscript'] === 'subscript';
            },
            '.note-btn-superscript': function () {
                return styleInfo['font-superscript'] === 'superscript';
            },
            '.note-btn-strikethrough': function () {
                return styleInfo['font-strikethrough'] === 'strikethrough';
            }
        });
        if (styleInfo['font-family']) {
            var fontNames = styleInfo['font-family'].split(',').map(function (name) {
                return name.replace(/[\'\"]/g, '')
                    .replace(/\s+$/, '')
                    .replace(/^\s+/, '');
            });
            var fontName_1 = lists.find(fontNames, this.isFontInstalled.bind(this));
            $cont.find('.dropdown-fontname a').each(function (idx, item) {
                var $item = $$1(item);
                // always compare string to avoid creating another func.
                var isChecked = ($item.data('value') + '') === (fontName_1 + '');
                $item.toggleClass('checked', isChecked);
            });
            $cont.find('.note-current-fontname').text(fontName_1).css('font-family', fontName_1);
        }
        if (styleInfo['font-size']) {
            var fontSize_1 = styleInfo['font-size'];
            $cont.find('.dropdown-fontsize a').each(function (idx, item) {
                var $item = $$1(item);
                // always compare with string to avoid creating another func.
                var isChecked = ($item.data('value') + '') === (fontSize_1 + '');
                $item.toggleClass('checked', isChecked);
            });
            $cont.find('.note-current-fontsize').text(fontSize_1);
        }
        if (styleInfo['line-height']) {
            var lineHeight_1 = styleInfo['line-height'];
            $cont.find('.dropdown-line-height li a').each(function (idx, item) {
                // always compare with string to avoid creating another func.
                var isChecked = ($$1(item).data('value') + '') === (lineHeight_1 + '');
                _this.className = isChecked ? 'checked' : '';
            });
        }
    };
    Buttons.prototype.updateBtnStates = function ($container, infos) {
        var _this = this;
        $$1.each(infos, function (selector, pred) {
            _this.ui.toggleBtnActive($container.find(selector), pred());
        });
    };
    Buttons.prototype.tableMoveHandler = function (event) {
        var PX_PER_EM = 18;
        var $picker = $$1(event.target.parentNode); // target is mousecatcher
        var $dimensionDisplay = $picker.next();
        var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
        var $highlighted = $picker.find('.note-dimension-picker-highlighted');
        var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
        var posOffset;
        // HTML5 with jQuery - e.offsetX is undefined in Firefox
        if (event.offsetX === undefined) {
            var posCatcher = $$1(event.target).offset();
            posOffset = {
                x: event.pageX - posCatcher.left,
                y: event.pageY - posCatcher.top
            };
        }
        else {
            posOffset = {
                x: event.offsetX,
                y: event.offsetY
            };
        }
        var dim = {
            c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
            r: Math.ceil(posOffset.y / PX_PER_EM) || 1
        };
        $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
        $catcher.data('value', dim.c + 'x' + dim.r);
        if (dim.c > 3 && dim.c < this.options.insertTableMaxSize.col) {
            $unhighlighted.css({ width: dim.c + 1 + 'em' });
        }
        if (dim.r > 3 && dim.r < this.options.insertTableMaxSize.row) {
            $unhighlighted.css({ height: dim.r + 1 + 'em' });
        }
        $dimensionDisplay.html(dim.c + ' x ' + dim.r);
    };
    return Buttons;
}());

var Toolbar = /** @class */ (function () {
    function Toolbar(context) {
        this.context = context;
        this.$window = $$1(window);
        this.$document = $$1(document);
        this.ui = $$1.summernote.ui;
        this.$note = context.layoutInfo.note;
        this.$editor = context.layoutInfo.editor;
        this.$toolbar = context.layoutInfo.toolbar;
        this.options = context.options;
        this.followScroll = this.followScroll.bind(this);
    }
    Toolbar.prototype.shouldInitialize = function () {
        return !this.options.airMode;
    };
    Toolbar.prototype.initialize = function () {
        var _this = this;
        this.options.toolbar = this.options.toolbar || [];
        if (!this.options.toolbar.length) {
            this.$toolbar.hide();
        }
        else {
            this.context.invoke('buttons.build', this.$toolbar, this.options.toolbar);
        }
        if (this.options.toolbarContainer) {
            this.$toolbar.appendTo(this.options.toolbarContainer);
        }
        this.changeContainer(false);
        this.$note.on('summernote.keyup summernote.mouseup summernote.change', function () {
            _this.context.invoke('buttons.updateCurrentStyle');
        });
        this.context.invoke('buttons.updateCurrentStyle');
        if (this.options.followingToolbar) {
            this.$window.on('scroll resize', this.followScroll);
        }
    };
    Toolbar.prototype.destroy = function () {
        this.$toolbar.children().remove();
        if (this.options.followingToolbar) {
            this.$window.off('scroll resize', this.followScroll);
        }
    };
    Toolbar.prototype.followScroll = function () {
        if (this.$editor.hasClass('fullscreen')) {
            return false;
        }
        var $toolbarWrapper = this.$toolbar.parent('.note-toolbar-wrapper');
        var editorHeight = this.$editor.outerHeight();
        var editorWidth = this.$editor.width();
        var toolbarHeight = this.$toolbar.height();
        $toolbarWrapper.css({
            height: toolbarHeight
        });
        // check if the web app is currently using another static bar
        var otherBarHeight = 0;
        if (this.options.otherStaticBar) {
            otherBarHeight = $$1(this.options.otherStaticBar).outerHeight();
        }
        var currentOffset = this.$document.scrollTop();
        var editorOffsetTop = this.$editor.offset().top;
        var editorOffsetBottom = editorOffsetTop + editorHeight;
        var activateOffset = editorOffsetTop - otherBarHeight;
        var deactivateOffsetBottom = editorOffsetBottom - otherBarHeight - toolbarHeight;
        if ((currentOffset > activateOffset) && (currentOffset < deactivateOffsetBottom)) {
            this.$toolbar.css({
                position: 'fixed',
                top: otherBarHeight,
                width: editorWidth
            });
        }
        else {
            this.$toolbar.css({
                position: 'relative',
                top: 0,
                width: '100%'
            });
        }
    };
    Toolbar.prototype.changeContainer = function (isFullscreen) {
        if (isFullscreen) {
            this.$toolbar.prependTo(this.$editor);
        }
        else {
            if (this.options.toolbarContainer) {
                this.$toolbar.appendTo(this.options.toolbarContainer);
            }
        }
    };
    Toolbar.prototype.updateFullscreen = function (isFullscreen) {
        this.ui.toggleBtnActive(this.$toolbar.find('.btn-fullscreen'), isFullscreen);
        this.changeContainer(isFullscreen);
    };
    Toolbar.prototype.updateCodeview = function (isCodeview) {
        this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), isCodeview);
        if (isCodeview) {
            this.deactivate();
        }
        else {
            this.activate();
        }
    };
    Toolbar.prototype.activate = function (isIncludeCodeview) {
        var $btn = this.$toolbar.find('button');
        if (!isIncludeCodeview) {
            $btn = $btn.not('.btn-codeview');
        }
        this.ui.toggleBtn($btn, true);
    };
    Toolbar.prototype.deactivate = function (isIncludeCodeview) {
        var $btn = this.$toolbar.find('button');
        if (!isIncludeCodeview) {
            $btn = $btn.not('.btn-codeview');
        }
        this.ui.toggleBtn($btn, false);
    };
    return Toolbar;
}());

var LinkDialog = /** @class */ (function () {
    function LinkDialog(context) {
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$body = $$1(document.body);
        this.$editor = context.layoutInfo.editor;
        this.options = context.options;
        this.lang = this.options.langInfo;
        context.memo('help.linkDialog.show', this.options.langInfo.help['linkDialog.show']);
    }
    LinkDialog.prototype.initialize = function () {
        var $container = this.options.dialogsInBody ? this.$body : this.$editor;
        var body = [
            '<div class="form-group note-form-group">',
            "<label class=\"note-form-label\">" + this.lang.link.textToDisplay + "</label>",
            '<input class="note-link-text form-control note-form-control  note-input" type="text" />',
            '</div>',
            '<div class="form-group note-form-group">',
            "<label class=\"note-form-label\">" + this.lang.link.url + "</label>",
            '<input class="note-link-url form-control note-form-control note-input" type="text" value="http://" />',
            '</div>',
            !this.options.disableLinkTarget
                ? $$1('<div/>').append(this.ui.checkbox({
                    id: 'sn-checkbox-open-in-new-window',
                    text: this.lang.link.openInNewWindow,
                    checked: true
                }).render()).html()
                : ''
        ].join('');
        var buttonClass = 'btn btn-primary note-btn note-btn-primary note-link-btn';
        var footer = "<button type=\"submit\" href=\"#\" class=\"" + buttonClass + "\" disabled>" + this.lang.link.insert + "</button>";
        this.$dialog = this.ui.dialog({
            className: 'link-dialog',
            title: this.lang.link.insert,
            fade: this.options.dialogsFade,
            body: body,
            footer: footer
        }).render().appendTo($container);
    };
    LinkDialog.prototype.destroy = function () {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
    };
    LinkDialog.prototype.bindEnterKey = function ($input, $btn) {
        $input.on('keypress', function (event) {
            if (event.keyCode === key.code.ENTER) {
                event.preventDefault();
                $btn.trigger('click');
            }
        });
    };
    /**
     * toggle update button
     */
    LinkDialog.prototype.toggleLinkBtn = function ($linkBtn, $linkText, $linkUrl) {
        this.ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
    };
    /**
     * Show link dialog and set event handlers on dialog controls.
     *
     * @param {Object} linkInfo
     * @return {Promise}
     */
    LinkDialog.prototype.showLinkDialog = function (linkInfo) {
        var _this = this;
        return $$1.Deferred(function (deferred) {
            var $linkText = _this.$dialog.find('.note-link-text');
            var $linkUrl = _this.$dialog.find('.note-link-url');
            var $linkBtn = _this.$dialog.find('.note-link-btn');
            var $openInNewWindow = _this.$dialog.find('input[type=checkbox]');
            _this.ui.onDialogShown(_this.$dialog, function () {
                _this.context.triggerEvent('dialog.shown');
                // if no url was given, copy text to url
                if (!linkInfo.url) {
                    linkInfo.url = linkInfo.text;
                }
                $linkText.val(linkInfo.text);
                var handleLinkTextUpdate = function () {
                    _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                    // if linktext was modified by keyup,
                    // stop cloning text from linkUrl
                    linkInfo.text = $linkText.val();
                };
                $linkText.on('input', handleLinkTextUpdate).on('paste', function () {
                    setTimeout(handleLinkTextUpdate, 0);
                });
                var handleLinkUrlUpdate = function () {
                    _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                    // display same link on `Text to display` input
                    // when create a new link
                    if (!linkInfo.text) {
                        $linkText.val($linkUrl.val());
                    }
                };
                $linkUrl.on('input', handleLinkUrlUpdate).on('paste', function () {
                    setTimeout(handleLinkUrlUpdate, 0);
                }).val(linkInfo.url);
                if (!env.isSupportTouch) {
                    $linkUrl.trigger('focus');
                }
                _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                _this.bindEnterKey($linkUrl, $linkBtn);
                _this.bindEnterKey($linkText, $linkBtn);
                var isChecked = linkInfo.isNewWindow !== undefined
                    ? linkInfo.isNewWindow : _this.context.options.linkTargetBlank;
                $openInNewWindow.prop('checked', isChecked);
                $linkBtn.one('click', function (event) {
                    event.preventDefault();
                    deferred.resolve({
                        range: linkInfo.range,
                        url: $linkUrl.val(),
                        text: $linkText.val(),
                        isNewWindow: $openInNewWindow.is(':checked')
                    });
                    _this.ui.hideDialog(_this.$dialog);
                });
            });
            _this.ui.onDialogHidden(_this.$dialog, function () {
                // detach events
                $linkText.off('input paste keypress');
                $linkUrl.off('input paste keypress');
                $linkBtn.off('click');
                if (deferred.state() === 'pending') {
                    deferred.reject();
                }
            });
            _this.ui.showDialog(_this.$dialog);
        }).promise();
    };
    /**
     * @param {Object} layoutInfo
     */
    LinkDialog.prototype.show = function () {
        var _this = this;
        var linkInfo = this.context.invoke('editor.getLinkInfo');
        this.context.invoke('editor.saveRange');
        this.showLinkDialog(linkInfo).then(function (linkInfo) {
            _this.context.invoke('editor.restoreRange');
            _this.context.invoke('editor.createLink', linkInfo);
        }).fail(function () {
            _this.context.invoke('editor.restoreRange');
        });
    };
    return LinkDialog;
}());

var LinkPopover = /** @class */ (function () {
    function LinkPopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.options = context.options;
        this.events = {
            'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function () {
                _this.update();
            },
            'summernote.disable summernote.dialog.shown': function () {
                _this.hide();
            }
        };
    }
    LinkPopover.prototype.shouldInitialize = function () {
        return !lists.isEmpty(this.options.popover.link);
    };
    LinkPopover.prototype.initialize = function () {
        this.$popover = this.ui.popover({
            className: 'note-link-popover',
            callback: function ($node) {
                var $content = $node.find('.popover-content,.note-popover-content');
                $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
            }
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find('.popover-content,.note-popover-content');
        this.context.invoke('buttons.build', $content, this.options.popover.link);
    };
    LinkPopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    LinkPopover.prototype.update = function () {
        // Prevent focusing on editable when invoke('code') is executed
        if (!this.context.invoke('editor.hasFocus')) {
            this.hide();
            return;
        }
        var rng = this.context.invoke('editor.createRange');
        if (rng.isCollapsed() && rng.isOnAnchor()) {
            var anchor = dom.ancestor(rng.sc, dom.isAnchor);
            var href = $$1(anchor).attr('href');
            this.$popover.find('a').attr('href', href).html(href);
            var pos = dom.posFromPlaceholder(anchor);
            this.$popover.css({
                display: 'block',
                left: pos.left,
                top: pos.top
            });
        }
        else {
            this.hide();
        }
    };
    LinkPopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return LinkPopover;
}());

var ImageDialog = /** @class */ (function () {
    function ImageDialog(context) {
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$body = $$1(document.body);
        this.$editor = context.layoutInfo.editor;
        this.options = context.options;
        this.lang = this.options.langInfo;
    }
    ImageDialog.prototype.initialize = function () {
        var $container = this.options.dialogsInBody ? this.$body : this.$editor;
        var imageLimitation = '';
        if (this.options.maximumImageFileSize) {
            var unit = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024));
            var readableSize = (this.options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
                ' ' + ' KMGTP'[unit] + 'B';
            imageLimitation = "<small>" + (this.lang.image.maximumFileSize + ' : ' + readableSize) + "</small>";
        }
        var body = [
            '<div class="form-group note-form-group note-group-select-from-files">',
            '<label class="note-form-label">' + this.lang.image.selectFromFiles + '</label>',
            '<input class="note-image-input note-form-control note-input" ',
            ' type="file" name="files" accept="image/*" multiple="multiple" />',
            imageLimitation,
            '</div>',
            '<div class="form-group note-group-image-url" style="overflow:auto;">',
            '<label class="note-form-label">' + this.lang.image.url + '</label>',
            '<input class="note-image-url form-control note-form-control note-input ',
            ' col-md-12" type="text" />',
            '</div>'
        ].join('');
        var buttonClass = 'btn btn-primary note-btn note-btn-primary note-image-btn';
        var footer = "<button type=\"submit\" href=\"#\" class=\"" + buttonClass + "\" disabled>" + this.lang.image.insert + "</button>";
        this.$dialog = this.ui.dialog({
            title: this.lang.image.insert,
            fade: this.options.dialogsFade,
            body: body,
            footer: footer
        }).render().appendTo($container);
    };
    ImageDialog.prototype.destroy = function () {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
    };
    ImageDialog.prototype.bindEnterKey = function ($input, $btn) {
        $input.on('keypress', function (event) {
            if (event.keyCode === key.code.ENTER) {
                event.preventDefault();
                $btn.trigger('click');
            }
        });
    };
    ImageDialog.prototype.show = function () {
        var _this = this;
        this.context.invoke('editor.saveRange');
        this.showImageDialog().then(function (data) {
            // [workaround] hide dialog before restore range for IE range focus
            _this.ui.hideDialog(_this.$dialog);
            _this.context.invoke('editor.restoreRange');
            if (typeof data === 'string') {
                _this.context.invoke('editor.insertImage', data);
            }
            else {
                _this.context.invoke('editor.insertImagesOrCallback', data);
            }
        }).fail(function () {
            _this.context.invoke('editor.restoreRange');
        });
    };
    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    ImageDialog.prototype.showImageDialog = function () {
        var _this = this;
        return $$1.Deferred(function (deferred) {
            var $imageInput = _this.$dialog.find('.note-image-input');
            var $imageUrl = _this.$dialog.find('.note-image-url');
            var $imageBtn = _this.$dialog.find('.note-image-btn');
            _this.ui.onDialogShown(_this.$dialog, function () {
                _this.context.triggerEvent('dialog.shown');
                // Cloning imageInput to clear element.
                $imageInput.replaceWith($imageInput.clone().on('change', function (event) {
                    deferred.resolve(event.target.files || event.target.value);
                }).val(''));
                $imageBtn.click(function (event) {
                    event.preventDefault();
                    deferred.resolve($imageUrl.val());
                });
                $imageUrl.on('keyup paste', function () {
                    var url = $imageUrl.val();
                    _this.ui.toggleBtn($imageBtn, url);
                }).val('');
                if (!env.isSupportTouch) {
                    $imageUrl.trigger('focus');
                }
                _this.bindEnterKey($imageUrl, $imageBtn);
            });
            _this.ui.onDialogHidden(_this.$dialog, function () {
                $imageInput.off('change');
                $imageUrl.off('keyup paste keypress');
                $imageBtn.off('click');
                if (deferred.state() === 'pending') {
                    deferred.reject();
                }
            });
            _this.ui.showDialog(_this.$dialog);
        });
    };
    return ImageDialog;
}());

/**
 * Image popover module
 *  mouse events that show/hide popover will be handled by Handle.js.
 *  Handle.js will receive the events and invoke 'imagePopover.update'.
 */
var ImagePopover = /** @class */ (function () {
    function ImagePopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.editable = context.layoutInfo.editable[0];
        this.options = context.options;
        this.events = {
            'summernote.disable': function () {
                _this.hide();
            }
        };
    }
    ImagePopover.prototype.shouldInitialize = function () {
        return !lists.isEmpty(this.options.popover.image);
    };
    ImagePopover.prototype.initialize = function () {
        this.$popover = this.ui.popover({
            className: 'note-image-popover'
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find('.popover-content,.note-popover-content');
        this.context.invoke('buttons.build', $content, this.options.popover.image);
    };
    ImagePopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    ImagePopover.prototype.update = function (target) {
        if (dom.isImg(target)) {
            var pos = dom.posFromPlaceholder(target);
            var posEditor = dom.posFromPlaceholder(this.editable);
            this.$popover.css({
                display: 'block',
                left: this.options.popatmouse ? event.pageX - 20 : pos.left,
                top: this.options.popatmouse ? event.pageY : Math.min(pos.top, posEditor.top)
            });
        }
        else {
            this.hide();
        }
    };
    ImagePopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return ImagePopover;
}());

var TablePopover = /** @class */ (function () {
    function TablePopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.options = context.options;
        this.events = {
            'summernote.mousedown': function (we, e) {
                _this.update(e.target);
            },
            'summernote.keyup summernote.scroll summernote.change': function () {
                _this.update();
            },
            'summernote.disable': function () {
                _this.hide();
            }
        };
    }
    TablePopover.prototype.shouldInitialize = function () {
        return !lists.isEmpty(this.options.popover.table);
    };
    TablePopover.prototype.initialize = function () {
        this.$popover = this.ui.popover({
            className: 'note-table-popover'
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find('.popover-content,.note-popover-content');
        this.context.invoke('buttons.build', $content, this.options.popover.table);
        // [workaround] Disable Firefox's default table editor
        if (env.isFF) {
            document.execCommand('enableInlineTableEditing', false, false);
        }
    };
    TablePopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    TablePopover.prototype.update = function (target) {
        if (this.context.isDisabled()) {
            return false;
        }
        var isCell = dom.isCell(target);
        if (isCell) {
            var pos = dom.posFromPlaceholder(target);
            this.$popover.css({
                display: 'block',
                left: pos.left,
                top: pos.top
            });
        }
        else {
            this.hide();
        }
        return isCell;
    };
    TablePopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return TablePopover;
}());

var VideoDialog = /** @class */ (function () {
    function VideoDialog(context) {
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$body = $$1(document.body);
        this.$editor = context.layoutInfo.editor;
        this.options = context.options;
        this.lang = this.options.langInfo;
    }
    VideoDialog.prototype.initialize = function () {
        var $container = this.options.dialogsInBody ? this.$body : this.$editor;
        var body = [
            '<div class="form-group note-form-group row-fluid">',
            "<label class=\"note-form-label\">" + this.lang.video.url + " <small class=\"text-muted\">" + this.lang.video.providers + "</small></label>",
            '<input class="note-video-url form-control note-form-control note-input" type="text" />',
            '</div>'
        ].join('');
        var buttonClass = 'btn btn-primary note-btn note-btn-primary note-video-btn';
        var footer = "<button type=\"submit\" href=\"#\" class=\"" + buttonClass + "\" disabled>" + this.lang.video.insert + "</button>";
        this.$dialog = this.ui.dialog({
            title: this.lang.video.insert,
            fade: this.options.dialogsFade,
            body: body,
            footer: footer
        }).render().appendTo($container);
    };
    VideoDialog.prototype.destroy = function () {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
    };
    VideoDialog.prototype.bindEnterKey = function ($input, $btn) {
        $input.on('keypress', function (event) {
            if (event.keyCode === key.code.ENTER) {
                event.preventDefault();
                $btn.trigger('click');
            }
        });
    };
    VideoDialog.prototype.createVideoNode = function (url) {
        // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
        var ytRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        var ytMatch = url.match(ytRegExp);
        var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
        var igMatch = url.match(igRegExp);
        var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
        var vMatch = url.match(vRegExp);
        var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
        var vimMatch = url.match(vimRegExp);
        var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
        var dmMatch = url.match(dmRegExp);
        var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
        var youkuMatch = url.match(youkuRegExp);
        var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
        var qqMatch = url.match(qqRegExp);
        var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
        var qqMatch2 = url.match(qqRegExp2);
        var mp4RegExp = /^.+.(mp4|m4v)$/;
        var mp4Match = url.match(mp4RegExp);
        var oggRegExp = /^.+.(ogg|ogv)$/;
        var oggMatch = url.match(oggRegExp);
        var webmRegExp = /^.+.(webm)$/;
        var webmMatch = url.match(webmRegExp);
        var $video;
        if (ytMatch && ytMatch[1].length === 11) {
            var youtubeId = ytMatch[1];
            $video = $$1('<iframe>')
                .attr('frameborder', 0)
                .attr('src', '//www.youtube.com/embed/' + youtubeId)
                .attr('width', '640').attr('height', '360');
        }
        else if (igMatch && igMatch[0].length) {
            $video = $$1('<iframe>')
                .attr('frameborder', 0)
                .attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/')
                .attr('width', '612').attr('height', '710')
                .attr('scrolling', 'no')
                .attr('allowtransparency', 'true');
        }
        else if (vMatch && vMatch[0].length) {
            $video = $$1('<iframe>')
                .attr('frameborder', 0)
                .attr('src', vMatch[0] + '/embed/simple')
                .attr('width', '600').attr('height', '600')
                .attr('class', 'vine-embed');
        }
        else if (vimMatch && vimMatch[3].length) {
            $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                .attr('frameborder', 0)
                .attr('src', '//player.vimeo.com/video/' + vimMatch[3])
                .attr('width', '640').attr('height', '360');
        }
        else if (dmMatch && dmMatch[2].length) {
            $video = $$1('<iframe>')
                .attr('frameborder', 0)
                .attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2])
                .attr('width', '640').attr('height', '360');
        }
        else if (youkuMatch && youkuMatch[1].length) {
            $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                .attr('frameborder', 0)
                .attr('height', '498')
                .attr('width', '510')
                .attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
        }
        else if ((qqMatch && qqMatch[1].length) || (qqMatch2 && qqMatch2[2].length)) {
            var vid = ((qqMatch && qqMatch[1].length) ? qqMatch[1] : qqMatch2[2]);
            $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                .attr('frameborder', 0)
                .attr('height', '310')
                .attr('width', '500')
                .attr('src', 'http://v.qq.com/iframe/player.html?vid=' + vid + '&amp;auto=0');
        }
        else if (mp4Match || oggMatch || webmMatch) {
            $video = $$1('<video controls>')
                .attr('src', url)
                .attr('width', '640').attr('height', '360');
        }
        else {
            // this is not a known video link. Now what, Cat? Now what?
            return false;
        }
        $video.addClass('note-video-clip');
        return $video[0];
    };
    VideoDialog.prototype.show = function () {
        var _this = this;
        var text = this.context.invoke('editor.getSelectedText');
        this.context.invoke('editor.saveRange');
        this.showVideoDialog(text).then(function (url) {
            // [workaround] hide dialog before restore range for IE range focus
            _this.ui.hideDialog(_this.$dialog);
            _this.context.invoke('editor.restoreRange');
            // build node
            var $node = _this.createVideoNode(url);
            if ($node) {
                // insert video node
                _this.context.invoke('editor.insertNode', $node);
            }
        }).fail(function () {
            _this.context.invoke('editor.restoreRange');
        });
    };
    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    VideoDialog.prototype.showVideoDialog = function (text) {
        var _this = this;
        return $$1.Deferred(function (deferred) {
            var $videoUrl = _this.$dialog.find('.note-video-url');
            var $videoBtn = _this.$dialog.find('.note-video-btn');
            _this.ui.onDialogShown(_this.$dialog, function () {
                _this.context.triggerEvent('dialog.shown');
                $videoUrl.val(text).on('input', function () {
                    _this.ui.toggleBtn($videoBtn, $videoUrl.val());
                });
                if (!env.isSupportTouch) {
                    $videoUrl.trigger('focus');
                }
                $videoBtn.click(function (event) {
                    event.preventDefault();
                    deferred.resolve($videoUrl.val());
                });
                _this.bindEnterKey($videoUrl, $videoBtn);
            });
            _this.ui.onDialogHidden(_this.$dialog, function () {
                $videoUrl.off('input');
                $videoBtn.off('click');
                if (deferred.state() === 'pending') {
                    deferred.reject();
                }
            });
            _this.ui.showDialog(_this.$dialog);
        });
    };
    return VideoDialog;
}());

var HelpDialog = /** @class */ (function () {
    function HelpDialog(context) {
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$body = $$1(document.body);
        this.$editor = context.layoutInfo.editor;
        this.options = context.options;
        this.lang = this.options.langInfo;
    }
    HelpDialog.prototype.initialize = function () {
        var $container = this.options.dialogsInBody ? this.$body : this.$editor;
        var body = [
            '<p class="text-center">',
            '<a href="http://summernote.org/" target="_blank">Summernote 0.8.10</a> · ',
            '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
            '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
            '</p>'
        ].join('');
        this.$dialog = this.ui.dialog({
            title: this.lang.options.help,
            fade: this.options.dialogsFade,
            body: this.createShortcutList(),
            footer: body,
            callback: function ($node) {
                $node.find('.modal-body,.note-modal-body').css({
                    'max-height': 300,
                    'overflow': 'scroll'
                });
            }
        }).render().appendTo($container);
    };
    HelpDialog.prototype.destroy = function () {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
    };
    HelpDialog.prototype.createShortcutList = function () {
        var _this = this;
        var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
        return Object.keys(keyMap).map(function (key) {
            var command = keyMap[key];
            var $row = $$1('<div><div class="help-list-item"/></div>');
            $row.append($$1('<label><kbd>' + key + '</kdb></label>').css({
                'width': 180,
                'margin-right': 10
            })).append($$1('<span/>').html(_this.context.memo('help.' + command) || command));
            return $row.html();
        }).join('');
    };
    /**
     * show help dialog
     *
     * @return {Promise}
     */
    HelpDialog.prototype.showHelpDialog = function () {
        var _this = this;
        return $$1.Deferred(function (deferred) {
            _this.ui.onDialogShown(_this.$dialog, function () {
                _this.context.triggerEvent('dialog.shown');
                deferred.resolve();
            });
            _this.ui.showDialog(_this.$dialog);
        }).promise();
    };
    HelpDialog.prototype.show = function () {
        var _this = this;
        this.context.invoke('editor.saveRange');
        this.showHelpDialog().then(function () {
            _this.context.invoke('editor.restoreRange');
        });
    };
    return HelpDialog;
}());

var AIR_MODE_POPOVER_X_OFFSET = 20;
var AirPopover = /** @class */ (function () {
    function AirPopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.options = context.options;
        this.events = {
            'summernote.keyup summernote.mouseup summernote.scroll': function () {
                _this.update();
            },
            'summernote.disable summernote.change summernote.dialog.shown': function () {
                _this.hide();
            },
            'summernote.focusout': function (we, e) {
                // [workaround] Firefox doesn't support relatedTarget on focusout
                //  - Ignore hide action on focus out in FF.
                if (env.isFF) {
                    return;
                }
                if (!e.relatedTarget || !dom.ancestor(e.relatedTarget, func.eq(_this.$popover[0]))) {
                    _this.hide();
                }
            }
        };
    }
    AirPopover.prototype.shouldInitialize = function () {
        return this.options.airMode && !lists.isEmpty(this.options.popover.air);
    };
    AirPopover.prototype.initialize = function () {
        this.$popover = this.ui.popover({
            className: 'note-air-popover'
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find('.popover-content');
        this.context.invoke('buttons.build', $content, this.options.popover.air);
    };
    AirPopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    AirPopover.prototype.update = function () {
        var styleInfo = this.context.invoke('editor.currentStyle');
        if (styleInfo.range && !styleInfo.range.isCollapsed()) {
            var rect = lists.last(styleInfo.range.getClientRects());
            if (rect) {
                var bnd = func.rect2bnd(rect);
                this.$popover.css({
                    display: 'block',
                    left: Math.max(bnd.left + bnd.width / 2, 0) - AIR_MODE_POPOVER_X_OFFSET,
                    top: bnd.top + bnd.height
                });
                this.context.invoke('buttons.updateCurrentStyle', this.$popover);
            }
        }
        else {
            this.hide();
        }
    };
    AirPopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return AirPopover;
}());

var POPOVER_DIST = 5;
var HintPopover = /** @class */ (function () {
    function HintPopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$editable = context.layoutInfo.editable;
        this.options = context.options;
        this.hint = this.options.hint || [];
        this.direction = this.options.hintDirection || 'bottom';
        this.hints = $$1.isArray(this.hint) ? this.hint : [this.hint];
        this.events = {
            'summernote.keyup': function (we, e) {
                if (!e.isDefaultPrevented()) {
                    _this.handleKeyup(e);
                }
            },
            'summernote.keydown': function (we, e) {
                _this.handleKeydown(e);
            },
            'summernote.disable summernote.dialog.shown': function () {
                _this.hide();
            }
        };
    }
    HintPopover.prototype.shouldInitialize = function () {
        return this.hints.length > 0;
    };
    HintPopover.prototype.initialize = function () {
        var _this = this;
        this.lastWordRange = null;
        this.$popover = this.ui.popover({
            className: 'note-hint-popover',
            hideArrow: true,
            direction: ''
        }).render().appendTo(this.options.container);
        this.$popover.hide();
        this.$content = this.$popover.find('.popover-content,.note-popover-content');
        this.$content.on('click', '.note-hint-item', function () {
            _this.$content.find('.active').removeClass('active');
            $$1(_this).addClass('active');
            _this.replace();
        });
    };
    HintPopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    HintPopover.prototype.selectItem = function ($item) {
        this.$content.find('.active').removeClass('active');
        $item.addClass('active');
        this.$content[0].scrollTop = $item[0].offsetTop - (this.$content.innerHeight() / 2);
    };
    HintPopover.prototype.moveDown = function () {
        var $current = this.$content.find('.note-hint-item.active');
        var $next = $current.next();
        if ($next.length) {
            this.selectItem($next);
        }
        else {
            var $nextGroup = $current.parent().next();
            if (!$nextGroup.length) {
                $nextGroup = this.$content.find('.note-hint-group').first();
            }
            this.selectItem($nextGroup.find('.note-hint-item').first());
        }
    };
    HintPopover.prototype.moveUp = function () {
        var $current = this.$content.find('.note-hint-item.active');
        var $prev = $current.prev();
        if ($prev.length) {
            this.selectItem($prev);
        }
        else {
            var $prevGroup = $current.parent().prev();
            if (!$prevGroup.length) {
                $prevGroup = this.$content.find('.note-hint-group').last();
            }
            this.selectItem($prevGroup.find('.note-hint-item').last());
        }
    };
    HintPopover.prototype.replace = function () {
        var $item = this.$content.find('.note-hint-item.active');
        if ($item.length) {
            var node = this.nodeFromItem($item);
            // XXX: consider to move codes to editor for recording redo/undo.
            this.lastWordRange.insertNode(node);
            range.createFromNode(node).collapse().select();
            this.lastWordRange = null;
            this.hide();
            this.context.triggerEvent('change', this.$editable.html(), this.$editable[0]);
            this.context.invoke('editor.focus');
        }
    };
    HintPopover.prototype.nodeFromItem = function ($item) {
        var hint = this.hints[$item.data('index')];
        var item = $item.data('item');
        var node = hint.content ? hint.content(item) : item;
        if (typeof node === 'string') {
            node = dom.createText(node);
        }
        return node;
    };
    HintPopover.prototype.createItemTemplates = function (hintIdx, items) {
        var hint = this.hints[hintIdx];
        return items.map(function (item, idx) {
            var $item = $$1('<div class="note-hint-item"/>');
            $item.append(hint.template ? hint.template(item) : item + '');
            $item.data({
                'index': hintIdx,
                'item': item
            });
            return $item;
        });
    };
    HintPopover.prototype.handleKeydown = function (e) {
        if (!this.$popover.is(':visible')) {
            return;
        }
        if (e.keyCode === key.code.ENTER) {
            e.preventDefault();
            this.replace();
        }
        else if (e.keyCode === key.code.UP) {
            e.preventDefault();
            this.moveUp();
        }
        else if (e.keyCode === key.code.DOWN) {
            e.preventDefault();
            this.moveDown();
        }
    };
    HintPopover.prototype.searchKeyword = function (index, keyword, callback) {
        var hint = this.hints[index];
        if (hint && hint.match.test(keyword) && hint.search) {
            var matches = hint.match.exec(keyword);
            hint.search(matches[1], callback);
        }
        else {
            callback();
        }
    };
    HintPopover.prototype.createGroup = function (idx, keyword) {
        var _this = this;
        var $group = $$1('<div class="note-hint-group note-hint-group-' + idx + '"/>');
        this.searchKeyword(idx, keyword, function (items) {
            items = items || [];
            if (items.length) {
                $group.html(_this.createItemTemplates(idx, items));
                _this.show();
            }
        });
        return $group;
    };
    HintPopover.prototype.handleKeyup = function (e) {
        var _this = this;
        if (!lists.contains([key.code.ENTER, key.code.UP, key.code.DOWN], e.keyCode)) {
            var wordRange = this.context.invoke('editor.createRange').getWordRange();
            var keyword_1 = wordRange.toString();
            if (this.hints.length && keyword_1) {
                this.$content.empty();
                var bnd = func.rect2bnd(lists.last(wordRange.getClientRects()));
                if (bnd) {
                    this.$popover.hide();
                    this.lastWordRange = wordRange;
                    this.hints.forEach(function (hint, idx) {
                        if (hint.match.test(keyword_1)) {
                            _this.createGroup(idx, keyword_1).appendTo(_this.$content);
                        }
                    });
                    // select first .note-hint-item
                    this.$content.find('.note-hint-item:first').addClass('active');
                    // set position for popover after group is created
                    if (this.direction === 'top') {
                        this.$popover.css({
                            left: bnd.left,
                            top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
                        });
                    }
                    else {
                        this.$popover.css({
                            left: bnd.left,
                            top: bnd.top + bnd.height + POPOVER_DIST
                        });
                    }
                }
            }
            else {
                this.hide();
            }
        }
    };
    HintPopover.prototype.show = function () {
        this.$popover.show();
    };
    HintPopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return HintPopover;
}());

var Context = /** @class */ (function () {
    /**
     * @param {jQuery} $note
     * @param {Object} options
     */
    function Context($note, options) {
        this.ui = $$1.summernote.ui;
        this.$note = $note;
        this.memos = {};
        this.modules = {};
        this.layoutInfo = {};
        this.options = options;
        this.initialize();
    }
    /**
     * create layout and initialize modules and other resources
     */
    Context.prototype.initialize = function () {
        this.layoutInfo = this.ui.createLayout(this.$note, this.options);
        this._initialize();
        this.$note.hide();
        return this;
    };
    /**
     * destroy modules and other resources and remove layout
     */
    Context.prototype.destroy = function () {
        this._destroy();
        this.$note.removeData('summernote');
        this.ui.removeLayout(this.$note, this.layoutInfo);
    };
    /**
     * destory modules and other resources and initialize it again
     */
    Context.prototype.reset = function () {
        var disabled = this.isDisabled();
        this.code(dom.emptyPara);
        this._destroy();
        this._initialize();
        if (disabled) {
            this.disable();
        }
    };
    Context.prototype._initialize = function () {
        var _this = this;
        // add optional buttons
        var buttons = $$1.extend({}, this.options.buttons);
        Object.keys(buttons).forEach(function (key) {
            _this.memo('button.' + key, buttons[key]);
        });
        var modules = $$1.extend({}, this.options.modules, $$1.summernote.plugins || {});
        // add and initialize modules
        Object.keys(modules).forEach(function (key) {
            _this.module(key, modules[key], true);
        });
        Object.keys(this.modules).forEach(function (key) {
            _this.initializeModule(key);
        });
    };
    Context.prototype._destroy = function () {
        var _this = this;
        // destroy modules with reversed order
        Object.keys(this.modules).reverse().forEach(function (key) {
            _this.removeModule(key);
        });
        Object.keys(this.memos).forEach(function (key) {
            _this.removeMemo(key);
        });
        // trigger custom onDestroy callback
        this.triggerEvent('destroy', this);
    };
    Context.prototype.code = function (html) {
        var isActivated = this.invoke('codeview.isActivated');
        if (html === undefined) {
            this.invoke('codeview.sync');
            return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
        }
        else {
            if (isActivated) {
                this.layoutInfo.codable.val(html);
            }
            else {
                this.layoutInfo.editable.html(html);
            }
            this.$note.val(html);
            this.triggerEvent('change', html);
        }
    };
    Context.prototype.isDisabled = function () {
        return this.layoutInfo.editable.attr('contenteditable') === 'false';
    };
    Context.prototype.enable = function () {
        this.layoutInfo.editable.attr('contenteditable', true);
        this.invoke('toolbar.activate', true);
        this.triggerEvent('disable', false);
    };
    Context.prototype.disable = function () {
        // close codeview if codeview is opend
        if (this.invoke('codeview.isActivated')) {
            this.invoke('codeview.deactivate');
        }
        this.layoutInfo.editable.attr('contenteditable', false);
        this.invoke('toolbar.deactivate', true);
        this.triggerEvent('disable', true);
    };
    Context.prototype.triggerEvent = function () {
        var namespace = lists.head(arguments);
        var args = lists.tail(lists.from(arguments));
        var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];
        if (callback) {
            callback.apply(this.$note[0], args);
        }
        this.$note.trigger('summernote.' + namespace, args);
    };
    Context.prototype.initializeModule = function (key) {
        var module = this.modules[key];
        module.shouldInitialize = module.shouldInitialize || func.ok;
        if (!module.shouldInitialize()) {
            return;
        }
        // initialize module
        if (module.initialize) {
            module.initialize();
        }
        // attach events
        if (module.events) {
            dom.attachEvents(this.$note, module.events);
        }
    };
    Context.prototype.module = function (key, ModuleClass, withoutIntialize) {
        if (arguments.length === 1) {
            return this.modules[key];
        }
        this.modules[key] = new ModuleClass(this);
        if (!withoutIntialize) {
            this.initializeModule(key);
        }
    };
    Context.prototype.removeModule = function (key) {
        var module = this.modules[key];
        if (module.shouldInitialize()) {
            if (module.events) {
                dom.detachEvents(this.$note, module.events);
            }
            if (module.destroy) {
                module.destroy();
            }
        }
        delete this.modules[key];
    };
    Context.prototype.memo = function (key, obj) {
        if (arguments.length === 1) {
            return this.memos[key];
        }
        this.memos[key] = obj;
    };
    Context.prototype.removeMemo = function (key) {
        if (this.memos[key] && this.memos[key].destroy) {
            this.memos[key].destroy();
        }
        delete this.memos[key];
    };
    /**
     * Some buttons need to change their visual style immediately once they get pressed
     */
    Context.prototype.createInvokeHandlerAndUpdateState = function (namespace, value) {
        var _this = this;
        return function (event) {
            _this.createInvokeHandler(namespace, value)(event);
            _this.invoke('buttons.updateCurrentStyle');
        };
    };
    Context.prototype.createInvokeHandler = function (namespace, value) {
        var _this = this;
        return function (event) {
            event.preventDefault();
            var $target = $$1(event.target);
            _this.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
        };
    };
    Context.prototype.invoke = function () {
        var namespace = lists.head(arguments);
        var args = lists.tail(lists.from(arguments));
        var splits = namespace.split('.');
        var hasSeparator = splits.length > 1;
        var moduleName = hasSeparator && lists.head(splits);
        var methodName = hasSeparator ? lists.last(splits) : lists.head(splits);
        var module = this.modules[moduleName || 'editor'];
        if (!moduleName && this[methodName]) {
            return this[methodName].apply(this, args);
        }
        else if (module && module[methodName] && module.shouldInitialize()) {
            return module[methodName].apply(module, args);
        }
    };
    return Context;
}());

$$1.fn.extend({
    /**
     * Summernote API
     *
     * @param {Object|String}
     * @return {this}
     */
    summernote: function () {
        var type = $$1.type(lists.head(arguments));
        var isExternalAPICalled = type === 'string';
        var hasInitOptions = type === 'object';
        var options = $$1.extend({}, $$1.summernote.options, hasInitOptions ? lists.head(arguments) : {});
        // Update options
        options.langInfo = $$1.extend(true, {}, $$1.summernote.lang['en-US'], $$1.summernote.lang[options.lang]);
        options.icons = $$1.extend(true, {}, $$1.summernote.options.icons, options.icons);
        options.tooltip = options.tooltip === 'auto' ? !env.isSupportTouch : options.tooltip;
        this.each(function (idx, note) {
            var $note = $$1(note);
            if (!$note.data('summernote')) {
                var context = new Context($note, options);
                $note.data('summernote', context);
                $note.data('summernote').triggerEvent('init', context.layoutInfo);
            }
        });
        var $note = this.first();
        if ($note.length) {
            var context = $note.data('summernote');
            if (isExternalAPICalled) {
                return context.invoke.apply(context, lists.from(arguments));
            }
            else if (options.focus) {
                context.invoke('editor.focus');
            }
        }
        return this;
    }
});

$$1.summernote = $$1.extend($$1.summernote, {
    version: '0.8.10',
    ui: ui,
    dom: dom,
    plugins: {},
    options: {
        modules: {
            'editor': Editor,
            'clipboard': Clipboard,
            'dropzone': Dropzone,
            'codeview': CodeView,
            'statusbar': Statusbar,
            'fullscreen': Fullscreen,
            'handle': Handle,
            // FIXME: HintPopover must be front of autolink
            //  - Script error about range when Enter key is pressed on hint popover
            'hintPopover': HintPopover,
            'autoLink': AutoLink,
            'autoSync': AutoSync,
            'placeholder': Placeholder,
            'buttons': Buttons,
            'toolbar': Toolbar,
            'linkDialog': LinkDialog,
            'linkPopover': LinkPopover,
            'imageDialog': ImageDialog,
            'imagePopover': ImagePopover,
            'tablePopover': TablePopover,
            'videoDialog': VideoDialog,
            'helpDialog': HelpDialog,
            'airPopover': AirPopover
        },
        buttons: {},
        lang: 'en-US',
        followingToolbar: true,
        otherStaticBar: '',
        // toolbar
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview', 'help']]
        ],
        // popover
        popatmouse: true,
        popover: {
            image: [
                ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
                ['float', ['floatLeft', 'floatRight', 'floatNone']],
                ['remove', ['removeMedia']]
            ],
            link: [
                ['link', ['linkDialogShow', 'unlink']]
            ],
            table: [
                ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
                ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
            ],
            air: [
                ['color', ['color']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['ul', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture']]
            ]
        },
        // air mode: inline editor
        airMode: false,
        width: null,
        height: null,
        linkTargetBlank: true,
        focus: false,
        tabSize: 4,
        styleWithSpan: true,
        shortcuts: true,
        textareaAutoSync: true,
        hintDirection: 'bottom',
        tooltip: 'auto',
        container: 'body',
        maxTextLength: 0,
        styleTags: [
            'p',
            { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
        ],
        fontNames: [
            'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
            'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
            'Tahoma', 'Times New Roman', 'Verdana'
        ],
        fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
        // pallete colors(n x n)
        colors: [
            ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
            ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
            ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
            ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
            ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
            ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
            ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
            ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
        ],
        // http://chir.ag/projects/name-that-color/
        colorsName: [
            ['Black', 'Tundora', 'Dove Gray', 'Star Dust', 'Pale Slate', 'Gallery', 'Alabaster', 'White'],
            ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'],
            ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'],
            ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'],
            ['Mandy', 'Rajah', 'Dandelion', 'Olivine', 'Gulf Stream', 'Viking', 'Blue Marguerite', 'Puce'],
            ['Guardsman Red', 'Fire Bush', 'Golden Dream', 'Chelsea Cucumber', 'Smalt Blue', 'Boston Blue', 'Butterfly Bush', 'Cadillac'],
            ['Sangria', 'Mai Tai', 'Buddha Gold', 'Forest Green', 'Eden', 'Venice Blue', 'Meteorite', 'Claret'],
            ['Rosewood', 'Cinnamon', 'Olive', 'Parsley', 'Tiber', 'Midnight Blue', 'Valentino', 'Loulou']
        ],
        lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],
        tableClassName: 'table table-bordered',
        insertTableMaxSize: {
            col: 10,
            row: 10
        },
        dialogsInBody: false,
        dialogsFade: false,
        maximumImageFileSize: null,
        callbacks: {
            onInit: null,
            onFocus: null,
            onBlur: null,
            onBlurCodeview: null,
            onEnter: null,
            onKeyup: null,
            onKeydown: null,
            onImageUpload: null,
            onImageUploadError: null
        },
        codemirror: {
            mode: 'text/html',
            htmlMode: true,
            lineNumbers: true
        },
        keyMap: {
            pc: {
                'ENTER': 'insertParagraph',
                'CTRL+Z': 'undo',
                'CTRL+Y': 'redo',
                'TAB': 'tab',
                'SHIFT+TAB': 'untab',
                'CTRL+B': 'bold',
                'CTRL+I': 'italic',
                'CTRL+U': 'underline',
                'CTRL+SHIFT+S': 'strikethrough',
                'CTRL+BACKSLASH': 'removeFormat',
                'CTRL+SHIFT+L': 'justifyLeft',
                'CTRL+SHIFT+E': 'justifyCenter',
                'CTRL+SHIFT+R': 'justifyRight',
                'CTRL+SHIFT+J': 'justifyFull',
                'CTRL+SHIFT+NUM7': 'insertUnorderedList',
                'CTRL+SHIFT+NUM8': 'insertOrderedList',
                'CTRL+LEFTBRACKET': 'outdent',
                'CTRL+RIGHTBRACKET': 'indent',
                'CTRL+NUM0': 'formatPara',
                'CTRL+NUM1': 'formatH1',
                'CTRL+NUM2': 'formatH2',
                'CTRL+NUM3': 'formatH3',
                'CTRL+NUM4': 'formatH4',
                'CTRL+NUM5': 'formatH5',
                'CTRL+NUM6': 'formatH6',
                'CTRL+ENTER': 'insertHorizontalRule',
                'CTRL+K': 'linkDialog.show'
            },
            mac: {
                'ENTER': 'insertParagraph',
                'CMD+Z': 'undo',
                'CMD+SHIFT+Z': 'redo',
                'TAB': 'tab',
                'SHIFT+TAB': 'untab',
                'CMD+B': 'bold',
                'CMD+I': 'italic',
                'CMD+U': 'underline',
                'CMD+SHIFT+S': 'strikethrough',
                'CMD+BACKSLASH': 'removeFormat',
                'CMD+SHIFT+L': 'justifyLeft',
                'CMD+SHIFT+E': 'justifyCenter',
                'CMD+SHIFT+R': 'justifyRight',
                'CMD+SHIFT+J': 'justifyFull',
                'CMD+SHIFT+NUM7': 'insertUnorderedList',
                'CMD+SHIFT+NUM8': 'insertOrderedList',
                'CMD+LEFTBRACKET': 'outdent',
                'CMD+RIGHTBRACKET': 'indent',
                'CMD+NUM0': 'formatPara',
                'CMD+NUM1': 'formatH1',
                'CMD+NUM2': 'formatH2',
                'CMD+NUM3': 'formatH3',
                'CMD+NUM4': 'formatH4',
                'CMD+NUM5': 'formatH5',
                'CMD+NUM6': 'formatH6',
                'CMD+ENTER': 'insertHorizontalRule',
                'CMD+K': 'linkDialog.show'
            }
        },
        icons: {
            'align': 'note-icon-align',
            'alignCenter': 'note-icon-align-center',
            'alignJustify': 'note-icon-align-justify',
            'alignLeft': 'note-icon-align-left',
            'alignRight': 'note-icon-align-right',
            'rowBelow': 'note-icon-row-below',
            'colBefore': 'note-icon-col-before',
            'colAfter': 'note-icon-col-after',
            'rowAbove': 'note-icon-row-above',
            'rowRemove': 'note-icon-row-remove',
            'colRemove': 'note-icon-col-remove',
            'indent': 'note-icon-align-indent',
            'outdent': 'note-icon-align-outdent',
            'arrowsAlt': 'note-icon-arrows-alt',
            'bold': 'note-icon-bold',
            'caret': 'note-icon-caret',
            'circle': 'note-icon-circle',
            'close': 'note-icon-close',
            'code': 'note-icon-code',
            'eraser': 'note-icon-eraser',
            'font': 'note-icon-font',
            'frame': 'note-icon-frame',
            'italic': 'note-icon-italic',
            'link': 'note-icon-link',
            'unlink': 'note-icon-chain-broken',
            'magic': 'note-icon-magic',
            'menuCheck': 'note-icon-menu-check',
            'minus': 'note-icon-minus',
            'orderedlist': 'note-icon-orderedlist',
            'pencil': 'note-icon-pencil',
            'picture': 'note-icon-picture',
            'question': 'note-icon-question',
            'redo': 'note-icon-redo',
            'square': 'note-icon-square',
            'strikethrough': 'note-icon-strikethrough',
            'subscript': 'note-icon-subscript',
            'superscript': 'note-icon-superscript',
            'table': 'note-icon-table',
            'textHeight': 'note-icon-text-height',
            'trash': 'note-icon-trash',
            'underline': 'note-icon-underline',
            'undo': 'note-icon-undo',
            'unorderedlist': 'note-icon-unorderedlist',
            'video': 'note-icon-video'
        }
    }
});

})));
//# sourceMappingURL=summernote-bs4.js.map

!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.4",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map

/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(!(c<=0)){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),window.setTimeout(function(){d.$selection.focus()},0),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=a('<span class="select2-selection__clear">&times;</span>');c.StoreData(e[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(e)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;if(this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c){this.$element.find("[data-select2-tag]").length?this.$element.focus():this.$search.focus()}},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,d.GetData(a[0])):d.GetData(a[0]);var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});