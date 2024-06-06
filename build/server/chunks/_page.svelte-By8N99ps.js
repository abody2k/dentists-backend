import { c as create_ssr_component } from './ssr-CggYz5VK.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  (async function fetchData(url, body, res) {
    const response = await fetch("http://3.28.252.173:3000/api/" + url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      //  "Access-Control-Allow-Credentials":true
      // Add any additional headers as needed
      // Replace with your actual JSON payload
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data2 = await response.json();
    if (res)
      res();
    return data2;
  })("u/gexqc", {
    courseID: Number(data.params.course),
    examType: Number(data.params.examType),
    examID: Number(data.params.examID)
  }).then((d) => {
    console.log(d);
  }).catch((e) => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ``;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-By8N99ps.js.map