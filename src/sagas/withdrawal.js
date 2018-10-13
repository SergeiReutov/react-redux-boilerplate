import { takeEvery, call, put } from 'redux-saga/effects';
import { WITHDRAWAL } from 'actions/ActionTypes';
import { GET } from 'utils/api';

function* withdrawCash({ amount }) {
  try {
    const response = yield call(GET, `/withdraw/${amount}`);
    yield put({ type: WITHDRAWAL.WITHDRAW_CASH.SUCCESS, cash: response });
  } catch (e) {
    yield put({ type: WITHDRAWAL.WITHDRAW_CASH.FAILURE, error: e.message });
  }
}

export function* withdrawCashSaga() {
  yield takeEvery(WITHDRAWAL.WITHDRAW_CASH.REQUEST, withdrawCash);
}
