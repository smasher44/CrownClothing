import { createStore, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

// const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware());
export const persistor = persistStore(store);


//export default { store, persistor };



 










