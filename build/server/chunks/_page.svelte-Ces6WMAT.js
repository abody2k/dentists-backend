import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './ssr-C5Pny6Bf.js';
import { M as Map } from './Map-TAo5RPfk.js';
import { B as Button } from './Button-DOEzoM2E.js';
import { P as Path } from './Path-BFI0Juiy.js';
import { T as TopBar } from './TopBar-CGoENH3P.js';
import { F as Footer } from './Footer-BSIt6fBV.js';

const css$2 = {
  code: ".button.svelte-np3rjx{margin-top:20%;padding:4px;border:none;border-radius:100%;border-radius:50%;background:linear-gradient(145deg, #f6f7ff, #cfd0d6);box-shadow:5px 5px 4px #bdbdc3,\r\n             -5px -5px 4px #ffffff;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease}.button.svelte-np3rjx:hover{transform:scale(1.05)}button.svelte-np3rjx:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n             inset -4px -4px 12px #ffffff}",
  map: null
};
const CircularButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Click me" } = $$props;
  let { clickHandler } = $$props;
  let { src = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0)
    $$bindings.clickHandler(clickHandler);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css$2);
  return `<button class="button svelte-np3rjx">${escape(text)} ${src != "" ? `<img${add_attribute("src", src, 0)} style="width: 100%;">` : ``}</button>`;
});
const css$1 = {
  code: ".svelte-otooxr.svelte-otooxr{color:#2e3b6f}.neumorphic-box.svelte-otooxr.svelte-otooxr{margin:20px;padding:20px;border-radius:13px;background:#e6e7ee;box-shadow:inset 6px 6px 4px #babbc1,\r\n            inset -6px -6px 4px #ffffff}.circular-icon.svelte-otooxr.svelte-otooxr{position:relative;top:-40px;right:40px;width:120px;height:120px;border-radius:50%;background:#ebebeb;box-shadow:inset 5px 5px 5px #c8c8c8,\r\n            inset -5px -5px 5px #ffffff;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.title.svelte-otooxr.svelte-otooxr{font-size:24px;font-weight:bold;color:#2e3b6f;margin-bottom:10px;text-align:center}.description.svelte-otooxr.svelte-otooxr{font-size:16px;color:#2e3b6f;margin-bottom:20px;text-align:center}.double-column.svelte-otooxr.svelte-otooxr{display:flex;justify-content:space-between;margin-bottom:20px}.column.svelte-otooxr.svelte-otooxr{flex:1;margin:0 10px}.image-row.svelte-otooxr.svelte-otooxr{display:flex;justify-content:space-around}.image-container.svelte-otooxr.svelte-otooxr{text-align:center}.image.svelte-otooxr.svelte-otooxr{width:100px;height:100px;margin-bottom:10px}.image-text.svelte-otooxr.svelte-otooxr{font-size:14px;color:#2e3b6f}.input-container.svelte-otooxr.svelte-otooxr{margin-bottom:15px;border-radius:26px}label.svelte-otooxr.svelte-otooxr{font-size:14px;color:#2e3b6f;margin-bottom:5px}.input-with-icon.svelte-otooxr.svelte-otooxr{display:flex;align-items:center;background-color:#e0e0e0;border-radius:5px;padding:8px;margin-top:5px;background:#e6e7ee;box-shadow:inset 5px 5px 4px #bdbdc3,\r\n            inset -5px -5px 4px #ffffff}input.svelte-otooxr.svelte-otooxr{flex:1;border:none;outline:none;border-radius:26px;background-color:transparent}.inputFieldCon.svelte-otooxr.svelte-otooxr{width:400px;height:40px;background-color:#e6e7ee;overflow:hidden;display:flex;align-items:center;border-radius:10px;border:1px solid #d0d2df;top:200px;left:100px}.inputField.svelte-otooxr.svelte-otooxr{border:none;width:350px;height:100%;background-color:transparent;box-shadow:inset 2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n  inset -2px -2px 5px 0 rgb(255, 255, 255);padding-left:10px;border-radius:0px}.inputFieldCon.svelte-otooxr img.svelte-otooxr{width:25px;height:25px;margin:0 10px 0 10px;object-fit:contain;background-color:transparent}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Contact us" } = $$props;
  let { description = "Contact us if you have any questions, problems, or if you want to join courses, fellowships, and buy products." } = $$props;
  let msg = "";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$1);
  return ` <div style="width: 82%; margin: auto; margin-bottom: 46px; margin-top: 140px;" class="svelte-otooxr">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/contact-us", txt: "Contact us" }]
    },
    {},
    {}
  )}</div>     <div class="neumorphic-box svelte-otooxr" style="width: 80%; margin: auto;"><div class="circular-icon svelte-otooxr" data-svelte-h="svelte-147djv0"><img src="Logo.png" style="width: 90px;" class="svelte-otooxr"></div> <div class="title svelte-otooxr">${escape(title)}</div> <div class="description svelte-otooxr">${escape(description)}</div> <div class="double-column svelte-otooxr"><div class="column svelte-otooxr" style="display: flex;flex-direction:column;display: flex; flex-direction: column; width: 20%; justify-content: center; align-items: center;"><img src="contact.png" style="width: 30vw;" class="svelte-otooxr"> <div class="image-row svelte-otooxr" style="position: relative; top: -68px; justify-content: center; gap: 21px;"><div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-otooxr">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Facebook.png", text: "" }, {}, {})}</div> <div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-otooxr">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/WhatsApp.png", text: "" }, {}, {})}</div> <div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-otooxr">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Instagram.png", text: "" }, {}, {})}</div> <div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-otooxr">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Telegram.png", text: "" }, {}, {})}</div></div></div> <div class="column svelte-otooxr" style="display: flex; flex-direction: column;"><div class="input-container svelte-otooxr" data-svelte-h="svelte-zk45i6"><label for="message" class="svelte-otooxr">Your Name</label> <div class="inputFieldCon svelte-otooxr"><img src="username.png" alt="name icon" class="svelte-otooxr"> <input class="inputField svelte-otooxr" type="text" id="username" placeholder="Enter your name"></div> </div> <div class="input-container svelte-otooxr" data-svelte-h="svelte-1gjz07s"> <label for="message" class="svelte-otooxr">Your Email</label> <div class="inputFieldCon svelte-otooxr" style="top: 300px;"><img src="at.png" alt="name icon" class="svelte-otooxr"> <input class="inputField svelte-otooxr" type="text" id="username" placeholder="Enter your Email"></div></div> <div class="input-container svelte-otooxr" style="width: 400px;"><label for="message" class="svelte-otooxr" data-svelte-h="svelte-5subx7">Your Message</label> <div class="input-with-icon svelte-otooxr"><input type="text" id="msg"${add_attribute("value", msg, 0)} style="height: 190px;" placeholder="Enter your message here" class="svelte-otooxr"></div></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      width: "400px",
      text: "Send",
      clickHandler() {
        {
          return;
        }
      }
    },
    {},
    {}
  )}</div></div> <div class="image-row svelte-otooxr" data-svelte-h="svelte-6l5g2g"><div class="image-container svelte-otooxr"><img src="/Place.png" alt="Image 1" class="image svelte-otooxr"> <div class="image-text svelte-otooxr">Location</div> <div class="image-text svelte-otooxr">Mosul/Iraq</div></div> <div class="image-container svelte-otooxr"><img src="/Atsign.png" alt="Image 2" class="image svelte-otooxr"> <div class="image-text svelte-otooxr">Email adress</div> <div class="image-text svelte-otooxr">support@dentists.com</div></div> <div class="image-container svelte-otooxr"><img src="/Phone.png" alt="Image 3" class="image svelte-otooxr"> <div class="image-text svelte-otooxr">Phone number</div> <div class="image-text svelte-otooxr">+964777***7777</div></div></div></div>`;
});
const css = {
  code: "nav ul.svelte-zewx5k li.svelte-zewx5k{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-zewx5k.svelte-zewx5k:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-zewx5k.svelte-zewx5k:left{font-size:20px;transition:font-size 3s}button.svelte-zewx5k.svelte-zewx5k:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.map-box.svelte-zewx5k.svelte-zewx5k{width:50%;height:200px;background-color:#fff}.overlay.svelte-zewx5k.svelte-zewx5k{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-zewx5k.svelte-zewx5k{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-zewx5k.svelte-zewx5k{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-zewx5k.svelte-zewx5k{text-align:center}",
  map: null
};
function areDeveloperToolsOpen() {
  return new Promise((resolve) => {
    const devtools = /./;
    devtools.toString = function() {
      resolve(true);
    };
    console.log("%c", devtools);
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollBoxHeight = 0;
  areDeveloperToolsOpen().then((open) => {
    if (open)
      ;
    else {
      console.log(
        "Developer tools are closed."
      );
    }
  });
  $$result.css.add(css);
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div id="main"><div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-zewx5k"><li class="svelte-zewx5k" data-svelte-h="svelte-1btzhvq">Courses</li> <li class="svelte-zewx5k" data-svelte-h="svelte-1mhff88">Fellowships</li> <li class="svelte-zewx5k" data-svelte-h="svelte-1j80rm3">Contact us</li></ul></div>  ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div> <div class="map-box svelte-zewx5k" style="width: 81%; height: 200px;margin:auto;">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div> ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Ces6WMAT.js.map
