function eN(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tN(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var eI={exports:{}},Zh={},tI={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),nN=Symbol.for("react.portal"),rN=Symbol.for("react.fragment"),iN=Symbol.for("react.strict_mode"),sN=Symbol.for("react.profiler"),oN=Symbol.for("react.provider"),aN=Symbol.for("react.context"),uN=Symbol.for("react.forward_ref"),lN=Symbol.for("react.suspense"),cN=Symbol.for("react.memo"),hN=Symbol.for("react.lazy"),d0=Symbol.iterator;function dN(t){return t===null||typeof t!="object"?null:(t=d0&&t[d0]||t["@@iterator"],typeof t=="function"?t:null)}var nI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rI=Object.assign,iI={};function zo(t,e,n){this.props=t,this.context=e,this.refs=iI,this.updater=n||nI}zo.prototype.isReactComponent={};zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sI(){}sI.prototype=zo.prototype;function ey(t,e,n){this.props=t,this.context=e,this.refs=iI,this.updater=n||nI}var ty=ey.prototype=new sI;ty.constructor=ey;rI(ty,zo.prototype);ty.isPureReactComponent=!0;var f0=Array.isArray,oI=Object.prototype.hasOwnProperty,ny={current:null},aI={key:!0,ref:!0,__self:!0,__source:!0};function uI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)oI.call(e,r)&&!aI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:al,type:t,key:s,ref:o,props:i,_owner:ny.current}}function fN(t,e){return{$$typeof:al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ry(t){return typeof t=="object"&&t!==null&&t.$$typeof===al}function pN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var p0=/\/+/g;function Bf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pN(""+t.key):e.toString(36)}function wc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case al:case nN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bf(o,0):r,f0(i)?(n="",t!=null&&(n=t.replace(p0,"$&/")+"/"),wc(i,e,n,"",function(l){return l})):i!=null&&(ry(i)&&(i=fN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(p0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",f0(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Bf(s,a);o+=wc(s,e,n,u,i)}else if(u=dN(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Bf(s,a++),o+=wc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zl(t,e,n){if(t==null)return t;var r=[],i=0;return wc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},_c={transition:null},gN={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:_c,ReactCurrentOwner:ny};Y.Children={map:zl,forEach:function(t,e,n){zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zl(t,function(){e++}),e},toArray:function(t){return zl(t,function(e){return e})||[]},only:function(t){if(!ry(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=zo;Y.Fragment=rN;Y.Profiler=sN;Y.PureComponent=ey;Y.StrictMode=iN;Y.Suspense=lN;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gN;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ny.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)oI.call(e,u)&&!aI.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:al,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:aN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oN,_context:t},t.Consumer=t};Y.createElement=uI;Y.createFactory=function(t){var e=uI.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:uN,render:t}};Y.isValidElement=ry;Y.lazy=function(t){return{$$typeof:hN,_payload:{_status:-1,_result:t},_init:mN}};Y.memo=function(t,e){return{$$typeof:cN,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=_c.transition;_c.transition={};try{t()}finally{_c.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return bt.current.useCallback(t,e)};Y.useContext=function(t){return bt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return bt.current.useEffect(t,e)};Y.useId=function(){return bt.current.useId()};Y.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return bt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};Y.useRef=function(t){return bt.current.useRef(t)};Y.useState=function(t){return bt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return bt.current.useTransition()};Y.version="18.2.0";tI.exports=Y;var R=tI.exports;const lI=tN(R),yN=eN({__proto__:null,default:lI},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vN=R,wN=Symbol.for("react.element"),_N=Symbol.for("react.fragment"),EN=Object.prototype.hasOwnProperty,IN=vN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SN={key:!0,ref:!0,__self:!0,__source:!0};function cI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)EN.call(e,r)&&!SN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wN,type:t,key:s,ref:o,props:i,_owner:IN.current}}Zh.Fragment=_N;Zh.jsx=cI;Zh.jsxs=cI;eI.exports=Zh;var S=eI.exports,Zp={},hI={exports:{}},Yt={},dI={exports:{}},fI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,G){var K=U.length;U.push(G);e:for(;0<K;){var xe=K-1>>>1,qe=U[xe];if(0<i(qe,G))U[xe]=G,U[K]=qe,K=xe;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var G=U[0],K=U.pop();if(K!==G){U[0]=K;e:for(var xe=0,qe=U.length,jl=qe>>>1;xe<jl;){var ki=2*(xe+1)-1,jf=U[ki],Ci=ki+1,Bl=U[Ci];if(0>i(jf,K))Ci<qe&&0>i(Bl,jf)?(U[xe]=Bl,U[Ci]=K,xe=Ci):(U[xe]=jf,U[ki]=K,xe=ki);else if(Ci<qe&&0>i(Bl,K))U[xe]=Bl,U[Ci]=K,xe=Ci;else break e}}return G}function i(U,G){var K=U.sortIndex-G.sortIndex;return K!==0?K:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,f=!1,p=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var G=n(l);G!==null;){if(G.callback===null)r(l);else if(G.startTime<=U)r(l),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(l)}}function I(U){if(g=!1,v(U),!p)if(n(u)!==null)p=!0,Uf(C);else{var G=n(l);G!==null&&Vf(I,G.startTime-U)}}function C(U,G){p=!1,g&&(g=!1,y(M),M=-1),f=!0;var K=d;try{for(v(G),h=n(u);h!==null&&(!(h.expirationTime>G)||U&&!nt());){var xe=h.callback;if(typeof xe=="function"){h.callback=null,d=h.priorityLevel;var qe=xe(h.expirationTime<=G);G=t.unstable_now(),typeof qe=="function"?h.callback=qe:h===n(u)&&r(u),v(G)}else r(u);h=n(u)}if(h!==null)var jl=!0;else{var ki=n(l);ki!==null&&Vf(I,ki.startTime-G),jl=!1}return jl}finally{h=null,d=K,f=!1}}var A=!1,P=null,M=-1,J=5,z=-1;function nt(){return!(t.unstable_now()-z<J)}function ca(){if(P!==null){var U=t.unstable_now();z=U;var G=!0;try{G=P(!0,U)}finally{G?ha():(A=!1,P=null)}}else A=!1}var ha;if(typeof m=="function")ha=function(){m(ca)};else if(typeof MessageChannel<"u"){var h0=new MessageChannel,ZA=h0.port2;h0.port1.onmessage=ca,ha=function(){ZA.postMessage(null)}}else ha=function(){w(ca,0)};function Uf(U){P=U,A||(A=!0,ha())}function Vf(U,G){M=w(function(){U(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,Uf(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var K=d;d=G;try{return U()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var K=d;d=U;try{return G()}finally{d=K}},t.unstable_scheduleCallback=function(U,G,K){var xe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xe+K:xe):K=xe,U){case 1:var qe=-1;break;case 2:qe=250;break;case 5:qe=1073741823;break;case 4:qe=1e4;break;default:qe=5e3}return qe=K+qe,U={id:c++,callback:G,priorityLevel:U,startTime:K,expirationTime:qe,sortIndex:-1},K>xe?(U.sortIndex=K,e(l,U),n(u)===null&&U===n(l)&&(g?(y(M),M=-1):g=!0,Vf(I,K-xe))):(U.sortIndex=qe,e(u,U),p||f||(p=!0,Uf(C))),U},t.unstable_shouldYield=nt,t.unstable_wrapCallback=function(U){var G=d;return function(){var K=d;d=G;try{return U.apply(this,arguments)}finally{d=K}}}})(fI);dI.exports=fI;var TN=dI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pI=R,Ht=TN;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mI=new Set,cu={};function Es(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(cu[t]=e,t=0;t<e.length;t++)mI.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),em=Object.prototype.hasOwnProperty,kN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m0={},g0={};function CN(t){return em.call(g0,t)?!0:em.call(m0,t)?!1:kN.test(t)?g0[t]=!0:(m0[t]=!0,!1)}function bN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xN(t,e,n,r){if(e===null||typeof e>"u"||bN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var iy=/[\-:]([a-z])/g;function sy(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(iy,sy);lt[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(iy,sy);lt[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(iy,sy);lt[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function oy(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xN(e,n,i,r)&&(n=null),r||i===null?CN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=pI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ql=Symbol.for("react.element"),js=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),gI=Symbol.for("react.provider"),yI=Symbol.for("react.context"),uy=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.suspense_list"),ly=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),vI=Symbol.for("react.offscreen"),y0=Symbol.iterator;function da(t){return t===null||typeof t!="object"?null:(t=y0&&t[y0]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,zf;function Pa(t){if(zf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zf=e&&e[1]||""}return`
`+zf+t}var qf=!1;function Wf(t,e){if(!t||qf)return"";qf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{qf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function AN(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=Wf(t.type,!1),t;case 11:return t=Wf(t.type.render,!1),t;case 1:return t=Wf(t.type,!0),t;default:return""}}function im(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bs:return"Fragment";case js:return"Portal";case tm:return"Profiler";case ay:return"StrictMode";case nm:return"Suspense";case rm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yI:return(t.displayName||"Context")+".Consumer";case gI:return(t._context.displayName||"Context")+".Provider";case uy:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ly:return e=t.displayName||null,e!==null?e:im(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return im(t(e))}catch{}}return null}function NN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return im(e);case 8:return e===ay?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RN(t){var e=wI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wl(t){t._valueTracker||(t._valueTracker=RN(t))}function _I(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sm(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function v0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function EI(t,e){e=e.checked,e!=null&&oy(t,"checked",e,!1)}function om(t,e){EI(t,e);var n=Jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?am(t,e.type,n):e.hasOwnProperty("defaultValue")&&am(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function w0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function am(t,e,n){(e!=="number"||Gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function to(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function um(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Da(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function II(t,e){var n=Jr(e.value),r=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function E0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function SI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?SI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hl,TI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hl=Hl||document.createElement("div"),Hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PN=["Webkit","ms","Moz","O"];Object.keys(Wa).forEach(function(t){PN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wa[e]=Wa[t]})});function kI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wa.hasOwnProperty(t)&&Wa[t]?(""+e).trim():e+"px"}function CI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var DN=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cm(t,e){if(e){if(DN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function hm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dm=null;function cy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fm=null,no=null,ro=null;function I0(t){if(t=cl(t)){if(typeof fm!="function")throw Error(x(280));var e=t.stateNode;e&&(e=id(e),fm(t.stateNode,t.type,e))}}function bI(t){no?ro?ro.push(t):ro=[t]:no=t}function xI(){if(no){var t=no,e=ro;if(ro=no=null,I0(t),e)for(t=0;t<e.length;t++)I0(e[t])}}function AI(t,e){return t(e)}function NI(){}var Hf=!1;function RI(t,e,n){if(Hf)return t(e,n);Hf=!0;try{return AI(t,e,n)}finally{Hf=!1,(no!==null||ro!==null)&&(NI(),xI())}}function du(t,e){var n=t.stateNode;if(n===null)return null;var r=id(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var pm=!1;if(ar)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){pm=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{pm=!1}function ON(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Ha=!1,Kc=null,Qc=!1,mm=null,$N={onError:function(t){Ha=!0,Kc=t}};function LN(t,e,n,r,i,s,o,a,u){Ha=!1,Kc=null,ON.apply($N,arguments)}function MN(t,e,n,r,i,s,o,a,u){if(LN.apply(this,arguments),Ha){if(Ha){var l=Kc;Ha=!1,Kc=null}else throw Error(x(198));Qc||(Qc=!0,mm=l)}}function Is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function PI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S0(t){if(Is(t)!==t)throw Error(x(188))}function FN(t){var e=t.alternate;if(!e){if(e=Is(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return S0(i),t;if(s===r)return S0(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function DI(t){return t=FN(t),t!==null?OI(t):null}function OI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=OI(t);if(e!==null)return e;t=t.sibling}return null}var $I=Ht.unstable_scheduleCallback,T0=Ht.unstable_cancelCallback,UN=Ht.unstable_shouldYield,VN=Ht.unstable_requestPaint,Ae=Ht.unstable_now,jN=Ht.unstable_getCurrentPriorityLevel,hy=Ht.unstable_ImmediatePriority,LI=Ht.unstable_UserBlockingPriority,Yc=Ht.unstable_NormalPriority,BN=Ht.unstable_LowPriority,MI=Ht.unstable_IdlePriority,ed=null,Mn=null;function zN(t){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(ed,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:HN,qN=Math.log,WN=Math.LN2;function HN(t){return t>>>=0,t===0?32:31-(qN(t)/WN|0)|0}var Gl=64,Kl=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Oa(a):(s&=o,s!==0&&(r=Oa(s)))}else o=n&~i,o!==0?r=Oa(o):s!==0&&(r=Oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function GN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=GN(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function gm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function FI(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function Gf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ul(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function QN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function dy(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function UI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var VI,fy,jI,BI,zI,ym=!1,Ql=[],Vr=null,jr=null,Br=null,fu=new Map,pu=new Map,Nr=[],YN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function k0(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":fu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(e.pointerId)}}function pa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=cl(e),e!==null&&fy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JN(t,e,n,r,i){switch(e){case"focusin":return Vr=pa(Vr,t,e,n,r,i),!0;case"dragenter":return jr=pa(jr,t,e,n,r,i),!0;case"mouseover":return Br=pa(Br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fu.set(s,pa(fu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,pu.set(s,pa(pu.get(s)||null,t,e,n,r,i)),!0}return!1}function qI(t){var e=Vi(t.target);if(e!==null){var n=Is(e);if(n!==null){if(e=n.tag,e===13){if(e=PI(n),e!==null){t.blockedOn=e,zI(t.priority,function(){jI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dm=r,n.target.dispatchEvent(r),dm=null}else return e=cl(n),e!==null&&fy(e),t.blockedOn=n,!1;e.shift()}return!0}function C0(t,e,n){Ec(t)&&n.delete(e)}function XN(){ym=!1,Vr!==null&&Ec(Vr)&&(Vr=null),jr!==null&&Ec(jr)&&(jr=null),Br!==null&&Ec(Br)&&(Br=null),fu.forEach(C0),pu.forEach(C0)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,ym||(ym=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,XN)))}function mu(t){function e(i){return ma(i,t)}if(0<Ql.length){ma(Ql[0],t);for(var n=1;n<Ql.length;n++){var r=Ql[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&ma(Vr,t),jr!==null&&ma(jr,t),Br!==null&&ma(Br,t),fu.forEach(e),pu.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)qI(n),n.blockedOn===null&&Nr.shift()}var io=mr.ReactCurrentBatchConfig,Xc=!0;function ZN(t,e,n,r){var i=se,s=io.transition;io.transition=null;try{se=1,py(t,e,n,r)}finally{se=i,io.transition=s}}function eR(t,e,n,r){var i=se,s=io.transition;io.transition=null;try{se=4,py(t,e,n,r)}finally{se=i,io.transition=s}}function py(t,e,n,r){if(Xc){var i=vm(t,e,n,r);if(i===null)rp(t,e,r,Zc,n),k0(t,r);else if(JN(i,t,e,n,r))r.stopPropagation();else if(k0(t,r),e&4&&-1<YN.indexOf(t)){for(;i!==null;){var s=cl(i);if(s!==null&&VI(s),s=vm(t,e,n,r),s===null&&rp(t,e,r,Zc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rp(t,e,r,null,n)}}var Zc=null;function vm(t,e,n,r){if(Zc=null,t=cy(r),t=Vi(t),t!==null)if(e=Is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=PI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zc=t,null}function WI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jN()){case hy:return 1;case LI:return 4;case Yc:case BN:return 16;case MI:return 536870912;default:return 16}default:return 16}}var $r=null,my=null,Ic=null;function HI(){if(Ic)return Ic;var t,e=my,n=e.length,r,i="value"in $r?$r.value:$r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ic=i.slice(t,1<r?1-r:void 0)}function Sc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yl(){return!0}function b0(){return!1}function Jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yl:b0,this.isPropagationStopped=b0,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gy=Jt(qo),ll=Ie({},qo,{view:0,detail:0}),tR=Jt(ll),Kf,Qf,ga,td=Ie({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(Kf=t.screenX-ga.screenX,Qf=t.screenY-ga.screenY):Qf=Kf=0,ga=t),Kf)},movementY:function(t){return"movementY"in t?t.movementY:Qf}}),x0=Jt(td),nR=Ie({},td,{dataTransfer:0}),rR=Jt(nR),iR=Ie({},ll,{relatedTarget:0}),Yf=Jt(iR),sR=Ie({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),oR=Jt(sR),aR=Ie({},qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uR=Jt(aR),lR=Ie({},qo,{data:0}),A0=Jt(lR),cR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dR[t])?!!e[t]:!1}function yy(){return fR}var pR=Ie({},ll,{key:function(t){if(t.key){var e=cR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yy,charCode:function(t){return t.type==="keypress"?Sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mR=Jt(pR),gR=Ie({},td,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),N0=Jt(gR),yR=Ie({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yy}),vR=Jt(yR),wR=Ie({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),_R=Jt(wR),ER=Ie({},td,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IR=Jt(ER),SR=[9,13,27,32],vy=ar&&"CompositionEvent"in window,Ga=null;ar&&"documentMode"in document&&(Ga=document.documentMode);var TR=ar&&"TextEvent"in window&&!Ga,GI=ar&&(!vy||Ga&&8<Ga&&11>=Ga),R0=String.fromCharCode(32),P0=!1;function KI(t,e){switch(t){case"keyup":return SR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function QI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zs=!1;function kR(t,e){switch(t){case"compositionend":return QI(e);case"keypress":return e.which!==32?null:(P0=!0,R0);case"textInput":return t=e.data,t===R0&&P0?null:t;default:return null}}function CR(t,e){if(zs)return t==="compositionend"||!vy&&KI(t,e)?(t=HI(),Ic=my=$r=null,zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return GI&&e.locale!=="ko"?null:e.data;default:return null}}var bR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function D0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bR[t.type]:e==="textarea"}function YI(t,e,n,r){bI(r),e=eh(e,"onChange"),0<e.length&&(n=new gy("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ka=null,gu=null;function xR(t){aS(t,0)}function nd(t){var e=Hs(t);if(_I(e))return t}function AR(t,e){if(t==="change")return e}var JI=!1;if(ar){var Jf;if(ar){var Xf="oninput"in document;if(!Xf){var O0=document.createElement("div");O0.setAttribute("oninput","return;"),Xf=typeof O0.oninput=="function"}Jf=Xf}else Jf=!1;JI=Jf&&(!document.documentMode||9<document.documentMode)}function $0(){Ka&&(Ka.detachEvent("onpropertychange",XI),gu=Ka=null)}function XI(t){if(t.propertyName==="value"&&nd(gu)){var e=[];YI(e,gu,t,cy(t)),RI(xR,e)}}function NR(t,e,n){t==="focusin"?($0(),Ka=e,gu=n,Ka.attachEvent("onpropertychange",XI)):t==="focusout"&&$0()}function RR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nd(gu)}function PR(t,e){if(t==="click")return nd(e)}function DR(t,e){if(t==="input"||t==="change")return nd(e)}function OR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:OR;function yu(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!em.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function L0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function M0(t,e){var n=L0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=L0(n)}}function ZI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ZI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function eS(){for(var t=window,e=Gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gc(t.document)}return e}function wy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $R(t){var e=eS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ZI(n.ownerDocument.documentElement,n)){if(r!==null&&wy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=M0(n,s);var o=M0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LR=ar&&"documentMode"in document&&11>=document.documentMode,qs=null,wm=null,Qa=null,_m=!1;function F0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_m||qs==null||qs!==Gc(r)||(r=qs,"selectionStart"in r&&wy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qa&&yu(Qa,r)||(Qa=r,r=eh(wm,"onSelect"),0<r.length&&(e=new gy("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qs)))}function Jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:Jl("Animation","AnimationEnd"),animationiteration:Jl("Animation","AnimationIteration"),animationstart:Jl("Animation","AnimationStart"),transitionend:Jl("Transition","TransitionEnd")},Zf={},tS={};ar&&(tS=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function rd(t){if(Zf[t])return Zf[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tS)return Zf[t]=e[n];return t}var nS=rd("animationend"),rS=rd("animationiteration"),iS=rd("animationstart"),sS=rd("transitionend"),oS=new Map,U0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(t,e){oS.set(t,e),Es(e,[t])}for(var ep=0;ep<U0.length;ep++){var tp=U0[ep],MR=tp.toLowerCase(),FR=tp[0].toUpperCase()+tp.slice(1);pi(MR,"on"+FR)}pi(nS,"onAnimationEnd");pi(rS,"onAnimationIteration");pi(iS,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(sS,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UR=new Set("cancel close invalid load scroll toggle".split(" ").concat($a));function V0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MN(r,e,void 0,t),t.currentTarget=null}function aS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;V0(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;V0(i,a,l),s=u}}}if(Qc)throw t=mm,Qc=!1,mm=null,t}function he(t,e){var n=e[km];n===void 0&&(n=e[km]=new Set);var r=t+"__bubble";n.has(r)||(uS(e,t,2,!1),n.add(r))}function np(t,e,n){var r=0;e&&(r|=4),uS(n,t,r,e)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function vu(t){if(!t[Xl]){t[Xl]=!0,mI.forEach(function(n){n!=="selectionchange"&&(UR.has(n)||np(n,!1,t),np(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xl]||(e[Xl]=!0,np("selectionchange",!1,e))}}function uS(t,e,n,r){switch(WI(e)){case 1:var i=ZN;break;case 4:i=eR;break;default:i=py}n=i.bind(null,e,n,t),i=void 0,!pm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}RI(function(){var l=s,c=cy(n),h=[];e:{var d=oS.get(t);if(d!==void 0){var f=gy,p=t;switch(t){case"keypress":if(Sc(n)===0)break e;case"keydown":case"keyup":f=mR;break;case"focusin":p="focus",f=Yf;break;case"focusout":p="blur",f=Yf;break;case"beforeblur":case"afterblur":f=Yf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=x0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=rR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=vR;break;case nS:case rS:case iS:f=oR;break;case sS:f=_R;break;case"scroll":f=tR;break;case"wheel":f=IR;break;case"copy":case"cut":case"paste":f=uR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=N0}var g=(e&4)!==0,w=!g&&t==="scroll",y=g?d!==null?d+"Capture":null:d;g=[];for(var m=l,v;m!==null;){v=m;var I=v.stateNode;if(v.tag===5&&I!==null&&(v=I,y!==null&&(I=du(m,y),I!=null&&g.push(wu(m,I,v)))),w)break;m=m.return}0<g.length&&(d=new f(d,p,null,n,c),h.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==dm&&(p=n.relatedTarget||n.fromElement)&&(Vi(p)||p[ur]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=l,p=p?Vi(p):null,p!==null&&(w=Is(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=l),f!==p)){if(g=x0,I="onMouseLeave",y="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(g=N0,I="onPointerLeave",y="onPointerEnter",m="pointer"),w=f==null?d:Hs(f),v=p==null?d:Hs(p),d=new g(I,m+"leave",f,n,c),d.target=w,d.relatedTarget=v,I=null,Vi(c)===l&&(g=new g(y,m+"enter",p,n,c),g.target=v,g.relatedTarget=w,I=g),w=I,f&&p)t:{for(g=f,y=p,m=0,v=g;v;v=Ds(v))m++;for(v=0,I=y;I;I=Ds(I))v++;for(;0<m-v;)g=Ds(g),m--;for(;0<v-m;)y=Ds(y),v--;for(;m--;){if(g===y||y!==null&&g===y.alternate)break t;g=Ds(g),y=Ds(y)}g=null}else g=null;f!==null&&j0(h,d,f,g,!1),p!==null&&w!==null&&j0(h,w,p,g,!0)}}e:{if(d=l?Hs(l):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var C=AR;else if(D0(d))if(JI)C=DR;else{C=RR;var A=NR}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=PR);if(C&&(C=C(t,l))){YI(h,C,n,c);break e}A&&A(t,d,l),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&am(d,"number",d.value)}switch(A=l?Hs(l):window,t){case"focusin":(D0(A)||A.contentEditable==="true")&&(qs=A,wm=l,Qa=null);break;case"focusout":Qa=wm=qs=null;break;case"mousedown":_m=!0;break;case"contextmenu":case"mouseup":case"dragend":_m=!1,F0(h,n,c);break;case"selectionchange":if(LR)break;case"keydown":case"keyup":F0(h,n,c)}var P;if(vy)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else zs?KI(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(GI&&n.locale!=="ko"&&(zs||M!=="onCompositionStart"?M==="onCompositionEnd"&&zs&&(P=HI()):($r=c,my="value"in $r?$r.value:$r.textContent,zs=!0)),A=eh(l,M),0<A.length&&(M=new A0(M,t,null,n,c),h.push({event:M,listeners:A}),P?M.data=P:(P=QI(n),P!==null&&(M.data=P)))),(P=TR?kR(t,n):CR(t,n))&&(l=eh(l,"onBeforeInput"),0<l.length&&(c=new A0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=P))}aS(h,e)})}function wu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=du(t,n),s!=null&&r.unshift(wu(t,s,i)),s=du(t,e),s!=null&&r.push(wu(t,s,i))),t=t.return}return r}function Ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function j0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=du(n,s),u!=null&&o.unshift(wu(n,u,a))):i||(u=du(n,s),u!=null&&o.push(wu(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VR=/\r\n?/g,jR=/\u0000|\uFFFD/g;function B0(t){return(typeof t=="string"?t:""+t).replace(VR,`
`).replace(jR,"")}function Zl(t,e,n){if(e=B0(e),B0(t)!==e&&n)throw Error(x(425))}function th(){}var Em=null,Im=null;function Sm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tm=typeof setTimeout=="function"?setTimeout:void 0,BR=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,zR=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(t){return z0.resolve(null).then(t).catch(qR)}:Tm;function qR(t){setTimeout(function(){throw t})}function ip(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),mu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mu(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function q0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wo=Math.random().toString(36).slice(2),kn="__reactFiber$"+Wo,_u="__reactProps$"+Wo,ur="__reactContainer$"+Wo,km="__reactEvents$"+Wo,WR="__reactListeners$"+Wo,HR="__reactHandles$"+Wo;function Vi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=q0(t);t!==null;){if(n=t[kn])return n;t=q0(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[kn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function id(t){return t[_u]||null}var Cm=[],Gs=-1;function mi(t){return{current:t}}function fe(t){0>Gs||(t.current=Cm[Gs],Cm[Gs]=null,Gs--)}function le(t,e){Gs++,Cm[Gs]=t.current,t.current=e}var Xr={},wt=mi(Xr),Mt=mi(!1),ns=Xr;function wo(t,e){var n=t.type.contextTypes;if(!n)return Xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function nh(){fe(Mt),fe(wt)}function W0(t,e,n){if(wt.current!==Xr)throw Error(x(168));le(wt,e),le(Mt,n)}function lS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,NN(t)||"Unknown",i));return Ie({},n,r)}function rh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,ns=wt.current,le(wt,t),le(Mt,Mt.current),!0}function H0(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=lS(t,e,ns),r.__reactInternalMemoizedMergedChildContext=t,fe(Mt),fe(wt),le(wt,t)):fe(Mt),le(Mt,n)}var Yn=null,sd=!1,sp=!1;function cS(t){Yn===null?Yn=[t]:Yn.push(t)}function GR(t){sd=!0,cS(t)}function gi(){if(!sp&&Yn!==null){sp=!0;var t=0,e=se;try{var n=Yn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,sd=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(t+1)),$I(hy,gi),i}finally{se=e,sp=!1}}return null}var Ks=[],Qs=0,ih=null,sh=0,Zt=[],en=0,rs=null,Jn=1,Xn="";function Ai(t,e){Ks[Qs++]=sh,Ks[Qs++]=ih,ih=t,sh=e}function hS(t,e,n){Zt[en++]=Jn,Zt[en++]=Xn,Zt[en++]=rs,rs=t;var r=Jn;t=Xn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jn=1<<32-yn(e)+i|n<<i|r,Xn=s+t}else Jn=1<<s|n<<i|r,Xn=t}function _y(t){t.return!==null&&(Ai(t,1),hS(t,1,0))}function Ey(t){for(;t===ih;)ih=Ks[--Qs],Ks[Qs]=null,sh=Ks[--Qs],Ks[Qs]=null;for(;t===rs;)rs=Zt[--en],Zt[en]=null,Xn=Zt[--en],Zt[en]=null,Jn=Zt[--en],Zt[en]=null}var Wt=null,zt=null,ye=!1,pn=null;function dS(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function G0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,zt=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:Jn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,zt=null,!0):!1;default:return!1}}function bm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xm(t){if(ye){var e=zt;if(e){var n=e;if(!G0(t,e)){if(bm(t))throw Error(x(418));e=zr(n.nextSibling);var r=Wt;e&&G0(t,e)?dS(r,n):(t.flags=t.flags&-4097|2,ye=!1,Wt=t)}}else{if(bm(t))throw Error(x(418));t.flags=t.flags&-4097|2,ye=!1,Wt=t}}}function K0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function ec(t){if(t!==Wt)return!1;if(!ye)return K0(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sm(t.type,t.memoizedProps)),e&&(e=zt)){if(bm(t))throw fS(),Error(x(418));for(;e;)dS(t,e),e=zr(e.nextSibling)}if(K0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Wt?zr(t.stateNode.nextSibling):null;return!0}function fS(){for(var t=zt;t;)t=zr(t.nextSibling)}function _o(){zt=Wt=null,ye=!1}function Iy(t){pn===null?pn=[t]:pn.push(t)}var KR=mr.ReactCurrentBatchConfig;function dn(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var oh=mi(null),ah=null,Ys=null,Sy=null;function Ty(){Sy=Ys=ah=null}function ky(t){var e=oh.current;fe(oh),t._currentValue=e}function Am(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function so(t,e){ah=t,Sy=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(Sy!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(ah===null)throw Error(x(308));Ys=t,ah.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var ji=null;function Cy(t){ji===null?ji=[t]:ji.push(t)}function pS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cy(e)):(n.next=i.next,i.next=n),e.interleaved=n,lr(t,r)}function lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function by(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,lr(t,n)}return i=r.interleaved,i===null?(e.next=e,Cy(r)):(e.next=i.next,i.next=e),r.interleaved=e,lr(t,n)}function Tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dy(t,n)}}function Q0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uh(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,g=a;switch(d=e,f=n,g.tag){case 1:if(p=g.payload,typeof p=="function"){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=g.payload,d=typeof p=="function"?p.call(f,h,d):p,d==null)break e;h=Ie({},h,d);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=f,u=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=h}}function Y0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var gS=new pI.Component().refs;function Nm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var od={isMounted:function(t){return(t=t._reactInternals)?Is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Hr(t),s=rr(r,i);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(vn(e,t,i,r),Tc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Hr(t),s=rr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(vn(e,t,i,r),Tc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Hr(t),i=rr(n,r);i.tag=2,e!=null&&(i.callback=e),e=qr(t,i,r),e!==null&&(vn(e,t,r,n),Tc(e,t,r))}};function J0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yu(n,r)||!yu(i,s):!0}function yS(t,e,n){var r=!1,i=Xr,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=Ft(e)?ns:wt.current,r=e.contextTypes,s=(r=r!=null)?wo(t,i):Xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=od,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function X0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&od.enqueueReplaceState(e,e.state,null)}function Rm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=gS,by(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=Ft(e)?ns:wt.current,i.context=wo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&od.enqueueReplaceState(i,i.state,null),uh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===gS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function tc(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Z0(t){var e=t._init;return e(t._payload)}function vS(t){function e(y,m){if(t){var v=y.deletions;v===null?(y.deletions=[m],y.flags|=16):v.push(m)}}function n(y,m){if(!t)return null;for(;m!==null;)e(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=Gr(y,m),y.index=0,y.sibling=null,y}function s(y,m,v){return y.index=v,t?(v=y.alternate,v!==null?(v=v.index,v<m?(y.flags|=2,m):v):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,m,v,I){return m===null||m.tag!==6?(m=dp(v,y.mode,I),m.return=y,m):(m=i(m,v),m.return=y,m)}function u(y,m,v,I){var C=v.type;return C===Bs?c(y,m,v.props.children,I,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xr&&Z0(C)===m.type)?(I=i(m,v.props),I.ref=ya(y,m,v),I.return=y,I):(I=Nc(v.type,v.key,v.props,null,y.mode,I),I.ref=ya(y,m,v),I.return=y,I)}function l(y,m,v,I){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=fp(v,y.mode,I),m.return=y,m):(m=i(m,v.children||[]),m.return=y,m)}function c(y,m,v,I,C){return m===null||m.tag!==7?(m=Qi(v,y.mode,I,C),m.return=y,m):(m=i(m,v),m.return=y,m)}function h(y,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=dp(""+m,y.mode,v),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ql:return v=Nc(m.type,m.key,m.props,null,y.mode,v),v.ref=ya(y,null,m),v.return=y,v;case js:return m=fp(m,y.mode,v),m.return=y,m;case xr:var I=m._init;return h(y,I(m._payload),v)}if(Da(m)||da(m))return m=Qi(m,y.mode,v,null),m.return=y,m;tc(y,m)}return null}function d(y,m,v,I){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(y,m,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ql:return v.key===C?u(y,m,v,I):null;case js:return v.key===C?l(y,m,v,I):null;case xr:return C=v._init,d(y,m,C(v._payload),I)}if(Da(v)||da(v))return C!==null?null:c(y,m,v,I,null);tc(y,v)}return null}function f(y,m,v,I,C){if(typeof I=="string"&&I!==""||typeof I=="number")return y=y.get(v)||null,a(m,y,""+I,C);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ql:return y=y.get(I.key===null?v:I.key)||null,u(m,y,I,C);case js:return y=y.get(I.key===null?v:I.key)||null,l(m,y,I,C);case xr:var A=I._init;return f(y,m,v,A(I._payload),C)}if(Da(I)||da(I))return y=y.get(v)||null,c(m,y,I,C,null);tc(m,I)}return null}function p(y,m,v,I){for(var C=null,A=null,P=m,M=m=0,J=null;P!==null&&M<v.length;M++){P.index>M?(J=P,P=null):J=P.sibling;var z=d(y,P,v[M],I);if(z===null){P===null&&(P=J);break}t&&P&&z.alternate===null&&e(y,P),m=s(z,m,M),A===null?C=z:A.sibling=z,A=z,P=J}if(M===v.length)return n(y,P),ye&&Ai(y,M),C;if(P===null){for(;M<v.length;M++)P=h(y,v[M],I),P!==null&&(m=s(P,m,M),A===null?C=P:A.sibling=P,A=P);return ye&&Ai(y,M),C}for(P=r(y,P);M<v.length;M++)J=f(P,y,M,v[M],I),J!==null&&(t&&J.alternate!==null&&P.delete(J.key===null?M:J.key),m=s(J,m,M),A===null?C=J:A.sibling=J,A=J);return t&&P.forEach(function(nt){return e(y,nt)}),ye&&Ai(y,M),C}function g(y,m,v,I){var C=da(v);if(typeof C!="function")throw Error(x(150));if(v=C.call(v),v==null)throw Error(x(151));for(var A=C=null,P=m,M=m=0,J=null,z=v.next();P!==null&&!z.done;M++,z=v.next()){P.index>M?(J=P,P=null):J=P.sibling;var nt=d(y,P,z.value,I);if(nt===null){P===null&&(P=J);break}t&&P&&nt.alternate===null&&e(y,P),m=s(nt,m,M),A===null?C=nt:A.sibling=nt,A=nt,P=J}if(z.done)return n(y,P),ye&&Ai(y,M),C;if(P===null){for(;!z.done;M++,z=v.next())z=h(y,z.value,I),z!==null&&(m=s(z,m,M),A===null?C=z:A.sibling=z,A=z);return ye&&Ai(y,M),C}for(P=r(y,P);!z.done;M++,z=v.next())z=f(P,y,M,z.value,I),z!==null&&(t&&z.alternate!==null&&P.delete(z.key===null?M:z.key),m=s(z,m,M),A===null?C=z:A.sibling=z,A=z);return t&&P.forEach(function(ca){return e(y,ca)}),ye&&Ai(y,M),C}function w(y,m,v,I){if(typeof v=="object"&&v!==null&&v.type===Bs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ql:e:{for(var C=v.key,A=m;A!==null;){if(A.key===C){if(C=v.type,C===Bs){if(A.tag===7){n(y,A.sibling),m=i(A,v.props.children),m.return=y,y=m;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xr&&Z0(C)===A.type){n(y,A.sibling),m=i(A,v.props),m.ref=ya(y,A,v),m.return=y,y=m;break e}n(y,A);break}else e(y,A);A=A.sibling}v.type===Bs?(m=Qi(v.props.children,y.mode,I,v.key),m.return=y,y=m):(I=Nc(v.type,v.key,v.props,null,y.mode,I),I.ref=ya(y,m,v),I.return=y,y=I)}return o(y);case js:e:{for(A=v.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(y,m.sibling),m=i(m,v.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else e(y,m);m=m.sibling}m=fp(v,y.mode,I),m.return=y,y=m}return o(y);case xr:return A=v._init,w(y,m,A(v._payload),I)}if(Da(v))return p(y,m,v,I);if(da(v))return g(y,m,v,I);tc(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,v),m.return=y,y=m):(n(y,m),m=dp(v,y.mode,I),m.return=y,y=m),o(y)):n(y,m)}return w}var Eo=vS(!0),wS=vS(!1),hl={},Fn=mi(hl),Eu=mi(hl),Iu=mi(hl);function Bi(t){if(t===hl)throw Error(x(174));return t}function xy(t,e){switch(le(Iu,e),le(Eu,t),le(Fn,hl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lm(e,t)}fe(Fn),le(Fn,e)}function Io(){fe(Fn),fe(Eu),fe(Iu)}function _S(t){Bi(Iu.current);var e=Bi(Fn.current),n=lm(e,t.type);e!==n&&(le(Eu,t),le(Fn,n))}function Ay(t){Eu.current===t&&(fe(Fn),fe(Eu))}var _e=mi(0);function lh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var op=[];function Ny(){for(var t=0;t<op.length;t++)op[t]._workInProgressVersionPrimary=null;op.length=0}var kc=mr.ReactCurrentDispatcher,ap=mr.ReactCurrentBatchConfig,is=0,Ee=null,Fe=null,He=null,ch=!1,Ya=!1,Su=0,QR=0;function dt(){throw Error(x(321))}function Ry(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Py(t,e,n,r,i,s){if(is=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kc.current=t===null||t.memoizedState===null?ZR:eP,t=n(r,i),Ya){s=0;do{if(Ya=!1,Su=0,25<=s)throw Error(x(301));s+=1,He=Fe=null,e.updateQueue=null,kc.current=tP,t=n(r,i)}while(Ya)}if(kc.current=hh,e=Fe!==null&&Fe.next!==null,is=0,He=Fe=Ee=null,ch=!1,e)throw Error(x(300));return t}function Dy(){var t=Su!==0;return Su=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ee.memoizedState=He=t:He=He.next=t,He}function un(){if(Fe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=He===null?Ee.memoizedState:He.next;if(e!==null)He=e,Fe=t;else{if(t===null)throw Error(x(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},He===null?Ee.memoizedState=He=t:He=He.next=t}return He}function Tu(t,e){return typeof e=="function"?e(t):e}function up(t){var e=un(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((is&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,Ee.lanes|=c,ss|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,wn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,ss|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lp(t){var e=un(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ES(){}function IS(t,e){var n=Ee,r=un(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,Oy(kS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,ku(9,TS.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(x(349));is&30||SS(n,e,i)}return i}function SS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function TS(t,e,n,r){e.value=n,e.getSnapshot=r,CS(e)&&bS(t)}function kS(t,e,n){return n(function(){CS(e)&&bS(t)})}function CS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function bS(t){var e=lr(t,1);e!==null&&vn(e,t,1,-1)}function e_(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tu,lastRenderedState:t},e.queue=t,t=t.dispatch=XR.bind(null,Ee,t),[e.memoizedState,t]}function ku(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xS(){return un().memoizedState}function Cc(t,e,n,r){var i=Tn();Ee.flags|=t,i.memoizedState=ku(1|e,n,void 0,r===void 0?null:r)}function ad(t,e,n,r){var i=un();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Ry(r,o.deps)){i.memoizedState=ku(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=ku(1|e,n,s,r)}function t_(t,e){return Cc(8390656,8,t,e)}function Oy(t,e){return ad(2048,8,t,e)}function AS(t,e){return ad(4,2,t,e)}function NS(t,e){return ad(4,4,t,e)}function RS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function PS(t,e,n){return n=n!=null?n.concat([t]):null,ad(4,4,RS.bind(null,e,t),n)}function $y(){}function DS(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ry(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function OS(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ry(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $S(t,e,n){return is&21?(wn(n,e)||(n=FI(),Ee.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function YR(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=ap.transition;ap.transition={};try{t(!1),e()}finally{se=n,ap.transition=r}}function LS(){return un().memoizedState}function JR(t,e,n){var r=Hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},MS(t))FS(e,n);else if(n=pS(t,e,n,r),n!==null){var i=Tt();vn(n,t,r,i),US(n,e,r)}}function XR(t,e,n){var r=Hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(MS(t))FS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var u=e.interleaved;u===null?(i.next=i,Cy(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=pS(t,e,i,r),n!==null&&(i=Tt(),vn(n,t,r,i),US(n,e,r))}}function MS(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function FS(t,e){Ya=ch=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function US(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dy(t,n)}}var hh={readContext:an,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},ZR={readContext:an,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:t_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4194308,4,RS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cc(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JR.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:e_,useDebugValue:$y,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=e_(!1),e=t[0];return t=YR.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Tn();if(ye){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ke===null)throw Error(x(349));is&30||SS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,t_(kS.bind(null,r,s,t),[t]),r.flags|=2048,ku(9,TS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tn(),e=Ke.identifierPrefix;if(ye){var n=Xn,r=Jn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Su++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eP={readContext:an,useCallback:DS,useContext:an,useEffect:Oy,useImperativeHandle:PS,useInsertionEffect:AS,useLayoutEffect:NS,useMemo:OS,useReducer:up,useRef:xS,useState:function(){return up(Tu)},useDebugValue:$y,useDeferredValue:function(t){var e=un();return $S(e,Fe.memoizedState,t)},useTransition:function(){var t=up(Tu)[0],e=un().memoizedState;return[t,e]},useMutableSource:ES,useSyncExternalStore:IS,useId:LS,unstable_isNewReconciler:!1},tP={readContext:an,useCallback:DS,useContext:an,useEffect:Oy,useImperativeHandle:PS,useInsertionEffect:AS,useLayoutEffect:NS,useMemo:OS,useReducer:lp,useRef:xS,useState:function(){return lp(Tu)},useDebugValue:$y,useDeferredValue:function(t){var e=un();return Fe===null?e.memoizedState=t:$S(e,Fe.memoizedState,t)},useTransition:function(){var t=lp(Tu)[0],e=un().memoizedState;return[t,e]},useMutableSource:ES,useSyncExternalStore:IS,useId:LS,unstable_isNewReconciler:!1};function So(t,e){try{var n="",r=e;do n+=AN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nP=typeof WeakMap=="function"?WeakMap:Map;function VS(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fh||(fh=!0,Bm=r),Pm(t,e)},n}function jS(t,e,n){n=rr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pm(t,e),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function n_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gP.bind(null,t,e,n),e.then(t,t))}function r_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function i_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var rP=mr.ReactCurrentOwner,Dt=!1;function _t(t,e,n,r){e.child=t===null?wS(e,null,n,r):Eo(e,t.child,n,r)}function s_(t,e,n,r,i){n=n.render;var s=e.ref;return so(e,i),r=Py(t,e,n,r,s,i),n=Dy(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(ye&&n&&_y(e),e.flags|=1,_t(t,e,r,i),e.child)}function o_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,BS(t,e,s,r,i)):(t=Nc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yu,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=Gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function BS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yu(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,cr(t,e,i)}return Dm(t,e,n,r,i)}function zS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Xs,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Xs,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Xs,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Xs,jt),jt|=r;return _t(t,e,i,n),e.child}function qS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dm(t,e,n,r,i){var s=Ft(n)?ns:wt.current;return s=wo(e,s),so(e,i),n=Py(t,e,n,r,s,i),r=Dy(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(ye&&r&&_y(e),e.flags|=1,_t(t,e,n,i),e.child)}function a_(t,e,n,r,i){if(Ft(n)){var s=!0;rh(e)}else s=!1;if(so(e,i),e.stateNode===null)bc(t,e),yS(e,n,r),Rm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=an(l):(l=Ft(n)?ns:wt.current,l=wo(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&X0(e,o,r,l),Ar=!1;var d=e.memoizedState;o.state=d,uh(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Mt.current||Ar?(typeof c=="function"&&(Nm(e,n,c,r),u=e.memoizedState),(a=Ar||J0(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mS(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:dn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=an(u):(u=Ft(n)?ns:wt.current,u=wo(e,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&X0(e,o,r,u),Ar=!1,d=e.memoizedState,o.state=d,uh(e,r,o,i);var p=e.memoizedState;a!==h||d!==p||Mt.current||Ar?(typeof f=="function"&&(Nm(e,n,f,r),p=e.memoizedState),(l=Ar||J0(e,n,l,r,d,p,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Om(t,e,n,r,s,i)}function Om(t,e,n,r,i,s){qS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&H0(e,n,!1),cr(t,e,s);r=e.stateNode,rP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Eo(e,t.child,null,s),e.child=Eo(e,null,a,s)):_t(t,e,a,s),e.memoizedState=r.state,i&&H0(e,n,!0),e.child}function WS(t){var e=t.stateNode;e.pendingContext?W0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&W0(t,e.context,!1),xy(t,e.containerInfo)}function u_(t,e,n,r,i){return _o(),Iy(i),e.flags|=256,_t(t,e,n,r),e.child}var $m={dehydrated:null,treeContext:null,retryLane:0};function Lm(t){return{baseLanes:t,cachePool:null,transitions:null}}function HS(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(_e,i&1),t===null)return xm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cd(o,r,0,null),t=Qi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lm(n),e.memoizedState=$m,t):Ly(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Gr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=Qi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Lm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$m,r}return s=t.child,t=s.sibling,r=Gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ly(t,e){return e=cd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nc(t,e,n,r){return r!==null&&Iy(r),Eo(e,t.child,null,n),t=Ly(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cp(Error(x(422))),nc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=cd({mode:"visible",children:r.children},i,0,null),s=Qi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Eo(e,t.child,null,o),e.child.memoizedState=Lm(o),e.memoizedState=$m,s);if(!(e.mode&1))return nc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=cp(s,r,void 0),nc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,lr(t,i),vn(r,t,i,-1))}return By(),r=cp(Error(x(421))),nc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=yP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=zr(i.nextSibling),Wt=e,ye=!0,pn=null,t!==null&&(Zt[en++]=Jn,Zt[en++]=Xn,Zt[en++]=rs,Jn=t.id,Xn=t.overflow,rs=e),e=Ly(e,r.children),e.flags|=4096,e)}function l_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Am(t.return,e,n)}function hp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function GS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(_t(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l_(t,n,e);else if(t.tag===19)l_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&lh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hp(e,!0,n,null,s);break;case"together":hp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sP(t,e,n){switch(e.tag){case 3:WS(e),_o();break;case 5:_S(e);break;case 1:Ft(e.type)&&rh(e);break;case 4:xy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(oh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?HS(t,e,n):(le(_e,_e.current&1),t=cr(t,e,n),t!==null?t.sibling:null);le(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return GS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,zS(t,e,n)}return cr(t,e,n)}var KS,Mm,QS,YS;KS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mm=function(){};QS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bi(Fn.current);var s=null;switch(n){case"input":i=sm(t,i),r=sm(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=um(t,i),r=um(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=th)}cm(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(cu.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(cu.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&he("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};YS=function(t,e,n,r){n!==r&&(e.flags|=4)};function va(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oP(t,e,n){var r=e.pendingProps;switch(Ey(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Ft(e.type)&&nh(),ft(e),null;case 3:return r=e.stateNode,Io(),fe(Mt),fe(wt),Ny(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ec(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pn!==null&&(Wm(pn),pn=null))),Mm(t,e),ft(e),null;case 5:Ay(e);var i=Bi(Iu.current);if(n=e.type,t!==null&&e.stateNode!=null)QS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ft(e),null}if(t=Bi(Fn.current),ec(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[_u]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<$a.length;i++)he($a[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":v0(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":_0(r,s),he("invalid",r)}cm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zl(r.textContent,a,t),i=["children",""+a]):cu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Wl(r),w0(r,s,!0);break;case"textarea":Wl(r),E0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=th)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=SI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[_u]=r,KS(t,e,!1,!1),e.stateNode=t;e:{switch(o=hm(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<$a.length;i++)he($a[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":v0(t,r),i=sm(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),he("invalid",t);break;case"textarea":_0(t,r),i=um(t,r),he("invalid",t);break;default:i=r}cm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?CI(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&TI(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&hu(t,u):typeof u=="number"&&hu(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cu.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&oy(t,s,u,o))}switch(n){case"input":Wl(t),w0(t,r,!1);break;case"textarea":Wl(t),E0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?to(t,!!r.multiple,s,!1):r.defaultValue!=null&&to(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=th)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)YS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Bi(Iu.current),Bi(Fn.current),ec(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Zl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return ft(e),null;case 13:if(fe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&zt!==null&&e.mode&1&&!(e.flags&128))fS(),_o(),e.flags|=98560,s=!1;else if(s=ec(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[kn]=e}else _o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else pn!==null&&(Wm(pn),pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ue===0&&(Ue=3):By())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Io(),Mm(t,e),t===null&&vu(e.stateNode.containerInfo),ft(e),null;case 10:return ky(e.type._context),ft(e),null;case 17:return Ft(e.type)&&nh(),ft(e),null;case 19:if(fe(_e),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)va(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lh(t),o!==null){for(e.flags|=128,va(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>To&&(e.flags|=128,r=!0,va(s,!1),e.lanes=4194304)}else{if(!r)if(t=lh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return ft(e),null}else 2*Ae()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,r=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=_e.current,le(_e,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return jy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function aP(t,e){switch(Ey(e),e.tag){case 1:return Ft(e.type)&&nh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Io(),fe(Mt),fe(wt),Ny(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ay(e),null;case 13:if(fe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));_o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(_e),null;case 4:return Io(),null;case 10:return ky(e.type._context),null;case 22:case 23:return jy(),null;case 24:return null;default:return null}}var rc=!1,gt=!1,uP=typeof WeakSet=="function"?WeakSet:Set,F=null;function Js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Fm(t,e,n){try{n()}catch(r){Te(t,e,r)}}var c_=!1;function lP(t,e){if(Em=Xc,t=eS(),wy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Im={focusedElem:t,selectionRange:n},Xc=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var g=p.memoizedProps,w=p.memoizedState,y=e.stateNode,m=y.getSnapshotBeforeUpdate(e.elementType===e.type?g:dn(e.type,g),w);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(I){Te(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return p=c_,c_=!1,p}function Ja(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fm(e,n,s)}i=i.next}while(i!==r)}}function ud(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Um(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function JS(t){var e=t.alternate;e!==null&&(t.alternate=null,JS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[_u],delete e[km],delete e[WR],delete e[HR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function XS(t){return t.tag===5||t.tag===3||t.tag===4}function h_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||XS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=th));else if(r!==4&&(t=t.child,t!==null))for(Vm(t,e,n),t=t.sibling;t!==null;)Vm(t,e,n),t=t.sibling}function jm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jm(t,e,n),t=t.sibling;t!==null;)jm(t,e,n),t=t.sibling}var rt=null,fn=!1;function Er(t,e,n){for(n=n.child;n!==null;)ZS(t,e,n),n=n.sibling}function ZS(t,e,n){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(ed,n)}catch{}switch(n.tag){case 5:gt||Js(n,e);case 6:var r=rt,i=fn;rt=null,Er(t,e,n),rt=r,fn=i,rt!==null&&(fn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(fn?(t=rt,n=n.stateNode,t.nodeType===8?ip(t.parentNode,n):t.nodeType===1&&ip(t,n),mu(t)):ip(rt,n.stateNode));break;case 4:r=rt,i=fn,rt=n.stateNode.containerInfo,fn=!0,Er(t,e,n),rt=r,fn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fm(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!gt&&(Js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,Er(t,e,n),gt=r):Er(t,e,n);break;default:Er(t,e,n)}}function d_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uP),e.forEach(function(r){var i=vP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,fn=!1;break e;case 3:rt=a.stateNode.containerInfo,fn=!0;break e;case 4:rt=a.stateNode.containerInfo,fn=!0;break e}a=a.return}if(rt===null)throw Error(x(160));ZS(s,o,i),rt=null,fn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Te(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)eT(e,t),e=e.sibling}function eT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),Sn(t),r&4){try{Ja(3,t,t.return),ud(3,t)}catch(g){Te(t,t.return,g)}try{Ja(5,t,t.return)}catch(g){Te(t,t.return,g)}}break;case 1:hn(e,t),Sn(t),r&512&&n!==null&&Js(n,n.return);break;case 5:if(hn(e,t),Sn(t),r&512&&n!==null&&Js(n,n.return),t.flags&32){var i=t.stateNode;try{hu(i,"")}catch(g){Te(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&EI(i,s),hm(a,o);var l=hm(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?CI(i,h):c==="dangerouslySetInnerHTML"?TI(i,h):c==="children"?hu(i,h):oy(i,c,h,l)}switch(a){case"input":om(i,s);break;case"textarea":II(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?to(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?to(i,!!s.multiple,s.defaultValue,!0):to(i,!!s.multiple,s.multiple?[]:"",!1))}i[_u]=s}catch(g){Te(t,t.return,g)}}break;case 6:if(hn(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){Te(t,t.return,g)}}break;case 3:if(hn(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mu(e.containerInfo)}catch(g){Te(t,t.return,g)}break;case 4:hn(e,t),Sn(t);break;case 13:hn(e,t),Sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Uy=Ae())),r&4&&d_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(l=gt)||c,hn(e,t),gt=l):hn(e,t),Sn(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(F=t,c=t.child;c!==null;){for(h=F=c;F!==null;){switch(d=F,f=d.child,d.tag){case 0:case 11:case 14:case 15:Ja(4,d,d.return);break;case 1:Js(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(g){Te(r,n,g)}}break;case 5:Js(d,d.return);break;case 22:if(d.memoizedState!==null){p_(h);continue}}f!==null?(f.return=d,F=f):p_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=kI("display",o))}catch(g){Te(t,t.return,g)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(g){Te(t,t.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:hn(e,t),Sn(t),r&4&&d_(t);break;case 21:break;default:hn(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(XS(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hu(i,""),r.flags&=-33);var s=h_(t);jm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=h_(t);Vm(t,a,o);break;default:throw Error(x(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cP(t,e,n){F=t,tT(t)}function tT(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||rc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||gt;a=rc;var l=gt;if(rc=o,(gt=u)&&!l)for(F=i;F!==null;)o=F,u=o.child,o.tag===22&&o.memoizedState!==null?m_(i):u!==null?(u.return=o,F=u):m_(i);for(;s!==null;)F=s,tT(s),s=s.sibling;F=i,rc=a,gt=l}f_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):f_(t)}}function f_(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||ud(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Y0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Y0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&mu(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}gt||e.flags&512&&Um(e)}catch(d){Te(e,e.return,d)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function p_(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function m_(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ud(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Um(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Um(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var hP=Math.ceil,dh=mr.ReactCurrentDispatcher,My=mr.ReactCurrentOwner,sn=mr.ReactCurrentBatchConfig,ne=0,Ke=null,Le=null,ot=0,jt=0,Xs=mi(0),Ue=0,Cu=null,ss=0,ld=0,Fy=0,Xa=null,Rt=null,Uy=0,To=1/0,Qn=null,fh=!1,Bm=null,Wr=null,ic=!1,Lr=null,ph=0,Za=0,zm=null,xc=-1,Ac=0;function Tt(){return ne&6?Ae():xc!==-1?xc:xc=Ae()}function Hr(t){return t.mode&1?ne&2&&ot!==0?ot&-ot:KR.transition!==null?(Ac===0&&(Ac=FI()),Ac):(t=se,t!==0||(t=window.event,t=t===void 0?16:WI(t.type)),t):1}function vn(t,e,n,r){if(50<Za)throw Za=0,zm=null,Error(x(185));ul(t,n,r),(!(ne&2)||t!==Ke)&&(t===Ke&&(!(ne&2)&&(ld|=n),Ue===4&&Rr(t,ot)),Ut(t,r),n===1&&ne===0&&!(e.mode&1)&&(To=Ae()+500,sd&&gi()))}function Ut(t,e){var n=t.callbackNode;KN(t,e);var r=Jc(t,t===Ke?ot:0);if(r===0)n!==null&&T0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&T0(n),e===1)t.tag===0?GR(g_.bind(null,t)):cS(g_.bind(null,t)),zR(function(){!(ne&6)&&gi()}),n=null;else{switch(UI(r)){case 1:n=hy;break;case 4:n=LI;break;case 16:n=Yc;break;case 536870912:n=MI;break;default:n=Yc}n=lT(n,nT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nT(t,e){if(xc=-1,Ac=0,ne&6)throw Error(x(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var r=Jc(t,t===Ke?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mh(t,r);else{e=r;var i=ne;ne|=2;var s=iT();(Ke!==t||ot!==e)&&(Qn=null,To=Ae()+500,Ki(t,e));do try{pP();break}catch(a){rT(t,a)}while(1);Ty(),dh.current=s,ne=i,Le!==null?e=0:(Ke=null,ot=0,e=Ue)}if(e!==0){if(e===2&&(i=gm(t),i!==0&&(r=i,e=qm(t,i))),e===1)throw n=Cu,Ki(t,0),Rr(t,r),Ut(t,Ae()),n;if(e===6)Rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!dP(i)&&(e=mh(t,r),e===2&&(s=gm(t),s!==0&&(r=s,e=qm(t,s))),e===1))throw n=Cu,Ki(t,0),Rr(t,r),Ut(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Ni(t,Rt,Qn);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=Uy+500-Ae(),10<e)){if(Jc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tm(Ni.bind(null,t,Rt,Qn),e);break}Ni(t,Rt,Qn);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hP(r/1960))-r,10<r){t.timeoutHandle=Tm(Ni.bind(null,t,Rt,Qn),r);break}Ni(t,Rt,Qn);break;case 5:Ni(t,Rt,Qn);break;default:throw Error(x(329))}}}return Ut(t,Ae()),t.callbackNode===n?nT.bind(null,t):null}function qm(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=mh(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Wm(e)),t}function Wm(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function dP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~Fy,e&=~ld,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function g_(t){if(ne&6)throw Error(x(327));oo();var e=Jc(t,0);if(!(e&1))return Ut(t,Ae()),null;var n=mh(t,e);if(t.tag!==0&&n===2){var r=gm(t);r!==0&&(e=r,n=qm(t,r))}if(n===1)throw n=Cu,Ki(t,0),Rr(t,e),Ut(t,Ae()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ni(t,Rt,Qn),Ut(t,Ae()),null}function Vy(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(To=Ae()+500,sd&&gi())}}function os(t){Lr!==null&&Lr.tag===0&&!(ne&6)&&oo();var e=ne;ne|=1;var n=sn.transition,r=se;try{if(sn.transition=null,se=1,t)return t()}finally{se=r,sn.transition=n,ne=e,!(ne&6)&&gi()}}function jy(){jt=Xs.current,fe(Xs)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BR(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Ey(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nh();break;case 3:Io(),fe(Mt),fe(wt),Ny();break;case 5:Ay(r);break;case 4:Io();break;case 13:fe(_e);break;case 19:fe(_e);break;case 10:ky(r.type._context);break;case 22:case 23:jy()}n=n.return}if(Ke=t,Le=t=Gr(t.current,null),ot=jt=e,Ue=0,Cu=null,Fy=ld=ss=0,Rt=Xa=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ji=null}return t}function rT(t,e){do{var n=Le;try{if(Ty(),kc.current=hh,ch){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ch=!1}if(is=0,He=Fe=Ee=null,Ya=!1,Su=0,My.current=null,n===null||n.return===null){Ue=1,Cu=e,Le=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=ot,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=r_(o);if(f!==null){f.flags&=-257,i_(f,o,a,s,e),f.mode&1&&n_(s,l,e),e=f,u=l;var p=e.updateQueue;if(p===null){var g=new Set;g.add(u),e.updateQueue=g}else p.add(u);break e}else{if(!(e&1)){n_(s,l,e),By();break e}u=Error(x(426))}}else if(ye&&a.mode&1){var w=r_(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),i_(w,o,a,s,e),Iy(So(u,a));break e}}s=u=So(u,a),Ue!==4&&(Ue=2),Xa===null?Xa=[s]:Xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=VS(s,u,e);Q0(s,y);break e;case 1:a=u;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Wr===null||!Wr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=jS(s,a,e);Q0(s,I);break e}}s=s.return}while(s!==null)}oT(n)}catch(C){e=C,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function iT(){var t=dh.current;return dh.current=hh,t===null?hh:t}function By(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ke===null||!(ss&268435455)&&!(ld&268435455)||Rr(Ke,ot)}function mh(t,e){var n=ne;ne|=2;var r=iT();(Ke!==t||ot!==e)&&(Qn=null,Ki(t,e));do try{fP();break}catch(i){rT(t,i)}while(1);if(Ty(),ne=n,dh.current=r,Le!==null)throw Error(x(261));return Ke=null,ot=0,Ue}function fP(){for(;Le!==null;)sT(Le)}function pP(){for(;Le!==null&&!UN();)sT(Le)}function sT(t){var e=uT(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?oT(t):Le=e,My.current=null}function oT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aP(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Le=null;return}}else if(n=oP(n,e,jt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Ue===0&&(Ue=5)}function Ni(t,e,n){var r=se,i=sn.transition;try{sn.transition=null,se=1,mP(t,e,n,r)}finally{sn.transition=i,se=r}return null}function mP(t,e,n,r){do oo();while(Lr!==null);if(ne&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(QN(t,s),t===Ke&&(Le=Ke=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ic||(ic=!0,lT(Yc,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=se;se=1;var a=ne;ne|=4,My.current=null,lP(t,n),eT(n,t),$R(Im),Xc=!!Em,Im=Em=null,t.current=n,cP(n),VN(),ne=a,se=o,sn.transition=s}else t.current=n;if(ic&&(ic=!1,Lr=t,ph=i),s=t.pendingLanes,s===0&&(Wr=null),zN(n.stateNode),Ut(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fh)throw fh=!1,t=Bm,Bm=null,t;return ph&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===zm?Za++:(Za=0,zm=t):Za=0,gi(),null}function oo(){if(Lr!==null){var t=UI(ph),e=sn.transition,n=se;try{if(sn.transition=null,se=16>t?16:t,Lr===null)var r=!1;else{if(t=Lr,Lr=null,ph=0,ne&6)throw Error(x(331));var i=ne;for(ne|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(F=l;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:Ja(8,c,s)}var h=c.child;if(h!==null)h.return=c,F=h;else for(;F!==null;){c=F;var d=c.sibling,f=c.return;if(JS(c),c===l){F=null;break}if(d!==null){d.return=f,F=d;break}F=f}}}var p=s.alternate;if(p!==null){var g=p.child;if(g!==null){p.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,F=y;break e}F=s.return}}var m=t.current;for(F=m;F!==null;){o=F;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,F=v;else e:for(o=m;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ud(9,a)}}catch(C){Te(a,a.return,C)}if(a===o){F=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,F=I;break e}F=a.return}}if(ne=i,gi(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(ed,t)}catch{}r=!0}return r}finally{se=n,sn.transition=e}}return!1}function y_(t,e,n){e=So(n,e),e=VS(t,e,1),t=qr(t,e,1),e=Tt(),t!==null&&(ul(t,1,e),Ut(t,e))}function Te(t,e,n){if(t.tag===3)y_(t,t,n);else for(;e!==null;){if(e.tag===3){y_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){t=So(n,t),t=jS(e,t,1),e=qr(e,t,1),t=Tt(),e!==null&&(ul(e,1,t),Ut(e,t));break}}e=e.return}}function gP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(ot&n)===n&&(Ue===4||Ue===3&&(ot&130023424)===ot&&500>Ae()-Uy?Ki(t,0):Fy|=n),Ut(t,e)}function aT(t,e){e===0&&(t.mode&1?(e=Kl,Kl<<=1,!(Kl&130023424)&&(Kl=4194304)):e=1);var n=Tt();t=lr(t,e),t!==null&&(ul(t,e,n),Ut(t,n))}function yP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aT(t,n)}function vP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),aT(t,n)}var uT;uT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,sP(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,ye&&e.flags&1048576&&hS(e,sh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bc(t,e),t=e.pendingProps;var i=wo(e,wt.current);so(e,n),i=Py(null,e,r,t,i,n);var s=Dy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,rh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,by(e),i.updater=od,e.stateNode=i,i._reactInternals=e,Rm(e,r,t,n),e=Om(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&_y(e),_t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_P(r),t=dn(r,t),i){case 0:e=Dm(null,e,r,t,n);break e;case 1:e=a_(null,e,r,t,n);break e;case 11:e=s_(null,e,r,t,n);break e;case 14:e=o_(null,e,r,dn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Dm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),a_(t,e,r,i,n);case 3:e:{if(WS(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,mS(t,e),uh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=So(Error(x(423)),e),e=u_(t,e,r,n,i);break e}else if(r!==i){i=So(Error(x(424)),e),e=u_(t,e,r,n,i);break e}else for(zt=zr(e.stateNode.containerInfo.firstChild),Wt=e,ye=!0,pn=null,n=wS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_o(),r===i){e=cr(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return _S(e),t===null&&xm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sm(r,i)?o=null:s!==null&&Sm(r,s)&&(e.flags|=32),qS(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&xm(e),null;case 13:return HS(t,e,n);case 4:return xy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Eo(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),s_(t,e,r,i,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(oh,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Mt.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=rr(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Am(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Am(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,so(e,n),i=an(i),r=r(i),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),o_(t,e,r,i,n);case 15:return BS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),bc(t,e),e.tag=1,Ft(r)?(t=!0,rh(e)):t=!1,so(e,n),yS(e,r,i),Rm(e,r,i,n),Om(null,e,r,!0,t,n);case 19:return GS(t,e,n);case 22:return zS(t,e,n)}throw Error(x(156,e.tag))};function lT(t,e){return $I(t,e)}function wP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new wP(t,e,n,r)}function zy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _P(t){if(typeof t=="function")return zy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uy)return 11;if(t===ly)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bs:return Qi(n.children,i,s,e);case ay:o=8,i|=8;break;case tm:return t=nn(12,n,e,i|2),t.elementType=tm,t.lanes=s,t;case nm:return t=nn(13,n,e,i),t.elementType=nm,t.lanes=s,t;case rm:return t=nn(19,n,e,i),t.elementType=rm,t.lanes=s,t;case vI:return cd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gI:o=10;break e;case yI:o=9;break e;case uy:o=11;break e;case ly:o=14;break e;case xr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qi(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function cd(t,e,n,r){return t=nn(22,t,r,e),t.elementType=vI,t.lanes=n,t.stateNode={isHidden:!1},t}function dp(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function fp(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gf(0),this.expirationTimes=Gf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qy(t,e,n,r,i,s,o,a,u){return t=new EP(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},by(s),t}function IP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cT(t){if(!t)return Xr;t=t._reactInternals;e:{if(Is(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Ft(n))return lS(t,n,e)}return e}function hT(t,e,n,r,i,s,o,a,u){return t=qy(n,r,!0,t,i,s,o,a,u),t.context=cT(null),n=t.current,r=Tt(),i=Hr(n),s=rr(r,i),s.callback=e??null,qr(n,s,i),t.current.lanes=i,ul(t,i,r),Ut(t,r),t}function hd(t,e,n,r){var i=e.current,s=Tt(),o=Hr(i);return n=cT(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qr(i,e,o),t!==null&&(vn(t,i,o,s),Tc(t,i,o)),o}function gh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function v_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wy(t,e){v_(t,e),(t=t.alternate)&&v_(t,e)}function SP(){return null}var dT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hy(t){this._internalRoot=t}dd.prototype.render=Hy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));hd(t,e,null,null)};dd.prototype.unmount=Hy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){hd(null,t,null,null)}),e[ur]=null}};function dd(t){this._internalRoot=t}dd.prototype.unstable_scheduleHydration=function(t){if(t){var e=BI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&qI(t)}};function Gy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function w_(){}function TP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=gh(o);s.call(l)}}var o=hT(e,r,t,0,null,!1,!1,"",w_);return t._reactRootContainer=o,t[ur]=o.current,vu(t.nodeType===8?t.parentNode:t),os(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=gh(u);a.call(l)}}var u=qy(t,0,!1,null,null,!1,!1,"",w_);return t._reactRootContainer=u,t[ur]=u.current,vu(t.nodeType===8?t.parentNode:t),os(function(){hd(e,u,n,r)}),u}function pd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=gh(o);a.call(u)}}hd(e,o,t,i)}else o=TP(n,e,t,i,r);return gh(o)}VI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(dy(e,n|1),Ut(e,Ae()),!(ne&6)&&(To=Ae()+500,gi()))}break;case 13:os(function(){var r=lr(t,1);if(r!==null){var i=Tt();vn(r,t,1,i)}}),Wy(t,1)}};fy=function(t){if(t.tag===13){var e=lr(t,134217728);if(e!==null){var n=Tt();vn(e,t,134217728,n)}Wy(t,134217728)}};jI=function(t){if(t.tag===13){var e=Hr(t),n=lr(t,e);if(n!==null){var r=Tt();vn(n,t,e,r)}Wy(t,e)}};BI=function(){return se};zI=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};fm=function(t,e,n){switch(e){case"input":if(om(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=id(r);if(!i)throw Error(x(90));_I(r),om(r,i)}}}break;case"textarea":II(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};AI=Vy;NI=os;var kP={usingClientEntryPoint:!1,Events:[cl,Hs,id,bI,xI,Vy]},wa={findFiberByHostInstance:Vi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},CP={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=DI(t),t===null?null:t.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||SP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{ed=sc.inject(CP),Mn=sc}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kP;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gy(e))throw Error(x(200));return IP(t,e,null,n)};Yt.createRoot=function(t,e){if(!Gy(t))throw Error(x(299));var n=!1,r="",i=dT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qy(t,1,!1,null,null,n,!1,r,i),t[ur]=e.current,vu(t.nodeType===8?t.parentNode:t),new Hy(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=DI(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return os(t)};Yt.hydrate=function(t,e,n){if(!fd(e))throw Error(x(200));return pd(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Gy(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hT(e,null,t,1,n??null,i,!1,s,o),t[ur]=e.current,vu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new dd(e)};Yt.render=function(t,e,n){if(!fd(e))throw Error(x(200));return pd(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!fd(t))throw Error(x(40));return t._reactRootContainer?(os(function(){pd(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};Yt.unstable_batchedUpdates=Vy;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fd(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return pd(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function fT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fT)}catch(t){console.error(t)}}fT(),hI.exports=Yt;var pT=hI.exports,__=pT;Zp.createRoot=__.createRoot,Zp.hydrateRoot=__.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bu(){return bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bu.apply(this,arguments)}var Mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mr||(Mr={}));const E_="popstate";function bP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Hm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mT(i)}return AP(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ky(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xP(){return Math.random().toString(36).substr(2,8)}function I_(t,e){return{usr:t.state,key:t.key,idx:e}}function Hm(t,e,n,r){return n===void 0&&(n=null),bu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ho(e):e,{state:n,key:e&&e.key||r||xP()})}function mT(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ho(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function AP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Mr.Pop,u=null,l=c();l==null&&(l=0,o.replaceState(bu({},o.state,{idx:l}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Mr.Pop;let w=c(),y=w==null?null:w-l;l=w,u&&u({action:a,location:g.location,delta:y})}function d(w,y){a=Mr.Push;let m=Hm(g.location,w,y);n&&n(m,w),l=c()+1;let v=I_(m,l),I=g.createHref(m);try{o.pushState(v,"",I)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(I)}s&&u&&u({action:a,location:g.location,delta:1})}function f(w,y){a=Mr.Replace;let m=Hm(g.location,w,y);n&&n(m,w),l=c();let v=I_(m,l),I=g.createHref(m);o.replaceState(v,"",I),s&&u&&u({action:a,location:g.location,delta:0})}function p(w){let y=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:mT(w);return Ve(y,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,y)}let g={get action(){return a},get location(){return t(i,o)},listen(w){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(E_,h),u=w,()=>{i.removeEventListener(E_,h),u=null}},createHref(w){return e(i,w)},createURL:p,encodeLocation(w){let y=p(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:d,replace:f,go(w){return o.go(w)}};return g}var S_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(S_||(S_={}));function NP(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ho(e):e,i=vT(r.pathname||"/",n);if(i==null)return null;let s=gT(t);RP(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=VP(s[a],zP(i));return o}function gT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let l=Yi([r,u.relativePath]),c=n.concat(u);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),gT(s.children,e,c,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:FP(l,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of yT(s.path))i(s,o,u)}),e}function yT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=yT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function RP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:UP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PP=/^:\w+$/,DP=3,OP=2,$P=1,LP=10,MP=-2,T_=t=>t==="*";function FP(t,e){let n=t.split("/"),r=n.length;return n.some(T_)&&(r+=MP),e&&(r+=OP),n.filter(i=>!T_(i)).reduce((i,s)=>i+(PP.test(s)?DP:s===""?$P:LP),r)}function UP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function VP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=jP({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Yi([i,c.pathname]),pathnameBase:QP(Yi([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Yi([i,c.pathnameBase]))}return s}function jP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=BP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=qP(a[h]||"",c),l},{}),pathname:s,pathnameBase:o,pattern:t}}function BP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ky(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function zP(t){try{return decodeURI(t)}catch(e){return Ky(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qP(t,e){try{return decodeURIComponent(t)}catch(n){return Ky(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function vT(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function WP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ho(t):t;return{pathname:n?n.startsWith("/")?n:HP(n,e):e,search:YP(r),hash:JP(i)}}function HP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function KP(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ho(t):(i=bu({},t),Ve(!i.pathname||!i.pathname.includes("?"),pp("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),pp("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),pp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let u=WP(i,a),l=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(l||c)&&(u.pathname+="/"),u}const Yi=t=>t.join("/").replace(/\/\/+/g,"/"),QP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,JP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const wT=["post","put","patch","delete"];new Set(wT);const ZP=["get",...wT];new Set(ZP);/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yh(){return yh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yh.apply(this,arguments)}const eD="startTransition";var k_=yN[eD];const Qy=R.createContext(null),tD=R.createContext(null),md=R.createContext(null),gd=R.createContext(null),Ss=R.createContext({outlet:null,matches:[],isDataRoute:!1}),_T=R.createContext(null);function yd(){return R.useContext(gd)!=null}function ET(){return yd()||Ve(!1),R.useContext(gd).location}function IT(t){R.useContext(md).static||R.useLayoutEffect(t)}function Yy(){let{isDataRoute:t}=R.useContext(Ss);return t?mD():nD()}function nD(){yd()||Ve(!1);let t=R.useContext(Qy),{basename:e,navigator:n}=R.useContext(md),{matches:r}=R.useContext(Ss),{pathname:i}=ET(),s=JSON.stringify(GP(r).map(u=>u.pathnameBase)),o=R.useRef(!1);return IT(()=>{o.current=!0}),R.useCallback(function(u,l){if(l===void 0&&(l={}),!o.current)return;if(typeof u=="number"){n.go(u);return}let c=KP(u,JSON.parse(s),i,l.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Yi([e,c.pathname])),(l.replace?n.replace:n.push)(c,l.state,l)},[e,n,s,i,t])}function rD(){let{matches:t}=R.useContext(Ss),e=t[t.length-1];return e?e.params:{}}function iD(t,e){return sD(t,e)}function sD(t,e,n){yd()||Ve(!1);let{navigator:r}=R.useContext(md),{matches:i}=R.useContext(Ss),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=ET(),l;if(e){var c;let g=typeof e=="string"?Ho(e):e;a==="/"||(c=g.pathname)!=null&&c.startsWith(a)||Ve(!1),l=g}else l=u;let h=l.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=NP(t,{pathname:d}),p=cD(f&&f.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Yi([a,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:Yi([a,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return e&&p?R.createElement(gd.Provider,{value:{location:yh({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Mr.Pop}},p):p}function oD(){let t=pD(),e=XP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,s)}const aD=R.createElement(oD,null);class uD extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?R.createElement(Ss.Provider,{value:this.props.routeContext},R.createElement(_T.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lD(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Qy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Ss.Provider,{value:e},r)}function cD(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id]));a>=0||Ve(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,u,l)=>{let c=u.route.id?o==null?void 0:o[u.route.id]:null,h=null;n&&(h=u.route.errorElement||aD);let d=e.concat(s.slice(0,l+1)),f=()=>{let p;return c?p=h:u.route.Component?p=R.createElement(u.route.Component,null):u.route.element?p=u.route.element:p=a,R.createElement(lD,{match:u,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:p})};return n&&(u.route.ErrorBoundary||u.route.errorElement||l===0)?R.createElement(uD,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var Gm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Gm||(Gm={}));var xu;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(xu||(xu={}));function hD(t){let e=R.useContext(Qy);return e||Ve(!1),e}function dD(t){let e=R.useContext(tD);return e||Ve(!1),e}function fD(t){let e=R.useContext(Ss);return e||Ve(!1),e}function ST(t){let e=fD(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function pD(){var t;let e=R.useContext(_T),n=dD(xu.UseRouteError),r=ST(xu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function mD(){let{router:t}=hD(Gm.UseNavigateStable),e=ST(xu.UseNavigateStable),n=R.useRef(!1);return IT(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,yh({fromRouteId:e},s)))},[t,e])}function La(t){Ve(!1)}function gD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Mr.Pop,navigator:s,static:o=!1}=t;yd()&&Ve(!1);let a=e.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ho(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,p=R.useMemo(()=>{let g=vT(l,a);return g==null?null:{location:{pathname:g,search:c,hash:h,state:d,key:f},navigationType:i}},[a,l,c,h,d,f,i]);return p==null?null:R.createElement(md.Provider,{value:u},R.createElement(gd.Provider,{children:n,value:p}))}function yD(t){let{children:e,location:n}=t;return iD(Km(e),n)}var C_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(C_||(C_={}));new Promise(()=>{});function Km(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,Km(r.props.children,s));return}r.type!==La&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Km(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vD(t){let{basename:e,children:n,future:r,window:i}=t,s=R.useRef();s.current==null&&(s.current=bP({window:i,v5Compat:!0}));let o=s.current,[a,u]=R.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},c=R.useCallback(h=>{l&&k_?k_(()=>u(h)):u(h)},[u,l]);return R.useLayoutEffect(()=>o.listen(c),[o,c]),R.createElement(gD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var b_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(b_||(b_={}));var x_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(x_||(x_={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(TT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new _D;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _D extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ED=function(t){const e=TT(t);return kT.encodeByteArray(e,!0)},vh=function(t){return ED(t).replace(/\./g,"")},CT=function(t){try{return kT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function wh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ID(n)||(t[n]=wh(t[n],e[n]));return t}function ID(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=()=>SD().__FIREBASE_DEFAULTS__,kD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CT(t[1]);return e&&JSON.parse(e)},Jy=()=>{try{return TD()||kD()||CD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bT=()=>{var t;return(t=Jy())===null||t===void 0?void 0:t.config},bD=t=>{var e;return(e=Jy())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vh(JSON.stringify(n)),vh(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ND(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Xy(){var t;const e=(t=Jy())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RD(){return typeof self=="object"&&self.self===self}function xT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AT(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PD(){return!Xy()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Au(){try{return typeof indexedDB=="object"}catch{return!1}}function DD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="FirebaseError";class kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OD,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$D(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kt(i,a,r)}}function $D(t,e){return t.replace(LD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function MD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qm(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(N_(s)&&N_(o)){if(!Qm(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ma(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NT(t,e){const n=new FD(t,e);return n.subscribe.bind(n)}class FD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mp),i.error===void 0&&(i.error=mp),i.complete===void 0&&(i.complete=mp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VD=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BD(e))try{this.getOrInitializeService({instanceIdentifier:Ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ri){return this.instances.has(e)}getOptions(e=Ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ri){return this.component?this.component.multipleInstances?e:Ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function jD(t){return t===Ri?void 0:t}function BD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=[];var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const RT={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},qD=Z.INFO,WD={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},HD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vd{constructor(e){this.name=e,this._logLevel=qD,this._logHandler=HD,this._userLogHandler=null,ev.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}function GD(t){ev.forEach(e=>{e.setLogLevel(t)})}function KD(t,e){for(const n of ev){let r=null;e&&e.level&&(r=RT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:Z[s].toLowerCase(),message:a,args:o,type:i.name})}}}const QD=(t,e)=>e.some(n=>t instanceof n);let R_,P_;function YD(){return R_||(R_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JD(){return P_||(P_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PT=new WeakMap,Ym=new WeakMap,DT=new WeakMap,gp=new WeakMap,tv=new WeakMap;function XD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&PT.set(n,t)}).catch(()=>{}),tv.set(e,t),e}function ZD(t){if(Ym.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ym.set(t,e)}let Jm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ym.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eO(t){Jm=t(Jm)}function tO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yp(this),e,...n);return DT.set(r,e.sort?e.sort():[e]),Kr(r)}:JD().includes(t)?function(...e){return t.apply(yp(this),e),Kr(PT.get(this))}:function(...e){return Kr(t.apply(yp(this),e))}}function nO(t){return typeof t=="function"?tO(t):(t instanceof IDBTransaction&&ZD(t),QD(t,YD())?new Proxy(t,Jm):t)}function Kr(t){if(t instanceof IDBRequest)return XD(t);if(gp.has(t))return gp.get(t);const e=nO(t);return e!==t&&(gp.set(t,e),tv.set(e,t)),e}const yp=t=>tv.get(t);function rO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Kr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Kr(o.result),u.oldVersion,u.newVersion,Kr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const iO=["get","getKey","getAll","getAllKeys","count"],sO=["put","add","delete","clear"],vp=new Map;function D_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vp.get(e))return vp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iO.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return vp.set(e,s),s}eO(t=>({...t,get:(e,n,r)=>D_(e,n)||t.get(e,n,r),has:(e,n)=>!!D_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xm="@firebase/app",O_="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new vd("@firebase/app"),uO="@firebase/app-compat",lO="@firebase/analytics-compat",cO="@firebase/analytics",hO="@firebase/app-check-compat",dO="@firebase/app-check",fO="@firebase/auth",pO="@firebase/auth-compat",mO="@firebase/database",gO="@firebase/database-compat",yO="@firebase/functions",vO="@firebase/functions-compat",wO="@firebase/installations",_O="@firebase/installations-compat",EO="@firebase/messaging",IO="@firebase/messaging-compat",SO="@firebase/performance",TO="@firebase/performance-compat",kO="@firebase/remote-config",CO="@firebase/remote-config-compat",bO="@firebase/storage",xO="@firebase/storage-compat",AO="@firebase/firestore",NO="@firebase/firestore-compat",RO="firebase",PO="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="[DEFAULT]",DO={[Xm]:"fire-core",[uO]:"fire-core-compat",[cO]:"fire-analytics",[lO]:"fire-analytics-compat",[dO]:"fire-app-check",[hO]:"fire-app-check-compat",[fO]:"fire-auth",[pO]:"fire-auth-compat",[mO]:"fire-rtdb",[gO]:"fire-rtdb-compat",[yO]:"fire-fn",[vO]:"fire-fn-compat",[wO]:"fire-iid",[_O]:"fire-iid-compat",[EO]:"fire-fcm",[IO]:"fire-fcm-compat",[SO]:"fire-perf",[TO]:"fire-perf-compat",[kO]:"fire-rc",[CO]:"fire-rc-compat",[bO]:"fire-gcs",[xO]:"fire-gcs-compat",[AO]:"fire-fst",[NO]:"fire-fst-compat","fire-js":"fire-js",[RO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Map,Nu=new Map;function _h(t,e){try{t.container.addComponent(e)}catch(n){as.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function OT(t,e){t.container.addOrOverwriteComponent(e)}function ti(t){const e=t.name;if(Nu.has(e))return as.debug(`There were multiple attempts to register component ${e}.`),!1;Nu.set(e,t);for(const n of ei.values())_h(n,t);return!0}function $T(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function OO(t,e,n=Zr){$T(t,e).clearInstance(n)}function $O(){Nu.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ir=new Ts("app","Firebase",LO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MO=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=PO;function nv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ir.create("bad-app-name",{appName:String(i)});if(n||(n=bT()),!n)throw ir.create("no-options");const s=ei.get(i);if(s){if(Qm(n,s.options)&&Qm(r,s.config))return s;throw ir.create("duplicate-app",{appName:i})}const o=new zD(i);for(const u of Nu.values())o.addComponent(u);const a=new MO(n,r,o);return ei.set(i,a),a}function FO(t=Zr){const e=ei.get(t);if(!e&&t===Zr&&bT())return nv();if(!e)throw ir.create("no-app",{appName:t});return e}function UO(){return Array.from(ei.values())}async function LT(t){const e=t.name;ei.has(e)&&(ei.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Un(t,e,n){var r;let i=(r=DO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),as.warn(a.join(" "));return}ti(new zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function MT(t,e){if(t!==null&&typeof t!="function")throw ir.create("invalid-log-argument");KD(t,e)}function FT(t){GD(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO="firebase-heartbeat-database",jO=1,Ru="firebase-heartbeat-store";let wp=null;function UT(){return wp||(wp=rO(VO,jO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ru)}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),wp}async function BO(t){try{return await(await UT()).transaction(Ru).objectStore(Ru).get(VT(t))}catch(e){if(e instanceof kt)as.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});as.warn(n.message)}}}async function $_(t,e){try{const r=(await UT()).transaction(Ru,"readwrite");await r.objectStore(Ru).put(e,VT(t)),await r.done}catch(n){if(n instanceof kt)as.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});as.warn(r.message)}}}function VT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=1024,qO=30*24*60*60*1e3;class WO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=L_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=L_(),{heartbeatsToSend:n,unsentEntries:r}=HO(this._heartbeatsCache.heartbeats),i=vh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function L_(){return new Date().toISOString().substring(0,10)}function HO(t,e=zO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),M_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Au()?DD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function M_(t){return vh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t){ti(new zn("platform-logger",e=>new oO(e),"PRIVATE")),ti(new zn("heartbeat",e=>new WO(e),"PRIVATE")),Un(Xm,O_,t),Un(Xm,O_,"esm2017"),Un("fire-js","")}KO("");const QO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kt,SDK_VERSION:yi,_DEFAULT_ENTRY_NAME:Zr,_addComponent:_h,_addOrOverwriteComponent:OT,_apps:ei,_clearComponents:$O,_components:Nu,_getProvider:$T,_registerComponent:ti,_removeServiceInstance:OO,deleteApp:LT,getApp:FO,getApps:UO,initializeApp:nv,onLog:MT,registerVersion:Un,setLogLevel:FT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n){this._delegate=e,this.firebase=n,_h(e,new zn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),LT(this._delegate)))}_getService(e,n=Zr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Zr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){_h(this._delegate,e)}_addOrOverwriteComponent(e){OT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},F_=new Ts("app-compat","Firebase",JO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Un,setLogLevel:FT,onLog:MT,apps:null,SDK_VERSION:yi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:QO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Zr,!A_(e,l))throw F_.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=nv(l,c);if(A_(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(ti(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw F_.create("invalid-app-argument",{appName:c});return f[h]()};l.serviceProps!==void 0&&wh(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(){const t=XO(YO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:jT,extendNamespace:e,createSubscribe:NT,ErrorFactory:Ts,deepExtend:wh});function e(n){wh(t,n)}return t}const ZO=jT();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new vd("@firebase/app-compat"),e2="@firebase/app-compat",t2="0.2.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t){Un(e2,t2,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(RD()&&self.firebase!==void 0){U_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&U_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ks=ZO;n2();var r2="firebase",i2="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ks.registerVersion(r2,i2,"app-compat");function rv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const _a={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Os={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function BT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o2=s2,a2=BT,zT=new Ts("auth","Firebase",BT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new vd("@firebase/auth");function u2(t,...e){Eh.logLevel<=Z.WARN&&Eh.warn(`Auth (${yi}): ${t}`,...e)}function Rc(t,...e){Eh.logLevel<=Z.ERROR&&Eh.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw iv(t,...e)}function at(t,...e){return iv(t,...e)}function qT(t,e,n){const r=Object.assign(Object.assign({},a2()),{[e]:n});return new Ts("auth","Firebase",r).create(e,{appName:t.name})}function Ko(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(t,"argument-error"),qT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function iv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zT.create(t,...e)}function N(t,e,...n){if(!t)throw iv(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rc(e),new Error(e)}function _n(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sv(){return V_()==="http:"||V_()==="https:"}function V_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sv()||xT()||"connection"in navigator)?navigator.onLine:!0}function c2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=ND()||Zy()}get(){return l2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=new dl(3e4,6e4);function Me(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ze(t,e,n,r,i={}){return HT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Go(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),WT.fetch()(GT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function HT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},h2),e);try{const i=new f2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fa(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw qT(t,c,l);ct(t,c)}}catch(i){if(i instanceof kt)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function gr(t,e,n,r,i={}){const s=await ze(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function GT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ov(t.config,i):`${t.config.apiScheme}://${i}`}class f2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),d2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=at(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e){return ze(t,"POST","/v1/accounts:delete",e)}async function m2(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function g2(t,e){return ze(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function y2(t,e=!1){const n=B(t),r=await n.getIdToken(e),i=wd(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:eu(_p(i.auth_time)),issuedAtTime:eu(_p(i.iat)),expirationTime:eu(_p(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _p(t){return Number(t)*1e3}function wd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rc("JWT malformed, contained fewer than 3 sections"),null;try{const i=CT(n);return i?JSON.parse(i):(Rc("Failed to decode base64 JWT payload"),null)}catch(i){return Rc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function v2(t){const e=wd(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&w2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function w2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eu(this.lastLoginAt),this.creationTime=eu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Du(t){var e;const n=t.auth,r=await t.getIdToken(),i=await hr(t,g2(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?S2(s.providerUserInfo):[],a=I2(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new KT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function E2(t){const e=B(t);await Du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function S2(t){return t.map(e=>{var{providerId:n}=e,r=rv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(t,e){const n=await HT(t,{},async()=>{const r=Go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=GT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):v2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await T2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ou;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ou,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ji{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new KT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await hr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return y2(this,e)}reload(){return E2(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ji(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hr(this,p2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:I,isAnonymous:C,providerData:A,stsTokenManager:P}=n;N(v&&P,e,"internal-error");const M=Ou.fromJSON(this.name,P);N(typeof v=="string",e,"internal-error"),Ir(h,e.name),Ir(d,e.name),N(typeof I=="boolean",e,"internal-error"),N(typeof C=="boolean",e,"internal-error"),Ir(f,e.name),Ir(p,e.name),Ir(g,e.name),Ir(w,e.name),Ir(y,e.name),Ir(m,e.name);const J=new Ji({uid:v,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:C,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:M,createdAt:y,lastLoginAt:m});return A&&Array.isArray(A)&&(J.providerData=A.map(z=>Object.assign({},z))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ou;i.updateFromServerResponse(n);const s=new Ji({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Du(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new Map;function qt(t){_n(t instanceof Function,"Expected a class definition");let e=j_.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,j_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}QT.type="NONE";const ko=QT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e,n){return`firebase:${t}:${e}:${n}`}class ao{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ji._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ao(qt(ko),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||qt(ko);const o=Xi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Ji._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ao(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ao(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(YT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZT(e))return"Blackberry";if(ek(e))return"Webos";if(av(e))return"Safari";if((e.includes("chrome/")||JT(e))&&!e.includes("edge/"))return"Chrome";if(fl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function YT(t=Se()){return/firefox\//i.test(t)}function av(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JT(t=Se()){return/crios\//i.test(t)}function XT(t=Se()){return/iemobile/i.test(t)}function fl(t=Se()){return/android/i.test(t)}function ZT(t=Se()){return/blackberry/i.test(t)}function ek(t=Se()){return/webos/i.test(t)}function Qo(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function k2(t=Se()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function C2(t=Se()){var e;return Qo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function b2(){return AT()&&document.documentMode===10}function tk(t=Se()){return Qo(t)||fl(t)||ek(t)||ZT(t)||/windows phone/i.test(t)||XT(t)}function x2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t,e=[]){let n;switch(t){case"Browser":n=B_(Se());break;case"Worker":n=`${B_(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(t){return(await ze(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function rk(t,e){return ze(t,"GET","/v2/recaptchaConfig",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){return t!==void 0&&t.getResponse!==void 0}function q_(t){return t!==void 0&&t.enterprise!==void 0}class ik{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function uv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=at("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",N2().appendChild(r)})}function sk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const R2="https://www.google.com/recaptcha/enterprise.js?render=",P2="recaptcha-enterprise",D2="NO_RECAPTCHA";class ok{constructor(e){this.type=P2,this.auth=De(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ik(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;q_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(D2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&q_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}uv(R2+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function ni(t,e,n,r=!1){const i=new ok(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new W_(this),this.idTokenSubscription=new W_(this),this.beforeStateQueue=new O2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Du(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?B(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}async initializeRecaptchaConfig(){const e=await rk(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ik(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ok(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function De(t){return B(t)}class W_{constructor(e){this.auth=e,this.observer=null,this.addObserver=NT(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function L2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M2(t,e,n){const r=De(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ak(e),{host:o,port:a}=F2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||U2()}function ak(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function F2(t){const e=ak(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:H_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:H_(o)}}}function H_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function U2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){return ze(t,"POST","/v1/accounts:resetPassword",Me(t,e))}async function lk(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function V2(t,e){return ze(t,"POST","/v1/accounts:update",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(t,e){return gr(t,"POST","/v1/accounts:signInWithPassword",Me(t,e))}async function _d(t,e){return ze(t,"POST","/v1/accounts:sendOobCode",Me(t,e))}async function j2(t,e){return _d(t,e)}async function Ip(t,e){return _d(t,e)}async function Sp(t,e){return _d(t,e)}async function B2(t,e){return _d(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(t,e){return gr(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}async function q2(t,e){return gr(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends Yo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $u(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $u(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ni(e,r,"signInWithPassword");return Ep(e,i)}else return Ep(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ni(e,r,"signInWithPassword");return Ep(e,s)}else return Promise.reject(i)});case"emailLink":return z2(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return lk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return q2(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t,e){return gr(t,"POST","/v1/accounts:signInWithIdp",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2="http://localhost";class qn extends Yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}buildRequest(){const e={requestUri:W2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Go(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(t,e){return ze(t,"POST","/v1/accounts:sendVerificationCode",Me(t,e))}async function G2(t,e){return gr(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e))}async function K2(t,e){const n=await gr(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e));if(n.temporaryProof)throw Fa(t,"account-exists-with-different-credential",n);return n}const Q2={USER_NOT_FOUND:"user-not-found"};async function Y2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return gr(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,n),Q2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Yo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Zi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Zi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return G2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return K2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Y2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Zi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X2(t){const e=Zs(Ma(t)).link,n=e?Zs(Ma(e)).deep_link_id:null,r=Zs(Ma(t)).deep_link_id;return(r?Zs(Ma(r)).link:null)||r||n||e||t}class Ed{constructor(e){var n,r,i,s,o,a;const u=Zs(Ma(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=J2((i=u.mode)!==null&&i!==void 0?i:null);N(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=X2(e);try{return new Ed(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return $u._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ed.parseLink(n);return N(r,"argument-error"),$u._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends yr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class uo extends Jo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),qn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),qn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return uo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return uo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new uo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Jo{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Jo{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="http://localhost";class Co extends Yo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Co(r,s)}static _create(e,n){return new Co(e,n)}buildRequest(){return{requestUri:Z2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e$="saml.";class Ih extends yr{constructor(e){N(e.startsWith(e$),"argument-error"),super(e)}static credentialFromResult(e){return Ih.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ih.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Co.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Co._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Jo{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return An.credential(n,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(t,e){return gr(t,"POST","/v1/accounts:signUp",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ji._fromIdTokenResponse(e,r,i),o=G_(r);return new ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=G_(r);return new ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function G_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t$(t){var e;const n=De(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ln({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Pc(n,{returnSecureToken:!0}),i=await ln._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh extends kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sh(e,n,r,i)}}function ck(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n$(t,e){const n=B(t);await Id(!0,n,e);const{providerUserInfo:r}=await m2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=hk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function lv(t,e,n=!1){const r=await hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ln._forOperation(t,"link",r)}async function Id(t,e,n){await Du(e);const r=hk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await hr(t,ck(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=wd(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(t,e,n=!1){const r="signIn",i=await ck(t,r,e),s=await ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Sd(t,e){return fk(De(t),e)}async function pk(t,e){const n=B(t);return await Id(!1,n,e.providerId),lv(n,e)}async function mk(t,e){return dk(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r$(t,e){return gr(t,"POST","/v1/accounts:signInWithCustomToken",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i$(t,e){const n=De(t),r=await r$(n,{token:e,returnSecureToken:!0}),i=await ln._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?cv._fromServerResponse(e,n):"totpInfo"in n?hv._fromServerResponse(e,n):ct(e,"internal-error")}}class cv extends pl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new cv(n)}}class hv extends pl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new hv(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s$(t,e,n){var r;const i=De(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await ni(i,s,"getOobCode",!0);n&&lo(i,o,n),await Ip(i,o)}else n&&lo(i,s,n),await Ip(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ni(i,s,"getOobCode",!0);n&&lo(i,a,n),await Ip(i,a)}else return Promise.reject(o)})}async function o$(t,e,n){await uk(B(t),{oobCode:e,newPassword:n})}async function a$(t,e){await V2(B(t),{oobCode:e})}async function gk(t,e){const n=B(t),r=await uk(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=pl._fromServerResponse(De(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function u$(t,e){const{data:n}=await gk(B(t),e);return n.email}async function l$(t,e,n){var r;const i=De(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await ni(i,s,"signUpPassword");o=Pc(i,l)}else o=Pc(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ni(i,s,"signUpPassword");return Pc(i,c)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),u=await ln._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function c$(t,e,n){return Sd(B(t),vi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h$(t,e,n){var r;const i=De(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,u){N(u.handleCodeInApp,i,"argument-error"),u&&lo(i,a,u)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await ni(i,s,"getOobCode",!0);o(a,n),await Sp(i,a)}else o(s,n),await Sp(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const u=await ni(i,s,"getOobCode",!0);o(u,n),await Sp(i,u)}else return Promise.reject(a)})}function d$(t,e){const n=Ed.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function f$(t,e,n){const r=B(t),i=vi.credentialWithLink(e,n||Pu());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Sd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p$(t,e){return ze(t,"POST","/v1/accounts:createAuthUri",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m$(t,e){const n=sv()?Pu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await p$(B(t),r);return i||[]}async function g$(t,e){const n=B(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&lo(n.auth,i,e);const{email:s}=await j2(n.auth,i);s!==t.email&&await t.reload()}async function y$(t,e,n){const r=B(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&lo(r.auth,s,n);const{email:o}=await B2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v$(t,e){return ze(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w$(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=B(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await hr(r,v$(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _$(t,e){return yk(B(t),e,null)}function E$(t,e){return yk(B(t),null,e)}async function yk(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await hr(t,lk(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I$(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=wd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new co(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new S$(s,i);case"github.com":return new T$(s,i);case"google.com":return new k$(s,i);case"twitter.com":return new C$(s,i,t.screenName||null);case"custom":case"anonymous":return new co(s,null);default:return new co(s,r,i)}}class co{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class vk extends co{constructor(e,n,r,i){super(e,n,r),this.username=i}}class S$ extends co{constructor(e,n){super(e,"facebook.com",n)}}class T$ extends vk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class k$ extends co{constructor(e,n){super(e,"google.com",n)}}class C$ extends vk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function b$(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:I$(n)}class zi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new zi("enroll",e,n)}static _fromMfaPendingCredential(e){return new zi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return zi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return zi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=De(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>pl._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=zi._fromMfaPendingCredential(i.mfaPendingCredential);return new dv(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await ln._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),ln._forOperation(n.user,n.operationType,l);default:ct(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function x$(t,e){var n;const r=B(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),dv._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A$(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:start",Me(t,e))}function N$(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:finalize",Me(t,e))}function R$(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Me(t,e))}class fv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>pl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new fv(e)}async getSession(){return zi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await hr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await hr(this.user,R$(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Tp=new WeakMap;function P$(t){const e=B(t);return Tp.has(e)||Tp.set(e,fv._fromUser(e)),Tp.get(e)}const Th="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Th,"1"),this.storage.removeItem(Th),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D$(){const t=Se();return av(t)||Qo(t)}const O$=1e3,$$=10;class _k extends wk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=D$()&&x2(),this.fallbackToPolling=tk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);b2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},O$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_k.type="LOCAL";const pv=_k;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek extends wk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ek.type="SESSION";const us=Ek;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Td(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await L$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Td.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=ml("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return window}function F$(t){$e().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function U$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function j$(){return mv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="firebaseLocalStorageDb",B$=1,kh="firebaseLocalStorage",Sk="fbase_key";class gl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kd(t,e){return t.transaction([kh],e?"readwrite":"readonly").objectStore(kh)}function z$(){const t=indexedDB.deleteDatabase(Ik);return new gl(t).toPromise()}function Zm(){const t=indexedDB.open(Ik,B$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kh,{keyPath:Sk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kh)?e(r):(r.close(),await z$(),e(await Zm()))})})}async function K_(t,e,n){const r=kd(t,!0).put({[Sk]:e,value:n});return new gl(r).toPromise()}async function q$(t,e){const n=kd(t,!1).get(e),r=await new gl(n).toPromise();return r===void 0?null:r.value}function Q_(t,e){const n=kd(t,!0).delete(e);return new gl(n).toPromise()}const W$=800,H$=3;class Tk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>H$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Td._getInstance(j$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U$(),!this.activeServiceWorker)return;this.sender=new M$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zm();return await K_(e,Th,"1"),await Q_(e,Th),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>K_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>q$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Q_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kd(i,!1).getAll();return new gl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tk.type="LOCAL";const Lu=Tk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G$(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:start",Me(t,e))}function K$(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:finalize",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q$=500,Y$=6e4,oc=1e12;class J${constructor(e){this.auth=e,this.counter=oc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new X$(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||oc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||oc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||oc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class X${constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Z$(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Y$)},Q$))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Z$(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=sk("rcb"),eL=new dl(3e4,6e4),tL="https://www.google.com/recaptcha/api.js?";class nL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=$e().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(rL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&z_($e().grecaptcha)?Promise.resolve($e().grecaptcha):new Promise((r,i)=>{const s=$e().setTimeout(()=>{i(at(e,"network-request-failed"))},eL.get());$e()[kp]=()=>{$e().clearTimeout(s),delete $e()[kp];const a=$e().grecaptcha;if(!a||!z_(a)){i(at(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${tL}?${Go({onload:kp,render:"explicit",hl:n})}`;uv(o).catch(()=>{clearTimeout(s),i(at(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=$e().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function rL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class iL{async load(e){return new J$(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="recaptcha",sL={theme:"light",type:"image"};let oL=class{constructor(e,n=Object.assign({},sL),r){this.parameters=n,this.type=kk,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=De(r),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new iL:new nL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=$e()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(sv()&&!mv(),this.auth,"internal-error"),await aL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await A2(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function aL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Zi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function uL(t,e,n){const r=De(t),i=await Cd(r,e,B(n));return new gv(i,s=>Sd(r,s))}async function lL(t,e,n){const r=B(t);await Id(!1,r,"phone");const i=await Cd(r.auth,e,B(n));return new gv(i,s=>pk(r,s))}async function cL(t,e,n){const r=B(t),i=await Cd(r.auth,e,B(n));return new gv(i,s=>mk(r,s))}async function Cd(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===kk,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await A$(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await G$(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await H2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function hL(t,e){await lv(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls=class Dc{constructor(e){this.providerId=Dc.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,n){return Cd(this.auth,e,B(n))}static credential(e,n){return Zi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Dc.credentialFromTaggedObject(n)}static credentialFromError(e){return Dc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Zi._fromTokenResponse(n,r):null}};ls.PROVIDER_ID="phone";ls.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t,e){return e?qt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv extends Yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dL(t){return fk(t.auth,new yv(t),t.bypassAuthState)}function fL(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),dk(n,new yv(t),t.bypassAuthState)}async function pL(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),lv(n,new yv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dL;case"linkViaPopup":case"linkViaRedirect":return pL;case"reauthViaPopup":case"reauthViaRedirect":return fL;default:ct(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL=new dl(2e3,1e4);async function gL(t,e,n){const r=De(t);Ko(t,e,yr);const i=Cs(r,n);return new Zn(r,"signInViaPopup",e,i).executeNotNull()}async function yL(t,e,n){const r=B(t);Ko(r.auth,e,yr);const i=Cs(r.auth,n);return new Zn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function vL(t,e,n){const r=B(t);Ko(r.auth,e,yr);const i=Cs(r.auth,n);return new Zn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Zn extends Ck{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mL.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL="pendingRedirect",tu=new Map;class _L extends Ck{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tu.get(this.auth._key());if(!e){try{const r=await EL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tu.set(this.auth._key(),e)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EL(t,e){const n=xk(e),r=bk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function vv(t,e){return bk(t)._set(xk(e),"true")}function IL(){tu.clear()}function wv(t,e){tu.set(t._key(),e)}function bk(t){return qt(t._redirectPersistence)}function xk(t){return Xi(wL,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t,e,n){return TL(t,e,n)}async function TL(t,e,n){const r=De(t);Ko(t,e,yr),await r._initializationPromise;const i=Cs(r,n);return await vv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function kL(t,e,n){return CL(t,e,n)}async function CL(t,e,n){const r=B(t);Ko(r.auth,e,yr),await r.auth._initializationPromise;const i=Cs(r.auth,n);await vv(i,r.auth);const s=await Ak(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function bL(t,e,n){return xL(t,e,n)}async function xL(t,e,n){const r=B(t);Ko(r.auth,e,yr),await r.auth._initializationPromise;const i=Cs(r.auth,n);await Id(!1,r,e.providerId),await vv(i,r.auth);const s=await Ak(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function AL(t,e){return await De(t)._initializationPromise,bd(t,e,!1)}async function bd(t,e,n=!1){const r=De(t),i=Cs(r,e),o=await new _L(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Ak(t){const e=ml(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=10*60*1e3;class Nk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Y_(e))}saveEventToCache(e){this.cachedEventUids.add(Y_(e)),this.lastProcessedEventTime=Date.now()}}function Y_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pk(t,e={}){return ze(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DL=/^https?/;async function OL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pk(t);for(const n of e)try{if($L(n))return}catch{}ct(t,"unauthorized-domain")}function $L(t){const e=Pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DL.test(n))return!1;if(PL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=new dl(3e4,6e4);function J_(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ML(t){return new Promise((e,n)=>{var r,i,s;function o(){J_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{J_(),n(at(t,"network-request-failed"))},timeout:LL.get()})}if(!((i=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$e().gapi)===null||s===void 0)&&s.load)o();else{const a=sk("iframefcb");return $e()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},uv(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Oc=null,e})}let Oc=null;function FL(t){return Oc=Oc||ML(t),Oc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=new dl(5e3,15e3),VL="__/auth/iframe",jL="emulator/auth/iframe",BL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qL(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ov(e,jL):`https://${t.config.authDomain}/${VL}`,r={apiKey:e.apiKey,appName:t.name,v:yi},i=zL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Go(r).slice(1)}`}async function WL(t){const e=await FL(t),n=$e().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:qL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=$e().setTimeout(()=>{s(o)},UL.get());function u(){$e().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GL=500,KL=600,QL="_blank",YL="http://localhost";class X_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JL(t,e,n,r=GL,i=KL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},HL),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Se().toLowerCase();n&&(a=JT(l)?QL:n),YT(l)&&(e=e||YL,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(C2(l)&&a!=="_self")return XL(e||"",a),new X_(null);const h=window.open(e||"",a,c);N(h,t,"popup-blocked");try{h.focus()}catch{}return new X_(h)}function XL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL="__/auth/handler",eM="emulator/auth/handler",tM=encodeURIComponent("fac");async function eg(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:i};if(e instanceof yr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Jo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const u=await t._getAppCheckToken(),l=u?`#${tM}=${encodeURIComponent(u)}`:"";return`${nM(t)}?${Go(a).slice(1)}${l}`}function nM({config:t}){return t.emulator?ov(t,eM):`https://${t.authDomain}/${ZL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="webStorageSupport";class rM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=us,this._completeRedirectFn=bd,this._overrideRedirectResult=wv}async _openPopup(e,n,r,i){var s;_n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await eg(e,n,r,Pu(),i);return JL(e,o,ml())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await eg(e,n,r,Pu(),i);return F$(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WL(e),r=new Nk(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cp,{type:Cp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cp];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tk()||av()||Qo()}}const iM=rM;class sM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Rn("unexpected MultiFactorSessionType")}}}class _v extends sM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new _v(e)}_finalizeEnroll(e,n,r){return N$(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return K$(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Dk{constructor(){}static assertion(e){return _v._fromCredential(e)}}Dk.FACTOR_ID="phone";var Z_="@firebase/auth",e1="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uM(t){ti(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nk(t)},l=new $2(r,i,s,u);return L2(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new zn("auth-internal",e=>{const n=De(e.getProvider("auth").getImmediate());return(r=>new oM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(Z_,e1,aM(t)),Un(Z_,e1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=5*60;bD("authIdTokenMaxAge");uM("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=2e3;async function hM(t,e,n){var r;const{BuildInfo:i}=cs();_n(e.sessionId,"AuthEvent did not contain a session ID");const s=await gM(e.sessionId),o={};return Qo()?o.ibi=i.packageName:fl()?o.apn=i.packageName:ct(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,eg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function dM(t){const{BuildInfo:e}=cs(),n={};Qo()?n.iosBundleId=e.packageName:fl()?n.androidPackageName=e.packageName:ct(t,"operation-not-supported-in-this-environment"),await Pk(t,n)}function fM(t){const{cordova:e}=cs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,k2()?"_blank":"_system","location=yes"),n(i)})})}async function pM(t,e,n){const{cordova:r}=cs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(at(t,"redirect-cancelled-by-user"))},cM))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),fl()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function mM(t){var e,n,r,i,s,o,a,u,l,c;const h=cs();N(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function gM(t){const e=yM(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function yM(t){if(_n(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM=20;class wM extends Nk{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _M(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:SM(),postBody:null,tenantId:t.tenantId,error:at(t,"no-auth-event")}}function EM(t,e){return tg()._set(ng(t),e)}async function t1(t){const e=await tg()._get(ng(t));return e&&await tg()._remove(ng(t)),e}function IM(t,e){var n,r;const i=kM(e);if(i.includes("/__/auth/callback")){const s=$c(i),o=s.firebaseError?TM(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?at(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function SM(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<vM;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function tg(){return qt(pv)}function ng(t){return Xi("authEvent",t.config.apiKey,t.name)}function TM(t){try{return JSON.parse(t)}catch{return null}}function kM(t){const e=$c(t),n=e.link?decodeURIComponent(e.link):void 0,r=$c(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return $c(i).link||i||r||n||t}function $c(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Zs(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=500;class bM{constructor(){this._redirectPersistence=us,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=bd,this._overrideRedirectResult=wv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new wM(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ct(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){mM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),IL(),await this._originValidation(e);const o=_M(e,r,i);await EM(e,o);const a=await hM(e,o,n),u=await fM(a);return pM(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dM(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=cs(),o=setTimeout(async()=>{await t1(e),n.onEvent(n1())},CM),a=async c=>{clearTimeout(o);const h=await t1(e);let d=null;h&&(c!=null&&c.url)&&(d=IM(h,c.url)),n.onEvent(d||n1())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;cs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const xM=bM;function n1(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:at("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t,e){De(t)._logFramework(e)}var NM="@firebase/auth-compat",RM="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=1e3;function nu(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function DM(){return nu()==="http:"||nu()==="https:"}function Ok(t=Se()){return!!((nu()==="file:"||nu()==="ionic:"||nu()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function OM(){return Zy()||Xy()}function $M(){return AT()&&(document==null?void 0:document.documentMode)===11}function LM(t=Se()){return/Edge\/\d+/.test(t)}function MM(t=Se()){return $M()||LM(t)}function $k(){try{const t=self.localStorage,e=ml();if(t)return t.setItem(e,"1"),t.removeItem(e),MM()?Au():!0}catch{return Ev()&&Au()}return!1}function Ev(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function bp(){return(DM()||xT()||Ok())&&!OM()&&$k()&&!Ev()}function Lk(){return Ok()&&typeof document<"u"}async function FM(){return Lk()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},PM);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function UM(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt={LOCAL:"local",NONE:"none",SESSION:"session"},Ea=N,Mk="persistence";function VM(t,e){if(Ea(Object.values(Bt).includes(e),t,"invalid-persistence-type"),Zy()){Ea(e!==Bt.SESSION,t,"unsupported-persistence-type");return}if(Xy()){Ea(e===Bt.NONE,t,"unsupported-persistence-type");return}if(Ev()){Ea(e===Bt.NONE||e===Bt.LOCAL&&Au(),t,"unsupported-persistence-type");return}Ea(e===Bt.NONE||$k(),t,"unsupported-persistence-type")}async function rg(t){await t._initializationPromise;const e=Fk(),n=Xi(Mk,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function jM(t,e){const n=Fk();if(!n)return[];const r=Xi(Mk,t,e);switch(n.getItem(r)){case Bt.NONE:return[ko];case Bt.LOCAL:return[Lu,us];case Bt.SESSION:return[us];default:return[]}}function Fk(){var t;try{return((t=UM())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=N;class Fr{constructor(){this.browserResolver=qt(iM),this.cordovaResolver=qt(xM),this.underlyingResolver=null,this._redirectPersistence=us,this._completeRedirectFn=bd,this._overrideRedirectResult=wv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Lk()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return BM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await FM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){return t.unwrap()}function zM(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qM(t){return Vk(t)}function WM(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new HM(t,x$(t,e))}else if(r){const i=Vk(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Vk(t){const{_tokenResponse:e}=t instanceof kt?t.customData:t;if(!e)return null;if(!(t instanceof kt)&&"temporaryProof"in e&&"phoneNumber"in e)return ls.credentialFromResult(t);const n=e.providerId;if(!n||n===_a.PASSWORD)return null;let r;switch(n){case _a.GOOGLE:r=bn;break;case _a.FACEBOOK:r=Cn;break;case _a.GITHUB:r=xn;break;case _a.TWITTER:r=An;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Co._create(n,a):qn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new uo(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof kt?r.credentialFromError(t):r.credentialFromResult(t)}function At(t,e){return e.catch(n=>{throw n instanceof kt&&WM(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:qM(n),additionalUserInfo:b$(n),user:er.getOrCreate(i)}})}async function ig(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>At(t,n.confirm(r))}}class HM{constructor(e,n){this.resolver=n,this.auth=zM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return At(Uk(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._delegate=e,this.multiFactor=P$(e)}static getOrCreate(e){return er.USER_MAP.has(e)||er.USER_MAP.set(e,new er(e)),er.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return At(this.auth,pk(this._delegate,e))}async linkWithPhoneNumber(e,n){return ig(this.auth,lL(this._delegate,e,n))}async linkWithPopup(e){return At(this.auth,vL(this._delegate,e,Fr))}async linkWithRedirect(e){return await rg(De(this.auth)),bL(this._delegate,e,Fr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return At(this.auth,mk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return ig(this.auth,cL(this._delegate,e,n))}reauthenticateWithPopup(e){return At(this.auth,yL(this._delegate,e,Fr))}async reauthenticateWithRedirect(e){return await rg(De(this.auth)),kL(this._delegate,e,Fr)}sendEmailVerification(e){return g$(this._delegate,e)}async unlink(e){return await n$(this._delegate,e),this}updateEmail(e){return _$(this._delegate,e)}updatePassword(e){return E$(this._delegate,e)}updatePhoneNumber(e){return hL(this._delegate,e)}updateProfile(e){return w$(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return y$(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}er.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=N;class sg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ia(r,"invalid-api-key",{appName:e.name}),Ia(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Fr:void 0;this._delegate=n.initialize({options:{persistence:GM(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(o2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?er.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){M2(this._delegate,e,n)}applyActionCode(e){return a$(this._delegate,e)}checkActionCode(e){return gk(this._delegate,e)}confirmPasswordReset(e,n){return o$(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return At(this._delegate,l$(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return m$(this._delegate,e)}isSignInWithEmailLink(e){return d$(this._delegate,e)}async getRedirectResult(){Ia(bp(),this._delegate,"operation-not-supported-in-this-environment");const e=await AL(this._delegate,Fr);return e?At(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){AM(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=r1(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=r1(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return h$(this._delegate,e,n)}sendPasswordResetEmail(e,n){return s$(this._delegate,e,n||void 0)}async setPersistence(e){VM(this._delegate,e);let n;switch(e){case Bt.SESSION:n=us;break;case Bt.LOCAL:n=await qt(Lu)._isAvailable()?Lu:pv;break;case Bt.NONE:n=ko;break;default:return ct("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return At(this._delegate,t$(this._delegate))}signInWithCredential(e){return At(this._delegate,Sd(this._delegate,e))}signInWithCustomToken(e){return At(this._delegate,i$(this._delegate,e))}signInWithEmailAndPassword(e,n){return At(this._delegate,c$(this._delegate,e,n))}signInWithEmailLink(e,n){return At(this._delegate,f$(this._delegate,e,n))}signInWithPhoneNumber(e,n){return ig(this._delegate,uL(this._delegate,e,n))}async signInWithPopup(e){return Ia(bp(),this._delegate,"operation-not-supported-in-this-environment"),At(this._delegate,gL(this._delegate,e,Fr))}async signInWithRedirect(e){return Ia(bp(),this._delegate,"operation-not-supported-in-this-environment"),await rg(this._delegate),SL(this._delegate,e,Fr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return u$(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}sg.Persistence=Bt;function r1(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&er.getOrCreate(o)),error:e,complete:n}}function GM(t,e){const n=jM(t,e);if(typeof self<"u"&&!n.includes(Lu)&&n.push(Lu),typeof window<"u")for(const r of[pv,us])n.includes(r)||n.push(r);return n.includes(ko)||n.push(ko),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.providerId="phone",this._delegate=new ls(Uk(ks.auth()))}static credential(e,n){return ls.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Iv.PHONE_SIGN_IN_METHOD=ls.PHONE_SIGN_IN_METHOD;Iv.PROVIDER_ID=ls.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=N;class QM{constructor(e,n,r=ks.app()){var i;KM((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new oL(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM="auth-compat";function JM(t){t.INTERNAL.registerComponent(new zn(YM,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new sg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Os.EMAIL_SIGNIN,PASSWORD_RESET:Os.PASSWORD_RESET,RECOVER_EMAIL:Os.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Os.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Os.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Os.VERIFY_EMAIL}},EmailAuthProvider:vi,FacebookAuthProvider:Cn,GithubAuthProvider:xn,GoogleAuthProvider:bn,OAuthProvider:uo,SAMLAuthProvider:Ih,PhoneAuthProvider:Iv,PhoneMultiFactorGenerator:Dk,RecaptchaVerifier:QM,TwitterAuthProvider:An,Auth:sg,AuthCredential:Yo,Error:kt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(NM,RM)}JM(ks);var XM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Sv=Sv||{},q=XM||self;function xd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ZM(t){return Object.prototype.hasOwnProperty.call(t,xp)&&t[xp]||(t[xp]=++eF)}var xp="closure_uid_"+(1e9*Math.random()>>>0),eF=0;function tF(t,e,n){return t.call.apply(t.bind,arguments)}function nF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=tF:yt=nF,yt.apply(null,arguments)}function ac(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function wi(){this.s=this.s,this.o=this.o}var rF=0;wi.prototype.s=!1;wi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rF!=0)&&ZM(this)};wi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jk=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function i1(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var iF=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",()=>{},e),q.removeEventListener("test",()=>{},e)}catch{}return t}();function Mu(t){return/^[\s\xa0]*$/.test(t)}function Ad(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return Ad().indexOf(t)!=-1}function kv(t){return kv[" "](t),t}kv[" "]=function(){};function sF(t,e){var n=JF;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var oF=Nn("Opera"),bo=Nn("Trident")||Nn("MSIE"),Bk=Nn("Edge"),og=Bk||bo,zk=Nn("Gecko")&&!(Ad().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),aF=Ad().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function qk(){var t=q.document;return t?t.documentMode:void 0}var ag;e:{var Ap="",Np=function(){var t=Ad();if(zk)return/rv:([^\);]+)(\)|;)/.exec(t);if(Bk)return/Edge\/([\d\.]+)/.exec(t);if(bo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aF)return/WebKit\/(\S+)/.exec(t);if(oF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Np&&(Ap=Np?Np[1]:""),bo){var Rp=qk();if(Rp!=null&&Rp>parseFloat(Ap)){ag=String(Rp);break e}}ag=Ap}var ug;if(q.document&&bo){var s1=qk();ug=s1||parseInt(ag,10)||void 0}else ug=void 0;var uF=ug;function Fu(t,e){if(vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zk){e:{try{kv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fu.$.h.call(this)}}Xe(Fu,vt);var lF={2:"touch",3:"pen",4:"mouse"};Fu.prototype.h=function(){Fu.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vl="closure_listenable_"+(1e6*Math.random()|0),cF=0;function hF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++cF,this.fa=this.ia=!1}function Nd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Cv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function dF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Wk(t){const e={};for(const n in t)e[n]=t[n];return e}const o1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hk(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<o1.length;s++)n=o1[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Rd(t){this.src=t,this.g={},this.h=0}Rd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new hF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function lg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=jk(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Nd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var bv="closure_lm_"+(1e6*Math.random()|0),Pp={};function Gk(t,e,n,r,i){if(r&&r.once)return Qk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Gk(t,e[s],n,r,i);return null}return n=Nv(n),t&&t[vl]?t.O(e,n,yl(r)?!!r.capture:!!r,i):Kk(t,e,n,!1,r,i)}function Kk(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=yl(i)?!!i.capture:!!i,a=Av(t);if(a||(t[bv]=a=new Rd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=fF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Jk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fF(){function t(n){return e.call(t.src,t.listener,n)}const e=pF;return t}function Qk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Qk(t,e[s],n,r,i);return null}return n=Nv(n),t&&t[vl]?t.P(e,n,yl(r)?!!r.capture:!!r,i):Kk(t,e,n,!0,r,i)}function Yk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Yk(t,e[s],n,r,i);else r=yl(r)?!!r.capture:!!r,n=Nv(n),t&&t[vl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cg(s,n,r,i),-1<n&&(Nd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Av(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cg(e,n,r,i)),(n=-1<t?e[t]:null)&&xv(n))}function xv(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[vl])lg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Jk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Av(e))?(lg(n,t),n.h==0&&(n.src=null,e[bv]=null)):Nd(t)}}}function Jk(t){return t in Pp?Pp[t]:Pp[t]="on"+t}function pF(t,e){if(t.fa)t=!0;else{e=new Fu(e,this);var n=t.listener,r=t.la||t.src;t.ia&&xv(t),t=n.call(r,e)}return t}function Av(t){return t=t[bv],t instanceof Rd?t:null}var Dp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nv(t){return typeof t=="function"?t:(t[Dp]||(t[Dp]=function(e){return t.handleEvent(e)}),t[Dp])}function Je(){wi.call(this),this.i=new Rd(this),this.S=this,this.J=null}Xe(Je,wi);Je.prototype[vl]=!0;Je.prototype.removeEventListener=function(t,e,n,r){Yk(this,t,e,n,r)};function ut(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new vt(e,t);else if(e instanceof vt)e.target=e.target||t;else{var i=e;e=new vt(r,t),Hk(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=uc(o,r,!0,e)&&i}if(o=e.g=t,i=uc(o,r,!0,e)&&i,i=uc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=uc(o,r,!1,e)&&i}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Nd(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function uc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&lg(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Rv=q.JSON.stringify;class mF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function gF(){var t=Pv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yF{constructor(){this.h=this.g=null}add(e,n){const r=Xk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Xk=new mF(()=>new vF,t=>t.reset());class vF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _F(t){q.setTimeout(()=>{throw t},0)}let Uu,Vu=!1,Pv=new yF,Zk=()=>{const t=q.Promise.resolve(void 0);Uu=()=>{t.then(EF)}};var EF=()=>{for(var t;t=gF();){try{t.h.call(t.g)}catch(n){_F(n)}var e=Xk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vu=!1};function Pd(t,e){Je.call(this),this.h=t||1,this.g=e||q,this.j=yt(this.qb,this),this.l=Date.now()}Xe(Pd,Je);$=Pd.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ut(this,"tick"),this.ga&&(Dv(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Dv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){Pd.$.N.call(this),Dv(this),delete this.g};function Ov(t,e,n){if(typeof t=="function")n&&(t=yt(t,n));else if(t&&typeof t.handleEvent=="function")t=yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function eC(t){t.g=Ov(()=>{t.g=null,t.i&&(t.i=!1,eC(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class IF extends wi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:eC(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ju(t){wi.call(this),this.h=t,this.g={}}Xe(ju,wi);var a1=[];function tC(t,e,n,r){Array.isArray(n)||(n&&(a1[0]=n.toString()),n=a1);for(var i=0;i<n.length;i++){var s=Gk(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function nC(t){Cv(t.g,function(e,n){this.g.hasOwnProperty(n)&&xv(e)},t),t.g={}}ju.prototype.N=function(){ju.$.N.call(this),nC(this)};ju.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dd(){this.g=!0}Dd.prototype.Ea=function(){this.g=!1};function SF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function TF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function eo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CF(t,n)+(r?" "+r:"")})}function kF(t,e){t.info(function(){return"TIMEOUT: "+e})}Dd.prototype.info=function(){};function CF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Rv(n)}catch{return e}}var bs={},u1=null;function Od(){return u1=u1||new Je}bs.Ta="serverreachability";function rC(t){vt.call(this,bs.Ta,t)}Xe(rC,vt);function Bu(t){const e=Od();ut(e,new rC(e))}bs.STAT_EVENT="statevent";function iC(t,e){vt.call(this,bs.STAT_EVENT,t),this.stat=e}Xe(iC,vt);function St(t){const e=Od();ut(e,new iC(e,t))}bs.Ua="timingevent";function sC(t,e){vt.call(this,bs.Ua,t),this.size=e}Xe(sC,vt);function wl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var $d={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},oC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $v(){}$v.prototype.h=null;function l1(t){return t.h||(t.h=t.i())}function aC(){}var _l={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lv(){vt.call(this,"d")}Xe(Lv,vt);function Mv(){vt.call(this,"c")}Xe(Mv,vt);var hg;function Ld(){}Xe(Ld,$v);Ld.prototype.g=function(){return new XMLHttpRequest};Ld.prototype.i=function(){return{}};hg=new Ld;function El(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ju(this),this.P=bF,t=og?125:void 0,this.V=new Pd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new uC}function uC(){this.i=null,this.g="",this.h=!1}var bF=45e3,dg={},Ch={};$=El.prototype;$.setTimeout=function(t){this.P=t};function fg(t,e,n){t.L=1,t.v=Fd(dr(e)),t.s=n,t.S=!0,lC(t,null)}function lC(t,e){t.G=Date.now(),Il(t),t.A=dr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),yC(n.i,"t",r),t.C=0,n=t.l.J,t.h=new uC,t.g=FC(t.l,n?e:null,!t.s),0<t.O&&(t.M=new IF(yt(t.Pa,t,t.g),t.O)),tC(t.U,t.g,"readystatechange",t.nb),e=t.I?Wk(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Bu(),SF(t.j,t.u,t.A,t.m,t.W,t.s)}$.nb=function(t){t=t.target;const e=this.M;e&&Pn(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const c=Pn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||og||this.g&&(this.h.h||this.g.ja()||f1(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Bu(3):Bu(2)),Md(this);var n=this.g.da();this.ca=n;t:if(cC(this)){var r=f1(this.g);t="";var i=r.length,s=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qi(this),ru(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,TF(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mu(a)){var l=a;break t}}l=null}if(n=l)eo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pg(this,n);else{this.i=!1,this.o=3,St(12),qi(this),ru(this);break e}}this.S?(hC(this,c,o),og&&this.i&&c==3&&(tC(this.U,this.V,"tick",this.mb),this.V.start())):(eo(this.j,this.m,o,null),pg(this,o)),c==4&&qi(this),this.i&&!this.J&&(c==4?OC(this.l,this):(this.i=!1,Il(this)))}else KF(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,St(12)):(this.o=0,St(13)),qi(this),ru(this)}}}catch{}finally{}};function cC(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function hC(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=xF(t,n),i==Ch){e==4&&(t.o=4,St(14),r=!1),eo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==dg){t.o=4,St(15),eo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else eo(t.j,t.m,i,null),pg(t,i);cC(t)&&i!=Ch&&i!=dg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,St(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zv(e),e.M=!0,St(11))):(eo(t.j,t.m,n,"[Invalid Chunked Response]"),qi(t),ru(t))}$.mb=function(){if(this.g){var t=Pn(this.g),e=this.g.ja();this.C<e.length&&(Md(this),hC(this,t,e),this.i&&t!=4&&Il(this))}};function xF(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ch:(n=Number(e.substring(n,r)),isNaN(n)?dg:(r+=1,r+n>e.length?Ch:(e=e.slice(r,r+n),t.C=r+n,e)))}$.cancel=function(){this.J=!0,qi(this)};function Il(t){t.Y=Date.now()+t.P,dC(t,t.P)}function dC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wl(yt(t.lb,t),e)}function Md(t){t.B&&(q.clearTimeout(t.B),t.B=null)}$.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(kF(this.j,this.A),this.L!=2&&(Bu(),St(17)),qi(this),this.o=2,ru(this)):dC(this,this.Y-t)};function ru(t){t.l.H==0||t.J||OC(t.l,t)}function qi(t){Md(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Dv(t.V),nC(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function pg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||mg(n.i,t))){if(!t.K&&mg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ah(n),jd(n);else break e;Bv(n),St(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=wl(yt(n.ib,n),6e3));if(1>=_C(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Wi(n,11)}else if((t.K||n.g==t)&&Ah(n),!Mu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Fv(s,s.h),s.h=null))}if(r.F){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,de(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=MC(r,r.J?r.pa:null,r.Y),o.K){EC(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Md(a),Il(a)),r.g=o}else PC(r);0<n.j.length&&Bd(n)}else l[0]!="stop"&&l[0]!="close"||Wi(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Wi(n,7):jv(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Bu(4)}catch{}}function AF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function NF(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function fC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=NF(t),r=AF(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var pC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function es(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof es){this.h=t.h,bh(this,t.j),this.s=t.s,this.g=t.g,xh(this,t.m),this.l=t.l;var e=t.i,n=new zu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),c1(this,n),this.o=t.o}else t&&(e=String(t).match(pC))?(this.h=!1,bh(this,e[1]||"",!0),this.s=Ua(e[2]||""),this.g=Ua(e[3]||"",!0),xh(this,e[4]),this.l=Ua(e[5]||"",!0),c1(this,e[6]||"",!0),this.o=Ua(e[7]||"")):(this.h=!1,this.i=new zu(null,this.h))}es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Va(e,h1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Va(e,h1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Va(n,n.charAt(0)=="/"?OF:DF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Va(n,LF)),t.join("")};function dr(t){return new es(t)}function bh(t,e,n){t.j=n?Ua(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function c1(t,e,n){e instanceof zu?(t.i=e,MF(t.i,t.h)):(n||(e=Va(e,$F)),t.i=new zu(e,t.h))}function de(t,e,n){t.i.set(e,n)}function Fd(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ua(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Va(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,PF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function PF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var h1=/[#\/\?@]/g,DF=/[#\?:]/g,OF=/[#\?]/g,$F=/[#\?@]/g,LF=/#/g;function zu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _i(t){t.g||(t.g=new Map,t.h=0,t.i&&RF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=zu.prototype;$.add=function(t,e){_i(this),this.i=null,t=Xo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mC(t,e){_i(t),e=Xo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function gC(t,e){return _i(t),e=Xo(t,e),t.g.has(e)}$.forEach=function(t,e){_i(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.ta=function(){_i(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.Z=function(t){_i(this);let e=[];if(typeof t=="string")gC(this,t)&&(e=e.concat(this.g.get(Xo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return _i(this),this.i=null,t=Xo(this,t),gC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function yC(t,e,n){mC(t,e),0<n.length&&(t.i=null,t.g.set(Xo(t,e),Tv(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Xo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MF(t,e){e&&!t.j&&(_i(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(mC(this,r),yC(this,i,n))},t)),t.j=e}var FF=class{constructor(t,e){this.g=t,this.map=e}};function vC(t){this.l=t||UF,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UF=10;function wC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _C(t){return t.h?1:t.g?t.g.size:0}function mg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fv(t,e){t.g?t.g.add(e):t.h=e}function EC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vC.prototype.cancel=function(){if(this.i=IC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function IC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Tv(t.i)}var VF=class{stringify(t){return q.JSON.stringify(t,void 0)}parse(t){return q.JSON.parse(t,void 0)}};function jF(){this.g=new VF}function BF(t,e,n){const r=n||"";try{fC(t,function(i,s){let o=i;yl(i)&&(o=Rv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function zF(t,e){const n=new Dd;if(q.Image){const r=new Image;r.onload=ac(lc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ac(lc,n,r,"TestLoadImage: error",!1,e),r.onabort=ac(lc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ac(lc,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function lc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Sl(t){this.l=t.fc||null,this.j=t.ob||!1}Xe(Sl,$v);Sl.prototype.g=function(){return new Ud(this.l,this.j)};Sl.prototype.i=function(t){return function(){return t}}({});function Ud(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Uv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(Ud,Je);var Uv=0;$=Ud.prototype;$.open=function(t,e){if(this.readyState!=Uv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qu(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tl(this)),this.readyState=Uv};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qu(this)),this.g&&(this.readyState=3,qu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;SC(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function SC(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Tl(this):qu(this),this.readyState==3&&SC(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Tl(this))};$.Ya=function(t){this.g&&(this.response=t,Tl(this))};$.ka=function(){this.g&&Tl(this)};function Tl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qu(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ud.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qF=q.JSON.parse;function Ce(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=TC,this.L=this.M=!1}Xe(Ce,Je);var TC="",WF=/^https?$/i,HF=["POST","PUT"];$=Ce.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hg.g(),this.C=this.u?l1(this.u):l1(hg),this.g.onreadystatechange=yt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){d1(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=jk(HF,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bC(this),0<this.B&&((this.L=GF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.ua,this)):this.A=Ov(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){d1(this,s)}};function GF(t){return bo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Sv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function d1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kC(t),Vd(t)}function kC(t){t.F||(t.F=!0,ut(t,"complete"),ut(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),Vd(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vd(this,!0)),Ce.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?CC(this):this.kb())};$.kb=function(){CC(this)};function CC(t){if(t.h&&typeof Sv<"u"&&(!t.C[1]||Pn(t)!=4||t.da()!=2)){if(t.v&&Pn(t)==4)Ov(t.La,0,t);else if(ut(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(pC)[1]||null;!i&&q.self&&q.self.location&&(i=q.self.location.protocol.slice(0,-1)),r=!WF.test(i?i.toLowerCase():"")}n=r}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var s=2<Pn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",kC(t)}}finally{Vd(t)}}}}function Vd(t,e){if(t.g){bC(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=r}catch{}}}function bC(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function Pn(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qF(e)}};function f1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case TC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function KF(t){const e={};t=(t.g&&2<=Pn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Mu(t[r]))continue;var n=wF(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}dF(e,function(r){return r.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xC(t){let e="";return Cv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Vv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=xC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function Sa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function AC(t){this.Ga=0,this.j=[],this.l=new Dd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sa("baseRetryDelayMs",5e3,t),this.hb=Sa("retryDelaySeedMs",1e4,t),this.eb=Sa("forwardChannelMaxRetries",2,t),this.xa=Sa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new vC(t&&t.concurrentRequestLimit),this.Ja=new jF,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=AC.prototype;$.ra=8;$.H=1;function jv(t){if(NC(t),t.H==3){var e=t.W++,n=dr(t.I);if(de(n,"SID",t.K),de(n,"RID",e),de(n,"TYPE","terminate"),kl(t,n),e=new El(t,t.l,e),e.L=2,e.v=Fd(dr(n)),n=!1,q.navigator&&q.navigator.sendBeacon)try{n=q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=FC(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Il(e)}LC(t)}function jd(t){t.g&&(zv(t),t.g.cancel(),t.g=null)}function NC(t){jd(t),t.u&&(q.clearTimeout(t.u),t.u=null),Ah(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Bd(t){if(!wC(t.i)&&!t.m){t.m=!0;var e=t.Na;Uu||Zk(),Vu||(Uu(),Vu=!0),Pv.add(e,t),t.C=0}}function QF(t,e){return _C(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wl(yt(t.Na,t,e),$C(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new El(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Wk(s),Hk(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=RC(this,i,e),n=dr(this.I),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),kl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(xC(s)))+"&"+e:this.o&&Vv(n,this.o,s)),Fv(this.i,i),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),i.aa=!0,fg(i,n,null)):fg(i,n,e),this.H=2}}else this.H==3&&(t?p1(this,t):this.j.length==0||wC(this.i)||p1(this))};function p1(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);de(r,"SID",t.K),de(r,"RID",n),de(r,"AID",t.V),kl(t,r),t.o&&t.s&&Vv(r,t.o,t.s),n=new El(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=RC(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fv(t.i,n),fg(n,r,e)}function kl(t,e){t.na&&Cv(t.na,function(n,r){de(e,r,n)}),t.h&&fC({},function(n,r){de(e,r,n)})}function RC(t,e,n){n=Math.min(t.j.length,n);var r=t.h?yt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{BF(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function PC(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Uu||Zk(),Vu||(Uu(),Vu=!0),Pv.add(e,t),t.A=0}}function Bv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wl(yt(t.Ma,t),$C(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,DC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=wl(yt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,St(10),jd(this),DC(this))};function zv(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function DC(t){t.g=new El(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);de(e,"RID","rpc"),de(e,"SID",t.K),de(e,"AID",t.V),de(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&de(e,"TO",t.qa),de(e,"TYPE","xmlhttp"),kl(t,e),t.o&&t.s&&Vv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Fd(dr(e)),n.s=null,n.S=!0,lC(n,t)}$.ib=function(){this.v!=null&&(this.v=null,jd(this),Bv(this),St(19))};function Ah(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function OC(t,e){var n=null;if(t.g==e){Ah(t),zv(t),t.g=null;var r=2}else if(mg(t.i,e))n=e.F,EC(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Od(),ut(r,new sC(r,n)),Bd(t)}else PC(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&QF(t,e)||r==2&&Bv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Wi(t,5);break;case 4:Wi(t,10);break;case 3:Wi(t,6);break;default:Wi(t,2)}}}function $C(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=yt(t.pb,t);n||(n=new es("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||bh(n,"https"),Fd(n)),zF(n.toString(),r)}else St(2);t.H=0,t.h&&t.h.za(e),LC(t),NC(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),St(2)):(this.l.info("Failed to ping google.com"),St(1))};function LC(t){if(t.H=0,t.ma=[],t.h){const e=IC(t.i);(e.length!=0||t.j.length!=0)&&(i1(t.ma,e),i1(t.ma,t.j),t.i.i.length=0,Tv(t.j),t.j.length=0),t.h.ya()}}function MC(t,e,n){var r=n instanceof es?dr(n):new es(n);if(r.g!="")e&&(r.g=e+"."+r.g),xh(r,r.m);else{var i=q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new es(null);r&&bh(s,r),e&&(s.g=e),i&&xh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&de(r,n,e),de(r,"VER",t.ra),kl(t,r),r}function FC(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ce(new Sl({ob:!0})):new Ce(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function UC(){}$=UC.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function Nh(){if(bo&&!(10<=Number(uF)))throw Error("Environmental error: no available transport.")}Nh.prototype.g=function(t,e){return new Gt(t,e)};function Gt(t,e){Je.call(this),this.g=new AC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Mu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zo(this)}Xe(Gt,Je);Gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;St(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=MC(t,null,t.Y),Bd(t)};Gt.prototype.close=function(){jv(this.g)};Gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Rv(t),t=n);e.j.push(new FF(e.fb++,t)),e.H==3&&Bd(e)};Gt.prototype.N=function(){this.g.h=null,delete this.j,jv(this.g),delete this.g,Gt.$.N.call(this)};function VC(t){Lv.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(VC,Lv);function jC(){Mv.call(this),this.status=1}Xe(jC,Mv);function Zo(t){this.g=t}Xe(Zo,UC);Zo.prototype.Ba=function(){ut(this.g,"a")};Zo.prototype.Aa=function(t){ut(this.g,new VC(t))};Zo.prototype.za=function(t){ut(this.g,new jC)};Zo.prototype.ya=function(){ut(this.g,"b")};function YF(){this.blockSize=-1}function En(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xe(En,YF);En.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Op(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}En.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Op(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Op(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Op(this,r),i=0;break}}this.h=i,this.i+=e};En.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function oe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var JF={};function qv(t){return-128<=t&&128>t?sF(t,function(e){return new oe([e|0],0>e?-1:0)}):new oe([t|0],0>t?-1:0)}function Dn(t){if(isNaN(t)||!isFinite(t))return ho;if(0>t)return st(Dn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=gg;return new oe(e,0)}function BC(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(BC(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Dn(Math.pow(e,8)),r=ho,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Dn(Math.pow(e,s)),r=r.R(s).add(Dn(o))):(r=r.R(n),r=r.add(Dn(o)))}return r}var gg=4294967296,ho=qv(0),yg=qv(1),m1=qv(16777216);$=oe.prototype;$.ea=function(){if(tn(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:gg+r)*e,e*=gg}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(tr(this))return"0";if(tn(this))return"-"+st(this).toString(t);for(var e=Dn(Math.pow(t,6)),n=this,r="";;){var i=Ph(n,e).g;n=Rh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,tr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function tr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tn(t){return t.h==-1}$.X=function(t){return t=Rh(this,t),tn(t)?-1:tr(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new oe(n,~t.h).add(yg)}$.abs=function(){return tn(this)?st(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new oe(n,n[n.length-1]&-2147483648?-1:0)};function Rh(t,e){return t.add(st(e))}$.R=function(t){if(tr(this)||tr(t))return ho;if(tn(this))return tn(t)?st(this).R(st(t)):st(st(this).R(t));if(tn(t))return st(this.R(st(t)));if(0>this.X(m1)&&0>t.X(m1))return Dn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,u=t.D(i)&65535;n[2*r+2*i]+=o*u,cc(n,2*r+2*i),n[2*r+2*i+1]+=s*u,cc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,cc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,cc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new oe(n,0)};function cc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ta(t,e){this.g=t,this.h=e}function Ph(t,e){if(tr(e))throw Error("division by zero");if(tr(t))return new Ta(ho,ho);if(tn(t))return e=Ph(st(t),e),new Ta(st(e.g),st(e.h));if(tn(e))return e=Ph(t,st(e)),new Ta(st(e.g),e.h);if(30<t.g.length){if(tn(t)||tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=yg,r=e;0>=r.X(t);)n=g1(n),r=g1(r);var i=$s(n,1),s=$s(r,1);for(r=$s(r,2),n=$s(n,2);!tr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=$s(r,1),n=$s(n,1)}return e=Rh(t,i.R(e)),new Ta(i,e)}for(i=ho;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Dn(n),o=s.R(e);tn(o)||0<o.X(t);)n-=r,s=Dn(n),o=s.R(e);tr(s)&&(s=yg),i=i.add(s),t=Rh(t,o)}return new Ta(i,t)}$.gb=function(t){return Ph(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new oe(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new oe(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new oe(n,this.h^t.h)};function g1(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new oe(n,t.h)}function $s(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new oe(i,t.h)}Nh.prototype.createWebChannel=Nh.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;$d.NO_ERROR=0;$d.TIMEOUT=8;$d.HTTP_ERROR=6;oC.COMPLETE="complete";aC.EventType=_l;_l.OPEN="a";_l.CLOSE="b";_l.ERROR="c";_l.MESSAGE="d";Je.prototype.listen=Je.prototype.O;Ce.prototype.listenOnce=Ce.prototype.P;Ce.prototype.getLastError=Ce.prototype.Sa;Ce.prototype.getLastErrorCode=Ce.prototype.Ia;Ce.prototype.getStatus=Ce.prototype.da;Ce.prototype.getResponseJson=Ce.prototype.Wa;Ce.prototype.getResponseText=Ce.prototype.ja;Ce.prototype.send=Ce.prototype.ha;Ce.prototype.setWithCredentials=Ce.prototype.Oa;En.prototype.digest=En.prototype.l;En.prototype.reset=En.prototype.reset;En.prototype.update=En.prototype.j;oe.prototype.add=oe.prototype.add;oe.prototype.multiply=oe.prototype.R;oe.prototype.modulo=oe.prototype.gb;oe.prototype.compare=oe.prototype.X;oe.prototype.toNumber=oe.prototype.ea;oe.prototype.toString=oe.prototype.toString;oe.prototype.getBits=oe.prototype.D;oe.fromNumber=Dn;oe.fromString=BC;var XF=function(){return new Nh},ZF=function(){return Od()},$p=$d,eU=oC,tU=bs,y1={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},nU=Sl,hc=aC,rU=Ce,iU=En,fo=oe;const v1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new vd("@firebase/firestore");function vg(){return ri.logLevel}function sU(t){ri.setLogLevel(t)}function b(t,...e){if(ri.logLevel<=Z.DEBUG){const n=e.map(Wv);ri.debug(`Firestore (${ea}): ${t}`,...n)}}function Ne(t,...e){if(ri.logLevel<=Z.ERROR){const n=e.map(Wv);ri.error(`Firestore (${ea}): ${t}`,...n)}}function In(t,...e){if(ri.logLevel<=Z.WARN){const n=e.map(Wv);ri.warn(`Firestore (${ea}): ${t}`,...n)}}function Wv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t="Unexpected state"){const e=`FIRESTORE (${ea}) INTERNAL ASSERTION FAILED: `+t;throw Ne(e),new Error(e)}function j(t,e){t||L()}function oU(t,e){t||L()}function O(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let k=class extends kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zC=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},aU=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}},uU=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},lU=class{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new zC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new Ge(e)}},cU=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},hU=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new cU(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}};class dU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fU{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(j(typeof n.token=="string"),this.T=n.token,new dU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function W(t,e){return t<e?-1:t>e?1:0}function xo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function WC(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new we(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new we(0,0))}static max(){return new V(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r){n===void 0?n=0:n>e.length&&L(),r===void 0?r=e.length-n:r>e.length-n&&L(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ee extends Wu{construct(e,n,r){return new ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const mU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends Wu{construct(e,n,r){return new Re(e,n,r)}static isValidIdentifier(e){return mU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new k(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(ee.fromString(e))}static fromName(e){return new D(ee.fromString(e).popFirst(5))}static empty(){return new D(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new ee(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function wg(t){return t.fields.find(e=>e.kind===2)}function Pi(t){return t.fields.filter(e=>e.kind!==2)}HC.UNKNOWN_ID=-1;class gU{constructor(e,n){this.fieldPath=e,this.kind=n}}class Dh{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Dh(0,Kt.min())}}function GC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Kt(i,D.empty(),e)}function KC(t){return new Kt(t.readTime,t.key,-1)}class Kt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kt(V.min(),D.empty(),-1)}static max(){return new Kt(V.max(),D.empty(),-1)}}function Hv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==QC)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new Qe,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new iu(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=Gv(r.target.error);this.v.reject(new iu(e,i))}}static open(e,n,r,i){try{return new zd(n,e.transaction(i,r))}catch(s){throw new iu(n,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(b("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new vU(n)}}class gn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,gn.S(Se())===12.2&&Ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return b("SimpleDb","Removing database:",e),$i(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Au())return!1;if(gn.C())return!0;const e=Se(),n=gn.S(e),r=0<n&&n<10,i=gn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new iu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new k(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new iu(e,o))},i.onupgradeneeded=s=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=zd.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),_.reject(l))).toPromise();return u.catch(()=>{}),await a.R,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(b("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class yU{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return $i(this.L.delete())}}class iu extends k{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ii(t){return t.name==="IndexedDbTransactionError"}class vU{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(b("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),$i(r)}add(e){return b("SimpleDb","ADD",this.store.name,e,e),$i(this.store.add(e))}get(e){return $i(this.store.get(e)).next(n=>(n===void 0&&(n=null),b("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return b("SimpleDb","DELETE",this.store.name,e),$i(this.store.delete(e))}count(){return b("SimpleDb","COUNT",this.store.name),$i(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new _((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){b("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new _((r,i)=>{n.onerror=s=>{const o=Gv(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new _((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new yU(a),l=n(a.primaryKey,a.value,u);if(l instanceof _){const c=l.catch(h=>(u.done(),_.reject(h)));r.push(c)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function $i(t){return new _((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Gv(r.target.error);n(i)}})}let w1=!1;function Gv(t){const e=gn.S(Se());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return w1||(w1=!0,setTimeout(()=>{throw r},0)),r}}return t}class wU{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){b("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{b("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){Ii(n)?b("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Ei(n)}await this.et(6e4)})}}class _U{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return _.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return b("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(b("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=KC(s);Hv(o,r)>0&&(r=o)}),new Kt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ot.ct=-1;function Cl(t){return t==null}function Hu(t){return t===0&&1/t==-1/0}function JC(t){return typeof t=="number"&&Number.isInteger(t)&&!Hu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_1(e)),e=EU(t.get(n),e);return _1(e)}function EU(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function _1(t){return t+""}function On(t){const e=t.length;if(j(e>=2),e===2)return j(t.charAt(0)===""&&t.charAt(1)===""),ee.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&L(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:L()}s=o+2}return new ee(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e){return[t,Ct(e)]}function XC(t,e,n){return[t,Ct(e),n]}const IU={},SU=["prefixPath","collectionGroup","readTime","documentId"],TU=["prefixPath","collectionGroup","documentId"],kU=["collectionGroup","readTime","prefixPath","documentId"],CU=["canonicalId","targetId"],bU=["targetId","path"],xU=["path","targetId"],AU=["collectionId","parent"],NU=["indexId","uid"],RU=["uid","sequenceNumber"],PU=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],DU=["indexId","uid","orderedDocumentKey"],OU=["userId","collectionPath","documentId"],$U=["userId","collectionPath","largestBatchId"],LU=["userId","collectionGroup","largestBatchId"],ZC=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],MU=[...ZC,"documentOverlays"],eb=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tb=eb,FU=[...tb,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends YC{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function Ze(t,e){const n=O(t);return gn.M(n.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dc(this.root,e,this.comparator,!0)}}class dc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,r,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new S1(this.data.getIterator())}getIteratorFrom(e){return new S1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class S1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ls(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new $t([])}unionWith(e){let n=new pe(Re.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rb("Invalid base64 string: "+i):i}}(e);return new je(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const VU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ii(t){if(j(!!t),typeof t=="string"){let e=0;const n=VU.exec(t);if(j(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function si(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kv(t){const e=t.mapValue.fields.__previous_value__;return qd(e)?Kv(e):e}function Gu(t){const e=ii(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{constructor(e,n,r,i,s,o,a,u,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Mc={nullValue:"NULL_VALUE"};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qd(t)?4:ib(t)?9007199254740991:10:L()}function Wn(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gu(t).isEqual(Gu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ii(r.timestampValue),o=ii(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return si(r.bytesValue).isEqual(si(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ke(r.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(r.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ke(r.integerValue)===ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ke(r.doubleValue),o=ke(i.doubleValue);return s===o?Hu(s)===Hu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return xo(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(I1(s)!==I1(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Wn(s[a],o[a])))return!1;return!0}(t,e);default:return L()}}function Ku(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function ai(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return W(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ke(i.integerValue||i.doubleValue),a=ke(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return T1(t.timestampValue,e.timestampValue);case 4:return T1(Gu(t),Gu(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,s){const o=si(i),a=si(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=W(o[u],a[u]);if(l!==0)return l}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=W(ke(i.latitude),ke(s.latitude));return o!==0?o:W(ke(i.longitude),ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=ai(o[u],a[u]);if(l)return l}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ur.mapValue&&s===Ur.mapValue)return 0;if(i===Ur.mapValue)return 1;if(s===Ur.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=W(a[c],l[c]);if(h!==0)return h;const d=ai(o[a[c]],u[l[c]]);if(d!==0)return d}return W(a.length,l.length)}(t.mapValue,e.mapValue);default:throw L()}}function T1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=ii(t),r=ii(e),i=W(n.seconds,r.seconds);return i!==0?i:W(n.nanos,r.nanos)}function Ao(t){return Eg(t)}function Eg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ii(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?si(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Eg(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Eg(r.fields[a])}`;return s+"}"}(t.mapValue):L();var e,n}function ds(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ig(t){return!!t&&"integerValue"in t}function Qu(t){return!!t&&"arrayValue"in t}function k1(t){return!!t&&"nullValue"in t}function C1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fc(t){return!!t&&"mapValue"in t}function su(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=su(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=su(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ib(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function BU(t){return"nullValue"in t?Mc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ds(oi.empty(),D.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:L()}function zU(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ds(oi.empty(),D.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Ur:L()}function b1(t,e){const n=ai(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function x1(t,e){const n=ai(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt=class Sg{constructor(e){this.value=e}static empty(){return new Sg({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=su(n)}setAll(e){let n=Re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=su(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Sg(su(this.value))}};function sb(t){const e=[];return xs(t.fields,(n,r)=>{const i=new Re([n]);if(Fc(r)){const s=sb(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye=class Di{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Di(e,0,V.min(),V.min(),V.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new Di(e,1,n,V.min(),r,i,0)}static newNoDocument(e,n){return new Di(e,2,n,V.min(),V.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new Di(e,3,n,V.min(),V.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Di&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Di(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.position=e,this.inclusive=n}}function A1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=ai(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function N1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n="asc"){this.field=e,this.dir=n}}function qU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{}class Q extends ob{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WU(e,n,r):n==="array-contains"?new KU(e,r):n==="in"?new db(e,r):n==="not-in"?new QU(e,r):n==="array-contains-any"?new YU(e,r):new Q(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HU(e,r):new GU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ai(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(ai(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ie extends ob{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new ie(e,n)}matches(e){return No(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function No(t){return t.op==="and"}function Tg(t){return t.op==="or"}function Qv(t){return ab(t)&&No(t)}function ab(t){for(const e of t.filters)if(e instanceof ie)return!1;return!0}function kg(t){if(t instanceof Q)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(Qv(t))return t.filters.map(e=>kg(e)).join(",");{const e=t.filters.map(n=>kg(n)).join(",");return`${t.op}(${e})`}}function ub(t,e){return t instanceof Q?function(n,r){return r instanceof Q&&n.op===r.op&&n.field.isEqual(r.field)&&Wn(n.value,r.value)}(t,e):t instanceof ie?function(n,r){return r instanceof ie&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&ub(s,r.filters[o]),!0):!1}(t,e):void L()}function lb(t,e){const n=t.filters.concat(e);return ie.create(n,t.op)}function cb(t){return t instanceof Q?function(e){return`${e.field.canonicalString()} ${e.op} ${Ao(e.value)}`}(t):t instanceof ie?function(e){return e.op.toString()+" {"+e.getFilters().map(cb).join(" ,")+"}"}(t):"Filter"}class WU extends Q{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class HU extends Q{constructor(e,n){super(e,"in",n),this.keys=hb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GU extends Q{constructor(e,n){super(e,"not-in",n),this.keys=hb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class KU extends Q{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qu(n)&&Ku(n.arrayValue,this.value)}}class db extends Q{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ku(this.value.arrayValue,n)}}class QU extends Q{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ku(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ku(this.value.arrayValue,n)}}class YU extends Q{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ku(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Cg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JU(t,e,n,r,i,s,o)}function fs(t){const e=O(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.dt=n}return e.dt}function bl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ub(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!N1(t.startAt,e.startAt)&&N1(t.endAt,e.endAt)}function Oh(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function $h(t,e){return t.filters.filter(n=>n instanceof Q&&n.field.isEqual(e))}function R1(t,e,n){let r=Mc,i=!0;for(const s of $h(t,e)){let o=Mc,a=!0;switch(s.op){case"<":case"<=":o=BU(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Mc}b1({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];b1({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function P1(t,e,n){let r=Ur,i=!0;for(const s of $h(t,e)){let o=Ur,a=!0;switch(s.op){case">=":case">":o=zU(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ur}x1({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];x1({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function fb(t,e,n,r,i,s,o,a){return new vr(t,e,n,r,i,s,o,a)}function ta(t){return new vr(t)}function D1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Jv(t){return t.collectionGroup!==null}function ts(t){const e=O(t);if(e.wt===null){e.wt=[];const n=Wd(e),r=Yv(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new po(n)),e.wt.push(new po(Re.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new po(Re.keyField(),s))}}}return e.wt}function Vt(t){const e=O(t);if(!e._t)if(e.limitType==="F")e._t=Cg(e.path,e.collectionGroup,ts(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ts(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new po(s.field,o))}const r=e.endAt?new ui(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ui(e.startAt.position,e.startAt.inclusive):null;e._t=Cg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function bg(t,e){e.getFirstInequalityField(),Wd(t);const n=t.filters.concat([e]);return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lh(t,e,n){return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xl(t,e){return bl(Vt(t),Vt(e))&&t.limitType===e.limitType}function pb(t){return`${fs(Vt(t))}|lt:${t.limitType}`}function xg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>cb(r)).join(", ")}]`),Cl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),`Target(${n})`}(Vt(t))}; limitType=${t.limitType})`}function Al(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ts(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=A1(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ts(n),r)||n.endAt&&!function(i,s,o){const a=A1(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ts(n),r))}(t,e)}function mb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gb(t){return(e,n)=>{let r=!1;for(const i of ts(t)){const s=XU(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XU(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ai(a,u):L()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZU=new ce(D.comparator);function Lt(){return ZU}const yb=new ce(D.comparator);function ja(...t){let e=yb;for(const n of t)e=e.insert(n.key,n);return e}function vb(t){let e=yb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $n(){return ou()}function wb(){return ou()}function ou(){return new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}const e4=new ce(D.comparator),t4=new pe(D.comparator);function H(...t){let e=t4;for(const n of t)e=e.add(n);return e}const n4=new pe(W);function Xv(){return n4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hu(e)?"-0":e}}function Eb(t){return{integerValue:""+t}}function Ib(t,e){return JC(e)?Eb(e):_b(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this._=void 0}}function r4(t,e,n){return t instanceof Ro?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&qd(i)&&(i=Kv(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ps?Tb(t,e):t instanceof ms?kb(t,e):function(r,i){const s=Sb(r,i),o=O1(s)+O1(r.gt);return Ig(s)&&Ig(r.gt)?Eb(o):_b(r.serializer,o)}(t,e)}function i4(t,e,n){return t instanceof ps?Tb(t,e):t instanceof ms?kb(t,e):n}function Sb(t,e){return t instanceof Po?Ig(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ro extends Hd{}class ps extends Hd{constructor(e){super(),this.elements=e}}function Tb(t,e){const n=Cb(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ms extends Hd{constructor(e){super(),this.elements=e}}function kb(t,e){let n=Cb(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class Po extends Hd{constructor(e,n){super(),this.serializer=e,this.gt=n}}function O1(t){return ke(t.integerValue||t.doubleValue)}function Cb(t){return Qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.field=e,this.transform=n}}function s4(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ps&&r instanceof ps||n instanceof ms&&r instanceof ms?xo(n.elements,r.elements,Wn):n instanceof Po&&r instanceof Po?Wn(n.gt,r.gt):n instanceof Ro&&r instanceof Ro}(t.transform,e.transform)}class o4{constructor(e,n){this.version=e,this.transformResults=n}}class ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gd{}function bb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ra(t.key,ve.none()):new na(t.key,t.data,ve.none());{const n=t.data,r=Pt.empty();let i=new pe(Re.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wr(t.key,r,new $t(i.toArray()),ve.none())}}function a4(t,e,n){t instanceof na?function(r,i,s){const o=r.value.clone(),a=L1(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(r,i,s){if(!Uc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=L1(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(xb(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function au(t,e,n,r){return t instanceof na?function(i,s,o,a){if(!Uc(i.precondition,s))return o;const u=i.value.clone(),l=M1(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(i,s,o,a){if(!Uc(i.precondition,s))return o;const u=M1(i.fieldTransforms,a,s),l=s.data;return l.setAll(xb(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Uc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function u4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Sb(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function $1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&xo(n,r,(i,s)=>s4(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends Gd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends Gd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function L1(t,e,n){const r=new Map;j(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,i4(o,a,n[i]))}return r}function M1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,r4(s,o,e))}return r}class ra extends Gd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zv extends Gd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&a4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=au(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=au(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=bb(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&xo(this.mutations,e.mutations,(n,r)=>$1(n,r))&&xo(this.baseMutations,e.baseMutations,(n,r)=>$1(n,r))}}class tw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){j(e.mutations.length===r.length);let i=e4;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tw(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,X;function Ab(t){switch(t){default:return L();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Nb(t){if(t===void 0)return Ne("GRPC error has no .code"),E.UNKNOWN;switch(t){case Oe.OK:return E.OK;case Oe.CANCELLED:return E.CANCELLED;case Oe.UNKNOWN:return E.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return E.INTERNAL;case Oe.UNAVAILABLE:return E.UNAVAILABLE;case Oe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Oe.NOT_FOUND:return E.NOT_FOUND;case Oe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Oe.ABORTED:return E.ABORTED;case Oe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Oe.DATA_LOSS:return E.DATA_LOSS;default:return L()}}(X=Oe||(Oe={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fc}static getOrCreateInstance(){return fc===null&&(fc=new rw),fc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let fc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=new fo([4294967295,4294967295],0);function F1(t){const e=Rb().encode(t),n=new iU;return n.update(e),new Uint8Array(n.digest())}function U1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fo([n,r],0),new fo([i,s],0)]}class iw{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ba(`Invalid padding: ${n}`);if(r<0)throw new Ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=fo.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(fo.fromNumber(r)));return i.compare(c4)===1&&(i=new fo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=F1(e),[r,i]=U1(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new iw(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=F1(e),[r,i]=U1(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rl(V.min(),i,new ce(W),Lt(),H())}}class Pl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pl(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class Pb{constructor(e,n){this.targetId=e,this.Vt=n}}class Db{constructor(e,n,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class V1{constructor(){this.St=0,this.Dt=B1(),this.Ct=je.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=H(),n=H(),r=H();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:L()}}),new Pl(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=B1()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class h4{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Lt(),this.zt=j1(),this.Wt=new ce(W)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Oh(o))if(i===0){const a=new D(o.path);this.Yt(r,a,Ye.newNoDocument(a,V.min()))}else j(i===1);else{const a=this.ie(r);if(a!==i){const u=this.re(e,a);if(u!==0){this.ee(r);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=rw.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,c,h){var d,f,p,g,w,y;const m={localCacheCount:c,existenceFilterCount:h.count},v=h.unchangedNames;return v&&(m.bloomFilter={applied:l===0,hashCount:(d=v==null?void 0:v.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(g=(p=(f=v==null?void 0:v.bits)===null||f===void 0?void 0:f.bitmap)===null||p===void 0?void 0:p.length)!==null&&g!==void 0?g:0,padding:(y=(w=v==null?void 0:v.bits)===null||w===void 0?void 0:w.padding)!==null&&y!==void 0?y:0}),m}(u,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,l;try{u=si(s).toUint8Array()}catch(c){if(c instanceof rb)return In("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{l=new iw(u,o,a)}catch(c){return In(c instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return l.It===0?1:i!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Oh(a.target)){const u=new D(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,Ye.newNoDocument(u,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=H();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.se(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Rl(e,n,this.Wt,this.jt,r);return this.jt=Lt(),this.zt=j1(),this.Wt=new ce(W),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new V1,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new pe(W),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new V1),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function j1(){return new ce(D.comparator)}function B1(){return new ce(D.comparator)}const d4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),f4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),p4=(()=>({and:"AND",or:"OR"}))();class m4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ag(t,e){return t.useProto3Json||Cl(e)?e:{value:e}}function Do(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ob(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function g4(t,e){return Do(t,e.toTimestamp())}function Pe(t){return j(!!t),V.fromTimestamp(function(e){const n=ii(e);return new we(n.seconds,n.nanos)}(t))}function sw(t,e){return function(n){return new ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function $b(t){const e=ee.fromString(t);return j(qb(e)),e}function Yu(t,e){return sw(t.databaseId,e.path)}function Vn(t,e){const n=$b(e);if(n.get(1)!==t.databaseId.projectId)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(Mb(n))}function Ng(t,e){return sw(t.databaseId,e)}function Lb(t){const e=$b(t);return e.length===4?ee.emptyPath():Mb(e)}function Ju(t){return new ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mb(t){return j(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function z1(t,e,n){return{name:Yu(t,e),fields:n.value.mapValue.fields}}function Fb(t,e,n){const r=Vn(t,e.name),i=Pe(e.updateTime),s=e.createTime?Pe(e.createTime):V.min(),o=new Pt({mapValue:{fields:e.fields}}),a=Ye.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function y4(t,e){return"found"in e?function(n,r){j(!!r.found),r.found.name,r.found.updateTime;const i=Vn(n,r.found.name),s=Pe(r.found.updateTime),o=r.found.createTime?Pe(r.found.createTime):V.min(),a=new Pt({mapValue:{fields:r.found.fields}});return Ye.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){j(!!r.missing),j(!!r.readTime);const i=Vn(n,r.missing),s=Pe(r.readTime);return Ye.newNoDocument(i,s)}(t,e):L()}function v4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(j(l===void 0||typeof l=="string"),je.fromBase64String(l||"")):(j(l===void 0||l instanceof Uint8Array),je.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?E.UNKNOWN:Nb(u.code);return new k(l,u.message||"")}(o);n=new Db(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vn(t,r.document.name),s=Pe(r.document.updateTime),o=r.document.createTime?Pe(r.document.createTime):V.min(),a=new Pt({mapValue:{fields:r.document.fields}}),u=Ye.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new Vc(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vn(t,r.document),s=r.readTime?Pe(r.readTime):V.min(),o=Ye.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Vc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vn(t,r.document),s=r.removedTargetIds||[];n=new Vc([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new l4(i,s),a=r.targetId;n=new Pb(a,o)}}return n}function Xu(t,e){let n;if(e instanceof na)n={update:z1(t,e.key,e.value)};else if(e instanceof ra)n={delete:Yu(t,e.key)};else if(e instanceof wr)n={update:z1(t,e.key,e.data),updateMask:T4(e.fieldMask)};else{if(!(e instanceof Zv))return L();n={verify:Yu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ro)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ps)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ms)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Po)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw L()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:g4(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L()}(t,e.precondition)),n}function Rg(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ve.updateTime(Pe(i.updateTime)):i.exists!==void 0?ve.exists(i.exists):ve.none()}(e.currentDocument):ve.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)j(o.setToServerValue==="REQUEST_TIME"),a=new Ro;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new ps(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new ms(l)}else"increment"in o?a=new Po(s,o.increment):L();const u=Re.fromServerFormat(o.fieldPath);return new Nl(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Vn(t,e.update.name),s=new Pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new $t(u.map(l=>Re.fromServerFormat(l)))}(e.updateMask);return new wr(i,s,o,n,r)}return new na(i,s,n,r)}if(e.delete){const i=Vn(t,e.delete);return new ra(i,n)}if(e.verify){const i=Vn(t,e.verify);return new Zv(i,n)}return L()}function w4(t,e){return t&&t.length>0?(j(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Pe(r.updateTime):Pe(i);return s.isEqual(V.min())&&(s=Pe(i)),new o4(s,r.transformResults||[])}(n,e))):[]}function Ub(t,e){return{documents:[Ng(t,e.path)]}}function Vb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ng(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ng(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return zb(ie.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:Fs(c.field),direction:E4(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ag(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function jb(t){let e=Lb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){j(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=Bb(c);return h instanceof ie&&Qv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new po(Us(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Cl(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new ui(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new ui(d,h)}(n.endAt)),fb(e,i,o,s,a,"F",u,l)}function _4(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Us(e.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Us(e.unaryFilter.field);return Q.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Us(e.unaryFilter.field);return Q.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Us(e.unaryFilter.field);return Q.create(s,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(e){return Q.create(Us(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ie.create(e.compositeFilter.filters.map(n=>Bb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(t):L()}function E4(t){return d4[t]}function I4(t){return f4[t]}function S4(t){return p4[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function Us(t){return Re.fromServerFormat(t.fieldPath)}function zb(t){return t instanceof Q?function(e){if(e.op==="=="){if(C1(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NAN"}};if(k1(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(C1(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NOT_NAN"}};if(k1(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(e.field),op:I4(e.op),value:e.value}}}(t):t instanceof ie?function(e){const n=e.getFilters().map(r=>zb(r));return n.length===1?n[0]:{compositeFilter:{op:S4(e.op),filters:n}}}(t):L()}function T4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,i,s=V.min(),o=V.min(),a=je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.fe=e}}function k4(t,e){let n;if(e.document)n=Fb(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=D.fromSegments(e.noDocument.path),i=ys(e.noDocument.readTime);n=Ye.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return L();{const r=D.fromSegments(e.unknownDocument.path),i=ys(e.unknownDocument.version);n=Ye.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new we(r[0],r[1]);return V.fromTimestamp(i)}(e.readTime)),n}function q1(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Mh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Yu(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Do(i,s.version.toTimestamp()),createTime:Do(i,s.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:gs(e.version)};else{if(!e.isUnknownDocument())return L();r.unknownDocument={path:n.path.toArray(),version:gs(e.version)}}return r}function Mh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function gs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ys(t){const e=new we(t.seconds,t.nanoseconds);return V.fromTimestamp(e)}function Li(t,e){const n=(e.baseMutations||[]).map(s=>Rg(t.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Rg(t.fe,s)),i=we.fromMillis(e.localWriteTimeMs);return new ew(e.batchId,i,n,r)}function za(t){const e=ys(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ys(t.lastLimboFreeSnapshotVersion):V.min();let r;var i;return t.query.documents!==void 0?(j((i=t.query).documents.length===1),r=Vt(ta(Lb(i.documents[0])))):r=function(s){return Vt(jb(s))}(t.query),new nr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,je.fromBase64String(t.resumeToken))}function Hb(t,e){const n=gs(e.snapshotVersion),r=gs(e.lastLimboFreeSnapshotVersion);let i;i=Oh(e.target)?Ub(t.fe,e.target):Vb(t.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:fs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ow(t){const e=jb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lh(e,e.limit,"L"):e}function Lp(t,e){return new nw(e.largestBatchId,Rg(t.fe,e.overlayMutation))}function W1(t,e){const n=e.path.lastSegment();return[t,Ct(e.path.popLast()),n]}function H1(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:gs(r.readTime),documentKey:Ct(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{getBundleMetadata(e,n){return G1(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:ys(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return G1(e).put({bundleId:(r=n).id,createTime:gs(Pe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return K1(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:ow(i.bundledQuery),readTime:ys(i.readTime)};var i})}saveNamedQuery(e,n){return K1(e).put(function(r){return{name:r.name,readTime:gs(Pe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function G1(t){return Ze(t,"bundles")}function K1(t){return Ze(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new Kd(e,r)}getOverlay(e,n){return ka(e).get(W1(this.userId,n)).next(r=>r?Lp(this.serializer,r):null)}getOverlays(e,n){const r=$n();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new nw(n,o);i.push(this.we(e,a))}),_.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ct(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ka(e).J("collectionPathOverlayIndex",a))}),_.waitFor(s)}getOverlaysForCollection(e,n,r){const i=$n(),s=Ct(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ka(e).j("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Lp(this.serializer,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=$n();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ka(e).X({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=Lp(this.serializer,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}we(e,n){return ka(e).put(function(r,i,s){const[o,a,u]=W1(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Xu(r.fe,s.mutation)}}(this.serializer,this.userId,n))}}function ka(t){return Ze(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(ke(e.integerValue));else if("doubleValue"in e){const r=ke(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),Hu(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(si(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?ib(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):L()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const i of Object.keys(r))this.Te(i,n),this.me(r[i],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const i of r)this.me(i,n)}ve(e,n){this.ye(n,37),D.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}Mi.Ve=new Mi;function b4(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Q1(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=b4(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class x4{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=n.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=n.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const n=this.Fe(e),r=Q1(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Le(e){const n=this.Fe(e),r=Q1(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class A4{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class N4{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Ca{constructor(){this.je=new x4,this.ze=new A4(this.je),this.We=new N4(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Fi(this.indexId,this.documentKey,this.arrayValue,r)}}function Sr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Y1(t.arrayValue,e.arrayValue),n!==0?n:(n=Y1(t.directionalValue,e.directionalValue),n!==0?n:D.comparator(t.documentKey,e.documentKey)))}function Y1(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){j(e.collectionGroup===this.collectionId);const n=wg(e);if(n!==void 0&&!this.en(n))return!1;const r=Pi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){var e,n;if(j(t instanceof Q||t instanceof ie),t instanceof Q){if(t instanceof db){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Q.create(t.field,"==",s)))||[];return ie.create(i,"or")}return t}const r=t.filters.map(i=>Gb(i));return ie.create(r,t.op)}function P4(t){if(t.getFilters().length===0)return[];const e=Og(Gb(t));return j(Kb(e)),Pg(e)||Dg(e)?[e]:e.getFilters()}function Pg(t){return t instanceof Q}function Dg(t){return t instanceof ie&&Qv(t)}function Kb(t){return Pg(t)||Dg(t)||function(e){if(e instanceof ie&&Tg(e)){for(const n of e.getFilters())if(!Pg(n)&&!Dg(n))return!1;return!0}return!1}(t)}function Og(t){if(j(t instanceof Q||t instanceof ie),t instanceof Q)return t;if(t.filters.length===1)return Og(t.filters[0]);const e=t.filters.map(r=>Og(r));let n=ie.create(e,t.op);return n=Fh(n),Kb(n)?n:(j(n instanceof ie),j(No(n)),j(n.filters.length>1),n.filters.reduce((r,i)=>aw(r,i)))}function aw(t,e){let n;return j(t instanceof Q||t instanceof ie),j(e instanceof Q||e instanceof ie),n=t instanceof Q?e instanceof Q?function(r,i){return ie.create([r,i],"and")}(t,e):J1(t,e):e instanceof Q?J1(e,t):function(r,i){if(j(r.filters.length>0&&i.filters.length>0),No(r)&&No(i))return lb(r,i.getFilters());const s=Tg(r)?r:i,o=Tg(r)?i:r,a=s.filters.map(u=>aw(u,o));return ie.create(a,"or")}(t,e),Fh(n)}function J1(t,e){if(No(e))return lb(e,t.getFilters());{const n=e.filters.map(r=>aw(t,r));return ie.create(n,"or")}}function Fh(t){if(j(t instanceof Q||t instanceof ie),t instanceof Q)return t;const e=t.getFilters();if(e.length===1)return Fh(e[0]);if(ab(t))return t;const n=e.map(i=>Fh(i)),r=[];return n.forEach(i=>{i instanceof Q?r.push(i):i instanceof ie&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ie.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(){this.rn=new uw}addToCollectionParentIndex(e,n){return this.rn.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Kt.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class uw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pe(ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new Uint8Array(0);class O4{constructor(e,n){this.user=e,this.databaseId=n,this.on=new uw,this.un=new Si(r=>fs(r),(r,i)=>bl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:Ct(i)};return X1(e).put(s)}return _.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[WC(n),""],!1,!0);return X1(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(On(o.parent))}return r})}addFieldIndex(e,n){const r=mc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=xa(e);return s.next(a=>{o.put(H1(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=mc(e),i=xa(e),s=ba(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=ba(e);let i=!0;const s=new Map;return _.forEach(this.cn(n),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=H();const a=[];return _.forEach(s,(u,l)=>{var c;b("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(v=>`${v.fieldPath}:${v.kind}`).join(",")}`} to execute ${fs(n)}`);const h=function(v,I){const C=wg(I);if(C===void 0)return null;for(const A of $h(v,C.fieldPath))switch(A.op){case"array-contains-any":return A.value.arrayValue.values||[];case"array-contains":return[A.value]}return null}(l,u),d=function(v,I){const C=new Map;for(const A of Pi(I))for(const P of $h(v,A.fieldPath))switch(P.op){case"==":case"in":C.set(A.fieldPath.canonicalString(),P.value);break;case"not-in":case"!=":return C.set(A.fieldPath.canonicalString(),P.value),Array.from(C.values())}return null}(l,u),f=function(v,I){const C=[];let A=!0;for(const P of Pi(I)){const M=P.kind===0?R1(v,P.fieldPath,v.startAt):P1(v,P.fieldPath,v.startAt);C.push(M.value),A&&(A=M.inclusive)}return new ui(C,A)}(l,u),p=function(v,I){const C=[];let A=!0;for(const P of Pi(I)){const M=P.kind===0?P1(v,P.fieldPath,v.endAt):R1(v,P.fieldPath,v.endAt);C.push(M.value),A&&(A=M.inclusive)}return new ui(C,A)}(l,u),g=this.hn(u,l,f),w=this.hn(u,l,p),y=this.ln(u,l,d),m=this.fn(u.indexId,h,g,f.inclusive,w,p.inclusive,y);return _.forEach(m,v=>r.H(v,n.limit).next(I=>{I.forEach(C=>{const A=D.fromSegments(C.documentKey);o.has(A)||(o=o.add(A),a.push(A))})}))}).next(()=>a)}return _.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=P4(ie.create(e.filters,"and")).map(r=>Cg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.dn(n[h/l]):pc,f=this.wn(e,d,r[h%l],i),p=this._n(e,d,s[h%l],o),g=a.map(w=>this.wn(e,d,w,!0));c.push(...this.createRange(f,p,g))}return c}wn(e,n,r,i){const s=new Fi(e,D.empty(),n,r);return i?s:s.Je()}_n(e,n,r,i){const s=new Fi(e,D.empty(),n,r);return i?s.Je():s}an(e,n){const r=new R4(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return _.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let u=new pe(Re.comparator),l=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:u=u.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(u=u.add(c.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}mn(e,n){const r=new Ca;for(const i of Pi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);Mi.Ve._e(s,o)}return r.Qe()}dn(e){const n=new Ca;return Mi.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new Ca;return Mi.Ve._e(ds(this.databaseId,n),r.He(function(i){const s=Pi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new Ca);let s=0;for(const o of Pi(e)){const a=r[s++];for(const u of i)if(this.yn(n,o.fieldPath)&&Qu(a))i=this.pn(i,o,a);else{const l=u.He(o.kind);Mi.Ve._e(a,l)}}return this.In(i)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Ca;u.seed(a.Qe()),Mi.Ve._e(o,u.He(n.kind)),s.push(u)}return s}yn(e,n){return!!e.filters.find(r=>r instanceof Q&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=mc(e),i=xa(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return _.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new Dh(c.sequenceNumber,new Kt(ys(c.readTime),new D(On(c.documentKey)),c.largestBatchId)):Dh.empty(),d=l.fields.map(([f,p])=>new gU(Re.fromServerFormat(f),p));return new HC(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:W(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=mc(e),s=xa(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>_.forEach(a,u=>s.put(H1(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return _.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),_.forEach(a,u=>this.En(e,i,u).next(l=>{const c=this.An(s,u);return l.isEqual(c)?_.resolve():this.vn(e,s,u,l,c)}))))})}Rn(e,n,r,i){return ba(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,i){return ba(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const i=ba(e);let s=new pe(Sr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{s=s.add(new Fi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,n){let r=new pe(Sr);const i=this.mn(n,e);if(i==null)return r;const s=wg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Qu(o))for(const a of o.arrayValue.values||[])r=r.add(new Fi(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Fi(n.indexId,e.key,pc,i));return r}vn(e,n,r,i,s){b("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),f=u.getIterator();let p=Ls(d),g=Ls(f);for(;p||g;){let w=!1,y=!1;if(p&&g){const m=l(p,g);m<0?y=!0:m>0&&(w=!0)}else p!=null?y=!0:w=!0;w?(c(g),g=Ls(f)):y?(h(p),p=Ls(d)):(p=Ls(d),g=Ls(f))}}(i,s,Sr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),_.waitFor(o)}Tn(e){let n=1;return xa(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Sr(o,a)).filter((o,a,u)=>!a||Sr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Sr(o,e),u=Sr(o,n);if(a===0)i[0]=e.Je();else if(a>0&&u<0)i.push(o),i.push(o.Je());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,pc,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,pc,[]];s.push(IDBKeyRange.bound(a,u))}return s}bn(e,n){return Sr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Z1)}getMinOffset(e,n){return _.mapArray(this.cn(n),r=>this.an(e,r).next(i=>i||L())).next(Z1)}}function X1(t){return Ze(t,"collectionParents")}function ba(t){return Ze(t,"indexEntries")}function mc(t){return Ze(t,"indexConfiguration")}function xa(t){return Ze(t,"indexState")}function Z1(t){j(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Hv(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Kt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Nt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{j(a===1)}));const l=[];for(const c of n.mutations){const h=XC(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return _.waitFor(s).next(()=>l)}function Uh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw L();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(41943040,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);class Qd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,n,r,i){j(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Qd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Vs(e),o=Tr(e);return o.add({}).next(a=>{j(typeof a=="number");const u=new ew(a,n,r,i),l=function(d,f,p){const g=p.baseMutations.map(y=>Xu(d.fe,y)),w=p.mutations.map(y=>Xu(d.fe,y));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:g,mutations:w}}(this.serializer,this.userId,u),c=[];let h=new pe((d,f)=>W(d.canonicalString(),f.canonicalString()));for(const d of i){const f=XC(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(f,IU))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=u.keys()}),_.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Tr(e).get(n).next(r=>r?(j(r.userId===this.userId),Li(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?_.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Tr(e).X({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(j(a.batchId>=r),s=Li(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Tr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).j("userMutationsIndex",n).next(r=>r.map(i=>Li(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Lc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Vs(e).X({range:i},(o,a,u)=>{const[l,c,h]=o,d=On(c);if(l===this.userId&&n.path.isEqual(d))return Tr(e).get(h).next(f=>{if(!f)throw L();j(f.userId===this.userId),s.push(Li(this.serializer,f))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(W);const i=[];return n.forEach(s=>{const o=Lc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Vs(e).X({range:a},(l,c,h)=>{const[d,f,p]=l,g=On(f);d===this.userId&&s.path.isEqual(g)?r=r.add(p):h.done()});i.push(u)}),_.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Lc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new pe(W);return Vs(e).X({range:o},(u,l,c)=>{const[h,d,f]=u,p=On(d);h===this.userId&&r.isPrefixOf(p)?p.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Tr(e).get(s).next(o=>{if(o===null)throw L();j(o.userId===this.userId),r.push(Li(this.serializer,o))}))}),_.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return Qb(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),_.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return _.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Vs(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=On(s[1]);i.push(u)}else a.done()}).next(()=>{j(i.length===0)})})}containsKey(e,n){return Yb(e,this.userId,n)}xn(e){return Jb(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Yb(t,e,n){const r=Lc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Vs(t).X({range:s,Y:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Tr(t){return Ze(t,"mutations")}function Vs(t){return Ze(t,"documentMutations")}function Jb(t){return Ze(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new vs(0)}static Mn(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new vs(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>V.fromTimestamp(new we(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ms(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(j(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ms(e).X((o,a)=>{const u=za(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>_.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ms(e).X((r,i)=>{const s=za(i);n(s)})}$n(e){return tE(e).get("targetGlobalKey").next(n=>(j(n!==null),n))}On(e,n){return tE(e).put("targetGlobalKey",n)}Fn(e,n){return Ms(e).put(Hb(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=fs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ms(e).X({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=za(a);bl(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Pr(e);return n.forEach(o=>{const a=Ct(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),_.waitFor(i)}removeMatchingKeys(e,n,r){const i=Pr(e);return _.forEach(n,s=>{const o=Ct(s.path);return _.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Pr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Pr(e);let s=H();return i.X({range:r,Y:!0},(o,a,u)=>{const l=On(o[1]),c=new D(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Ct(n.path),i=IDBKeyRange.bound([r],[WC(r)],!1,!0);let s=0;return Pr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}le(e,n){return Ms(e).get(n).next(r=>r?za(r):null)}}function Ms(t){return Ze(t,"targets")}function tE(t){return Ze(t,"targetGlobal")}function Pr(t){return Ze(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE([t,e],[n,r]){const i=W(t,n);return i===0?W(e,r):i}class L4{constructor(e){this.Ln=e,this.buffer=new pe(nE),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();nE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class M4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){b("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ii(n)?b("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ei(n)}await this.Qn(3e5)})}}class F4{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return _.resolve(Ot.ct);const r=new L4(n);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(eE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eE):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),vg()<=Z.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function U4(t,e){return new F4(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(e,n){this.db=e,this.garbageCollector=U4(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return gc(e,r)}removeReference(e,n,r){return gc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return gc(e,n)}Xn(e,n){return function(r,i){let s=!1;return Jb(r).Z(o=>Yb(r,o,i).next(a=>(a&&(s=!0),_.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const u=this.Xn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,V.min()),Pr(e).delete([0,Ct(o.path)])))});i.push(u)}}).next(()=>_.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return gc(e,n)}Yn(e,n){const r=Pr(e);let i,s=Ot.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Ot.ct&&n(new D(On(i)),s),s=l,i=u):s=Ot.ct}).next(()=>{s!==Ot.ct&&n(new D(On(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function gc(t,e){return Pr(t).put(function(n,r){return{targetId:0,path:Ct(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.changes=new Si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return bi(e).put(r)}removeEntry(e,n,r){return bi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Mh(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=Ye.newInvalidDocument(n);return bi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Aa(n))},(i,s)=>{r=this.ts(n,s)}).next(()=>r)}es(e,n){let r={size:0,document:Ye.newInvalidDocument(n)};return bi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Aa(n))},(i,s)=>{r={document:this.ts(n,s),size:Uh(s)}}).next(()=>r)}getEntries(e,n){let r=Lt();return this.ns(e,n,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,n){let r=Lt(),i=new ce(D.comparator);return this.ns(e,n,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,Uh(o))}).next(()=>({documents:r,rs:i}))}ns(e,n,r){if(n.isEmpty())return _.resolve();let i=new pe(sE);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Aa(i.first()),Aa(i.last())),o=i.getIterator();let a=o.getNext();return bi(e).X({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=D.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&sE(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.G(Aa(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Mh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bi(e).j(IDBKeyRange.bound(o,a,!0)).next(u=>{let l=Lt();for(const c of u){const h=this.ts(D.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(Al(n,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=Lt();const o=iE(n,r),a=iE(n,Kt.max());return bi(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.ts(D.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new B4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return rE(e).get("remoteDocumentGlobalKey").next(n=>(j(!!n),n))}Zn(e,n){return rE(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=k4(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(V.min())))return r}return Ye.newInvalidDocument(e)}}function Zb(t){return new j4(t)}class B4 extends Xb{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new Si(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new pe((s,o)=>W(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(n.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=q1(this.os.serializer,o);i=i.add(s.path.popLast());const l=Uh(u);r+=l-a.size,n.push(this.os.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=q1(this.os.serializer,o.convertToNoDocument(V.min()));n.push(this.os.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.os.updateMetadata(e,r)),_.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function rE(t){return Ze(t,"remoteDocumentGlobal")}function bi(t){return Ze(t,"remoteDocumentsV14")}function Aa(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function iE(t,e){const n=e.documentKey.path.toArray();return[t,Mh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function sE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=W(n[s],r[s]),i)return i;return i=W(n.length,r.length),i||(i=W(n[n.length-2],r[r.length-2]),i||W(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&au(r.mutation,i,$t.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=$n();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ja();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$n();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Lt();const o=ou(),a=ou();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof wr)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),au(c.mutation,l,c.mutation.getFieldMask(),we.now())):o.set(l.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new z4(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ou();let i=new ce((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||$t.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||H()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=wb();c.forEach(d=>{if(!s.has(d)){const f=bb(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve($n());let a=-1,u=s;return o.next(l=>_.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,H())).next(c=>({batchId:a,changes:vb(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=ja();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ja();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const u=function(l,c){return new vr(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,Ye.newInvalidDocument(l)))});let o=ja();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&au(l.mutation,u,$t.empty(),we.now()),Al(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return _.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Pe(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:ow(r.bundledQuery),readTime:Pe(r.readTime)}}(n)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(){this.overlays=new ce(D.comparator),this.ls=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$n();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=$n(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ce((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=$n(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=$n(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return _.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nw(n,r));let s=this.ls.get(n);s===void 0&&(s=H(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.fs=new pe(We.ds),this.ws=new pe(We._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new We(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new We(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new D(new ee([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new D(new ee([])),r=new We(n,e),i=new We(n,e+1);let s=H();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return D.comparator(e.key,n.key)||W(e.As,n.As)}static _s(e,n){return W(e.As,n.As)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new pe(We.ds)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ew(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(W);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),_.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new We(new D(s),0);let a=new pe(W);return this.Rs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.As)),!0)},o),_.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){j(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return _.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new We(n,0),i=this.Rs.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.Ds=e,this.docs=new ce(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=Lt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ye.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Lt();const o=n.path,a=new D(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Hv(KC(c),r)<=0||(i.has(c.key)||Al(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,n,r,i){L()}Cs(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new K4(this)}getSize(e){return _.resolve(this.size)}}class K4 extends Xb{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e){this.persistence=e,this.xs=new Si(n=>fs(n),bl),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ns=0,this.ks=new lw,this.targetCount=0,this.Ms=vs.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),_.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Fn(n),_.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,n){this.$s={},this.overlays={},this.Os=new Ot(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Q4(this),this.indexManager=new D4,this.remoteDocumentCache=function(r){return new G4(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new Wb(n),this.qs=new q4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new H4(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new Y4(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return _.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class Y4 extends YC{constructor(e){super(),this.currentSequenceNumber=e}}class Yd{constructor(e){this.persistence=e,this.Qs=new lw,this.js=null}static zs(e){return new Yd(e)}get Ws(){if(this.js)return this.js;throw L()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),_.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ws,r=>{const i=D.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return _.or([()=>_.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e){this.serializer=e}O(e,n,r,i){const s=new zd("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",E1,{unique:!0}),a.createObjectStore("documentMutations")}(e),oE(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),oE(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:V.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",E1,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return _.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:OU});u.createIndex("collectionPathOverlayIndex",$U,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",LU,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:SU});u.createIndex("documentKeyIndex",TU),u.createIndex("collectionGroupIndex",kU)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:NU}).createIndex("sequenceNumberIndex",RU,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:PU}).createIndex("documentKeyIndex",DU,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=Uh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>_.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>_.forEach(a,u=>{j(u.userId===s.userId);const l=Li(this.serializer,u);return Qb(e,s.userId,l).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const u=new ee(o),l=function(c){return[0,Ct(c)]}(u);s.push(n.get(l).next(c=>c?_.resolve():(h=>n.put({targetId:0,path:Ct(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>_.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:AU});const r=n.store("collectionParents"),i=new uw,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Ct(u)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const u=new ee(o);return s(u.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,u],l)=>{const c=On(a);return s(c.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,i)=>{const s=za(i),o=Hb(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new D(ee.fromString(l.document.name).popFirst(5)):l.noDocument?D.fromSegments(l.noDocument.path):l.unknownDocument?D.fromSegments(l.unknownDocument.path):L()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>_.waitFor(i))}si(e,n){const r=n.store("mutations"),i=Zb(this.serializer),s=new tx(Yd.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:H();Li(this.serializer,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),_.forEach(a,(u,l)=>{const c=new Ge(l),h=Kd.de(this.serializer,c),d=s.getIndexManager(c),f=Qd.de(c,this.serializer,d,s.referenceDelegate);return new ex(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new _g(n,Ot.ct),u).next()})})}}function oE(t){t.createObjectStore("targetDocuments",{keyPath:bU}).createIndex("documentTargetsIndex",xU,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",CU,{unique:!0}),t.createObjectStore("targetGlobal")}const Mp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class cw{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=l,this.oi=c,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!cw.D())throw new k(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new V4(this,i),this.di=n+"main",this.serializer=new Wb(u),this.wi=new gn(this.di,this.ui,new J4(this.serializer)),this.Bs=new $4(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Zb(this.serializer),this.qs=new C4,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&Ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(E.FAILED_PRECONDITION,Mp);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Ot(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>yc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(Ii(e))return b("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return b("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Na(e).get("owner").next(n=>_.resolve(this.Ri(n)))}Pi(e){return yc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ze(n,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return _.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?_.resolve(!0):Na(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new k(E.FAILED_PRECONDITION,Mp);return!1}}return!(!this.networkEnabled||!this.inForeground)||yc(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&b("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new _g(e,Ot.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>yc(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Qd.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new O4(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Kd.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){b("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?FU:o===14?tb:o===13?eb:o===12?MU:o===11?ZC:void L();var o;let a;return this.wi.runTransaction(e,i,s,u=>(a=new _g(u,this.Os?this.Os.next():Ot.ct),n==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw Ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new k(E.FAILED_PRECONDITION,QC);return r(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Oi(e){return Na(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new k(E.FAILED_PRECONDITION,Mp)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Na(e).put("owner",n)}static D(){return gn.D()}Ai(e){const n=Na(e);return n.get("owner").next(r=>this.Ri(r)?(b("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):_.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ne(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;PD()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return b("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ne("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Ne("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Na(t){return Ze(t,"owner")}function yc(t){return Ze(t,"clientMetadata")}function hw(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dw(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(D1(n))return _.resolve(null);let r=Vt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lh(n,null,"F"),r=Vt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.ji(n,a);return this.zi(n,l,o,u.readTime)?this.Ki(e,Lh(n,null,"F")):this.Wi(e,l,n,u)}))})))}Gi(e,n,r,i){return D1(n)||i.isEqual(V.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(vg()<=Z.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xg(n)),this.Wi(e,o,n,GC(i,-1)))})}ji(e,n){let r=new pe(gb(e));return n.forEach((i,s)=>{Al(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return vg()<=Z.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",xg(n)),this.Ui.getDocumentsMatchingQuery(e,n,Kt.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ce(W),this.Yi=new Si(s=>fs(s),bl),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ex(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function rx(t,e,n,r){return new X4(t,e,n,r)}async function ix(t,e){const n=O(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=H();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function Z4(t,e){const n=O(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=_.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(p=>{const g=u.docVersions.get(f);j(g!==null),p.version.compareTo(g)<0&&(c.applyToRemoteDocument(p,u),p.isValidDocument()&&(p.setReadTime(u.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sx(t){const e=O(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function eV(t,e){const n=O(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(je.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(p,g,w){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,c)&&a.push(n.Bs.updateTargetData(s,f))});let u=Lt(),l=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(ox(s,o,e.documentUpdates).next(c=>{u=c.nr,l=c.sr})),!r.isEqual(V.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ji=i,s))}function ox(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Lt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(V.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{nr:o,sr:i}})}function tV(t,e){const n=O(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Oo(t,e){const n=O(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function $o(t,e,n){const r=O(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ii(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Vh(t,e,n){const r=O(t);let i=V.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=O(a),h=c.Yi.get(l);return h!==void 0?_.resolve(c.Ji.get(h)):c.Bs.getTargetData(u,l)}(r,o,Vt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:H())).next(a=>(lx(r,mb(e),a),{documents:a,ir:s})))}function ax(t,e){const n=O(t),r=O(n.Bs),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function ux(t,e){const n=O(t),r=n.Xi.get(e)||V.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Zi.getAllFromCollectionGroup(i,e,GC(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(lx(n,e,i),i))}function lx(t,e,n){let r=t.Xi.get(e)||V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}async function nV(t,e,n,r){const i=O(t);let s=H(),o=Lt();for(const l of n){const c=e.rr(l.metadata.name);l.document&&(s=s.add(c));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),u=await Oo(i,function(l){return Vt(ta(ee.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>ox(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Bs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Bs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.nr,c.sr)).next(()=>c.nr)))}async function rV(t,e,n=H()){const r=await Oo(t,Vt(ow(e.bundledQuery))),i=O(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Pe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(je.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,n,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function aE(t,e){return`firestore_clients_${t}_${e}`}function uE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Fp(t,e){return`firestore_targets_${t}_${e}`}class jh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static ar(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new jh(e,n,i.state,s):(Ne("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class uu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new k(r.error.code,r.error.message))),s?new uu(e,r.state,i):(Ne("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Xv();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=JC(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Bh(e,s):(Ne("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class fw{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new fw(n.clientId,n.onlineState):(Ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class $g{constructor(){this.activeTargetIds=Xv()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Up{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new ce(W),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=aE(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new $g),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(aE(this.persistenceKey,r));if(i){const s=Bh.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Fp(this.persistenceKey,e));if(r){const i=uu.ar(e,r);i&&(n=i.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Fp(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return b("SharedClientState","READ",e,n),n}setItem(e,n){b("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){b("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(b("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void Ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(i){let s=Ot.ct;if(i!=null)try{const o=JSON.parse(i);j(typeof o=="number"),s=o}catch(o){Ne("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Ot.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const i=new jh(this.currentUser,e,n,r),s=uE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const n=uE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const i=Fp(this.persistenceKey,e),s=new uu(e,n,r);this.setItem(i,s.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return Bh.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return jh.ar(new Ge(s),i,n)}Ur(e,n){const r=this.Ar.exec(e),i=Number(r[1]);return uu.ar(i,n)}br(e){return fw.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);b("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=Xv();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class cx{constructor(){this.Hr=new $g,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new $g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc=null;function Vp(){return vc===null?vc=268435456+Math.round(2147483648*Math.random()):vc++,"0x"+vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class aV extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Vp(),a=this.To(e,n);b("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const u={};return this.Eo(u,i,s),this.Ao(e,a,u,r).then(l=>(b("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw In("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ea,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=sV[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Vp();return new Promise((o,a)=>{const u=new rU;u.setWithCredentials(!0),u.listenOnce(eU.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $p.NO_ERROR:const c=u.getResponseJson();b(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case $p.TIMEOUT:b(pt,`RPC '${e}' ${s} timed out`),a(new k(E.DEADLINE_EXCEEDED,"Request time out"));break;case $p.HTTP_ERROR:const h=u.getStatus();if(b(pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(w)>=0?w:E.UNKNOWN}(f.status);a(new k(p,f.message))}else a(new k(E.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new k(E.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{b(pt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);b(pt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}Ro(e,n,r){const i=Vp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XF(),a=ZF(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new nU({})),this.Eo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");b(pt,`Creating RPC '${e}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let d=!1,f=!1;const p=new oV({ro:w=>{f?b(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(b(pt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),b(pt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),g=(w,y,m)=>{w.listen(y,v=>{try{m(v)}catch(I){setTimeout(()=>{throw I},0)}})};return g(h,hc.EventType.OPEN,()=>{f||b(pt,`RPC '${e}' stream ${i} transport opened.`)}),g(h,hc.EventType.CLOSE,()=>{f||(f=!0,b(pt,`RPC '${e}' stream ${i} transport closed`),p.wo())}),g(h,hc.EventType.ERROR,w=>{f||(f=!0,In(pt,`RPC '${e}' stream ${i} transport errored:`,w),p.wo(new k(E.UNAVAILABLE,"The operation could not be completed")))}),g(h,hc.EventType.MESSAGE,w=>{var y;if(!f){const m=w.data[0];j(!!m);const v=m,I=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(I){b(pt,`RPC '${e}' stream ${i} received error:`,I);const C=I.status;let A=function(M){const J=Oe[M];if(J!==void 0)return Nb(J)}(C),P=I.message;A===void 0&&(A=E.INTERNAL,P="Unknown error status: "+C+" with message "+I.message),f=!0,p.wo(new k(A,P)),h.close()}else b(pt,`RPC '${e}' stream ${i} received:`,m),p._o(m)}}),g(a,tU.STAT_EVENT,w=>{w.stat===y1.PROXY?b(pt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===y1.NOPROXY&&b(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(){return typeof window<"u"?window:null}function jc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t){return new m4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r,i,s,o,a,u){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new pw(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Ne(n.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new k(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uV extends dx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=v4(this.serializer,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?Pe(s.readTime):V.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Ju(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Oh(a)?{documents:Ub(i,a)}:{query:Vb(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Ob(i,s.resumeToken);const u=Ag(i,s.expectedCount);u!==null&&(o.expectedCount=u)}else if(s.snapshotVersion.compareTo(V.min())>0){o.readTime=Do(i,s.snapshotVersion.toTimestamp());const u=Ag(i,s.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,e);const r=_4(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Ju(this.serializer),n.removeTarget=e,this.Wo(n)}}class lV extends dx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=w4(e.writeResults,e.commitTime),r=Pe(e.commitTime);return this.listener.cu(r,n)}return j(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ju(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Xu(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(E.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(E.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class hV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ne(n),this.mu=!1):b("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=O(a);u.vu.add(4),await ia(u),u.bu.set("Unknown"),u.vu.delete(4),await Ol(u)}(this))})}),this.bu=new hV(r,i)}}async function Ol(t){if(Ti(t))for(const e of t.Ru)await e(!0)}async function ia(t){for(const e of t.Ru)await e(!1)}function Jd(t,e){const n=O(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),yw(n)?gw(n):oa(n).Ko()&&mw(n,e))}function Zu(t,e){const n=O(t),r=oa(n);n.Au.delete(e),r.Ko()&&fx(n,e),n.Au.size===0&&(r.Ko()?r.jo():Ti(n)&&n.bu.set("Unknown"))}function mw(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(V.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oa(t).su(e)}function fx(t,e){t.Vu.qt(e),oa(t).iu(e)}function gw(t){t.Vu=new h4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),oa(t).start(),t.bu.gu()}function yw(t){return Ti(t)&&!oa(t).Uo()&&t.Au.size>0}function Ti(t){return O(t).vu.size===0}function px(t){t.Vu=void 0}async function fV(t){t.Au.forEach((e,n)=>{mw(t,e)})}async function pV(t,e){px(t),yw(t)?(t.bu.Iu(e),gw(t)):t.bu.set("Unknown")}async function mV(t,e,n){if(t.bu.set("Online"),e instanceof Db&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zh(t,r)}else if(e instanceof Vc?t.Vu.Ht(e):e instanceof Pb?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(V.min()))try{const r=await sx(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Au.get(u);l&&i.Au.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,u)=>{const l=i.Au.get(a);if(!l)return;i.Au.set(a,l.withResumeToken(je.EMPTY_BYTE_STRING,l.snapshotVersion)),fx(i,a);const c=new nr(l.target,a,u,l.sequenceNumber);mw(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await zh(t,r)}}async function zh(t,e,n){if(!Ii(e))throw e;t.vu.add(1),await ia(t),t.bu.set("Offline"),n||(n=()=>sx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Ol(t)})}function mx(t,e){return e().catch(n=>zh(t,n,e))}async function sa(t){const e=O(t),n=li(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;gV(e);)try{const i=await tV(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,yV(e,i)}catch(i){await zh(e,i)}gx(e)&&yx(e)}function gV(t){return Ti(t)&&t.Eu.length<10}function yV(t,e){t.Eu.push(e);const n=li(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function gx(t){return Ti(t)&&!li(t).Uo()&&t.Eu.length>0}function yx(t){li(t).start()}async function vV(t){li(t).hu()}async function wV(t){const e=li(t);for(const n of t.Eu)e.uu(n.mutations)}async function _V(t,e,n){const r=t.Eu.shift(),i=tw.from(r,e,n);await mx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sa(t)}async function EV(t,e){e&&li(t).ou&&await async function(n,r){if(i=r.code,Ab(i)&&i!==E.ABORTED){const s=n.Eu.shift();li(n).Qo(),await mx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await sa(n)}var i}(t,e),gx(t)&&yx(t)}async function cE(t,e){const n=O(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.vu.add(3),await ia(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Ol(n)}async function Lg(t,e){const n=O(t);e?(n.vu.delete(2),await Ol(n)):e||(n.vu.add(2),await ia(n),n.bu.set("Unknown"))}function oa(t){return t.Su||(t.Su=function(e,n,r){const i=O(e);return i.fu(),new uV(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:fV.bind(null,t),ao:pV.bind(null,t),nu:mV.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),yw(t)?gw(t):t.bu.set("Unknown")):(await t.Su.stop(),px(t))})),t.Su}function li(t){return t.Du||(t.Du=function(e,n,r){const i=O(e);return i.fu(),new lV(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:vV.bind(null,t),ao:EV.bind(null,t),au:wV.bind(null,t),cu:_V.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await sa(t)):(await t.Du.stop(),t.Eu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new vw(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aa(t,e){if(Ne("AsyncQueue",`${e}: ${t}`),Ii(t))return new k(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=ja(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new mo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.Cu=new ce(D.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):L():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Lo{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Lo(e,n,mo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(){this.Nu=void 0,this.listeners=[]}}class SV{constructor(){this.queries=new Si(e=>pb(e),xl),this.onlineState="Unknown",this.ku=new Set}}async function ww(t,e){const n=O(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new IV),i)try{s.Nu=await n.onListen(r)}catch(o){const a=aa(o,`Initialization of query '${xg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Ew(n)}async function _w(t,e){const n=O(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function TV(t,e){const n=O(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Ew(n)}function kV(t,e,n){const r=O(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ew(t){t.ku.forEach(e=>{e.next()})}class Iw{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.serializer=e}rr(e){return Vn(this.serializer,e)}ur(e){return e.metadata.exists?Fb(this.serializer,e.document,!1):Ye.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Pe(e)}}class bV{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=vx(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=ee.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new dE(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||H()).add(s);n.set(o,a)}}return n}async complete(){const e=await nV(this.localStore,new dE(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await rV(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function vx(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.key=e}}class _x{constructor(e){this.key=e}}class Ex{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=H(),this.mutatedKeys=H(),this.tc=gb(e),this.ec=new mo(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new hE,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Al(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(r.track({type:3,doc:f}),w=!0):this.rc(d,f)||(r.track({type:2,doc:f}),w=!0,(u&&this.tc(f,u)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(u||l)&&(a=!0)),w&&(f?(o=o.add(f),s=g?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((l,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return f(h)-f(d)}(l.type,c.type)||this.tc(l.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,s.length!==0||u?{snapshot:new Lo(this.query,e.ec,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new hE,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=H(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new _x(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new wx(r))}),n}hc(e){this.Yu=e.ir,this.Zu=H();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Lo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class xV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AV{constructor(e){this.key=e,this.fc=!1}}class NV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Si(a=>pb(a),xl),this._c=new Map,this.mc=new Set,this.gc=new ce(D.comparator),this.yc=new Map,this.Ic=new lw,this.Tc={},this.Ec=new Map,this.Ac=vs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function RV(t,e){const n=bw(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await Oo(n.localStore,Vt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Sw(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Jd(n.remoteStore,o)}return i}async function Sw(t,e,n,r,i){t.Rc=(h,d,f)=>async function(p,g,w,y){let m=g.view.sc(w);m.zi&&(m=await Vh(p.localStore,g.query,!1).then(({documents:C})=>g.view.sc(C,m)));const v=y&&y.targetChanges.get(g.targetId),I=g.view.applyChanges(m,p.isPrimaryClient,v);return Mg(p,g.targetId,I.cc),I.snapshot}(t,h,d,f);const s=await Vh(t.localStore,e,!0),o=new Ex(e,s.ir),a=o.sc(s.documents),u=Pl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Mg(t,n,l.cc);const c=new xV(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function PV(t,e){const n=O(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!xl(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $o(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Zu(n.remoteStore,r.targetId),Mo(n,r.targetId)}).catch(Ei)):(Mo(n,r.targetId),await $o(n.localStore,r.targetId,!0))}async function DV(t,e,n){const r=xw(t);try{const i=await function(s,o){const a=O(s),u=we.now(),l=o.reduce((d,f)=>d.add(f.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Lt(),p=H();return a.Zi.getEntries(d,l).next(g=>{f=g,f.forEach((w,y)=>{y.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(g=>{c=g;const w=[];for(const y of o){const m=u4(y,c.get(y.key).overlayedDocument);m!=null&&w.push(new wr(y.key,m,sb(m.value.mapValue),ve.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,w,o)}).next(g=>{h=g;const w=g.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(d,g.batchId,w)})}).then(()=>({batchId:h.batchId,changes:vb(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Tc[s.currentUser.toKey()];u||(u=new ce(W)),u=u.insert(o,a),s.Tc[s.currentUser.toKey()]=u}(r,i.batchId,n),await _r(r,i.changes),await sa(r.remoteStore)}catch(i){const s=aa(i,"Failed to persist write");n.reject(s)}}async function Ix(t,e){const n=O(t);try{const r=await eV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?j(o.fc):i.removedDocuments.size>0&&(j(o.fc),o.fc=!1))}),await _r(n,r,e)}catch(r){await Ei(r)}}function fE(t,e,n){const r=O(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=O(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Mu(o)&&(u=!0)}),u&&Ew(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OV(t,e,n){const r=O(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ce(D.comparator);o=o.insert(s,Ye.newNoDocument(s,V.min()));const a=H().add(s),u=new Rl(V.min(),new Map,new ce(W),o,a);await Ix(r,u),r.gc=r.gc.remove(s),r.yc.delete(e),Cw(r)}else await $o(r.localStore,e,!1).then(()=>Mo(r,e,n)).catch(Ei)}async function $V(t,e){const n=O(t),r=e.batch.batchId;try{const i=await Z4(n.localStore,e);kw(n,r,null),Tw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _r(n,i)}catch(i){await Ei(i)}}async function LV(t,e,n){const r=O(t);try{const i=await function(s,o){const a=O(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(j(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);kw(r,e,n),Tw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _r(r,i)}catch(i){await Ei(i)}}async function MV(t,e){const n=O(t);Ti(n.remoteStore)||b("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=O(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ec.get(r)||[];i.push(e),n.Ec.set(r,i)}catch(r){const i=aa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Tw(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function kw(t,e,n){const r=O(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Mo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||Sx(t,r)})}function Sx(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Zu(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Cw(t))}function Mg(t,e,n){for(const r of n)r instanceof wx?(t.Ic.addReference(r.key,e),FV(t,r)):r instanceof _x?(b("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Sx(t,r.key)):L()}function FV(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(b("SyncEngine","New document in limbo: "+n),t.mc.add(r),Cw(t))}function Cw(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new D(ee.fromString(e)),r=t.Ac.next();t.yc.set(r,new AV(n)),t.gc=t.gc.insert(n,r),Jd(t.remoteStore,new nr(Vt(ta(n.path)),r,"TargetPurposeLimboResolution",Ot.ct))}}async function _r(t,e,n){const r=O(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,u)=>{o.push(r.Rc(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=dw.Li(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,u){const l=O(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(u,h=>_.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>_.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ii(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,p)}}}(r.localStore,s))}async function UV(t,e){const n=O(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await ix(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new k(E.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _r(n,r.er)}}function VV(t,e){const n=O(t),r=n.yc.get(e);if(r&&r.fc)return H().add(r.key);{let i=H();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function jV(t,e){const n=O(t),r=await Vh(n.localStore,e.query,!0),i=e.view.hc(r);return n.isPrimaryClient&&Mg(n,e.targetId,i.cc),i}async function BV(t,e){const n=O(t);return ux(n.localStore,e).then(r=>_r(n,r))}async function zV(t,e,n,r){const i=O(t),s=await function(o,a){const u=O(o),l=O(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Sn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):_.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await sa(i.remoteStore):n==="acknowledged"||n==="rejected"?(kw(i,e,r||null),Tw(i,e),function(o,a){O(O(o).mutationQueue).Cn(a)}(i.localStore,e)):L(),await _r(i,s)):b("SyncEngine","Cannot apply mutation batch with id: "+e)}async function qV(t,e){const n=O(t);if(bw(n),xw(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await pE(n,r.toArray());n.vc=!0,await Lg(n.remoteStore,!0);for(const s of i)Jd(n.remoteStore,s)}else if(e===!1&&n.vc!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Mo(n,o),$o(n.localStore,o,!0))),Zu(n.remoteStore,o)}),await i,await pE(n,r),function(s){const o=O(s);o.yc.forEach((a,u)=>{Zu(o.remoteStore,u)}),o.Ic.Ts(),o.yc=new Map,o.gc=new ce(D.comparator)}(n),n.vc=!1,await Lg(n.remoteStore,!1)}}async function pE(t,e,n){const r=O(t),i=[],s=[];for(const o of e){let a;const u=r._c.get(o);if(u&&u.length!==0){a=await Oo(r.localStore,Vt(u[0]));for(const l of u){const c=r.wc.get(l),h=await jV(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await ax(r.localStore,o);a=await Oo(r.localStore,l),await Sw(r,Tx(l),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function Tx(t){return fb(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function WV(t){const e=O(t);return O(O(e.localStore).persistence).$i()}async function HV(t,e,n,r){const i=O(t);if(i.vc)return void b("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await ux(i.localStore,mb(s[0])),a=Rl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",je.EMPTY_BYTE_STRING);await _r(i,o,a);break}case"rejected":await $o(i.localStore,e,!0),Mo(i,e,r);break;default:L()}}async function GV(t,e,n){const r=bw(t);if(r.vc){for(const i of e){if(r._c.has(i)){b("SyncEngine","Adding an already active target "+i);continue}const s=await ax(r.localStore,i),o=await Oo(r.localStore,s);await Sw(r,Tx(s),o.targetId,!1,o.resumeToken),Jd(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await $o(r.localStore,i,!1).then(()=>{Zu(r.remoteStore,i),Mo(r,i)}).catch(Ei)}}function bw(t){const e=O(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ix.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OV.bind(null,e),e.dc.nu=TV.bind(null,e.eventManager),e.dc.Pc=kV.bind(null,e.eventManager),e}function xw(t){const e=O(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$V.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LV.bind(null,e),e}function KV(t,e,n){const r=O(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=O(h),p=Pe(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",g=>f.qs.getBundleMetadata(g,d.id)).then(g=>!!g&&g.createTime.compareTo(p)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(vx(a));const u=new bV(a,i.localStore,s.serializer);let l=await s.bc();for(;l;){const h=await u.zu(l);h&&o._updateProgress(h),l=await s.bc()}const c=await u.complete();return await _r(i,c.Ju,void 0),await function(h,d){const f=O(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.qs.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Hu)}catch(a){return In("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Fg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return rx(this.persistence,new nx,e.initialUser,this.serializer)}createPersistence(e){return new tx(Yd.zs,this.serializer)}createSharedClientState(e){return new cx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kx extends Fg{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await xw(this.Vc.syncEngine),await sa(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return rx(this.persistence,new nx,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new M4(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new _U(n,this.persistence);return new wU(e.asyncQueue,r)}createPersistence(e){const n=hw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new cw(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,hx(),jc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new cx}}class QV extends kx{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof Up&&(this.sharedClientState.syncEngine={jr:zV.bind(null,n),zr:HV.bind(null,n),Wr:GV.bind(null,n),$i:WV.bind(null,n),Qr:BV.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await qV(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=hx();if(!Up.D(n))throw new k(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=hw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Up(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Aw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UV.bind(null,this.syncEngine),await Lg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new SV}createDatastore(e){const n=Dl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new aV(i));var i;return function(s,o,a,u){return new cV(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>fE(this.syncEngine,a,0),o=lE.D()?new lE:new iV,new dV(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new NV(r,i,s,o,a,u);return l&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=O(e);b("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ia(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ne("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new Qe,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const i=await this.$c(r);return new CV(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new k(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=O(r),o=Ju(s.serializer)+"/documents",a={documents:i.map(h=>Yu(s.serializer,h))},u=await s.vo("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=y4(s.serializer,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());j(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ra(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=D.fromPath(r);this.mutations.push(new Zv(i,this.precondition(i)))}),await async function(n,r){const i=O(n),s=Ju(i.serializer)+"/documents",o={writes:r.map(a=>Xu(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw L();n=V.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new k(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(V.min())?ve.exists(!1):ve.updateTime(n):ve.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(V.min()))throw new k(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ve.updateTime(n)}return ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new pw(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new JV(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!Cl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!Ab(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=qC.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=aa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ix(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ug(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Nw(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>cE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>cE(e.remoteStore,s)),t._onlineComponents=e}function Cx(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Nw(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Cx(n))throw n;In("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new Fg)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Bc(t,new Fg);return t._offlineComponents}async function Zd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Ug(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Ug(t,new Aw))),t._onlineComponents}function bx(t){return Nw(t).then(e=>e.persistence)}function Rw(t){return Nw(t).then(e=>e.localStore)}function xx(t){return Zd(t).then(e=>e.remoteStore)}function Pw(t){return Zd(t).then(e=>e.syncEngine)}function ej(t){return Zd(t).then(e=>e.datastore)}async function Fo(t){const e=await Zd(t),n=e.eventManager;return n.onListen=RV.bind(null,e.syncEngine),n.onUnlisten=PV.bind(null,e.syncEngine),n}function tj(t){return t.asyncQueue.enqueue(async()=>{const e=await bx(t),n=await xx(t);return e.setNetworkEnabled(!0),function(r){const i=O(r);return i.vu.delete(0),Ol(i)}(n)})}function nj(t){return t.asyncQueue.enqueue(async()=>{const e=await bx(t),n=await xx(t);return e.setNetworkEnabled(!1),async function(r){const i=O(r);i.vu.add(0),await ia(i),i.bu.set("Offline")}(n)})}function rj(t,e){const n=new Qe;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=O(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new k(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=aa(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Rw(t),e,n)),n.promise}function Ax(t,e,n={}){const r=new Qe;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Xd({next:h=>{s.enqueueAndForget(()=>_w(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new k(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new k(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Iw(ta(o.path),l,{includeMetadataChanges:!0,Ku:!0});return ww(i,c)}(await Fo(t),t.asyncQueue,e,n,r)),r.promise}function ij(t,e){const n=new Qe;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Vh(r,i,!0),a=new Ex(i,o.ir),u=a.sc(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=aa(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Rw(t),e,n)),n.promise}function Nx(t,e,n={}){const r=new Qe;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Xd({next:h=>{s.enqueueAndForget(()=>_w(i,c)),h.fromCache&&a.source==="server"?u.reject(new k(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Iw(o,l,{includeMetadataChanges:!0,Ku:!0});return ww(i,c)}(await Fo(t),t.asyncQueue,e,n,r)),r.promise}function sj(t,e){const n=new Xd(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){O(r).ku.add(i),i.next()}(await Fo(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){O(r).ku.delete(i)}(await Fo(t),n))}}function oj(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?Rb().encode(s):s,function(u,l){return new YV(u,l)}(function(u,l){if(u instanceof Uint8Array)return mE(u,l);if(u instanceof ArrayBuffer)return mE(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Dl(e));t.asyncQueue.enqueueAndForget(async()=>{KV(await Pw(t),i,r)})}function aj(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=O(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Rw(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t,e,n){if(!n)throw new k(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Px(t,e,n,r){if(e===!0&&r===!0)throw new k(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yE(t){if(!D.isDocumentKey(t))throw new k(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vE(t){if(D.isDocumentKey(t))throw new k(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ef(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function re(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ef(t);throw new k(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Dx(t,e){if(e<=0)throw new k(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new k(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Px("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new k(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new k(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new k(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class $l{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new aU;switch(n.type){case"firstParty":return new hU(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gE.get(e);n&&(b("ComponentProvider","Removing Datastore"),gE.delete(e),n.terminate())}(this),Promise.resolve()}}function uj(t,e,n,r={}){var i;const s=(t=re(t,$l))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&In("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Ge.MOCK_USER;else{a=AD(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new k(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ge(l)}t._authCredentials=new uU(new zC(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}}class ht{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ht(this.firestore,e,this._query)}}class jn extends ht{constructor(e,n,r){super(e,n,ta(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new D(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function Ox(t,e,...n){if(t=B(t),Dw("collection","path",e),t instanceof $l){const r=ee.fromString(e,...n);return vE(r),new jn(t,null,r)}{if(!(t instanceof me||t instanceof jn))throw new k(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return vE(r),new jn(t.firestore,null,r)}}function lj(t,e){if(t=re(t,$l),Dw("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ht(t,null,function(n){return new vr(ee.emptyPath(),n)}(e))}function qh(t,e,...n){if(t=B(t),arguments.length===1&&(e=qC.A()),Dw("doc","path",e),t instanceof $l){const r=ee.fromString(e,...n);return yE(r),new me(t,null,new D(r))}{if(!(t instanceof me||t instanceof jn))throw new k(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return yE(r),new me(t.firestore,t instanceof jn?t.converter:null,new D(r))}}function $x(t,e){return t=B(t),e=B(e),(t instanceof me||t instanceof jn)&&(e instanceof me||e instanceof jn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Lx(t,e){return t=B(t),e=B(e),t instanceof ht&&e instanceof ht&&t.firestore===e.firestore&&xl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cj{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new pw(this,"async_queue_retry"),this.Xc=()=>{const n=jc();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=jc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Qe;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ii(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ne("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=vw.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&L()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Vg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class hj{constructor(){this._progressObserver={},this._taskCompletionResolver=new Qe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dj=-1;class be extends $l{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new cj,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mx(this),this._firestoreClient.terminate()}}function et(t){return t._firestoreClient||Mx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mx(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,u,l){return new jU(o,a,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Rx(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new ZV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function fj(t,e){Ux(t=re(t,be));const n=et(t);if(n._uninitializedComponentsProvider)throw new k(E.FAILED_PRECONDITION,"SDK cache is already specified.");In("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Aw;return Fx(n,i,new kx(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function pj(t){Ux(t=re(t,be));const e=et(t);if(e._uninitializedComponentsProvider)throw new k(E.FAILED_PRECONDITION,"SDK cache is already specified.");In("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Aw;return Fx(e,r,new QV(r,n.cacheSizeBytes))}function Fx(t,e,n){const r=new Qe;return t.asyncQueue.enqueue(async()=>{try{await Bc(t,n),await Ug(t,e),r.resolve()}catch(i){const s=i;if(!Cx(s))throw s;In("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function mj(t){if(t._initialized&&!t._terminated)throw new k(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Qe;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!gn.D())return Promise.resolve();const r=n+"main";await gn.delete(r)}(hw(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function gj(t){return function(e){const n=new Qe;return e.asyncQueue.enqueueAndForget(async()=>MV(await Pw(e),n)),n.promise}(et(t=re(t,be)))}function yj(t){return tj(et(t=re(t,be)))}function vj(t){return nj(et(t=re(t,be)))}function wj(t,e){const n=et(t=re(t,be)),r=new hj;return oj(n,t._databaseId,e,r),r}function _j(t,e){return aj(et(t=re(t,be)),e).then(n=>n?new ht(t,null,n.query):null)}function Ux(t){if(t._initialized||t._terminated)throw new k(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(je.fromBase64String(e))}catch(n){throw new k(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ej=/^__.*__$/;class Ij{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class Vx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class nf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Wh(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(jx(this.ca)&&Ej.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Sj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dl(e)}ya(e,n,r,i=!1){return new nf({ca:e,methodName:n,ga:r,path:Re.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ns(t){const e=t._freezeSettings(),n=Dl(t._databaseId);return new Sj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rf(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Mw("Data must be an object, but it was:",o,r);const a=qx(r,o);let u,l;if(s.merge)u=new $t(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=jg(e,h,n);if(!o.contains(d))throw new k(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Hx(c,d)||c.push(d)}u=new $t(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Ij(new Pt(a),u,l)}class Ll extends As{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ll}}function Bx(t,e,n){return new nf({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ow extends As{_toFieldTransform(e){return new Nl(e.path,new Ro)}isEqual(e){return e instanceof Ow}}class Tj extends As{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=Bx(this,e,!0),r=this.pa.map(s=>Rs(s,n)),i=new ps(r);return new Nl(e.path,i)}isEqual(e){return this===e}}class kj extends As{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=Bx(this,e,!0),r=this.pa.map(s=>Rs(s,n)),i=new ms(r);return new Nl(e.path,i)}isEqual(e){return this===e}}class Cj extends As{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new Po(e.serializer,Ib(e.serializer,this.Ia));return new Nl(e.path,n)}isEqual(e){return this===e}}function $w(t,e,n,r){const i=t.ya(1,e,n);Mw("Data must be an object, but it was:",i,r);const s=[],o=Pt.empty();xs(r,(u,l)=>{const c=Fw(e,u,n);l=B(l);const h=i.da(c);if(l instanceof Ll)s.push(c);else{const d=Rs(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new $t(s);return new Vx(o,a,i.fieldTransforms)}function Lw(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[jg(e,r,n)],u=[i];if(s.length%2!=0)throw new k(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(jg(e,s[d])),u.push(s[d+1]);const l=[],c=Pt.empty();for(let d=a.length-1;d>=0;--d)if(!Hx(l,a[d])){const f=a[d];let p=u[d];p=B(p);const g=o.da(f);if(p instanceof Ll)l.push(f);else{const w=Rs(p,g);w!=null&&(l.push(f),c.set(f,w))}}const h=new $t(l);return new Vx(c,h,o.fieldTransforms)}function zx(t,e,n,r=!1){return Rs(n,t.ya(r?4:3,e))}function Rs(t,e){if(Wx(t=B(t)))return Mw("Unsupported field value:",e,t),qx(t,e);if(t instanceof As)return function(n,r){if(!jx(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Rs(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=B(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ib(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=we.fromDate(n);return{timestampValue:Do(r.serializer,i)}}if(n instanceof we){const i=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Do(r.serializer,i)}}if(n instanceof tf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hn)return{bytesValue:Ob(r.serializer,n._byteString)};if(n instanceof me){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sw(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${ef(n)}`)}(t,e)}function qx(t,e){const n={};return nb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,i)=>{const s=Rs(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Wx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof tf||t instanceof Hn||t instanceof me||t instanceof As)}function Mw(t,e,n){if(!Wx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ef(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function jg(t,e,n){if((e=B(e))instanceof ci)return e._internalPath;if(typeof e=="string")return Fw(t,e);throw Wh("Field path arguments must be of type string or ",t,!1,void 0,n)}const bj=new RegExp("[~\\*/\\[\\]]");function Fw(t,e,n){if(e.search(bj)>=0)throw Wh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ci(...e.split("."))._internalPath}catch{throw Wh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new k(E.INVALID_ARGUMENT,a+t+u)}function Hx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xj extends el{data(){return super.data()}}function sf(t,e){return typeof e=="string"?Fw(t,e):e instanceof ci?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uw{}class Ml extends Uw{}function kr(t,e,...n){let r=[];e instanceof Uw&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Vw).length,o=i.filter(a=>a instanceof of).length;if(s>1||s>0&&o>0)throw new k(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class of extends Ml{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new of(e,n,r)}_apply(e){const n=this._parse(e);return Qx(e._query,n),new ht(e.firestore,e.converter,bg(e._query,n))}_parse(e){const n=Ns(e.firestore);return function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new k(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){EE(c,l);const d=[];for(const f of c)d.push(_E(a,i,f));h={arrayValue:{values:d}}}else h=_E(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||EE(c,l),h=zx(o,s,c,l==="in"||l==="not-in");return Q.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Aj(t,e,n){const r=e,i=sf("where",t);return of._create(i,r,n)}class Vw extends Uw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ie.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Qx(s,a),s=bg(s,a)}(e._query,n),new ht(e.firestore,e.converter,bg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jw extends Ml{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jw(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new k(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new k(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new po(i,s);return function(a,u){if(Yv(a)===null){const l=Wd(a);l!==null&&Yx(a,l,u.field)}}(r,o),o}(e._query,this._field,this._direction);return new ht(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new vr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Nj(t,e="asc"){const n=e,r=sf("orderBy",t);return jw._create(r,n)}class af extends Ml{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new af(e,n,r)}_apply(e){return new ht(e.firestore,e.converter,Lh(e._query,this._limit,this._limitType))}}function Rj(t){return Dx("limit",t),af._create("limit",t,"F")}function Pj(t){return Dx("limitToLast",t),af._create("limitToLast",t,"L")}class uf extends Ml{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new uf(e,n,r)}_apply(e){const n=Kx(e,this.type,this._docOrFields,this._inclusive);return new ht(e.firestore,e.converter,function(r,i){return new vr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function Dj(...t){return uf._create("startAt",t,!0)}function Oj(...t){return uf._create("startAfter",t,!1)}class lf extends Ml{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new lf(e,n,r)}_apply(e){const n=Kx(e,this.type,this._docOrFields,this._inclusive);return new ht(e.firestore,e.converter,function(r,i){return new vr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function $j(...t){return lf._create("endBefore",t,!1)}function Lj(...t){return lf._create("endAt",t,!0)}function Kx(t,e,n,r){if(n[0]=B(n[0]),n[0]instanceof el)return function(i,s,o,a,u){if(!a)throw new k(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of ts(i))if(c.field.isKeyField())l.push(ds(s,a.key));else{const h=a.data.field(c.field);if(qd(h))throw new k(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new k(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new ui(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ns(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new k(E.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const p=l[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new k(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof p}`);if(!Jv(s)&&p.indexOf("/")!==-1)throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${p}' contains a slash.`);const g=s.path.child(ee.fromString(p));if(!D.isDocumentKey(g))throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const w=new D(g);d.push(ds(o,w))}else{const g=zx(a,u,p);d.push(g)}}return new ui(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function _E(t,e,n){if(typeof(n=B(n))=="string"){if(n==="")throw new k(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jv(e)&&n.indexOf("/")!==-1)throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ee.fromString(n));if(!D.isDocumentKey(r))throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ds(t,new D(r))}if(n instanceof me)return ds(t,n._key);throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ef(n)}.`)}function EE(t,e){if(!Array.isArray(t)||t.length===0)throw new k(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qx(t,e){if(e.isInequality()){const r=Wd(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new k(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Yv(t);s!==null&&Yx(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new k(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Yx(t,e,n){if(!n.isEqual(e))throw new k(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Bw{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new tf(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gu(e));default:return null}}convertTimestamp(e){const n=ii(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ee.fromString(e);j(qb(r));const i=new oi(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||Ne(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Mj extends Bw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fr extends el{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lu extends fr{data(e={}){return super.data(e)}}class hi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Hi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lu(this._firestore,this._userDataWriter,r.key,r,new Hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new lu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Hi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new lu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Hi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:Fj(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}function Jx(t,e){return t instanceof fr&&e instanceof fr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof hi&&e instanceof hi&&t._firestore===e._firestore&&Lx(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uj(t){t=re(t,me);const e=re(t.firestore,be);return Ax(et(e),t._key).then(n=>zw(e,t,n))}class Ps extends Bw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,n)}}function Vj(t){t=re(t,me);const e=re(t.firestore,be),n=et(e),r=new Ps(e);return rj(n,t._key).then(i=>new fr(e,r,t._key,i,new Hi(i!==null&&i.hasLocalMutations,!0),t.converter))}function jj(t){t=re(t,me);const e=re(t.firestore,be);return Ax(et(e),t._key,{source:"server"}).then(n=>zw(e,t,n))}function Bj(t){t=re(t,ht);const e=re(t.firestore,be),n=et(e),r=new Ps(e);return Gx(t._query),Nx(n,t._query).then(i=>new hi(e,r,t,i))}function zj(t){t=re(t,ht);const e=re(t.firestore,be),n=et(e),r=new Ps(e);return ij(n,t._query).then(i=>new hi(e,r,t,i))}function qj(t){t=re(t,ht);const e=re(t.firestore,be),n=et(e),r=new Ps(e);return Nx(n,t._query,{source:"server"}).then(i=>new hi(e,r,t,i))}function IE(t,e,n){t=re(t,me);const r=re(t.firestore,be),i=cf(t.converter,e,n);return Fl(r,[rf(Ns(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ve.none())])}function SE(t,e,n,...r){t=re(t,me);const i=re(t.firestore,be),s=Ns(i);let o;return o=typeof(e=B(e))=="string"||e instanceof ci?Lw(s,"updateDoc",t._key,e,n,r):$w(s,"updateDoc",t._key,e),Fl(i,[o.toMutation(t._key,ve.exists(!0))])}function Wj(t){return Fl(re(t.firestore,be),[new ra(t._key,ve.none())])}function Hj(t,e){const n=re(t.firestore,be),r=qh(t),i=cf(t.converter,e);return Fl(n,[rf(Ns(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ve.exists(!1))]).then(()=>r)}function Xx(t,...e){var n,r,i;t=B(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Vg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof me)l=re(t.firestore,be),c=ta(t._key.path),u={next:h=>{e[o]&&e[o](zw(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=re(t,ht);l=re(h.firestore,be),c=h._query;const d=new Ps(l);u={next:f=>{e[o]&&e[o](new hi(l,d,h,f))},error:e[o+1],complete:e[o+2]},Gx(t._query)}return function(h,d,f,p){const g=new Xd(p),w=new Iw(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>ww(await Fo(h),w)),()=>{g.Dc(),h.asyncQueue.enqueueAndForget(async()=>_w(await Fo(h),w))}}(et(l),c,a,u)}function Gj(t,e){return sj(et(t=re(t,be)),Vg(e)?e:{next:e})}function Fl(t,e){return function(n,r){const i=new Qe;return n.asyncQueue.enqueueAndForget(async()=>DV(await Pw(n),r,i)),i.promise}(et(t),e)}function zw(t,e,n){const r=n.docs.get(e._key),i=new Ps(t);return new fr(t,i,e._key,r,new Hi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kj={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ns(e)}set(e,n,r){this._verifyNotCommitted();const i=Dr(e,this._firestore),s=cf(i.converter,n,r),o=rf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ve.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Dr(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof ci?Lw(this._dataReader,"WriteBatch.update",s._key,n,r,i):$w(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Dr(e,this._firestore);return this._mutations=this._mutations.concat(new ra(n._key,ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Dr(t,e){if((t=B(t)).firestore!==e)throw new k(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ns(e)}get(e){const n=Dr(e,this._firestore),r=new Mj(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return L();const s=i[0];if(s.isFoundDocument())return new el(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new el(this._firestore,r,n._key,null,n.converter);throw L()})}set(e,n,r){const i=Dr(e,this._firestore),s=cf(i.converter,n,r),o=rf(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Dr(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof ci?Lw(this._dataReader,"Transaction.update",s._key,n,r,i):$w(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Dr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Dr(e,this._firestore),r=new Ps(this._firestore);return super.get(e).then(i=>new fr(this._firestore,r,n._key,i._document,new Hi(!1,!1),n.converter))}}function Jj(t,e,n){t=re(t,be);const r=Object.assign(Object.assign({},Kj),n);return function(i){if(i.maxAttempts<1)throw new k(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Qe;return i.asyncQueue.enqueueAndForget(async()=>{const u=await ej(i);new XV(i.asyncQueue,u,o,s,a).run()}),a.promise}(et(t),i=>e(new Yj(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xj(){return new Ll("deleteField")}function Zj(){return new Ow("serverTimestamp")}function eB(...t){return new Tj("arrayUnion",t)}function tB(...t){return new kj("arrayRemove",t)}function nB(t){return new Cj("increment",t)}(function(t,e=!0){(function(n){ea=n})(yi),ti(new zn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new be(new lU(n.getProvider("auth-internal")),new fU(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Un(v1,"3.13.0",t),Un(v1,"3.13.0","esm2017")})();const rB="@firebase/firestore-compat",iB="0.3.12";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new k("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){if(typeof Uint8Array>"u")throw new k("unimplemented","Uint8Arrays are not available in this environment.")}function kE(){if(!UU())throw new k("unimplemented","Blobs are unavailable in Firestore in this environment.")}let Zx=class Bg{constructor(e){this._delegate=e}static fromBase64String(e){return kE(),new Bg(Hn.fromBase64String(e))}static fromUint8Array(e){return TE(),new Bg(Hn.fromUint8Array(e))}toBase64(){return kE(),this._delegate.toBase64()}toUint8Array(){return TE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){return sB(t,["next","error","complete"])}function sB(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{enableIndexedDbPersistence(e,n){return fj(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return pj(e._delegate)}clearIndexedDbPersistence(e){return mj(e._delegate)}}class eA{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof oi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&In("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){uj(this._delegate,e,n,r)}enableNetwork(){return yj(this._delegate)}disableNetwork(){return vj(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Px("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return gj(this._delegate)}onSnapshotsInSync(e){return Gj(this._delegate,e)}get app(){if(!this._appCompat)throw new k("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Uo(this,Ox(this._delegate,e))}catch(n){throw It(n,"collection()","Firestore.collection()")}}doc(e){try{return new rn(this,qh(this._delegate,e))}catch(n){throw It(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Et(this,lj(this._delegate,e))}catch(n){throw It(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Jj(this._delegate,n=>e(new tA(this,n)))}batch(){return et(this._delegate),new nA(new Qj(this._delegate,e=>Fl(this._delegate,e)))}loadBundle(e){return wj(this._delegate,e)}namedQuery(e){return _j(this._delegate,e).then(n=>n?new Et(this,n):null)}}class hf extends Bw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zx(new Hn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return rn.forKey(n,this.firestore,null)}}function aB(t){sU(t)}class tA{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new hf(e)}get(e){const n=Gi(e);return this._delegate.get(n).then(r=>new tl(this._firestore,new fr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Gi(e);return r?(qw("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Gi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Gi(e);return this._delegate.delete(n),this}}class nA{constructor(e){this._delegate=e}set(e,n,r){const i=Gi(e);return r?(qw("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Gi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Gi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ws{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new lu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new nl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ws.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ws(e,new hf(e),n),i.set(n,s)),s}}ws.INSTANCES=new WeakMap;class rn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new hf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new k("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new rn(n,new me(n._delegate,r,new D(e)))}static forKey(e,n,r){return new rn(n,new me(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Uo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Uo(this.firestore,Ox(this._delegate,e))}catch(n){throw It(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof me?$x(this._delegate,e):!1}set(e,n){n=qw("DocumentReference.set",n);try{return n?IE(this._delegate,e,n):IE(this._delegate,e)}catch(r){throw It(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?SE(this._delegate,e):SE(this._delegate,e,n,...r)}catch(i){throw It(i,"updateDoc()","DocumentReference.update()")}}delete(){return Wj(this._delegate)}onSnapshot(...e){const n=rA(e),r=iA(e,i=>new tl(this.firestore,new fr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Xx(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Vj(this._delegate):(e==null?void 0:e.source)==="server"?n=jj(this._delegate):n=Uj(this._delegate),n.then(r=>new tl(this.firestore,new fr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new rn(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function It(t,e,n){return t.message=t.message.replace(e,n),t}function rA(t){for(const e of t)if(typeof e=="object"&&!zg(e))return e;return{}}function iA(t,e){var n,r;let i;return zg(t[0])?i=t[0]:zg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class tl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new rn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Jx(this._delegate,e._delegate)}}class nl extends tl{data(e){const n=this._delegate.data(e);return oU(n!==void 0),n}}class Et{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new hf(e)}where(e,n,r){try{return new Et(this.firestore,kr(this._delegate,Aj(e,n,r)))}catch(i){throw It(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Et(this.firestore,kr(this._delegate,Nj(e,n)))}catch(r){throw It(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Et(this.firestore,kr(this._delegate,Rj(e)))}catch(n){throw It(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Et(this.firestore,kr(this._delegate,Pj(e)))}catch(n){throw It(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Et(this.firestore,kr(this._delegate,Dj(...e)))}catch(n){throw It(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Et(this.firestore,kr(this._delegate,Oj(...e)))}catch(n){throw It(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Et(this.firestore,kr(this._delegate,$j(...e)))}catch(n){throw It(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Et(this.firestore,kr(this._delegate,Lj(...e)))}catch(n){throw It(n,"endAt()","Query.endAt()")}}isEqual(e){return Lx(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=zj(this._delegate):(e==null?void 0:e.source)==="server"?n=qj(this._delegate):n=Bj(this._delegate),n.then(r=>new qg(this.firestore,new hi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=rA(e),r=iA(e,i=>new qg(this.firestore,new hi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Xx(this._delegate,n,r)}withConverter(e){return new Et(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class uB{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new nl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class qg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Et(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new nl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new uB(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new nl(this._firestore,r))})}isEqual(e){return Jx(this._delegate,e._delegate)}}class Uo extends Et{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new rn(this.firestore,e):null}doc(e){try{return e===void 0?new rn(this.firestore,qh(this._delegate)):new rn(this.firestore,qh(this._delegate,e))}catch(n){throw It(n,"doc()","CollectionReference.doc()")}}add(e){return Hj(this._delegate,e).then(n=>new rn(this.firestore,n))}isEqual(e){return $x(this._delegate,e._delegate)}withConverter(e){return new Uo(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Gi(t){return re(t,me)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(...e){this._delegate=new ci(...e)}static documentId(){return new Ww(Re.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof ci?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this._delegate=e}static serverTimestamp(){const e=Zj();return e._methodName="FieldValue.serverTimestamp",new Ui(e)}static delete(){const e=Xj();return e._methodName="FieldValue.delete",new Ui(e)}static arrayUnion(...e){const n=eB(...e);return n._methodName="FieldValue.arrayUnion",new Ui(n)}static arrayRemove(...e){const n=tB(...e);return n._methodName="FieldValue.arrayRemove",new Ui(n)}static increment(e){const n=nB(e);return n._methodName="FieldValue.increment",new Ui(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lB={Firestore:eA,GeoPoint:tf,Timestamp:we,Blob:Zx,Transaction:tA,WriteBatch:nA,DocumentReference:rn,DocumentSnapshot:tl,Query:Et,QueryDocumentSnapshot:nl,QuerySnapshot:qg,CollectionReference:Uo,FieldPath:Ww,FieldValue:Ui,setLogLevel:aB,CACHE_SIZE_UNLIMITED:dj};function cB(t,e){t.INTERNAL.registerComponent(new zn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},lB)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hB(t){cB(t,(e,n)=>new eA(e,n,new oB)),t.registerVersion(rB,iB)}hB(ks);const dB={apiKey:"AIzaSyBueF2exJYrDEhkeuDc6xKOaEP4VXKqGWo",authDomain:"neflix-30554.firebaseapp.com",projectId:"neflix-30554",storageBucket:"neflix-30554.appspot.com",messagingSenderId:"35757164016",appId:"1:35757164016:web:1b089040a2c6362eac8935"},fB=ks.initializeApp(dB);fB.firestore();const Hh=ks.auth();const sA="/assets/logo-218bc2b4.png";function Hw(){const[t,e]=R.useState(!1),n=Yy(),r=()=>{window.scrollY>100?e(!0):e(!1)};return R.useEffect(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[]),S.jsx(S.Fragment,{children:S.jsx("div",{className:`nav ${t&&"nav-black"}`,children:S.jsxs("div",{className:"nav-contents",children:[S.jsx("img",{onClick:()=>n("/"),className:"nav-logo",src:sA,alt:""}),S.jsx("img",{onClick:()=>n("/profile"),className:"nav-avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",alt:""})]})})})}function oA(t,e){return function(){return t.apply(e,arguments)}}const{toString:pB}=Object.prototype,{getPrototypeOf:Gw}=Object,df=(t=>e=>{const n=pB.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Gn=t=>(t=t.toLowerCase(),e=>df(e)===t),ff=t=>e=>typeof e===t,{isArray:ua}=Array,rl=ff("undefined");function mB(t){return t!==null&&!rl(t)&&t.constructor!==null&&!rl(t.constructor)&&on(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const aA=Gn("ArrayBuffer");function gB(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&aA(t.buffer),e}const yB=ff("string"),on=ff("function"),uA=ff("number"),pf=t=>t!==null&&typeof t=="object",vB=t=>t===!0||t===!1,zc=t=>{if(df(t)!=="object")return!1;const e=Gw(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},wB=Gn("Date"),_B=Gn("File"),EB=Gn("Blob"),IB=Gn("FileList"),SB=t=>pf(t)&&on(t.pipe),TB=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||on(t.append)&&((e=df(t))==="formdata"||e==="object"&&on(t.toString)&&t.toString()==="[object FormData]"))},kB=Gn("URLSearchParams"),CB=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ul(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),ua(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function lA(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const cA=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),hA=t=>!rl(t)&&t!==cA;function Wg(){const{caseless:t}=hA(this)&&this||{},e={},n=(r,i)=>{const s=t&&lA(e,i)||i;zc(e[s])&&zc(r)?e[s]=Wg(e[s],r):zc(r)?e[s]=Wg({},r):ua(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ul(arguments[r],n);return e}const bB=(t,e,n,{allOwnKeys:r}={})=>(Ul(e,(i,s)=>{n&&on(i)?t[s]=oA(i,n):t[s]=i},{allOwnKeys:r}),t),xB=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),AB=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},NB=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Gw(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},RB=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},PB=t=>{if(!t)return null;if(ua(t))return t;let e=t.length;if(!uA(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},DB=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Gw(Uint8Array)),OB=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},$B=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},LB=Gn("HTMLFormElement"),MB=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),CE=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),FB=Gn("RegExp"),dA=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ul(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},UB=t=>{dA(t,(e,n)=>{if(on(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(on(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},VB=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return ua(t)?r(t):r(String(t).split(e)),n},jB=()=>{},BB=(t,e)=>(t=+t,Number.isFinite(t)?t:e),jp="abcdefghijklmnopqrstuvwxyz",bE="0123456789",fA={DIGIT:bE,ALPHA:jp,ALPHA_DIGIT:jp+jp.toUpperCase()+bE},zB=(t=16,e=fA.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function qB(t){return!!(t&&on(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const WB=t=>{const e=new Array(10),n=(r,i)=>{if(pf(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=ua(r)?[]:{};return Ul(r,(o,a)=>{const u=n(o,i+1);!rl(u)&&(s[a]=u)}),e[i]=void 0,s}}return r};return n(t,0)},HB=Gn("AsyncFunction"),GB=t=>t&&(pf(t)||on(t))&&on(t.then)&&on(t.catch),T={isArray:ua,isArrayBuffer:aA,isBuffer:mB,isFormData:TB,isArrayBufferView:gB,isString:yB,isNumber:uA,isBoolean:vB,isObject:pf,isPlainObject:zc,isUndefined:rl,isDate:wB,isFile:_B,isBlob:EB,isRegExp:FB,isFunction:on,isStream:SB,isURLSearchParams:kB,isTypedArray:DB,isFileList:IB,forEach:Ul,merge:Wg,extend:bB,trim:CB,stripBOM:xB,inherits:AB,toFlatObject:NB,kindOf:df,kindOfTest:Gn,endsWith:RB,toArray:PB,forEachEntry:OB,matchAll:$B,isHTMLForm:LB,hasOwnProperty:CE,hasOwnProp:CE,reduceDescriptors:dA,freezeMethods:UB,toObjectSet:VB,toCamelCase:MB,noop:jB,toFiniteNumber:BB,findKey:lA,global:cA,isContextDefined:hA,ALPHABET:fA,generateString:zB,isSpecCompliantForm:qB,toJSONObject:WB,isAsyncFn:HB,isThenable:GB};function te(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}T.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const pA=te.prototype,mA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{mA[t]={value:t}});Object.defineProperties(te,mA);Object.defineProperty(pA,"isAxiosError",{value:!0});te.from=(t,e,n,r,i,s)=>{const o=Object.create(pA);return T.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),te.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const KB=null;function Hg(t){return T.isPlainObject(t)||T.isArray(t)}function gA(t){return T.endsWith(t,"[]")?t.slice(0,-2):t}function xE(t,e,n){return t?t.concat(e).map(function(i,s){return i=gA(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function QB(t){return T.isArray(t)&&!t.some(Hg)}const YB=T.toFlatObject(T,{},null,function(e){return/^is[A-Z]/.test(e)});function mf(t,e,n){if(!T.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,w){return!T.isUndefined(w[g])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(e);if(!T.isFunction(i))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(T.isDate(p))return p.toISOString();if(!u&&T.isBlob(p))throw new te("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(p)||T.isTypedArray(p)?u&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,g,w){let y=p;if(p&&!w&&typeof p=="object"){if(T.endsWith(g,"{}"))g=r?g:g.slice(0,-2),p=JSON.stringify(p);else if(T.isArray(p)&&QB(p)||(T.isFileList(p)||T.endsWith(g,"[]"))&&(y=T.toArray(p)))return g=gA(g),y.forEach(function(v,I){!(T.isUndefined(v)||v===null)&&e.append(o===!0?xE([g],I,s):o===null?g:g+"[]",l(v))}),!1}return Hg(p)?!0:(e.append(xE(w,g,s),l(p)),!1)}const h=[],d=Object.assign(YB,{defaultVisitor:c,convertValue:l,isVisitable:Hg});function f(p,g){if(!T.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(p),T.forEach(p,function(y,m){(!(T.isUndefined(y)||y===null)&&i.call(e,y,T.isString(m)?m.trim():m,g,d))===!0&&f(y,g?g.concat(m):[m])}),h.pop()}}if(!T.isObject(t))throw new TypeError("data must be an object");return f(t),e}function AE(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Kw(t,e){this._pairs=[],t&&mf(t,this,e)}const yA=Kw.prototype;yA.append=function(e,n){this._pairs.push([e,n])};yA.toString=function(e){const n=e?function(r){return e.call(this,r,AE)}:AE;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function JB(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vA(t,e,n){if(!e)return t;const r=n&&n.encode||JB,i=n&&n.serialize;let s;if(i?s=i(e,n):s=T.isURLSearchParams(e)?e.toString():new Kw(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class XB{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){T.forEach(this.handlers,function(r){r!==null&&e(r)})}}const NE=XB,wA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ZB=typeof URLSearchParams<"u"?URLSearchParams:Kw,ez=typeof FormData<"u"?FormData:null,tz=typeof Blob<"u"?Blob:null,nz=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),rz=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ln={isBrowser:!0,classes:{URLSearchParams:ZB,FormData:ez,Blob:tz},isStandardBrowserEnv:nz,isStandardBrowserWebWorkerEnv:rz,protocols:["http","https","file","blob","url","data"]};function iz(t,e){return mf(t,new Ln.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Ln.isNode&&T.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function sz(t){return T.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function oz(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function _A(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&T.isArray(i)?i.length:o,u?(T.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!T.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&T.isArray(i[o])&&(i[o]=oz(i[o])),!a)}if(T.isFormData(t)&&T.isFunction(t.entries)){const n={};return T.forEachEntry(t,(r,i)=>{e(sz(r),i,n,0)}),n}return null}const az={"Content-Type":void 0};function uz(t,e,n){if(T.isString(t))try{return(e||JSON.parse)(t),T.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const gf={transitional:wA,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=T.isObject(e);if(s&&T.isHTMLForm(e)&&(e=new FormData(e)),T.isFormData(e))return i&&i?JSON.stringify(_A(e)):e;if(T.isArrayBuffer(e)||T.isBuffer(e)||T.isStream(e)||T.isFile(e)||T.isBlob(e))return e;if(T.isArrayBufferView(e))return e.buffer;if(T.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return iz(e,this.formSerializer).toString();if((a=T.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return mf(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),uz(e)):e}],transformResponse:[function(e){const n=this.transitional||gf.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&T.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?te.from(a,te.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ln.classes.FormData,Blob:Ln.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};T.forEach(["delete","get","head"],function(e){gf.headers[e]={}});T.forEach(["post","put","patch"],function(e){gf.headers[e]=T.merge(az)});const Qw=gf,lz=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cz=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&lz[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},RE=Symbol("internals");function Ra(t){return t&&String(t).trim().toLowerCase()}function qc(t){return t===!1||t==null?t:T.isArray(t)?t.map(qc):String(t)}function hz(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const dz=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Bp(t,e,n,r,i){if(T.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!T.isString(e)){if(T.isString(r))return e.indexOf(r)!==-1;if(T.isRegExp(r))return r.test(e)}}function fz(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function pz(t,e){const n=T.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class yf{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,u,l){const c=Ra(u);if(!c)throw new Error("header name must be a non-empty string");const h=T.findKey(i,c);(!h||i[h]===void 0||l===!0||l===void 0&&i[h]!==!1)&&(i[h||u]=qc(a))}const o=(a,u)=>T.forEach(a,(l,c)=>s(l,c,u));return T.isPlainObject(e)||e instanceof this.constructor?o(e,n):T.isString(e)&&(e=e.trim())&&!dz(e)?o(cz(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Ra(e),e){const r=T.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return hz(i);if(T.isFunction(n))return n.call(this,i,r);if(T.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ra(e),e){const r=T.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Bp(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Ra(o),o){const a=T.findKey(r,o);a&&(!n||Bp(r,r[a],a,n))&&(delete r[a],i=!0)}}return T.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Bp(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return T.forEach(this,(i,s)=>{const o=T.findKey(r,s);if(o){n[o]=qc(i),delete n[s];return}const a=e?fz(s):String(s).trim();a!==s&&delete n[s],n[a]=qc(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return T.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&T.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[RE]=this[RE]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Ra(o);r[a]||(pz(i,o),r[a]=!0)}return T.isArray(e)?e.forEach(s):s(e),this}}yf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.freezeMethods(yf.prototype);T.freezeMethods(yf);const or=yf;function zp(t,e){const n=this||Qw,r=e||n,i=or.from(r.headers);let s=r.data;return T.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function EA(t){return!!(t&&t.__CANCEL__)}function Vl(t,e,n){te.call(this,t??"canceled",te.ERR_CANCELED,e,n),this.name="CanceledError"}T.inherits(Vl,te,{__CANCEL__:!0});function mz(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const gz=Ln.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const u=[];u.push(n+"="+encodeURIComponent(r)),T.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),T.isString(s)&&u.push("path="+s),T.isString(o)&&u.push("domain="+o),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function yz(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function vz(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function IA(t,e){return t&&!yz(e)?vz(t,e):e}const wz=Ln.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=T.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function _z(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ez(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const l=Date.now(),c=r[s];o||(o=l),n[i]=u,r[i]=l;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),l-o<e)return;const f=c&&l-c;return f?Math.round(d*1e3/f):void 0}}function PE(t,e){let n=0;const r=Ez(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,u=r(a),l=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&l?(o-s)/u:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const Iz=typeof XMLHttpRequest<"u",Sz=Iz&&function(t){return new Promise(function(n,r){let i=t.data;const s=or.from(t.headers).normalize(),o=t.responseType;let a;function u(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}T.isFormData(i)&&(Ln.isStandardBrowserEnv||Ln.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(t.auth){const f=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+p))}const c=IA(t.baseURL,t.url);l.open(t.method.toUpperCase(),vA(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function h(){if(!l)return;const f=or.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),g={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:t,request:l};mz(function(y){n(y),u()},function(y){r(y),u()},g),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(r(new te("Request aborted",te.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new te("Network Error",te.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const g=t.transitional||wA;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),r(new te(p,g.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,t,l)),l=null},Ln.isStandardBrowserEnv){const f=(t.withCredentials||wz(c))&&t.xsrfCookieName&&gz.read(t.xsrfCookieName);f&&s.set(t.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in l&&T.forEach(s.toJSON(),function(p,g){l.setRequestHeader(g,p)}),T.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",PE(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",PE(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=f=>{l&&(r(!f||f.type?new Vl(null,t,l):f),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=_z(c);if(d&&Ln.protocols.indexOf(d)===-1){r(new te("Unsupported protocol "+d+":",te.ERR_BAD_REQUEST,t));return}l.send(i||null)})},Wc={http:KB,xhr:Sz};T.forEach(Wc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Tz={getAdapter:t=>{t=T.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=T.isString(n)?Wc[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new te(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(T.hasOwnProp(Wc,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!T.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Wc};function qp(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Vl(null,t)}function DE(t){return qp(t),t.headers=or.from(t.headers),t.data=zp.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Tz.getAdapter(t.adapter||Qw.adapter)(t).then(function(r){return qp(t),r.data=zp.call(t,t.transformResponse,r),r.headers=or.from(r.headers),r},function(r){return EA(r)||(qp(t),r&&r.response&&(r.response.data=zp.call(t,t.transformResponse,r.response),r.response.headers=or.from(r.response.headers))),Promise.reject(r)})}const OE=t=>t instanceof or?t.toJSON():t;function Vo(t,e){e=e||{};const n={};function r(l,c,h){return T.isPlainObject(l)&&T.isPlainObject(c)?T.merge.call({caseless:h},l,c):T.isPlainObject(c)?T.merge({},c):T.isArray(c)?c.slice():c}function i(l,c,h){if(T.isUndefined(c)){if(!T.isUndefined(l))return r(void 0,l,h)}else return r(l,c,h)}function s(l,c){if(!T.isUndefined(c))return r(void 0,c)}function o(l,c){if(T.isUndefined(c)){if(!T.isUndefined(l))return r(void 0,l)}else return r(void 0,c)}function a(l,c,h){if(h in e)return r(l,c);if(h in t)return r(void 0,l)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,c)=>i(OE(l),OE(c),!0)};return T.forEach(Object.keys(Object.assign({},t,e)),function(c){const h=u[c]||i,d=h(t[c],e[c],c);T.isUndefined(d)&&h!==a||(n[c]=d)}),n}const SA="1.4.0",Yw={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Yw[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const $E={};Yw.transitional=function(e,n,r){function i(s,o){return"[Axios v"+SA+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new te(i(o," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!$E[o]&&($E[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function kz(t,e,n){if(typeof t!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new te("option "+s+" must be "+u,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+s,te.ERR_BAD_OPTION)}}const Gg={assertOptions:kz,validators:Yw},Cr=Gg.validators;class Gh{constructor(e){this.defaults=e,this.interceptors={request:new NE,response:new NE}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Vo(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Gg.assertOptions(r,{silentJSONParsing:Cr.transitional(Cr.boolean),forcedJSONParsing:Cr.transitional(Cr.boolean),clarifyTimeoutError:Cr.transitional(Cr.boolean)},!1),i!=null&&(T.isFunction(i)?n.paramsSerializer={serialize:i}:Gg.assertOptions(i,{encode:Cr.function,serialize:Cr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&T.merge(s.common,s[n.method]),o&&T.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=or.concat(o,s);const a=[];let u=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(u=u&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let c,h=0,d;if(!u){const p=[DE.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,l),d=p.length,c=Promise.resolve(n);h<d;)c=c.then(p[h++],p[h++]);return c}d=a.length;let f=n;for(h=0;h<d;){const p=a[h++],g=a[h++];try{f=p(f)}catch(w){g.call(this,w);break}}try{c=DE.call(this,f)}catch(p){return Promise.reject(p)}for(h=0,d=l.length;h<d;)c=c.then(l[h++],l[h++]);return c}getUri(e){e=Vo(this.defaults,e);const n=IA(e.baseURL,e.url);return vA(n,e.params,e.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(e){Gh.prototype[e]=function(n,r){return this.request(Vo(r||{},{method:e,url:n,data:(r||{}).data}))}});T.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Vo(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Gh.prototype[e]=n(),Gh.prototype[e+"Form"]=n(!0)});const Hc=Gh;class Jw{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Vl(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Jw(function(i){e=i}),cancel:e}}}const Cz=Jw;function bz(t){return function(n){return t.apply(null,n)}}function xz(t){return T.isObject(t)&&t.isAxiosError===!0}const Kg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Kg).forEach(([t,e])=>{Kg[e]=t});const Az=Kg;function TA(t){const e=new Hc(t),n=oA(Hc.prototype.request,e);return T.extend(n,Hc.prototype,e,{allOwnKeys:!0}),T.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return TA(Vo(t,i))},n}const Be=TA(Qw);Be.Axios=Hc;Be.CanceledError=Vl;Be.CancelToken=Cz;Be.isCancel=EA;Be.VERSION=SA;Be.toFormData=mf;Be.AxiosError=te;Be.Cancel=Be.CanceledError;Be.all=function(e){return Promise.all(e)};Be.spread=bz;Be.isAxiosError=xz;Be.mergeConfig=Vo;Be.AxiosHeaders=or;Be.formToJSON=t=>_A(T.isHTMLForm(t)?new FormData(t):t);Be.HttpStatusCode=Az;Be.default=Be;const kA=Be,CA=kA.create({baseURL:"https://api.themoviedb.org/3"}),Kn="3e552c8612f2b4ba31734d8fb534d684",br={fetchTrending:`/trending/all/week?api_key=${Kn}&language=en-US`,fetchNetflixOriginals:`/discover/tv?api_key=${Kn}&with_networks=213`,fetchTopRated:`/movie/top_rated?api_key=${Kn}&language=en-US`,fetchActionMovies:`/discover/movie?api_key=${Kn}&with_genres=28`,fetchComedyMovies:`/discover/movie?api_key=${Kn}&with_genres=35`,fetchHorrorMovies:`/discover/movie?api_key=${Kn}&with_genres=27`,fetchRomanticMovies:`/discover/movie?api_key=${Kn}&with_genres=10749`,fetchDocumentaries:`/discover/movie?api_key=${Kn}&with_genres=99`};function Nz(){const[t,e]=R.useState([]);R.useEffect(()=>{async function r(){const i=await CA.get(br.fetchNetflixOriginals);return e(i.data.results[Math.floor(Math.random()*i.data.results.length-1)]),i}r()},[]);function n(r,i){return(r==null?void 0:r.length)>i?r.substr(0,i-1)+"...":r}return S.jsx(S.Fragment,{children:S.jsxs("header",{className:"banner",style:{backgroudSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${t==null?void 0:t.backdrop_path}")`,backgroundPosition:"center center"},children:[S.jsxs("div",{className:"banner-contents",children:[S.jsx("h1",{className:"banner-title",children:(t==null?void 0:t.title)||(t==null?void 0:t.name)||(t==null?void 0:t.original_name)}),S.jsxs("div",{className:"banner-buttons",children:[S.jsx("button",{className:"banner-button",children:"Play"}),S.jsx("button",{className:"banner-button",children:"My List"})]}),S.jsx("h1",{className:"banner-discription",children:n(t==null?void 0:t.overview,150)})]}),S.jsx("div",{className:"banner-fadeBottom"})]})})}function xi({title:t,fetchUrl:e,isLargeRow:n=!1}){const r="https://image.tmdb.org/t/p/original/",i=Yy(),[s,o]=R.useState([]);return R.useEffect(()=>{async function a(){const u=await CA.get(e);return o(u.data.results),u}a()},[e]),S.jsx(S.Fragment,{children:S.jsxs("div",{className:"row",children:[S.jsx("h2",{children:t}),S.jsx("div",{className:"row__posters",children:s.map(a=>(n&&a.poster_path||!n&&a.backdrop_path)&&S.jsx("img",{className:`row__poster ${n&&"row__posterLarge"}`,src:`${r}${n?a.poster_path:a.backdrop_path}`,alt:a.name,onClick:()=>i(`/show/${n?"tv":"movie"}/${a.id}`)},a.id))})]})})}function Rz(){return S.jsxs("div",{className:"home-screen",children:[S.jsx(Hw,{}),S.jsx(Nz,{}),S.jsx(xi,{title:"NETFLIX ORIGINAL",fetchUrl:br.fetchNetflixOriginals,isLargeRow:!0}),S.jsx(xi,{title:"Top Rated",fetchUrl:br.fetchTopRated}),S.jsx(xi,{title:"Action ",fetchUrl:br.fetchActionMovies}),S.jsx(xi,{title:"Comedy ",fetchUrl:br.fetchComedyMovies}),S.jsx(xi,{title:"Horror ",fetchUrl:br.fetchHorrorMovies}),S.jsx(xi,{title:"Romance ",fetchUrl:br.fetchRomanticMovies}),S.jsx(xi,{title:"Documentaries",fetchUrl:br.fetchDocumentaries})]})}function Pz(){const t=R.useRef(null),e=R.useRef(null),n=i=>{i.preventDefault(),Hh.createUserWithEmailAndPassword(t.current.value,e.current.value).then(s=>{}).catch(s=>{alert(s.message)})},r=i=>{i.preventDefault(),Hh.signInWithEmailAndPassword(t.current.value,e.current.value).then(s=>{}).catch(s=>{alert(s.message)})};return S.jsx("div",{className:"signup-screen",children:S.jsxs("form",{action:"",children:[S.jsx("h1",{children:"Sign In"}),S.jsx("input",{type:"email",placeholder:"Email",ref:t,name:"email"}),S.jsx("input",{type:"password",ref:e,placeholder:"Password",name:"password"}),S.jsx("button",{type:"submit",onClick:r,children:"Sign In"}),S.jsxs("h4",{children:[S.jsx("span",{id:"grey",children:"New to Netflix? "}),S.jsx("a",{className:"signup-link",onClick:n,children:"Sign Up now."})]})]})})}function Dz(){const[t,e]=R.useState(!1);return S.jsxs("div",{className:"login-screen",children:[S.jsxs("div",{className:"login-screen-bg",children:[S.jsx("img",{className:"login-screen-logo",src:sA,alt:"",srcSet:""}),S.jsx("button",{onClick:()=>e(!0),className:"login-screen-btn",children:"Sign In"}),S.jsx("div",{className:"login-screen-gradient"})]}),S.jsx("div",{className:"login-screen-body",children:t?S.jsx(Pz,{}):S.jsxs(S.Fragment,{children:[S.jsx("h1",{children:"Unlimited films, TV programmes and more."}),S.jsx("h2",{children:"Watch anyware, Cancel at any time"}),S.jsx("h3",{children:"Ready to watch? Enter your email to create or restart your membership"}),S.jsx("div",{className:"login-screen-input",children:S.jsxs("form",{children:[S.jsx("input",{type:"email",placeholder:"Email Adderss"}),S.jsx("button",{onClick:()=>e(!0),className:"login-screen-get-started",children:"GET STARTED"})]})})]})})]})}var bA={exports:{}},xA={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=R;function Oz(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $z=typeof Object.is=="function"?Object.is:Oz,Lz=jo.useState,Mz=jo.useEffect,Fz=jo.useLayoutEffect,Uz=jo.useDebugValue;function Vz(t,e){var n=e(),r=Lz({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return Fz(function(){i.value=n,i.getSnapshot=e,Wp(i)&&s({inst:i})},[t,n,e]),Mz(function(){return Wp(i)&&s({inst:i}),t(function(){Wp(i)&&s({inst:i})})},[t]),Uz(n),n}function Wp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$z(t,n)}catch{return!0}}function jz(t,e){return e()}var Bz=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?jz:Vz;xA.useSyncExternalStore=jo.useSyncExternalStore!==void 0?jo.useSyncExternalStore:Bz;bA.exports=xA;var zz=bA.exports,AA={exports:{}},NA={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=R,qz=zz;function Wz(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hz=typeof Object.is=="function"?Object.is:Wz,Gz=qz.useSyncExternalStore,Kz=vf.useRef,Qz=vf.useEffect,Yz=vf.useMemo,Jz=vf.useDebugValue;NA.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=Kz(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Yz(function(){function u(f){if(!l){if(l=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var p=o.value;if(i(p,f))return h=p}return h=f}if(p=h,Hz(c,f))return p;var g=r(f);return i!==void 0&&i(p,g)?p:(c=f,h=g)}var l=!1,c,h,d=n===void 0?null:n;return[function(){return u(e())},d===null?void 0:function(){return u(d())}]},[e,n,r,i]);var a=Gz(t,s[0],s[1]);return Qz(function(){o.hasValue=!0,o.value=a},[a]),Jz(a),a};AA.exports=NA;var Xz=AA.exports;function Zz(t){t()}let RA=Zz;const e3=t=>RA=t,t3=()=>RA,LE=Symbol.for("react-redux-context"),ME=typeof globalThis<"u"?globalThis:{};function n3(){var t;if(!R.createContext)return{};const e=(t=ME[LE])!=null?t:ME[LE]=new Map;let n=e.get(R.createContext);return n||(n=R.createContext(null),e.set(R.createContext,n)),n}const di=n3();function Xw(t=di){return function(){return R.useContext(t)}}const PA=Xw(),r3=()=>{throw new Error("uSES not initialized!")};let DA=r3;const i3=t=>{DA=t},s3=(t,e)=>t===e;function o3(t=di){const e=t===di?PA:Xw(t);return function(r,i={}){const{equalityFn:s=s3,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:u,subscription:l,getServerState:c,stabilityCheck:h,noopCheck:d}=e();R.useRef(!0);const f=R.useCallback({[r.name](g){return r(g)}}[r.name],[r,h,o]),p=DA(l.addNestedSub,u.getState,c||u.getState,f,s);return R.useDebugValue(p),p}}const OA=o3();var $A={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tt=typeof Symbol=="function"&&Symbol.for,Zw=tt?Symbol.for("react.element"):60103,e0=tt?Symbol.for("react.portal"):60106,wf=tt?Symbol.for("react.fragment"):60107,_f=tt?Symbol.for("react.strict_mode"):60108,Ef=tt?Symbol.for("react.profiler"):60114,If=tt?Symbol.for("react.provider"):60109,Sf=tt?Symbol.for("react.context"):60110,t0=tt?Symbol.for("react.async_mode"):60111,Tf=tt?Symbol.for("react.concurrent_mode"):60111,kf=tt?Symbol.for("react.forward_ref"):60112,Cf=tt?Symbol.for("react.suspense"):60113,a3=tt?Symbol.for("react.suspense_list"):60120,bf=tt?Symbol.for("react.memo"):60115,xf=tt?Symbol.for("react.lazy"):60116,u3=tt?Symbol.for("react.block"):60121,l3=tt?Symbol.for("react.fundamental"):60117,c3=tt?Symbol.for("react.responder"):60118,h3=tt?Symbol.for("react.scope"):60119;function Xt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Zw:switch(t=t.type,t){case t0:case Tf:case wf:case Ef:case _f:case Cf:return t;default:switch(t=t&&t.$$typeof,t){case Sf:case kf:case xf:case bf:case If:return t;default:return e}}case e0:return e}}}function LA(t){return Xt(t)===Tf}ae.AsyncMode=t0;ae.ConcurrentMode=Tf;ae.ContextConsumer=Sf;ae.ContextProvider=If;ae.Element=Zw;ae.ForwardRef=kf;ae.Fragment=wf;ae.Lazy=xf;ae.Memo=bf;ae.Portal=e0;ae.Profiler=Ef;ae.StrictMode=_f;ae.Suspense=Cf;ae.isAsyncMode=function(t){return LA(t)||Xt(t)===t0};ae.isConcurrentMode=LA;ae.isContextConsumer=function(t){return Xt(t)===Sf};ae.isContextProvider=function(t){return Xt(t)===If};ae.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zw};ae.isForwardRef=function(t){return Xt(t)===kf};ae.isFragment=function(t){return Xt(t)===wf};ae.isLazy=function(t){return Xt(t)===xf};ae.isMemo=function(t){return Xt(t)===bf};ae.isPortal=function(t){return Xt(t)===e0};ae.isProfiler=function(t){return Xt(t)===Ef};ae.isStrictMode=function(t){return Xt(t)===_f};ae.isSuspense=function(t){return Xt(t)===Cf};ae.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===wf||t===Tf||t===Ef||t===_f||t===Cf||t===a3||typeof t=="object"&&t!==null&&(t.$$typeof===xf||t.$$typeof===bf||t.$$typeof===If||t.$$typeof===Sf||t.$$typeof===kf||t.$$typeof===l3||t.$$typeof===c3||t.$$typeof===h3||t.$$typeof===u3)};ae.typeOf=Xt;$A.exports=ae;var d3=$A.exports,MA=d3,f3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},p3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},FA={};FA[MA.ForwardRef]=f3;FA[MA.Memo]=p3;var ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0=Symbol.for("react.element"),r0=Symbol.for("react.portal"),Af=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),Pf=Symbol.for("react.provider"),Df=Symbol.for("react.context"),m3=Symbol.for("react.server_context"),Of=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),Lf=Symbol.for("react.suspense_list"),Mf=Symbol.for("react.memo"),Ff=Symbol.for("react.lazy"),g3=Symbol.for("react.offscreen"),UA;UA=Symbol.for("react.module.reference");function cn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case n0:switch(t=t.type,t){case Af:case Rf:case Nf:case $f:case Lf:return t;default:switch(t=t&&t.$$typeof,t){case m3:case Df:case Of:case Ff:case Mf:case Pf:return t;default:return e}}case r0:return e}}}ue.ContextConsumer=Df;ue.ContextProvider=Pf;ue.Element=n0;ue.ForwardRef=Of;ue.Fragment=Af;ue.Lazy=Ff;ue.Memo=Mf;ue.Portal=r0;ue.Profiler=Rf;ue.StrictMode=Nf;ue.Suspense=$f;ue.SuspenseList=Lf;ue.isAsyncMode=function(){return!1};ue.isConcurrentMode=function(){return!1};ue.isContextConsumer=function(t){return cn(t)===Df};ue.isContextProvider=function(t){return cn(t)===Pf};ue.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===n0};ue.isForwardRef=function(t){return cn(t)===Of};ue.isFragment=function(t){return cn(t)===Af};ue.isLazy=function(t){return cn(t)===Ff};ue.isMemo=function(t){return cn(t)===Mf};ue.isPortal=function(t){return cn(t)===r0};ue.isProfiler=function(t){return cn(t)===Rf};ue.isStrictMode=function(t){return cn(t)===Nf};ue.isSuspense=function(t){return cn(t)===$f};ue.isSuspenseList=function(t){return cn(t)===Lf};ue.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Af||t===Rf||t===Nf||t===$f||t===Lf||t===g3||typeof t=="object"&&t!==null&&(t.$$typeof===Ff||t.$$typeof===Mf||t.$$typeof===Pf||t.$$typeof===Df||t.$$typeof===Of||t.$$typeof===UA||t.getModuleId!==void 0)};ue.typeOf=cn;function y3(){const t=t3();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const FE={notify(){},get:()=>[]};function v3(t,e){let n,r=FE;function i(h){return u(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=y3())}function l(){n&&(n(),n=void 0,r.clear(),r=FE)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:()=>r};return c}const w3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_3=w3?R.useLayoutEffect:R.useEffect;function E3({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=R.useMemo(()=>{const l=v3(t);return{store:t,subscription:l,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=R.useMemo(()=>t.getState(),[t]);_3(()=>{const{subscription:l}=o;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),a!==t.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[o,a]);const u=e||di;return R.createElement(u.Provider,{value:o},n)}function VA(t=di){const e=t===di?PA:Xw(t);return function(){const{store:r}=e();return r}}const I3=VA();function S3(t=di){const e=t===di?I3:VA(t);return function(){return e().dispatch}}const T3=S3();i3(Xz.useSyncExternalStoreWithSelector);e3(pT.unstable_batchedUpdates);function mn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function fi(t){return!!t&&!!t[ge]}function pr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===D3}(t)||Array.isArray(t)||!!t[WE]||!!(!((e=t.constructor)===null||e===void 0)&&e[WE])||i0(t)||s0(t))}function _s(t,e,n){n===void 0&&(n=!1),la(t)===0?(n?Object.keys:yo)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function la(t){var e=t[ge];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:i0(t)?2:s0(t)?3:0}function go(t,e){return la(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function k3(t,e){return la(t)===2?t.get(e):t[e]}function jA(t,e,n){var r=la(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function BA(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function i0(t){return R3&&t instanceof Map}function s0(t){return P3&&t instanceof Set}function Oi(t){return t.o||t.t}function o0(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=qA(t);delete e[ge];for(var n=yo(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function a0(t,e){return e===void 0&&(e=!1),u0(t)||fi(t)||!pr(t)||(la(t)>1&&(t.set=t.add=t.clear=t.delete=C3),Object.freeze(t),e&&_s(t,function(n,r){return a0(r,!0)},!0)),t}function C3(){mn(2)}function u0(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Bn(t){var e=Xg[t];return e||mn(18,t),e}function b3(t,e){Xg[t]||(Xg[t]=e)}function Qg(){return il}function Hp(t,e){e&&(Bn("Patches"),t.u=[],t.s=[],t.v=e)}function Kh(t){Yg(t),t.p.forEach(x3),t.p=null}function Yg(t){t===il&&(il=t.l)}function UE(t){return il={p:[],l:il,h:t,m:!0,_:0}}function x3(t){var e=t[ge];e.i===0||e.i===1?e.j():e.g=!0}function Gp(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Bn("ES5").S(e,t,r),r?(n[ge].P&&(Kh(e),mn(4)),pr(t)&&(t=Qh(e,t),e.l||Yh(e,t)),e.u&&Bn("Patches").M(n[ge].t,t,e.u,e.s)):t=Qh(e,n,[]),Kh(e),e.u&&e.v(e.u,e.s),t!==zA?t:void 0}function Qh(t,e,n){if(u0(e))return e;var r=e[ge];if(!r)return _s(e,function(a,u){return VE(t,r,e,a,u,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Yh(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=o0(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),_s(s,function(a,u){return VE(t,r,i,a,u,n,o)}),Yh(t,i,!1),n&&t.u&&Bn("Patches").N(r,n,t.u,t.s)}return r.o}function VE(t,e,n,r,i,s,o){if(fi(i)){var a=Qh(t,i,s&&e&&e.i!==3&&!go(e.R,r)?s.concat(r):void 0);if(jA(n,r,a),!fi(a))return;t.m=!1}else o&&n.add(i);if(pr(i)&&!u0(i)){if(!t.h.D&&t._<1)return;Qh(t,i),e&&e.A.l||Yh(t,i)}}function Yh(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&a0(e,n)}function Kp(t,e){var n=t[ge];return(n?Oi(n):t)[e]}function jE(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Or(t){t.P||(t.P=!0,t.l&&Or(t.l))}function Qp(t){t.o||(t.o=o0(t.t))}function Jg(t,e,n){var r=i0(e)?Bn("MapSet").F(e,n):s0(e)?Bn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Qg(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,l=sl;o&&(u=[a],l=qa);var c=Proxy.revocable(u,l),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Bn("ES5").J(e,n);return(n?n.A:Qg()).p.push(r),r}function A3(t){return fi(t)||mn(22,t),function e(n){if(!pr(n))return n;var r,i=n[ge],s=la(n);if(i){if(!i.P&&(i.i<4||!Bn("ES5").K(i)))return i.t;i.I=!0,r=BE(n,s),i.I=!1}else r=BE(n,s);return _s(r,function(o,a){i&&k3(i.t,o)===a||jA(r,o,e(a))}),s===3?new Set(r):r}(t)}function BE(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return o0(t)}function N3(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[ge];return sl.get(u,s)},set:function(u){var l=this[ge];sl.set(l,s,u)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][ge];if(!a.P)switch(a.i){case 5:r(a)&&Or(a);break;case 4:n(a)&&Or(a)}}}function n(s){for(var o=s.t,a=s.k,u=yo(a),l=u.length-1;l>=0;l--){var c=u[l];if(c!==ge){var h=o[c];if(h===void 0&&!go(o,c))return!0;var d=a[c],f=d&&d[ge];if(f?f.t!==h:!BA(d,h))return!0}}var p=!!o[ge];return u.length!==yo(o).length+(p?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};b3("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(c,h){if(c){for(var d=Array(h.length),f=0;f<h.length;f++)Object.defineProperty(d,""+f,t(f,!0));return d}var p=qA(h);delete p[ge];for(var g=yo(p),w=0;w<g.length;w++){var y=g[w];p[y]=t(y,c||!!p[y].enumerable)}return Object.create(Object.getPrototypeOf(h),p)}(a,s),l={i:a?5:4,A:o?o.A:Qg(),P:!1,I:!1,R:{},l:o,t:s,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,ge,{value:l,writable:!0}),u},S:function(s,o,a){a?fi(o)&&o[ge].A===s&&e(s.p):(s.u&&function u(l){if(l&&typeof l=="object"){var c=l[ge];if(c){var h=c.t,d=c.k,f=c.R,p=c.i;if(p===4)_s(d,function(v){v!==ge&&(h[v]!==void 0||go(h,v)?f[v]||u(d[v]):(f[v]=!0,Or(c)))}),_s(h,function(v){d[v]!==void 0||go(d,v)||(f[v]=!1,Or(c))});else if(p===5){if(r(c)&&(Or(c),f.length=!0),d.length<h.length)for(var g=d.length;g<h.length;g++)f[g]=!1;else for(var w=h.length;w<d.length;w++)f[w]=!0;for(var y=Math.min(d.length,h.length),m=0;m<y;m++)d.hasOwnProperty(m)||(f[m]=!0),f[m]===void 0&&u(d[m])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var zE,il,l0=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",R3=typeof Map<"u",P3=typeof Set<"u",qE=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",zA=l0?Symbol.for("immer-nothing"):((zE={})["immer-nothing"]=!0,zE),WE=l0?Symbol.for("immer-draftable"):"__$immer_draftable",ge=l0?Symbol.for("immer-state"):"__$immer_state",D3=""+Object.prototype.constructor,yo=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,qA=Object.getOwnPropertyDescriptors||function(t){var e={};return yo(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Xg={},sl={get:function(t,e){if(e===ge)return t;var n=Oi(t);if(!go(n,e))return function(i,s,o){var a,u=jE(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!pr(r)?r:r===Kp(t.t,e)?(Qp(t),t.o[e]=Jg(t.A.h,r,t)):r},has:function(t,e){return e in Oi(t)},ownKeys:function(t){return Reflect.ownKeys(Oi(t))},set:function(t,e,n){var r=jE(Oi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Kp(Oi(t),e),s=i==null?void 0:i[ge];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(BA(n,i)&&(n!==void 0||go(t.t,e)))return!0;Qp(t),Or(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return Kp(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Qp(t),Or(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Oi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){mn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){mn(12)}},qa={};_s(sl,function(t,e){qa[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),qa.deleteProperty=function(t,e){return qa.set.call(this,t,e,void 0)},qa.set=function(t,e,n){return sl.set.call(this,t[0],e,n,t[0])};var O3=function(){function t(n){var r=this;this.O=qE,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(g){var w=this;g===void 0&&(g=a);for(var y=arguments.length,m=Array(y>1?y-1:0),v=1;v<y;v++)m[v-1]=arguments[v];return u.produce(g,function(I){var C;return(C=s).call.apply(C,[w,I].concat(m))})}}var l;if(typeof s!="function"&&mn(6),o!==void 0&&typeof o!="function"&&mn(7),pr(i)){var c=UE(r),h=Jg(r,i,void 0),d=!0;try{l=s(h),d=!1}finally{d?Kh(c):Yg(c)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(g){return Hp(c,o),Gp(g,c)},function(g){throw Kh(c),g}):(Hp(c,o),Gp(l,c))}if(!i||typeof i!="object"){if((l=s(i))===void 0&&(l=i),l===zA&&(l=void 0),r.D&&a0(l,!0),o){var f=[],p=[];Bn("Patches").M(i,l,f,p),o(f,p)}return l}mn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(l){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(l,function(f){return i.apply(void 0,[f].concat(h))})};var o,a,u=r.produce(i,s,function(l,c){o=l,a=c});return typeof Promise<"u"&&u instanceof Promise?u.then(function(l){return[l,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){pr(n)||mn(8),fi(n)&&(n=A3(n));var r=UE(this),i=Jg(this,n,void 0);return i[ge].C=!0,Yg(r),i},e.finishDraft=function(n,r){var i=n&&n[ge],s=i.A;return Hp(s,r),Gp(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!qE&&mn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Bn("Patches").$;return fi(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Qt=new O3,WA=Qt.produce;Qt.produceWithPatches.bind(Qt);Qt.setAutoFreeze.bind(Qt);Qt.setUseProxies.bind(Qt);Qt.applyPatches.bind(Qt);Qt.createDraft.bind(Qt);Qt.finishDraft.bind(Qt);function ol(t){"@babel/helpers - typeof";return ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ol(t)}function $3(t,e){if(ol(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ol(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function L3(t){var e=$3(t,"string");return ol(e)==="symbol"?e:String(e)}function M3(t,e,n){return e=L3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function HE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function GE(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?HE(Object(n),!0).forEach(function(r){M3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):HE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function mt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var KE=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Yp=function(){return Math.random().toString(36).substring(7).split("").join(".")},Jh={INIT:"@@redux/INIT"+Yp(),REPLACE:"@@redux/REPLACE"+Yp(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Yp()}};function F3(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function HA(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(mt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(mt(1));return n(HA)(t,e)}if(typeof t!="function")throw new Error(mt(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(mt(3));return s}function h(g){if(typeof g!="function")throw new Error(mt(4));if(u)throw new Error(mt(5));var w=!0;return l(),a.push(g),function(){if(w){if(u)throw new Error(mt(6));w=!1,l();var m=a.indexOf(g);a.splice(m,1),o=null}}}function d(g){if(!F3(g))throw new Error(mt(7));if(typeof g.type>"u")throw new Error(mt(8));if(u)throw new Error(mt(9));try{u=!0,s=i(s,g)}finally{u=!1}for(var w=o=a,y=0;y<w.length;y++){var m=w[y];m()}return g}function f(g){if(typeof g!="function")throw new Error(mt(10));i=g,d({type:Jh.REPLACE})}function p(){var g,w=h;return g={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(mt(11));function v(){m.next&&m.next(c())}v();var I=w(v);return{unsubscribe:I}}},g[KE]=function(){return this},g}return d({type:Jh.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:f},r[KE]=p,r}function U3(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Jh.INIT});if(typeof r>"u")throw new Error(mt(12));if(typeof n(void 0,{type:Jh.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(mt(13))})}function V3(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{U3(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var f=s[d],p=n[f],g=u[f],w=p(g,l);if(typeof w>"u")throw l&&l.type,new Error(mt(14));h[f]=w,c=c||w!==g}return c=c||s.length!==Object.keys(u).length,c?h:u}}function Xh(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function j3(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(mt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=Xh.apply(void 0,a)(i.dispatch),GE(GE({},i),{},{dispatch:s})}}}function GA(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var KA=GA();KA.withExtraArgument=GA;const QE=KA;var QA=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),B3=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Bo=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},z3=Object.defineProperty,q3=Object.defineProperties,W3=Object.getOwnPropertyDescriptors,YE=Object.getOwnPropertySymbols,H3=Object.prototype.hasOwnProperty,G3=Object.prototype.propertyIsEnumerable,JE=function(t,e,n){return e in t?z3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Qr=function(t,e){for(var n in e||(e={}))H3.call(e,n)&&JE(t,n,e[n]);if(YE)for(var r=0,i=YE(e);r<i.length;r++){var n=i[r];G3.call(e,n)&&JE(t,n,e[n])}return t},Jp=function(t,e){return q3(t,W3(e))},K3=function(t,e,n){return new Promise(function(r,i){var s=function(u){try{a(n.next(u))}catch(l){i(l)}},o=function(u){try{a(n.throw(u))}catch(l){i(l)}},a=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(s,o)};a((n=n.apply(t,e)).next())})},Q3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Xh:Xh.apply(null,arguments)};function Y3(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var J3=function(t){QA(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Bo([void 0],n[0].concat(this)))):new(e.bind.apply(e,Bo([void 0],n.concat(this))))},e}(Array),X3=function(t){QA(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Bo([void 0],n[0].concat(this)))):new(e.bind.apply(e,Bo([void 0],n.concat(this))))},e}(Array);function Zg(t){return pr(t)?WA(t,function(){}):t}function Z3(t){return typeof t=="boolean"}function e9(){return function(e){return t9(e)}}function t9(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new J3;return n&&(Z3(n)?r.push(QE):r.push(QE.withExtraArgument(n.extraArgument))),r}var n9=!0;function r9(t){var e=e9(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,u=a===void 0?!0:a,l=n.preloadedState,c=l===void 0?void 0:l,h=n.enhancers,d=h===void 0?void 0:h,f;if(typeof i=="function")f=i;else if(Y3(i))f=V3(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var p=o;typeof p=="function"&&(p=p(e));var g=j3.apply(void 0,p),w=Xh;u&&(w=Q3(Qr({trace:!n9},typeof u=="object"&&u)));var y=new X3(g),m=y;Array.isArray(d)?m=Bo([g],d):typeof d=="function"&&(m=d(y));var v=w.apply(void 0,m);return HA(f,c,v)}function Yr(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Qr(Qr({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function YA(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function i9(t){return typeof t=="function"}function s9(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?YA(e):[e,n,r],s=i[0],o=i[1],a=i[2],u;if(i9(t))u=function(){return Zg(t())};else{var l=Zg(t);u=function(){return l}}function c(h,d){h===void 0&&(h=u());var f=Bo([s[d.type]],o.filter(function(p){var g=p.matcher;return g(d)}).map(function(p){var g=p.reducer;return g}));return f.filter(function(p){return!!p}).length===0&&(f=[a]),f.reduce(function(p,g){if(g)if(fi(p)){var w=p,y=g(w,d);return y===void 0?p:y}else{if(pr(p))return WA(p,function(m){return g(m,d)});var y=g(p,d);if(y===void 0){if(p===null)return p;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return p},h)}return c.getInitialState=u,c}function o9(t,e){return t+"/"+e}function a9(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Zg(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=o9(e,c),f,p;"reducer"in h?(f=h.reducer,p=h.prepare):f=h,s[c]=f,o[d]=f,a[c]=p?Yr(d,p):Yr(d)});function u(){var c=typeof t.extraReducers=="function"?YA(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,f=c[1],p=f===void 0?[]:f,g=c[2],w=g===void 0?void 0:g,y=Qr(Qr({},d),o);return s9(n,function(m){for(var v in y)m.addCase(v,y[v]);for(var I=0,C=p;I<C.length;I++){var A=C[I];m.addMatcher(A.matcher,A.reducer)}w&&m.addDefaultCase(w)})}var l;return{name:e,reducer:function(c,h){return l||(l=u()),l(c,h)},actions:a,caseReducers:s,getInitialState:function(){return l||(l=u()),l.getInitialState()}}}var u9="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",l9=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=u9[Math.random()*64|0];return e},c9=["name","message","stack","code"],Xp=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),XE=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),h9=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=c9;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=Yr(e+"/fulfilled",function(l,c,h,d){return{payload:l,meta:Jp(Qr({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=Yr(e+"/pending",function(l,c,h){return{payload:void 0,meta:Jp(Qr({},h||{}),{arg:c,requestId:l,requestStatus:"pending"})}}),o=Yr(e+"/rejected",function(l,c,h,d,f){return{payload:d,error:(r&&r.serializeError||h9)(l||"Rejected"),meta:Jp(Qr({},f||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function u(l){return function(c,h,d){var f=r!=null&&r.idGenerator?r.idGenerator(l):l9(),p=new a,g;function w(m){g=m,p.abort()}var y=function(){return K3(this,null,function(){var m,v,I,C,A,P,M;return B3(this,function(J){switch(J.label){case 0:return J.trys.push([0,4,,5]),C=(m=r==null?void 0:r.condition)==null?void 0:m.call(r,l,{getState:h,extra:d}),f9(C)?[4,C]:[3,2];case 1:C=J.sent(),J.label=2;case 2:if(C===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return A=new Promise(function(z,nt){return p.signal.addEventListener("abort",function(){return nt({name:"AbortError",message:g||"Aborted"})})}),c(s(f,l,(v=r==null?void 0:r.getPendingMeta)==null?void 0:v.call(r,{requestId:f,arg:l},{getState:h,extra:d}))),[4,Promise.race([A,Promise.resolve(n(l,{dispatch:c,getState:h,extra:d,requestId:f,signal:p.signal,abort:w,rejectWithValue:function(z,nt){return new Xp(z,nt)},fulfillWithValue:function(z,nt){return new XE(z,nt)}})).then(function(z){if(z instanceof Xp)throw z;return z instanceof XE?i(z.payload,f,l,z.meta):i(z,f,l)})])];case 3:return I=J.sent(),[3,5];case 4:return P=J.sent(),I=P instanceof Xp?o(null,f,l,P.payload,P.meta):o(P,f,l),[3,5];case 5:return M=r&&!r.dispatchConditionRejection&&o.match(I)&&I.meta.condition,M||c(I),[2,I]}})})}();return Object.assign(y,{abort:w,requestId:f,arg:l,unwrap:function(){return y.then(d9)}})}}return Object.assign(u,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function d9(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function f9(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var c0="listenerMiddleware";Yr(c0+"/add");Yr(c0+"/removeAll");Yr(c0+"/remove");var ZE;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);N3();const JA=a9({name:"user",initialState:{value:0},reducers:{login:(t,e)=>{t.user=e.payload},logout:t=>{t.user=null}}}),{login:p9,logout:m9}=JA.actions,XA=t=>t.user.user,g9=JA.reducer;function y9(){const t=OA(XA),e=Yy();return S.jsxs("div",{className:"profile-screen",children:[S.jsx(Hw,{}),S.jsxs("div",{className:"profile-screen-body",children:[S.jsx("h1",{children:"Edit Profile"}),S.jsxs("div",{className:"profile-screen-info",children:[S.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",alt:"",srcSet:""}),S.jsxs("div",{className:"profile-screen-details",children:[S.jsx("h2",{children:t.email}),S.jsxs("div",{className:"profile-screen-plans",children:[S.jsx("h3",{children:"Plans"}),S.jsx("button",{className:"profile-screen-signOut-btn",onClick:()=>{Hh.signOut(),e("/")},children:"Sign Out"})]})]})]})]})]})}const v9=()=>{var l,c,h,d,f;const{type:t,id:e}=rD(),[n,r]=R.useState({}),[i,s]=R.useState("option1"),o=p=>{s(p)},a="https://image.tmdb.org/t/p/original/",u=`https://api.themoviedb.org/3/${t}/${e}?api_key=${Kn}`;return console.log(n),R.useEffect(()=>{async function p(){const g=await kA.get(u);return r(g.data),g}p()},[u]),S.jsxs("div",{className:"show-details-page",children:[S.jsx(Hw,{}),S.jsxs("div",{className:"show-details-body",children:[S.jsx("div",{className:"show-poster",children:S.jsx("img",{src:`${a}${n.poster_path}`,alt:""})}),S.jsxs("div",{className:"show-details",children:[S.jsxs("div",{className:"show-title",children:[S.jsx("h1",{children:t==="tv"?n.original_name:n.original_title}),S.jsxs("h2",{children:[(l=n==null?void 0:n.vote_average)==null?void 0:l.toFixed(1),"⭐"]})]}),S.jsx("div",{className:"show-date",children:S.jsxs("span",{children:[new Date(t==="movie"?n.release_date:n.first_air_date).getFullYear(),"   |   ",n.adult===!1?"16+":"18+"]})}),S.jsxs("div",{className:"tabs-container",children:[S.jsx("div",{className:`tab ${i==="option1"?"active":""}`,onClick:()=>o("option1"),disabled:i!=="option1",children:"OVERVIEW"}),S.jsx("div",{className:`tab ${i==="option2"?"active":""}`,onClick:()=>o("option2"),disabled:i!=="option2",children:"TRAILERS & MORE"}),S.jsx("div",{className:`tab ${i==="option3"?"active":""}`,onClick:()=>o("option3"),disabled:i!=="option3",children:"MORE LIKE THIS"}),S.jsx("div",{className:`tab ${i==="option4"?"active":""}`,onClick:()=>o("option4"),disabled:i!=="option4",children:"DETAILS"})]}),S.jsxs("div",{className:"tab-content",children:[i==="option1"&&S.jsxs("div",{className:"show-overview",children:[S.jsx("p",{children:n.overview}),S.jsxs("p",{className:"show-overview-details",children:[S.jsx("span",{className:"overview-key",children:"Genres: "}),(c=n==null?void 0:n.genres)==null?void 0:c.map((p,g)=>S.jsxs("span",{children:[p.name," , "]},g))]}),S.jsxs("p",{className:"show-overview-details",children:[S.jsx("span",{className:"overview-key",children:"Language: "}),(h=n==null?void 0:n.spoken_languages)==null?void 0:h.map((p,g)=>S.jsxs("span",{children:[p.english_name," , "]},g))]}),S.jsxs("p",{className:"show-overview-details",children:[S.jsx("span",{className:"overview-key",children:"Production Companies: "}),(d=n==null?void 0:n.production_companies)==null?void 0:d.map((p,g)=>S.jsxs("span",{children:[p.name," , "]},g))]}),S.jsxs("p",{className:"show-overview-details",children:[S.jsx("span",{className:"overview-key",children:"Production Countries: "}),(f=n==null?void 0:n.production_countries)==null?void 0:f.map((p,g)=>S.jsxs("span",{children:[p.name," "]},g))]}),S.jsxs("p",{className:"show-overview-details",children:[S.jsx("span",{className:"overview-key",children:"Status: "}),n.status]})]}),i==="option2"&&S.jsx("div",{className:""}),i==="option3"&&S.jsx("div",{className:"",children:"3"}),i==="option4"&&S.jsx("div",{className:"",children:"4"})]})]})]})]})};function w9(){const t=OA(XA),e=T3();return R.useEffect(()=>Hh.onAuthStateChanged(r=>{e(r?p9({uid:r.uid,email:r.email}):m9())}),[e]),S.jsx(S.Fragment,{children:S.jsx("div",{className:"app",children:S.jsx(vD,{children:S.jsx(yD,{children:t?S.jsxs(S.Fragment,{children:[S.jsx(La,{exact:!0,path:"/profile",element:S.jsx(y9,{})}),S.jsx(La,{exact:!0,path:"/",element:S.jsx(Rz,{})}),S.jsx(La,{exact:!0,path:"/show/:type/:id",element:S.jsx(v9,{})})]}):S.jsx(La,{exact:!0,path:"/",element:S.jsx(Dz,{})})})})})})}const _9=r9({reducer:{user:g9}});Zp.createRoot(document.getElementById("root")).render(S.jsx(lI.StrictMode,{children:S.jsx(E3,{store:_9,children:S.jsx(w9,{})})}));
