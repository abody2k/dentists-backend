import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-JWmjUSZd.js';
import { G as Grid } from './Grid--O_5gkpJ.js';
import 'firebase/app';
import 'firebase/messaging';
import { B as Bar } from './Bar-DSmYRrjO.js';
import './Grid.svelte_svelte_type_style_lang-DPxWwPzA.js';
import './Button-CSD65ztW.js';

const css = {
  code: "#arch.svelte-uiyu3g{padding:5px 30px;background:#e6e7ee;border:none;border-radius:10px;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25), -2px -2px 5px 0 rgb(255, 255, 255);color:#2e3b6f;font-size:1em;font-weight:700;cursor:pointer;transition:transform .2s ease;font-family:Tajawal\r\n\r\n        }#arch.svelte-uiyu3g:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}button.svelte-uiyu3g:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.overlay.svelte-uiyu3g{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-uiyu3g{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-uiyu3g{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-uiyu3g{text-align:center}.Xtabs.svelte-uiyu3g{width:200px;height:200px;border-radius:10px;color:#2e3b6f;font-weight:700;font-size:24px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;display:flex;flex-direction:column;justify-content:center;align-items:center}.Xtabs.svelte-uiyu3g:hover{transform:scale(1.03)}.Xtabs.svelte-uiyu3g:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}",
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
  let courseIndex = 0;
  let courses = [
    {
      title: "nice course",
      id: 1,
      text: "THE DEVIL IN THE DETAIL",
      duration: "10:12",
      src: "https://source.unsplash.com/random/200x200?sig=1",
      clickHandler: () => {
        courseIndex = 1;
        const a = document.createElement("a");
        a.href = "/admin/courses/" + courseIndex;
        a.click();
      }
    }
  ];
  let showArchivedOnly = false;
  areDeveloperToolsOpen().then((open) => {
    if (open) ;
    else {
      console.log(
        "Developer tools are closed."
      );
    }
  });
  $$result.css.add(css);
  return `${``} ${validate_component(Bar, "Bar").$$render($$result, { title: "Courses" }, {}, {})} <div class=""><div style="display: flex;gap:30px;justify-content:right; margin: 20px;">${`<div style="display:flex;gap:10px;height:120px;"><img src="/add.png" width="20"> <button class="Xtabs svelte-uiyu3g" data-svelte-h="svelte-bcbmqq">إنشاء كورس</button></div>`} <div id="arch" class="svelte-uiyu3g"><div style="display: flex;gap: 30px;justify-content: right;margin: 30px;"><img> <div>${escape("عرض الكورسات المؤرشفة")}</div></div></div></div> ${validate_component(Grid, "Grid").$$render(
    $$result,
    {
      f: false,
      showArchivedOnly,
      disablePages: true,
      cardsData: [...courses]
      // Add more card data as needed
    },
    {},
    {}
  )}</div>  `;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B41FtZMm.js.map
