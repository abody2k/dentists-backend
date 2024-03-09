import { c as create_ssr_component, o as onDestroy, d as add_attribute } from './ssr-CIpp2D7Y.js';

const css = {
  code: "@import 'leaflet/dist/leaflet.css';main.svelte-1nhdkn3 div.svelte-1nhdkn3{height:300px}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapElement;
  onDestroy(async () => {
  });
  $$result.css.add(css);
  return `<main class="svelte-1nhdkn3"><div class="svelte-1nhdkn3"${add_attribute("this", mapElement, 0)}></div> </main>`;
});

export { Map as M };
//# sourceMappingURL=Map-DRdZag4Q.js.map
