import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminOrdersPage } from './admin-orders';

@NgModule({
  declarations: [
    AdminOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminOrdersPage),
  ],
})
export class AdminOrdersPageModule {}
