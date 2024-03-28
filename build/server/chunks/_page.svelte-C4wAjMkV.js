import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './ssr-C5Pny6Bf.js';
import { C as CourseData } from './CourseData-LXDNjRvT.js';
import { T as TopBar } from './TopBar-BbOLIYnt.js';
import { F as Footer } from './Footer-BSIt6fBV.js';
import './Map-TAo5RPfk.js';

const css = {
  code: "nav ul.svelte-f1vb88 li.svelte-f1vb88{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-f1vb88.svelte-f1vb88:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-f1vb88.svelte-f1vb88:left{font-size:20px;transition:font-size 3s}.header-image.svelte-f1vb88.svelte-f1vb88{width:100%;height:700px;background:url('https://ugc.futurelearn.com/uploads/images/6d/a3/header_6da3ec09-3f50-445c-b36a-4c26d504d958.jpg') center/cover no-repeat;background-size:cover;position:absolute;top:0;left:0px;z-index:-2}button.svelte-f1vb88.svelte-f1vb88:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.image-overlay.svelte-f1vb88.svelte-f1vb88{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(46, 59, 111, 0.445)}.scroll-box.svelte-f1vb88.svelte-f1vb88{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;height:fit-content}.scroll-box.svelte-f1vb88.svelte-f1vb88{position:absolute;top:550px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease}.image-text.svelte-f1vb88.svelte-f1vb88{position:absolute;top:60px;left:50%;transform:translateX(-50%);text-align:center;padding:20px;color:#fff;font-size:1.5em;font-weight:bold}.overlay.svelte-f1vb88.svelte-f1vb88{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-f1vb88.svelte-f1vb88{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-f1vb88.svelte-f1vb88{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-f1vb88.svelte-f1vb88{text-align:center}",
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
  let aboutUS = "";
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-f1vb88"><li class="svelte-f1vb88" data-svelte-h="svelte-1mwjlf0">Courses</li> <li class="svelte-f1vb88" data-svelte-h="svelte-nh4gew">Fellowships</li> <li class="svelte-f1vb88" data-svelte-h="svelte-3s5t57">Contact us</li></ul></div> <div class="header-image svelte-f1vb88"><div class="image-overlay svelte-f1vb88"><div class="image-text svelte-f1vb88"><p style="position:relative;right:70px; " data-svelte-h="svelte-1mkz37p">About us</p> <p style="font-weight: 300;text-align:left;font-size: 20px; ">${escape(aboutUS)}</p></div></div></div> <div class="scroll-box svelte-f1vb88">${validate_component(CourseData, "CourseData").$$render(
    $$result,
    {
      ID: meta.fellowshipID,
      c: false,
      description: data.fellowshipDetails ? data.text : "",
      title: data.fellowshipName,
      duration: data.fellowshipDuration,
      src: "https://dentists-iq.s3.amazonaws.com/fellowships/" + meta.fellowshipID,
      func() {
        const a = document.createElement("a");
        a.href = "/contact-us";
        a.click();
      }
    },
    {},
    {}
  )}</div>   ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C4wAjMkV.js.map