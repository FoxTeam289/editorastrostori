import { totalSum } from "./totalSum";
import { showTexts } from "./showTexts";
import { addSelect } from "./use/addSelect";

export const handleChange = (
  input,
  {
    data,
    dataPrice,
    totalPrice,
    priceValue,
    inputsText,
    productsWrapper,
    dataPhoto,
  },
) => {
  data[input.name] = input.value;

  totalSum({
    input,
    dataPrice,
    totalPrice,
    priceValue,
  });
  showTexts({
    input,
    inputsText,
    data,
    dataPrice,
    remove: true,
  });
  addSelect({ productsWrapper, data });

  showImage(Number(input.dataset.photo));
};
