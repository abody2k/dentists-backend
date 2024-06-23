async function load({ params }) {
  return {
    token: params.reset
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 43;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-l-tRpQ4A.js')).default;
const server_id = "src/routes/reset/[reset]/+page.server.js";
const imports = ["_app/immutable/nodes/43.aXAyvurF.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/Button.DI0ciwgW.js","_app/immutable/chunks/not.k57uuvnW.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
const stylesheets = ["_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=43-Z2JVmeZ4.js.map
