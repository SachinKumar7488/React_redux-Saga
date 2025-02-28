import { takeEvery, put, call } from 'redux-saga/effects';
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    try {
        let response = yield call(fetch, 'http://localhost:3500/product');
        let data = yield response.json();
        console.warn("Fetched product list:", data);
        yield put({ type: SET_PRODUCT_LIST, data });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function* searchProducts(action) {
    try {
        let response = yield call(fetch, `http://localhost:3500/product?color=${action.query}`);
        let data = yield response.json();
        console.warn("Fetched searched products:", data);
        yield put({ type: SET_PRODUCT_LIST, data }); // Use correct data variable
    } catch (error) {
        console.error("Error searching products:", error);
    }
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
