import{s as f,aS as m,aT as I,r as c,aU as x,o as d,c as v,af as S,_}from"./BKNud9jV.js";const y=f({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){m(e=>({f7a8f4a4:p.value}));const s=I(),t=u,l=c(()=>{var e,n;return(n=(e=s.nuxtIcon)==null?void 0:e.aliases)!=null&&n[t.name]?s.nuxtIcon.aliases[t.name]:t.name}),r=c(()=>x(l.value)),p=c(()=>{var o,a;const e=(a=(o=s.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${r.value.prefix}/${r.value.name}.svg')`}),i=c(()=>{var n,o,a;if(!t.size&&typeof((n=s.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=s.nuxtIcon)!=null&&o.size))return;const e=t.size||((a=s.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(d(),v("span",{style:S({width:i.value,height:i.value})},null,4))}}),C=_(y,[["__scopeId","data-v-4ec364c6"]]);export{C as default};
