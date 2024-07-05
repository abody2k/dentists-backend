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
const component = async () => component_cache ??= (await import('./_page.svelte-DDYFBtnw.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/20.CBqgEc6n.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/Course.DgBpSpmP.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/not.u4UXoo5E.js","_app/immutable/chunks/Editor.DgrD1r85.js","_app/immutable/chunks/index.DTVtpEo5.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Counter.D6nXcS5G.js","_app/immutable/chunks/ButtonChild.B2zINLDf.js"];
const stylesheets = ["_app/immutable/assets/20.CWKdx4Vg.css","_app/immutable/assets/Course.B6vOynHs.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/ButtonChild.DH1a7DjA.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-DgbdgWj9.js.map
