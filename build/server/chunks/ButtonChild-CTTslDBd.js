import { c as create_ssr_component, d as add_attribute } from './ssr-JWmjUSZd.js';

/* empty css                                          */
const css = {
  code: `@font-face{font-family:"Tajawal";src:url("/Barlow-Regular.ttf")\r
}.button.svelte-zcee2u{padding:2px 30px;background:#E6E7EE;border:none;border-radius:10px;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal'}.button.svelte-zcee2u:hover{transform:scale(1.05)}button.svelte-zcee2u:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r
             inset -4px -4px 12px #ffffff}`,
  map: null
};
const ButtonChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clickHandler } = $$props;
  let { radius = "10px" } = $$props;
  let { child } = $$props;
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0) $$bindings.clickHandler(clickHandler);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0) $$bindings.radius(radius);
  if ($$props.child === void 0 && $$bindings.child && child !== void 0) $$bindings.child(child);
  $$result.css.add(css);
  return `<button class="button svelte-zcee2u"${add_attribute("style", "border-radius:" + radius, 0)}><!-- HTML_TAG_START -->${child}<!-- HTML_TAG_END --></button>`;
});

export { ButtonChild as B };
//# sourceMappingURL=ButtonChild-CTTslDBd.js.map
