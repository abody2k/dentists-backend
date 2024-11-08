import { c as create_ssr_component, v as validate_component } from './ssr-JWmjUSZd.js';
import 'firebase/app';
import 'firebase/messaging';
import { C as CourseData } from './CourseData-DnSdOBDo.js';
import { T as TopBar } from './TopBar-BR8uVVmE.js';
import { F as Footer } from './Footer-T5y9M77D.js';
import './Counter-CqonFETi.js';
import 'jsqr';

const css = {
  code: "button.svelte-1gjvtnn:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.scroll-box.svelte-1gjvtnn{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;height:-moz-fit-content;height:fit-content}.scroll-box.svelte-1gjvtnn{position:absolute;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease}.overlay.svelte-1gjvtnn{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-1gjvtnn{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-1gjvtnn{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-1gjvtnn{text-align:center}",
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
  console.log(data);
  function updateScrollBoxHeight() {
    const scrollBoxElement = document.querySelector(".scroll-box");
    if (scrollBoxElement) {
      console.log(getComputedStyle(scrollBoxElement).height.split("px")[0]);
      scrollBoxHeight = Number(getComputedStyle(scrollBoxElement).height.split("px")[0]);
    }
  }
  let scrollBoxHeight = 0;
  areDeveloperToolsOpen().then((open) => {
    if (open) ;
    else {
      console.log(
        "Developer tools are closed."
      );
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="scroll-box svelte-1gjvtnn">${validate_component(CourseData, "CourseData").$$render(
    $$result,
    {
      ID: meta.fellowshipID,
      onSize: updateScrollBoxHeight,
      c: false,
      description: meta.fellowshipDetails ? meta.fellowshipDetails : "",
      title: meta.fellowshipName,
      duration: meta.fellowshipDuration,
      src: "https://echo-dentists.s3.me-central-1.amazonaws.com/fellowships/" + meta.fellowshipID + "/0",
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
//# sourceMappingURL=_page.svelte-WfegccDZ.js.map
