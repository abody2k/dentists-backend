import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './ssr-CggYz5VK.js';
import 'firebase/app';
import 'firebase/messaging';
import { B as Button } from './Button-B3OUjNaN.js';
import { P as Path } from './Path-BaBVNgkW.js';
import { T as TopBar } from './TopBar-Dy7dOf9w.js';
import { F as Footer } from './Footer-ByrTMb2w.js';
import 'jsqr';

const css$2 = {
  code: ".button.svelte-1s8g9sl{margin-top:20%;padding:4px;border:none;border-radius:50%;background:linear-gradient(145deg, #f6f7ff, #cfd0d6);box-shadow:5px 5px 4px #bdbdc3,\r\n             -5px -5px 4px #ffffff;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease}.button.svelte-1s8g9sl:hover{transform:scale(1.05)}button.svelte-1s8g9sl:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n             inset -4px -4px 12px #ffffff}",
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
  return `<button class="button svelte-1s8g9sl">${escape(text)} ${src != "" ? `<img${add_attribute("src", src, 0)} style="width: 100%;">` : ``}</button>`;
});
const css$1 = {
  code: ".svelte-b4lefr.svelte-b4lefr{color:#2e3b6f}.neumorphic-box.svelte-b4lefr.svelte-b4lefr{margin:20px;padding:20px;border-radius:13px;background:#e6e7ee;box-shadow:inset 6px 6px 4px #babbc1,\r\n            inset -6px -6px 4px #ffffff}.circular-icon.svelte-b4lefr.svelte-b4lefr{position:relative;top:-40px;right:40px;width:120px;height:120px;border-radius:50%;background:#ebebeb;box-shadow:inset 5px 5px 5px #c8c8c8,\r\n            inset -5px -5px 5px #ffffff;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.title.svelte-b4lefr.svelte-b4lefr{font-size:27px;font-weight:bold;color:#2e3b6f;margin-bottom:10px;text-align:center;position:relative;bottom:60px}.description.svelte-b4lefr.svelte-b4lefr{font-size:16px;color:#2e3b6f;margin-bottom:20px;text-align:center;position:relative;bottom:60px}.double-column.svelte-b4lefr.svelte-b4lefr{display:flex;justify-content:space-between;margin-bottom:20px}.column.svelte-b4lefr.svelte-b4lefr{flex:1;margin:0 10px}.image-row.svelte-b4lefr.svelte-b4lefr{display:flex;justify-content:space-around}.image-container.svelte-b4lefr.svelte-b4lefr{text-align:center}.image.svelte-b4lefr.svelte-b4lefr{width:100px;height:100px;margin-bottom:10px}.image-text.svelte-b4lefr.svelte-b4lefr{font-size:14px;color:#2e3b6f}.input-container.svelte-b4lefr.svelte-b4lefr{margin-bottom:15px;border-radius:26px}label.svelte-b4lefr.svelte-b4lefr{font-size:14px;color:#2e3b6f;margin-bottom:5px}.input-with-icon.svelte-b4lefr.svelte-b4lefr{display:flex;align-items:center;background-color:#e0e0e0;border-radius:5px;padding:8px;margin-top:5px;background:#e6e7ee;box-shadow:inset 5px 5px 4px #bdbdc3,\r\n            inset -5px -5px 4px #ffffff}input.svelte-b4lefr.svelte-b4lefr{flex:1;border:none;outline:none;border-radius:26px;background-color:transparent}.inputFieldCon.svelte-b4lefr.svelte-b4lefr{width:400px;height:40px;background-color:#e6e7ee;overflow:hidden;display:flex;align-items:center;border-radius:10px;border:1px solid #d0d2df;top:200px;left:100px}.inputField.svelte-b4lefr.svelte-b4lefr{border:none;width:350px;height:100%;background-color:transparent;box-shadow:inset 2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n  inset -2px -2px 5px 0 rgb(255, 255, 255);padding-left:10px;border-radius:0px}.inputFieldCon.svelte-b4lefr img.svelte-b4lefr{width:25px;height:25px;margin:0 10px 0 10px;-o-object-fit:contain;object-fit:contain;background-color:transparent}",
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
  return ` <div style="width: 82%; margin: auto; margin-bottom: 46px; margin-top: 140px;" class="svelte-b4lefr">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/contact-us", txt: "Contact us" }]
    },
    {},
    {}
  )}</div>     <div class="neumorphic-box svelte-b4lefr" style="width: 80%; margin: auto; box-shadow: inset -3px -3px 8px 4px #ffffffe6,inset 3px 3px 8px 4px #00000040; "><div class="circular-icon svelte-b4lefr" style="box-shadow: inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background: #e6e7ee;" data-svelte-h="svelte-o15n6k"><img src="Logo.png" style="width: 90px;" class="svelte-b4lefr"></div> <div class="title svelte-b4lefr" style="bottom: 80px;">${escape(title)}</div> <div class="description svelte-b4lefr">${escape(description)}</div> <div class="double-column svelte-b4lefr"><div class="column svelte-b4lefr" style="display: flex;flex-direction:column;display: flex; flex-direction: column; width: 20%; justify-content: center; align-items: center;"><img src="contact.png" style="width: 30vw;" class="svelte-b4lefr"> <div class="image-row svelte-b4lefr" style="position: relative; top: -68px; justify-content: center; gap: 21px;"><div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-b4lefr">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Facebook.png", text: "" }, {}, {})}</div> <div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-b4lefr">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/WhatsApp.png", text: "" }, {}, {})}</div> <div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-b4lefr">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Instagram.png", text: "" }, {}, {})}</div> <div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-b4lefr">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Telegram.png", text: "" }, {}, {})}</div></div></div> <div class="column svelte-b4lefr" style="display: flex; flex-direction: column;"><div class="input-container svelte-b4lefr" data-svelte-h="svelte-zk45i6"><label for="message" class="svelte-b4lefr">Your Name</label> <div class="inputFieldCon svelte-b4lefr"><img src="username.png" alt="name icon" class="svelte-b4lefr"> <input class="inputField svelte-b4lefr" type="text" id="username" placeholder="Enter your name"></div> </div> <div class="input-container svelte-b4lefr" data-svelte-h="svelte-9brx6e"> <label for="message" class="svelte-b4lefr">Your Email</label> <div class="inputFieldCon svelte-b4lefr" style="top: 300px;"><img src="at.png" alt="name icon" class="svelte-b4lefr"> <input class="inputField svelte-b4lefr" type="text" id="username" placeholder="Enter your Email"></div></div> <div class="input-container svelte-b4lefr" style="width: 400px;"><label for="message" class="svelte-b4lefr" data-svelte-h="svelte-5subx7">Your Message</label> <div class="input-with-icon svelte-b4lefr" style="/* display:flex; */ /* align-items: center; */ /* background-color:#e0e0e0; */ border-radius: 10px; /* padding:8px; */ margin-top: 5px; background: #e6e7ee; box-shadow: inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff; width: 400px; overflow: hidden; border: 1px solid #d0d2df;padding:0px;"><textarea name="msg" id="msg" cols="40" rows="5" style="height: 190px; flex: 1; border: none; outline: none; /* border-radius:26px; */ background-color: transparent; width: 100%; overflow: auto; height: 220px; margin-left: 10px;" placeholder="Enter your message here" class="svelte-b4lefr">${escape(msg, false)}</textarea> </div></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      width: "400px",
      text: "Send",
      useTJ: true,
      clickHandler() {
        {
          return;
        }
      }
    },
    {},
    {}
  )}</div></div> <div class="image-row svelte-b4lefr" data-svelte-h="svelte-6l5g2g"><div class="image-container svelte-b4lefr"><img src="/Place.png" alt="Image 1" class="image svelte-b4lefr"> <div class="image-text svelte-b4lefr">Location</div> <div class="image-text svelte-b4lefr">Mosul/Iraq</div></div> <div class="image-container svelte-b4lefr"><img src="/Atsign.png" alt="Image 2" class="image svelte-b4lefr"> <div class="image-text svelte-b4lefr">Email adress</div> <div class="image-text svelte-b4lefr">support@dentists.com</div></div> <div class="image-container svelte-b4lefr"><img src="/Phone.png" alt="Image 3" class="image svelte-b4lefr"> <div class="image-text svelte-b4lefr">Phone number</div> <div class="image-text svelte-b4lefr">+964777***7777</div></div></div></div>`;
});
const css = {
  code: "nav ul.svelte-dux7tv li.svelte-dux7tv{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-dux7tv.svelte-dux7tv:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-dux7tv.svelte-dux7tv:left{font-size:20px;transition:font-size 3s}button.svelte-dux7tv.svelte-dux7tv:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.overlay.svelte-dux7tv.svelte-dux7tv{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-dux7tv.svelte-dux7tv{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-dux7tv.svelte-dux7tv{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-dux7tv.svelte-dux7tv{text-align:center}",
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div id="main"><div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-dux7tv"><li class="svelte-dux7tv" data-svelte-h="svelte-1btzhvq">Courses</li> <li class="svelte-dux7tv" data-svelte-h="svelte-1mhff88">Fellowships</li> <li class="svelte-dux7tv" data-svelte-h="svelte-1j80rm3">Contact us</li></ul></div>  ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div> ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8lMnYHnI.js.map
