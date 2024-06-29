import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './ssr-CggYz5VK.js';

/* empty css                                                                  */
const css$1 = {
  code: 'h4.svelte-1quevjl.svelte-1quevjl{font-weight:500;border-bottom:1px solid #c4c5cb}button.svelte-1quevjl.svelte-1quevjl{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.rectTabs.svelte-1quevjl.svelte-1quevjl{width:120px;height:40px;border-radius:10px;font-size:14px;font-weight:500;cursor:pointer;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;background:linear-gradient(130deg, rgba(230, 231, 238, 1) 20%, rgb(196 197 203) 100%);display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.rectTabs.svelte-1quevjl.svelte-1quevjl:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}@media(max-width: 768px){}.preview.svelte-1quevjl.svelte-1quevjl{width:80px;height:80px;border:2px solid #a4a5aa;border-radius:10px;background-size:cover;background-position:center;background-color:transparent}#map.svelte-1quevjl.svelte-1quevjl{width:100%;height:300px;margin:20px 0;border:1px solid #a4a5aa;border-radius:10px}.inputs.svelte-1quevjl.svelte-1quevjl{border-radius:5px;padding:5px 0 5px 10px;border:1px solid #a4a5aa;margin-bottom:10px}.socialMediaBotton.svelte-1quevjl.svelte-1quevjl{width:40px;height:40px;border:none;border-radius:50%;cursor:pointer;box-shadow:2px 2px 5px #00000040;background:linear-gradient(130deg, rgba(230, 231, 238, 1) 20%, rgb(196 197 203) 100%);display:flex;justify-content:center;align-items:center;transition:all 0.2s ease-in-out;-webkit-tap-highlight-color:transparent}.socialMediaBotton.svelte-1quevjl.svelte-1quevjl:hover{transform:scale(1.05)}.socialMediaBotton.svelte-1quevjl.svelte-1quevjl:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.socialMediaBotton.svelte-1quevjl img.svelte-1quevjl{width:30px;height:30px}.editSaveCancel.svelte-1quevjl.svelte-1quevjl{padding:0 10px;height:30px;border:none;border-radius:8px;color:#2e3b6f;font-weight:600;cursor:pointer;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;background-color:#e6e7ee;display:flex;justify-content:center;align-items:center;gap:5px;font-family:"Poppins"}.editSaveCancel.svelte-1quevjl.svelte-1quevjl:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}',
  map: null
};
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
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
  )}><div style="width: 100%;height: 90vh;border-radius: 10px;overflow: hidden;box-shadow: 4px 4px 10px 4px rgb(0 0 0 / 25%);background: linear-gradient(130deg, rgba(230, 231, 238, 1) 20%, rgb(196 197 203) 100%);display: flex;flex-direction: column;"><div style="width: 100%;display: flex;justify-content: space-between;"><div style="display: flex;align-items: center;font-size: 14px;" data-svelte-h="svelte-1ujtbqi"><img src="/SettingsIcon.png" alt="" style="width: 30px; margin: 10px;"> Settings</div> <div style="font-size: 25px;margin: 10px;line-height: 30px;cursor: pointer;" title="Back" data-svelte-h="svelte-1a4b4v5">❯</div></div> <div style="display: flex; justify-content: center;gap:10px; flex-wrap:wrap;padding-bottom: 8px;border-bottom: 1px solid #c4c5cb;"><div class="rectTabs svelte-1quevjl"${add_attribute(
    "style",
    `height: 30px; ${" box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;"}`,
    0
  )}>General</div> <div class="rectTabs svelte-1quevjl"${add_attribute(
    "style",
    `height: 30px; ${""}`,
    0
  )}>Contact</div> <div class="rectTabs svelte-1quevjl"${add_attribute(
    "style",
    `height: 30px; ${""}`,
    0
  )}>Account</div></div> ${`<div style="width: 100%;height: 90vh;overflow-y: auto;overflow-x: hidden;padding: 3vmin;box-sizing: border-box;background: transparent;"><div style="width: 100%;"><div style="display: flex;align-items: center;gap: 10px;">${`<button class="editSaveCancel svelte-1quevjl" data-svelte-h="svelte-o7drwl">Edit ✎</button>`}</div></div> <div><h4 class="svelte-1quevjl" data-svelte-h="svelte-jsrtkk">Logo image</h4> <div class="preview svelte-1quevjl" id="previewLogo" style="background: url('https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png') center/cover no-repeat;"></div> <input type="file" id="imageInput" accept="image/*" data-preview="previewLogo"></div> <div><h4 class="svelte-1quevjl" data-svelte-h="svelte-1ibsd0k">Cover image</h4> <div class="preview svelte-1quevjl" id="previewCover" style="width: 120px;background: url('https://echo-dentists.s3.me-central-1.amazonaws.com/bg') center/cover no-repeat;" data-svelte-h="svelte-nl9iie"></div> <input type="file" id="imageInput" accept="image/*" data-preview="previewCover"></div> <div><h4 class="svelte-1quevjl" data-svelte-h="svelte-1kjpr5l">Name</h4> <textarea name="Name" id="" style="width: 250px;" ${"disabled"}>${escape("")}</textarea></div> <div><h4 class="svelte-1quevjl" data-svelte-h="svelte-15y24hx">About</h4> <textarea name="Name" id="" style="width: 80%;height: 150px;" ${"disabled"}>${escape("")}</textarea></div></div>`}</div></div>`;
});
const css = {
  code: "@media(max-width: 768px){}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Settings, "Settings").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-iPS-vdma.js.map
