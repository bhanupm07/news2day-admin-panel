export const getStringFromArray = (array) => {
  let string = "";
  array.forEach((item, index) => {
    if (index === 0) {
      string = item;
    } else {
      string += ", " + item;
    }
  });
  return string;
};

export function convertToSimpleDate(datetimeString) {
  const date = new Date(datetimeString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}
