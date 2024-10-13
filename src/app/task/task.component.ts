import { Component, input } from '@angular/core';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
})
export class TaskComponent {
    user = input.required<{ name: string; id: number }>();
}
