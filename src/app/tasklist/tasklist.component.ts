import { Component, Input } from '@angular/core';
import { Task, TaskState } from '../task/task.class';
import { TasklistService } from '../tasklist/tasklist.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  constructor(public tasklist: TasklistService){}
  @Input() title: string

  get state(): TaskState {
    if(this.title == "To do")
      return TaskState.Pending;
    return TaskState.Done;
  }

  get tasks() {
    return this.tasklist.tasks.filter( task => task.state == this.state )
  }

  get allowAdd() {
    return this.state == TaskState.Pending;
  }

  createNew() {
    this.tasklist.createTask(this.state)
  }

  moveTo(event) {
    let idx = event.dataTransfer.getData("text/plain")
    let task = this.tasklist.tasks[idx]
    this.tasklist.changeState(task, this.state)
  }
}