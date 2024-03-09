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
const component = async () => component_cache ??= (await import('./_page.svelte-C1uO1hfl.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/users/+page.server.js";
const imports = ["_app/immutable/nodes/18.DTT3YKX6.js","_app/immutable/chunks/scheduler.Cin9khNl.js","_app/immutable/chunks/index.DcF4-v1J.js","_app/immutable/chunks/Users.Br2uLBCJ.js","_app/immutable/chunks/each.B9raO-7B.js","_app/immutable/chunks/not.BORTzk5v.js","_app/immutable/chunks/Bar.DS5Eq-nt.js"];
const stylesheets = ["_app/immutable/assets/Users.D9m5otK1.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=18-Bz5gUaC2.js.map
