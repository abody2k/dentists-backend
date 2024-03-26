import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-CggYz5VK.js';
import { G as Grid } from './Grid-DEx3_Dbk.js';
import { T as TopBar } from './TopBar-BH2MSe-U.js';
import { F as Footer } from './Footer-DUdS5rPx.js';
import './Grid.svelte_svelte_type_style_lang-BnvFs_9z.js';
import './Button-nBeyctrr.js';
import './Map-L2AhRx-3.js';

const css = {
  code: "nav ul.svelte-13gxqt3 li.svelte-13gxqt3{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-13gxqt3.svelte-13gxqt3:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-13gxqt3.svelte-13gxqt3:left{font-size:20px;transition:font-size 3s}button.svelte-13gxqt3.svelte-13gxqt3:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.scroll-box.svelte-13gxqt3.svelte-13gxqt3{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);height:fit-content}.scroll-box.svelte-13gxqt3.svelte-13gxqt3{position:absolute;top:30px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);z-index:-1}.overlay.svelte-13gxqt3.svelte-13gxqt3{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-13gxqt3.svelte-13gxqt3{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-13gxqt3.svelte-13gxqt3{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-13gxqt3.svelte-13gxqt3{text-align:center}",
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
  let fellowships = [];
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-13gxqt3"><li class="svelte-13gxqt3" data-svelte-h="svelte-1uwlgbe">Courses</li> <li class="svelte-13gxqt3" data-svelte-h="svelte-nh4gew">Fellowships</li> <li class="svelte-13gxqt3" data-svelte-h="svelte-3s5t57">Contact us</li></ul></div> <div class="scroll-box svelte-13gxqt3">${validate_component(Grid, "Grid").$$render(
    $$result,
    {
      f: true,
      cardsData: [...fellowships]
      // Add more card data as needed
    },
    {},
    {}
  )}</div>   ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D3XmcViZ.js.map
