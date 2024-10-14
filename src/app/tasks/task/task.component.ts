import { Component, input, Input } from '@angular/core';
import { Task } from '../../types';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
})
export class TaskComponent {
    task = input.required<Task>();
}
