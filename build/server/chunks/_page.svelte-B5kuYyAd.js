import { c as create_ssr_component, v as validate_component } from './ssr-JWmjUSZd.js';
import { G as Grid } from './Grid--O_5gkpJ.js';
import 'firebase/app';
import { n as notification } from './not-YAebu6vY.js';
import 'firebase/messaging';
import { T as TopBar } from './TopBar-33KpqgIF.js';
import { F as Footer } from './Footer-T5y9M77D.js';
import { P as Path } from './Path-DktuJWJw.js';
import './Grid.svelte_svelte_type_style_lang-DPxWwPzA.js';
import './Button-CSD65ztW.js';
import 'jsqr';

/* empty css                                                   */
const css = {
  code: "button.svelte-1cqrvyx:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r\n                 inset -4px -4px 12px #ffffff}.scroll-box.svelte-1cqrvyx{position:absolute;top:30;left:0;width:auto;width:98%;padding:90px 10px;background-color:rgb(143, 218, 255);border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;height:-moz-fit-content;height:fit-content}.scroll-box.svelte-1cqrvyx{position:absolute;top:133px;right:0;width:auto;max-width:100%;padding:90px 10px;background-color:#E6E7EE;border-top-left-radius:90px;border-top-right-radius:10px;overflow-x:hidden;transition:top 0.3s ease;z-index:-1}.overlay.svelte-1cqrvyx{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}.dialog-box.svelte-1cqrvyx{background-color:#fff;padding:20px;border-radius:8px;position:relative;max-width:400px;width:100%}.close-button.svelte-1cqrvyx{position:absolute;top:10px;right:10px;cursor:pointer;font-size:20px;color:red;border:none;background:none}.content.svelte-1cqrvyx{text-align:center}",
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
  async function fetchData(url, body, res) {
    const response = await fetch("https://echo-dent.net/api/" + url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      //  "Access-Control-Allow-Credentials":true
      // Add any additional headers as needed
      // Replace with your actual JSON payload
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      notification("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة");
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  let courses = [];
  let numOfPages = 0;
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
  return `${``} ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div style="width: 81%; margin: auto; margin-top: 141px;">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/courses", txt: "Courses" }]
    },
    {},
    {}
  )}</div>  <div class="scroll-box svelte-1cqrvyx">${validate_component(Grid, "Grid").$$render(
    $$result,
    {
      f: false,
      numOfPages: Math.floor(numOfPages / 10) + (numOfPages % 10 >= 1 ? 1 : 0),
      cardsData: [...courses],
      // Add more card data as needed
      nextPage: (lastID) => {
        fetchData("n/gc", { id: lastID }).then((e) => {
          numOfPages = e.c;
          e = e.d;
          courses = e.map((d) => Object({
            title: d.courseName,
            id: d.courseID,
            text: d.courseDetails,
            duration: d.courseDuration,
            src: "https://echo-dentists.s3.me-central-1.amazonaws.com/courses/" + d.courseID + "/0",
            clickHandler: () => {
              d.courseID;
            }
          }));
        });
      }
    },
    {},
    {}
  )}</div>   ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B5kuYyAd.js.map
