import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../reducer/movieReducer";

// configureStore includes redux-thunk and Redux DevTools by default
export const store = configureStore({ reducer: moviesReducer });
