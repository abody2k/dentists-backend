import { c as create_ssr_component, i as createEventDispatcher, f as add_attribute, e as escape, j as null_to_empty, d as each } from './ssr-CZ3Mxc3I.js';

/* empty css                                   */
/* empty css                                          */
/* empty css                                         */
const css = {
  code: '.course-container.svelte-1dd25co.svelte-1dd25co{display:flex;flex-direction:column;align-items:center;margin:20px}button.svelte-1dd25co.svelte-1dd25co:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff\r\n}.car.svelte-1dd25co.svelte-1dd25co{background:#E6E7EE;border-radius:10px;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;padding:10px;position:relative;top:0px;transition:all 0.3s ease-in-out }.car.selected.svelte-1dd25co.svelte-1dd25co{top:0px;background:#E6E7EE;border-radius:10px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;padding:10px}.car.selected.svelte-1dd25co.svelte-1dd25co:hover{top:-10px}.car.svelte-1dd25co.svelte-1dd25co:hover{top:-10px;background-color:#f5f6ff}.ccr.svelte-1dd25co.svelte-1dd25co{background:#E6E7EE;border-radius:10px;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;padding:10px;position:relative;top:0px;transition:all 1s ease-in-out }.row.svelte-1dd25co.svelte-1dd25co{display:flex;flex-direction:row}.column.svelte-1dd25co.svelte-1dd25co{display:flex;flex-direction:column}.courseSection.svelte-1dd25co.svelte-1dd25co{width:100%;height:auto;background-color:#e6e7ee;display:flex;align-items:center;justify-content:center;padding:20px  0 20px 0 ;position:relative;top:100px;margin-bottom:109px}.course.svelte-1dd25co.svelte-1dd25co{width:70%;min-height:400px;background-color:#e6e7ee;position:relative;padding:25px;border-radius:10px;box-shadow:inset -3px -3px 8px 4px #ffffffe6,inset 3px 3px 8px 4px #00000040}.courseImg.svelte-1dd25co.svelte-1dd25co{width:300px;height:300px;background-color:gray;border-radius:10px;overflow:hidden}.courseImg.svelte-1dd25co img.svelte-1dd25co{width:100%;height:100%;object-fit:cover}.joinButton.svelte-1dd25co.svelte-1dd25co{position:absolute;float:inline-start;bottom:5%;width:300px;height:35px;border-radius:5px;border:none;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s}.joinButton.svelte-1dd25co.svelte-1dd25co:hover{transform:scale(1.05)}.joinButton.svelte-1dd25co.svelte-1dd25co:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.courseTxt.svelte-1dd25co.svelte-1dd25co{color:#2e3b6f;width:60%;height:auto;background-color:transparent;margin:-320px 0 0 320px ;position:relative;font-family:"Tajawal"}.videoSection.svelte-1dd25co.svelte-1dd25co{width:100%;background-color:#e6e7ee;height:auto;position:relative;margin:40px 0 40px 0;display:flex;align-items:center;flex-direction:column}.videoCon.svelte-1dd25co.svelte-1dd25co{position:relative;width:70%;margin-bottom:20px}.video-wrapper.svelte-1dd25co.svelte-1dd25co{position:relative;padding-bottom:56.25%;overflow:hidden;background-color:#000}.video-wrapper.svelte-1dd25co iframe.svelte-1dd25co{position:absolute;top:0;left:0;width:100%;height:100%}.closeButt.svelte-1dd25co.svelte-1dd25co{width:40px;height:40px;border-radius:40px;border:none;color:#2e3b6f;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;font-size:large;font-weight:bolder;margin-top:10px}.closeButt.svelte-1dd25co.svelte-1dd25co:hover{transform:scale(1.05)}.closeButt.svelte-1dd25co.svelte-1dd25co:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.joinedBtn.svelte-1dd25co.svelte-1dd25co{position:absolute;float:inline-start;bottom:5%;width:300px;height:35px;border-radius:5px;border:none;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s}',
  map: null
};
const CourseData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fetched = true } = $$props;
  let { func } = $$props;
  let { title } = $$props;
  let { duration } = $$props;
  let { description } = $$props;
  let { src } = $$props;
  let { c = false } = $$props;
  let { ID } = $$props;
  let { onSize } = $$props;
  let { courseData = [] } = $$props;
  let lectures = [];
  createEventDispatcher();
  if ($$props.fetched === void 0 && $$bindings.fetched && fetched !== void 0)
    $$bindings.fetched(fetched);
  if ($$props.func === void 0 && $$bindings.func && func !== void 0)
    $$bindings.func(func);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.c === void 0 && $$bindings.c && c !== void 0)
    $$bindings.c(c);
  if ($$props.ID === void 0 && $$bindings.ID && ID !== void 0)
    $$bindings.ID(ID);
  if ($$props.onSize === void 0 && $$bindings.onSize && onSize !== void 0)
    $$bindings.onSize(onSize);
  if ($$props.courseData === void 0 && $$bindings.courseData && courseData !== void 0)
    $$bindings.courseData(courseData);
  $$result.css.add(css);
  return `   <div class="course-container svelte-1dd25co"><div style="width: 80vw;position:relative; left:-50px; ">${``}</div>  <div class="courseSection svelte-1dd25co"><div class="course svelte-1dd25co"><div class="courseImg svelte-1dd25co"><img${add_attribute("src", src, 0)} alt="" class="svelte-1dd25co"></div> <button class="${escape(null_to_empty("joinButton"), true) + " svelte-1dd25co"}" ${""}>${escape("Join")}</button> <div class="courseTxt svelte-1dd25co"><h2>${escape(title)}</h2> <!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></div></div></div> <div class="row svelte-1dd25co" style="display: flex; justify-content: center; width: 100%; align-items: center; gap: 10px;margin-top:90px;"><div class="${escape(null_to_empty("car selected"), true) + " svelte-1dd25co"}" style="display: flex;flex-direction:column;justify-content: center;align-items: center;width:200px;"><img src="/cr.png" width="60"> <div style="font-size: 20px;font-weight:bold;color:#2e3b6f" data-svelte-h="svelte-12nlf5p">Lectures</div></div> <div class="${escape(null_to_empty("car"), true) + " svelte-1dd25co"}" style="display: flex;flex-direction:column;justify-content: center;align-items: center;width:200px;"><img src="/read.png" width="60"> <div style="font-size: 20px;font-weight:bold;color:#2e3b6f" data-svelte-h="svelte-1ubbrir">Resources</div></div> <div class="${escape(null_to_empty("car"), true) + " svelte-1dd25co"}" style="display: flex;flex-direction:column;justify-content: center;align-items: center;width:200px;"><img src="/pf.png" width="60"> <div style="font-size: 20px;font-weight:bold;color:#2e3b6f" data-svelte-h="svelte-1srybnk">Exams</div></div></div>  ${``} <div style="width: 80%; overflow-y: visible;margin-top:50px;">${`${each(lectures, (i, index) => {
    return `<div class="row svelte-1dd25co" style="align-items: center;"><div>${escape(index)}</div> <div class="row car svelte-1dd25co" style="width: 100%; height: 80px; margin: 10px;justify-content:space-between;align-items: center;"><div class="row svelte-1dd25co" style=""><img src="/Logo.png" width="70" height="70"> <div>${escape(i.title)}</div></div> <img src="/play.png" width="30"></div> </div>`;
  })}`}</div> </div>`;
});

export { CourseData as C };
//# sourceMappingURL=CourseData-BOZqAlbz.js.map
