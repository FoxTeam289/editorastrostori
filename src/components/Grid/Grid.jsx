/** @format */

import { GridCom, GridScroll } from "./styles";
import Title from "../Title";
import Input from "../Input";

const Grid = ({ children, typGrid, col, colMob, big, mod }) => {
  if (children) {
    return (
      <GridCom>
        <GridScroll $styledCol={col} $styledColMob={colMob}>
          {children}
        </GridScroll>
      </GridCom>
    );
  } else {
    const { title, items } = typGrid;

    return (
      <GridCom>
        {title && <Title title={title} />}
        {items && (
          <GridScroll $styledCol={col} $styledColMob={colMob}>
            {items.map((item) => (
              <Input key={item.id} item={item} big={big} mod={mod} />
            ))}
          </GridScroll>
        )}
      </GridCom>
    );
  }
};

export default Grid;
