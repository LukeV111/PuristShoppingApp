import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProductInCartPage } from './edit-product-in-cart';

@NgModule({
  declarations: [
    EditProductInCartPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProductInCartPage),
  ],
})
export class EditProductInCartPageModule {}
