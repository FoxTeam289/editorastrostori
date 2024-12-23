/** @format */

import { AnimatePresence } from "framer-motion";
import { useAppContext } from "../../../context/state";
import { TextareaCom, Reset, Input } from "./styles";
import { textVariants, resetVariants } from "../../../modules/useAnimation";

const Textarea = ({ item }) => {
  const { dataSky, setDataSky, setResetTextarea, resetTextarea } = useAppContext();
  const { id, name, text, resetText } = item;

  const handleChange = ({ target }) => {
    const value = target.value;

    if (value.length > 65) return;

    setDataSky((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setResetTextarea((prevState) => ({
      ...prevState,
      text: value,
    }));
  };

  const resetSelectedText = () => {
    setResetTextarea((prevState) => ({
      ...prevState,
      active: false,
    }));

    setDataSky((prevState) => ({
      ...prevState,
      [name]: resetTextarea.text,
    }));
  };

  return (
    <TextareaCom className={resetText ? "disabled" : ""}>
      {resetText && (
        <AnimatePresence initial={false}>
          {resetTextarea.active && (
            <Reset
              initial={resetVariants.initial}
              animate={resetVariants.animate}
              exit={resetVariants.exit}
              transition={resetVariants.transition}
              whileHover={resetVariants.hover}
              whileTap={resetVariants.tap}
              onClick={resetSelectedText}
            >
              {resetText}
            </Reset>
          )}
        </AnimatePresence>
      )}
      <Input
        onChange={handleChange}
        id={id}
        name={name}
        value={dataSky[name] ? dataSky[name] : ""}
        placeholder={text}
        autoComplete="off"
        disabled={name === "phrase" ? resetTextarea.active : false}
        variants={textVariants}
        whileHover={textVariants.hover}
        whileFocus={textVariants.focus}
        transition={textVariants.transition}
      />
    </TextareaCom>
  );
};

export default Textarea;
