import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from './ssr-C5Pny6Bf.js';
import { M as Map } from './Map-TAo5RPfk.js';
import { B as Button } from './Button-Dml-C_Qr.js';

const css$2 = {
  code: ".button.svelte-1ivi0gm{padding:20px;border:none;border-radius:100%;background:linear-gradient(145deg, #fbfbfb, #d4d4d4);box-shadow:5px 5px 10px #c8c8c8,\r\n             -5px -5px 10px #ffffff;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease}.button.svelte-1ivi0gm:hover{transform:scale(1.05)}button.svelte-1ivi0gm:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n             inset -4px -4px 12px #ffffff}",
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
  return `<button class="button svelte-1ivi0gm">${escape(text)} ${src != "" ? `<img${add_attribute("src", src, 0)}>` : ``}</button>`;
});
const css$1 = {
  code: ".neumorphic-box.svelte-1ng5ewb{margin:20px;padding:20px;border-radius:13px;background:#e8e8e8;box-shadow:inset 5px 5px 12px #808080, inset -5px -5px 12px #ffffff}.circular-icon.svelte-1ng5ewb{position:relative;top:-40px;right:40px;width:90px;height:90px;border-radius:50%;background:#ebebeb;box-shadow:inset 5px 5px 5px #c8c8c8,\r\n            inset -5px -5px 5px #ffffff;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.title.svelte-1ng5ewb{font-size:24px;font-weight:bold;color:navy;margin-bottom:10px;text-align:center}.description.svelte-1ng5ewb{font-size:16px;color:black;margin-bottom:20px;text-align:center}.double-column.svelte-1ng5ewb{display:flex;justify-content:space-between;margin-bottom:20px}.column.svelte-1ng5ewb{flex:1;margin:0 10px}.image-row.svelte-1ng5ewb{display:flex;justify-content:space-around}.image-container.svelte-1ng5ewb{text-align:center}.image.svelte-1ng5ewb{width:100px;height:100px;border-radius:50%;margin-bottom:10px}.image-text.svelte-1ng5ewb{font-size:14px;color:black}.input-container.svelte-1ng5ewb{margin-bottom:15px;border-radius:26px}label.svelte-1ng5ewb{font-size:14px;color:navy;margin-bottom:5px}.input-with-icon.svelte-1ng5ewb{display:flex;align-items:center;background-color:#e0e0e0;border-radius:5px;padding:8px;margin-top:5px;background:#f0f0f0;box-shadow:inset 6px 6px 12px #c2c2c2,\r\n            inset -6px -6px 12px #ffffff;border:1px solid rgb(168, 168, 168)}.icon.svelte-1ng5ewb{position:relative;right:50px;bottom:10px;width:20px;height:20px;margin-right:20px}input.svelte-1ng5ewb{flex:1;border:none;outline:none;border-radius:26px;background-color:transparent}",
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
  return `<div class="neumorphic-box svelte-1ng5ewb" data-svelte-h="svelte-1hcl2i2"><div class="path">home &gt;&gt; courses &gt;&gt; course 0
    </div></div> <div class="neumorphic-box svelte-1ng5ewb"><div class="circular-icon svelte-1ng5ewb" data-svelte-h="svelte-arjklm"><img src="Logo.png" style="width: 70px;"></div> <div class="title svelte-1ng5ewb">${escape(title)}</div> <div class="description svelte-1ng5ewb">${escape(description)}</div> <div class="double-column svelte-1ng5ewb"><div class="column svelte-1ng5ewb"><img src="contact.png"> <div class="image-row svelte-1ng5ewb">${validate_component(CircularButton, "CircularButton").$$render($$result, { text: "IG" }, {}, {})} ${validate_component(CircularButton, "CircularButton").$$render($$result, { text: "FB" }, {}, {})} ${validate_component(CircularButton, "CircularButton").$$render($$result, { text: "YT" }, {}, {})} ${validate_component(CircularButton, "CircularButton").$$render($$result, { text: "TG" }, {}, {})}</div></div> <div class="column svelte-1ng5ewb"><div class="input-container svelte-1ng5ewb"><label for="email" class="svelte-1ng5ewb" data-svelte-h="svelte-zid7j4">Your name</label> <div class="input-with-icon svelte-1ng5ewb"><img src="path/to/email-icon.png" alt="name Icon" class="icon svelte-1ng5ewb"> <input type="text" id="username" placeholder="Enter your name" class="svelte-1ng5ewb"></div></div> <div class="input-container svelte-1ng5ewb"><label for="email" class="svelte-1ng5ewb" data-svelte-h="svelte-zmqwaf">Your Email</label> <div class="input-with-icon svelte-1ng5ewb"><img src="path/to/email-icon.png" alt="Email Icon" class="icon svelte-1ng5ewb"> <input type="email" id="email" placeholder="Enter your email" class="svelte-1ng5ewb"></div></div> <div class="input-container svelte-1ng5ewb"><label for="message" class="svelte-1ng5ewb" data-svelte-h="svelte-5subx7">Your Message</label> <div class="input-with-icon svelte-1ng5ewb"><input type="text" id="msg"${add_attribute("value", msg, 0)} style="height: 190px;" placeholder="Enter your message here" class="svelte-1ng5ewb"></div></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Send the message",
      clickHandler() {
        {
          return;
        }
      }
    },
    {},
    {}
  )}</div></div> <div class="image-row svelte-1ng5ewb" data-svelte-h="svelte-1i8oev7"><div class="image-container svelte-1ng5ewb"><img src="image1.jpg" alt="Image 1" class="image svelte-1ng5ewb"> <div class="image-text svelte-1ng5ewb">Location</div> <div class="image-text svelte-1ng5ewb">Mosul/Iraq</div></div> <div class="image-container svelte-1ng5ewb"><img src="image2.jpg" alt="Image 2" class="image svelte-1ng5ewb"> <div class="image-text svelte-1ng5ewb">Email adress</div> <div class="image-text svelte-1ng5ewb">support@dentists.com</div></div> <div class="image-container svelte-1ng5ewb"><img src="image3.jpg" alt="Image 3" class="image svelte-1ng5ewb"> <div class="image-text svelte-1ng5ewb">Phone number</div> <div class="image-text svelte-1ng5ewb">+964777***7777</div></div></div></div>`;
});
const css = {
  code: "header.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{display:flex;justify-content:center;align-items:center;background-color:rgb(46, 59, 111);color:#fff;padding:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);position:fixed;top:0;left:0;width:100%;z-index:1000;border-bottom-left-radius:10px;border-bottom-right-radius:10px;height:70px}nav.svelte-fbpaz8 ul.svelte-fbpaz8.svelte-fbpaz8{list-style:none;margin:0;padding:0;display:flex}nav.svelte-fbpaz8 ul.svelte-fbpaz8 li.svelte-fbpaz8{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8:left{font-size:20px;transition:font-size 3s}.header-image.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{width:100%;height:700px;background:url('https://ugc.futurelearn.com/uploads/images/6d/a3/header_6da3ec09-3f50-445c-b36a-4c26d504d958.jpg') center/cover no-repeat;background-size:cover;position:absolute;top:0;left:0px;z-index:-2}.button.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{padding:7px 30px;border:1px solid white;border-radius:40px;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -2px -2px 10px rgba(255, 255, 255, 0.7);color:white;font-size:1em;cursor:pointer;transition:transform 0.2s ease;text-align:center}.button.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8:hover{transform:scale(1.05)}button.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.image-overlay.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(46, 59, 111, 0.445)}.scroll-box.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);height:fit-content}.scroll-box.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:550px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2)}.footer-container.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{background-color:darkgreen;display:flex;justify-content:space-between;align-items:center;width:100%;position:absolute;overflow-x:hidden;height:430px;top:2990px;z-index:-1}.map-box.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{width:50%;height:200px;background-color:#fff}.social-media-box.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{display:flex}.social-icon.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{display:inline-block;padding:10px;margin-right:10px;background-color:#fff;color:darkgreen;text-decoration:none;border-radius:5px}.image-text.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:60px;left:50%;transform:translateX(-50%);text-align:center;padding:20px;color:#fff;font-size:1.5em;font-weight:bold}.overlay.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-fbpaz8.svelte-fbpaz8.svelte-fbpaz8{text-align:center}",
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
  return `${``} <header id="header" class="svelte-fbpaz8"><div style="position:absolute;top:-15px;left:15px;"> <h1 data-svelte-h="svelte-mg24s4"><img src="Logo.png" width="80px" style="display: relative; top:20px;"></h1></div> <nav class="svelte-fbpaz8"><ul class="svelte-fbpaz8"><li class="svelte-fbpaz8" data-svelte-h="svelte-1sjt372">Courses</li> <li class="svelte-fbpaz8" data-svelte-h="svelte-6lgukc">Fellowships</li> <li class="svelte-fbpaz8" data-svelte-h="svelte-14c67nf">Contact us</li></ul></nav> <div class="button svelte-fbpaz8" id="loginbtn" text="Login" style="position:absolute;right:30px;top:20;" data-svelte-h="svelte-4s12t">Login</div> <svg id="menuio" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" class="menu" viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg></header> <div class="side-menu" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-fbpaz8"><li class="svelte-fbpaz8" data-svelte-h="svelte-1k7j4ue">Courses</li> <li class="svelte-fbpaz8" data-svelte-h="svelte-nh4gew">Fellowships</li> <li class="svelte-fbpaz8" data-svelte-h="svelte-3s5t57">Contact us</li></ul></div> <div class="header-image svelte-fbpaz8"><div class="image-overlay svelte-fbpaz8"><div class="image-text svelte-fbpaz8"><p style="position:relative;right:70px; " data-svelte-h="svelte-1mkz37p">About us</p> <p style="font-weight: 300;text-align:left;font-size: 20px; ">${escape(aboutUS)}</p></div></div></div> <div class="scroll-box svelte-fbpaz8">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div>   <div class="footer-container svelte-fbpaz8" style="${"top:" + escape(scrollBoxHeight + 690, true) + "px;"}"><div class="map-box svelte-fbpaz8">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div> <div class="social-media-box svelte-fbpaz8" data-svelte-h="svelte-1pdgfgt"><a href="#" class="social-icon svelte-fbpaz8">Facebook</a> <a href="#" class="social-icon svelte-fbpaz8">Twitter</a> <a href="#" class="social-icon svelte-fbpaz8">Instagram</a> <a href="#" class="social-icon svelte-fbpaz8">YouTube</a> <a href="#" class="social-icon svelte-fbpaz8">LinkedIn</a></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BFp6yi7o.js.map
