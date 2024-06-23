import { c as create_ssr_component } from './ssr-CggYz5VK.js';
import 'firebase/app';
import 'firebase/messaging';
import 'jsqr';

const css = {
  code: `nav.svelte-19osa18 ul.svelte-19osa18{list-style:none;margin:auto;padding:0;display:flex}nav.svelte-19osa18 ul li.svelte-19osa18{margin-right:14px;margin-top:14px;transition:font-size 0.5s;text-align:center;font-size:18px}li.svelte-19osa18.svelte-19osa18:hover{cursor:pointer;font-size:21px;transition:font-size 0.5s}li.svelte-19osa18.svelte-19osa18:left{font-size:18px;transition:font-size 0.5s}header.svelte-19osa18.svelte-19osa18{position:fixed;width:100%;height:115px;margin:auto;background:transparent;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out ;z-index:99;top:0}header.svelte-19osa18 nav a.svelte-19osa18{color:white;position:relative;text-align:center;padding:0px 20px;text-decoration:none;font-family:'Tajawal'}nav.svelte-19osa18.svelte-19osa18{position:relative;width:100%;height:60px;margin:0;background:linear-gradient(0.25turn, rgb(46, 59, 111), rgb(57, 135, 155));display:flex;justify-content:center;align-items:center;border-radius:30px 30px 30px 30px;box-shadow:none;transition:all 1s ease-in-out }nav#T.svelte-19osa18.svelte-19osa18{position:relative;width:100%;height:60px;margin:0;padding-left:50px;display:flex;justify-content:center;align-items:center;background:transparent;border-radius:30px 30px 30px 30px;box-shadow:none;transition:all 1s ease-in-out }nav#scrolledT.svelte-19osa18.svelte-19osa18{margin-bottom:60px ;border-radius:0 0 30px 30px;box-shadow:0px 5px 10px 5px rgba(0, 0, 0, 0.267);transition:all 1s ease-in-out }@keyframes svelte-19osa18-colory{0%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0))}10%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.1))}20%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.2))}30%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.3))}40%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.4))}50%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.5))}70%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.7))}90%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.9))}100%{background:linear-gradient(0.25turn, #2e3b6f, rgba(57, 135, 155, 1))}}nav#scrolled.svelte-19osa18.svelte-19osa18{margin-bottom:60px ;border-radius:0 0 30px 30px;box-shadow:0px 5px 10px 5px rgba(0, 0, 0, 0.267)}#circle1.not.svelte-19osa18.svelte-19osa18{position:fixed;width:140px;height:140px;left:140px;background-color:#e6e7ee;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle2.not.svelte-19osa18.svelte-19osa18{position:relative;width:105px;height:105px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle3LOGO.not.svelte-19osa18.svelte-19osa18{position:relative;width:80px;height:80px;background-color:transparent;background-size:cover;overflow:hidden;box-sizing:border-box;margin:auto ;border:0;cursor:pointer;transition:all 1s ease-in-out ;background-image:url("/Logo.png")}#circle1.scrolled.svelte-19osa18.svelte-19osa18{background-color:transparent;width:50px;overflow:visible}#circle2.scrolled.svelte-19osa18.svelte-19osa18{box-shadow:none;width:50px;height:50px;background-color:transparent;overflow:visible}#circle3LOGO.scrolled.svelte-19osa18.svelte-19osa18{width:50px;height:50px;background-color:transparent;overflow:visible;background-image:url("/Logo.png")}.overlay.svelte-19osa18.svelte-19osa18{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-19osa18.svelte-19osa18{background-color:rgb(230, 231, 238);border-radius:8px;position:relative;max-width:550px;width:100%}@media(max-width: 1375px){#circle1.not.svelte-19osa18.svelte-19osa18{position:fixed;width:140px;height:140px;left:39px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle1.scrolled.svelte-19osa18.svelte-19osa18{background-color:transparent;width:50px;overflow:visible;left:120px}nav.svelte-19osa18 ul.svelte-19osa18{margin-right:-49px;margin:auto}nav.svelte-19osa18 ul li.svelte-19osa18{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}}.mmm.svelte-19osa18.svelte-19osa18{display:none;position:absolute;right:20px;top:4px}@media(max-width: 1112px){#circle1.not.svelte-19osa18.svelte-19osa18{position:fixed;width:140px;height:140px;left:10px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle1.scrolled.svelte-19osa18.svelte-19osa18{background-color:transparent;width:50px;overflow:visible;left:10px}nav.svelte-19osa18 ul.svelte-19osa18{margin-right:-49px;margin:auto}nav.svelte-19osa18 ul li.svelte-19osa18{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}}@media(max-width: 600px){.mmm.svelte-19osa18.svelte-19osa18{display:block}nav.svelte-19osa18 ul.svelte-19osa18{margin-right:-49px;margin:auto;display:none}nav.svelte-19osa18 ul li.svelte-19osa18{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}a.svelte-19osa18.svelte-19osa18{color:black}}.button.svelte-19osa18.svelte-19osa18{border:none;padding:5px 15px 5px 15px;background-color:#e6e7ee;box-shadow:0px 0px 8px #fff;border-radius:40px;font-size:1em;cursor:pointer;transition:transform .2s ease;font-family:Tajawal;color:#ffffff}.button.svelte-19osa18.svelte-19osa18:hover{transform:scale(1.05)\r
}.button.svelte-19osa18.svelte-19osa18:active{box-shadow:none}.notificationsWindow.svelte-19osa18.svelte-19osa18{width:50%;min-height:550px;border-radius:10px;background-color:#e6e7ee;overflow:hidden;margin-left:25%}`,
  map: null
};
const TopBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disableTransparent } = $$props;
  let { enableTransparency } = $$props;
  if ($$props.disableTransparent === void 0 && $$bindings.disableTransparent && disableTransparent !== void 0)
    $$bindings.disableTransparent(disableTransparent);
  if ($$props.enableTransparency === void 0 && $$bindings.enableTransparency && enableTransparency !== void 0)
    $$bindings.enableTransparency(enableTransparency);
  $$result.css.add(css);
  return `${``} <header class="svelte-19osa18"><div style="position:absolute;top:-15px;left:15px;"> <h1></h1></div> ${``}</header>  `;
});

export { TopBar as T };
//# sourceMappingURL=TopBar-C1ACehmO.js.map