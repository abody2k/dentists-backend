import { c as create_ssr_component, v as validate_component } from './ssr-C5Pny6Bf.js';
import { U as Users } from './Users-DZ5hCGPP.js';
import './Bar-BMEbEZZ9.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Users, "Users").$$render($$result, { data }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DCdnfK53.js.map
