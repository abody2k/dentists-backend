import { c as create_ssr_component, d as each, v as validate_component } from './ssr-CZ3Mxc3I.js';
import { C as Card } from './Grid.svelte_svelte_type_style_lang-BPV-W05k.js';

const css = {
  code: ".grid-container.svelte-xgm7bx{display:grid;grid-template-columns:repeat(auto-fit, minmax(270px, 1fr));display:flex;flex-wrap:wrap;justify-content:center;align-items:center}",
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
  return `     <div class="grid-container svelte-xgm7bx">${each(
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
          key: title + text,
          noBtn: 1,
          disableBtn: true
        },
        {},
        {}
      )}`;
    }
  )}</div>`;
});

export { Grid as G };
//# sourceMappingURL=Grid-CzHl0ckX.js.map
