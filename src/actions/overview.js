import { OVERVIEW } from './ActionTypes';

export const fetchOverview = () => ({
  type: OVERVIEW.FETCH.REQUEST
});

export const fetchOverviewSuccess = name => ({
  type: OVERVIEW.FETCH.SUCCESS,
  name
});

export const fetchOverviewError = error => ({
  type: OVERVIEW.FETCH.ERROR,
  error
});

export const clearError = () => ({
  type: OVERVIEW.ERROR.CLEAR
});

export const clearState = () => ({
  type: OVERVIEW.CLEAR_STATE
});
