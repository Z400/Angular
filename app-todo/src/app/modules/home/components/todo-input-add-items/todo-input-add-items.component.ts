import { Component, OnInit, Output, EventEmitter} from '@angular/core';
 

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit {
//Aqui estou disponibilizando o que for digitando em meu input para outro componente pegar os dados digitados!
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList = "";

 
    public submitItemTaskList () {
      if (this.addItemTaskList && this.addItemTaskList.trim()){
         this.emitItemTaskList.emit(this.addItemTaskList);
         this.addItemTaskList = "";
        }
  }
   constructor() { }

  ngOnInit(): void {
  }
 
}
