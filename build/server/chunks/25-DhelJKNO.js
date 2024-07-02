async function load({ params }) {
  return {
    id: Number(params.fellowship),
    course: false,
    ac: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DsKZcwrn.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/users/+page.server.js";
const imports = ["_app/immutable/nodes/25.C6vw-b-p.js","_app/immutable/chunks/scheduler.BM2JUaET.js","_app/immutable/chunks/index.DjdkDzVp.js","_app/immutable/chunks/Users.Cpg5_XeC.js","_app/immutable/chunks/each.6y9O-auE.js","_app/immutable/chunks/not.CMbolwtH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/Bar.Bvbyx1d8.js"];
const stylesheets = ["_app/immutable/assets/Users.Bb6DIVrX.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=25-DhelJKNO.js.map
