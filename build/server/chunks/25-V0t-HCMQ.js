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
const component = async () => component_cache ??= (await import('./_page.svelte-Y_s1EmB4.js')).default;
const server_id = "src/routes/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/25.tvyHGyzg.js","_app/immutable/chunks/scheduler.C4tHwGv5.js","_app/immutable/chunks/index.CJfZO0_H.js","_app/immutable/chunks/Map.luQdoRzM.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Login.qFaIELi9.js","_app/immutable/chunks/Button.CNEXt203.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/CourseData.B7epA3AT.js","_app/immutable/chunks/each.DCfAADOs.js","_app/immutable/chunks/Path.BqA6Bw1H.js","_app/immutable/chunks/TopBar.BKJqXULj.js","_app/immutable/chunks/Footer.mO6fB1ok.js"];
const stylesheets = ["_app/immutable/assets/25.JmIb_oAw.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.B3BZZ071.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/CourseData.B7xYcrBS.css","_app/immutable/assets/Path.CrxW_Jpx.css","_app/immutable/assets/TopBar.DKgr13ca.css","_app/immutable/assets/Footer.YnXopXXL.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=25-V0t-HCMQ.js.map
