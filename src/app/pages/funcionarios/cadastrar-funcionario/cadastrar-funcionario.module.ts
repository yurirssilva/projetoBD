import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarFuncionarioPage } from './cadastrar-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarFuncionarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarFuncionarioPage]
})
export class CadastrarFuncionarioPageModule {}
