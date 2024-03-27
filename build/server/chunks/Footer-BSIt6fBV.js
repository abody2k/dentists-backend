import { c as create_ssr_component, d as add_attribute, v as validate_component } from './ssr-C5Pny6Bf.js';
import { M as Map } from './Map-TAo5RPfk.js';

const css = {
  code: "#myBtn.svelte-gcao8r{position:fixed;bottom:20px;right:20px;z-index:9999;border:none;border-radius:5px;padding:10px 20px;cursor:pointer}#myBtn.svelte-gcao8r:hover{background-color:#0056b3}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { scrollBoxHeight } = $$props;
  let { outsider } = $$props;
  if ($$props.scrollBoxHeight === void 0 && $$bindings.scrollBoxHeight && scrollBoxHeight !== void 0)
    $$bindings.scrollBoxHeight(scrollBoxHeight);
  if ($$props.outsider === void 0 && $$bindings.outsider && outsider !== void 0)
    $$bindings.outsider(outsider);
  $$result.css.add(css);
  return `<div class="footer-container"${add_attribute(
    "style",
    !outsider ? `top:${scrollBoxHeight + 690}px;` : "position:relative;bottom:0px;top:0px;",
    0
  )}><div class="map-box">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div> <div class="social-media-box" data-svelte-h="svelte-1yzdxh9"><a href="#" class="social-icon">Facebook</a> <a href="#" class="social-icon">Twitter</a> <a href="#" class="social-icon">Instagram</a> <a href="#" class="social-icon">YouTube</a> <a href="#" class="social-icon">LinkedIn</a></div> <button id="myBtn" title="Go to top" class="svelte-gcao8r" data-svelte-h="svelte-xxr1l4"><img src="/up-arrow.png" width="30"></button></div>`;
});

export { Footer as F };
//# sourceMappingURL=Footer-BSIt6fBV.js.map
