import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape } from './ssr-C5Pny6Bf.js';
import { n as notification } from './not-DOW-9379.js';
import { T as TopBar } from './TopBar-IZnBV6qo.js';
import { P as Path } from './Path-BFI0Juiy.js';

const css = {
  code: ".column.svelte-porwqr.svelte-porwqr{display:flex;flex-direction:column}.card.svelte-porwqr.svelte-porwqr{border-radius:33px;background:#e6e7ee;box-shadow:5px 5px 10px #c6c7cd,\r\n             -5px -5px 10px #ffffff}.postCard.svelte-porwqr.svelte-porwqr{width:80%;border-radius:10px;background-color:#e6e7ee;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r\n  3px 3px 8px 4px rgba(0, 0, 0, 0.25);margin-bottom:70px;min-height:420px;max-height:550px;overflow:hidden;position:relative}.captionCont.svelte-porwqr.svelte-porwqr{width:100%;max-height:100px;color:#2e3b6f;font-family:'Tajawal';overflow-y:auto;text-align:center;margin:0 0 20px}.captionCont.svelte-porwqr p.svelte-porwqr{margin:10px 10px 0 10px}.imageCont.svelte-porwqr.svelte-porwqr{width:100%;height:400px;overflow:hidden;background:linear-gradient(0.25turn, #2e3b6f, #39879b);border-radius:10px 10px 0 0 ;position:relative;display:inline-block}.postCard.svelte-porwqr img.svelte-porwqr{width:100%;height:100%;object-fit:contain;display:block}",
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
  return `${state == 0 ? `<div class="card svelte-porwqr" style="width: 70%;"><div><div><div style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background-color: #efefff;"><label for="files"><img${add_attribute("src", url ? url : "/addImage.png", 0)}${add_attribute("style", url ? "width:100%;height:120px;" : "width: 40px;", 0)}></label></div> <input type="file" placeholder="/addImage.png" style="display: none;" id="files"> <div class="column svelte-porwqr" style="align-items: center;"><input placeholder="العنوان" style="width: 80%;"${add_attribute("value", title, 0)}> <input placeholder="الوصف" style="width: 90%;" multiple${add_attribute("value", details, 0)}></div></div></div></div>` : `${state == 1 ? `<div class="card svelte-porwqr" style="width: 70%;"><div class="column svelte-porwqr"><img${add_attribute("src", url, 0)} style="width: 100%;height:30vh"> <input placeholder="العنوان"${add_attribute("value", title, 0)}> <input placeholder="الوصف"${add_attribute("value", details, 0)}></div></div>` : `<div class="postCard svelte-porwqr"><div class="imageCont svelte-porwqr"><img${add_attribute("src", url, 0)} alt="image1" class="svelte-porwqr"></div> <div class="captionCont svelte-porwqr"><h2 style="margin:-2px 0 -10px 0; ">${escape(title)}</h2> <p class="svelte-porwqr">${escape(details)}</p></div></div>`}`}`;
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
  return `<div style="width: 100vw;">${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div style="width: 90vw; display: inline-table; margin-top: 141px;">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/blogs", txt: "Blogs" }]
    },
    {},
    {}
  )}</div> <div style="display: flex;justify-content:center;flex-direction:column;gap:40px;align-items:center;justify-content:center; padding-top: 200px; width: 100%; display: flex; flex-direction: column; align-items: center; "> <div style="margin-top:120px"></div> ${makeNew ? `${validate_component(BlogCard, "BlogCard").$$render(
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
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ClwqRbuc.js.map
