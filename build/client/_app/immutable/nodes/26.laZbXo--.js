import{s as u}from"../chunks/scheduler.BbzLVxRS.js";import{S as p,i as d}from"../chunks/index.hWlefRDD.js";function f(o,a,r){let{data:e}=a;return async function(c,i,s){const n=await fetch("http://44.202.90.133:3000/api/"+c,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);const m=await n.json();return s&&s(),m}("u/gexqc",{courseID:Number(e.params.course),examType:Number(e.params.examType),examID:Number(e.params.examID)}).then(t=>{console.log(t)}).catch(t=>{}),o.$$set=t=>{"data"in t&&r(0,e=t.data)},[e]}class x extends p{constructor(a){super(),d(this,a,f,null,u,{data:0})}}export{x as component};
