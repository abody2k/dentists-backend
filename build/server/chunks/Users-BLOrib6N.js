import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, f as each } from './ssr-CIpp2D7Y.js';
import { B as Bar } from './Bar-CwvRxFXa.js';

const css = {
  code: `.row.svelte-satq89.svelte-satq89{display:flex;flex-direction:row;justify-content:space-around}#notSelected.svelte-satq89.svelte-satq89{background-color:transparent;color:white;padding:7px;border-radius:30px;border:1px solid;border-color:white;margin:7px}#selected.svelte-satq89.svelte-satq89{background-color:white;color:navy;padding:7px;border-radius:30px;margin:7px}.column.svelte-satq89.svelte-satq89{display:flex;flex-direction:column;justify-content:space-around}#subbox.svelte-satq89.svelte-satq89{background-image:url("/bg.jpg");background-repeat:no-repeat;background-size:cover;margin:auto;width:90%;border-top-right-radius:90px;border-bottom-left-radius:90px;border-top-left-radius:10px;border-bottom-right-radius:10px;height:30vh}.title.svelte-satq89.svelte-satq89{margin-top:5px;font-weight:bolder;text-align:center;color:white;font-size:25px}.collapsible.svelte-satq89.svelte-satq89{cursor:pointer;padding:8px;width:100%;border:none;text-align:right;outline:none;background-color:#f0f0f0;transition:0.4s;border-radius:7px}.collapsible.svelte-satq89.svelte-satq89:hover{background-color:#C8D3E7}.check-row.svelte-satq89.svelte-satq89{margin-left:8px}.content.svelte-satq89.svelte-satq89{display:none;overflow:hidden}.table-container.svelte-satq89.svelte-satq89{overflow-x:auto;max-height:400px;overflow-y:auto;width:100%;margin:auto}table.svelte-satq89.svelte-satq89{table-layout:fixed;border-collapse:collapse;width:100%;margin:auto;background-color:#E6E7EE}th.svelte-satq89.svelte-satq89,td.svelte-satq89.svelte-satq89{padding:8px;border-bottom:1px solid #ddd}th.svelte-satq89.svelte-satq89{background-color:#E6E7EE;font-size:16px}tr.svelte-satq89.svelte-satq89:hover{background-color:#f0f0f0}.m-container.svelte-satq89.svelte-satq89{margin:auto;width:80%;box-shadow:-3px -3px 8px 4px rgba(255, 255, 255, 0.9),\r
                       3px 3px 8px 4px rgba(0, 0, 0, 0.25);border-radius:8px;overflow:hidden}.table-container.svelte-satq89.svelte-satq89::-webkit-scrollbar{width:8px}.table-container.svelte-satq89.svelte-satq89::-webkit-scrollbar-thumb{background-color:#DCDDE8;border:1.5px solid #C8D3E7;border-radius:10px}.table-container.svelte-satq89.svelte-satq89::-webkit-scrollbar-thumb:hover{background-color:#C8D3E7}.table-container.svelte-satq89.svelte-satq89::-webkit-scrollbar-track{background-color:#E6E7EE}.table-container.svelte-satq89.svelte-satq89::-webkit-scrollbar-track:hover{background-color:#f0f0f0}button.svelte-satq89.svelte-satq89{font-family:'Tajawal';font-size:14px;color:#2E3B6F;font-weight:bold}.horizontal-line.svelte-satq89.svelte-satq89{border:none;height:2px;background-color:#8BA3CC;margin:auto;width:100%}.titles.svelte-satq89.svelte-satq89{margin:auto;width:80%;text-align:right;padding:60px 0 30px}.overlay.svelte-satq89.svelte-satq89{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;opacity:1;transition:opacity 0.3s ease;z-index:1000}tr.svelte-satq89.svelte-satq89:nth-child(even){background-color:#f2f2f2}table.neumorphic tr.svelte-satq89 td.svelte-satq89:first-child::before{content:"";position:absolute;padding:7px;top:0;left:-5000px;width:10000px;height:100%;z-index:-10}.row.svelte-satq89.svelte-satq89{display:flex;flex-direction:row;justify-content:right}button.svelte-satq89.svelte-satq89{padding:10px 10px;background:#efefef;border:none;border-radius:10px;color:#000000;font-weight:700;text-align:center;outline:none;cursor:pointer;transition:.2s ease-in-out;box-shadow:-6px -6px 14px rgba(255, 255, 255, .7),\r
          -6px -6px 10px rgba(255, 255, 255, .5),\r
          6px 6px 8px rgba(255, 255, 255, .075),\r
          6px 6px 10px rgba(0, 0, 0, .15)}button.svelte-satq89.svelte-satq89:hover{box-shadow:-2px -2px 6px rgba(255, 255, 255, .6),\r
          -2px -2px 4px rgba(255, 255, 255, .4),\r
          2px 2px 2px rgba(255, 255, 255, .05),\r
          2px 2px 4px rgba(0, 0, 0, .1)}button.svelte-satq89.svelte-satq89:active{box-shadow:inset -2px -2px 6px rgba(255, 255, 255, .7),\r
          inset -2px -2px 4px rgba(255, 255, 255, .5),\r
          inset 2px 2px 2px rgba(255, 255, 255, .075),\r
          inset 2px 2px 4px rgba(0, 0, 0, .15)}input.svelte-satq89.svelte-satq89{background-color:white;padding:7px;border-style:solid;border-color:transparent}.title.svelte-satq89.svelte-satq89{color:white;font-weight:bolder;margin:10px}`,
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
    payments: []
  };
  let groups = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${``} ${validate_component(Bar, "Bar").$$render($$result, { title: "إدارة الاشتراكات" }, {}, {})} <div id="subbox" class="svelte-satq89"><div class="row svelte-satq89" style="width: 94%;justify-content:space-between;padding:13px"><div class="column svelte-satq89"><div class="title svelte-satq89">${escape(options.courseName)}</div> <div class="row svelte-satq89"><div class="column svelte-satq89"><div class="title svelte-satq89" data-svelte-h="svelte-1llj21k">عدد المشتركين</div> <div class="title svelte-satq89">${escape(tempUsers.length)}</div></div> <div class="column svelte-satq89"><div class="title svelte-satq89" data-svelte-h="svelte-5u4sy7">عدد المتخرجين</div> <div class="title svelte-satq89">${escape(tempUsers.filter((e) => e.status).length)}</div></div></div></div> <div style="border-radius: 10px 40px; height: 210px; width: 36%; display: flex; justify-content: space-around;background:linear-gradient(140deg, rgb(255 255 255) 0%, rgb(255 255 255 / 26%) 35%, rgb(255 255 255 / 11%) 100%)"><div class="column svelte-satq89"><div class="row svelte-satq89"><div class="selection svelte-satq89"${add_attribute("id", !options.courseSelected ? "notSelected" : "selected", 0)}>كورس</div> <div class="selection svelte-satq89"${add_attribute("id", options.courseSelected ? "notSelected" : "selected", 0)}>زمالة</div></div> <select placeholder="courses/fellowships names">${options.courseSelected ? `${each(options.courses, (course) => {
    return `<option${add_attribute("value", course.courseID, 0)}>${escape(course.courseName)}</option>`;
  })}` : ``}${!options.courseSelected ? `${each(options.fellowships, (fellowship) => {
    return `<option${add_attribute("value", fellowship.fellowshipID, 0)}>${escape(fellowship.fellowshipName)}</option>`;
  })}` : ``}</select> <div class="row svelte-satq89"><div class="selection svelte-satq89"${add_attribute("id", "notSelected", 0)}>إضافة</div> <div class="selection svelte-satq89"${add_attribute("id", "selected", 0)}>تعديل</div></div></div></div> <div class="column svelte-satq89"><div class="row svelte-satq89"><input style="border-radius: 30px; background-color: transparent; border-color: white;" class="svelte-satq89"> <img src="/srch.png" width="30"></div> <div class="column svelte-satq89" style="overflow-y:scroll;height:60%;">${`${each(tempUsers, (user) => {
    return `<div style="color:white">${escape(user.username)}</div>`;
  })}`} ${``}</div></div></div></div> <div class="titles svelte-satq89" data-svelte-h="svelte-dorwas"><h3 style="margin:5px 10px;">المشتركين</h3> <hr class="horizontal-line svelte-satq89"></div> <div class="m-container svelte-satq89"><table class="svelte-satq89" data-svelte-h="svelte-1yn9hlm"><thead><tr class="svelte-satq89"><th style="width: 40px;" class="svelte-satq89"></th> <th class="svelte-satq89">الاسم</th> <th class="svelte-satq89">تاريخ الاشتراك</th> <th class="svelte-satq89">المبلغ المسدد</th> <th class="svelte-satq89">صلاحية الحساب</th></tr></thead></table> <div class="table-container svelte-satq89" style="background-color: #f0fdf0;"><table class="svelte-satq89"><tbody>${each(groups, (group) => {
    return `<tr class="svelte-satq89"><td class="svelte-satq89"><button class="collapsible svelte-satq89">المجموعة ${escape(Object.keys(group)[0])}</button> <div class="content svelte-satq89"><table class="svelte-satq89">${each(Object.values(group)[0], (groupUser) => {
      return `<tr class="svelte-satq89"><td style="width: 35px;" class="svelte-satq89" data-svelte-h="svelte-x12t2g"><input type="checkbox" class="check-row svelte-satq89">1</td> <td class="svelte-satq89">${escape(groupUser.username)}</td> <td class="svelte-satq89">${escape(new Date(groupUser.joinedDate).toDateString())}</td> <td class="svelte-satq89">${escape(groupUser.totalFee - groupUser.remainingFee)}/${escape(groupUser.totalFee)}</td> <td class="svelte-satq89">${escape(new Date(groupUser.expDate).toDateString())}</td> </tr>`;
    })}</table> </div></td> </tr>`;
  })}</tbody></table></div></div> <div class="titles svelte-satq89" data-svelte-h="svelte-ogdvll"><h3 style="margin:5px 10px;">المتخرجين</h3> <hr class="horizontal-line svelte-satq89"></div> <div class="m-container svelte-satq89"><table class="svelte-satq89" data-svelte-h="svelte-5kwe91"><thead><tr class="svelte-satq89"><th style="width: 40px;" class="svelte-satq89"></th> <th class="svelte-satq89">الاسم</th> <th class="svelte-satq89">تاريخ الاشتراك</th> <th class="svelte-satq89">تاريخ التخرج</th> <th class="svelte-satq89">المبلغ المسدد</th> <th class="svelte-satq89">صلاحية الحساب</th></tr></thead></table> <div class="table-container svelte-satq89"><table class="svelte-satq89">${each(options.users, (user, index) => {
    return `<tr class="svelte-satq89"><td style="width:20px;text-align:center;" class="svelte-satq89">${escape(index)}</td> <td class="svelte-satq89">${escape(user.username)}</td> <td class="svelte-satq89">${escape(new Date(user.joinedDate).toDateString())}</td> <td class="svelte-satq89">${escape(new Date(user.expDate).toDateString())}</td> <td class="svelte-satq89">${escape(user.totalFee - user.remainingFee)}</td> </tr>`;
  })}</table></div></div>`;
});

export { Users as U };
//# sourceMappingURL=Users-BLOrib6N.js.map
