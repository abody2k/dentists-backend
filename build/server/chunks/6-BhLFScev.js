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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-OUQw6rB7.js')).default;
const server_id = "src/routes/admin/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/6.9Gp9RWal.js","_app/immutable/chunks/scheduler.Cl0VmwpT.js","_app/immutable/chunks/index.9DdFkufZ.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/Bar.C3ipYCWx.js","_app/immutable/chunks/Course.BoetAxGC.js","_app/immutable/chunks/Editor.C3zr5_TF.js","_app/immutable/chunks/index.Bmyjiiz9.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/ButtonChild.BpA3Gjuy.js"];
const stylesheets = ["_app/immutable/assets/6.C8yfGOFZ.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/Chapters.2-xWXqLw.css","_app/immutable/assets/Videos.CcLEcSdI.css","_app/immutable/assets/Exam.BhKzey_I.css","_app/immutable/assets/Bar.ClmmHSEa.css","_app/immutable/assets/Course.BAcFydrg.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-BhLFScev.js.map
