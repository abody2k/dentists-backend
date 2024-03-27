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
const component = async () => component_cache ??= (await import('./_page.svelte-BHh-4unf.js')).default;
const server_id = "src/routes/admin/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/6.DECO6EUA.js","_app/immutable/chunks/scheduler.CvS8aZFR.js","_app/immutable/chunks/index.BLvvEpyq.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.CgSJ8Znp.js","_app/immutable/chunks/Course.DrYB5EaP.js","_app/immutable/chunks/index.BnwJMdZt.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/ButtonChild.DX50ZhsI.js"];
const stylesheets = ["_app/immutable/assets/6.C8yfGOFZ.css","_app/immutable/assets/Button.D-5GMaDr.css","_app/immutable/assets/Chapters.CZK-XiLN.css","_app/immutable/assets/Videos.CJwtQsNu.css","_app/immutable/assets/Exam.DpQ-Jz_R.css","_app/immutable/assets/Bar.ClmmHSEa.css","_app/immutable/assets/Course.BeBdJHqF.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-Be5CX8Qn.js.map
