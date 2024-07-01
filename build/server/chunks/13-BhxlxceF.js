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
const component = async () => component_cache ??= (await import('./_page.svelte-D_RXn46_.js')).default;
const server_id = "src/routes/admin/courses/[course]/exams/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/13.XeRL2QoW.js","_app/immutable/chunks/scheduler.D5CB0Ir0.js","_app/immutable/chunks/index.D9EWrLR_.js","_app/immutable/chunks/AdminQuestions.DonieYqR.js","_app/immutable/chunks/each.C6ViCQ87.js","_app/immutable/chunks/not.BJXqS4yO.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
const stylesheets = ["_app/immutable/assets/AdminQuestions.obpfeAIx.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=13-BhxlxceF.js.map
