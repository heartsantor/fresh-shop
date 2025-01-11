import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/category");
      if (!response.data.success) {
        throw new Error(response.data.message || "Failed to fetch categories");
      }
      return response.data.data; // Return the categories data
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const fetchCategoryById = createAsyncThunk(
  "categories/fetchCategoryById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/category/${id}`);
      return response.data.data; // Return single category
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch category by ID"
      );
    }
  }
);
