async function load({ params }) {
  try {
    const meta = await async function fetchData(url, body, res) {
      const response = await fetch("http://localhost:3000/api/" + url, {
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

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Ck4oZzU6.js')).default;
const server_id = "src/routes/blogs/+page.server.js";
const imports = ["_app/immutable/nodes/25.B4Qx6X8M.js","_app/immutable/chunks/scheduler.CiUN_2Ko.js","_app/immutable/chunks/index.koTVZFH-.js","_app/immutable/chunks/each.C83jVpGO.js","_app/immutable/chunks/BlogCard.DrV25Gdj.js","_app/immutable/chunks/not.CVT2I458.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/TopBar.C-0jlrrX.js","_app/immutable/chunks/Login.FjRI--rh.js","_app/immutable/chunks/CV.CCc1LEYG.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.DzgxOFgJ.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Path.DJJv76Y8.js"];
const stylesheets = ["_app/immutable/assets/BlogCard.DqtB0r5C.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/TopBar.CEaeWkCg.css","_app/immutable/assets/Path.B5F0-P5A.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=25-BoFZZfTr.js.map
