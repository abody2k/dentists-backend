async function load({ params }) {
  return {
    d: params.exam
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-H_vTADou.js')).default;
const server_id = "src/routes/admin/exams/[exam]/+page.server.js";
const imports = ["_app/immutable/nodes/17.eGZT2yue.js","_app/immutable/chunks/scheduler.BM2JUaET.js","_app/immutable/chunks/each.6y9O-auE.js","_app/immutable/chunks/index.DjdkDzVp.js","_app/immutable/chunks/xlsx.CqXLKV2Q.js","_app/immutable/chunks/not.CMbolwtH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
const stylesheets = ["_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-BO21ytaN.js.map
