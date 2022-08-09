import { createStore,applyMiddleware,Store,AnyAction } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware()

const store: Store<unknown,AnyAction> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch