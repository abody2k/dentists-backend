async function load({ params }) {
  return {
    code: params.code,
    acourse: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 43;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C7sI3YCR.js')).default;
const server_id = "src/routes/profile/[code]/+page.server.js";
const imports = ["_app/immutable/nodes/43.BnJjYWUL.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/not.BKXOq_6H.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/TopBar.BmHll3jy.js","_app/immutable/chunks/Login.Bt_A0K2R.js","_app/immutable/chunks/CV.DG2uURro.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.XBm_4HOl.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/UserProfile.8ZnC_jmA.js"];
const stylesheets = ["_app/immutable/assets/43.DWT2gsa0.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/TopBar.tA5-wsmR.css","_app/immutable/assets/UserProfile.4L8_CXoz.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=43-BErMo9Le.js.map
