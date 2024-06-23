import { c as create_ssr_component, v as validate_component } from './ssr-CggYz5VK.js';
import { A as AdminExam, a as AdminQuestions } from './AdminQuestions-B1yCX5Ob.js';
import { f as fetchData, s as showNotification } from './not-Doe3zZqE.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mode = 0;
  let { data } = $$props;
  let examData = {
    questions: [],
    answers: [],
    title: "",
    startingDate: "",
    ending: "",
    v: false,
    groupID: 1,
    level: "",
    note: "",
    passing: "",
    examType: 1
  };
  let level;
  let groups = [];
  function updateExam() {
    fetchData("a/ufxm", {
      t: !data.course,
      title: examData.title,
      q: examData.questions,
      ans: examData.answers,
      sd: examData.startingDate,
      duration: examData.ending,
      ID: Number(data.examID.split("-")[1]),
      visible: true,
      type: Number(examData.examType),
      groupID: Number(examData.groupID),
      level: Number(level),
      passing: Number(examData.passing) / 100,
      note: examData.note
    }).then(
      () => {
        showNotification("تم تحديث الامتحان", "cornflowerblue").then(() => {
        });
      }
    ).catch(() => {
      showNotification("يوجد امتحان بنفس هذا العنوان", "red");
    });
  }
  function makeNewExam() {
    fetchData("a/nfxm", {
      t: !data.course,
      title: examData.title,
      q: examData.questions,
      ans: examData.answers,
      startingDate: examData.startingDate,
      ending: examData.ending,
      ID: location.href.split("/")[5],
      v: true,
      type: Number(examData.examType),
      groupID: Number(examData.groupID),
      level: Number(level),
      passing: Number(examData.passing) / 100,
      note: examData.note
    }).then((e) => {
      showNotification("تم إضافة الامتحان", "cornflowerblue").then(() => {
        let x = location.href.split("/");
        x.pop();
        x.push(`${examData.examType}-${e.id}-${level}`);
        location.href = x.join("/");
      });
      console.log(e);
    }).catch(() => {
      showNotification("يوجد امتحان بنفس هذا العنوان", "red");
    });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${mode == 0 ? `${validate_component(AdminExam, "AdminExam").$$render(
    $$result,
    {
      groups,
      save: (e) => {
        console.log(e);
        if (data.examID.includes("new")) {
          makeNewExam();
        } else {
          updateExam();
        }
      },
      data: examData,
      switchToQuestions: () => {
        if (data.examID.includes("new")) {
          makeNewExam();
        }
        mode = 1;
      }
    },
    {},
    {}
  )}` : `${validate_component(AdminQuestions, "AdminQuestions").$$render(
    $$result,
    {
      data: examData,
      saveQuestions: updateExam,
      switchToMainExams: () => {
        mode = 0;
      }
    },
    {},
    {}
  )}`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Bzc2P9YQ.js.map
