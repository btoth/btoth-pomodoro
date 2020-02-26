import { Component } from '@angular/core';
import { TaskState } from './task/task.class';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  Done = TaskState.Done
  Pending = TaskState.Pending

  name = 'Angular';
}
