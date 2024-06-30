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
const imports = ["_app/immutable/nodes/10.CLo1psUa.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/not.7OqnHX6V.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Course.JyaPFW1b.js","_app/immutable/chunks/Editor.CsKyrhyI.js","_app/immutable/chunks/index.huCWhqxS.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Counter.CW2LT0WT.js","_app/immutable/chunks/ButtonChild.BJYqBYhQ.js"];
const stylesheets = ["_app/immutable/assets/10.DbgoKRGE.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Chapters.1q1cZMy8.css","_app/immutable/assets/Videos.Be26GrLA.css","_app/immutable/assets/Exam.5qNiw6mi.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Course.B6vOynHs.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-BBp8I39Q.js.map
