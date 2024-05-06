import { c as create_ssr_component, v as validate_component, d as each } from './ssr-CZ3Mxc3I.js';
import { B as Bar } from './Bar-DpbUV2mJ.js';
import { B as BlogCard } from './BlogCard-CXnNUlUt.js';
import { P as Path } from './Path-CggFG0Zs.js';
import { n as notification } from './not-DGDVjxW6.js';
import { B as Button } from './Button-jyMbdDHw.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function fetchData(url, body, res) {
    const response = await fetch("http://44.202.90.133:3000/api/" + url, {
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
  let { data = { blogs: [] } } = $$props;
  let blogs = [];
  let makeNew = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div style="width: 100vw;">${validate_component(Bar, "Bar").$$render($$result, { title: "Blogs" }, {}, {})} <div style="width: 100%; display: inline-table;margin:auto; margin-top: 141px;">${validate_component(Path, "Path").$$render(
    $$result,
    {
      links: [{ link: "/", txt: "Home" }, { link: "/blogs", txt: "Blogs" }]
    },
    {},
    {}
  )}</div> <div style="display: flex;justify-content:center;flex-direction:column;gap:40px;align-items:center;justify-content:center; width: 100%; display: flex; flex-direction: column; align-items: center; ">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "منشور جديد",
      clickHandler: () => {
        console.log("making new blog");
        makeNew = true;
      }
    },
    {},
    {}
  )} <div style="margin-top:120px"></div> ${makeNew ? `${validate_component(BlogCard, "BlogCard").$$render(
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
  )}` : ``} ${blogs.length > 0 ? `${each(blogs, (blog) => {
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
  })}` : ``}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4M_hyvz_.js.map
