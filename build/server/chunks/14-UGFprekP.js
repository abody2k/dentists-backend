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
const component = async () => component_cache ??= (await import('./_page.svelte-DvlqTFgx.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/14.CyaDY50X.js","_app/immutable/chunks/scheduler.BbzLVxRS.js","_app/immutable/chunks/index.hWlefRDD.js","_app/immutable/chunks/Course.BmguaaCe.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Editor.CuqYFS_d.js","_app/immutable/chunks/index.CMuitwt0.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Bar.BPiRN3aM.js","_app/immutable/chunks/ButtonChild.BbCeiBoF.js"];
const stylesheets = ["_app/immutable/assets/14.DaFJDBJH.css","_app/immutable/assets/Course.BAcFydrg.css","_app/immutable/assets/Bar.ClmmHSEa.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-UGFprekP.js.map
