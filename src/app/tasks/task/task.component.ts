import { Component, inject, input, Input, output } from '@angular/core';
import { Task } from '../../types';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
})
export class TaskComponent {
    task = input.required<Task>();
    complete = output<number>();
    tasksService = inject(TasksService);

    onCompleteTask() {
        this.tasksService.removeTaskById(this.task().id);
    }
}
