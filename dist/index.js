!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).routerHelper=t()}(this,(function(){"use strict";function e(e){var t=function(e){return null!=e};if(void 0!==e.Vue&&void 0!==e.router){var n=e.Vue,o=e.router,r=o.mode,i=e.replaceStay||[],a=!1;o._stack=0;var c,s=null,u=!1,p=0,l=!1,h=[],f=function(){return o._stack},d=function(e){return o._stack=e},v={__placeholder:!0};o.afterEach((function(e,t){l=!0,n.nextTick((function(){var e,t=x(),n=null!=(e=t)&&e.$vnode.data.keepAlive?e:v;null===s?y():u?$(n):j()?k(n):m(),s=t,p=f(),n.__placeholder||(S(),!a&&t&&g(t.$vnode.parent.componentInstance),l=!1)}))}));var y=function(){var e=_();t(e)?d(e):O(0),w(x())},k=function(e){O(o._stack+=1),w(e)},m=function(){(h.pop()||[]).forEach((function(e){return e&&e.$keepAliveDestroy()})),o._stack-=1},$=function(e){t(c)&&-1!==i.indexOf(c)||s.$keepAliveDestroy(),O(f()),w(e),u=!1,c=void 0},g=function(e){H(e,I(f()));var n=e.$options.render;e.$options.render=function(){var e=this.$slots.default,o=U(e);return l?o&&!t(o.key)&&(u?o.key=I(f()):j()?o.key=I(f()+1):o.key=I(f()-1)):o.key=I(f()),n.apply(this,arguments)},a=!0},w=function(e){var t=f(),n=h[t];if(Array.isArray(n))!n.includes(e)&&n.push(e),h[t]=n.filter((function(e){return!(null!=e&&e._isDestroyed)}));else{var o=[];o.push(e),h[t]=o}},_=function(){var e=A();return t(e)?e.id:void 0},O=function(e){var n=window.location.pathname+("hash"===r?window.location.hash:"");window.location.href.startsWith("file://")&&(n=("hash"===r?window.location.href.split("#")[0]:window.location.href.splice(".html")[0]+".html")+n);n+=b(o.history.current.query);var i=t(history.state)?history.state:{};i.id=e,d(e),history.replaceState(i,"",n)},b=function(e){var t="";return(t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")).length>0&&(t="?"+t),t},A=function(){return history.state},j=function(){if(!u){var e=_();return!t(e)||p<=e}return!1},I=function(e){return"keep-alive-vnode-key"+Number(e)+o.history.current.path},x=function(){return o.history.current.matched.length>0?o.history.current.matched[0].instances.default:void 0},S=function(){var e=x();e&&e._vnode&&(e._vnode.parent.key=I(o._stack))},C=history.replaceState;history.replaceState=function(e,t,n){var o=Object.assign({},history.state),r=Object.assign(o,e);C.call(history,r,t,n)};var D=history.pushState;history.pushState=function(e,t,n){var o=Object.assign({},history.state),r=Object.assign(o,e);D.call(history,r,t,n)};var T=o.replace;o.replace=function(e,n,r){u=!0,c=o.history.current.path,T.call(o,e,n,(function(e){u=!1,c=void 0,t(r)&&r(e)}))};var V=o.go;o.go=function(e){return u=!1,V.call(o,e)};var E=o.push;o.push=function(e,t,n){if(u=!1,!t&&!n&&"undefined"!=typeof Promise)return E.call(o,e,t,n);E.call(o,e,t,n)};var H=function(e,n){if(t(e)&&t(e.cache)&&t(e.keys)){var o=e.keys,r=e.cache;if(1===o.length){var i=r[o[0]];delete r[o[0]],o.splice(0,1),o.push(n),r[n]=i}}},R=n.prototype.$destroy;n.prototype.$keepAliveDestroy=function(){if(this.$vnode&&this.$vnode.data.keepAlive&&this.$vnode.parent&&this.$vnode.parent.componentInstance&&this.$vnode.parent.componentInstance.cache&&this.$vnode.componentOptions){var e=t(this.$vnode.key)?this.$vnode.key:this.$vnode.componentOptions.Ctor.cid+(this.$vnode.componentOptions.tag?"::"+this.$vnode.componentOptions.tag:""),n=this.$vnode.parent.componentInstance.cache,o=this.$vnode.parent.componentInstance.keys;if(n[e]){if(o.length){var r=o.indexOf(e);r>-1&&o.splice(r,1)}delete n[e]}}R.apply(this,arguments)};var U=function(e){if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n];if(t(o)&&(t(o.componentOptions)||q(o)))return o}},q=function(e){return e.isComment&&e.asyncFactory}}else console.warn("warning: router helper needs Vue and root router ,see more for guide : https://github.com/Zippowxk/vue-router-keep-alive-helper")}return"undefined"!=typeof window&&(window.createHelper=e),e}));
//# sourceMappingURL=index.js.map
