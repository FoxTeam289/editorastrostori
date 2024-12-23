/** @format */

import { PhraseCom } from "./styles";
import Title from "../Title";
import Input from "../Input";

const Phrase = ({ phrase, onTop = 1 }) => {
  const { title, items } = phrase;

  return (
    <PhraseCom
      style={{
        zIndex: onTop,
      }}
    >
      <Title title={title} />
      {items.map((item) => (
        <Input key={item.id} item={item} def />
      ))}
    </PhraseCom>
  );
};

export default Phrase;
