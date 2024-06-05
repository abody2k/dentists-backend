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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BG939EcF.js')).default;
const server_id = "src/routes/admin/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/10.i-k892xf.js","_app/immutable/chunks/scheduler.CiUN_2Ko.js","_app/immutable/chunks/index.koTVZFH-.js","_app/immutable/chunks/not.CVT2I458.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Bar.Bd7MNiGz.js","_app/immutable/chunks/Course.DhEEK-1r.js","_app/immutable/chunks/Editor.Ds6bAgQ-.js","_app/immutable/chunks/index.CccY6M5-.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Counter.BiLBplk4.js","_app/immutable/chunks/ButtonChild.BN5LqL12.js"];
const stylesheets = ["_app/immutable/assets/10.DbgoKRGE.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/Chapters.1q1cZMy8.css","_app/immutable/assets/Videos.Be26GrLA.css","_app/immutable/assets/Exam.BhKzey_I.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Course.BUckgAkg.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-bmkrGRuZ.js.map
