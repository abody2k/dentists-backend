async function load({ params }) {
  return {
    examID: params.examID,
    params,
    course: true
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CUN0gYby.js')).default;
const server_id = "src/routes/admin/courses/[course]/exams/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/13.By_oz17_.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/AdminQuestions.P7AAuLM4.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/not.BGxdCePc.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
const stylesheets = ["_app/immutable/assets/AdminQuestions.obpfeAIx.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=13-DjGzwZ-6.js.map
