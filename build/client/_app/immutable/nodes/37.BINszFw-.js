import{s as H,a as k,i as T,d as S,o as j}from"../chunks/scheduler.-UlM-m53.js";import{S as C,i as E,t,b as u,e as $,g as I,c,a as b,m as w,d as h}from"../chunks/index.UV4btmqA.js";import{f as q,s as J}from"../chunks/not.CKuSUAlB.js";import{U as P,a as R,b as z,c as B,d as F}from"../chunks/UserResults.D-ba3iYZ.js";function N(o){let s,a,e,n;const r=[W,V,L,K,G],f=[];function m(l,g){return l[0]==0?0:l[0]==1&&l[1]?1:l[0]==2&&l[1].q?2:l[0]==3&&l[1].q?3:l[0]==4?4:-1}return~(s=m(o))&&(a=f[s]=r[s](o)),{c(){a&&a.c(),e=k()},l(l){a&&a.l(l),e=k()},m(l,g){~s&&f[s].m(l,g),T(l,e,g),n=!0},p(l,g){let p=s;s=m(l),s===p?~s&&f[s].p(l,g):(a&&(I(),u(f[p],1,1,()=>{f[p]=null}),$()),~s?(a=f[s],a?a.p(l,g):(a=f[s]=r[s](l),a.c()),t(a,1),a.m(e.parentNode,e)):a=null)},i(l){n||(t(a),n=!0)},o(l){u(a),n=!1},d(l){l&&S(e),~s&&f[s].d(l)}}}function G(o){let s,a;return s=new P({props:{viewingAnswers:o[3],reviewAnswers:o[12],myScore:o[1].myScore,results:o[1].na?o[1].na.map(o[13]):null,ending:o[1].en,startingDate:o[1].sd,examTitle:o[1].title,level:o[1].l}}),{c(){c(s.$$.fragment)},l(e){b(s.$$.fragment,e)},m(e,n){w(s,e,n),a=!0},p(e,n){const r={};n&8&&(r.viewingAnswers=e[3]),n&1&&(r.reviewAnswers=e[12]),n&2&&(r.myScore=e[1].myScore),n&2&&(r.results=e[1].na?e[1].na.map(e[13]):null),n&2&&(r.ending=e[1].en),n&2&&(r.startingDate=e[1].sd),n&2&&(r.examTitle=e[1].title),n&2&&(r.level=e[1].l),s.$set(r)},i(e){a||(t(s.$$.fragment,e),a=!0)},o(e){u(s.$$.fragment,e),a=!1},d(e){h(s,e)}}}function K(o){let s,a;return s=new R({props:{ending:o[1].en,startingDate:o[1].sd,examTitle:o[1].title,level:o[1].l,review:o[10],submit:o[11]}}),{c(){c(s.$$.fragment)},l(e){b(s.$$.fragment,e)},m(e,n){w(s,e,n),a=!0},p(e,n){const r={};n&2&&(r.ending=e[1].en),n&2&&(r.startingDate=e[1].sd),n&2&&(r.examTitle=e[1].title),n&2&&(r.level=e[1].l),n&1&&(r.review=e[10]),n&6&&(r.submit=e[11]),s.$set(r)},i(e){a||(t(s.$$.fragment,e),a=!0)},o(e){u(s.$$.fragment,e),a=!1},d(e){h(s,e)}}}function L(o){let s,a;return s=new z({props:{numOfMissing:o[1].ans.filter(D).length,numOfQ:o[1].ans.length,backToQuestions:o[8],submit:o[9]}}),{c(){c(s.$$.fragment)},l(e){b(s.$$.fragment,e)},m(e,n){w(s,e,n),a=!0},p(e,n){const r={};n&2&&(r.numOfMissing=e[1].ans.filter(D).length),n&2&&(r.numOfQ=e[1].ans.length),n&1&&(r.backToQuestions=e[8]),n&7&&(r.submit=e[9]),s.$set(r)},i(e){a||(t(s.$$.fragment,e),a=!0)},o(e){u(s.$$.fragment,e),a=!1},d(e){h(s,e)}}}function V(o){let s,a;return s=new B({props:{rightAnswers:o[1].ans,viewingAnswers:o[3],answers:o[3]?o[1].uans[0].answer:o[1].ans,goHome:o[6],questions:o[3]?o[1].qu:o[1].q,save:o[7]}}),{c(){c(s.$$.fragment)},l(e){b(s.$$.fragment,e)},m(e,n){w(s,e,n),a=!0},p(e,n){const r={};n&2&&(r.rightAnswers=e[1].ans),n&8&&(r.viewingAnswers=e[3]),n&10&&(r.answers=e[3]?e[1].uans[0].answer:e[1].ans),n&9&&(r.goHome=e[6]),n&10&&(r.questions=e[3]?e[1].qu:e[1].q),n&11&&(r.save=e[7]),s.$set(r)},i(e){a||(t(s.$$.fragment,e),a=!0)},o(e){u(s.$$.fragment,e),a=!1},d(e){h(s,e)}}}function W(o){let s,a;return s=new F({props:{available:!!o[1].q,getStarted:o[5],ending:o[1].en,startingDate:o[1].sd,examTitle:o[1].title,level:o[1].l,note:o[1].n}}),{c(){c(s.$$.fragment)},l(e){b(s.$$.fragment,e)},m(e,n){w(s,e,n),a=!0},p(e,n){const r={};n&2&&(r.available=!!e[1].q),n&1&&(r.getStarted=e[5]),n&2&&(r.ending=e[1].en),n&2&&(r.startingDate=e[1].sd),n&2&&(r.examTitle=e[1].title),n&2&&(r.level=e[1].l),n&2&&(r.note=e[1].n),s.$set(r)},i(e){a||(t(s.$$.fragment,e),a=!0)},o(e){u(s.$$.fragment,e),a=!1},d(e){h(s,e)}}}function X(o){let s,a,e=o[1]!=null&&N(o);return{c(){e&&e.c(),s=k()},l(n){e&&e.l(n),s=k()},m(n,r){e&&e.m(n,r),T(n,s,r),a=!0},p(n,[r]){n[1]!=null?e?(e.p(n,r),r&2&&t(e,1)):(e=N(n),e.c(),t(e,1),e.m(s.parentNode,s)):e&&(I(),u(e,1,1,()=>{e=null}),$())},i(n){a||(t(e),a=!0)},o(n){u(e),a=!1},d(n){n&&S(s),e&&e.d(n)}}}const D=o=>!o.includes(!0);function Y(o,s,a){let{data:e}=s,n=0,r,f,m=!1;j(()=>{a(2,f=e.params),console.log(e),q("u/gexqc",{courseID:Number(e.params.course),examType:Number(e.params.examType),examID:Number(e.params.examID)}).then(i=>{a(1,r=i),i.q?(a(1,r.ans=r.q.map(_=>[...Array(_.ans.length)].fill(!1)),r),console.log(r)):i.r?i.r.length>0&&(a(1,r.myScore=r.r.filter(_=>_.i==Number(localStorage.getItem("i")))[0].grade,r),console.log(r),i.uans&&a(3,m=!0),a(0,n=4)):a(0,n=4),console.log("viewing answers "+m)})});const l=()=>{a(0,n=1)},g=()=>{if(m){a(0,n=4);return}a(0,n=0)},p=()=>{if(m){a(0,n=4);return}localStorage.setItem("exams",JSON.stringify({q:r.q,ans:r.ans})),r.ans.length>0&&(console.log(r.ans),console.log(r.ans.filter(i=>!i.includes(!0))),r.ans.filter(i=>!i.includes(!0)).length>0?a(0,n=2):a(0,n=3),console.log("this is mode"),console.log(n))},A=()=>{a(0,n=1)},O=()=>{q(`u/${Number(f.examType)==1?"spa":Number(f.examType)==2?"ssa":"sfa"}`,{t:0,i:Number(f.examID),ID:Number(location.href.split("/")[4]),ans:r.ans}).then(()=>{a(0,n=4)})},U=()=>{a(0,n=1)},v=()=>{console.log({t:0,i:Number(f.examID),ID:Number(location.href.split("/")[4]),ans:r.ans.map(i=>i.map(_=>[_]))}),q(`u/${Number(f.examType)==1?"spa":Number(f.examType)==2?"ssa":"sfa"}`,{t:0,i:Number(f.examID),ID:Number(location.href.split("/")[4]),ans:r.ans}).catch(()=>{J("لقد قمت بتسليم النتيجة مسبقا")}).then(()=>{location.reload()})},Q=()=>{a(0,n=1)},M=i=>Object({n:i.n,grade:r.r.find(_=>_.i==i.i).grade});return o.$$set=i=>{"data"in i&&a(4,e=i.data)},[n,r,f,m,e,l,g,p,A,O,U,v,Q,M]}class ee extends C{constructor(s){super(),E(this,s,Y,X,H,{data:4})}}export{ee as component};
