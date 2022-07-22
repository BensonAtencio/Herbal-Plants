import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AilmentsPageRoutingModule } from './ailments-routing.module';
import { AilmentsPage } from './ailments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AilmentsPageRoutingModule
  ],
  declarations: [AilmentsPage]
})
export class AilmentsPageModule {}
