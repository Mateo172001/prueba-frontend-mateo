"use client";

import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useProductForm } from "@/hooks/useProductForm";
import { Product, ProductFormData } from "@/types";

interface ProductFormModalProps {
  onAddProduct: (product: ProductFormData) => Product;
  onProductAdded: (productId: number) => void;
}

export function ProductFormModal({ onAddProduct, onProductAdded }: ProductFormModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  
  const { formData, errors, handleInputChange, handleSubmit: handleFormSubmit } = useProductForm((product) => {
    const newProduct = onAddProduct(product);
    
    if (closeButtonRef.current) {
      closeButtonRef.current.click();
    }
    
    if (newProduct && newProduct.id) {
      onProductAdded(newProduct.id);
    }
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Agregar Producto
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Producto</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="code" className="text-sm font-medium">
                Código
              </label>
              <input
                id="code"
                name="code"
                type="number"
                value={formData.code || ""}
                onChange={handleInputChange}
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              {errors.code && (
                <p className="text-sm font-medium text-destructive">{errors.code}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              {errors.name && (
                <p className="text-sm font-medium text-destructive">{errors.name}</p>
              )}
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="description" className="text-sm font-medium">
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              {errors.description && (
                <p className="text-sm font-medium text-destructive">{errors.description}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="quantity" className="text-sm font-medium">
                Cantidad
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                value={formData.quantity || ""}
                onChange={handleInputChange}
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              {errors.quantity && (
                <p className="text-sm font-medium text-destructive">{errors.quantity}</p>
              )}
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <DialogClose ref={closeButtonRef} asChild>
              <Button type="button" variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Agregar Producto</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}