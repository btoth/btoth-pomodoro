import { Component, Input } from '@angular/core';
import { Task, TaskState } from './task.class';
import { TasklistService } from '../tasklist/tasklist.service';
import { TimerService } from '../timer/timer.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task

  constructor(
    private tasklist: TasklistService,
    private timer: TimerService
  ){};

  get canSwitch() { 
    if(this.timer.inProgress || this.timer.paused) {
      return this.timer.task != this.task;
    }
    return false;
  }

  remove() {
    this.tasklist.deleteTask(this.task);
  }

  handleInput(event) {
    this.task.title = event.target.value;
    this.tasklist.persist();
  }

  handleKeydown(event) {
    if(event.keyCode == 13) {
        event.target.blur();
    }
  }

  handleDragover(event) {
    event.preventDefault();
  }

  handleDragstart(event) {
    let selfIndex = this.tasklist.indexOf(this.task);
    event.dataTransfer.setData("text/plain", selfIndex);
  }

  handleDrop(event) {
    let selfIndex = this.tasklist.indexOf(this.task);
    let otherIndex = event.dataTransfer.getData("text/plain");
    this.tasklist.moveTask(otherIndex, selfIndex);
  }
}