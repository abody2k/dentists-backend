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

const index = 30;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-kEPe_WPe.js')).default;
const server_id = "src/routes/test/+page.server.js";
const imports = ["_app/immutable/nodes/30.8tUu8O_6.js","_app/immutable/chunks/scheduler.CvS8aZFR.js","_app/immutable/chunks/index.BLvvEpyq.js","_app/immutable/chunks/each.atBuby31.js","_app/immutable/chunks/not.DNvn3Bfc.js"];
const stylesheets = ["_app/immutable/assets/20.DkOd5f0S.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=30-xl1xBp6A.js.map