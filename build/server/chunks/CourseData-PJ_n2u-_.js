import { c as create_ssr_component, j as createEventDispatcher, v as validate_component, d as add_attribute, e as escape, h as null_to_empty } from './ssr-CggYz5VK.js';
import { C as Counter } from './Counter-D-ApLB-f.js';

/* empty css                                          */
/* empty css                                         */
const css = {
  code: '.course-container.svelte-mdvnvq.svelte-mdvnvq{display:flex;flex-direction:column;align-items:center;margin:20px}button.svelte-mdvnvq.svelte-mdvnvq:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff\r\n}.car.svelte-mdvnvq.svelte-mdvnvq{background:#E6E7EE;border-radius:10px;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;padding:10px;position:relative;top:0px;transition:all 0.3s ease-in-out }.car.selected.svelte-mdvnvq.svelte-mdvnvq{top:0px;background:#E6E7EE;border-radius:10px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;padding:10px}.car.selected.svelte-mdvnvq.svelte-mdvnvq:hover{top:-10px}.car.svelte-mdvnvq.svelte-mdvnvq:hover{top:-10px;background-color:#f5f6ff}.ccr.svelte-mdvnvq.svelte-mdvnvq{background:#E6E7EE;border-radius:10px;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;padding:10px;position:relative;top:0px;transition:all 1s ease-in-out }.row.svelte-mdvnvq.svelte-mdvnvq{display:flex;flex-direction:row}.column.svelte-mdvnvq.svelte-mdvnvq{display:flex;flex-direction:column}.courseSection.svelte-mdvnvq.svelte-mdvnvq{width:100%;height:auto;background-color:#e6e7ee;display:flex;align-items:center;justify-content:center;padding:20px  0 20px 0 ;position:relative;top:100px;margin-bottom:109px}.course.svelte-mdvnvq.svelte-mdvnvq{width:70%;min-height:400px;background-color:#e6e7ee;position:relative;padding:25px;border-radius:10px;box-shadow:inset -3px -3px 8px 4px #ffffffe6,inset 3px 3px 8px 4px #00000040}.courseImg.svelte-mdvnvq.svelte-mdvnvq{width:300px;height:300px;background-color:gray;border-radius:10px;overflow:hidden}.courseImg.svelte-mdvnvq img.svelte-mdvnvq{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.joinButton.svelte-mdvnvq.svelte-mdvnvq{position:absolute;float:inline-start;bottom:5%;width:300px;height:35px;border-radius:5px;border:none;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s}.joinButton.svelte-mdvnvq.svelte-mdvnvq:hover{transform:scale(1.05)}.joinButton.svelte-mdvnvq.svelte-mdvnvq:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.courseTxt.svelte-mdvnvq.svelte-mdvnvq{color:#2e3b6f;width:60%;height:auto;background-color:transparent;margin:-320px 0 0 320px ;position:relative;font-family:"Tajawal"}.videoSection.svelte-mdvnvq.svelte-mdvnvq{width:100%;background-color:#e6e7ee;height:auto;position:relative;margin:40px 0 40px 0;display:flex;align-items:center;flex-direction:column}.videoCon.svelte-mdvnvq.svelte-mdvnvq{position:relative;width:70%;margin-bottom:20px}.video-wrapper.svelte-mdvnvq.svelte-mdvnvq{position:relative;padding-bottom:56.25%;overflow:hidden;background-color:#000}.video-wrapper.svelte-mdvnvq iframe.svelte-mdvnvq{position:absolute;top:0;left:0;width:100%;height:100%}.closeButt.svelte-mdvnvq.svelte-mdvnvq{width:40px;height:40px;border-radius:40px;border:none;color:#2e3b6f;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;font-size:large;font-weight:bolder;margin-top:10px}.closeButt.svelte-mdvnvq.svelte-mdvnvq:hover{transform:scale(1.05)}.closeButt.svelte-mdvnvq.svelte-mdvnvq:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.joinedBtn.svelte-mdvnvq.svelte-mdvnvq{position:absolute;float:inline-start;bottom:5%;width:300px;height:35px;border-radius:5px;border:none;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s}.car.svelte-mdvnvq.svelte-mdvnvq{background:#E6E7EE;border-radius:10px;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;padding:10px;position:relative;top:0px;transition:all 0.3s ease-in-out }.car.selected.svelte-mdvnvq.svelte-mdvnvq{top:0px;background:#E6E7EE;border-radius:10px;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;padding:10px}.car.selected.svelte-mdvnvq.svelte-mdvnvq:hover{top:-10px}.car.svelte-mdvnvq.svelte-mdvnvq:hover{top:-10px;background-color:#f5f6ff}.ccr.svelte-mdvnvq.svelte-mdvnvq{background:#E6E7EE;border-radius:10px;box-shadow:2px 2px 5px #00000040, -2px -2px 5px #fff;padding:10px;position:relative;top:0px;transition:all 1s ease-in-out }.row.svelte-mdvnvq.svelte-mdvnvq{display:flex;flex-direction:row}.column.svelte-mdvnvq.svelte-mdvnvq{display:flex;flex-direction:column}.courseSection.svelte-mdvnvq.svelte-mdvnvq{width:100%;height:auto;background-color:#e6e7ee;display:flex;align-items:center;justify-content:center;padding:20px  0 20px 0 ;position:relative;top:100px;margin-bottom:109px}.course.svelte-mdvnvq.svelte-mdvnvq{width:70%;min-height:400px;background-color:#e6e7ee;position:relative;padding:25px;border-radius:10px;box-shadow:inset -3px -3px 8px 4px #ffffffe6,inset 3px 3px 8px 4px #00000040}.courseImg.svelte-mdvnvq.svelte-mdvnvq{width:300px;height:300px;background-color:gray;border-radius:10px;overflow:hidden}.courseImg.svelte-mdvnvq img.svelte-mdvnvq{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.joinButton.svelte-mdvnvq.svelte-mdvnvq{position:absolute;float:inline-start;bottom:5%;width:300px;height:35px;border-radius:5px;border:none;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s}.joinButton.svelte-mdvnvq.svelte-mdvnvq:hover{transform:scale(1.05)}.joinButton.svelte-mdvnvq.svelte-mdvnvq:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.courseTxt.svelte-mdvnvq.svelte-mdvnvq{color:#2e3b6f;width:60%;height:auto;background-color:transparent;margin:-320px 0 0 320px ;position:relative;font-family:"Tajawal"}.videoSection.svelte-mdvnvq.svelte-mdvnvq{width:100%;background-color:#e6e7ee;height:auto;position:relative;margin:40px 0 40px 0;display:flex;align-items:center;flex-direction:column}.videoCon.svelte-mdvnvq.svelte-mdvnvq{position:relative;width:70%;margin-bottom:20px}.video-wrapper.svelte-mdvnvq.svelte-mdvnvq{position:relative;padding-bottom:56.25%;overflow:hidden;background-color:#000}.video-wrapper.svelte-mdvnvq iframe.svelte-mdvnvq{position:absolute;top:0;left:0;width:100%;height:100%}.closeButt.svelte-mdvnvq.svelte-mdvnvq{width:40px;height:40px;border-radius:40px;border:none;color:#2e3b6f;cursor:pointer;box-shadow:2px 2px 5px #00000040,-2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s;font-size:large;font-weight:bolder;margin-top:10px}.closeButt.svelte-mdvnvq.svelte-mdvnvq:hover{transform:scale(1.05)}.closeButt.svelte-mdvnvq.svelte-mdvnvq:active{box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff}.joinedBtn.svelte-mdvnvq.svelte-mdvnvq{position:absolute;float:inline-start;bottom:5%;width:300px;height:35px;border-radius:5px;border:none;color:#2e3b6f;font-weight:700;font-size:18px;cursor:pointer;box-shadow:inset 2px 2px 5px #00000040,inset -2px -2px 5px #fff;background-color:#e6e7ee;transition:all 0.3s}.level.svelte-mdvnvq.svelte-mdvnvq{width:80%;height:30px;background-color:transparent;border-bottom:2px solid #2E3B6F;margin:30px 10% 30px 10%;display:flex;justify-content:space-between;align-items:center}.level.svelte-mdvnvq.svelte-mdvnvq:hover{cursor:pointer;background-color:#D2D6EF;border-radius:5px}.level.svelte-mdvnvq.svelte-mdvnvq:active{background-color:#D2D6EF;border-radius:5px}',
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
  let { expDate } = $$props;
  let { courseData = [] } = $$props;
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
  if ($$props.expDate === void 0 && $$bindings.expDate && expDate !== void 0)
    $$bindings.expDate(expDate);
  if ($$props.courseData === void 0 && $$bindings.courseData && courseData !== void 0)
    $$bindings.courseData(courseData);
  $$result.css.add(css);
  return `   <div class="course-container svelte-mdvnvq"><div style="width: 80vw;position:relative; left:-50px; ">${``}</div>  ${/* @__PURE__ */ new Date() < new Date(expDate) ? `<div class="timerContianer"><div style="line-height: 8px;font-family: Jost;color: #0264e4;" data-svelte-h="svelte-oj3dvk"><h2>TIME IS TICKING!</h2> <h3><span style="color: rgb(243, 95, 95);">JOIN US NOW</span> TO GUARANTEE YOUR SPOT!</h3></div> ${validate_component(Counter, "Counter").$$render(
    $$result,
    {
      end: expDate.split("T")[0] + " " + expDate.split("T")[1].split(".")[0]
    },
    {},
    {}
  )} </div>` : ``} <div class="courseSection svelte-mdvnvq"><div class="course svelte-mdvnvq"><div class="courseImg svelte-mdvnvq"><img${add_attribute("src", src, 0)} alt="" style="object-fit: cover;" class="svelte-mdvnvq"></div> <button class="${escape(null_to_empty("joinButton"), true) + " svelte-mdvnvq"}" ${""}>${escape("Join")}</button> <div class="courseTxt svelte-mdvnvq"><h2>${escape(title)}</h2> <!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></div></div></div> ${``}  ${``} ${``} </div>`;
});

export { CourseData as C };
//# sourceMappingURL=CourseData-PJ_n2u-_.js.map
