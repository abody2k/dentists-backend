import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each, e as escape } from './ssr-JWmjUSZd.js';
import { B as Bar } from './Bar-DSmYRrjO.js';

/* empty css                                                                  */
const css = {
  code: `.svelte-1t1a490{color:#2e3b6f}button.svelte-1t1a490{background:#E6E7EE;border:none;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25), -2px -2px 5px 0 rgb(255, 255, 255);border-radius:40px;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal';color:#2e3b6f;display:flex;align-items:center;height:37px;width:76px}button.svelte-1t1a490:hover{transform:scale(1.05)}button.svelte-1t1a490:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r
               inset -4px -4px 12px #ffffff}.search-container.svelte-1t1a490{position:relative;left:40px;margin:30px;display:flex;border-radius:20px;padding:5px 10px;width:300px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:#e6e7ee}input[type="search"].svelte-1t1a490{border:none;outline:none;width:280px;color:#2e3b6f;background-color:transparent}input[type="text"].svelte-1t1a490{position:relative;left:40px;margin:30px;display:flex;border-radius:20px;padding:5px 10px;width:300px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:#e6e7ee;border:none}input[type="email"].svelte-1t1a490{position:relative;left:40px;margin:30px;display:flex;border-radius:20px;padding:5px 10px;width:300px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:#e6e7ee;border:none}input[type="tel"].svelte-1t1a490{position:relative;left:40px;margin:30px;display:flex;border-radius:20px;padding:5px 10px;width:300px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:#e6e7ee;border:none}.search-icon.svelte-1t1a490{width:20px;height:20px;background-image:url("/srch2.png");background-size:cover}.row.svelte-1t1a490{display:flex;flex-direction:row;align-items:center;gap:20px}.column.svelte-1t1a490{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:end}.table-container.svelte-1t1a490{overflow-x:auto;max-height:400px;overflow-y:auto;width:100%;margin:auto}table.svelte-1t1a490{table-layout:fixed;border-collapse:collapse;width:100%;margin:auto;background-color:#E6E7EE}th.svelte-1t1a490,td.svelte-1t1a490{padding:8px;border-bottom:1px solid #ddd}th.svelte-1t1a490{background-color:#E6E7EE;font-size:16px}tr.svelte-1t1a490:hover{background-color:#f0f0f0}.m-container.svelte-1t1a490{margin:auto;width:80%;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r
                       3px 3px 8px 4px rgba(0, 0, 0, 0.25);border-radius:8px;overflow:hidden}.table-container.svelte-1t1a490::-webkit-scrollbar{width:8px}.table-container.svelte-1t1a490::-webkit-scrollbar-thumb{background-color:#DCDDE8;border:1.5px solid #C8D3E7;border-radius:10px}.table-container.svelte-1t1a490::-webkit-scrollbar-thumb:hover{background-color:#C8D3E7}.table-container.svelte-1t1a490::-webkit-scrollbar-track{background-color:#E6E7EE}.table-container.svelte-1t1a490::-webkit-scrollbar-track:hover{background-color:#f0f0f0}.horizontal-line.svelte-1t1a490{border:none;height:2px;background-color:#8BA3CC;margin:auto;width:100%}.titles.svelte-1t1a490{margin:auto;width:80%;text-align:right;padding:60px 0 30px}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTxt = "";
  let users = [
    {
      ID: "ECHO1O1",
      code: "HAHA",
      username: "Dentist3000",
      email: "something@echo.com",
      phonenumber: "+96477444",
      gender: 0
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Bar, "Bar").$$render($$result, { title: "إدارة الحسابات" }, {}, {})} <div class="row svelte-1t1a490" style="position: absolute; right: 10px;"><div class="search-container svelte-1t1a490"><span class="search-icon svelte-1t1a490"></span> <input type="search" placeholder="Search..." class="svelte-1t1a490"${add_attribute("value", searchTxt, 0)}></div> ${`<button style="width: fit-content;" class="svelte-1t1a490" data-svelte-h="svelte-17byvt6"><img src="/AddUser.png" width="20px" height="20px" class="svelte-1t1a490"> <div class="svelte-1t1a490">إضافة مستخدم</div></button>`}</div> ${``} <div class="titles svelte-1t1a490" data-svelte-h="svelte-1rndy44"><h3 style="margin:5px 10px;" class="svelte-1t1a490">حسابات المشتركين</h3> <hr class="horizontal-line svelte-1t1a490"></div> <div class="m-container svelte-1t1a490"><table class="svelte-1t1a490" data-svelte-h="svelte-1ag0oxa"><thead class="svelte-1t1a490"><tr class="svelte-1t1a490"><th style="width: 40px;" class="svelte-1t1a490"></th> <th class="svelte-1t1a490"></th> <th class="svelte-1t1a490">ID</th> <th class="svelte-1t1a490">رقم الهاتف والبريد الالكتروني</th> <th class="svelte-1t1a490">اسم المشترك</th> <th class="svelte-1t1a490"></th></tr></thead></table> <div class="table-container svelte-1t1a490"><table class="svelte-1t1a490">${each(
    searchTxt.length > 0 ? users.filter((d) => d.username.includes(searchTxt)) : users,
    (user, i) => {
      return `<tr class="svelte-1t1a490"><td class="svelte-1t1a490"><img src="/Edituser.png" width="30px" class="svelte-1t1a490"></td> <td style="width:20px;text-align:center;margin:20px;" class="svelte-1t1a490" data-svelte-h="svelte-1f7mbfu"><img src="/Enter.png" width="60" class="svelte-1t1a490"></td> <td class="svelte-1t1a490"></td> <td class="svelte-1t1a490">${escape(user.code)}</td> <td class="svelte-1t1a490">${escape(user.email)} <br class="svelte-1t1a490"> ${escape(user.phonenumber)}</td> <td class="svelte-1t1a490">${escape(user.username)}</td> </tr>`;
    }
  )} </table></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CA1HnjJU.js.map
