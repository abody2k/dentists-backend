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
const component = async () => component_cache ??= (await import('./_page.svelte-ytV8m_P_.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/exams/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/23.Ka0K90qD.js","_app/immutable/chunks/scheduler.BM2JUaET.js","_app/immutable/chunks/index.DjdkDzVp.js","_app/immutable/chunks/AdminQuestions.CDYHXukG.js","_app/immutable/chunks/each.6y9O-auE.js","_app/immutable/chunks/not.CMbolwtH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
const stylesheets = ["_app/immutable/assets/AdminQuestions.obpfeAIx.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=23-6MHIYefx.js.map
