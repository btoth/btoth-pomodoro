export enum TaskState {
  Pending,
  Done,
  Backlog
};

let nextTaskId = 0;

export class Task {
  constructor(
    public title: String = "",
    public pomosDone: number = 0,
    public state: TaskState = TaskState.Pending,
    public id: number = ++nextTaskId
  ){};

  get isPending(): boolean { return this.state == TaskState.Pending; }
  get isDone(): boolean { return this.state == TaskState.Done; }
  get isBacklog(): boolean { return this.state == TaskState.Backlog; }
};
