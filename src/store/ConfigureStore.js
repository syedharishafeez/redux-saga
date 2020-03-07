import { createStore, applyMiddleware } from "redux";
import { watchIncrement, watchDecrement } from "../sagas/saga";
import reducer from "../reducer/counter";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchIncrement);
sagaMiddleware.run(watchDecrement);
