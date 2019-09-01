const types = {
  UPDATE_DETAILS: "UPDATE_DETAILS"
};
const initState = {
  details: {
    contactPerson: "Felix Susanto",
    contactNumber: "1234 5678",
    address: "Compassvale Drive",
    country: "Singapore"
  },
  currencyDefault: {
    currency: "SGD",
    currencySymbol: "$"
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_DETAILS:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export const actionUpdateDetails = (payload) => ({
  type: types.UPDATE_DETAILS,
  payload
});

export default reducer;
