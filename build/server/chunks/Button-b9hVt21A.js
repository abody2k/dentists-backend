import { c as create_ssr_component, d as add_attribute, e as escape } from './ssr-CggYz5VK.js';

/* empty css                                     */
const css = {
  code: `@font-face{font-family:"arimo";src:url("Barlow-Regular.ttf")\r
}.button.svelte-ou0p7a{padding:15px 30px;background:#E6E7EE;border:none;border-radius:10px;padding:5px 10px 5px 20px ;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r
      -2px -2px 5px 0 rgb(255, 255, 255);border-radius:40px;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'arimo'}.button.svelte-ou0p7a:hover{transform:scale(1.05)}button.svelte-ou0p7a:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r
             inset -4px -4px 12px #ffffff}`,
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { clickHandler } = $$props;
  let { radius = "10px" } = $$props;
  let { src } = $$props;
  let { size } = $$props;
  let { padding } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0)
    $$bindings.clickHandler(clickHandler);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  $$result.css.add(css);
  return `<button class="button svelte-ou0p7a"${add_attribute("style", "border-radius:" + radius + ";" + (padding ? "padding:0px;" : "padding:15px 30px;"), 0)}><div style="display: flex;align-items:center;"><div>${escape(text ? text : "")}</div> ${src ? `<img${add_attribute("src", src, 0)}${add_attribute("style", size ? `width:${size.w}px;height:${size.w}px;` : "", 0)}>` : ``}</div></button>`;
});

export { Button as B };
//# sourceMappingURL=Button-b9hVt21A.js.map