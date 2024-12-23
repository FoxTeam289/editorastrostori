/** @format */

import { useAppContext } from "../../context/state";
import { TitleCom, More, Error } from "./styles";
import { moreVariants } from "../../modules/useAnimation";

const Title = ({ title }) => {
  const { dataSky, setActivePopup, eventError } = useAppContext();
  const { text, el, type, more, error } = title;
  const { hover, tap, transition } = moreVariants;

  const Tag = type ? type : "p";

  const innerText = `${text} ${el && dataSky["event-name"] ? el : ""}`;

  return (
    <TitleCom>
      <Tag dangerouslySetInnerHTML={{ __html: innerText }} />
      {more && (
        <More variants={moreVariants} whileHover={hover} whileTap={tap} transition={transition} onClick={() => setActivePopup(true)}>
          {more}
        </More>
      )}
      {error && <Error className={eventError ? "active" : ""}>{error}</Error>}
    </TitleCom>
  );
};

export default Title;
