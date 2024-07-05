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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DPHscl9d.js')).default;
const server_id = "src/routes/admin/blogs/+page.server.js";
const imports = ["_app/immutable/nodes/7.DW6-yMog.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.C7Xo_3aa.js","_app/immutable/chunks/index.NYh16Rov.js","_app/immutable/chunks/each.DGNUWULW.js","_app/immutable/chunks/Bar.CWQnAVva.js","_app/immutable/chunks/not.u4UXoo5E.js","_app/immutable/chunks/BlogCard.N-a1nlCN.js","_app/immutable/chunks/Path.BoLg3_LT.js"];
const stylesheets = ["_app/immutable/assets/7.CgVoivjV.css","_app/immutable/assets/Button.BuICBtmV.css","_app/immutable/assets/Bar.BNHf8-ew.css","_app/immutable/assets/NotificationBubble.DM2sZayM.css","_app/immutable/assets/BlogCard.CGjbcLDd.css","_app/immutable/assets/Path.B5F0-P5A.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-DE8tolod.js.map
