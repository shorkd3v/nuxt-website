import{u as ue}from"./id.OO1RJ1Kh.js";import{o as g,A as E,T as ie,I as ae,N as K,u as G,a as P,l as oe}from"./keyboard.D0no-IxH.js";import{s as de}from"./use-resolve-button-type.mRQelkdC.js";import{s as ve,f as le}from"./hidden.DAvwJf-q.js";import{s as $,v as y,y as V,r as h,C as Q,x as z,ad as ne,E as pe,F as M,D as se,G as W,_ as ce,H as fe,I as Z,L as be,M as J,aa as me,B as C,o as B,Q as q,w as F,b as X,P as A,af as ge,a as N,c as Y,O as _,S as ee,t as te,d as he,W as ye}from"./entry.D_YslezS.js";import{O as R,T as D,i as Ie,P as H,N as k}from"./focus-management.4eoLDwex.js";import{t as Te}from"./micro-task.CxIZtCgj.js";const we={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:""}}};let xe=$({props:{onFocus:{type:Function,required:!0}},setup(e){let o=y(!0);return()=>o.value?V(le,{as:"button",type:"button",features:ve.Focusable,onFocus(c){c.preventDefault();let d,f=50;function r(){var t;if(f--<=0){d&&cancelAnimationFrame(d);return}if((t=e.onFocus)!=null&&t.call(e)){o.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(r)}d=requestAnimationFrame(r)}}):null}});var Pe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Pe||{}),ke=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ke||{});let re=Symbol("TabsContext");function L(e){let o=W(re,null);if(o===null){let c=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,L),c}return o}let U=Symbol("TabsSSRContext"),Se=$({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:o,attrs:c,emit:d}){var f;let r=y((f=e.selectedIndex)!=null?f:e.defaultIndex),t=y([]),n=y([]),b=h(()=>e.selectedIndex!==null),w=h(()=>b.value?e.selectedIndex:r.value);function v(s){var u;let p=R(a.tabs.value,g),l=R(a.panels.value,g),m=p.filter(I=>{var T;return!((T=g(I))!=null&&T.hasAttribute("disabled"))});if(s<0||s>p.length-1){let I=G(r.value===null?0:Math.sign(s-r.value),{[-1]:()=>1,0:()=>G(Math.sign(s),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),T=G(I,{0:()=>p.indexOf(m[0]),1:()=>p.indexOf(m[m.length-1])});T!==-1&&(r.value=T),a.tabs.value=p,a.panels.value=l}else{let I=p.slice(0,s),T=[...p.slice(s),...I].find(j=>m.includes(j));if(!T)return;let O=(u=p.indexOf(T))!=null?u:a.selectedIndex.value;O===-1&&(O=a.selectedIndex.value),r.value=O,a.tabs.value=p,a.panels.value=l}}let a={selectedIndex:h(()=>{var s,u;return(u=(s=r.value)!=null?s:e.defaultIndex)!=null?u:null}),orientation:h(()=>e.vertical?"vertical":"horizontal"),activation:h(()=>e.manual?"manual":"auto"),tabs:t,panels:n,setSelectedIndex(s){w.value!==s&&d("change",s),b.value||v(s)},registerTab(s){var u;if(t.value.includes(s))return;let p=t.value[r.value];t.value.push(s),t.value=R(t.value,g);let l=(u=t.value.indexOf(p))!=null?u:r.value;l!==-1&&(r.value=l)},unregisterTab(s){let u=t.value.indexOf(s);u!==-1&&t.value.splice(u,1)},registerPanel(s){n.value.includes(s)||(n.value.push(s),n.value=R(n.value,g))},unregisterPanel(s){let u=n.value.indexOf(s);u!==-1&&n.value.splice(u,1)}};Q(re,a);let i=y({tabs:[],panels:[]}),x=y(!1);z(()=>{x.value=!0}),Q(U,h(()=>x.value?null:i.value));let S=h(()=>e.selectedIndex);return z(()=>{ne([S],()=>{var s;return v((s=e.selectedIndex)!=null?s:e.defaultIndex)},{immediate:!0})}),pe(()=>{if(!b.value||w.value==null||a.tabs.value.length<=0)return;let s=R(a.tabs.value,g);s.some((u,p)=>g(a.tabs.value[p])!==g(u))&&a.setSelectedIndex(s.findIndex(u=>g(u)===g(a.tabs.value[w.value])))}),()=>{let s={selectedIndex:r.value};return V(M,[t.value.length<=0&&V(xe,{onFocus:()=>{for(let u of t.value){let p=g(u);if((p==null?void 0:p.tabIndex)===0)return p.focus(),!0}return!1}}),E({theirProps:{...c,...ie(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:s,slots:o,attrs:c,name:"TabGroup"})])}}}),$e=$({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:o,slots:c}){let d=L("TabList");return()=>{let f={selectedIndex:d.selectedIndex.value},r={role:"tablist","aria-orientation":d.orientation.value};return E({ourProps:r,theirProps:e,slot:f,attrs:o,slots:c,name:"TabList"})}}}),Oe=$({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:o,slots:c,expose:d}){var f;let r=(f=e.id)!=null?f:`headlessui-tabs-tab-${ae()}`,t=L("Tab"),n=y(null);d({el:n,$el:n}),z(()=>t.registerTab(n)),se(()=>t.unregisterTab(n));let b=W(U),w=h(()=>{if(b.value){let l=b.value.tabs.indexOf(r);return l===-1?b.value.tabs.push(r)-1:l}return-1}),v=h(()=>{let l=t.tabs.value.indexOf(n);return l===-1?w.value:l}),a=h(()=>v.value===t.selectedIndex.value);function i(l){var m;let I=l();if(I===D.Success&&t.activation.value==="auto"){let T=(m=Ie(n))==null?void 0:m.activeElement,O=t.tabs.value.findIndex(j=>g(j)===T);O!==-1&&t.setSelectedIndex(O)}return I}function x(l){let m=t.tabs.value.map(I=>g(I)).filter(Boolean);if(l.key===P.Space||l.key===P.Enter){l.preventDefault(),l.stopPropagation(),t.setSelectedIndex(v.value);return}switch(l.key){case P.Home:case P.PageUp:return l.preventDefault(),l.stopPropagation(),i(()=>H(m,k.First));case P.End:case P.PageDown:return l.preventDefault(),l.stopPropagation(),i(()=>H(m,k.Last))}if(i(()=>G(t.orientation.value,{vertical(){return l.key===P.ArrowUp?H(m,k.Previous|k.WrapAround):l.key===P.ArrowDown?H(m,k.Next|k.WrapAround):D.Error},horizontal(){return l.key===P.ArrowLeft?H(m,k.Previous|k.WrapAround):l.key===P.ArrowRight?H(m,k.Next|k.WrapAround):D.Error}}))===D.Success)return l.preventDefault()}let S=y(!1);function s(){var l;S.value||(S.value=!0,!e.disabled&&((l=g(n))==null||l.focus({preventScroll:!0}),t.setSelectedIndex(v.value),Te(()=>{S.value=!1})))}function u(l){l.preventDefault()}let p=de(h(()=>({as:e.as,type:o.type})),n);return()=>{var l;let m={selected:a.value},{...I}=e,T={ref:n,onKeydown:x,onMousedown:u,onClick:s,id:r,role:"tab",type:p.value,"aria-controls":(l=g(t.panels.value[v.value]))==null?void 0:l.id,"aria-selected":a.value,tabIndex:a.value?0:-1,disabled:e.disabled?!0:void 0};return E({ourProps:T,theirProps:I,slot:m,attrs:o,slots:c,name:"Tab"})}}}),Ae=$({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:o,attrs:c}){let d=L("TabPanels");return()=>{let f={selectedIndex:d.selectedIndex.value};return E({theirProps:e,ourProps:{},slot:f,attrs:c,slots:o,name:"TabPanels"})}}}),He=$({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:o,slots:c,expose:d}){var f;let r=(f=e.id)!=null?f:`headlessui-tabs-panel-${ae()}`,t=L("TabPanel"),n=y(null);d({el:n,$el:n}),z(()=>t.registerPanel(n)),se(()=>t.unregisterPanel(n));let b=W(U),w=h(()=>{if(b.value){let i=b.value.panels.indexOf(r);return i===-1?b.value.panels.push(r)-1:i}return-1}),v=h(()=>{let i=t.panels.value.indexOf(n);return i===-1?w.value:i}),a=h(()=>v.value===t.selectedIndex.value);return()=>{var i;let x={selected:a.value},{tabIndex:S,...s}=e,u={ref:n,id:r,role:"tabpanel","aria-labelledby":(i=g(t.tabs.value[v.value]))==null?void 0:i.id,tabIndex:a.value?S:-1};return!a.value&&e.unmount&&!e.static?V(le,{as:"span","aria-hidden":!0,...u}):E({ourProps:u,theirProps:s,slot:x,attrs:o,slots:c,features:K.Static|K.RenderStrategy,visible:a.value,name:"TabPanel"})}}});const Ce=fe(Z.ui.strategy,Z.ui.tabs,we),Be=$({components:{HTabGroup:Se,HTabList:$e,HTab:Oe,HTabPanels:Ae,HTabPanel:He},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},unmount:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:c,attrs:d}=be("tabs",J(e,"ui"),Ce,J(e,"class")),f=y(),r=y([]),t=y(),n=y(e.modelValue||e.defaultIndex);function b(v){var i;const a=(i=r.value[v])==null?void 0:i.$el;a&&t.value&&(t.value.style.top=`${a.offsetTop}px`,t.value.style.left=`${a.offsetLeft}px`,t.value.style.width=`${a.offsetWidth}px`,t.value.style.height=`${a.offsetHeight}px`)}function w(v){n.value=v,o("change",v),e.modelValue!==void 0&&o("update:modelValue",n.value),b(n.value)}return me(f,()=>{b(n.value)}),ne(()=>e.modelValue,v=>{n.value=v,b(n.value)}),z(()=>b(n.value)),oe(()=>ue("$uhaqBgGPVZ")),{ui:c,attrs:d,listRef:f,itemRefs:r,markerRef:t,selectedIndex:n,onChange:w}}}),Fe={class:"truncate"};function Re(e,o,c,d,f,r){const t=C("HTab"),n=C("HTabList"),b=C("HTabPanel"),w=C("HTabPanels"),v=C("HTabGroup");return B(),q(v,ye({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:F(()=>[X(n,{ref:"listRef",class:A([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:ge([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:F(()=>[N("div",{ref:"markerRef",class:A(e.ui.list.marker.wrapper)},[N("div",{class:A([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(B(!0),Y(M,null,_(e.items,(a,i)=>(B(),q(t,{key:i,ref_for:!0,ref:"itemRefs",disabled:a.disabled,as:"template"},{default:F(({selected:x,disabled:S})=>[N("button",{class:A([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,x?e.ui.list.tab.active:e.ui.list.tab.inactive])},[ee(e.$slots,"default",{item:a,index:i,selected:x,disabled:S},()=>[N("span",Fe,te(a.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),X(w,{class:A(e.ui.container)},{default:F(()=>[(B(!0),Y(M,null,_(e.items,(a,i)=>(B(),q(b,{key:i,class:A(e.ui.base),unmount:e.unmount},{default:F(({selected:x})=>[ee(e.$slots,a.slot||"item",{item:a,index:i,selected:x},()=>[he(te(a.content),1)])]),_:2},1032,["class","unmount"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const je=ce(Be,[["render",Re]]);export{je as default};
