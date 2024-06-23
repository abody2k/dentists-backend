import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-CggYz5VK.js';
import { G as Grid } from './Grid-BPJ589O1.js';
import 'firebase/app';
import { f as fetchData } from './not-C58Pqu2P.js';
import 'firebase/messaging';
import { T as TopBar } from './TopBar-C1ACehmO.js';
import { F as Footer } from './Footer-ByrTMb2w.js';
import { P as Path } from './Path-BaBVNgkW.js';
import './Grid.svelte_svelte_type_style_lang-B1mwbNS_.js';
import './Button-B3OUjNaN.js';
import 'jsqr';

const css = {
  code: "nav ul.svelte-wd3vna li.svelte-wd3vna{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-wd3vna.svelte-wd3vna:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-wd3vna.svelte-wd3vna:left{font-size:20px;transition:font-size 3s}button.svelte-wd3vna.svelte-wd3vna:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.scroll-box.svelte-wd3vna.svelte-wd3vna{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;height:-moz-fit-content;height:fit-content}.scroll-box.svelte-wd3vna.svelte-wd3vna{position:absolute;top:133px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;z-index:-1}.overlay.svelte-wd3vna.svelte-wd3vna{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-wd3vna.svelte-wd3vna{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-wd3vna.svelte-wd3vna{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-wd3vna.svelte-wd3vna{text-align:center}",
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
  let numOfPages;
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-wd3vna"><li class="svelte-wd3vna" data-svelte-h="svelte-1uwlgbe">Courses</li> <li class="svelte-wd3vna" data-svelte-h="svelte-nh4gew">Fellowships</li> <li class="svelte-wd3vna" data-svelte-h="svelte-3s5t57">Contact us</li></ul></div> <div style="width: 81%; margin: auto; margin-top: 141px;">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/fellowships", txt: "Fellowships" }]
    },
    {},
    {}
  )}</div> <div class="scroll-box svelte-wd3vna">${fellowships.length > 0 ? `${validate_component(Grid, "Grid").$$render(
    $$result,
    {
      numOfPages: Math.floor(numOfPages / 10) + (numOfPages % 10 >= 1 ? 1 : 0),
      nextPage: (lastID) => {
        fetchData("n/gf", { id: lastID }).then((e) => {
          numOfPages = e.c;
          e = e.d;
          fellowships = e.map((d) => Object({
            id: d.fellowshipID,
            title: d.fellowshipName,
            duration: d.fellowshipDuration,
            text: d.fellowshipDetails,
            src: "https://echo-dentists.s3.me-central-1.amazonaws.com/fellowships/" + d.fellowshipID + "/0",
            clickHandler: () => {
              d.fellowshipID;
            }
          }));
        });
      },
      f: true,
      cardsData: fellowships
    },
    {},
    {}
  )}` : ``}</div>   ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-YDBSjQ7k.js.map
