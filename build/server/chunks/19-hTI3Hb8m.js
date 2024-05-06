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

const index = 19;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CpM8vjCr.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/users/+page.server.js";
const imports = ["_app/immutable/nodes/19.Dh-tTV0o.js","_app/immutable/chunks/scheduler.B1GUV8t7.js","_app/immutable/chunks/index.DTYR2YpX.js","_app/immutable/chunks/Users.Btm7eNx0.js","_app/immutable/chunks/each.C80E9-Vo.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/Bar.BSH1Ua_b.js"];
const stylesheets = ["_app/immutable/assets/Users.CW2jVH7K.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=19-hTI3Hb8m.js.map
