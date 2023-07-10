import { call, put,all,takeEvery } from 'redux-saga/effects';
import api from '../../services/api';
import { Image, ActionTypes } from './types';

import { fetchImagesSuccess, fetchImagesFailure, FetchImageDetailsRequestAction, fetchImageDetailsSuccess, fetchImageDetailsFailure } from './actions';

interface ResponseImages {
  data: Image[]
}

interface ResponseImageDetails {
  data: Image
}

function* fetchImagesSaga() {
  try {
    const response:ResponseImages = yield call(api.get, 'v2/list?page=1&limit=20');

    yield put(fetchImagesSuccess(response.data));
  } catch (err) {
    yield put(fetchImagesFailure("teste"));
  }
}


function* fetchImageDetailsSaga(action: FetchImageDetailsRequestAction) {
  try {
    const imageDetails: ResponseImageDetails = yield call(api.get, `id/${action.id}/info`);
    yield put(fetchImageDetailsSuccess(imageDetails.data));
  } catch (error) {
    yield put(fetchImageDetailsFailure('teste'));
  }
}


// Função para iniciar a saga
function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.FETCH_IMAGES_REQUEST, fetchImagesSaga),
    takeEvery(ActionTypes.FETCH_IMAGE_DETAILS_REQUEST, fetchImageDetailsSaga),
  ]);
}

export default rootSaga;