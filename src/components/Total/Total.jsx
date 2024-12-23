/** @format */

import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useAppContext } from "../../context/state";
import { TotalCom, Wrap, Text, Price } from "./styles";

import Btn from "../Btn";

const Total = ({ btns }) => {
  const { dataSky, total, setTotal, file } = useAppContext();

  const sumPrices = (data) =>
    Object.keys(data)
      .filter((key) => key.includes("price") && data[key] !== 1)
      .reduce((sum, key) => sum + (data[key] || 0), 0);

  useEffect(() => (!file ? setTotal(sumPrices(dataSky)) : setTotal(1200)), [dataSky, file]);

  const props = useSpring({ number: total, from: { number: 0 } });

  return (
    <TotalCom>
      <Wrap>
        <Text>Итого:</Text>
        <Price>
          <animated.span>{props.number.to((n) => n.toFixed(0))}</animated.span>
          <span>&nbsp;₽</span>
        </Price>
      </Wrap>
      {btns.map((item) => (
        <Btn key={item.id} btn={item} />
      ))}
    </TotalCom>
  );
};

export default Total;
