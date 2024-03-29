async function load({ params }) {
  try {
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
    }("n/gb", {});
    return { blogs: meta.d };
  } catch (error) {
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ClwqRbuc.js')).default;
const server_id = "src/routes/blogs/+page.server.js";
const imports = ["_app/immutable/nodes/20.4U-y93ty.js","_app/immutable/chunks/scheduler.Cl0VmwpT.js","_app/immutable/chunks/index.9DdFkufZ.js","_app/immutable/chunks/each.DTRCTIt3.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/TopBar.QMrEO1W0.js","_app/immutable/chunks/Login.CumFLGQv.js","_app/immutable/chunks/Button.BODDoA1H.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.VgKLrJKv.js","_app/immutable/chunks/Path.XkzSTk77.js"];
const stylesheets = ["_app/immutable/assets/20.B6bHWV9d.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/Login.CwXO6DBA.css","_app/immutable/assets/TopBar.CnhjMo_d.css","_app/immutable/assets/Path.CrxW_Jpx.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-BTEtRyqW.js.map
