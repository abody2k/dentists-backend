import { c as create_ssr_component } from './ssr-JWmjUSZd.js';

/* empty css                                                 */
const css = {
  code: "#msg.svelte-7lyy3y{border-radius:7px;padding:10px;position:fixed;top:10px;width:90%;margin:auto;margin-top:10px;z-index:2000000;right:5%}",
  map: null
};
const NotificationBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = 1 } = $$props;
  let { msg = "hola over there" } = $$props;
  let { color = "white" } = $$props;
  let { backgroundColor = "tomato" } = $$props;
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.msg === void 0 && $$bindings.msg && msg !== void 0) $$bindings.msg(msg);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0) $$bindings.backgroundColor(backgroundColor);
  $$result.css.add(css);
  return `${``}`;
});

export { NotificationBubble as default };
//# sourceMappingURL=NotificationBubble-9y2HSf0k.js.map
