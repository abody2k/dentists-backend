import{s as Je,a as N,e as g,t as _e,k as Ie,f as C,c as m,b as O,g as le,d as b,m as ve,h as i,p as h,i as Q,j as u,q as P,r as Ue,l as Xe,o as Ke,u as qe,v as ge,w as Y,x as De,y as je,n as Te,z as Be}from"./scheduler.BVAlSgfp.js";import{S as We,i as Ye,c as Ze,a as xe,m as $e,t as et,b as tt,e as lt}from"./index.B7Z5KU1K.js";import{e as ae}from"./each.D8K876rg.js";/* empty css                                             */import{f as ne,s as ue,a as Ge}from"./not.BJnHWghe.js";import{B as st}from"./Bar.CdutgMKg.js";/* empty css                                               */function Oe(t,l,e){const o=t.slice();return o[45]=l[e],o[46]=l,o[47]=e,o}function Se(t,l,e){const o=t.slice();return o[45]=l[e],o[47]=e,o}function Ae(t,l,e){const o=t.slice();return o[45]=l[e],o[50]=e,o}function ze(t){let l,e=t[50]+1+"",o,s,n,p,_;function d(){return t[17](t[50])}return{c(){l=g("div"),o=_e(e),s=N(),this.h()},l(v){l=m(v,"DIV",{class:!0,style:!0});var k=O(l);o=ve(k,e),s=C(k),k.forEach(b),this.h()},h(){h(l,"class",n=qe(t[1]-1==t[50]?"XtabsSelected":"Xtabs")+" svelte-1vhwpj1"),i(l,"width","40px"),i(l,"height","40px")},m(v,k){Q(v,l,k),u(l,o),u(l,s),p||(_=P(l,"click",d),p=!0)},p(v,k){t=v,k[0]&2&&n!==(n=qe(t[1]-1==t[50]?"XtabsSelected":"Xtabs")+" svelte-1vhwpj1")&&h(l,"class",n)},d(v){v&&b(l),p=!1,_()}}}function rt(t){let l,e='<span style="color: #2e3b6f;">X</span>',o,s,n=`<i class="far fa-save"></i>
            حفظ`,p,_;return{c(){l=g("button"),l.innerHTML=e,o=N(),s=g("button"),s.innerHTML=n,this.h()},l(d){l=m(d,"BUTTON",{class:!0,"data-svelte-h":!0}),le(l)!=="svelte-vo0g7c"&&(l.innerHTML=e),o=C(d),s=m(d,"BUTTON",{class:!0,"data-svelte-h":!0}),le(s)!=="svelte-shqtqj"&&(s.innerHTML=n),this.h()},h(){h(l,"class","svelte-1vhwpj1"),h(s,"class","svelte-1vhwpj1")},m(d,v){Q(d,l,v),Q(d,o,v),Q(d,s,v),p||(_=[P(l,"click",t[20]),P(s,"click",t[21])],p=!0)},p:Te,d(d){d&&(b(l),b(o),b(s)),p=!1,je(_)}}}function nt(t){let l,e=`<span style="color: red;">X</span>

            حذف المحدد`,o,s;return{c(){l=g("button"),l.innerHTML=e,this.h()},l(n){l=m(n,"BUTTON",{class:!0,"data-svelte-h":!0}),le(l)!=="svelte-1sdj8lx"&&(l.innerHTML=e),this.h()},h(){h(l,"class","svelte-1vhwpj1")},m(n,p){Q(n,l,p),o||(s=P(l,"click",t[19]),o=!0)},p:Te,d(n){n&&b(l),o=!1,s()}}}function it(t){let l,e=`<img src="/add.png" style="width: 18px;"/>

            إضافة مصدر`,o,s;return{c(){l=g("div"),l.innerHTML=e,this.h()},l(n){l=m(n,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),le(l)!=="svelte-17nvynn"&&(l.innerHTML=e),this.h()},h(){h(l,"class","Xtabs svelte-1vhwpj1"),h(l,"style","display: flex; flex-direction: row;gap:10px;padding:7px;height:90px;font-size:20px;height:fit-content;width:fit-content; }")},m(n,p){Q(n,l,p),o||(s=P(l,"click",t[18]),o=!0)},p:Te,d(n){n&&b(l),o=!1,s()}}}function Qe(t){let l,e,o,s,n,p,_,d,v,k,M,q,T,a,E;return{c(){l=g("div"),e=g("input"),o=N(),s=g("img"),p=N(),_=g("input"),d=N(),v=g("div"),k=g("input"),M=N(),q=g("img"),this.h()},l(L){l=m(L,"DIV",{class:!0});var I=O(l);e=m(I,"INPUT",{type:!0,placeholder:!0,class:!0}),o=C(I),s=m(I,"IMG",{src:!0,style:!0}),p=C(I),_=m(I,"INPUT",{type:!0,placeholder:!0,style:!0,class:!0}),I.forEach(b),d=C(L),v=m(L,"DIV",{class:!0,style:!0});var U=O(v);k=m(U,"INPUT",{type:!0,placeholder:!0,class:!0}),M=C(U),q=m(U,"IMG",{src:!0,style:!0}),U.forEach(b),this.h()},h(){h(e,"type","text"),h(e,"placeholder","عنوان المحاضرة الجديدة"),h(e,"class","svelte-1vhwpj1"),ge(s.src,n="/ab.png")||h(s,"src",n),i(s,"width","30px"),h(_,"type","number"),h(_,"placeholder","order"),i(_,"background-color","white"),i(_,"border-radius","12px"),i(_,"width","40px"),h(_,"class","svelte-1vhwpj1"),h(l,"class","row svelte-1vhwpj1"),h(k,"type","text"),h(k,"placeholder","رابط المحاضرة الجديدة"),h(k,"class","svelte-1vhwpj1"),ge(q.src,T="/url.png")||h(q,"src",T),i(q,"width","25px"),i(q,"height","20px"),h(v,"class","row svelte-1vhwpj1"),i(v,"align-items","center")},m(L,I){Q(L,l,I),u(l,e),Y(e,t[3].title),u(l,o),u(l,s),u(l,p),u(l,_),Y(_,t[3].order),Q(L,d,I),Q(L,v,I),u(v,k),Y(k,t[3].url),u(v,M),u(v,q),a||(E=[P(e,"input",t[22]),P(e,"change",t[23]),P(_,"input",t[24]),P(_,"change",t[25]),P(k,"input",t[26]),P(k,"change",t[27])],a=!0)},p(L,I){I[0]&8&&e.value!==L[3].title&&Y(e,L[3].title),I[0]&8&&De(_.value)!==L[3].order&&Y(_,L[3].order),I[0]&8&&k.value!==L[3].url&&Y(k,L[3].url)},d(L){L&&(b(l),b(d),b(v)),a=!1,je(E)}}}function ct(t){let l,e,o,s,n=t[45].chapterID+"",p,_,d,v,k,M,q,T,a=t[45].title+"",E,L,I,U='<img src="/quizic.png" width="50" height="50"/> <div style="color: #2e3b6f;font-weight: bold; text-align:center; ">Edit Questions</div>',W,Z,H;function V(){t[42].call(e,t[46],t[47])}function S(){return t[44](t[45],t[46],t[47])}return{c(){l=g("div"),e=g("input"),o=N(),s=g("div"),p=_e(n),_=N(),d=g("div"),v=g("div"),k=g("img"),q=N(),T=g("div"),E=_e(a),L=N(),I=g("div"),I.innerHTML=U,W=N(),this.h()},l(A){l=m(A,"DIV",{class:!0,style:!0});var y=O(l);e=m(y,"INPUT",{type:!0,class:!0}),o=C(y),s=m(y,"DIV",{});var B=O(s);p=ve(B,n),B.forEach(b),_=C(y),d=m(y,"DIV",{class:!0,style:!0});var F=O(d);v=m(F,"DIV",{class:!0,style:!0});var D=O(v);k=m(D,"IMG",{src:!0,width:!0,height:!0}),q=C(D),T=m(D,"DIV",{});var c=O(T);E=ve(c,a),c.forEach(b),D.forEach(b),F.forEach(b),L=C(y),I=m(y,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),le(I)!=="svelte-l1avf1"&&(I.innerHTML=U),W=C(y),y.forEach(b),this.h()},h(){h(e,"type","checkbox"),h(e,"class","svelte-1vhwpj1"),ge(k.src,M="/doct.png")||h(k,"src",M),h(k,"width","50"),h(k,"height","50"),h(v,"class","row svelte-1vhwpj1"),i(v,"align-items","center"),h(d,"class","row ccr svelte-1vhwpj1"),i(d,"width","85%"),i(d,"height","80px"),i(d,"margin","10px"),i(d,"justify-content","space-between"),i(d,"align-items","center"),h(I,"class","ccr column svelte-1vhwpj1"),i(I,"justify-content","center"),i(I,"align-items","center"),i(I,"height","80px"),i(I,"width","20%"),h(l,"class","row svelte-1vhwpj1"),i(l,"align-items","center")},m(A,y){Q(A,l,y),u(l,e),e.checked=t[45].status,u(l,o),u(l,s),u(s,p),u(l,_),u(l,d),u(d,v),u(v,k),u(v,q),u(v,T),u(T,E),u(l,L),u(l,I),u(l,W),Z||(H=[P(e,"change",V),P(e,"change",t[43]),P(d,"click",S)],Z=!0)},p(A,y){t=A,y[0]&1026&&(e.checked=t[45].status),y[0]&1026&&n!==(n=t[45].chapterID+"")&&Ue(p,n),y[0]&1026&&a!==(a=t[45].title+"")&&Ue(E,a)},d(A){A&&b(l),Z=!1,je(H)}}}function ot(t){let l,e,o,s,n,p,_,d,v='<img src="/del.png" style="width: 30px;"/>',k,M,q='<img src="/close.png" style="width: 30px;"/>',T,a,E,L='<img src="/bell.png" style="width: 30px;"/>',I,U,W='<img src="/done.png" style="width: 30px;"/>',Z,H,V,S,A,y,B,F,D,c,j,f,K,x,$,he,ee,pe,ie,fe,de,me;function Ee(){t[30].call(e,t[46],t[47])}function Ve(...X){return t[32](t[45],t[46],t[47],...X)}function Me(...X){return t[33](t[45],t[46],t[47],...X)}function Le(...X){return t[34](t[45],...X)}function He(...X){return t[35](t[45],t[46],t[47],...X)}function Ne(){t[36].call(S,t[46],t[47])}function r(...X){return t[37](t[45],t[46],t[47],...X)}function w(){t[38].call(D,t[46],t[47])}function G(){t[39].call(f,t[46],t[47])}function re(...X){return t[40](t[45],t[46],t[47],...X)}let te=ae([...Array(t[0])]),R=[];for(let X=0;X<te.length;X+=1)R[X]=Re(Se(t,te,X));return{c(){l=g("div"),e=g("input"),o=N(),s=g("div"),n=g("td"),p=g("div"),_=g("div"),d=g("div"),d.innerHTML=v,k=N(),M=g("div"),M.innerHTML=q,T=N(),a=g("div"),E=g("div"),E.innerHTML=L,I=N(),U=g("div"),U.innerHTML=W,Z=N(),H=g("div"),V=g("div"),S=g("input"),A=N(),y=g("img"),F=N(),D=g("input"),c=N(),j=g("div"),f=g("input"),K=N(),x=g("img"),he=N(),ee=g("select");for(let X=0;X<R.length;X+=1)R[X].c();pe=N(),ie=g("br"),fe=N(),this.h()},l(X){l=m(X,"DIV",{class:!0});var J=O(l);e=m(J,"INPUT",{type:!0,class:!0}),o=C(J),s=m(J,"DIV",{class:!0,style:!0});var z=O(s);n=m(z,"TD",{colspan:!0,style:!0});var se=O(n);p=m(se,"DIV",{style:!0});var we=O(p);_=m(we,"DIV",{class:!0});var be=O(_);d=m(be,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),le(d)!=="svelte-r8bwt9"&&(d.innerHTML=v),k=C(be),M=m(be,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),le(M)!=="svelte-nwlfgp"&&(M.innerHTML=q),be.forEach(b),T=C(we),a=m(we,"DIV",{class:!0});var ye=O(a);E=m(ye,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),le(E)!=="svelte-1e7dgrc"&&(E.innerHTML=L),I=C(ye),U=m(ye,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),le(U)!=="svelte-48vuoc"&&(U.innerHTML=W),ye.forEach(b),we.forEach(b),Z=C(se),H=m(se,"DIV",{class:!0,style:!0});var ce=O(H);V=m(ce,"DIV",{class:!0});var oe=O(V);S=m(oe,"INPUT",{style:!0,type:!0,placeholder:!0,class:!0}),A=C(oe),y=m(oe,"IMG",{src:!0,style:!0}),F=C(oe),D=m(oe,"INPUT",{type:!0,placeholder:!0,style:!0,class:!0}),oe.forEach(b),c=C(ce),j=m(ce,"DIV",{class:!0,style:!0});var ke=O(j);f=m(ke,"INPUT",{type:!0,style:!0,placeholder:!0,class:!0}),K=C(ke),x=m(ke,"IMG",{src:!0,style:!0}),ke.forEach(b),he=C(ce),ee=m(ce,"SELECT",{placeholder:!0});var Pe=O(ee);for(let Ce=0;Ce<R.length;Ce+=1)R[Ce].l(Pe);Pe.forEach(b),ce.forEach(b),pe=C(se),ie=m(se,"BR",{style:!0}),se.forEach(b),z.forEach(b),fe=C(J),J.forEach(b),this.h()},h(){h(e,"type","checkbox"),h(e,"class","svelte-1vhwpj1"),h(d,"class","Xtabs svelte-1vhwpj1"),i(d,"width","fit-content"),i(d,"height","fit-content"),i(d,"padding","5px"),h(M,"class","Xtabs svelte-1vhwpj1"),i(M,"width","fit-content"),i(M,"height","fit-content"),i(M,"padding","5px"),h(_,"class","row svelte-1vhwpj1"),h(E,"class","Xtabs svelte-1vhwpj1"),i(E,"width","fit-content"),i(E,"height","fit-content"),i(E,"padding","5px"),h(U,"class","Xtabs svelte-1vhwpj1"),i(U,"width","fit-content"),i(U,"height","fit-content"),i(U,"padding","5px"),h(a,"class","row svelte-1vhwpj1"),i(p,"position","absolute"),i(p,"right","200"),i(p,"top","20"),i(S,"border-radius","10px"),h(S,"type","text"),h(S,"placeholder","عنوان الفصل "),h(S,"class","svelte-1vhwpj1"),ge(y.src,B="/ab.png")||h(y,"src",B),i(y,"width","30px"),h(D,"type","number"),h(D,"placeholder","order"),i(D,"background-color","white"),i(D,"border-radius","12px"),i(D,"width","40px"),h(D,"class","svelte-1vhwpj1"),h(V,"class","row svelte-1vhwpj1"),h(f,"type","text"),i(f,"border-radius","10px"),h(f,"placeholder","رابط الملف"),h(f,"class","svelte-1vhwpj1"),ge(x.src,$="/url.png")||h(x,"src",$),i(x,"width","25px"),i(x,"height","20px"),h(j,"class","row svelte-1vhwpj1"),i(j,"align-items","center"),h(ee,"placeholder","level"),h(H,"class","column"),i(H,"position","absolute"),i(H,"right","20px"),i(H,"display","flex"),i(H,"flex-direction","column"),i(H,"justify-content","center"),i(H,"width","256px"),i(H,"justify-items","center"),i(H,"align-items","baseline"),i(H,"gap","10px"),i(ie,"margin-top","40px"),h(n,"colspan","3"),i(n,"width","100%"),i(n,"height","100%"),h(s,"class","row ccr svelte-1vhwpj1"),i(s,"width","100%"),i(s,"height","120px"),i(s,"margin","10px"),i(s,"justify-content","space-between"),i(s,"align-items","center"),h(l,"class","row svelte-1vhwpj1")},m(X,J){Q(X,l,J),u(l,e),e.checked=t[45].status,u(l,o),u(l,s),u(s,n),u(n,p),u(p,_),u(_,d),u(_,k),u(_,M),u(p,T),u(p,a),u(a,E),u(a,I),u(a,U),u(n,Z),u(n,H),u(H,V),u(V,S),Y(S,t[45].title),u(V,A),u(V,y),u(V,F),u(V,D),Y(D,t[45].chapterID),u(H,c),u(H,j),u(j,f),Y(f,t[45].link),u(j,K),u(j,x),u(H,he),u(H,ee);for(let z=0;z<R.length;z+=1)R[z]&&R[z].m(ee,null);Be(ee,t[1]),u(n,pe),u(n,ie),u(l,fe),de||(me=[P(e,"change",Ee),P(e,"change",t[31]),P(d,"click",Ve),P(M,"click",Me),P(E,"click",Le),P(U,"click",He),P(S,"input",Ne),P(S,"change",r),P(D,"input",w),P(D,"change",at),P(f,"input",G),P(f,"change",re),P(ee,"change",t[41])],de=!0)},p(X,J){if(t=X,J[0]&1026&&(e.checked=t[45].status),J[0]&1026&&S.value!==t[45].title&&Y(S,t[45].title),J[0]&1026&&De(D.value)!==t[45].chapterID&&Y(D,t[45].chapterID),J[0]&1026&&f.value!==t[45].link&&Y(f,t[45].link),J[0]&1){te=ae([...Array(t[0])]);let z;for(z=0;z<te.length;z+=1){const se=Se(t,te,z);R[z]?R[z].p(se,J):(R[z]=Re(se),R[z].c(),R[z].m(ee,null))}for(;z<R.length;z+=1)R[z].d(1);R.length=te.length}J[0]&2&&Be(ee,t[1])},d(X){X&&b(l),Xe(R,X),de=!1,je(me)}}}function Re(t){let l,e=t[47]+1+"",o;return{c(){l=g("option"),o=_e(e),this.h()},l(s){l=m(s,"OPTION",{});var n=O(l);o=ve(n,e),n.forEach(b),this.h()},h(){l.__value=t[47]+1,Y(l,l.__value)},m(s,n){Q(s,l,n),u(l,o)},p:Te,d(s){s&&b(l)}}}function Fe(t){let l;function e(n,p){return n[45].edit?ot:ct}let o=e(t),s=o(t);return{c(){s.c(),l=Ie()},l(n){s.l(n),l=Ie()},m(n,p){s.m(n,p),Q(n,l,p)},p(n,p){o===(o=e(n))&&s?s.p(n,p):(s.d(1),s=o(n),s&&(s.c(),s.m(l.parentNode,l)))},d(n){n&&b(l),s.d(n)}}}function ut(t){let l,e,o,s,n,p=":المرحلة",_,d,v,k,M,q,T,a,E,L,I,U,W,Z;l=new st({props:{title:"المصادر"}});let H=ae(Array(t[0])),V=[];for(let c=0;c<H.length;c+=1)V[c]=ze(Ae(t,H,c));function S(c,j){if(c[5]==0)return it;if(c[5]==2)return nt;if(c[5]==1)return rt}let A=S(t),y=A&&A(t),B=t[5]==1&&Qe(t),F=ae(t[10].filter(t[29])),D=[];for(let c=0;c<F.length;c+=1)D[c]=Fe(Oe(t,F,c));return{c(){Ze(l.$$.fragment),e=N(),o=g("div"),s=g("div"),n=g("h3"),n.textContent=p,_=N();for(let c=0;c<V.length;c+=1)V[c].c();d=N(),v=g("div"),y&&y.c(),k=N(),M=g("div"),q=_e(t[6]),T=N(),B&&B.c(),a=N(),E=g("input"),L=N();for(let c=0;c<D.length;c+=1)D[c].c();I=Ie(),this.h()},l(c){xe(l.$$.fragment,c),e=C(c),o=m(c,"DIV",{class:!0});var j=O(o);s=m(j,"DIV",{style:!0});var f=O(s);n=m(f,"H3",{style:!0,"data-svelte-h":!0}),le(n)!=="svelte-1mgkj0p"&&(n.textContent=p),_=C(f);for(let $=0;$<V.length;$+=1)V[$].l(f);f.forEach(b),d=C(j),v=m(j,"DIV",{class:!0,style:!0});var K=O(v);y&&y.l(K),K.forEach(b),k=C(j),M=m(j,"DIV",{id:!0,class:!0});var x=O(M);q=ve(x,t[6]),x.forEach(b),T=C(j),B&&B.l(j),j.forEach(b),a=C(c),E=m(c,"INPUT",{type:!0,placeholder:!0,class:!0}),L=C(c);for(let $=0;$<D.length;$+=1)D[$].l(c);I=Ie(),this.h()},h(){i(n,"text-align","right"),i(n,"margin-left","20px"),i(n,"color","#2e3b6f"),i(s,"width","100%"),i(s,"margin","30px 0"),i(s,"display","flex"),i(s,"flex-direction","row-reverse"),i(s,"gap","10px"),i(s,"flex-wrap","wrap"),i(s,"justify-content","center"),i(s,"align-items","center"),i(s,"border-bottom","2px dotted #2f3c6f3d"),h(v,"class","row svelte-1vhwpj1"),i(v,"align-items","center"),i(v,"gap","20px"),h(M,"id","msg"),h(M,"class","svelte-1vhwpj1"),h(o,"class","videos svelte-1vhwpj1"),h(E,"type","checkbox"),h(E,"placeholder","تحديد الكل"),h(E,"class","svelte-1vhwpj1")},m(c,j){$e(l,c,j),Q(c,e,j),Q(c,o,j),u(o,s),u(s,n),u(s,_);for(let f=0;f<V.length;f+=1)V[f]&&V[f].m(s,null);u(o,d),u(o,v),y&&y.m(v,null),u(o,k),u(o,M),u(M,q),u(o,T),B&&B.m(o,null),Q(c,a,j),Q(c,E,j),Q(c,L,j);for(let f=0;f<D.length;f+=1)D[f]&&D[f].m(c,j);Q(c,I,j),U=!0,W||(Z=P(E,"change",t[28]),W=!0)},p(c,j){if(j[0]&3){H=ae(Array(c[0]));let f;for(f=0;f<H.length;f+=1){const K=Ae(c,H,f);V[f]?V[f].p(K,j):(V[f]=ze(K),V[f].c(),V[f].m(s,null))}for(;f<V.length;f+=1)V[f].d(1);V.length=H.length}if(A===(A=S(c))&&y?y.p(c,j):(y&&y.d(1),y=A&&A(c),y&&(y.c(),y.m(v,null))),(!U||j[0]&64)&&Ue(q,c[6]),c[5]==1?B?B.p(c,j):(B=Qe(c),B.c(),B.m(o,null)):B&&(B.d(1),B=null),j[0]&60439){F=ae(c[10].filter(c[29]));let f;for(f=0;f<F.length;f+=1){const K=Oe(c,F,f);D[f]?D[f].p(K,j):(D[f]=Fe(K),D[f].c(),D[f].m(I.parentNode,I))}for(;f<D.length;f+=1)D[f].d(1);D.length=F.length}},i(c){U||(et(l.$$.fragment,c),U=!0)},o(c){tt(l.$$.fragment,c),U=!1},d(c){c&&(b(e),b(o),b(a),b(E),b(L),b(I)),lt(l,c),Xe(V,c),y&&y.d(),B&&B.d(),Xe(D,c),W=!1,Z()}}}const at=t=>{};function ht(t,l,e){let o,s=1,n=1,p={title:"",url:""},_={title:"",url:"",order:0,level:1};Ke(async()=>{await ne("mma"),ne("a/gch",{t:T.course?0:1,ID:T.id}).then(r=>{console.log(r),e(10,a=r.d),e(0,o=r.l);for(let w=0;w<a.length;w++)a[w].answers||e(10,a[w]=[],a);console.log(a)})});let d=0,v="",k="",M="",q=0,{data:T}=l,a=[];function E(){a.filter(r=>r.status).length>0?e(5,d=2):e(5,d=0)}function L(){e(6,v=""),k&&M&&Number(q)>=0&&ne("a/nch",{ans:[],q:[],ti:k,cid:T.id,url:M,t:T.course?0:1,chID:Number(q),ID:T.id,level:s}).then(()=>{e(3,p.title="",p),e(3,p.url="",p),e(3,p.order=0,p),ue("تمت اضافة المصدر","cornflowerblue"),e(5,d=0),ne("a/gch",{t:T.course?0:1,ID:T.id}).then(r=>{e(10,a=r.d);for(let w=0;w<a.length;w++)a[w].answers||e(10,a[w]=[],a)})}).catch(r=>{console.log(r),ue("المحاضرة موجودة مسبقا","red")})}function I(r,w){console.log("did it"),e(6,v=""),ne("a/uch",{q:r.questions,ans:r.answers,ti:r.title,url:r.link,t:T.course?0:1,chID:r.chapterID,ID:T.id,nchID:r.nchapterID,level:n}).then(()=>{r.level=n,r.chapterID=r.nchapterID,w(),ue("تم تعديل المصدر","cornflowerblue")}).catch(G=>{console.log(G),ue("هناك مصدر بنفس الاسم او التسلسل موجود مسبقًا","red")})}async function U(){a.filter(r=>r.status).length>0&&(console.log(a.filter(r=>r.status).map(r=>r.chapterID)),await ne((T.course,"a/dch"),{chid:a.filter(r=>r.status).map(r=>r.chapterID),t:T.course?0:1,id:T.id}).then(()=>{e(10,a=a.filter(r=>!r.status))}))}function W(r){ne("a/not",T.course?{chid:r,cid:T.id}:{chid:r,fid:T.id})}const Z=r=>{e(1,s=r+1)},H=r=>{e(5,d=1)},V=r=>{Ge("هل انت متأكد من حذف المحاضرة؟",async()=>{await U()},w=>{w&&(ue("تم حذف المحاضرة","cornflowerblue"),e(5,d=0))})},S=r=>{e(3,p.title="",p),e(3,p.url="",p),e(3,p.order=1,p),e(5,d=0)},A=r=>{L()};function y(){p.title=this.value,e(3,p)}const B=r=>{e(7,k=r.target.value)};function F(){p.order=De(this.value),e(3,p)}const D=r=>{e(9,q=r.target.value)};function c(){p.url=this.value,e(3,p)}const j=r=>{e(8,M=r.target.value)},f=r=>{for(let w=0;w<a.filter(G=>G.level==s).length;w++)a.filter(G=>G.level==s)[w].status=r.target.checked;e(10,a=[...a]),E()},K=r=>r.level==s;function x(r,w){r[w].status=this.checked,e(10,a),e(1,s)}const $=r=>{E()},he=(r,w,G,re)=>{for(let te=0;te<a.length;te++)e(10,a[te].status=!1,a);e(10,w[G].status=!0,a,e(1,s)),Ge("هل انت متأكد من حذف المصدر؟",async()=>{await U()},te=>{te&&ue("تم حذف المصدر","cornflowerblue")})},ee=(r,w,G,re)=>{e(10,w[G].edit=!1,a,e(1,s)),e(10,w[G].title=_.title,a,e(1,s)),e(10,w[G].level=_.level,a,e(1,s)),e(10,w[G].link=_.url,a,e(1,s)),e(10,w[G].chapterID=_.order,a,e(1,s))},pe=(r,w)=>{console.log("dong t"),console.log(r),W(r.chapterID)},ie=(r,w,G,re)=>{I(r,()=>{e(10,w[G].edit=!1,a,e(1,s))})};function fe(r,w){r[w].title=this.value,e(10,a),e(1,s)}const de=(r,w,G,re)=>{e(10,w[G].title=re.target.value,a,e(1,s))};function me(r,w){r[w].chapterID=De(this.value),e(10,a),e(1,s)}function Ee(r,w){r[w].link=this.value,e(10,a),e(1,s)}const Ve=(r,w,G,re)=>{e(10,w[G].link=re.target.value,a,e(1,s))},Me=r=>{e(2,n=r.target.value)};function Le(r,w){r[w].status=this.checked,e(10,a),e(1,s)}const He=r=>{E()},Ne=(r,w,G)=>{e(4,_.title=r.title,_),e(4,_.order=r.chapterID,_),e(4,_.url=r.link,_),e(4,_.level=r.level,_),e(10,w[G].edit=!0,a,e(1,s))};return t.$$set=r=>{"data"in r&&e(16,T=r.data)},[o,s,n,p,_,d,v,k,M,q,a,E,L,I,U,W,T,Z,H,V,S,A,y,B,F,D,c,j,f,K,x,$,he,ee,pe,ie,fe,de,me,Ee,Ve,Me,Le,He,Ne]}class wt extends We{constructor(l){super(),Ye(this,l,ht,ut,Je,{data:16},null,[-1,-1])}}export{wt as C};
