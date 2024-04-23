import { c as create_ssr_component, v as validate_component, f as add_attribute } from './ssr-CZ3Mxc3I.js';
import { G as Grid } from './Grid-iohgKpTQ.js';
import { T as TopBar } from './TopBar-D1jo6iWx.js';
import { F as Footer } from './Footer-C1IKyxoe.js';
import { P as Path } from './Path-CggFG0Zs.js';
import './Grid.svelte_svelte_type_style_lang-g4I-R6SM.js';
import './Button-jyMbdDHw.js';

const css = {
  code: "nav ul.svelte-9y3fzb li.svelte-9y3fzb{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-9y3fzb.svelte-9y3fzb:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-9y3fzb.svelte-9y3fzb:left{font-size:20px;transition:font-size 3s}button.svelte-9y3fzb.svelte-9y3fzb:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.scroll-box.svelte-9y3fzb.svelte-9y3fzb{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;height:fit-content}.scroll-box.svelte-9y3fzb.svelte-9y3fzb{position:absolute;top:133px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;z-index:-1}.overlay.svelte-9y3fzb.svelte-9y3fzb{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-9y3fzb.svelte-9y3fzb{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-9y3fzb.svelte-9y3fzb{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-9y3fzb.svelte-9y3fzb{text-align:center}",
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-9y3fzb"><li class="svelte-9y3fzb" data-svelte-h="svelte-1uwlgbe">Courses</li> <li class="svelte-9y3fzb" data-svelte-h="svelte-nh4gew">Fellowships</li> <li class="svelte-9y3fzb" data-svelte-h="svelte-3s5t57">Contact us</li></ul></div> <div style="width: 81%; margin: auto; margin-top: 141px;">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/fellowships", txt: "Fellowships" }]
    },
    {},
    {}
  )}</div> <div class="scroll-box svelte-9y3fzb">${validate_component(Grid, "Grid").$$render(
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
//# sourceMappingURL=_page.svelte-CITARTZu.js.map
