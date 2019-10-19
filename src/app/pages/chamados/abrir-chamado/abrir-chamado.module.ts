import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbrirChamadoPage } from './abrir-chamado.page';

const routes: Routes = [
  {
    path: '',
    component: AbrirChamadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbrirChamadoPage]
})
export class AbrirChamadoPageModule {}
