/** @format */

import { useState, useRef, useEffect } from "react";
import { useAppContext } from "../../context/state";
import { FasteningCom, Title, Wrap, Price, Input, Label, Checkbox } from "./styles";
import { fasteningVariants } from "../../modules/useAnimation";

const Fastening = ({ fastening }) => {
  const { setDataSky, file, onlyMin } = useAppContext();
  const { title, item } = fastening;
  const { hover, tap, transition } = fasteningVariants;

  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const inputRef = useRef(null);

  const setItem = (name, value) => {
    setDataSky((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };

      value ? (newState[`${name}-price`] = item.price) : delete newState[`${name}-price`];

      return newState;
    });
  };

  const handleChange = ({ target }) => {
    setItem(item.name, target.checked);
    setActiveCheckbox(!activeCheckbox);
  };

  useEffect(() => {
    setItem(item.name, item.checked);
    setActiveCheckbox(item.checked);
  }, []);

  useEffect(() => {
    if (!file && !onlyMin) return;

    setItem(item.name, false);
    setActiveCheckbox(false);
  }, [file, onlyMin]);

  return !file && !onlyMin ? (
    <FasteningCom>
      <Input ref={inputRef} onChange={handleChange} type={item.type} name={item.name} id={item.id} defaultChecked={item.checked} />
      <Label htmlFor={item.id} variants={fasteningVariants} whileHover={hover} whileTap={tap} transition={transition}>
        <Title>{title}</Title>
        <Wrap>
          <Price>
            <span>+&nbsp;</span>
            <span>{item.price}</span>
            <span>&nbsp;₽</span>
          </Price>
          <Checkbox className={activeCheckbox ? "active" : ""} />
        </Wrap>
      </Label>
    </FasteningCom>
  ) : null;
};

export default Fastening;
