import { c as create_ssr_component, f as each, v as validate_component, e as escape } from './ssr-CggYz5VK.js';
import { C as Card } from './Grid.svelte_svelte_type_style_lang-B1mwbNS_.js';

const css = {
  code: ".grid-container.svelte-guq338{display:grid;grid-template-columns:repeat(auto-fit, minmax(270px, 1fr));display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.Xtabs.svelte-guq338{width:30px;height:30px;border-radius:10px;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-tap-highlight-color:transparent}.Xtabs.svelte-guq338:hover{transform:scale(1.03)}.Xtabs.svelte-guq338:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { f } = $$props;
  let { showArchivedOnly = false } = $$props;
  let { nextPage } = $$props;
  let { cardsData = [] } = $$props;
  let { numOfPages } = $$props;
  if ($$props.f === void 0 && $$bindings.f && f !== void 0)
    $$bindings.f(f);
  if ($$props.showArchivedOnly === void 0 && $$bindings.showArchivedOnly && showArchivedOnly !== void 0)
    $$bindings.showArchivedOnly(showArchivedOnly);
  if ($$props.nextPage === void 0 && $$bindings.nextPage && nextPage !== void 0)
    $$bindings.nextPage(nextPage);
  if ($$props.cardsData === void 0 && $$bindings.cardsData && cardsData !== void 0)
    $$bindings.cardsData(cardsData);
  if ($$props.numOfPages === void 0 && $$bindings.numOfPages && numOfPages !== void 0)
    $$bindings.numOfPages(numOfPages);
  $$result.css.add(css);
  return `     <div class="grid-container svelte-guq338">${each(
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
  )}</div> <div style="width: 100%;margin: 30px 0; display: flex;flex-direction: row;gap: 10px;justify-content: center;align-items: center;"><div class="Xtabs svelte-guq338" style="width: 100px;" data-svelte-h="svelte-1o5r6wu">‹ Previous</div> <div style="width: 50%;display: flex;flex-direction: row;gap: 10px;flex-wrap: wrap;justify-content: center;align-items: center;">${each([...Array(numOfPages)], (i, index) => {
    return `<div class="Xtabs svelte-guq338">${escape(index + 1)} </div>`;
  })}</div> <div class="Xtabs svelte-guq338" style="width: 100px;" data-svelte-h="svelte-194r7fd">Next ›</div></div>`;
});

export { Grid as G };
//# sourceMappingURL=Grid-qijSyeFv.js.map
