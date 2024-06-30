async function load({ params }) {
  return {
    code: params.profiles,
    acourse: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4BopELav.js')).default;
const server_id = "src/routes/admin/profiles/[profiles]/+page.server.js";
const imports = ["_app/immutable/nodes/25.DO-qNutq.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/QR.9VigvBDL.js","_app/immutable/chunks/not.7OqnHX6V.js","_app/immutable/chunks/Bar.DDA7fnVz.js"];
const stylesheets = ["_app/immutable/assets/25.C51E19gp.css","_app/immutable/assets/QR.B0NlMRSp.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=25-D61mM83p.js.map
