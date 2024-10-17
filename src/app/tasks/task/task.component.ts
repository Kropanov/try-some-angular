import { Component, input, Input, output } from '@angular/core';
import { Task } from '../../types';
import { DatePipe } from '@angular/common';

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

    onCompleteTask() {
        this.complete.emit(this.task().id);
    }
}
