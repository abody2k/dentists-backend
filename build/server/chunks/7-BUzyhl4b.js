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
const component = async () => component_cache ??= (await import('./_page.svelte-SfyZlmYB.js')).default;
const server_id = "src/routes/admin/courses/[course]/chapters/+page.server.js";
const imports = ["_app/immutable/nodes/7.D7M9LfZM.js","_app/immutable/chunks/scheduler.Cin9khNl.js","_app/immutable/chunks/index.DcF4-v1J.js","_app/immutable/chunks/Chapters.D0hyNSul.js","_app/immutable/chunks/each.B9raO-7B.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.DS5Eq-nt.js"];
const stylesheets = ["_app/immutable/assets/Button.XZYYTg8B.css","_app/immutable/assets/Chapters.CZK-XiLN.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-BUzyhl4b.js.map
