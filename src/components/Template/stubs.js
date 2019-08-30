import moment from "moment";

const description = index => {
  const longText =
    "Potential long description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Potential long description: Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const htmlString = `
    HTML String here, some breakdown and description!
    <ul>
      <li>Description 1</li>
      <li>Description 2</li>
    </ul>
  `;
  if(index === 0) {
    return longText;
  }
  if(index === 1) {
    return htmlString;
  }
  if (index < 4) {
    return "Optional Description";
  }
};
const today = moment().toString();
const weekLater = moment().add(7, 'days').toString();

export default {
  client: {
    contactPerson: "Client Contact",
    companyName: "Client Business Name",
    country: "Country"
  },
  dates: {
    issued: today,
    due: weekLater
  },
  invoice: {
    id: "0000002",
    amountPaid: 300,
    discount: 0.05,
    tax: 0.05,
    details: [...Array(6).keys()].map(idx => ({
      title: `Project Deliverables ${idx + 1}`,
      description: description(idx),
      rate: 100.3 - idx,
      qty: 3 + idx
    }))
  },
  issuer: {
    contactPerson: "Issuer Name Here",
    contactNumber: "1234 5678",
    address: "Issuer Business Address",
    country: "Country"
  }
};
