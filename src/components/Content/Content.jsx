/** @format */

import { useEffect } from "react";
import { useAppContext } from "../../context/state";
import { ContentCom, Wrap } from "./styles";

import Stars from "../Stars";
import Title from "../Title/Title";
import Grid from "../Grid";
import Event from "../Event";
import Phrase from "../Phrase";
import Cheboks from "../Cheboks";
import Fastening from "../Fastening";
import Total from "../Total";

import main from "../../data/main.json";
import design from "../../data/design.json";
import designtransparent from "../../data/designtransparent.json";
import size from "../../data/size.json";
import receive from "../../data/receive.json";
import language from "../../data/language.json";
import event from "../../data/event.json";
import phrase from "../../data/phrase.json";
import name from "../../data/name.json";
import options from "../../data/options.json";
import fastening from "../../data/fastening.json";
import btns from "../../data/btns.json";

const Content = () => {
  const { dataSky, setDataSky, onlyMin, setOnlyMin, setFile } = useAppContext();

  useEffect(() => {
    setOnlyMin(dataSky.design === "transparent");

    setDataSky((prevState) => {
      if (dataSky.design === "transparent") {
        return {
          ...prevState,
          [size.items[0].name]: size.items[0].id,
          [receive.items[0].name]: receive.items[0].id,
          [`size-price`]: 1,
        };
      }
      const { [designtransparent.name]: _, ...rest } = prevState;
      return rest;
    });
  }, [dataSky.design]);

  useEffect(() => (dataSky.receive === "file" ? setFile(true) : setFile(false)), [dataSky.receive]);

  useEffect(() => {
    if (dataSky.constellation) return;

    setDataSky((prevState) => ({
      ...prevState,
      language: "ru",
    }));
  }, [dataSky.constellation]);

  return (
    <ContentCom>
      <Wrap>
        <Title title={main.title} />
        <Grid typGrid={design} col={4} mod={"design"} big />
        {onlyMin && <Grid typGrid={designtransparent} col={4} mod={"design"} big />}
        <Grid typGrid={size} col={4} colMob={2} />
        <Grid typGrid={name} col={1} colMob={1} />
        <Event event={event} onTop={9} />
        <Phrase phrase={phrase} onTop={8} />
        <Grid typGrid={receive} col={!onlyMin ? 2 : 1} colMob={!onlyMin ? 3 : 1} mod={!onlyMin ? "receive" : ""} />
        <Cheboks items={options} />
        {dataSky.constellation && <Grid typGrid={language} col={8} colMob={2} />}
        <Fastening fastening={fastening} />
        <Total btns={btns} />
      </Wrap>
      <Stars />
    </ContentCom>
  );
};

export default Content;
