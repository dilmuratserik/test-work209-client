import{d as i,n as c,q as m,s as h,v as P,h as v,x as L,y as r,z as b,A as k,B as g,P as S,C as l,T as R,u as d,D as T,E as j,S as x,G as A,L as _}from"./DZLX5GnY.js";const B=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const t=await r[e.name]().then(a=>a.default||a);return()=>l(t,e.layoutProps,o.slots)}}),E=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,o){const t=g(),a=c(S),n=a===m()?h():a,u=P(()=>{let s=d(e.name)??n.meta.layout??"default";return s&&!(s in r)&&e.fallback&&(s=d(e.fallback)),s}),y=v();o.expose({layoutRef:y});const p=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",p);L().beforeEach(s)}return()=>{const s=u.value&&u.value in r,f=n.meta.layoutTransition??b;return k(R,s&&f,{default:()=>l(x,{suspensible:!0,onResolve:()=>{j(p)}},{default:()=>l(O,{layoutProps:T(o.attrs,{ref:y}),key:u.value||void 0,name:u.value,shouldProvide:!e.name,hasTransition:!!f},o.slots)})}).default()}}}),O=i({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const t=e.name;return e.shouldProvide&&A(_,{isCurrent:a=>t===(a.meta.layout??"default")}),()=>{var a,n;return!t||typeof t=="string"&&!(t in r)?(n=(a=o.slots).default)==null?void 0:n.call(a):l(B,{key:t,layoutProps:e.layoutProps,name:t},o.slots)}}});export{E as _};
