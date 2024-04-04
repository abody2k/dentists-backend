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

const index = 28;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D0j1r-7j.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/28.DcmqCzuL.js","_app/immutable/chunks/scheduler.BbzLVxRS.js","_app/immutable/chunks/index.hWlefRDD.js","_app/immutable/chunks/Map.DTKxp16X.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Login.CWmqh2nD.js","_app/immutable/chunks/Button.CwV8fbRX.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/CourseData.CYpAndlt.js","_app/immutable/chunks/each.8dtAqtyS.js","_app/immutable/chunks/Path.PF2E7Ei3.js","_app/immutable/chunks/TopBar.DesbomqE.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.Cr2jA9Wg.js","_app/immutable/chunks/Footer.BpBbSu1a.js"];
const stylesheets = ["_app/immutable/assets/28.CfZEGSFN.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.CwXO6DBA.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/CourseData.cPWHBSww.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/TopBar.xhZajSaS.css","_app/immutable/assets/Footer.D2Jc5JBN.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=28-CN_6ccB1.js.map
