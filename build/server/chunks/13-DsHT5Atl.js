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
const component = async () => component_cache ??= (await import('./_page.svelte-tiNdnNH6.js')).default;
const server_id = "src/routes/admin/courses/[course]/exams/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/13.pX9Vg_ev.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/AdminQuestions.XGNYtoTc.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/not.k57uuvnW.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
const stylesheets = ["_app/immutable/assets/AdminQuestions.obpfeAIx.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=13-DsHT5Atl.js.map
