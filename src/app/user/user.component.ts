import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent {
    selectedUser = {
        id: 0,
        name: 'Fin Cry',
    };

    onSelectUser() {
        console.log('Click!');
    }
}
