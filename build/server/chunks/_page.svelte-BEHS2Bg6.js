import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape } from './ssr-C5Pny6Bf.js';
import { n as notification } from './not-DOW-9379.js';
import { T as TopBar } from './TopBar-DWc24NV2.js';

const css = {
  code: ".column.svelte-3u8077.svelte-3u8077{display:flex;flex-direction:column}.card.svelte-3u8077.svelte-3u8077{border-radius:33px;background:#e6e7ee;box-shadow:5px 5px 10px #c6c7cd,\r\n             -5px -5px 10px #ffffff}.postCard.svelte-3u8077.svelte-3u8077{width:80%;border-radius:10px;background-color:#e6e7ee;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r\n  3px 3px 8px 4px rgba(0, 0, 0, 0.25);margin-bottom:70px;min-height:420px;max-height:550px;overflow:hidden;position:relative}.captionCont.svelte-3u8077.svelte-3u8077{width:100%;max-height:100px;color:#2E3B6F;font-family:'Tajawal';overflow-y:auto;text-align:center;margin:0 0 20px}.captionCont.svelte-3u8077 p.svelte-3u8077{margin:10px 10px 0 10px}.imageCont.svelte-3u8077.svelte-3u8077{width:100%;height:400px;overflow:hidden;background:linear-gradient(0.25turn, #2E3B6F, #39879b);border-radius:10px 10px 0 0 ;position:relative;display:inline-block}.postCard.svelte-3u8077 img.svelte-3u8077{width:100%;height:100%;object-fit:contain;display:block}",
  map: null
};
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cancelHandler } = $$props;
  let { uploadHandler } = $$props;
  let { deleteHandler } = $$props;
  let { saveHandler } = $$props;
  let state = 2;
  let { url = "" } = $$props;
  let { title = "" } = $$props;
  let { details = "" } = $$props;
  let { date = Date() } = $$props;
  let { makeNew } = $$props;
  if (makeNew)
    state = 0;
  if ($$props.cancelHandler === void 0 && $$bindings.cancelHandler && cancelHandler !== void 0)
    $$bindings.cancelHandler(cancelHandler);
  if ($$props.uploadHandler === void 0 && $$bindings.uploadHandler && uploadHandler !== void 0)
    $$bindings.uploadHandler(uploadHandler);
  if ($$props.deleteHandler === void 0 && $$bindings.deleteHandler && deleteHandler !== void 0)
    $$bindings.deleteHandler(deleteHandler);
  if ($$props.saveHandler === void 0 && $$bindings.saveHandler && saveHandler !== void 0)
    $$bindings.saveHandler(saveHandler);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.makeNew === void 0 && $$bindings.makeNew && makeNew !== void 0)
    $$bindings.makeNew(makeNew);
  $$result.css.add(css);
  return `${state == 0 ? `<div class="card svelte-3u8077" style="width: 70%;"><div><div><div style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background-color: #efefff;"><label for="files"><img${add_attribute("src", url ? url : "/addImage.png", 0)}${add_attribute("style", url ? "width:100%;height:120px;" : "width: 40px;", 0)}></label></div> <input type="file" placeholder="/addImage.png" style="display: none;" id="files"> <div class="column svelte-3u8077" style="align-items: center;"><input placeholder="العنوان" style="width: 80%;"${add_attribute("value", title, 0)}> <input placeholder="الوصف" style="width: 90%;" multiple${add_attribute("value", details, 0)}></div></div></div></div>` : `${state == 1 ? `<div class="card svelte-3u8077" style="width: 70%;"><div class="column svelte-3u8077"><img${add_attribute("src", url, 0)} style="width: 100%;height:30vh"> <input placeholder="العنوان"${add_attribute("value", title, 0)}> <input placeholder="الوصف"${add_attribute("value", details, 0)}></div></div>` : `<div class="postCard svelte-3u8077"><div class="imageCont svelte-3u8077"><img${add_attribute("src", url, 0)} alt="image1" class="svelte-3u8077"></div> <div class="captionCont svelte-3u8077"><h2 style="margin:-2px 0 -10px 0; ">${escape(title)}</h2> <p class="svelte-3u8077">${escape(details)}</p></div></div>`}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function fetchData(url, body, res) {
    const response = await fetch("https://dentists-backend.onrender.com/api/" + url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {},
      // 'Content-Type': 'application/form-data',
      //  "Access-Control-Allow-Credentials":true
      // Add any additional headers as needed
      // Replace with your actual JSON payload
      body
    });
    if (!response.ok) {
      notification("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة");
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let e = "";
    try {
      e = await response.json();
      return e;
    } catch (error) {
    }
    if (res)
      res();
    return e;
  }
  let { data } = $$props;
  let blogs = [];
  let makeNew = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div style="display: flex;justify-content:center;flex-direction:column;gap:40px;align-items:center;justify-content:center; padding-top: 200px; width: 100%; display: flex; flex-direction: column; align-items: center; "> <div style="margin-top:120px"></div> ${makeNew ? `${validate_component(BlogCard, "BlogCard").$$render(
    $$result,
    {
      makeNew: true,
      uploadHandler: (img, title, detail) => {
        let n = new FormData();
        n.append("body", JSON.stringify({ bd: detail, title }));
        n.append("files", img);
        fetchData("a/nb", n).then(() => {
          notification("تم انشاء منشور جديد");
        });
        makeNew = false;
      },
      cancelHandler: () => {
        makeNew = false;
      }
    },
    {},
    {}
  )}` : ``} ${each(blogs, (blog) => {
    return `${validate_component(BlogCard, "BlogCard").$$render(
      $$result,
      {
        title: blog.title,
        date: new Date(blog.date),
        details: blog.blogDetails,
        url: "https://dentists-iq.s3.amazonaws.com/blogs/" + blog.blogID,
        cancelHandler: () => {
          makeNew = false;
        }
      },
      {},
      {}
    )}`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BEHS2Bg6.js.map
