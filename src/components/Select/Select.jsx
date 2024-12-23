/** @format */

import { useAppContext } from "../../context/state";
import { SelectCom, SelectEl, SelectHead, SelectText, SelectArrow } from "./styles";
import { selectHeadVariants } from "../../modules/useAnimation";

import Title from "../Title";
import List from "../List";

const Select = ({ select }) => {
  const { dataSky, setDataSky, showSelect, setShowSelect, resetTextarea, setResetTextarea } = useAppContext();
  const { name, text, label, items } = select;
  const { hover, tap, transition } = selectHeadVariants;

  const closeList = () => setShowSelect(false);

  const getText = ({ target }) => {
    const content = target.innerHTML;

    setDataSky((prevState) => ({
      ...prevState,
      [name]: content.replace(/<br>\s*/g, "\n"),
    }));

    !resetTextarea.active &&
      setResetTextarea((prevState) => ({
        ...prevState,
        active: true,
      }));

    closeList();
  };

  return (
    <SelectCom>
      {label && <Title title={label} />}
      <SelectEl className={showSelect ? "active" : ""}>
        <SelectHead
          onClick={() => setShowSelect(!showSelect)}
          variants={selectHeadVariants}
          whileHover={hover}
          whileTap={tap}
          transition={transition}
        >
          <SelectText>{!resetTextarea.active ? text : dataSky[name]}</SelectText>
          <SelectArrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z"
                fill="var(--orange)"
              />
            </svg>
          </SelectArrow>
        </SelectHead>
        {items && <List items={items} cb={getText} listType={"select"} />}
      </SelectEl>
    </SelectCom>
  );
};

export default Select;
