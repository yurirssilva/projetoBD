import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscarProdutosPage } from './buscar-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarProdutosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscarProdutosPage]
})
export class BuscarProdutosPageModule {}
