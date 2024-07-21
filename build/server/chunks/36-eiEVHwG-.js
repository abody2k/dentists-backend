async function load({ params }) {
  try {
    console.log("these are the params");
    console.log(params);
    const meta = await async function fetchData(url, body, res) {
      const response = await fetch("https://echo-dent.net/api/" + url, {
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
        ;
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

const index = 36;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D6owvsu-.js')).default;
const server_id = "src/routes/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/36.CkuW0bs5.js","_app/immutable/chunks/scheduler._qeGDSQ8.js","_app/immutable/chunks/index.CYIwKu5b.js","_app/immutable/chunks/Login.J4XuPzUD.js","_app/immutable/chunks/Button.N_njOHxt.js","_app/immutable/chunks/not.D11_haEW.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/CourseData.De49_kVv.js","_app/immutable/chunks/each.DQBLYXJl.js","_app/immutable/chunks/Path.GsdjFzql.js","_app/immutable/chunks/Counter.B4AqWYeA.js","_app/immutable/chunks/TopBar.roG485J5.js","_app/immutable/chunks/CV.C7Iw_hII.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.BktzVClu.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/UserProfile.DQTxzFPy.js","_app/immutable/chunks/Footer.BVYkRAc6.js","_app/immutable/chunks/Map.Ch8XtE2G.js"];
const stylesheets = ["_app/immutable/assets/36.CyGYugJ4.css","_app/immutable/assets/Map.FBsYl2PL.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/CourseData.CwP-A67C.css","_app/immutable/assets/ButtonChild.DH1a7DjA.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/TopBar.CjMYxZKd.css","_app/immutable/assets/UserProfile.4L8_CXoz.css","_app/immutable/assets/Footer.CbwchaWb.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=36-eiEVHwG-.js.map
