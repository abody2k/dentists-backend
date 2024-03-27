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

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DbZaHcMi.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/chapters/+page.server.js";
const imports = ["_app/immutable/nodes/15.BqzzPtG6.js","_app/immutable/chunks/scheduler.C4tHwGv5.js","_app/immutable/chunks/index.CJfZO0_H.js","_app/immutable/chunks/Chapters.B-j1dP01.js","_app/immutable/chunks/each.DCfAADOs.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.BcFgCmE7.js"];
const stylesheets = ["_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/Chapters.2-xWXqLw.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-BIZoZxnK.js.map
