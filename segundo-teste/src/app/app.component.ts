import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
   <app-data-binding></app-data-binding>
  <router-outlet></router-outlet>
  <h1>TESTE</h1>
  <hr>
   <!--<app-diretivas-estruturais></app-diretivas-estruturais> -->
   <app-diretivas-atributos></app-diretivas-atributos>
   <app-new-component></app-new-component>
   <br>
   <button (click) = "add ()">Adicionar</button>
   <app-input [contador] = "addValue"></app-input>

<ng-template [ngIf] = "getDados">
 <h1>{{getDados.nome}}</h1>
<h2>{{getDados.idade}}</h2>
 </ng-template>

   <app-output (enviarDados) = "setDados($event)"></app-output>`
})
export class AppComponent implements OnInit{
  
  
  ngOnInit(): void {
    console.log (1)
  }

public getDados: {nome: string, idade: number} | undefined

  public addValue: number = 0;

  public add () {
    this.addValue += 1;
  }

   

public setDados(event: {nome:string, idade:number}) {
  this.getDados = event;
}



}
