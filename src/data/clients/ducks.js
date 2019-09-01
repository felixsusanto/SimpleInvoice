const types = {
  ADD_CLIENT: "ADD_CLIENT",
  UPDATE_CLIENT: "UPDATE_CLIENT",
  REMOVE_CLIENT: "REMOVE_CLIENT"
}
const initState = [];

const reducer = (state=initState, action) => {
  switch (action.type) {
    case types.ADD_CLIENT:
      return [...state, action.payload];
    case types.UPDATE_CLIENT:
      const result = [...state];
      result[action.payload.index] = action.payload.formValues;
      return result;
    case types.REMOVE_CLIENT:
      const remainder = [...state];
      remainder.splice(action.payload, 1);
      return remainder;
    default:
      return state;
  }
};

export const actionAddClient = (payload) => ({
  type: types.ADD_CLIENT,
  payload
})
export const actionRemoveClient = (payload) => ({
  type: types.REMOVE_CLIENT,
  payload
})
export const actionUpdateClient = ({index, formValues}) => ({
  type: types.UPDATE_CLIENT,
  payload: {
    index,
    formValues
  }
})

export default reducer;