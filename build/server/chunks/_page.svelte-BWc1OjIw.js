import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, f as each, h as null_to_empty } from './ssr-JWmjUSZd.js';
import { C as Card } from './Grid.svelte_svelte_type_style_lang-DPxWwPzA.js';
import { B as Button } from './Button-CSD65ztW.js';
import 'firebase/app';
import 'firebase/messaging';
import 'jsqr';
import { F as Footer } from './Footer-T5y9M77D.js';

const css$4 = {
  code: ".button.svelte-463tgm{border:none;padding:5px 10px 5px 15px;background-color:#e6e7ee;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;border-radius:40px;font-size:1em;cursor:pointer;transition:transform .2s ease;font-family:'Tajawal';color:#2e3b6f\r\n}.button.svelte-463tgm:hover{transform:scale(1.05)\r\n}.button.svelte-463tgm:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.scroll-container.svelte-463tgm{display:flex;width:100%;height:100%;overflow-x:scroll;overflow-y:visible;scroll-behavior:smooth;align-items:center;scrollbar-width:none}.scroll-container.svelte-463tgm::-webkit-scrollbar{display:none}.box.svelte-463tgm{min-width:200px;height:300px;margin:15px;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;display:flex;justify-content:center;align-items:center;color:#2e3b6f;font-size:18px;border-radius:10px}.scroll-button.svelte-463tgm{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;background-color:transparent;box-shadow:2px 2px 5px #00000040;color:#2e3b6f;border:1px solid white;border-radius:50%;cursor:pointer;display:flex;justify-content:center;align-items:center;font-size:24px;opacity:1;transition:opacity 0.5s;outline:none;-webkit-tap-highlight-color:transparent}.scroll-button.svelte-463tgm:hover{background-color:#2e3b6f;color:white}.scroll-button.left.svelte-463tgm{left:10px;z-index:99}.scroll-button.right.svelte-463tgm{right:10px;z-index:99}.scroll-button.hidden.svelte-463tgm{opacity:0;pointer-events:none}",
  map: null
};
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardsData = [] } = $$props;
  let { onClick } = $$props;
  let { f } = $$props;
  let { myInd } = $$props;
  `${cardsData.length * 340}px`;
  if ($$props.cardsData === void 0 && $$bindings.cardsData && cardsData !== void 0) $$bindings.cardsData(cardsData);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  if ($$props.f === void 0 && $$bindings.f && f !== void 0) $$bindings.f(f);
  if ($$props.myInd === void 0 && $$bindings.myInd && myInd !== void 0) $$bindings.myInd(myInd);
  $$result.css.add(css$4);
  return `   <div style="position: relative;width: 100%;"><button class="scroll-button left hidden svelte-463tgm"${add_attribute("id", "scrollLeftButton" + myInd, 0)}>‹</button> <div class="scroll-container svelte-463tgm"${add_attribute("id", "scrollContainer" + myInd, 0)}>${each([...cardsData], ({ title, text, src, id, clickHandler }) => {
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
  })} <div class="box svelte-463tgm" style="font-weight: bold;" data-svelte-h="svelte-bwfjz5">All courses   ››</div> <button class="${escape(null_to_empty("scroll-button right"), true) + " svelte-463tgm"}"${add_attribute("id", "scrollRightButton" + myInd, 0)}>›</button></div> </div> <div style="display:grid;place-items:center;margin-bottom:90px;margin-top:20px;"><button class="button svelte-463tgm" style="display: flex;align-items:center;" data-svelte-h="svelte-2n4iru"><div>Show all</div> <img src="/back-icon.png"></button> </div> `;
});
const css$3 = {
  code: ".svelte-1oyk958.svelte-1oyk958{font-family:'Tajawal'}.dots-container.svelte-1oyk958.svelte-1oyk958{display:flex;justify-content:center;margin-top:10px}.dot.svelte-1oyk958.svelte-1oyk958{width:10px;height:10px;margin:0 5px;border-radius:50%;cursor:pointer}.light-dot.svelte-1oyk958.svelte-1oyk958{background-color:rgb(70, 70, 128)}.dark-dot.svelte-1oyk958.svelte-1oyk958{background-color:#2e3b6f}.rectangular-image.svelte-1oyk958.svelte-1oyk958{background-size:cover;border-radius:22px;width:40vw;height:40vw}button.svelte-1oyk958.svelte-1oyk958{padding:15px 30px;background:#E6E7EE;border:none;padding:5px 10px 5px 20px ;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n        -2px -2px 5px 0 rgb(255, 255, 255);color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal';position:relative;border-radius:10px;padding:6px 16px;float:right;bottom:30px}button.svelte-1oyk958.svelte-1oyk958:hover{transform:scale(1.05)}button.svelte-1oyk958.svelte-1oyk958:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n               inset -4px -4px 12px #ffffff}.postCard.svelte-1oyk958.svelte-1oyk958{width:80%;border-radius:10px;background-color:#e6e7ee;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r\n  3px 3px 8px 4px rgba(0, 0, 0, 0.25);margin-bottom:70px;min-height:420px;max-height:550px;overflow:hidden;position:relative;margin:auto}.captionCont.svelte-1oyk958.svelte-1oyk958{width:100%;max-height:100px;color:#2e3b6f;font-family:'Tajawal';overflow-y:auto;text-align:center;margin:0 0 20px}.captionCont.svelte-1oyk958 p.svelte-1oyk958{margin:10px 10px 0 10px}.imageCont.svelte-1oyk958.svelte-1oyk958{width:100%;height:400px;overflow:hidden;background:linear-gradient(0.25turn, #2e3b6f, #39879b);border-radius:10px 10px 0 0 ;position:relative;display:inline-block}.postCard.svelte-1oyk958 img.svelte-1oyk958{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;display:block}.nextImageBtn.svelte-1oyk958.svelte-1oyk958{position:absolute;top:50%;transform:translateY(-50%);background-color:transparent;color:white;border:none;padding:10px;cursor:pointer;width:80px;height:100%;left:0px;display:flex;align-items:center;justify-content:center}.previousImageBtn.svelte-1oyk958.svelte-1oyk958{position:absolute;top:50%;transform:translateY(-50%);background-color:transparent;color:white;border:none;padding:10px;cursor:pointer;width:80px;height:100%;right:0px;display:flex;align-items:center;justify-content:center}.nextImageBtn.svelte-1oyk958.svelte-1oyk958:hover{background:linear-gradient(0.25turn,#0000007e,#00000000)\r\n}.previousImageBtn.svelte-1oyk958.svelte-1oyk958:hover{background:linear-gradient(0.75turn,#0000007e,#00000000)\r\n}",
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
  if ($$props.firstTitle === void 0 && $$bindings.firstTitle && firstTitle !== void 0) $$bindings.firstTitle(firstTitle);
  if ($$props.secondTitle === void 0 && $$bindings.secondTitle && secondTitle !== void 0) $$bindings.secondTitle(secondTitle);
  if ($$props.blogs === void 0 && $$bindings.blogs && blogs !== void 0) $$bindings.blogs(blogs);
  $$result.css.add(css$3);
  return `   <div class="svelte-1oyk958"><div class="icon svelte-1oyk958"><button style="padding: 4px 4px 0px 4px;float: inline-end;right: 10%;bottom: 7px;" class="svelte-1oyk958" data-svelte-h="svelte-d8n0jw"><img src="/open.png" style="right: 10%;width: 33px; width: 33px;" class="svelte-1oyk958"></button></div>  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px;" class="svelte-1oyk958"><div class="#2e3b6f-title svelte-1oyk958" style="color: transparent;">${escape(" , ")}</div> </div> <div class="postCard svelte-1oyk958"><div class="imageCont svelte-1oyk958">${each(blogs, (blog, index) => {
    return `${index == currentIndex ? `<img${add_attribute("src", blog.src + "/0", 0)} alt="Neumorphic Picture" id="blog-image" class="rectangular-image svelte-1oyk958">` : ``}`;
  })} <div class="nextImageBtn svelte-1oyk958" data-svelte-h="svelte-nl1vs9">&lt;</div> <div class="previousImageBtn svelte-1oyk958" data-svelte-h="svelte-dra8cl">&gt;</div></div> ${blogs.length > 0 ? `<div class="captionCont svelte-1oyk958"><h2 style="margin:-2px 0 -10px 0; " class="svelte-1oyk958">${escape(blogs[currentIndex].title)}</h2> ${blogs.length > 0 ? `<p class="svelte-1oyk958">${escape(blogs[currentIndex].text)}</p> ` : ``}</div>` : ``} <div class="dots-container svelte-1oyk958">${each([0, 1, 2], (_, index) => {
    return `<div style="margin-top: 10px; margin-bottom: 10px;" class="${"dot " + escape(index === currentIndex ? "light-dot" : "dark-dot", true) + " svelte-1oyk958"}"></div>`;
  })}</div></div></div>`;
});
const css$2 = {
  code: ".neumorphic-card.svelte-1wu1zfy.svelte-1wu1zfy{padding:20px;margin:10px;background:#E6E7EE;box-shadow:5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);width:90%;margin:auto;border-radius:10px}@media(max-width: 768px){}.black-title.svelte-1wu1zfy.svelte-1wu1zfy{color:black;font-weight:bold;margin-bottom:5px}.small-note.svelte-1wu1zfy.svelte-1wu1zfy{color:black;font-size:12px;margin-bottom:5px}.big-text.svelte-1wu1zfy.svelte-1wu1zfy{color:black;font-weight:bold}.row-images.svelte-1wu1zfy.svelte-1wu1zfy{display:flex;justify-content:space-between;overflow:hidden;margin-top:10px;flex-wrap:nowrap;overflow-x:scroll;scrollbar-width:none}.row-images.svelte-1wu1zfy.svelte-1wu1zfy::-webkit-scrollbar{display:none}.show-call-button.svelte-1wu1zfy.svelte-1wu1zfy{margin-top:20px;display:flex;justify-content:flex-end}.first-row.svelte-1wu1zfy.svelte-1wu1zfy{display:flex;justify-content:space-between}.image-card.svelte-1wu1zfy.svelte-1wu1zfy{flex:1;margin-right:10px}.text-container.svelte-1wu1zfy.svelte-1wu1zfy{flex:1;display:flex;flex-direction:column;justify-content:space-between;height:200px}.postCard.svelte-1wu1zfy.svelte-1wu1zfy{width:800px;height:500px;border-radius:10px;background-color:#e6e7ee;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r\n  3px 3px 8px 4px rgba(0, 0, 0, 0.25);margin-bottom:70px;margin:10px}.postCard.svelte-1wu1zfy img.svelte-1wu1zfy{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",
  map: null
};
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  let imgIndex = 0;
  setInterval(
    () => {
      if (data.length > 1) imgIndex = (imgIndex + 1) % data.length;
    },
    7e3
  );
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css$2);
  return `   <div style="margin-top: 90px;"> <div class="#2e3b6f-title" style="font-size: 30px;margin:auto;text-align: center;position: relative; color: #2e3b6f; font-weight: bolder;margin-bottom: 20px;" data-svelte-h="svelte-gh7rxu">Products</div>  <div class="neumorphic-card svelte-1wu1zfy" style="height:560px;"> <div class="first-row svelte-1wu1zfy"> ${data.length >= 1 ? `<div class="image-card svelte-1wu1zfy"><div class="postCard svelte-1wu1zfy" style="width: 270px; height: 270px; border-radius: 10px; background-color: #e6e7ee; box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25); margin-bottom: 50px;"><img${add_attribute("src", data[imgIndex % data.length].src, 0)} style="border-radius: 10px;" class="svelte-1wu1zfy"></div></div>` : ``}  <div class="text-container svelte-1wu1zfy" data-svelte-h="svelte-1k0en3v"><div class="black-title svelte-1wu1zfy" style="font-size: 20px; position: relative; right: 22px;">Guaranteed or your money back!</div> <div class="small-note svelte-1wu1zfy" style="font-size: 15px;">The best marketing doesn&#39;t feel like marketing.
            It’s important to remember your competitor is only one mouse click away.</div> <div class="big-text svelte-1wu1zfy" style="font-size: 27px;">Take advantage of this special offer</div></div></div>  <div style="display: flex;"><div style="overflow-x: scroll; scrollbar-width: none;"><div class="row-images svelte-1wu1zfy">${data.length > 1 ? `${each(data, (_, index) => {
    return `${index + 1 != data.length ? `<div class="postCard svelte-1wu1zfy"${add_attribute(
      "style",
      `width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`,
      0
    )}><img${add_attribute("src", data[(index + 1) % data.length].src, 0)} style="border-radius:10px" class="svelte-1wu1zfy"></div> ` : ``}`;
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
  )}</div></div>  <div class="show-call-button svelte-1wu1zfy" data-svelte-h="svelte-cpoj1k"></div></div></div>`;
});
const css$1 = {
  code: `nav.svelte-2anbed ul.svelte-2anbed{list-style:none;margin:auto;padding:0;display:flex}nav.svelte-2anbed ul li.svelte-2anbed{margin-right:14px;margin-top:14px;transition:font-size 0.5s;text-align:center;font-size:18px}li.svelte-2anbed.svelte-2anbed:hover{cursor:pointer;font-size:21px;transition:font-size 0.5s}li.svelte-2anbed.svelte-2anbed:left{font-size:18px;transition:font-size 0.5s}header.svelte-2anbed.svelte-2anbed{position:fixed;width:100%;height:115px;margin:auto;background:transparent;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out ;z-index:99;top:0}header.svelte-2anbed nav a.svelte-2anbed{color:white;position:relative;text-align:center;padding:0px 20px;text-decoration:none;font-family:'Tajawal'}nav.svelte-2anbed.svelte-2anbed{position:relative;width:100%;height:60px;margin:0;background:linear-gradient(0.25turn, rgb(46, 59, 111), rgb(57, 135, 155));display:flex;justify-content:center;align-items:center;border-radius:30px 30px 30px 30px;box-shadow:none;transition:all 1s ease-in-out }nav#T.svelte-2anbed.svelte-2anbed{position:relative;width:100%;height:60px;margin:0;padding-left:50px;display:flex;justify-content:center;align-items:center;background:transparent;border-radius:30px 30px 30px 30px;box-shadow:none;transition:all 1s ease-in-out }nav#scrolledT.svelte-2anbed.svelte-2anbed{margin-bottom:60px ;border-radius:0 0 30px 30px;box-shadow:0px 5px 10px 5px rgba(0, 0, 0, 0.267);transition:all 1s ease-in-out }@keyframes svelte-2anbed-colory{0%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0))}10%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.1))}20%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.2))}30%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.3))}40%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.4))}50%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.5))}70%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.7))}90%{background:linear-gradient(0.25turn, #2e3b6f, rgb(57, 135, 155,0.9))}100%{background:linear-gradient(0.25turn, #2e3b6f, rgba(57, 135, 155, 1))}}nav#scrolled.svelte-2anbed.svelte-2anbed{margin-bottom:60px ;border-radius:0 0 30px 30px;box-shadow:0px 5px 10px 5px rgba(0, 0, 0, 0.267)}#circle1.not.svelte-2anbed.svelte-2anbed{position:fixed;width:140px;height:140px;left:140px;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle2.not.svelte-2anbed.svelte-2anbed{position:relative;width:105px;height:105px;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle3LOGO.not.svelte-2anbed.svelte-2anbed{position:relative;width:80px;height:80px;background-size:cover;overflow:hidden;box-sizing:border-box;margin:auto ;border:0;cursor:pointer;transition:all 1s ease-in-out ;background-image:url("https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png")}#circle1.scrolled.svelte-2anbed.svelte-2anbed{background-color:transparent;width:50px;overflow:visible}#circle2.scrolled.svelte-2anbed.svelte-2anbed{box-shadow:none;width:50px;height:50px;background-color:transparent;overflow:visible}#circle3LOGO.scrolled.svelte-2anbed.svelte-2anbed{width:50px;height:50px;background-color:transparent;overflow:visible;background-image:url("https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png")}.overlay.svelte-2anbed.svelte-2anbed{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-2anbed.svelte-2anbed{background-color:rgb(230, 231, 238);border-radius:8px;position:relative;max-width:550px;width:100%}@media(max-width: 1375px){#circle1.not.svelte-2anbed.svelte-2anbed{position:fixed;width:140px;height:140px;left:39px;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle1.scrolled.svelte-2anbed.svelte-2anbed{background-color:transparent;width:50px;overflow:visible;left:120px}nav.svelte-2anbed ul.svelte-2anbed{margin-right:-49px;margin:auto}nav.svelte-2anbed ul li.svelte-2anbed{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}}.mmm.svelte-2anbed.svelte-2anbed{display:none;position:absolute;right:20px;top:4px}@media(max-width: 1112px){#circle1.not.svelte-2anbed.svelte-2anbed{position:fixed;width:140px;height:140px;left:10px;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle1.scrolled.svelte-2anbed.svelte-2anbed{background-color:transparent;width:50px;overflow:visible;left:10px}nav.svelte-2anbed ul.svelte-2anbed{margin-right:-49px;margin:auto}nav.svelte-2anbed ul li.svelte-2anbed{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}}@media(max-width: 600px){.mmm.svelte-2anbed.svelte-2anbed{display:block}nav.svelte-2anbed ul.svelte-2anbed{margin-right:-49px;margin:auto;display:none}nav.svelte-2anbed ul li.svelte-2anbed{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}a.svelte-2anbed.svelte-2anbed{color:black}}.button.svelte-2anbed.svelte-2anbed{border:none;padding:5px 15px 5px 15px;background-color:#e6e7ee;box-shadow:0px 0px 8px #fff;border-radius:40px;font-size:1em;cursor:pointer;transition:transform .2s ease;font-family:Tajawal;color:#ffffff}.button.svelte-2anbed.svelte-2anbed:hover{transform:scale(1.05)\r
}.button.svelte-2anbed.svelte-2anbed:active{box-shadow:none}.notificationsWindow.svelte-2anbed.svelte-2anbed{width:50%;min-height:550px;border-radius:10px;background-color:#e6e7ee;overflow:hidden;margin-left:25%}nav#scrolled.svelte-2anbed.svelte-2anbed{margin-bottom:60px ;border-radius:0 0 30px 30px;box-shadow:0px 5px 10px 5px rgba(0, 0, 0, 0.267)}#circle1.not.svelte-2anbed.svelte-2anbed{position:fixed;width:140px;height:140px;left:140px;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle2.not.svelte-2anbed.svelte-2anbed{position:relative;width:105px;height:105px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle3LOGO.not.svelte-2anbed.svelte-2anbed{position:relative;width:80px;height:80px;background-color:transparent;background-size:cover;overflow:hidden;box-sizing:border-box;margin:auto ;border:0;cursor:pointer;transition:all 1s ease-in-out ;background-image:url("https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png")}#circle1.scrolled.svelte-2anbed.svelte-2anbed{background-color:transparent;width:50px;overflow:visible}#circle2.scrolled.svelte-2anbed.svelte-2anbed{box-shadow:none;width:50px;height:50px;background-color:transparent;overflow:visible}#circle3LOGO.scrolled.svelte-2anbed.svelte-2anbed{width:50px;height:50px;background-color:transparent;overflow:visible;background-image:url("https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png")}.overlay.svelte-2anbed.svelte-2anbed{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-2anbed.svelte-2anbed{background-color:rgb(230, 231, 238);border-radius:8px;position:relative;max-width:550px;width:100%}@media(max-width: 1375px){#circle1.not.svelte-2anbed.svelte-2anbed{position:fixed;width:140px;height:140px;left:120px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle1.scrolled.svelte-2anbed.svelte-2anbed{background-color:transparent;width:50px;overflow:visible;left:120px}nav.svelte-2anbed ul.svelte-2anbed{margin-right:-49px;margin:auto}nav.svelte-2anbed ul li.svelte-2anbed{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}}@media(max-width: 1112px){#circle1.not.svelte-2anbed.svelte-2anbed{position:fixed;width:140px;height:140px;left:10px;background-color:transparent;border-radius:50%;overflow:hidden;box-sizing:border-box;display:flex;justify-content:center;align-items:center;transition:all 1s ease-in-out }#circle1.scrolled.svelte-2anbed.svelte-2anbed{background-color:transparent;width:50px;overflow:visible;left:10px}nav.svelte-2anbed ul.svelte-2anbed{margin-right:-49px;margin:auto}nav.svelte-2anbed ul li.svelte-2anbed{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}}.mmm.svelte-2anbed.svelte-2anbed{display:none;position:absolute;right:20px;top:4px}@media(max-width: 600px){.mmm.svelte-2anbed.svelte-2anbed{display:block}nav.svelte-2anbed ul.svelte-2anbed{margin-right:-49px;margin:auto;display:none}nav.svelte-2anbed ul li.svelte-2anbed{margin-right:0px;margin-top:14px;transition:font-size 3s;text-align:center}a.svelte-2anbed.svelte-2anbed{color:black}}`,
  map: null
};
const TopBarMain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disableTransparent } = $$props;
  let { enableTransparency } = $$props;
  if ($$props.disableTransparent === void 0 && $$bindings.disableTransparent && disableTransparent !== void 0) $$bindings.disableTransparent(disableTransparent);
  if ($$props.enableTransparency === void 0 && $$bindings.enableTransparency && enableTransparency !== void 0) $$bindings.enableTransparency(enableTransparency);
  $$result.css.add(css$1);
  return `${``} <header class="svelte-2anbed"><div style="position:absolute;top:-15px;left:15px;"> <h1></h1></div> ${``}</header>  `;
});
const css = {
  code: ".header-image.svelte-1mne9n3{width:100%;height:700px;background:url('https://echo-dentists.s3.me-central-1.amazonaws.com/bg') center/cover no-repeat;background-size:cover;position:absolute;top:0;left:0px;z-index:-2}.image-overlay.svelte-1mne9n3{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(46, 59, 111, 0.445)}.scroll-box.svelte-1mne9n3{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);height:-moz-fit-content;height:fit-content}.scroll-box.svelte-1mne9n3{position:absolute;top:550px;right:0;width:auto;z-index:-2;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:150px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2);background:linear-gradient(0deg, rgba(230, 231, 238, 1) 0%, rgb(230 231 238 / 1) 95%, rgb(230 231 238 / 0%) 104%);padding:160px 0}.scroll-box.svelte-1mne9n3::-webkit-scrollbar{display:none}.image-text.svelte-1mne9n3{position:absolute;top:60px;left:50%;transform:translateX(-50%);text-align:center;padding:20px;color:#fff;font-size:1.5em;font-weight:bold}.overlay.svelte-1mne9n3{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-1mne9n3{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.content.svelte-1mne9n3{text-align:center}@media(max-width: 600px){}",
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
  let allInfo = {};
  areDeveloperToolsOpen().then((open) => {
    if (open) ;
    else {
      console.log(
        "Developer tools are closed."
      );
    }
  });
  $$result.css.add(css);
  return `${``} ${validate_component(TopBarMain, "TopBarMain").$$render($$result, { enableTransparency: true }, {}, {})}  <div class="header-image svelte-1mne9n3"><div class="image-overlay svelte-1mne9n3"><div class="image-text svelte-1mne9n3"><p style="position:relative;right:70px;font-size:2.5em;margin-bottom: -15px;">${escape(allInfo.n ? allInfo.n : "")}</p> <p style="font-weight: 300; text-align: left; width: 70vw; font-size: 20px; /* height: 14vh; */ text-overflow: ellipsis; height: 257px; overflow-y: scroll; scrollbar-width: none;">${escape(aboutUS)}</p></div></div></div> <div class="scroll-box svelte-1mne9n3">${`<div class="title" style="font-size: 30px;margin-left:50px;" data-svelte-h="svelte-1d5amtm">Fellowships</div> ${validate_component(Row, "Row").$$render(
    $$result,
    {
      f: true,
      myInd: 0,
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
      myInd: 1,
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
//# sourceMappingURL=_page.svelte-BWc1OjIw.js.map
