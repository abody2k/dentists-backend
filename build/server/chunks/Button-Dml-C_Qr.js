import { c as create_ssr_component, d as add_attribute, e as escape } from './ssr-C5Pny6Bf.js';

/* empty css                                     */
const css = {
  code: `@font-face{font-family:"arimo";src:url("Barlow-Regular.ttf")\r
}.button.svelte-vzduap{padding:15px 30px;background:#E6E7EE;border:none;border-radius:10px;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'arimo'}.button.svelte-vzduap:hover{transform:scale(1.05)}button.svelte-vzduap:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r
             inset -4px -4px 12px #ffffff}`,
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Click me" } = $$props;
  let { clickHandler } = $$props;
  let { radius = "10px" } = $$props;
  let { src } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0)
    $$bindings.clickHandler(clickHandler);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css);
  return `<button class="button svelte-vzduap"${add_attribute("style", "border-radius:" + radius, 0)}>${escape(text)} ${src ? `<img${add_attribute("src", src, 0)}>` : ``}</button>`;
});

export { Button as B };
//# sourceMappingURL=Button-Dml-C_Qr.js.map
