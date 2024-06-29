import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-CggYz5VK.js';

const css = {
  code: "button.svelte-1quevjl.svelte-1quevjl{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.body1.svelte-1quevjl.svelte-1quevjl{width:100%;min-height:200px;background:linear-gradient(130deg, rgba(230, 231, 238, 1) 20%, rgb(196 197 203) 100%);box-shadow:4px 4px 10px 4px rgb(0 0 0 / 25%);border-radius:50px 50px 10px 10px;position:relative;overflow:hidden;padding:10px;box-sizing:border-box}.rectTabs.svelte-1quevjl.svelte-1quevjl{width:120px;height:40px;border-radius:10px;font-size:14px;font-weight:500;cursor:pointer;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;background:linear-gradient(130deg, rgba(230, 231, 238, 1) 20%, rgb(196 197 203) 100%);display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.rectTabs.svelte-1quevjl.svelte-1quevjl:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.topContent.svelte-1quevjl.svelte-1quevjl{display:flex;justify-content:space-around;width:100%;align-items:center;flex-direction:row}@media(max-width: 768px){.topContent.svelte-1quevjl.svelte-1quevjl{display:flex;justify-content:space-around;width:100%;align-items:center;flex-direction:column}}.LogoutSettingDiv.svelte-1quevjl.svelte-1quevjl{width:99%;display:flex;justify-content:end;gap:10px}.LogoutSettingDiv.svelte-1quevjl button.svelte-1quevjl{background-color:transparent;border:none;border-radius:5px;cursor:pointer;-webkit-tap-highlight-color:transparent}.LogoutSettingDiv.svelte-1quevjl button.svelte-1quevjl:hover{background-color:rgba(255, 255, 255, 0.212)}.LogoutSettingDiv.svelte-1quevjl button.svelte-1quevjl:active{filter:brightness(9)}.LogoutSettingDiv.svelte-1quevjl img.svelte-1quevjl{width:35px}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div${add_attribute(
    "style",
    `font-family: "Poppins";
    margin: 0;
    padding: 5vmin;
    overflow-x: hidden;
    height: auto;
    background: linear-gradient(0.25turn, #39879b, #2E3B6F);
    color: #2e3b6f;`,
    0
  )}><div style="display: flex;flex-direction: column;justify-content: center;gap: 20px;width: 100%;min-height: 80vh;margin: 30px 0;"><div class="body1 svelte-1quevjl"><div class="LogoutSettingDiv svelte-1quevjl"><button class="svelte-1quevjl"><img src="/Settings.png" alt="" title="Settings" class="svelte-1quevjl"></button> <button class="svelte-1quevjl"><img src="/Logout.png" alt="" title="Logout" class="svelte-1quevjl"></button></div> <div class="topContent svelte-1quevjl"><div style="display: flex; justify-content: center;align-items: center;gap:10px; flex-wrap:wrap;"><img src="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png" alt="" style="width: 100px;height: 100px;filter: drop-shadow(2px 4px 2px #00000020);"> <a style="display: flex;font-size: 14px;cursor: pointer;">Go to Website 
                <img src="/ExternalLink.png" alt="" style="width: 20px;height: 20px;margin-left: 5px;"></a></div> ${localStorage.getItem("t") == 0 ? `<div style="display: flex; justify-content: center;gap:10px; flex-wrap:wrap; margin: 20px 0;"><div class="rectTabs svelte-1quevjl" data-svelte-h="svelte-qzlo7l">Accounts</div> <div class="rectTabs svelte-1quevjl" data-svelte-h="svelte-sc37xd">Subscriptions</div> <div class="rectTabs svelte-1quevjl" data-svelte-h="svelte-u5ej2t">Exams results</div></div>` : ``}</div></div> <div class="body1 svelte-1quevjl" style="border-radius: 10px 10px 50px 50px;"><div style="display: flex;justify-content: center;gap: 15px;flex-wrap:wrap;margin: 30px 5px;">${``}</div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CKPwvROe.js.map
