async function load({ params }) {
  return {
    id: Number(params.fellowship),
    acourse: false
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DzYop_MQ.js')).default;
const server_id = "src/routes/admin/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/18.B6mZ9yOE.js","_app/immutable/chunks/scheduler.BVAlSgfp.js","_app/immutable/chunks/index.B7Z5KU1K.js","_app/immutable/chunks/Course.DYoZAAQm.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/not.DlsTAyDt.js","_app/immutable/chunks/Editor.6urfBb5A.js","_app/immutable/chunks/index.Cfnd1dJz.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Bar.CdutgMKg.js","_app/immutable/chunks/Counter.DUMiWWGP.js","_app/immutable/chunks/ButtonChild.CNyNlapg.js"];
const stylesheets = ["_app/immutable/assets/18.CWKdx4Vg.css","_app/immutable/assets/Course.C-N00sXX.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=18-DDZyIqjq.js.map
