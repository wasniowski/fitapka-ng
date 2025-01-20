import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
    selector: 'fa-summary',
    standalone: true,
    imports: [CommonModule, UserInfoComponent],
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {}
