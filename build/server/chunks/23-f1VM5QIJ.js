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
const component = async () => component_cache ??= (await import('./_page.svelte-9F8ND-gE.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/exams/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/23.neh5cA9w.js","_app/immutable/chunks/scheduler.-UlM-m53.js","_app/immutable/chunks/index.UV4btmqA.js","_app/immutable/chunks/AdminQuestions.DYHSmr0F.js","_app/immutable/chunks/each.vmS1Pkat.js","_app/immutable/chunks/not.CKuSUAlB.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
const stylesheets = ["_app/immutable/assets/AdminQuestions.obpfeAIx.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=23-f1VM5QIJ.js.map
