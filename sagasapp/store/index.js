/* eslint-disable prettier/prettier */
/* Create store and make suire that the SAGA Midfdleware and Reducer is used to configure it*/
/*
 create a Saga Middleware using @redux-saga/core package
 npm install @redux-saga/core
 This package provide 'creareSagaMiddleware()' method
*/

import createSagaMiddleware from "@redux-saga/core";
import {reducers} from './../reducres';
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import rootSaga  from "../effects";
/* an object that will be used to create and initialize the Middleware are root level */
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

/* store */

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),
});

/* Run the middleware at global level so that they will monitor all actions */

sagaMiddleware.run(rootSaga);

