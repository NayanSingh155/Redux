import axios from "axios";
import * as types from "./actionType";

const getBookRequest = () => {
  return {
    type: types.GET_BOOKS_REQUEST,
  };
};

const getBookSuccess = (payload) => {
  return {
    type: types.GET_BOOKS_SUCCESS,
  };
};

const getBookError = () => {
  return {
    type: types.GET_BOOKS_ERROR,
  };
};

function getBooks() {
  return async function (dispatch) {
    dispatch(getBookRequest());
    return axios
      .get("http://localhost:8080/books")
      .then((r) => {
        dispatch(getBookSuccess(r.data));
      })
      .catch((e) => {
        dispatch(getBookError());
      });
  };
}
export { getBooks };
