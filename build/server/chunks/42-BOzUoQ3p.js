async function load({ params }) {
  return {
    id: Number(params.profile),
    acourse: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 42;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BBYlNceU.js')).default;
const server_id = "src/routes/profile/+page.server.js";
const imports = ["_app/immutable/nodes/42.BpRPQ10f.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/QR.DCl8wE8L.js","_app/immutable/chunks/not.BGxdCePc.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/TopBar.DAnZbIRa.js","_app/immutable/chunks/Login.CWEXk8M4.js","_app/immutable/chunks/CV.CNRz2nG7.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.BktzVClu.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/UserProfile.DQBEZvFf.js"];
const stylesheets = ["_app/immutable/assets/42.DbJfbD3I.css","_app/immutable/assets/QR.B0NlMRSp.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/TopBar.CjMYxZKd.css","_app/immutable/assets/UserProfile.4L8_CXoz.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=42-BOzUoQ3p.js.map
