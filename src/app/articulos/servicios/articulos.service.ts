import { Injectable } from '@angular/core';
import { Articulos } from '../../datos/articulos-mock';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private listArticulos = Articulos;

  constructor() {
    this.listArticulos = Articulos;
   }

  getArticulos(): Articulo[] {
    return this.listArticulos;
  }

  getDetail(id: number): Articulo{
    return this.listArticulos.find(ar => ar.id == id)!; //Se indica ! para que pueda ser indefinido
  }

  addArticulo(articulo: Articulo): void{
    this.listArticulos.push(articulo);
  }

  delArticulo(id: number): boolean{
    let indice = this.listArticulos.findIndex(ar => ar.id == id)!;
    this.listArticulos.slice(indice, 1);
    return true;
  }

  updateArticulo(id: number, articulo: Articulo): void{
    let indice = this.listArticulos.findIndex(ar => ar.id == id)!;
    this.listArticulos[indice] = articulo;
  }
}
