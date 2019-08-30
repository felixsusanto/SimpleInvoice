export default {
  client: {
    contactPerson: "Client Contact",
    companyName: "Client Business Name",
    country: "Country"
  },
  dates: {
    issued: new Date().toString(),
    due: new Date().toString()
  },
  invoice: {
    id: "0000002",
    amountPaid: 30,
    details: [...Array(6).keys()].map(idx => ({
      title: `Project Deliverables ${idx + 1}`,
      description:
        idx === 0
          ? "Potential long description: Lorem ipsum dolor sit amet consectetur adipisicing elit."
          : idx > 2
          ? ""
          : "Optional Description",
      rate: 100 + idx,
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
