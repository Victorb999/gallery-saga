/**
 * Action types
 */
export enum ImagesTypes {
  LOAD_REQUEST = 'LOAD_REQUEST',
  LOAD_SUCCCES = 'LOAD_SUCCCES',
  LOAD_FAILURE = 'LOAD_FAILURE'
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
  readonly loading: boolean
  readonly error: boolean
}