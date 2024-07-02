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
const component = async () => component_cache ??= (await import('./_page.svelte-B0lSgm-r.js')).default;
const server_id = "src/routes/profile/[code]/+page.server.js";
const imports = ["_app/immutable/nodes/43.BfmEHC5k.js","_app/immutable/chunks/scheduler.BM2JUaET.js","_app/immutable/chunks/index.DjdkDzVp.js","_app/immutable/chunks/not.CMbolwtH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/TopBar.DFEn1urh.js","_app/immutable/chunks/Login.BZWoWBrV.js","_app/immutable/chunks/CV.C4rRlwop.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.D3JWzLQT.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/each.6y9O-auE.js"];
const stylesheets = ["_app/immutable/assets/43.DWT2gsa0.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/TopBar.2oadlPRd.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=43-D8Fh4Ego.js.map
