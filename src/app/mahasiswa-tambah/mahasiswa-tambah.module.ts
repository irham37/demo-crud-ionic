import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahasiswaTambahPageRoutingModule } from './mahasiswa-tambah-routing.module';

import { MahasiswaTambahPage } from './mahasiswa-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahasiswaTambahPageRoutingModule
  ],
  declarations: [MahasiswaTambahPage]
})
export class MahasiswaTambahPageModule {}
