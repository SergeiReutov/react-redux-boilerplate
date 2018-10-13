import * as R from 'ramda';

export const getWithdrawal = state => R.prop('withdrawal', state);

export const getCash = state => R.prop('cash', getWithdrawal(state));

export const getIsLoading = state => R.prop('isLoading', getWithdrawal(state));

export const getError = state => R.prop('error', getWithdrawal(state));
