import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategories, fetchCategoryById } from "./categoriesThunks";

interface Category {
  id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoriesState {
  categories: Category[];
  categoryById: Category | null; // To store single category by ID
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  categoryById: null,
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    resetCategoryById(state) {
      state.categoryById = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchCategories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.loading = false;
          state.categories = action.payload;
        }
      )
      .addCase(
        fetchCategories.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      // Handle fetchCategoryById
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategoryById.fulfilled,
        (state, action: PayloadAction<Category>) => {
          state.loading = false;
          state.categoryById = action.payload;
        }
      )
      .addCase(
        fetchCategoryById.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { resetCategoryById } = categoriesSlice.actions;
export default categoriesSlice.reducer;
