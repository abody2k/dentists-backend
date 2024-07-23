import{s as be,e as m,b as V,t as A,c as _,g as R,h as S,f as M,p as H,d as u,r as n,j as f,i as y,k as h,l as te,q as Z,n as ne,o as ke,y as me,a as ae,m as Ee,a0 as He,w as je,v as Ie,E as xe}from"./scheduler.C7Xo_3aa.js";import{S as _e,i as ge}from"./index.NYh16Rov.js";import{e as he}from"./each.DGNUWULW.js";function Te(l){let e,i,s,t=new Date(l[1]).toLocaleString("en-GB",{hour12:!0})+"",a,r,o,c,v=new Date(l[2]).toLocaleString("en-GB",{hour12:!0})+"",d;return{c(){e=m("div"),i=m("div"),s=A("Start date: "),a=A(t),r=V(),o=m("div"),c=A("End date: "),d=A(v),this.h()},l(w){e=_(w,"DIV",{style:!0,class:!0});var g=M(e);i=_(g,"DIV",{class:!0});var k=M(i);s=H(k,"Start date: "),a=H(k,t),k.forEach(u),r=S(g),o=_(g,"DIV",{class:!0});var b=M(o);c=H(b,"End date: "),d=H(b,v),b.forEach(u),g.forEach(u),this.h()},h(){f(i,"class","svelte-b55iwe"),f(o,"class","svelte-b55iwe"),n(e,"text-wrap","nowrap"),n(e,"display","flex"),n(e,"border","1px solid #004c7961"),n(e,"gap","25px"),n(e,"padding","10px"),n(e,"border-radius","10px"),n(e,"font-size","14px"),n(e,"flex-wrap","wrap"),n(e,"justify-content","center"),n(e,"width","fit-content"),n(e,"margin-left","50%"),n(e,"transform","translateX(-50%)"),f(e,"class","svelte-b55iwe")},m(w,g){y(w,e,g),h(e,i),h(i,s),h(i,a),h(e,r),h(e,o),h(o,c),h(o,d)},p(w,g){g&2&&t!==(t=new Date(w[1]).toLocaleString("en-GB",{hour12:!0})+"")&&Z(a,t),g&4&&v!==(v=new Date(w[2]).toLocaleString("en-GB",{hour12:!0})+"")&&Z(d,v)},d(w){w&&u(e)}}}function Ge(l){let e,i=`<div class="EXMstartBar svelte-b55iwe"><div style="display: flex;align-items: center;gap: 10px;font-size: 15px;height: 43px;" class="svelte-b55iwe"><img style="width: 30px; height: 30px; margin-left: 15px;" src="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png" alt="" class="svelte-b55iwe"/> 
                Echo Dent</div> <div style="transform: translateX(50%);" class="svelte-b55iwe">Exam</div></div>`,s,t,a,r,o,c="The name of the course",v,d,w,g,k,b,I,Y="The name of the dentist",j,L,Q,W="Exam instructions:",$,O,F,X,p,T,z,U,G,ie,P,q=!l[7]&&Te(l);return{c(){e=m("div"),e.innerHTML=i,s=V(),t=m("div"),a=A(l[0]),r=V(),o=m("div"),o.textContent=c,v=V(),d=m("div"),w=A("Level: "),g=A(l[4]),k=V(),q&&q.c(),b=V(),I=m("div"),I.textContent=Y,j=V(),L=m("div"),Q=m("small"),Q.textContent=W,$=V(),O=m("div"),F=A(l[3]),X=V(),p=m("div"),T=m("button"),z=A("GET STARTED ❯"),this.h()},l(E){e=_(E,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(e)!=="svelte-12c1qp4"&&(e.innerHTML=i),s=S(E),t=_(E,"DIV",{style:!0,class:!0});var N=M(t);a=H(N,l[0]),N.forEach(u),r=S(E),o=_(E,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(o)!=="svelte-17euhbd"&&(o.textContent=c),v=S(E),d=_(E,"DIV",{style:!0,class:!0});var x=M(d);w=H(x,"Level: "),g=H(x,l[4]),x.forEach(u),k=S(E),q&&q.l(E),b=S(E),I=_(E,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(I)!=="svelte-euuaoc"&&(I.textContent=Y),j=S(E),L=_(E,"DIV",{class:!0,style:!0});var B=M(L);Q=_(B,"SMALL",{class:!0,"data-svelte-h":!0}),R(Q)!=="svelte-1mx4tg6"&&(Q.textContent=W),$=S(B),O=_(B,"DIV",{class:!0});var re=M(O);F=H(re,l[3]),re.forEach(u),B.forEach(u),X=S(E),p=_(E,"DIV",{style:!0,class:!0});var se=M(p);T=_(se,"BUTTON",{class:!0,style:!0,title:!0});var ee=M(T);z=H(ee,"GET STARTED ❯"),ee.forEach(u),se.forEach(u),this.h()},h(){n(e,"background-color","rgb(0, 76, 121)"),n(e,"height","43px"),n(e,"width","100%"),n(e,"color","white"),f(e,"class","svelte-b55iwe"),n(t,"text-align","center"),n(t,"font-size","20px"),n(t,"font-weight","600"),n(t,"margin","20px 0"),f(t,"class","svelte-b55iwe"),n(o,"text-align","center"),n(o,"font-size","16px"),f(o,"class","svelte-b55iwe"),n(d,"transform","translateX(-50%)"),n(d,"text-align","center"),n(d,"border","1px solid #004c7961"),n(d,"padding","5px"),n(d,"box-sizing","border-box"),n(d,"border-radius","10px"),n(d,"width","100px"),n(d,"margin","10px 50%"),f(d,"class","svelte-b55iwe"),n(I,"text-align","center"),n(I,"margin","20px 0"),n(I,"font-size","16px"),n(I,"font-weight","500"),f(I,"class","svelte-b55iwe"),f(Q,"class","svelte-b55iwe"),f(O,"class","svelte-b55iwe"),f(L,"class","examSettingCard svelte-b55iwe"),n(L,"margin","50px 5%"),n(L,"background","#ffffff8c"),f(T,"class","startExamBtn svelte-b55iwe"),f(T,"style",U=l[6]?"":"width: 150px;height: 40px;border: none;border-radius: 60px; background: #adadad;color: white;"),f(T,"title","Start Exam"),T.disabled=G=!l[6],n(p,"width","100%"),n(p,"display","flex"),n(p,"justify-content","center"),f(p,"class","svelte-b55iwe")},m(E,N){y(E,e,N),y(E,s,N),y(E,t,N),h(t,a),y(E,r,N),y(E,o,N),y(E,v,N),y(E,d,N),h(d,w),h(d,g),y(E,k,N),q&&q.m(E,N),y(E,b,N),y(E,I,N),y(E,j,N),y(E,L,N),h(L,Q),h(L,$),h(L,O),h(O,F),y(E,X,N),y(E,p,N),h(p,T),h(T,z),ie||(P=te(T,"click",l[8]),ie=!0)},p(E,[N]){N&1&&Z(a,E[0]),N&16&&Z(g,E[4]),E[7]?q&&(q.d(1),q=null):q?q.p(E,N):(q=Te(E),q.c(),q.m(b.parentNode,b)),N&8&&Z(F,E[3]),N&64&&U!==(U=E[6]?"":"width: 150px;height: 40px;border: none;border-radius: 60px; background: #adadad;color: white;")&&f(T,"style",U),N&64&&G!==(G=!E[6])&&(T.disabled=G)},i:ne,o:ne,d(E){E&&(u(e),u(s),u(t),u(r),u(o),u(v),u(d),u(k),u(b),u(I),u(j),u(L),u(X),u(p)),q&&q.d(E),ie=!1,P()}}}function qe(l,e,i){let{examTitle:s}=e,{startingDate:t}=e,{ending:a}=e,{note:r}=e,{level:o}=e,{getStarted:c}=e,{available:v}=e,d=!1;ke(()=>{i(7,d=!t||!a)});const w=()=>{v&&c()};return l.$$set=g=>{"examTitle"in g&&i(0,s=g.examTitle),"startingDate"in g&&i(1,t=g.startingDate),"ending"in g&&i(2,a=g.ending),"note"in g&&i(3,r=g.note),"level"in g&&i(4,o=g.level),"getStarted"in g&&i(5,c=g.getStarted),"available"in g&&i(6,v=g.available)},[s,t,a,r,o,c,v,d,w]}class dt extends _e{constructor(e){super(),ge(this,e,qe,Ge,be,{examTitle:0,startingDate:1,ending:2,note:3,level:4,getStarted:5,available:6})}}function Ce(l,e,i){const s=l.slice();return s[22]=e[i],s[25]=e,s[24]=i,s}function Le(l,e,i){const s=l.slice();return s[22]=e[i],s[23]=e,s[24]=i,s}function Be(l,e,i){const s=l.slice();return s[26]=e[i],s[24]=i,s}function Ve(l){let e,i=he(l[0]),s=[];for(let t=0;t<i.length;t+=1)s[t]=Se(Be(l,i,t));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=ae()},l(t){for(let a=0;a<s.length;a+=1)s[a].l(t);e=ae()},m(t,a){for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(t,a);y(t,e,a)},p(t,a){if(a&195){i=he(t[0]);let r;for(r=0;r<i.length;r+=1){const o=Be(t,i,r);s[r]?s[r].p(o,a):(s[r]=Se(o),s[r].c(),s[r].m(e.parentNode,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(t){t&&u(e),Ee(s,t)}}}function Se(l){let e,i=l[24]+1+"",s,t,a,r;function o(){return l[8](l[24],l[26])}return{c(){e=m("div"),s=A(i),this.h()},l(c){e=_(c,"DIV",{class:!0,style:!0});var v=M(e);s=H(v,i),v.forEach(u),this.h()},h(){f(e,"class","Qnumber svelte-b55iwe"),f(e,"style",t=l[26].marked?"color: #ffb000;border: 1px solid #ffb000;":l[1][l[24]].includes(!0)?"background-color: #004c79;":"")},m(c,v){y(c,e,v),h(e,s),a||(r=te(e,"click",o),a=!0)},p(c,v){l=c,v&3&&t!==(t=l[26].marked?"color: #ffb000;border: 1px solid #ffb000;":l[1][l[24]].includes(!0)?"background-color: #004c79;":"")&&f(e,"style",t)},d(c){c&&u(e),a=!1,r()}}}function Me(l){let e,i=l[6]+1+"",s,t,a,r;return{c(){e=m("div"),s=A(i),this.h()},l(o){e=_(o,"DIV",{class:!0,style:!0,title:!0});var c=M(e);s=H(c,i),c.forEach(u),this.h()},h(){f(e,"class","Qnumber svelte-b55iwe"),f(e,"style",t="margin: 0 20px 0 0;"+(l[7].marked?"color: #ffb000;border: 1px solid #ffb000;":l[1][l[6]].includes(!0)?"background-color: #004c79;":"")),f(e,"title","Mark the question")},m(o,c){y(o,e,c),h(e,s),a||(r=te(e,"click",l[11]),a=!0)},p(o,c){c&64&&i!==(i=o[6]+1+"")&&Z(s,i),c&194&&t!==(t="margin: 0 20px 0 0;"+(o[7].marked?"color: #ffb000;border: 1px solid #ffb000;":o[1][o[6]].includes(!0)?"background-color: #004c79;":""))&&f(e,"style",t)},d(o){o&&u(e),a=!1,r()}}}function Ne(l){let e,i,s,t=l[7].q+"",a,r,o;function c(b,I){return b[4]?Pe:Xe}let v=c(l),d=v(l);function w(b,I){return b[4]?Je:Ke}let g=w(l),k=g(l);return{c(){e=m("div"),i=m("div"),s=m("p"),a=A(t),r=V(),d.c(),o=V(),k.c(),this.h()},l(b){e=_(b,"DIV",{class:!0});var I=M(e);i=_(I,"DIV",{class:!0});var Y=M(i);s=_(Y,"P",{class:!0});var j=M(s);a=H(j,t),j.forEach(u),Y.forEach(u),r=S(I),d.l(I),o=S(I),k.l(I),I.forEach(u),this.h()},h(){f(s,"class","svelte-b55iwe"),f(i,"class","questionDiv svelte-b55iwe"),f(e,"class","qPaper svelte-b55iwe")},m(b,I){y(b,e,I),h(e,i),h(i,s),h(s,a),h(e,r),d.m(e,null),h(e,o),k.m(e,null)},p(b,I){I&128&&t!==(t=b[7].q+"")&&Z(a,t),v===(v=c(b))&&d?d.p(b,I):(d.d(1),d=v(b),d&&(d.c(),d.m(e,o))),g===(g=w(b))&&k?k.p(b,I):(k.d(1),k=g(b),k&&(k.c(),k.m(e,null)))},d(b){b&&u(e),d.d(),k.d()}}}function Xe(l){let e,i=he(l[7].ans),s=[];for(let t=0;t<i.length;t+=1)s[t]=Oe(Ce(l,i,t));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=ae()},l(t){for(let a=0;a<s.length;a+=1)s[a].l(t);e=ae()},m(t,a){for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(t,a);y(t,e,a)},p(t,a){if(a&194){i=he(t[7].ans);let r;for(r=0;r<i.length;r+=1){const o=Ce(t,i,r);s[r]?s[r].p(o,a):(s[r]=Oe(o),s[r].c(),s[r].m(e.parentNode,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(t){t&&u(e),Ee(s,t)}}}function Pe(l){let e,i=he(l[5][l[6]]),s=[];for(let t=0;t<i.length;t+=1)s[t]=ze(Le(l,i,t));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=ae()},l(t){for(let a=0;a<s.length;a+=1)s[a].l(t);e=ae()},m(t,a){for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(t,a);y(t,e,a)},p(t,a){if(a&99){i=he(t[5][t[6]]);let r;for(r=0;r<i.length;r+=1){const o=Le(t,i,r);s[r]?s[r].p(o,a):(s[r]=ze(o),s[r].c(),s[r].m(e.parentNode,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(t){t&&u(e),Ee(s,t)}}}function Re(l){let e,i,s,t;function a(){l[17].call(e,l[24])}function r(...o){return l[18](l[24],...o)}return i=He(l[14][0],[l[24]]),{c(){e=m("input"),this.h()},l(o){e=_(o,"INPUT",{type:!0,name:!0,class:!0}),this.h()},h(){f(e,"type","radio"),f(e,"name","option"),e.__value=!0,je(e,e.__value),f(e,"class","svelte-b55iwe"),i.p(e)},m(o,c){y(o,e,c),e.checked=e.__value===l[1][l[6]][l[24]],s||(t=[te(e,"change",a),te(e,"change",r)],s=!0)},p(o,c){l=o,c&98&&(e.checked=e.__value===l[1][l[6]][l[24]]),c&96&&i.u([l[24]])},d(o){o&&u(e),i.r(),s=!1,me(t)}}}function We(l){let e,i,s,t;function a(){l[15].call(e,l[24])}return{c(){e=m("input"),this.h()},l(r){e=_(r,"INPUT",{type:!0,id:!0,name:!0,class:!0}),this.h()},h(){f(e,"type","checkbox"),f(e,"id",i=l[22]+l[24]),f(e,"name","option"),f(e,"class","svelte-b55iwe")},m(r,o){y(r,e,o),e.checked=l[1][l[6]][l[24]],s||(t=[te(e,"change",a),te(e,"change",l[16])],s=!0)},p(r,o){l=r,o&128&&i!==(i=l[22]+l[24])&&f(e,"id",i),o&66&&(e.checked=l[1][l[6]][l[24]])},d(r){r&&u(e),s=!1,me(t)}}}function Oe(l){let e,i,s,t=l[22]+"",a,r;function o(d,w){return d[7].m?We:Re}let c=o(l),v=c(l);return{c(){e=m("div"),v.c(),i=V(),s=m("label"),a=A(t),r=V(),this.h()},l(d){e=_(d,"DIV",{style:!0,class:!0});var w=M(e);v.l(w),i=S(w),s=_(w,"LABEL",{for:!0,class:!0});var g=M(s);a=H(g,t),g.forEach(u),r=S(w),w.forEach(u),this.h()},h(){f(s,"for","option"),f(s,"class","svelte-b55iwe"),n(e,"border","solid 1px transparent"),n(e,"width","fit-content"),n(e,"border-radius","6px"),n(e,"width","97%"),n(e,"margin","10px 1.5%"),n(e,"background-color","transparent"),f(e,"class","svelte-b55iwe")},m(d,w){y(d,e,w),v.m(e,null),h(e,i),h(e,s),h(s,a),h(e,r)},p(d,w){c===(c=o(d))&&v?v.p(d,w):(v.d(1),v=c(d),v&&(v.c(),v.m(e,i))),w&128&&t!==(t=d[22]+"")&&Z(a,t)},d(d){d&&u(e),v.d()}}}function Ye(l){let e,i,s,t,a=l[0][l[6]].ans[l[24]]+"",r,o,c,v,d,w;function g(){l[13].call(i,l[24])}return v=He(l[14][0],[l[24]]),{c(){e=m("div"),i=m("input"),s=V(),t=m("label"),r=A(a),o=V(),this.h()},l(k){e=_(k,"DIV",{style:!0,class:!0});var b=M(e);i=_(b,"INPUT",{type:!0,id:!0,class:!0}),s=S(b),t=_(b,"LABEL",{for:!0,class:!0});var I=M(t);r=H(I,a),I.forEach(u),o=S(b),b.forEach(u),this.h()},h(){f(i,"type","radio"),f(i,"id","option2"),i.disabled=!0,f(i,"class","svelte-b55iwe"),f(t,"for","option2"),f(t,"class","svelte-b55iwe"),f(e,"style",c=l[22][0]?"border: solid 1px #04df04;width: fit-content;border-radius: 6px;width: 97%;margin: 10px 1.5%;background-color: #81ff7a36;":l[1][l[6]][l[24]]?"border: solid 1px #ff4242;width: fit-content;border-radius: 6px;width: 97%;margin: 10px 1.5%;background-color: #ff7a7a36;":""),f(e,"class","svelte-b55iwe"),v.p(i)},m(k,b){y(k,e,b),h(e,i),i.checked=i.__value===l[1][l[6]][l[24]],h(e,s),h(e,t),h(t,r),h(e,o),d||(w=te(i,"change",g),d=!0)},p(k,b){l=k,b&98&&(i.checked=i.__value===l[1][l[6]][l[24]]),b&65&&a!==(a=l[0][l[6]].ans[l[24]]+"")&&Z(r,a),b&98&&c!==(c=l[22][0]?"border: solid 1px #04df04;width: fit-content;border-radius: 6px;width: 97%;margin: 10px 1.5%;background-color: #81ff7a36;":l[1][l[6]][l[24]]?"border: solid 1px #ff4242;width: fit-content;border-radius: 6px;width: 97%;margin: 10px 1.5%;background-color: #ff7a7a36;":"")&&f(e,"style",c),b&96&&v.u([l[24]])},d(k){k&&u(e),v.r(),d=!1,w()}}}function Fe(l){let e,i,s,t,a=l[0][l[6]].ans[l[24]]+"",r,o,c,v,d;function w(){l[12].call(i,l[24])}return{c(){e=m("div"),i=m("input"),s=V(),t=m("label"),r=A(a),o=V(),this.h()},l(g){e=_(g,"DIV",{style:!0,class:!0});var k=M(e);i=_(k,"INPUT",{type:!0,id:!0,class:!0}),s=S(k),t=_(k,"LABEL",{for:!0,class:!0});var b=M(t);r=H(b,a),b.forEach(u),o=S(k),k.forEach(u),this.h()},h(){f(i,"type","checkbox"),f(i,"id","option2"),i.disabled=!0,f(i,"class","svelte-b55iwe"),f(t,"for","option2"),f(t,"class","svelte-b55iwe"),f(e,"style",c=l[22][0]?"border: solid 1px #04df04;width: fit-content;border-radius: 6px;width: 97%;margin: 10px 1.5%;background-color: #81ff7a36;":l[1][l[6]][l[24]]?"border: solid 1px #ff4242;width: fit-content;border-radius: 6px;width: 97%;margin: 10px 1.5%;background-color: #ff7a7a36;":""),f(e,"class","svelte-b55iwe")},m(g,k){y(g,e,k),h(e,i),i.checked=l[1][l[6]][l[24]],h(e,s),h(e,t),h(t,r),h(e,o),v||(d=te(i,"change",w),v=!0)},p(g,k){l=g,k&66&&(i.checked=l[1][l[6]][l[24]]),k&65&&a!==(a=l[0][l[6]].ans[l[24]]+"")&&Z(r,a),k&98&&c!==(c=l[22][0]?"border: solid 1px #04df04;width: fit-content;border-radius: 6px;width: 97%;margin: 10px 1.5%;background-color: #81ff7a36;":l[1][l[6]][l[24]]?"border: solid 1px #ff4242;width: fit-content;border-radius: 6px;width: 97%;margin: 10px 1.5%;background-color: #ff7a7a36;":"")&&f(e,"style",c)},d(g){g&&u(e),v=!1,d()}}}function ze(l){let e;function i(a,r){return a[5][a[6]].length>1?Fe:Ye}let s=i(l),t=s(l);return{c(){t.c(),e=ae()},l(a){t.l(a),e=ae()},m(a,r){t.m(a,r),y(a,e,r)},p(a,r){s===(s=i(a))&&t?t.p(a,r):(t.d(1),t=s(a),t&&(t.c(),t.m(e.parentNode,e)))},d(a){a&&u(e),t.d(a)}}}function Ke(l){let e,i,s="Clear",t,a;return{c(){e=m("div"),i=m("button"),i.textContent=s,this.h()},l(r){e=_(r,"DIV",{style:!0,class:!0});var o=M(e);i=_(o,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),R(i)!=="svelte-e9n1o3"&&(i.textContent=s),o.forEach(u),this.h()},h(){f(i,"class","qPaperBtn svelte-b55iwe"),f(i,"title","Remove your answer"),n(e,"width","100%"),n(e,"display","flex"),n(e,"justify-content","center"),f(e,"class","svelte-b55iwe")},m(r,o){y(r,e,o),h(e,i),t||(a=te(i,"click",l[19]),t=!0)},p:ne,d(r){r&&u(e),t=!1,a()}}}function Je(l){let e,i,s="Answer:",t,a,r=l[7].n+"",o;return{c(){e=m("div"),i=m("small"),i.textContent=s,t=V(),a=m("p"),o=A(r),this.h()},l(c){e=_(c,"DIV",{class:!0});var v=M(e);i=_(v,"SMALL",{class:!0,"data-svelte-h":!0}),R(i)!=="svelte-1bw1pu6"&&(i.textContent=s),t=S(v),a=_(v,"P",{class:!0});var d=M(a);o=H(d,r),d.forEach(u),v.forEach(u),this.h()},h(){f(i,"class","svelte-b55iwe"),f(a,"class","svelte-b55iwe"),f(e,"class","ansDiv svelte-b55iwe")},m(c,v){y(c,e,v),h(e,i),h(e,t),h(e,a),h(a,o)},p(c,v){v&128&&r!==(r=c[7].n+"")&&Z(o,r)},d(c){c&&u(e)}}}function Ze(l){let e,i,s="Questions List",t,a,r,o,c,v='HOME <p style="font-size: 20px;height: 35px;" class="svelte-b55iwe">⌂</p>',d,w,g='FINISH <p class="svelte-b55iwe">✓</p>',k,b,I='<img id="toggleIcon" src="/open-icon.png" alt="Open Sidebar" class="svelte-b55iwe"/>',Y,j,L,Q,W='<img style="width: 30px; height: 30px; margin-left: 15px;" src="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png" alt="" class="svelte-b55iwe"/> Echo Dent',$,O,F,X,p,T,z,U,G="⟨⟨",ie,P,q,E,N=l[6]==l[0].length-1?"FINISH":"NEXT",x,B,re="⟩⟩",se,ee,fe,K=l[1].length>0&&Ve(l),le=l[7]&&Me(l),D=l[7]&&Ne(l);return{c(){e=m("div"),i=m("div"),i.textContent=s,t=V(),a=m("div"),K&&K.c(),r=V(),o=m("div"),c=m("button"),c.innerHTML=v,d=V(),w=m("button"),w.innerHTML=g,k=V(),b=m("button"),b.innerHTML=I,Y=V(),j=m("div"),L=m("div"),Q=m("div"),Q.innerHTML=W,$=V(),O=m("div"),le&&le.c(),F=V(),X=m("div"),D&&D.c(),p=V(),T=m("div"),z=m("button"),U=m("p"),U.textContent=G,ie=A("PREVIOUS"),q=V(),E=m("button"),x=A(N),B=m("p"),B.textContent=re,this.h()},l(C){e=_(C,"DIV",{id:!0,class:!0});var J=M(e);i=_(J,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(i)!=="svelte-ytyehn"&&(i.textContent=s),t=S(J),a=_(J,"DIV",{class:!0});var de=M(a);K&&K.l(de),de.forEach(u),r=S(J),o=_(J,"DIV",{style:!0,class:!0});var ue=M(o);c=_(ue,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),R(c)!=="svelte-jrhl1g"&&(c.innerHTML=v),d=S(ue),w=_(ue,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),R(w)!=="svelte-1vxyhpn"&&(w.innerHTML=g),ue.forEach(u),J.forEach(u),k=S(C),b=_(C,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),R(b)!=="svelte-100elua"&&(b.innerHTML=I),Y=S(C),j=_(C,"DIV",{id:!0,class:!0});var oe=M(j);L=_(oe,"DIV",{id:!0,style:!0,class:!0});var ce=M(L);Q=_(ce,"DIV",{id:!0,style:!0,class:!0,"data-svelte-h":!0}),R(Q)!=="svelte-go7jg2"&&(Q.innerHTML=W),$=S(ce),O=_(ce,"DIV",{id:!0,style:!0,class:!0});var ve=M(O);le&&le.l(ve),ve.forEach(u),ce.forEach(u),F=S(oe),X=_(oe,"DIV",{class:!0});var De=M(X);D&&D.l(De),De.forEach(u),p=S(oe),T=_(oe,"DIV",{class:!0,id:!0});var we=M(T);z=_(we,"BUTTON",{class:!0,style:!0});var pe=M(z);U=_(pe,"P",{style:!0,class:!0,"data-svelte-h":!0}),R(U)!=="svelte-w51kdo"&&(U.textContent=G),ie=H(pe,"PREVIOUS"),pe.forEach(u),q=S(we),E=_(we,"BUTTON",{class:!0,style:!0});var ye=M(E);x=H(ye,N),B=_(ye,"P",{style:!0,class:!0,"data-svelte-h":!0}),R(B)!=="svelte-j0c3qm"&&(B.textContent=re),ye.forEach(u),we.forEach(u),oe.forEach(u),this.h()},h(){n(i,"height","70px"),n(i,"text-align","center"),n(i,"line-height","5"),n(i,"color","white"),n(i,"font-size","16px"),f(i,"class","svelte-b55iwe"),f(a,"class","qList svelte-b55iwe"),f(c,"class","Qnumber svelte-b55iwe"),n(c,"width","80px"),n(c,"height","30px"),n(c,"box-shadow","0px 0px 5px 1px #ffffff2b"),f(w,"class","Qnumber svelte-b55iwe"),n(w,"width","80px"),n(w,"height","30px"),n(w,"box-shadow","0px 0px 5px 1px #ffffff2b"),n(w,"color","#00ff51"),n(o,"height","70px"),n(o,"display","flex"),n(o,"align-items","center"),n(o,"justify-content","center"),n(o,"gap","20px"),f(o,"class","svelte-b55iwe"),f(e,"id","mySidebar"),f(e,"class","sidebar svelte-b55iwe"),f(b,"id","sidebarToggle"),f(b,"class","open-btn svelte-b55iwe"),f(Q,"id","logo"),n(Q,"display","flex"),n(Q,"align-items","center"),n(Q,"gap","10px"),n(Q,"font-size","15px"),n(Q,"height","43px"),f(Q,"class","svelte-b55iwe"),f(O,"id","Qnumb"),n(O,"width","100%"),n(O,"height","43px"),n(O,"display","flex"),n(O,"align-items","center"),n(O,"justify-content","center"),n(O,"position","relative"),n(O,"top","-43px"),f(O,"class","svelte-b55iwe"),f(L,"id","topBar"),n(L,"background-color","rgb(0, 76, 121)"),n(L,"height","43px"),n(L,"width","100%"),n(L,"color","white"),n(L,"width","100%"),f(L,"class","svelte-b55iwe"),f(X,"class","middleBody svelte-b55iwe"),n(U,"height","24px"),f(U,"class","svelte-b55iwe"),f(z,"class","Qnumber svelte-b55iwe"),f(z,"style",P=`width: 110px;height: 30px; ${l[6]==0?"box-shadow:none;color: #ffffff66;":"box-shadow: 0px 0px 5px 1px #ffffff2b;"}`),f(B,"style","height: 24px;"),f(B,"class","svelte-b55iwe"),f(E,"class","Qnumber svelte-b55iwe"),f(E,"style",se="width: 110px;height: 30px;box-shadow: 0px 0px 5px 1px #ffffff2b;"+(l[6]==l[0].length-1?"color: #00ff51;":"")),f(T,"class","bottomBar svelte-b55iwe"),f(T,"id","bottomBar"),f(j,"id","main"),f(j,"class","main-content svelte-b55iwe")},m(C,J){y(C,e,J),h(e,i),h(e,t),h(e,a),K&&K.m(a,null),h(e,r),h(e,o),h(o,c),h(o,d),h(o,w),y(C,k,J),y(C,b,J),y(C,Y,J),y(C,j,J),h(j,L),h(L,Q),h(L,$),h(L,O),le&&le.m(O,null),h(j,F),h(j,X),D&&D.m(X,null),h(j,p),h(j,T),h(T,z),h(z,U),h(z,ie),h(T,q),h(T,E),h(E,x),h(E,B),ee||(fe=[te(c,"click",l[9]),te(w,"click",l[10]),te(b,"click",Qe),te(z,"click",l[20]),te(E,"click",l[21])],ee=!0)},p(C,[J]){C[1].length>0?K?K.p(C,J):(K=Ve(C),K.c(),K.m(a,null)):K&&(K.d(1),K=null),C[7]?le?le.p(C,J):(le=Me(C),le.c(),le.m(O,null)):le&&(le.d(1),le=null),C[7]?D?D.p(C,J):(D=Ne(C),D.c(),D.m(X,null)):D&&(D.d(1),D=null),J&64&&P!==(P=`width: 110px;height: 30px; ${C[6]==0?"box-shadow:none;color: #ffffff66;":"box-shadow: 0px 0px 5px 1px #ffffff2b;"}`)&&f(z,"style",P),J&65&&N!==(N=C[6]==C[0].length-1?"FINISH":"NEXT")&&Z(x,N),J&65&&se!==(se="width: 110px;height: 30px;box-shadow: 0px 0px 5px 1px #ffffff2b;"+(C[6]==C[0].length-1?"color: #00ff51;":""))&&f(E,"style",se)},i:ne,o:ne,d(C){C&&(u(e),u(k),u(b),u(Y),u(j)),K&&K.d(),le&&le.d(),D&&D.d(),ee=!1,me(fe)}}}function Qe(){var l=document.getElementById("mySidebar"),e=document.getElementById("main");document.getElementById("sidebarToggle");var i=document.getElementById("toggleIcon"),s=document.getElementById("logo");l.classList.contains("open")?(l.style.left="-250px",window.innerWidth>768&&(e.style.marginLeft="0",s.style.marginLeft="70px"),l.classList.remove("open"),i.src="/open-icon.png"):(l.style.left="0",window.innerWidth>768&&(e.style.marginLeft="250px",s.style.marginLeft="0"),l.classList.add("open"),i.src="/close-icon.png")}function $e(l,e,i){let{questions:s}=e,{answers:t=[]}=e,a=0,r,{goHome:o}=e,{save:c}=e,{viewingAnswers:v=!1}=e,{rightAnswers:d}=e;window.addEventListener("resize",function(){var p=document.getElementById("mySidebar"),T=document.getElementById("main"),z=document.getElementById("toggleIcon"),U=document.getElementById("logo"),G=document.getElementById("Qnumb");window.innerWidth<=768?(G.style.justifyContent="end",U.style.justifyContent="center",U.style.marginLeft="0",T.style.marginLeft="0",p.style.left="-250px",p.classList.remove("open"),z.src="/open-icon.png"):(U.style.marginLeft="0",U.style.justifyContent="flex-start",G.style.justifyContent="center",T.style.marginLeft="250px",p.style.left="0",p.classList.add("open"),z.src="/close-icon.png")}),window.addEventListener("load",function(){var p=document.getElementById("mySidebar"),T=document.getElementById("main"),z=document.getElementById("toggleIcon"),U=document.getElementById("logo"),G=document.getElementById("Qnumb");p.style.transition="none",T.style.transition="none",window.innerWidth>768?(U.style.marginLeft="0",G.style.justifyContent="center",T.style.marginLeft="250px",p.style.left="0",p.classList.add("open"),z.src="/close-icon.png"):(G.style.justifyContent="end",U.style.justifyContent="center",U.style.marginLeft="0"),setTimeout(function(){U.style.transition="margin-left 0.3s",p.style.transition="0.3s",T.style.transition="margin-left 0.3s"},0)}),ke(()=>{Qe(),console.log(t),console.log(s),console.log(d),s.length>0&&(i(7,r=s[0]),console.log(t))});const w=[[]],g=(p,T)=>{i(6,a=p),i(7,r=T)},k=()=>{i(0,s[a]=r,s),o()},b=()=>{i(0,s[a]=r,s),c()},I=()=>{v||(r.marked?i(7,r.marked=!1,r):i(7,r.marked=!0,r),i(0,s[a]=r,s))};function Y(p){t[a][p]=this.checked,i(1,t)}function j(p){t[a][p]=this.__value,i(1,t)}function L(p){t[a][p]=this.checked,i(1,t)}const Q=p=>{console.log(t)};function W(p){t[a][p]=this.__value,i(1,t)}const $=(p,T)=>{i(1,t[a]=t[a].map((z,U)=>U==p),t),console.log(t)},O=()=>{i(1,t[a]=t[a].map(p=>!1),t)},F=()=>{a>0&&(i(0,s[a]=r,s),i(6,a-=1),i(7,r=s[a]))},X=()=>{i(0,s[a]=r,s),a==s.length-1?c():(i(6,a+=1),i(7,r=s[a]))};return l.$$set=p=>{"questions"in p&&i(0,s=p.questions),"answers"in p&&i(1,t=p.answers),"goHome"in p&&i(2,o=p.goHome),"save"in p&&i(3,c=p.save),"viewingAnswers"in p&&i(4,v=p.viewingAnswers),"rightAnswers"in p&&i(5,d=p.rightAnswers)},[s,t,o,c,v,d,a,r,g,k,b,I,Y,j,w,L,Q,W,$,O,F,X]}class ct extends _e{constructor(e){super(),ge(this,e,$e,Ze,be,{questions:0,answers:1,goHome:2,save:3,viewingAnswers:4,rightAnswers:5})}}function et(l){let e,i,s,t,a,r="Oops!",o,c,v="It seems you skipped some questions.",d,w,g,k,b,I,Y,j,L,Q,W='<span style="margin-right: 10px;" class="svelte-b55iwe">❮</span> BACK',$,O,F="SUBMIT ANYWAY",X,p;return{c(){e=m("img"),s=V(),t=m("div"),a=m("div"),a.textContent=r,o=V(),c=m("div"),c.textContent=v,d=V(),w=m("div"),g=A("("),k=A(l[1]),b=A(") / ("),I=A(l[0]),Y=A(")"),j=V(),L=m("div"),Q=m("button"),Q.innerHTML=W,$=V(),O=m("button"),O.textContent=F,this.h()},l(T){e=_(T,"IMG",{src:!0,alt:!0,style:!0,class:!0}),s=S(T),t=_(T,"DIV",{style:!0,class:!0});var z=M(t);a=_(z,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(a)!=="svelte-i2u6ar"&&(a.textContent=r),o=S(z),c=_(z,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(c)!=="svelte-cnb0fl"&&(c.textContent=v),d=S(z),w=_(z,"DIV",{style:!0,class:!0});var U=M(w);g=H(U,"("),k=H(U,l[1]),b=H(U,") / ("),I=H(U,l[0]),Y=H(U,")"),U.forEach(u),z.forEach(u),j=S(T),L=_(T,"DIV",{style:!0,class:!0});var G=M(L);Q=_(G,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),R(Q)!=="svelte-1dr2hrq"&&(Q.innerHTML=W),$=S(G),O=_(G,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),R(O)!=="svelte-1wvlptb"&&(O.textContent=F),G.forEach(u),this.h()},h(){Ie(e.src,i="/warning.gif")||f(e,"src",i),f(e,"alt",""),n(e,"margin","20px 0 20px 50%"),n(e,"transform","translateX(-50%)"),n(e,"width","100px"),n(e,"height","100px"),f(e,"class","svelte-b55iwe"),n(a,"font-size","30px"),f(a,"class","svelte-b55iwe"),n(c,"margin","20px 0"),f(c,"class","svelte-b55iwe"),n(w,"border","1px solid"),n(w,"padding","5px"),n(w,"border-radius","10px"),n(w,"margin","10px 0 10px 50%"),n(w,"transform","translateX(-50%)"),n(w,"width","fit-content"),n(w,"color","#e7ad00"),n(w,"background-color","#ffffff47"),f(w,"class","svelte-b55iwe"),n(t,"text-align","center"),f(t,"class","svelte-b55iwe"),f(Q,"class","startExamBtn svelte-b55iwe"),f(Q,"title","Back to exam"),f(O,"class","startExamBtn svelte-b55iwe"),f(O,"title","Submit your answer"),n(L,"width","100%"),n(L,"display","flex"),n(L,"justify-content","center"),n(L,"gap","10px"),f(L,"class","svelte-b55iwe")},m(T,z){y(T,e,z),y(T,s,z),y(T,t,z),h(t,a),h(t,o),h(t,c),h(t,d),h(t,w),h(w,g),h(w,k),h(w,b),h(w,I),h(w,Y),y(T,j,z),y(T,L,z),h(L,Q),h(L,$),h(L,O),X||(p=[te(Q,"click",l[4]),te(O,"click",function(){xe(l[2])&&l[2].apply(this,arguments)})],X=!0)},p(T,[z]){l=T,z&2&&Z(k,l[1]),z&1&&Z(I,l[0])},i:ne,o:ne,d(T){T&&(u(e),u(s),u(t),u(j),u(L)),X=!1,me(p)}}}function tt(l,e,i){let{numOfQ:s}=e,{numOfMissing:t}=e,{submit:a}=e,{backToQuestions:r}=e;ke(()=>{console.log([t,s])});const o=()=>{r()};return l.$$set=c=>{"numOfQ"in c&&i(0,s=c.numOfQ),"numOfMissing"in c&&i(1,t=c.numOfMissing),"submit"in c&&i(2,a=c.submit),"backToQuestions"in c&&i(3,r=c.backToQuestions)},[s,t,a,r,o]}class vt extends _e{constructor(e){super(),ge(this,e,tt,et,be,{numOfQ:0,numOfMissing:1,submit:2,backToQuestions:3})}}function lt(l){let e,i=`<div class="EXMstartBar svelte-b55iwe"><div style="display: flex;align-items: center;gap: 10px;font-size: 15px;height: 43px;" class="svelte-b55iwe"><img style="width: 30px; height: 30px; margin-left: 15px;" src="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png" alt="" class="svelte-b55iwe"/>
           Echo Dent</div> <div style="transform: translateX(50%);" class="svelte-b55iwe">Exam</div></div>`,s,t,a,r,o,c="The name of the course",v,d,w,g,k,b,I,Y,j=new Date(l[3]).toLocaleString("en-GB",{hour12:!0})+"",L,Q,W,$,O=new Date(l[4]).toLocaleString("en-GB",{hour12:!0})+"",F,X,p,T=localStorage.getItem("n")+"",z,U,G,ie='<div style="font-size: 30px;" class="svelte-b55iwe">All done!</div>',P,q,E,N,x,B,re='<span style="margin-right: 10px;" class="svelte-b55iwe">❮</span> REVIEW',se,ee,fe="SUBMIT",K,le;return{c(){e=m("div"),e.innerHTML=i,s=V(),t=m("div"),a=A(l[2]),r=V(),o=m("div"),o.textContent=c,v=V(),d=m("div"),w=A("Level: "),g=A(l[5]),k=V(),b=m("div"),I=m("div"),Y=A("Started on:"),L=A(j),Q=V(),W=m("div"),$=A("Ended on: "),F=A(O),X=V(),p=m("div"),z=A(T),U=V(),G=m("div"),G.innerHTML=ie,P=V(),q=m("img"),N=V(),x=m("div"),B=m("button"),B.innerHTML=re,se=V(),ee=m("button"),ee.textContent=fe,this.h()},l(D){e=_(D,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(e)!=="svelte-1xvffqg"&&(e.innerHTML=i),s=S(D),t=_(D,"DIV",{style:!0,class:!0});var C=M(t);a=H(C,l[2]),C.forEach(u),r=S(D),o=_(D,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(o)!=="svelte-17euhbd"&&(o.textContent=c),v=S(D),d=_(D,"DIV",{style:!0,class:!0});var J=M(d);w=H(J,"Level: "),g=H(J,l[5]),J.forEach(u),k=S(D),b=_(D,"DIV",{style:!0,class:!0});var de=M(b);I=_(de,"DIV",{class:!0});var ue=M(I);Y=H(ue,"Started on:"),L=H(ue,j),ue.forEach(u),Q=S(de),W=_(de,"DIV",{class:!0});var oe=M(W);$=H(oe,"Ended on: "),F=H(oe,O),oe.forEach(u),de.forEach(u),X=S(D),p=_(D,"DIV",{style:!0,class:!0});var ce=M(p);z=H(ce,T),ce.forEach(u),U=S(D),G=_(D,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(G)!=="svelte-2x7cv"&&(G.innerHTML=ie),P=S(D),q=_(D,"IMG",{src:!0,alt:!0,style:!0,class:!0}),N=S(D),x=_(D,"DIV",{style:!0,class:!0});var ve=M(x);B=_(ve,"BUTTON",{class:!0,title:!0,style:!0,"data-svelte-h":!0}),R(B)!=="svelte-1y1v1ks"&&(B.innerHTML=re),se=S(ve),ee=_(ve,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),R(ee)!=="svelte-e1we3s"&&(ee.textContent=fe),ve.forEach(u),this.h()},h(){n(e,"background-color","rgb(0, 76, 121)"),n(e,"height","43px"),n(e,"width","100%"),n(e,"color","white"),f(e,"class","svelte-b55iwe"),n(t,"text-align","center"),n(t,"font-size","20px"),n(t,"font-weight","600"),n(t,"margin","20px 0"),f(t,"class","svelte-b55iwe"),n(o,"text-align","center"),n(o,"font-size","16px"),f(o,"class","svelte-b55iwe"),n(d,"transform","translateX(-50%)"),n(d,"text-align","center"),n(d,"border","1px solid #004c7961"),n(d,"padding","5px"),n(d,"box-sizing","border-box"),n(d,"border-radius","10px"),n(d,"width","100px"),n(d,"margin","10px 50%"),f(d,"class","svelte-b55iwe"),f(I,"class","svelte-b55iwe"),f(W,"class","svelte-b55iwe"),n(b,"text-wrap","nowrap"),n(b,"display","flex"),n(b,"gap","25px"),n(b,"padding","10px"),n(b,"font-size","14px"),n(b,"flex-wrap","wrap"),n(b,"justify-content","center"),n(b,"margin-left","50%"),n(b,"transform","translateX(-50%)"),f(b,"class","svelte-b55iwe"),n(p,"text-align","center"),n(p,"margin","20px 0"),n(p,"font-size","16px"),n(p,"font-weight","500"),f(p,"class","svelte-b55iwe"),n(G,"text-align","center"),n(G,"margin","50px 0 0"),f(G,"class","svelte-b55iwe"),Ie(q.src,E="/line.gif")||f(q,"src",E),f(q,"alt",""),n(q,"margin-left","50%"),n(q,"transform","translateX(-50%)scale(1.5)"),f(q,"class","svelte-b55iwe"),f(B,"class","startExamBtn svelte-b55iwe"),f(B,"title","Back to exam"),n(B,"background","#ffffffad"),n(B,"color","#2e3b6f"),f(ee,"class","startExamBtn svelte-b55iwe"),f(ee,"title","Submit your answer"),n(x,"width","100%"),n(x,"display","flex"),n(x,"justify-content","center"),n(x,"gap","10px"),f(x,"class","svelte-b55iwe")},m(D,C){y(D,e,C),y(D,s,C),y(D,t,C),h(t,a),y(D,r,C),y(D,o,C),y(D,v,C),y(D,d,C),h(d,w),h(d,g),y(D,k,C),y(D,b,C),h(b,I),h(I,Y),h(I,L),h(b,Q),h(b,W),h(W,$),h(W,F),y(D,X,C),y(D,p,C),h(p,z),y(D,U,C),y(D,G,C),y(D,P,C),y(D,q,C),y(D,N,C),y(D,x,C),h(x,B),h(x,se),h(x,ee),K||(le=[te(B,"click",function(){xe(l[0])&&l[0].apply(this,arguments)}),te(ee,"click",function(){xe(l[1])&&l[1].apply(this,arguments)})],K=!0)},p(D,[C]){l=D,C&4&&Z(a,l[2]),C&32&&Z(g,l[5]),C&8&&j!==(j=new Date(l[3]).toLocaleString("en-GB",{hour12:!0})+"")&&Z(L,j),C&16&&O!==(O=new Date(l[4]).toLocaleString("en-GB",{hour12:!0})+"")&&Z(F,O)},i:ne,o:ne,d(D){D&&(u(e),u(s),u(t),u(r),u(o),u(v),u(d),u(k),u(b),u(X),u(p),u(U),u(G),u(P),u(q),u(N),u(x)),K=!1,me(le)}}}function it(l,e,i){let{review:s}=e,{submit:t}=e,{examTitle:a}=e,{startingDate:r}=e,{ending:o}=e,{level:c}=e;return l.$$set=v=>{"review"in v&&i(0,s=v.review),"submit"in v&&i(1,t=v.submit),"examTitle"in v&&i(2,a=v.examTitle),"startingDate"in v&&i(3,r=v.startingDate),"ending"in v&&i(4,o=v.ending),"level"in v&&i(5,c=v.level)},[s,t,a,r,o,c]}class ht extends _e{constructor(e){super(),ge(this,e,it,lt,be,{review:0,submit:1,examTitle:2,startingDate:3,ending:4,level:5})}}function Ue(l){let e,i,s,t,a="Thank you!";return{c(){e=m("img"),s=V(),t=m("div"),t.textContent=a,this.h()},l(r){e=_(r,"IMG",{src:!0,alt:!0,style:!0,class:!0}),s=S(r),t=_(r,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-legrna"&&(t.textContent=a),this.h()},h(){Ie(e.src,i="/submitted.gif")||f(e,"src",i),f(e,"alt",""),n(e,"margin","20px 0 20px 50%"),n(e,"transform","translateX(-50%)"),n(e,"width","100px"),n(e,"height","100px"),f(e,"class","svelte-b55iwe"),n(t,"text-align","center"),n(t,"font-size","30px"),f(t,"class","svelte-b55iwe")},m(r,o){y(r,e,o),y(r,s,o),y(r,t,o)},d(r){r&&(u(e),u(s),u(t))}}}function st(l){let e,i="Your score will appear once the exam time is over.";return{c(){e=m("div"),e.textContent=i,this.h()},l(s){e=_(s,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(e)!=="svelte-15kvbzw"&&(e.textContent=i),this.h()},h(){n(e,"text-align","center"),n(e,"margin","20px 0"),f(e,"class","svelte-b55iwe")},m(s,t){y(s,e,t)},p:ne,d(s){s&&u(e)}}}function nt(l){let e,i,s=Number(l[5]).toString().split(".")[0]+"",t,a,r,o,c=l[6]&&Ae(l);return{c(){e=m("div"),i=A("Your score: "),t=A(s),a=A(" %"),r=V(),c&&c.c(),o=ae(),this.h()},l(v){e=_(v,"DIV",{style:!0,class:!0});var d=M(e);i=H(d,"Your score: "),t=H(d,s),a=H(d," %"),d.forEach(u),r=S(v),c&&c.l(v),o=ae(),this.h()},h(){n(e,"text-align","center"),n(e,"font-size","20px"),n(e,"margin","50px 25%"),n(e,"width","50%"),n(e,"border-bottom","1px solid #004c7961"),n(e,"padding","5px"),f(e,"class","svelte-b55iwe")},m(v,d){y(v,e,d),h(e,i),h(e,t),h(e,a),y(v,r,d),c&&c.m(v,d),y(v,o,d)},p(v,d){d&32&&s!==(s=Number(v[5]).toString().split(".")[0]+"")&&Z(t,s),v[6]?c?c.p(v,d):(c=Ae(v),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},d(v){v&&(u(e),u(r),u(o)),c&&c.d(v)}}}function Ae(l){let e,i,s="REVIEW ANSWERS",t,a;return{c(){e=m("div"),i=m("button"),i.textContent=s,this.h()},l(r){e=_(r,"DIV",{style:!0,class:!0});var o=M(e);i=_(o,"BUTTON",{class:!0,title:!0,style:!0,"data-svelte-h":!0}),R(i)!=="svelte-1ob6b4e"&&(i.textContent=s),o.forEach(u),this.h()},h(){f(i,"class","startExamBtn svelte-b55iwe"),f(i,"title","Back to exam"),n(i,"background","#ffffffad"),n(i,"color","#2e3b6f"),n(e,"width","100%"),n(e,"display","flex"),n(e,"justify-content","center"),f(e,"class","svelte-b55iwe")},m(r,o){y(r,e,o),h(e,i),t||(a=te(i,"click",l[8]),t=!0)},p:ne,d(r){r&&u(e),t=!1,a()}}}function rt(l){let e,i=`<div class="EXMstartBar svelte-b55iwe"><div style="display: flex;align-items: center;gap: 10px;font-size: 15px;height: 43px;" class="svelte-b55iwe"><img style="width: 30px; height: 30px; margin-left: 15px;" src="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png" alt="" class="svelte-b55iwe"/>
             Echo Dent</div> <div style="transform: translateX(50%);" class="svelte-b55iwe">Exam</div></div>`,s,t,a,r,o,c="The name of the course",v,d,w,g,k,b,I,Y,j=new Date(l[1]).toLocaleString("en-GB",{hour12:!0})+"",L,Q,W,$,O=new Date(l[2]).toLocaleString("en-GB",{hour12:!0})+"",F,X,p,T=localStorage.getItem("n")+"",z,U,G,ie,P=!l[6]&&Ue();function q(x,B){return x[4]?nt:st}let E=q(l),N=E(l);return{c(){e=m("div"),e.innerHTML=i,s=V(),t=m("div"),a=A(l[0]),r=V(),o=m("div"),o.textContent=c,v=V(),d=m("div"),w=A("Level: "),g=A(l[3]),k=V(),b=m("div"),I=m("div"),Y=A("Started on:"),L=A(j),Q=V(),W=m("div"),$=A("Ended on: "),F=A(O),X=V(),p=m("div"),z=A(T),U=V(),P&&P.c(),G=V(),N.c(),ie=ae(),this.h()},l(x){e=_(x,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(e)!=="svelte-1i9etbc"&&(e.innerHTML=i),s=S(x),t=_(x,"DIV",{style:!0,class:!0});var B=M(t);a=H(B,l[0]),B.forEach(u),r=S(x),o=_(x,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),R(o)!=="svelte-17euhbd"&&(o.textContent=c),v=S(x),d=_(x,"DIV",{style:!0,class:!0});var re=M(d);w=H(re,"Level: "),g=H(re,l[3]),re.forEach(u),k=S(x),b=_(x,"DIV",{style:!0,class:!0});var se=M(b);I=_(se,"DIV",{class:!0});var ee=M(I);Y=H(ee,"Started on:"),L=H(ee,j),ee.forEach(u),Q=S(se),W=_(se,"DIV",{class:!0});var fe=M(W);$=H(fe,"Ended on: "),F=H(fe,O),fe.forEach(u),se.forEach(u),X=S(x),p=_(x,"DIV",{style:!0,class:!0});var K=M(p);z=H(K,T),K.forEach(u),U=S(x),P&&P.l(x),G=S(x),N.l(x),ie=ae(),this.h()},h(){n(e,"background-color","rgb(0, 76, 121)"),n(e,"height","43px"),n(e,"width","100%"),n(e,"color","white"),f(e,"class","svelte-b55iwe"),n(t,"text-align","center"),n(t,"font-size","20px"),n(t,"font-weight","600"),n(t,"margin","20px 0"),f(t,"class","svelte-b55iwe"),n(o,"text-align","center"),n(o,"font-size","16px"),f(o,"class","svelte-b55iwe"),n(d,"transform","translateX(-50%)"),n(d,"text-align","center"),n(d,"border","1px solid #004c7961"),n(d,"padding","5px"),n(d,"box-sizing","border-box"),n(d,"border-radius","10px"),n(d,"width","100px"),n(d,"margin","10px 50%"),f(d,"class","svelte-b55iwe"),f(I,"class","svelte-b55iwe"),f(W,"class","svelte-b55iwe"),n(b,"text-wrap","nowrap"),n(b,"display","flex"),n(b,"gap","25px"),n(b,"padding","10px"),n(b,"font-size","14px"),n(b,"flex-wrap","wrap"),n(b,"justify-content","center"),n(b,"margin-left","50%"),n(b,"transform","translateX(-50%)"),f(b,"class","svelte-b55iwe"),n(p,"text-align","center"),n(p,"margin","20px 0"),n(p,"font-size","16px"),n(p,"font-weight","500"),f(p,"class","svelte-b55iwe")},m(x,B){y(x,e,B),y(x,s,B),y(x,t,B),h(t,a),y(x,r,B),y(x,o,B),y(x,v,B),y(x,d,B),h(d,w),h(d,g),y(x,k,B),y(x,b,B),h(b,I),h(I,Y),h(I,L),h(b,Q),h(b,W),h(W,$),h(W,F),y(x,X,B),y(x,p,B),h(p,z),y(x,U,B),P&&P.m(x,B),y(x,G,B),N.m(x,B),y(x,ie,B)},p(x,[B]){B&1&&Z(a,x[0]),B&8&&Z(g,x[3]),B&2&&j!==(j=new Date(x[1]).toLocaleString("en-GB",{hour12:!0})+"")&&Z(L,j),B&4&&O!==(O=new Date(x[2]).toLocaleString("en-GB",{hour12:!0})+"")&&Z(F,O),x[6]?P&&(P.d(1),P=null):P||(P=Ue(),P.c(),P.m(G.parentNode,G)),E===(E=q(x))&&N?N.p(x,B):(N.d(1),N=E(x),N&&(N.c(),N.m(ie.parentNode,ie)))},i:ne,o:ne,d(x){x&&(u(e),u(s),u(t),u(r),u(o),u(v),u(d),u(k),u(b),u(X),u(p),u(U),u(G),u(ie)),P&&P.d(x),N.d(x)}}}function at(l,e,i){let{examTitle:s}=e,{startingDate:t}=e,{ending:a}=e,{level:r}=e,{results:o}=e,{myScore:c}=e,{viewingAnswers:v}=e,{reviewAnswers:d}=e;const w=()=>{d()};return l.$$set=g=>{"examTitle"in g&&i(0,s=g.examTitle),"startingDate"in g&&i(1,t=g.startingDate),"ending"in g&&i(2,a=g.ending),"level"in g&&i(3,r=g.level),"results"in g&&i(4,o=g.results),"myScore"in g&&i(5,c=g.myScore),"viewingAnswers"in g&&i(6,v=g.viewingAnswers),"reviewAnswers"in g&&i(7,d=g.reviewAnswers)},[s,t,a,r,o,c,v,d,w]}class bt extends _e{constructor(e){super(),ge(this,e,at,rt,be,{examTitle:0,startingDate:1,ending:2,level:3,results:4,myScore:5,viewingAnswers:6,reviewAnswers:7})}}export{bt as U,ht as a,vt as b,ct as c,dt as d};
