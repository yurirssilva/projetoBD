import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscarFuncionarioPage } from './buscar-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarFuncionarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscarFuncionarioPage]
})
export class BuscarFuncionarioPageModule {}
