import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit{


public condition:boolean = true;

public list: Array <{ nome: string, idade: number}> = [
  { nome: "Dener Torquato", idade: 26},
  { nome: "José", idade: 27},
  { nome: "Esther", idade: 29}
]


public nome:string = "Dener"

ngOnInit(): void {

  setInterval (()=>{
    if (this.condition) {
      this.condition = false
    }else{
      this.condition = true
    }
    
  }, 2000)


 
}

public clickToAdd () {
  this.list.push ({nome: "andré", idade: 30})
}

public onEventList (event: number) {
    this.list.splice (event, 1)

}

}
