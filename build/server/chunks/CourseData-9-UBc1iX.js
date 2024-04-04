import { c as create_ssr_component, i as createEventDispatcher, f as add_attribute, e as escape, j as null_to_empty, d as each } from './ssr-CZ3Mxc3I.js';

/* empty css                                   */
/* empty css                                          */
/* empty css                                         */
const css = {
  code: ".course-container.svelte-1pjusbp.svelte-1pjusbp{display:flex;flex-direction:column;align-items:center;margin:20px}.neumorphic-box.svelte-1pjusbp.svelte-1pjusbp{margin:20px;padding:20px;width:calc(80vw - 20px);border-radius:13px;box-shadow:inset 5px 5px 12px #808080,\r\n            inset -5px -5px 12px #ffffff}.course-details.svelte-1pjusbp.svelte-1pjusbp{display:flex;justify-content:space-between;align-items:flex-start;width:100%}.course-info.svelte-1pjusbp.svelte-1pjusbp{width:60%;display:flex;flex-direction:row;justify-content:space-around;gap:40px}.info-column.svelte-1pjusbp.svelte-1pjusbp{display:flex;flex-direction:column;justify-content:space-around;margin-right:20px}.title.svelte-1pjusbp.svelte-1pjusbp{font-size:18px;font-weight:bold;color:#2e3b6f;margin-bottom:5px}.text.svelte-1pjusbp.svelte-1pjusbp{font-size:14px;color:black;margin-bottom:10px}.lecture-duration-row.svelte-1pjusbp.svelte-1pjusbp{display:flex;flex-direction:row;justify-content:center;gap:150px;align-items:center}.number-of-lectures.svelte-1pjusbp.svelte-1pjusbp,.course-duration.svelte-1pjusbp.svelte-1pjusbp{font-size:14px;color:#2e3b6f}.join-button.svelte-1pjusbp.svelte-1pjusbp{color:#090909;padding:0.7em 1.7em;font-size:18px;border-radius:0.5em;background:#e8e8e8;cursor:pointer;border:1px solid #e8e8e8;transition:all 0.3s;box-shadow:6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;margin-top:30px;margin-left:45%}button.svelte-1pjusbp.svelte-1pjusbp:active{color:#666;box-shadow:inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff}.joined-button.svelte-1pjusbp.svelte-1pjusbp{color:green;padding:0.7em 1.7em;border-radius:0px;background:#e8e8e8;box-shadow:inset 5px 5px 10px #828282,\r\n            inset -5px -5px 10px #ffffff}.image-list.svelte-1pjusbp.svelte-1pjusbp{list-style:none;padding:0;margin:0;flex-direction:column;align-self:baseline;width:100%;height:fit-content;scroll-behavior:smooth}.image-list.svelte-1pjusbp.svelte-1pjusbp::-webkit-scrollbar-track{display:none}.image-list.svelte-1pjusbp.svelte-1pjusbp::-webkit-scrollbar{width:0.5em}.image-list.svelte-1pjusbp.svelte-1pjusbp::-webkit-scrollbar-thumb{background-color:#888}.image-list.svelte-1pjusbp.svelte-1pjusbp::-webkit-scrollbar-track{background:transparent}.image-list-item.svelte-1pjusbp.svelte-1pjusbp{margin:10px;text-align:center}.image-list-item.svelte-1pjusbp img.svelte-1pjusbp{width:200px;height:130px;border-radius:5px}.image-title.svelte-1pjusbp.svelte-1pjusbp{position:absolute;left:100;font-size:20px;font-weight:bolder;color:#2e3b6f;margin-top:5px}#img.svelte-1pjusbp.svelte-1pjusbp{width:240px;height:240px;border-radius:10px}.car.svelte-1pjusbp.svelte-1pjusbp{background:#E6E7EE;border-radius:10px;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;padding:10px;position:relative;top:0px;transition:all 1s ease-in-out }.car.selected.svelte-1pjusbp.svelte-1pjusbp{background:#E6E7EE;border-radius:10px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;padding:10px;top:-70px}.car.svelte-1pjusbp.svelte-1pjusbp:hover{background-color:#f5f6ff}.row.svelte-1pjusbp.svelte-1pjusbp{display:flex;flex-direction:row}.column.svelte-1pjusbp.svelte-1pjusbp{display:flex;flex-direction:column}",
  map: null
};
const CourseData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fetched = true } = $$props;
  let joined = true;
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
  let selectedVideo = null;
  let selectedVideoPosition = null;
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
  return `   <div class="course-container svelte-1pjusbp"><div style="width: 80vw;position:relative; left:-50px; ">${``}</div> <div class="neumorphic-box svelte-1pjusbp"><div class="course-details svelte-1pjusbp"><div class="course-info svelte-1pjusbp"><img${add_attribute("src", src, 0)} id="img" class="svelte-1pjusbp"> <div class="info-column svelte-1pjusbp"><div class="title svelte-1pjusbp">${escape(title)}</div> <div class="text svelte-1pjusbp">${escape(description)}</div> <div class="title svelte-1pjusbp" data-svelte-h="svelte-1gtglab">Requirements</div> <div class="text svelte-1pjusbp" data-svelte-h="svelte-12eegcr">Course requirements go here.</div></div></div></div> <div class="info-column lecture-duration-row svelte-1pjusbp"><div class="number-of-lectures svelte-1pjusbp">Lectures : ${escape(courseData.length)}</div> <div class="course-duration svelte-1pjusbp">${escape("شهر" + duration.split(":")[1])}</div> <div class="course-duration svelte-1pjusbp">${escape("سنة" + duration.split(":")[0])}</div></div> ${`<div style="width: 170px;margin:auto;margin-top:39px;text-align:center;border-radius:4px;" class="${escape(null_to_empty("joined-button"), true) + " svelte-1pjusbp"}" data-svelte-h="svelte-13qyw1b">Joined</div>`}</div> <div class="row svelte-1pjusbp" style="display: flex; justify-content: center; width: 100%; align-items: center; gap: 10px;margin-top:90px;"><div class="${escape(null_to_empty("car selected"), true) + " svelte-1pjusbp"}" style="display: flex;flex-direction:column;justify-content: center;align-items: center;width:200px;"><img src="/cr.png" width="60"> <div style="font-size: 20px;font-weight:bold;color:#2e3b6f" data-svelte-h="svelte-12nlf5p">Lectures</div></div> <div class="${escape(null_to_empty("car"), true) + " svelte-1pjusbp"}" style="display: flex;flex-direction:column;justify-content: center;align-items: center;width:200px;"><img src="/read.png" width="60"> <div style="font-size: 20px;font-weight:bold;color:#2e3b6f" data-svelte-h="svelte-1ubbrir">Resources</div></div> <div class="${escape(null_to_empty("car"), true) + " svelte-1pjusbp"}" style="display: flex;flex-direction:column;justify-content: center;align-items: center;width:200px;"><img src="/pf.png" width="60"> <div style="font-size: 20px;font-weight:bold;color:#2e3b6f" data-svelte-h="svelte-1srybnk">Exams</div></div></div>  ${``} <div style="width: 80%; overflow-y: visible;margin-top:50px;">${`${each(lectures, (i, index) => {
    return `<div class="row svelte-1pjusbp" style="align-items: center;"><div>${escape(index)}</div> <div class="row car svelte-1pjusbp" style="width: 100%; height: 80px; margin: 10px;justify-content:space-between;align-items: center;"><div class="row svelte-1pjusbp" style=""><img src="/Logo.png" width="70" height="70"> <div>${escape(i.title)}</div></div> <img src="/play.png" width="30"></div> </div>`;
  })}`}</div> ${fetched && joined ? `<ol class="image-list svelte-1pjusbp">${each(courseData, ({ id, imageUrl, title: title2, videoUrl }, index) => {
    return `<li class="image-list-item svelte-1pjusbp"${add_attribute("key", id, 0)}><div style="display: flex;position:relative;left:130px;"><span style="font-size: 30px; padding-top:40px;padding-right:20px; width:20px">${escape(index)}</span> <img${add_attribute("src", imageUrl, 0)}${add_attribute("alt", title2, 0)} class="svelte-1pjusbp"> <span class="image-title svelte-1pjusbp" style="position:relative;right:-10px;top:10px">${escape(title2)}</span></div> ${selectedVideo == videoUrl && selectedVideoPosition == index ? `  <div style="width: fit-content;display:flex;justify-content:center;position:absoulte;right:100px;" data-svelte-h="svelte-1huttua"><iframe src="https://drive.google.com/file/d/1UtPNyHcLXH0u77mgM75ihcdyUyWbg0M0/preview" width="90%" height="90%" allow="autoplay"></iframe> </div>` : ``} </li>`;
  })}</ol>` : ``} </div>`;
});

export { CourseData as C };
//# sourceMappingURL=CourseData-9-UBc1iX.js.map
