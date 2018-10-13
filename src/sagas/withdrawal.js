import { takeEvery } from 'redux-saga/effects';
import { WITHDRAWAL } from 'actions/ActionTypes';

function* withdrawCash({ amount }) {
  yield console.log(amount);
}

export function* withdrawCashSaga() {
  yield takeEvery(WITHDRAWAL.WITHDRAW_CASH.REQUEST, withdrawCash);
}
