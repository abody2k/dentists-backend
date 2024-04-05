async function load({ params }) {
  try {
    console.log("these are the params");
    console.log(params);
    return {
      questions: [
        {
          q: "okok",
          op: ["optionkokko", "optionok", "dsd"]
        },
        {
          q: "okok",
          op: ["optionkokko", "optionok", "dsd"]
        },
        {
          q: "okok",
          op: ["optionkokko", "optionok", "dsd"]
        }
      ]
    };
  } catch (error) {
    console.log(error);
    return { err: 404 };
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 26;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2Ind9R5K.js')).default;
const server_id = "src/routes/courses/[course]/[examType]/[examID]/+page.server.js";
const imports = ["_app/immutable/nodes/26.CdmGKIB1.js","_app/immutable/chunks/scheduler.DkkY9i-5.js","_app/immutable/chunks/index.D9rRt9oS.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=26-_uLo0OLy.js.map
