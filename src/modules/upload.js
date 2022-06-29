import { createAction, handleAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as uploadApi from "../lib/api/upload";
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = "upload/INITIALIZE";
const CHANGE_FIELD = "upload/CHANGE_FIELD";
const CHANGE_FILES = "upload/CHANGE_FILES";

export const [FETCH_BOARD, FETCH_BOARD_SUCCESS, FETCH_BOARD_FAILURE] =
  createRequestActionTypes("upload/FETCH_BOARD");
export const fetchBoard = createAction(FETCH_BOARD, ({ form }) => ({ form }));
const fetchBoardSaga = createRequestSaga(FETCH_BOARD, uploadApi.fetchUpload);

export const initialize = createAction(INITIALIZE);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const changeFiles = createAction(CHANGE_FILES, ({ files }) => ({
  files,
}));
const initialState = {
  boardForm: {
    title: "",
    files: [],
  },
};

export default handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        if (key !== "files") {
          draft.boardForm[key] = value;
        } else {
          draft.boardForm.files.push(value);
        }
      }),
    [CHANGE_FILES]: (state, { payload: { files } }) =>
      produce(state, (draft) => {
        draft.boardForm.files = files;
      }),
  },
  initialState
);
export function* uploadSaga() {
  yield takeLatest(FETCH_BOARD, fetchBoardSaga);
}
