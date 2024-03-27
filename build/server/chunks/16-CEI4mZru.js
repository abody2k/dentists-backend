async function load({ params }) {
  return {
    id: Number(params.fellowship),
    course: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DJ-BgCDF.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/exams/+page.server.js";
const imports = ["_app/immutable/nodes/16.DGhQ03-x.js","_app/immutable/chunks/scheduler.CvS8aZFR.js","_app/immutable/chunks/index.BLvvEpyq.js","_app/immutable/chunks/Exam.w1818vhD.js","_app/immutable/chunks/each.atBuby31.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.CgSJ8Znp.js"];
const stylesheets = ["_app/immutable/assets/Exam.BhKzey_I.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=16-CEI4mZru.js.map
