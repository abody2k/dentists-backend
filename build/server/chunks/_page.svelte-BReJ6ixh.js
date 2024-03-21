import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from './ssr-CggYz5VK.js';
import { B as Button } from './Button-b9hVt21A.js';

const css$1 = {
  code: ".card.svelte-1pphs1d{width:304px;height:174px;border-radius:19px;background:#e6e7ee;box-shadow:7px 7px 6px #babbc1,\r\n             -7px -7px 6px #ffffff}.row.svelte-1pphs1d{display:flex;flex-direction:row;justify-content:space-around;width:100%}.column.svelte-1pphs1d{display:flex;flex-direction:column;align-items:center;justify-content:space-around;height:100%}",
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { products } = $$props;
  let { number } = $$props;
  let { del } = $$props;
  let { save } = $$props;
  let { cancel } = $$props;
  let mode = 2;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.del === void 0 && $$bindings.del && del !== void 0)
    $$bindings.del(del);
  if ($$props.save === void 0 && $$bindings.save && save !== void 0)
    $$bindings.save(save);
  if ($$props.cancel === void 0 && $$bindings.cancel && cancel !== void 0)
    $$bindings.cancel(cancel);
  $$result.css.add(css$1);
  return `<div class="card svelte-1pphs1d"><div class="column svelte-1pphs1d"><div class="row svelte-1pphs1d"><div style="flex: 9;"></div> ${mode == 0 ? `<div>${escape(title)}</div> <div style="text-align: end;flex:2;">${escape(number)}</div>` : `<input${add_attribute("value", title, 0)}> <input type="number" style="text-align: end;width:20px;"${add_attribute("value", number, 0)}>`}</div> <div class="row svelte-1pphs1d">${mode == 0 || mode == 1 ? `${each(products, (product) => {
    return `<div>${escape(product)}</div>`;
  })}` : ``}</div> <div class="row svelte-1pphs1d">${mode == 0 ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      padding: true,
      clickHandler: () => {
        mode = 1;
      },
      src: "/edit.png"
    },
    {},
    {}
  )}` : `${mode == 1 ? `<div class="row svelte-1pphs1d">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: { w: 30 },
      padding: true,
      src: "/save.png",
      clickHandler: () => {
        mode = 0;
        save();
      }
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: { w: 30 },
      padding: true,
      src: "/cancel.png",
      clickHandler: () => {
        mode = 0;
      }
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: { w: 30 },
      padding: true,
      src: "/del.png",
      clickHandler: () => {
        mode = 0;
        del();
      }
    },
    {},
    {}
  )}</div>` : `<div class="row svelte-1pphs1d">${validate_component(Button, "Button").$$render(
    $$result,
    {
      src: "/save.png",
      padding: true,
      size: { w: 30 },
      clickHandler: () => {
        mode = 0;
        save();
      }
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      src: "/cancel.png",
      padding: true,
      size: { w: 30 },
      clickHandler: () => {
        mode = 0;
        cancel();
      }
    },
    {},
    {}
  )}</div>`}`}</div></div></div>`;
});
const css = {
  code: ".svelte-1u6dyu9{color:navy}.title.svelte-1u6dyu9{width:95%;text-align:right;font-size:27px;font-weight:bold;margin-top:40px;margin-bottom:20px}.row.svelte-1u6dyu9{display:flex;flex-direction:row}.column.svelte-1u6dyu9{display:flex;flex-direction:column}input.svelte-1u6dyu9{height:10px;max-width:490px;border:none;outline:none;background:none;font-size:18px;color:#555;padding:15px 5px 10px 20px;box-shadow:inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;border-radius:25px}input.svelte-1u6dyu9::placeholder{color:#555;transition:all 0.3s ease}input.svelte-1u6dyu9:focus::placeholder{color:#999}.op.svelte-1u6dyu9:hover{background-color:#ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="row svelte-1u6dyu9"><button class="svelte-1u6dyu9" data-svelte-h="svelte-1rv1mn6">العروض</button> <button class="svelte-1u6dyu9" data-svelte-h="svelte-1jzlhsa">الاقسام</button></div> ${`${validate_component(Section, "Section").$$render(
    $$result,
    {
      title: "hola",
      number: "12",
      products: ["milk", "chairs"]
    },
    {},
    {}
  )}`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BReJ6ixh.js.map
