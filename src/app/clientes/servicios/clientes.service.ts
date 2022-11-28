import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { Clientes } from '../../datos/clientes-mock';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private listClientes = Clientes;

  constructor() { }

  getClientes(): Cliente[] {
    return this.listClientes;
  }

  getDetail(id: number): Cliente{
    return this.listClientes.find(cl => cl.id == id)!; //Se indica ! para que pueda ser indefinido
  }

  addCliente(cliente: Cliente): void{
    this.listClientes.push(cliente);
  }

  delCliente(id: number): boolean{
    let indice = this.listClientes.findIndex(cl => cl.id == id)!;
    this.listClientes.slice(indice, 1);
    return true;
  }

  updateCliente(id: number, cliente: Cliente): void{
    let indice = this.listClientes.findIndex(cl => cl.id == id)!;
    this.listClientes[indice] = cliente;
  }
}
