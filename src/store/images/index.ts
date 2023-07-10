import { Reducer } from 'redux';
import { ActionTypes, ImagesState,Image } from './types';

// Estado inicial
const INITIAL_STATE: ImagesState = {
  data: [],
  error: false,
  loading: false,
  dataImageDetail: {} as Image
};

// Definição do reducer
const reducer: Reducer<ImagesState> = (
  state = INITIAL_STATE, action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_IMAGES_REQUEST:
      return { ...state, loading: true , error: false,};
    case ActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload,
        };
    case ActionTypes.FETCH_IMAGES_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
        };
    case ActionTypes.FETCH_IMAGE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.FETCH_IMAGE_DETAILS_SUCCESS:
      return {
        ...state,
        dataImageDetail: action.payload,
        loading: false,
        error: false,
      };
    case ActionTypes.FETCH_IMAGE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;