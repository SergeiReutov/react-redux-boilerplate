import { OVERVIEW } from 'actions/ActionTypes';
import { takeEvery, call, put } from 'redux-saga/effects';
import { GET } from 'utils/api';
import { fetchOverviewSuccess, fetchOverviewError } from 'actions/overview';

export function* fetchOverviewSaga() {
  try {
    const response = yield call(GET, '/overview');
    yield put(fetchOverviewSuccess(response.name));
  } catch (e) {
    yield put(fetchOverviewError(e.message));
  }
}

export const overviewSagas = [
  takeEvery(OVERVIEW.FETCH.REQUEST, fetchOverviewSaga)
];
