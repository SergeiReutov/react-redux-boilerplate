import * as R from 'ramda';

export const voidFn = () => {};

export const isNot = fn => R.pipe(fn, R.not);
