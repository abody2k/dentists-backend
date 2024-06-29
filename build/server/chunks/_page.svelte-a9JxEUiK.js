import { c as create_ssr_component, v as validate_component } from './ssr-CggYz5VK.js';
import { V as Videos } from './Videos-CwOZV2CB.js';
import './Bar-DdSuA-Vd.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Videos, "Videos").$$render($$result, { data }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a9JxEUiK.js.map
