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

const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Knejt48k.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/exams/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/22.4KXJL96u.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/AdminQuestions.DTwbLbkb.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/not.DRruyBBE.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
const stylesheets = ["_app/immutable/assets/AdminQuestions.obpfeAIx.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=22-DTIzhrAT.js.map
