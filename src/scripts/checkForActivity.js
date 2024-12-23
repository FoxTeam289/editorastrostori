import { addSelect } from "./use/addSelect";

export const checkForActivity = ({ input, productsWrapper, data }) => {
  if (!input.checked) return;

  data[input.name] = input.value;
  addSelect({ productsWrapper: productsWrapper, data: data });
};
