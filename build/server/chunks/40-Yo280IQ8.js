async function load({ params }) {
  try {
    console.log("these are the params");
    console.log(params);
    return { params };
  } catch (error) {
    console.log(error);
    return { err: 404 };
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 40;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BRVKGC74.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/[examType]/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/40.C6HijzNn.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/not.DRruyBBE.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/UserResults.BjRE3l2_.js","_app/immutable/chunks/each.CDLVB7Rj.js"];
const stylesheets = ["_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/UserResults.B-zORnmK.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=40-Yo280IQ8.js.map
