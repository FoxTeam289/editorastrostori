/** @format */

import { useAppContext } from "../../context/state";
import useConvertAndSend from "../../modules/useConvertAndSend";
import useScrollTop from "../../modules/useScrollTop";
import { BtnCom } from "./styles";
import { btnVariants } from "../../modules/useAnimation";

const Btn = ({ btn }) => {
  const { appRef, skyRef, dataSky, setActivePopup, setCreating, setDone, total, setError } = useAppContext();
  const { id, text, theme, mod } = btn;
  const { hover, tap, transition } = btnVariants;

  const handleClick = () => {
    if (id === "create-sky") {
      setActivePopup(true);
      setCreating(true);

      setTimeout(() => useConvertAndSend(skyRef.current, dataSky, setDone, total, setError), 1000);
    } else if (id === "show-sky") useScrollTop(appRef.current);
    else return;
  };

  return (
    <BtnCom
      className={mod ? mod : ""}
      onClick={handleClick}
      $styledTheme={theme}
      type="button"
      variants={btnVariants}
      whileHover={hover}
      whileTap={tap}
      transition={transition}
    >
      <span>{text}</span>
    </BtnCom>
  );
};

export default Btn;
