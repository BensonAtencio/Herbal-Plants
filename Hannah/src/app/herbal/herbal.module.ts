import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HerbalPageRoutingModule } from './herbal-routing.module';
import { HerbalPage } from './herbal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerbalPageRoutingModule
  ],
  declarations: [HerbalPage]
})
export class HerbalPageModule {}
