async function load({ params }) {
  return {
    id: Number(params.course),
    course: true
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C8wYs8Qn.js')).default;
const server_id = "src/routes/admin/courses/[course]/chapters/+page.server.js";
const imports = ["_app/immutable/nodes/7.Bt-IZa7r.js","_app/immutable/chunks/scheduler.DkkY9i-5.js","_app/immutable/chunks/index.D9rRt9oS.js","_app/immutable/chunks/Chapters.Bww7mjkv.js","_app/immutable/chunks/each.B4zj3C_D.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.CkaNzkrI.js"];
const stylesheets = ["_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/Chapters.2-xWXqLw.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-Cfh-Xk6I.js.map
