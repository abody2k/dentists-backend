async function load({ params }) {
  try {
    console.log("these are the params");
    console.log(params);
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

const index = 34;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-kTw1EG05.js')).default;
const server_id = "src/routes/courses/[course]/+page.server.js";
const imports = ["_app/immutable/nodes/34.BGfaa2vV.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js","_app/immutable/chunks/Login.DdakBr2k.js","_app/immutable/chunks/Button.DI0ciwgW.js","_app/immutable/chunks/not.DRruyBBE.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/CourseData.CFh2tgAV.js","_app/immutable/chunks/each.CDLVB7Rj.js","_app/immutable/chunks/Path.BSGNOJd8.js","_app/immutable/chunks/Counter.CW2LT0WT.js","_app/immutable/chunks/TopBar.DIv56Ecm.js","_app/immutable/chunks/CV.Ra9kmosh.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.D3JWzLQT.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/Footer.BwO7k7kj.js"];
const stylesheets = ["_app/immutable/assets/34.CyGYugJ4.css","_app/immutable/assets/Map.FBsYl2PL.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/CourseData.CwP-A67C.css","_app/immutable/assets/ButtonChild.Do3MZG5R.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/TopBar.2oadlPRd.css","_app/immutable/assets/Footer.CbwchaWb.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=34-CpO6lues.js.map
