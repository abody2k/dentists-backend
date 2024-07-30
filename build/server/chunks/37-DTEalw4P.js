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

const index = 37;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Diy_oBcB.js')).default;
const server_id = "src/routes/courses/[course]/[examType]/[examID]/[level]/+page.server.js";
const imports = ["_app/immutable/nodes/37.BMXuEV6V.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/not.CMcaOXzY.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/UserResults.zS2NiUH_.js","_app/immutable/chunks/each.DGNUWULW.js"];
const stylesheets = ["_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/UserResults.C77DJmAx.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=37-DTEalw4P.js.map
