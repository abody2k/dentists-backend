async function load({ params }) {
  return {
    id: Number(params.course),
    course: true
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BH1jFt5K.js')).default;
const server_id = "src/routes/admin/courses/[course]/users/+page.server.js";
const imports = ["_app/immutable/nodes/14.B6LO_Xui.js","_app/immutable/chunks/scheduler.BVAlSgfp.js","_app/immutable/chunks/index.B7Z5KU1K.js","_app/immutable/chunks/Users.CPPVjR0l.js","_app/immutable/chunks/each.D8K876rg.js","_app/immutable/chunks/not.BJnHWghe.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Bar.CdutgMKg.js"];
const stylesheets = ["_app/immutable/assets/Users.De5wOskx.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-Bqn3FTM9.js.map
