import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public emitItemTaskList = new EventEmitter<string>();

  public addItemTaskList: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitItemTaskList(): void {
    if (this.addItemTaskList.trim().length > 0) {
      this.emitItemTaskList.emit(this.addItemTaskList.trim());
      this.addItemTaskList = '';
    }
  }
}
