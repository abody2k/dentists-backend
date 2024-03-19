import { c as create_ssr_component, v as validate_component, e as escape, f as each } from './ssr-C5Pny6Bf.js';
import { B as Bar } from './Bar-BMEbEZZ9.js';

/* empty css                                     */
const css = {
  code: '.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks{background-color:#E6E7EE}.container.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks{margin-top:40px;margin-left:90px;widows:100%;right:10;top:100;background-color:#E6E7EE}table.neumorphic.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks{width:80vw;border-spacing:0;color:#212121;text-align:center;overflow:hidden;box-shadow:9px 9px 16px rgba(163, 177, 198, 0.6),\r\n  -9px -9px 16px rgba(255, 255, 255, 0.6)}table.neumorphic.svelte-zijlks thead.svelte-zijlks.svelte-zijlks.svelte-zijlks{box-shadow:9px 9px 16px rgba(163, 177, 198, 0.6)}table.neumorphic.svelte-zijlks th.svelte-zijlks.svelte-zijlks.svelte-zijlks{padding:7px;color:navy;font-weight:bolder}table.neumorphic.svelte-zijlks>tbody.svelte-zijlks>tr.svelte-zijlks>td.svelte-zijlks{padding:10px;font-size:14px;position:relative}tr.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks:nth-child(even){background-color:#f2f2f2}table.neumorphic.svelte-zijlks tr td.svelte-zijlks.svelte-zijlks.svelte-zijlks:first-child::before{content:"";position:absolute;padding:7px;top:0;left:-5000px;width:10000px;height:100%;z-index:-10}.row.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks{display:flex;flex-direction:row;justify-content:right}#msg.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks{position:relative;left:0;top:0px}button.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks{padding:10px 10px;background:#efefef;border:none;border-radius:10px;color:#000000;font-weight:700;text-align:center;outline:none;cursor:pointer;transition:.2s ease-in-out;box-shadow:-6px -6px 14px rgba(255, 255, 255, .7),\r\n              -6px -6px 10px rgba(255, 255, 255, .5),\r\n              6px 6px 8px rgba(255, 255, 255, .075),\r\n              6px 6px 10px rgba(0, 0, 0, .15)}button.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks:hover{box-shadow:-2px -2px 6px rgba(255, 255, 255, .6),\r\n              -2px -2px 4px rgba(255, 255, 255, .4),\r\n              2px 2px 2px rgba(255, 255, 255, .05),\r\n              2px 2px 4px rgba(0, 0, 0, .1)}button.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks:active{box-shadow:inset -2px -2px 6px rgba(255, 255, 255, .7),\r\n              inset -2px -2px 4px rgba(255, 255, 255, .5),\r\n              inset 2px 2px 2px rgba(255, 255, 255, .075),\r\n              inset 2px 2px 4px rgba(0, 0, 0, .15)}input.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks{background-color:white;padding:7px;border-style:solid;border-color:transparent}.videos.svelte-zijlks.svelte-zijlks.svelte-zijlks.svelte-zijlks{padding-top:40px}',
  map: null
};
const Videos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let msg = "";
  let { data } = $$props;
  let rows = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Bar, "Bar").$$render($$result, { title: "المحاضرات" }, {}, {})} <div class="videos svelte-zijlks" style="background-color: #E6E7EE; "><div class="row svelte-zijlks">${`<button class="svelte-zijlks" data-svelte-h="svelte-13cp2i6"><div style="display: flex;align-items:center" class="svelte-zijlks"><img src="/add.png" style="width: 30px;" class="svelte-zijlks"> <div class="svelte-zijlks">إضافة محاضرة</div></div></button>`} <div class="videoTitle svelte-zijlks" data-svelte-h="svelte-1wp7qao">المحاضرات</div></div> <div id="msg" class="svelte-zijlks">${escape(msg)}</div> <hr class="svelte-zijlks"> ${``}</div> <div class="container svelte-zijlks"><table class="neumorphic svelte-zijlks"><thead class="svelte-zijlks"><tr class="svelte-zijlks"><th class="svelte-zijlks" data-svelte-h="svelte-1tyrcoh">تعديل او حذف</th> <th class="svelte-zijlks" data-svelte-h="svelte-1fxbbrz">عنوان ورابط المحاضرة</th> <th class="svelte-zijlks"><input type="checkbox" class="svelte-zijlks"></th></tr></thead> <tbody class="svelte-zijlks">${each(rows.sort((a, b) => a.order - b.order), ({ order, videoTitle, videoUrl, status }, index) => {
    return `<tr class="svelte-zijlks">${rows[index].edit ? `<td colspan="3" style="width: 100%; width: 100%; height: 220px;" class="svelte-zijlks"><div style="position:absolute;right:200;top:20;" class="svelte-zijlks"><div class="row svelte-zijlks"><button class="svelte-zijlks" data-svelte-h="svelte-1hv97e6"><img src="/del.png" style="width: 30px;" class="svelte-zijlks"></button> <button class="svelte-zijlks" data-svelte-h="svelte-1fqt72r"><img src="/close.png" style="width: 30px;" class="svelte-zijlks"> </button></div> <div class="row svelte-zijlks"><button class="svelte-zijlks" data-svelte-h="svelte-1h9hlyg"><img src="/bell.png" style="width: 25px;height: 20px;" class="svelte-zijlks"></button> <button class="svelte-zijlks" data-svelte-h="svelte-16fu38u"><img src="/done.png" style="width: 25px;height: 20px;" class="svelte-zijlks"></button> </div></div> <div style="position: absolute; right: 20px; display: flex; flex-direction: column; justify-content: center; width: 256px; justify-items: center; align-items: baseline; gap: 10px;" class="svelte-zijlks"><div class="row svelte-zijlks"> <input type="text" placeholder="  العنوان الجديد للمحاضرة" class="svelte-zijlks"> <img src="/ab.png" style="width: 30px;" class="svelte-zijlks"> <input type="number" placeholder="order" style="background-color: white;border-radius:12px;width:40px;" class="svelte-zijlks"></div> <div class="row svelte-zijlks" style="align-items: center;"><input type="text" placeholder="  الرابط الجديد للمحاضرة" class="svelte-zijlks"> <img src="/url.png" style="width: 25px;height: 20px;" class="svelte-zijlks"> </div></div> </td>` : `<td class="svelte-zijlks"><button class="svelte-zijlks" data-svelte-h="svelte-135u5f9">Edit</button></td> <td class="svelte-zijlks">${escape(videoTitle)} : ${escape(videoUrl)}</td> <td class="svelte-zijlks">${escape(order)} <input type="checkbox" ${status ? "checked" : ""} class="svelte-zijlks"> </td>`} </tr>`;
  })}</tbody></table></div>`;
});

export { Videos as V };
//# sourceMappingURL=Videos-rLy0O4rc.js.map
