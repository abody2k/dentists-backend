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
const imports = ["_app/immutable/nodes/17.NibyF96g.js","_app/immutable/chunks/scheduler.DkkY9i-5.js","_app/immutable/chunks/index.D9rRt9oS.js","_app/immutable/chunks/Videos.BKaZhqhK.js","_app/immutable/chunks/each.B4zj3C_D.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.CkaNzkrI.js"];
const stylesheets = ["_app/immutable/assets/Videos.CcLEcSdI.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-D8X2kGDS.js.map
