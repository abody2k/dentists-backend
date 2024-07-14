import { c as create_ssr_component, v as validate_component, f as each } from './ssr-JWmjUSZd.js';
import { B as Bar } from './Bar-DSmYRrjO.js';
import { B as BlogCard } from './BlogCard-1mplqN71.js';
import { s as showNotification, a as showConfirmation } from './not-p3GTnzPW.js';
import NotificationBubble from './NotificationBubble-9y2HSf0k.js';

const css = {
  code: '.svelte-13vb4iy::-webkit-scrollbar{width:8px}.svelte-13vb4iy::-webkit-scrollbar-track{background-color:transparent}.svelte-13vb4iy::-webkit-scrollbar-thumb{background-color:#2E3B6F;border-radius:10px}.svelte-13vb4iy::-webkit-scrollbar-thumb:hover{background-color:#39879b}.postesCont.svelte-13vb4iy{width:100%;display:flex;flex-direction:column;align-items:center;margin:35px 0}.blogBtn.svelte-13vb4iy{width:35px;height:35px;border:none;border-radius:7px;background:#e6e7ee;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;cursor:pointer;margin:5px;display:flex;align-items:center;justify-content:center;color:#2E3B6F;font-family:"Poppins";font-size:14px;font-weight:600}.blogBtn.svelte-13vb4iy:active{box-shadow:inset 2px 2px 5px #00000040, inset -2px -2px 5px #fff}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function fetchData(url, body, res) {
    const { default: Loading } = await import('./Loading-BaRzwiws.js');
    new Loading({ target: document.getElementById("nots") });
    const response = await fetch("https://echo-dent.net/api/" + url, {
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
      new NotificationBubble({
        props: {
          duration: 10,
          msg: "حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"
        },
        target: document.getElementById("nots")
      });
      document.getElementById("loadingWindow").remove();
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let e = "";
    try {
      e = await response.json();
      document.getElementById("loadingWindow").remove();
      return e;
    } catch (error) {
    }
    document.getElementById("loadingWindow").remove();
    return e;
  }
  let { data = { blogs: [] } } = $$props;
  let blogs = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Bar, "Bar").$$render($$result, { title: "Blog" }, {}, {})} <div class="postesCont svelte-13vb4iy"><div style="display: flex;justify-content:center;flex-direction:column;gap:40px;align-items:center;justify-content:center; width: 100%; display: flex; flex-direction: column; align-items: center; " class="svelte-13vb4iy"> <div style="width: 100%; margin: 50px 0; display: flex;justify-content: center;" class="svelte-13vb4iy"><button class="blogBtn svelte-13vb4iy" style="width: fit-content;" data-svelte-h="svelte-tobbdy">Add New Post <span style="font-size: 20px;" class="svelte-13vb4iy">+</span></button></div> <div style="margin-top:120px" class="svelte-13vb4iy"></div> ${``} ${blogs.length > 0 ? `${each(blogs.reverse(), (blog) => {
    return `${validate_component(BlogCard, "BlogCard").$$render(
      $$result,
      {
        state: 1,
        title: blog.title,
        ID: blog.ID,
        date: new Date(blog.date),
        saveHandler: (e) => {
          let n = new FormData();
          n.append("body", JSON.stringify(Object({
            "id": blog.blogID,
            "bd": blog.blogDetails,
            "title": blog.title
          })));
          console.log(e);
          n.append("files", e);
          fetchData("a/ub", n).then(() => {
            showNotification("تم تحديث المنشور", "cornflowerblue");
          });
        },
        deleteHandler: (e) => {
          let n = new FormData();
          n.append("body", JSON.stringify(Object({ "bid": blog.blogID })));
          console.log(blog);
          showConfirmation("هل انت متأكد من حذف المنشور؟", async () => {
            await fetchData("a/db", n).then(() => {
              showNotification("تم حذف المنشور", "cornflowerblue");
              blogs = blogs.filter((s) => s != blog);
            });
          });
        },
        details: blog.blogDetails,
        url: "https://echo-dentists.s3.me-central-1.amazonaws.com/blogs/" + blog.blogID,
        cancelHandler: () => {
        }
      },
      {},
      {}
    )}`;
  })}` : ``}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CQ8XcKX-.js.map
