import{_ as w,H as I,I as d,s as P,K as h,L as U,M as g,r,a0 as l,o as k,c as V,S as M,a as o,P as i,t as S,af as T,T as $,W as c,a1 as m,Q as D,d as E}from"./entry.D_YslezS.js";import{m as H}from"./meter.DOl6dAT8.js";const s=I(d.ui.strategy,d.ui.meter,H),J=P({components:{UIcon:h},inheritAttrs:!1,slots:Object,props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},indicator:{type:Boolean,default:!1},label:{type:String,default:null},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.meter.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...d.ui.colors,...Object.keys(s.color)].includes(e)}},icon:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:v}=U("meter",g(e,"ui"),s,g(e,"class"));function f(z,t,n){if(t==n)return z<t?0:100;t>n&&(n=[t,t=n][0]);const O=(z-t)/(n-t)*100;return Math.max(0,Math.min(100,O))}const b=r(()=>l(a.value.indicator.container)),p=r(()=>l(a.value.indicator.text,a.value.indicator.size[e.size])),u=r(()=>l(a.value.meter.base,a.value.meter.background,a.value.meter.ring,a.value.meter.rounded,a.value.meter.shadow,a.value.color[e.color]??a.value.meter.color.replaceAll("{color}",e.color),a.value.meter.size[e.size])),B=r(()=>l(a.value.meter.appearance.inner,a.value.meter.appearance.meter,a.value.meter.appearance.bar,a.value.meter.appearance.value)),N=r(()=>l(a.value.meter.bar.transition,a.value.meter.bar.ring,a.value.meter.bar.rounded,a.value.meter.bar.size[e.size])),A=r(()=>l(a.value.label.base,a.value.label.text,a.value.color[e.color]??a.value.label.color.replaceAll("{color}",e.color),a.value.label.size[e.size])),y=r(()=>e.min>e.max?e.max:e.min),C=r(()=>e.max<e.min?e.min:e.max),j=r(()=>f(Number(e.value),y.value,C.value));return{ui:a,attrs:v,indicatorContainerClass:b,indicatorClass:p,meterClass:u,meterAppearanceClass:B,meterBarClass:N,labelClass:A,normalizedMin:y,normalizedMax:C,percent:j}}}),K=["value","min","max"];function L(e,a,v,f,b,p){const u=h;return k(),V("div",c({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?M(e.$slots,"indicator",$(c({key:0},{percent:e.percent,value:e.value})),()=>[o("div",{class:i(e.indicatorContainerClass),style:T({width:`${e.percent}%`})},[o("div",{class:i(e.indicatorClass)},S(Math.round(e.percent))+"% ",3)],6)]):m("",!0),o("meter",{value:e.value,min:e.normalizedMin,max:e.normalizedMax,class:i([e.meterClass,e.meterAppearanceClass,e.meterBarClass])},null,10,K),e.label||e.$slots.label?M(e.$slots,"label",$(c({key:1},{percent:e.percent,value:e.value})),()=>[o("div",{class:i(e.labelClass)},[e.icon?(k(),D(u,{key:0,name:e.icon},null,8,["name"])):m("",!0),E(" "+S(e.label),1)],2)]):m("",!0)],16)}const W=w(J,[["render",L]]);export{W as default};
