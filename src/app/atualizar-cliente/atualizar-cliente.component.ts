import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})
export class AtualizarClienteComponent implements OnInit {

  id: number;
  cliente: Cliente = new Cliente();

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

  updateCliente() {
    this.clienteService.updateCliente(this.id, this.cliente)
      .subscribe(data => {
        console.log(data);
        this.cliente = new Cliente();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCliente();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
