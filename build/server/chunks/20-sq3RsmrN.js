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
const component = async () => component_cache ??= (await import('./_page.svelte-9IJ1mrUV.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/20.CGZVfl0U.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/Course.C7WywuT5.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/not.BGxdCePc.js","_app/immutable/chunks/Editor.DgrD1r85.js","_app/immutable/chunks/index.DTVtpEo5.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Counter.D6nXcS5G.js"];
const stylesheets = ["_app/immutable/assets/20.D0c3K-0A.css","_app/immutable/assets/ButtonChild.DH1a7DjA.css","_app/immutable/assets/Course.B6vOynHs.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Counter.DetUAIW6.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-sq3RsmrN.js.map
