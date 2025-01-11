"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { fetchProductById } from "@/features/products/productsThunks";
import { fetchCategoryById } from "@/features/categories/categoriesThunks";

import ProductDetails from "@/components/ProductDetails";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch<AppDispatch>();

  // Product and Category State
  const {
    product,
    loading: productLoading,
    error: productError,
  } = useSelector((state: RootState) => state.products);
  const {
    categoryById,
    loading: categoryLoading,
    error: categoryError,
  } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    if (params?.id) {
      dispatch(fetchProductById(params.id));
    }
  }, [dispatch, params?.id]);

  useEffect(() => {
    if (product?.categoryId) {
      dispatch(fetchCategoryById(product.categoryId));
    }
  }, [dispatch, product?.categoryId]);

  // Loading State
  if (productLoading || categoryLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  // Error State
  if (productError || categoryError) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>{productError || categoryError}</p>
      </div>
    );
  }

  // Product Not Found
  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Product not found</p>
      </div>
    );
  }

  // Render Product Details with Category Name
  const productWithCategory = {
    ...product,
    category: categoryById?.categoryName || "Unknown Category",
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="pt-16 md:pt-24 pb-4">
        <ProductDetails product={productWithCategory} />
      </div>
    </div>
  );
};

export default ProductPage;
