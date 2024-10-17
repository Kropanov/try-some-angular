import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../../types';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
    selectedUserId = input.required<number>();
    selectedUserName = input.required<string>();

    cancel = output<void>();
    tasksService = inject(TasksService);

    enteredTitle = signal('');
    enteredDate = signal('');
    enteredDescription = signal('');

    onCancelTask() {
        this.cancel.emit();
    }

    onSubmit() {
        const taskData = {
            title: this.enteredTitle(),
            date: this.enteredDate(),
            description: this.enteredDescription(),
        };

        this.tasksService.addTask(taskData, this.selectedUserId());
        this.cancel.emit();
    }
}
