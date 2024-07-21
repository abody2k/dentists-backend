import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, f as each } from './ssr-JWmjUSZd.js';
import { B as Bar } from './Bar-DSmYRrjO.js';

const css = {
  code: `.row.svelte-38a9v3.svelte-38a9v3{display:flex;flex-direction:row;justify-content:space-around}#notSelected.svelte-38a9v3.svelte-38a9v3{border:1px solid #ffffff91;background:transparent;color:white}#selected.svelte-38a9v3.svelte-38a9v3{background:#ffffffef;color:#2e3b6f;border:1px solid #ffffff}.column.svelte-38a9v3.svelte-38a9v3{display:flex;flex-direction:column;justify-content:space-around}#subbox.svelte-38a9v3.svelte-38a9v3{background-image:url("/bg.jpg");background-repeat:no-repeat;background-size:cover;margin:auto;width:90%;border-top-right-radius:90px;border-bottom-left-radius:90px;border-top-left-radius:10px;border-bottom-right-radius:10px;height:30vh}.title.svelte-38a9v3.svelte-38a9v3{margin-top:5px;font-weight:bolder;text-align:center;color:white;font-size:25px}.collapsible.svelte-38a9v3.svelte-38a9v3{cursor:pointer;padding:8px;width:100%;border:none;text-align:right;outline:none;background-color:#f0f0f0;transition:0.4s;border-radius:7px}.collapsible.svelte-38a9v3.svelte-38a9v3:hover{background-color:#C8D3E7}.check-row.svelte-38a9v3.svelte-38a9v3{margin-left:8px}.content.svelte-38a9v3.svelte-38a9v3{display:none;overflow:hidden}.table-container.svelte-38a9v3.svelte-38a9v3{overflow-x:auto;max-height:400px;overflow-y:auto;width:100%;margin:auto}table.svelte-38a9v3.svelte-38a9v3{table-layout:fixed;border-collapse:collapse;width:100%;margin:auto;background-color:#E6E7EE}th.svelte-38a9v3.svelte-38a9v3,td.svelte-38a9v3.svelte-38a9v3{padding:8px;border-bottom:1px solid #ddd}th.svelte-38a9v3.svelte-38a9v3{background-color:#E6E7EE;font-size:16px}tr.svelte-38a9v3.svelte-38a9v3:hover{background-color:#f0f0f0}.m-container.svelte-38a9v3.svelte-38a9v3{margin:auto;width:80%;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r
                       3px 3px 8px 4px rgba(0, 0, 0, 0.25);border-radius:8px;overflow:hidden}.table-container.svelte-38a9v3.svelte-38a9v3::-webkit-scrollbar{width:8px}.table-container.svelte-38a9v3.svelte-38a9v3::-webkit-scrollbar-thumb{background-color:#DCDDE8;border:1.5px solid #C8D3E7;border-radius:10px}.table-container.svelte-38a9v3.svelte-38a9v3::-webkit-scrollbar-thumb:hover{background-color:#C8D3E7}.table-container.svelte-38a9v3.svelte-38a9v3::-webkit-scrollbar-track{background-color:#E6E7EE}.table-container.svelte-38a9v3.svelte-38a9v3::-webkit-scrollbar-track:hover{background-color:#f0f0f0}button.svelte-38a9v3.svelte-38a9v3{font-family:'Tajawal';font-size:14px;color:#2e3b6f;font-weight:bold}.horizontal-line.svelte-38a9v3.svelte-38a9v3{border:none;height:2px;background-color:#8BA3CC;margin:auto;width:100%}.titles.svelte-38a9v3.svelte-38a9v3{margin:auto;width:80%;text-align:right;padding:60px 0 30px}.overlay.svelte-38a9v3.svelte-38a9v3{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}tr.svelte-38a9v3.svelte-38a9v3:nth-child(even){background-color:#f2f2f2}table.neumorphic tr.svelte-38a9v3 td.svelte-38a9v3:first-child::before{content:"";position:absolute;padding:7px;top:0;left:-5000px;width:10000px;height:100%;z-index:-10}.row.svelte-38a9v3.svelte-38a9v3{display:flex;flex-direction:row;justify-content:right}button.svelte-38a9v3.svelte-38a9v3{padding:15px 30px;background:#E6E7EE;border:none;padding:5px 10px 5px 20px ;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r
        -2px -2px 5px 0 rgb(255, 255, 255);border-radius:40px;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal';color:#2e3b6f }button.svelte-38a9v3.svelte-38a9v3:hover{transform:scale(1.05)}button.svelte-38a9v3.svelte-38a9v3:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r
               inset -4px -4px 12px #ffffff}input.svelte-38a9v3.svelte-38a9v3{background-color:white;padding:7px;border-style:solid;border-color:transparent}.title.svelte-38a9v3.svelte-38a9v3{color:white;font-weight:bolder;margin:10px}.countButt.svelte-38a9v3.svelte-38a9v3{width:40%;height:40px;margin:0 30% 0 30%;background-color:#52ADEF;box-shadow:2px 2px 5px #00000040;border:none;border-radius:10px;color:white;font-weight:700;font-size:18px;font-family:'Tajawal';transition:all 0.2s ease-in-out}.countButt.svelte-38a9v3.svelte-38a9v3:hover{transform:scale(1.02);cursor:pointer;background-color:#65b3eb}.countButt.svelte-38a9v3.svelte-38a9v3:active{background-color:#2e9be9;box-shadow:none}.paymentCard.svelte-38a9v3.svelte-38a9v3{width:79vw;height:450px;border-radius:10px;background-color:#e6e7ee;overflow-y:auto;padding-bottom:20px;position:relative;left:10%;top:100px}.paymentInfo.svelte-38a9v3.svelte-38a9v3{width:80%;height:200px;border-radius:10px;background-color:#e6e7ee;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;position:relative;margin-right:10px;text-align:right;overflow:auto}table.svelte-38a9v3.svelte-38a9v3{width:80%;border-collapse:collapse;margin-top:30px}th.svelte-38a9v3.svelte-38a9v3{border-bottom:1px solid #2e3b6f57}tr.svelte-38a9v3.svelte-38a9v3:nth-child(even){background-color:#C8D3E7}.row.svelte-38a9v3.svelte-38a9v3{display:flex;align-items:center;justify-content:flex-end}.svelte-38a9v3.svelte-38a9v3::-webkit-scrollbar{width:8px}.svelte-38a9v3.svelte-38a9v3::-webkit-scrollbar-track{background-color:transparent}.svelte-38a9v3.svelte-38a9v3::-webkit-scrollbar-thumb{background-color:#2E3B6F;border-radius:10px}.svelte-38a9v3.svelte-38a9v3::-webkit-scrollbar-thumb:hover{background-color:#39879b}.optionsCont.svelte-38a9v3.svelte-38a9v3{width:90%;height:-moz-fit-content;height:fit-content;padding:20px;box-sizing:border-box;margin:40px 0 90px 5%;overflow:hidden;border-radius:5px 60px 5px 60px;background-color:#2e3b6f;background-image:url("/bg.jpg");background-size:cover;display:flex;flex-direction:row;align-items:flex-start;justify-content:center;flex-wrap:wrap;color:white}.glassCont.svelte-38a9v3.svelte-38a9v3{width:100%;height:200px;border-radius:5px 60px 5px 60px;background:rgb(255 255 255 / 17%);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(2px);border:1px solid rgb(255 255 255 / 32%);box-shadow:0px 0px 10px 3px rgb(0 0 0 / 24%);display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}.glassCont.svelte-38a9v3 button.svelte-38a9v3{width:80px;height:25px;border:1px solid #ffffff91;border-radius:10px;background:transparent;outline:none;color:white;font-weight:bold;cursor:pointer;font-family:"Tajawal"}.glassCont.svelte-38a9v3 button.svelte-38a9v3:active{background:#ffffffef;color:#2e3b6f;border:1px solid #ffffff}.search.svelte-38a9v3.svelte-38a9v3{border:1px solid white;background:transparent;border-radius:30px;color:white;outline:none;padding:5px;width:90%;margin:0 10px 10px}.search.svelte-38a9v3.svelte-38a9v3::-webkit-search-cancel-button{-webkit-appearance:none;height:15px;width:15px;background:transparent;cursor:pointer;background-image:url("/cancel2.png");background-size:cover}.search.svelte-38a9v3.svelte-38a9v3::-moz-placeholder{color:white}.search.svelte-38a9v3.svelte-38a9v3::placeholder{color:white}.searchResult.svelte-38a9v3.svelte-38a9v3{height:160px;width:100%;padding:10px;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.searchResult.svelte-38a9v3 div.svelte-38a9v3{cursor:pointer;background-color:transparent;border-radius:30px}.searchResult.svelte-38a9v3 div.svelte-38a9v3:hover{background-color:#ffffff59}.searchResult.svelte-38a9v3 div.svelte-38a9v3:active{background-color:#ffffff7c}.select.svelte-38a9v3.svelte-38a9v3{width:80%;height:25px;border:1px solid #ffffff91;border-radius:10px;background:transparent;outline:none;color:#ffffff;font-family:"Tajawal"}.select.svelte-38a9v3.svelte-38a9v3::-moz-placeholder{color:white;text-align:right}.select.svelte-38a9v3.svelte-38a9v3::placeholder{color:white;text-align:right}`,
  map: null
};
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let tempUsers = [];
  let options = {
    courseSelected: false,
    courseID: null,
    courseName: "",
    userName: "",
    courses: [],
    fellowships: [],
    add: false,
    edit: false,
    userID: 0,
    user: null,
    users: [],
    groupID: -1,
    payments: [],
    deletedPayments: []
  };
  let groups = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${``} ${``} ${``} ${validate_component(Bar, "Bar").$$render($$result, { title: "إدارة الاشتراكات" }, {}, {})} <div class="optionsCont svelte-38a9v3"><div style="min-width: 200px;flex: 1;text-align: center;margin: 10px 0;" class="svelte-38a9v3"><div style="line-height: 1;font-size: 18px;" class="svelte-38a9v3">${escape(options.courseName)}</div> <div style="display: flex;justify-content: space-evenly;margin-top: 50px;line-height: 15px;gap: 10px;" class="svelte-38a9v3"><div style="text-align: center;" class="svelte-38a9v3">عدد المشتركين<p style="font-size: 25px;font-weight: bold;" class="svelte-38a9v3">${escape(tempUsers.length)}</p></div> <div style="text-align: center;" class="svelte-38a9v3">عدد الخريجين<p style="font-size: 25px;font-weight: bold;" class="svelte-38a9v3">${escape(tempUsers.filter((e) => e.status).length)}</p></div></div></div> <div style="min-width: 200px;flex: 1;margin: 10px 0;" class="svelte-38a9v3"><div class="glassCont svelte-38a9v3"><div style="display: flex;gap: 30px;" class="svelte-38a9v3"><button${add_attribute("id", "notSelected", 0)} class="svelte-38a9v3">كورس</button> <button${add_attribute("id", "selected", 0)} class="svelte-38a9v3">زمالة</button></div> <input class="select svelte-38a9v3" list="courseName" placeholder="... اختر اسم الدورة"${add_attribute("value", options.courseID, 0)}> <datalist id="courseName" class="svelte-38a9v3">${``}${`${each(options.fellowships, (fellowship) => {
    return `<option${add_attribute("value", fellowship.fellowshipName, 0)} class="svelte-38a9v3"></option>`;
  })}`}</datalist>  <div style="display: flex;gap: 30px;" class="svelte-38a9v3"><button${add_attribute("id", "notSelected", 0)} class="svelte-38a9v3">اضافة</button> <button${add_attribute("id", "selected", 0)} class="svelte-38a9v3">تعديل</button></div></div></div> <div style="min-width: 200px;flex: 1;margin: 10px 0;" class="svelte-38a9v3"><div style="display: flex;" class="svelte-38a9v3"><input type="search" class="search svelte-38a9v3" placeholder="Search..."> <img src="/Search Client.png" alt="" style="width: 27px;height: 27px;" class="svelte-38a9v3"></div> <div class="searchResult svelte-38a9v3">${`${each(tempUsers, (user) => {
    return `<div style="color:white" class="svelte-38a9v3">${escape(user.username)}</div>`;
  })}`} ${``}</div></div></div> <div id="subbox" style="display: none;" class="svelte-38a9v3"><div class="row svelte-38a9v3" style="width: 94%;justify-content:space-between;padding:13px"><div class="column svelte-38a9v3"><div class="title svelte-38a9v3">${escape(options.courseName)}</div> <div class="row svelte-38a9v3"><div class="column svelte-38a9v3"><div class="title svelte-38a9v3" data-svelte-h="svelte-1llj21k">عدد المشتركين</div> <div class="title svelte-38a9v3">${escape(tempUsers.length)}</div></div> <div class="column svelte-38a9v3"><div class="title svelte-38a9v3" data-svelte-h="svelte-5u4sy7">عدد المتخرجين</div> <div class="title svelte-38a9v3">${escape(tempUsers.filter((e) => e.status).length)}</div></div></div></div> <div style="border-radius: 10px 40px; height: 210px; width: 36%; display: flex; justify-content: space-around;background:linear-gradient(140deg, rgb(255 255 255) 0%, rgb(255 255 255 / 26%) 35%, rgb(255 255 255 / 11%) 100%)" class="svelte-38a9v3"><div class="column svelte-38a9v3"><div class="row svelte-38a9v3"><div class="selection svelte-38a9v3"${add_attribute("id", "notSelected", 0)}>كورس</div> <div class="selection svelte-38a9v3"${add_attribute("id", "selected", 0)}>زمالة</div></div> <select placeholder="courses/fellowships names" style="width:140px;" class="svelte-38a9v3">${``}${`${each(options.fellowships, (fellowship) => {
    return `<option${add_attribute("value", fellowship.fellowshipID, 0)} class="svelte-38a9v3">${escape(fellowship.fellowshipName)}</option>`;
  })}`}</select> <div class="row svelte-38a9v3"><div class="selection svelte-38a9v3"${add_attribute("id", "notSelected", 0)}>إضافة</div> <div class="selection svelte-38a9v3"${add_attribute("id", "selected", 0)}>تعديل</div></div></div></div> <div class="column svelte-38a9v3"><div class="row svelte-38a9v3"><input style="border-radius: 30px; background-color: transparent; border-color: white;" class="svelte-38a9v3"> <img src="/srch.png" width="30" class="svelte-38a9v3"></div> <div class="column svelte-38a9v3" style="overflow-y:scroll;height:60%;">${`${each(tempUsers, (user) => {
    return `<div style="color:white" class="svelte-38a9v3">${escape(user.username)}</div>`;
  })}`} ${``}</div></div></div></div> <div class="titles svelte-38a9v3" data-svelte-h="svelte-dorwas"><h3 style="margin:5px 10px;" class="svelte-38a9v3">المشتركين</h3> <hr class="horizontal-line svelte-38a9v3"></div> <div class="m-container svelte-38a9v3"><table class="svelte-38a9v3" data-svelte-h="svelte-1yn9hlm"><thead class="svelte-38a9v3"><tr class="svelte-38a9v3"><th style="width: 40px;" class="svelte-38a9v3"></th> <th class="svelte-38a9v3">الاسم</th> <th class="svelte-38a9v3">تاريخ الاشتراك</th> <th class="svelte-38a9v3">المبلغ المسدد</th> <th class="svelte-38a9v3">صلاحية الحساب</th></tr></thead></table> <div class="table-container svelte-38a9v3" style="background-color: #f0fdf0;"><table class="svelte-38a9v3"><tbody class="svelte-38a9v3">${each(groups, (group) => {
    return `<tr class="svelte-38a9v3"><td class="svelte-38a9v3"><button class="collapsible svelte-38a9v3">المجموعة ${escape(Object.keys(group)[0])}</button> <div class="content svelte-38a9v3"><table class="svelte-38a9v3">${each(Object.values(group)[0], (groupUser) => {
      return `<tr class="svelte-38a9v3"><td style="width: 35px;" class="svelte-38a9v3" data-svelte-h="svelte-x12t2g"><input type="checkbox" class="check-row svelte-38a9v3">1</td> <td class="svelte-38a9v3">${escape(groupUser.username)}</td> <td class="svelte-38a9v3">${escape(new Date(groupUser.joinedDate).toDateString())}</td> <td class="svelte-38a9v3">${escape(groupUser.totalFee - groupUser.remainingFee)}/${escape(groupUser.totalFee)}</td> <td class="svelte-38a9v3">${escape(new Date(groupUser.expDate).toDateString())}</td> </tr>`;
    })}</table> </div></td> </tr>`;
  })}</tbody></table></div></div> <div class="titles svelte-38a9v3" data-svelte-h="svelte-ogdvll"><h3 style="margin:5px 10px;" class="svelte-38a9v3">المتخرجين</h3> <hr class="horizontal-line svelte-38a9v3"></div> <div class="m-container svelte-38a9v3"><table class="svelte-38a9v3" data-svelte-h="svelte-5kwe91"><thead class="svelte-38a9v3"><tr class="svelte-38a9v3"><th style="width: 40px;" class="svelte-38a9v3"></th> <th class="svelte-38a9v3">الاسم</th> <th class="svelte-38a9v3">تاريخ الاشتراك</th> <th class="svelte-38a9v3">تاريخ التخرج</th> <th class="svelte-38a9v3">المبلغ المسدد</th> <th class="svelte-38a9v3">صلاحية الحساب</th></tr></thead></table> <div class="table-container svelte-38a9v3"><table class="svelte-38a9v3">${each(options.users, (user, index) => {
    return `<tr class="svelte-38a9v3"><td style="width:20px;text-align:center;" class="svelte-38a9v3">${escape(index)}</td> <td class="svelte-38a9v3">${escape(user.username)}</td> <td class="svelte-38a9v3">${escape(new Date(user.joinedDate).toDateString())}</td> <td class="svelte-38a9v3">${escape(new Date(user.expDate).toDateString())}</td> <td class="svelte-38a9v3">${escape(user.totalFee - user.remainingFee)}</td> </tr>`;
  })}</table></div></div> <div class="titles svelte-38a9v3"><h3 style="margin:5px 10px;" class="svelte-38a9v3" data-svelte-h="svelte-wbebjy">سجل الاشتراكات</h3> <div class="svelte-38a9v3"><button class="svelte-38a9v3" data-svelte-h="svelte-139wvmd">مسح</button> <button class="svelte-38a9v3" data-svelte-h="svelte-18pmte7">تصدير</button> <button class="svelte-38a9v3" data-svelte-h="svelte-1lksn95">ثالث زر</button></div> <hr class="horizontal-line svelte-38a9v3"> <div style="display: flex;color:#2e3b6f;display: flex; color: rgb(46, 59, 111); width: 20%; justify-content: space-evenly; margin: auto;font-weight:bolder;" class="svelte-38a9v3" data-svelte-h="svelte-ik7wmi"><div class="svelte-38a9v3">إلى</div> <div class="svelte-38a9v3">من</div> <div class="svelte-38a9v3">المجموع</div></div></div> <div class="m-container svelte-38a9v3"><table class="svelte-38a9v3" data-svelte-h="svelte-kmczgj"><thead class="svelte-38a9v3"><tr class="svelte-38a9v3"><th style="width: 40px;" class="svelte-38a9v3"></th> <th class="svelte-38a9v3">الاسم</th> <th class="svelte-38a9v3">اسم المشترك</th> <th class="svelte-38a9v3">تاريخ الاشتراك</th> <th class="svelte-38a9v3">المبلغ المسدد</th></tr></thead></table> <div class="table-container svelte-38a9v3"><table class="svelte-38a9v3">${each(options.users, (user, index) => {
    return `<tr class="svelte-38a9v3"><td style="width:20px;text-align:center;" class="svelte-38a9v3">${escape(index)}</td> <td class="svelte-38a9v3">${escape(user.username)}</td> <td class="svelte-38a9v3">${escape(new Date(user.joinedDate).toLocaleString("en-GB", { hour12: false }))}</td> <td class="svelte-38a9v3">${escape(new Date(user.expDate).toLocaleString("en-GB", { hour12: false }))}</td> <td class="svelte-38a9v3">${escape(user.totalFee - user.remainingFee)}</td> </tr>`;
  })}</table></div></div>`;
});

export { Users as U };
//# sourceMappingURL=Users-DfI0l1IN.js.map