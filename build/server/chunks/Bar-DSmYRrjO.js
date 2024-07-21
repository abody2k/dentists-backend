import { c as create_ssr_component, e as escape } from './ssr-JWmjUSZd.js';

/* empty css                                  */
const css = {
  code: "header.svelte-ivf8z0.svelte-ivf8z0{position:relative;top:10px;width:100%;height:100px;margin:auto;display:flex;align-items:center;z-index:99}header.svelte-ivf8z0 nav button.svelte-ivf8z0{position:absolute;left:100%;top:50%;transform:translate(-110%, -50%);text-align:center;background-color:transparent;width:100px;border:none;cursor:pointer;font-family:'Tajawal';font-size:18px;color:white;outline:none;-webkit-tap-highlight-color:transparent}nav.svelte-ivf8z0.svelte-ivf8z0{position:relative;width:100%;height:60px;margin:0;background:linear-gradient(0.25turn, #2E3B6F, #39879b);display:flex;justify-content:center;align-items:center;border-radius:30px;color:#fff;font-size:20px;font-weight:bold}.circle1.svelte-ivf8z0.svelte-ivf8z0{position:absolute;left:100px;width:140px;height:140px;background-color:#e6e7ee;border-radius:50%;display:flex;justify-content:center;align-items:center}.circle3LOGO.svelte-ivf8z0.svelte-ivf8z0{position:relative;width:80px;height:80px;background-size:cover;overflow:hidden;cursor:pointer}",
  map: null
};
const Bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { auth = 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.auth === void 0 && $$bindings.auth && auth !== void 0) $$bindings.auth(auth);
  $$result.css.add(css);
  return `<header style="margin-bottom: 20px;" class="svelte-ivf8z0"><nav class="svelte-ivf8z0"><p>${escape(title)}</p> <button class="svelte-ivf8z0" data-svelte-h="svelte-1nna8zf">رجوع ›</button> <div class="circle1 svelte-ivf8z0" data-svelte-h="svelte-8c1u53"><img src="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png" class="circle3LOGO svelte-ivf8z0"></div></nav></header>`;
});

export { Bar as B };
//# sourceMappingURL=Bar-DSmYRrjO.js.map
