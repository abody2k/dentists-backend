import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from './ssr-JWmjUSZd.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pres = [];
  let names = [];
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<main><table><thead data-svelte-h="svelte-12zzm8p"><tr><th>Name</th><th>Mark</th></tr></thead><tbody>${each(pres, (p) => {
    return `<tr><td>${escape(names.find((e) => e.i == p.i).n)}</td> <td>${escape(p.g)}</td> </tr>`;
  })} </tbody><tfoot><td${add_attribute("colspan", 2, 0)}><button data-svelte-h="svelte-g3l2ov">Export XLSX</button></td></tfoot></table></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-H_vTADou.js.map
