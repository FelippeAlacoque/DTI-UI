import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from '../cliente.service';

import { Cliente } from "./../cliente";

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clientes = this.clienteService.getListaClientes();
  }

  deleteCliente(id: number) {
    this.clienteService.deleteCliente(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detalharCliente(id: number){
    this.router.navigate(['details', id]);
  }

  atualizarCliente(id: number){
    this.router.navigate(['update', id]);
  }
}
