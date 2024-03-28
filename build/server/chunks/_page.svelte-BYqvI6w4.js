import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each, e as escape } from './ssr-C5Pny6Bf.js';
import { B as ButtonChild } from './ButtonChild-XWKRJDE6.js';
import { T as TopBar } from './TopBar-BbOLIYnt.js';
import { F as Footer } from './Footer-BSIt6fBV.js';
import './Map-TAo5RPfk.js';

/* empty css                                                 */
const css = {
  code: ".svelte-1r4waay{color:#2e3b6f}.title.svelte-1r4waay{width:95%;text-align:right;font-size:27px;font-weight:bold;margin-top:40px;margin-bottom:20px}.row.svelte-1r4waay{display:flex;flex-direction:row}.column.svelte-1r4waay{display:flex;flex-direction:column}.gum.svelte-1r4waay{display:flex;justify-content:center;width:97%;height:155px;margin:0 auto;background:#f35858;border-radius:100px 100px 30px 30px;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25), -2px -2px 5px 0 rgb(255, 255, 255);overflow:visible}.gum-reversed.svelte-1r4waay{display:flex;justify-content:center;width:97%;height:155px;top:50%;left:1.5%;margin:0 auto;margin-top:250px;margin-bottom:200px;background:#f35858;border-radius:100px 100px 30px 30px;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25), -2px -2px 5px 0 rgb(255, 255, 255);overflow:visible}.offers-button-con.svelte-1r4waay{position:relative;width:318px;height:50px;top:40%;margin:auto;background-color:#e6e7ee;border-radius:30px;box-shadow:inset 2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n                    inset -2px -2px 5px 0 rgb(255, 255, 255);overflow:hidden;display:flex;justify-content:center;align-items:center}.offers-button.svelte-1r4waay{text-align:center;position:relative;width:95%;height:70%;margin:auto;background-color:#e6e7ee;border-radius:30px;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r\n                     -2px -2px 5px 0 rgb(255, 255, 255);overflow:hidden}.offers-button.svelte-1r4waay:hover{box-shadow:2px 2px 5px 0 rgb(135, 167, 255),\r\n                     -2px -2px 5px 0 rgb(154, 230, 255);background-color:rgb(206, 239, 250)}.teeth-top.svelte-1r4waay{position:relative;width:193px;height:170px;top:30%;margin:0;background:white;background-size:cover;border-radius:250px 250px 100px 120px;box-shadow:0px 3px 2px 1px rgba(0, 0, 0, 0.25), 0px 3px 3px 1px rgb(255, 255, 255);flex-shrink:0}.teeth.svelte-1r4waay{position:relative;width:193px;height:170px;top:82px;margin:0;background:white;background-size:cover;border-radius:250px 250px 100px 120px;box-shadow:0px 3px 2px 1px rgba(0, 0, 0, 0.25), 0px 3px 3px 1px rgb(255, 255, 255);flex-shrink:0}.teeth-bottom.svelte-1r4waay{position:relative;width:193px;height:170px;top:-73px;margin:0;background:white;background-size:cover;border-radius:100px 120px 250px 250px;box-shadow:0px 3px 3px 1px rgba(0, 0, 0, 0.25), 0px -3px 3px 1px rgb(255, 255, 255);flex-shrink:0}input.svelte-1r4waay{height:10px;max-width:490px;border:none;outline:none;background:none;font-size:18px;color:#555;padding:15px 5px 10px 20px;box-shadow:inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;border-radius:25px}input.svelte-1r4waay::placeholder{color:#555;transition:all 0.3s ease}input.svelte-1r4waay:focus::placeholder{color:#999}.op.svelte-1r4waay:hover{background-color:#ffffff}@media(max-width: 1162px){.teeth-top.svelte-1r4waay{width:150px;height:150px}.teeth.svelte-1r4waay{width:160px;height:160px}.teeth-bottom.svelte-1r4waay{width:150px;height:150px}}@media(max-width: 922px){.teeth-top.svelte-1r4waay{width:120px;height:120px}.teeth.svelte-1r4waay{width:130px;height:130px}.teeth-bottom.svelte-1r4waay{width:120px;height:120px}.gum.svelte-1r4waay{height:112px}.gum-reversed.svelte-1r4waay{height:100px}}@media(max-width: 756px){.teeth-top.svelte-1r4waay{width:80px;height:97px}.teeth.svelte-1r4waay{width:100px;height:110px;top:47px}.teeth-bottom.svelte-1r4waay{width:80px;height:97px}.gum.svelte-1r4waay{height:88px}.gum-reversed.svelte-1r4waay{height:88px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible = false;
  let searchTxt = "";
  let genres = {
    1: [
      {
        productName: "haha",
        productPrice: 9e4,
        productStatus: 0,
        discount: ""
      }
    ],
    2: [],
    7: []
  };
  $$result.css.add(css);
  return `${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})}  ${``} <div class="offers-button-con svelte-1r4waay" style="position: absolute; width: 318px; height: 50px; top: 23%; right: 36%; margin: auto; background-color: #e6e7ee; border-radius: 30px; box-shadow: inset 2px 2px 5px 0 rgba(0, 0, 0, 0.25), inset -2px -2px 5px 0 rgb(255, 255, 255); overflow: hidden; display: flex; justify-content: center; align-items: center;"><div class="offers-button svelte-1r4waay" data-svelte-h="svelte-u4l0">العروض</div></div> <div class="gum-reversed svelte-1r4waay" data-svelte-h="svelte-auhylb"><div class="teeth-top svelte-1r4waay"></div> <div class="teeth-top svelte-1r4waay"></div> <div class="teeth svelte-1r4waay"></div> <div class="teeth svelte-1r4waay"></div> <div class="teeth-top svelte-1r4waay"></div> <div class="teeth-top svelte-1r4waay"></div></div> <div class="gum svelte-1r4waay" data-svelte-h="svelte-k385ms"><div class="teeth-bottom svelte-1r4waay"></div> <div class="teeth-bottom svelte-1r4waay"></div> <div class="teeth-bottom svelte-1r4waay"></div> <div class="teeth-bottom svelte-1r4waay"></div> <div class="teeth-bottom svelte-1r4waay"></div> <div class="teeth-bottom svelte-1r4waay"></div></div> <div class="offers-button-con svelte-1r4waay" style="position: absolute; width: 318px; height: 50px; bottom: -43%; right: 36%; margin: auto; background-color: rgb(230, 231, 238); border-radius: 30px; box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 5px 0px inset, rgb(255, 255, 255) -2px -2px 5px 0px inset; overflow: hidden; display: flex; justify-content: center; align-items: center;" data-svelte-h="svelte-pi2efm"><div class="offers-button svelte-1r4waay">العروض</div></div> <div class="row svelte-1r4waay" style="position: absolute; right: 11px; margin-top: 0px;align-items: center;"> <input class="svelte-1r4waay"${add_attribute("value", searchTxt, 0)}> <div class="svelte-1r4waay" data-svelte-h="svelte-1xti7mu">بحث</div> ${visible ? `<div style="position: relative; left: 134px; top: -67px; background-color: rgb(217, 217, 217); width: 132px; overflow-y: scroll; height: 90px;" class="svelte-1r4waay">${each(Object.keys(genres), (genre) => {
    return `  <div class="op svelte-1r4waay">${escape(genre)}</div>`;
  })}</div>` : ``} ${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      clickHandler: () => {
        visible = !visible;
      },
      child: `<div style="display:flex;justify-content: space-between;align-items: center;">
                <img src="/diver.png" width="40">
                <div style="color:#2e3b6f;font-weight: bold;font-size: 20px;">الفئات</div>
            </div>`
    },
    {},
    {}
  )}</div> <div style="margin-top: 290px;" class="svelte-1r4waay"></div> <hr style="width: 90%; border-bottom: 1px solid #8a8ad1;" class="svelte-1r4waay"> ${``} ${validate_component(Footer, "Footer").$$render($$result, { scrollBoxHeight: 0, outsider: true }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BYqvI6w4.js.map
