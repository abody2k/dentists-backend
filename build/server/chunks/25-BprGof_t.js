async function load({ params }) {
  try {
    console.log("these are the params");
    console.log(params);
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
    }("n/gcc", {
      id: params.course
    });
    return meta.d;
  } catch (error) {
    console.log(error);
    return { err: 404 };
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DdTJb-qa.js')).default;
const server_id = "src/routes/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/25.Wq20Fjh-.js","_app/immutable/chunks/scheduler.CvS8aZFR.js","_app/immutable/chunks/index.BLvvEpyq.js","_app/immutable/chunks/Map.BFxH1DHB.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Login.Vg29bVck.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/CourseData.Dy675Hqb.js","_app/immutable/chunks/each.atBuby31.js","_app/immutable/chunks/TopBar.CMJve3Gt.js","_app/immutable/chunks/Footer.BdFhdAVi.js"];
const stylesheets = ["_app/immutable/assets/25.JmIb_oAw.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.CkWQVILg.css","_app/immutable/assets/CourseData.Djn5beAm.css","_app/immutable/assets/TopBar.BZfI0MU1.css","_app/immutable/assets/Footer.BOtL2GEM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=25-BprGof_t.js.map
