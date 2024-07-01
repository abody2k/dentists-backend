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

const index = 43;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BJzxmPWF.js')).default;
const server_id = "src/routes/profile/[code]/+page.server.js";
const imports = ["_app/immutable/nodes/43.Cm4at8Ka.js","_app/immutable/chunks/scheduler.D5CB0Ir0.js","_app/immutable/chunks/index.D9EWrLR_.js","_app/immutable/chunks/not.BJXqS4yO.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/TopBar.plgQoOVm.js","_app/immutable/chunks/Login.A_IFYeHv.js","_app/immutable/chunks/CV.Bc89b8ZG.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.D3JWzLQT.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/each.C6ViCQ87.js"];
const stylesheets = ["_app/immutable/assets/43.DWT2gsa0.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/TopBar.2oadlPRd.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=43-CoY5ZYqO.js.map
