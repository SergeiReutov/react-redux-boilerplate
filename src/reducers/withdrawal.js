import { WITHDRAWAL } from 'actions/ActionTypes';

const initialState = {
  cash: [],
  isLoading: false,
  error: '',
};

export default function withdrawal(state = initialState, action) {
  switch (action.type) {
    case WITHDRAWAL.WITHDRAW_CASH.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case WITHDRAWAL.WITHDRAW_CASH.SUCCESS:
      return {
        ...state,
        cash: action.cash,
        isLoading: false,
      };
    case WITHDRAWAL.WITHDRAW_CASH.FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
