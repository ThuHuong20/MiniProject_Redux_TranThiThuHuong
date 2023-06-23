import {
    ADD_PRODUCT,
    DELETE_PRODUCT
}
    from "./constant";
export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});
export const deleteProduct = (productId) => ({
    type: DELETE_PRODUCT,
    payload: productId,
});