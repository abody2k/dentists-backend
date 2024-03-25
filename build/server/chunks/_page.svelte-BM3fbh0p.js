import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './ssr-CggYz5VK.js';
import { G as Grid } from './Grid-CfPdak6n.js';
import { T as TopBar } from './TopBar-8FAiQmrX.js';
import { F as Footer } from './Footer-DUdS5rPx.js';
import './Grid.svelte_svelte_type_style_lang-DMZJggjU.js';
import './Button-CQyzae5M.js';
import './Map-L2AhRx-3.js';

const css = {
  code: "nav ul.svelte-1v0ji1y li.svelte-1v0ji1y{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-1v0ji1y.svelte-1v0ji1y:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-1v0ji1y.svelte-1v0ji1y:left{font-size:20px;transition:font-size 3s}.header-image.svelte-1v0ji1y.svelte-1v0ji1y{width:100%;height:700px;background:url('https://ugc.futurelearn.com/uploads/images/6d/a3/header_6da3ec09-3f50-445c-b36a-4c26d504d958.jpg') center/cover no-repeat;background-size:cover;position:absolute;top:0;left:0px;z-index:-2}button.svelte-1v0ji1y.svelte-1v0ji1y:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.image-overlay.svelte-1v0ji1y.svelte-1v0ji1y{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(46, 59, 111, 0.445)}.scroll-box.svelte-1v0ji1y.svelte-1v0ji1y{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);height:fit-content}.scroll-box.svelte-1v0ji1y.svelte-1v0ji1y{position:absolute;top:550px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);z-index:-1}.image-text.svelte-1v0ji1y.svelte-1v0ji1y{position:absolute;top:60px;left:50%;transform:translateX(-50%);text-align:center;padding:20px;color:#fff;font-size:1.5em;font-weight:bold}.overlay.svelte-1v0ji1y.svelte-1v0ji1y{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-1v0ji1y.svelte-1v0ji1y{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-1v0ji1y.svelte-1v0ji1y{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-1v0ji1y.svelte-1v0ji1y{text-align:center}",
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
  let aboutUS = "";
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-1v0ji1y"><li class="svelte-1v0ji1y" data-svelte-h="svelte-1uwlgbe">Courses</li> <li class="svelte-1v0ji1y" data-svelte-h="svelte-nh4gew">Fellowships</li> <li class="svelte-1v0ji1y" data-svelte-h="svelte-3s5t57">Contact us</li></ul></div> <div class="header-image svelte-1v0ji1y"><div class="image-overlay svelte-1v0ji1y"><div class="image-text svelte-1v0ji1y"><p style="position:relative;right:70px; " data-svelte-h="svelte-1mkz37p">About us</p> <p style="font-weight: 300;text-align:left;font-size: 20px; ">${escape(aboutUS)}</p></div></div></div> <div class="scroll-box svelte-1v0ji1y">${validate_component(Grid, "Grid").$$render(
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
//# sourceMappingURL=_page.svelte-BM3fbh0p.js.map
