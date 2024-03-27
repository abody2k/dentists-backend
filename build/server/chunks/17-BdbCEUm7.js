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

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-_o9U93yD.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/lectures/+page.server.js";
const imports = ["_app/immutable/nodes/17.DYknydvT.js","_app/immutable/chunks/scheduler.CvS8aZFR.js","_app/immutable/chunks/index.BLvvEpyq.js","_app/immutable/chunks/Videos.Co6115Fr.js","_app/immutable/chunks/each.atBuby31.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.CgSJ8Znp.js"];
const stylesheets = ["_app/immutable/assets/Videos.CcLEcSdI.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-BdbCEUm7.js.map
