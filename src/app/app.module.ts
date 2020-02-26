import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { DoubleDigitPipe } from './timer/double-digit.pipe';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './task/task.component';
import { TasklistService } from './tasklist/tasklist.service';
import { TimerService } from './timer/timer.service';
import { PlayButtonComponent, PauseButtonComponent } from './play-button/play-button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, TimerComponent, DoubleDigitPipe, TasklistComponent, TaskComponent, PlayButtonComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TasklistService, TimerService]
})
export class AppModule { }
