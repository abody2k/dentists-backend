async function load({ params }) {
  try {
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
        ;
      return data;
    }("n/gb", {});
    return { blogs: meta.d };
  } catch (error) {
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 45;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ZAIEEeDn.js')).default;
const server_id = "src/routes/test/+page.server.js";
const imports = ["_app/immutable/nodes/45.DdEhOGgt.js","_app/immutable/chunks/scheduler.BM2JUaET.js","_app/immutable/chunks/each.6y9O-auE.js","_app/immutable/chunks/index.DjdkDzVp.js","_app/immutable/chunks/xlsx.CqXLKV2Q.js","_app/immutable/chunks/not.CMbolwtH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
const stylesheets = ["_app/immutable/assets/Button.C36bBbuJ.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=45-lbwmK_GF.js.map
