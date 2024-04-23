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
const component = async () => component_cache ??= (await import('./_page.svelte-DrkTrZro.js')).default;
const server_id = "src/routes/admin/courses/[course]/exams/+page.server.js";
const imports = ["_app/immutable/nodes/8.DjLCIkZN.js","_app/immutable/chunks/scheduler.DNJrJgMj.js","_app/immutable/chunks/index.BOq-2PnM.js","_app/immutable/chunks/Exam.D6Z6WL3O.js","_app/immutable/chunks/each.DMQzqXE-.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/Bar.B0X7hSX6.js"];
const stylesheets = ["_app/immutable/assets/Exam.BhKzey_I.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-BZpec3zd.js.map
