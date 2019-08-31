import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import clientsReducer from "./clients/ducks";

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const createRootReducer = historyArg =>
  combineReducers({
    counterReducer,
    clients: clientsReducer,
    form: formReducer,
    router: connectRouter(historyArg)
  });

export default createRootReducer;