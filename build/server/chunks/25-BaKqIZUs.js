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
const component = async () => component_cache ??= (await import('./_page.svelte-P9N1bjoy.js')).default;
const server_id = "src/routes/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/25.DJ6Xln0l.js","_app/immutable/chunks/scheduler.DkkY9i-5.js","_app/immutable/chunks/index.D9rRt9oS.js","_app/immutable/chunks/Map.pJQpoZ4a.js","_app/immutable/chunks/30.edQw-CpS.js","_app/immutable/chunks/Login.DYr9JOov.js","_app/immutable/chunks/Button.BV-MtdzY.js","_app/immutable/chunks/not.DNvn3Bfc.js","_app/immutable/chunks/CourseData.DLacGizN.js","_app/immutable/chunks/each.B4zj3C_D.js","_app/immutable/chunks/Path.C-dLuUsg.js","_app/immutable/chunks/TopBar.BxjJxQ2i.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.BYym3Kme.js","_app/immutable/chunks/Footer.C43TtymX.js"];
const stylesheets = ["_app/immutable/assets/25.Dz5VQmp8.css","_app/immutable/assets/Map.DfZ1UeR6.css","_app/immutable/assets/Login.CwXO6DBA.css","_app/immutable/assets/Button.kN-r1gjq.css","_app/immutable/assets/CourseData.DsOw2Ucm.css","_app/immutable/assets/ButtonChild.DfM9dHgI.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/TopBar.xhZajSaS.css","_app/immutable/assets/Footer.CbwchaWb.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=25-BaKqIZUs.js.map
