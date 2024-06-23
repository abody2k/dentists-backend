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

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DRQKDHIh.js')).default;
const server_id = "src/routes/admin/profiles/[profiles]/+page.server.js";
const imports = ["_app/immutable/nodes/25.CfZAioRU.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/QR.BPB43D3r.js","_app/immutable/chunks/not.k57uuvnW.js","_app/immutable/chunks/Bar.BK1J9-6c.js"];
const stylesheets = ["_app/immutable/assets/25.C51E19gp.css","_app/immutable/assets/QR.B0NlMRSp.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=25-BUeX-503.js.map
