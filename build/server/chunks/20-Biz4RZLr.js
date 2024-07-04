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
const component = async () => component_cache ??= (await import('./_page.svelte-CUKjwC_c.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/20.DSghNzuS.js","_app/immutable/chunks/scheduler.-UlM-m53.js","_app/immutable/chunks/index.UV4btmqA.js","_app/immutable/chunks/Course.CUok2QTD.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/not.CKuSUAlB.js","_app/immutable/chunks/Editor.B6MIdOta.js","_app/immutable/chunks/index.DdcKdXgJ.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Counter.jSkUrTrD.js","_app/immutable/chunks/ButtonChild.BOYgsiKN.js"];
const stylesheets = ["_app/immutable/assets/20.CWKdx4Vg.css","_app/immutable/assets/Course.B6vOynHs.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/ButtonChild.DH1a7DjA.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-Biz4RZLr.js.map
