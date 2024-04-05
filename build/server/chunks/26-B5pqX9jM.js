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

const index = 26;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-XC_yNzxn.js')).default;
const server_id = "src/routes/courses/[course]/[examType]/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/26.DZE6sUqJ.js","_app/immutable/chunks/scheduler.DkkY9i-5.js","_app/immutable/chunks/index.D9rRt9oS.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=26-B5pqX9jM.js.map
