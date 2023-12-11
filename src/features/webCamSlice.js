import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageValue: null,
};

export const webCamSlice = createSlice({
  name: "camera",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addImage: (state, action) => {
      state.imageValue = action.payload;
    },
    removeImage: (state) => {
      state.imageValue = null;
    },
  },
});

export const { addImage, removeImage } = webCamSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectImage = (state) => state.camera;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default webCamSlice.reducer;
