window.wp=window.wp||{},window.wp.editNavigation=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=511)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},11:function(e,t){e.exports=window.wp.blocks},13:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(48);function o(e,t){if(null==e)return{};var n,o,c=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},14:function(e,t){e.exports=window.wp.compose},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(25),o=n(40),c=n(30);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(o.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},16:function(e,t){e.exports=window.regeneratorRuntime},189:function(e,t,n){"use strict";var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function c(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}for(var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(e){return"string"==typeof e&&i.test(e)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));t.a=function(e,t,n){var r=(e=e||{}).random||(e.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n}(r)}},19:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},2:function(e,t){e.exports=window.lodash},22:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},25:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},27:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},28:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},29:function(e,t){e.exports=window.wp.url},3:function(e,t){e.exports=window.wp.components},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(25);function o(e,t){if(e){if("string"==typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(58);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(43),o=n(19);function c(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!=typeof t?Object(o.a)(e):t}},34:function(e,t){e.exports=window.wp.hooks},39:function(e,t){e.exports=window.wp.coreData},4:function(e,t){e.exports=window.wp.data},40:function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},41:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},42:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},43:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},45:function(e,t){e.exports=window.wp.keyboardShortcuts},46:function(e,t,n){"use strict";function r(e,t,n,r,o,c,i){try{var a=e[c](i),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var i=e.apply(t,n);function a(e){r(i,o,c,a,u,"next",e)}function u(e){r(i,o,c,a,u,"throw",e)}a(void 0)}))}}n.d(t,"a",(function(){return o}))},47:function(e,t){e.exports=window.wp.apiFetch},48:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},5:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},51:function(e,t){e.exports=window.wp.notices},511:function(e,t,n){"use strict";n.r(t),n.d(t,"initialize",(function(){return $e}));var r={};n.r(r),n.d(r,"getNavigationPostForMenu",(function(){return J}));var o={};n.r(o),n.d(o,"getNavigationPostForMenu",(function(){return ee})),n.d(o,"hasResolvedNavigationPost",(function(){return te})),n.d(o,"getMenuItemForClientId",(function(){return ne}));var c={};n.r(c),n.d(c,"createMissingMenuItems",(function(){return ae})),n.d(c,"saveNavigationPost",(function(){return ue}));var i=n(10),a=n(5),u=n(0),s=n(2),l=n(73),f=n(14),p=n(1),b=n(47),d=n.n(b),O=n(29),m=n(68),v=n(34),y=n(9),j=n(3),g=n(4),h=n(6),_=n(16),E=n.n(_),w=n(46),S=n(15),P=n(13);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=Object(g.combineReducers)({mapping:function(e,t){var n=t.type,r=t.postId,o=Object(P.a)(t,["type","postId"]);return"SET_MENU_ITEM_TO_CLIENT_ID_MAPPING"===n?k(k({},e),{},Object(a.a)({},r,o.mapping)):e||{}},processingQueue:function(e,t){var n,r=t.type,o=t.postId,c=Object(P.a)(t,["type","postId"]);switch(r){case"START_PROCESSING_POST":return k(k({},e),{},Object(a.a)({},o,k(k({},e[o]),{},{inProgress:!0})));case"FINISH_PROCESSING_POST":return k(k({},e),{},Object(a.a)({},o,k(k({},e[o]),{},{inProgress:!1})));case"POP_PENDING_ACTION":var i,u=k({},e[o]);return"pendingActions"in u&&(u.pendingActions=null===(i=u.pendingActions)||void 0===i?void 0:i.filter((function(e){return e!==c.action}))),k(k({},e),{},Object(a.a)({},o,u));case"ENQUEUE_AFTER_PROCESSING":var s=(null===(n=e[o])||void 0===n?void 0:n.pendingActions)||[];if(!s.includes(c.action))return k(k({},e),{},Object(a.a)({},o,k(k({},e[o]),{},{pendingActions:[].concat(Object(S.a)(s),[c.action])})))}return e||{}}}),N=n(11);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){return"navigation-post-".concat(e)};function M(e){return{menus:e,per_page:-1}}function R(e){return E.a.mark((function t(n){var r,o,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.id,t.next=3,G(r);case 3:if(!t.sent){t.next=8;break}return t.next=7,{type:"ENQUEUE_AFTER_PROCESSING",postId:r,action:e};case 7:return t.abrupt("return",{status:"pending"});case 8:return t.next=10,{type:"POP_PENDING_ACTION",postId:r,action:e};case 10:return t.next=12,{type:"START_PROCESSING_POST",postId:r};case 12:return t.prev=12,t.t0=e,t.next=16,i=n.meta.menuId,{type:"SELECT",registryName:B,selectorName:"getNavigationPostForMenu",args:[i]};case 16:return t.t1=t.sent,t.delegateYield((0,t.t0)(t.t1),"t2",18);case 18:return t.prev=18,t.next=21,{type:"FINISH_PROCESSING_POST",postId:r,action:e};case 21:return t.next=23,F(r);case 23:if(!(o=t.sent).length){t.next=27;break}return c=R(o[0]),t.delegateYield(c(n),"t3",27);case 27:return t.finish(18);case 28:case"end":return t.stop()}var i}),t,null,[[12,,18,28]])}))}function A(e,t,n){var r=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.flatMap((function(t,r){var o;return[{block:t,parentId:n,position:r+1}].concat(e(t.innerBlocks,null===(o=u(t))||void 0===o?void 0:o.id))}))}(e).map((function(e){return n=e.block,r=e.parentId,o=e.position,f=Object(s.omit)(u(n),"menus","meta"),c="core/navigation-link"===n.name?{type:"custom",title:null===(i=n.attributes)||void 0===i?void 0:i.label,original_title:"",url:n.attributes.url,description:n.attributes.description,xfn:null===(a=n.attributes.rel)||void 0===a?void 0:a.split(" "),classes:null===(l=n.attributes.className)||void 0===l?void 0:l.split(" "),attr_title:n.attributes.title}:{type:"block",content:Object(N.serialize)(n)},C(C(C({},f),c),{},{position:o,nav_menu_term_id:t,menu_item_parent:r,status:"publish",_invalid:!1});var n,r,o,c,i,a,l,f})),o=function(e){return"nav_menu_item[".concat(e.id,"]")},c=Object(s.keyBy)(r,o);for(var i in n){var a=o(n[i]);a in c||(c[a]=!1)}return JSON.stringify(c);function u(e){return Object(s.omit)(n[e.clientId]||{},"_links")}}var B="core/edit-navigation";function L(e){return{type:"API_FETCH",request:e}}function F(e){return{type:"GET_PENDING_ACTIONS",postId:e}}function G(e){return{type:"IS_PROCESSING_POST",postId:e}}function U(e){return{type:"GET_MENU_ITEM_TO_CLIENT_ID_MAPPING",postId:e}}function z(e){return{type:"RESOLVE_MENU_ITEMS",query:M(e)}}function V(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return{type:"DISPATCH",registryName:e,actionName:t,args:r}}var Q={API_FETCH:function(e){var t=e.request;return d()(t)},SELECT:Object(g.createRegistryControl)((function(e){return function(t){var n,r=t.registryName,o=t.selectorName,c=t.args;return(n=e.select(r))[o].apply(n,Object(S.a)(c))}})),GET_PENDING_ACTIONS:Object(g.createRegistryControl)((function(e){return function(t){var n,r=t.postId;return(null===(n=H(e).processingQueue[r])||void 0===n?void 0:n.pendingActions)||[]}})),IS_PROCESSING_POST:Object(g.createRegistryControl)((function(e){return function(t){var n,r=t.postId;return!(null===(n=H(e).processingQueue[r])||void 0===n||!n.inProgress)}})),GET_MENU_ITEM_TO_CLIENT_ID_MAPPING:Object(g.createRegistryControl)((function(e){return function(t){var n=t.postId;return H(e).mapping[n]||{}}})),DISPATCH:Object(g.createRegistryControl)((function(e){return function(t){var n,r=t.registryName,o=t.actionName,c=t.args;return(n=e.dispatch(r))[o].apply(n,Object(S.a)(c))}})),RESOLVE_MENU_ITEMS:Object(g.createRegistryControl)((function(e){return function(t){var n=t.query;return e.resolveSelect("core").getMenuItems(n)}}))},H=function(e){return e.stores[B].store.getState()},q=Q;function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=E.a.mark(J);function J(e){var t,n,r,o,c,i,a;return E.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(e){u.next=2;break}return u.abrupt("return");case 2:return t=K(e),u.next=5,W(t);case 5:return n=["root","postType",t.id],u.next=8,V("core","startResolution","getEntityRecord",n);case 8:return u.next=10,z(e);case 10:return r=u.sent,o=Z(r),c=Object(y.a)(o,2),i=c[0],a=c[1],u.next=14,{type:"SET_MENU_ITEM_TO_CLIENT_ID_MAPPING",postId:t.id,mapping:a};case 14:return u.next=16,W(K(e,i));case 16:return u.next=18,V("core","finishResolution","getEntityRecord",n);case 18:case"end":return u.stop()}}),Y)}var K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=D(e);return{id:n,slug:n,status:"draft",type:"page",blocks:t?[t]:[],meta:{menuId:e}}},W=function(e){return V("core","receiveEntityRecords","root","postType",e,{id:e.id},!1)};function Z(e){var t=Object(s.groupBy)(e,"parent"),n={},r=function e(r){var o=[];if(r){var c,i=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return $(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw c}}}}(Object(s.sortBy)(r,"menu_order"));try{for(i.s();!(c=i.n()).done;){var a,u=c.value,l=[];null!==(a=t[u.id])&&void 0!==a&&a.length&&(l=e(t[u.id]));var f=X(u,l);n[u.id]=f.clientId,o.push(f)}}catch(e){i.e(e)}finally{i.f()}return o}}(t[0]||[]);return[Object(N.createBlock)("core/navigation",{orientation:"vertical"},r),n]}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if("block"===e.type){var n=Object(N.parse)(e.content.raw),r=Object(y.a)(n,1),o=r[0];return o?Object(N.createBlock)(o.name,o.attributes,t):Object(N.createBlock)("core/freeform",{originalContent:e.content.raw})}var c={label:e.title.rendered,url:e.url,title:e.attr_title,className:e.classes.join(" "),description:e.description,rel:e.xfn.join(" ")};return Object(N.createBlock)("core/navigation-link",c,t)}var ee=Object(g.createRegistrySelector)((function(e){return function(t,n){return te(t,n)?e("core").getEditedEntityRecord("root","postType",D(n)):null}})),te=Object(g.createRegistrySelector)((function(e){return function(t,n){return e("core").hasFinishedResolution("getEntityRecord",["root","postType",D(n)])}})),ne=Object(g.createRegistrySelector)((function(e){return function(t,n,r){var o=Object(s.invert)(t.mapping[n]);return e("core").getMenuItem(o[r])}})),re=n(189),oe=n(51),ce=E.a.mark(le);function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ae=R(E.a.mark((function e(t){var n,r,o,c,i,a,u;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.meta.menuId,e.next=3,U(t.id);case 3:r=e.sent,o=Object(s.invert)(r),c=[t.blocks[0]];case 6:if(!c.length){e.next=21;break}if((i=c.pop()).clientId in o){e.next=18;break}return e.next=11,L({path:"/__experimental/menu-items",method:"POST",data:{title:"Placeholder",url:"Placeholder",menu_order:0}});case 11:return a=e.sent,r[a.id]=i.clientId,e.next=15,z(n);case 15:return u=e.sent,e.next=18,V("core","receiveEntityRecords","root","menuItem",[].concat(Object(S.a)(u),[a]),M(n),!1);case 18:c.push.apply(c,Object(S.a)(i.innerBlocks)),e.next=6;break;case 21:return e.next=23,{type:"SET_MENU_ITEM_TO_CLIENT_ID_MAPPING",postId:t.id,mapping:r};case 23:case"end":return e.stop()}}),e)}))),ue=R(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.meta.menuId,e.t0=se,e.next=4,z(n);case 4:return e.t1=e.sent,e.next=7,U(t.id);case 7:return e.t2=e.sent,r=(0,e.t0)(e.t1,e.t2),e.prev=9,e.delegateYield(le(n,r,t.blocks[0]),"t3",11);case 11:if(e.t3.success){e.next=14;break}throw new Error;case 14:return e.next=16,V(oe.store,"createSuccessNotice",Object(p.__)("Navigation saved."),{type:"snackbar"});case 16:e.next=22;break;case 18:return e.prev=18,e.t4=e.catch(9),e.next=22,V(oe.store,"createErrorNotice",Object(p.__)("There was an error."),{type:"snackbar"});case 22:case"end":return e.stop()}}),e,null,[[9,18]])})));function se(e,t){var n={};if(!e||!t)return n;var r,o=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return ie(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw c}}}}(e);try{for(o.s();!(r=o.n()).done;){var c=r.value,i=t[c.id];i&&(n[i]=c)}}catch(e){o.e(e)}finally{o.f()}return n}function le(e,t,n){var r,o,c,i;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,L({path:"/__experimental/customizer-nonces/get-save-nonce"});case 2:if(r=a.sent,o=r.nonce,c=r.stylesheet,o){a.next=7;break}throw new Error;case 7:return(i=new FormData).append("wp_customize","on"),i.append("customize_theme",c),i.append("nonce",o),i.append("customize_changeset_uuid",Object(re.a)()),i.append("customize_autosaved","on"),i.append("customize_changeset_status","publish"),i.append("action","customize_save"),i.append("customized",A(n.innerBlocks,e,t)),a.next=18,L({url:"/wp-admin/admin-ajax.php",method:"POST",body:i});case 18:return a.abrupt("return",a.sent);case 19:case"end":return a.stop()}}),ce)}var fe={reducer:x,controls:q,selectors:o,resolvers:r,actions:c},pe=Object(g.createReduxStore)(B,fe);Object(g.register)(pe);var be=n(39),de=n(27),Oe=n(28),me=n(19),ve=n(31),ye=n(32),je=n(22);var ge=function(e){Object(ve.a)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=Object(je.a)(t);if(n){var o=Object(je.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(ye.a)(this,e)});function o(){var e;return Object(de.a)(this,o),(e=r.apply(this,arguments)).reboot=e.reboot.bind(Object(me.a)(e)),e.state={error:null},e}return Object(Oe.a)(o,[{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"reboot",value:function(){this.props.onError&&this.props.onError()}},{key:"render",value:function(){return this.state.error?Object(u.createElement)(h.Warning,{className:"navigation-editor-error-boundary",actions:[Object(u.createElement)(j.Button,{key:"recovery",onClick:this.reboot,isSecondary:!0},Object(p.__)("Attempt Recovery"))]},Object(p.__)("The navigation editor has encountered an unexpected error.")):this.props.children}}]),o}(u.Component),he=n(45);function _e(e){var t=e.saveBlocks;Object(he.useShortcut)("core/edit-navigation/save-menu",Object(u.useCallback)((function(e){e.preventDefault(),t()})),{bindGlobal:!0});var n=Object(g.useDispatch)("core"),r=n.redo,o=n.undo;return Object(he.useShortcut)("core/edit-navigation/undo",(function(e){o(),e.preventDefault()}),{bindGlobal:!0}),Object(he.useShortcut)("core/edit-navigation/redo",(function(e){r(),e.preventDefault()}),{bindGlobal:!0}),null}_e.Register=function(){var e=Object(g.useDispatch)(he.store).registerShortcut;return Object(u.useEffect)((function(){e({name:"core/edit-navigation/save-menu",category:"global",description:Object(p.__)("Save the navigation currently being edited."),keyCombination:{modifier:"primary",character:"s"}}),e({name:"core/edit-navigation/undo",category:"global",description:Object(p.__)("Undo your last changes."),keyCombination:{modifier:"primary",character:"z"}}),e({name:"core/edit-navigation/redo",category:"global",description:Object(p.__)("Redo your last undo."),keyCombination:{modifier:"primaryShift",character:"z"}})}),[e]),null};var Ee=_e;function we(e){var t=e.navigationPost,n=Object(g.useDispatch)(pe).saveNavigationPost;return Object(u.createElement)(j.Button,{className:"edit-navigation-toolbar__save-button",isPrimary:!0,onClick:function(){n(t)},disabled:!t},Object(p.__)("Save"))}function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ie(){var e=Object(g.useSelect)((function(e){return e("core").getMenus()}),[]),t=function(){var e=Object(u.useState)(null),t=Object(y.a)(e,2),n=t[0],r=t[1];Object(u.useEffect)((function(){var e=!0;return function(){var t=Object(w.a)(E.a.mark((function t(){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d()({method:"GET",path:"/__experimental/menu-locations"});case 2:n=t.sent,e&&r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){return e=!1}}),[]);var o=Object(g.useDispatch)("core").saveMenu,c=Object(u.useCallback)(function(){var e=Object(w.a)(E.a.mark((function e(t,c){var i,u,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n[t].menu,u=Pe(Pe({},n),{},Object(a.a)({},t,Pe(Pe({},n[t]),{},{menu:c}))),r(u),s=[],i&&s.push(o({id:i,locations:Object.values(u).filter((function(e){return e.menu===i})).map((function(e){return e.name}))})),c&&s.push(o({id:c,locations:Object.values(u).filter((function(e){return e.menu===c})).map((function(e){return e.name}))})),e.next=8,Promise.all(s);case 8:case"end":return e.stop()}}),e)})));return function(_x,t){return e.apply(this,arguments)}}(),[n]);return[Object(u.useMemo)((function(){return n?Object.values(n):null}),[n]),c]}(),n=Object(y.a)(t,2),r=n[0],o=n[1];return e&&r?e.length?r.length?r.map((function(t){return Object(u.createElement)(j.SelectControl,{key:t.name,label:t.description,labelPosition:"top",value:t.menu,options:[{value:0,label:Object(p.__)("-")}].concat(Object(S.a)(e.map((function(e){return{value:e.id,label:e.name}})))),onChange:function(e){o(t.name,Number(e))}})})):Object(u.createElement)("p",null,Object(p.__)("There are no available menu locations.")):Object(u.createElement)("p",null,Object(p.__)("There are no available menus.")):Object(u.createElement)(j.Spinner,null)}var ke=function(e){return function(t){return t.name.toLowerCase()===e.toLowerCase()}};function xe(e){var t=e.menus,n=e.onCreate,r=Object(u.useState)(""),o=Object(y.a)(r,2),c=o[0],i=o[1],a=Object(g.useDispatch)(oe.store),l=a.createErrorNotice,f=a.createInfoNotice,b=Object(u.useState)(!1),d=Object(y.a)(b,2),O=d[0],m=d[1],v=Object(g.useDispatch)("core").saveMenu,h=function(){var e=Object(w.a)(E.a.mark((function e(r){var o,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),c.length){e.next=3;break}return e.abrupt("return");case 3:if(!Object(s.some)(t,ke(c))){e.next=7;break}return o=Object(p.sprintf)(// translators: %s: the name of a menu.
Object(p.__)("The menu name %s conflicts with another menu name. Please try another."),c),l(o,{id:"edit-navigation-error"}),e.abrupt("return");case 7:return m(!0),e.next=10,v({name:c});case 10:(i=e.sent)&&(f(Object(p.__)("Menu created"),{type:"snackbar",isDismissible:!0}),n(i.id)),m(!1);case 13:case"end":return e.stop()}}),e)})));return function(_x){return e.apply(this,arguments)}}();return Object(u.createElement)("form",{onSubmit:h,className:"edit-navigation-header__add-menu-form"},Object(u.createElement)(j.TextControl,{autoFocus:!0,label:Object(p.__)("Menu name"),value:c,onChange:i}),Object(u.createElement)(j.Button,{className:"edit-navigation-header__create-menu-button",type:"submit",isPrimary:!0,disabled:!c.length,isBusy:O},Object(p.__)("Create menu")))}function Ne(e){var t,n=e.menus,r=e.selectedMenuId,o=e.onSelectMenu,c=e.isPending,i=e.navigationPost,a=Object(s.find)(n,{id:r}),l=a?a.name:void 0;return t=l?Object(p.sprintf)(// translators: Name of the menu being edited, e.g. 'Main Menu'.
Object(p.__)("Editing: %s"),l):c?Object(p.__)("Loading …"):Object(p.__)("No menus available"),Object(u.createElement)("div",{className:"edit-navigation-header"},Object(u.createElement)("div",{className:"edit-navigation-header__title-subtitle"},Object(u.createElement)("h1",{className:"edit-navigation-header__title"},Object(p.__)("Navigation")),Object(u.createElement)("h2",{className:"edit-navigation-header__subtitle"},t)),Object(u.createElement)("div",{className:"edit-navigation-header__actions"},Object(u.createElement)(j.DropdownMenu,{icon:null,toggleProps:{showTooltip:!1,children:Object(p.__)("Select menu"),isTertiary:!0,disabled:!(null!=n&&n.length),__experimentalIsFocusable:!0},popoverProps:{position:"bottom left"}},(function(){return Object(u.createElement)(j.MenuGroup,null,Object(u.createElement)(j.MenuItemsChoice,{value:r,onSelect:o,choices:n.map((function(e){return{value:e.id,label:e.name}}))}))})),Object(u.createElement)(j.Dropdown,{position:"bottom left",renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return Object(u.createElement)(j.Button,{isTertiary:!0,"aria-expanded":t,onClick:n},Object(p.__)("Add new"))},renderContent:function(){return Object(u.createElement)(xe,{menus:n,onCreate:o})}}),Object(u.createElement)(j.Dropdown,{contentClassName:"edit-navigation-header__manage-locations",position:"bottom left",renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return Object(u.createElement)(j.Button,{isTertiary:!0,"aria-expanded":t,onClick:n},Object(p.__)("Manage locations"))},renderContent:function(){return Object(u.createElement)(Ie,null)}}),Object(u.createElement)(we,{navigationPost:i}),Object(u.createElement)(j.Popover.Slot,{name:"block-toolbar"})))}function Te(){var e=Object(g.useDispatch)(oe.store).removeNotice,t=Object(g.useSelect)((function(e){return e(oe.store).getNotices()}),[]),n=Object(s.filter)(t,{isDismissible:!0,type:"default"}),r=Object(s.filter)(t,{isDismissible:!1,type:"default"}),o=Object(s.filter)(t,{type:"snackbar"});return Object(u.createElement)(u.Fragment,null,Object(u.createElement)(j.NoticeList,{notices:r,className:"edit-navigation-notices__notice-list"}),Object(u.createElement)(j.NoticeList,{notices:n,className:"edit-navigation-notices__notice-list",onRemove:e}),Object(u.createElement)(j.SnackbarList,{notices:o,className:"edit-navigation-notices__snackbar-list",onRemove:e}))}function Ce(e){var t=e.isPending;return Object(u.createElement)("div",{className:"edit-navigation-editor"},t?Object(u.createElement)(j.Spinner,null):Object(u.createElement)("div",{className:"editor-styles-wrapper"},Object(u.createElement)(h.WritingFlow,null,Object(u.createElement)(h.ObserveTyping,null,Object(u.createElement)(h.BlockList,null)))))}function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Re(e){var t=e.menuId,n=Object(g.useSelect)((function(e){return e("core").getMenu(t)}),[t]),r=Object(u.useState)(null),o=Object(y.a)(r,2),c=o[0],i=o[1];Object(u.useEffect)((function(){null===c&&n&&i(n.auto_add)}),[c,n]);var a=Object(g.useDispatch)("core").saveMenu;return Object(u.createElement)(j.PanelBody,null,Object(u.createElement)(j.CheckboxControl,{label:Object(p.__)("Automatically add new top-level pages"),checked:null!=c&&c,onChange:function(e){i(e),a(Me(Me({},n),{},{auto_add:e}))}}))}function Ae(e){var t=e.onDeleteMenu;return Object(u.createElement)(j.PanelBody,{className:"edit-navigation-inspector-additions__delete-menu-panel"},Object(u.createElement)(j.Button,{isLink:!0,isDestructive:!0,onClick:function(){window.confirm(Object(p.__)("Are you sure you want to delete this navigation?"))&&t()}},Object(p.__)("Delete menu")))}function Be(e){var t=e.menuId,n=e.onDeleteMenu,r=Object(g.useSelect)((function(e){return e("core/block-editor").getSelectedBlock()}),[]);return"core/navigation"!==(null==r?void 0:r.name)?null:Object(u.createElement)(h.InspectorControls,null,Object(u.createElement)(Re,{menuId:t}),Object(u.createElement)(Ae,{onDeleteMenu:n}))}function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ge(e){var t,n,r,o,c,i,a=e.blockEditorSettings,s=Object(g.useDispatch)(pe).saveNavigationPost,l=function(){var e=Object(g.useSelect)((function(e){var t=e("core"),n={per_page:-1};return{menus:t.getMenus(n),hasLoadedMenus:t.hasFinishedResolution("getMenus",[n])}}),[]),t=e.menus,n=e.hasLoadedMenus,r=Object(u.useState)(null),o=Object(y.a)(r,2),c=o[0],i=o[1];Object(u.useEffect)((function(){!c&&null!=t&&t.length&&i(t[0].id)}),[c,t]);var a=Object(g.useSelect)((function(e){return e(pe).getNavigationPostForMenu(c)}),[c]),s=Object(g.useDispatch)("core").deleteMenu;return{menus:t,selectedMenuId:c,navigationPost:a,selectMenu:function(e){i(e)},deleteMenu:function(){var e=Object(w.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(c,{force:!0});case 2:e.sent&&i(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),hasLoadedMenus:n}}(),f=l.menus,p=l.selectedMenuId,b=l.navigationPost,d=l.selectMenu,O=l.deleteMenu,m=l.hasLoadedMenus,v=function(e){var t=Object(g.useDispatch)(pe).createMissingMenuItems,n=Object(be.useEntityBlockEditor)("root","postType",{id:null==e?void 0:e.id}),r=Object(y.a)(n,3),o=r[0],c=r[1],i=r[2];return[o,c,Object(u.useCallback)(Object(w.a)(E.a.mark((function n(){var r=arguments;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.apply(void 0,r);case 2:t(e);case 3:case"end":return n.stop()}}),n)}))),[i,e])]}(b),_=Object(y.a)(v,3),S=_[0],P=_[1],I=_[2];return t=p,n=Object(g.useSelect)((function(e){return{lastSaveError:e("core").getLastEntitySaveError("root","menu"),lastDeleteError:e("core").getLastEntityDeleteError("root","menu",t)}}),[t]),r=n.lastSaveError,o=n.lastDeleteError,c=Object(g.useDispatch)(oe.store).createErrorNotice,i=function(e){var t=(new window.DOMParser).parseFromString(e.message,"text/html").body.textContent||"";c(t,{id:"edit-navigation-error"})},Object(u.useEffect)((function(){r&&i(r)}),[r]),Object(u.useEffect)((function(){o&&i(o)}),[o]),Object(u.createElement)(ge,null,Object(u.createElement)(j.SlotFillProvider,null,Object(u.createElement)(j.DropZoneProvider,null,Object(u.createElement)(h.BlockEditorKeyboardShortcuts.Register,null),Object(u.createElement)(Ee.Register,null),Object(u.createElement)(Te,null),Object(u.createElement)("div",{className:"edit-navigation-layout"},Object(u.createElement)(Ne,{isPending:!m,menus:f,selectedMenuId:p,onSelectMenu:d,navigationPost:b}),Object(u.createElement)(h.BlockEditorProvider,{value:S,onInput:P,onChange:I,settings:Fe(Fe({},a),{},{templateLock:"all"}),useSubRegistry:!1},Object(u.createElement)(h.BlockEditorKeyboardShortcuts,null),Object(u.createElement)(Ee,{saveBlocks:function(){return s(b)}}),Object(u.createElement)("div",{className:"navigation-editor-canvas"},Object(u.createElement)(Ce,{isPending:!b,blocks:S})),Object(u.createElement)(Be,{menuId:p,onDeleteMenu:O})),Object(u.createElement)(h.BlockInspector,{bubblesVirtually:!1})),Object(u.createElement)(j.Popover.Slot,null))))}function Ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ve(e,t){return["core/navigation","core/navigation-link"].includes(t)||Object(s.set)(e,["supports","inserter"],!1),e}function Qe(e,t){return"core/navigation"!==t?e:ze(ze({},e),{},{supports:{customClassName:!1,html:!1,inserter:!0},variations:void 0})}var He=Object(f.createHigherOrderComponent)((function(e){return function(t){return"core/navigation"!==t.name?Object(u.createElement)(e,t):Object(u.createElement)(e,Object(i.a)({},t,{hasSubmenuIndicatorSetting:!1,hasItemJustificationControls:!1,hasListViewModal:!1}))}}),"removeNavigationBlockEditUnsupportedFeatures"),qe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isInitialSuggestions,r=t.type,o=t.subtype,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=c.disablePostFormats,a=void 0!==i&&i,u=n?3:20,l=[];return r&&"post"!==r||l.push(d()({path:Object(O.addQueryArgs)("/wp/v2/search",{search:e,per_page:u,type:"post",subtype:o})}).catch((function(){return[]}))),r&&"term"!==r||l.push(d()({path:Object(O.addQueryArgs)("/wp/v2/search",{search:e,per_page:u,type:"term",subtype:o})}).catch((function(){return[]}))),a||r&&"post-format"!==r||l.push(d()({path:Object(O.addQueryArgs)("/wp/v2/search",{search:e,per_page:u,type:"post-format",subtype:o})}).catch((function(){return[]}))),Promise.all(l).then((function(e){return Object(s.map)(Object(s.flatten)(e).slice(0,u),(function(e){return{id:e.id,url:e.url,title:Object(m.decodeEntities)(e.title)||Object(p.__)("(no title)"),type:e.subtype||e.type}}))}))};function $e(e,t){t.blockNavMenus||Object(v.addFilter)("blocks.registerBlockType","core/edit-navigation/disable-inserting-non-navigation-blocks",Ve),Object(v.addFilter)("blocks.registerBlockType","core/edit-navigation/remove-navigation-block-settings-unsupported-features",Qe),Object(v.addFilter)("editor.BlockEdit","core/edit-navigation/remove-navigation-block-edit-unsupported-features",He),Object(l.registerCoreBlocks)(),Object(l.__experimentalRegisterExperimentalCoreBlocks)(),t.__experimentalFetchLinkSuggestions=Object(s.partialRight)(qe,t),Object(u.render)(Object(u.createElement)(Ge,{blockEditorSettings:t}),document.getElementById(e))}},58:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},6:function(e,t){e.exports=window.wp.blockEditor},68:function(e,t){e.exports=window.wp.htmlEntities},73:function(e,t){e.exports=window.wp.blockLibrary},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(41),o=n(30),c=n(42);function i(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],_n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(_n=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);_n=!0);}catch(e){r=!0,o=e}finally{try{_n||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||Object(o.a)(e,t)||Object(c.a)()}}});