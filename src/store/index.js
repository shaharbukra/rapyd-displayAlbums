import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "../middleware";
import { rootReducer } from "../reducers";

export function configureStore(initialState) {
  const middleware = composeWithDevTools(applyMiddleware(logger));

  const store = createStore(rootReducer, initialState, middleware);
  if (module.hot) {
    module.hot.accept("./../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
