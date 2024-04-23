async function load({ params }) {
  try {
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
const component = async () => component_cache ??= (await import('./_page.svelte-D7VQQe9Z.js')).default;
const server_id = "src/routes/blogs/+page.server.js";
const imports = ["_app/immutable/nodes/20.CInA5nNv.js","_app/immutable/chunks/scheduler.DNJrJgMj.js","_app/immutable/chunks/index.BOq-2PnM.js","_app/immutable/chunks/each.DMQzqXE-.js","_app/immutable/chunks/not.DyS5IBO6.js","_app/immutable/chunks/TopBar.CoVlo9HB.js","_app/immutable/chunks/Login.X-j8pFSe.js","_app/immutable/chunks/Button.BdetBZiU.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.DA-B-8L9.js","_app/immutable/chunks/Path.DHoGLDCU.js"];
const stylesheets = ["_app/immutable/assets/20.B6bHWV9d.css","_app/immutable/assets/Button.BOgvweB0.css","_app/immutable/assets/Login.CwXO6DBA.css","_app/immutable/assets/TopBar.CwvY1ZJ2.css","_app/immutable/assets/Path.B5F0-P5A.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-DKUMlUdg.js.map
