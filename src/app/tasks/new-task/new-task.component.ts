import { Component, ElementRef, inject, input, OnDestroy, output, signal, viewChild, ViewChild } from '@angular/core';
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
export class NewTaskComponent implements OnDestroy {
    // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
    form = viewChild.required<ElementRef<HTMLFormElement>>('form');

    selectedUserId = input.required<number>();
    selectedUserName = input.required<string>();

    cancel = output<void>();
    tasksService = inject(TasksService);

    onCancelTask() {
        this.cancel.emit();
    }

    onSubmit(enteredTitle: HTMLInputElement, enteredDate: HTMLInputElement, enteredDescription: HTMLInputElement) {
        const taskData = {
            title: enteredTitle.value,
            date: enteredDate.value,
            description: enteredDescription.value,
        };

        this.tasksService.addTask(taskData, this.selectedUserId());
        this.form().nativeElement.reset();
        // this.form?.nativeElement.reset();
        this.cancel.emit();
    }

    ngOnDestroy(): void {
        console.log('Destroy form!');
    }
}
