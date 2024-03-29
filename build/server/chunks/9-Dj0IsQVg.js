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
const imports = ["_app/immutable/nodes/9.BHwrpnZU.js","_app/immutable/chunks/scheduler.BXmKrZtQ.js","_app/immutable/chunks/index.TwpJmkAI.js","_app/immutable/chunks/Videos.CX3f2EXX.js","_app/immutable/chunks/each.nhu_Gb8S.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.BX1fJXFs.js"];
const stylesheets = ["_app/immutable/assets/Videos.CcLEcSdI.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-Dj0IsQVg.js.map
