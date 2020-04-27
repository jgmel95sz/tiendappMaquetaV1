export interface Categoria {
  id: number;
  nombre: string;
  producto: Producto[];
}

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

export interface Categorias {
  id: number;
  nombre: string;
}


export interface Tienda {
  id: number;
  nombre: string;
  direccion: string;
  imagen: string;
}