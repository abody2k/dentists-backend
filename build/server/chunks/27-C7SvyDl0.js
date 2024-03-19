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

const index = 27;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DVnq0o8w.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/27.B0TrBPTW.js","_app/immutable/chunks/scheduler.QnGaJ3C6.js","_app/immutable/chunks/index.CP1mFRt2.js","_app/immutable/chunks/Login.DuLYskjt.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/CourseData.CoZzJ7zX.js","_app/immutable/chunks/each.CHFcAGEY.js"];
const stylesheets = ["_app/immutable/assets/4.DyQl7Jej.css","_app/immutable/assets/Login.DmRDAAim.css","_app/immutable/assets/CourseData.Djn5beAm.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=27-C7SvyDl0.js.map
