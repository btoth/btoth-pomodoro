import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TaskState } from './task/task.class';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private title: Title) {
    this.title.setTitle("Pomodoro");
  }

  Done = TaskState.Done
  Pending = TaskState.Pending

  name = 'Angular';
}
