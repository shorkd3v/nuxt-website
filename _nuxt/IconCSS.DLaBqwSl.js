import{s as m,aG as f,aH as I,r as c,aI as d,o as x,c as v,ae as _,_ as S}from"./entry.1_nr-cIh.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({c1c50718:p.value}));const s=I(),t=u,l=c(()=>{var e,n;return(n=(e=s.nuxtIcon)==null?void 0:e.aliases)!=null&&n[t.name]?s.nuxtIcon.aliases[t.name]:t.name}),r=c(()=>d(l.value)),p=c(()=>{var o,a;const e=(a=(o=s.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${r.value.prefix}/${r.value.name}.svg')`}),i=c(()=>{var n,o,a;if(!t.size&&typeof((n=s.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=s.nuxtIcon)!=null&&o.size))return;const e=t.size||((a=s.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),v("span",{style:_({width:i.value,height:i.value})},null,4))}}),C=S(y,[["__scopeId","data-v-a250dcde"]]);export{C as default};
