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
const component = async () => component_cache ??= (await import('./_page.svelte-Bf6Nrc3B.js')).default;
const server_id = "src/routes/admin/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/10.Df3bH48u.js","_app/immutable/chunks/scheduler.BM2JUaET.js","_app/immutable/chunks/index.DjdkDzVp.js","_app/immutable/chunks/not.CMbolwtH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/Course.DTHlTg1R.js","_app/immutable/chunks/Editor.D9dBvOJE.js","_app/immutable/chunks/index.0QpIqT0A.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Counter.DgGGoq6T.js","_app/immutable/chunks/ButtonChild.BJL323Kx.js"];
const stylesheets = ["_app/immutable/assets/10.DbgoKRGE.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Chapters.1q1cZMy8.css","_app/immutable/assets/Videos.Be26GrLA.css","_app/immutable/assets/Exam.5qNiw6mi.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Course.B6vOynHs.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-BTUlKRhM.js.map
