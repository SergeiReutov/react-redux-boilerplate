import { WITHDRAWAL } from './ActionTypes';

export const withdrawCash = amount => ({
  type: WITHDRAWAL.WITHDRAW_CASH.REQUEST,
  amount,
});
