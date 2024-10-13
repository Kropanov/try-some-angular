import { Component, computed, signal } from '@angular/core';
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
    selectedUserId = signal<number>(1);

    selectedUser = computed(() => this.users.find((user) => user.id === this.selectedUserId()));

    onSelectUser(id: number) {
        this.selectedUserId.set(id);
    }
}
