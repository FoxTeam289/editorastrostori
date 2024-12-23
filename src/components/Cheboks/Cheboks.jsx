/** @format */

import { CheboksCom } from "./styles";

import Checkbox from "../Checkbox";

const Cheboks = ({ items }) => (
  <CheboksCom>
    {items.map((item) => (
      <Checkbox key={item.title} data={item} />
    ))}
  </CheboksCom>
);

export default Cheboks;
