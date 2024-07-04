import { c as create_ssr_component, v as validate_component } from './ssr-JWmjUSZd.js';
import './default-BondVCiy.js';
import '@editorjs/editorjs';
import '@editorjs/header';
import '@editorjs/list';
import { B as ButtonChild } from './ButtonChild-CTTslDBd.js';

const css = {
  code: ".svelte-5m3d92{background-color:#E6E7EE}button.svelte-5m3d92{padding:15px 30px;background:#E6E7EE;border:none;border-radius:10px;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal'}button.svelte-5m3d92:hover{transform:scale(1.05)}button.svelte-5m3d92:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                inset -4px -4px 12px #ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${``} ${`<div style="display: flex;justify-content:space-around" class="svelte-5m3d92"> ${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      child: `<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/videos.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">المحاضرات</div>
  </div>`,
      clickHandler: () => {
        const a = document.createElement("a");
        a.href = `/admin/courses/${data.id}/lectures`;
        a.click();
      }
    },
    {},
    {}
  )} ${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      child: `<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/sources.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">المصادر</div>
  </div>`,
      clickHandler: () => {
        const a = document.createElement("a");
        a.href = `/admin/courses/${data.id}/chapters`;
        a.click();
      }
    },
    {},
    {}
  )} ${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      child: `<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/exams.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">الإمتحانات</div>
  </div>`,
      clickHandler: () => {
        const a = document.createElement("a");
        a.href = `/admin/courses/${data.id}/exams`;
        a.click();
      }
    },
    {},
    {}
  )} ${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      child: `<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/ppl.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">المشتركين</div>
  </div>`,
      clickHandler: () => {
        const a = document.createElement("a");
        a.href = `/admin/courses/${data.id}/users`;
        a.click();
      }
    },
    {},
    {}
  )}</div>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BuTNI6Ld.js.map
