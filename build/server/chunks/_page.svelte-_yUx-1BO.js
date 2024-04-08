import { c as create_ssr_component, v as validate_component, e as escape, d as each, f as add_attribute } from './ssr-CZ3Mxc3I.js';
import { C as Card } from './Grid.svelte_svelte_type_style_lang-lfYUbEf2.js';
import { B as Button } from './Button-jyMbdDHw.js';
import 'firebase/app';
import 'firebase/messaging';
import { F as Footer } from './Footer-DnSQU3js.js';
import './Map-DvJS5AiN.js';

const css$4 = {
  code: ".row.svelte-8t36q7{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;width:100%;min-width:0;scrollbar-width:none;-ms-overflow-style:none}.row.svelte-8t36q7::-webkit-scrollbar{display:none}.button.svelte-8t36q7{border:none;padding:5px 10px 5px 15px;background-color:#e6e7ee;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;border-radius:40px;font-size:1em;cursor:pointer;transition:transform .2s ease;font-family:'Tajawal';color:#2e3b6f\r\n}.button.svelte-8t36q7:hover{transform:scale(1.05)\r\n}button.svelte-8t36q7:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}",
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
  return `   <div style="margin-bottom: 0; height: 406px;" class="row svelte-8t36q7"><div class="row svelte-8t36q7" id="row-container">${each([...cardsData], ({ title, text, src, id, clickHandler }) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        f,
        id,
        title,
        text,
        src,
        clickHandler,
        disableBtn: 1,
        noBtn: true,
        style: "scroll-snap-align: start;",
        key: title + text
      },
      {},
      {}
    )}`;
  })}</div></div> <div style="display:grid;place-items:center;margin-bottom:90px;margin-top:20px;"><button class="button svelte-8t36q7" style="display: flex;align-items:center;" data-svelte-h="svelte-2n4iru"><div>Show all</div> <img src="/back-icon.png"></button> </div> `;
});
const css$3 = {
  code: ".svelte-zd5oyq.svelte-zd5oyq{font-family:'Tajawal'}.dots-container.svelte-zd5oyq.svelte-zd5oyq{display:flex;justify-content:center;margin-top:10px}.dot.svelte-zd5oyq.svelte-zd5oyq{width:10px;height:10px;margin:0 5px;border-radius:50%;cursor:pointer}.light-dot.svelte-zd5oyq.svelte-zd5oyq{background-color:rgb(70, 70, 128)}.dark-dot.svelte-zd5oyq.svelte-zd5oyq{background-color:#2e3b6f}.rectangular-image.svelte-zd5oyq.svelte-zd5oyq{background-size:cover;border-radius:22px;width:40vw;height:40vw}button.svelte-zd5oyq.svelte-zd5oyq{padding:15px 30px;background:#E6E7EE;border:none;border-radius:10px;padding:5px 10px 5px 20px ;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n        -2px -2px 5px 0 rgb(255, 255, 255);border-radius:40px;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal';position:relative;border-radius:10px;padding:6px 16px;float:right;bottom:30px}button.svelte-zd5oyq.svelte-zd5oyq:hover{transform:scale(1.05)}button.svelte-zd5oyq.svelte-zd5oyq:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n               inset -4px -4px 12px #ffffff}.postCard.svelte-zd5oyq.svelte-zd5oyq{width:80%;border-radius:10px;background-color:#e6e7ee;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r\n  3px 3px 8px 4px rgba(0, 0, 0, 0.25);margin-bottom:70px;min-height:420px;max-height:550px;overflow:hidden;position:relative;margin:auto}.captionCont.svelte-zd5oyq.svelte-zd5oyq{width:100%;max-height:100px;color:#2e3b6f;font-family:'Tajawal';overflow-y:auto;text-align:center;margin:0 0 20px}.captionCont.svelte-zd5oyq p.svelte-zd5oyq{margin:10px 10px 0 10px}.imageCont.svelte-zd5oyq.svelte-zd5oyq{width:100%;height:400px;overflow:hidden;background:linear-gradient(0.25turn, #2e3b6f, #39879b);border-radius:10px 10px 0 0 ;position:relative;display:inline-block}.postCard.svelte-zd5oyq img.svelte-zd5oyq{width:100%;height:100%;object-fit:contain;display:block}.nextImageBtn.svelte-zd5oyq.svelte-zd5oyq{position:absolute;top:50%;transform:translateY(-50%);background-color:transparent;color:white;border:none;padding:10px;cursor:pointer;width:80px;height:100%;left:0px;display:flex;align-items:center;justify-content:center}.previousImageBtn.svelte-zd5oyq.svelte-zd5oyq{position:absolute;top:50%;transform:translateY(-50%);background-color:transparent;color:white;border:none;padding:10px;cursor:pointer;width:80px;height:100%;right:0px;display:flex;align-items:center;justify-content:center}.nextImageBtn.svelte-zd5oyq.svelte-zd5oyq:hover{background:linear-gradient(0.25turn,#0000007e,#00000000)\r\n}.previousImageBtn.svelte-zd5oyq.svelte-zd5oyq:hover{background:linear-gradient(0.75turn,#0000007e,#00000000)\r\n}",
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
  $$result.css.add(css$3);
  return `   <div class="svelte-zd5oyq"><div class="icon svelte-zd5oyq"><button style="padding: 4px 4px 0px 4px;float: inline-end;right: 10%;bottom: 7px;" class="svelte-zd5oyq" data-svelte-h="svelte-d8n0jw"><img src="/open.png" style="right: 10%;width: 33px; width: 33px;" class="svelte-zd5oyq"></button></div>  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px;" class="svelte-zd5oyq"><div class="#2e3b6f-title svelte-zd5oyq" style="color: transparent;">${escape(" , ")}</div> </div> <div class="postCard svelte-zd5oyq"><div class="imageCont svelte-zd5oyq">${each(blogs, (blog, index) => {
    return `${index == currentIndex ? `<img${add_attribute("src", blog.src + "/0", 0)} alt="Neumorphic Picture" id="blog-image" class="rectangular-image svelte-zd5oyq">` : ``}`;
  })} <div class="nextImageBtn svelte-zd5oyq" data-svelte-h="svelte-nl1vs9">&lt;</div> <div class="previousImageBtn svelte-zd5oyq" data-svelte-h="svelte-dra8cl">&gt;</div></div> ${blogs.length > 0 ? `<div class="captionCont svelte-zd5oyq"><h2 style="margin:-2px 0 -10px 0; " class="svelte-zd5oyq">${escape(blogs[currentIndex].title)}</h2> ${blogs.length > 0 ? `<p class="svelte-zd5oyq">${escape(blogs[currentIndex].text)}</p> ` : ``}</div>` : ``} <div class="dots-container svelte-zd5oyq">${each([0, 1, 2], (_, index) => {
    return `<div style="margin-top: 10px; margin-bottom: 10px;" class="${"dot " + escape(index === currentIndex ? "light-dot" : "dark-dot", true) + " svelte-zd5oyq"}"></div>`;
  })}</div></div></div>`;
});
const css$2 = {
  code: ".neumorphic-card.svelte-1pblhl6.svelte-1pblhl6{padding:20px;margin:10px;border-radius:15px;background:#E6E7EE;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);border-radius:22px;width:90%;margin:auto;border-radius:10px}@media(max-width: 768px){}.black-title.svelte-1pblhl6.svelte-1pblhl6{color:black;font-weight:bold;margin-bottom:5px}.small-note.svelte-1pblhl6.svelte-1pblhl6{color:black;font-size:12px;margin-bottom:5px}.big-text.svelte-1pblhl6.svelte-1pblhl6{color:black;font-weight:bold}.row-images.svelte-1pblhl6.svelte-1pblhl6{display:flex;justify-content:space-between;margin-top:10px;overflow:hidden;margin-top:10px;flex-wrap:nowrap;overflow-x:scroll}.row-images.svelte-1pblhl6.svelte-1pblhl6::-webkit-scrollbar{display:none}.show-call-button.svelte-1pblhl6.svelte-1pblhl6{margin-top:20px;display:flex;justify-content:flex-end}.first-row.svelte-1pblhl6.svelte-1pblhl6{display:flex;justify-content:space-between}.image-card.svelte-1pblhl6.svelte-1pblhl6{flex:1;margin-right:10px}.text-container.svelte-1pblhl6.svelte-1pblhl6{flex:1;display:flex;flex-direction:column;justify-content:space-between;height:200px}.postCard.svelte-1pblhl6.svelte-1pblhl6{width:800px;height:500px;border-radius:10px;background-color:#e6e7ee;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r\n  3px 3px 8px 4px rgba(0, 0, 0, 0.25);margin-bottom:70px;margin:10px}.postCard.svelte-1pblhl6 img.svelte-1pblhl6{width:100%;height:100%;object-fit:cover}",
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
  $$result.css.add(css$2);
  return `   <div style="margin-top: 90px;"> <div class="#2e3b6f-title" style="font-size: 30px;margin:auto;text-align: center;position: relative; color: #2e3b6f; font-weight: bolder;margin-bottom: 20px;" data-svelte-h="svelte-gh7rxu">Products</div>  <div class="neumorphic-card svelte-1pblhl6" style="height:560px;"> <div class="first-row svelte-1pblhl6"> ${data.length >= 1 ? `<div class="image-card svelte-1pblhl6"><div class="postCard svelte-1pblhl6" style="width: 270px; height: 270px; border-radius: 10px; background-color: #e6e7ee; box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25); margin-bottom: 50px;"><img${add_attribute("src", data[imgIndex % data.length].src, 0)} style="border-radius: 10px;" class="svelte-1pblhl6"></div></div>` : ``}  <div class="text-container svelte-1pblhl6" data-svelte-h="svelte-1k0en3v"><div class="black-title svelte-1pblhl6" style="font-size: 20px; position: relative; right: 22px;">Guaranteed or your money back!</div> <div class="small-note svelte-1pblhl6" style="font-size: 15px;">The best marketing doesn&#39;t feel like marketing.
            It’s important to remember your competitor is only one mouse click away.</div> <div class="big-text svelte-1pblhl6" style="font-size: 27px;">Take advantage of this special offer</div></div></div>  <div style="display: flex;"><div style="overflow-x: scroll;"><div class="row-images svelte-1pblhl6">${data.length > 1 ? `${each(data, (_, index) => {
    return `${index + 1 != data.length ? `<div class="postCard svelte-1pblhl6"${add_attribute(
      "style",
      `width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`,
      0
    )}><img${add_attribute("src", data[(index + 1) % data.length].src, 0)} style="border-radius:10px" class="svelte-1pblhl6"></div> ` : ``}`;
  })}` : ``}</div></div> <div style="/* height: 40px; */ align-self: baseline; margin-left: 10px; position: relative; top: 22px;">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Show all",
      height: "200px",
      clickHandler: () => {
        location.href = "/products";
      },
      src: "/back-icon.png"
    },
    {},
    {}
  )}</div></div>  <div class="show-call-button svelte-1pblhl6" data-svelte-h="svelte-cpoj1k"></div></div></div>`;
});
const css$1 = {
  code: `nav.svelte-108anuc ul.svelte-108anuc{list-style:none;margin:auto;padding:0;display:flex}nav.svelte-108anuc ul li.svelte-108anuc{margin-right:14px;margin-top:14px;transition:font-size 0.5s;text-align:center;font-size:18px}li.svelte-108anuc.svelte-108anuc:hover{cursor:pointer;font-size:21px;transition:font-size 0.5s}li.svelte-108anuc.svelte-108anuc:left{font-size:18px;transition:font-size 0.5s}header.svelte-108anuc.svelte-108anuc{position:fixed;width:100%;height:115px;margin:auto;background:transparent;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out ;z-index:99}header.svelte-108anuc nav a.svelte-108anuc{color:white;position:relative;text-align:center;padding:0px 20px;text-decoration:none;font-family:'Tajawal'}nav.svelte-108anuc.svelte-108anuc{position:relative;width:100%;height:60px;margin:0;background:linear-gradient(0.25turn, rgb(46, 59, 111), rgb(57, 135, 155));display:flex;justify-content:center;align-items:center;border-radius:30px 30px 30px 30px;box-shadow:none;transition:all 1s ease-in-out }nav#T.svelte-108anuc.svelte-108anuc{position:relative;width:100%;height:60px;margin:0;padding-left:50px;display:flex;justify-content:center;align-items:center;background:transparent;border-radius:30px 30px 30px 30px;box-shadow:none;transition:all 1s ease-in-out }nav#scrolledT.svelte-108anuc.svelte-108anuc{margin-bottom:60px ;border-radius:0 0 30px 30px;box-shadow:0px 5px 10px 5px rgba(0, 0, 0, 0.267);transition:all 1s ease-in-out }@keyframes svelte-108anuc-colory{0%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0))}10%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.1))}20%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.2))}30%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.3))}40%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.4))}50%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.5))}70%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.7))}90%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.9))}100%{background:linear-gradient(0.25turn, #2e3b6f, rgba(57, 135, 155, 1))}}nav#scrolled.svelte-108anuc.svelte-108anuc{margin-bottom:60px ;border-radius:0 0 30px 30px;box-shadow:0px 5px 10px 5px rgba(0, 0, 0, 0.267)}#circle1.not.svelte-108anuc.svelte-108anuc{position:fixed;width:140px;height:140px;left:140px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle2.not.svelte-108anuc.svelte-108anuc{position:relative;width:105px;height:105px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle3LOGO.not.svelte-108anuc.svelte-108anuc{position:relative;width:80px;height:80px;background-color:#ff5f5f;border-radius:50%;background-size:cover;overflow:hidden;box-sizing:border-box;margin:auto ;border:0;cursor:pointer;transition:all 1s ease-in-out ;background-image:url("/Logo.png")}#circle1.scrolled.svelte-108anuc.svelte-108anuc{background-color:transparent;width:50px;overflow:visible}#circle2.scrolled.svelte-108anuc.svelte-108anuc{box-shadow:none;width:50px;height:50px;background-color:transparent;overflow:visible}#circle3LOGO.scrolled.svelte-108anuc.svelte-108anuc{width:50px;height:50px;background-color:transparent;overflow:visible;background-image:url("/Logo.png")}.overlay.svelte-108anuc.svelte-108anuc{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-108anuc.svelte-108anuc{background-color:rgb(230, 231, 238);border-radius:8px;position:relative;max-width:550px;width:100%}@media(max-width: 1375px){#circle1.not.svelte-108anuc.svelte-108anuc{position:fixed;width:140px;height:140px;left:120px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle1.scrolled.svelte-108anuc.svelte-108anuc{background-color:transparent;width:50px;overflow:visible;left:120px}nav.svelte-108anuc ul.svelte-108anuc{margin-right:-49px;margin:auto}nav.svelte-108anuc ul li.svelte-108anuc{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}}@media(max-width: 1112px){#circle1.not.svelte-108anuc.svelte-108anuc{position:fixed;width:140px;height:140px;left:10px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle1.scrolled.svelte-108anuc.svelte-108anuc{background-color:transparent;width:50px;overflow:visible;left:10px}nav.svelte-108anuc ul.svelte-108anuc{margin-right:-49px;margin:auto}nav.svelte-108anuc ul li.svelte-108anuc{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}}.mmm.svelte-108anuc.svelte-108anuc{display:none;position:absolute;right:20px;top:4px}@media(max-width: 600px){.mmm.svelte-108anuc.svelte-108anuc{display:block}nav.svelte-108anuc ul.svelte-108anuc{margin-right:-49px;margin:auto;display:none}nav.svelte-108anuc ul li.svelte-108anuc{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}a.svelte-108anuc.svelte-108anuc{color:black}}.button.svelte-108anuc.svelte-108anuc{border:none;padding:5px 15px 5px 15px;background-color:#e6e7ee;box-shadow:0px 0px 8px #fff;border-radius:40px;font-size:1em;cursor:pointer;transition:transform .2s ease;font-family:Tajawal;color:#ffffff}.button.svelte-108anuc.svelte-108anuc:hover{transform:scale(1.05)\r
}.button.svelte-108anuc.svelte-108anuc:active{box-shadow:none}`,
  map: null
};
const TopBarMain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disableTransparent } = $$props;
  let { enableTransparency } = $$props;
  if ($$props.disableTransparent === void 0 && $$bindings.disableTransparent && disableTransparent !== void 0)
    $$bindings.disableTransparent(disableTransparent);
  if ($$props.enableTransparency === void 0 && $$bindings.enableTransparency && enableTransparency !== void 0)
    $$bindings.enableTransparency(enableTransparency);
  $$result.css.add(css$1);
  return `${``} <header class="svelte-108anuc"><div style="position:absolute;top:-15px;left:15px;"> <h1></h1></div> ${``}</header> `;
});
const css = {
  code: ".header-image.svelte-1eg9cy6{width:100%;height:700px;background:url('https://ugc.futurelearn.com/uploads/images/6d/a3/header_6da3ec09-3f50-445c-b36a-4c26d504d958.jpg') center/cover no-repeat;background-size:cover;position:absolute;top:0;left:0px;z-index:-2}.image-overlay.svelte-1eg9cy6{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(46, 59, 111, 0.445)}.scroll-box.svelte-1eg9cy6{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);height:fit-content}.scroll-box.svelte-1eg9cy6{position:absolute;top:550px;right:0;width:auto;z-index:-2;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:150px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);background:linear-gradient(0deg, rgba(230, 231, 238, 1) 0%, rgb(230 231 238 / 1) 95%, rgb(230 231 238 / 0%) 104%);padding:160px 0}.scroll-box.svelte-1eg9cy6::-webkit-scrollbar{display:none}.image-text.svelte-1eg9cy6{position:absolute;top:60px;left:50%;transform:translateX(-50%);text-align:center;padding:20px;color:#fff;font-size:1.5em;font-weight:bold}.overlay.svelte-1eg9cy6{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-1eg9cy6{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.content.svelte-1eg9cy6{text-align:center}@media(max-width: 600px){}",
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
  return `${``} ${validate_component(TopBarMain, "TopBarMain").$$render($$result, { enableTransparency: true }, {}, {})}  <div class="header-image svelte-1eg9cy6"><div class="image-overlay svelte-1eg9cy6"><div class="image-text svelte-1eg9cy6"><p style="position:relative;right:70px;font-size:2.5em;margin-bottom: -15px;" data-svelte-h="svelte-bjo1x6">Echo Dental Training Unit</p> <p style="font-weight: 300; text-align: left; width: 70vw; font-size: 20px; /* height: 14vh; */ text-overflow: ellipsis; height: 257px; overflow-y: scroll;">${escape(aboutUS)}</p></div></div></div> <div class="scroll-box svelte-1eg9cy6">${`<div class="title" style="font-size: 30px;margin-left:50px;" data-svelte-h="svelte-1d5amtm">Fellowships</div> ${validate_component(Row, "Row").$$render(
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
  )} <div class="title" style="font-size: 30px;margin-left:50px;" data-svelte-h="svelte-1qkyua">Courses</div> ${validate_component(Row, "Row").$$render(
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
  )} <div class="title" style="font-size: 30px;margin:auto;text-align: center;position: relative;top: 27px;" data-svelte-h="svelte-163eaxn">Blogs</div> ${validate_component(Blogs, "Blogs").$$render($$result, { blogs }, {}, {})} ${validate_component(Products, "Products").$$render($$result, { data: products }, {}, {})}`}</div>   ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight: scrollBoxHeight + 160 }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-_yUx-1BO.js.map
