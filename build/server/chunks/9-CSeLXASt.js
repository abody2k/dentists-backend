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
const component = async () => component_cache ??= (await import('./_page.svelte-D6kWK9pP.js')).default;
const server_id = "src/routes/admin/courses/[course]/lectures/+page.server.js";
const imports = ["_app/immutable/nodes/9.BBx2bqa1.js","_app/immutable/chunks/scheduler.Cl0VmwpT.js","_app/immutable/chunks/index.9DdFkufZ.js","_app/immutable/chunks/Videos.CWc3yUsk.js","_app/immutable/chunks/each.DTRCTIt3.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.C3ipYCWx.js"];
const stylesheets = ["_app/immutable/assets/Videos.CcLEcSdI.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-CSeLXASt.js.map
