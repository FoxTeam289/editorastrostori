/** @format */

const useTimeCheck = (value) => {
  let formattedValue = value.replace(/[^0-9]/g, "");

  if (formattedValue.length > 2) {
    formattedValue = `${formattedValue.slice(0, 2)}:${formattedValue.slice(2)}`;
  }

  const parts = formattedValue.split(":");
  const hours = Number(parts[0]);
  const minutes = Number(parts[1] || "");

  if (formattedValue.length > 5 || hours > 23 || minutes > 59) return false;
  else return formattedValue;
};

export default useTimeCheck;
