import { c as create_ssr_component, d as add_attribute, v as validate_component } from './ssr-CggYz5VK.js';
import { B as Button } from './Button-B3OUjNaN.js';
import { f as fetchData } from './not-C58Pqu2P.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let firstPassword = "";
  let secondPassword = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<input type="password" placeholder="enter your password"${add_attribute("value", firstPassword, 0)}> <input type="password" placeholder="enter your password again"${add_attribute("value", secondPassword, 0)}> <div>${`<p style="color: cadetblue;" data-svelte-h="svelte-4hj10z">Passwords do match</p>`}</div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Reset password",
      clickHandler: () => {
        fetchData("u/chngp", {
          token: data.token,
          password: firstPassword
        });
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D1ooO89V.js.map
