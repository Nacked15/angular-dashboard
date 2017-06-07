import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    NotificationComponent,
    ChatComponent
} from './components';


@NgModule({
    imports: [
        CommonModule,
        // NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
    ],
    declarations: [
        DashboardComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class DashboardModule { }
