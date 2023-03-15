import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../mock-tasks'
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: Task[] = Tasks

  constructor() { }

  ngOnInit(): void {
  }

}
