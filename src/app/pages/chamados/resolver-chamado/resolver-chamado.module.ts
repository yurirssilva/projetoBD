import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResolverChamadoPage } from './resolver-chamado.page';

const routes: Routes = [
  {
    path: '',
    component: ResolverChamadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResolverChamadoPage]
})
export class ResolverChamadoPageModule {}
