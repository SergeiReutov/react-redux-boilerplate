import * as R from 'ramda';

export const getStatePart = R.prop('overview');

export const getIsLoading = R.pipe(
  getStatePart,
  R.prop('isLoading')
);

export const getError = R.pipe(
  getStatePart,
  R.prop('error')
);

export const getName = R.pipe(
  getStatePart,
  R.prop('name')
);
