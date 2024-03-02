import{_ as x,H as k,I as p,s as w,K as y,Z as g,L as C,M as S,r as o,$,a0 as l,o as r,c as n,a as i,P as t,F as j,S as O,t as U,Q as f,W as v,a1 as m}from"./entry.D_YslezS.js";const _={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},s=k(p.ui.strategy,p.ui.divider,_),A=w({components:{UIcon:y,UAvatar:g},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.border.size.horizontal).includes(e)||Object.keys(s.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:d}=C("divider",S(e,"ui"),s),u=o(()=>$(l(a.value.wrapper.base,a.value.wrapper[e.orientation]),e.class)),c=o(()=>l(a.value.container.base,a.value.container[e.orientation])),b=o(()=>l(a.value.border.base,a.value.border[e.orientation],a.value.border.size[e.orientation][e.size],a.value.border.type[e.type]));return{ui:a,attrs:d,wrapperClass:u,containerClass:c,borderClass:b}}});function B(e,a,d,u,c,b){const z=y,h=g;return r(),n("div",v({class:e.wrapperClass},e.attrs),[i("div",{class:t(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(r(),n(j,{key:0},[i("div",{class:t(e.containerClass)},[O(e.$slots,"default",{},()=>[e.label?(r(),n("span",{key:0,class:t(e.ui.label)},U(e.label),3)):e.icon?(r(),f(z,{key:1,name:e.icon,class:t(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(r(),f(h,v({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):m("",!0)])],2),i("div",{class:t(e.borderClass)},null,2)],64)):m("",!0)],16)}const F=x(A,[["render",B]]);export{F as default};
