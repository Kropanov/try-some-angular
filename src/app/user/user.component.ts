import { Component, input, output } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent {
    user = input.required<{ id: number; name: string }>();
    select = output<number>();

    onSelectUser() {
        this.select.emit(this.user().id);
    }
}
