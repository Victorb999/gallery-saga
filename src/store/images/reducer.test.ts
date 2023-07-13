import reducer from './index'
import { ActionTypes, ImagesState, Image } from './types'

const mockImages = [
  {
    id: 1,
    author: 'John Doe',
    download_url: 'https://example.com/image1.jpg',
    width: 100,
    height: 100,
    url: 'https//example.com/image.jpg',
  },
  {
    id: 2,
    author: 'Jane Smith',
    download_url: 'https://example.com/image2.jpg',
    width: 100,
    height: 100,
    url: 'https//example.com/image.jpg',
  },
]

describe('reducer', () => {
  const initialState: ImagesState = {
    data: [],
    error: false,
    loading: false,
    dataImageDetail: {} as Image,
    page: 1,
  }

  it('should handle FETCH_IMAGES_REQUEST', () => {
    const action = { type: ActionTypes.FETCH_IMAGES_REQUEST }
    const newState = reducer(initialState, action)
    expect(newState).toEqual({
      ...initialState,
      loading: true,
      error: false,
    })
  })

  it('should handle FETCH_IMAGES_SUCCESS', () => {
    const data = mockImages
    const action = { type: ActionTypes.FETCH_IMAGES_SUCCESS, payload: data }
    const newState = reducer(initialState, action)
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error: false,
      data: [...initialState.data, ...data],
      page: initialState.page,
    })
  })

  it('should handle FETCH_IMAGES_FAILURE', () => {
    const action = { type: ActionTypes.FETCH_IMAGES_FAILURE, error: true }
    const newState = reducer(initialState, action)
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error: true,
      data: [],
      page: 1,
    })
  })

  it('should handle FETCH_IMAGE_DETAILS_REQUEST', () => {
    const action = { type: ActionTypes.FETCH_IMAGE_DETAILS_REQUEST }
    const newState = reducer(initialState, action)
    expect(newState).toEqual({
      ...initialState,
      loading: true,
      error: false,
    })
  })

  it('should handle FETCH_IMAGE_DETAILS_SUCCESS', () => {
    const dataImageDetail = {
      id: 1,
      author: 'John Doe',
      download_url: 'https://example.com/image1.jpg',
      width: 100,
      height: 100,
      url: 'https//example.com/image.jpg',
    }
    const action = {
      type: ActionTypes.FETCH_IMAGE_DETAILS_SUCCESS,
      payload: dataImageDetail,
    }
    const newState = reducer(initialState, action)
    expect(newState).toEqual({
      ...initialState,
      dataImageDetail,
      loading: false,
      error: false,
    })
  })

  it('should handle FETCH_IMAGE_DETAILS_FAILURE', () => {
    const action = {
      type: ActionTypes.FETCH_IMAGE_DETAILS_FAILURE,
      error: true,
    }
    const newState = reducer(initialState, action)
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error: true,
    })
  })

  it('should handle CHANGE_PAGE', () => {
    const page = 2
    const action = { type: ActionTypes.CHANGE_PAGE, page }
    const newState = reducer(initialState, action)
    expect(newState).toEqual({
      ...initialState,
      page,
    })
  })

  it('should return the initial state for unknown action type', () => {
    const action = { type: 'UNKNOWN_ACTION' }
    const newState = reducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})
