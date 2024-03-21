import { c as create_ssr_component, e as escape } from './ssr-CggYz5VK.js';

const css = {
  code: ".title.svelte-1xexmqq{color:white;font-weight:bolder;margin:10px}#bar.svelte-1xexmqq{width:100%;height:30px;overflow-y:visible;display:flex;justify-content:space-between;padding:10px;background:rgb(2,0,36);background:linear-gradient(90deg, rgb(0, 17, 36) 0%, rgb(9, 67, 121) 35%, rgb(0, 120, 145) 100%);color:white;margin-top:40px;margin-bottom:30px}",
  map: null
};
const Bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<div id="bar" class="svelte-1xexmqq"><img src="/Logo.png" width="70" height="70" style="position: relative;top:-20px"> <div class="title svelte-1xexmqq" style="text-align: center;position:relative;top:-10px;">${escape(title)}</div> <div data-svelte-h="svelte-m5yccr">رجوع &gt;</div></div>`;
});

export { Bar as B };
//# sourceMappingURL=Bar-DJqCxwEp.js.map
