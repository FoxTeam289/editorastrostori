import { addSelect } from "../addSelect";

export const addMount = (productsWrapper, data) => {
  const el = document.querySelector("[data-add-mount]");

  if (!el) return;

  el.addEventListener("change", () => {
    if (el.checked) {
      data[el.name] = "добавить";
      addSelect({ productsWrapper, data });
    } else {
      delete data[el.name];
      addSelect({ productsWrapper, data });
    }
  });
};
