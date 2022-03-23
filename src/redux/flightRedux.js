import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flight",
  initialState: {
    places: [],
    flights: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getFlightStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    getFlightSuccess: (state, action) => {
      state.isFetching = false;
      state.flights = action.payload;
    },
    getFlightFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },
    getPlacesStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    getPlacesSuccess: (state, action) => {
      state.isFetching = false;
      state.places = action.payload;
    },
    getPlacesFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },

    addFlightStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    addFlightSuccess: (state, action) => {
      state.isFetching = false;
      console.log(action.payload);
      state.flights.push(action.payload);
    },
    addFlightFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },
  },
});

export const {
  getFlightStart,
  getFlightSuccess,
  getFlightFailure,
  getPlacesStart,
  getPlacesSuccess,
  getPlacesFailure,
  addFlightStart,
  addFlightSuccess,
  addFlightFailure,
} = flightSlice.actions;

const flightReducer = flightSlice.reducer; //it should be export default
export default flightReducer;
