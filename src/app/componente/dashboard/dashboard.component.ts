import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  titulo: string;

  public usuarios= [
    {nombre: 'Noelia', apellido: 'Satorres'},
    {nombre: 'Maria', apellido: 'Ciccioli'},
    {nombre: '', apellido: 'Montes'},
    {nombre: 'Carmen', apellido: ''},
  ];

  constructor(){
    this.titulo = 'DIRECTIVAS ESTRUCTURALES';
  }

}
