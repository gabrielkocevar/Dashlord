(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{94533:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(19013),a=r(24262),l=r(13882);function o(e){(0,l.Z)(1,arguments);var t=(0,n.Z)(e);return t.setHours(0,0,0,0),t}function s(e,t){var r=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return r<0?-1:r>0?1:r}function u(e,t){(0,l.Z)(2,arguments);var r=(0,n.Z)(e),u=(0,n.Z)(t),i=s(r,u),c=Math.abs(function(e,t){(0,l.Z)(2,arguments);var r=o(e),n=o(t);return Math.round((r.getTime()-(0,a.Z)(r)-(n.getTime()-(0,a.Z)(n)))/864e5)}(r,u));r.setDate(r.getDate()-i*c);var d=Number(s(r,u)===-i),f=i*(c-d);return 0===f?0:f}},4314:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(19013),a=r(13882);function l(e,t){(0,a.Z)(2,arguments);var r=(0,n.Z)(e),l=(0,n.Z)(t),o=r.getTime()-l.getTime();return o<0?-1:o>0?1:o}var o={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},s=r(95826),u=r(24262);function i(e,t){return(0,a.Z)(1,arguments),function(e,t){var r,i,c,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,a.Z)(2,arguments);var f=d.locale||s.Z;if(!f.formatDistance)throw RangeError("locale must contain formatDistance property");var m=l(e,t);if(isNaN(m))throw RangeError("Invalid time value");var h=function(e,t){if(null==e)throw TypeError("assign requires that input parameter not be null or undefined");for(var r in t=t||{})Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}({},d);h.addSuffix=!!d.addSuffix,h.comparison=m,m>0?(r=(0,n.Z)(t),i=(0,n.Z)(e)):(r=(0,n.Z)(e),i=(0,n.Z)(t));var p=function(e,t,r){(0,a.Z)(2,arguments);var l,s=function(e,t){return(0,a.Z)(2,arguments),(0,n.Z)(e).getTime()-(0,n.Z)(t).getTime()}(e,t)/1e3;return((l=null==r?void 0:r.roundingMethod)?o[l]:o.trunc)(s)}(i,r),g=Math.round((p-((0,u.Z)(i)-(0,u.Z)(r))/1e3)/60);if(g<2){if(d.includeSeconds){if(p<5)return f.formatDistance("lessThanXSeconds",5,h);if(p<10)return f.formatDistance("lessThanXSeconds",10,h);if(p<20)return f.formatDistance("lessThanXSeconds",20,h);if(p<40)return f.formatDistance("halfAMinute",null,h);else if(p<60)return f.formatDistance("lessThanXMinutes",1,h);else return f.formatDistance("xMinutes",1,h)}return 0===g?f.formatDistance("lessThanXMinutes",1,h):f.formatDistance("xMinutes",g,h)}if(g<45)return f.formatDistance("xMinutes",g,h);if(g<90)return f.formatDistance("aboutXHours",1,h);if(g<1440)return f.formatDistance("aboutXHours",Math.round(g/60),h);if(g<2520)return f.formatDistance("xDays",1,h);if(g<43200)return f.formatDistance("xDays",Math.round(g/1440),h);if(g<86400)return c=Math.round(g/43200),f.formatDistance("aboutXMonths",c,h);if((c=function(e,t){(0,a.Z)(2,arguments);var r,o=(0,n.Z)(e),s=(0,n.Z)(t),u=l(o,s),i=Math.abs(function(e,t){(0,a.Z)(2,arguments);var r=(0,n.Z)(e),l=(0,n.Z)(t);return 12*(r.getFullYear()-l.getFullYear())+(r.getMonth()-l.getMonth())}(o,s));if(i<1)r=0;else{1===o.getMonth()&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-u*i);var c=l(o,s)===-u;(function(e){(0,a.Z)(1,arguments);var t=(0,n.Z)(e);return(function(e){(0,a.Z)(1,arguments);var t=(0,n.Z)(e);return t.setHours(23,59,59,999),t})(t).getTime()===(function(e){(0,a.Z)(1,arguments);var t=(0,n.Z)(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t})(t).getTime()})((0,n.Z)(e))&&1===i&&1===l(e,s)&&(c=!1),r=u*(i-Number(c))}return 0===r?0:r}(i,r))<12)return f.formatDistance("xMonths",Math.round(g/43200),h);var b=c%12,y=Math.floor(c/12);return b<3?f.formatDistance("aboutXYears",y,h):b<9?f.formatDistance("overXYears",y,h):f.formatDistance("almostXYears",y+1,h)}(e,Date.now(),t)}},50242:function(e,t,r){"use strict";r.d(t,{bZ:function(){return f}});var n=r(67294),a=r(80405),l=r(77458),o=r(60129),s=r(62613),u=r(26463),i=r(16094),c=r(59272),d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};let f=(0,n.memo)((0,n.forwardRef)((e,t)=>{let{className:r,id:a,severity:i,as:f="h3",classes:h={},style:p,small:g,title:b,description:y,closable:_=!1,isClosed:v,onClose:M}=e,Z=d(e,["className","id","severity","as","classes","style","small","title","description","closable","isClosed","onClose"]);(0,s.assert)();let D=(0,c.t)({explicitlyProvidedId:a,defaultIdPrefix:"fr-alert"}),[O,x]=(0,n.useState)(null!=v&&v),[w,T]=(0,n.useState)(null),E=(0,n.useRef)(!1),P=(0,n.useRef)(!1);(0,n.useEffect)(()=>{void 0!==v&&x(e=>(e&&!v&&(E.current=!0,P.current=!0),v))},[v]),(0,n.useEffect)(()=>{E.current&&null!==w&&(E.current=!1,w.focus())},[w]);let j=(0,u.O)(()=>{void 0===v?(x(!0),null==M||M()):M()}),{t:S}=m();return O?null:n.createElement("div",Object.assign({id:D,className:(0,o.cx)(l.fr.cx("fr-alert","fr-alert--".concat(i),{"fr-alert--sm":g}),h.root,r),style:p},P.current&&{role:"alert"},{ref:t},Z),void 0!==b&&n.createElement(f,{className:(0,o.cx)(l.fr.cx("fr-alert__title"),h.title)},b),n.createElement("string"==typeof y?"p":"div",{className:h.description},y),_&&n.createElement("button",{ref:T,className:(0,o.cx)(l.fr.cx("fr-link--close","fr-link"),h.close),onClick:j},S("hide message")))}));f.displayName=(0,a.r)({Alert:f}),t.ZP=f;let{useTranslation:m,addAlertTranslations:h}=(0,i.Lf)({componentName:(0,a.r)({Alert:f}),frMessages:{"hide message":"Masquer le message"}});h({lang:"en",messages:{"hide message":"Hide the message"}}),h({lang:"es",messages:{"hide message":"Occultar el mesage"}})},83841:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return o},default:function(){return s}});let n=r(38754);r(85893),r(67294);let a=n._(r(28354));function l(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function s(e,t){let r=a.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let s=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=s?s().then(l):Promise.resolve(l(()=>null))}):(delete n.webpack,delete n.modules,o(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},77309:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(38754)._(r(67294)).default.createContext(null)},28354:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let n=r(38754)._(r(67294)),a=r(77309),l=[],o=[],s=!1;function u(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class i{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function u(){if(!l){let t=new i(e,r);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!s){let e=r.webpack?r.webpack():r.modules;e&&o.push(t=>{for(let r of e)if(t.includes(r))return u()})}function c(e,t){!function(){u();let e=n.default.useContext(a.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let o=n.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),n.default.useMemo(()=>{var t;return o.loading||o.error?n.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:l.retry}):o.loaded?n.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return c.preload=()=>u(),c.displayName="LoadableComponent",n.default.forwardRef(c)}(u,e)}function d(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(l).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(s=!0,t());d(o,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let f=c},5152:function(e,t,r){e.exports=r(83841)}}]);