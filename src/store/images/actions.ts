import { ActionTypes, Image } from './types';

// Interfaces para as ações
export interface FetchImagesRequestAction {
  type: ActionTypes.FETCH_IMAGES_REQUEST;
}

export interface FetchImagesSuccessAction {
  type: ActionTypes.FETCH_IMAGES_SUCCESS;
  payload: Image[];
}

export interface FetchImagesFailureAction {
  type: ActionTypes.FETCH_IMAGES_FAILURE;
  error: string;
}

export interface FetchImageDetailsRequestAction {
  type: ActionTypes.FETCH_IMAGE_DETAILS_REQUEST;
  id: string;
}

export interface FetchImageDetailsSuccessAction {
  type: ActionTypes.FETCH_IMAGE_DETAILS_SUCCESS;
  payload: Image;
}

export interface fetchImageDetailsFailureAction {
  type: ActionTypes.FETCH_IMAGE_DETAILS_FAILURE;
  error: string;
}

// Definição das funções que criam as ações
export const fetchImagesRequest = (): FetchImagesRequestAction => ({
  type: ActionTypes.FETCH_IMAGES_REQUEST,
});

export const fetchImagesSuccess = (images: Image[]): FetchImagesSuccessAction => ({
  type: ActionTypes.FETCH_IMAGES_SUCCESS,
  payload: images,
});

export const fetchImagesFailure = (error: string): FetchImagesFailureAction => ({
  type: ActionTypes.FETCH_IMAGES_FAILURE,
  error,
});

export const fetchImageDetailsRequest = (id: string): FetchImageDetailsRequestAction => ({
  type: ActionTypes.FETCH_IMAGE_DETAILS_REQUEST,
  id,
});

export const fetchImageDetailsSuccess = (image: Image): FetchImageDetailsSuccessAction => ({
  type: ActionTypes.FETCH_IMAGE_DETAILS_SUCCESS,
  payload: image,
});

export const fetchImageDetailsFailure = (error: string): fetchImageDetailsFailureAction => ({
  type: ActionTypes.FETCH_IMAGE_DETAILS_FAILURE,
  error,
});