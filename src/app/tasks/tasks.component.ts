import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss',
})
export class TasksComponent {
    isAddingTask = signal(false);

    selectedUserName = input.required();
    selectedUserId = input.required<number>();

    constructor(public tasksService: TasksService) {}

    selectedUserTasks = computed(() => {
        return this.tasksService.getTasksById(this.selectedUserId())();
    });

    doesUserHaveTasks = computed(() => this.selectedUserTasks().length > 0);

    onCompleteTask(id: number) {
        this.tasksService.removeTaskById(id);
    }

    onStartAddingTask() {
        this.isAddingTask.set(true);
    }

    onCancelAddingTask() {
        this.isAddingTask.set(false);
    }
}
