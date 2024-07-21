import { c as create_ssr_component, v as validate_component } from './ssr-JWmjUSZd.js';
import { U as Users } from './Users-DAJrhKr6.js';
import './Bar-DSmYRrjO.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(Users, "Users").$$render($$result, { data }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-_g18h8uB.js.map
