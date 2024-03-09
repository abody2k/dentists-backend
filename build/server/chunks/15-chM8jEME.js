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

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bxxi1hlP.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/chapters/+page.server.js";
const imports = ["_app/immutable/nodes/15.zUa_D1bs.js","_app/immutable/chunks/scheduler.Cin9khNl.js","_app/immutable/chunks/index.DcF4-v1J.js","_app/immutable/chunks/Chapters.DgrKXfGT.js","_app/immutable/chunks/each.B9raO-7B.js","_app/immutable/chunks/not.BORTzk5v.js","_app/immutable/chunks/Bar.DS5Eq-nt.js"];
const stylesheets = ["_app/immutable/assets/Button.XZYYTg8B.css","_app/immutable/assets/Chapters.CZK-XiLN.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-chM8jEME.js.map
