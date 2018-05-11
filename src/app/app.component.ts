import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anderson Rodrigues de Almeida';
  public nome:string = "";

  public mostrar(){
    console.log(this.nome);
    alert(this.nome);
    alert('Até aqui tudo funcionando!');
  }

  

}
