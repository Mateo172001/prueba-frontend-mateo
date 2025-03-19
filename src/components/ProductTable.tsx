"use client";

import { Product } from "@/types";
import { Trash2 } from "lucide-react";

interface ProductTableProps {
  products: Product[];
  onDelete: (id: number) => void;
  formatDate: (dateString: string) => string;
  isClient: boolean;
  highlightedProductId?: number;
}

export function ProductTable({ products, onDelete, formatDate, isClient, highlightedProductId }: ProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-medium">Código</th>
            <th className="text-left py-3 px-4 font-medium">Nombre</th>
            <th className="text-left py-3 px-4 font-medium">Descripción</th>
            <th className="text-left py-3 px-4 font-medium">Cantidad</th>
            <th className="text-left py-3 px-4 font-medium">Fecha de Creación</th>
            <th className="text-right py-3 px-4 font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr 
              key={product.id} 
              className={`border-b border-border hover:bg-muted/50 transition-colors ${highlightedProductId === product.id ? 'bg-primary/10' : ''}`}
            >
              <td className="py-3 px-4">{product.code}</td>
              <td className="py-3 px-4">{product.name}</td>
              <td className="py-3 px-4">
                <div className="max-w-xs truncate">{product.description}</div>
              </td>
              <td className="py-3 px-4">{product.quantity}</td>
              <td className="py-3 px-4">{isClient ? formatDate(product.createdAt) : ''}</td>
              <td className="py-3 px-4 text-right">
                <button
                  onClick={() => onDelete(product.id)}
                  className="inline-flex items-center justify-center rounded-md bg-destructive text-destructive-foreground p-2 text-xs font-medium hover:bg-destructive/90 transition-colors"
                  aria-label={`Eliminar producto ${product.name}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}