import { applyMiddleware, createStore, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();

const configureStore = (preloadedState) => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
      )
    )
  );
  return store;
} 

export default configureStore;