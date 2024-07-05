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
const imports = ["_app/immutable/nodes/17.CP7FJERT.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/xlsx.CqXLKV2Q.js","_app/immutable/chunks/not.u4UXoo5E.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
const stylesheets = ["_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-uHz0anLM.js.map
