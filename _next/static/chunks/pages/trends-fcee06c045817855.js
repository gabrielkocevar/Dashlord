(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return a(74650)}])},74650:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var r=a(85893),l=a(9008),n=a.n(l),s=a(67294),o=a(45697),i=a.n(o);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=(0,s.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,n=void 0===l?24:l,o=d(e,["color","size"]);return s.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),s.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.createElement("polyline",{points:"17 6 23 6 23 12"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="TrendingUp";var h=c;function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},v.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var T=(0,s.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,n=void 0===l?24:l,o=p(e,["color","size"]);return s.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),s.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),s.createElement("polyline",{points:"17 18 23 18 23 12"}))}));T.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},T.displayName="TrendingDown";var f=T,Z=a(74041),g=a(18121),y=a(49384),b={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},_=[{name:"trend",label:"Trend",render:function(e){return function(e,t){var a=b[e],r=t[0],l=t[t.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,y.BE)(l)-(0,y.BE)(r):a.reverse?r-l:l-r}(e.key,e.values)>0?(0,r.jsx)(h,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,r.jsx)(f,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return b[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,t,a){return 0===t||t===a.length-1})).join(" => ")}}],m=function(e){var t=e.trends,a=Object.keys(t);return a.sort(),(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,r.jsx)("br",{}),a.map((function(e){var a=function(e){var t={};return Object.keys(e).filter((function(e){return e in b})).forEach((function(a){var r=e[a].map((function(e){return e.date,e.value}));if(r.length>1){var l=r[0],n=r[r.length-1],s=b[a].treshold;(!s||Math.abs(l-n)>(s||0))&&l!==n&&(t[a]=[l,n])}})),t}(t[e]);return Object.keys(a).length?(0,r.jsx)(g.s,{title:(0,y.p5)(e),url:"/url/".concat(encodeURIComponent((0,y.N0)(e))),children:(0,r.jsx)(Z.Table,{columns:_,data:Object.keys(a).map((function(e){return{key:e,values:a[e]}})),rowKey:"key"})},e):null}))]})},G=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2023-12-21T10:41:12.000Z","value":8}],"httpGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A+"}],"nmapGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-12-21T10:41:12.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"dependabotGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"E"}],"dependabotCount":[{"date":"2023-12-21T10:41:12.000Z","value":26}],"testsslExpireSoon":[{"date":"2023-12-21T10:41:12.000Z","value":false},{"date":"2023-12-21T10:52:13.000Z","value":true},{"date":"2023-12-21T11:26:46.000Z","value":false}],"testsslExpireDate":[{"date":"2023-12-21T10:41:12.000Z","value":"2023-07-13T00:27:00.000Z"},{"date":"2023-12-21T11:26:46.000Z","value":"2024-01-28T18:03:00.000Z"}],"testsslGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A+"}],"cookiesGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"B"}],"cookiesCount":[{"date":"2023-12-21T10:41:12.000Z","value":2}],"trackersGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"trackersCount":[{"date":"2023-12-21T10:41:12.000Z","value":0}],"lighthouse_performance":[{"date":"2023-12-21T10:41:12.000Z","value":0.25}],"lighthouse_performanceGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"E"}],"lighthouse_accessibility":[{"date":"2023-12-21T10:41:12.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-12-21T10:41:12.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-12-21T10:41:12.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-12-21T10:41:12.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"E"}],"declaration-a11y":[{"date":"2023-12-21T10:41:12.000Z","value":"C"}],"ecoindexGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"E"},{"date":"2023-12-21T11:26:46.000Z","value":"D"}],"statsGrade":[{"date":"2023-12-21T18:12:09.345Z","value":"F"}],"declaration-rgpd":[]},"https://beta.gouv.fr":{"404":[{"date":"2023-12-21T10:41:12.000Z","value":12},{"date":"2023-12-21T11:26:46.000Z","value":9}],"httpGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"D+"}],"nmapGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-12-21T10:41:12.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2023-12-21T10:41:12.000Z","value":false},{"date":"2023-12-21T10:52:13.000Z","value":true},{"date":"2023-12-21T11:26:46.000Z","value":false}],"testsslExpireDate":[{"date":"2023-12-21T10:41:12.000Z","value":"2023-06-23T07:23:00.000Z"},{"date":"2023-12-21T11:26:46.000Z","value":"2024-02-18T07:27:00.000Z"}],"testsslGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A+"}],"cookiesGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"B"},{"date":"2023-12-21T11:26:46.000Z","value":"C"}],"cookiesCount":[{"date":"2023-12-21T10:41:12.000Z","value":2},{"date":"2023-12-21T11:26:46.000Z","value":4}],"trackersGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"trackersCount":[{"date":"2023-12-21T10:41:12.000Z","value":0}],"lighthouse_performance":[{"date":"2023-12-21T10:41:12.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2023-12-21T10:41:12.000Z","value":0.92}],"lighthouse_accessibilityGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-12-21T10:41:12.000Z","value":0.92},{"date":"2023-12-21T11:26:46.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-12-21T10:41:12.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-12-21T10:41:12.000Z","value":0.6}],"lighthouse_pwaGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"C"}],"declaration-a11y":[{"date":"2023-12-21T10:41:12.000Z","value":"C"}],"ecoindexGrade":[{"date":"2023-12-21T10:41:12.000Z","value":"B"}]},"https://www.gouvernement.fr":{"404":[{"date":"2023-12-21T12:34:03.000Z","value":"A+"}],"httpGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"D"}],"testsslExpireSoon":[{"date":"2023-12-21T12:34:03.000Z","value":false}],"testsslExpireDate":[{"date":"2023-12-21T12:34:03.000Z","value":"2024-07-17T21:59:00.000Z"}],"testsslGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"T"}],"cookiesGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"E"}],"cookiesCount":[{"date":"2023-12-21T12:34:03.000Z","value":10}],"trackersGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"C"}],"trackersCount":[{"date":"2023-12-21T12:34:03.000Z","value":7}],"lighthouse_performance":[{"date":"2023-12-21T12:34:03.000Z","value":0.15245189666748046}],"lighthouse_performanceGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2023-12-21T12:34:03.000Z","value":0.93}],"lighthouse_accessibilityGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-12-21T12:34:03.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-12-21T12:34:03.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-12-21T12:34:03.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"E"}],"declaration-a11y":[{"date":"2023-12-21T12:34:03.000Z","value":"B"}],"ecoindexGrade":[{"date":"2023-12-21T12:34:03.000Z","value":"E"}]}}'),x=a(59455),j=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n(),{children:(0,r.jsxs)("title",{children:["Evolutions - ",x.title]})}),(0,r.jsx)(m,{trends:G})]})}},18121:function(e,t,a){"use strict";a.d(t,{s:function(){return v}});var r=a(85893),l=(a(67294),a(94184)),n=a.n(l),s=a(659),o=a(73973),i=a(83206),u=a(41664),d=a.n(u),c=a(75670),h=a.n(c),v=function(e){var t=e.title,a=e.children,l=e.info,u=e.url,c=e.urlText,v=void 0===c?"":c,p=e.className,T=e.isExternal,f=void 0!==T&&T;return(0,r.jsxs)("div",{className:n()(h().container,p),children:[(0,r.jsxs)("div",{className:h().banner,children:[(0,r.jsx)("h5",{className:h().mainTitle,children:t}),l&&(0,r.jsx)(s.Z,{overlay:l,children:(0,r.jsx)(o.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),u&&(f?(0,r.jsx)("a",{style:{float:"right"},href:u,target:"_blank",rel:"noreferrer noopener",children:v}):(0,r.jsx)(d(),{prefetch:!1,href:u,children:(0,r.jsxs)("a",{style:{float:"right"},children:[v,(0,r.jsx)(i.Z,{})]})}))]}),(0,r.jsx)("div",{className:h().body,children:a})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return t=21105,e(e.s=t);var t}));var t=e.O();_N_E=t}]);