import { applyMiddleware,legacy_createStore as createStore } from "@reduxjs/toolkit";

import { weatherReducer } from "../reducer/weatherReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(weatherReducer,applyMiddleware(thunk, logger));


