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
const component = async () => component_cache ??= (await import('./_page.svelte-CJMwjqxL.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/users/+page.server.js";
const imports = ["_app/immutable/nodes/18.2vdudCBF.js","_app/immutable/chunks/scheduler.BbzLVxRS.js","_app/immutable/chunks/index.hWlefRDD.js","_app/immutable/chunks/Users.Us_JWRXC.js","_app/immutable/chunks/each.8dtAqtyS.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.BPiRN3aM.js"];
const stylesheets = ["_app/immutable/assets/Users.Cwx0kgOj.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=18-Dkk9855X.js.map
