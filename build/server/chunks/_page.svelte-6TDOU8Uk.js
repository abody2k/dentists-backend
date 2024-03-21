import { c as create_ssr_component, v as validate_component } from './ssr-CggYz5VK.js';
import { C as Course } from './Course--MDt9B_3.js';
import { B as ButtonChild } from './ButtonChild-DlpadXa1.js';
import './index-DPZ-spl1.js';
import './Bar-DJqCxwEp.js';

const css = {
  code: ".svelte-1d64gt6{background-color:#E6E7EE}button.svelte-1d64gt6{padding:15px 30px;background:#E6E7EE;border:none;border-radius:10px;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'arimo'}button.svelte-1d64gt6:hover{transform:scale(1.05)}button.svelte-1d64gt6:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                inset -4px -4px 12px #ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let title = "";
  let description = "";
  let duration = "";
  let makeNewCoure = false;
  let archived = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Course, "Course").$$render(
    $$result,
    {
      archived,
      data,
      makeAnew: makeNewCoure,
      title,
      description,
      duration,
      duration1: duration.toString().split(":")[0],
      duration2: duration.toString().split(":")[1]
    },
    {},
    {}
  )} ${`<div style="display: flex;justify-content:space-around" class="svelte-1d64gt6"> ${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      child: `<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/videos.png" width="90">
    <div style="font-size: 26px;color:navy">المحاضرات</div>
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
    <div style="font-size: 26px;color:navy">المصادر</div>
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
    <div style="font-size: 26px;color:navy">الإمتحانات</div>
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
    <div style="font-size: 26px;color:navy">المشتركين</div>
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
//# sourceMappingURL=_page.svelte-6TDOU8Uk.js.map
