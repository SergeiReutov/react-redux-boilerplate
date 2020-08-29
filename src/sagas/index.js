import { all } from 'redux-saga/effects';
import { overviewSagas } from './overview';

export default function* rootSaga() {
  yield all([
    ...overviewSagas
  ]);
}
