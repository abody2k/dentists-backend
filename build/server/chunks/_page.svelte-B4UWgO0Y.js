import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each, e as escape } from './ssr-JWmjUSZd.js';
import { B as Bar } from './Bar-DP2pBW3D.js';

const css = {
  code: `.row.svelte-1mofc6k.svelte-1mofc6k{display:flex;flex-direction:row;justify-content:space-around}#notSelected.svelte-1mofc6k.svelte-1mofc6k{background-color:transparent;color:white;padding:7px;border-radius:30px;border:1px solid;border-color:white;margin:7px}#selected.svelte-1mofc6k.svelte-1mofc6k{background-color:white;color:#2e3b6f;padding:7px;border-radius:30px;margin:7px}.column.svelte-1mofc6k.svelte-1mofc6k{display:flex;flex-direction:column;justify-content:space-around}#subbox.svelte-1mofc6k.svelte-1mofc6k{background-image:url("/bg.jpg");background-repeat:no-repeat;background-size:cover;margin:auto;width:90%;border-top-right-radius:90px;border-bottom-left-radius:90px;border-top-left-radius:10px;border-bottom-right-radius:10px;height:30vh}.table-container.svelte-1mofc6k.svelte-1mofc6k{overflow-x:auto;max-height:400px;overflow-y:auto;width:100%;margin:auto}table.svelte-1mofc6k.svelte-1mofc6k{table-layout:fixed;border-collapse:collapse;width:100%;margin:auto;background-color:#E6E7EE}th.svelte-1mofc6k.svelte-1mofc6k,td.svelte-1mofc6k.svelte-1mofc6k{padding:8px;border-bottom:1px solid #ddd}th.svelte-1mofc6k.svelte-1mofc6k{background-color:#E6E7EE;font-size:16px}tr.svelte-1mofc6k.svelte-1mofc6k:hover{background-color:#f0f0f0}.m-container.svelte-1mofc6k.svelte-1mofc6k{margin:auto;width:80%;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r
                         3px 3px 8px 4px rgba(0, 0, 0, 0.25);border-radius:8px;overflow:hidden}.table-container.svelte-1mofc6k.svelte-1mofc6k::-webkit-scrollbar{width:8px}.table-container.svelte-1mofc6k.svelte-1mofc6k::-webkit-scrollbar-thumb{background-color:#DCDDE8;border:1.5px solid #C8D3E7;border-radius:10px}.table-container.svelte-1mofc6k.svelte-1mofc6k::-webkit-scrollbar-thumb:hover{background-color:#C8D3E7}.table-container.svelte-1mofc6k.svelte-1mofc6k::-webkit-scrollbar-track{background-color:#E6E7EE}.table-container.svelte-1mofc6k.svelte-1mofc6k::-webkit-scrollbar-track:hover{background-color:#f0f0f0}button.svelte-1mofc6k.svelte-1mofc6k{font-family:'Tajawal';font-size:14px;color:#2e3b6f;font-weight:bold}.horizontal-line.svelte-1mofc6k.svelte-1mofc6k{border:none;height:2px;background-color:#8BA3CC;margin:auto;width:100%}.titles.svelte-1mofc6k.svelte-1mofc6k{margin:auto;width:80%;text-align:right;padding:60px 0 30px}tr.svelte-1mofc6k.svelte-1mofc6k:nth-child(even){background-color:#f2f2f2}table.neumorphic tr.svelte-1mofc6k td.svelte-1mofc6k:first-child::before{content:"";position:absolute;padding:7px;top:0;left:-5000px;width:10000px;height:100%;z-index:-10}.row.svelte-1mofc6k.svelte-1mofc6k{display:flex;flex-direction:row;justify-content:right}button.svelte-1mofc6k.svelte-1mofc6k{padding:15px 30px;background:#E6E7EE;border:none;padding:5px 10px 5px 20px ;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r
          -2px -2px 5px 0 rgb(255, 255, 255);border-radius:40px;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal';color:#2e3b6f }button.svelte-1mofc6k.svelte-1mofc6k:hover{transform:scale(1.05)}button.svelte-1mofc6k.svelte-1mofc6k:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r
                 inset -4px -4px 12px #ffffff}input.svelte-1mofc6k.svelte-1mofc6k{background-color:white;padding:7px;border-style:solid;border-color:transparent}`,
  map: null
};
const Selector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options = {
    courseSelected: false,
    courseID: 0,
    courseName: "",
    userName: "",
    courses: [],
    fellowships: [],
    exams: [],
    add: false,
    edit: false,
    examID: 0,
    exam: null,
    exams: [],
    levels: 1,
    selectedLevel: 1
  };
  $$result.css.add(css);
  return `<div id="subbox" class="svelte-1mofc6k"><div class="row svelte-1mofc6k" style="width: 94%;justify-content:space-between;padding:13px"><div style="border-radius: 10px 40px; height: 210px; width: 36%; display: flex; justify-content: space-around;background:linear-gradient(140deg, rgb(255 255 255) 0%, rgb(255 255 255 / 26%) 35%, rgb(255 255 255 / 11%) 100%)"><div class="column svelte-1mofc6k"><div class="row svelte-1mofc6k" style="margin: auto;"><div class="selection svelte-1mofc6k"${add_attribute("id", "notSelected", 0)}>كورس</div> <div class="selection svelte-1mofc6k"${add_attribute("id", "selected", 0)}>زمالة</div></div> <select placeholder="courses/fellowships names" style="width: 60%; margin: auto;">${``}${`${each(options.fellowships, (fellowship) => {
    return `<option${add_attribute("value", fellowship.fellowshipID, 0)}>${escape(fellowship.fellowshipName)}</option>`;
  })}`}</select> <select placeholder="Level" style="width: 60%; margin: auto;">${each([...Array(options.levels)], (e, i) => {
    return `<option${add_attribute("value", i + 1, 0)}>${escape(i + 1)}</option>`;
  })}</select></div></div> <div class="column svelte-1mofc6k"><div class="row svelte-1mofc6k"><input style="border-radius: 30px; background-color: transparent; border-color: white;" class="svelte-1mofc6k"> <img src="/srch.png" width="30"></div> <div class="column svelte-1mofc6k" style="overflow-y:scroll;height:60%;" data-svelte-h="svelte-7ibsv5"></div></div></div></div> <div class="titles svelte-1mofc6k"><div class="row svelte-1mofc6k"><div><button class="svelte-1mofc6k" data-svelte-h="svelte-1nf66oi">ز</button> <button class="svelte-1mofc6k" data-svelte-h="svelte-1kxnymk">ز</button> <button class="svelte-1mofc6k" data-svelte-h="svelte-1kbkj3o">زر</button></div> <h3 style="margin:5px 10px;" data-svelte-h="svelte-pf2vww">سجل النتائج</h3></div> <hr class="horizontal-line svelte-1mofc6k"> <div style="display: flex;color:#2e3b6f;display: flex; color: rgb(46, 59, 111); width: 20%; justify-content: space-evenly; margin: auto;font-weight:bolder;" data-svelte-h="svelte-13xklna"></div></div> <div class="m-container svelte-1mofc6k"><table class="svelte-1mofc6k" data-svelte-h="svelte-vdmtdd"><thead><tr class="svelte-1mofc6k"><th style="width: 40px;" class="svelte-1mofc6k"></th> <th class="svelte-1mofc6k">التاريخ</th> <th class="svelte-1mofc6k">النوع</th> <th class="svelte-1mofc6k">المجموعة</th> <th class="svelte-1mofc6k">عنوان الامتحان</th></tr></thead></table> <div class="table-container svelte-1mofc6k"><table class="svelte-1mofc6k">${each(options.exams, (exam) => {
    return `<tr class="svelte-1mofc6k"><td style="width: 40px;" class="svelte-1mofc6k"></td> <td class="svelte-1mofc6k">من ${escape(new Date(exam.startingDate).toLocaleDateString())} إلى ${escape(new Date(exam.ending).toLocaleDateString())}</td> <td class="svelte-1mofc6k">${escape(exam.type == 3 ? "نهائي" : exam.type == 2 ? "مرحلة" : "دوري")}</td> <td class="svelte-1mofc6k">${escape(exam.groupID)}</td> <td class="svelte-1mofc6k">${escape(exam.title)}</td> </tr>`;
  })}</table></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Bar, "Bar").$$render($$result, { title: "نتائج الامتحانات" }, {}, {})} ${validate_component(Selector, "Selector").$$render($$result, {}, {}, {})} `;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B4UWgO0Y.js.map
