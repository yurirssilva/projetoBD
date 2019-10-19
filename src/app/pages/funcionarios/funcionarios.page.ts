import { CadastrarSetorPage } from './cadastrar-setor/cadastrar-setor.page';
import { CadastrarFuncionarioPage } from './cadastrar-funcionario/cadastrar-funcionario.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-funcionarios',
    templateUrl: './funcionarios.page.html',
    styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage implements OnInit {

    constructor(
        public modalCtrl: ModalController
    ) { }

    ngOnInit() {
    }

    async addFuncionario() {
        let modal = await this.modalCtrl.create({ component: CadastrarFuncionarioPage, cssClass: 'modal-pequeno' })
        modal.present();
    }

    async addSetor() {
        let modal = await this.modalCtrl.create({ component: CadastrarSetorPage, cssClass: 'modal-pequeno' })
        modal.present();
    }
}
