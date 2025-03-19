"use client";

import { useState } from 'react';
import { Product, ProductFormData, SortDirection, SortField } from '@/types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  const [sortField, setSortField] = useState<SortField>("code");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  
  const addProduct = (productData: ProductFormData) => {
    const now = new Date();
    const newProduct: Product = {
      id: Date.now(),
      ...productData,
      createdAt: now.toISOString()
    };
    
    setProducts(prev => [...prev, newProduct]);
    return newProduct;
  };
  
  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };
  
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  
  const getSortedProducts = () => {
    return [...products].sort((a, b) => {
      if (sortField === "code") {
        return sortDirection === "asc" ? a.code - b.code : b.code - a.code;
      } else if (sortField === "name") {
        return sortDirection === "asc" 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name);
      } else if (sortField === "quantity") {
        return sortDirection === "asc" 
          ? a.quantity - b.quantity 
          : b.quantity - a.quantity;
      } else {
        return sortDirection === "asc" 
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() 
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  
  return {
    products,
    sortField,
    sortDirection,
    addProduct,
    deleteProduct,
    handleSort,
    getSortedProducts,
    formatDate
  };
};