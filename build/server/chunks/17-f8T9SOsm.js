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

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CPITtosw.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/exams/+page.server.js";
const imports = ["_app/immutable/nodes/17.B_R5c1ey.js","_app/immutable/chunks/scheduler.B1GUV8t7.js","_app/immutable/chunks/index.DTYR2YpX.js","_app/immutable/chunks/Exam.OHkhnQit.js","_app/immutable/chunks/each.C80E9-Vo.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/Bar.BSH1Ua_b.js"];
const stylesheets = ["_app/immutable/assets/Exam.BhKzey_I.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-f8T9SOsm.js.map
