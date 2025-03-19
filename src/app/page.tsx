"use client";

import { useState, useEffect } from "react";
import { ProductList } from "@/components/ProductList";
import { useProducts } from "@/hooks/useProducts";
import { BannerLayout } from "@/components/BannerLayout";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  const {
    addProduct,
    deleteProduct,
    handleSort,
    sortField,
    sortDirection,
    getSortedProducts,
    formatDate
  } = useProducts();

  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const sortedProducts = getSortedProducts();

  return (
    <BannerLayout>
      <main className="min-h-screen bg-background text-foreground p-4 md:p-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-end items-center mb-8">
            {/* <h1 className="text-3xl font-bold text-[#1e402d] dark:text-card-foreground">Gestión de Productos</h1> */}
          </header>
          <div className="fixed left-8 top-4">
            <ThemeToggle />
          </div>
          
          <ProductList 
            products={sortedProducts}
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
            onDelete={deleteProduct}
            formatDate={formatDate}
            isClient={isClient}
            onAddProduct={addProduct}
          />
        </div>
      </main>
    </BannerLayout>
  );
}
