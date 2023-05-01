import { call, put } from "redux-saga/effects";

import { startLoading, finishLoading } from "../modules/loading";

export const createRequestActionTypes = (type: string) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export default function createRequestSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: any) {
    yield put(startLoading(type));

    try {
      const response: ResponseGenerator = yield call(
        request,
        action.payload as any
      );
      console.log(response);
      yield put({
        type: SUCCESS,
        payload: response.data as any,
        meta: response,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
