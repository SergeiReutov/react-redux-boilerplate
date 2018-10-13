import { fork } from 'redux-saga/effects';
import { withdrawCashSaga } from './withdrawal';

export default function* rootSaga() {
  yield fork(withdrawCashSaga);
}
