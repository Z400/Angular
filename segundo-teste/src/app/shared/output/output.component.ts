import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

@Output() public enviarDados = new EventEmitter();

  public list: Array <{nome: string, idade: number}> = 
  [{nome: "MATHEUS", idade: 27},
  { nome: "JESSE", idade: 26},
  { nome: "BRUNA", idade: 23}
 
];

public getDados (event: number) {
 this.enviarDados.emit(this.list[event])

}

}
