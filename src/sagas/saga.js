import { takeEvery, put } from "redux-saga/effects";

function* incrementAsync(props) {
  console.log("In incrementAsync = ", props);
  yield put({ type: "INCREMENT_ASYNC", incrementBy: props.incrementBy });
}

function* decrementAsync(props) {
  console.log("In decrementAsync");
  yield put({ type: "DECREMENT_ASYNC", decrementBy: props.decrementBy });
}

export function* watchIncrement() {
  console.log("In watchIncrement");
  yield takeEvery("INCREMENT", incrementAsync);
}

export function* watchDecrement() {
  console.log("In watchDecrement");
  yield takeEvery("DECREMENT", decrementAsync);
}
