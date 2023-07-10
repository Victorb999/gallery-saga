import { call, put,all,takeEvery } from 'redux-saga/effects';
import api from '../../services/api';
import { Image, ImagesTypes } from './types';

import { fetchImagesSuccess, fetchImagesFailure } from './actions';

interface Response {
  data: Image[]
}

export function* fetchImagesSaga() {
  try {
    const response:Response = yield call(api.get, 'v2/list?page=1&limit=20');

    yield put(fetchImagesSuccess(response.data));
  } catch (err) {
    yield put(fetchImagesFailure("teste"));
  }
}


// Função para iniciar a saga
function* rootSaga() {
  yield all([takeEvery(ImagesTypes.LOAD_REQUEST, fetchImagesSaga)]);
}

export default rootSaga;