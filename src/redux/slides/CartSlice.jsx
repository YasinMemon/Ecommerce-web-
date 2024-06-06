import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalAmount: 0,
    totalPrice: 0,
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            // Validate the product properties
            if (!product.id || !product.price || !product.size || !product.color) {
                console.error("Invalid product data:", product);
                return;
            }

            try {
                const exist = state.cart.find((item) =>
                    item.id === product.id &&
                    item.size === product.size &&
                    item.color === product.color
                );
                if (exist) {
                    exist.amount += 1;
                    exist.totalPrice += product.price;
                } else {
                    state.cart.push({
                        id: product.id,
                        price: product.price,
                        size: product.size,
                        amount: 1,
                        img: product.img,
                        totalPrice: product.price,
                        name: product.name,
                        text: product.text,
                        color: product.color,
                    });
                }
                state.totalAmount += 1;
                state.totalPrice += product.price;
            } catch (error) {
                console.error("Error while adding to cart:", error);
            }
        },
        removeItem(state, action) {
            const product = action.payload;
            // Validate the product properties
            if (!product.id || !product.price || !product.size || !product.color) {
                console.error("Invalid product data:", product);
                return;
            }

            try {
                const exist = state.cart.find((item) =>
                    item.id === product.id &&
                    item.size === product.size &&
                    item.color === product.color
                );
                if (exist) {
                    if (exist.amount === 1) {
                        state.cart = state.cart.filter((item) =>
                            !(item.id === product.id &&
                              item.size === product.size &&
                              item.color === product.color)
                        );
                    } else {
                        exist.amount -= 1;
                        exist.totalPrice -= product.price;
                    }
                    state.totalAmount -= 1;
                    state.totalPrice -= product.price;
                } else {
                    console.warn("Attempted to remove a non-existent item:", product);
                }
            } catch (error) {
                console.error("Error while removing from cart:", error);
            }
        }
    }
});

export const { addToCart, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
