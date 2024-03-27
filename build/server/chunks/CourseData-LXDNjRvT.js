import { c as create_ssr_component, i as createEventDispatcher, d as add_attribute, e as escape, j as null_to_empty, f as each } from './ssr-C5Pny6Bf.js';

/* empty css                                   */
/* empty css                                         */
const css = {
  code: ".course-container.svelte-1mmxy4b.svelte-1mmxy4b{display:flex;flex-direction:column;align-items:center;margin:20px}.neumorphic-box.svelte-1mmxy4b.svelte-1mmxy4b{margin:20px;padding:20px;width:calc(80vw - 20px);border-radius:13px;background:#e8e8e8;box-shadow:inset 5px 5px 12px #808080,\r\n            inset -5px -5px 12px #ffffff}.course-details.svelte-1mmxy4b.svelte-1mmxy4b{display:flex;justify-content:space-between;align-items:flex-start;width:100%}.course-info.svelte-1mmxy4b.svelte-1mmxy4b{width:60%;display:flex;flex-direction:row;justify-content:space-around;gap:40px}.info-column.svelte-1mmxy4b.svelte-1mmxy4b{display:flex;flex-direction:column;justify-content:space-around;margin-right:20px}.title.svelte-1mmxy4b.svelte-1mmxy4b{font-size:18px;font-weight:bold;color:#2e3b6f;margin-bottom:5px}.text.svelte-1mmxy4b.svelte-1mmxy4b{font-size:14px;color:black;margin-bottom:10px}.lecture-duration-row.svelte-1mmxy4b.svelte-1mmxy4b{display:flex;flex-direction:row;justify-content:center;gap:150px;align-items:center}.number-of-lectures.svelte-1mmxy4b.svelte-1mmxy4b,.course-duration.svelte-1mmxy4b.svelte-1mmxy4b{font-size:14px;color:#2e3b6f}.join-button.svelte-1mmxy4b.svelte-1mmxy4b{color:#090909;padding:0.7em 1.7em;font-size:18px;border-radius:0.5em;background:#e8e8e8;cursor:pointer;border:1px solid #e8e8e8;transition:all 0.3s;box-shadow:6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;margin-top:30px;margin-left:45%}button.svelte-1mmxy4b.svelte-1mmxy4b:active{color:#666;box-shadow:inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff}.joined-button.svelte-1mmxy4b.svelte-1mmxy4b{color:green;padding:0.7em 1.7em;border-radius:0px;background:#e8e8e8;box-shadow:inset 5px 5px 10px #828282,\r\n            inset -5px -5px 10px #ffffff}.image-list.svelte-1mmxy4b.svelte-1mmxy4b{list-style:none;padding:0;margin:0;flex-direction:column;align-self:baseline;width:100%;height:fit-content;scroll-behavior:smooth}.image-list.svelte-1mmxy4b.svelte-1mmxy4b::-webkit-scrollbar-track{display:none}.image-list.svelte-1mmxy4b.svelte-1mmxy4b::-webkit-scrollbar{width:0.5em}.image-list.svelte-1mmxy4b.svelte-1mmxy4b::-webkit-scrollbar-thumb{background-color:#888}.image-list.svelte-1mmxy4b.svelte-1mmxy4b::-webkit-scrollbar-track{background:transparent}.image-list-item.svelte-1mmxy4b.svelte-1mmxy4b{margin:10px;text-align:center}.image-list-item.svelte-1mmxy4b img.svelte-1mmxy4b{width:200px;height:130px;border-radius:5px}.image-title.svelte-1mmxy4b.svelte-1mmxy4b{position:absolute;left:100;font-size:20px;font-weight:bolder;color:#2e3b6f;margin-top:5px}#img.svelte-1mmxy4b.svelte-1mmxy4b{width:240px;height:240px;border-radius:10px}",
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
  return `   <div class="course-container svelte-1mmxy4b"><div style="width: 80vw;position:relative; left:-50px; ">${``}</div> <div class="neumorphic-box svelte-1mmxy4b"><div class="course-details svelte-1mmxy4b"><div class="course-info svelte-1mmxy4b"><img${add_attribute("src", src, 0)} id="img" class="svelte-1mmxy4b"> <div class="info-column svelte-1mmxy4b"><div class="title svelte-1mmxy4b">${escape(title)}</div> <div class="text svelte-1mmxy4b">${escape(description)}</div> <div class="title svelte-1mmxy4b" data-svelte-h="svelte-1gtglab">Requirements</div> <div class="text svelte-1mmxy4b" data-svelte-h="svelte-12eegcr">Course requirements go here.</div></div></div></div> <div class="info-column lecture-duration-row svelte-1mmxy4b"><div class="number-of-lectures svelte-1mmxy4b">Lectures : ${escape(courseData.length)}</div> <div class="course-duration svelte-1mmxy4b">${escape(duration)}</div></div> ${`<div style="width: 170px;margin:auto;margin-top:39px;text-align:center;border-radius:4px;" class="${escape(null_to_empty("joined-button"), true) + " svelte-1mmxy4b"}" data-svelte-h="svelte-13qyw1b">Joined</div>`}</div> ${fetched && joined ? `<ol class="image-list svelte-1mmxy4b">${each(courseData, ({ id, imageUrl, title: title2, videoUrl }, index) => {
    return `<li class="image-list-item svelte-1mmxy4b"${add_attribute("key", id, 0)}><div style="display: flex;position:relative;left:130px;"><span style="font-size: 30px; padding-top:40px;padding-right:20px; width:20px">${escape(index)}</span> <img${add_attribute("src", imageUrl, 0)}${add_attribute("alt", title2, 0)} class="svelte-1mmxy4b"> <span class="image-title svelte-1mmxy4b" style="position:relative;right:-10px;top:10px">${escape(title2)}</span></div> ${selectedVideo == videoUrl && selectedVideoPosition == index ? `  <div style="width: fit-content;display:flex;justify-content:center;position:absoulte;right:100px;" data-svelte-h="svelte-1huttua"><iframe src="https://drive.google.com/file/d/1UtPNyHcLXH0u77mgM75ihcdyUyWbg0M0/preview" width="90%" height="90%" allow="autoplay"></iframe> </div>` : ``} </li>`;
  })}</ol>` : ``} </div>`;
});

export { CourseData as C };
//# sourceMappingURL=CourseData-LXDNjRvT.js.map
