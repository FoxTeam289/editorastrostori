export const data = {
  title: "Событие",
  input: {
    type: "text",
    name: "event-city",
    placeholder: "Введите город события",
  },
  otherInfo: {
    date: {
      type: "text",
      items: [
        {
          id: "day",
          placeholder: "дд",
        },
        {
          id: "month",
          placeholder: "мм",
        },
        {
          id: "year",
          placeholder: "гг",
        },
      ],
    },
    time: {
      type: "text",
      items: [
        {
          id: "minutes",
          placeholder: "--",
        },
        {
          id: "seconds",
          placeholder: "--",
        },
      ],
    },
  },
};
