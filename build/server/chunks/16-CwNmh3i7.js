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
const imports = ["_app/immutable/nodes/16.ojawan2T.js","_app/immutable/chunks/scheduler.BXmKrZtQ.js","_app/immutable/chunks/index.TwpJmkAI.js","_app/immutable/chunks/Exam.BdI8LGsd.js","_app/immutable/chunks/each.nhu_Gb8S.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.BX1fJXFs.js"];
const stylesheets = ["_app/immutable/assets/Exam.BhKzey_I.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=16-CwNmh3i7.js.map
