import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, f as each } from './ssr-CggYz5VK.js';
import { B as Bar } from './Bar-N_OONu60.js';

const css = {
  code: `.row.svelte-qsx7rj.svelte-qsx7rj{display:flex;flex-direction:row;justify-content:space-around}#notSelected.svelte-qsx7rj.svelte-qsx7rj{background-color:transparent;color:white;padding:7px;border-radius:30px;border:1px solid;border-color:white;margin:7px}#selected.svelte-qsx7rj.svelte-qsx7rj{background-color:white;color:#2e3b6f;padding:7px;border-radius:30px;margin:7px}.column.svelte-qsx7rj.svelte-qsx7rj{display:flex;flex-direction:column;justify-content:space-around}#subbox.svelte-qsx7rj.svelte-qsx7rj{background-image:url("/bg.jpg");background-repeat:no-repeat;background-size:cover;margin:auto;width:90%;border-top-right-radius:90px;border-bottom-left-radius:90px;border-top-left-radius:10px;border-bottom-right-radius:10px;height:30vh}.title.svelte-qsx7rj.svelte-qsx7rj{margin-top:5px;font-weight:bolder;text-align:center;color:white;font-size:25px}.collapsible.svelte-qsx7rj.svelte-qsx7rj{cursor:pointer;padding:8px;width:100%;border:none;text-align:right;outline:none;background-color:#f0f0f0;transition:0.4s;border-radius:7px}.collapsible.svelte-qsx7rj.svelte-qsx7rj:hover{background-color:#C8D3E7}.check-row.svelte-qsx7rj.svelte-qsx7rj{margin-left:8px}.content.svelte-qsx7rj.svelte-qsx7rj{display:none;overflow:hidden}.table-container.svelte-qsx7rj.svelte-qsx7rj{overflow-x:auto;max-height:400px;overflow-y:auto;width:100%;margin:auto}table.svelte-qsx7rj.svelte-qsx7rj{table-layout:fixed;border-collapse:collapse;width:100%;margin:auto;background-color:#E6E7EE}th.svelte-qsx7rj.svelte-qsx7rj,td.svelte-qsx7rj.svelte-qsx7rj{padding:8px;border-bottom:1px solid #ddd}th.svelte-qsx7rj.svelte-qsx7rj{background-color:#E6E7EE;font-size:16px}tr.svelte-qsx7rj.svelte-qsx7rj:hover{background-color:#f0f0f0}.m-container.svelte-qsx7rj.svelte-qsx7rj{margin:auto;width:80%;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r
                       3px 3px 8px 4px rgba(0, 0, 0, 0.25);border-radius:8px;overflow:hidden}.table-container.svelte-qsx7rj.svelte-qsx7rj::-webkit-scrollbar{width:8px}.table-container.svelte-qsx7rj.svelte-qsx7rj::-webkit-scrollbar-thumb{background-color:#DCDDE8;border:1.5px solid #C8D3E7;border-radius:10px}.table-container.svelte-qsx7rj.svelte-qsx7rj::-webkit-scrollbar-thumb:hover{background-color:#C8D3E7}.table-container.svelte-qsx7rj.svelte-qsx7rj::-webkit-scrollbar-track{background-color:#E6E7EE}.table-container.svelte-qsx7rj.svelte-qsx7rj::-webkit-scrollbar-track:hover{background-color:#f0f0f0}button.svelte-qsx7rj.svelte-qsx7rj{font-family:'Tajawal';font-size:14px;color:#2e3b6f;font-weight:bold}.horizontal-line.svelte-qsx7rj.svelte-qsx7rj{border:none;height:2px;background-color:#8BA3CC;margin:auto;width:100%}.titles.svelte-qsx7rj.svelte-qsx7rj{margin:auto;width:80%;text-align:right;padding:60px 0 30px}.overlay.svelte-qsx7rj.svelte-qsx7rj{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}tr.svelte-qsx7rj.svelte-qsx7rj:nth-child(even){background-color:#f2f2f2}table.neumorphic tr.svelte-qsx7rj td.svelte-qsx7rj:first-child::before{content:"";position:absolute;padding:7px;top:0;left:-5000px;width:10000px;height:100%;z-index:-10}.row.svelte-qsx7rj.svelte-qsx7rj{display:flex;flex-direction:row;justify-content:right}button.svelte-qsx7rj.svelte-qsx7rj{padding:15px 30px;background:#E6E7EE;border:none;padding:5px 10px 5px 20px ;background-color:#e6e7ee;box-shadow:2px 2px 5px 0 rgba(0, 0, 0, 0.25),\r
        -2px -2px 5px 0 rgb(255, 255, 255);border-radius:40px;color:#000000;font-size:1em;cursor:pointer;transition:transform 0.2s ease;font-family:'Tajawal';color:#2e3b6f }button.svelte-qsx7rj.svelte-qsx7rj:hover{transform:scale(1.05)}button.svelte-qsx7rj.svelte-qsx7rj:active{box-shadow:inset 4px 4px 12px #c5c5c5,\r
               inset -4px -4px 12px #ffffff}input.svelte-qsx7rj.svelte-qsx7rj{background-color:white;padding:7px;border-style:solid;border-color:transparent}.title.svelte-qsx7rj.svelte-qsx7rj{color:white;font-weight:bolder;margin:10px}.countButt.svelte-qsx7rj.svelte-qsx7rj{width:40%;height:40px;margin:0 30% 0 30%;background-color:#52ADEF;box-shadow:2px 2px 5px #00000040;border:none;border-radius:10px;color:white;font-weight:700;font-size:18px;font-family:'Tajawal';transition:all 0.2s ease-in-out}.countButt.svelte-qsx7rj.svelte-qsx7rj:hover{transform:scale(1.02);cursor:pointer;background-color:#65b3eb}.countButt.svelte-qsx7rj.svelte-qsx7rj:active{background-color:#2e9be9;box-shadow:none}.paymentCard.svelte-qsx7rj.svelte-qsx7rj{width:87%;height:450px;border-radius:10px;background-color:#e6e7ee;overflow-y:auto;padding-bottom:20px;position:relative;left:10%;top:100px}.paymentInfo.svelte-qsx7rj.svelte-qsx7rj{width:80%;height:200px;border-radius:10px;background-color:#e6e7ee;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;position:relative;margin-right:10px;text-align:right;overflow:auto}table.svelte-qsx7rj.svelte-qsx7rj{width:80%;border-collapse:collapse;margin-top:30px}th.svelte-qsx7rj.svelte-qsx7rj{border-bottom:1px solid #2e3b6f57}tr.svelte-qsx7rj.svelte-qsx7rj:nth-child(even){background-color:#C8D3E7}.row.svelte-qsx7rj.svelte-qsx7rj{display:flex;align-items:center;justify-content:flex-end}.svelte-qsx7rj.svelte-qsx7rj::-webkit-scrollbar{width:8px}.svelte-qsx7rj.svelte-qsx7rj::-webkit-scrollbar-track{background-color:transparent}.svelte-qsx7rj.svelte-qsx7rj::-webkit-scrollbar-thumb{background-color:#2E3B6F;border-radius:10px}.svelte-qsx7rj.svelte-qsx7rj::-webkit-scrollbar-thumb:hover{background-color:#39879b}`,
  map: null
};
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let tempUsers = [];
  let options = {
    courseSelected: data.course,
    courseID: data.id,
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${``} ${``} ${``} ${validate_component(Bar, "Bar").$$render($$result, { title: "إدارة الاشتراكات" }, {}, {})} <div id="subbox" class="svelte-qsx7rj"><div class="row svelte-qsx7rj" style="width: 94%;justify-content:space-between;padding:13px"><div class="column svelte-qsx7rj"><div class="title svelte-qsx7rj">${escape(options.courseName)}</div> <div class="row svelte-qsx7rj"><div class="column svelte-qsx7rj"><div class="title svelte-qsx7rj" data-svelte-h="svelte-1llj21k">عدد المشتركين</div> <div class="title svelte-qsx7rj">${escape(tempUsers.length)}</div></div> <div class="column svelte-qsx7rj"><div class="title svelte-qsx7rj" data-svelte-h="svelte-5u4sy7">عدد المتخرجين</div> <div class="title svelte-qsx7rj">${escape(tempUsers.filter((e) => e.status).length)}</div></div></div></div> <div style="border-radius: 10px 40px; height: 210px; width: 36%; display: flex; justify-content: space-around;background:linear-gradient(140deg, rgb(255 255 255) 0%, rgb(255 255 255 / 26%) 35%, rgb(255 255 255 / 11%) 100%)" class="svelte-qsx7rj"><div class="column svelte-qsx7rj"><div class="row svelte-qsx7rj"><div class="selection svelte-qsx7rj"${add_attribute("id", !options.courseSelected ? "notSelected" : "selected", 0)}>كورس</div> <div class="selection svelte-qsx7rj"${add_attribute("id", options.courseSelected ? "notSelected" : "selected", 0)}>زمالة</div></div> <select placeholder="courses/fellowships names" style="width:140px;" class="svelte-qsx7rj">${options.courseSelected ? `${each(options.courses, (course) => {
    return `<option${add_attribute("value", course.courseID, 0)} class="svelte-qsx7rj">${escape(course.courseName)}</option>`;
  })}` : ``}${!options.courseSelected ? `${each(options.fellowships, (fellowship) => {
    return `<option${add_attribute("value", fellowship.fellowshipID, 0)} class="svelte-qsx7rj">${escape(fellowship.fellowshipName)}</option>`;
  })}` : ``}</select> <div class="row svelte-qsx7rj"><div class="selection svelte-qsx7rj"${add_attribute("id", "notSelected", 0)}>إضافة</div> <div class="selection svelte-qsx7rj"${add_attribute("id", "selected", 0)}>تعديل</div></div></div></div> <div class="column svelte-qsx7rj"><div class="row svelte-qsx7rj"><input style="border-radius: 30px; background-color: transparent; border-color: white;" class="svelte-qsx7rj"> <img src="/srch.png" width="30" class="svelte-qsx7rj"></div> <div class="column svelte-qsx7rj" style="overflow-y:scroll;height:60%;">${`${each(tempUsers, (user) => {
    return `<div style="color:white" class="svelte-qsx7rj">${escape(user.username)}</div>`;
  })}`} ${``}</div></div></div></div> <div class="titles svelte-qsx7rj" data-svelte-h="svelte-dorwas"><h3 style="margin:5px 10px;" class="svelte-qsx7rj">المشتركين</h3> <hr class="horizontal-line svelte-qsx7rj"></div> <div class="m-container svelte-qsx7rj"><table class="svelte-qsx7rj" data-svelte-h="svelte-1yn9hlm"><thead class="svelte-qsx7rj"><tr class="svelte-qsx7rj"><th style="width: 40px;" class="svelte-qsx7rj"></th> <th class="svelte-qsx7rj">الاسم</th> <th class="svelte-qsx7rj">تاريخ الاشتراك</th> <th class="svelte-qsx7rj">المبلغ المسدد</th> <th class="svelte-qsx7rj">صلاحية الحساب</th></tr></thead></table> <div class="table-container svelte-qsx7rj" style="background-color: #f0fdf0;"><table class="svelte-qsx7rj"><tbody class="svelte-qsx7rj">${each(groups, (group) => {
    return `<tr class="svelte-qsx7rj"><td class="svelte-qsx7rj"><button class="collapsible svelte-qsx7rj">المجموعة ${escape(Object.keys(group)[0])}</button> <div class="content svelte-qsx7rj"><table class="svelte-qsx7rj">${each(Object.values(group)[0], (groupUser) => {
      return `<tr class="svelte-qsx7rj"><td style="width: 35px;" class="svelte-qsx7rj" data-svelte-h="svelte-x12t2g"><input type="checkbox" class="check-row svelte-qsx7rj">1</td> <td class="svelte-qsx7rj">${escape(groupUser.username)}</td> <td class="svelte-qsx7rj">${escape(new Date(groupUser.joinedDate).toDateString())}</td> <td class="svelte-qsx7rj">${escape(groupUser.totalFee - groupUser.remainingFee)}/${escape(groupUser.totalFee)}</td> <td class="svelte-qsx7rj">${escape(new Date(groupUser.expDate).toDateString())}</td> </tr>`;
    })}</table> </div></td> </tr>`;
  })}</tbody></table></div></div> <div class="titles svelte-qsx7rj" data-svelte-h="svelte-ogdvll"><h3 style="margin:5px 10px;" class="svelte-qsx7rj">المتخرجين</h3> <hr class="horizontal-line svelte-qsx7rj"></div> <div class="m-container svelte-qsx7rj"><table class="svelte-qsx7rj" data-svelte-h="svelte-5kwe91"><thead class="svelte-qsx7rj"><tr class="svelte-qsx7rj"><th style="width: 40px;" class="svelte-qsx7rj"></th> <th class="svelte-qsx7rj">الاسم</th> <th class="svelte-qsx7rj">تاريخ الاشتراك</th> <th class="svelte-qsx7rj">تاريخ التخرج</th> <th class="svelte-qsx7rj">المبلغ المسدد</th> <th class="svelte-qsx7rj">صلاحية الحساب</th></tr></thead></table> <div class="table-container svelte-qsx7rj"><table class="svelte-qsx7rj">${each(options.users, (user, index) => {
    return `<tr class="svelte-qsx7rj"><td style="width:20px;text-align:center;" class="svelte-qsx7rj">${escape(index)}</td> <td class="svelte-qsx7rj">${escape(user.username)}</td> <td class="svelte-qsx7rj">${escape(new Date(user.joinedDate).toDateString())}</td> <td class="svelte-qsx7rj">${escape(new Date(user.expDate).toDateString())}</td> <td class="svelte-qsx7rj">${escape(user.totalFee - user.remainingFee)}</td> </tr>`;
  })}</table></div></div> <div class="titles svelte-qsx7rj"><h3 style="margin:5px 10px;" class="svelte-qsx7rj" data-svelte-h="svelte-wbebjy">سجل الاشتراكات</h3> <div class="svelte-qsx7rj"><button class="svelte-qsx7rj" data-svelte-h="svelte-139wvmd">مسح</button> <button class="svelte-qsx7rj" data-svelte-h="svelte-18pmte7">تصدير</button> <button class="svelte-qsx7rj" data-svelte-h="svelte-1lksn95">ثالث زر</button></div> <hr class="horizontal-line svelte-qsx7rj"> <div style="display: flex;color:#2e3b6f;display: flex; color: rgb(46, 59, 111); width: 20%; justify-content: space-evenly; margin: auto;font-weight:bolder;" class="svelte-qsx7rj" data-svelte-h="svelte-ik7wmi"><div class="svelte-qsx7rj">إلى</div> <div class="svelte-qsx7rj">من</div> <div class="svelte-qsx7rj">المجموع</div></div></div> <div class="m-container svelte-qsx7rj"><table class="svelte-qsx7rj" data-svelte-h="svelte-kmczgj"><thead class="svelte-qsx7rj"><tr class="svelte-qsx7rj"><th style="width: 40px;" class="svelte-qsx7rj"></th> <th class="svelte-qsx7rj">الاسم</th> <th class="svelte-qsx7rj">اسم المشترك</th> <th class="svelte-qsx7rj">تاريخ الاشتراك</th> <th class="svelte-qsx7rj">المبلغ المسدد</th></tr></thead></table> <div class="table-container svelte-qsx7rj"><table class="svelte-qsx7rj">${each(options.users, (user, index) => {
    return `<tr class="svelte-qsx7rj"><td style="width:20px;text-align:center;" class="svelte-qsx7rj">${escape(index)}</td> <td class="svelte-qsx7rj">${escape(user.username)}</td> <td class="svelte-qsx7rj">${escape(new Date(user.joinedDate).toDateString())}</td> <td class="svelte-qsx7rj">${escape(new Date(user.expDate).toDateString())}</td> <td class="svelte-qsx7rj">${escape(user.totalFee - user.remainingFee)}</td> </tr>`;
  })}</table></div></div>`;
});

export { Users as U };
//# sourceMappingURL=Users-tn7cn3qo.js.map
