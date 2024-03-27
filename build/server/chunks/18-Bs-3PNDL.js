async function load({ params }) {
  return {
    id: Number(params.fellowship),
    course: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-40sLsUWs.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/users/+page.server.js";
const imports = ["_app/immutable/nodes/18.VjiKM4ab.js","_app/immutable/chunks/scheduler.CvS8aZFR.js","_app/immutable/chunks/index.BLvvEpyq.js","_app/immutable/chunks/Users.BABOI5IS.js","_app/immutable/chunks/each.atBuby31.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.CgSJ8Znp.js"];
const stylesheets = ["_app/immutable/assets/Users.Cwx0kgOj.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=18-Bs-3PNDL.js.map
