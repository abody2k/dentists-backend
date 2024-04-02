import { c as create_ssr_component, v as validate_component, f as add_attribute, e as escape } from './ssr-CZ3Mxc3I.js';
import { M as Map } from './Map-DvJS5AiN.js';
import { B as Button } from './Button-CQTl_0P6.js';
import { P as Path } from './Path-CggFG0Zs.js';
import { T as TopBar } from './TopBar-a81BOzeK.js';
import { F as Footer } from './Footer-Clu-tvco.js';

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
  code: ".svelte-se986m.svelte-se986m{color:#2e3b6f}.neumorphic-box.svelte-se986m.svelte-se986m{margin:20px;padding:20px;border-radius:13px;background:#e6e7ee;box-shadow:inset 6px 6px 4px #babbc1,\r\n            inset -6px -6px 4px #ffffff}.circular-icon.svelte-se986m.svelte-se986m{position:relative;top:-40px;right:40px;width:120px;height:120px;border-radius:50%;background:#ebebeb;box-shadow:inset 5px 5px 5px #c8c8c8,\r\n            inset -5px -5px 5px #ffffff;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.title.svelte-se986m.svelte-se986m{font-size:27px;font-weight:bold;color:#2e3b6f;margin-bottom:10px;text-align:center;position:relative;bottom:60px}.description.svelte-se986m.svelte-se986m{font-size:16px;color:#2e3b6f;margin-bottom:20px;text-align:center;position:relative;bottom:60px}.double-column.svelte-se986m.svelte-se986m{display:flex;justify-content:space-between;margin-bottom:20px}.column.svelte-se986m.svelte-se986m{flex:1;margin:0 10px}.image-row.svelte-se986m.svelte-se986m{display:flex;justify-content:space-around}.image-container.svelte-se986m.svelte-se986m{text-align:center}.image.svelte-se986m.svelte-se986m{width:100px;height:100px;margin-bottom:10px}.image-text.svelte-se986m.svelte-se986m{font-size:14px;color:#2e3b6f}.input-container.svelte-se986m.svelte-se986m{margin-bottom:15px;border-radius:26px}label.svelte-se986m.svelte-se986m{font-size:14px;color:#2e3b6f;margin-bottom:5px}.input-with-icon.svelte-se986m.svelte-se986m{display:flex;align-items:center;background-color:#e0e0e0;border-radius:5px;padding:8px;margin-top:5px;background:#e6e7ee;box-shadow:inset 5px 5px 4px #bdbdc3,\r\n            inset -5px -5px 4px #ffffff}input.svelte-se986m.svelte-se986m{flex:1;border:none;outline:none;border-radius:26px;background-color:transparent}.inputFieldCon.svelte-se986m.svelte-se986m{width:400px;height:40px;background-color:#e6e7ee;overflow:hidden;display:flex;align-items:center;border-radius:10px;border:1px solid #d0d2df;top:200px;left:100px}.inputField.svelte-se986m.svelte-se986m{border:none;width:350px;height:100%;background-color:transparent;box-shadow:inset 2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n  inset -2px -2px 5px 0 rgb(255, 255, 255);padding-left:10px;border-radius:0px}.inputFieldCon.svelte-se986m img.svelte-se986m{width:25px;height:25px;margin:0 10px 0 10px;object-fit:contain;background-color:transparent}",
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
  return ` <div style="width: 82%; margin: auto; margin-bottom: 46px; margin-top: 140px;" class="svelte-se986m">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/contact-us", txt: "Contact us" }]
    },
    {},
    {}
  )}</div>     <div class="neumorphic-box svelte-se986m" style="width: 80%; margin: auto; box-shadow: inset -3px -3px 8px 4px #ffffffe6,inset 3px 3px 8px 4px #00000040; "><div class="circular-icon svelte-se986m" style="box-shadow: inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background: #e6e7ee;" data-svelte-h="svelte-o15n6k"><img src="Logo.png" style="width: 90px;" class="svelte-se986m"></div> <div class="title svelte-se986m" style="bottom: 80px;">${escape(title)}</div> <div class="description svelte-se986m">${escape(description)}</div> <div class="double-column svelte-se986m"><div class="column svelte-se986m" style="display: flex;flex-direction:column;display: flex; flex-direction: column; width: 20%; justify-content: center; align-items: center;"><img src="contact.png" style="width: 30vw;" class="svelte-se986m"> <div class="image-row svelte-se986m" style="position: relative; top: -68px; justify-content: center; gap: 21px;"><div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-se986m">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Facebook.png", text: "" }, {}, {})}</div> <div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-se986m">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/WhatsApp.png", text: "" }, {}, {})}</div> <div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-se986m">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Instagram.png", text: "" }, {}, {})}</div> <div style="width: 40px; height: 40px; margin-top: 20%;" class="svelte-se986m">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Telegram.png", text: "" }, {}, {})}</div></div></div> <div class="column svelte-se986m" style="display: flex; flex-direction: column;"><div class="input-container svelte-se986m" data-svelte-h="svelte-zk45i6"><label for="message" class="svelte-se986m">Your Name</label> <div class="inputFieldCon svelte-se986m"><img src="username.png" alt="name icon" class="svelte-se986m"> <input class="inputField svelte-se986m" type="text" id="username" placeholder="Enter your name"></div> </div> <div class="input-container svelte-se986m" data-svelte-h="svelte-9brx6e"> <label for="message" class="svelte-se986m">Your Email</label> <div class="inputFieldCon svelte-se986m" style="top: 300px;"><img src="at.png" alt="name icon" class="svelte-se986m"> <input class="inputField svelte-se986m" type="text" id="username" placeholder="Enter your Email"></div></div> <div class="input-container svelte-se986m" style="width: 400px;"><label for="message" class="svelte-se986m" data-svelte-h="svelte-5subx7">Your Message</label> <div class="input-with-icon svelte-se986m" style="/* display:flex; */ /* align-items: center; */ /* background-color:#e0e0e0; */ border-radius: 10px; /* padding:8px; */ margin-top: 5px; background: #e6e7ee; box-shadow: inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff; width: 400px; overflow: hidden; border: 1px solid #d0d2df;padding:0px;"><textarea name="msg" id="msg" cols="40" rows="5" style="height: 190px; flex: 1; border: none; outline: none; /* border-radius:26px; */ background-color: transparent; width: 100%; overflow: auto; height: 220px; margin-left: 10px;" placeholder="Enter your message here" class="svelte-se986m">${escape(msg, false)}</textarea> </div></div> ${validate_component(Button, "Button").$$render(
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
  )}</div></div> <div class="image-row svelte-se986m" data-svelte-h="svelte-6l5g2g"><div class="image-container svelte-se986m"><img src="/Place.png" alt="Image 1" class="image svelte-se986m"> <div class="image-text svelte-se986m">Location</div> <div class="image-text svelte-se986m">Mosul/Iraq</div></div> <div class="image-container svelte-se986m"><img src="/Atsign.png" alt="Image 2" class="image svelte-se986m"> <div class="image-text svelte-se986m">Email adress</div> <div class="image-text svelte-se986m">support@dentists.com</div></div> <div class="image-container svelte-se986m"><img src="/Phone.png" alt="Image 3" class="image svelte-se986m"> <div class="image-text svelte-se986m">Phone number</div> <div class="image-text svelte-se986m">+964777***7777</div></div></div></div>`;
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div id="main"><div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-zewx5k"><li class="svelte-zewx5k" data-svelte-h="svelte-1btzhvq">Courses</li> <li class="svelte-zewx5k" data-svelte-h="svelte-1mhff88">Fellowships</li> <li class="svelte-zewx5k" data-svelte-h="svelte-1j80rm3">Contact us</li></ul></div>  ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div> <div class="map-box svelte-zewx5k" style="width: 81%; height: 200px;margin:auto;margin-top:40px;position:relative;z-index:1;">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div> ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CxvAlqv6.js.map
