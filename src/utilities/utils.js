export const required = value =>
  value || typeof value === "number" ? undefined : "Required";
export const formatNumberToString = number => {
  return typeof number === "undefined" ? "" : String(number);
};
