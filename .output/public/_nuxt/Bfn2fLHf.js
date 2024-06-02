import{H as Qe,I as Ue,B as je,d as Te,C as ce,J as Ke,h as Ge,v as T,i as Je,K as We,u as m,o as M,c as le,M as z,a as ae,N as Xe,t as Ye,O as Ze,_ as et}from"./DZLX5GnY.js";const tt="$s";function nt(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,r]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const o=tt+n,s=je(),i=Qe(s.payload.state,o);if(i.value===void 0&&r){const c=r();if(Ue(c))return s.payload.state[o]=c,c;i.value=c}return i}const Oe=Object.freeze({left:0,top:0,width:16,height:16}),Pe=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Z=Object.freeze({...Oe,...Pe});Object.freeze({...Z,body:"",hidden:!1});({...Oe});const Ee=Object.freeze({width:null,height:null}),Ae=Object.freeze({...Ee,...Pe});function ot(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Ee?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const rt=/[\s,]+/;function st(e,t){t.split(rt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function it(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}const ct=/(-?[0-9.]*[0-9]+[0-9.]*)/g,lt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ue(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(ct);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=lt.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}function at(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const i=e.indexOf(">",s);if(i===-1)break;n+=e.slice(o+1,s).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:n,content:e}}function ut(e,t){return e?"<defs>"+e+"</defs>"+t:t}function ft(e,t,n){const r=at(e);return ut(r.defs,t+r.content+n)}const dt=e=>e==="unset"||e==="undefined"||e==="none";function pt(e,t){const n={...Z,...e},r={...Ae,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(p=>{const f=[],S=p.hFlip,I=p.vFlip;let v=p.rotate;S?I?v+=2:(f.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),f.push("scale(-1 1)"),o.top=o.left=0):I&&(f.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),f.push("scale(1 -1)"),o.top=o.left=0);let b;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:b=o.height/2+o.top,f.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:f.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,f.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}v%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),f.length&&(s=ft(s,'<g transform="'+f.join(" ")+'">',"</g>"))});const i=r.width,c=r.height,l=o.width,a=o.height;let u,d;i===null?(d=c===null?"1em":c==="auto"?a:c,u=ue(d,l/a)):(u=i==="auto"?l:i,d=c===null?ue(u,a/l):c==="auto"?a:c);const h={},y=(p,f)=>{dt(f)||(h[p]=f.toString())};y("width",u),y("height",d);const w=[o.left,o.top,l,a];return h.viewBox=w.join(" "),{attributes:h,viewBox:w,body:s}}const ht=/\sid="(\S+)"/g,gt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let mt=0;function yt(e,t=gt){const n=[];let r;for(;r=ht.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(mt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}function wt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function bt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function xt(e){return"data:image/svg+xml,"+bt(e)}function vt(e){return'url("'+xt(e)+'")'}const fe={...Ae,inline:!1},It={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},St={display:"inline-block"},U={backgroundColor:"currentColor"},Fe={backgroundColor:"transparent"},de={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},pe={webkitMask:U,mask:U,background:Fe};for(const e in pe){const t=pe[e];for(const n in de)t[e+n]=de[n]}const _={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";_[e+"-flip"]=t,_[e.slice(0,1)+"-flip"]=t,_[e+"Flip"]=t});function he(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const kt=(e,t)=>{const n=ot(fe,t),r={...It},o=t.mode||"svg",s={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let p in t){const f=t[p];if(f!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&st(n,f);break;case"color":s.color=f;break;case"rotate":typeof f=="string"?n[p]=it(f):typeof f=="number"&&(n[p]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const S=_[p];S?(f===!0||f==="true"||f===1)&&(n[S]=!0):fe[p]===void 0&&(r[p]=f)}}}const l=pt(e,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let p=0,f=t.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=yt(l.body,f?()=>f+"ID"+p++:"iconifyVue"),ce("svg",r)}const{body:u,width:d,height:h}=e,y=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),w=wt(u,{...a,width:d+"",height:h+""});return r.style={...s,"--svg":vt(w),width:he(a.width),height:he(a.height),...St,...y?U:Fe,...c},ce("span",r)},Ct=Object.create(null),jt=Te({inheritAttrs:!1,render(){const e=this.$attrs,t=e.icon,n=typeof t=="string"?Ct[t]:typeof t=="object"?t:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:kt({...Z,...n},e)}}),P=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!$(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!$(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!$(c,n)?null:c}return null},$=(e,t)=>e?!!((e.provider===""||e.provider.match(P))&&(t&&e.prefix===""||e.prefix.match(P))&&e.name.match(P)):!1,Me=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ee=Object.freeze({...Me,...N}),K=Object.freeze({...ee,body:"",hidden:!1});function Tt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ge(e,t){const n=Tt(e,t);for(const r in K)r in N?r in e&&!(r in n)&&(n[r]=N[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Ot(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return Object.keys(n).concat(Object.keys(r)).forEach(s),o}function Pt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=ge(r[c]||o[c],s)}return i(t),n.forEach(i),ge(e,s)}function ze(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Ot(e);for(const o in r){const s=r[o];s&&(t(o,Pt(e,o,s)),n.push(o))}return n}const Et={provider:"",aliases:{},not_found:{},...Me};function H(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Le(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!H(e,Et))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(P)||typeof s.body!="string"||!H(s,K))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(P)||typeof i!="string"||!n[i]&&!r[i]||!H(s,K))return null}return t}const me=Object.create(null);function At(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function C(e,t){const n=me[e]||(me[e]=Object.create(null));return n[t]||(n[t]=At(e,t))}function te(e,t){return Le(t)?ze(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Ft(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let E=!1;function _e(e){return typeof e=="boolean"&&(E=e),E}function Mt(e){const t=typeof e=="string"?R(e,!0,E):e;if(t){const n=C(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function zt(e,t){const n=R(e,!0,E);if(!n)return!1;const r=C(n.provider,n.prefix);return Ft(r,n.name,t)}function Lt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),E&&!t&&!e.prefix){let o=!1;return Le(e)&&(e.prefix="",ze(e,(s,i)=>{i&&zt(s,i)&&(o=!0)})),o}const n=e.prefix;if(!$({provider:t,prefix:n,name:"a"}))return!1;const r=C(t,n);return!!te(r,e)}const _t=Object.freeze({width:null,height:null}),$t=Object.freeze({..._t,...N});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const G=Object.create(null);function Dt(e,t){G[e]=t}function J(e){return G[e]||G[""]}function ne(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const oe=Object.create(null),O=["https://api.simplesvg.com","https://api.unisvg.com"],D=[];for(;O.length>0;)O.length===1||Math.random()>.5?D.push(O.shift()):D.push(O.pop());oe[""]=ne({resources:["https://api.iconify.design"].concat(D)});function Nt(e,t){const n=ne(t);return n===null?!1:(oe[e]=n,!0)}function re(e){return oe[e]}const Rt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ye=Rt();function Bt(e,t){const n=re(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Vt(e){return e===404}const Ht=(e,t,n)=>{const r=[],o=Bt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function qt(e){if(typeof e=="string"){const t=re(e);if(t)return t.path}return"/"}const Qt=(e,t,n)=>{if(!ye){n("abort",424);return}let r=qt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;ye(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Vt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Ut={prepare:Ht,send:Qt};function Kt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=C(s,i));let u;c in a.icons?u=t.loaded:i===""||a.missing.has(c)?u=t.missing:u=t.pending;const d={provider:s,prefix:i,name:c};u.push(d)}),t}function $e(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Gt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||$e([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Jt=0;function Wt(e,t,n){const r=Jt++,o=$e.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Xt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?R(o,t,n):o;s&&r.push(s)}),r}var Yt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Zt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const x=Math.floor(Math.random()*g.length);i.push(g[x]),g=g.slice(0,x).concat(g.slice(x+1))}i=i.concat(g)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,u,d=null,h=[],y=[];typeof r=="function"&&y.push(r);function w(){d&&(clearTimeout(d),d=null)}function p(){l==="pending"&&(l="aborted"),w(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function f(g,x){x&&(y=[]),typeof g=="function"&&y.push(g)}function S(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:h.length,subscribe:f,abort:p}}function I(){l="failed",y.forEach(g=>{g(void 0,u)})}function v(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function b(g,x,j){const F=x!=="success";switch(h=h.filter(k=>k!==g),l){case"pending":break;case"failed":if(F||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){u=j,I();return}if(F){u=j,h.length||(i.length?V():I());return}if(w(),v(),!e.random){const k=e.resources.indexOf(g.resource);k!==-1&&k!==e.index&&(e.index=k)}l="completed",y.forEach(k=>{k(j)})}function V(){if(l!=="pending")return;w();const g=i.shift();if(g===void 0){if(h.length){d=setTimeout(()=>{w(),l==="pending"&&(v(),I())},e.timeout);return}I();return}const x={status:"pending",resource:g,callback:(j,F)=>{b(x,j,F)}};h.push(x),a++,d=setTimeout(V,e.rotate),n(g,t,x.callback)}return setTimeout(V),S}function De(e){const t={...Yt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const u=Zt(t,c,l,(d,h)=>{r(),a&&a(d,h)});return n.push(u),u}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function we(){}const q=Object.create(null);function en(e){if(!q[e]){const t=re(e);if(!t)return;const n=De(t),r={config:t,redundancy:n};q[e]=r}return q[e]}function tn(e,t,n){let r,o;if(typeof e=="string"){const s=J(e);if(!s)return n(void 0,424),we;o=s.send;const i=en(e);i&&(r=i.redundancy)}else{const s=ne(e);if(s){r=De(s);const i=e.resources?e.resources[0]:"",c=J(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),we):r.query(t,o,n)().abort}const be="iconify2",A="iconify",Ne=A+"-count",xe=A+"-version",Re=36e5,nn=168,on=50;function W(e,t){try{return e.getItem(t)}catch{}}function se(e,t,n){try{return e.setItem(t,n),!0}catch{}}function ve(e,t){try{e.removeItem(t)}catch{}}function X(e,t){return se(e,Ne,t.toString())}function Y(e){return parseInt(W(e,Ne))||0}const B={local:!0,session:!0},Be={local:new Set,session:new Set};let ie=!1;function rn(e){ie=e}let L=typeof window>"u"?{}:window;function Ve(e){const t=e+"Storage";try{if(L&&L[t]&&typeof L[t].length=="number")return L[t]}catch{}B[e]=!1}function He(e,t){const n=Ve(e);if(!n)return;const r=W(n,xe);if(r!==be){if(r){const c=Y(n);for(let l=0;l<c;l++)ve(n,A+l.toString())}se(n,xe,be),X(n,0);return}const o=Math.floor(Date.now()/Re)-nn,s=c=>{const l=A+c.toString(),a=W(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}ve(n,l)}};let i=Y(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,X(n,i)):Be[e].add(c))}function qe(){if(!ie){rn(!0);for(const e in B)He(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=C(r,o);if(!te(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function sn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in B)He(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function cn(e,t){ie||qe();function n(r){let o;if(!B[r]||!(o=Ve(r)))return;const s=Be[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=Y(o),i>=on||!X(o,i+1))return;const c={cached:Math.floor(Date.now()/Re),provider:e.provider,data:t};return se(o,A+i.toString(),JSON.stringify(c))}t.lastModified&&!sn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Ie(){}function ln(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Gt(e)}))}function an(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=J(n)))return;s.prepare(n,r,o).forEach(c=>{tn(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=te(e,l);if(!a.length)return;const u=e.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),cn(e,l)}catch(a){console.error(a)}ln(e)})})}))}const un=(e,t)=>{const n=Xt(e,!0,_e()),r=Kt(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,Ie)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===i)return;i=a,c=u,s.push(C(a,u));const d=o[a]||(o[a]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:d}=l,h=C(a,u),y=h.pendingIcons||(h.pendingIcons=new Set);y.has(d)||(y.add(d),o[a][u].push(d))}),s.forEach(l=>{const{provider:a,prefix:u}=l;o[a][u].length&&an(l,o[a][u])}),t?Wt(t,r,s):Ie},fn=e=>new Promise((t,n)=>{const r=typeof e=="string"?R(e,!0):e;if(!r){n(e);return}un([r||e],o=>{if(o.length&&r){const s=Mt(r);if(s){t({...ee,...s});return}}n(e)})});({...$t});const Se={backgroundColor:"currentColor"},dn={backgroundColor:"transparent"},ke={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ce={webkitMask:Se,mask:Se,background:dn};for(const e in Ce){const t=Ce[e];for(const n in ke)t[e+n]=ke[n]}const Q={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";Q[e+"-flip"]=t,Q[e.slice(0,1)+"-flip"]=t,Q[e+"Flip"]=t});_e(!0);Dt("",Ut);if(typeof document<"u"&&typeof window<"u"){qe();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Lt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Nt(n,o)||console.error(r)}catch{console.error(r)}}}}({...ee});const pn=["width","height"],hn=Te({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){var w;let t,n;const r=je(),o=Ke();(w=o==null?void 0:o.nuxtIcon)!=null&&w.aliases;const s=e,i=nt("icons",()=>({})),c=Ge(!1),l=T(()=>{var p;return(((p=o==null?void 0:o.nuxtIcon)==null?void 0:p.aliases)||{})[s.name]||s.name}),a=T(()=>{var p;return(p=i.value)==null?void 0:p[l.value]}),u=T(()=>r.vueApp.component(l.value)),d=T(()=>{var f,S,I;if(!s.size&&typeof((f=o.nuxtIcon)==null?void 0:f.size)=="boolean"&&!((S=o.nuxtIcon)!=null&&S.size))return;const p=s.size||((I=o.nuxtIcon)==null?void 0:I.size)||"1em";return String(Number(p))===p?`${p}px`:p}),h=T(()=>{var p;return((p=o==null?void 0:o.nuxtIcon)==null?void 0:p.class)??"icon"});async function y(){var p;u.value||(p=i.value)!=null&&p[l.value]||(c.value=!0,i.value[l.value]=await fn(l.value).catch(()=>{}),c.value=!1)}return Je(()=>l.value,y),!u.value&&([t,n]=We(()=>y()),t=await t,n()),(p,f)=>m(c)?(M(),le("span",{key:0,class:z(m(h)),width:m(d),height:m(d)},null,10,pn)):m(a)?(M(),ae(m(jt),{key:1,icon:m(a),class:z(m(h)),width:m(d),height:m(d)},null,8,["icon","class","width","height"])):m(u)?(M(),ae(Xe(m(u)),{key:2,class:z(m(h)),width:m(d),height:m(d)},null,8,["class","width","height"])):(M(),le("span",{key:3,class:z(m(h)),style:Ze({fontSize:m(d),lineHeight:m(d),width:m(d),height:m(d)})},Ye(e.name),7))}}),mn=et(hn,[["__scopeId","data-v-e660a7a7"]]);export{mn as default};
