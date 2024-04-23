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

const index = 29;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BtfpR6XE.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/29.CRjmZFi9.js","_app/immutable/chunks/scheduler.DNJrJgMj.js","_app/immutable/chunks/index.BOq-2PnM.js","_app/immutable/chunks/Login.X-j8pFSe.js","_app/immutable/chunks/Button.BdetBZiU.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/CourseData.D_pVU0s7.js","_app/immutable/chunks/each.DMQzqXE-.js","_app/immutable/chunks/Path.DHoGLDCU.js","_app/immutable/chunks/TopBar.CoVlo9HB.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.DA-B-8L9.js","_app/immutable/chunks/Footer.Bw4COTZw.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
const stylesheets = ["_app/immutable/assets/29.CfZEGSFN.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.CwXO6DBA.css","_app/immutable/assets/Button.BOgvweB0.css","_app/immutable/assets/CourseData.D5cjlLrM.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/TopBar.CwvY1ZJ2.css","_app/immutable/assets/Footer.CbwchaWb.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=29-BEHbekCZ.js.map
