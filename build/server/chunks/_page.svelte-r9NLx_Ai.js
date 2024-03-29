import { c as create_ssr_component, v as validate_component } from './ssr-C5Pny6Bf.js';
import { G as Grid } from './Grid-CSl3jfVE.js';
import { T as TopBar } from './TopBar-IZnBV6qo.js';
import { F as Footer } from './Footer-D3snOuZR.js';
import { P as Path } from './Path-BFI0Juiy.js';
import './Grid.svelte_svelte_type_style_lang-CANwrNOZ.js';
import './Button-DOEzoM2E.js';
import './Map-TAo5RPfk.js';

/* empty css                                                   */
const css = {
  code: "button.svelte-1d33u6:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.scroll-box.svelte-1d33u6{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;height:fit-content}.scroll-box.svelte-1d33u6{position:absolute;top:133px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;z-index:-1}.overlay.svelte-1d33u6{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-1d33u6{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-1d33u6{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-1d33u6{text-align:center}",
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
  let courses = [];
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
  $$result.css.add(css);
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div style="width: 81%; margin: auto; margin-top: 141px;">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/courses", txt: "Courses" }]
    },
    {},
    {}
  )}</div>  <div class="scroll-box svelte-1d33u6">${validate_component(Grid, "Grid").$$render(
    $$result,
    {
      f: false,
      cardsData: [
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses,
        ...courses
      ]
      // Add more card data as needed
    },
    {},
    {}
  )}</div>   ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-r9NLx_Ai.js.map
