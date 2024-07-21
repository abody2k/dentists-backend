async function load({ params }) {
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

const index = 39;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-WfegccDZ.js')).default;
const server_id = "src/routes/fellowships/[fellowship]/+page.server.js";
const imports = ["_app/immutable/nodes/39.D32NuLvw.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/Login.1pTKjR1K.js","_app/immutable/chunks/Button.C-vcSyKs.js","_app/immutable/chunks/not.CMcaOXzY.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/CourseData._9Z0ocg4.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/Path.wXajBuZH.js","_app/immutable/chunks/Counter.D6nXcS5G.js","_app/immutable/chunks/TopBar.CNiMp6F7.js","_app/immutable/chunks/CV.CYGTTrCh.js","_app/immutable/chunks/TopBar.svelte_svelte_type_style_lang.DVQdipgU.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/UserProfile.BRrWzgCY.js","_app/immutable/chunks/Footer.D-nlpY6X.js","_app/immutable/chunks/Map.kwzuholH.js"];
const stylesheets = ["_app/immutable/assets/39._ckV844C.css","_app/immutable/assets/Map.FBsYl2PL.css","_app/immutable/assets/Login.D1YvyJ3V.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/CourseData.CwP-A67C.css","_app/immutable/assets/ButtonChild.DH1a7DjA.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/Counter.DetUAIW6.css","_app/immutable/assets/TopBar.zQ2r4Xkf.css","_app/immutable/assets/UserProfile.4L8_CXoz.css","_app/immutable/assets/Footer.CbwchaWb.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=39-CpIJGvEi.js.map
