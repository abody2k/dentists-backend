async function load({ params }) {
  try {
    console.log("these are the params");
    console.log(params);
    return { params };
  } catch (error) {
    console.log(error);
    return { err: 404 };
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 36;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CAN78rsM.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/[examType]/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/36.TnYzpeCl.js","_app/immutable/chunks/scheduler.BVAlSgfp.js","_app/immutable/chunks/index.B7Z5KU1K.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=36-DYixGpi1.js.map
