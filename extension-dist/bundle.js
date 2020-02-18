!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function f(){return s(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}let m;function g(t){m=t}const $=[],v=[],b=[],_=[],y=Promise.resolve();let w=!1;function x(t){b.push(t)}let j=!1;const S=new Set;function A(){if(!j){j=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];g(e),E(e.$$)}for($.length=0;v.length;)v.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];S.has(e)||(S.add(e),e())}b.length=0}while($.length);for(;_.length;)_.pop()();w=!1,j=!1,S.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const k=new Set;function I(t,e){-1===t.$$.dirty[0]&&($.push(t),w||(w=!0,y.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(l,c,u,a,i,s,f=[-1]){const d=m;g(l);const h=c.props||{},p=l.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:f};let $=!1;var v,b;p.ctx=u?u(l,h,(t,e,...n)=>{const o=n.length?n[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),$&&I(l,t)),e}):[],p.update(),$=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),c.target&&(c.hydrate?p.fragment&&p.fragment.l(function(t){return Array.from(t.childNodes)}(c.target)):p.fragment&&p.fragment.c(),c.intro&&((v=l.$$.fragment)&&v.i&&(k.delete(v),v.i(b))),function(t,n,l){const{fragment:c,on_mount:u,on_destroy:a,after_update:i}=t.$$;c&&c.m(n,l),x(()=>{const n=u.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(x)}(l,c.target,c.anchor),A()),g(d)}function q(t,e,n){const o=t.slice();return o[17]=e[n],o}function H(t){let e,n,r,l,m,g,$,v,b,_,y,w,x,j,S,A,E,k=t[2]?"Hide":"Show",I=t[4],C=[];for(let e=0;e<I.length;e+=1)C[e]=M(q(t,I,e));return{c(){e=i("button"),n=s(k),r=s(" owner"),l=f(),m=i("button"),m.textContent="Set countdown",g=f(),$=i("main"),v=i("h1"),b=s("Join code: "),_=s(t[0]),y=f(),w=i("p"),x=s("Time left: "),j=s(t[3]),S=f(),A=i("ol");for(let t=0;t<C.length;t+=1)C[t].c();h(e,"class","owner svelte-ol6ecg"),h(m,"class","timeleft svelte-ol6ecg"),h(v,"class","svelte-ol6ecg"),h($,"class","svelte-ol6ecg")},m(o,a){u(o,e,a),c(e,n),c(e,r),u(o,l,a),u(o,m,a),u(o,g,a),u(o,$,a),c($,v),c(v,b),c(v,_),c($,y),c($,w),c(w,x),c(w,j),c($,S),c($,A);for(let t=0;t<C.length;t+=1)C[t].m(A,null);E=[d(e,"click",t[16]),d(m,"click",t[5])]},p(t,e){if(4&e&&k!==(k=t[2]?"Hide":"Show")&&p(n,k),1&e&&p(_,t[0]),8&e&&p(j,t[3]),16&e){let n;for(I=t[4],n=0;n<I.length;n+=1){const o=q(t,I,n);C[n]?C[n].p(o,e):(C[n]=M(o),C[n].c(),C[n].m(A,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=I.length}},d(t){t&&a(e),t&&a(l),t&&a(m),t&&a(g),t&&a($),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(C,t),o(E)}}}function M(t){let e,n,o,r,l=t[17].name+"",f=t[17].stars+"";return{c(){e=i("li"),n=s(l),o=s(" - "),r=s(f),h(e,"class","svelte-ol6ecg")},m(t,l){u(t,e,l),c(e,n),c(e,o),c(e,r)},p(t,e){16&e&&l!==(l=t[17].name+"")&&p(n,l),16&e&&f!==(f=t[17].stars+"")&&p(r,f)},d(t){t&&a(e)}}}function N(e){let n,o,r,l,m,g,$=e[1]?"Hide":"Show",v=e[1]&&H(e);return{c(){n=i("button"),o=s($),r=s(" leaderboard"),l=f(),v&&v.c(),m=s(""),h(n,"class","enable svelte-ol6ecg")},m(t,a){u(t,n,a),c(n,o),c(n,r),u(t,l,a),v&&v.m(t,a),u(t,m,a),g=d(n,"click",e[15])},p(t,[e]){2&e&&$!==($=t[1]?"Hide":"Show")&&p(o,$),t[1]?v?v.p(t,e):(v=H(t),v.c(),v.m(m.parentNode,m)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&a(n),t&&a(l),v&&v.d(t),t&&a(m),g()}}}function L(t){return("0"+t).substr(-2)}function O(t,e,n){let{api_url:o}=e,{join_code:r}=e,l=!1,c=!1,u=null,a=null,i=null,s=null,f="00:00:00",d=[];m();let h=0;function p(){let t=s-Date.now();if(t<=0)return n(3,f="00:00:00"),void clearInterval(i);var e=Math.floor(t/1e3/60/60);t-=1e3*e*60*60;var o=Math.floor(t/1e3/60);t-=1e3*o*60;var r=Math.floor(t/1e3);t-=1e3*r,n(3,f=`${L(e)}:${L(o)}:${L(r)}`),o>=5&&h%60==0?m():o<5&&o>=1&&h%10==0?m():0===o&&m(),h+=1}async function m(){let t=await fetch(o),e=await t.json();n(7,u=e.owner_id);let r=Object.values(e.members);r.sort((t,e)=>e.stars-t.stars),n(11,d=r)}let g;return t.$set=t=>{"api_url"in t&&n(6,o=t.api_url),"join_code"in t&&n(0,r=t.join_code)},t.$$.update=()=>{2180&t.$$.dirty&&n(4,g=c?d:d.filter(t=>t.id!==u))},[r,l,c,f,g,function(){let t=prompt("Countdown in minutes:").replace(/[^0-9]/g,"");a=parseInt(t),s=Date.now()+60*a*1e3,p(),clearInterval(i),i=setInterval(p,1e3)},o,u,a,i,s,d,h,p,m,()=>n(1,l=!l),()=>n(2,c=!c)]}class T extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),C(this,t,O,N,l,{api_url:6,join_code:0})}}function D(t){return document.querySelector(t)}if(P()&&J()){document.querySelectorAll('[class^="svelte-"]').forEach(t=>t.remove()),document.querySelectorAll('[class*=" svelte-"]').forEach(t=>t.remove());new T({target:document.body,props:{api_url:J(),join_code:localStorage.getItem("aoc-joincode")}})}function P(){return document.title.includes("Private Leaderboard - Advent of Code")}function B(){let t=D("main > article code");if(!t)return null;let e=t.innerText,n=e.split("-");if(2!==n.length)return null;let o=n[0].replace(/[^0-9]/,""),r=n[1].replace(/[^abcdef0-9]/,"");return o.length!==n[0].length&&r.length!==n[1].length?null:e}function J(){let t=D("#api_info > a");if(!t)return null;let e=t.getAttribute("href");return location.host.includes("localhost")?`https://cors.seljebu.no/https://adventofcode.com${e}`:`https://adventofcode.com${e}`}P()&&B()&&localStorage.setItem("aoc-joincode",B())}();
//# sourceMappingURL=bundle.js.map
