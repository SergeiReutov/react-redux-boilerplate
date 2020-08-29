import { OVERVIEW } from 'actions/ActionTypes';

export const initialState = {
  name: '',
  isLoading: false,
  error: null
};

export default function overview(state = initialState, action) {
  switch (action.type) {
    case OVERVIEW.FETCH.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case OVERVIEW.FETCH.SUCCESS:
      return {
        ...state,
        name: action.name,
        isLoading: false
      };
    case OVERVIEW.FETCH.ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case OVERVIEW.ERROR.CLEAR:
      return {
        ...state,
        error: initialState.error
      };
    case OVERVIEW.CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}
