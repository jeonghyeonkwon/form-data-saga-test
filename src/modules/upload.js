import { createAction, handleAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as uploadApi from "../lib/api/upload";

const INITIALIZE = "upload/INITIALIZE";
const CHANGE_FIELD = "upload/CHANGE_FIELD";

export const initialize = createAction(INITIALIZE);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
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
  },
  initialState
);
