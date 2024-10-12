import { Component, computed, input, Input, InputSignal, output, Signal, signal } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent {
    id = input.required<number>();
    name = input.required<string>();
    select = output<InputSignal<number>>();

    onSelectUser() {
        this.select.emit(this.id);
    }
}
