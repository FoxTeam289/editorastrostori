/** @format */

import { useState } from "react";
import { useAppContext } from "../../../context/state";
import useGetEvent from "../../../modules/useGetEvent";
import useDateCheck from "../../../modules/useDateCheck";
import useTimeCheck from "../../../modules/useTimeCheck";
import { TextCom } from "./styles";
import { textVariants } from "../../../modules/useAnimation";

const Text = ({ item }) => {
  const { dataSky, setDataSky, setEventError, setShowEvents, setEvents } = useAppContext();
  const { id, type, name, text, center, max, inputmode } = item;
  const { hover, focus, transition } = textVariants;

  const [errors, setErrors] = useState({});

  const reset = () => {
    setDataSky((prevState) => ({
      ...prevState,
      [name]: "",
    }));

    setErrors((prevState) => ({
      ...prevState,
      [name]: true,
    }));

    setEventError(true);
  };

  const handleChange = ({ target }) => {
    const value = target.value;
    const date = id.includes("date");
    const time = id.includes("time");
    const event = id === "event";

    if (event) {
      value !== "" ? setShowEvents(true) : setShowEvents(false);
      useGetEvent(value, setEvents);
    }

    if (date) {
      if (!/^[0-9]*$/.test(value) || !useDateCheck(value, id)) {
        reset();
        return;
      }
    }

    if (time) {
      if (!/^[0-9:]*$/.test(value)) return;

      const pased = useTimeCheck(value);

      if (!pased) {
        reset();
        return;
      }

      setDataSky((prevState) => ({
        ...prevState,
        [name]: pased,
      }));
    } else {
      setDataSky((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    setErrors((prevState) => ({
      ...prevState,
      [name]: false,
    }));

    setEventError(false);
  };

  return (
    <TextCom
      onChange={handleChange}
      type={type}
      id={id}
      name={name}
      value={dataSky[name] ? dataSky[name] : ""}
      placeholder={text}
      $styledCenter={center}
      className={errors[name] ? "error" : ""}
      autoComplete={"off"}
      maxLength={max ? max : null}
      variants={textVariants}
      whileHover={hover}
      whileFocus={focus}
      transition={transition}
      inputMode={inputmode ? inputmode : null}
    />
  );
};

export default Text;
