"use client";

import { useState } from "react";
import { Product, ProductFormData, SortDirection, SortField } from "@/types";
import { SortControls } from "./SortControls";
import { ProductTable } from "./ProductTable";
import { ProductFormModal } from "./ProductFormModal";

interface ProductListProps {
  products: Product[];
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
  onDelete: (id: number) => void;
  formatDate: (dateString: string) => string;
  isClient: boolean;
  onAddProduct: (product: ProductFormData) => Product;
}

export function ProductList({
  products,
  sortField,
  sortDirection,
  onSort,
  onDelete,
  formatDate,
  isClient,
  onAddProduct,
}: ProductListProps) {
  const [highlightedProductId, setHighlightedProductId] = useState<
    number | undefined
  >(undefined);

  const handleProductAdded = (productId: number) => {
    setHighlightedProductId(productId);

    setTimeout(() => {
      setHighlightedProductId(undefined);
    }, 1000);
  };

  return (
    <section className="bg-card p-6 rounded-lg shadow-sm border border-border animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-6 gap-4">
        
        <div className="flex gap-4 items-center justify-center">
          <h2 className="text-2xl font-semibold text-[#1e402d] dark:text-card-foreground">Lista de Productos</h2>
          <ProductFormModal
            onAddProduct={onAddProduct}
            onProductAdded={handleProductAdded}
          />
        </div>

        <div className="flex items-center gap-4">

          <SortControls
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={onSort}
          />
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No hay productos registrados. Agrega uno nuevo para comenzar.</p>
        </div>
      ) : (
        <ProductTable
          products={products}
          onDelete={onDelete}
          formatDate={formatDate}
          isClient={isClient}
          highlightedProductId={highlightedProductId}
        />
      )}
    </section>
  );
}
