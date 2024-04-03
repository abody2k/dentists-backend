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
const component = async () => component_cache ??= (await import('./_page.svelte-BwbveUGp.js')).default;
const server_id = "src/routes/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/25.cRbmloEa.js","_app/immutable/chunks/scheduler.BbzLVxRS.js","_app/immutable/chunks/index.hWlefRDD.js","_app/immutable/chunks/Map.DTKxp16X.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/Login.CWmqh2nD.js","_app/immutable/chunks/Button.CwV8fbRX.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/CourseData.BIs9KShV.js","_app/immutable/chunks/each.8dtAqtyS.js","_app/immutable/chunks/Path.PF2E7Ei3.js","_app/immutable/chunks/TopBar.DesbomqE.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.Cr2jA9Wg.js","_app/immutable/chunks/Footer.BpBbSu1a.js"];
const stylesheets = ["_app/immutable/assets/25.DeOFCgv9.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.CwXO6DBA.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/CourseData.cPWHBSww.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/TopBar.xhZajSaS.css","_app/immutable/assets/Footer.D2Jc5JBN.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=25-heqAA4vl.js.map
