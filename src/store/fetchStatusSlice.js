import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus', // Corrected the name to match the slice purpose
  initialState: {
    fetchdone: false,
    currentlyfetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchdone = true;
    },
    markFetchStarted: (state) => {
      state.currentlyfetching = true;
    },
    markFetchFinished: (state) => {
      state.currentlyfetching = false;
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions;

export default fetchStatusSlice; // Corrected the export to only include the reducer
