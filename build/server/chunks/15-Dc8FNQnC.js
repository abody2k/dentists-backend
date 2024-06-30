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

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BvacqoW0.js')).default;
const server_id = "src/routes/admin/courses/[course]/users/+page.server.js";
const imports = ["_app/immutable/nodes/15.Cuu_hoR0.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/Users.CHVkRwUh.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/not.7OqnHX6V.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Bar.DDA7fnVz.js"];
const stylesheets = ["_app/immutable/assets/Users.Bb6DIVrX.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-Dc8FNQnC.js.map
