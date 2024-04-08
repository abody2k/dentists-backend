import { c as create_ssr_component, v as validate_component } from './ssr-CZ3Mxc3I.js';
import { C as CourseData } from './CourseData-CQJ5D_6b.js';
import { T as TopBar } from './TopBar-D1jo6iWx.js';
import { F as Footer } from './Footer-DnSQU3js.js';
import './Map-DvJS5AiN.js';

const css = {
  code: "button.svelte-1yvas6s:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.scroll-box.svelte-1yvas6s{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;height:fit-content}.scroll-box.svelte-1yvas6s{position:absolute;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease}.overlay.svelte-1yvas6s{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-1yvas6s{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-1yvas6s{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-1yvas6s{text-align:center}",
  map: null
};
function areDeveloperToolsOpen() {
  return new Promise((resolve) => {
    const devtools = /./;
    devtools.toString = function() {
      resolve(true);
    };
    console.log("%c", devtools);
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let meta = { ...data };
  console.log("this is meta ");
  console.log(meta);
  function updateScrollBoxHeight() {
    const scrollBoxElement = document.querySelector(".scroll-box");
    if (scrollBoxElement) {
      console.log(getComputedStyle(scrollBoxElement).height.split("px")[0]);
      scrollBoxHeight = Number(getComputedStyle(scrollBoxElement).height.split("px")[0]);
    }
  }
  let scrollBoxHeight = 0;
  areDeveloperToolsOpen().then((open) => {
    if (open)
      ;
    else {
      console.log(
        "Developer tools are closed."
      );
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="scroll-box svelte-1yvas6s">${validate_component(CourseData, "CourseData").$$render(
    $$result,
    {
      ID: meta.fellowshipID,
      onSize: updateScrollBoxHeight,
      c: false,
      description: data.fellowshipDetails ? data.text : "",
      title: data.fellowshipName,
      duration: data.fellowshipDuration,
      src: "https://dentists-iq.s3.amazonaws.com/fellowships/" + meta.fellowshipID + "/0",
      func() {
        const a = document.createElement("a");
        a.href = "/contact-us";
        a.click();
      }
    },
    {},
    {}
  )}</div>   ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight: scrollBoxHeight + 200 }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-rp0Hktb5.js.map
