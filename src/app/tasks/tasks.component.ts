import { Component, computed, input, signal } from '@angular/core';
import { TASKS } from '../data/tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { Task, TaskFormData } from '../types';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss',
})
export class TasksComponent {
    tasks = signal<Task[]>(TASKS);
    isAddingTask = signal(false);

    selectedUserName = input.required();
    selectedUserId = input.required<number>();

    selectedUserTasks = computed(() => {
        return this.tasks().filter((task) => task.userId === this.selectedUserId());
    });

    doesUserHaveTasks = computed(() => this.selectedUserTasks().length > 0);

    onCompleteTask(id: number) {
        this.tasks.set(this.tasks().filter((task) => task.id !== id));
    }

    onStartAddingTask() {
        this.isAddingTask.set(true);
    }

    onCancelAddingTask() {
        this.isAddingTask.set(false);
    }

    addNewTask(data: TaskFormData) {
        const task: Task = {
            id: new Date().getTime(),
            userId: this.selectedUserId(),
            title: data.title,
            date: data.date,
            description: data.description,
        };

        this.tasks.set([...this.tasks(), task]);
        this.isAddingTask.set(false);
    }
}
