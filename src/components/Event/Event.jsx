/** @format */

import { useAppContext } from "../../context/state";
import { EventCom, Grid, Btn } from "./styles";
import { timeVariants } from "../../modules/useAnimation";

import Title from "../Title";
import Descr from "../Descr";
import Input from "../Input";
import List from "../List";

const Event = ({ event, onTop = 1 }) => {
  const { events, showEvents, dataSky, setDataSky, setShowEvents, showTime, setShowTime } = useAppContext();
  const { title, descr, items } = event;
  const { hover, tap, transition } = timeVariants;

  const closeList = () => setShowEvents(false);

  const getData = ({ target }) => {
    const content = target.textContent;
    const { lat, lon } = events.find(({ name }) => name === content)?.coords || null;

    setDataSky((prevState) => ({
      ...prevState,
      event: content,
      coords: {
        lat,
        lon,
      },
    }));

    closeList();
  };

  const handleClick = () => setShowTime(!showTime);

  return (
    <EventCom
      className={showEvents ? "active" : ""}
      style={{
        zIndex: onTop,
      }}
    >
      <Title title={title} />
      {dataSky["event-name"] && <Descr descr={descr} />}
      <Grid>
        {items.map((item) => (
          <Input key={item.id} item={item} mod={"event"} />
        ))}
        <Btn
          className={showTime ? "show" : ""}
          onClick={handleClick}
          variants={timeVariants}
          whileHover={hover}
          whileTap={tap}
          transition={transition}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 0.25C7.28446 0.25 4.5928 1.71662 2.83476 3.54227C1.10654 5.33695 0.25 7.51504 0.25 9C0.25 10.485 1.10654 12.663 2.83476 14.4577C4.5928 16.2834 7.28446 17.75 11 17.75C14.7155 17.75 17.4072 16.2834 19.1652 14.4577C20.8935 12.663 21.75 10.485 21.75 9C21.75 7.51504 20.8935 5.33695 19.1652 3.54227C17.4072 1.71662 14.7155 0.25 11 0.25ZM10.9999 6.75C9.75727 6.75 8.74991 7.75736 8.74991 9C8.74991 10.2426 9.75727 11.25 10.9999 11.25C12.2425 11.25 13.2499 10.2426 13.2499 9C13.2499 7.75736 12.2425 6.75 10.9999 6.75ZM7.24991 9C7.24991 6.92893 8.92884 5.25 10.9999 5.25C13.071 5.25 14.7499 6.92893 14.7499 9C14.7499 11.0711 13.071 12.75 10.9999 12.75C8.92884 12.75 7.24991 11.0711 7.24991 9Z"
              fill="var(--orange)"
            />
          </svg>
        </Btn>
      </Grid>
      <List items={events} cb={getData} closeList={closeList} listType={"event"} />
    </EventCom>
  );
};

export default Event;
