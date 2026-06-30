import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder

    .addCase('LoadUserRequest', (state) => {
      state.loading = true;

      state.error = null;
    })

    .addCase('LoadUserSuccess', (state, action) => {
      state.loading = false;

      state.isAuthenticated = true;
      state.user = action.payload;

      state.error = null;
    })

    .addCase('LoadUserFail', (state, action) => {
      state.loading = false;

      state.isAuthenticated = false;
      state.user = null;

      state.error = action.payload;
    })

    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
