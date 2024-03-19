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

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CnFqvM1U.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/exams/+page.server.js";
const imports = ["_app/immutable/nodes/16.DjZVbYdy.js","_app/immutable/chunks/scheduler.QnGaJ3C6.js","_app/immutable/chunks/index.CP1mFRt2.js","_app/immutable/chunks/Exam.B4pS5SK9.js","_app/immutable/chunks/each.CHFcAGEY.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.vnqPaF2B.js"];
const stylesheets = ["_app/immutable/assets/Exam.DpQ-Jz_R.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=16-D6vRqaU3.js.map
