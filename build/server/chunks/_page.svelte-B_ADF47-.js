import { c as create_ssr_component, v as validate_component } from './ssr-CggYz5VK.js';
import { U as Users } from './Users-CiuJ0OJF.js';
import './Bar-DJqCxwEp.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Users, "Users").$$render($$result, { data }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B_ADF47-.js.map