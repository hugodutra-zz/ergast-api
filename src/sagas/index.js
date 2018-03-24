import seasonSaga from './seasonsSaga';

function* mainSaga() {
    yield* seasonSaga();
}

export default mainSaga;