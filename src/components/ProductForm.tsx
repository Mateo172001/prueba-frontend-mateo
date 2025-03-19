"use client";

import { useProductForm } from "@/hooks/useProductForm";
import { ProductFormData } from "@/types";

interface ProductFormProps {
  onAddProduct: (product: ProductFormData) => void;
}

export function ProductForm({ onAddProduct }: ProductFormProps) {
  const { formData, errors, handleInputChange, handleSubmit } = useProductForm(onAddProduct);

  return (
    <section className="mb-12 bg-card p-6 rounded-lg shadow-sm border border-border animate-in fade-in duration-500">
      <h2 className="text-2xl font-semibold mb-6">Agregar Nuevo Producto</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
        
        <div className="pt-4">
          <button 
            type="submit"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors"
          >
            Agregar Producto
          </button>
        </div>
      </form>
    </section>
  );
}