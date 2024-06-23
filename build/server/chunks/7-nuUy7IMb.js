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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Vh6Uzv_n.js')).default;
const server_id = "src/routes/admin/blogs/+page.server.js";
const imports = ["_app/immutable/nodes/7.CXSyIYnk.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/Bar.BK1J9-6c.js","_app/immutable/chunks/not.k57uuvnW.js","_app/immutable/chunks/BlogCard.DKuDiHTV.js","_app/immutable/chunks/Path.BSGNOJd8.js"];
const stylesheets = ["_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/BlogCard.DqtB0r5C.css","_app/immutable/assets/Path.B5F0-P5A.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-nuUy7IMb.js.map
