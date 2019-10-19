import { CadastrarProdutoPage } from './cadastrar-produto/cadastrar-produto.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-estoque',
    templateUrl: './estoque.page.html',
    styleUrls: ['./estoque.page.scss'],
})
export class EstoquePage implements OnInit {

    constructor(public modalCtrl: ModalController) { }

    ngOnInit() {
    }

    async addProduto() {
        let modal = await this.modalCtrl.create({ component: CadastrarProdutoPage, cssClass: 'modal-pequeno' });
        modal.present();
    }

}
