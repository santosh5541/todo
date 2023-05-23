import { Component, inject } from '@angular/core';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent {
  todos: Todo[] = [];

  constructor() {
    // Create new instances of TodoItem and add them to the todos array
    this.todos.push(
      new Todo(1, 'Learn to dance', false, new Date()),
      new Todo(2, 'Become an expert in Angular', false, new Date()),
      new Todo (3,'Learn to create a java application', false,new Date())
    );
  }
}