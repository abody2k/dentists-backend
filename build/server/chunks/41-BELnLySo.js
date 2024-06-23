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

const index = 41;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-N_kahjAw.js')).default;
const server_id = "src/routes/profile/+page.server.js";
const imports = ["_app/immutable/nodes/41.BGNZFxbY.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/QR.BPB43D3r.js","_app/immutable/chunks/not.Dcz1yJl1.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/TopBar.CQYo4t-p.js","_app/immutable/chunks/Login.CxH4GpQF.js","_app/immutable/chunks/CV.CeyziLKJ.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.CqzTktcQ.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/41.DbJfbD3I.css","_app/immutable/assets/QR.B0NlMRSp.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/TopBar.DZ3AJLoq.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=41-BELnLySo.js.map
