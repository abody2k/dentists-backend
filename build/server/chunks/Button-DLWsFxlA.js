import { c as create_ssr_component, d as add_attribute, e as escape } from './ssr-JWmjUSZd.js';

/* empty css                                     */
const css = {
  code: `.svelte-1ttiqw3{color:#2e3b6f }@font-face{font-family:"Tajawal";src:url("Barlow-Regular.ttf")\r
}.button.svelte-1ttiqw3{padding:15px 30px;background:#E6E7EE;border:none;padding:5px 10px 5px 20px ;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r
      -2px -2px 5px 0 rgb(255, 255, 255);border-radius:40px;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal';color:#2e3b6f }.button.svelte-1ttiqw3:hover{transform:scale(1.05)}button.svelte-1ttiqw3:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r
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
  let { marginL } = $$props;
  let { width } = $$props;
  let { useTJ } = $$props;
  let { height } = $$props;
  let { font } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0) $$bindings.clickHandler(clickHandler);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0) $$bindings.radius(radius);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.marginL === void 0 && $$bindings.marginL && marginL !== void 0) $$bindings.marginL(marginL);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.useTJ === void 0 && $$bindings.useTJ && useTJ !== void 0) $$bindings.useTJ(useTJ);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.font === void 0 && $$bindings.font && font !== void 0) $$bindings.font(font);
  $$result.css.add(css);
  return `<button class="button svelte-1ttiqw3"${add_attribute("style", (radius ? "border-radius:" + radius + ";" : "") + (padding ? "padding:0px;" : "padding:7px 15px;") + (width ? "width:" + width : "") + (height ? "height:" + height : ""), 0)}><div style="display: flex;align-items:center;text-align: center;" class="svelte-1ttiqw3"><div${add_attribute("style", "color:#2e3b6f ;" + (useTJ ? "font-family:Tajawal" : "") + ";margin:auto;color:#2e3b6f;font-weight:bolder;", 0)} class="svelte-1ttiqw3">${escape(text ? text : "")}</div> ${src ? `<img${add_attribute("src", src, 0)}${add_attribute("style", (size ? `width:${size.w}px;height:${size.w}px;` : "") + (marginL ? "margin-left:" + marginL + ";" : ""), 0)} class="svelte-1ttiqw3">` : ``}</div></button>`;
});

export { Button as B };
//# sourceMappingURL=Button-DLWsFxlA.js.map
