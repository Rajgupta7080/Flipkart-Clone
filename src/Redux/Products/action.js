import useAPICall from "../../CustomHooks/useAPICall";
import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS
} from "./actionTypes";

export const getProductsSuccess = (data) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
});

export const getProductError = () => ({
    type: GET_PRODUCTS_ERROR,
});

export const getProductLoading = () => ({
    type: GET_PRODUCTS_LOADING,
});

export const getProductsInfinite = (data) => ({
    type: GET_PRODUCTS,
    payload: data,
});



export const getProducts = (url) => async (dispatch) => {
    const { getDataWithTotal } = useAPICall();

    dispatch(getProductLoading());
    const data = await getDataWithTotal(url);
    data ? dispatch(getProductsSuccess(data)) : dispatch(getProductError());
};

export const getInfiniteProducts = (url) => async (dispatch) => {
    const { getData } = useAPICall();
    const data = await getData(url);
    data ? dispatch(getProductsInfinite(data)) : dispatch(getProductError());
}
