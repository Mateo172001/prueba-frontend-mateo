# Aplicación de Gestión de Productos

Este proyecto es una aplicación web para la gestión de productos desarrollada con Next.js. Permite listar, agregar y eliminar productos, así como ordenarlos por diferentes criterios.

## Tecnologías Utilizadas

- **Next.js 15**: Framework de React para aplicaciones web.
- **React 19**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript con tipado estático.
- **Tailwind CSS**: Framework de CSS para diseño rápido y responsivo.
- **Radix UI**: Componentes accesibles y sin estilos para React.
- **React Hook Form**: Biblioteca para manejo de formularios.
- **Next Themes**: Para implementar modo claro/oscuro.
- **Lucide React**: Iconos para la interfaz.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Mateo172001/prueba-frontend-mateo.git
   cd prueba-frontend-mateo
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

## Ejecución del Proyecto

### Modo Desarrollo

```bash
npm run dev
# o
yarn dev
```

Esto iniciará el servidor de desarrollo con Turbopack. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Compilación para Producción

```bash
npm run build
# o
yarn build
```

### Iniciar en Modo Producción

```bash
npm run start
# o
yarn start
```

## Estructura del Proyecto

- **/src/app**: Contiene las páginas principales de la aplicación.
- **/src/components**: Componentes reutilizables.
  - **BannerLayout.tsx**: Layout principal con banner lateral.
  - **ProductList.tsx**: Componente para mostrar la lista de productos.
  - **ProductTable.tsx**: Tabla que muestra los productos.
  - **ProductFormModal.tsx**: Modal para agregar nuevos productos.
  - **SortControls.tsx**: Controles para ordenar productos.
  - **/ui**: Componentes de UI reutilizables (botones, diálogos, etc.).
- **/src/hooks**: Hooks personalizados.
  - **useProducts.ts**: Manejo del estado y operaciones de productos.
  - **useProductForm.ts**: Lógica para el formulario de productos.
- **/src/types**: Definiciones de tipos TypeScript.
- **/src/lib**: Utilidades y funciones auxiliares.
- **/public**: Archivos estáticos como imágenes.

## Funcionalidades Principales

### Gestión de Productos

La aplicación permite:

- **Listar productos**: Visualización de productos en una tabla.
- **Agregar productos**: Mediante un formulario modal.
- **Eliminar productos**: Con confirmación.
- **Ordenar productos**: Por código, nombre, cantidad o fecha de creación.

### Componentes Principales

#### BannerLayout

Componente que proporciona la estructura principal de la aplicación con un banner lateral que contiene una imagen. Es responsivo, adaptándose a diferentes tamaños de pantalla.

#### ProductList

Componente que muestra la lista de productos y contiene los controles para agregar nuevos productos y ordenar la lista.

#### ProductFormModal

Modal que contiene el formulario para agregar nuevos productos con validación de campos.

#### useProducts

Hook personalizado que maneja:
- El estado de los productos
- Operaciones CRUD (Crear, Leer, Actualizar, Eliminar)
- Lógica de ordenamiento
- Formateo de fechas

### Tema Claro/Oscuro

La aplicación incluye un selector de tema que permite cambiar entre modo claro y oscuro, implementado con next-themes.

## Estilos y Diseño

El proyecto utiliza Tailwind CSS para los estilos, con un diseño responsivo que se adapta a diferentes dispositivos. Los componentes de UI están basados en Radix UI y personalizados con Tailwind.

## Validación de Formularios

Se utiliza una combinación de React Hook Form y validación personalizada para garantizar que los datos ingresados sean correctos antes de crear nuevos productos.

---

Desarrollado como prueba técnica frontend.
