import moment from "moment";
import numeral from "numeral";

export const dateParser = str => {
  const date = new Date(str);
  return moment(date).format("DD MMM YYYY");
};

export const percentFormatter = number => numeral(number).format("0%");

export const formatter = number => numeral(number).format("0,0.00");

export const sumLineTotal = (arrayDetails, paid, tax, discount) => {
  tax = tax || 0;
  discount = discount || 0;
  const subtotal = arrayDetails
    .map(obj => obj.rate * obj.qty)
    .reduce((a, b) => a + b, 0);
  const formatted = formatter(subtotal);
  const rawTax = (1 - discount) * subtotal * tax;
  const rawDiscount = subtotal * discount;
  const rawAmountDue = subtotal - paid + rawTax - rawDiscount;
  return {
    details: arrayDetails.map(obj => {
      const totalDetail = obj.rate * obj.qty;
      return {
        raw: totalDetail,
        formatted: formatter(totalDetail)
      };
    }),
    subtotal: {
      raw: subtotal,
      formatted
    },
    discount: {
      raw: rawDiscount,
      formatted: formatter(rawDiscount)
    },
    tax: {
      raw: rawTax,
      formatted: formatter(rawTax)
    },
    amountDue: {
      raw: rawAmountDue,
      formatted: formatter(rawAmountDue)
    }
  };
};
