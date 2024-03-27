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
const component = async () => component_cache ??= (await import('./_page.svelte-DLywmQ58.js')).default;
const server_id = "src/routes/blogs/+page.server.js";
const imports = ["_app/immutable/nodes/20.B7NPcU9X.js","_app/immutable/chunks/scheduler.C4tHwGv5.js","_app/immutable/chunks/index.CJfZO0_H.js","_app/immutable/chunks/each.DCfAADOs.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/TopBar.D9t-qXuj.js","_app/immutable/chunks/Login.qFaIELi9.js","_app/immutable/chunks/Button.CNEXt203.js","_app/immutable/chunks/Path.BqA6Bw1H.js"];
const stylesheets = ["_app/immutable/assets/20.B6bHWV9d.css","_app/immutable/assets/TopBar.D_BAeZFQ.css","_app/immutable/assets/Login.B3BZZ071.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/Path.CrxW_Jpx.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-BvupICFq.js.map
