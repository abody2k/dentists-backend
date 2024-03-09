import { c as create_ssr_component, v as validate_component } from './ssr-CIpp2D7Y.js';
import { U as Users } from './Users-BLOrib6N.js';
import './Bar-CwvRxFXa.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Users, "Users").$$render($$result, { data }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte--lReqVyI.js.map
