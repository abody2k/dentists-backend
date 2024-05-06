async function load({ params }) {
  const meta = await async function fetchData(url, body, res) {
    const response = await fetch("http://18.207.0.24:3000/api/" + url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
        //  "Access-Control-Allow-Credentials":true
        // Add any additional headers as needed
      },
      // Replace with your actual JSON payload
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (res)
      res();
    return data;
  }("n/gcf", {
    id: params.fellowship
  });
  return meta.d;
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 30;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BKhqzd3h.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/30.BYL7hYtC.js","_app/immutable/chunks/scheduler.B1GUV8t7.js","_app/immutable/chunks/index.DTYR2YpX.js","_app/immutable/chunks/Login.C5S-4RQO.js","_app/immutable/chunks/Button.Dn9iqIVB.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/CourseData.B5k8MUvR.js","_app/immutable/chunks/each.C80E9-Vo.js","_app/immutable/chunks/Path.BInPU96K.js","_app/immutable/chunks/TopBar.Domk7Z6t.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.D9ByJLzS.js","_app/immutable/chunks/Footer.AKlzkPea.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
const stylesheets = ["_app/immutable/assets/30.CfZEGSFN.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.CwXO6DBA.css","_app/immutable/assets/Button.BOgvweB0.css","_app/immutable/assets/CourseData.B3pmle2q.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/TopBar.CwvY1ZJ2.css","_app/immutable/assets/Footer.CbwchaWb.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=30-C1EtQzlt.js.map
