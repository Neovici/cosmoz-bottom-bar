var __defProp=Object.defineProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:true});};

var preview_exports={};__export(preview_exports,{parameters:()=>parameters});var excludeTags=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((acc,entry)=>{let[tag,option]=entry;return option.excludeFromDocsStories&&(acc[tag]=true),acc},{}),parameters={docs:{renderer:async()=>{let{DocsRenderer}=await import('./DocsRenderer-CFRXHY34-D5a6PQjb.js').then(function (n) { return n.D; });return new DocsRenderer},stories:{filter:story=>(story.tags||[]).filter(tag=>excludeTags[tag]).length===0&&!story.parameters.docs?.disable}}};

export { parameters };
