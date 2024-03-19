import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from './ssr-C5Pny6Bf.js';
import { B as Button } from './Button-Dml-C_Qr.js';

const css = {
  code: `@font-face{font-family:"arimo";src:url("Barlow-Regular.ttf")\r
}.card.svelte-4vfgi{font-family:'arimo';width:300px;padding:20px;background:#E6E7EE;border-radius:15px;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);margin:20px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px}.title.svelte-4vfgi{font-size:1.5em;font-weight:bold;color:navy;margin-top:10px}.text.svelte-4vfgi{font-size:1em;color:black;margin-top:10px}.image.svelte-4vfgi{width:220px;height:220px;border-radius:10px;margin-bottom:10px}`,
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Neumorphic Card" } = $$props;
  let { text = "This is some sample text inside the neumorphic card." } = $$props;
  let { id } = $$props;
  let { src = "" } = $$props;
  let { clickHandler } = $$props;
  let { disableBtn = 0 } = $$props;
  let { size = {} } = $$props;
  let { f } = $$props;
  function clicks() {
    dispatchEvent(new CustomEvent("ocd", { bubbles: true, detail: { id, f } }));
    console.log("dispatched an event");
    clickHandler();
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0)
    $$bindings.clickHandler(clickHandler);
  if ($$props.disableBtn === void 0 && $$bindings.disableBtn && disableBtn !== void 0)
    $$bindings.disableBtn(disableBtn);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.f === void 0 && $$bindings.f && f !== void 0)
    $$bindings.f(f);
  $$result.css.add(css);
  return `<div class="card svelte-4vfgi">${src && src.trim() !== "" ? ` <img${add_attribute("src", src, 0)} alt="Card Image" class="image svelte-4vfgi"${add_attribute(
    "style",
    size ? `width:${size.w}px;height:${size.h}px` : "width:220px;",
    0
  )}>` : ``} <div class="title svelte-4vfgi">${escape(title)}</div> <div class="text svelte-4vfgi"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></div> ${disableBtn != 1 ? `${validate_component(Button, "Button").$$render($$result, { text: "open", clickHandler: clicks }, {}, {})}` : ``}</div>`;
});

export { Card as C };
//# sourceMappingURL=Grid.svelte_svelte_type_style_lang-D_baLCfR.js.map
