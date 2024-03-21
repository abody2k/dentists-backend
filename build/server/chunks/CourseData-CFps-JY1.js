import { c as create_ssr_component, j as createEventDispatcher, d as add_attribute, e as escape, h as null_to_empty, f as each } from './ssr-CggYz5VK.js';

/* empty css                                         */
const css = {
  code: ".course-container.svelte-guqv65.svelte-guqv65{display:flex;flex-direction:column;align-items:center;margin:20px}.neumorphic-box.svelte-guqv65.svelte-guqv65{margin:20px;padding:20px;width:calc(80vw - 20px);border-radius:13px;background:#e8e8e8;box-shadow:inset 5px 5px 12px #808080,\r\n            inset -5px -5px 12px #ffffff}.path.svelte-guqv65.svelte-guqv65{margin-bottom:20px;text-align:left;width:100%;color:gold}.course-details.svelte-guqv65.svelte-guqv65{display:flex;justify-content:space-between;align-items:flex-start;width:100%}.course-info.svelte-guqv65.svelte-guqv65{width:60%;display:flex;flex-direction:row;justify-content:space-around;gap:40px}.info-column.svelte-guqv65.svelte-guqv65{display:flex;flex-direction:column;justify-content:space-around;margin-right:20px}.title.svelte-guqv65.svelte-guqv65{font-size:18px;font-weight:bold;color:navy;margin-bottom:5px}.text.svelte-guqv65.svelte-guqv65{font-size:14px;color:black;margin-bottom:10px}.lecture-duration-row.svelte-guqv65.svelte-guqv65{display:flex;flex-direction:row;justify-content:center;gap:150px;align-items:center}.number-of-lectures.svelte-guqv65.svelte-guqv65,.course-duration.svelte-guqv65.svelte-guqv65{font-size:14px;color:navy}.join-button.svelte-guqv65.svelte-guqv65{color:#090909;padding:0.7em 1.7em;font-size:18px;border-radius:0.5em;background:#e8e8e8;cursor:pointer;border:1px solid #e8e8e8;transition:all 0.3s;box-shadow:6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;margin-top:30px;margin-left:45%}button.svelte-guqv65.svelte-guqv65:active{color:#666;box-shadow:inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff}.joined-button.svelte-guqv65.svelte-guqv65{color:green;padding:0.7em 1.7em;border-radius:0px;background:#e8e8e8;box-shadow:inset 5px 5px 10px #828282,\r\n            inset -5px -5px 10px #ffffff}.image-list.svelte-guqv65.svelte-guqv65{list-style:none;padding:0;margin:0;flex-direction:column;align-self:baseline;width:100%;height:fit-content;scroll-behavior:smooth}.image-list.svelte-guqv65.svelte-guqv65::-webkit-scrollbar-track{display:none}.image-list.svelte-guqv65.svelte-guqv65::-webkit-scrollbar{width:0.5em}.image-list.svelte-guqv65.svelte-guqv65::-webkit-scrollbar-thumb{background-color:#888}.image-list.svelte-guqv65.svelte-guqv65::-webkit-scrollbar-track{background:transparent}.image-list-item.svelte-guqv65.svelte-guqv65{margin:10px;text-align:center}.image-list-item.svelte-guqv65 img.svelte-guqv65{width:200px;height:130px;border-radius:5px}.image-title.svelte-guqv65.svelte-guqv65{position:absolute;left:100;font-size:20px;font-weight:bolder;color:navy;margin-top:5px}.path.svelte-guqv65.svelte-guqv65{position:relative;left:40px;text-align:left;padding:10px;color:navy;border-radius:7px;background:#e8e8e8;box-shadow:inset 5px 5px 10px #c5c5c5,\r\n            inset -5px -5px 10px #ffffff}#img.svelte-guqv65.svelte-guqv65{width:240px;height:240px;border-radius:10px}",
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
  let { courseData = [] } = $$props;
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
  if ($$props.courseData === void 0 && $$bindings.courseData && courseData !== void 0)
    $$bindings.courseData(courseData);
  $$result.css.add(css);
  return `   <div class="course-container svelte-guqv65"><div style="width: 80vw;position:relative; left:-50px; " data-svelte-h="svelte-1vnd0hb"><div class="path svelte-guqv65">home &gt;&gt; courses &gt;&gt; course 0
        </div></div> <div class="neumorphic-box svelte-guqv65"><div class="course-details svelte-guqv65"><div class="course-info svelte-guqv65"><img${add_attribute("src", src, 0)} id="img" class="svelte-guqv65"> <div class="info-column svelte-guqv65"><div class="title svelte-guqv65">${escape(title)}</div> <div class="text svelte-guqv65">${escape(description)}</div> <div class="title svelte-guqv65" data-svelte-h="svelte-1gtglab">Requirements</div> <div class="text svelte-guqv65" data-svelte-h="svelte-12eegcr">Course requirements go here.</div></div></div></div> <div class="info-column lecture-duration-row svelte-guqv65"><div class="number-of-lectures svelte-guqv65">Lectures : ${escape(courseData.length)}</div> <div class="course-duration svelte-guqv65">${escape(duration)}</div></div> ${`<div style="width: 170px;margin:auto;margin-top:39px;text-align:center;border-radius:4px;" class="${escape(null_to_empty("joined-button"), true) + " svelte-guqv65"}" data-svelte-h="svelte-13qyw1b">Joined</div>`}</div> ${fetched && joined ? `<ol class="image-list svelte-guqv65">${each(courseData, ({ id, imageUrl, title: title2, videoUrl }, index) => {
    return `<li class="image-list-item svelte-guqv65"${add_attribute("key", id, 0)}><div style="display: flex;position:relative;left:130px;"><span style="font-size: 30px; padding-top:40px;padding-right:20px; width:20px">${escape(index)}</span> <img${add_attribute("src", imageUrl, 0)}${add_attribute("alt", title2, 0)} class="svelte-guqv65"> <span class="image-title svelte-guqv65" style="position:relative;right:-10px;top:10px">${escape(title2)}</span></div> ${selectedVideo == videoUrl && selectedVideoPosition == index ? `  <div style="width: fit-content;display:flex;justify-content:center;position:absoulte;right:100px;" data-svelte-h="svelte-1huttua"><iframe src="https://drive.google.com/file/d/1UtPNyHcLXH0u77mgM75ihcdyUyWbg0M0/preview" width="90%" height="90%" allow="autoplay"></iframe> </div>` : ``} </li>`;
  })}</ol>` : ``} </div>`;
});

export { CourseData as C };
//# sourceMappingURL=CourseData-CFps-JY1.js.map
