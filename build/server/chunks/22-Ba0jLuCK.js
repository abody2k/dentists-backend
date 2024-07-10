async function load({ params }) {
  return {
    id: Number(params.fellowship),
    course: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D9Hygc3-.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/exams/+page.server.js";
const imports = ["_app/immutable/nodes/22.U7lczaaS.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/Exam.Dgxp0KWs.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/not.BKXOq_6H.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/Bar.BCgXY4Hk.js"];
const stylesheets = ["_app/immutable/assets/Exam.5qNiw6mi.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=22-Ba0jLuCK.js.map
