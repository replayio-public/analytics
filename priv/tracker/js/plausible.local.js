!function(){"use strict";var t,a=window.location,r=window.document,e=window.localStorage,o=r.currentScript,w=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event",s=e&&e.plausible_ignore;function i(t,e){var i,n;window.phantom||window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress||("true"!=s?((i={}).n=t,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=JSON.stringify(e.props)),(n=new XMLHttpRequest).open("POST",w,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4==n.readyState&&e&&e.callback&&e.callback()}):console.warn("Ignoring Event: localStorage flag"))}function n(){t!==a.pathname&&(t=a.pathname,i("pageview"))}var p,d=window.history;d.pushState&&(p=d.pushState,d.pushState=function(){p.apply(this,arguments),n()},window.addEventListener("popstate",n));var l=window.plausible&&window.plausible.q||[];window.plausible=i;for(var u=0;u<l.length;u++)i.apply(this,l[u]);"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){t||"visible"!==r.visibilityState||n()}):n()}();