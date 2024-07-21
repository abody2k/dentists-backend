import { c as create_ssr_component, v as validate_component } from './ssr-JWmjUSZd.js';
import { T as TopBar } from './TopBar-BR8uVVmE.js';
import 'firebase/app';
import 'firebase/messaging';
import 'jsqr';

const css = {
  code: ".IDShare.svelte-1m8vc8q{width:500px;height:500px;border-radius:10px;background-color:#e6e7ee;position:relative}.divv.svelte-1m8vc8q{width:100%;height:auto;position:absolute;top:45px;display:flex;flex-direction:column;align-items:center;background-color:transparent;gap:10px}.downloadQR.svelte-1m8vc8q{width:220px;height:40px;border:none;border-radius:10px;background-color:#39879b;cursor:pointer;color:#ffffff;font-size:16px;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n    -2px -2px 5px 0 rgb(255, 255, 255)}.downloadQR.svelte-1m8vc8q:active{box-shadow:none}button.svelte-1m8vc8q{font-family:'Tajawal'}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} ${``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BAJKfBdU.js.map
