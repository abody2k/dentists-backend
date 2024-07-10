import { c as create_ssr_component, v as validate_component } from './ssr-JWmjUSZd.js';
import { C as Course } from './Course-Bmce9NYT.js';
import './default-BondVCiy.js';
import '@editorjs/editorjs';
import '@editorjs/header';
import '@editorjs/list';
import './Counter-CqonFETi.js';

/* empty css                                                              */
const css = {
  code: ".Xtabs.svelte-s72vxi{width:200px;height:200px;border-radius:10px;color:#2e3b6f;font-weight:700;font-size:24px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;display:flex;flex-direction:column;justify-content:center;align-items:center}.Xtabs.svelte-s72vxi:hover{transform:scale(1.03)}.Xtabs.svelte-s72vxi:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.svelte-s72vxi{background-color:#E6E7EE}button.svelte-s72vxi{padding:15px 30px;background:#E6E7EE;border:none;border-radius:10px;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal'}button.svelte-s72vxi:hover{transform:scale(1.05)}button.svelte-s72vxi:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n               inset -4px -4px 12px #ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let title = "";
  let description = "";
  let duration = "";
  let makeNewCoure = false;
  let archived = false;
  let levels = 1;
  let expDate = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Course, "Course").$$render(
    $$result,
    {
      data,
      expDate,
      levels,
      archived,
      makeAnew: makeNewCoure,
      title,
      description,
      duration,
      duration1: duration.toString().split(":")[0],
      duration2: duration.toString().split(":")[1]
    },
    {},
    {}
  )} ${`<div style="display: flex;justify-content:space-around" class="svelte-s72vxi"> <div style="width: 100%; margin: 30px 0; display: flex; flex-direction: row; justify-content: center; gap: 30px;" class="svelte-s72vxi"><div class="Xtabs svelte-s72vxi" data-svelte-h="svelte-d306j0"><img src="/videos.png" alt="" style="width: 60px; height: 60px; margin: 10px;" class="svelte-s72vxi"> المحاضرات</div> <div class="Xtabs svelte-s72vxi" data-svelte-h="svelte-1iy3ic6"><img src="/sources.png" alt="" style="width: 60px; height: 60px; margin: 10px;" class="svelte-s72vxi"> المصادر</div> <div class="Xtabs svelte-s72vxi" data-svelte-h="svelte-v37aed"><img src="/exams.png" alt="" style="width: 60px; height: 60px; margin: 10px;" class="svelte-s72vxi"> الإمتحانات</div> <div class="Xtabs svelte-s72vxi" data-svelte-h="svelte-qu0pvf"><img src="/ppl.png" alt="" style="width: 60px; height: 60px; margin: 10px;" class="svelte-s72vxi"> المشتركين</div></div></div>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9IJ1mrUV.js.map
