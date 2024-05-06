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

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-SXWCdaek.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/15.BzIV2nxf.js","_app/immutable/chunks/scheduler.B1GUV8t7.js","_app/immutable/chunks/index.DTYR2YpX.js","_app/immutable/chunks/Course.O6qwMqjS.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/Editor.YCX8MNiP.js","_app/immutable/chunks/index.DrI3gOWy.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Bar.BSH1Ua_b.js","_app/immutable/chunks/ButtonChild.BoNvC0cG.js"];
const stylesheets = ["_app/immutable/assets/15.CWKdx4Vg.css","_app/immutable/assets/Course.BAcFydrg.css","_app/immutable/assets/Bar.ClmmHSEa.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-ijAOVMvF.js.map
