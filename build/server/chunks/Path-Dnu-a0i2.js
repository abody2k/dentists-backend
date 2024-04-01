import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from './ssr-CZ3Mxc3I.js';

/* empty css                                   */
const css = {
  code: "a.svelte-jozder{color:#2e3b6f;padding:7px;font-weight:bold}.path.svelte-jozder{margin:20px;padding:5px;border-radius:13px;background:#e6e7ee;box-shadow:inset 6px 6px 4px #babbc1, inset -6px -6px 4px #ffffff}",
  map: null
};
const Path = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css);
  return `<div class="path svelte-jozder">${each(links, (link, i) => {
    return ` <a${add_attribute("href", link.link, 0)} class="svelte-jozder">${escape(link.txt)}</a> ${i + 1 != links.length ? `&gt;&gt;` : ``} `;
  })}</div>`;
});

export { Path as P };
//# sourceMappingURL=Path-Dnu-a0i2.js.map
