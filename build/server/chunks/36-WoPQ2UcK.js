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
const imports = ["_app/immutable/nodes/36.wBbq9OPp.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/Login.CWEXk8M4.js","_app/immutable/chunks/Button.C-vcSyKs.js","_app/immutable/chunks/not.BGxdCePc.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/CourseData.DAdaCNeV.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/Path.wXajBuZH.js","_app/immutable/chunks/Counter.D6nXcS5G.js","_app/immutable/chunks/TopBar.BMtq2ppq.js","_app/immutable/chunks/CV.C7YCE7VC.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.DgbkZdeH.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/UserProfile.DQBEZvFf.js","_app/immutable/chunks/Footer.D-nlpY6X.js","_app/immutable/chunks/Map.kwzuholH.js"];
const stylesheets = ["_app/immutable/assets/36.CyGYugJ4.css","_app/immutable/assets/Map.FBsYl2PL.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/CourseData.CwP-A67C.css","_app/immutable/assets/ButtonChild.DH1a7DjA.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/TopBar.BpVWfcgv.css","_app/immutable/assets/UserProfile.4L8_CXoz.css","_app/immutable/assets/Footer.CbwchaWb.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=36-WoPQ2UcK.js.map
