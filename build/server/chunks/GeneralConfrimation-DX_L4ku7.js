import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-CggYz5VK.js';
import { B as Button } from './Button-B3OUjNaN.js';

const GeneralConfrimation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { msg } = $$props;
  let { func } = $$props;
  let { action } = $$props;
  if ($$props.msg === void 0 && $$bindings.msg && msg !== void 0)
    $$bindings.msg(msg);
  if ($$props.func === void 0 && $$bindings.func && func !== void 0)
    $$bindings.func(func);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  return `<div id="Confirmation" style="background-color: rgb(0 0 0 / 30%); position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; z-index: 100000; top: 0px;"><div style="align-self: center; width: 400px; height: 255px; display: flex; background-color: white; border-radius: 30px;display:flex;flex-direction:column;justify-content: center; gap: 20px; text-align: center;"><div>${escape(msg)}</div> <div style="display: flex;justify-content:center;gap:20px;">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "نعم",
      clickHandler: () => {
        action().then(() => {
          document.getElementById("Confirmation").remove();
          func(true);
        }).catch(() => {
          document.getElementById("Confirmation").remove();
        });
      }
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "لا",
      clickHandler: () => {
        document.getElementById("Confirmation").remove();
      }
    },
    {},
    {}
  )}</div></div></div>`;
});

export { GeneralConfrimation as default };
//# sourceMappingURL=GeneralConfrimation-DX_L4ku7.js.map
