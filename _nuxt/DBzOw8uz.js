import{_ as H,s as T,K as O,$ as U,r as j,B as w,o,c as a,Q as s,t as u,a2 as l,a as b,F as q,P as A,R as y,w as S,T as v,X as z,af as N,d as K}from"./BKNud9jV.js";import B from"./DvVXaVmY.js";import{u as L}from"./D-MKx-ZF.js";import{a as M}from"./DZsay9Gk.js";import{l as P}from"./D4Bz_0DZ.js";import"./-uO5vH0U.js";import"./DkNnawig.js";import"./BZpYA2S8.js";import"./DtnaVp-C.js";import"./CNvqYmz_.js";import"./DoSYXFm-.js";import"./CH4vdpwS.js";import"./jthpZqva.js";import"./CxIZtCgj.js";const V=T({components:{HComboboxOption:M,UIcon:O,UAvatar:U,UKbd:B},props:{group:{type:Object,required:!0},query:{type:String,default:""},groupAttribute:{type:String,required:!0},commandAttribute:{type:String,required:!0},selectedIcon:{type:String,required:!0},ui:{type:Object,required:!0}},setup(e){const $=j(()=>{const n=e.group[e.groupAttribute];return typeof n=="function"?n(e.query):n});function C(n,{indices:I,value:g}){if(n===g)return"";let t="",d=0;I.forEach(p=>{const r=p[1]+1,k=r-p[0]>=e.query.length;t+=[g.substring(d,p[0]),k&&"<mark>",g.substring(p[0],r),k&&"</mark>"].filter(Boolean).join(""),d=r}),t+=g.substring(d);const h=t.indexOf("<mark>");return h>60&&(t=`...${t.substring(h-60)}`),t}return P(()=>L("$Hj9q4blToO")),{label:$,highlight:C}}}),E=["aria-label"],F=["innerHTML"];function D(e,$,C,n,I,g){const t=O,d=U,h=B,p=w("HComboboxOption");return o(),a("div",{class:s(e.ui.group.wrapper)},[e.label?(o(),a("h2",{key:0,class:s(e.ui.group.label)},u(e.label),3)):l("",!0),b("div",{class:s(e.ui.group.container),"aria-label":e.group[e.groupAttribute]},[(o(!0),a(q,null,A(e.group.commands,(r,k)=>(o(),y(p,{key:`${e.group.key}-${k}`,value:r,disabled:r.disabled,as:"template"},{default:S(({active:i,selected:c})=>[b("div",{class:s([e.ui.group.command.base,i?e.ui.group.command.active:e.ui.group.command.inactive,r.disabled?"cursor-not-allowed":"cursor-pointer"])},[b("div",{class:s(e.ui.group.command.container)},[v(e.$slots,`${e.group.key}-icon`,{group:e.group,command:r,active:i,selected:c},()=>[r.icon?(o(),y(t,{key:0,name:r.icon,class:s([e.ui.group.command.icon.base,i?e.ui.group.command.icon.active:e.ui.group.command.icon.inactive,r.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):r.avatar?(o(),y(d,z({key:1},{size:e.ui.group.command.avatar.size,...r.avatar},{class:e.ui.group.command.avatar.base,"aria-hidden":"true"}),null,16,["class"])):r.chip?(o(),a("span",{key:2,class:s(e.ui.group.command.chip.base),style:N({background:`#${r.chip}`})},null,6)):l("",!0)]),b("div",{class:s([e.ui.group.command.label,r.disabled&&e.ui.group.command.disabled])},[v(e.$slots,`${e.group.key}-command`,{group:e.group,command:r,active:i,selected:c},()=>{var m,f;return[r.prefix?(o(),a("span",{key:0,class:s(["flex-shrink-0",r.prefixClass||e.ui.group.command.prefix])},u(r.prefix),3)):l("",!0),b("span",{class:s(["truncate",{"flex-none":r.suffix||((m=r.matches)==null?void 0:m.length)}])},u(r[e.commandAttribute]),3),(f=r.matches)!=null&&f.length?(o(),a("span",{key:1,class:s(["truncate",r.suffixClass||e.ui.group.command.suffix]),innerHTML:e.highlight(r[e.commandAttribute],r.matches[0])},null,10,F)):r.suffix?(o(),a("span",{key:2,class:s(["truncate",r.suffixClass||e.ui.group.command.suffix])},u(r.suffix),3)):l("",!0)]})],2)],2),c?(o(),y(t,{key:0,name:e.selectedIcon,class:s(e.ui.group.command.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])):i&&(e.group.active||e.$slots[`${e.group.key}-active`])?v(e.$slots,`${e.group.key}-active`,{key:1,group:e.group,command:r,active:i,selected:c},()=>[e.group.active?(o(),a("span",{key:0,class:s(e.ui.group.active)},u(e.group.active),3)):l("",!0)]):v(e.$slots,`${e.group.key}-inactive`,{key:2,group:e.group,command:r,active:i,selected:c},()=>{var m;return[(m=r.shortcuts)!=null&&m.length?(o(),a("span",{key:0,class:s(e.ui.group.command.shortcuts)},[(o(!0),a(q,null,A(r.shortcuts,f=>(o(),y(h,{key:f},{default:S(()=>[K(u(f),1)]),_:2},1024))),128))],2)):!r.disabled&&e.group.inactive?(o(),a("span",{key:1,class:s(e.ui.group.inactive)},u(e.group.inactive),3)):l("",!0)]})],2)]),_:2},1032,["value","disabled"]))),128))],10,E)],2)}const ae=H(V,[["render",D]]);export{ae as default};
