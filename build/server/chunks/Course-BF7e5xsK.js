import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './ssr-C5Pny6Bf.js';
import { E as Editor } from './Editor-BlEvBm5l.js';
import { B as Bar } from './Bar-BMEbEZZ9.js';

const css = {
  code: ".neumorphic-box.svelte-w3mh1t{margin:20px;padding:20px;width:calc(80vw - 20px);border-radius:13px;background-color:#E6E7EE;box-shadow:inset 5px 5px 12px #808080,\r\n            inset -5px -5px 12px #ffffff}.course-details.svelte-w3mh1t{display:flex;justify-content:space-between;align-items:flex-start;width:100%}.course-info.svelte-w3mh1t{width:60%;display:flex;flex-direction:row;justify-content:space-around;gap:40px}.info-column.svelte-w3mh1t{display:flex;flex-direction:column;justify-content:space-around;margin-right:20px}.title.svelte-w3mh1t{font-size:18px;font-weight:bold;color:#2e3b6f;margin-bottom:5px}.text.svelte-w3mh1t{font-size:14px;color:black;margin-bottom:10px}.lecture-duration-row.svelte-w3mh1t{display:flex;flex-direction:row;justify-content:center;gap:150px;align-items:center}.course-duration.svelte-w3mh1t{font-size:14px;color:#2e3b6f}.join-button.svelte-w3mh1t{color:#090909;padding:0.7em 1.7em;font-size:18px;border-radius:0.5em;background:#e8e8e8;cursor:pointer;border:1px solid #e8e8e8;transition:all 0.3s;box-shadow:6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;margin-top:30px}button.svelte-w3mh1t:active{color:#666;box-shadow:inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff}#img.svelte-w3mh1t{width:240px;height:240px;border-radius:10px}",
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
  if ($$props.makeAnew === void 0 && $$bindings.makeAnew && makeAnew !== void 0)
    $$bindings.makeAnew(makeAnew);
  $$result.css.add(css);
  return `${validate_component(Bar, "Bar").$$render($$result, { title: "" }, {}, {})} <div class="neumorphic-box svelte-w3mh1t"><div class="course-details svelte-w3mh1t"><div class="course-info svelte-w3mh1t"><img${add_attribute("src", src, 0)} id="img" class="svelte-w3mh1t"> <input type="file" style="position:relative;bottom:-220px;right:160px;height: 20px;" accept="image/*"> <div class="info-column svelte-w3mh1t"><div class="title svelte-w3mh1t">${!onlyNew ? `${escape(title)}` : `<input placeholder="Course title" style="border-color: transparent; border-radius: 5px; height: 30px; width: 330px;"${add_attribute("value", title, 0)}>`}</div> <div class="text svelte-w3mh1t">${!onlyNew ? ` <!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END -->` : `${validate_component(Editor, "Editor").$$render(
    $$result,
    {
      htmlContent: description,
      func: (w) => {
        description = w;
      }
    },
    {},
    {}
  )} `}</div>  </div></div></div> <div class="info-column lecture-duration-row svelte-w3mh1t" style="display: flex; flex-direction: row; justify-content: left; /* gap: 150px; */ align-items: center;">${!onlyNew && !onlyNew ? `<button class="join-button svelte-w3mh1t" style="position:relative;" data-svelte-h="svelte-4wxzlo">Edit</button>` : `<div style="display: flex;flex-direction:row; gap:20px;width: 227px;"><button class="join-button svelte-w3mh1t" data-svelte-h="svelte-1rs95jy">Save</button> ${!onlyNew ? `<button class="join-button svelte-w3mh1t" data-svelte-h="svelte-9hay80">X</button>` : ``} <div style="position: relative; top: 44px;">...
              ${``}</div></div>`} <div class="course-duration svelte-w3mh1t">${!onlyNew && !onlyNew ? `Duration : ${escape(duration1)} year and ${escape(duration2)} months` : `<div class="row"><label data-svelte-h="svelte-5dnnyc">المدة:</label> <input style="width: 30px;" placeholder="Course years" type="number"${add_attribute("value", duration1, 0)}> <label data-svelte-h="svelte-g8663g">سنة</label> <input style="width: 30px;" placeholder="Course months" type="number"${add_attribute("value", duration2, 0)}> <label data-svelte-h="svelte-146qjz8">شهر</label></div>`}</div></div></div>`;
});

export { Course as C };
//# sourceMappingURL=Course-BF7e5xsK.js.map
