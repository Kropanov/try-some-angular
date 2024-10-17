import { Injectable, signal, computed } from '@angular/core';
import { TASKS } from '../data/tasks';
import { newTaskData, Task } from '../types';

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    private tasksSignal = signal(TASKS);

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasksSignal.set(JSON.parse(tasks));
        }
    }

    public getTasksById = (id: number) => computed(() => this.tasksSignal().filter((task) => task.userId === id));

    public removeTaskById(id: number) {
        this.tasksSignal.update((tasks) => tasks.filter((task) => task.id !== id));
        this.saveTasks();
    }

    public addTask(data: newTaskData, userId: number) {
        const task: Task = {
            id: new Date().getTime(),
            userId: userId,
            title: data.title,
            date: data.date,
            description: data.description,
        };

        this.tasksSignal.update((tasks) => [...tasks, task]);
        this.saveTasks();
    }

    public saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasksSignal()));
    }
}
