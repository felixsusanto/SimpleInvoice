import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import clientsReducer from "./clients/ducks";
import globalReducer from "./global/ducks";



const createRootReducer = historyArg =>
  combineReducers({
    global: globalReducer,
    clients: clientsReducer,
    form: formReducer,
    router: connectRouter(historyArg)
  });

export default createRootReducer;