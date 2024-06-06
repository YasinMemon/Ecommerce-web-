import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";
// import { storeData } from "../../assets/data";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        fiteredProducts:
            JSON.parse(sessionStorage.getItem("fiteredData")) || storeData,

        singleItem: 
            JSON.parse(sessionStorage.getItem("singleItem")) || storeData,
        },
    reducers: {
        fiterProducts(state, action) {
            try {
                const filter = storeData.filter((product) => product.type === action.payload);
                state.fiteredProducts = filter;
                //    console.log(filter);
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem("fiteredData", saveState);
            } catch (error) {
                return error;
            }
        },
        singleProduct(state, action) {
            try {
                const oneProduct = storeData.filter((product) => product.id === action.payload);
                state.singleItem = oneProduct
                // console.log(oneProduct);
                const saveState = JSON.stringify(oneProduct);
                sessionStorage.setItem("singleItem", saveState);
            } catch (error) {
                console.error(error);
            }
        }
    }
});

export const { fiterProducts, singleProduct } = productSlice.actions;
export default productSlice.reducer;