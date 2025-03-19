"use client";

import { useState } from 'react';
import { ProductFormData } from '@/types';

export const useProductForm = (onSubmit: (data: ProductFormData) => void) => {
  const [formData, setFormData] = useState<ProductFormData>({
    code: 0,
    name: "",
    description: "",
    quantity: 0
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "code" || name === "quantity" ? Number(value) : value
    }));
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.code) newErrors.code = "Código es requerido";
    if (!formData.name) newErrors.name = "Nombre es requerido";
    if (!formData.description) newErrors.description = "Descripción es requerida";
    if (formData.quantity < 0) newErrors.quantity = "Cantidad debe ser mayor o igual a 0";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      
      setFormData({ code: 0, name: "", description: "", quantity: 0 });
    }
  };
  
  return {
    formData,
    errors,
    handleInputChange,
    handleSubmit
  };
};