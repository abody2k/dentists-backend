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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DDv45l8k.js')).default;
const server_id = "src/routes/admin/courses/[course]/exams/+page.server.js";
const imports = ["_app/immutable/nodes/12.BS7qVw7A.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/Exam.BHKLWc-B.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/not.DRruyBBE.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Bar.DGY_Xn8I.js"];
const stylesheets = ["_app/immutable/assets/Exam.5qNiw6mi.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-BD_ZFtuK.js.map
