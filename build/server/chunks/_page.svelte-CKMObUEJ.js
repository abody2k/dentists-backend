import { c as create_ssr_component } from './ssr-CZ3Mxc3I.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  (async function fetchData(url, body, res) {
    const response = await fetch("https://dentists-backend.onrender.com/api/" + url, {
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
  })("u/gexqf", {
    fellowshipID: Number(params.fellowship),
    examType: Number(params.examType),
    examID: Number(params.examID)
  }).then((d) => {
    console.log(d);
  }).catch((e) => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ``;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CKMObUEJ.js.map
