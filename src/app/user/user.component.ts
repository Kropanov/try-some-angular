import { Component, computed, Signal, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent {
    selectedUser = signal({
        id: 0,
        name: 'First name',
    });

    duplicateValue: Signal<String> = computed(() => 'duplicate/' + this.selectedUser().name);

    onSelectUser() {
        this.selectedUser.set({ id: 0, name: 'Some text1' });
    }
}
