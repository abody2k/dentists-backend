import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from './ssr-CggYz5VK.js';
import { M as Map } from './Map-L2AhRx-3.js';
import { B as Button } from './Button-CQyzae5M.js';
import { T as TopBar } from './TopBar-8FAiQmrX.js';

/* empty css                                                   */
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
const Path = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `${each(links, (link) => {
    return `<a${add_attribute("href", link, 0)}>${escape(link)}</a>&gt;&gt;`;
  })}`;
});
const css$1 = {
  code: ".neumorphic-box.svelte-1xjuq1i{margin:20px;padding:20px;border-radius:13px;background:#e6e7ee;box-shadow:inset 6px 6px 4px #babbc1,\r\n            inset -6px -6px 4px #ffffff}.circular-icon.svelte-1xjuq1i{position:relative;top:-40px;right:40px;width:90px;height:90px;border-radius:50%;background:#ebebeb;box-shadow:inset 5px 5px 5px #c8c8c8,\r\n            inset -5px -5px 5px #ffffff;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.title.svelte-1xjuq1i{font-size:24px;font-weight:bold;color:navy;margin-bottom:10px;text-align:center}.description.svelte-1xjuq1i{font-size:16px;color:black;margin-bottom:20px;text-align:center}.double-column.svelte-1xjuq1i{display:flex;justify-content:space-between;margin-bottom:20px}.column.svelte-1xjuq1i{flex:1;margin:0 10px}.image-row.svelte-1xjuq1i{display:flex;justify-content:space-around}.image-container.svelte-1xjuq1i{text-align:center}.image.svelte-1xjuq1i{width:100px;height:100px;border-radius:50%;margin-bottom:10px}.image-text.svelte-1xjuq1i{font-size:14px;color:black}.input-container.svelte-1xjuq1i{margin-bottom:15px;border-radius:26px}label.svelte-1xjuq1i{font-size:14px;color:navy;margin-bottom:5px}.input-with-icon.svelte-1xjuq1i{display:flex;align-items:center;background-color:#e0e0e0;border-radius:5px;padding:8px;margin-top:5px;background:#e6e7ee;box-shadow:inset 5px 5px 4px #bdbdc3,\r\n            inset -5px -5px 4px #ffffff}.icon.svelte-1xjuq1i{position:relative;right:8%;bottom:1%;width:20px;margin-right:20px;padding:11px;border-left:1px solid navy;border-top:1px solid navy;border-bottom:1px solid navy}input.svelte-1xjuq1i{flex:1;border:none;outline:none;border-radius:26px;background-color:transparent}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Contact us" } = $$props;
  let { description = "Contact us if you have any questions, problems, or if you want to join courses, fellowships, and buy products." } = $$props;
  let msg = "";
  let links = [];
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$1);
  return `<div class="neumorphic-box svelte-1xjuq1i"><div class="path">${validate_component(Path, "Path").$$render($$result, { links }, {}, {})} </div></div> <div class="neumorphic-box svelte-1xjuq1i" style="width: 80%; margin: auto;"><div class="circular-icon svelte-1xjuq1i" data-svelte-h="svelte-arjklm"><img src="Logo.png" style="width: 70px;"></div> <div class="title svelte-1xjuq1i">${escape(title)}</div> <div class="description svelte-1xjuq1i">${escape(description)}</div> <div class="double-column svelte-1xjuq1i"><div class="column svelte-1xjuq1i" style="display: flex;flex-direction:column;display: flex; flex-direction: column; width: 20%; justify-content: center; align-items: center;"><img src="contact.png" style="width: 30vw;"> <div class="image-row svelte-1xjuq1i" style="position: relative; top: -68px; justify-content: center; gap: 21px;">${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Facebook.png", text: "" }, {}, {})} ${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/WhatsApp.png", text: "" }, {}, {})} ${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Instagram.png", text: "" }, {}, {})} ${validate_component(CircularButton, "CircularButton").$$render($$result, { src: "/Telegram.png", text: "" }, {}, {})}</div></div> <div class="column svelte-1xjuq1i" style="display: flex; flex-direction: column;"><div class="input-container svelte-1xjuq1i"><label for="email" class="svelte-1xjuq1i" data-svelte-h="svelte-zid7j4">Your name</label> <div class="input-with-icon svelte-1xjuq1i"><img src="/username.png" alt="name Icon" class="icon svelte-1xjuq1i"> <input type="text" id="username" placeholder="Enter your name" class="svelte-1xjuq1i"></div></div> <div class="input-container svelte-1xjuq1i"><label for="email" class="svelte-1xjuq1i" data-svelte-h="svelte-zmqwaf">Your Email</label> <div class="input-with-icon svelte-1xjuq1i"><img src="/at.png" alt="Email Icon" class="icon svelte-1xjuq1i"> <input type="email" id="email" placeholder="Enter your email" class="svelte-1xjuq1i"></div></div> <div class="input-container svelte-1xjuq1i"><label for="message" class="svelte-1xjuq1i" data-svelte-h="svelte-5subx7">Your Message</label> <div class="input-with-icon svelte-1xjuq1i"><input type="text" id="msg"${add_attribute("value", msg, 0)} style="height: 190px;" placeholder="Enter your message here" class="svelte-1xjuq1i"></div></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Send",
      clickHandler() {
        {
          return;
        }
      }
    },
    {},
    {}
  )}</div></div> <div class="image-row svelte-1xjuq1i" data-svelte-h="svelte-6l5g2g"><div class="image-container svelte-1xjuq1i"><img src="/Place.png" alt="Image 1" class="image svelte-1xjuq1i"> <div class="image-text svelte-1xjuq1i">Location</div> <div class="image-text svelte-1xjuq1i">Mosul/Iraq</div></div> <div class="image-container svelte-1xjuq1i"><img src="/Atsign.png" alt="Image 2" class="image svelte-1xjuq1i"> <div class="image-text svelte-1xjuq1i">Email adress</div> <div class="image-text svelte-1xjuq1i">support@dentists.com</div></div> <div class="image-container svelte-1xjuq1i"><img src="/Phone.png" alt="Image 3" class="image svelte-1xjuq1i"> <div class="image-text svelte-1xjuq1i">Phone number</div> <div class="image-text svelte-1xjuq1i">+964777***7777</div></div></div></div>`;
});
const css = {
  code: "nav ul.svelte-fbpaz8 li.svelte-fbpaz8{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-fbpaz8.svelte-fbpaz8:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-fbpaz8.svelte-fbpaz8:left{font-size:20px;transition:font-size 3s}.header-image.svelte-fbpaz8.svelte-fbpaz8{width:100%;height:700px;background:url('https://ugc.futurelearn.com/uploads/images/6d/a3/header_6da3ec09-3f50-445c-b36a-4c26d504d958.jpg') center/cover no-repeat;background-size:cover;position:absolute;top:0;left:0px;z-index:-2}button.svelte-fbpaz8.svelte-fbpaz8:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.image-overlay.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(46, 59, 111, 0.445)}.scroll-box.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);height:fit-content}.scroll-box.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:550px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2)}.map-box.svelte-fbpaz8.svelte-fbpaz8{width:50%;height:200px;background-color:#fff}.image-text.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:60px;left:50%;transform:translateX(-50%);text-align:center;padding:20px;color:#fff;font-size:1.5em;font-weight:bold}.overlay.svelte-fbpaz8.svelte-fbpaz8{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-fbpaz8.svelte-fbpaz8{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-fbpaz8.svelte-fbpaz8{text-align:center}",
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
  let aboutUS = "";
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-fbpaz8"><li class="svelte-fbpaz8" data-svelte-h="svelte-1k7j4ue">Courses</li> <li class="svelte-fbpaz8" data-svelte-h="svelte-nh4gew">Fellowships</li> <li class="svelte-fbpaz8" data-svelte-h="svelte-3s5t57">Contact us</li></ul></div> <div class="header-image svelte-fbpaz8"><div class="image-overlay svelte-fbpaz8"><div class="image-text svelte-fbpaz8"><p style="position:relative;right:70px; " data-svelte-h="svelte-1mkz37p">About us</p> <p style="font-weight: 300;text-align:left;font-size: 20px; ">${escape(aboutUS)}</p></div></div></div> <div class="scroll-box svelte-fbpaz8">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} <div class="map-box svelte-fbpaz8" style="width: 81%; height: 200px;">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CLB2YMIS.js.map
