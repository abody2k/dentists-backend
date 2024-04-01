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
const component = async () => component_cache ??= (await import('./_page.svelte-CRpuEA92.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/28.D_2kjSHo.js","_app/immutable/chunks/scheduler.BbzLVxRS.js","_app/immutable/chunks/index.hWlefRDD.js","_app/immutable/chunks/Map.DTKxp16X.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Login.C97qNtR_.js","_app/immutable/chunks/Button.BgdUcxJ0.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/CourseData.AbcP4s0z.js","_app/immutable/chunks/each.8dtAqtyS.js","_app/immutable/chunks/Path.OcRRIYkE.js","_app/immutable/chunks/TopBar.0ERs12Zf.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.6dgiQTiv.js","_app/immutable/chunks/Footer.D7712H6E.js"];
const stylesheets = ["_app/immutable/assets/28.BEMn9P_y.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.CwXO6DBA.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/CourseData.CyzqvNff.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css","_app/immutable/assets/Path.CrxW_Jpx.css","_app/immutable/assets/TopBar.DMaEMymL.css","_app/immutable/assets/Footer.D2Jc5JBN.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=28-D554Pb2y.js.map
