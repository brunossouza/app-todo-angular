import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('taskList') || '[]'
  );

  constructor() {}

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );

    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  public setEmitTaskList(event: string): void {
    this.taskList.push({ task: event, checked: false });
  }

  /**
   * Function to delete a task
   *
   * @param index index of the task to be deleted
   * @returns void
   */
  public deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }

  /**
   * Function to delete all tasks
   *
   * @returns void
   */
  public deleteAllTasks(): void {
    const confirmDelete = confirm('Você realmente deseja deletar tudo?');
    if (confirmDelete) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number): void {
    if (!event.length) {
      const confirmDelete = confirm('Task vazia, deseja realmente deletar?');
      if (confirmDelete) {
        this.deleteTask(index);
      }
    }
  }
}
