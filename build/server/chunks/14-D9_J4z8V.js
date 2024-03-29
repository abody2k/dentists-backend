async function load({ params }) {
  return {
    id: Number(params.fellowship),
    acourse: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C4y665qA.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/14.CJXzKlet.js","_app/immutable/chunks/scheduler.BXmKrZtQ.js","_app/immutable/chunks/index.TwpJmkAI.js","_app/immutable/chunks/Course.B0Hb63Li.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Editor.TJqcwuHw.js","_app/immutable/chunks/index.B20KW2Dl.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Bar.BX1fJXFs.js","_app/immutable/chunks/ButtonChild.BAvuk6-5.js"];
const stylesheets = ["_app/immutable/assets/14.DaFJDBJH.css","_app/immutable/assets/Course.BAcFydrg.css","_app/immutable/assets/Bar.ClmmHSEa.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-D9_J4z8V.js.map
