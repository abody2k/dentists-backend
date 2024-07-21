import { c as create_ssr_component, o as onDestroy, e as escape } from './ssr-JWmjUSZd.js';

/* empty css                                      */
const css = {
  code: ".main-example.svelte-6br8wo.svelte-6br8wo{margin:0 auto;width:355px;text-align:center}.main-example.svelte-6br8wo .countdown-container.svelte-6br8wo{height:130px}.main-example.svelte-6br8wo .time.svelte-6br8wo{border-radius:5px;box-shadow:0 0 10px 0 rgba(0,0,0,0.5);display:inline-block;text-align:center;position:relative;height:95px;width:65px;-ms-perspective:479px;-o-perspective:479px;perspective:479px;backface-visibility:hidden;transform:translateZ(0);transform:translate3d(0,0,0)}.main-example.svelte-6br8wo .count.svelte-6br8wo{background:#202020;color:#f8f8f8;display:block;font-family:'Oswald', sans-serif;font-size:2em;line-height:2.4em;overflow:hidden;position:absolute;text-align:center;text-shadow:0 0 10px rgba(0, 0, 0, 0.8);top:0;width:100%;transform:translateZ(0);transform-style:flat}.main-example.svelte-6br8wo .count.top.svelte-6br8wo{border-top:1px solid rgba(255,255,255,0.2);border-bottom:1px solid rgba(255,255,255,0.1);border-radius:5px 5px 0 0;height:50%;transform-origin:50% 100%}.main-example.svelte-6br8wo .count.bottom.svelte-6br8wo{background-image:linear-gradient(rgba(255,255,255,0.1), transparent);background-image:-o-linear-gradient(rgba(255,255,255,0.1), transparent);border-top:1px solid #000;border-bottom:1px solid #000;border-radius:0 0 5px 5px;line-height:0;height:50%;top:50%;transform-origin:50% 0}.main-example.svelte-6br8wo .label.svelte-6br8wo{font-size:normal;margin-top:5px;display:block;position:absolute;top:95px;width:100%}.main-example.svelte-6br8wo .count.curr.top.svelte-6br8wo{transform:rotateX(0deg);z-index:3}.main-example.svelte-6br8wo .count.next.bottom.svelte-6br8wo{transform:rotateX(90deg);z-index:2}.main-example.svelte-6br8wo .flip .count.curr.top.svelte-6br8wo{transition:all 250ms ease-in-out;transform:rotateX(-90deg)}.main-example.svelte-6br8wo .flip .count.next.bottom.svelte-6br8wo{transition:all 250ms ease-in-out 250ms;transform:rotateX(0deg)}.main-example.svelte-6br8wo.svelte-6br8wo{width:100%}.main-example.svelte-6br8wo .countdown-container.svelte-6br8wo{height:100px}.main-example.svelte-6br8wo .time.svelte-6br8wo{height:70px;width:48px}.main-example.svelte-6br8wo .count.svelte-6br8wo{font-size:1.5em;line-height:70px}.main-example.svelte-6br8wo .label.svelte-6br8wo{font-size:0.8em;top:72px}",
  map: null
};
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let days;
  let hours;
  let hoursNext;
  let minutes;
  let minutesNext;
  let seconds;
  let secondsNext;
  let { end } = $$props;
  let counterID;
  onDestroy(() => {
    console.log(counterID);
    console.log("DESTROYED");
    clearInterval(counterID);
  });
  if ($$props.end === void 0 && $$bindings.end && end !== void 0) $$bindings.end(end);
  $$result.css.add(css);
  return `<div style="display: flex; flex-direction: row; gap: 5px; /* justify-content: space-evenly; */ align-items: end; width: fit-content; margin: 0 0 0 10px;"><div class="main-example svelte-6br8wo"><div class="countdown-container svelte-6br8wo" data-timer="2030/09/05" id="main-example4"><div class="time days svelte-6br8wo"><span class="count curr top svelte-6br8wo">${escape(days)}</span> <span class="count next top svelte-6br8wo">${escape(days)}</span> <span class="count next bottom svelte-6br8wo">${escape(days)}</span> <span class="count curr bottom svelte-6br8wo">${escape(days)}</span> <span class="label svelte-6br8wo" data-svelte-h="svelte-1r0ma64">days</span></div></div></div> <div class="main-example svelte-6br8wo"><div class="countdown-container svelte-6br8wo" data-timer="2030/09/05" id="main-example3"><div class="time hours svelte-6br8wo"><span class="count curr top svelte-6br8wo">${escape(hours)}</span> <span class="count next top svelte-6br8wo">${escape(hoursNext)}</span> <span class="count next bottom svelte-6br8wo">${escape(hoursNext)}</span> <span class="count curr bottom svelte-6br8wo">${escape(hours)}</span> <span class="label svelte-6br8wo" data-svelte-h="svelte-7ag6lq">hours</span></div></div></div> <div class="main-example svelte-6br8wo"><div class="countdown-container svelte-6br8wo" data-timer="2030/09/05" id="main-example2"><div class="time minutes svelte-6br8wo"><span class="count curr top svelte-6br8wo">${escape(minutes)}</span> <span class="count next top svelte-6br8wo">${escape(minutesNext)}</span> <span class="count next bottom svelte-6br8wo">${escape(minutesNext)}</span> <span class="count curr bottom svelte-6br8wo">${escape(minutes)}</span> <span class="label svelte-6br8wo" data-svelte-h="svelte-1e4jtis">minutes</span></div></div></div> <div class="main-example svelte-6br8wo"><div class="countdown-container svelte-6br8wo" data-timer="2030/09/05" id="main-example"><div class="time seconds svelte-6br8wo"><span class="count curr top svelte-6br8wo">${escape(seconds)}</span> <span class="count next top svelte-6br8wo">${escape(secondsNext)}</span> <span class="count next bottom svelte-6br8wo">${escape(secondsNext)}</span> <span class="count curr bottom svelte-6br8wo">${escape(seconds)}</span> <span class="label svelte-6br8wo" data-svelte-h="svelte-pa5udk">seconds</span></div></div></div></div>`;
});

export { Counter as C };
//# sourceMappingURL=Counter-CqonFETi.js.map
