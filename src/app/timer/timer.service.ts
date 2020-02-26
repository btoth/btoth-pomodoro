import { Injectable } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Task } from '../task/task.interface';
import { Settings } from '../settings';

enum Phase {
  InProgress,
  Paused,
  RestingUp,
  OnHalt
};

@Injectable()
export class TimerService {
  task: Task;
  intervalId = 0;

  phase: Phase = Phase.OnHalt;
  mins = 0;
  secs = 0;

  get inProgress(){ return this.phase == Phase.InProgress; }
  get paused(){ return this.phase == Phase.Paused; }
  get restingUp(){ return this.phase == Phase.RestingUp; }
  get onHalt(){ return this.phase == Phase.OnHalt; }

  get currentTask() {
    if(this.task && this.task.title) {
      return this.task.title;
    }
    else {
      return "Anonymous task";
    }
  }

  startTimer() {
    if(this.intervalId) return;
    if(this.mins <= 0 && this.secs <= 0) return;
    this.intervalId = setInterval(this.tic.bind(this), 1000);
  }

  stopTimer() {
    if(! this.intervalId) return;
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  startProgress(task) {
    if(this.phase != Phase.OnHalt && this.phase != Phase.RestingUp) return;

    this.mins = Math.floor(Settings.progressDuration / 60);
    this.secs = Math.floor(Settings.progressDuration % 60);
    this.phase = Phase.InProgress;
    this.task = task;
    this.startTimer();
  }

  startRest() {
    if(this.phase != Phase.InProgress) return;

    this.mins = Math.floor(Settings.restDuration / 60);
    this.secs = Math.floor(Settings.restDuration % 60);
    this.phase = Phase.RestingUp;
    this.startTimer();
  }

  switchProgress(task) {
    if(this.phase != Phase.Paused && this.phase != Phase.InProgress) return;
    this.task = task;
  }

  pause() {
    if(this.phase != Phase.InProgress) return;
    this.phase = Phase.Paused;
    this.stopTimer();
  }

  continue() {
    if(this.phase != Phase.Paused) return;
    this.phase = Phase.InProgress;
    this.startTimer();
  }

  reset() {
    this.stopTimer();
    this.phase = Phase.OnHalt;
    this.mins = 0;
    this.secs = 0;
  }

  tic() {
    if(this.secs == 0) {
      if(this.mins == 0) {
        if(this.phase == Phase.InProgress) {
          this.task.pomosDone += 1;
          this.startRest();
        }
        else this.reset();
        
      }
      else {
        this.mins -= 1;
        this.secs = 59;
      }
    }
    else {
      this.secs -= 1;
    }
  }
}