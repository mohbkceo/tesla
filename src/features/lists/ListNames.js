import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likes: ["Exixting Inventory", "Trade-in", "CyberTruke", "Semi", "Used Inventory","Power","Roadster","Charging" ]
}

const objeSlies = createSlice({
    name: "like",
    initialState,
    reducers: {}
})
export const selectObject = state => state.like.likes

export default objeSlies.reducer