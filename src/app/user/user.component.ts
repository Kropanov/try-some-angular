import { Component, computed, input, Input, Signal, signal } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent {
    @Input({ required: true }) firstName!: string;
    lastName = input.required<string>();

    selectedUser = signal({
        id: 0,
        name: 'First name',
    });

    duplicateValue: Signal<String> = computed(() => 'duplicate/' + this.selectedUser().name);

    onSelectUser() {
        this.selectedUser.set({ id: 0, name: 'Some text1' });
    }
}
