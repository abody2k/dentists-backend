async function load({ params }) {
  return {
    code: params.profiles,
    acourse: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 26;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BxfHMVIG.js')).default;
const server_id = "src/routes/admin/profiles/[profiles]/+page.server.js";
const imports = ["_app/immutable/nodes/26.Cq0hRZML.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler._qeGDSQ8.js","_app/immutable/chunks/index.CYIwKu5b.js","_app/immutable/chunks/each.DQBLYXJl.js","_app/immutable/chunks/QR.BgjXwUFb.js","_app/immutable/chunks/not.D11_haEW.js","_app/immutable/chunks/Bar.ovNMkxio.js"];
const stylesheets = ["_app/immutable/assets/26.C51E19gp.css","_app/immutable/assets/QR.B0NlMRSp.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=26-BabvDJaW.js.map
