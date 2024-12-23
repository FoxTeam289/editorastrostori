/** @format */

import { DescrCom } from "./styles";

const Descr = ({ descr }) => {
  const { text, el } = descr;

  return (
    <DescrCom>
      {el && <span>{el}</span>}
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </DescrCom>
  );
};

export default Descr;
