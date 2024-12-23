/** @format */

import useGetRandomNumber from "./useGetRandomNumber";

const useGetEvent = (value, setEvents) => {
  ymaps.geocode(value, { results: 3 }).then((res) => {
    setEvents([]);

    const items = res.geoObjects;

    items.each((obj) => {
      const name = `${obj.getAddressLine()}`;
      const coords = {
        lat: obj.geometry.getCoordinates()[0],
        lon: obj.geometry.getCoordinates()[1],
      };

      setEvents((prevState) => [
        ...prevState,
        {
          name,
          coords,
          ind: useGetRandomNumber(10),
        },
      ]);
    });
  });
};

export default useGetEvent;
