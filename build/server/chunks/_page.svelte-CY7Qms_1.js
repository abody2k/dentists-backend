import { c as create_ssr_component, f as each, v as validate_component, d as add_attribute, e as escape } from './ssr-CggYz5VK.js';
import { n as notification } from './not-BUQHTjh3.js';

const css = {
  code: ".column.svelte-tvwlir{display:flex;flex-direction:column}.row.svelte-tvwlir{display:flex;flex-direction:column}.card.svelte-tvwlir{border-radius:33px;background:#e6e7ee;box-shadow:5px 5px 10px #c6c7cd,\r\n             -5px -5px 10px #ffffff}",
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
  return `<div class="row svelte-tvwlir" style="width: 90%;display: flex;flex-direction: row;align-items: center; gap: 19px; "><div class="column svelte-tvwlir">${state == 0 ? `<button data-svelte-h="svelte-l5j7sk"><img src="/upload.png" style="width: 20px;"></button> <button data-svelte-h="svelte-bazp8n"><img src="/cancel.png" style="width: 20px;"></button>` : `${state == 1 ? `<button data-svelte-h="svelte-1lj1gpp"><img src="/save.png" style="width: 20px;"></button> <button data-svelte-h="svelte-15ugo0q"><img src="/cancel.png" style="width: 20px;"></button> <button data-svelte-h="svelte-1ltasal"><img src="/del.png" style="width: 20px;"></button>` : `<button data-svelte-h="svelte-ovemo3"><img src="/edit.png" style="width: 20px;"></button>`}`}</div> <div class="card svelte-tvwlir" style="width: 70%;">${state == 0 ? `<div><div><div style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background-color: #efefff;"><label for="files"><img${add_attribute("src", url ? url : "/addImage.png", 0)}${add_attribute("style", url ? "width:100%;height:120px;" : "width: 40px;", 0)}></label></div> <input type="file" placeholder="/addImage.png" style="display: none;" id="files"> <div class="column svelte-tvwlir" style="align-items: center;"><input placeholder="العنوان" style="width: 80%;"${add_attribute("value", title, 0)}> <input placeholder="الوصف" style="width: 90%;" multiple${add_attribute("value", details, 0)}></div></div></div>` : `${state == 1 ? `<div class="column svelte-tvwlir"><img${add_attribute("src", url, 0)} style="width: 100%;height:30vh"> <input placeholder="العنوان"${add_attribute("value", title, 0)}> <input placeholder="الوصف"${add_attribute("value", details, 0)}></div>` : `<div class="column svelte-tvwlir" style="text-align: center;"><img${add_attribute("src", url, 0)} style="width: 100%;height:30vh"> <div>${escape(title)}</div> <div>${escape(details)}</div> <div style="text-align: left;">${escape(date.toDateString())}</div></div>`}`}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function fetchData(url, body, res) {
    const response = await fetch("http://3.28.252.173:3000/api/" + url, {
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
  return `<div style="display: flex;justify-content:center;flex-direction:column;gap:40px;align-items:center;"><button data-svelte-h="svelte-harek2">منشور جديد</button> ${makeNew ? `${validate_component(BlogCard, "BlogCard").$$render(
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
        saveHandler: (img, title, detail) => {
          let n = new FormData();
          n.append("body", JSON.stringify({ id: blog.blogID, bd: detail, title }));
          n.append("files", img);
          fetchData("a/ub", n).then(() => {
            notification("تم تحديث المنشور");
          });
          makeNew = false;
        },
        cancelHandler: () => {
          makeNew = false;
        },
        deleteHandler: () => {
          let n = new FormData();
          n.append("body", JSON.stringify({ bid: blog.blogID }));
          fetchData("a/db", n).then(() => {
            blogs = [...blogs.filter((b) => b != blog)];
          });
        }
      },
      {},
      {}
    )}`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CY7Qms_1.js.map
