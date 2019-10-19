import { ResolverChamadoPage } from './resolver-chamado/resolver-chamado.page';
import { AbrirChamadoPage } from './abrir-chamado/abrir-chamado.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chamados',
    templateUrl: './chamados.page.html',
    styleUrls: ['./chamados.page.scss'],
})
export class ChamadosPage implements OnInit {

    constructor(
        public modalCtrl: ModalController
    ) { }

    ngOnInit() {
    }
    async addChamado() {
        let modal = await this.modalCtrl.create({ component: AbrirChamadoPage, cssClass: 'modal-pequeno' })
        modal.present()
    }
    async resolverChamado() {
        let modal = await this.modalCtrl.create({ component: ResolverChamadoPage, cssClass: 'modal-pequeno' })
        modal.present()
    }

}
