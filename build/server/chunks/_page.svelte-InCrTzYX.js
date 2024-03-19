import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from './ssr-C5Pny6Bf.js';
import { B as Button } from './Button-Dml-C_Qr.js';
import { C as Card } from './Grid.svelte_svelte_type_style_lang-DR_rOlsm.js';
import { M as Map } from './Map-TAo5RPfk.js';
import 'firebase/app';
import 'firebase/messaging';

/* empty css                                                 */
const css$4 = {
  code: ".row.svelte-1l32lre{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;width:100%;min-width:0;scrollbar-width:none;-ms-overflow-style:none}.row.svelte-1l32lre::-webkit-scrollbar{display:none}",
  map: null
};
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardsData = [] } = $$props;
  let { onClick } = $$props;
  let { f } = $$props;
  `${cardsData.length * 340}px`;
  if ($$props.cardsData === void 0 && $$bindings.cardsData && cardsData !== void 0)
    $$bindings.cardsData(cardsData);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.f === void 0 && $$bindings.f && f !== void 0)
    $$bindings.f(f);
  $$result.css.add(css$4);
  return `   <div style="margin-bottom: 90px;"><div class="row svelte-1l32lre" id="row-container">${each(cardsData, ({ title, text, src, id, clickHandler }) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        f,
        id,
        title,
        text,
        src,
        clickHandler,
        style: "scroll-snap-align: start;",
        key: title + text
      },
      {},
      {}
    )}`;
  })}</div> <div style="display:grid;place-items:center;">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Show all ",
      src: "back-icon.png",
      radius: "40px",
      clickHandler: onClick
    },
    {},
    {}
  )}</div></div> `;
});
const css$3 = {
  code: ".svelte-sumc1k{font-family:'Tajawal'}.neumorphic-card.svelte-sumc1k{border-radius:22px;background:#E6E7EE;box-shadow:inset 7px 7px 14px  rgba(0, 0, 0, 0.1) ,\r\n            inset -7px -7px 14px rgba(255, 255, 255, 0.7)}.navy-title.svelte-sumc1k{color:navy;font-weight:bold;width:50%;text-align:end}.black-title.svelte-sumc1k{color:black;font-weight:bold}.dots-container.svelte-sumc1k{display:flex;justify-content:center;margin-top:10px}.dot.svelte-sumc1k{width:10px;height:10px;margin:0 5px;border-radius:50%;cursor:pointer}.light-dot.svelte-sumc1k{background-color:rgb(70, 70, 128)}.dark-dot.svelte-sumc1k{background-color:navy}.rectangular-image.svelte-sumc1k{width:80%;background-size:cover;height:40%;border-radius:22px}",
  map: null
};
const Blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { firstTitle = "Default Title" } = $$props;
  let { secondTitle = "Default Second Title" } = $$props;
  let { blogs = [] } = $$props;
  if (blogs.length > 3) {
    blogs = blogs.slice(0, 4);
  }
  let currentIndex = 0;
  if ($$props.firstTitle === void 0 && $$bindings.firstTitle && firstTitle !== void 0)
    $$bindings.firstTitle(firstTitle);
  if ($$props.secondTitle === void 0 && $$bindings.secondTitle && secondTitle !== void 0)
    $$bindings.secondTitle(secondTitle);
  if ($$props.blogs === void 0 && $$bindings.blogs && blogs !== void 0)
    $$bindings.blogs(blogs);
  $$result.css.add(css$3);
  return `   <div class="svelte-sumc1k"><div class="icon svelte-sumc1k" data-svelte-h="svelte-17y3p76"><img src="" class="svelte-sumc1k"></div>  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px;" class="svelte-sumc1k"><div class="navy-title svelte-sumc1k">${escape(firstTitle)}</div> </div>  <div class="neumorphic-card svelte-sumc1k" style="padding: 20px;"><div style="text-align: center;" class="svelte-sumc1k">  <img src="https://picsum.photos/200/300" alt="Neumorphic Picture" id="blog-image" class="rectangular-image svelte-sumc1k">   ${blogs.length > 0 ? `<div class="black-title svelte-sumc1k">${escape(blogs[currentIndex].text)}</div> ` : ``}  <div class="dots-container svelte-sumc1k">${each([0, 1, 2], (_, index) => {
    return `<div class="${"dot " + escape(index === currentIndex ? "light-dot" : "dark-dot", true) + " svelte-sumc1k"}"></div>`;
  })}</div></div></div></div>`;
});
const css$2 = {
  code: ".card.svelte-104p3ks{width:300px;height:300px;padding:20px;border-radius:15px;background:#E6E7EE;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);margin:20px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px}img.svelte-104p3ks{border-radius:10px;margin-bottom:10px}",
  map: null
};
const EmptyCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { size } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$2);
  return `<div class="card svelte-104p3ks">${src != "" ? ` <img${add_attribute("src", src, 0)}${add_attribute("width", size != void 0 ? size.w : 120, 0)}${add_attribute("height", size != void 0 ? size.h : 80, 0)} class="svelte-104p3ks">` : ``}</div>`;
});
const css$1 = {
  code: ".neumorphic-card.svelte-1qyvrcm{padding:20px;margin:10px;border-radius:15px;background:#E6E7EE;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);border-radius:22px}.navy-title.svelte-1qyvrcm{color:navy;font-weight:bold;text-align:center;margin-bottom:10px;margin-bottom:30px}.black-title.svelte-1qyvrcm{color:black;font-weight:bold;margin-bottom:5px}.small-note.svelte-1qyvrcm{color:black;font-size:12px;margin-bottom:5px}.big-text.svelte-1qyvrcm{color:black;font-weight:bold}.row-images.svelte-1qyvrcm{display:flex;justify-content:space-between;margin-top:10px}.show-call-button.svelte-1qyvrcm{margin-top:20px;display:flex;justify-content:flex-end}.first-row.svelte-1qyvrcm{display:flex;justify-content:space-between}.image-card.svelte-1qyvrcm{flex:1;margin-right:10px}.text-container.svelte-1qyvrcm{flex:1;display:flex;flex-direction:column;justify-content:space-between;height:200px}",
  map: null
};
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  let imgIndex = 0;
  setInterval(
    () => {
      if (data.length > 1)
        imgIndex = (imgIndex + 1) % data.length;
    },
    7e3
  );
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `   <div style="margin-top: 90px;"> <div class="navy-title svelte-1qyvrcm" data-svelte-h="svelte-dyb2yo">Products</div>  <div class="neumorphic-card svelte-1qyvrcm"> <div class="first-row svelte-1qyvrcm"> ${data.length >= 1 ? `<div class="image-card svelte-1qyvrcm">${validate_component(EmptyCard, "EmptyCard").$$render(
    $$result,
    {
      src: data[imgIndex % data.length].src,
      size: { w: 290, h: 280 }
    },
    {},
    {
      default: () => {
        return ` `;
      }
    }
  )}</div>` : ``}  <div class="text-container svelte-1qyvrcm" data-svelte-h="svelte-1sx5tfn"><div class="black-title svelte-1qyvrcm">Title</div> <div class="small-note svelte-1qyvrcm">A small note goes here.</div> <div class="big-text svelte-1qyvrcm">Big bold black text.</div></div></div>  <div class="row-images svelte-1qyvrcm">${data.length > 1 ? `${each(data, (_, index) => {
    return `${index + 1 != data.length ? `${validate_component(Card, "Card").$$render(
      $$result,
      {
        src: data[(imgIndex + 1) % data.length].src,
        title: data[(imgIndex + 1) % data.length].title,
        text: data[(imgIndex + 1) % data.length].text + (data[(imgIndex + 1) % data.length].discount ? data[(imgIndex + 1) % data.length].discount : " "),
        disableBtn: 1,
        size: { w: 300, h: 200 }
      },
      {},
      {
        default: () => {
          return ` `;
        }
      }
    )}` : ``}`;
  })}` : ``} ${validate_component(Button, "Button").$$render($$result, { text: "Show Call" }, {}, {})}</div>  <div class="show-call-button svelte-1qyvrcm" data-svelte-h="svelte-1866ndo"></div></div></div>`;
});
const css = {
  code: "header.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{display:flex;justify-content:center;align-items:center;background-color:rgb(46, 59, 111);color:#fff;padding:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);position:fixed;top:0;left:0;width:100%;z-index:1000;border-bottom-left-radius:10px;border-bottom-right-radius:10px;height:70px}nav.svelte-z94g8o ul.svelte-z94g8o.svelte-z94g8o{list-style:none;margin:0;padding:0;display:flex}nav.svelte-z94g8o ul.svelte-z94g8o li.svelte-z94g8o{margin-right:20px;margin-top:20px;transition:font-size 3s}li.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o:hover{cursor:pointer;font-size:30px;transition:font-size 3s}li.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o:left{font-size:20px;transition:font-size 3s}.header-image.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{width:100%;height:700px;background:url('https://ugc.futurelearn.com/uploads/images/6d/a3/header_6da3ec09-3f50-445c-b36a-4c26d504d958.jpg') center/cover no-repeat;background-size:cover;position:absolute;top:0;left:0px;z-index:-2}.button.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{padding:7px 30px;border:1px solid white;border-radius:40px;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -2px -2px 10px rgba(255, 255, 255, 0.7);color:white;font-size:1em;cursor:pointer;transition:transform 0.2s ease;text-align:center}.button.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o:hover{transform:scale(1.05)}button.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o:active{box-shadow:inset 4px 4px 12px #c5c5c5,\n               inset -4px -4px 12px #ffffff}.image-overlay.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(46, 59, 111, 0.445)}.scroll-box.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);height:fit-content}.scroll-box.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{position:absolute;top:550px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2)}.footer-container.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{background-color:darkgreen;display:flex;justify-content:space-between;align-items:center;width:100%;position:absolute;overflow-x:hidden;height:430px;top:2990px;z-index:-1}.map-box.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{width:50%;height:200px;background-color:#fff}.social-media-box.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{display:flex}.social-icon.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{display:inline-block;padding:10px;margin-right:10px;background-color:#fff;color:darkgreen;text-decoration:none;border-radius:5px}.image-text.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{position:absolute;top:60px;left:50%;transform:translateX(-50%);text-align:center;padding:20px;color:#fff;font-size:1.5em;font-weight:bold}.overlay.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{text-align:center}.menu.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{display:none}@media(max-width: 600px){.side-menu.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{display:none;position:fixed;top:60px;right:0px;width:50%;height:49%;background-color:whitesmoke;z-index:2000}.menu.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{display:block;widows:90px;position:absolute;right:60px;top:20px;background-color:white}.header-list.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{display:none}#loginbtn.svelte-z94g8o.svelte-z94g8o.svelte-z94g8o{display:none}}",
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
  let courses = [];
  let fellowships = [];
  let products = [];
  let blogs = [];
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
  return `${``} <header id="header" class="svelte-z94g8o"><div style="position:absolute;top:-15px;left:15px;"> <h1 data-svelte-h="svelte-16z141n"><img src="Logo.png" width="80px" style="display: relative; top:20px;"></h1></div> <nav class="svelte-z94g8o"><ul class="header-list svelte-z94g8o"><li class="svelte-z94g8o" data-svelte-h="svelte-1qsl060">Courses</li> <li class="svelte-z94g8o" data-svelte-h="svelte-1my9ef0">Fellowships</li> <li class="svelte-z94g8o" data-svelte-h="svelte-a5qvis">products</li> <li class="svelte-z94g8o" data-svelte-h="svelte-12veshn">Contact us</li></ul></nav> <div class="button svelte-z94g8o" id="loginbtn" text="Login" style="position:absolute;right:30px;top:20;" data-svelte-h="svelte-4s12t">Login</div> <svg id="menuio" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" class="menu svelte-z94g8o" viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg></header> <div class="side-menu svelte-z94g8o" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul class="svelte-z94g8o"><li class="svelte-z94g8o" data-svelte-h="svelte-15gd3eg">Courses</li> <li class="svelte-z94g8o" data-svelte-h="svelte-1w3oh8g">Fellowships</li> <li class="svelte-z94g8o" data-svelte-h="svelte-1pessln">Contact us</li></ul></div> <div class="header-image svelte-z94g8o"><div class="image-overlay svelte-z94g8o"><div class="image-text svelte-z94g8o"><p style="position:relative;right:70px; " data-svelte-h="svelte-1mkz37p">About us</p> <p style="font-weight: 300;text-align:left;font-size: 20px; ">${escape(aboutUS)}</p></div></div></div> <div class="scroll-box svelte-z94g8o">${`<div class="title" data-svelte-h="svelte-9rjion">Fellowships</div> ${validate_component(Row, "Row").$$render(
    $$result,
    {
      f: true,
      onClick() {
        const a = document.createElement("a");
        a.href = "/fellowships";
        a.click();
      },
      cardsData: [...fellowships]
    },
    {},
    {}
  )} <div class="title" data-svelte-h="svelte-4wj5r">Courses</div> ${validate_component(Row, "Row").$$render(
    $$result,
    {
      f: false,
      onClick() {
        const a = document.createElement(
          "a"
        );
        a.href = "/courses";
        a.click();
      },
      //  show=1;
      cardsData: [...courses]
    },
    {},
    {}
  )} ${validate_component(Blogs, "Blogs").$$render($$result, { blogs }, {}, {})} ${validate_component(Products, "Products").$$render($$result, { data: products }, {}, {})}`}</div>   <div class="footer-container svelte-z94g8o" style="${"top:" + escape(scrollBoxHeight + 690, true) + "px;"}"><div class="map-box svelte-z94g8o">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </div> <div class="social-media-box svelte-z94g8o" data-svelte-h="svelte-112zi31"><a href="#" class="social-icon svelte-z94g8o">Facebook</a> <a href="#" class="social-icon svelte-z94g8o">Twitter</a> <a href="#" class="social-icon svelte-z94g8o">Instagram</a> <a href="#" class="social-icon svelte-z94g8o">YouTube</a> <a href="#" class="social-icon svelte-z94g8o">LinkedIn</a></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-InCrTzYX.js.map
