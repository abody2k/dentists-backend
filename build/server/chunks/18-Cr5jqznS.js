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

const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CJMwjqxL.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/users/+page.server.js";
const imports = ["_app/immutable/nodes/18.UXmy-4QA.js","_app/immutable/chunks/scheduler.DkkY9i-5.js","_app/immutable/chunks/index.D9rRt9oS.js","_app/immutable/chunks/Users.DCjPQiCc.js","_app/immutable/chunks/each.B4zj3C_D.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.CkaNzkrI.js"];
const stylesheets = ["_app/immutable/assets/Users.Cwx0kgOj.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=18-Cr5jqznS.js.map
