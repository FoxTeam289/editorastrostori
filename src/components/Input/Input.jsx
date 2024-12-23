/** @format */

import { useEffect } from "react";
import { useAppContext } from "../../context/state";
import { InputCom } from "./styles";

import Radio from "./Radio";
import Text from "./Text";
import Textarea from "./Textarea";
import Select from "../Select";

const Input = ({ item, big, mod }) => {
  const { setDataSky, onlyMin } = useAppContext();
  const { id, price, type, name, checked, img } = item;

  useEffect(() => {
    if (!checked) return;

    setDataSky((prevState) => ({
      ...prevState,
      [name]: id,
      ...(price && { [`${name}-price`]: price }),
      ...(img && { img: `${window.location.href}/skys/${id}.jpg` }),
    }));
  }, []);

  return ((name === "size" && id !== "21x30") || (name === "receive" && id !== "frame")) && onlyMin ? null : (
    <InputCom className={mod ? mod : ""}>
      {type === "radio" && <Radio item={item} big={big} onlyMin={onlyMin} />}
      {type === "text" && <Text item={item} />}
      {type === "textarea" && <Textarea item={item} />}
      {type === "select" && <Select select={item} />}
    </InputCom>
  );
};

export default Input;
