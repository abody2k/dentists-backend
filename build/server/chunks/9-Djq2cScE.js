async function load({ params }) {
  return {
    id: Number(params.course),
    course: true
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C4VtzE7n.js')).default;
const server_id = "src/routes/admin/courses/[course]/lectures/+page.server.js";
const imports = ["_app/immutable/nodes/9.ChDxAYH3.js","_app/immutable/chunks/scheduler.BbzLVxRS.js","_app/immutable/chunks/index.hWlefRDD.js","_app/immutable/chunks/Videos.BW-Wj-3s.js","_app/immutable/chunks/each.8dtAqtyS.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.BPiRN3aM.js"];
const stylesheets = ["_app/immutable/assets/Videos.CcLEcSdI.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-Djq2cScE.js.map
