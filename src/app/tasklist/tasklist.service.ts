import { Injectable } from '@angular/core';
import { Task, TaskState } from '../task/task.class';
import { TimerService } from '../timer/timer.service';

function resolveTasks(): Task[] {
  let resultText = sessionStorage.getItem("tasks");
  if(! resultText) return [];

  return JSON.parse(resultText).map(
    obj => new Task(obj.title, obj.pomosDone, obj.state)
  );
}

@Injectable()
export class TasklistService {
  tasks: Task[] = resolveTasks();
  
  constructor(
    private timer: TimerService
  ) {};

  taskInProgress: Task;

  indexOf(task: Task): number {
    return this.tasks.findIndex(t => t.id == task.id);
  }

  deleteTask(task: Task) {
    this.tasks.splice(this.indexOf(task), 1);
    this.persist();
  }

  createTask(state: TaskState) {
    let task = new Task();
    task.state = state;
    this.tasks.splice(0, 0, task);
    this.persist();
  }

  changeState(task: Task, state: TaskState) {
    let idx = this.indexOf(task);
    this.tasks.splice(idx, 1);
    this.tasks.splice(0, 0, task);
    task.state = state;
    this.persist();
  }

  moveTask(remIndex: number, beforeIndex: number) {
    if(remIndex == beforeIndex) return;

    let other = this.tasks[beforeIndex];
    let item = this.tasks.splice(remIndex, 1)[0];
    item.state = other.state;
    this.tasks.splice(beforeIndex, 0, item);
    this.persist();
  }

  persist() {
    sessionStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}