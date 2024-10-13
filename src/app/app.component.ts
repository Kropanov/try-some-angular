import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { USERS } from './data/users';
import { TaskComponent } from './task/task.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    users = USERS;
    selectedUser = signal({ id: 0, name: '' });

    onSelectUser(id: number) {
        const res = this.users.filter((user) => user.id === id);
        this.selectedUser.set(res[0]);
    }
}
