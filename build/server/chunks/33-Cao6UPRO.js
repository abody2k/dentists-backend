async function load({ params }) {
  const meta = await async function fetchData(url, body, res) {
    const response = await fetch("http://3.29.235.228:3000/api/" + url, {
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
  }("u/gexq", {
    examID: params.exam
  });
  return meta.d;
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 33;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-eSB_uWO-.js')).default;
const server_id = "src/routes/exams/[exam]/+page.server.js";
const imports = ["_app/immutable/nodes/33.ZoCPSEBM.js","_app/immutable/chunks/scheduler.BVAlSgfp.js","_app/immutable/chunks/index.B7Z5KU1K.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=33-Cao6UPRO.js.map
