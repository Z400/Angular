import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
public nome:string = "Dener"
public idade:number = 29
public checkedDisabled: boolean = true;
 public alertInfo () {
  alert ("Deu bom!");


  
 }
}
