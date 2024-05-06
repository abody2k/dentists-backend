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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BL2RxsqZ.js')).default;
const server_id = "src/routes/admin/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/7.CsdzpBum.js","_app/immutable/chunks/scheduler.B1GUV8t7.js","_app/immutable/chunks/index.DTYR2YpX.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/Bar.BSH1Ua_b.js","_app/immutable/chunks/Course.O6qwMqjS.js","_app/immutable/chunks/Editor.YCX8MNiP.js","_app/immutable/chunks/index.DrI3gOWy.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/ButtonChild.BoNvC0cG.js"];
const stylesheets = ["_app/immutable/assets/7.DbgoKRGE.css","_app/immutable/assets/Button.BOgvweB0.css","_app/immutable/assets/Chapters.2-xWXqLw.css","_app/immutable/assets/Videos.CcLEcSdI.css","_app/immutable/assets/Exam.BhKzey_I.css","_app/immutable/assets/Bar.ClmmHSEa.css","_app/immutable/assets/Course.BAcFydrg.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-CSW6o2e8.js.map
