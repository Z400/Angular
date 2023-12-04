import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

//Lista vazia caso eu queira popular manualmente
public taskList: Array <TaskList> = [];

//Aqui digo que meu output ja definito do addItem ele vai cair aqui no meu todo, função que recebe a string!
public setEmiteTaskList(event: string) {
  this.taskList.push({task: event, checked: false})
}
 
public deleteItem (event: number) {
  this.taskList.splice(event, 1);
}

public deleteAllItems()  {
const confirm = window.confirm("Desejar realmente deletar todos os items?");
    if (confirm) {
      this.taskList = [];}}


 
}
