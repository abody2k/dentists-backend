import { c as create_ssr_component, v as validate_component, f as each, e as escape, h as null_to_empty, d as add_attribute } from './ssr-JWmjUSZd.js';
import { B as Bar } from './Bar-DSmYRrjO.js';

/* empty css                                       */
const css = {
  code: ".ccr.svelte-1vhwpj1{background:#E6E7EE;border-radius:10px;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;padding:10px;position:relative;top:0px;transition:all 1s ease-in-out }.row.svelte-1vhwpj1{display:flex;flex-direction:row}.row.svelte-1vhwpj1{display:flex;flex-direction:row;justify-content:right}#msg.svelte-1vhwpj1{position:relative;left:0;top:0px}button.svelte-1vhwpj1{padding:10px 10px;background:#efefef;border:none;border-radius:10px;color:#000000;font-weight:700;text-align:center;outline:none;cursor:pointer;transition:.2s ease-in-out;box-shadow:-6px -6px 14px rgba(255, 255, 255, .7),\r\n              -6px -6px 10px rgba(255, 255, 255, .5),\r\n              6px 6px 8px rgba(255, 255, 255, .075),\r\n              6px 6px 10px rgba(0, 0, 0, .15)}button.svelte-1vhwpj1:hover{box-shadow:-2px -2px 6px rgba(255, 255, 255, .6),\r\n              -2px -2px 4px rgba(255, 255, 255, .4),\r\n              2px 2px 2px rgba(255, 255, 255, .05),\r\n              2px 2px 4px rgba(0, 0, 0, .1)}button.svelte-1vhwpj1:active{box-shadow:inset -2px -2px 6px rgba(255, 255, 255, .7),\r\n              inset -2px -2px 4px rgba(255, 255, 255, .5),\r\n              inset 2px 2px 2px rgba(255, 255, 255, .075),\r\n              inset 2px 2px 4px rgba(0, 0, 0, .15)}input.svelte-1vhwpj1{background-color:white;padding:7px;border-style:solid;border-color:transparent}.videos.svelte-1vhwpj1{padding-top:40px}.Xtabs.svelte-1vhwpj1{width:200px;height:200px;border-radius:10px;color:#2e3b6f;font-weight:700;font-size:24px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;display:flex;flex-direction:column;justify-content:center;align-items:center}.Xtabs.svelte-1vhwpj1:hover{transform:scale(1.03)}.Xtabs.svelte-1vhwpj1:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.XtabsSelected.svelte-1vhwpj1{width:200px;height:200px;border-radius:10px;color:#2e3b6f;font-weight:700;font-size:24px;cursor:pointer;background-color:#e6e7ee;transition:all 0.3s;display:flex;flex-direction:column;justify-content:center;align-items:center;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}",
  map: null
};
const Chapters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let levels;
  let currentLevel = 1;
  let msg = "";
  let { data } = $$props;
  let rows = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Bar, "Bar").$$render($$result, { title: "المصادر" }, {}, {})} <div class="videos svelte-1vhwpj1"><div style="width: 100%;margin: 30px 0;display: flex;flex-direction: row-reverse;gap: 10px;flex-wrap: wrap;justify-content: center;align-items: center; border-bottom: 2px dotted #2f3c6f3d;"><h3 style="text-align: right;margin-left: 20px; color: #2e3b6f; " data-svelte-h="svelte-1mgkj0p">:المرحلة</h3> ${each(Array(levels), (i, leveled) => {
    return `<div class="${escape(null_to_empty(currentLevel - 1 == leveled ? "XtabsSelected" : "Xtabs"), true) + " svelte-1vhwpj1"}" style="width: 40px;height: 40px;">${escape(leveled + 1)} </div>`;
  })}</div> <div class="row svelte-1vhwpj1" style="align-items: center;gap:20px;">${`<div class="Xtabs svelte-1vhwpj1" style="display: flex; flex-direction: row;gap:10px;padding:7px;height:90px;font-size:20px;height:fit-content;width:fit-content; }" data-svelte-h="svelte-17nvynn"><img src="/add.png" style="width: 18px;">

            إضافة مصدر</div>`}</div> <div id="msg" class="svelte-1vhwpj1">${escape(msg)}</div> ${``}</div> <input type="checkbox" placeholder="تحديد الكل" class="svelte-1vhwpj1"> ${each(rows.filter((das) => das.level == currentLevel), (i, index) => {
    return `${i.edit ? `<div class="row svelte-1vhwpj1"><input type="checkbox" class="svelte-1vhwpj1"${add_attribute("checked", i.status, 1)}> <div class="row ccr svelte-1vhwpj1" style="width: 100%; height: 120px; margin: 10px;justify-content:space-between;align-items: center;"><td colspan="3" style="width: 100%;height:100%;"><div style="position:absolute;right:200;top:20;"><div class="row svelte-1vhwpj1"> <div class="Xtabs svelte-1vhwpj1" style="width: fit-content;height:fit-content; padding:5px;" data-svelte-h="svelte-r8bwt9"><img src="/del.png" style="width: 30px;"></div> <div class="Xtabs svelte-1vhwpj1" style="width: fit-content;height:fit-content; padding:5px;" data-svelte-h="svelte-nwlfgp"><img src="/close.png" style="width: 30px;"> </div></div> <div class="row svelte-1vhwpj1"><div class="Xtabs svelte-1vhwpj1" style="width: fit-content;height:fit-content; padding:5px;" data-svelte-h="svelte-1e7dgrc"><img src="/bell.png" style="width: 30px;"></div> <div class="Xtabs svelte-1vhwpj1" style="width: fit-content;height:fit-content; padding:5px;" data-svelte-h="svelte-48vuoc"><img src="/done.png" style="width: 30px;"></div> </div></div> <div class="column" style="position: absolute; right: 20px; display: flex; flex-direction: column; justify-content: center; width: 256px; justify-items: center; align-items: baseline; gap: 10px;"><div class="row svelte-1vhwpj1"> <input style="border-radius: 10px;" type="text" placeholder="عنوان الفصل " class="svelte-1vhwpj1"${add_attribute("value", i.title, 0)}> <img src="/ab.png" style="width: 30px;"> <input type="number" placeholder="order" style="background-color: white;border-radius:12px;width:40px;" class="svelte-1vhwpj1"${add_attribute("value", i.chapterID, 0)}></div> <div class="row svelte-1vhwpj1" style="align-items: center;"><input type="text" style="border-radius: 10px;" placeholder="رابط الملف" class="svelte-1vhwpj1"${add_attribute("value", i.link, 0)}> <img src="/url.png" style="width: 25px;height: 20px;"></div> <select placeholder="level"${add_attribute("value", currentLevel, 0)}>${each([...Array(levels)], (i2, index2) => {
      return `<option${add_attribute("value", index2 + 1, 0)}>${escape(index2 + 1)}</option>`;
    })}</select></div> <br style="margin-top: 40px;">  </td></div> </div>` : `<div class="row svelte-1vhwpj1" style="align-items: center;"><input type="checkbox" class="svelte-1vhwpj1"${add_attribute("checked", i.status, 1)}> <div>${escape(i.chapterID)}</div> <div class="row ccr svelte-1vhwpj1" style="width: 85%; height: 80px; margin: 10px;justify-content:space-between;align-items: center;"><div class="row svelte-1vhwpj1" style="align-items: center;"><img src="/doct.png" width="50" height="50">  <div>${escape(i.title)}</div> </div></div> <div class="ccr column svelte-1vhwpj1" style="justify-content: center; align-items: center;height:80px;width:20%;" data-svelte-h="svelte-l1avf1"> <img src="/quizic.png" width="50" height="50"> <div style="color: #2e3b6f;font-weight: bold; text-align:center; ">Edit Questions</div></div> </div>`}`;
  })} `;
});

export { Chapters as C };
//# sourceMappingURL=Chapters-i3Tw5lzb.js.map
