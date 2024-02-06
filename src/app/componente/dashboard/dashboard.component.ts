import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  titulo: string;
  constructor(){
    this.titulo = 'DIRECTIVAS ESTRUCTURALES';
  }

}
