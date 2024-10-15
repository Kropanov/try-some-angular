import { Component, output } from '@angular/core';

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
    add = output<void>();
    cancel = output<void>();

    onAddTask() {
        this.add.emit();
    }

    onCancelTask() {
        this.cancel.emit();
    }
}
