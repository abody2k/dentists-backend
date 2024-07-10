async function load({ params }) {
  return {
    token: params.reset
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 44;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CkP5NQsG.js')).default;
const server_id = "src/routes/reset/[reset]/+page.server.js";
const imports = ["_app/immutable/nodes/44.UG46P2LW.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/Button.C-vcSyKs.js","_app/immutable/chunks/not.BKXOq_6H.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
const stylesheets = ["_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=44-Ot1DqqBU.js.map
