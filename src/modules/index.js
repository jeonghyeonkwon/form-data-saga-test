import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import loading from "./loading";
import upload, { uploadSaga } from "./upload";
const rootReducer = combineReducers({ loading, upload });

export function* rootSaga() {
  yield all([uploadSaga()]);
}
export default rootReducer;
