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
const component = async () => component_cache ??= (await import('./_page.svelte-CYmDWL6F.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/20.CZ8qTfi5.js","_app/immutable/chunks/scheduler.BM2JUaET.js","_app/immutable/chunks/index.DjdkDzVp.js","_app/immutable/chunks/Course.DTHlTg1R.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/not.CMbolwtH.js","_app/immutable/chunks/Editor.D9dBvOJE.js","_app/immutable/chunks/index.0QpIqT0A.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Counter.DgGGoq6T.js","_app/immutable/chunks/ButtonChild.BJL323Kx.js"];
const stylesheets = ["_app/immutable/assets/20.CWKdx4Vg.css","_app/immutable/assets/Course.B6vOynHs.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-Do4Q3Cmz.js.map
