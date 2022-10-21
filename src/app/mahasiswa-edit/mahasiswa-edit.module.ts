import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahasiswaEditPageRoutingModule } from './mahasiswa-edit-routing.module';

import { MahasiswaEditPage } from './mahasiswa-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahasiswaEditPageRoutingModule
  ],
  declarations: [MahasiswaEditPage]
})
export class MahasiswaEditPageModule {}
