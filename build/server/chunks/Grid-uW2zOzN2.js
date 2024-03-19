import { c as create_ssr_component, f as each, v as validate_component } from './ssr-C5Pny6Bf.js';
import { C as Card } from './Grid.svelte_svelte_type_style_lang-D_baLCfR.js';

const css = {
  code: ".grid-container.svelte-up02f1{display:grid;grid-template-columns:repeat(3, minmax(200px, 1fr));gap:90px}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { f } = $$props;
  let { showArchivedOnly = false } = $$props;
  let { cardsData = [] } = $$props;
  if ($$props.f === void 0 && $$bindings.f && f !== void 0)
    $$bindings.f(f);
  if ($$props.showArchivedOnly === void 0 && $$bindings.showArchivedOnly && showArchivedOnly !== void 0)
    $$bindings.showArchivedOnly(showArchivedOnly);
  if ($$props.cardsData === void 0 && $$bindings.cardsData && cardsData !== void 0)
    $$bindings.cardsData(cardsData);
  $$result.css.add(css);
  return `     <div class="grid-container svelte-up02f1">${each(
    showArchivedOnly ? cardsData.filter((e) => e.archived) : cardsData,
    ({ title, text, src, clickHandler, id }, index) => {
      return `${validate_component(Card, "Card").$$render(
        $$result,
        {
          f,
          title,
          text,
          src,
          id,
          clickHandler,
          key: title + text
        },
        {},
        {}
      )}`;
    }
  )}</div>`;
});

export { Grid as G };
//# sourceMappingURL=Grid-uW2zOzN2.js.map
