import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from './ssr-CggYz5VK.js';
import { B as Button } from './Button-b9hVt21A.js';
import { C as Card } from './Grid.svelte_svelte_type_style_lang-B__fylZH.js';
import 'firebase/app';
import 'firebase/messaging';
import { T as TopBar } from './TopBar-BZhKGns2.js';
import { F as Footer } from './Footer-DKgswHxn.js';
import './Map-L2AhRx-3.js';

const css$3 = {
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
  $$result.css.add(css$3);
  return `   <div style="margin-bottom: 90px;height:490px;" class="row svelte-1l32lre"><div class="row svelte-1l32lre" id="row-container">${each(cardsData, ({ title, text, src, id, clickHandler }) => {
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
  })} <div style="display:grid;place-items:center;">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Show all ",
      src: "back-icon.png",
      radius: "40px",
      clickHandler: onClick
    },
    {},
    {}
  )}</div></div></div> `;
});
const css$2 = {
  code: ".svelte-30d5l1{font-family:'Tajawal'}.neumorphic-card.svelte-30d5l1{border-radius:22px;background:#E6E7EE;box-shadow:inset 7px 7px 14px  rgba(0, 0, 0, 0.1) ,\r\n            inset -7px -7px 14px rgba(255, 255, 255, 0.7)}.navy-title.svelte-30d5l1{color:navy;font-weight:bold;width:50%;text-align:end}.black-title.svelte-30d5l1{color:black;font-weight:bold}.dots-container.svelte-30d5l1{display:flex;justify-content:center;margin-top:10px}.dot.svelte-30d5l1{width:10px;height:10px;margin:0 5px;border-radius:50%;cursor:pointer}.light-dot.svelte-30d5l1{background-color:rgb(70, 70, 128)}.dark-dot.svelte-30d5l1{background-color:navy}.rectangular-image.svelte-30d5l1{background-size:cover;border-radius:22px;width:40vw;height:40vw}button.svelte-30d5l1{padding:15px 30px;background:#E6E7EE;border:none;border-radius:10px;padding:5px 10px 5px 20px ;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n        -2px -2px 5px 0 rgb(255, 255, 255);border-radius:40px;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'arimo';position:relative;border-radius:10px;padding:6px 16px;float:right;bottom:30px}button.svelte-30d5l1:hover{transform:scale(1.05)}button.svelte-30d5l1:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n               inset -4px -4px 12px #ffffff}",
  map: null
};
const Blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { firstTitle = "Default Title" } = $$props;
  let { secondTitle = "Default Second Title" } = $$props;
  let { blogs = [] } = $$props;
  if (blogs.length > 5) {
    blogs = blogs.slice(0, 6);
  }
  let currentIndex = 0;
  if ($$props.firstTitle === void 0 && $$bindings.firstTitle && firstTitle !== void 0)
    $$bindings.firstTitle(firstTitle);
  if ($$props.secondTitle === void 0 && $$bindings.secondTitle && secondTitle !== void 0)
    $$bindings.secondTitle(secondTitle);
  if ($$props.blogs === void 0 && $$bindings.blogs && blogs !== void 0)
    $$bindings.blogs(blogs);
  $$result.css.add(css$2);
  return `   <div class="svelte-30d5l1"><div class="icon svelte-30d5l1"><button class="svelte-30d5l1" data-svelte-h="svelte-x4kpjk"><img src="/back-icon.png" class="svelte-30d5l1"></button></div>  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px;" class="svelte-30d5l1"><div class="navy-title svelte-30d5l1">${escape(firstTitle)}</div> </div>  <div class="neumorphic-card svelte-30d5l1" style="padding: 20px;"><div style="text-align: center;" class="svelte-30d5l1">  <div class="row svelte-30d5l1" style="display: flex;justify-content:space-around;align-items: center;"><button class="svelte-30d5l1" data-svelte-h="svelte-5u2k07"><img src="/left.png" class="svelte-30d5l1"></button> ${each(blogs, (blog, index) => {
    return `${index == currentIndex ? `<img${add_attribute("src", blog.src, 0)} alt="Neumorphic Picture" id="blog-image" class="rectangular-image svelte-30d5l1">` : ``}`;
  })}  <button class="svelte-30d5l1" data-svelte-h="svelte-1qp7tuo"><img src="/right.png" class="svelte-30d5l1"></button></div>  ${blogs.length > 0 ? `<div class="black-title svelte-30d5l1">${escape(blogs[currentIndex].text)}</div> ` : ``}  <div class="dots-container svelte-30d5l1">${each([0, 1, 2], (_, index) => {
    return `<div class="${"dot " + escape(index === currentIndex ? "light-dot" : "dark-dot", true) + " svelte-30d5l1"}"></div>`;
  })}</div></div></div></div>`;
});
const css$1 = {
  code: ".neumorphic-card.svelte-av7ac4.svelte-av7ac4{padding:20px;margin:10px;border-radius:15px;background:#E6E7EE;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);border-radius:22px}.navy-title.svelte-av7ac4.svelte-av7ac4{color:navy;font-weight:bold;text-align:center;margin-bottom:10px;margin-bottom:30px}.black-title.svelte-av7ac4.svelte-av7ac4{color:black;font-weight:bold;margin-bottom:5px}.small-note.svelte-av7ac4.svelte-av7ac4{color:black;font-size:12px;margin-bottom:5px}.big-text.svelte-av7ac4.svelte-av7ac4{color:black;font-weight:bold}.row-images.svelte-av7ac4.svelte-av7ac4{display:flex;justify-content:space-between;margin-top:10px}.show-call-button.svelte-av7ac4.svelte-av7ac4{margin-top:20px;display:flex;justify-content:flex-end}.first-row.svelte-av7ac4.svelte-av7ac4{display:flex;justify-content:space-between}.image-card.svelte-av7ac4.svelte-av7ac4{flex:1;margin-right:10px}.text-container.svelte-av7ac4.svelte-av7ac4{flex:1;display:flex;flex-direction:column;justify-content:space-between;height:200px}.postCard.svelte-av7ac4.svelte-av7ac4{width:800px;height:500px;border-radius:10px;background-color:#e6e7ee;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r\n  3px 3px 8px 4px rgba(0, 0, 0, 0.25);margin-bottom:70px}.postCard.svelte-av7ac4 img.svelte-av7ac4{width:100%;height:100%;object-fit:contain}",
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
  return `   <div style="margin-top: 90px;"> <div class="navy-title svelte-av7ac4" data-svelte-h="svelte-dyb2yo">Products</div>  <div class="neumorphic-card svelte-av7ac4"> <div class="first-row svelte-av7ac4"> ${data.length >= 1 ? `<div class="image-card svelte-av7ac4"><div class="postCard svelte-av7ac4" style="width: 270px; height: 270px; border-radius: 10px; background-color: #e6e7ee; box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25); margin-bottom: 70px;"><img${add_attribute("src", data[imgIndex % data.length].src, 0)} class="svelte-av7ac4"></div></div>` : ``}  <div class="text-container svelte-av7ac4" data-svelte-h="svelte-1sx5tfn"><div class="black-title svelte-av7ac4">Title</div> <div class="small-note svelte-av7ac4">A small note goes here.</div> <div class="big-text svelte-av7ac4">Big bold black text.</div></div></div>  <div class="row-images svelte-av7ac4">${data.length > 1 ? `${each(data, (_, index) => {
    return `${index + 1 != data.length ? `<div class="postCard svelte-av7ac4" style="width: 170px; height: 170px; border-radius: 10px; background-color: #e6e7ee; box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25); margin-bottom: 70px;"><img${add_attribute("src", data[(imgIndex + 1) % data.length].src, 0)} class="svelte-av7ac4"></div> ` : ``}`;
  })}` : ``} ${validate_component(Button, "Button").$$render($$result, { text: "Show Call", src: "/back-icon.png" }, {}, {})}</div>  <div class="show-call-button svelte-av7ac4" data-svelte-h="svelte-1866ndo"></div></div></div>`;
});
const css = {
  code: ".header-image.svelte-1bmw3nn{width:100%;height:700px;background:url('https://ugc.futurelearn.com/uploads/images/6d/a3/header_6da3ec09-3f50-445c-b36a-4c26d504d958.jpg') center/cover no-repeat;background-size:cover;position:absolute;top:0;left:0px;z-index:-2}button.svelte-1bmw3nn:active{box-shadow:inset 4px 4px 12px #c5c5c5,\n               inset -4px -4px 12px #ffffff}.image-overlay.svelte-1bmw3nn{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(46, 59, 111, 0.445)}.scroll-box.svelte-1bmw3nn{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);height:fit-content}.scroll-box.svelte-1bmw3nn{position:absolute;top:550px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2)}.image-text.svelte-1bmw3nn{position:absolute;top:60px;left:50%;transform:translateX(-50%);text-align:center;padding:20px;color:#fff;font-size:1.5em;font-weight:bold}.overlay.svelte-1bmw3nn{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-1bmw3nn{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-1bmw3nn{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-1bmw3nn{text-align:center}@media(max-width: 600px){.side-menu.svelte-1bmw3nn{display:none;position:fixed;top:60px;right:0px;width:50%;height:49%;background-color:whitesmoke;z-index:2000}}",
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="side-menu svelte-1bmw3nn" id="menuu"${add_attribute("style", `display: ${"none"};`, 0)}><ul><li data-svelte-h="svelte-15gd3eg">Courses</li> <li data-svelte-h="svelte-1w3oh8g">Fellowships</li> <li data-svelte-h="svelte-1pessln">Contact us</li></ul></div> <div class="header-image svelte-1bmw3nn"><div class="image-overlay svelte-1bmw3nn"><div class="image-text svelte-1bmw3nn"><p style="position:relative;right:70px; " data-svelte-h="svelte-1mkz37p">About us</p> <p style="font-weight: 300;text-align:left;font-size: 20px; ">${escape(aboutUS)}</p></div></div></div> <div class="scroll-box svelte-1bmw3nn">${`<div class="title" data-svelte-h="svelte-9rjion">Fellowships</div> ${validate_component(Row, "Row").$$render(
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
  )} ${validate_component(Blogs, "Blogs").$$render($$result, { blogs }, {}, {})} ${validate_component(Products, "Products").$$render($$result, { data: products }, {}, {})}`}</div>   ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-dl_8TCAu.js.map
