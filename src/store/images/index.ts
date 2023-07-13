import { Reducer } from 'redux'
import { ActionTypes, ImagesState, Image } from './types'

// Estado inicial
const INITIAL_STATE: ImagesState = {
  data: [],
  error: false,
  loading: false,
  dataImageDetail: {} as Image,
  page: 1,
}

// Definição do reducer
const reducer: Reducer<ImagesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_IMAGES_REQUEST:
      return { ...state, loading: true, error: false }
    case ActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, ...action.payload],
        page: state.page,
      }
    case ActionTypes.FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
        page: 1,
      }
    case ActionTypes.FETCH_IMAGE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case ActionTypes.FETCH_IMAGE_DETAILS_SUCCESS:
      return {
        ...state,
        dataImageDetail: action.payload,
        loading: false,
        error: false,
      }
    case ActionTypes.FETCH_IMAGE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case ActionTypes.CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
      }
    default:
      return state
  }
}

export default reducer
