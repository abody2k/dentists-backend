import { c as create_ssr_component, d as add_attribute, v as validate_component } from './ssr-CggYz5VK.js';
import { M as Map } from './Map-L2AhRx-3.js';

const css = {
  code: "#myBtn.svelte-19b9lnh{position:fixed;bottom:20px;right:20px;z-index:9999;background-color:#007bff;color:white;border:none;border-radius:5px;padding:10px 20px;cursor:pointer}#myBtn.svelte-19b9lnh:hover{background-color:#0056b3}",
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
    !outsider ? "top:{scrollBoxHeight+690}px;" : "position:relative;bottom:0px;top:0px;",
    0
  )}><div class="map-box">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div> <div class="social-media-box" data-svelte-h="svelte-1yzdxh9"><a href="#" class="social-icon">Facebook</a> <a href="#" class="social-icon">Twitter</a> <a href="#" class="social-icon">Instagram</a> <a href="#" class="social-icon">YouTube</a> <a href="#" class="social-icon">LinkedIn</a></div> <button id="myBtn" title="Go to top" class="svelte-19b9lnh" data-svelte-h="svelte-1ac96je">Top</button></div>`;
});

export { Footer as F };
//# sourceMappingURL=Footer-Da0rjbkK.js.map
