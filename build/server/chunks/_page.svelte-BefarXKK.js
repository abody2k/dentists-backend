import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-JWmjUSZd.js';

/* empty css                                                               */
const css = {
  code: "button.svelte-pn0und{font-family:'Tajawal';font-size:14px}.profSett.svelte-pn0und{width:95vw;max-width:500px;height:-moz-fit-content;height:fit-content;border-radius:10px;background-color:#e6e7ee;position:relative;overflow:hidden;padding:5px;box-sizing:border-box;display:flex;flex-direction:column}.divv.svelte-pn0und{width:100%;height:-moz-fit-content;height:fit-content;max-height:80vh;overflow:auto}.editSaveCancel.svelte-pn0und{padding:0 10px;min-height:30px;max-height:30px;border:none;border-radius:8px;color:#2e3b6f;font-weight:600;cursor:pointer;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;background-color:#e6e7ee;display:flex;justify-content:center;align-items:center;gap:5px}.editSaveCancel.svelte-pn0und:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.userLogout.svelte-pn0und{margin:20px 10%;width:80%;height:30px;border:1px solid #2e3b6f61;border-radius:5px;cursor:pointer;background-color:transparent;color:red;font-weight:700}.userLogout.svelte-pn0und:active{background-color:white}input.svelte-pn0und{border-radius:5px;padding:5px 0 5px 10px;border:1px solid #2e3b6f40;margin-bottom:10px}.otherBtns.svelte-pn0und{padding:0 10px;min-height:30px;max-height:30px;border:1px solid #2e3b6f61;border-radius:8px;color:#2e3b6f;cursor:pointer;background-color:transparent}.otherBtns.svelte-pn0und:active{background-color:#fff}",
  map: null
};
const UserProfile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { exit } = $$props;
  if ($$props.exit === void 0 && $$bindings.exit && exit !== void 0) $$bindings.exit(exit);
  $$result.css.add(css);
  return `<div${add_attribute(
    "style",
    `    font-family:'Tajawal';
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #2E3B6F;`,
    0
  )}>${``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(UserProfile, "UserProfile").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BefarXKK.js.map
