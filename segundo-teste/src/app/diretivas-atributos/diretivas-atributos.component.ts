import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit{
  public valor: boolean = true;
  public nome: string = "";
  public list: Array <{nome: string}> = []
 
  ngOnInit(): void {
  
     setInterval (() =>{
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;

      }
     }, 2000)
    
  }

  public push() {
    this.list.push ({nome: this.nome  })
  }

public date:Date = new Date ();

}
