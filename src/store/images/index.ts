import { Reducer } from 'redux';
import { ImagesTypes, ImagesState } from './types';

// Estado inicial
const INITIAL_STATE: ImagesState = {
  data: [],
  error: false,
  loading: false,
};

// Definição do reducer
const reducer: Reducer<ImagesState> = (
  state = INITIAL_STATE, action
) => {
  switch (action.type) {
    case ImagesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ImagesTypes.LOAD_SUCCCES:
      return {
        ...state, loading: false, error: false, data: action.payload,
        };
    case ImagesTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
        };
    default:
      return state;
  }
};

export default reducer;