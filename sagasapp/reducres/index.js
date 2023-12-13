import { ADD_CATEGORY,ADD_CATEGORY_SUCCESS,ADD_PRODUCT,DELETE_CATEGORY_SUCCESS,LIST_CATEGORIES,LIST_CATEGORIES_SUCCESS, LIST_PRODUCTS_SUCCESS} from "../constants";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    categories:[], /* for colleciton of categories */
    category:{}, /* Single Category */
    products:[],
    product:{}
};

export const reducers = createReducer(initialState, (builder)=>{
    /* Initial call, there is nothing is state */
    builder.addCase(LIST_CATEGORIES, (state,action)=>{
        state.categories = [];
        state.category = {};
    }).addCase(LIST_CATEGORIES_SUCCESS, (state, action) => {
        /* Add received category data in State */
        state.categories = action.payload;
        // console.log(`After success for LIST Categories = ${JSON.stringify(state.categories)}`);
    }).addCase(ADD_CATEGORY, (state,action) => {
        // state.products.push()
        state.category = action.payload;
    }).addCase(DELETE_CATEGORY_SUCCESS, (state,action) => {
        /* get the newly created category */
        // state.category = action.payload;
        // /* Mutate it in state */
        // state.categories.push(action.payload);
    }).addCase(LIST_PRODUCTS_SUCCESS,(state,action)=>{
        state.products=action.payload
    }).addCase(ADD_PRODUCT,(state,action)=>{
        state.product = action.payload
    })
});
