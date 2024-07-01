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
const component = async () => component_cache ??= (await import('./_page.svelte-JaiVueID.js')).default;
const server_id = "src/routes/admin/courses/[course]/users/+page.server.js";
const imports = ["_app/immutable/nodes/15.3cS0fz57.js","_app/immutable/chunks/scheduler.D5CB0Ir0.js","_app/immutable/chunks/index.D9EWrLR_.js","_app/immutable/chunks/Users.CjTDR4EO.js","_app/immutable/chunks/each.C6ViCQ87.js","_app/immutable/chunks/not.BJXqS4yO.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Bar.CJq-3ote.js"];
const stylesheets = ["_app/immutable/assets/Users.Bb6DIVrX.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-D-5Yjk16.js.map
