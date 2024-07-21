async function load({ params }) {
  return {
    examID: params.examID,
    params,
    course: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 23;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BNb1SxHX.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/exams/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/23.D2LzqVST.js","_app/immutable/chunks/scheduler._qeGDSQ8.js","_app/immutable/chunks/index.CYIwKu5b.js","_app/immutable/chunks/AdminQuestions.D399kK7I.js","_app/immutable/chunks/each.DQBLYXJl.js","_app/immutable/chunks/not.D11_haEW.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
const stylesheets = ["_app/immutable/assets/AdminQuestions.obpfeAIx.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=23-BXl96M-8.js.map
