(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function T(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var u=a.prototype;return u.shouldComponentUpdate=function(e){return!i(e,this.props)},u.componentWillMount=function(){s.push(this),T()},u.componentDidUpdate=function(){T()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),T()},u.render=function(){return o.createElement(r,this.props)},a}(a.Component);return u(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(f,"canUseDOM",l),f}}},Eax7:function(e,t,n){e.exports={root:"icon-module--root--3xZab",icon:"icon-module--icon--S1jzc",label:"icon-module--label--1keCy"}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!u(c))return!1;var s=e[c],T=t[c];if(!1===(a=n?n.call(r,s,T,c):void 0)||void 0===a&&s!==T)return!1}return!0}},OUhe:function(e,t,n){e.exports={header:"header-module--header--32ogj",inner:"header-module--inner--1JVyF",logo:"header-module--logo--3cCyS",mark:"header-module--mark--3cWG4",cursor:"header-module--cursor--P4DDY",text:"header-module--text--2pH5m",right:"header-module--right--1dEoG"}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,u=n("quPj"),l=n("C/va"),c=r.RegExp,s=c,T=c.prototype,f=/a/g,m=/a/g,E=new c(f)!==f;if(n("nh4g")&&(!E||n("eeVq")((function(){return m[n("K0xU")("match")]=!1,c(f)!=f||c(m)==m||"/a/i"!=c(f,"i")})))){c=function(e,t){var n=this instanceof c,r=u(e),o=void 0===t;return!n&&r&&e.constructor===c&&o?e:a(E?new s(r&&!o?e.source:e,t):s((r=e instanceof c)?e.source:e,r&&o?l.call(e):t),n?this:T,c)};for(var p=function(e){e in c||o(c,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},d=i(s),h=0;d.length>h;)p(d[h++]);T.constructor=c,c.prototype=T,n("KroJ")(r,"RegExp",c)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=T(n("q1tI")),i=T(n("17x9")),u=T(n("8+s/")),l=T(n("bmMU")),c=n("v1p5"),s=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p,d,h,A=(0,u.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),b=(p=A,h=d=function(e){function t(){return m(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,u=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=u,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),u=(0,c.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(p,a)},a(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=p.peek,d.rewind=function(){var e=p.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},WnXS:function(e,t,n){e.exports={mobileMenuContainer:"menu-module--mobileMenuContainer--1yLGu",desktopMenuContainer:"menu-module--desktopMenuContainer--1G5iC",menu:"menu-module--menu--3UWEr",menuTrigger:"menu-module--menuTrigger--2QS8V",mobileMenu:"menu-module--mobileMenu--B1Auu",mobileMenuOverlay:"menu-module--mobileMenuOverlay--24hzr",telegramButton:"menu-module--telegramButton--23U2h",themeToggle:"menu-module--themeToggle--279Pt",subMenuTrigger:"menu-module--subMenuTrigger--1GqTP",subMenu:"menu-module--subMenu--3cCmL",subMenuOverlay:"menu-module--subMenuOverlay--3ef44",menuArrow:"menu-module--menuArrow--2DLOO"}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,l,c,s=r(t),T=r(n);if(s&&T){if((l=t.length)!=n.length)return!1;for(u=l;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(s!=T)return!1;var f=t instanceof Date,m=n instanceof Date;if(f!=m)return!1;if(f&&m)return t.getTime()==n.getTime();var E=t instanceof RegExp,p=n instanceof RegExp;if(E!=p)return!1;if(E&&p)return t.toString()==n.toString();var d=a(t);if((l=d.length)!==a(n).length)return!1;for(u=l;0!=u--;)if(!o.call(n,d[u]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(u=l;0!=u--;)if(!("_owner"===(c=d[u])&&t.$$typeof||e(t[c],n[c])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n("q1tI")),i=l(n("MgzW")),u=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var c,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=d(e,u.TAG_NAMES.TITLE),n=d(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return d(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},p=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],c=l.toLowerCase();-1===t.indexOf(c)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===u.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==u.TAG_PROPERTIES.INNER_HTML&&l!==u.TAG_PROPERTIES.CSS_TEXT&&l!==u.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),l=0;l<o.length;l++){var c=o[l],s=(0,i.default)({},a[c],r[c]);a[c]=s}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},M=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,f=e.title,m=e.titleAttributes;O(u.TAG_NAMES.BODY,r),O(u.TAG_NAMES.HTML,a),_(f,m);var E={baseTag:R(u.TAG_NAMES.BASE,n),linkTags:R(u.TAG_NAMES.LINK,o),metaTags:R(u.TAG_NAMES.META,i),noscriptTags:R(u.TAG_NAMES.NOSCRIPT,l),scriptTags:R(u.TAG_NAMES.SCRIPT,s),styleTags:R(u.TAG_NAMES.STYLE,T)},p={},d={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(d[e]=E[e].oldTags)})),t&&t(),c(e,p,d)},v=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=v(e)),O(u.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var T=o.indexOf(c);-1!==T&&o.splice(T,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},w=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,a=C(n,r),[o.default.createElement(u.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=P(n),o=v(t);return a?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){M&&g(M),e.defer?M=b((function(){S(e,(function(){M=null}))})):(S(e),M=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,T=e.title,f=void 0===T?"":T,m=e.titleAttributes;return{base:w(u.TAG_NAMES.BASE,t,r),bodyAttributes:w(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(u.ATTRIBUTE_NAMES.HTML,a,r),link:w(u.TAG_NAMES.LINK,o,r),meta:w(u.TAG_NAMES.META,i,r),noscript:w(u.TAG_NAMES.NOSCRIPT,l,r),script:w(u.TAG_NAMES.SCRIPT,c,r),style:w(u.TAG_NAMES.STYLE,s,r),title:w(u.TAG_NAMES.TITLE,{title:f,titleAttributes:m},r)}},t.reducePropsToState=function(e){return{baseTag:E([u.TAG_PROPERTIES.HREF],e),bodyAttributes:m(u.ATTRIBUTE_NAMES.BODY,e),defer:d(e,u.HELMET_PROPS.DEFER),encode:d(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(u.ATTRIBUTE_NAMES.HTML,e),linkTags:p(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:p(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:p(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:m(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=y}).call(this,n("yLpj"))},wiF5:function(e,t,n){"use strict";var r=n("yOqW"),a=n("q1tI"),o=n.n(a),i=n("17x9"),u=n.n(i),l=n("Wbzz"),c=n("TJpk"),s=n("Eax7"),T=n.n(s),f=function(e){var t=e.d,n=e.size,r=void 0===n?"1em":n,a=e.label,i=e.style,u=e.view;return o.a.createElement("span",{className:T.a.root,style:i,role:"figure"},o.a.createElement("svg",{version:"1.1",width:r,height:r,viewBox:u,xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:t,className:T.a.icon})),a&&o.a.createElement("span",{className:T.a.label},a))};f.propTypes={d:u.a.string,size:u.a.number,label:u.a.string,style:u.a.object,view:u.a.string};var m=f,E=n("WnXS"),p=n.n(E),d=function(e){var t=e.mainMenu,n=e.mainMenuItems,r=e.isMobileMenu,a=t.slice(0);return!r&&a.splice(n),a.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(l.Link,{to:e.path},e.title))}))},h=function(e){var t=e.mainMenu,n=e.mainMenuItems,r=e.onToggleSubMenu,a=t.slice(0);a.splice(0,n);var i=a.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(l.Link,{to:e.path},e.title))}));return o.a.createElement(o.a.Fragment,null,i,o.a.createElement("div",{className:p.a.subMenuOverlay,role:"button",tabIndex:0,onClick:r}))},A=function(e){var t=e.mainMenu,n=e.mainMenuItems,r=e.menuMoreText,a=e.isMobileMenuVisible,i=e.isSubMenuVisible,u=e.onToggleMobileMenu,l=e.onToggleSubMenu,c=e.onChangeTheme,s=!(n>=t.length)&&n>0;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:p.a.mobileMenuContainer},o.a.createElement(o.a.Fragment,null,a?o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:p.a.mobileMenu},o.a.createElement(d,{mainMenu:t,isMobileMenu:!0})),o.a.createElement("div",{onClick:u,className:p.a.mobileMenuOverlay})):null,o.a.createElement("button",{className:p.a.menuTrigger,style:{color:"inherit"},onClick:u,type:"button","aria-label":"Menu"},o.a.createElement(m,{style:{cursor:"pointer"},size:24,d:"M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z",view:"0 0 48 48"})))),o.a.createElement("div",{className:p.a.desktopMenuContainer},o.a.createElement("ul",{className:p.a.menu},o.a.createElement(d,{mainMenu:t,mainMenuItems:n}),s?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:p.a.subMenuTrigger,onClick:l,type:"button","aria-label":"Menu"},r||"Menu"," ",o.a.createElement("span",{className:p.a.menuArrow},">")),i?o.a.createElement("ul",{className:p.a.subMenu},o.a.createElement(h,{mainMenu:t,mainMenuItems:n,onToggleSubMenu:l})):null):null)),o.a.createElement("button",{className:p.a.telegramButton,onClick:function(){return parent.open("https://t.me/abekek_notes")},type:"button","aria-label":"Telegram"},o.a.createElement(m,{style:{cursor:"pointer"},size:24,d:"m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z",view:"0 0 24 28"})),o.a.createElement("button",{className:p.a.themeToggle,onClick:c,type:"button","aria-label":"Theme toggle"},o.a.createElement(m,{style:{cursor:"pointer"},size:24,d:"M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22\n3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7\n13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z",view:"0 0 48 48"})))};A.propTypes={mainMenu:u.a.arrayOf(u.a.shape({title:u.a.string,path:u.a.string})),mainMenuItems:u.a.number,menuMoreText:u.a.string,isMobileMenuVisible:u.a.bool,isSubMenuVisible:u.a.bool,onToggleMobileMenu:u.a.func,onToggleSubMenu:u.a.func,onChangeTheme:u.a.func},h.propTypes={mainMenu:u.a.arrayOf(u.a.shape({title:u.a.string,path:u.a.string})),mainMenuItems:u.a.number,onToggleSubMenu:u.a.func};var b=A,g=n("OUhe"),y=n.n(g),M=function(e){var t=e.siteLogo,n=e.logoText,r=e.mainMenu,i=e.mainMenuItems,u=e.menuMoreText,s=e.defaultTheme,T="undefined"!=typeof window&&window.localStorage.getItem("theme")||null,f=Object(a.useState)(T),m=f[0],E=f[1],p=Object(a.useState)(!1),d=p[0],h=p[1],A=Object(a.useState)(!1),g=A[0],M=A[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.Helmet,null,o.a.createElement("body",{className:"light"===(m||s)?"light-theme":"dark-theme"})),o.a.createElement("header",{className:y.a.header},o.a.createElement("div",{className:y.a.inner},o.a.createElement(l.Link,{to:"/"},o.a.createElement("div",{className:y.a.logo},t.src?o.a.createElement("img",{src:t.src,alt:t.alt}):o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:y.a.mark},">"),o.a.createElement("span",{className:y.a.text},n),o.a.createElement("span",{className:y.a.cursor})))),o.a.createElement("span",{className:y.a.right},o.a.createElement(b,{mainMenu:r,mainMenuItems:i,isMobileMenuVisible:d,isSubMenuVisible:g,menuMoreText:u,onToggleMobileMenu:function(){return h(!d)},onToggleSubMenu:function(){return M(!g)},onChangeTheme:function(){var e="light"===(m||s)?"dark":"light";E(e),"undefined"!=typeof window&&window.localStorage.setItem("theme",e)}})))))};M.propTypes={siteLogo:u.a.object,logoText:u.a.string,defaultTheme:u.a.string,mainMenu:u.a.arrayOf(u.a.shape({title:u.a.string,path:u.a.string})),mainMenuItems:u.a.number,menuMoreText:u.a.string};var S=M,v=function(e){var t=e.copyrights;return o.a.createElement("footer",null,t?o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"footerCopyrights"},"© 2021 Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")),o.a.createElement("span",{className:"footerCopyrights"},"Starter created by ",o.a.createElement("a",{href:"https://radoslawkoziel.pl"},"panr"))))};v.propTypes={copyrights:u.a.string};var _=v,O=(n("wmEu"),function(e){var t=e.children,n=r.data.site.siteMetadata,a=n.title,i=n.logo,u=n.logoText,l=n.defaultTheme,c=n.mainMenu,s=n.showMenuItems,T=n.menuMoreText,f=n.copyrights;return o.a.createElement("div",{className:"container"},o.a.createElement(S,{siteTitle:a,siteLogo:i,logoText:u,defaultTheme:l,mainMenu:c,mainMenuItems:s,menuMoreText:T}),o.a.createElement("div",{className:"content"},t),o.a.createElement(_,{copyrights:f}))});O.propTypes={children:u.a.node.isRequired};t.a=O},wmEu:function(e,t,n){},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},yOqW:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"abekek notes","logo":{"src":"","alt":""},"logoText":"abekek notes","defaultTheme":"light","copyrights":"","mainMenu":[{"title":"Books","path":"/s_books"},{"title":"Blog","path":"/blog"},{"title":"My Telegram Blog","path":"https://t.me/abekek_notes"}],"showMenuItems":2,"menuMoreText":"Show more"}}}}')}}]);
//# sourceMappingURL=commons-97dda215631db1290cab.js.map