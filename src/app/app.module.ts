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

import { PlayButtonComponent } from './button/button.component';
import { PauseButtonComponent } from './button/button.component';
import { StopButtonComponent } from './button/button.component';
import { AddButtonComponent } from './button/button.component';
import { RemoveButtonComponent } from './button/button.component';
import { ChangeButtonComponent } from './button/button.component';

const buttons = [
  PlayButtonComponent, 
  PauseButtonComponent, 
  StopButtonComponent, 
  AddButtonComponent, 
  RemoveButtonComponent,
  ChangeButtonComponent
];

const components = [
  AppComponent, 
  TimerComponent, 
  DoubleDigitPipe, 
  TasklistComponent, 
  TaskComponent, 
  PlayButtonComponent
];

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [].concat(buttons, components),
  bootstrap:    [ AppComponent ],
  providers: [TasklistService, TimerService]
})
export class AppModule { }
