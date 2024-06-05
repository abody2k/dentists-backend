async function load({ params }) {
  return {
    token: params.reset
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 38;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DrGOWohf.js')).default;
const server_id = "src/routes/reset/[reset]/+page.server.js";
const imports = ["_app/immutable/nodes/38.B0a6Hx3X.js","_app/immutable/chunks/scheduler.CiUN_2Ko.js","_app/immutable/chunks/index.koTVZFH-.js","_app/immutable/chunks/Button.DaX0Hw9h.js","_app/immutable/chunks/not.BjEzKfTd.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
const stylesheets = ["_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=38-CO_OU2Kv.js.map
