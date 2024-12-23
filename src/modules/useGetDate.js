/** @format */

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const useGetDate = ({ dataSky, full = false }) => {
  const montString = dataSky["event-month"] ? months[Number(dataSky["event-month"]) - 1] : months[0];
  const montNumber = dataSky["event-month"] ? dataSky["event-month"] : 1;

  const day = dataSky["event-day"] ? Number(dataSky["event-day"]) : 1;
  const year = dataSky["event-year"] ? Number(dataSky["event-year"]) : new Date().getFullYear() - 6;
  const time = dataSky["event-time"] ? `${dataSky["event-time"]}:00` : "00:00:00";

  const fullDate = `${montString} ${day}, ${year} ${time}`;
  const skyDate = `${Number(day) <= 9 ? `0${day}` : day}.${Number(montNumber) <= 9 ? `0${montNumber}` : montNumber}.${year}`;

  return !full ? new Date(fullDate) : skyDate;
};

export default useGetDate;
