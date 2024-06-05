import { c as create_ssr_component, v as validate_component, f as each } from './ssr-CggYz5VK.js';
import { B as BlogCard } from './BlogCard-j0gy7dYd.js';
import { n as notification } from './not-BvNY88EQ.js';
import { T as TopBar } from './TopBar-BsHxOlgP.js';
import { P as Path } from './Path-BaBVNgkW.js';
import 'firebase/app';
import 'firebase/messaging';
import 'jsqr';

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
  return `<div style="width: 100vw;">${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div style="width: 100%; display: inline-table;margin:auto; margin-top: 141px;">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/blogs", txt: "Blogs" }]
    },
    {},
    {}
  )}</div> <div style="display: flex;justify-content:center;flex-direction:column;gap:40px;align-items:center;justify-content:center; width: 100%; display: flex; flex-direction: column; align-items: center; "> <div style="margin-top:120px"></div> ${makeNew ? `${validate_component(BlogCard, "BlogCard").$$render(
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
//# sourceMappingURL=_page.svelte-D7EAyGry.js.map
