import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { USERS } from './data/users';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        UserComponent,
        TaskComponent,
        TasksComponent,
        NewTaskComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    users = signal(USERS);
    selectedUserId?: number;

    get selectedUser() {
        return this.users().find((user) => user.id === this.selectedUserId);
    }

    onSelectUser(id: number) {
        this.selectedUserId = id;
    }
}
