import { ImagesTypes, Image } from './types';

// Interfaces para as ações
export interface FetchImagesRequestAction {
  type: ImagesTypes.LOAD_REQUEST;
}

export interface FetchImagesSuccessAction {
  type: ImagesTypes.LOAD_SUCCCES;
  payload: Image[];
}

export interface FetchImagesFailureAction {
  type: ImagesTypes.LOAD_FAILURE;
  error: string;
}

// Definição das funções que criam as ações
export const fetchImagesRequest = (): FetchImagesRequestAction => ({
  type: ImagesTypes.LOAD_REQUEST,
});

export const fetchImagesSuccess = (images: Image[]): FetchImagesSuccessAction => ({
  type: ImagesTypes.LOAD_SUCCCES,
  payload: images,
});

export const fetchImagesFailure = (error: string): FetchImagesFailureAction => ({
  type: ImagesTypes.LOAD_FAILURE,
  error,
});