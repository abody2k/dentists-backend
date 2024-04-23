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
const component = async () => component_cache ??= (await import('./_page.svelte-GA6hOn7k.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/lectures/+page.server.js";
const imports = ["_app/immutable/nodes/17.sd_d1fCB.js","_app/immutable/chunks/scheduler.DNJrJgMj.js","_app/immutable/chunks/index.BOq-2PnM.js","_app/immutable/chunks/Videos.wwK25ydG.js","_app/immutable/chunks/each.DMQzqXE-.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/Bar.B0X7hSX6.js"];
const stylesheets = ["_app/immutable/assets/Videos.CcLEcSdI.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-BZabcfO2.js.map
