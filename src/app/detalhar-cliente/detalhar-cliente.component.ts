import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-detalhar-cliente',
  templateUrl: './detalhar-cliente.component.html',
  styleUrls: ['./detalhar-cliente.component.css']
})
export class DetalharClienteComponent implements OnInit {

  id: number;
  cliente: Cliente;

  constructor(private route: ActivatedRoute,private router: Router,
              private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();

    this.id = this.route.snapshot.params['id'];
    
    this.clienteService.getCliente(this.id)
      .subscribe(data => {
        console.log(data)
        this.cliente = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }


}
