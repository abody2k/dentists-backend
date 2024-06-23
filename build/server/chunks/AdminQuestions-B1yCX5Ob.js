import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from './ssr-CggYz5VK.js';

const css$1 = {
  code: '@media(min-width: 768px){.svelte-x16tbm::-webkit-scrollbar{width:10px}.svelte-x16tbm::-webkit-scrollbar-track{background-color:transparent}.svelte-x16tbm::-webkit-scrollbar-thumb{background-color:#39879b;border:1px solid #00a2ff;border-radius:10px}.svelte-x16tbm::-webkit-scrollbar-thumb:hover{background-color:#44a5bd}.svelte-x16tbm::-webkit-scrollbar-thumb:active{background-color:rgba(255, 255, 255, 0.795)}}button.svelte-x16tbm{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;font-family:"Poppins"}@media(max-width: 768px){}textarea.svelte-x16tbm{width:100%;padding:2px 10px;border:2px solid #ccc;border-radius:5px;font-size:16px;box-sizing:border-box;transition:border-color 0.3s ease;overflow:hidden;min-height:100px;resize:none}textarea.svelte-x16tbm:focus{border-color:#007bff;outline:none}@media(max-width: 700px){.EXMstartBar.svelte-x16tbm{width:85%;background-color:#007bff00;display:flex;justify-content:space-between;align-items:center;transition:all 0.5s ease}}@media(min-width: 700px){.EXMstartBar.svelte-x16tbm{width:50%;display:flex;justify-content:space-between;align-items:center;transition:all 0.5s ease}}.startExamBtn.svelte-x16tbm{width:150px;height:40px;margin:30px 0;cursor:pointer;border:1px solid #ffffff75;border-radius:60px;background:linear-gradient(130deg, rgba(119,160,225,1) 0%, rgba(84,121,181,1) 100%);color:white;box-shadow:2px 2px 5px #00000040}.startExamBtn.svelte-x16tbm:active{background:rgba(84,121,181,1);box-shadow:none}.editSaveCancel.svelte-x16tbm{padding:0 10px;height:30px;border:none;border-radius:8px;color:#2e3b6f;font-weight:600;cursor:pointer;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;background-color:#e6e7ee;display:flex;justify-content:center;align-items:center;gap:5px}.editSaveCancel.svelte-x16tbm:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.exmInput.svelte-x16tbm{border-radius:5px;border:none;height:30px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:rgba(255, 255, 255, 0.308);font-size:16px}select.svelte-x16tbm{border-radius:5px;border:none;height:30px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:rgba(255, 255, 255, 0.308);font-size:16px;min-width:40px}.examSettingCard.svelte-x16tbm{display:flex;border:1px solid #004c7961;border-radius:10px;padding:10px;box-sizing:border-box;background:linear-gradient(130deg, #004c791c 50%, rgb(196 197 203) 100%);flex-direction:column;gap:10px}@media(max-width: 1050px){.exmSettSection.svelte-x16tbm{width:90%;margin:20px 5%;display:flex;gap:20px;flex-direction:column;align-items:center}.exmInstr.svelte-x16tbm{flex:1;width:100%}}@media(min-width: 1050px){.exmSettSection.svelte-x16tbm{width:90%;margin:20px 5%;display:flex;gap:5%;flex-wrap:nowrap;align-items:flex-start}.exmInstr.svelte-x16tbm{flex:1}}',
  map: null
};
const AdminExam = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { switchToQuestions } = $$props;
  let { data } = $$props;
  let { save } = $$props;
  let { groups } = $$props;
  if ($$props.switchToQuestions === void 0 && $$bindings.switchToQuestions && switchToQuestions !== void 0)
    $$bindings.switchToQuestions(switchToQuestions);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.save === void 0 && $$bindings.save && save !== void 0)
    $$bindings.save(save);
  if ($$props.groups === void 0 && $$bindings.groups && groups !== void 0)
    $$bindings.groups(groups);
  $$result.css.add(css$1);
  return `<div style="background-color: rgb(0, 76, 121);height: 43px;width: 100%;color: white;" class="svelte-x16tbm" data-svelte-h="svelte-odzvzr"><div class="EXMstartBar svelte-x16tbm"><div style="display: flex;align-items: center;gap: 10px;font-size: 15px;height: 43px;" class="svelte-x16tbm"><img style="width: 30px; height: 30px; margin-left: 15px;" src="/EDTULOGO.png" alt="" class="svelte-x16tbm"> Echo Dent</div> <div style="transform: translateX(50%);" class="svelte-x16tbm">Exam</div></div></div> <div style="width: 100%;" class="svelte-x16tbm"><div style="margin: 10px 20px;display: flex;align-items: center;gap: 7px;" class="svelte-x16tbm"> <button class="editSaveCancel svelte-x16tbm" data-svelte-h="svelte-140ax7j"><p style="font-size: 11px;" class="svelte-x16tbm">╳</p></button> <button class="editSaveCancel svelte-x16tbm" data-svelte-h="svelte-4d0zdo">Save <p style="font-size: 18px;" class="svelte-x16tbm">🖫</p></button></div></div> <div style="text-align: center; font-weight: 600;" class="svelte-x16tbm" data-svelte-h="svelte-1kczcif">The name of the course</div> <div style="transform: translateX(-50%);text-align: center;border: 1px solid #004c7961;padding: 2px 10px;box-sizing: border-box;border-radius: 10px;width: fit-content;margin: 10px 0 10px 50%;" class="svelte-x16tbm" data-svelte-h="svelte-171tf9p">Level: 1</div> <div style="transform: translateX(-50%);text-align: center;border: 1px solid #004c7961;padding: 2px 10px;box-sizing: border-box;border-radius: 10px;width: fit-content;margin: 10px 0 10px 50%;" class="svelte-x16tbm">No. of Questions: ${escape(data.questions.length)}</div>   <div class="exmSettSection svelte-x16tbm"><div class="examSettingCard svelte-x16tbm"><div class="svelte-x16tbm"><small class="svelte-x16tbm" data-svelte-h="svelte-1htbkpn">Exam title:</small> <textarea id="" placeholder="Exam title..." style="min-height: 40px;" class="svelte-x16tbm">${escape(data.title || "")}</textarea></div> <div style="gap: 10px;display: flex;flex-wrap: wrap;align-items: center;" class="svelte-x16tbm"><div style="display: flex;border: 1px solid #004c7961;flex-direction: column;min-height: 110px;gap: 33px;justify-content: space-between;padding: 10px;box-sizing: border-box;border-radius: 10px;align-items: center;" class="svelte-x16tbm"><div class="svelte-x16tbm">Start date: <input class="exmInput svelte-x16tbm" type="datetime-local"${add_attribute("value", data.startingDate, 0)}></div> <div class="svelte-x16tbm">End date: <input class="exmInput svelte-x16tbm" type="datetime-local"${add_attribute("value", data.ending, 0)}></div></div> <div style="display: flex;gap:10px;flex-direction:column;" class="svelte-x16tbm"><div style="width: 100%;display: flex;justify-content: space-between;flex-wrap: wrap;gap: 10px;" class="svelte-x16tbm"><div style="border: 1px solid #004c7961;padding: 10px;box-sizing: border-box;border-radius: 10px;" class="svelte-x16tbm"><label for="" class="svelte-x16tbm" data-svelte-h="svelte-acd8bc">Type:</label> ${location.href.includes("new") ? `<select name="" id="" class="svelte-x16tbm"><option${add_attribute("value", 1, 0)} class="svelte-x16tbm" data-svelte-h="svelte-1ghl847">Perodic</option><option${add_attribute("value", 2, 0)} class="svelte-x16tbm" data-svelte-h="svelte-6nxenw">Stage</option><option${add_attribute("value", 3, 0)} class="svelte-x16tbm" data-svelte-h="svelte-1idg3b1">Final</option></select>` : `${location.href.split("/")[7].split("-")[0] == 1 ? `<div class="svelte-x16tbm" data-svelte-h="svelte-52l5qq">Perodic</div>` : `${location.href.split("/")[7].split("-")[0] == 2 ? `<div class="svelte-x16tbm" data-svelte-h="svelte-1yyap34">Stage</div>` : `${location.href.split("/")[7].split("-")[0] == 3 ? `<div class="svelte-x16tbm" data-svelte-h="svelte-q9syq">Final</div>` : ``}`}`}`}</div> <div style="border: 1px solid #004c7961;padding: 10px;box-sizing: border-box;border-radius: 10px;" class="svelte-x16tbm"><label for="" class="svelte-x16tbm" data-svelte-h="svelte-di50hl">Group: </label><select name="" id="" class="svelte-x16tbm">${each(groups, (group) => {
    return `<option${add_attribute("value", group, 0)} class="svelte-x16tbm">${escape(group)}</option>`;
  })}</select></div></div> <div style="border: 1px solid #004c7961;padding: 10px;box-sizing: border-box;border-radius: 10px;" class="svelte-x16tbm"><div class="svelte-x16tbm">Passing average: <input class="exmInput svelte-x16tbm" type="number" min="50" max="100" step="10" style="width: 50px;"${add_attribute("value", data.passing, 0)}></div></div></div></div></div> <div class="exmInstr svelte-x16tbm"><div class="examSettingCard svelte-x16tbm"><div class="svelte-x16tbm"><small class="svelte-x16tbm" data-svelte-h="svelte-1mx4tg6">Exam instructions:</small> <textarea id="" placeholder="Exam instructions..." style="min-height: 170px;" class="svelte-x16tbm">${escape(data.note || "")}</textarea></div></div></div></div> <div style="width: 100%; display: flex;justify-content: center;margin-top: 50px;" class="svelte-x16tbm"><button class="startExamBtn svelte-x16tbm" title="Start Exam" data-svelte-h="svelte-1vdaq5y">QUESTIONS ❯</button></div>`;
});
const css = {
  code: '@media(min-width: 768px){.svelte-x16tbm::-webkit-scrollbar{width:10px}.svelte-x16tbm::-webkit-scrollbar-track{background-color:transparent}.svelte-x16tbm::-webkit-scrollbar-thumb{background-color:#39879b;border:1px solid #00a2ff;border-radius:10px}.svelte-x16tbm::-webkit-scrollbar-thumb:hover{background-color:#44a5bd}.svelte-x16tbm::-webkit-scrollbar-thumb:active{background-color:rgba(255, 255, 255, 0.795)}}button.svelte-x16tbm{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;font-family:"Poppins"}.sidebar.svelte-x16tbm{height:100%;width:250px;position:fixed;top:0;left:-250px;background-color:rgb(0, 52, 82);overflow-y:auto;overflow-x:hidden;transition:0.5s;z-index:1000;display:flex;flex-direction:column}.open-btn.svelte-x16tbm{cursor:pointer;background-color:transparent;border:none;position:fixed;z-index:1001;width:35px;height:35px;display:flex;justify-content:center;align-items:center;margin:4px 20px}.main-content.svelte-x16tbm{transition:margin-left 0.5s;background-color:transparent;overflow-y:auto;overflow-x:hidden;position:relative;top:0;height:100vh;display:flex;flex-direction:column}@media(max-width: 768px){.main-content.svelte-x16tbm{margin-left:0 !important}.sidebar.svelte-x16tbm{left:-250px}}.Qnumber.svelte-x16tbm{width:35px;height:35px;border-radius:7px;background-color:#0000004a;border:1px solid #006aa9b3;color:white;display:flex;justify-content:center;align-items:center;gap:6px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.Qnumber.svelte-x16tbm:active{background-color:transparent;box-shadow:0px 0px 5px 1px #ffffff2b;border:1px solid #ffffff80}.qPaperBtn.svelte-x16tbm{border:1px solid;background-color:transparent;border-radius:7px;padding:5px;box-sizing:border-box;color:#ff4242;font-weight:600;cursor:pointer;margin:5px}.qPaperBtn.svelte-x16tbm:active{border:1px solid transparent}.middleBody.svelte-x16tbm{background-color:transparent;width:100%;height:100%;font-size:18px;overflow-y:auto;overflow-x:hidden;flex:1;-webkit-user-select:none;-moz-user-select:none;user-select:none}.qPaper.svelte-x16tbm{background-color:rgb(255, 255, 255);width:92%;margin:5px 4%;font-size:18px;overflow:hidden;padding:20px;box-sizing:border-box}.questionDiv.svelte-x16tbm{width:100%;height:auto;margin:30px 0 50px;border-bottom:2px solid #0000001f}.optionDiv.svelte-x16tbm{border-radius:6px;width:97%;margin:10px 1.5%;display:flex;flex-direction:row}.ansDiv.svelte-x16tbm{background-color:#d9e7ff;border-radius:7px;width:100%;box-sizing:border-box;padding:5px;margin:50px 0;border:5px solid #ccdfff}.qList.svelte-x16tbm{width:100%;height:100%;background-color:transparent;overflow-y:auto;overflow-x:hidden;flex:1;display:flex;gap:7px;flex-direction:row;justify-content:center;align-content:flex-start;flex-wrap:wrap}.bottomBar.svelte-x16tbm{background-color:rgb(0, 76, 121);min-height:50px;max-height:80px;width:100%;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:20px}textarea.svelte-x16tbm{width:100%;padding:2px 10px;border:2px solid #ccc;border-radius:5px;font-size:16px;box-sizing:border-box;transition:border-color 0.3s ease;overflow:hidden;min-height:100px;resize:none}textarea.svelte-x16tbm:focus{border-color:#007bff;outline:none}@media(max-width: 700px){}@media(min-width: 700px){}@media(max-width: 1050px){}@media(min-width: 1050px){}',
  map: null
};
const AdminQuestions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { switchToMainExams } = $$props;
  let { data } = $$props;
  let { saveQuestions } = $$props;
  let selectedIndex = 0;
  let selectedQuestion;
  window.addEventListener("resize", function() {
    var sidebar = document.getElementById("mySidebar");
    var mainContent = document.getElementById("main");
    var toggleIcon = document.getElementById("toggleIcon");
    var logo = document.getElementById("logo");
    var Qnumb = document.getElementById("Qnumb");
    if (window.innerWidth <= 768) {
      Qnumb.style.justifyContent = "end";
      logo.style.justifyContent = "center";
      logo.style.marginLeft = "0";
      mainContent.style.marginLeft = "0";
      sidebar.style.left = "-250px";
      sidebar.classList.remove("open");
      toggleIcon.src = "open-icon.png";
    } else {
      logo.style.marginLeft = "0";
      logo.style.justifyContent = "flex-start";
      Qnumb.style.justifyContent = "center";
      mainContent.style.marginLeft = "250px";
      sidebar.style.left = "0";
      sidebar.classList.add("open");
      toggleIcon.src = "/close-icon.png";
    }
  });
  window.addEventListener("load", function() {
    var sidebar = document.getElementById("mySidebar");
    var mainContent = document.getElementById("main");
    var toggleIcon = document.getElementById("toggleIcon");
    var logo = document.getElementById("logo");
    var Qnumb = document.getElementById("Qnumb");
    sidebar.style.transition = "none";
    mainContent.style.transition = "none";
    if (window.innerWidth > 768) {
      logo.style.marginLeft = "0";
      Qnumb.style.justifyContent = "center";
      mainContent.style.marginLeft = "250px";
      sidebar.style.left = "0";
      sidebar.classList.add("open");
      toggleIcon.src = "close-icon.png";
    } else {
      Qnumb.style.justifyContent = "end";
      logo.style.justifyContent = "center";
      logo.style.marginLeft = "0";
    }
    setTimeout(
      function() {
        logo.style.transition = "margin-left 0.3s";
        sidebar.style.transition = "0.3s";
        mainContent.style.transition = "margin-left 0.3s";
      },
      0
    );
  });
  document.addEventListener("DOMContentLoaded", function() {
    const textareas = document.querySelectorAll("textarea");
    function autoResize(textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
    textareas.forEach((textarea) => {
      autoResize(textarea);
      textarea.addEventListener("input", function() {
        autoResize(textarea);
      });
    });
  });
  if ($$props.switchToMainExams === void 0 && $$bindings.switchToMainExams && switchToMainExams !== void 0)
    $$bindings.switchToMainExams(switchToMainExams);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.saveQuestions === void 0 && $$bindings.saveQuestions && saveQuestions !== void 0)
    $$bindings.saveQuestions(saveQuestions);
  $$result.css.add(css);
  return `<div id="mySidebar" class="sidebar svelte-x16tbm"><div style="height: 70px;text-align: center;line-height: 5;color: white;font-size: 16px;" class="svelte-x16tbm" data-svelte-h="svelte-ytyehn">Questions List</div> <div class="qList svelte-x16tbm">${each(data.questions, (question, index) => {
    return `<div class="Qnumber svelte-x16tbm"${add_attribute(
      "style",
      question == selectedQuestion ? "background-color: #004c79;" : "",
      0
    )}>${escape(index + 1)}</div>`;
  })}</div> <div style="height: 50px;display: flex;align-items: flex-end;justify-content: center;" class="svelte-x16tbm"><button class="Qnumber svelte-x16tbm" style="width: fit-content;height: 30px;box-shadow: 0px 0px 5px 1px #ffffff2b;" data-svelte-h="svelte-k2wjda">NEW QUESTION +</button></div> <div style="height: 70px;display: flex;align-items: center;justify-content: center;gap: 20px;" class="svelte-x16tbm"><button class="Qnumber svelte-x16tbm" style="width: 80px;height: 30px;box-shadow: 0px 0px 5px 1px #ffffff2b;" data-svelte-h="svelte-1na0ikr">HOME <p style="font-size: 20px;height: 35px;" class="svelte-x16tbm">⌂</p></button> <button class="Qnumber svelte-x16tbm" style="width: 80px;height: 30px;box-shadow: 0px 0px 5px 1px #ffffff2b; color: #00ff51;" data-svelte-h="svelte-txi551">Save <p style="font-size: 16px;" class="svelte-x16tbm">🖫</p></button></div></div> <button id="sidebarToggle" class="open-btn svelte-x16tbm" data-svelte-h="svelte-100elua"><img id="toggleIcon" src="/open-icon.png" alt="Open Sidebar" class="svelte-x16tbm"></button> <div id="main" class="main-content svelte-x16tbm"><div id="topBar" style="background-color: rgb(0, 76, 121);height: 43px;width: 100%;color: white; width: 100%;" class="svelte-x16tbm"><div id="logo" style="display: flex;align-items: center;gap: 10px;font-size: 15px;height: 43px;" class="svelte-x16tbm" data-svelte-h="svelte-1ncyxrj"><img style="width: 30px; height: 30px; margin-left: 15px;" src="/EDTULOGO.png" alt="" class="svelte-x16tbm"> Echo Dent</div> <div id="Qnumb" style="width: 100%;height: 43px;display: flex;align-items: center;justify-content: center;position: relative;top: -43px;" class="svelte-x16tbm"><div class="Qnumber svelte-x16tbm" style="margin: 0 20px 0 0;" title="Mark the question">${escape(selectedIndex + 1)}</div></div></div> <div class="middleBody svelte-x16tbm">${``}</div> <div class="bottomBar svelte-x16tbm" id="bottomBar"><button class="Qnumber svelte-x16tbm"${add_attribute(
    "style",
    `width: 110px;height: 30px; ${"box-shadow:none;color: #ffffff66;"}`,
    0
  )}><p style="height: 24px;" class="svelte-x16tbm" data-svelte-h="svelte-w51kdo">⟨⟨</p>PREVIOUS</button> <button class="Qnumber svelte-x16tbm"${add_attribute(
    "style",
    `width: 110px;height: 30px; ${selectedIndex == data.questions.length - 1 || data.questions.length == 0 ? "box-shadow:none;color: #ffffff66;" : "box-shadow: 0px 0px 5px 1px #ffffff2b;"}`,
    0
  )}>NEXT<p style="height: 24px;" class="svelte-x16tbm" data-svelte-h="svelte-1rf9264">⟩⟩</p></button></div></div>`;
});

export { AdminExam as A, AdminQuestions as a };
//# sourceMappingURL=AdminQuestions-B1yCX5Ob.js.map
