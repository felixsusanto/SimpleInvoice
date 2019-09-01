import _ from "lodash";

const types = {
  ADD_INVOICE_RECORD: "ADD_INVOICE_RECORD"
};
const initState = [];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_INVOICE_RECORD:
      const newState = _.cloneDeep(state);
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export const actionUpdateDetails = payload => ({
  type: types.ADD_INVOICE_RECORD,
  payload
});

export default reducer;
