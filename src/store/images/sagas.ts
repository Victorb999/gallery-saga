import { call, put, all, takeEvery } from 'redux-saga/effects'
import api from '../../services/api'
import { Image, ActionTypes } from './types'

import {
  fetchImagesSuccess,
  fetchImagesFailure,
  FetchImageDetailsRequestAction,
  fetchImageDetailsSuccess,
  fetchImageDetailsFailure,
  FetchImagesRequestAction,
} from './actions'

interface ResponseImages {
  data: Image[]
}

interface ResponseImageDetails {
  data: Image
}

/**
 * A função que faz consulta na api buscando as imagens
 *
 * @param {FetchImagesRequestAction} action - A objeto de ação contendo os parâmetros
 * @return {void}
 */
function* fetchImagesSaga(action: FetchImagesRequestAction) {
  try {
    const response: ResponseImages = yield call(
      api.get,
      `v2/list?page=${action.page}&limit=20`,
    )

    yield put(fetchImagesSuccess(response.data))
  } catch (error) {
    yield put(fetchImagesFailure((error as Error).message))
  }
}

/**
 * A função que faz consulta na api buscando o detalhe de uma imagem
 *
 * @generator
 * @param {FetchImageDetailsRequestAction} action - A objeto de ação contendo os parâmetros
 */
function* fetchImageDetailsSaga(action: FetchImageDetailsRequestAction) {
  try {
    const imageDetails: ResponseImageDetails = yield call(
      api.get,
      `id/${action.id}/info`,
    )
    yield put(fetchImageDetailsSuccess(imageDetails.data))
  } catch (error) {
    yield put(fetchImageDetailsFailure((error as Error).message))
  }
}

// Função para iniciar a saga
function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.FETCH_IMAGES_REQUEST, fetchImagesSaga),
    takeEvery(ActionTypes.FETCH_IMAGE_DETAILS_REQUEST, fetchImageDetailsSaga),
  ])
}

export default rootSaga
