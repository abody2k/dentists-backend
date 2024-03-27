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
const component = async () => component_cache ??= (await import('./_page.svelte-PU0X6VtE.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/28.4JlrUWtm.js","_app/immutable/chunks/scheduler.CvS8aZFR.js","_app/immutable/chunks/index.BLvvEpyq.js","_app/immutable/chunks/Map.BFxH1DHB.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Login.DxdQqImK.js","_app/immutable/chunks/Button.CxrZDlc0.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/CourseData.DR_pThqp.js","_app/immutable/chunks/each.atBuby31.js","_app/immutable/chunks/TopBar.9kEgN9-K.js","_app/immutable/chunks/Footer.BdFhdAVi.js"];
const stylesheets = ["_app/immutable/assets/28.BvlJPXd9.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.BNw2kq8_.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/CourseData.CdiXOl2T.css","_app/immutable/assets/TopBar.XgpcPV6P.css","_app/immutable/assets/Footer.BOtL2GEM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=28-DbFCBICS.js.map
