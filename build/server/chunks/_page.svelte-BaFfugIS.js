import { c as create_ssr_component, v as validate_component, f as each, e as escape, d as add_attribute } from './ssr-CggYz5VK.js';
import { B as ButtonChild } from './ButtonChild-CGFUeogF.js';
import { B as Button } from './Button-b9hVt21A.js';
import { f as fetchData, n as notification } from './not-DOW-9379.js';

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
  return `<div class="card svelte-1pphs1d"><div class="column svelte-1pphs1d"><div class="row svelte-1pphs1d"><div style="flex: 9;"></div> ${mode == 0 ? `<div>${escape(title)}</div> <div style="text-align: end;flex:2;">${escape(number)}</div>` : `<input${add_attribute("value", title, 0)}> <input type="number" style="text-align: end;width:20px;"${add_attribute("value", number, 0)}>`}</div> <div class="row svelte-1pphs1d">${(mode == 0 || mode == 1) && products ? `${each(products, (product) => {
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
  code: ".svelte-1u6dyu9{color:navy}.title.svelte-1u6dyu9{width:95%;text-align:right;font-size:27px;font-weight:bold;margin-top:40px;margin-bottom:20px}.row.svelte-1u6dyu9{display:flex;flex-direction:row}.column.svelte-1u6dyu9{display:flex;flex-direction:column}input.svelte-1u6dyu9{height:10px;max-width:490px;border:none;outline:none;background:none;font-size:18px;color:#555;padding:15px 5px 10px 20px;box-shadow:inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;border-radius:25px}input.svelte-1u6dyu9::placeholder{color:#555;transition:all 0.3s ease}input.svelte-1u6dyu9:focus::placeholder{color:#999}.op.svelte-1u6dyu9:hover{background-color:#ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentImageIndex = 0;
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
  let genres = [];
  let mode = 0;
  $$result.css.add(css);
  return `<div class="row svelte-1u6dyu9"><button class="svelte-1u6dyu9" data-svelte-h="svelte-1rv1mn6">العروض</button> <button class="svelte-1u6dyu9" data-svelte-h="svelte-1jzlhsa">الاقسام</button></div> ${mode == 0 ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "إضافة فئة",
      clickHandler: () => {
        addNewGenre = true;
      },
      src: "/add.png"
    },
    {},
    {}
  )} ${addNewGenre ? `${validate_component(Section, "Section").$$render(
    $$result,
    {
      cancel: () => {
        addNewGenre = false;
      },
      save: (title, order) => {
        fetchData("a/ng", { t: title, o: order }).then(() => {
          notification("note", "a new genre has been added");
          genres.push({ order, name: title, products: [] });
          genres = [...genres];
          console.log(genres);
        }).catch(() => {
          notification("Warning", "the genre has not been added");
        });
        addNewGenre = false;
      }
    },
    {},
    {}
  )}` : ``} <div style="display: grid; grid-template-columns: auto auto;" class="svelte-1u6dyu9">${genres.length > 0 ? `${each(genres, (genre) => {
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
          fetchData("a/ug", { gID: genre.genreID, t: title, o: order }).then(() => {
            notification("note", "a  genre has been updated");
          }).catch(() => {
            notification("Warning", "the genre has not been updated");
          });
          addNewGenre = false;
        },
        del: () => {
          fetchData("a/dg", { gID: genre.genreID }).then(() => {
            notification("note", "a new genre has been added");
            genres = [...genres.filter((e) => e != genre)];
          }).catch(() => {
            notification("Warning", "the genre has not been added");
          });
          addNewGenre = false;
        }
      },
      {},
      {}
    )}`;
  })}` : ``}</div>` : `${mode == 1 ? `<div style="margin-top: 190px;" class="svelte-1u6dyu9"></div> ${openWindow ? `<div${add_attribute(
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
  )} class="svelte-1u6dyu9"><div class="row svelte-1u6dyu9" style="justify-content: right;"><img src="/close.png" width="30" class="svelte-1u6dyu9"></div> ${viewingOffers ? `<div class="row svelte-1u6dyu9" style="align-items: center;height: 5px;justify-content: center;" data-svelte-h="svelte-ua9qwp"><img src="/pt.png" width="30" height="30" style="position: relative; top: 12px;" class="svelte-1u6dyu9"> <div class="title svelte-1u6dyu9" style="width:fit-content;">العروض</div></div> <div class="row svelte-1u6dyu9" data-svelte-h="svelte-5p3cj0"><div class="column svelte-1u6dyu9" style="width: 50%;"><img src="/ds.png" width="230px" class="svelte-1u6dyu9"> <img src="/ds2.png" width="230px" class="svelte-1u6dyu9"></div> <div class="column svelte-1u6dyu9">Hola</div></div>` : `${!makingNewProduct && !editingProduct ? `<div class="row svelte-1u6dyu9" style="gap:2vw;"><img${add_attribute("src", selectedProduct.src[currentImageIndex], 0)} style="width:273px; height: 143px;" class="svelte-1u6dyu9"> <div class="column svelte-1u6dyu9"><div style="font-size: 30px;font-weight:bold;text-align:left" class="svelte-1u6dyu9">${escape(selectedProduct.title)}</div> <div class="svelte-1u6dyu9">${escape(selectedProduct.discount)}</div></div></div> <div class="row svelte-1u6dyu9" style="justify-content: space-around;align-items:center"><div class="row svelte-1u6dyu9"><img src="/left.png" class="svelte-1u6dyu9"> <img src="/right.png" class="svelte-1u6dyu9"></div> ${validate_component(Button, "Button").$$render(
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
  )} ${selectedProduct.status ? `<div class="svelte-1u6dyu9">${escape(selectedProduct.text)}</div>` : `<div style="color:red" class="svelte-1u6dyu9" data-svelte-h="svelte-lohcyc">غير متوفر</div>`}</div>` : `${makingNewProduct ? `<div class="row svelte-1u6dyu9" style="gap:2vw;"><div style="width: 273px; height: 230px; background-color: rgb(230, 231, 238); overflow-y: scroll;display:flex;flex-direction:column;gap:20px;" class="svelte-1u6dyu9"><label for="filer" class="svelte-1u6dyu9" data-svelte-h="svelte-52e16z"><img src="/addImage.png" width="20" class="svelte-1u6dyu9"></label> <input type="file" style="display: none;" id="filer" accept="image/*" multiple class="svelte-1u6dyu9"> ${each(freshProduct.files, (file) => {
    return `<div class="row svelte-1u6dyu9" style="justify-content: space-between; align-items: center;"><img src="/redclose.png" width="20" class="svelte-1u6dyu9"> <img width="20"${add_attribute("src", URL.createObjectURL(file), 0)} class="svelte-1u6dyu9"> </div>`;
  })}</div> <div class="column svelte-1u6dyu9"><input style="font-size: 30px; font-weight: bold; text-align: left; background-color: white; box-shadow: none; height: 40px; border-radius: 0; text-align: -webkit-match-parent;" placeholder="اسم المنتج" class="svelte-1u6dyu9"${add_attribute("value", freshProduct.productName, 0)}> <input style="font-size: 30px; font-weight: bold; text-align:right; background-color: white; box-shadow: none; height: 60px; border-radius: 0; text-align: -webkit-match-parent;margin-top:100px" placeholder="الخصم" class="svelte-1u6dyu9"${add_attribute("value", freshProduct.productDetails, 0)}></div></div> <div class="row svelte-1u6dyu9" style="justify-content: space-around;align-items:center"><div class="row svelte-1u6dyu9" data-svelte-h="svelte-1ppvoix"></div> <button class="svelte-1u6dyu9" data-svelte-h="svelte-11pu0vi">إضافة</button> <div class="row svelte-1u6dyu9"><input style="background-color: white; color: blue; height: 20px; width: 20px; box-shadow: none;" type="checkbox" aria-label="متوفر" class="svelte-1u6dyu9"${add_attribute("checked", freshProduct.productStatus, 1)}></div> <input type="number" placeholder="السعر" style="background-color: white; box-shadow: none; height: 20px; border-radius: 0; text-align: right;" class="svelte-1u6dyu9"${add_attribute("value", freshProduct.productPrice, 0)}></div>` : `${editingProduct ? `<div class="row svelte-1u6dyu9" style="gap:2vw;"><div style="width: 273px; height: 230px; background-color: rgb(230, 231, 238); overflow-y: scroll;display:flex;flex-direction:column;gap:20px;" class="svelte-1u6dyu9"><label for="filer" class="svelte-1u6dyu9" data-svelte-h="svelte-52e16z"><img src="/addImage.png" width="20" class="svelte-1u6dyu9"></label> <input type="file" style="display: none;" id="filer" accept="image/*" multiple class="svelte-1u6dyu9"> ${each(freshProduct.files, (file) => {
    return `<div class="row svelte-1u6dyu9" style="justify-content: space-between; align-items: center;"><img src="/redclose.png" width="20" class="svelte-1u6dyu9"> <img width="20"${add_attribute("src", URL.createObjectURL(file), 0)} class="svelte-1u6dyu9"> </div>`;
  })} ${each(freshProduct.src, (file) => {
    return `<div class="row svelte-1u6dyu9" style="justify-content: space-between; align-items: center;"><img src="/redclose.png" width="20" class="svelte-1u6dyu9"> <img width="20"${add_attribute("src", file, 0)} class="svelte-1u6dyu9"> </div>`;
  })}</div> <div class="column svelte-1u6dyu9"><input style="font-size: 30px; font-weight: bold; text-align: left; background-color: white; box-shadow: none; height: 40px; border-radius: 0; text-align: -webkit-match-parent;" placeholder="اسم المنتج" class="svelte-1u6dyu9"${add_attribute("value", freshProduct.productName, 0)}> <input style="font-size: 30px; font-weight: bold; text-align:right; background-color: white; box-shadow: none; height: 60px; border-radius: 0; text-align: -webkit-match-parent;margin-top:100px" placeholder="الخصم" class="svelte-1u6dyu9"${add_attribute("value", freshProduct.productDetails, 0)}></div></div> <div class="row svelte-1u6dyu9" style="justify-content: space-around;align-items:center"><div class="row svelte-1u6dyu9" data-svelte-h="svelte-1ppvoix"></div> <button class="svelte-1u6dyu9" data-svelte-h="svelte-uk3owj">تحديث</button> <div class="row svelte-1u6dyu9"><input style="background-color: white; color: blue; height: 20px; width: 20px; box-shadow: none;" type="checkbox" aria-label="متوفر" class="svelte-1u6dyu9"${add_attribute("checked", freshProduct.productStatus, 1)}></div> <input type="number" placeholder="السعر" style="background-color: white; box-shadow: none; height: 20px; border-radius: 0; text-align: right;" class="svelte-1u6dyu9"${add_attribute("value", freshProduct.productPrice, 0)}></div>` : ``}`}`}`}</div>` : ``}    <hr style="width: 90%; border-bottom: 1px solid #8a8ad1;" class="svelte-1u6dyu9"> <div class="row svelte-1u6dyu9" style="position: absolute; right: 11px; margin-top: 0px;align-items: center;"><input class="svelte-1u6dyu9"${add_attribute("value", searchTxt, 0)}> <div class="svelte-1u6dyu9" data-svelte-h="svelte-1xti7mu">بحث</div> ${``} ${validate_component(ButtonChild, "ButtonChild").$$render(
    $$result,
    {
      clickHandler: () => {
        makingNewProduct = true;
        viewingOffers = false;
        openWindow = true;
      },
      child: `<div style="display:flex;justify-content: space-between;align-items: center;">
            <img src="/addP.png" width="20">
            <div style="color:navy;font-weight: bold;font-size: 20px;">إضافة منتج</div>
        </div>`
    },
    {},
    {}
  )}</div> ${``}` : `${mode == 2 ? `` : ``}`}`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BaFfugIS.js.map
