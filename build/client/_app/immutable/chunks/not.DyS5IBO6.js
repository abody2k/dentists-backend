function s(e,o=5){const t=document.getElementById("popout");t.style.display="box",t.innerText=e,t.className="",setTimeout(function(){t.className="hidden"},o*1e3)}async function r(e,o,t){const n=await fetch("http://18.207.0.24:3000/api/"+e,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!n.ok)throw s("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${n.status}`);let a="";try{a=await n.json()}catch{}return t&&t(),a}export{r as f,s as n};
