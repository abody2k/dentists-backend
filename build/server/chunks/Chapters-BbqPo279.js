import { c as create_ssr_component, v as validate_component, e as escape, f as each, d as add_attribute } from './ssr-CIpp2D7Y.js';
import { B as Bar } from './Bar-CwvRxFXa.js';

/* empty css                                       */
const css = {
  code: '.container.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw{margin-top:40px;margin-left:90px;widows:100%;right:10;top:100;background-color:#E6E7EE}table.neumorphic.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw{width:80vw;border-spacing:0;color:#212121;text-align:center;overflow:scroll;box-shadow:9px 9px 16px rgba(163, 177, 198, 0.6),\r\n  -9px -9px 16px rgba(255, 255, 255, 0.6)}table.neumorphic.svelte-19rp9uw thead.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw{box-shadow:9px 9px 16px rgba(163, 177, 198, 0.6)}table.neumorphic.svelte-19rp9uw th.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw{padding:7px;color:navy;font-weight:bolder}table.neumorphic.svelte-19rp9uw>tbody.svelte-19rp9uw>tr.svelte-19rp9uw>td.svelte-19rp9uw{padding:10px;font-size:14px;position:relative}tr.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw:nth-child(even){background-color:#f2f2f2}table.neumorphic.svelte-19rp9uw tr td.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw:first-child::before{content:"";position:absolute;padding:7px;top:0;left:-5000px;width:10000px;height:100%;z-index:-10}.row.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw{display:flex;flex-direction:row;justify-content:right}#msg.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw{position:relative;left:0;top:0px}button.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw{padding:10px 10px;background:#efefef;border:none;border-radius:10px;color:#000000;font-weight:700;text-align:center;outline:none;cursor:pointer;transition:.2s ease-in-out;box-shadow:-6px -6px 14px rgba(255, 255, 255, .7),\r\n              -6px -6px 10px rgba(255, 255, 255, .5),\r\n              6px 6px 8px rgba(255, 255, 255, .075),\r\n              6px 6px 10px rgba(0, 0, 0, .15)}button.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw:hover{box-shadow:-2px -2px 6px rgba(255, 255, 255, .6),\r\n              -2px -2px 4px rgba(255, 255, 255, .4),\r\n              2px 2px 2px rgba(255, 255, 255, .05),\r\n              2px 2px 4px rgba(0, 0, 0, .1)}button.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw:active{box-shadow:inset -2px -2px 6px rgba(255, 255, 255, .7),\r\n              inset -2px -2px 4px rgba(255, 255, 255, .5),\r\n              inset 2px 2px 2px rgba(255, 255, 255, .075),\r\n              inset 2px 2px 4px rgba(0, 0, 0, .15)}input.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw{background-color:white;padding:7px;border-style:solid;border-color:transparent}.videos.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw.svelte-19rp9uw{padding-top:40px}',
  map: null
};
const Chapters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let msg = "";
  let { data } = $$props;
  let rows = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Bar, "Bar").$$render($$result, { title: "المصادر" }, {}, {})} <div class="videos svelte-19rp9uw"><div class="row svelte-19rp9uw" style="align-items: center;gap:20px">${`<button class="svelte-19rp9uw" data-svelte-h="svelte-13oulj6"><img src="/add.png" style="width: 18px;">

            إضافة مصدر</button>`} <div class="title" data-svelte-h="svelte-1irnjzj">المصادر</div></div> <div id="msg" class="svelte-19rp9uw">${escape(msg)}</div> <hr> ${``}</div> <div class="container svelte-19rp9uw"><table class="neumorphic svelte-19rp9uw"><thead class="svelte-19rp9uw"><tr class="svelte-19rp9uw"><th class="svelte-19rp9uw" data-svelte-h="svelte-va7u82">تعديل</th> <th class="svelte-19rp9uw" data-svelte-h="svelte-1fxbbrz">عنوان ورابط المحاضرة</th> <th class="svelte-19rp9uw"><input type="checkbox" class="svelte-19rp9uw"></th></tr></thead> <tbody class="svelte-19rp9uw">${each(rows, ({ chapterID, title, link, status, questions, answers }, index) => {
    return `<tr class="svelte-19rp9uw">${rows[index].edit ? `<td colspan="3" style="width: 100%;" class="svelte-19rp9uw"><div style="position:absolute;right:200;top:20;"><div class="row svelte-19rp9uw"><button class="svelte-19rp9uw" data-svelte-h="svelte-1mt6ey5"><img src="/ques.png" style="width: 30px;"></button> <button class="svelte-19rp9uw" data-svelte-h="svelte-86l383"><img src="/close.png" style="width: 30px;"> </button></div> <div class="row svelte-19rp9uw"><button class="svelte-19rp9uw" data-svelte-h="svelte-1h9hlyg"><img src="/bell.png" style="width: 25px;height: 20px;"></button> <button class="svelte-19rp9uw" data-svelte-h="svelte-1dryj60"><img src="/done.png" style="width: 25px;height: 20px;"></button> </div></div> <div class="column" style="position: absolute; right: 20px; display: flex; flex-direction: column; justify-content: center; width: 256px; justify-items: center; align-items: baseline; gap: 10px;"><div class="row svelte-19rp9uw"> <input style="border-radius: 10px;" type="text" placeholder="عنوان الفصل " class="svelte-19rp9uw"> <img src="/ab.png" style="width: 30px;"> <input type="number" placeholder="order" style="background-color: white;border-radius:12px;width:40px;"${add_attribute("value", chapterID, 0)} class="svelte-19rp9uw"></div> <div class="row svelte-19rp9uw" style="align-items: center;"><input type="text" style="border-radius: 10px;" placeholder="رابط الملف" class="svelte-19rp9uw"> <img src="/url.png" style="width: 25px;height: 20px;"> </div></div> <br style="margin-top: 40px;"> ${each(questions, (k, i) => {
      return `<div class="row svelte-19rp9uw" style="margin-bottom: 20px;margin-top: 75px;"><button class="svelte-19rp9uw" data-svelte-h="svelte-5m8pzm">X</button> <input style="border-radius: 10px;" placeholder="write the question here"${add_attribute("value", k.q, 0)} class="svelte-19rp9uw"> <div data-svelte-h="svelte-1x52nac">/Q</div></div> ${each(k.op, (d, dindex) => {
        return `<div class="row svelte-19rp9uw" style="margin-right: 40px; margin-top: 5px;"><button class="svelte-19rp9uw" data-svelte-h="svelte-5m8pzm">X</button> <input style="border-radius: 10px;"${add_attribute("value", d, 0)} class="svelte-19rp9uw"> <input type="checkbox" ${answers.includes(d) ? "checked" : ""} class="svelte-19rp9uw"> </div>`;
      })} <button style="position: absolute;right:240px;bottom:10px;" class="svelte-19rp9uw" data-svelte-h="svelte-c49g1n">+</button>`;
    })} </td>` : `<td class="svelte-19rp9uw"><button class="svelte-19rp9uw" data-svelte-h="svelte-135u5f9">Edit</button></td> <td class="svelte-19rp9uw">${escape(title)} : ${escape(link)}</td> <td class="svelte-19rp9uw">${escape(chapterID)} <input type="checkbox" ${status ? "checked" : ""} class="svelte-19rp9uw"> </td>`} </tr>`;
  })}</tbody></table></div>`;
});

export { Chapters as C };
//# sourceMappingURL=Chapters-BbqPo279.js.map
