import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskFormData } from '../../types';

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
    add = output<TaskFormData>();
    cancel = output<void>();

    enteredTitle = signal('');
    enteredDate = signal('');
    enteredDescription = signal('');

    onCancelTask() {
        this.cancel.emit();
    }

    onSubmit() {
        this.add.emit({
            title: this.enteredTitle(),
            date: this.enteredDate(),
            description: this.enteredDescription(),
        });
    }
}
