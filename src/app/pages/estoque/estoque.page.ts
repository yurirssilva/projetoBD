import { ApiService } from './../../services/api.service';
import { CadastrarProdutoPage } from './cadastrar-produto/cadastrar-produto.page';
import { ModalController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-estoque',
    templateUrl: './estoque.page.html',
    styleUrls: ['./estoque.page.scss'],
})
export class EstoquePage implements OnInit {
    produtos = []
    constructor(
        public modalCtrl: ModalController,
        public loadingController: LoadingController,
        private api: ApiService
    ) { }

    ngOnInit() {
        this.buscarEstoque()
    }

    async addProduto() {
        let modal = await this.modalCtrl.create({ component: CadastrarProdutoPage, cssClass: 'modal-pequeno' });
        modal.present();
        modal.onDidDismiss().then(() => {
            this.buscarEstoque()
        })
    }

    async buscarEstoque() {
        let loading = await this.loadingController.create({ message: "Buscando produtos do estoque..." })
        loading.present();

        let produtos = await this.api.get('produtos')
        loading.dismiss()
        this.produtos = produtos
    }

}
