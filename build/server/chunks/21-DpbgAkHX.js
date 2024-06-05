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

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CIKFQcIU.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/lectures/+page.server.js";
const imports = ["_app/immutable/nodes/21.gv6s6xQV.js","_app/immutable/chunks/scheduler.CiUN_2Ko.js","_app/immutable/chunks/index.koTVZFH-.js","_app/immutable/chunks/Videos.V-lhDfnO.js","_app/immutable/chunks/each.C83jVpGO.js","_app/immutable/chunks/not.CVT2I458.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Bar.Bd7MNiGz.js"];
const stylesheets = ["_app/immutable/assets/Videos.Be26GrLA.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=21-DpbgAkHX.js.map
