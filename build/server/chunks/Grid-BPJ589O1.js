import { c as create_ssr_component, f as each, v as validate_component, e as escape, h as null_to_empty } from './ssr-CggYz5VK.js';
import { C as Card } from './Grid.svelte_svelte_type_style_lang-B1mwbNS_.js';

const css = {
  code: ".grid-container.svelte-jfxlk{display:grid;grid-template-columns:repeat(auto-fit, minmax(270px, 1fr));display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.Xtabs.svelte-jfxlk{width:30px;height:30px;border-radius:10px;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-tap-highlight-color:transparent}.Xtabs.svelte-jfxlk:hover{transform:scale(1.03)}.Xtabs.svelte-jfxlk:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.XtabsActive.svelte-jfxlk{width:30px;height:30px;border-radius:10px;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;background-color:#e6e7ee;transition:all 0.3s;display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-tap-highlight-color:transparent;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { f } = $$props;
  let { showArchivedOnly = false } = $$props;
  let { nextPage } = $$props;
  let { cardsData = [] } = $$props;
  let { disablePages = false } = $$props;
  let currentPage = 0;
  let { numOfPages } = $$props;
  if ($$props.f === void 0 && $$bindings.f && f !== void 0)
    $$bindings.f(f);
  if ($$props.showArchivedOnly === void 0 && $$bindings.showArchivedOnly && showArchivedOnly !== void 0)
    $$bindings.showArchivedOnly(showArchivedOnly);
  if ($$props.nextPage === void 0 && $$bindings.nextPage && nextPage !== void 0)
    $$bindings.nextPage(nextPage);
  if ($$props.cardsData === void 0 && $$bindings.cardsData && cardsData !== void 0)
    $$bindings.cardsData(cardsData);
  if ($$props.disablePages === void 0 && $$bindings.disablePages && disablePages !== void 0)
    $$bindings.disablePages(disablePages);
  if ($$props.numOfPages === void 0 && $$bindings.numOfPages && numOfPages !== void 0)
    $$bindings.numOfPages(numOfPages);
  $$result.css.add(css);
  return `     <div class="grid-container svelte-jfxlk">${each(
    showArchivedOnly ? cardsData.filter((e) => e.archived) : cardsData.filter((e) => !e.archived),
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
  )}</div> ${!disablePages ? `<div style="width: 100%;margin: 30px 0; display: flex;flex-direction: row;gap: 10px;justify-content: center;align-items: center;"><div class="Xtabs svelte-jfxlk" style="width: 100px;" data-svelte-h="svelte-4hlivz">‹ Previous</div> <div style="width: 50%;display: flex;flex-direction: row;gap: 10px;flex-wrap: wrap;justify-content: center;align-items: center;">${each([...Array(numOfPages)], (i, index) => {
    return `<div class="${escape(null_to_empty(index == currentPage ? "XtabsActive" : "Xtabs"), true) + " svelte-jfxlk"}">${escape(index + 1)} </div>`;
  })}</div> ${!disablePages ? `<div class="Xtabs svelte-jfxlk" style="width: 100px;" data-svelte-h="svelte-1aw3n4d">Next ›</div>` : ``}</div>` : ``}`;
});

export { Grid as G };
//# sourceMappingURL=Grid-BPJ589O1.js.map
