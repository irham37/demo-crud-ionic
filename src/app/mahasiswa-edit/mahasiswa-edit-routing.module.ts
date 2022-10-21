import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahasiswaEditPage } from './mahasiswa-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MahasiswaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahasiswaEditPageRoutingModule {}
