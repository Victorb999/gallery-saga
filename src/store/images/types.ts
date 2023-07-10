/**
 * Action types
 */
export enum ActionTypes {
  FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST',
  FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
  FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE',
  FETCH_IMAGE_DETAILS_REQUEST = 'FETCH_IMAGE_DETAILS_REQUEST',
  FETCH_IMAGE_DETAILS_SUCCESS = 'FETCH_IMAGE_DETAILS_SUCCESS',
  FETCH_IMAGE_DETAILS_FAILURE = 'FETCH_IMAGE_DETAILS_FAILURE',
  CHANGE_PAGE = 'CHANGE_PAGE',
}

/**
 * Data types
 */
export interface Image {
  id: number
  width: number
  height: number
  author: string
  url: string
  download_url: string
}

/**
 * State type
 */
export interface ImagesState {
  readonly data: Image[]
  readonly dataImageDetail: Image
  readonly loading: boolean
  readonly error: boolean
  readonly page: number
}
