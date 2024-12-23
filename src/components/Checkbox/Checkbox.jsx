/** @format */

import { useEffect } from "react";
import { useAppContext } from "../../context/state";
import { CheckboxCom, Input, Label, Icon, Title } from "./styles";
import { checkboxVariants } from "../../modules/useAnimation";

const Checkbox = ({ data }) => {
  const { setDataSky } = useAppContext();
  const { title, item } = data;
  const { hover, tap, transition } = checkboxVariants;

  const setItem = (name, value) =>
    setDataSky((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  const handleChange = ({ target }) => setItem(item.name, target.checked);

  useEffect(() => setItem(item.name, item.checked), [item.checked]);

  return (
    <CheckboxCom>
      <Input onChange={handleChange} type={item.type} name={item.name} id={item.id} />
      <Label htmlFor={item.id} variants={checkboxVariants} whileHover={hover} whileTap={tap} transition={transition}>
        <Icon xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.2518 2.19254C20.5596 2.46963 20.5846 2.94385 20.3075 3.25173L12.5699 11.8491C11.5954 12.9319 9.94549 13.0668 8.80793 12.1568L5.28151 9.33566C4.95806 9.0769 4.90562 8.60493 5.16438 8.28149C5.42313 7.95804 5.8951 7.9056 6.21855 8.16436L9.74497 10.9855C10.262 11.3992 11.012 11.3378 11.455 10.8456L19.1926 2.24828C19.4697 1.9404 19.9439 1.91544 20.2518 2.19254Z"
            fill="var(--orange)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.75 1.5C2.95507 1.5 1.5 2.95507 1.5 4.75V16.75C1.5 18.5449 2.95507 20 4.75 20H16.75C18.5449 20 20 18.5449 20 16.75V7.75C20 7.33579 20.3358 7 20.75 7C21.1642 7 21.5 7.33579 21.5 7.75V16.75C21.5 19.3734 19.3734 21.5 16.75 21.5H4.75C2.12665 21.5 0 19.3734 0 16.75V4.75C0 2.12665 2.12665 0 4.75 0H15.75C16.1642 0 16.5 0.335786 16.5 0.75C16.5 1.16421 16.1642 1.5 15.75 1.5H4.75Z"
            fill="var(--orange)"
          />
        </Icon>
        <Title>{title}</Title>
      </Label>
    </CheckboxCom>
  );
};

export default Checkbox;
