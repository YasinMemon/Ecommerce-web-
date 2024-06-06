import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data.js";

const initialState = {
    value: 0,
    length: sliderData.length
}

export const SliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        nextSlide(state, action){
            // console.log("state: ",state);
            // console.log("action: ", action);
            state.value = action.payload > state.length - 1 ? 0 : action.payload
        },
        prevSlide(state, action){
            // console.log("state: ",state);
            // console.log("action: ", action);
            state.value = action.payload < 0 ? state.length -1 : action.payload
        },
        doteSlide: (state, action) => {
            state.value = action.payload;
        }
    }
})   

export const {nextSlide, prevSlide, doteSlide} = SliderSlice.actions;
export default SliderSlice.reducer