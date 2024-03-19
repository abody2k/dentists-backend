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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BsivmkMc.js')).default;
const server_id = "src/routes/admin/courses/[course]/users/+page.server.js";
const imports = ["_app/immutable/nodes/10.BxGwkfYw.js","_app/immutable/chunks/scheduler.QnGaJ3C6.js","_app/immutable/chunks/index.CP1mFRt2.js","_app/immutable/chunks/Users.BLVZOH1b.js","_app/immutable/chunks/each.CHFcAGEY.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.vnqPaF2B.js"];
const stylesheets = ["_app/immutable/assets/Users.D9m5otK1.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-C0Ywx5nU.js.map
