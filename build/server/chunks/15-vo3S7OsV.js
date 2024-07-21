async function load({ params }) {
  return {
    id: Number(params.course),
    course: true,
    ac: true
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bk7q3apo.js')).default;
const server_id = "src/routes/admin/courses/[course]/users/+page.server.js";
const imports = ["_app/immutable/nodes/15.CdqiNnhn.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/Users.SsufICrJ.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/not.CMcaOXzY.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/Bar.BCgXY4Hk.js"];
const stylesheets = ["_app/immutable/assets/Users.BF4yY9xX.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-vo3S7OsV.js.map
