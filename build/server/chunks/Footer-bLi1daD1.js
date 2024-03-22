import { c as create_ssr_component, v as validate_component } from './ssr-CggYz5VK.js';
import { M as Map } from './Map-L2AhRx-3.js';

const css = {
  code: "#myBtn.svelte-1r3xp41{display:block;bottom:20px;right:20px;z-index:99;background-color:#007bff;color:white;border:none;border-radius:5px;padding:10px 20px;cursor:pointer}#myBtn.svelte-1r3xp41:hover{background-color:#0056b3}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { scrollBoxHeight } = $$props;
  if ($$props.scrollBoxHeight === void 0 && $$bindings.scrollBoxHeight && scrollBoxHeight !== void 0)
    $$bindings.scrollBoxHeight(scrollBoxHeight);
  $$result.css.add(css);
  return `<div class="footer-container"><div class="map-box">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div> <div class="social-media-box" data-svelte-h="svelte-1yzdxh9"><a href="#" class="social-icon">Facebook</a> <a href="#" class="social-icon">Twitter</a> <a href="#" class="social-icon">Instagram</a> <a href="#" class="social-icon">YouTube</a> <a href="#" class="social-icon">LinkedIn</a></div> <button id="myBtn" title="Go to top" class="svelte-1r3xp41" data-svelte-h="svelte-1ac96je">Top</button></div>`;
});

export { Footer as F };
//# sourceMappingURL=Footer-bLi1daD1.js.map
