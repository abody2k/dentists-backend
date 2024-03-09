async function load({ params }) {
  try {
    const meta = await async function fetchData(url, body, res) {
      const response = await fetch("http://localhost:3000/" + url, {
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
      return data.d;
    }("n/gpp", {
      code: params.code
    });
    return meta.d;
  } catch (error) {
    location.href = "/404";
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-sY9sRMaY.js')).default;
const server_id = "src/routes/codes/[code]/+page.server.js";
const imports = ["_app/immutable/nodes/21.8hl2TnZB.js","_app/immutable/chunks/scheduler.Cin9khNl.js","_app/immutable/chunks/index.DcF4-v1J.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=21-DPKAL-Rb.js.map
