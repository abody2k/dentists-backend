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
      return data;
    }("n/gcc", {
      id: params.course
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

const index = 24;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BjYbTg6R.js')).default;
const server_id = "src/routes/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/24.CyqtHaSo.js","_app/immutable/chunks/scheduler.Cin9khNl.js","_app/immutable/chunks/index.DcF4-v1J.js","_app/immutable/chunks/Map.ztLTGbLs.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Login.Y8nlQC0L.js","_app/immutable/chunks/not.BORTzk5v.js","_app/immutable/chunks/CourseData.0a_4_UOh.js","_app/immutable/chunks/each.B9raO-7B.js"];
const stylesheets = ["_app/immutable/assets/4.DyQl7Jej.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.CkWQVILg.css","_app/immutable/assets/CourseData.Djn5beAm.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=24-DenqXUsV.js.map
