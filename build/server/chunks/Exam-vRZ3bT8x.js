import { c as create_ssr_component, v as validate_component, f as each, e as escape, h as null_to_empty, d as add_attribute } from './ssr-JWmjUSZd.js';
import { B as Bar } from './Bar-DSmYRrjO.js';

/* empty css                                   */
const css = {
  code: '#root.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{padding-top:40px;background:#E6E7EE;width:100%;height:100vh}.overlay.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.container.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{margin-top:40px;margin-left:90px;widows:100%;right:10;top:100}table.neumorphic.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{width:80vw;border-spacing:0;color:#212121;text-align:center;overflow:hidden;box-shadow:9px 9px 16px rgba(163, 177, 198, 0.6),\r\n-9px -9px 16px rgba(255, 255, 255, 0.6)}table.neumorphic.svelte-zy3isu thead.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{box-shadow:9px 9px 16px rgba(163, 177, 198, 0.6)}table.neumorphic.svelte-zy3isu th.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{padding:7px;color:#2e3b6f;font-weight:bolder}table.neumorphic.svelte-zy3isu>tbody.svelte-zy3isu>tr.svelte-zy3isu>td.svelte-zy3isu{padding:10px;font-size:14px;position:relative}tr.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu:nth-child(even){background-color:#f2f2f2}table.neumorphic.svelte-zy3isu tr td.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu:first-child::before{content:"";position:absolute;padding:7px;top:0;left:-5000px;width:10000px;height:100%;z-index:-10}.row.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{display:flex;flex-direction:row;justify-content:right}#msg.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{position:relative;left:0;top:0px}button.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{padding:10px 10px;background:#efefef;border:none;border-radius:10px;color:#000000;font-weight:700;text-align:center;outline:none;cursor:pointer;transition:.2s ease-in-out;box-shadow:-6px -6px 14px rgba(255, 255, 255, .7),\r\n            -6px -6px 10px rgba(255, 255, 255, .5),\r\n            6px 6px 8px rgba(255, 255, 255, .075),\r\n            6px 6px 10px rgba(0, 0, 0, .15)}button.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu:hover{box-shadow:-2px -2px 6px rgba(255, 255, 255, .6),\r\n            -2px -2px 4px rgba(255, 255, 255, .4),\r\n            2px 2px 2px rgba(255, 255, 255, .05),\r\n            2px 2px 4px rgba(0, 0, 0, .1)}button.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu:active{box-shadow:inset -2px -2px 6px rgba(255, 255, 255, .7),\r\n            inset -2px -2px 4px rgba(255, 255, 255, .5),\r\n            inset 2px 2px 2px rgba(255, 255, 255, .075),\r\n            inset 2px 2px 4px rgba(0, 0, 0, .15)}input.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{background-color:white;padding:7px;border-style:solid;border-color:transparent;border-radius:10px}.title.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{color:#2e3b6f;font-weight:bolder;margin:10px}.Xtabs.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{width:200px;height:200px;border-radius:10px;color:#2e3b6f;font-weight:700;font-size:24px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;display:flex;flex-direction:column;justify-content:center;align-items:center}.Xtabs.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu:hover{transform:scale(1.03)}.Xtabs.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.XtabsSelected.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu.svelte-zy3isu{width:200px;height:200px;border-radius:10px;color:#2e3b6f;font-weight:700;font-size:24px;cursor:pointer;background-color:#e6e7ee;transition:all 0.3s;display:flex;flex-direction:column;justify-content:center;align-items:center;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}',
  map: null
};
let msg = "";
const Exam = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let levels;
  let { data = { id: 5, course: true } } = $$props;
  let rows = [];
  let currentLevel = 1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Bar, "Bar").$$render($$result, { title: "الامتحانات" }, {}, {})} <div style="width: 100%;margin: 30px 0;display: flex;flex-direction: row-reverse;gap: 10px;flex-wrap: wrap;justify-content: center;align-items: center; border-bottom: 2px dotted #2f3c6f3d;"><h3 style="text-align: right;margin-left: 20px; color: #2e3b6f; " data-svelte-h="svelte-hhiu6h">:المرحلة</h3> ${each(Array(levels), (i, leveled) => {
    return `<div class="${escape(null_to_empty(currentLevel - 1 == leveled ? "XtabsSelected" : "Xtabs"), true) + " svelte-zy3isu"}" style="width: 40px;height: 40px;">${escape(leveled + 1)} </div>`;
  })}</div> <div id="root" class="svelte-zy3isu">${``} <div class="videos svelte-zy3isu"><div class="row svelte-zy3isu">${`<button class="svelte-zy3isu" data-svelte-h="svelte-14sv8zd"><div style="display: flex;align-items:center;gap:10px;"><img src="/add.png" style="width:20px;"> <div>إنشاء امتحان</div></div></button>`} <div class="videoTitle" data-svelte-h="svelte-1bqdjwy">الامتحانات</div></div> <div id="msg" class="svelte-zy3isu">${escape(msg)}</div> <hr> ${``}</div> <div class="container svelte-zy3isu"><table class="neumorphic svelte-zy3isu"><thead class="svelte-zy3isu"><tr class="svelte-zy3isu"><th class="svelte-zy3isu" data-svelte-h="svelte-1erpt2f">موعد</th> <th class="svelte-zy3isu" data-svelte-h="svelte-1c7bmqd">نوع</th> <th class="svelte-zy3isu" data-svelte-h="svelte-o4yv9g">مجموعة</th> <th class="svelte-zy3isu" data-svelte-h="svelte-1eorfh6">عنوان</th> <th class="svelte-zy3isu"><input type="checkbox" class="svelte-zy3isu"></th></tr></thead> <tbody class="svelte-zy3isu">${each(rows, (kok, index) => {
    return `<tr class="svelte-zy3isu"><td class="svelte-zy3isu">${escape(kok.ending ? kok.ending.split(".")[0].split("T")[0] + " " + kok.ending.split(".")[0].split("T")[1] : "")} </td> <td class="svelte-zy3isu">${escape(kok.type)}</td> <td class="svelte-zy3isu">${escape(kok.groupID)}</td> <td class="svelte-zy3isu">${escape(kok.title)}</td> <td class="svelte-zy3isu"><input type="checkbox" ${status ? "checked" : ""} class="svelte-zy3isu"> </td></tr>`;
  })}</tbody></table></div> <div class="videos svelte-zy3isu" data-svelte-h="svelte-1vaw9e5"><div class="row svelte-zy3isu"><div class="videoTitle">الامتحانات المكتملة</div></div></div> <div class="container svelte-zy3isu"><table class="neumorphic svelte-zy3isu"><thead class="svelte-zy3isu"><tr class="svelte-zy3isu"><th class="svelte-zy3isu" data-svelte-h="svelte-1q3yboe">الحالة</th> <th class="svelte-zy3isu" data-svelte-h="svelte-1erpt2f">موعد</th> <th class="svelte-zy3isu" data-svelte-h="svelte-1c7bmqd">نوع</th> <th class="svelte-zy3isu" data-svelte-h="svelte-o4yv9g">مجموعة</th> <th class="svelte-zy3isu" data-svelte-h="svelte-1eorfh6">عنوان</th> <th class="svelte-zy3isu"><input type="checkbox" class="svelte-zy3isu"></th></tr></thead> <tbody class="svelte-zy3isu">${each(rows.filter((e) => /* @__PURE__ */ new Date() > new Date(e.ending)), (kok, index) => {
    return `<tr class="svelte-zy3isu"><td class="svelte-zy3isu"><img${add_attribute(
      "src",
      kok.visible ? "https://img.icons8.com/ios-filled/30/hide.png" : "https://img.icons8.com/ios-glyphs/30/visible--v1.png",
      0
    )} alt="hide"></td> <td class="svelte-zy3isu">${escape(kok.ending ? kok.ending.split(".")[0].split("T")[0] + " " + kok.ending.split(".")[0].split("T")[1] : "")}</td> <td class="svelte-zy3isu">${escape(kok.groupID)}</td> <td class="svelte-zy3isu">${escape(kok.type)}</td> <td class="svelte-zy3isu">${escape(kok.title)}</td> <td class="svelte-zy3isu"><input type="checkbox" ${status ? "checked" : ""} class="svelte-zy3isu"> </td></tr>`;
  })}</tbody></table></div></div>`;
});

export { Exam as E };
//# sourceMappingURL=Exam-vRZ3bT8x.js.map