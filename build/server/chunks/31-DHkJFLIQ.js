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

const index = 31;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-lCY5AiVC.js')).default;
const server_id = "src/routes/courses/[course]/[examType]/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/31.DDFB6apc.js","_app/immutable/chunks/scheduler.BVAlSgfp.js","_app/immutable/chunks/index.B7Z5KU1K.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=31-DHkJFLIQ.js.map