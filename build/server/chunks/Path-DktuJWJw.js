import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from './ssr-JWmjUSZd.js';

/* empty css                                   */
const css = {
  code: "a.svelte-12qufyc{color:#2e3b6f;padding:7px;font-weight:bold}.path.svelte-12qufyc{margin:20px;padding:5px;border-radius:5px;background:#e6e7ee;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;font-size:small}",
  map: null
};
const Path = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);
  $$result.css.add(css);
  return `<div class="path svelte-12qufyc">${each(links, (link, i) => {
    return ` <a${add_attribute("href", link.link, 0)} class="svelte-12qufyc">${escape(link.txt)}</a> ${i + 1 != links.length ? `&gt;&gt;` : ``} `;
  })}</div>`;
});

export { Path as P };
//# sourceMappingURL=Path-DktuJWJw.js.map
