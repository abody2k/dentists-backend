async function load({ params }) {
  try {
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
    }("n/gb", {});
    return { blogs: meta.d };
  } catch (error) {
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CQ8XcKX-.js')).default;
const server_id = "src/routes/admin/blogs/+page.server.js";
const imports = ["_app/immutable/nodes/7.DxdtqihA.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/Bar.BCgXY4Hk.js","_app/immutable/chunks/BlogCard.B0X-O2RH.js","_app/immutable/chunks/not.CMcaOXzY.js"];
const stylesheets = ["_app/immutable/assets/7.CgVoivjV.css","_app/immutable/assets/Path.B5F0-P5A.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/BlogCard.CGjbcLDd.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-BsL4Yedz.js.map
