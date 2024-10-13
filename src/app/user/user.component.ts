import { Component, input, output } from '@angular/core';
import { User } from '../types';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent {
    user = input.required<User>();
    select = output<number>();

    onSelectUser() {
        this.select.emit(this.user().id);
    }
}
