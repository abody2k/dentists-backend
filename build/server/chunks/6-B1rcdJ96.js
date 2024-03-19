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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CLsFNC5Y.js')).default;
const server_id = "src/routes/admin/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/6.ClDMvOLr.js","_app/immutable/chunks/scheduler.Cin9khNl.js","_app/immutable/chunks/index.DcF4-v1J.js","_app/immutable/chunks/not.BzfzqYAU.js","_app/immutable/chunks/Bar.DS5Eq-nt.js","_app/immutable/chunks/Course.K92dAYlV.js","_app/immutable/chunks/index.DC1Y9ldn.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/ButtonChild.BfsZEBwV.js"];
const stylesheets = ["_app/immutable/assets/6.C8yfGOFZ.css","_app/immutable/assets/Button.XZYYTg8B.css","_app/immutable/assets/Chapters.CZK-XiLN.css","_app/immutable/assets/Videos.CJwtQsNu.css","_app/immutable/assets/Exam.DpQ-Jz_R.css","_app/immutable/assets/Bar.ClmmHSEa.css","_app/immutable/assets/Course.BeBdJHqF.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-B1rcdJ96.js.map
