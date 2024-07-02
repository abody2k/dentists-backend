async function load({ params }) {
  return {
    id: Number(params.fellowship),
    course: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BhI0BQES.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/chapters/+page.server.js";
const imports = ["_app/immutable/nodes/21.BgI0Qqtg.js","_app/immutable/chunks/scheduler.BM2JUaET.js","_app/immutable/chunks/index.DjdkDzVp.js","_app/immutable/chunks/Chapters.Bk_SKWNo.js","_app/immutable/chunks/each.6y9O-auE.js","_app/immutable/chunks/not.CMbolwtH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/Bar.Bvbyx1d8.js"];
const stylesheets = ["_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/Chapters.1q1cZMy8.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=21-t2Vgcy_u.js.map
