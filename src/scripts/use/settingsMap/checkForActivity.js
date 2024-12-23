import { addSelect } from "../addSelect";

export const checkForActivity = (productsWrapper, data) => {
  const els = document.querySelectorAll("[data-checked]");

  if (!els.length) return;

  els.forEach((el) => {
    if (!el.checked) return;

    data[el.name] = el.value;
    addSelect({ productsWrapper, data });
  });
};
