import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Olá turma Web!';
  ativado: boolean = false;
  contador: number = 0;

  changeStatus() {
    this.ativado = !this.ativado; // metodo para deixar o 
  }

  contadorFunction() {
    this.contador--; 
  }
}


