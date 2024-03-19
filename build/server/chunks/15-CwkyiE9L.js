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
const component = async () => component_cache ??= (await import('./_page.svelte-CllK5nH3.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/chapters/+page.server.js";
const imports = ["_app/immutable/nodes/15.D_AIDeTu.js","_app/immutable/chunks/scheduler.QnGaJ3C6.js","_app/immutable/chunks/index.CP1mFRt2.js","_app/immutable/chunks/Chapters.B-UBgr0x.js","_app/immutable/chunks/each.CHFcAGEY.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.vnqPaF2B.js"];
const stylesheets = ["_app/immutable/assets/Button.XZYYTg8B.css","_app/immutable/assets/Chapters.CZK-XiLN.css","_app/immutable/assets/Bar.ClmmHSEa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-CwkyiE9L.js.map
