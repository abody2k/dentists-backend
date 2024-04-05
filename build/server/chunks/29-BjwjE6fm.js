async function load({ params }) {
  const meta = await async function fetchData(url, body, res) {
    const response = await fetch("https://dentists-backend.onrender.com/api/" + url, {
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

const index = 29;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-KnIjnZqg.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/29.grNTMQ1Y.js","_app/immutable/chunks/scheduler.DkkY9i-5.js","_app/immutable/chunks/index.D9rRt9oS.js","_app/immutable/chunks/Map.DenXnkWZ.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Login.DYr9JOov.js","_app/immutable/chunks/Button.BV-MtdzY.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/CourseData.BEJ5Z4Gc.js","_app/immutable/chunks/each.B4zj3C_D.js","_app/immutable/chunks/Path.C-dLuUsg.js","_app/immutable/chunks/TopBar.BxjJxQ2i.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.BYym3Kme.js","_app/immutable/chunks/Footer.Ds74jWCY.js"];
const stylesheets = ["_app/immutable/assets/29.CfZEGSFN.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.CwXO6DBA.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/CourseData.DsOw2Ucm.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/TopBar.xhZajSaS.css","_app/immutable/assets/Footer.CbwchaWb.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=29-BjwjE6fm.js.map
