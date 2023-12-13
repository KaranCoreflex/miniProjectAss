import {takeLatest, call, put,all} from 'redux-saga/effects';

import { ADD_CATEGORY, ADD_CATEGORY_SUCCESS, ADD_PRODUCT, DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, LIST_CATEGORIES, LIST_CATEGORIES_SUCCESS, LIST_PRODUCTS, LIST_PRODUCTS_SUCCESS, UPDATE_CATEGORY, UPDATE_CATEGORY_SUCCESS, UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS } from '../constants';

import { HttpService } from '../../services/httpServices';
 
function loadCategories (){
    let serv = new HttpService();
    let response = serv.getCategories().then(resp => resp.data);
    return Promise.resolve(response);
}

function updateCategory (category){
  let serv = new HttpService();
  let response = serv.putCategories(category.CategoryId,category).then(resp => resp.data);
  return Promise.resolve(response);
}

function saveCategory(category) {
    let serv = new HttpService();
    let response = serv.postCategory(category).then(resp => resp.data);
    return Promise.resolve(response);
}

function deleteCategoryList(categoryId) {

  let serv = new HttpService();
  let response = serv.deleteCategory(categoryId).then(resp => resp.data);
  return Promise.resolve(response);
}

function loadProducts(){
  let serv = new HttpService();
  let response = serv.getProducts().then(res=>
    {
      return res.data
    }
    )
  return Promise.resolve(response)
}

function addProduct(prod){
  let serv = new HttpService();
  let response =  serv.postProduct(prod).then(res=>res.data)
  return Promise.resolve(response)
}

function updateProduct (prd){
  let product = {...prd}
  const{ProductUniqueId,...prod} = product
  let serv = new HttpService();
  let response = serv.putProduct(ProductUniqueId,prod).then(res=>res.data)
  return Promise.resolve(response)
}

function deleteProducts(id){
  let serv= new HttpService();
  let response = serv.deleteProduct(id).then(res=>res.data)
  return Promise.resolve(response)
}

function* addCategorySuccessOutputGeneraor(action){
  try {
    const category = action.payload;
    const cat ={...cat,CategoryId:parseInt(category.CategoryId)}
    const response = yield call(saveCategory, category);
    yield put({
        type: ADD_CATEGORY_SUCCESS,
        payload: response
    });
  }catch(e){
  }
}

function* addCategoryInput(){
     yield takeLatest(ADD_CATEGORY, addCategorySuccessOutputGeneraor);
} 


function* getCategoriesSuccessOutput(){
  
  try{
    const response = yield call(loadCategories);
    yield put ({
        type: LIST_CATEGORIES_SUCCESS,
        payload: response
    })
  }catch(e){
    console.log("error",e)
  }
}
function* updateCategorySuccessOutput(action){
  try{
    const response = yield call(updateCategory,action.payload);
    yield put ({
        type: UPDATE_CATEGORY_SUCCESS,
        payload: response
    })
  }catch(e){
    console.log("error",e)
  }
}
function* deleteCategorySuccessOutput(action){
  try{
    const response = yield call(deleteCategoryList(action.payload));
    yield put ({
        type: DELETE_CATEGORY_SUCCESS,
        payload: response
    })
  }catch(e){

  }
}


function* listProductsSuccessOutput(){
  console.log("Output ")
  try {
    const response = yield call(loadProducts)
    console.log("Product===>",response)
    yield put({
      type:LIST_PRODUCTS_SUCCESS,
      payload:response
    })
    
  } catch (error) {
      console.log("error",error)
  }
}


function* addProductSuccessOutput(action){
  console.log("Output====>",action.payload)
  try {
    const response = yield call(addProduct,action.payload)
    console.log("response=====>",response)
    yield put({
      type:ADD_CATEGORY_SUCCESS,
      payload:response
    })
    
  } catch (error) {
    console.log("error",error);
  }
}

function* updateProductSuccessOutput(action){
  console.log("Update===>out==>",action.payload)

  try {
    const response= yield call(updateProduct,action.payload)

    yield put({
      type:UPDATE_PRODUCT_SUCCESS,
      action:response
    })
    
  } catch (error) {
      console.log("error",error)
  }
}

function* deleteProductSuccessOutput(action){
  try {
      const response = yield call(deleteProducts,action.payload)
      yield put({
        type:DELETE_PRODUCT_SUCCESS,
        action:response
      })
  } catch (error) {
    console.log("error",error)
  }
}

function* getCategoriesInput(){
  yield takeLatest(LIST_CATEGORIES, getCategoriesSuccessOutput);
}
function* deleteCategoryInput(){
  yield takeLatest(DELETE_CATEGORY, deleteCategorySuccessOutput);
}
function* updateCategoryInput(){
  yield takeLatest(UPDATE_CATEGORY, updateCategorySuccessOutput);
}

function* listProductsInput(){
  yield takeLatest(LIST_PRODUCTS,listProductsSuccessOutput)
}

function* addProductInput(){
  yield takeLatest(ADD_PRODUCT,addProductSuccessOutput)
}

function* updateProductInput(){
  yield takeLatest(UPDATE_PRODUCT,updateProductSuccessOutput)
}

function* deleteProductInput(){
  yield takeLatest(DELETE_PRODUCT,deleteProductSuccessOutput)
}

export default function* rootSaga(){
  yield all([getCategoriesInput(), addCategoryInput(),deleteCategoryInput(),updateCategoryInput(),listProductsInput(),addProductInput(),updateProductInput(),deleteProductInput()]);
} 