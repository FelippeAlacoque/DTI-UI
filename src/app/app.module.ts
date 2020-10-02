import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarClienteComponent } from './criar-cliente/criar-cliente.component';
import { DetalharClienteComponent } from './detalhar-cliente/detalhar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';
import { ClienteService } from './cliente.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CriarClienteComponent,
    DetalharClienteComponent,
    ListarClienteComponent,
    AtualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
