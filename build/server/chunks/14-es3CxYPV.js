async function load({ params }) {
  return {
    id: Number(params.fellowship),
    acourse: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CFWEqMoT.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/14.DSWlAAej.js","_app/immutable/chunks/scheduler.QnGaJ3C6.js","_app/immutable/chunks/index.CP1mFRt2.js","_app/immutable/chunks/Course.BZS4LX1Q.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/index.nNwP9lPq.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/Bar.vnqPaF2B.js","_app/immutable/chunks/ButtonChild.2_O_LK_r.js"];
const stylesheets = ["_app/immutable/assets/14.DaFJDBJH.css","_app/immutable/assets/Course.BeBdJHqF.css","_app/immutable/assets/Bar.ClmmHSEa.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-es3CxYPV.js.map
