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

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CC1Jj5F8.js')).default;
const server_id = "src/routes/admin/courses/[course]/exams/+page.server.js";
const imports = ["_app/immutable/nodes/8.h2mHc2kl.js","_app/immutable/chunks/scheduler.Cin9khNl.js","_app/immutable/chunks/index.DcF4-v1J.js","_app/immutable/chunks/Exam.Bb7ts59J.js","_app/immutable/chunks/each.B9raO-7B.js","_app/immutable/chunks/not.BORTzk5v.js","_app/immutable/chunks/Bar.DS5Eq-nt.js"];
const stylesheets = ["_app/immutable/assets/Exam.DpQ-Jz_R.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-kVTNp2_g.js.map
