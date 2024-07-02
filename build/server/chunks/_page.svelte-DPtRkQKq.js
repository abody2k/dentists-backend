import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-JWmjUSZd.js';
import 'firebase/app';
import 'firebase/messaging';
import { B as Button } from './Button-DLWsFxlA.js';
import { P as Path } from './Path-DktuJWJw.js';
import { T as TopBar } from './TopBar-Djqzndqy.js';
import { F as Footer } from './Footer-BAJb9lEZ.js';
import 'jsqr';

const css$1 = {
  code: ".svelte-1dthb5c.svelte-1dthb5c{color:#2e3b6f}.neumorphic-box.svelte-1dthb5c.svelte-1dthb5c{margin:20px;padding:20px;border-radius:13px;background:#e6e7ee;box-shadow:inset 6px 6px 4px #babbc1,\r\n            inset -6px -6px 4px #ffffff}.circular-icon.svelte-1dthb5c.svelte-1dthb5c{position:relative;top:-40px;right:40px;width:120px;height:120px;border-radius:50%;background:#ebebeb;box-shadow:inset 5px 5px 5px #c8c8c8,\r\n            inset -5px -5px 5px #ffffff;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.title.svelte-1dthb5c.svelte-1dthb5c{font-size:27px;font-weight:bold;color:#2e3b6f;margin-bottom:10px;text-align:center;position:relative;bottom:60px}.description.svelte-1dthb5c.svelte-1dthb5c{font-size:16px;color:#2e3b6f;margin-bottom:20px;text-align:center;position:relative;bottom:60px}.double-column.svelte-1dthb5c.svelte-1dthb5c{display:flex;justify-content:space-between;margin-bottom:20px}.column.svelte-1dthb5c.svelte-1dthb5c{flex:1;margin:0 10px}.image-row.svelte-1dthb5c.svelte-1dthb5c{display:flex;justify-content:space-around}.image-container.svelte-1dthb5c.svelte-1dthb5c{text-align:center}.image.svelte-1dthb5c.svelte-1dthb5c{width:100px;height:100px;margin-bottom:10px}.image-text.svelte-1dthb5c.svelte-1dthb5c{font-size:14px;color:#2e3b6f}.input-container.svelte-1dthb5c.svelte-1dthb5c{margin-bottom:15px;border-radius:26px}label.svelte-1dthb5c.svelte-1dthb5c{font-size:14px;color:#2e3b6f;margin-bottom:5px}.input-with-icon.svelte-1dthb5c.svelte-1dthb5c{display:flex;align-items:center;background-color:#e0e0e0;border-radius:5px;padding:8px;margin-top:5px;background:#e6e7ee;box-shadow:inset 5px 5px 4px #bdbdc3,\r\n            inset -5px -5px 4px #ffffff}input.svelte-1dthb5c.svelte-1dthb5c{flex:1;border:none;outline:none;border-radius:26px;background-color:transparent}.inputFieldCon.svelte-1dthb5c.svelte-1dthb5c{width:400px;height:40px;background-color:#e6e7ee;overflow:hidden;display:flex;align-items:center;border-radius:10px;border:1px solid #d0d2df;top:200px;left:100px}.inputField.svelte-1dthb5c.svelte-1dthb5c{border:none;width:350px;height:100%;background-color:transparent;box-shadow:inset 2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n  inset -2px -2px 5px 0 rgb(255, 255, 255);padding-left:10px;border-radius:0px}.inputFieldCon.svelte-1dthb5c img.svelte-1dthb5c{width:25px;height:25px;margin:0 10px 0 10px;-o-object-fit:contain;object-fit:contain;background-color:transparent}.socialMediaBotton.svelte-1dthb5c.svelte-1dthb5c{width:40px;height:40px;border:none;border-radius:50%;cursor:pointer;box-shadow:2px 2px 5px #00000040;background:linear-gradient(130deg, rgba(230, 231, 238, 1) 20%, rgb(196 197 203) 100%);display:flex;justify-content:center;align-items:center;transition:all 0.2s ease-in-out;-webkit-tap-highlight-color:transparent}.socialMediaBotton.svelte-1dthb5c.svelte-1dthb5c:hover{transform:scale(1.05)}.socialMediaBotton.svelte-1dthb5c.svelte-1dthb5c:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.socialMediaBotton.svelte-1dthb5c img.svelte-1dthb5c{width:30px;height:30px}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Contact us" } = $$props;
  let { description = "Contact us if you have any questions, problems, or if you want to join courses, fellowships, and buy products." } = $$props;
  let msg = "";
  let { allInfo = {} } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.allInfo === void 0 && $$bindings.allInfo && allInfo !== void 0) $$bindings.allInfo(allInfo);
  $$result.css.add(css$1);
  return ` <div style="width: 82%; margin: auto; margin-bottom: 46px; margin-top: 140px;" class="svelte-1dthb5c">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/contact-us", txt: "Contact us" }]
    },
    {},
    {}
  )}</div>     <div class="neumorphic-box svelte-1dthb5c" style="width: 80%; margin: auto; box-shadow: inset -3px -3px 8px 4px #ffffffe6,inset 3px 3px 8px 4px #00000040; "><div class="circular-icon svelte-1dthb5c" style="box-shadow: inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background: #e6e7ee;" data-svelte-h="svelte-1mkry0u"><img src="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png" style="width: 90px;" class="svelte-1dthb5c"></div> <div class="title svelte-1dthb5c" style="bottom: 80px;">${escape(title)}</div> <div class="description svelte-1dthb5c">${escape(description)}</div> <div class="double-column svelte-1dthb5c"><div class="column svelte-1dthb5c" style="display: flex;flex-direction:column;display: flex; flex-direction: column; width: 20%; justify-content: center; align-items: center;"><img src="contact.png" style="width: 30vw;" class="svelte-1dthb5c"> <div class="image-row svelte-1dthb5c" style="position: relative; top: -68px; justify-content: center; gap: 21px;"><div style="display: flex;flex-direction: row;justify-content: center;align-items: center;flex-wrap: wrap;gap: 10px;margin: 30px 0;" class="svelte-1dthb5c"><button class="socialMediaBotton svelte-1dthb5c" title="Facebook" data-svelte-h="svelte-3umyg8"><img src="/Facebook.png" alt="" class="svelte-1dthb5c"></button> <button class="socialMediaBotton svelte-1dthb5c" title="Instagram" data-svelte-h="svelte-1ddcx47"><img src="/Instagram.png" alt="" class="svelte-1dthb5c"></button> <button class="socialMediaBotton svelte-1dthb5c" title="WhatsApp" data-svelte-h="svelte-un5kqi"><img src="/WhatsApp.png" alt="" class="svelte-1dthb5c"></button> <button class="socialMediaBotton svelte-1dthb5c" title="Telegram" data-svelte-h="svelte-r4afsj"><img src="/Telegram.png" alt="" class="svelte-1dthb5c"></button></div> </div></div> <div class="column svelte-1dthb5c" style="display: flex; flex-direction: column;"><div class="input-container svelte-1dthb5c" data-svelte-h="svelte-zk45i6"><label for="message" class="svelte-1dthb5c">Your Name</label> <div class="inputFieldCon svelte-1dthb5c"><img src="username.png" alt="name icon" class="svelte-1dthb5c"> <input class="inputField svelte-1dthb5c" type="text" id="username" placeholder="Enter your name"></div> </div> <div class="input-container svelte-1dthb5c" data-svelte-h="svelte-9brx6e"> <label for="message" class="svelte-1dthb5c">Your Email</label> <div class="inputFieldCon svelte-1dthb5c" style="top: 300px;"><img src="at.png" alt="name icon" class="svelte-1dthb5c"> <input class="inputField svelte-1dthb5c" type="text" id="username" placeholder="Enter your Email"></div></div> <div class="input-container svelte-1dthb5c" style="width: 400px;"><label for="message" class="svelte-1dthb5c" data-svelte-h="svelte-5subx7">Your Message</label> <div class="input-with-icon svelte-1dthb5c" style="/* display:flex; */ /* align-items: center; */ /* background-color:#e0e0e0; */ border-radius: 10px; /* padding:8px; */ margin-top: 5px; background: #e6e7ee; box-shadow: inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff; width: 400px; overflow: hidden; border: 1px solid #d0d2df;padding:0px;"><textarea name="msg" id="msg" cols="40" rows="5" style="height: 190px; flex: 1; border: none; outline: none; /* border-radius:26px; */ background-color: transparent; width: 100%; overflow: auto; height: 220px; margin-left: 10px;" placeholder="Enter your message here" class="svelte-1dthb5c">${escape(msg, false)}</textarea> </div></div> ${validate_component(Button, "Button").$$render(
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
  )}</div></div> <div class="image-row svelte-1dthb5c"><div class="image-container svelte-1dthb5c" data-svelte-h="svelte-lr9ecl"><img src="/Place.png" alt="Image 1" class="image svelte-1dthb5c"> <div class="image-text svelte-1dthb5c">Location</div> <div class="image-text svelte-1dthb5c">Mosul/Iraq</div></div> <div class="image-container svelte-1dthb5c"><img src="/Atsign.png" alt="Image 2" class="image svelte-1dthb5c"> <div class="image-text svelte-1dthb5c" data-svelte-h="svelte-ln72zq">Email adress</div> <div class="image-text svelte-1dthb5c">${escape(allInfo.e)}</div></div> <div class="image-container svelte-1dthb5c"><img src="/Phone.png" alt="Image 3" class="image svelte-1dthb5c"> <div class="image-text svelte-1dthb5c" data-svelte-h="svelte-10lgotd">Phone number</div> <div class="image-text svelte-1dthb5c">${escape(allInfo.pn)}</div></div></div></div>`;
});
const css = {
  code: "button.svelte-dux7tv:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.overlay.svelte-dux7tv{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-dux7tv{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-dux7tv{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-dux7tv{text-align:center}",
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
  let allInfo = {};
  let scrollBoxHeight = 0;
  areDeveloperToolsOpen().then((open) => {
    if (open) ;
    else {
      console.log(
        "Developer tools are closed."
      );
    }
  });
  $$result.css.add(css);
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div id="main">  ${validate_component(Contact, "Contact").$$render($$result, { allInfo }, {}, {})}</div> ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DPtRkQKq.js.map
