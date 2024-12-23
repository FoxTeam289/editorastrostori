import { addSelect } from "../addSelect";

export const typeMap = (productsWrapper, data) => {
  const els = document.querySelectorAll("[data-type-map]");

  if (!els.length) return;

  els.forEach((el) => {
    el.addEventListener("change", () => {
      if (el.checked) {
        data[el.name] = el.value;
        addSelect({ productsWrapper, data });
      }
    });
  });
};
