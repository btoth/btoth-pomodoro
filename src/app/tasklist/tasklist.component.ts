import { Component, OnInit } from '@angular/core';
import { Task, TaskState } from '../task/task.class';
import { TasklistService } from '../tasklist/tasklist.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent{
  done = TaskState.Done
  pending = TaskState.Pending
  backlog = TaskState.Backlog

  createNew(state: TaskState) {
    this.tasklist.createTask(state);
  }

  moveTo(event, newState: TaskState) {
    let idx = event.dataTransfer.getData("text/plain");
    let task = this.tasklist.tasks[idx];
    this.tasklist.changeState(task, newState);
  }

  constructor(public tasklist: TasklistService){};
}