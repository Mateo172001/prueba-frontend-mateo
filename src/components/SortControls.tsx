"use client";

import { SortDirection, SortField } from "@/types";

interface SortControlsProps {
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export function SortControls({ sortField, sortDirection, onSort }: SortControlsProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
      <span className="text-sm font-medium">Ordenar por:</span>
      <div className="flex flex-wrap bg-muted rounded-md">
        <button
          onClick={() => onSort("code")}
          className={`px-3 py-1.5 text-sm rounded-l-md transition-colors ${sortField === "code" ? "bg-primary text-primary-foreground" : "hover:bg-muted-foreground/10"}`}
        >
          Código {sortField === "code" && (sortDirection === "asc" ? "↑" : "↓")}
        </button>
        <button
          onClick={() => onSort("name")}
          className={`px-3 py-1.5 text-sm transition-colors ${sortField === "name" ? "bg-primary text-primary-foreground" : "hover:bg-muted-foreground/10"}`}
        >
          Nombre {sortField === "name" && (sortDirection === "asc" ? "↑" : "↓")}
        </button>
        <button
          onClick={() => onSort("quantity")}
          className={`px-3 py-1.5 text-sm transition-colors ${sortField === "quantity" ? "bg-primary text-primary-foreground" : "hover:bg-muted-foreground/10"}`}
        >
          Cantidad {sortField === "quantity" && (sortDirection === "asc" ? "↑" : "↓")}
        </button>
        <button
          onClick={() => onSort("createdAt")}
          className={`px-3 py-1.5 text-sm rounded-r-md transition-colors ${sortField === "createdAt" ? "bg-primary text-primary-foreground" : "hover:bg-muted-foreground/10"}`}
        >
          Fecha {sortField === "createdAt" && (sortDirection === "asc" ? "↑" : "↓")}
        </button>
      </div>
    </div>
  );
}