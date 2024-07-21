import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute } from './ssr-JWmjUSZd.js';
import './default-BondVCiy.js';
import '@editorjs/editorjs';
import '@editorjs/header';
import '@editorjs/list';
import { C as Counter } from './Counter-CqonFETi.js';

/* empty css                                     */
const css = {
  code: `header.svelte-94u36i.svelte-94u36i{position:relative;top:10px;width:100%;height:100px;margin:auto;display:flex;align-items:center;z-index:99}header.svelte-94u36i nav button.svelte-94u36i{position:absolute;left:100%;top:50%;transform:translate(-110%, -50%);text-align:center;background-color:transparent;width:100px;border:none;cursor:pointer;font-family:'Tajawal';font-size:18px;color:white;outline:none;-webkit-tap-highlight-color:transparent}nav.svelte-94u36i.svelte-94u36i{position:relative;width:100%;height:60px;margin:0;background:linear-gradient(0.25turn, #2E3B6F, #39879b);display:flex;justify-content:center;align-items:center;border-radius:30px;color:#fff;font-size:20px;font-weight:bold}.circle1.svelte-94u36i.svelte-94u36i{position:absolute;left:100px;width:140px;height:140px;background-color:#e6e7ee;border-radius:50%;display:flex;justify-content:center;align-items:center}.circle3LOGO.svelte-94u36i.svelte-94u36i{position:relative;width:80px;height:80px;background-size:cover;overflow:hidden;cursor:pointer}button.svelte-94u36i.svelte-94u36i:active{color:#666;box-shadow:inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff}button.svelte-94u36i.svelte-94u36i{font-family:'Tajawal'}.courseSection.svelte-94u36i.svelte-94u36i{width:100%;height:auto;background-color:#e6e7ee;display:flex;align-items:center;justify-content:center;position:relative;margin:70px 0 70px}.course.svelte-94u36i.svelte-94u36i{width:80%;min-height:500px;background-color:#e6e7ee;position:relative;padding:25px;border-radius:10px;box-shadow:inset -3px -3px 8px 4px #ffffffe6,inset 3px 3px 8px 4px #00000040;display:flex;flex-direction:row}.courseImg.svelte-94u36i.svelte-94u36i{width:300px;height:300px;background-color:gray;border-radius:10px;overflow:hidden}.courseImg.svelte-94u36i img.svelte-94u36i{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.joinButton.svelte-94u36i.svelte-94u36i{position:absolute;float:inline-start;bottom:5%;width:300px;height:35px;border-radius:5px;border:none;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;display:flex;justify-content:center;align-items:center}.joinButton.svelte-94u36i.svelte-94u36i:hover{transform:scale(1.03)}.joinButton.svelte-94u36i.svelte-94u36i:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.courseTxt.svelte-94u36i.svelte-94u36i{color:#2e3b6f;height:auto;background-color:transparent;position:relative;font-family:"Tajawal"}.timerContianer.svelte-94u36i.svelte-94u36i{width:100%;display:flex;flex-direction:row;gap:10px;flex-wrap:wrap;justify-content:center;background-image:repeating-linear-gradient(45deg, rgba(58, 136, 156, 0.24) 0, rgba(58, 136, 156, 0.24) 2px, transparent 0, transparent 50%);background-size:20px 20px;background-color:transparent;align-items:center;margin-top:30px}`,
  map: null
};
const Course = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { onlyNew } = $$props;
  let { duration = 0 } = $$props;
  let { duration1 = 0 } = $$props;
  let { duration2 = 0 } = $$props;
  let { archived } = $$props;
  let { levels = 1 } = $$props;
  let { expDate } = $$props;
  let { makeAnew = false } = $$props;
  let src;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.onlyNew === void 0 && $$bindings.onlyNew && onlyNew !== void 0) $$bindings.onlyNew(onlyNew);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.duration1 === void 0 && $$bindings.duration1 && duration1 !== void 0) $$bindings.duration1(duration1);
  if ($$props.duration2 === void 0 && $$bindings.duration2 && duration2 !== void 0) $$bindings.duration2(duration2);
  if ($$props.archived === void 0 && $$bindings.archived && archived !== void 0) $$bindings.archived(archived);
  if ($$props.levels === void 0 && $$bindings.levels && levels !== void 0) $$bindings.levels(levels);
  if ($$props.expDate === void 0 && $$bindings.expDate && expDate !== void 0) $$bindings.expDate(expDate);
  if ($$props.makeAnew === void 0 && $$bindings.makeAnew && makeAnew !== void 0) $$bindings.makeAnew(makeAnew);
  $$result.css.add(css);
  return `<header class="svelte-94u36i"><nav class="svelte-94u36i"><p>${escape(title)}</p> <button class="svelte-94u36i" data-svelte-h="svelte-1z0kwqw">رجوع ›</button> <div class="circle1 svelte-94u36i" data-svelte-h="svelte-8c1u53"><img src="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png" class="circle3LOGO svelte-94u36i"></div></nav></header> <div class="timerContianer svelte-94u36i">${expDate ? `${validate_component(Counter, "Counter").$$render($$result, { end: expDate }, {}, {})}` : ``}</div> ${``} ${expDate && expDate != "1999-09-09 09:09:09" ? `<div class="timerContianer svelte-94u36i"><div style="padding: 5px;display: flex;gap: 5px;border-radius: 10px;margin-right: 50px;cursor: pointer;border: 1px solid #5ed8e9;background-color: rgb(255 255 255 / 50%);font-weight: bold;" data-svelte-h="svelte-uxwkcd">Set counter<img src="/time.png" alt="" style="width: 25px;"></div> <div style="line-height: 8px;font-family: Jost;color: #0264e4;" data-svelte-h="svelte-u5el8g"><h2>TIME IS TICKING!</h2> <h3><span style="color: rgb(243, 95, 95);">JOIN US NOW</span> TO GUARANTEE YOUR SPOT!</h3></div>  </div>` : `${`<div class="timerContianer svelte-94u36i"><div style="padding: 5px;display: flex;gap: 5px;border-radius: 10px;margin-right: 50px;cursor: pointer;border: 1px solid #5ed8e9;background-color: rgb(255 255 255 / 50%);font-weight: bold;" data-svelte-h="svelte-uxwkcd">Set counter<img src="/time.png" alt="" style="width: 25px;"></div></div>`}`} ${`<div class="courseSection svelte-94u36i"><div class="course svelte-94u36i"><div style="width: 30%;"><div class="courseImg svelte-94u36i"><img${add_attribute("src", src, 0)} alt="" class="svelte-94u36i"></div> <div style="margin: 20px 0; width: 300px; text-align: right; border-bottom: 1px solid #2e3b6f; padding-bottom: 2px;"><label style="margin-left: 10px;" data-svelte-h="svelte-12zpbfc">المدة:</label> <input placeholder="Years" type="number" style="width: 60px;" min="0" ${"disabled"}${add_attribute("value", duration1, 0)}> <label data-svelte-h="svelte-g8663g">سنة</label> <input placeholder="Months" type="number" style="width: 60px;" min="1" ${"disabled"}${add_attribute("value", duration2, 0)}> <label data-svelte-h="svelte-146qjz8">شهر</label></div> <div style="margin: 20px 0; width: 300px; text-align: right; border-bottom: 1px solid #2e3b6f; padding-bottom: 2px;"><input placeholder="Levels" type="number" style="width: 60px;" min="1" ${"disabled"}${add_attribute("value", levels, 0)}> <label style="margin-left: 10px;" data-svelte-h="svelte-1qfe3tm">عدد المراحل</label></div> <button class="joinButton svelte-94u36i" data-svelte-h="svelte-1cv4e11"><img src="/edit.png" alt="" style="width: 30px; height: 30px;margin-right: 10px;"> تعديل</button></div> <div style="width: 70%;"><div class="courseTxt svelte-94u36i"><div style="width: 100%;"><h2>${escape(title)}</h2></div> <div style="width: 100%;"><!-- HTML_TAG_START -->${description.replaceAll(`<a`, `<a style="color: #0264e4;"`)}<!-- HTML_TAG_END --> </div></div></div></div></div>`}`;
});

export { Course as C };
//# sourceMappingURL=Course-DAXnR8xK.js.map
