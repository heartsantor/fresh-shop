// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/features/products/productsSlice";
import categoriesReducer from "@/features/categories/categoriesSlice";

import { fetchCategories } from "@/features/categories/categoriesThunks"; // Import fetchCategories thunk
import { fetchProducts } from "@/features/products/productsThunks";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
