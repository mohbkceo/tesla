import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S", "Model Y", "Model 3", "Model X", "Solar Roof", "Solar Panels", "Paner Wales"]
}

const carSliece = createSlice({
    name: "car",
    initialState,
    reducers: {}
})
export const selectCars = state => state.car.cars

export default carSliece.reducer