import { takeEvery, put } from "redux-saga/effects";

function* incrementAsync() {
  console.log("In incrementAsync");
  yield put({ type: "INCREMENT_ASYNC" });
}

function* decrementAsync() {
  console.log("In decrementAsync");
  yield put({ type: "DECREMENT_ASYNC" });
}

export function* watchIncrement() {
  console.log("In watchIncrement");
  yield takeEvery("INCREMENT", incrementAsync);
}

export function* watchDecrement() {
  console.log("In watchDecrement");
  yield takeEvery("DECREMENT", decrementAsync);
}
