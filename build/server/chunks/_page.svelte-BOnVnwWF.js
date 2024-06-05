import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-CggYz5VK.js';
import { T as TopBar } from './TopBar-HoIohFdF.js';
import { F as Footer } from './Footer-DOXfv0rx.js';
import 'firebase/app';
import 'firebase/messaging';
import 'jsqr';

/* empty css                                                 */
const css = {
  code: `.svelte-fe80ru.svelte-fe80ru{color:#2e3b6f}.title.svelte-fe80ru.svelte-fe80ru{width:95%;text-align:right;font-size:27px;font-weight:bold;margin-top:40px;margin-bottom:20px}.row.svelte-fe80ru.svelte-fe80ru{display:flex;flex-direction:row}.column.svelte-fe80ru.svelte-fe80ru{display:flex;flex-direction:column}.gum.svelte-fe80ru.svelte-fe80ru{display:flex;justify-content:center;width:70%;height:120px;top:50%;left:1.5%;margin:175px auto 200px;background:#f35858;border-radius:100px 100px 30px 30px;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;overflow:visible}.gum-reversed.svelte-fe80ru.svelte-fe80ru{display:flex;justify-content:center;width:70%;height:120px;top:30%;left:1.5%;margin:175px auto 200px;background:#f35858;border-radius:100px 100px 30px 30px;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;overflow:visible\r
\r
\r
      }.offers-button-con.svelte-fe80ru.svelte-fe80ru{position:relative;width:318px;height:50px;margin:auto;background-color:#e6e7ee;border-radius:30px;box-shadow:inset 2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r
                    inset -2px -2px 5px 0 rgb(255, 255, 255);overflow:hidden;display:flex;justify-content:center;align-items:center}.offers-button.svelte-fe80ru.svelte-fe80ru{text-align:center;position:relative;width:95%;height:70%;margin:auto;background-color:#e6e7ee;border-radius:30px;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r
                     -2px -2px 5px 0 rgb(255, 255, 255);overflow:hidden}.offers-button.svelte-fe80ru.svelte-fe80ru:hover{box-shadow:2px 2px 5px 0 rgb(135, 167, 255),\r
                     -2px -2px 5px 0 rgb(154, 230, 255);background-color:rgb(206, 239, 250)}.teeth-top.svelte-fe80ru.svelte-fe80ru{position:relative;width:140px;height:140px;top:40%;margin:0;background:#fff;background-size:cover;border-radius:250px 250px 100px 120px;flex-shrink:0;box-shadow:0 -3px 3px 1px #00000040,0 3px 3px 1px #fff;overflow:hidden\r
\r
\r
      }.teeth.svelte-fe80ru.svelte-fe80ru{overflow:hidden;position:relative;width:140px;height:150px;top:40%;margin:0;background:#fff;background-size:cover;border-radius:250px 250px 100px 120px;box-shadow:0 -3px 3px 1px #00000040,0 3px 3px 1px #fff;flex-shrink:0\r
\r
\r
\r
\r
    /* flex-shrink: 0; */\r
 \r
\r
\r
\r
      }.teeth-bottom.svelte-fe80ru.svelte-fe80ru{position:relative;width:140px;height:140px;top:-60%;margin:0;background:white;background-size:cover;border-radius:100px 120px 250px 250px;flex-shrink:0;overflow:hidden;box-shadow:0 3px 3px 1px #00000040,0 -3px 3px 1px #fff}input.svelte-fe80ru.svelte-fe80ru{height:10px;width:300px;border:none;outline:none;background:none;font-size:18px;color:#555;padding:15px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;border-radius:25px}input.svelte-fe80ru.svelte-fe80ru::-moz-placeholder{color:#555;-moz-transition:all 0.3s ease;transition:all 0.3s ease}input.svelte-fe80ru.svelte-fe80ru::placeholder{color:#555;transition:all 0.3s ease}input.svelte-fe80ru.svelte-fe80ru:focus::-moz-placeholder{color:#999}input.svelte-fe80ru.svelte-fe80ru:focus::placeholder{color:#999}.op.svelte-fe80ru.svelte-fe80ru:hover{background-color:#ffffff}#smallWindow.svelte-fe80ru.svelte-fe80ru{width:1000px;height:545px;left:50%;margin-left:-500px}@media(max-width: 1162px){.teeth-top.svelte-fe80ru.svelte-fe80ru{width:150px;height:150px}.teeth.svelte-fe80ru.svelte-fe80ru{width:160px;height:160px}.teeth-bottom.svelte-fe80ru.svelte-fe80ru{width:150px;height:150px}}@media(max-width:1027px){#smallWindow.svelte-fe80ru.svelte-fe80ru{width:500px;height:545px;left:50%;margin-left:-250px}}@media(max-width: 922px){.teeth-top.svelte-fe80ru.svelte-fe80ru{width:120px;height:120px}.teeth.svelte-fe80ru.svelte-fe80ru{width:130px;height:130px}.teeth-bottom.svelte-fe80ru.svelte-fe80ru{width:120px;height:120px}}@media(max-width: 756px){.teeth-top.svelte-fe80ru.svelte-fe80ru{width:80px;height:97px}.teeth.svelte-fe80ru.svelte-fe80ru{width:100px;height:110px;top:47px}.teeth-bottom.svelte-fe80ru.svelte-fe80ru{width:80px;height:97px;margin-top:25px}}button.svelte-fe80ru.svelte-fe80ru{padding:15px 30px;background:#E6E7EE;border:none;padding:5px 10px 5px 20px ;background-color:#6294ff;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25), -2px -2px 5px 0 rgb(165 231 255);border-radius:7px;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal';color:white ;text-align:center;display:flex;align-items:center}button.svelte-fe80ru.svelte-fe80ru:hover{transform:scale(1.05)}button.svelte-fe80ru.svelte-fe80ru:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r
               inset -4px -4px 12px #ffffff}.bbb.svelte-fe80ru.svelte-fe80ru{border:none;padding:5px 10px 5px 15px;background-color:#e6e7ee;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;border-radius:40px;font-size:1em;cursor:pointer;transition:transform .2s ease;font-family:'Tajawal';color:#2e3b6f}.bbb.svelte-fe80ru.svelte-fe80ru:hover{transform:scale(1.05)\r
}.bbb.svelte-fe80ru.svelte-fe80ru:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.product.svelte-fe80ru.svelte-fe80ru{font-family:'Tajawal';width:210px;height:270px;padding:10px;background:#e6e7ee;border-radius:10px;box-shadow:-3px -3px 8px 4px #ffffffe6,3px 3px 8px 4px #00000040;margin:17px;display:flex;align-items:center;text-align:center;flex-direction:column;transition:transform .2s ease;overflow:hidden}.product.svelte-fe80ru img.svelte-fe80ru{border-radius:10px;width:200px;height:200px;background-color:#e6e7ee;-o-object-fit:cover;object-fit:cover}.productTxt.svelte-fe80ru.svelte-fe80ru{width:100%;height:70px;overflow:hidden;color:#2e3b6f}.product.svelte-fe80ru.svelte-fe80ru:hover{transform:scale(1.05)}.search-container.svelte-fe80ru.svelte-fe80ru{position:relative;left:40px;margin:30px;display:flex;border-radius:20px;padding:5px 10px;width:300px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:#e6e7ee}input[type="search"].svelte-fe80ru.svelte-fe80ru{border:none;outline:none;width:280px;color:#2e3b6f;background-color:transparent}.search-icon.svelte-fe80ru.svelte-fe80ru{width:20px;height:20px;background-image:url("/srch2.png");background-size:cover}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTxt = "";
  $$result.css.add(css);
  return `${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div id="boxx" class="svelte-fe80ru"> ${``} <div class="offers-button-con svelte-fe80ru" style="position: relative; width: 318px; height: 50px; top: 200px; /* right: 36%; */ margin: auto; background-color: #e6e7ee; border-radius: 30px; box-shadow: inset 2px 2px 5px 0 rgba(0, 0, 0, 0.25), inset -2px -2px 5px 0 rgb(255, 255, 255); overflow: hidden; display: flex; justify-content: center; align-items: center;"><div class="offers-button svelte-fe80ru" data-svelte-h="svelte-u4l0">العروض</div></div> <div class="gum-reversed svelte-fe80ru"><div class="teeth-top svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/0" class="svelte-fe80ru"></div> <div class="teeth-top svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/1" class="svelte-fe80ru"></div> <div class="teeth svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/2" class="svelte-fe80ru"></div> <div class="teeth svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/3" class="svelte-fe80ru"></div> <div class="teeth-top svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/4" class="svelte-fe80ru"></div> <div class="teeth-top svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/5" class="svelte-fe80ru"></div> </div> <div class="row svelte-fe80ru" style="position: absolute;width:100%; right: 11px; margin-top: 0px;align-items: center;">  <div class="search-container svelte-fe80ru"><span class="search-icon svelte-fe80ru"></span> <input type="search" placeholder="Search..." class="svelte-fe80ru"${add_attribute("value", searchTxt, 0)}></div> ${``} <button class="bbb svelte-fe80ru" style="display: flex;align-items:center;" data-svelte-h="svelte-nsafly"><div class="svelte-fe80ru">Categories</div> <img src="/diver.png" width="40" class="svelte-fe80ru"></button></div> <div style="margin-top: 290px;" class="svelte-fe80ru"></div> <hr style="width: 90%; border-bottom: 1px solid #8a8ad1;" class="svelte-fe80ru"> ${``} <div class="gum svelte-fe80ru" style="margin-bottom: 100px; margin-top: 100px;"><div class="teeth-bottom svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/0" class="svelte-fe80ru"></div> <div class="teeth-bottom svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/1" class="svelte-fe80ru"></div> <div class="teeth-bottom svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/2" class="svelte-fe80ru"></div> <div class="teeth-bottom svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/3" class="svelte-fe80ru"></div> <div class="teeth-bottom svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/4" class="svelte-fe80ru"></div> <div class="teeth-bottom svelte-fe80ru"><img style="width: 100%; height:100%; object-fit: cover;" alt=" " src="https://dentists-iq.s3.amazonaws.com/offers/5" class="svelte-fe80ru"></div> </div> <div class="offers-button-con svelte-fe80ru" style="position: relative; width: 318px; height: 50px; top: -128px; /* right: 36%; */ margin: auto; background-color: rgb(230, 231, 238); border-radius: 30px; box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 5px 0px inset, rgb(255, 255, 255) -2px -2px 5px 0px inset; overflow: hidden; display: flex; justify-content: center; align-items: center;" data-svelte-h="svelte-g98hli"><div class="offers-button svelte-fe80ru">العروض</div></div></div> <div style="margin-top: 40px;" class="svelte-fe80ru"></div> ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight: 0, outsider: true }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BOnVnwWF.js.map
