import { Component, computed, input, signal } from '@angular/core';
import { TASKS } from '../data/tasks';
import { TaskComponent } from './task/task.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss',
})
export class TasksComponent {
    tasks = signal(TASKS);
    selectedUserId = input.required();

    selectedUserTasks = computed(() => {
        return this.tasks().filter((task) => task.userId === this.selectedUserId());
    });

    doesUserHaveTasks = computed(() => this.selectedUserTasks().length > 0);

    onCompleteTask(id: number) {
        this.tasks.set(this.tasks().filter((task) => task.id !== id));
    }
}
