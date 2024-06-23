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

const index = 42;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fddhgZhv.js')).default;
const server_id = "src/routes/profile/[code]/+page.server.js";
const imports = ["_app/immutable/nodes/42.DRc9mkA2.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/not.Dcz1yJl1.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/TopBar.CQYo4t-p.js","_app/immutable/chunks/Login.CxH4GpQF.js","_app/immutable/chunks/CV.CeyziLKJ.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.CqzTktcQ.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/each.CDLVB7Rj.js"];
const stylesheets = ["_app/immutable/assets/42.DWT2gsa0.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/TopBar.DZ3AJLoq.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=42-Drqu_CHO.js.map
