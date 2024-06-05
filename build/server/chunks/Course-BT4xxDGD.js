import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './ssr-CggYz5VK.js';
import './default-TePYrQTA.js';
import '@editorjs/editorjs';
import '@editorjs/header';
import '@editorjs/list';
import { B as Bar } from './Bar-N_OONu60.js';

/* empty css                                      */
/* empty css                                     */
const css = {
  code: `button.svelte-11u12sh.svelte-11u12sh:active{color:#666;box-shadow:inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff}button.svelte-11u12sh.svelte-11u12sh{font-family:'Tajawal'}.courseSection.svelte-11u12sh.svelte-11u12sh{width:100%;height:auto;background-color:#e6e7ee;display:flex;align-items:center;justify-content:center;position:relative;margin:70px 0 70px}.course.svelte-11u12sh.svelte-11u12sh{width:80%;min-height:500px;background-color:#e6e7ee;position:relative;padding:25px;border-radius:10px;box-shadow:inset -3px -3px 8px 4px #ffffffe6,inset 3px 3px 8px 4px #00000040;display:flex;flex-direction:row}.courseImg.svelte-11u12sh.svelte-11u12sh{width:300px;height:300px;background-color:gray;border-radius:10px;overflow:hidden}.courseImg.svelte-11u12sh img.svelte-11u12sh{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.joinButton.svelte-11u12sh.svelte-11u12sh{position:absolute;float:inline-start;bottom:5%;width:300px;height:35px;border-radius:5px;border:none;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;display:flex;justify-content:center;align-items:center}.joinButton.svelte-11u12sh.svelte-11u12sh:hover{transform:scale(1.03)}.joinButton.svelte-11u12sh.svelte-11u12sh:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.courseTxt.svelte-11u12sh.svelte-11u12sh{color:#2e3b6f;height:auto;background-color:transparent;position:relative;font-family:"Tajawal"}.timerContianer.svelte-11u12sh.svelte-11u12sh{width:100%;display:flex;flex-direction:row;gap:10px;flex-wrap:wrap;justify-content:center;background-image:repeating-linear-gradient(45deg, rgba(58, 136, 156, 0.24) 0, rgba(58, 136, 156, 0.24) 2px, transparent 0, transparent 50%);background-size:20px 20px;background-color:transparent;align-items:center}`,
  map: null
};
const Course = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { title = "title" } = $$props;
  let { description = "desc" } = $$props;
  let { onlyNew } = $$props;
  let { duration = 0 } = $$props;
  let { duration1 = 0 } = $$props;
  let { duration2 = 0 } = $$props;
  let { archived } = $$props;
  let { levels = 1 } = $$props;
  let { expDate } = $$props;
  let { makeAnew = false } = $$props;
  let src;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.onlyNew === void 0 && $$bindings.onlyNew && onlyNew !== void 0)
    $$bindings.onlyNew(onlyNew);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.duration1 === void 0 && $$bindings.duration1 && duration1 !== void 0)
    $$bindings.duration1(duration1);
  if ($$props.duration2 === void 0 && $$bindings.duration2 && duration2 !== void 0)
    $$bindings.duration2(duration2);
  if ($$props.archived === void 0 && $$bindings.archived && archived !== void 0)
    $$bindings.archived(archived);
  if ($$props.levels === void 0 && $$bindings.levels && levels !== void 0)
    $$bindings.levels(levels);
  if ($$props.expDate === void 0 && $$bindings.expDate && expDate !== void 0)
    $$bindings.expDate(expDate);
  if ($$props.makeAnew === void 0 && $$bindings.makeAnew && makeAnew !== void 0)
    $$bindings.makeAnew(makeAnew);
  $$result.css.add(css);
  return `${validate_component(Bar, "Bar").$$render($$result, { title: "" }, {}, {})} ${`<div class="courseSection svelte-11u12sh"><div class="course svelte-11u12sh"><div style="width: 30%;"><div class="courseImg svelte-11u12sh"><img${add_attribute("src", src, 0)} alt="" class="svelte-11u12sh"></div> <button class="joinButton svelte-11u12sh" data-svelte-h="svelte-1cv4e11"><img src="/edit.png" alt="" style="width: 30px; height: 30px;margin-right: 10px;"> تعديل</button></div> <div style="width: 70%;"><div class="courseTxt svelte-11u12sh"><div style="width: 100%;"><h2>${escape(title)}</h2></div> <div style="width: 100%;"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></div></div></div></div></div>`}`;
});

export { Course as C };
//# sourceMappingURL=Course-BT4xxDGD.js.map
