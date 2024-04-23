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
const component = async () => component_cache ??= (await import('./_page.svelte-C8wYs8Qn.js')).default;
const server_id = "src/routes/admin/courses/[course]/chapters/+page.server.js";
const imports = ["_app/immutable/nodes/7.Bwwe5Xj-.js","_app/immutable/chunks/scheduler.DNJrJgMj.js","_app/immutable/chunks/index.BOq-2PnM.js","_app/immutable/chunks/Chapters.dHBvXp49.js","_app/immutable/chunks/each.DMQzqXE-.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/Bar.B0X7hSX6.js"];
const stylesheets = ["_app/immutable/assets/Button.BOgvweB0.css","_app/immutable/assets/Chapters.2-xWXqLw.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-nvKbCTWx.js.map
