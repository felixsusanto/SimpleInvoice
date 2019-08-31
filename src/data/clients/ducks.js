const types = {
  ADD_CLIENT: "ADD_CLIENT"
}
const initState = [];

const reducer = (state=initState, action) => {
  switch (action.type) {
    case types.ADD_CLIENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const actionAddClient = (payload) => ({
  type: types.ADD_CLIENT,
  payload
})

export default reducer;