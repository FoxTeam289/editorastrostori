/** @format */

import { ListCom, Close, Scroll, Item } from "./styles";
import { listVariants } from "../../modules/useAnimation";

const List = ({ items, cb, listType, closeList }) => {
  const { hover, tap, transition } = listVariants;

  return (
    <ListCom className={listType ? listType : ""}>
      {closeList && <Close onClick={closeList} />}
      <Scroll>
        {items.map(({ name, coords, ind }) => (
          <Item
            variants={listVariants}
            whileHover={hover}
            whileTap={tap}
            transition={transition}
            onClick={cb}
            key={ind ? ind : name}
            dangerouslySetInnerHTML={{ __html: name }}
          />
        ))}
      </Scroll>
    </ListCom>
  );
};

export default List;
