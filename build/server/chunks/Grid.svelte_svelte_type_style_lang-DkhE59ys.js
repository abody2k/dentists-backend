import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from './ssr-C5Pny6Bf.js';
import { B as Button } from './Button-C3DugOHS.js';

/* empty css                                   */
const css = {
  code: `@font-face{font-family:"arimo";src:url("Barlow-Regular.ttf")\r
}.card.svelte-1n3iv9b{font-family:'arimo';width:238px;padding:17px;background:#E6E7EE;border-radius:10px;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);margin:20px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;height:330px;transition:transform 0.2s ease}.card.svelte-1n3iv9b:hover{transform:scale(1.05)}.title.svelte-1n3iv9b{font-size:18px;font-weight:bold;color:navy;margin-top:-4px}.text.svelte-1n3iv9b{font-size:13px;color:black;margin-top:-5px;margin:0px;height:29px}.image.svelte-1n3iv9b{width:220px;height:220px;border-radius:10px;margin-bottom:10px}`,
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
  let { noBtn } = $$props;
  let { f } = $$props;
  function clicks() {
    dispatchEvent(new CustomEvent("ocd", { bubbles: true, detail: { id, f } }));
    console.log("dispatched an event");
    console.log([id, src, clickHandler]);
    if (disableBtn) {
      location.href += "/" + id;
    }
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
  if ($$props.noBtn === void 0 && $$bindings.noBtn && noBtn !== void 0)
    $$bindings.noBtn(noBtn);
  if ($$props.f === void 0 && $$bindings.f && f !== void 0)
    $$bindings.f(f);
  $$result.css.add(css);
  return `<div class="card svelte-1n3iv9b">${src && src.trim() !== "" ? ` <img${add_attribute("src", src, 0)} alt="Card Image" class="image svelte-1n3iv9b"${add_attribute(
    "style",
    size ? `width:${size.w}px;height:${size.h}px` : "width:220px;",
    0
  )}>` : ``} <div class="title svelte-1n3iv9b">${escape(title)}</div> <div class="text svelte-1n3iv9b"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></div> ${disableBtn != 1 ? `${validate_component(Button, "Button").$$render($$result, { text: "open", clickHandler: clicks }, {}, {})}` : ``}</div>`;
});

export { Card as C };
//# sourceMappingURL=Grid.svelte_svelte_type_style_lang-DkhE59ys.js.map