async function load({ params }) {
  return {
    id: Number(params.fellowship),
    acourse: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6lP7fhGh.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/20.ef13u1dc.js","_app/immutable/chunks/scheduler.D5CB0Ir0.js","_app/immutable/chunks/index.D9EWrLR_.js","_app/immutable/chunks/Course.BBO-cPGc.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/not.BJXqS4yO.js","_app/immutable/chunks/Editor.D3f8OiHU.js","_app/immutable/chunks/index.COnx1Y-V.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Counter.DWjbckk-.js","_app/immutable/chunks/ButtonChild.BOJZHqmf.js"];
const stylesheets = ["_app/immutable/assets/20.CWKdx4Vg.css","_app/immutable/assets/Course.B6vOynHs.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-xLR0NKDi.js.map
