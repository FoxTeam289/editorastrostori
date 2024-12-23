/** @format */

import { useAppContext } from "../../context/state";
import { PopupCom, Close } from "./styles";
import { popupVariants } from "../../modules/useAnimation";

import CompareSizes from "../CompareSizes";
import Creating from "../Creating";

const Popup = ({}) => {
  const { setActivePopup, creating } = useAppContext();
  const { initial, animate, exit, transition } = popupVariants;

  const closePopup = () => setActivePopup(false);

  return (
    <PopupCom variants={popupVariants} initial={initial} animate={animate} exit={exit} transition={transition}>
      {!creating ? (
        <>
          <Close onClick={closePopup} />
          <CompareSizes />
        </>
      ) : (
        <Creating />
      )}
    </PopupCom>
  );
};

export default Popup;
