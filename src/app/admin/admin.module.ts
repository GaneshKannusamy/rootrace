import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin-routing.module';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    QRCodeModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class AdminModule { }
