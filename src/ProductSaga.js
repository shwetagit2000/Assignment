import {takeEvery,put} from 'redux-saga/effects';
import { ProductList ,setProductList} from './action/ProductAction';

function* getProducts()
{
  let data=yield fetch("http://localhost:3500/product");
data= yield data.json()
   
    yield put({type:"SET_PRODUCT_LIST",data})

}

function* ProductSaga(){
    yield takeEvery("PRODUCT_LIST",getProducts)
}
export default ProductSaga;