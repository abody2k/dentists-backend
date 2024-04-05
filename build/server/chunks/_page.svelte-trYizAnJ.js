import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-CZ3Mxc3I.js';
import { G as Grid } from './Grid-J0NkomXX.js';
import { M as Map } from './Map-DvJS5AiN.js';
import { B as ButtonChild } from './ButtonChild-D7UN9JNq.js';
import { T as TopBar } from './TopBar-a81BOzeK.js';
import './Grid.svelte_svelte_type_style_lang-oTrQDMM3.js';
import './Button-CQTl_0P6.js';

const css = {
  code: ".header-image.svelte-fbpaz8{width:100%;height:700px;background:url('https://ugc.futurelearn.com/uploads/images/6d/a3/header_6da3ec09-3f50-445c-b36a-4c26d504d958.jpg') center/cover no-repeat;background-size:cover;position:absolute;top:0;left:0px;z-index:-2}button.svelte-fbpaz8:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.image-overlay.svelte-fbpaz8{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(46, 59, 111, 0.445)}.scroll-box.svelte-fbpaz8{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);height:fit-content}.scroll-box.svelte-fbpaz8{position:absolute;top:550px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2)}.footer-container.svelte-fbpaz8{background-color:darkgreen;display:flex;justify-content:space-between;align-items:center;width:100%;position:absolute;overflow-x:hidden;height:430px;top:2990px;z-index:-1}.map-box.svelte-fbpaz8{width:50%;height:200px;background-color:#fff}.social-media-box.svelte-fbpaz8{display:flex}.social-icon.svelte-fbpaz8{display:inline-block;padding:10px;margin-right:10px;background-color:#fff;color:darkgreen;text-decoration:none;border-radius:5px}.image-text.svelte-fbpaz8{position:absolute;top:60px;left:50%;transform:translateX(-50%);text-align:center;padding:20px;color:#fff;font-size:1.5em;font-weight:bold}.overlay.svelte-fbpaz8{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-fbpaz8{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-fbpaz8{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-fbpaz8{text-align:center}",
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="header-image svelte-fbpaz8"><div class="image-overlay svelte-fbpaz8"><div class="image-text svelte-fbpaz8"><p style="position:relative;right:70px; " data-svelte-h="svelte-1mkz37p">About us</p> <p style="font-weight: 300;text-align:left;font-size: 20px; ">${escape(aboutUS)}</p></div></div></div> <div class="scroll-box svelte-fbpaz8"><div style="display: flex;gap:30px">${validate_component(ButtonChild, "ButtonChild").$$render(
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
  )}</div>   <div class="footer-container svelte-fbpaz8" style="${"top:" + escape(scrollBoxHeight + 690, true) + "px;"}"><div class="map-box svelte-fbpaz8">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div> <div class="social-media-box svelte-fbpaz8" data-svelte-h="svelte-1pdgfgt"><a href="#" class="social-icon svelte-fbpaz8">Facebook</a> <a href="#" class="social-icon svelte-fbpaz8">Twitter</a> <a href="#" class="social-icon svelte-fbpaz8">Instagram</a> <a href="#" class="social-icon svelte-fbpaz8">YouTube</a> <a href="#" class="social-icon svelte-fbpaz8">LinkedIn</a></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-trYizAnJ.js.map
