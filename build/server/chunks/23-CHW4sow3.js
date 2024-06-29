async function load({ params }) {
  return {
    id: Number(params.fellowship),
    course: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 23;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CcPjky-Y.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/lectures/+page.server.js";
const imports = ["_app/immutable/nodes/23.P6SqbarH.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/Videos.A-vx1b3x.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/not.DRruyBBE.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Bar.DGY_Xn8I.js"];
const stylesheets = ["_app/immutable/assets/Videos.Be26GrLA.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=23-CHW4sow3.js.map
