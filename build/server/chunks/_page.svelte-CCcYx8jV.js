import { c as create_ssr_component, v as validate_component } from './ssr-CggYz5VK.js';
import { B as Button } from './Button-B3OUjNaN.js';
import { B as Bar } from './Bar-N_OONu60.js';

const css = {
  code: "button.svelte-j2hzoq{padding:15px 30px;background:#E6E7EE;border:none;padding:5px 10px 5px 20px ;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n        -2px -2px 5px 0 rgb(255, 255, 255);border-radius:40px;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal';color:#2e3b6f }button.svelte-j2hzoq:hover{transform:scale(1.05)}button.svelte-j2hzoq:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n               inset -4px -4px 12px #ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div>${validate_component(Bar, "Bar").$$render($$result, { title: "الرئيسية" }, {}, {})} <div style="border-radius: 10px; padding: 7px 15px; position: absolute; right: 10px;">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "فتح الموقع",
      clickHandler: () => {
        location.href = "/";
      }
    },
    {},
    {}
  )}</div> <div style="display: grid; grid-template-columns: auto auto;gap:30px;margin-top:130px;"><button style="padding: 30px;font-weight:bolder; width:390px;height:190px;" class="svelte-j2hzoq" data-svelte-h="svelte-6fj2bx">النتائج</button> <button style="padding: 30px;font-weight:bolder; width:390px;height:190px;" class="svelte-j2hzoq" data-svelte-h="svelte-fa5jna">الحسابات</button> <button style="padding: 30px;font-weight:bolder; width:390px;height:190px;" class="svelte-j2hzoq" data-svelte-h="svelte-quphw6">الاعدادات</button> <button style="padding: 30px;font-weight:bolder; width:390px;height:190px;" class="svelte-j2hzoq" data-svelte-h="svelte-1ljqtyt">الاشتراكات</button></div> <div style="margin:auto;margin-top: 120px;display: flex; justify-content: center; gap: 20px;" data-svelte-h="svelte-1ie9x5j"><button style="border-radius: 100%; padding: 60px; width: 200px; height: 200px;" class="svelte-j2hzoq"><a style="color: navy;" href="/admin/courses">courses</a></button> <button style="border-radius: 100%; padding: 60px; width: 200px; height: 200px;" class="svelte-j2hzoq"><a style="color: navy;" href="/admin/fellowships">fellowships</a></button> <button style="border-radius: 100%; padding: 60px; width: 200px; height: 200px;" class="svelte-j2hzoq"><a style="color: navy;" href="/admin/store">Store</a></button> <button style="border-radius: 100%; padding: 60px; width: 200px; height: 200px;" class="svelte-j2hzoq"><a style="color: navy;" href="/admin/blogs">Blogs</a></button></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CCcYx8jV.js.map
