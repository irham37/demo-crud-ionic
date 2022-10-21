import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahasiswaTambahPage } from './mahasiswa-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: MahasiswaTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahasiswaTambahPageRoutingModule {}
