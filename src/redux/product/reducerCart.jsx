import { DELETE_PRODUCT } from "./constant";
const initialState = JSON.parse(localStorage.getItem("listProductsLocal")) || []
const productEdit = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            const filterProduct = state.filter((product) => product.productId !== action.payload)
            console.log(filterProduct);
            localStorage.setItem("listProductsLocal", JSON.stringify(filterProduct))
            return filterProduct;

        default:
            return state;
    }
}
export default productEdit;