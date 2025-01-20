import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
    selector: 'fa-sidebar',
    standalone: true,
    imports: [CommonModule, UserInfoComponent],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {}
