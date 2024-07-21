import { c as create_ssr_component, d as add_attribute, e as escape } from './ssr-JWmjUSZd.js';

const css = {
  code: `.svelte-14x22zg.svelte-14x22zg::-webkit-scrollbar{width:8px}.svelte-14x22zg.svelte-14x22zg::-webkit-scrollbar-track{background-color:transparent}.svelte-14x22zg.svelte-14x22zg::-webkit-scrollbar-thumb{background-color:#2E3B6F;border-radius:10px}.svelte-14x22zg.svelte-14x22zg::-webkit-scrollbar-thumb:hover{background-color:#39879b}.postCard.svelte-14x22zg.svelte-14x22zg{width:80%;border-radius:10px;background-color:#e6e7ee;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r
    3px 3px 8px 4px rgba(0, 0, 0, 0.25);margin:35px 0;min-height:420px;overflow:hidden;position:relative}.captionCont.svelte-14x22zg.svelte-14x22zg{width:100%;max-height:300px;min-height:20px;color:#2E3B6F;font-family:'Tajawal';overflow-y:auto;text-align:center;margin:0 0 20px;padding:10px;box-sizing:border-box;white-space:pre-line}.imageCont.svelte-14x22zg.svelte-14x22zg{width:100%;max-height:-moz-fit-content;max-height:fit-content;overflow:hidden;background:linear-gradient(0.25turn, #2E3B6F, #39879b);border-radius:10px 10px 0 0;position:relative;display:inline-block}.postCard.svelte-14x22zg img.svelte-14x22zg{width:100%;max-height:400px;-o-object-fit:contain;object-fit:contain;display:block}.blogBtn.svelte-14x22zg.svelte-14x22zg{width:35px;height:35px;border:none;border-radius:7px;background:#e6e7ee;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;cursor:pointer;margin:5px;display:flex;align-items:center;justify-content:center;color:#2E3B6F;font-family:"Poppins";font-size:14px;font-weight:600}.blogBtn.svelte-14x22zg.svelte-14x22zg:active{box-shadow:inset 2px 2px 5px #00000040, inset -2px -2px 5px #fff}.blogBtn.svelte-14x22zg img.svelte-14x22zg{width:25px;height:25px}textarea.svelte-14x22zg.svelte-14x22zg{width:100%;padding:2px 10px;border:2px solid #ccc;border-radius:5px;font-size:16px;box-sizing:border-box;transition:border-color 0.3s ease;overflow:hidden;min-height:100px;resize:none;text-align:center}textarea.svelte-14x22zg.svelte-14x22zg:focus{border-color:#007bff;outline:none}`,
  map: null
};
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cancelHandler } = $$props;
  let { uploadHandler } = $$props;
  let { deleteHandler } = $$props;
  let { saveHandler } = $$props;
  let { state = 2 } = $$props;
  let { url = "" } = $$props;
  let { title = "" } = $$props;
  let { details = "" } = $$props;
  let { ID } = $$props;
  let { date = Date() } = $$props;
  let { makeNew } = $$props;
  if (makeNew) state = 0;
  if ($$props.cancelHandler === void 0 && $$bindings.cancelHandler && cancelHandler !== void 0) $$bindings.cancelHandler(cancelHandler);
  if ($$props.uploadHandler === void 0 && $$bindings.uploadHandler && uploadHandler !== void 0) $$bindings.uploadHandler(uploadHandler);
  if ($$props.deleteHandler === void 0 && $$bindings.deleteHandler && deleteHandler !== void 0) $$bindings.deleteHandler(deleteHandler);
  if ($$props.saveHandler === void 0 && $$bindings.saveHandler && saveHandler !== void 0) $$bindings.saveHandler(saveHandler);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0) $$bindings.state(state);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.details === void 0 && $$bindings.details && details !== void 0) $$bindings.details(details);
  if ($$props.ID === void 0 && $$bindings.ID && ID !== void 0) $$bindings.ID(ID);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.makeNew === void 0 && $$bindings.makeNew && makeNew !== void 0) $$bindings.makeNew(makeNew);
  $$result.css.add(css);
  return `${state == 0 ? ` <div style="width: 100%;display: flex;align-items: center;flex-wrap: wrap;justify-content: center;" class="svelte-14x22zg"><div style="margin: 20px;display: flex;flex-direction: column;align-items: center;flex-wrap: wrap;" class="svelte-14x22zg"><button class="blogBtn svelte-14x22zg" title="Post" data-svelte-h="svelte-o3ynmr"><img src="/upload.png" alt="" class="svelte-14x22zg"></button> <button class="blogBtn svelte-14x22zg" title="Cancel" data-svelte-h="svelte-4puude"><img src="/cancel.png" alt="" class="svelte-14x22zg"></button></div> <div class="postCard svelte-14x22zg"><div class="imageCont svelte-14x22zg" style="height: 400px;"> <input id="postImage" type="file" accept="image/*" style="display: none;" class="svelte-14x22zg"> <label for="postImage" title="Add photo" style="width: 100%; height: 100%;position: absolute;cursor: pointer;z-index: 2;" class="svelte-14x22zg"></label> <div style="width: 100%;height: 100%; display: flex;align-items: center;justify-content: center;position: absolute;" class="svelte-14x22zg"><img${add_attribute("src", url ? url : "/addImage.png", 0)} alt=""${add_attribute("style", url ? "width:100%;height:100%;" : "width: 40px;", 0)} class="svelte-14x22zg"></div></div> <div class="captionCont svelte-14x22zg"><textarea name="" id="" placeholder="Type caption here..." class="svelte-14x22zg">${escape(details || "")}</textarea></div></div></div>` : `${state == 1 ? ` <div style="width: 100%;display: flex;align-items: center;flex-wrap: wrap;justify-content: center;" class="svelte-14x22zg"><div style="margin: 20px;display: flex;flex-direction: column;align-items: center;flex-wrap: wrap;" class="svelte-14x22zg"><button class="blogBtn svelte-14x22zg" title="Edit" data-svelte-h="svelte-88iupo"><img src="/edit.png" alt="" class="svelte-14x22zg"></button></div> <div class="postCard svelte-14x22zg"><div class="imageCont svelte-14x22zg"><img${add_attribute("src", url + "/0", 0)} alt="image1" class="svelte-14x22zg"></div> <div class="captionCont svelte-14x22zg">${escape(details)}</div></div></div>` : `${state == 2 ? `<div class="postCard svelte-14x22zg"><div class="imageCont svelte-14x22zg"><img${add_attribute("src", url + "/0", 0)} alt="image1" class="svelte-14x22zg"></div> <div class="captionCont svelte-14x22zg">${escape(details)}</div></div> ` : `<div style="width: 100%;display: flex;align-items: center;flex-wrap: wrap;justify-content: center;" class="svelte-14x22zg"><div style="margin: 20px;display: flex;flex-direction: column;align-items: center;flex-wrap: wrap;" class="svelte-14x22zg"><button class="blogBtn svelte-14x22zg" title="Save change" data-svelte-h="svelte-bhmghg"><img src="/save.png" alt="" class="svelte-14x22zg"></button> <button class="blogBtn svelte-14x22zg" title="Cancel editing" data-svelte-h="svelte-1p2ofqg"><img src="/cancel.png" alt="" class="svelte-14x22zg"></button> <button class="blogBtn svelte-14x22zg" title="Delete post" data-svelte-h="svelte-1n63p6b"><img src="/del.png" alt="" class="svelte-14x22zg"></button></div> <div class="postCard svelte-14x22zg"><div class="imageCont svelte-14x22zg"><input id="postImage" type="file" accept="image/*" style="display: none;" class="svelte-14x22zg"> <img${add_attribute("src", url + "/0", 0)} class="svelte-14x22zg"></div> <div class="captionCont svelte-14x22zg"><textarea name="" id="" placeholder="Type caption here..." class="svelte-14x22zg">${escape(details || "")}</textarea></div></div></div>`}`}`}`;
});

export { BlogCard as B };
//# sourceMappingURL=BlogCard-BRxIX4oE.js.map
