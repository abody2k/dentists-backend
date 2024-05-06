import { c as create_ssr_component, v as validate_component } from './ssr-CZ3Mxc3I.js';
import { G as Grid } from './Grid-UYANU7UO.js';
import { B as ButtonChild } from './ButtonChild-DSY2k23W.js';
import { B as Bar } from './Bar-DpbUV2mJ.js';
import './Grid.svelte_svelte_type_style_lang-BheJ4Bv5.js';
import './Button-jyMbdDHw.js';

const css = {
  code: "button.svelte-1clgb09:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.scroll-box.svelte-1clgb09{position:absolute;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;height:fit-content}.scroll-box.svelte-1clgb09{position:absolute;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease}.overlay.svelte-1clgb09{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-1clgb09{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-1clgb09{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-1clgb09{text-align:center}",
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
  let showArchivedOnly = false;
  let fellowships = [];
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
  return `${``} ${validate_component(Bar, "Bar").$$render($$result, { title: "Fellowships" }, {}, {})} <div class="scroll-box svelte-1clgb09"><div style="display: flex;gap:30px;justify-content:right;">${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      child: `
        <div style="display:flex;gap:10px;">
          <img src ="/add.png" width="20">
          <div>إنشاء زمالة</div>
          </div>
        
        `,
      clickHandler: () => {
        location.href = "/admin/fellowships/new";
      }
    },
    {},
    {}
  )} ${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      child: `
          <div style="display:flex;gap:10px;">
            <img>
            <div>${showArchivedOnly ? "الزمالات غير المؤرشفة" : "عرض الزمالات المؤرشفة"}</div>
            </div>
          
          `,
      clickHandler: () => {
        showArchivedOnly = !showArchivedOnly;
      }
    },
    {},
    {}
  )}</div> ${validate_component(Grid, "Grid").$$render(
    $$result,
    {
      f: true,
      showArchivedOnly,
      cardsData: [...fellowships]
      // Add more card data as needed
    },
    {},
    {}
  )}</div>  `;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C7rGV78g.js.map
