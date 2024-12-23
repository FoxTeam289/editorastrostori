/** @format */

import { useRef, useEffect } from "react";
import { useAppContext } from "../../../context/state";
import { Input, Label, Text, Img } from "./styles";
import { radioVariants } from "../../../modules/useAnimation";

const Radio = ({ item, big }) => {
  const { onlyMin, setDataSky } = useAppContext();
  const { id, type, img, price, name, checked, text } = item;
  const { hover, tap, transition } = radioVariants;

  const inputRef = useRef(null);

  const handleChange = () => {
    setDataSky((prevState) => ({
      ...prevState,
      [name]: id,
      ...(price && { [`${name}-price`]: price }),
      ...(img && { img: `${window.location.href}/skys/${id}.jpg` }),
    }));
  };

  useEffect(() => {
    if (!onlyMin) return;

    (inputRef.current.id === "21x30" || inputRef.current.id === "frame") && !inputRef.current.checked && (inputRef.current.checked = true);
  }, [onlyMin]);

  return (
    <>
      <Input ref={inputRef} onChange={handleChange} type={type} id={id} name={name} value={id} defaultChecked={checked} />
      <Label htmlFor={id} $styledBig={big} variants={radioVariants} whileHover={hover} whileTap={tap} transition={transition}>
        {text && <Text>{text}</Text>}
        {img && (
          <Img>
            <img src={`/skys/${id}.jpg`} alt={id} />
          </Img>
        )}
      </Label>
    </>
  );
};

export default Radio;
