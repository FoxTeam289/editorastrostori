/** @format */

const useDateCheck = (value, id) => {
  const valNumber = parseInt(value, 10);
  const day = id.includes("day");
  const month = id.includes("month");
  const year = id.includes("year");

  const minYear = 1;
  const maxYear = new Date().getFullYear();

  if (
    (day && (valNumber > 31 || valNumber <= 0)) ||
    (month && (valNumber > 12 || valNumber <= 0)) ||
    (year && (value.length > 4 || (value.length === 4 && (valNumber < minYear || valNumber > maxYear))))
  ) {
    return false;
  } else {
    return true;
  }
};

export default useDateCheck;
