import{_ as u}from"./preload-helper.BQ24v_F8.js";import{s as f,e as p,b as l,k as m,f as i,m as c,i as _,p as y,n as r,w as b,P as g,Q as v}from"./scheduler.DkkY9i-5.js";import{S as w,i as E}from"./index.D9rRt9oS.js";function k(o){let t,n;return{c(){t=p("main"),n=p("div"),this.h()},l(e){t=l(e,"MAIN",{class:!0});var a=m(t);n=l(a,"DIV",{class:!0}),m(n).forEach(i),a.forEach(i),this.h()},h(){c(n,"class","svelte-1nhdkn3"),c(t,"class","svelte-1nhdkn3")},m(e,a){_(e,t,a),y(t,n),o[1](n)},p:r,i:r,o:r,d(e){e&&i(t),o[1](null)}}}function M(o,t,n){let e,a;b(async()=>{{const s=await u(()=>import("./leaflet-src.gPfWyBzh.js").then(h=>h.l),__vite__mapDeps([0,1]),import.meta.url);a=s.map(e).setView([51.505,-.09],13),s.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(a),s.marker([51.5,-.09]).addTo(a).bindPopup("A pretty CSS3 popup.<br> Easily customizable.").openPopup()}}),g(async()=>{a&&(console.log("Unloading Leaflet map."),a.remove())});function d(s){v[s?"unshift":"push"](()=>{e=s,n(0,e)})}return[e,d]}class D extends w{constructor(t){super(),E(this,t,M,k,f,{})}}export{D as M};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./leaflet-src.gPfWyBzh.js","./_commonjsHelpers.BosuxZz1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
