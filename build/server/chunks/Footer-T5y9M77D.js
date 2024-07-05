import { c as create_ssr_component, d as add_attribute, v as validate_component, o as onDestroy } from './ssr-JWmjUSZd.js';

/* empty css                                  */
const css$1 = {
  code: "main.svelte-xi60ah div.svelte-xi60ah{height:300px}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapElement;
  let { draggable = false } = $$props;
  onDestroy(async () => {
  });
  if ($$props.draggable === void 0 && $$bindings.draggable && draggable !== void 0) $$bindings.draggable(draggable);
  $$result.css.add(css$1);
  return `<main style="overflow: hidden;" class="svelte-xi60ah"><div class="svelte-xi60ah"${add_attribute("this", mapElement, 0)}></div> </main>`;
});
const css = {
  code: ".svelte-1cbzdbg{color:white}#myBtn.svelte-1cbzdbg{position:fixed;bottom:20px;right:20px;z-index:9999;border:none;border-radius:5px;padding:10px 20px;cursor:pointer}#myBtn.svelte-1cbzdbg:hover{background-color:#0056b3}#myBtn.svelte-1cbzdbg{position:fixed;bottom:20px;right:20px;z-index:9999;border:none;border-radius:100px;padding:0px 0px;cursor:pointer;background-color:transparent}#myBtn.svelte-1cbzdbg:hover{background-color:#2e3b6f;box-shadow:0 5px 10px  #00000069}.topIcon.svelte-1cbzdbg{width:40px;margin-bottom:-3px;border-radius:100px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { scrollBoxHeight } = $$props;
  let { outsider } = $$props;
  if ($$props.scrollBoxHeight === void 0 && $$bindings.scrollBoxHeight && scrollBoxHeight !== void 0) $$bindings.scrollBoxHeight(scrollBoxHeight);
  if ($$props.outsider === void 0 && $$bindings.outsider && outsider !== void 0) $$bindings.outsider(outsider);
  $$result.css.add(css);
  return `<div class="footer-container svelte-1cbzdbg"${add_attribute(
    "style",
    (!outsider ? `top:${scrollBoxHeight + 690}px;` : "position:relative;bottom:0px;top:0px;") + "z-index:999;",
    0
  )}><div class="map-box svelte-1cbzdbg" style="border-radius: 5px; overflow: hidden; margin-left: 30px; margin-bottom: 20px; height: 300px; width: 50%;">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div> <div class="social-media-box svelte-1cbzdbg" style="width: 30vw;margin:auto;" data-svelte-h="svelte-1gfoze"><div style="display: flex; flex-direction: row-reverse; justify-content: space-around; align-items: center;" class="svelte-1cbzdbg"><a href="#" class="social-icon svelte-1cbzdbg"><img style="filter: brightness(0) invert(1); width: 50px;" src="/FB.png" class="svelte-1cbzdbg"></a> <div class="svelte-1cbzdbg">Facebook</div></div> <div style="display: flex; flex-direction: row-reverse; justify-content: space-around; align-items: center;" class="svelte-1cbzdbg"><a href="#" class="social-icon svelte-1cbzdbg"><img style="filter: brightness(0) invert(1); width: 50px;" src="/IG.png" class="svelte-1cbzdbg"></a> <div class="svelte-1cbzdbg">Instgram</div></div> <div style="display: flex; flex-direction: row-reverse; justify-content: space-around; align-items: center;" class="svelte-1cbzdbg"><a href="#" class="social-icon svelte-1cbzdbg"><img style="filter: brightness(0) invert(1); width: 50px;" src="/TA.png" class="svelte-1cbzdbg"></a> <div class="svelte-1cbzdbg">Telegram</div></div> <div style="display: flex; flex-direction: row-reverse; justify-content: space-around; align-items: center;" class="svelte-1cbzdbg"><a href="#" class="social-icon svelte-1cbzdbg"><img style="filter: brightness(0) invert(1); width: 50px;" src="/WA.png" class="svelte-1cbzdbg"></a> <div class="svelte-1cbzdbg">WhatsApp</div></div> <div style="display: flex;align-items:center;" class="svelte-1cbzdbg"><a href="#" class="social-icon svelte-1cbzdbg"><img style="filter: brightness(0) invert(1); width: 50px;" src="/AT2.png" class="svelte-1cbzdbg"></a> <div style="font-weight: bolder;display:inline;" class="svelte-1cbzdbg">www.something.echo.com</div></div> <div style="display: flex;align-items:center;" class="svelte-1cbzdbg"><a href="#" class="social-icon svelte-1cbzdbg"><img style="filter: brightness(0) invert(1); width: 50px;" src="/PH.png" class="svelte-1cbzdbg"></a> <div style="font-weight: bolder;display:inline;" class="svelte-1cbzdbg">+96477#######</div></div></div> <button id="myBtn" title="Go to top" class="svelte-1cbzdbg" data-svelte-h="svelte-1dnio3h"><img src="/up-arrow.png" class="topIcon svelte-1cbzdbg"></button></div>`;
});

export { Footer as F };
//# sourceMappingURL=Footer-T5y9M77D.js.map
