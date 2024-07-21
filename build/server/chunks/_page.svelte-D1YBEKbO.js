import { c as create_ssr_component, v as validate_component } from './ssr-JWmjUSZd.js';
import { U as Users } from './Users-XWAn9jKW.js';
import './Bar-DSmYRrjO.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(Users, "Users").$$render($$result, { data }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D1YBEKbO.js.map
