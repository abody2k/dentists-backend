import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape, b as subscribe, i as compute_slots } from './ssr-CggYz5VK.js';
import { B as ButtonChild } from './ButtonChild-TPo1PZ2N.js';
import { B as Button } from './Button-B3OUjNaN.js';
import { f as fetchData } from './not-BvNY88EQ.js';
import { d as defaultExtensions } from './default-TePYrQTA.js';
import { w as writable } from './index-DPZ-spl1.js';
import '@editorjs/editorjs';
import '@editorjs/header';
import '@editorjs/list';

const tipexEditor = writable();
const DefaultControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tipexEditor, $$unsubscribe_tipexEditor;
  $$unsubscribe_tipexEditor = subscribe(tipexEditor, (value) => $tipexEditor = value);
  $$unsubscribe_tipexEditor();
  return `${$tipexEditor ? `<div class="tipex-controller"><div class="tipex-basic-controller-wrapper"><button class="${[
    "tipex-edit-button tipex-button-extra tipex-button-rigid",
    $tipexEditor?.isActive("heading", { level: 1 }) ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1yba46j">H1</button> <button class="${[
    "tipex-edit-button tipex-button-extra tipex-button-rigid",
    $tipexEditor?.isActive("heading", { level: 2 }) ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1mfhi40">H2</button> <button class="${[
    "tipex-edit-button tipex-button-extra tipex-button-rigid",
    $tipexEditor?.isActive("paragraph") ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-197aya3"><iconify-icon icon="fa6-solid:paragraph"></iconify-icon></button> <button class="${[
    "tipex-edit-button tipex-button-extra tipex-button-rigid",
    $tipexEditor?.isActive("bold") ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1udff7g"><iconify-icon icon="fa6-solid:bold"></iconify-icon></button> <button class="${[
    "tipex-edit-button tipex-button-extra tipex-button-rigid",
    $tipexEditor?.isActive("italic") ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-kj76y7"><iconify-icon icon="fa6-solid:italic"></iconify-icon></button> <button class="${[
    "tipex-edit-button tipex-button-extra tipex-button-rigid",
    $tipexEditor?.isActive("code") ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-16flkhi"><iconify-icon icon="fa6-solid:code"></iconify-icon></button></div> ${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const LinkFloatingMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_tipexEditor;
  $$unsubscribe_tipexEditor = subscribe(tipexEditor, (value) => value);
  let { floatingMenuElement } = $$props;
  if ($$props.floatingMenuElement === void 0 && $$bindings.floatingMenuElement && floatingMenuElement !== void 0)
    $$bindings.floatingMenuElement(floatingMenuElement);
  $$unsubscribe_tipexEditor();
  return `<div class="tipex-floating-group" style="${"display: " + escape("none", true)}"${add_attribute("this", floatingMenuElement, 0)}><button type="button" class="tipex-floating-button" data-svelte-h="svelte-1wi00zu"><iconify-icon icon="fa6-solid:arrow-up-right-from-square"></iconify-icon></button> <button type="button" class="tipex-floating-button" data-svelte-h="svelte-g7t21t"><iconify-icon icon="fa6-solid:check"></iconify-icon></button> <button type="button" class="tipex-floating-button" data-svelte-h="svelte-6wubpg"><iconify-icon icon="fa6-solid:xmark"></iconify-icon></button></div>`;
});
const EditLinkMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tipexEditor, $$unsubscribe_tipexEditor;
  $$unsubscribe_tipexEditor = subscribe(tipexEditor, (value) => $tipexEditor = value);
  let { enableLinkEdit = false } = $$props;
  let linkInput;
  if ($$props.enableLinkEdit === void 0 && $$bindings.enableLinkEdit && enableLinkEdit !== void 0)
    $$bindings.enableLinkEdit(enableLinkEdit);
  $$unsubscribe_tipexEditor();
  return `<button class="${[
    "tipex-edit-button tipex-button-extra tipex-button-rigid",
    enableLinkEdit ? "active" : ""
  ].join(" ").trim()}"><iconify-icon${add_attribute("icon", enableLinkEdit ? "fa6-solid:xmark" : "fa6-solid:link", 0)}></iconify-icon></button> ${enableLinkEdit ? `<div class="tipex-link-edit-input-group"><input type="text" placeholder="Your link here"${add_attribute("value", $tipexEditor?.getAttributes("link").href || "", 0)}${add_attribute("this", linkInput, 0)}> <button class="tipex-edit-button tipex-button-extra tipex-button-free" type="button" data-svelte-h="svelte-cxauip">Save</button></div>` : ``}`;
});
const Utility = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_tipexEditor;
  $$unsubscribe_tipexEditor = subscribe(tipexEditor, (value) => value);
  let enableLinkEdit = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${!enableLinkEdit ? `<button type="button" class="tipex-edit-button tipex-button-extra tipex-button-rigid" data-svelte-h="svelte-ndhzt8"><iconify-icon icon="fa6-solid:copy"></iconify-icon></button> ${slots.default ? slots.default({}) : ``}` : ``} ${validate_component(EditLinkMenu, "EditLinkMenu").$$render(
      $$result,
      { enableLinkEdit },
      {
        enableLinkEdit: ($$value) => {
          enableLinkEdit = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_tipexEditor();
  return $$rendered;
});
const Tipex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let $$unsubscribe_tipexEditor;
  $$unsubscribe_tipexEditor = subscribe(tipexEditor, (value) => value);
  let floatingMenuElement;
  let tipexEditorElement;
  let { extensions = defaultExtensions } = $$props;
  let { floatingMenu = false } = $$props;
  let { displayDefaultControls = false } = $$props;
  let { onEditorCreate = () => {
  } } = $$props;
  let { onEditorDestroy = () => {
  } } = $$props;
  let { onEditorUpdate = () => {
  } } = $$props;
  let { htmlContent = "" } = $$props;
  let { className = "" } = $$props;
  let { style = "" } = $$props;
  let { focusOnEdit = true } = $$props;
  let editorsParent;
  let { isEditorFocused = false } = $$props;
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.floatingMenu === void 0 && $$bindings.floatingMenu && floatingMenu !== void 0)
    $$bindings.floatingMenu(floatingMenu);
  if ($$props.displayDefaultControls === void 0 && $$bindings.displayDefaultControls && displayDefaultControls !== void 0)
    $$bindings.displayDefaultControls(displayDefaultControls);
  if ($$props.onEditorCreate === void 0 && $$bindings.onEditorCreate && onEditorCreate !== void 0)
    $$bindings.onEditorCreate(onEditorCreate);
  if ($$props.onEditorDestroy === void 0 && $$bindings.onEditorDestroy && onEditorDestroy !== void 0)
    $$bindings.onEditorDestroy(onEditorDestroy);
  if ($$props.onEditorUpdate === void 0 && $$bindings.onEditorUpdate && onEditorUpdate !== void 0)
    $$bindings.onEditorUpdate(onEditorUpdate);
  if ($$props.htmlContent === void 0 && $$bindings.htmlContent && htmlContent !== void 0)
    $$bindings.htmlContent(htmlContent);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.focusOnEdit === void 0 && $$bindings.focusOnEdit && focusOnEdit !== void 0)
    $$bindings.focusOnEdit(focusOnEdit);
  if ($$props.isEditorFocused === void 0 && $$bindings.isEditorFocused && isEditorFocused !== void 0)
    $$bindings.isEditorFocused(isEditorFocused);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${floatingMenu ? `${validate_component(LinkFloatingMenu, "LinkFloatingMenu").$$render(
      $$result,
      { floatingMenuElement },
      {
        floatingMenuElement: ($$value) => {
          floatingMenuElement = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="${[
      "tipex-editor " + escape(className, true),
      (isEditorFocused ? "isEditorFocused" : "") + " " + (focusOnEdit ? "focusOnEdit" : "")
    ].join(" ").trim()}"${add_attribute("style", style, 0)}${add_attribute("this", editorsParent, 0)}><div class="tipex-editor-wrap">${slots.headComponent ? slots.headComponent({}) : ``} <div class="tipex-editor-section"${add_attribute("this", tipexEditorElement, 0)}></div> ${$$slots.controlComponent ? `${slots.controlComponent ? slots.controlComponent({}) : ``}` : `${displayDefaultControls ? `${validate_component(DefaultControls, "DefaultControls").$$render($$result, {}, {}, {
      default: () => {
        return `${$$slots.utilities ? `<div class="tipex-utilities">${slots.utilities ? slots.utilities({}) : ``}</div>` : `<div class="tipex-utilities">${validate_component(Utility, "Utility").$$render($$result, {}, {}, {})}</div>`}`;
      }
    })}` : ``}`} ${slots.footComponent ? slots.footComponent({}) : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_tipexEditor();
  return $$rendered;
});
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { htmlContent = `<p>Enter your text</p>` } = $$props;
  const ssr = false;
  let { func } = $$props;
  let { style = "" } = $$props;
  if ($$props.htmlContent === void 0 && $$bindings.htmlContent && htmlContent !== void 0)
    $$bindings.htmlContent(htmlContent);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.func === void 0 && $$bindings.func && func !== void 0)
    $$bindings.func(func);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `      ${validate_component(Tipex, "Tipex").$$render(
    $$result,
    {
      htmlContent,
      onEditorUpdate: (e) => {
        func(e.editor.getHTML().replaceAll("h1", "h3"));
      },
      displayDefaultControls: true,
      floatingMenu: true,
      style: style ? style : "margin-top: 1rem; margin-bottom: 0;background-color:white",
      className: "h-[70vh] border border-neutral-200"
    },
    {},
    {}
  )}`;
});
const css$1 = {
  code: ".card.svelte-1pphs1d{width:304px;height:174px;border-radius:19px;background:#e6e7ee;box-shadow:7px 7px 6px #babbc1,\r\n             -7px -7px 6px #ffffff}.row.svelte-1pphs1d{display:flex;flex-direction:row;justify-content:space-around;width:100%}.column.svelte-1pphs1d{display:flex;flex-direction:column;align-items:center;justify-content:space-around;height:100%}",
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { products } = $$props;
  let { number } = $$props;
  let { select } = $$props;
  let { del } = $$props;
  let { save } = $$props;
  let { cancel } = $$props;
  let { update } = $$props;
  let { mode = 2 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  if ($$props.del === void 0 && $$bindings.del && del !== void 0)
    $$bindings.del(del);
  if ($$props.save === void 0 && $$bindings.save && save !== void 0)
    $$bindings.save(save);
  if ($$props.cancel === void 0 && $$bindings.cancel && cancel !== void 0)
    $$bindings.cancel(cancel);
  if ($$props.update === void 0 && $$bindings.update && update !== void 0)
    $$bindings.update(update);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css$1);
  return `<div class="card svelte-1pphs1d"><div class="column svelte-1pphs1d"><div class="row svelte-1pphs1d"><div style="flex: 9;"></div> ${mode == 0 ? `<div style="font-weight:bolder;">${escape(title)}</div> <div style="text-align: end; flex: 2 1 0%; margin-right: 19px;font-weight:bolder;">${escape(number)}</div>` : `<input${add_attribute("value", title, 0)}> <input type="number" style="text-align: end;width:20px;"${add_attribute("value", number, 0)}>`}</div> <div class="row svelte-1pphs1d" style="flex-wrap: wrap; width: 100%; text-overflow: ellipsis; overflow: hidden;">${(mode == 0 || mode == 1) && products ? `${each(products, (product) => {
    return `<div>${escape(product)}</div>`;
  })}` : ``}</div> <div class="row svelte-1pphs1d">${mode == 0 ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      padding: true,
      clickHandler: () => {
        mode = 1;
      },
      src: "/edit.png"
    },
    {},
    {}
  )}` : `${mode == 1 ? `<div class="row svelte-1pphs1d">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: { w: 30 },
      padding: true,
      src: "/save.png",
      clickHandler: () => {
        mode = 0;
        update(title, number);
      }
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: { w: 30 },
      padding: true,
      src: "/cancel.png",
      clickHandler: () => {
        mode = 0;
      }
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: { w: 30 },
      padding: true,
      src: "/del.png",
      clickHandler: () => {
        mode = 0;
        del();
      }
    },
    {},
    {}
  )}</div>` : `<div class="row svelte-1pphs1d">${validate_component(Button, "Button").$$render(
    $$result,
    {
      src: "/save.png",
      padding: true,
      size: { w: 30 },
      clickHandler: () => {
        mode = 0;
        save(title, number);
      }
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      src: "/cancel.png",
      padding: true,
      size: { w: 30 },
      clickHandler: () => {
        mode = 0;
        cancel();
      }
    },
    {},
    {}
  )}</div>`}`}</div></div></div>`;
});
const css = {
  code: ".svelte-11ck34q{color:#2e3b6f}.title.svelte-11ck34q{width:95%;text-align:right;font-size:27px;font-weight:bold;margin-top:40px;margin-bottom:20px}.row.svelte-11ck34q{display:flex;flex-direction:row}.column.svelte-11ck34q{display:flex;flex-direction:column}input.svelte-11ck34q{height:10px;max-width:490px;border:none;outline:none;background:none;font-size:18px;color:#555;padding:15px 5px 10px 20px;box-shadow:inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;border-radius:25px}input.svelte-11ck34q::-moz-placeholder{color:#555;-moz-transition:all 0.3s ease;transition:all 0.3s ease}input.svelte-11ck34q::placeholder{color:#555;transition:all 0.3s ease}input.svelte-11ck34q:focus::-moz-placeholder{color:#999}input.svelte-11ck34q:focus::placeholder{color:#999}.op.svelte-11ck34q:hover{background-color:#ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let description = "<p>حفظ تم الحفظ بنجاح </p><h1>تم الحفظ بنجاح</h1><h2>تم الحغظ بنجاح</h2><p><strong>تم الحفظ بنجاح</strong></p><p><strong><em>تم الحفظ بنجاح</em></strong></p><p><em>تم الحفظ بنجاح</em></p>";
  let editingOffers = false;
  let currentImageIndex = 0;
  let products = [];
  let openWindow = false;
  let selectedProduct = null;
  let searchTxt = "";
  let viewingOffers = false;
  let addNewGenre = false;
  let editingProduct = false;
  let makingNewProduct;
  let freshProduct = {
    productName: "",
    productPrice: 0,
    productStatus: false,
    files: [],
    productDetails: ""
  };
  let imageFiles = Array(6).fill(22).map((e, index) => Object({ index, flawed: false }));
  console.log(imageFiles);
  let genres = [];
  let mode = 0;
  $$result.css.add(css);
  return `<div class="row svelte-11ck34q" style="gap:20px;margin:5px;">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "العروض",
      clickHandler: () => {
        mode = 2;
        products = [...products];
        genres = [...genres];
      }
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "الاقسام",
      clickHandler: () => {
        mode = 0;
        products = [...products];
        genres = [...genres];
      }
    },
    {},
    {}
  )} </div> ${mode == 0 ? `<div style="margin-top: 20px;margin-bottom:20px;" class="svelte-11ck34q">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "إضافة فئة",
      clickHandler: () => {
        addNewGenre = true;
      },
      src: "/add.png",
      size: { w: 30, h: 30 }
    },
    {},
    {}
  )}</div> ${addNewGenre ? `${validate_component(Section, "Section").$$render(
    $$result,
    {
      cancel: () => {
        addNewGenre = false;
      },
      save: (title, order) => {
        fetchData("a/ng", { t: title, o: order }).then(async () => {
          const { default: NotificationBubble } = await import('./NotificationBubble-C0RorCj4.js');
          new NotificationBubble({
            props: {
              duration: 10,
              msg: "Note, a new genre has been added"
            },
            target: document.getElementById("nots")
          });
          genres.push({ order, name: title, products: [] });
          genres = [...genres];
          console.log(genres);
        }).catch(async () => {
          const { default: NotificationBubble } = await import('./NotificationBubble-C0RorCj4.js');
          new NotificationBubble({
            props: {
              duration: 10,
              msg: "Note, a new genre has been added"
            },
            target: document.getElementById("nots")
          });
        });
        addNewGenre = false;
      }
    },
    {},
    {}
  )}` : ``} <div style="display: grid; grid-template-columns: auto auto; gap: 30px; margin: 10px;" class="svelte-11ck34q">${genres.length > 0 ? `${each(genres, (genre) => {
    return `${validate_component(Section, "Section").$$render(
      $$result,
      {
        mode: 0,
        title: genre.name,
        select: () => {
          mode = 1;
        },
        number: genre.order,
        products: genre.products.map((e) => e.productName),
        update: (title, order) => {
          fetchData("a/ug", { gID: genre.genreID, t: title, o: order }).then(async () => {
            const { default: NotificationBubble } = await import('./NotificationBubble-C0RorCj4.js');
            new NotificationBubble({
              props: {
                duration: 10,
                msg: "Note, a new genre has been updated"
              },
              target: document.getElementById("nots")
            });
          }).catch(async () => {
            const { default: NotificationBubble } = await import('./NotificationBubble-C0RorCj4.js');
            new NotificationBubble({
              props: {
                duration: 10,
                msg: "Note, a new genre has been updated"
              },
              target: document.getElementById("nots")
            });
          });
          addNewGenre = false;
        },
        del: () => {
          fetchData("a/dg", { gID: genre.genreID }).then(async () => {
            const { default: NotificationBubble } = await import('./NotificationBubble-C0RorCj4.js');
            new NotificationBubble({
              props: {
                duration: 10,
                msg: "Note, a new genre has been added"
              },
              target: document.getElementById("nots")
            });
            genres = [...genres.filter((e) => e != genre)];
          }).catch(async () => {
          });
          addNewGenre = false;
        }
      },
      {},
      {}
    )}`;
  })}` : ``}</div>` : `${mode == 1 ? `<div style="margin-top: 190px;" class="svelte-11ck34q"></div> ${openWindow ? `<div${add_attribute(
    "style",
    `position: fixed;
/* width: 50%; */
background-color: #f9f9f9;
margin-left: 21vw;
width: 69vw;
height: ${viewingOffers ? "66vh" : "400px"};
display: flex;
z-index: 1000;
flex-direction: column;
text-align: right;border-radius: 14px;
padding: 7px;gap:30px;top: 140px;`,
    0
  )} class="svelte-11ck34q"><div class="row svelte-11ck34q" style="justify-content: right;"><img src="/close.png" width="30" class="svelte-11ck34q"></div> ${viewingOffers ? `<div class="row svelte-11ck34q" style="align-items: center;height: 5px;justify-content: center;" data-svelte-h="svelte-ua9qwp"><img src="/pt.png" width="30" height="30" style="position: relative; top: 12px;" class="svelte-11ck34q"> <div class="title svelte-11ck34q" style="width:fit-content;">العروض</div></div> <div class="row svelte-11ck34q" data-svelte-h="svelte-5p3cj0"><div class="column svelte-11ck34q" style="width: 50%;"><img src="/ds.png" width="230px" class="svelte-11ck34q"> <img src="/ds2.png" width="230px" class="svelte-11ck34q"></div> <div class="column svelte-11ck34q">Hola</div></div>` : `${!makingNewProduct && !editingProduct ? `<div class="row svelte-11ck34q" style="gap:2vw;"><img${add_attribute("src", selectedProduct.src[currentImageIndex], 0)} style="width:273px; height: 143px;" class="svelte-11ck34q"> <div class="column svelte-11ck34q"><div style="font-size: 30px;font-weight:bold;text-align:left" class="svelte-11ck34q">${escape(selectedProduct.title)}</div> <div class="svelte-11ck34q">${escape(selectedProduct.discount)}</div></div></div> <div class="row svelte-11ck34q" style="justify-content: space-around;align-items:center"><div class="row svelte-11ck34q"><img src="/left.png" class="svelte-11ck34q"> <img src="/right.png" class="svelte-11ck34q"></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "تعديل",
      clickHandler: () => {
        freshProduct.productName = selectedProduct.title;
        freshProduct.productDetails = selectedProduct.discount;
        freshProduct.src = selectedProduct.src;
        freshProduct.productPrice = selectedProduct.price;
        freshProduct.productStatus = selectedProduct.status;
        editingProduct = true;
        openWindow = true;
      }
    },
    {},
    {}
  )} ${selectedProduct.status ? `<div class="svelte-11ck34q">${escape(selectedProduct.text)}</div>` : `<div style="color:red" class="svelte-11ck34q" data-svelte-h="svelte-lohcyc">غير متوفر</div>`}</div>` : `${makingNewProduct ? `<div class="row svelte-11ck34q" style="gap:2vw;"><div style="width: 273px; height: 230px; background-color: rgb(230, 231, 238); overflow-y: scroll;display:flex;flex-direction:column;gap:20px;" class="svelte-11ck34q"><label for="filer" class="svelte-11ck34q" data-svelte-h="svelte-52e16z"><img src="/addImage.png" width="20" class="svelte-11ck34q"></label> <input type="file" style="display: none;" id="filer" accept="image/*" multiple class="svelte-11ck34q"> ${each(freshProduct.files, (file) => {
    return `<div class="row svelte-11ck34q" style="justify-content: space-between; align-items: center;"><img src="/redclose.png" width="20" class="svelte-11ck34q"> <img width="20"${add_attribute("src", URL.createObjectURL(file), 0)} class="svelte-11ck34q"> </div>`;
  })}</div> <div class="column svelte-11ck34q"><input style="font-size: 30px; font-weight: bold; text-align: left; background-color: white; box-shadow: none; height: 40px; border-radius: 0; text-align: -webkit-match-parent;" placeholder="اسم المنتج" class="svelte-11ck34q"${add_attribute("value", freshProduct.productName, 0)}> <input style="font-size: 30px; font-weight: bold; text-align:right; background-color: white; box-shadow: none; height: 60px; border-radius: 0; text-align: -webkit-match-parent;margin-top:100px" placeholder="الخصم" class="svelte-11ck34q"${add_attribute("value", freshProduct.productDetails, 0)}></div></div> <div class="row svelte-11ck34q" style="justify-content: space-around;align-items:center"><div class="row svelte-11ck34q" data-svelte-h="svelte-1ppvoix"></div> <button class="svelte-11ck34q" data-svelte-h="svelte-1rgjv7w">إضافة</button> <div class="row svelte-11ck34q"><input style="background-color: white; color: blue; height: 20px; width: 20px; box-shadow: none;" type="checkbox" aria-label="متوفر" class="svelte-11ck34q"${add_attribute("checked", freshProduct.productStatus, 1)}></div> <input type="number" placeholder="السعر" style="background-color: white; box-shadow: none; height: 20px; border-radius: 0; text-align: right;" class="svelte-11ck34q"${add_attribute("value", freshProduct.productPrice, 0)}></div>` : `${editingProduct ? `<div class="row svelte-11ck34q" style="gap:2vw;"><div style="width: 273px; height: 230px; background-color: rgb(230, 231, 238); overflow-y: scroll;display:flex;flex-direction:column;gap:20px;" class="svelte-11ck34q"><label for="filer" class="svelte-11ck34q" data-svelte-h="svelte-52e16z"><img src="/addImage.png" width="20" class="svelte-11ck34q"></label> <input type="file" style="display: none;" id="filer" accept="image/*" multiple class="svelte-11ck34q"> ${each(freshProduct.files, (file) => {
    return `<div class="row svelte-11ck34q" style="justify-content: space-between; align-items: center;"><img src="/redclose.png" width="20" class="svelte-11ck34q"> <img width="20"${add_attribute("src", URL.createObjectURL(file), 0)} class="svelte-11ck34q"> </div>`;
  })} ${each(freshProduct.src, (file) => {
    return `<div class="row svelte-11ck34q" style="justify-content: space-between; align-items: center;"><img src="/redclose.png" width="20" class="svelte-11ck34q"> <img width="20"${add_attribute("src", file, 0)} class="svelte-11ck34q"> </div>`;
  })}</div> <div class="column svelte-11ck34q"><input style="font-size: 30px; font-weight: bold; text-align: left; background-color: white; box-shadow: none; height: 40px; border-radius: 0; text-align: -webkit-match-parent;" placeholder="اسم المنتج" class="svelte-11ck34q"${add_attribute("value", freshProduct.productName, 0)}> <input style="font-size: 30px; font-weight: bold; text-align:right; background-color: white; box-shadow: none; height: 60px; border-radius: 0; text-align: -webkit-match-parent;margin-top:100px" placeholder="الخصم" class="svelte-11ck34q"${add_attribute("value", freshProduct.productDetails, 0)}></div></div> <div class="row svelte-11ck34q" style="justify-content: space-around;align-items:center"><div class="row svelte-11ck34q" data-svelte-h="svelte-1ppvoix"></div> <button class="svelte-11ck34q" data-svelte-h="svelte-1xar5zx">تحديث</button> <img src="/del.png" style="width:30px;" class="svelte-11ck34q"> <div class="row svelte-11ck34q"><input style="background-color: white; color: blue; height: 20px; width: 20px; box-shadow: none;" type="checkbox" aria-label="متوفر" class="svelte-11ck34q"${add_attribute("checked", freshProduct.productStatus, 1)}></div> <input type="number" placeholder="السعر" style="background-color: white; box-shadow: none; height: 20px; border-radius: 0; text-align: right;" class="svelte-11ck34q"${add_attribute("value", freshProduct.productPrice, 0)}></div>` : ``}`}`}`}</div>` : ``}    <hr style="width: 90%; border-bottom: 1px solid #8a8ad1;" class="svelte-11ck34q"> <div class="row svelte-11ck34q" style="position: absolute; right: 11px; margin-top: 0px;align-items: center;"><input class="svelte-11ck34q"${add_attribute("value", searchTxt, 0)}> <div class="svelte-11ck34q" data-svelte-h="svelte-1xti7mu">بحث</div> ${``} ${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      clickHandler: () => {
        makingNewProduct = true;
        viewingOffers = false;
        openWindow = true;
      },
      child: `<div style="display:flex;justify-content: space-between;align-items: center;">
            <img src="/addP.png" width="20">
            <div style="color:#2e3b6f;font-weight: bold;font-size: 20px;">إضافة منتج</div>
        </div>`
    },
    {},
    {}
  )}</div> ${``}` : `${mode == 2 ? `<div style="display: flex;gap: 20px; margin: auto; width: 100%; justify-content: center;" class="svelte-11ck34q">${each(imageFiles, (file, index) => {
    return `<div style="display: flex;flex-direction:column;align-items:center;" class="svelte-11ck34q"><label${add_attribute("for", index, 0)} class="svelte-11ck34q"><img${add_attribute(
      "src",
      file.flawed ? "/addImage.png" : "https://dentists-iq.s3.amazonaws.com/offers/" + index,
      0
    )}${add_attribute("style", !file.flawed ? "width:100px" : "", 0)} class="svelte-11ck34q"></label> <input type="file"${add_attribute("id", index, 0)}${add_attribute("style", `display:none;`, 0)} class="svelte-11ck34q"> ${!file.flawed ? `<img src="/redclose.png" width="40" class="svelte-11ck34q">` : ``} </div>`;
  })}</div> ${editingOffers ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "حفظ",
      clickHandler: () => {
        fetchData("a/nof", { offer: description });
        editingOffers = false;
      }
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      src: "/cancel.png",
      size: { w: 20 },
      clickHandler: () => {
        editingOffers = false;
      }
    },
    {},
    {}
  )} ${validate_component(Editor, "Editor").$$render(
    $$result,
    {
      htmlContent: description,
      func: (w) => {
        description = w;
      }
    },
    {},
    {}
  )}` : `${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "تعديل",
      clickHandler: () => {
        editingOffers = true;
      }
    },
    {},
    {}
  )} <div class="desBox svelte-11ck34q" style="border-radius: 10px; background: #ffffff; box-shadow: inset 6px 6px 12px #e3e3e3, inset -6px -6px 12px #ffffff;text-align:end"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></div>`}` : ``}`}`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CEfWbzFP.js.map
