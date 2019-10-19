import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cadastrar-setor',
    templateUrl: './cadastrar-setor.page.html',
    styleUrls: ['./cadastrar-setor.page.scss'],
})
export class CadastrarSetorPage implements OnInit {
    setor = {
        nome: '',
        código: null
    }
    constructor(
        public modalCtrl: ModalController
    ) { }

    ngOnInit() {
    }

    fechar() {
        this.modalCtrl.dismiss()
    }

    salvar() {

    }
}
