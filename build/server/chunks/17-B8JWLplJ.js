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
const imports = ["_app/immutable/nodes/17.ET4AHTI_.js","_app/immutable/chunks/scheduler.C4tHwGv5.js","_app/immutable/chunks/index.CJfZO0_H.js","_app/immutable/chunks/Videos.DYYdvLNZ.js","_app/immutable/chunks/each.DCfAADOs.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.BcFgCmE7.js"];
const stylesheets = ["_app/immutable/assets/Videos.CcLEcSdI.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-B8JWLplJ.js.map
